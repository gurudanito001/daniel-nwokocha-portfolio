import fs from 'fs'

export function createPost(fileName, fileContent) {
    var result = false;
    fs.writeFileSync(process.cwd() + `/posts/${fileName}`, fileContent, (error) => {
        if (error) {
            result = false
        } else {
            result = true
        }
    });

    return result
}
























/* export const createDir = (dirPath) => {
    fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
        if(error) {
            console.error('An error occured: ', error);
        } else {
            console.log('Your directory was made!');
        }
    });
}

export const createFile = (filePath, fileContent) => {
    fs.writeFile(filePath, fileContent, (error) => {
        if(error){
            console.error('An error occured: ', error);
        } else {
            console.log('Your file is made!');
        }
    });
}

const path = '';
const content = 'content of my new file';

createDir(path);
createFile(path, content);  */