import { log } from 'console';
import { writeFile } from 'fs/promises';

writeFile("stud.txt","Name: John Doe\nAge: 25\nCourse: Computer Science");
console.log("File written successfully");