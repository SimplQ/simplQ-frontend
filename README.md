# SimplQ

![Build and Deploy](https://github.com/daltonfury42/simplQ-frontend/workflows/Build%20and%20Deploy/badge.svg)
![Build and Deploy](https://img.shields.io/github/issues/SimplQ/simplQ-frontend)
![Build and Deploy](https://img.shields.io/github/license/SimplQ/simplQ-frontend)

[SimplQ](https://simplq.me) is a completely web based queue management solution that anyone can use to create instant virtual queues.

### Development Envirmonment Setup Instructions

These steps are to be followed when you are running the project for the first time.

1. Install Node 12.x following instructions [here](https://github.com/nodesource/distributions/blob/master/README.md#debinstall).
2. Clone this project
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

We use [Storybook.js](https://storybook.js.org/) for prototyping components, to start, run:

```
npm run storybook
```

# Contributing

Feel free to fork and improve, and do send a pull request. We will be delighted to work with you.

There are a ton of features being planned. So if you are considering contributing to this repository, please first discuss the change you wish to make via the issue tracker. Let's work together.

This [readme](/simplq/readme.md) file details the file structure and tools used. Please go through it first. The frontend is being revamped heavily right now and the changes are being tested in this branch. We are following this [approach](https://github.com/SimplQ/simplQ-frontend/blob/new-frontend/simplq/readme.md) and implementing this new [design](https://xd.adobe.com/view/8d227f50-0d35-4319-63ad-ff4bad308415-fb13/). You can see the new frontend live [here](https://new.simplq.me/).
