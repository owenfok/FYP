ava tests/Bucket.ts 
mocha --exit --timeout 120000 -r ts-node/register tests/login.test.ts 
mocha --exit --timeout 120000 -r ts-node/register tests/CloudFunction.test.ts
mocha --exit --timeout 120000 -r ts-node/register tests/firewall.js
mocha --exit --timeout 120000 -r ts-node/register tests/ComputeEngine.js
