# Angular/TypeScript: Starter SPA Code Sample

This TypeScript code sample demonstrates how to build a Single-Page Application (SPA) using Angular. This Angular code sample builds the API server using Angular class components.

Visit the ["Angular/TypeScript Code Samples: SPA Security in Action"](https://developer.auth0.com/resources/code-samples/spa/angular) section of the ["Auth0 Developer Resources"](https://developer.auth0.com/resources) to explore how you can secure Angular applications written in TypeScript by implementing endpoint protection and authorization with Auth0.

[![Angular/TypeScript Code Samples: SPA Security in Action](https://cdn.auth0.com/blog/hub/code-samples/spa/angular-typescript.png)](https://developer.auth0.com/resources/code-samples/spa/angular)

## Why Use Auth0?

Auth0 is a flexible drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users. We offer tons of guidance and SDKs for you to get started and [integrate Auth0 into your stack easily](https://developer.auth0.com/resources/code-samples/full-stack).

## Set Up and Run the Angular Project

Install the project dependencies:

```bash
npm install
```

The starter Angular project offers a functional application that consumes data from an external API to hydrate the user interface. For simplicity and convenience, the starter project simulates the external API locally using [`json-server`](https://github.com/typicode/json-server).

However, you can also integrate this starter project with any of the ["Hello World" API code samples, which are available in multiple backend frameworks and programming languages](https://github.com/orgs/auth0-developer-hub/repositories?language=&q=api+hello-world&sort=&type=public).

The compatible API server runs on `http://localhost:6060` by default. As such, to connect your Angular application with that API server, create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
API_SERVER_URL=http://localhost:6060
```

Next, execute the following command to run the JSON server API:

```bash
npm run api
```

Finally, open another terminal tab and execute this command to run your Angular application:

```bash
npm start
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.

In the starter project, all the starter Angular application routes are public. However, you can use Auth0 to get an ID token to hydrate the user profile information present on the `/profile` page with information from a real user. With Auth0, you can also get an access token to make a secure call to an external API to hydrate the messages present in the `/protected` and `/admin` pages.
