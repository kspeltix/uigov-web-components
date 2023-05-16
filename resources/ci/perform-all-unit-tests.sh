#!/bin/bash

echo 'RUNNING SCRIPT: perform-all-unit-tests.sh'
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
