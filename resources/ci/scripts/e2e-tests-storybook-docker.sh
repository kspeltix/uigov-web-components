#!/bin/bash

# exit on error
set -e

echo "RUNNING SCRIPT: e2e-tests-storybook-${STORYBOOK_INDEX}-docker.sh"
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/e2e-tests-${STORYBOOK_INDEX}-storybook.sh
cd uigov-web-components/resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
