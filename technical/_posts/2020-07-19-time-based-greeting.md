---
title: "Greet user based on time of the day"
categories: code-snippet
---

### Time based user greetings (Good Morning, Afternoon, Evening) using moment.js

```js
getGreetingTime = (currentTime) => {
  if (!currentTime || !currentTime.isValid()) {
    return "Hello";
  }

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format("HH"));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return "Good afternoon";
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return "Good evening";
  }
  // Between dawn and noon
  return "Good morning";
};
```

[Reference](https://gist.github.com/AllanPooley/c41f2e4a0e63e3eaf89b57f2570fcb55)
