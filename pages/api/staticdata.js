import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res){
    // get absolute path to json dir
    const jsonDirectory = path.join(process.cwd(), 'json');

    //read the json data file
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const obj = JSON.parse(fileContents);
    //return the content of the data file in json format
    res.status(200).json(obj);
}