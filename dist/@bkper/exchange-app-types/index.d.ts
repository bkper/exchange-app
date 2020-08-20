// Type definitions for ExchangeApp
// Generated using clasp-types

declare namespace Bkper {

    /**
     * The main entry point to interact with ExchangeApp
     *
     * Script ID: **12pPyeoZrmRDHjGnm4brpl-uIr424_bjAtFMjedtr5aJc_Pt7vKg3IGwy**
     */
    export interface ExchangeApp {

        /**
         * Converts a value from one code to a onother, based on given rates from the rates endpoint.
         */
        convert(value: number, from: string, to: string, rates?: Rates): number;

        /**
         * Fluent interface to convert a value from one code to another, based on given rates from the rates endpoint.
         *
         * @example 
         * ```js
         *  ExchangeApp.exchange(20).from('USD').to('BRL').convert()
         * ```
         */
        exchange(value: number): Exchange;

        /**
         * The rates endpoint to be used. The response JSON format must be like this:
         * ```js
         * {
         *  base: "USD",
         *  rates: {
         *      AED: 3.672538,
         *      AFN: 66.809999,
         *      ALL: 125.716501,
         *      AMD: 484.902502,
         *      ANG: 1.788575,
         *      AOA: 135.295998,
         *      ARS: 9.750101,
         *      AUD: 1.390866,
         *    }
         *  }
         *
         * ```
         * 
         * If none provided, the default ```https://openexchangerates.org/api/latest.json``` will be used
         */
        setRatesEndpoint(url: string, cacheSeconds?: number): void;

    }

    /**
     * The Exchange fluent class
     */
    export interface Exchange {

        /**
         * Perform the convertion
         *
         * @returns The converted value
         */
        convert(): number;

        /**
         * The code to convert from
         */
        from(code: string): Exchange;

        /**
         * The code to convert to
         */
        to(code: string): Exchange;

        /**
         * Optionally specify the rates.
         */
        withRates(rates: Rates): Exchange;

    }

    /**
     * The Rates to be applied when exchanging values
     */
    export interface Rates {

        base: string;

        date: string;

        rates: {[key: string]: number};

    }

    export var RATES_ENDPOINT_CACHE_SECONDS_: number;

    export var RATES_ENDPOINT_URL_: string;

}

declare var ExchangeApp: Bkper.ExchangeApp;