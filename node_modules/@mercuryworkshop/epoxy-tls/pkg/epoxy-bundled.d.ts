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
	
}\ndeclare function epoxy(maybe_memory?: WebAssembly.Memory): Promise<typeof wasm_bindgen>;
