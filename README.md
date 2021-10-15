# SimplQ

![Build and Deploy](https://img.shields.io/github/issues/SimplQ/simplQ-frontend)
![Build and Deploy](https://img.shields.io/github/license/SimplQ/simplQ-frontend)
![Gitter](https://img.shields.io/gitter/room/SimplQ/community)

[SimplQ](https://simplq.me) is a completely web based queue management solution that anyone can use to create instant virtual queues. Check us out on [ProductHunt](https://www.producthunt.com/posts/simplq) to know more and do upvote!

### Development Environment Setup Instructions

These steps are to be followed when you are running the project for the first time.

1. Install Node 12.x following instructions [here](https://github.com/nodesource/distributions/blob/master/README.md#debinstall).
2. Clone this project.
3. Change to `simplq` folder, install dependencies:

```
cd simplq
npm install
```

### Starting Development Server

In the `simplq` folder, simply run:

```
npm start
```

We use [Storybook.js](https://storybook.js.org/) for prototyping components. To start storybook and view existing components, run:

```
npm run storybook
```

# Contributing

Feel free to fork and improve, and do send a pull request. Look for issues labelled with ![](https://img.shields.io/github/labels/SimplQ/simplQ-frontend/You%20Can%20Do%20This), PRs on these will be merged on priority.

There are a ton of features being planned. So if you are considering contributing to this repository, please first discuss the change you wish to make via the issue tracker.

This [readme](/simplq/readme.md) file details the file structure and tools used. Please go through it first. This is the [design](https://xd.adobe.com/view/ad1db074-03bf-45b1-537b-98d9d524ec82-db2c/grid) we've implemented and here, the assets (icons, images) we're using are available for download. The website is live [here](https://simplq.me/).

Implementation Roadmap: https://github.com/SimplQ/simplQ-frontend/issues/207


# Deploy

Changes to master are automatically deployed to  [dev.simplq.me/](https://dev.simplq.me/). Periodically, we inspect dev and promote it to [simplq.me](https://simplq.me).
