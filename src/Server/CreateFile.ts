const fs = require("fs");
const { execSync } = require("child_process");
export class CreateFile {
 public createEmptyFileOfSize(fileName: string, size: number){
    return new Promise((resolve, reject) => {
      // Check size
      if (size < 0) {
        reject("Error: a negative size doesn't make any sense");
        return;
      }

      setTimeout(() => {
        try {
         const fd = fs.openSync(fileName, "w");
          if (size > 0) {
            fs.writeSync(fd, Buffer.alloc(1), 0, 1, size - 1);
          }
          // Close the file to commit the changes to the file system
          fs.closeSync(fd);
          resolve(true);
        } catch (error) {
          reject(error);
        }
        // Create the file after the processing of the current JavaScript event loop
      }, 0);
    });
  };
}
