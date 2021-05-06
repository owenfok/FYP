#pulumi up -y
# Get the GCP resources data
pulumi stack export --file stack.json
#  Generate stack.json
mocha -r ts-node/register tests/*.ts
#  Run test
