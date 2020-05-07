// Type definitions for ExchangeApp
// Generated using clasp-types

declare namespace Bkper {

    /**
     * The main entry point to interact with ExchangeApp
     *
     * Script ID: **12pPyeoZrmRDHjGnm4brpl-uIr424_bjAtFMjedtr5aJc_Pt7vKg3IGwy**
     */
    export interface ExchangeApp {

        convert(value: number, from: string, to: string): number;

        /**
         * Fluent interface
         */
        exchange(value: number): Exchange;

        setRatesEndpoint(url: string): void;

    }

    export interface Exchange {

        convert(): number;

        from(code: string): Exchange;

        to(code: string): Exchange;

    }

    export var RATES_ENDPOINT_URL_: string;

}

declare var ExchangeApp: Bkper.ExchangeApp;