---
title: "How to hide the header only for child component using react navigation v5?"
categories: tech
date: 2020-08-15
---

## For nested stack

```js
<Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{
      headerShown: false,
    }} /* headerShown to false will hide header for the stack */
  />
  <Stack.Screen
    name="Profile"
    component={ProfileScreen}
    options={{ title: "My profile" }}
  />
</Stack.Navigator>
```

## For Full screen modals for components ( Not using react navigation )

Make the modal to be full screen
