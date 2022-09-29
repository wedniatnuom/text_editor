
# PWA Text Editor

## Description

- Project Motivation: I wanted to build a text editor that can be used online or offline using webpack. I also wanted to learn how to use webpack in an application.

- Purpose: It is the project do for module 19 of my coding bootcamp.

- What did it solve: It gives a user the ability to record information and haved it saved locally whether they have access to the internet or not.

- What I learned along the way: More than the webpack info, I really learned how to build a proper package.json file. I understand what the components are inside it now. 

## Installation

Steps required to get off the ground: You need to do an "npm install" to add  babel, webpack, idb, and express to the app. They are all built into the package.json files in the root, server, and client directories. Next, you run "npm run start". This will build the dist folder and create your service workers, manifest, and storage database. 

## Usage

How to use: Navigate to the page where it is being hosted on Heroku (see below). Click "Install" to install the app locally. There are currently errors to pulling the info back from the local storage, but it can all be found by right clicking the app to inspect it. The info is being submitted to local storage under the Application tab.

## Live Link

https://text-editor-722.herokuapp.com/

## Future Developement

I'd like to correct the errors in retrieving the info from the database. We were given new starter code for development, but I am getting the same e.split error. This will be corrected down the road.


