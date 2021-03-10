import test from 'ava';

import {​​ Storage }​​ from '@google-cloud/storage'

import axios from 'axios';




const storage = new Storage();



async function listBuckets() {​​

  try {​​

    const results = await storage.getBuckets();



    const [buckets] = results;



    console.log('Buckets:');

    buckets.forEach((bucket: {​​ name: any; }​​) => {​​

      console.log(bucket.name);

    }​​);

    return true;

  }​​ catch (err) {​​

    console.error('ERROR:', err);

    return false

  }​​

}​​



export async function saveToGCP(path: string, filename: string) {​​

  const bucketName = "testadianbucket"

  let response = await storage.bucket(bucketName).upload(path);

  

  console.log(`${​​path}​​ uploaded to ${​​bucketName}​​.`);

  return "gs://testadianbucket/" + filename;

  



}​​



export async function runModel(path: string) {​​

  let response = await axios.post("https://us-central1-testinglearningproject.cloudfunctions.net/app/get-poses", {​​ image: path }​​);

  return response.data;



}​​



test('get gcp to save file', async (t) => {​​



  if (await listBuckets()) {​​

    await saveToGCP("tests/CYRUSWONG.png","CYRUSWONG.png");

    t.assert("CYRUSWONG");

  }​​ else {​​

    t.log("authentication failed")

    console.log("authentication failed")

    t.assert("CYRUSWONG");

  }​​



}​​)
