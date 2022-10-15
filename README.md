# About

Project to demonstrate `useEffect` mostly.

1. Keep the web developer toolbar terminal open while experimenting
1. Mind the commented out `React.StrictMode` in [src/index.js](src/index.js)
1. Notice conditional rendering of `Time` component in `App` component
1. There are two dropdowns (color and timezone) in `App` component
1. Notice the `useEffect` block in the `Time` component
1. Experinemtn with removing the `useEffect` block altogether and "log" re-renders to the console
1. Then reintroduce the `useEffect` block and experiment with different *dependencies*
    1. No dependency array
    1. Empty dependency array, `[]`
    1. Dependency array with timezone only, `[timezone]`
    1. Dependency array with timezone and color, `[timezone, color]`
1. Only changing the timezone should re-trigger the `useEffect` block in `Time` component
1. Mind the *cleanup* function in the `useEffect` block and notice the difference when it's in place compared to when removed
