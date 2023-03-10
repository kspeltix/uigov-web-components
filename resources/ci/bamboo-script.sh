#!/bin/bash

export secret_github_token=${bamboo.secret_github_token}
export test_token=${bamboo.test_token}

echo 'remove old git folder'
rm -rf .git
echo 'clone repo'
git clone --branch release https://${secret_github_token}@github.com/milieuinfo/uigov-web-components.git
cd uigov-web-components

cd resources/ci

echo 'docker-compose up -V'
docker-compose up -V