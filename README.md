# Vanilla Web Components

This repository is for exploring vanilla web components.

Only web standards (and a polyfill) are used.

## Getting started

1. `npm install`
1. `npm test`
1. `npm start`
1. Navigate to http://127.0.0.1:8081

## Browser support and standardisation

|   | Support  | Standard  | Notes   |
|---|---|---|---|
| Custom Elements | [caniuse](https://caniuse.com/#feat=custom-elementsv1) | [Living Standard](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) |   |
| `<template>` | [caniuse](https://caniuse.com/#feat=template) | [Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element) |   |
| Shadow Dom | [caniuse](https://caniuse.com/#feat=shadowdomv1) | [Working Draft](https://www.w3.org/TR/shadow-dom/)  | [Firefox intent to ship by v60 (March 2018)](https://groups.google.com/forum/#!msg/mozilla.dev.platform/aJvUlADn-Hk/BYB52MgDBQAJ)  |
| HTML imports  | [caniuse](https://caniuse.com/#feat=imports) | [Working Draft](https://www.w3.org/TR/html-imports/)   |   |


## Polyfill

[webcomponents.js][webcomponents.js] is a v1 spec polyfill, that is used in the examples in this repository.

## Resources

* [Building Components](https://developers.google.com/web/fundamentals/web-components/) - Web Fundamentals guide by Google
* [Make a Native Web Component with Custom Elements v1 and Shadow DOM v1](https://bendyworks.com/blog/native-web-components) - Great tutorial by Pearl Latteier
* [Quick web components tutorial](https://component.kitchen/tutorial)
* [The Gold Standard Checklist for Web Components](https://github.com/webcomponents/gold-standard/wiki)
* [webcomponents.js][webcomponents.js] - polyfills, used in this repository
* [web-component-tester](https://github.com/Polymer/web-component-tester) - a test framework for testing web components, used in this repository

### Related

* [stylable.io](https://stylable.io) - CSS for components

[webcomponents.js]: https://github.com/WebComponents/webcomponentsjs
