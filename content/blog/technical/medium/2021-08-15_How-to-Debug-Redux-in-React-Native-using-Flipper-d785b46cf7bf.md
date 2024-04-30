---
title: How to Debug Redux in React Native using Flipper
description: >-
  The flipper-plugin-redux-debugger allows you to read React Native redux logs
  inside Flipper now:
date: "2021-08-15T07:10:31.456Z"
categories: react-native
---

The [flipper-plugin-redux-debugger](https://classic.yarnpkg.com/en/package/flipper-plugin-redux-debugger) allows you to read React Native redux logs inside [Flipper](https://fbflipper.com/) now:

![](/images/1__Zci4wV7eHmxYsr5ebUQfvA.png)

#### Install required packages

Install `[redux-flipper](https://github.com/jk-gan/redux-flipper)` middleware and `react-native-flipper` in your React Native app:

```
yarn add --dev redux-flipper react-native-flipper
```

or

```
npm i --dev redux-flipper react-native-flipper
```

#### Update pods for ios

Install pods for React Native flipper in iOS:

`npx pod-install` or `cd ios && pod install`

#### Configure redux store

Add the middleware into your redux store:

In case if you are using Redux toolkit:

#### Install Redux debugger plugin

Open Flipper desktop client and install `redux-debugger` plugin

1.  `Plugin Manager > Install Plugins > search "redux-debugger" > Install redux-debugger`

![](/images/1__xmU__0mAmfBvkMbVNKlVdrg.gif)

#### Enable redux debugger

The `redux-debugger` plugin will be listed in the disabled plugin section. Enable the plugin to get started.

```
Disabled > Redux Debugger > Enable Plugin
```

![](/images/1__HIXzvdYYHmSKfAac72__Heg.gif)

#### Start the app to see the logs in Redux debugger

`yarn android` and `yarn start`

**NOTE**: Click on action to see the state

![](/images/1__tXVljblKZ1LJwzvjP6x81Q.png)
