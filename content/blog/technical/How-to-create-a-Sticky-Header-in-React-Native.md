---
title: "How to create a Sticky Header in React Native and React Navigation"
description: "We will use `react-navigation-collapsible` to make react navigation header collapsible. The use case that we are trying to replicate is sometime similar to Spotify search page UI."
date: "2021-09-05"
categories: "react-native"
---

We will use `react-navigation-collapsible` to make react navigation header collapsible. The use case that we are trying to replicate is sometime similar to Spotify search page UI.

![search.gif](./img/search.gif)

We will use react-native-collapsible [sticky header](https://github.com/benevbright/react-navigation-collapsible/blob/main/example/src/StickyHeaderScreen.tsx) to get the desired effect of the header.

Let us start by creating Search screen

### Setup

Install required packages using yarn or npm

`npm install react-navigation-collapsible`

### SearchScreen.tsx

```jsx
import React, { useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
  View,
  Image,
} from "react-native";
import {
  useTheme,
  Text,
  IconButton,
  Surface,
  Searchbar,
} from "react-native-paper";
import { useScrollToTop } from "@react-navigation/native";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { StackNavigationProp } from "@react-navigation/stack";
import Genre from "./assets/Genre.json";

export const SearchScreen = ({ navigation }: Props) => {
  const ref = useRef(null);
  const { colors, roundness } = useTheme();
  useScrollToTop(ref);

  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY } =
    useCollapsibleHeader({
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.background,
          textAlign: "center",
          elevation: 0,
          shadowOpacity: 0,
        },
      },
    });

  const stickyHeaderHeight = 60;

  return (
    <View>
      <Animated.FlatList
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop + stickyHeaderHeight,
        }}
        scrollIndicatorInsets={{
          top: scrollIndicatorInsetTop + stickyHeaderHeight,
        }}
        ref={ref}
        key="Genre"
        data={Genre}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        ListHeaderComponent={() => (
          <Text style={styles.headline}>All Moods & Genres</Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              navigation.navigate("Filter", {
                genre: item,
              })
            }
          >
            <Image
              source={item.image}
              style={{
                width: 150,
                height: 200,
                borderRadius: 4,
                backgroundColor: "green",
              }}
            />
            <Text
              style={{ color: "black", textAlign: "center" }}
              numberOfLines={1}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Animated.View
        style={{
          transform: [{ translateY }],
          position: "absolute",
          backgroundColor: colors.background,
          top: containerPaddingTop,
          height: stickyHeaderHeight,
          paddingHorizontal: 4,
          width: "100%",
        }}
      >
        <Searchbar placeholder="Search" onChangeText={() => {}} />
      </Animated.View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  headline: {
    textAlign: "center",
    marginVertical: 4,
  },
});
```

### Create App.js

Wrap the root component with NavigationContainer and make sure to include SearchScreen inside a navigation stack.

```jsx
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./Search";

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.surface,
            },
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            safeAreaInsets: { top: 0, bottom: 0 },
          }}
        >
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
```

The resulting application should display sticky header.

## References:

Link to the sample project: [Serenity Music Player](https://github.com/YajanaRao/Serenity/blob/develop/packages/mobile/src/screens/search/Search.tsx)

Link to the library: https://github.com/benevbright/react-navigation-collapsible
