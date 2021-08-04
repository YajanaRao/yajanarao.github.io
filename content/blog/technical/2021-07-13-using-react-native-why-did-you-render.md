---
title: "How to use why did you render in react native"
categories: technical-concepts
---

## Install @welldone-software/why-did-you-render package

```shell
# npm
npm install @welldone-software/why-did-you-render --save-dev

# yarn
yarn add --dev @welldone-software/why-did-you-render
```


## Create wdyr.js file for configaring why did you render

Create a file called wdyr.js file in root folder of your project and paste the following content.

```js
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  const ReactRedux = require("react-redux");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, "useSelector"]],
  });
}
```

On reload of your application you should see the logs comming in the console.
