# Collective Meetings Frontend
This project is the frontend for the Collective Meetings application, built using React and TypeScript. It connects to the backend REST API to manage user meetings, handle guest participation, and provide scheduling options for events.

# Table of Contents
- Installation
- Features
- Project Structure
- Available Scripts
- Dependencies


### Installation
- Clone the repository:
```bash
git clone https://github.com/gabasaura/collective-meetings-frontend.git
cd collective-meetings-frontend
```
- Install dependencies:
```bash
npm install
npm start
```

### Features

- User Management: Create and manage user profiles, roles (creator, guest, moderator).
- Meeting Scheduling: Users can create meetings and invite guests.
- Time Slot Voting: Guests can choose preferred time slots, and rankings are calculated based on the most available time.
- Hash-based Meeting Access: Meetings can be accessed via unique hash links for guest users.
- Role-based Permissions: Guests can add preferences, while creators can edit meetings and deactivate users.


### Project Structure
The project is structured as follows:

```bash
src/
│
├── api/               # API call logic
├── components/        # Reusable UI components
├── pages/             # Main pages (Home, Meeting, Profile, etc.)
├── hooks/             # Custom hooks
├── utils/             # Utility functions (e.g., date handling, hash generation)
├── styles/            # Global and component-specific styles
├── App.tsx            # Root component
├── index.tsx          # Main entry point
└── ...
```

### Available Scripts
In the project directory, you can run:

- npm start: Runs the app in the development mode.
- npm test: Launches the test runner.
- npm run build: Builds the app for production to the build folder.
npm run lint: Runs ESLint to check for code issues.

### API Integration
The frontend interacts with the [THIS](https://github.com/gabasaura/api-rest_collective-meetings) REST API. 

### Dependencies
- React: Frontend library for building user interfaces.
- TypeScript: Type checking for better developer experience.
- Axios: HTTP client for API requests.
- React Router: For navigation between pages.
- Module Css

### License
This project is licensed under the MIT License.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
