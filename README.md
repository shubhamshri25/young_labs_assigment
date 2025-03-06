# Greeting App

A simple web application where users can enter their name and receive a greeting message.

## Live Demo

- **Frontend:** [Click Here](https://young-labs-assigment-n6w1.vercel.app/)
- **Backend API:** [Click Here](https://young-labs-assigment.vercel.app/api/greet/?name=YourName)

## How It Works

1. Enter your name in the input field.
2. Click the "Get Greeting" button.
3. The app fetches a greeting from the backend and displays it.

## Technologies Used

- **Frontend:** React (Vite), Axios
- **Backend:** Node.js, Express.js

## API Endpoint

### GET `/api/greet?name=`shubham

- **Success Response:**
  ```json
  {
    "message": "Hello, shubham! Welcome to Younglabs."
  }
  ```
- **Error Response:**
  ```json
  {
    "error": "Name is required."
  }
  ```

## Deployment

- **Frontend:** Hosted on Vercel
- **Backend:** Hosted on Vercel


