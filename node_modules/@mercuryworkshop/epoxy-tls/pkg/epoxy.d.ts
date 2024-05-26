declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	*/
	export function init(): void;
	/**
	* @returns {any}
	*/
	export function certs(): any;
	/**
	*/
	export class EpoxyClient {
	/**
	** Return copy of self without private attributes.
	*/
	  toJSON(): Object;
	/**
	* Return stringified version of self.
	*/
	  toString(): string;
	  free(): void;
	/**
	* @param {string} ws_url
	* @param {string} useragent
	* @param {number} redirect_limit
	*/
	  constructor(ws_url: string, useragent: string, redirect_limit: number);
	/**
	* @param {Function} onopen
	* @param {Function} onclose
	* @param {Function} onerror
	* @param {Function} onmessage
	* @param {string} url
	* @param {(string)[]} protocols
	* @param {string} origin
	* @returns {Promise<EpxWebSocket>}
	*/
	  connect_ws(onopen: Function, onclose: Function, onerror: Function, onmessage: Function, url: string, protocols: (string)[], origin: string): Promise<EpxWebSocket>;
	/**
	* @param {Function} onopen
	* @param {Function} onclose
	* @param {Function} onerror
	* @param {Function} onmessage
	* @param {string} url
	* @returns {Promise<EpxTlsStream>}
	*/
	  connect_tls(onopen: Function, onclose: Function, onerror: Function, onmessage: Function, url: string): Promise<EpxTlsStream>;
	/**
	* @param {Function} onopen
	* @param {Function} onclose
	* @param {Function} onerror
	* @param {Function} onmessage
	* @param {string} url
	* @returns {Promise<EpxUdpStream>}
	*/
	  connect_udp(onopen: Function, onclose: Function, onerror: Function, onmessage: Function, url: string): Promise<EpxUdpStream>;
	/**
	* @param {string} url
	* @param {object} options
	* @returns {Promise<Response>}
	*/
	  fetch(url: string, options: object): Promise<Response>;
	/**
	*/
	  redirectLimit: number;
	/**
	*/
	  useragent: string;
	}
	/**
	*/
	export class EpxTlsStream {
	/**
	** Return copy of self without private attributes.
	*/
	  toJSON(): Object;
	/**
	* Return stringified version of self.
	*/
	  toString(): string;
	  free(): void;
	/**
	*/
	  constructor();
	/**
	* @param {EpoxyClient} tcp
	* @param {Function} onopen
	* @param {Function} onclose
	* @param {Function} onerror
	* @param {Function} onmessage
	* @param {string} url
	* @returns {Promise<EpxTlsStream>}
	*/
	  static connect(tcp: EpoxyClient, onopen: Function, onclose: Function, onerror: Function, onmessage: Function, url: string): Promise<EpxTlsStream>;
	/**
	* @param {any} payload
	* @returns {Promise<void>}
	*/
	  send(payload: any): Promise<void>;
	/**
	* @returns {Promise<void>}
	*/
	  close(): Promise<void>;
	/**
	*/
	  readonly url: string;
	}
	/**
	*/
	export class EpxUdpStream {
	/**
	** Return copy of self without private attributes.
	*/
	  toJSON(): Object;
	/**
	* Return stringified version of self.
	*/
	  toString(): string;
	  free(): void;
	/**
	*/
	  constructor();
	/**
	* @param {EpoxyClient} tcp
	* @param {Function} onopen
	* @param {Function} onclose
	* @param {Function} onerror
	* @param {Function} onmessage
	* @param {string} url
	* @returns {Promise<EpxUdpStream>}
	*/
	  static connect(tcp: EpoxyClient, onopen: Function, onclose: Function, onerror: Function, onmessage: Function, url: string): Promise<EpxUdpStream>;
	/**
	* @param {any} payload
	* @returns {Promise<void>}
	*/
	  send(payload: any): Promise<void>;
	/**
	* @returns {Promise<void>}
	*/
	  close(): Promise<void>;
	/**
	*/
	  readonly url: string;
	}
	/**
	*/
	export class EpxWebSocket {
	/**
	** Return copy of self without private attributes.
	*/
	  toJSON(): Object;
	/**
	* Return stringified version of self.
	*/
	  toString(): string;
	  free(): void;
	/**
	*/
	  constructor();
	/**
	* @param {EpoxyClient} tcp
	* @param {Function} onopen
	* @param {Function} onclose
	* @param {Function} onerror
	* @param {Function} onmessage
	* @param {string} url
	* @param {(string)[]} protocols
	* @param {string} origin
	* @returns {Promise<EpxWebSocket>}
	*/
	  static connect(tcp: EpoxyClient, onopen: Function, onclose: Function, onerror: Function, onmessage: Function, url: string, protocols: (string)[], origin: string): Promise<EpxWebSocket>;
	/**
	* @param {string} payload
	* @returns {Promise<void>}
	*/
	  send_text(payload: string): Promise<void>;
	/**
	* @param {Uint8Array} payload
	* @returns {Promise<void>}
	*/
	  send_binary(payload: Uint8Array): Promise<void>;
	/**
	* @returns {Promise<void>}
	*/
	  close(): Promise<void>;
	/**
	*/
	  readonly origin: string;
	/**
	*/
	  readonly protocols: (string)[];
	/**
	*/
	  readonly url: string;
	}
	/**
	*/
	export class IntoUnderlyingByteSource {
	  free(): void;
	/**
	* @param {ReadableByteStreamController} controller
	*/
	  start(controller: ReadableByteStreamController): void;
	/**
	* @param {ReadableByteStreamController} controller
	* @returns {Promise<any>}
	*/
	  pull(controller: ReadableByteStreamController): Promise<any>;
	/**
	*/
	  cancel(): void;
	/**
	*/
	  readonly autoAllocateChunkSize: number;
	/**
	*/
	  readonly type: string;
	}
	/**
	*/
	export class IntoUnderlyingSink {
	  free(): void;
	/**
	* @param {any} chunk
	* @returns {Promise<any>}
	*/
	  write(chunk: any): Promise<any>;
	/**
	* @returns {Promise<any>}
	*/
	  close(): Promise<any>;
	/**
	* @param {any} reason
	* @returns {Promise<any>}
	*/
	  abort(reason: any): Promise<any>;
	}
	/**
	*/
	export class IntoUnderlyingSource {
	  free(): void;
	/**
	* @param {ReadableStreamDefaultController} controller
	* @returns {Promise<any>}
	*/
	  pull(controller: ReadableStreamDefaultController): Promise<any>;
	/**
	*/
	  cancel(): void;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly __wbg_epxtlsstream_free: (a: number) => void;
  readonly __wbg_get_epxtlsstream_url: (a: number, b: number) => void;
  readonly epxtlsstream_new: (a: number) => void;
  readonly epxtlsstream_connect: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly epxtlsstream_send: (a: number, b: number) => number;
  readonly epxtlsstream_close: (a: number) => number;
  readonly __wbg_epxudpstream_free: (a: number) => void;
  readonly epxudpstream_new: (a: number) => void;
  readonly epxudpstream_connect: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly epxudpstream_send: (a: number, b: number) => number;
  readonly epxudpstream_close: (a: number) => number;
  readonly __wbg_epxwebsocket_free: (a: number) => void;
  readonly __wbg_get_epxwebsocket_protocols: (a: number, b: number) => void;
  readonly __wbg_get_epxwebsocket_origin: (a: number, b: number) => void;
  readonly epxwebsocket_new: (a: number) => void;
  readonly epxwebsocket_connect: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly epxwebsocket_send_text: (a: number, b: number, c: number) => number;
  readonly epxwebsocket_send_binary: (a: number, b: number) => number;
  readonly epxwebsocket_close: (a: number) => number;
  readonly init: () => void;
  readonly certs: (a: number) => void;
  readonly __wbg_epoxyclient_free: (a: number) => void;
  readonly __wbg_get_epoxyclient_useragent: (a: number, b: number) => void;
  readonly __wbg_set_epoxyclient_useragent: (a: number, b: number, c: number) => void;
  readonly __wbg_get_epoxyclient_redirectLimit: (a: number) => number;
  readonly __wbg_set_epoxyclient_redirectLimit: (a: number, b: number) => void;
  readonly epoxyclient_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly epoxyclient_connect_ws: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly epoxyclient_connect_tls: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly epoxyclient_connect_udp: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly epoxyclient_fetch: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_get_epxwebsocket_url: (a: number, b: number) => void;
  readonly __wbg_get_epxudpstream_url: (a: number, b: number) => void;
  readonly __wbg_intounderlyingbytesource_free: (a: number) => void;
  readonly intounderlyingbytesource_type: (a: number, b: number) => void;
  readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
  readonly intounderlyingbytesource_start: (a: number, b: number) => void;
  readonly intounderlyingbytesource_pull: (a: number, b: number) => number;
  readonly intounderlyingbytesource_cancel: (a: number) => void;
  readonly __wbg_intounderlyingsource_free: (a: number) => void;
  readonly intounderlyingsource_pull: (a: number, b: number) => number;
  readonly intounderlyingsource_cancel: (a: number) => void;
  readonly __wbg_intounderlyingsink_free: (a: number) => void;
  readonly intounderlyingsink_write: (a: number, b: number) => number;
  readonly intounderlyingsink_close: (a: number) => number;
  readonly intounderlyingsink_abort: (a: number, b: number) => number;
  readonly ring_core_0_17_8_bn_mul_mont: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly BrotliDecoderCreateInstance: (a: number, b: number, c: number) => number;
  readonly BrotliDecoderSetParameter: (a: number, b: number, c: number) => void;
  readonly BrotliDecoderDecompressPrealloc: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
  readonly BrotliDecoderDecompressWithReturnInfo: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly BrotliDecoderDecompress: (a: number, b: number, c: number, d: number) => number;
  readonly BrotliDecoderDecompressStream: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly BrotliDecoderDecompressStreaming: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly BrotliDecoderMallocU8: (a: number, b: number) => number;
  readonly BrotliDecoderFreeU8: (a: number, b: number, c: number) => void;
  readonly BrotliDecoderMallocUsize: (a: number, b: number) => number;
  readonly BrotliDecoderFreeUsize: (a: number, b: number, c: number) => void;
  readonly BrotliDecoderDestroyInstance: (a: number) => void;
  readonly BrotliDecoderHasMoreOutput: (a: number) => number;
  readonly BrotliDecoderTakeOutput: (a: number, b: number) => number;
  readonly BrotliDecoderIsUsed: (a: number) => number;
  readonly BrotliDecoderIsFinished: (a: number) => number;
  readonly BrotliDecoderGetErrorCode: (a: number) => number;
  readonly BrotliDecoderGetErrorString: (a: number) => number;
  readonly BrotliDecoderErrorString: (a: number) => number;
  readonly BrotliDecoderVersion: () => number;
  readonly memory: WebAssembly.Memory;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly _dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcf15e45acd03083a: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbddcba3628805da8: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5e7d1634d3169729: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8040eeb2d38cb52f: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h3c710623d1a70dc0: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_thread_destroy: (a?: number, b?: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>, maybe_memory?: WebAssembly.Memory): Promise<InitOutput>;
