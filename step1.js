"use strict";

const fsP = require("fs/promises");

/** cat function
 * takes a path and outputs the contents of the file if successful
 * or an error message if unsuccessful
 */

async function cat(path){
  try{
    let contents = await(fsP.readFile(path, "utf8"));
    console.log("contents=", contents);
  } catch(err){
    console.log("error was: ", err.message);
    process.exit(1);
  }
}

const argv = process.argv;

for(let i = 0; i < argv.length; i++){
  console.log(i, argv[i]);
}

cat(argv[2]);