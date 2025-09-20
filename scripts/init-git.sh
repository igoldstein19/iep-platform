#!/bin/bash

# Script to initialize Git repository for IEP Platform
# Run this script after installing Xcode developer tools

echo "Initializing Git repository for IEP Platform..."

# Initialize git repository
git init

# Set up initial git configuration if not already set
git config --global user.name "$(git config --global user.name 2>/dev/null || echo 'Your Name')"
git config --global user.email "$(git config --global user.email 2>/dev/null || echo 'your.email@example.com')"

# Add all files to staging area
git add .

# Create initial commit
git commit -m "Initial commit: Set up IEP Platform project structure

- Added project directory structure
- Created comprehensive README.md
- Added .gitignore with FERPA compliance considerations
- Set up basic project folders (src, tests, docs, config, scripts)"

echo "Git repository initialized successfully!"
echo "Don't forget to set up your remote repository:"
echo "git remote add origin <your-repository-url>"
echo "git push -u origin main"