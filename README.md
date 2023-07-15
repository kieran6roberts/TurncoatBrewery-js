# ARCHIVED (Outdated) - Turncoat Brewery - Mock Brewery Site

This is a site built for a mock brewery and includes a home, products and contact pages as well as a small e-commerce store. The client-side of the app is built using vanilla JS and CSS while the server-side code uses Node.js to build a simple express server and connect to mongoose which stores my products.

## Table of contents
* [Project Objectives](#project-objectives)
* [Primary Technologies](#primary-technologies)
* [Getting Started](#getting-started)
* [Running Tests](#running-tests)
* [Author](#author)


## Project Objectives

The aim of this project was to build a full, responsive and fluid site for a ficticious brewing company that included a basic e-commerce store as the main feature and so I could include the project in my portfolio. Having only just began to play around with node.js I wanted to write a simple server using express and connect it to a database that could store my own custom products instead of using a headless CMS so that I could learn some node basics. I also wanted to practice with another templating language after trying Handlebars so for this project I went with ejs. Finally, on the frontend the use of a large framework was not required for this task as the only complex state management required is in the store and I wanted to improve my vanilla javascript skills through building the store functionality.

## Primary Technologies

* javaScript
* css
* node.js 14.x
  * express 4.17.1
  * mongoose 5.10.4
  * ejs 3.1.3
 * webpack 5.11.1
* jest 26.6.0

## Getting Started

For this project you will need to install node.js and mongodb on your machine. First clone the repo to your machine and install the project dependencies using
```
npm install
```
Then you will need to setup cloud storage for the store products. For this project I went with [mongodb cloud](https://www.mongodb.com/cloud).

First setup your cluster and then when ready connect it to the app by creating the `.env` file using the `.env.example` provided. 
In order to populate the cluster with products run the command
```
npm run seeder
```

To build and run the app use
```
npm run build-prod && npm run start-prod
```
and open the project at http://localhost:5000.

## Author
* Kieran Roberts
