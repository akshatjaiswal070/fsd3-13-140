import { readFile ,writeFile } from "fs/promises";
const writeData =  async (fname,contents) => {
    await writeFile(fname,contents);
    console.log('File written');
    
};
const readData = async (fname) => {
    const data = await readFile(fname, 'utf8');
    console.log("Fille contents");
    console.log();
    
};
await writeData("happy.txt","I am very happy");
await readData("happy.txt");