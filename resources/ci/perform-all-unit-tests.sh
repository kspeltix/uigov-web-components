#!/bin/bash

# exit bij een fout
set -e

echo 'RUNNING SCRIPT: perform-all-unit-tests.sh'
cd uigov-web-components
echo "npm ci"
npm ci
echo "run all unit tests"
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
