#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: e2e-tests-storybook-2.sh'
cd uigov-web-components
echo "npm ci"
npm ci
echo "run the e2e tests"
npm run storybook:ci-test-parallel-2