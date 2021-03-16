ava tests/Bucket.ts 
mocha --exit --timeout 120000 -r ts-node/register tests/login.test.ts 
mocha --exit --timeout 120000 -r ts-node/register tests/functions.test.ts
mocha --exit --timeout 120000 -r ts-node/register tests/firewall.js
