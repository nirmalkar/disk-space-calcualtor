const { execSync } = require("child_process");
const { readFileSync } = require("fs");

export class CalculateDiskSpace {
  public readFile() {
    execSync("df -h > df.txt");
    const space = readFileSync("df.txt", (data: any, err: any) => {
      if (err) {
        throw err;
      }
    })
      .toString()
      .split("\n");
    const values = space[1]
      .split(" ")
      .filter((ele: string, i: number) => !isNaN(Number(ele[0])));
    const array: any = ["size", "used", "avail", "usedPercent"];
    const obj: any = {};
    values.forEach((ele: string, index: number) => {
      if (ele && typeof Number(ele[0]) === "number") {
        obj[array[index]] = Number(ele.slice(0, ele.length - 1))
      }
    });
    return obj;
  }
}
