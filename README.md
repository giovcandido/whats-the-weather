# What's The Weather - works in all weathers

<p align="center">
    <img src="https://github.com/giovcandido/sedona/blob/master/demos/playlist_download.gif?raw=true" alt="Sedona downloading a playlist">
</p>

Rain or shine, this weather app will tell you easily.

## Contents

- [About](#about)
- [Usage](#usage)
- [Example](#example)
- [Requirements](#requirements)
- [Installation](#installation)
- [Contribute](#contribute)

## About

What's The Weather is a web app that shows you information about the weather in all corners of the earth. It's made with ReactJS through OpenWeather public API. You can check it out [here](https://giovcandido.github.io/whats-the-weather/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

In order to use it, you can either use the live demo or download it to your machine.

The live demo uses my personal API. You can make a good couple of requests with it.

All you have to do in both cases is loading the web app and serching for the city you want to get wheater data about. If the search is successful, a card with weather information about the city is added to the app front page. Otherwise, you may see an error message.

You can search as many cities as you want. And as you search, cards are added to the page. 

If you want to remove the cards, try reloading the page. Additionally, there is a clear cards button you can use to avoid refreshing the page.

Another cool thing you can do is turning on the lights. In case you don't like the default dark theme.

## Demos

## Installation

If you want to clone the repository or download the source code to your machine, go ahead.

After having the the app locally, you can run it with _yarn_.

In order to do so, first you need to install yarn. Check the installation process [here](https://classic.yarnpkg.com/lang/en/docs/install/).

Now, with yarn installed, open the source code directory in your terminal and run:
```bash
yarn install
```

Then, you need to set your API key. Go to the __src__ directory. Inside of this one, there's the __config__ directory. Head to the config directory.

In order to help you, we're looking at the following structure:
```bash
src
├── config
│   ├── config.sample.ts
│   └── config.ts
```

Making it easier for you, run:
```bash
cd src/config/
```

In the config directory, there's a _config.sample.ts_ with the following content:
```ts
export default {
  api: {
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    appid: '[YOUR KEY HERE]'
  }
}
```

Place your API key in _appid_, with single quotation marks. And rename the file to _config.ts_.

Head back to the main directory by running:
```bash
cd ../..
```

Now, all you have to do is running:
```bash
yarn start
```

## Contribute

Feel free to reach out and contribute. We can add more features to What's The Weather.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
