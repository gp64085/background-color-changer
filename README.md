# Background Color Changer

A simple React application that lets you change the page background color using buttons. Built with Vite, React, and TypeScript. This project demonstrates component composition, state management, and correct event handler forwarding.

## Features
- Buttons to set predefined background colors
- Type-safe components with TypeScript
- Fast development experience with Vite and hot module replacement
- Minimal, clear component structure

## Getting Started

Prerequisites:
- Node.js version 18 or newer
- One package manager: npm, pnpm, or yarn

Installation:
- Install dependencies using your preferred package manager

Development:
- Start the development server and open the printed local URL in your browser

Build:
- Create a production build using the build script

Preview:
- Preview the production build locally using the preview script

## Project Structure (high level)
- Root folder containing configuration and scripts
- Source folder with application code:
  - Main application entry
  - App component
  - Reusable Button component
  - Global styles

## How It Works
- The App component maintains the selected background color in state
- Each Button triggers a click handler that updates the selected color
- The selected color is applied to the page container or the document body

## Common Pitfall
If clicking a button doesn’t change the background, ensure your Button component forwards the click handler prop to the native button element. Without forwarding the handler, clicks won’t update the state.

## Scripts
- Development server
- Production build
- Local preview of the production build
- Optional linting if configured

## Tech Stack
- React 18
- TypeScript
- Vite
- ESLint (optional)

## Contributing
Issues and pull requests are welcome. Please ensure the project builds and passes lint checks before submitting changes.

## License
MIT