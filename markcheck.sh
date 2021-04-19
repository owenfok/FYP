pulumi up -y
pulumi stack export --file stack.json
mocha -r ts-node/register tests/*.ts
