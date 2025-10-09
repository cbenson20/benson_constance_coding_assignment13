Assignment 12: UI Garden – Dockerize Storybook Component Library
Overview

Hi, I’m Constance Benson, a Full-Stack Web Development student at Red River College Polytechnic.
This project is my UI Garden for Assignment 12, a library of reusable UI components like Buttons, Labels, Cards, Tables, and more, all built using React, TypeScript, and Styled Components, and displayed with Storybook.

The main goals of this assignment were to:

- Build a clean, modular component library
- Use Storybook for testing and documentation
- Dockerize the setup so it can run on localhost:8083 using Nginx

# Project Setup

Open VSCode
Go to Terminal (Terminal than go to New Terminal)

# Create the project with TypeScript (replace whatever name you want to use in the place you see my name)

npx create-react-app benson_constance_ui_garden --template typescript
cd benson_constance_ui_garden

# Installs and sets up Storybook automatically in your React project.

npx storybook@latest init

# Install styling dependencies

npm install styled-components
npm install --save-dev @types/styled-components

After setting up, I opened the project in VS Code and started coding inside the src/components directory.

# How I Built the Components

Each component was created in its own folder under src/components.
I used TypeScript for type safety, Styled Components for styling, and Storybook to visualize and test everything interactively.

Process I followed for each component:

Component File (ComponentName.tsx)
Defined the structure using React functional components (e.g., Button with things like text, disabled, and onClick).

Types File (ComponentName.types.ts)
Defined TypeScript interfaces to enforce type safety and clarity.

Styled Components
Handled styles directly in TypeScript files for better modularity and maintainability.

Storybook Stories (ComponentName.stories.tsx)
Created multiple stories (Default, Hovered, Disabled) to showcase different states visually.

Test Files (ComponentName.test.tsx)
Verified rendering, visibility, and color changes when disabled using Jest and React Testing Library.

Following this structure made each component reusable, and easy to maintain.

--- Component Library ---

The library includes the following components:
Button
Label
Text
Table (with TableHeader, TableRow, TableCell, and TableFooter)
Dropdown
RadioButton
Img
HeroImage
Card

Each component is designed to be customizable and consistent, ideal for building interfaces that maintain a unified look and feel across multiple projects.

# Requirements

Before running the project, make sure you have:
Node.js 20 or higher
Docker Desktop

Running the Project Locally

1. cd C:\Users\DELL\Desktop\benson_constance_ui_garden (the project folder)
2. Install dependencies
   npm install
3. Run Storybook locally
   npx storybook dev -p 6006
   Then open your browser and go to:
   http://localhost:6006, You’ll see all the components displayed in Storybook.

# Testing

This project uses Jest and React Testing Library (included with Create React App).

Each component has a file like:
src/components/ComponentName/ComponentName.test.tsx

- Tests cover at least two things per component:

* The component renders and is visible
* The disabled state changes styling (e.g., background color / opacity)

Run all tests:
npm test -- --watchAll=false

# Docker Setup

Create a dockerfile in your project folder

- Here’s the Dockerfile used to build and run Storybook inside a container:

# ---- This will Build React App ----

FROM node:20-alpine AS react_build
WORKDIR /benson_constance_ui_garden
COPY package\*.json ./

- RUN npm install --legacy-peer-deps
  COPY . .
  RUN npm run build

# ---- This will Build Storybook ----

FROM node:20-alpine AS storybook_build
WORKDIR /benson_constance_ui_garden
COPY package\*.json ./

- RUN npm install --legacy-peer-deps
- COPY . .
  RUN npx storybook build

# ----This is the Production (Nginx) ----

FROM nginx:alpine
WORKDIR /benson_constance_ui_garden
COPY --from=react_build /benson_constance_ui_garden/build /usr/share/nginx/html/react
COPY --from=storybook_build /benson_constance_ui_garden/storybook-static /usr/share/nginx/html/storybook

- EXPOSE 8083
  CMD ["nginx", "-g", "daemon off;"]

# Building Docker: Build the Docker image

- docker build -t benson_constance_ui_garden .

# Run the container

docker run -d -p 8083:80 --name benson_constance_coding_assignment12 benson_constance_ui_garden

What this does:
-d runs the container in the background
-p 8083:80 maps your computer’s port 8083 to Nginx’s port 80 inside the container

Viewing the App
Once it’s running, open your browser and visit:
http://localhost:8083, You will see your full Storybook UI Garden running inside Docker.

--- Managing the Container ---
Stop the container:
docker stop benson_constance_ui_garden

Restart it:
docker start benson_constance_ui_garden

Conclusion:
This project helped me strengthen my understanding of component-driven development and deployment workflows.
Through it, I learned to:

- Build and document React components using Storybook
- Use TypeScript and Styled Components for clean, scalable UI design
- Configure Docker and Nginx for real production deployment

Running everything successfully on localhost:8083 was the best part, it confirmed that the build, containerization, and deployment were all working together perfectly.
