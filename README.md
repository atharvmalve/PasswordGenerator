# Password Generator React Project

Welcome to the Password Generator React project! This project is part of the "7 Days of React Basics" series happening on LinkedIn. In this project, we explore the fundamentals of React, including React hooks such as `useState`, `useEffect`, `useRef`, and `useCallback`.

## Getting Started

Follow these steps to run the project locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## React Hooks Explained

### useState

`useState` is a hook that allows functional components to manage state. It returns a stateful value and a function to update that value, similar to this.setState in a class.

### useEffect

`useEffect` is a hook that performs side effects in function components. It runs after every render and can be used to perform data fetching, subscriptions, or manually changing the DOM.

### useRef

`useRef` is a hook that returns a mutable ref object whose `.current` property is initialized to the passed argument. It can be used to access DOM nodes or persist values across renders without causing re-renders.

### useCallback

`useCallback` is a hook that returns a memoized callback function. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders.

## Why We Shouldn't Use Callback Functions All the Time

While callback functions are essential in many cases, using them excessively can lead to performance issues, especially in React components. Every time a component re-renders, functions defined within it are recreated. This can cause unnecessary re-renders in child components that depend on reference equality for optimization.

For more insights on optimizing performance with `useMemo` and `useCallback`, check out [this article](https://kentcdodds.com/blog/usememo-and-usecallback) by Kent C. Dodds.

Feel free to explore and contribute to this project! Happy coding! 🚀
