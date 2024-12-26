# Unhandled Promise Rejection in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections in asynchronous operations.

The `bug.js` file contains a simple HTTP server that performs an asynchronous operation using `Promise`.  However, it lacks proper error handling, leading to crashes if the asynchronous operation fails.  The `bugSolution.js` file shows how to correctly handle these rejections.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Refresh the page several times. You will see the server crash sometimes.
4. Run `node bugSolution.js`. This version handles rejections gracefully and prevents server crashes.

## Lesson Learned

Always handle promise rejections using `.catch()` to prevent unexpected crashes in your Node.js applications, especially when dealing with asynchronous operations.  Unhandled promise rejections can cause your application to become unstable and difficult to debug.