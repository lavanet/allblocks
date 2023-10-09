"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMessage = void 0;
const relay_pb_1 = require("../../grpc_web_services/lavanet/lava/pairing/relay_pb");
class BaseMessage {
    constructor() {
        this.headers = [];
    }
    initBaseMessage({ headers = [], latestBlockHeaderSetter, }) {
        this.headers = headers !== null && headers !== void 0 ? headers : [];
        this.latestBlockHeaderSetter = latestBlockHeaderSetter;
    }
    appendHeader(metadata) {
        const existing = {};
        for (const metadataEntry of this.headers) {
            existing[metadataEntry.getName()] = true;
        }
        for (const metadataEntry of metadata) {
            if (!existing[metadataEntry.getName()]) {
                this.headers.push(metadataEntry);
            }
        }
    }
    setLatestBlockWithHeader(latestBlock, modifyContent) {
        if (!this.latestBlockHeaderSetter) {
            return false;
        }
        const headerValue = `${this.latestBlockHeaderSetter.getFunctionTemplate()}${latestBlock}`;
        for (let idx = 0; idx < this.headers.length; idx++) {
            const header = this.headers[idx];
            if (header.getName() === this.latestBlockHeaderSetter.getApiName()) {
                if (modifyContent) {
                    this.headers[idx].setValue(headerValue);
                }
                return true;
            }
        }
        if (modifyContent) {
            const metadata = new relay_pb_1.Metadata();
            metadata.setName(this.latestBlockHeaderSetter.getApiName());
            metadata.setValue(headerValue);
            this.headers.push(metadata);
        }
        return true;
    }
    getHeaders() {
        return this.headers;
    }
}
exports.BaseMessage = BaseMessage;
