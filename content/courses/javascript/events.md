---
title: 05. Handling events
categories: javascript
---

> You have power over your mind—not outside events. Realize this, and you will find strength. - Marcus Aurelius, Meditations

Some programs work with direct user input, such as mouse and keyboard actions. That kind of input isn’t available as a well-organized data structure—it comes in piece by piece, in real time, and the program is expected to respond to it as it happens.

## Event Loop

## Debouncing in Javascript

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

```html
<html>
  <body>
    <button id="debounce">Debounce</button>
    <script>
      var button = document.getElementById("debounce");
      const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
          const context = this;
          const args = arguments;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
      };
      button.addEventListener(
        "click",
        debounce(function () {
          alert(
            "Hello\nNo matter how many times you" +
              "click the debounce button, I get " +
              "executed once every 3 seconds!!"
          );
        }, 3000)
      );
    </script>
  </body>
</html>
```

## Throttle

In throttle we don’t allow to our function to execute more than once every X milliseconds.

```js
function throttle(callback, interval) {
  let enableCall = true;

  return (...args) => {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => (enableCall = true), interval);
  };
}

function helloFromThrottle() {
  console.log("Jesus is saying hi!!!");
}

const foo = throttle(helloFromThrottle, 5000);
```

+--------------+-------------------+-------------------+
| | Throttle 1 sec | Debounce 1 sec |
+--------------+-------------------+-------------------+
| Delay | no delay | 1 sec delay |
| | | |
| Emits new if | last was emitted | there is no input |
| | before 1 sec | in last 1 sec |
+--------------+-------------------+-------------------+

## References:

- https://css-tricks.com/debouncing-throttling-explained-examples/
- https://dev.to/iyashsoni/javascript-debounce-vs-throttle-392i
- https://codepen.io/akshaymarch7/pen/pXgxGo?editors=0011
