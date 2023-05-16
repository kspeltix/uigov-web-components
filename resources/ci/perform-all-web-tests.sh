#!/bin/bash

echo 'RUNNING SCRIPT: perform-all-web-tests.sh'
npm run build:all
npx nx wct map
