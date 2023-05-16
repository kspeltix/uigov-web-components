#!/bin/bash

# exit bij een fout
set -e

echo 'RUNNING SCRIPT: perform-all-unit-tests.sh'
cd uigov-web-components
echo "npm ci"
npm ci
echo "build apps"
npx nx build
echo "build libraries"
npm run build:all
echo "build storybook"
npx nx build-storybook storybook
