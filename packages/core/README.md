# Phone.js

A monorepo hosting a React-based iPhone, complete with apps as npm packages.

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Foxcened%2Fiphone-js%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/oxcened/iphone-js/goto?ref=master)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fiphone-js.web.app%2F)](https://iphone-js.web.app/)
[![Repository License](https://img.shields.io/github/license/oxcened/phone-js)](/LICENSE)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

**Table of Contents**

- [Introduction](#introduction)
- [Demo](#demo)
- [How to use](#how-to-use)
- [Tech Stack](#tech-stack)
- [Monorepo](#monorepo)
- [Scalability](#scalability)
- [Yarn PnP](#yarn-pnp)
- [Maintainers](#maintainers)
- [License](#license)

## Introduction

Phone.js was inspired by the amazing project of Tanner Villarete, [iPod.js](https://github.com/tvillarete/ipod-classic-js).

The intention behind this project was not only to have fun creating something peculiar,
but also to be challenged by the CSS styling involved.

I did also take the opportunity to explore the meander of monorepos with yarn workspaces.
It is very interesting how this project leverages this technology.
More on this to follow!

![screenshot 1](https://iphone-js.web.app/screenshot1.png)
![screenshot 2](https://iphone-js.web.app/screenshot2.png)

## Demo

Check out the demo [here](https://iphone-js.web.app/).

## How to use

### Preliminary

1. Clone on your machine via SSH or HTTPS:

   Via SSH (suggested):

    ```
    git clone
    ```

   Via HTTPS:

    ```
    git clone
    ```

2. Enter folder:

    ```
    cd phone-js
    ```

3. Install dependencies

    ```
    yarn
    ```

### Run on your machine

1. Start the core package in development mode:

    ```
    yarn start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for production

1. Build all packages (`packages/*`) based on the dependency tree:

    ```
    yarn build
    ```

2. Final build can be found in `packages/core/build`.

## Tech Stack

- React v18
- React Router v6
- TypeScript v4.7
- Yarn Plug'n'Play

## Monorepo

This repo is managed as a monorepo that is composed of many npm packages.

### Pros and cons

Quoting babel:

> **Pros:**
>
> * Single lint, build, test and release process.
> * Easy to coordinate changes across modules.
> * Single place to report issues.
> * Easier to setup a development environment.
> * Tests across modules are run together which finds bugs that touch multiple modules more easily.
>
> **Cons:**
>
> * Codebase looks more intimidating.
> * Repo is bigger in size.
> * [Can't npm install modules directly from GitHub](https://github.com/npm/npm/issues/2974)
> * ???

### Yarn workspaces

In this project, the tool used to achieve this is [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

Yarn workspaces does many things:

- It links npm packages contained in the monorepo. This enables us to have a great DX, as we can run all the packages
  in development mode at the same time and see how they behave together as we code.
- It provides CLI commands that are very useful to manage monorepos. For instance, the `yarn build` script of this
  project runs `yarn workspaces foreach -pt run build`, which builds all the packages in the monorepo based on the
  dependency tree.

### Monorepo strategy

![monorepo structure](/docs/images/phonejs_structure.png)

The monorepo contains the following types of packages:

- The `core` package - contains the code that makes up the phone and binds all the "app" packages together.
  Apps are plugged-in inside [phoneApps.ts](/packages/core/src/app/features/PhoneApp/phoneApps.ts).
- The `app` packages - each package is an "app" that takes place into the phone app gallery.
- The `utils` package - contains common utils helpful to code the "apps".

## Scalability

This project is powered by React Router v6. All the packages have access to the router and each "app" package is able to have
its own routes.

Each and every "app" is lazy loaded. This is incredibly important because it means that, no matter how many apps get plugged-in,
loading time remains constant.

## Yarn PnP

This monorepo makes use of Yarn Plug'n'Play. Quoting Yarn:

> The way Yarn PnP works, it tells Yarn to generate a single Node.js loader file
> in place of the typical node_modules folder. This loader file, named .pnp.cjs, contains all information about your project's
> dependency tree, informing your tools as to the location of the packages on the disk and letting them know how to resolve
> require and import calls.

This system brings many advantages, which you can read [here.](https://yarnpkg.com/features/pnp#what-are-the-advantages)

One disadvantage, which you may notice while cloning, is that the repository gets sensibly bigger.

## Maintainers

- [oxcened](https://github.com/oxcened)

## License

This project is available under the MIT license. You can find a copy of the license [here](/LICENSE).
