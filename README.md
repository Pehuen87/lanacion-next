# Challenge Next La Nacion - Product Listing App

## Overview

This project, "Challenge Next La Nacion," was created by Pehuén Assalone. It is a frontend application built with Next.js, which showcases a list of products obtained from a server. The application also enables users to perform searches and navigate through paginated results using server-side components. The frontend uses Axios for making API requests to fetch user data, and the entire project is styled using Tailwind CSS.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Pehuen87/lanacionnext
```

2. Install the dependencies:

```bash
cd lanacionnext
npm install
```

3. Set up the backend server URL:

Create a `.env` file in the root directory of the project and add the following line:

```plaintext
BACKEND_URL=<your-backend-url>
```

Replace `<your-backend-url>` with the actual URL of your backend server.

## Usage

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application at `http://localhost:3000`.

To build the application for production, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm start
```

## Dependencies

The application relies on the following dependencies:

- Axios: For making HTTP requests to the server and fetching user data.
- dotenv: For managing environment variables.
- Next.js: The framework used for building the frontend application.
- Tailwind CSS: The utility-first CSS framework used for styling the entire application.

## Repository

The source code for this project is available on GitHub: [Challenge Next La Nacion](https://github.com/Pehuen87/lanacionnext)
