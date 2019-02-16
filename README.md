# VPN Sample Business Website

A mostly front-end sample website created using React. Currently, there is no checkout or purchase page on this website, as this is a showcase of my basic front-end skills. The back-end is created using Express and has the job of setting the user's cookies and fetching API requests.

## Getting Started

Download or clone the project to get started. No configuration is needed for the project to work, as dummy data will be inserted if the client is unable to connect to the server.

### Install

To run on your local machine, install the dependencies and then we will run two scripts.

Step 1: Open a node js command prompt or console and navigate to the server folder. Then run the following command:

```
yarn server
```

Step 2: Open a separate node js command prompt or console and navigate to the client folder. Then run the following command:

```
yarn start
```

Ta-da! Hopefully everything is working. 

## Deployment

A production ready deployment can be made with a few extra configurations.

Step 1: Navigate to the server folder and then to the keys folder. Then, create a file named dev.js.

```
server ---
        |
        keys ---
              |
              dev.js <--- Create this file
              keys.js
              prod.js
```

Step 2: In the dev.js file paste the following:

```
module.exports = {
  apiGoogleMaps: "YOUR_API_KEY_HERE"
};
```

NOTE: Replace the YOUR_API_KEY_HERE with your own personal Google Maps API key. Make sure the API key is a string (Place the API key in between quotes).

Step 3: Repeat steps 1 & 2.

```
client ---
        |
        src ---
              |
              keys ---
                    |
                    dev.js <--- Create this file
                    keys.js
                    prod.js

Inside the dev.js file:

module.exports = {
  apiGoogleMaps: "YOUR_API_KEY_HERE"
};
```

## Authors

* **Leon Yanagida** - *Initial work* - [Leon Yanagida](https://leonyanagida.com)

## Acknowledgments

* Icon made by Smashicons from [flaticon](https://www.flaticon.com)
* IP Info API made by neutrinoapi from [neutrinoapi](https://rapidapi.com/user/neutrinoapi)