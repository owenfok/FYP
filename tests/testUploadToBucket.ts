import test from 'ava';
import { saveToGCP } from '../src/googleCloudFunctions';
import { Storage } from '@google-cloud/storage'


const storage = new Storage();

async function listBuckets() {
  try {
    const results = await storage.getBuckets();

    const [buckets] = results;

    console.log('Buckets:');
    buckets.forEach((bucket: { name: any; }) => {
      console.log(bucket.name);
    });
    return true;
  } catch (err) {
    console.error('ERROR:', err);
    return false
  }
}

test('get gcp to save file', async (t) => {

  if (await listBuckets()) {
    await saveToGCP("tests/CRYUSWONG.png","CRYUSWONG.png");
    t.assert("CYRUSWONG");
  } else {
    t.log("authentication failed")
    console.log("authentication failed")
    t.assert("CYRUSWONG");
  }


})



