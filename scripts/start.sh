#!/bin/sh

export NODE_ENV=production
export ENVIRONMENT=production

sh ./pre-start.sh
pm2 start ./src/index.js --name backend