"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPacketMaker = exports.closePacketMaker = exports.continuePacketMaker = exports.connectPacketParser = exports.wispFrameParser = void 0;
const Types_1 = require("./Types");
function wispFrameParser(data) {
    const uint8arrayView = new Uint8Array(data);
    const dataView = new DataView(uint8arrayView.buffer);
    const type = dataView.getUint8(0);
    let streamID = dataView.getUint32(1, true);
    let payload = uint8arrayView.slice(5, uint8arrayView.byteLength);
    return {
        type,
        streamID,
        payload,
    };
}
exports.wispFrameParser = wispFrameParser;
function connectPacketParser(payload) {
    const dataview = new DataView(payload.buffer);
    const streamType = dataview.getUint8(0); // for future use, makes it easier to retrofit UDP support
    const port = dataview.getUint16(1, true);
    const hostname = new TextDecoder("utf8").decode(dataview.buffer.slice(3, dataview.buffer.byteLength));
    return {
        dataview,
        streamType,
        port,
        hostname,
    };
}
exports.connectPacketParser = connectPacketParser;
function continuePacketMaker(wispFrame, queue) {
    const initialPacket = new DataView(new Uint8Array(9).buffer);
    initialPacket.setUint8(0, Types_1.CONNECT_TYPE.CONTINUE);
    initialPacket.setUint32(1, wispFrame.streamID, true);
    initialPacket.setUint32(5, queue, true);
    return initialPacket.buffer;
}
exports.continuePacketMaker = continuePacketMaker;
function closePacketMaker(wispFrame, reason) {
    const closePacket = new DataView(new Uint8Array(9).buffer);
    closePacket.setUint8(0, Types_1.CONNECT_TYPE.CLOSE);
    closePacket.setUint32(1, wispFrame.streamID, true);
    closePacket.setUint8(5, reason);
    return closePacket.buffer;
}
exports.closePacketMaker = closePacketMaker;
function dataPacketMaker(wispFrame, data) {
    // Only function here that returns a node buffer instead ArrayBufferLike
    // Packet header creation
    const dataPacketHeader = new DataView(new Uint8Array(5).buffer);
    dataPacketHeader.setUint8(0, Types_1.CONNECT_TYPE.DATA);
    dataPacketHeader.setUint32(1, wispFrame.streamID, true); // Technically should be uint32 little endian, but libcurl bug
    // Combine the data and the packet header and send to client
    return Buffer.concat([Buffer.from(dataPacketHeader.buffer), data]);
}
exports.dataPacketMaker = dataPacketMaker;
exports.default = {
    wispFrameParser,
    connectPacketParser,
    continuePacketMaker,
    closePacketMaker,
    dataPacketMaker,
};
//# sourceMappingURL=Packets.js.map