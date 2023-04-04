"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

const argv = process.argv;

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

/** webCat function
 * takes a path and outputs the contents of the url if successful
 * or an error message if unsuccessful
*/
async function webCat(url){
  try{
    const resp = await axios.get(url);
    const contents = resp.data;
    console.log("contents=", contents);
  }catch(err){
    console.log("error was: ", err.message);
    process.exit(1);
  }
}

/** catPathOrUrl
 * reads both urls or paths
 */
function catPathOrUrl(){
  return argv[2].includes("http") ? webCat(argv[2]) : cat(argv[2]);
}

catPathOrUrl();
