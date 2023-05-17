#!/bin/bash

# exit bij een fout
set -e

echo 'clone repo'
git clone --branch feature/UIG-2466-build https://github.com/milieuinfo/uigov-web-components.git
git fetch --tags
