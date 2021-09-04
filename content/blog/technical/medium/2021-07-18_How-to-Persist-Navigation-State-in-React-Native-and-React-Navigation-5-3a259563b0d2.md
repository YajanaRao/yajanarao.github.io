---
title: How to Persist Navigation State in React Native and React Navigation 5
description: >-
  You might want to save the navigation state in the app, so that the same
  screen is show after the app is restarted.
date: "2021-07-18T11:56:05.076Z"
categories: react-native
---

![](./img/1__ug0tR8qQhUYJkJDQAJe1Sg.png)

You might want to save the navigation state in the app, so that the same screen is show after the app is restarted.

In this article we will go through a sample application just to do this.

**Snack of the application**: [https://snack.expo.io/eICO2XnKx](https://snack.expo.io/eICO2XnKx)

#### Requirements:

- react-navigation 5

We can use `onStateChange` and `initialState` props of the NavigationContainer to implement this functionality.

- `onStateChange` - function notifies of any state changes. We can persist the state in this callback.
- `initialState` - This property allows us to pass an initial state to use for [navigation state](https://reactnavigation.org/docs/navigation-state). We can pass the restored state value in this property.

Let’s create two screens **_HomeScreen_** and **_DetailsScreen_**.

#### Home.js

```jsx
// screens/Home.js
import \* as React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen({ navigation }) {

return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
 );

}

```

#### Details.js

```jsx
// screens/Details.js
import \* as React from 'react';
import { View, Text, Button } from 'react-native';

export function DetailsScreen({ navigation }) {

return (
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
 );

}
```

Create a stack navigator to navigate between the screens.

```jsx
#### AppNavigation.js

\_// navigation/AppNavigation.js
\_import \* as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home';
import { DetailsScreen } from '../screens/Details';

const Stack = createStackNavigator();

export function AppNavigation(){
 return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
 )
}

```

Let’s now restore and save navigation state in App.js

#### Reference:

- [https://reactnavigation.org/docs/state-persistence](https://reactnavigation.org/docs/state-persistence)
