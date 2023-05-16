#!/bin/bash

echo 'RUNNING SCRIPT: perform-all-unit-tests.sh'
echo "npm ci"
npm ci
echo "run all unit tests"
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
