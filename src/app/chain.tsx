"use client";

import { useState, useEffect, useRef } from "react";
import { Card, Title, Tracker, Flex, Color, Badge, Icon } from "@tremor/react";
import { HandIcon } from "@heroicons/react/outline";

interface RelayParseFunc {
  (res: string): number;
}

const evmRelayParse = (res: any): number => {
  return Number(res["result"]);
};

const nearRelayParse = (res: any): number => {
  return Number(res["result"]["header"]["height"]);
};

const cosmosRelayParse = (res: any): number => {
  return Number(res["block"]["header"]["height"]);
};

const aptosRelayParse = (res: any): number => {
  return Number(res["block_height"]);
};

const starkRelayParse = (res: any): number => {
  return Number(res["result"]);
};

const solanaRelayParse = (res: any): number => {
  return Number(res["result"]);
};

const parseToFunc: { [name: string]: RelayParseFunc } = {
  evmRelayParse: evmRelayParse,
  nearRelayParse: nearRelayParse,
  cosmosRelayParse: cosmosRelayParse,
  aptosRelayParse: aptosRelayParse,
  starkRelayParse: starkRelayParse,
  solanaRelayParse: solanaRelayParse,
};

interface Tracker {
  color: Color;
  tooltip: string;
}

export const Chain = (props: any) => {
  const blocktime = props.blockTimeSeconds * 1000;
  const [curSlot, setCurSlot] = useState(0);
  const initialData = Array(props.trkSz).fill({ color: "gray", tooltip: "N/A" });
  const [data, setData] = useState<Tracker[]>(initialData);
  const [msAvg, setMsAvg] = useState(0);
  const [msAvgCount, setMsAvgCount] = useState(0);
  const [curLatency, setCurLatency] = useState(0);
  const [block, setBlock] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      async () => {
        if (props.sdkInstance === null) {
          console.log("error");
          return;
        }

        let isErr = false;
        let latency = 0;
        try {
          const t0 = performance.now();
          const res = await props.sdkInstance.sendRelay(props.relay);
          const t1 = performance.now();
          latency = t1 - t0;
          setCurLatency(latency);

          //
          const block = parseToFunc[props.relayParse](res);
          setBlock(block);
          setMsAvg(prevAvg => (prevAvg * msAvgCount + latency) / (msAvgCount + 1));
          setMsAvgCount(prevCount => prevCount + 1);
        } catch (err) {
          console.log("error sending relay", err);
          isErr = true;
          setCurLatency(1000);
        }

        setData((prevData) => {
          const newData = [...prevData];
          const slot = curSlot;
          const nextSlot = (slot + 1) % props.trkSz;

          if (!isErr) {
            newData[slot] = {
              color: "emerald",
              tooltip: `${Math.trunc(latency)}ms`,
            };
          } else {
            newData[slot] = {
              color: "red",
              tooltip: "Error",
            }
          }
          newData[nextSlot] = {
            color: "yellow",
            tooltip: "Next...",
          }

          // Update current slot, wrapping around if necessary
          setCurSlot(nextSlot);
          return [...newData]
        });

      }
      , (curLatency > blocktime) || (curLatency == 0) ? 0 : blocktime - curLatency);
    return () => clearInterval(interval);
  }, [
    curSlot,
    props.sdkInstance,
    props.relay,
    props.relayParse,
    props.trkSz,
    blocktime,
    msAvgCount,
    curLatency,
  ]);

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
