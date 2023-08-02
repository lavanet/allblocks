"use client";

import { LavaSDK } from "@lavanet/lava-sdk";
import { useState, useEffect, useRef } from "react";
import { Card, Title, Tracker, Flex, Text, Color, Badge } from "@tremor/react";

interface RelayParseFunc {
    (res: string): number;
}

const evmRelayParse = (res: string): number => {
    const ret = JSON.parse(res);
    return Number(ret["result"]);
}

const cosmosRelayParse = (res: string): number => {
    const ret = JSON.parse(res);
    return Number(ret["block"]["header"]["height"]);
}

const aptosRelayParse = (res: string): number => {
    const ret = JSON.parse(res);
    return Number(ret["block_height"]);
}

const starkRelayParse = (res: string): number => {
    const ret = JSON.parse(res);
    return Number(ret["result"]);
}

const solanaRelayParse = (res: string): number => {
    const ret = JSON.parse(res);
    return Number(ret["result"]);
}

const parseToFunc: { [name: string]: RelayParseFunc } = {
    'evmRelayParse': evmRelayParse,
    'cosmosRelayParse': cosmosRelayParse,
    'aptosRelayParse': aptosRelayParse,
    'starkRelayParse': starkRelayParse,
    'solanaRelayParse': solanaRelayParse,
}

interface Tracker {
    color: Color;
    tooltip: string;
}

export const Chain = (props: any) => {
    const trackerSz = props.trkSz;
    const initialData = Array(trackerSz).fill({ color: "gray", tooltip: "N/A" });
    const [data, setData] = useState<Tracker[]>(initialData);
    const [msAvg, setMsAvg] = useState(0);
    const [msAvgCount, setMsAvgCount] = useState(0);
    const blocktime = props.blockTimeSeconds * 1000;
    const currentSlotRef = useRef(0);

    const [sdkInstance, setSdkInstance] = useState<null | LavaSDK>(null);
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
            setMsAvg(((msAvg*msAvgCount) + latency) / (msAvgCount + 1))
            setMsAvgCount(msAvgCount + 1)

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

    useEffect(() => {
        const initSdk = async () => {
            try {
                const t0 = performance.now();
                const t = await new LavaSDK(props.sdkConfig);
                const t1 = performance.now();
                setSdkLoadTime(t1 - t0);
                setSdkInstance(t);
            } catch (err) {
                console.log("error starting sdk", err);
            }
        };
        initSdk();
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
                {
                    props.testnet === ""
                        ?
                        <Badge size="lg" color="green">Mainnet</Badge>
                        :
                        <Badge size="lg" color="red">{props.testnet}</Badge>
                }
            </Flex>
            <Text>
                SDK load time{" "}
                {sdkLoadTime > 0 ? `${Math.trunc(sdkLoadTime)}ms` : "- loading"}
            </Text>
            <Title className="text-lg">
                Block {block > 0 ? block : '- loading'}
            </Title>
            <Flex justifyContent="end" className="mt-4">
                <Badge size="sm" className="mr-2">
                    {msAvg != 0 ?
                        `Avg. ${Math.trunc(msAvg)}ms`
                        :
                        "Loading"
                    }
                </Badge>
            </Flex>
            <Tracker data={data} className="mt-2" />
        </Card>
    );
}
