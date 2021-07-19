## Introduction

### What is dialogflow

https://cloud.google.com/dialogflow

Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your application. It can be a mobile application, web application, , bot, or other popular messaging platforms and so on. Using Dialogflow, we can provide new and engaging ways for users to interact with your product, like creating a chatbot or with synthetic speech.

### Setup

Let's go ahead and create a Dialogflow setup.

#### Create Project

Let's start by creating a google cloud project, A project organizes all your Google Cloud resources. A project consists of a set of collaborators, enabled APIs, monitoring tools, billing information, and authentication and access controls. When creating a project, take note of the [project ID](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). You will need this ID to make API calls.

#### Enable the API

Enable dialogflow api for your project to access the resource.

#### Set up authentication

If you plan to use the Dialogflow API, you need to set up authentication. Any client application that uses the API must be authenticated and granted access to the requested resources. it is recommended that you use _service accounts_ for authentication and access control. A service account provides credentials for applications, as opposed to end-users. Service accounts are owned by projects, and you can create many service accounts for a project.

Now let's Create a service account and download the private key file

Navigate to [Dialogflow console](https://cloud.google.com/dialogflow/docs/) After navigating to console you will be prompted to sign in with Google, go ahead and sign-in. After successfully signing in you can see a dashboard.

Login to google account

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
