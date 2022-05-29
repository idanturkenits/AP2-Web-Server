#Second exercise in course "Advanced Programming 2" - Server Side
<img src="https://user-images.githubusercontent.com/84286628/165817467-77ee218e-da91-4d19-9544-a1626b1c6aec.png" width="100" height="100">

## Prerequisites
This project requires NodeJS (version 8 or later) and NPM.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

The project contains 3 diffrent servers, which all can run on your local machine on diffrent ports 
 - localhost:5112 - web api
 - localhost:5197 - rating page
 - localhost:3000 - react application

## Running Instructions

**BEFORE YOU RUN :** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/idanturkenits/AP2-Web-Client.git
```

### Web API & Rating Page
Both of them were written using the .Net framework.
Its best to run them using a trusted software, for example Visual Studio which supports .NET.


### React Application
To install and set up the application, run:

```sh
$ cd web-client
$ npm install
$ npm start
```

## Features
- **Live Communication** - If you sign out and then sign back in as another user, you will see the new messages.
- **Search** - Search for a chat involving a specific user using the serachbox.
- **Online Updates (using SignlR)** - The user list will be updated in real time as new notifications are received.

## Sample Pictures
![login](https://user-images.githubusercontent.com/84286628/165820445-188c76c6-b226-41b4-8595-3d131abbbaa3.jpg)
![signup](https://user-images.githubusercontent.com/84286628/165824414-5446bae2-38c2-48e4-89c0-a71488a33ded.jpg)
![chatPage](https://user-images.githubusercontent.com/84286628/165824418-73302772-5639-42b5-b35c-aae18f710ddf.jpg)
![liveChat](https://user-images.githubusercontent.com/84286628/165821849-afa1a4d2-a5fd-46b5-a1ab-b8e5e8428846.jpg)

## Authors

* **Ido Barkai** - [Ido Barkai](https://github.com/idob10)
* **Idan Turkenits** - [Idan Turkenits](https://github.com/idanturkenits)
* **Yogev Abarbanel** - [Yogev Abarbanel](https://github.com/Yogev173)
