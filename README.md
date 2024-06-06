# Timer Game Project

This repository contains a Timer Game project built with React, demonstrating the use of advanced React concepts such as `useRef`, ref forwarding, `useImperativeHandle`, and portals. The project serves as a practical example of how to apply these concepts in a real-world application, specifically a timing-based game.

## Game Description

The Timer Game challenges players to stop a timer as close to a specified time as possible. Players enter their name and choose from four difficulty levels: 
- **Easy** (1 second)
- **Not Easy** (5 seconds)
- **Getting Tough** (10 seconds)
- **Pros Only** (15 seconds)

The closer the player stops the timer to the target time, the higher their score.

## Key Concepts and Implementation

### `useRef` Hook
- **Accessing DOM Elements**: The `useRef` hook is used to directly interact with and manipulate DOM elements, such as the timer display. This allows for efficient and direct updates without triggering re-renders.

### Ref Forwarding
- **Passing Refs to Child Components**: Ref forwarding allows parent components to pass refs to their children, enabling direct manipulation of child components.

### `useImperativeHandle` Hook
- **Exposing Custom APIs**: The `useImperativeHandle` hook defines custom methods that parent components can call, providing a controlled API for interaction.

### Portals
- **Rendering Outside the Main DOM Tree**: React portals render components outside the main DOM hierarchy, useful for modals and overlays.

## Features

- **Name Entry**: Players can enter their name before starting the game.
- **Timer Levels**: Four difficulty levels with different target times (1, 5, 10, and 15 seconds).
- **Scoring System**: Players earn points based on how close they stop the timer to the target time.
- **Modal Display**: Game results and scores are shown in a modal, rendered using React portals.
- **Keyboard Interaction**: The modal can be closed via the ESC key for enhanced user experience.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/trishna456/timer-game.git
   ```

2. **Navigate to the project directory**:
 ```sh
 cd timer-game
```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Start the development server**:
   ```sh
   npm start
   ```


 
