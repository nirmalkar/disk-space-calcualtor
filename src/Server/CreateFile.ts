const fs = require("fs");
//create empty file of certain size to fill up the disk space: slower way
export class CreateFile {
  public createEmptyFileOfSize(fileName: string, size: number) {
    return new Promise((resolve, reject) => {
      const fh = fs.openSync(fileName, "w");
      fs.writeSync(fh, "ok", Math.max(0, size - 2));
      fs.closeSync(fh);
      resolve(true);
    });
  }
}
