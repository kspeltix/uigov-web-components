#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-libs-and-storybook.sh'
cd uigov-web-components
echo "npm ci"
npm ci
echo "build apps"
npx nx build
echo "build libraries"
npm run build:all
echo "build storybook"
npx nx build-storybook storybook
