---
title: How to use Why Did You Render library in React Native
description: >-
  why-did-you-render can be used to detect unnecessary re renders in react
  native.
date: "2021-08-08T06:50:13.735Z"
categories: react-native
---

_why-did-you-render_ can be used to detect unnecessary re renders in react native.

![](/images/1__WhR0GNM__wrfEawQ4HfU2ZQ.jpeg)

### Setup

Install [why-did-you-render](https://github.com/welldone-software/why-did-you-render) package for your react native project

**Using Npm**

```
npm install @welldone-software/why-did-you-render --save-dev
```

**Using Yarn:**

yarn add --dev [@welldone](http://twitter.com/welldone "Twitter profile for @welldone")\-software/why-did-you-render

Create `wdyr.js` file in root directory of your project

Setting flag `trackAllPureComponents` will enable logging for all pure components.

You can track a component by setting `whyDidYouRender` to true

![](/images/1__4evAFZ5JpCQco3iibdkeXQ.png)

Import `wdyr` as the first import in index.js

![](/images/1____LIu6rbQpiJvMbpj8C8RXA.png)

Run the application and you should be able to see the logs

![](/images/1__nA3n6X__jp8CuSoDywDCLhg.png)

#### References:

On Expo Snack you might have some issue, Please refer this link for some information: [https://github.com/welldone-software/why-did-you-render/issues/58](https://github.com/welldone-software/why-did-you-render/issues/58)

Link to github repo: [https://github.com/welldone-software/why-did-you-render](https://github.com/welldone-software/why-did-you-render)
