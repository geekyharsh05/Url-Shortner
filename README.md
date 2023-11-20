# Url Shortner

This Node.js and Express application serves as a URL shortener service with MongoDB as the backend database. It allows users to create short URLs for long URLs and handles the redirection to the original URLs

## Prerequisites

- nodejs
- MongoDB
- npm
- pnpm(prefered package manager)

## Installation

Clone the project

```bash

git clone git@github.com:geekyharsh05/Url-Shortner.git
```

Install necessary dependencies

```bash

cd Url-Shortner
pnpm install
```

Run the dev server with

```bash

pnpm start
```

### NOTE: Setup environment variable in .env

## API Endpoint

### Generate Short URL

- **Endpoint:** `POST api/generate`
- **Description:** Generates a new short URL for the provided long URL.
- **Request Body:**
  - `url` (string): The original long URL to be shortened.
  
### Redirect Short URL

- **Endpoint:** `GET api/:shortId`
- **Description:** Redirects the short URL to the original URL and updates the visit history.
- **Parameters:**
  - `shortId` (string): Short identifier for the URL.

### Analytics For Short URL

- **Endpoint:** `GET api/analytics/:shortId`
- **Description:** Retrieves analytics data for a specific short URL, including visit history.
- **Parameters:**
  - `shortId` (string): Short identifier for the URL.

## Author

**Author Name** &nbsp; : &nbsp; Harsh Vardhan Pandey <br>
**Author URI** &nbsp; &nbsp; &nbsp; : &nbsp; [www.aboutharsh.vercel.app](https://aboutharsh.vercel.app/) <br>
**GitHub URI** &nbsp; &nbsp; &nbsp; : &nbsp; [geekyharsh05](https://github.com/geekyharsh05)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)