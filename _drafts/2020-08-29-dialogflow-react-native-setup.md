## What is dialogflow

https://cloud.google.com/dialogflow

Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on. Using Dialogflow, you can provide new and engaging ways for users to interact with your product.

Dialogflow can give a conversational experience and deploy to any platforms

- Dialogflow is a free service

Dialogflow can analyze multiple types of input from your customers, including text or audio inputs (like from a phone or voice recording). It can also respond to your customers in a couple of ways, either through text or with synthetic speech.

### How Dialogflow works?

In Dialogflow, the typical flow of any conversation involves these steps:

1. The user providing an input.
2. Dialogflow agent parsing that input based on the intent.
3. Agent returning a response to the user.

### Setup Dialogflow account

Navigate to [Dialogflow console](https://cloud.google.com/dialogflow/docs/) After navigating to console you will be prompted to sign in with Google, go ahead and sign-in. After successfully signing in you can see a dashboard.

1. Login to google account

2. Recommended to create a fresh project

3. Enable dialogflow in api & service in library section

4. Create service account and download json

use service accounts for authentication and access control.

Project > Owner

For the purpose of trying the Dialogflow API, you can use the Project > Owner role in steps below, which grants the service account full access to the project.

https://console.developers.google.com/apis/api/dialogflow.googleapis.com/overview?project=august-copilot-222413
https://dialogflow.cloud.google.com/#/agent/newagent-utma/intents
https://cloud.google.com/dialogflow/docs/video

After signing in, you could see a Create Agent tab.
An agent is nothing but the bot that you would like to create.

#### Intents

An Intent is a specific action that the user can invoke by using one of the defined terms in the Dialogflow console.
For example, the user could ask “What’s the time?” or “What is today’s date?” if these terms are defined within the console, then they will be detected by Dialogflow and intents that are defined under will get triggered.

### Entities:

An Entity is a property which can be used by Dialogflow to answer the request from the user. The entity will usually be a keyword within the request such as a name, date, time etc.
