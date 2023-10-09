"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedMessage = void 0;
const common_1 = require("../common/common");
class ParsedMessage {
    constructor(api, requestedBlock, msg, apiCollection, messageData, messageUrl, extensions) {
        this.api = api;
        this.requestedBlock = requestedBlock;
        this.msg = msg;
        this.apiCollection = apiCollection;
        this.messageData = messageData;
        this.messageUrl = messageUrl !== null && messageUrl !== void 0 ? messageUrl : "";
        this.extensions = extensions !== null && extensions !== void 0 ? extensions : [];
    }
    getRawRequestData() {
        return { url: this.messageUrl, data: this.messageData };
    }
    appendHeader(metadata) {
        this.msg.appendHeader(metadata);
    }
    getApi() {
        return this.api;
    }
    getApiCollection() {
        return this.apiCollection;
    }
    getRequestedBlock() {
        return this.requestedBlock;
    }
    getRPCMessage() {
        return this.msg;
    }
    updateLatestBlockInMessage(latestBlock, modifyContent) {
        const requestedBlock = this.getRequestedBlock();
        if (latestBlock <= common_1.NOT_APPLICABLE || requestedBlock !== common_1.LATEST_BLOCK) {
            return false;
        }
        const success = this.msg.updateLatestBlockInMessage(latestBlock, modifyContent);
        if (success) {
            this.requestedBlock = latestBlock;
            return true;
        }
        return false;
    }
    getExtensions() {
        return this.extensions;
    }
    setExtension(extension) {
        if (this.extensions.length > 0) {
            for (const ext of this.extensions) {
                if (ext.getName() === extension.getName()) {
                    // Already existing, no need to add
                    return;
                }
            }
            this.extensions.push(extension);
        }
        else {
            this.extensions = [extension];
        }
    }
}
exports.ParsedMessage = ParsedMessage;
