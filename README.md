# Url Shortner

This Node.js and Express application serves as a URL shortener service with MongoDB as the backend database. It allows users to create short URLs for long URLs and handles the redirection to the original URLs

## Requirements

- Docker

or

- nodejs
- MongoDB
- npm
- pnpm(prefered package manager)

## Installation

### With docker

<details>
<summary>
Click Me
</summary>

1. Clone the repository
2. Use docker-compose to run the server

```bash
git clone git@github.com:geekyharsh05/Url-Shortner.git
docker-compose up -d
```

</details>

### Without docker

<details>
<summary>
Click Me
</summary>

1. Clone the repository
2. Install the dependencies
3. Run the server

```bash
git clone git@github.com:geekyharsh05/Url-Shortner.git
cd Url-Shortner
pnpm install
pnpm start
```

</details>


### NOTE: Setup environment variable in .env

## API Endpoints

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
