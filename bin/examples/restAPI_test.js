"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO when we publish package we will import latest stable version and not using relative path
const sdk_1 = require("../src/sdk/sdk");
/*
  Demonstrates how to use LavaSDK to send rest API calls to the Juno Mainnet.

  You can find a list with all supported chains (https://github.com/lavanet/lava-sdk/blob/main/supportedChains.json)
*/
function getLatestBlockAndValidators() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create dAccess for Juno Mainnet
        // Default rpcInterface for Juno Mainnet is tendermintRPC
        // If you want to use rest it needs to be explicitly defined
        const lavaSDK = yield sdk_1.LavaSDK.create({
            // private key with an active subscription
            privateKey: "a7c60a15da4e0f58d28ad4f64d9ee0362f01e194923de5b8f23d555f7a906c2b",
            // chainID for Cosmos Hub
            chainIds: "LAV1",
            // geolocation 1 for North america - geolocation 2 for Europe providers
            // default value is 1
            geolocation: "1",
            pairingListConfig: "pairingList.json",
            lavaChainId: "lava",
            logLevel: "debug",
            allowInsecureTransport: true,
            // rpcInterface default is tendermintrpc / jsonrpc for respective chains.
            // in this example we want to test rest so we need to specify it
        });
        // Get latest block
        const latestBlock = yield lavaSDK.sendRelay({
            connectionType: "GET",
            url: "/cosmos/base/tendermint/v1beta1/node_info",
        });
        // Get latest validator-set
        const validators = yield lavaSDK.sendRelay({
            connectionType: "GET",
            url: "/cosmos/base/tendermint/v1beta1/validatorsets/latest",
            data: {
                "pagination.count_total": true,
                "pagination.reverse": "true",
            },
        });
        return [latestBlock, validators];
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [latestBlock, validators] = yield getLatestBlockAndValidators();
            console.log("Latest block:", latestBlock);
            console.log("Latest validators:", validators);
            process.exit(0);
        }
        catch (error) {
            console.error("Error getting latest block:", error);
            process.exit(1);
        }
    });
})();
