# Weekday : Find jobs via Weekday (YC W21)

## Project Setup:

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server
4. Open `http://localhost:5173` in your browser

## Project Structure:

- `src/` contains the source code
- `src/components` contains the React components
- `src/hooks` contains the custom hooks
- `src/apis` contains the API functions
- `src/lib/utils.ts` contains the utility functions and filtering logic
- `src/lib/constants.ts` contains all the constants used in the project
- `src/types` contains all the types used in the project
- `src/services/api-client.ts` contains the axios instance
- `src/redux` contains the redux store, actions, reducers, and selectors

## Features:

- Filter jobs by roles: users can select multiple roles to filter the jobs
- Search by job location: users can search for jobs by location
- Filter jobs by Minimum Experience: users can filter the jobs by minimum experience required
- Filter jobs by Job Type: Remote, Hybrid, or Onsite
- Filter jobs by minimum base salary

## Tech Stack:

- React
- Redux Toolkit
- TypeScript
- Axios
- Material-UI
- TanStack/react-query
- React Icons

## Custom Components:

- `GenericSelect` - A generic select component that can be used to render a select dropdown with custom styles according to the design of the application
- `JobCard` - A card component that displays the job details
- `SingleSelect` - A single select component that can be used to render a select dropdown with custom styles according to the design of the application
