"use client";

import { LavaSDK } from "@lavanet/lava-sdk";
import { useState, useEffect, useRef } from "react";
import { Card, Title, Tracker, Flex, Text, Color, Badge, Icon } from "@tremor/react";
import { HandIcon } from "@heroicons/react/outline";

interface RelayParseFunc {
  (res: string): number;
}

const evmRelayParse = (res: string): number => {
  let ret;
  try {
    ret = JSON.parse(res);
  } catch (error) {
    console.log("evmRelayParse", error, res)
  }
  return Number(ret["result"]);
};

const cosmosRelayParse = (res: string): number => {
  let ret;
  try {
    ret = JSON.parse(res);
  } catch (error) {
    console.log("cosmosRelayParse", error, res)
  }
  return Number(ret["block"]["header"]["height"]);
};

const aptosRelayParse = (res: string): number => {
  let ret;
  try {
    ret = JSON.parse(res);
  } catch (error) {
    console.log("aptosRelayParse", error, res)
  }
  return Number(ret["block_height"]);
};

const starkRelayParse = (res: string): number => {
  let ret;
  try {
    ret = JSON.parse(res);
  } catch (error) {
    console.log("starkRelayParse", error, res)
  }
  return Number(ret["result"]);
};

const solanaRelayParse = (res: string): number => {
  let ret;
  try {
    ret = JSON.parse(res);
  } catch (error) {
    console.log("solanaRelayParse", error, res)
  }
  return Number(ret["result"]);
};

const parseToFunc: { [name: string]: RelayParseFunc } = {
  evmRelayParse: evmRelayParse,
  cosmosRelayParse: cosmosRelayParse,
  aptosRelayParse: aptosRelayParse,
  starkRelayParse: starkRelayParse,
  solanaRelayParse: solanaRelayParse,
};

interface Tracker {
  color: Color;
  tooltip: string;
}

interface SdkInitQueueItem {
  sdkConfig: any; // Replace 'any' with the actual type if known
  env: string;
  name: string;
  setSdkInstance: (instance: any) => void;
  setSdkLoadTime: (instance: any) => void;
}

interface ChainProps {
  sdkConfig: any; // Replace 'any' with the actual type if known
  env: string;
  name: string;
  relay: any; // Replace 'any' with the actual type if known
  relayParse: string;
  trkSz: number;
  blockTimeSeconds: number;
  testnet: string;
}

const sdkInitQueue: SdkInitQueueItem[] = [];
let isProcessingQueue = false;

export const Chain = (props: any) => {
  const trackerSz = props.trkSz;
  const initialData = Array(trackerSz).fill({ color: "gray", tooltip: "N/A" });
  const [data, setData] = useState<Tracker[]>(initialData);
  const [msAvg, setMsAvg] = useState(0);
  const [msAvgCount, setMsAvgCount] = useState(0);
  const blocktime = props.blockTimeSeconds * 1000;
  const currentSlotRef = useRef(0);
  const [selectedChain, setSelectedChain] = useState('');

  const [sdkInstance, setSdkInstance] = useState<null | LavaSDK>(
    null
  );
  const [block, setBlock] = useState(0);
  const [sdkLoadTime, setSdkLoadTime] = useState(0);

  const sdkInstanceRef = useRef<null | LavaSDK>(null);
  const [getBlockNow, setGetBlockNow] = useState(0);

  const getBlock = async () => {
    if (sdkInstanceRef.current === null) {
      console.log("error");
      return;
    }

    try {
      const t0 = performance.now();
      const res = await sdkInstanceRef.current.sendRelay(props.relay);
      const t1 = performance.now();
      const latency = t1 - t0;
      //
      const block = parseToFunc[props.relayParse](res);
      setBlock(block);
      setMsAvg((msAvg * msAvgCount + latency) / (msAvgCount + 1));
      setMsAvgCount(msAvgCount + 1);

      setData((prevData) => {
        // Reset the data if all slots are filled
        var newData = [...prevData];
        if (currentSlotRef.current === 0) {
          newData = [...initialData];
        }

        const slot = currentSlotRef.current;
        newData[slot] = {
          color: "emerald",
          tooltip: `${Math.trunc(latency)}ms`,
        };
        // Update current slot, wrapping around if necessary
        currentSlotRef.current = (currentSlotRef.current + 1) % trackerSz;
        return newData;
      });
    } catch (err) {
      console.log("error sending relay", err);

      setData((prevData) => {
        var newData = [...prevData];
        if (currentSlotRef.current === 0) {
          newData = [...initialData];
        }
        const slot = currentSlotRef.current;
        newData[slot] = {
          color: "red",
          tooltip: "Error",
        };
        // Update current slot, wrapping around if necessary
        currentSlotRef.current = (currentSlotRef.current + 1) % trackerSz;
        return newData;
      });
    }

    setTimeout(() => {
      setGetBlockNow(getBlockNow + 1);
    }, blocktime);
  };

  const processSdkInitQueue = async () => {
    if (sdkInitQueue.length === 0) {
      isProcessingQueue = false;
      return;
    }

    isProcessingQueue = true;

    const chainProps = sdkInitQueue.shift();
    let t;
    try {
      const t0 = performance.now();
      t = await new LavaSDK(chainProps!.sdkConfig);
      const t1 = performance.now();
      chainProps!.setSdkLoadTime(t1 - t0);
      chainProps!.setSdkInstance(t);
    } catch (err) {
      console.error("Error initializing SDK for chain:", chainProps!.name, err);
    }

    // Continue processing the next chain in the queue
    processSdkInitQueue();
  };

  useEffect(() => {
    // Add the chain to the SDK initialization queue
    sdkInitQueue.push({
      sdkConfig: props.sdkConfig,
      env: props.env,
      name: props.name,
      setSdkInstance: setSdkInstance,
      setSdkLoadTime: setSdkLoadTime,
    });

    // Start processing the queue if not already running
    if (!isProcessingQueue) {
      processSdkInitQueue();
    }
  }, []);

  useEffect(() => {
    sdkInstanceRef.current = sdkInstance;
    if (sdkInstance) {
      // Start polling only after sdkInstance is set
      getBlock();
    }
  }, [sdkInstance]);

  useEffect(() => {
    if (sdkInstanceRef.current) {
      getBlock();
    }
  }, [getBlockNow]);

  return (
    <Card className="mx-auto">
      <Flex justifyContent="between" alignItems="center">
        <Title>
          {props.name}
        </Title>
        <div>
          {props.testnet === "" ? (
            <Badge size="lg" color="green">
              Mainnet
            </Badge>
          ) : (
            <Badge size="lg" color="red">
              {props.testnet}
            </Badge>
          )}
          <Icon icon={HandIcon} onClick={() => props.filterChain(props.chainId)} size="xs" className="cursor-pointer" variant="solid" />
        </div>
      </Flex>
      <Text>
        SDK load time{" "}
        {sdkLoadTime > 0 ? `${Math.trunc(sdkLoadTime)}ms` : "- loading"}
      </Text>
      <Title className="text-lg">Block {block > 0 ? block : "- loading"}</Title>
      <Flex justifyContent="end" className="mt-4">
        <Badge size="sm" className="mr-2">
          {msAvg != 0 ? `Avg. ${Math.trunc(msAvg)}ms` : "Loading"}
        </Badge>
      </Flex>
      <Tracker data={data} className="mt-2" />
    </Card>
  );
};
