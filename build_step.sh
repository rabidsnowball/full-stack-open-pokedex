#!/bin/bash

set -e  # Stop on any error

echo "Build script"

# add the commands here
# chmod +x build_step.sh
# If build_step.sh exists and needs to be executable, fix its permissions
if [ -f build_step.sh ]; then
  echo "Making build_step.sh executable..."
  chmod +x build_step.sh
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Run the build
echo "Running build..."
npm run build

echo "Build completed successfully."