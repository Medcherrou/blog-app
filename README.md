# React JavaScript Blog App

This is a simple React JavaScript blog app developed using Vite as the bundler. The app fetches posts and users from an external API and displays them.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Redux Actions](#redux-actions)
- [API](#api)
- [Development on Repl.it](#development-on-replit)
- [Contributing](#contributing)

## Demo

Check out the live demo of the app [here](https://blog.mohamedcherrou.repl.co/).

## Installation

1. Clone the repository: `git clone https://github.com/Medcherrou/blog-app.git`
2. Navigate to the project directory: `cd blog-app`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:3000`

## Components

### `PostList`

A React component that fetches and displays a list of posts along with user information.

### `UserHeader`

A React component that displays the name of the user associated with a post.

## Redux Actions

### `fetchPostsAndUsers`

Fetches both posts and users using asynchronous Redux actions. It first fetches posts and then extracts unique user IDs to fetch corresponding user data.

### `fetchPosts`

Fetches a list of posts from the JSONPlaceholder API.

### `fetchUser`

Fetches user data based on the provided user ID from the JSONPlaceholder API.

## API

The app uses the JSONPlaceholder API to fetch posts and user data.

API Base URL: `https://jsonplaceholder.typicode.com`

## Development on Repl.it

This project is developed using Repl.it, an online development environment. To contribute or run the project on Repl.it, follow these steps:

1. Fork the repository.
2. Create a new Repl on Repl.it.
3. Import the repository to your Repl using the repository URL.
4. Set up the `.replit` file with the necessary commands.
5. Start the Repl to run the app.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.
