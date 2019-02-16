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
  apiURL: "https://community-neutrino-ip-info.p.rapidapi.com/ip-info",
  apiHeader: "X-RapidAPI-Key",
  apiKey: "YOUR_API_KEY_HERE",
  cryptrKey: "INSERT_RANDOM_LETTERS_HERE",
  apiGoogleMaps: "YOUR_GOOGLE_MAPS_API_KEY_HERE"
};
```

### dev.js file notes: 

* Never deply the dev.js file to github
* For apiKey, head over to [rapidapi](https://rapidapi.com/coderholic/api/ipinfo-io) and create an account. Use the API key that is provided to your account
* Replace the apiGoogleMaps with your own personal Google Maps API key. Make sure the API key is a string (Place the API key in between quotes)
* For cryptrKey, put any set of random letters

Step 3: Navigate to the UserGoogleMaps.js file and replace the Google Maps API key with your own.

```
client ---
        |
        src ---
              |
              containers ---
                          |
                          UserIp ---
                                  |
                                  UserGoogleMaps
                                        |
                                        UserGoogleMaps.js
```

NOTE: Make sure to set your config vars if you are deploying to heroku or any other development server.

## Authors

* **Leon Yanagida** - *Initial work* - [Leon Yanagida](https://leonyanagida.com)

## Acknowledgments

* Icon made by Smashicons from [flaticon](https://www.flaticon.com)
* IP Info API made by neutrinoapi from [neutrinoapi](https://rapidapi.com/user/neutrinoapi)