pulumi up -y
pulumi stack import --file stack.json
mocha -r ts-node/register tests/*.ts
