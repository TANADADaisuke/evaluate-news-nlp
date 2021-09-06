# Evaluate News with Natural Language Processing

## Overview

This project is a NLP(Natural Language Processing) application to evaluate text meaning. Users can input their favorate text and see the response showing some specifics of that input.

## Getting started - HOw to use this application

1. Install dependencies

`cd` into your new folder and run:
- `npm install`

2. Setting up the meaningcloud API

This application uses the [meaningcloud](https://www.meaningcloud.com/) API to evaluate text meaning.
To set up the meaningcloud API, follow the instruction.

### Step 1: Signup for an License key

First, you will need to go [here](https://www.meaningcloud.com/developer/create-account). Signing up will get you an License key.

### Step 2: Create `.env` file

Because of security reason, you have to keep your license key local. Create .env file locally and store your license key in it.
```
API_KEY=*********
```

3. Launch application

- `npm run build-dev` to launch application in dev mode.
- `npm run build-prod` and then `npm start` to launch applicaiton in prod mode.
