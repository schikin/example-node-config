#!/bin/sh
RED='\033[0;31m'
NC='\033[0m'

npm install

echo "${RED}Testing local configuration ${NC}"
cp -f .local.js config/local.js && node src/index.js && rm -f config/local.js

echo "${RED}Testing default configuration ${NC}"
node src/index.js

echo "${RED}Testing production configuration ${NC}"
NODE_ENV=production node src/index.js

echo "${RED}Testing production configuration with DB password injection ${NC}"
NODE_ENV=production DB_PASSWORD=testinject node src/index.js
