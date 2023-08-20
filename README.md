![ArticSdk](https://i.pinimg.com/originals/22/26/a5/2226a53e0be2f56c78982ae08f493f3c.jpg)
# [ArticSdk](https://www.npmjs.com/package/artic-sdk?activeTab=readme) Documentation

## Introduction

Welcome to the ArticSdk documentation! This document provides an in-depth overview of the `ArticSdk` class. Developed by **Souvik666**, this SDK serves as a gateway to the Artic Framework's diverse services and functionalities. With static properties, it offers seamless access to service instances designed to manage agents, artworks, exhibitions, products, places, and galleries.

## Install 
## Using Github
```bash
npm install -s git+ssh://git@github.com:souvik666/artic-sdk.git
```
## Using NPM
```bash
npm i artic-sdk
```

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Service Instances](#service-instances)
- [Contributions](#contributions)

## 🚀 Getting Started 

Getting started with the `ArticSdk` is easy! Begin by importing the class and utilizing its service instances in your application. This example showcases how to get started:

```typescript
import { ArticSdk } from 'path-to-your-sdk';

// Access service instances
const agentInstance = ArticSdk.agent;
const artworkInstance = ArticSdk.artwork;
const exhibitionInstance = ArticSdk.exhibition;
// ... and so on
```
# Service Instances 

## AgentService
The AgentService instance allows you to seamlessly manage agents within the Artic Framework. This service facilitates the retrieval of agent information, searching for agents, and more. Here's how you can interact with it:
```typescript
// Retrieve a list of agents with pagination and search
const agents = await agentInstance.get({
  params: {
    limit: 10,
    page: 1,
    fields: 'artist_pivots',
    ids: '1,2,3,4'
  },
  config: {} // Extra header configuration if needed
});

// Get details of a specific agent
const specificAgent = await agentInstance.getOne(agentId);

// Search for agents based on various criteria
const searchedAgents = await agentInstance.search({
  params: {
    limit: 10,
    page: 1,
    fields: 'artist_pivots',
    q: 'Hello world',
    // ... other search parameters
  },
  config: {} // Extra header configuration if needed
});


```

- ☘️ Repeat this pattern for other service instances, such as `Artwork`, `ExhibitionsService`, `ProductService`, `PlaceService`, and so on.



# Contributions 🤝
The ArticSdk project warmly welcomes contributions from the developer community. If you have ideas for enhancements, bug fixes, or new features, don't hesitate to fork the repository, implement your changes, and submit a pull request. By collaborating, we can collectively improve the ArticSdk and create an enhanced experience for all users of the Artic Framework.


# 🎉 Shoutout to [Art Institute of Chicago API](https://api.artic.edu/docs/)🎨🏛️

We want to extend our heartfelt appreciation to the Art Institute of Chicago for providing the remarkable Art Institute of Chicago API. This API has opened up a world of creative possibilities and enriched the way we access and engage with art-related information.

The Art Institute of Chicago API empowers developers, art enthusiasts, and researchers to access a wealth of artistic and cultural data. With its well-documented endpoints and user-friendly resources, the API allows us to seamlessly explore the art world, gather insights, and create innovative applications.

Whether it's exploring artworks, learning about artists, or discovering exhibitions, the Art Institute of Chicago API makes it all possible. The dedication of the API team in providing a reliable and informative resource is truly commendable.

So, here's to the Art Institute of Chicago API—thank you for enriching our digital landscape and inspiring creativity. 🎨✨

Check out the API documentation: [Art Institute of Chicago API Documentation](https://api.artic.edu/docs/)
