#!/bin/bash

# exit bij een fout
set -e

echo 'RUNNING SCRIPT: perform-all-web-tests.sh'
echo "npm ci"
npm ci
echo "run all web tests"
npm run build:all
npx nx wct map
