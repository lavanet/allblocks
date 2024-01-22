"use client";

import { Grid, Text, Title } from "@tremor/react";
import { useState, useEffect } from "react";
import { TabList, Tab, TabGroup, TabPanels, TabPanel } from "@tremor/react";
import { Chain } from "./chain";
import { LavaSDK } from "@lavanet/lava-sdk";

import {
  LavaSDKOptions,
  SendRelayOptions,
  SendRestRelayOptions,
} from "@lavanet/lava-sdk";

interface ChainDesc {
  name: string;
  chainId: string;
  rpcInterface: string;
  blockTimeSeconds: number;
  testnet: string;
  relay: SendRelayOptions | SendRestRelayOptions;
  relayParse: string;
}

const getRelay = (chainId: string, relay: any) => {
  let newRelay = structuredClone(relay);
  newRelay.chainId = chainId;
  return newRelay;
};

const evmRelay = {
  method: "eth_blockNumber",
  params: [],
  apiInterface: "jsonrpc",
};

const nearRelay = {
  method: "block",
  params: {"finality":"final"},
  apiInterface: "jsonrpc",
};

const cosmosRelay = {
  connectionType: "GET",
  url: "/cosmos/base/tendermint/v1beta1/blocks/latest",
};

const aptosRelay = {
  connectionType: "GET",
  url: "/",
};

const starkRelay = {
  method: "starknet_blockNumber",
  params: [],
};

const solanaRelay = {
  method: "getBlockHeight",
  params: [],
};

const chains: Array<ChainDesc> = [
  {
    name: "Ethereum",
    chainId: "ETH1",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 12,
    testnet: "",
    relay: getRelay("ETH1", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Near",
    chainId: "NEAR",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 1,
    testnet: "",
    relay: getRelay("NEAR", nearRelay),
    relayParse: "nearRelayParse",
  },
  {
    name: "Aptos",
    chainId: "APT1",
    rpcInterface: "rest",
    blockTimeSeconds: 1,
    testnet: "",
    relay: getRelay("APT1", aptosRelay),
    relayParse: "aptosRelayParse",
  },
  {
    name: "Solana",
    chainId: "SOLANA",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 1,
    testnet: "",
    relay: getRelay("SOLANA", solanaRelay),
    relayParse: "solanaRelayParse",
  },
  {
    name: "Cosmos Hub",
    chainId: "COS5",
    rpcInterface: "rest",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("COS5", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Osmosis",
    chainId: "COS3",
    rpcInterface: "rest",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("COS3", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Lava",
    chainId: "LAV1",
    rpcInterface: "rest",
    blockTimeSeconds: 30,
    testnet: "Testnet",
    relay: getRelay("LAV1", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Juno",
    chainId: "JUN1",
    rpcInterface: "rest",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("JUN1", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Fantom",
    chainId: "FTM250",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("FTM250", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Celo",
    chainId: "CELO",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 5,
    testnet: "",
    relay: getRelay("CELO", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Arbitrum",
    chainId: "ARB1",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 1,
    testnet: "",
    relay: getRelay("ARB1", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Arb-Nova",
    chainId: "ARBN",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 1,
    testnet: "",
    relay: getRelay("ARBN", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Polygon",
    chainId: "POLYGON1",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("POLYGON1", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Evmos",
    chainId: "EVMOS",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("EVMOS", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Axelar",
    chainId: "AXELAR",
    rpcInterface: "rest",
    blockTimeSeconds: 6,
    testnet: "",
    relay: getRelay("AXELAR", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Optimism",
    chainId: "OPTM",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 2,
    testnet: "",
    relay: getRelay("OPTM", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Avalanche",
    chainId: "AVAX",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("AVAX", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Base",
    chainId: "BASE",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 2,
    testnet: "",
    relay: getRelay("BASE", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Filecoin",
    chainId: "FVM",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("FVM", evmRelay),
    relayParse: "evmRelayParse",
  },
  /*{
    name: "Near",
    chainId: "NEART",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 1,
    testnet: "Testnet",
    relay: getRelay("NEART", nearRelay),
    relayParse: "nearRelayParse",
  },

  {
    name: "Base",
    chainId: "BASET",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 2,
    testnet: "Testnet",
    relay: getRelay("BASET", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Starknet",
    chainId: "STRK",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 30,
    testnet: "",
    relay: getRelay("STRK", starkRelay),
    relayParse: "starkRelayParse",
  },*/
  /*{
    name: "Berachain",
    chainId: "BERAT",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 2,
    testnet: "Testnet",
    relay: getRelay("BERAT", evmRelay),
    relayParse: "evmRelayParse",
  },*/
  /*{
    name: "Solana",
    chainId: "SOLANAT",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 1,
    testnet: "Testnet",
    relay: getRelay("SOLANAT", solanaRelay),
    relayParse: "solanaRelayParse",
  },
  {
    name: "Cosmos Hub",
    chainId: "COS5T",
    rpcInterface: "rest",
    blockTimeSeconds: 3,
    testnet: "Testnet",
    relay: getRelay("COS5T", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Osmosis",
    chainId: "COS4",
    rpcInterface: "rest",
    blockTimeSeconds: 3,
    testnet: "Testnet",
    relay: getRelay("COS4", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Juno",
    chainId: "JUNT1",
    rpcInterface: "rest",
    blockTimeSeconds: 3,
    testnet: "Testnet",
    relay: getRelay("JUNT1", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Ethereum",
    chainId: "GTH1",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 12,
    testnet: "Goerli",
    relay: getRelay("GTH1", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Ethereum",
    chainId: "SEP1",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 12,
    testnet: "Sepolia",
    relay: getRelay("SEP1", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Celo",
    chainId: "ALFAJORES",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 5,
    testnet: "Alfajores",
    relay: getRelay("ALFAJORES", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Polygon",
    chainId: "POLYGON1T",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "Testnet",
    relay: getRelay("POLYGON1T", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Evmos",
    chainId: "EVMOST",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "Testnet",
    relay: getRelay("EVMOST", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Optimism",
    chainId: "OPTMT",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 2,
    testnet: "Testnet",
    relay: getRelay("OPTMT", evmRelay),
    relayParse: "evmRelayParse",
  },
  {
    name: "Axelar",
    chainId: "AXELART",
    rpcInterface: "rest",
    blockTimeSeconds: 6,
    testnet: "Testnet",
    relay: getRelay("AXELART", cosmosRelay),
    relayParse: "cosmosRelayParse",
  },
  {
    name: "Canto",
    chainId: "CANTO",
    rpcInterface: "jsonrpc",
    blockTimeSeconds: 3,
    testnet: "",
    relay: getRelay("CANTO", evmRelay),
    relayParse: "evmRelayParse",
  },*/
];

const testnet = "testnet";

const trkSz = 16;
const sdkTestnetConfig: LavaSDKOptions = {
  badge: {
    badgeServerAddress: process.env.NEXT_PUBLIC_BADGE_SERVER_ADDRESS || "",
    projectId: process.env.NEXT_PUBLIC_BADGE_PROJECT_ID || "",
  },
  chainIds: "",
};

export default function Home() {
  const [filter, setFilter] = useState('');

  const [sdkInstance, setSdkInstance] = useState<null | LavaSDK>(null);
  const [sdkLoadTime, setSdkLoadTime] = useState(0);

  useEffect(() => {
    const sdkInit = async () => {
      let config = structuredClone(sdkTestnetConfig);
      let chainIdArray = [] as any;
      chains.map((chain) => {
        chainIdArray.push(chain.chainId);
      });
      config.chainIds = chainIdArray as any;
      
      //
      let t;
      try {
        const t0 = performance.now();
        t = await LavaSDK.create(config);
        const t1 = performance.now();
        setSdkLoadTime((t1 - t0)/1000);
        setSdkInstance(t);
      } catch (err) {
        console.error("Error initializing SDK for chain:", err);
      }
    };

    sdkInit();
  }, []);

  const filterChain = (f: string) => {
    if (f == filter) {
      setFilter('');
    } else {
      setFilter(f);
    }
  }

  return (
    <main className="container mx-auto p-8 max-w-5xl">
      <Title>All blocks</Title>
      <Text>
        Show latest blocks from all chains, with latency and uptime info.
        <br/>
        {sdkLoadTime == 0 ? 'Loading Sdk...' : `SDK load time ${sdkLoadTime}s.`}
      </Text>
      <TabGroup>
        <TabList className="mt-8">
          <Tab>Chains</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={3} className="mt-6 gap-6">
              {sdkInstance && chains.map((chain) => {
                if (
                  (filter == '') ||
                  ((filter != '') &&
                  (chain.chainId == filter))
                  ) {
                  return (
                    <Chain
                      key={chain.chainId}
                      chainId={chain.chainId}
                      name={chain.name}
                      testnet={chain.testnet}
                      relay={chain.relay}
                      relayParse={chain.relayParse}
                      trkSz={trkSz}
                      blockTimeSeconds={chain.blockTimeSeconds}
                      sdkInstance={sdkInstance}
                      env={testnet}
                      filterChain={filterChain}
                    />
                  )
                }
              })}
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
