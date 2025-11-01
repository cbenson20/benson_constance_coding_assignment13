Assignment 13 – Code Quality and Build Checks

Hi, I’m Constance Benson, a Full-Stack Web Development student at Red River College Polytechnic.
This project builds on my UI Garden from Assignment 12, the one that showcased reusable UI components (like Buttons, Cards, Labels, and Tables).

# In this assignment, I focused on something different:

making sure every piece of code that goes into the project is clean, consistent, and working before it’s ever committed or deployed.
That’s what “Code Quality and Build Checks” means.

# What This Project Adds

In Assignment 12, the goal was building.
In Assignment 13, the goal is protecting the build,by adding tools that automatically check and test the code.

Here’s the Tools i added and what each one does:

**Prettier**: Automatically formats code so everything looks consistent,same spacing, quotes, and indentation everywhere.
**ESLint**: Scans the code for mistakes or “bad habits” and helps me follow React + TypeScript best practices.
**Husky**: Runs checks before I commit changes, so broken code never gets saved into Git.
**GitHub Actions**: Re-runs all the checks online whenever I push my code, to make sure everything still works on GitHub.
**Docker**: Packages the whole app so it can run exactly the same on any computer, like a self-contained box.

# How the Pre-Commit Checks Work

Before any code is committed, Husky automatically runs three checks in order:

npm run format:check
npm run lint
npm test

Here’s what happens behind the scenes:

Prettier checks that my code is neatly formatted.
If something’s off, it stops me and tells me to fix it.

ESLint scans for logic or syntax errors.
For example, if I forgot to import React or typed a variable name wrong, it catches it.

Tests run automatically using Jest and React Testing Library to make sure components behave correctly.

If any of these steps fail, Husky stops the commit.
That means no messy or broken code ever gets pushed to GitHub.

# Continuous Integration (GitHub Actions)

Once my code passes all local checks and I push it to GitHub,
GitHub Actions kicks in automatically using a file called:
.github/workflows/ci.yml

Think of this file as GitHub’s “to-do list.”
Every time I push or open a pull request, GitHub:

Installs Node.js and all dependencies

Runs npm run format:check

Runs npm run lint

Runs all tests with npm test

Builds the project for production

If everything passes, the workflow shows a green check mark.
If something breaks, GitHub flags it right away, so I can fix it before merging.

This is called “CI Pipeline”

# Running the Project in Docker

Docker makes it easy for anyone to run this project on their computer without installing Node, React, or any dependencies.
Everything is already inside the container.

# NOTE: Replace your project name with my my name

1. Build the Docker image
   docker build -t benson_constance_coding_assignment13 .

2. Run the container
   docker run -p 8018:80 --name benson_constance_coding_assignment13 benson_constance_coding_assignment13

3. Open the app

Visit http://localhost:8018
in your browser.
You’ll see the same app running just like it did in Assignment 12 — only now, it’s been checked, tested, and verified automatically.
