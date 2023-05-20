# Joke Card Generator

The Joke Card Generator is a web application built using React that fetches a random joke from the "Official Joke API" and displays it on a card. Each time the "New one" button is clicked, a new random joke is fetched and displayed.

## Features

The Joke Card Generator includes the following features:

- Random Joke Fetching: The application fetches a random joke from the "Official Joke API" and displays it on the card.
- New Joke: Clicking the "New one" button fetches a new random joke and updates the displayed joke on the card.

## Prerequisites

Before running the Joke Card Generator, make sure you have the following prerequisites installed:

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Getting Started

To get started with the Joke Card Generator, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Arunangshu-Das/jokegenator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd joke-card-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

5. Open the application in your web browser and enjoy the random jokes displayed on the card. Click the "New one" button to fetch a new joke.

## Customization

You can customize the Joke Card Generator according to your preferences or extend its functionality. Here are some possible customization options:

- Modify the styling: You can customize the styles of the card and the button by modifying the corresponding CSS files or adding your own styles.
- Use a different API: If you prefer to use a different joke API, you can update the `fetchDetails` function in the `Card` component to fetch jokes from the desired API.
- Add additional information: You can enhance the card by displaying additional information about the joke, such as categories or tags.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
