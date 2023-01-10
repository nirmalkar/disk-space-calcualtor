const { execSync } = require("child_process");
const { readFileSync, unlinkSync } = require("fs");

execSync("df -h > df.txt");
export class CalculateDiskSpace {
  public readFile() {
    const space = readFileSync("df.txt", (data: any, err: any) => {
      if (err) {
        throw err;
      }
    }).toString().split(' ')
      const spaceLeftPercentage = space[space.length - 2]
      return  spaceLeftPercentage
  }
}
