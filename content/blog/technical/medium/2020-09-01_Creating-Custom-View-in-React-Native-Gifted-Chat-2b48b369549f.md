---
title: Creating Custom View in React Native Gifted Chat
description: >-
  React Native Gifted Chat is a feature rich chat UI for React Native & Web. I
  would like to show you, how to create a custom view for…
date: "2020-09-01T08:32:50.161Z"
categories: react-native
---

![](. ./img/1\_\_eNVnZl3wvFygxMBzNVThnw.png)

[React Native Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat) is a feature rich chat UI for React Native & Web. I would like to show you, how to create a custom view for gifted chat component. We will build a map view component for the react native gifted chat. When there is location property in the chat, we will display react native maps MapView instead of default chat bubble.

Link to the Working Expo Snack is attached at the bottom of the article.

I have tried to explain the same in this video as well.

If you have not yet installed go ahead and install react native gifted chat

`yarn add react-native-gifted-chat` or `npm i react-native-gifted-chat`

We also need react native maps for displaying maps. Install react native maps into the application.

`yarn add react-native-maps -E` or `npm i react-native-maps`

Add a gifted chat component to the application

We need to implement _renderBubble_ function to check for location coordinates in the message object and display MapView in case of coordinates.

const renderBubble = (props) => {  
 const { currentMessage } = props;  
 if (currentMessage.location) {  
 return <LocationView location={currentMessage.location} />;  
 }  
 return <Bubble {...props} />;  
};

Wrapping the MapView with TouchableOpacity will help to open the coordinates in the respective map application based on Platform on click.

const openMaps = () => {  
 const url = Platform.select({  
 ios: \`[http://maps.apple.com/?ll=${location.latitude},${location.longitude}\`](http://maps.apple.com/?ll=$%7Blocation.latitude%7D,$%7Blocation.longitude%7D`),  
 android: \`[http://maps.google.com/?q=${location.latitude},${location.longitude}\`](http://maps.google.com/?q=$%7Blocation.latitude%7D,$%7Blocation.longitude%7D`),  
 });  
 Linking.canOpenURL(url)  
 .then((supported) => {  
 if (supported) {  
 return Linking.openURL(url);  
 }  
 })  
 .catch((err) => {  
 console.error("An error occurred", err);  
 });  
 };

Link to Expo Snack:

[https://snack.expo.io/@yajana/custom-view-in-gifted-chat](https://snack.expo.io/@yajana/custom-view-in-gifted-chat)
