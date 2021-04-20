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

mkdir gcp-typescript-123 && cd gcp-typescript-123

pulumi new gcp-typescript -s {account}/gcp-typescript-123/dev

gcloud auth login 

gcloud config set project {PROJECT_ID}


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




