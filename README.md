# FYP


Member :

Adian
Owen
William
Stars

# Background ：

The purpose of this project is to develop a marking system and some demo labs about Google Cloud Platform for teachers which can be used as teaching materials. Teachers can use it to create the tailor made lab environment for every student in every lab exercise and use our marking system to check answers.

reference:

https://drive.google.com/file/d/1eq9iqK0DGkEgAbFgd5fcattvZwWkQIrv/view?usp=sharing

https://codelabs.developers.google.com/

https://cloud.google.com/solutions/infrastructure-as-code

https://www.terraform.io/docs/providers/google/d/signed_url.html

https://cloud.google.com/deployment-manager/docs

https://dsc.community.dev/

# Command

Setup the environment
----------------------

curl -fsSL https://get.pulumi.com | sh

pulumi login

pulumi new gcp-typescript -s {account}/{stack name}/dev

gcloud auth login 

gcloud config set project {PROJECT_ID}

git clone https://github.com/owenfok/FYP.git --ignore node_modules/@types

npm i --legacy-peer-deps

Run tests case
----------------------

npm run test 
//Use to run the specified test

npm run tests
//Use to run all test

npm run check
//marker

Check the result
---------------------
cat ./tests/report/report.txt




