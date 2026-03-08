## Overview

ClimateWise is a cross-platform mobile application built during the Software Engineering group project at Imperial College London. The app helps UK homeowners understand their local climate risks, check their property's energy performance, and discover government grants they're eligible for.

![ClimateWise demo](https://media.alexorri.com/climatewise_demo.mp4)

## Tech Stack

The backend is built with FastAPI (Python), backed by PostgreSQL for persistent storage and Redis for caching and session management. The frontend is a React Native app built with Expo, enabling deployment to both iOS and Android from a single TypeScript codebase.

![ClimateWise tech stack](https://media.alexorri.com/climatewise_tech_stack.png)

## AI Chatbot with MCP

The app features an AI-powered chatbot that uses the Model Context Protocol (MCP) to provide structured tool access. Rather than relying on unstructured prompts, the chatbot can query climate risk data, look up EPC ratings, and search grant eligibility through well-defined tool interfaces. This gives users conversational access to all of the app's data sources.

## Authentication

The authentication system implements JWT access tokens for API authentication combined with OAuth 2.0 for third-party login. Tokens are securely stored on-device and refreshed automatically to maintain sessions without repeated logins.

## EPC Search

Users can search for their property's Energy Performance Certificate (EPC) rating, which provides details on energy efficiency, estimated costs, and improvement recommendations. The app pulls data from the UK government's EPC register API and presents it in a user-friendly format alongside actionable suggestions.

## Deployment

The entire stack is orchestrated with Docker Compose, with separate containers for the FastAPI backend, PostgreSQL database, and Redis cache. This setup enables consistent local development environments and straightforward deployment to production.
