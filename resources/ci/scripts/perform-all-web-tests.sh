#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: perform-all-web-tests.sh'
cd uigov-web-components
echo "npm ci"
npm ci
echo "run all web tests"
npm run build:all
npx nx wct map
