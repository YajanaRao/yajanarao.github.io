---
title: Best Practices for using Text Input component in React Native
description: >-
  In this article, you’ll find best practices for Text Input that have been
  collected from different sources. These techniques — when used…
date: "2021-06-23T17:43:11.288Z"
categories: react-native
---

![](/images/1__lSbm5so0zwaSZFwh0BlXfg.jpeg)

TextInput is a Core Component that allows the user to enter text. They typically appear in forms and dialogs.

### **1\. Less is more**

Every field you ask users to fill out increases friction. Make sure to ask only what you really need. Every extra field you add to a form will affect its conversion rate. Always consider why you are requesting certain information from the user and how you will use it. The best thing you can do to get rid of as many fields as possible.

### **2\. Make typing easy.**

Make user experience of entering text as easy as possible. [autoCompleteType](https://reactnative.dev/docs/textinput#autocompletetype) specifies autocomplete hints for the system, so it can provide autofill.

### **3\. Match keyboard to input**

Phone users appreciate apps that provide the appropriate keyboard for the text being requested. [keyboardType](https://reactnative.dev/docs/textinput#keyboardtype) determines which keyboard to open for the specific input field, e.g.numeric.

The following values work across platforms:

\- default

\- number-pad

\- decimal-pad

\- numeric

\- email-address

\- phone-pad

### **4\. Offer field focus.**

If you have a form with multiple fields, you don’t want users to get lost in the form.

#### [**autoFocus**](https://reactnative.dev/docs/keyboardavoidingview)

Autofocusing a field gives the user an indication and a starting point to quickly begin filling out a form. By setting \`autoFocus\` to true, the textinput will be focused on \`componendDidMount\`.

#### [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview)

It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the keyboard height.

#### **onSubmitEditing**

Gives an option to submit from keyboard so that user does not need to close the keyboard and click on submit button.

### **5\. Setting** defaultValues

It’s better to avoid setting [_defaultValue_](https://reactnative.dev/docs/textinput#defaultvalue) unless you believe a large portion of your users (say, 95% of them) will select the same values. People scan online forms quickly, and they don’t spend much time parsing through all of the choices. As a result, they can easily skip something that already has a value.

But this rule doesn’t apply to smart defaults, which are pre-set values based on available information about the user. Smart defaults can make form completion faster and more accurate. For example, preselect the user’s country based on geo-location data. Still, use these with caution, because users tend to leave preselected fields as they are.

### **6\. Avoid uncontrolled TextInput**

![](/images/1__w6goMCU__uv3BMuE6__hQvYw.png)

The above code sample will work in most of the cases. However, on slow devices, and in a situation where a user is typing really fast it may cause a problem with view updates. The reason for that is React Native’s asynchronous nature.

One of the solutions for the synchronization problem is to remove value prop from TextInput entirely. As a result, the data will flow only one way, from native to the JavaScript side, eliminating the synchronization issues that were described earlier.

### **7\. Communicate errors clearly.**

Users will make mistakes. It’s inevitable. Even if you use every form design best practice, users will still ring up error messages. How you handle error messages matters.

### **8\. Avoid placeholders as a label**

Using a placeholder as a label puts a burden on short-term memory. The label disappears as soon as the user starts typing, and the user must clear input text to expose the placeholder label again.

Placeholders create additional issues when they are too light or dark. When too dark, the placeholder can be mistaken for a filled input. When too light, some users might not see the placeholder.

### **References**

[https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/](https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/)

[https://callstack.com/blog/the-ultimate-guide-to-react-native-optimization/](https://callstack.com/blog/the-ultimate-guide-to-react-native-optimization/)

[https://www.youtube.com/watch?v=83ffAY-CmL4&t=1483s](https://www.youtube.com/watch?v=83ffAY-CmL4&t=1483s)
