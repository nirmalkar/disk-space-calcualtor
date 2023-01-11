const fs = require("fs");
const { execSync } = require("child_process");
//create empty file of certain size to fill up the disk space: slower way
export class CreateFile {
  public createEmptyFileOfSize(fileName: string, size: number) {
    return new Promise((resolve, reject) => {
      try {
        // execSync('fallocate -l 1G file')
        const fh = fs.openSync(fileName, "w");
        fs.writeSync(fh, "ok", Math.max(0, size - 2));
        fs.closeSync(fh);
        resolve(true);
      } catch (e) {
        console.log(e, "Error Occurred writing new empty file");
        reject(e);
      }
    });
  }
}
