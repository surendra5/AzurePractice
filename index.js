#!/usr/bin/env node
require('dotenv').config();
const util = require('util');
const storage = require('azure-storage');
const blobService = storage.createBlobService();
const containerName = 'photoblobs';

const createContainerAsync = util.promisify(blobService.createContainerIfNotExists).bind(blobService);

async function main() {
   
   try{
       var result = await createContainerAsync(containerName);
    if (result.created) {
        console.log(`Blob container ${containerName} created`);
    }
    else {
        console.log(`Blob container ${containerName} already exists.`);
    }
   }catch(err){
       console.log(err.message);
   }
}

main();