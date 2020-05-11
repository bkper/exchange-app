
## ExchangeApp <a href='https://script.google.com/d/12pPyeoZrmRDHjGnm4brpl-uIr424_bjAtFMjedtr5aJc_Pt7vKg3IGwy/edit?usp=sharing'><img height="30" width="30" src="https://bkper.com/docs/images/google-apps-script.svg"/></a>

Google Apps Script library to exchange values based on updated rates.

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![npm (scoped)](https://img.shields.io/npm/v/@bkper/exchange-app-types?color=%235889e4&label=types)](https://www.npmjs.com/package/@bkper/exchange-app-types)

```js
var value = ExchangeApp.convert(20, 'USD', 'BRL');
```

**The fluent way**
```js
var value = ExchangeApp.exchange(20).from('USD').to('BRL').convert();
```

### Default rates endpoint

The default rates endpoint is set **latest rates** from [openexchangerate.org](https://openexchangerates.org/) and supports around [200 global currencies](https://docs.openexchangerates.org/docs/supported-currencies), including unofficial, black market and alternative digital currencies, such as Bitcoin, Etherum and so on.

Here is a [full list of supported codes](https://openexchangerates.org/api/currencies.json?show_alternative=1).

Rates are updated once per hour. Read the [FAQ for more details](https://openexchangerates.org/faq#accuracy).

### Changing rates endpoint

You can change the currency endpoint if you need to implement your own toA query historical rates or different precision. The endpoint response JSON format should be:

```json
{
  "base": "EUR",
  "rates": {
    "CAD": 1.565,
    "CHF": 1.1798,
    "GBP": 0.87295,
    "SEK": 10.2983,
    "EUR": 1.092,
    "USD": 1.2234,
    //...
  }
}
```
Any base can be used.

#### Example

A free and realiable rates endpoint you can use is [exchangeratesapi.io](https://exchangeratesapi.io/), which provides current and historical foreign exchange rates published by the **European Central Bank**.

To convert 20 USD to BRL based on rates of day 2018-04-08:


```js
ExchangeApp.setRatesEndpoint('https://api.exchangeratesapi.io/2010-01-12', 3600//cache)

var value = ExchangeApp.exchange(20).from('USD').to('BRL').convert();
```


### Setup

This library is already published as an Apps Script, making it easy to include in your project. 

To add it to your script, do the following in the Apps Script code editor:

1. Click on the menu item "Resources > Libraries..."
2. In the "Add a Library" text box, enter the Script ID "**1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_**" and click the "Select" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Click the "Save" button.


#### Typescript Definitions for autocomplete:

##### 1) Add the package:

```
npm i -S @bkper/exchange-app-types
```
or
```
yarn add --dev @bkper/exchange-app-types
```

##### 2) Configure tsconfig.json:

```
{
    "compilerOptions": {
        "typeRoots" : ["node_modules/@bkper", "node_modules/@types" ]
    }
}
```

[Learn more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) about **@types**, **typeRoots** and **types**
