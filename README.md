# Background Color Changer 🎨✨

A delightful React + TypeScript app that lets you change the page background color with a click. Built with Vite for a speedy developer experience. Simple, fast, and fun!

## Highlights 🚀
- Instant color switching via buttons
- Type-safe components with TypeScript
- Blazing-fast dev server with Vite HMR
- Clean and minimal component structure

## Getting Started 🧭

Prerequisites:
- Node.js 18 or newer
- npm (this project uses npm as the package manager)

Install dependencies:
- npm install

Run in development:
- npm run dev
- Open the printed local URL in your browser (usually http://localhost:5173)

Build for production:
- npm run build

Preview the production build:
- npm run preview

## Project Structure 🗂️
- Root folder with configuration and scripts
- src folder with application code:
  - Main entry
  - App component
  - Reusable Button component
  - Global styles

## How It Works 🧩
- The App component keeps track of the selected color using state
- Buttons trigger a click handler to update the selected color
- The chosen color is applied to the page container or document body

## Available Scripts 📜
- dev: Start the Vite development server
- build: Create an optimized production build
- preview: Serve the built app locally for testing

## Tech Stack 🧰
- React 18
- TypeScript
- Vite
- ESLint (optional)

## Contributing 🤝
Have an idea or found a bug? Feel free to open an issue or a pull request. Please ensure the project builds and passes lint checks before submitting.

## License 📄
MIT