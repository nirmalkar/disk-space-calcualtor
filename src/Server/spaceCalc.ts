const { execSync } = require("child_process");
const { readFileSync } = require("fs");

export class CalculateDiskSpace {
    public convertToBytes(val: string){
        const sizConst = 1024
        switch(val.slice(val.length - 1)){
            case 'T':
                return Number(val.slice(0, val.length - 1)) *sizConst**4;
            case 'G':
                return Number(val.slice(0, val.length - 1)) * sizConst**3;
            case 'M':
                return Number(val.slice(0, val.length - 1)) * sizConst**2;
            case 'K':
                return Number(val.slice(0, val.length - 1)) * sizConst
            default:
                return val
        }
    }
    public readFile() {
      execSync('df -h > df.txt');
      const space = readFileSync('df.txt', (_data: any, err: any) => {
        if (err) {
          throw err;
        }
      })
        .toString()
        .split('\n');
      const values = space[1].split(' ').filter((ele: string) => !isNaN(Number(ele[0])));
      const array: any = ['size', 'used', 'avail', 'usedPercent'];
      const obj: any = {};
      values.forEach((ele: string, index: number) => {
        
        if (ele && typeof Number(ele[0]) === 'number') {
          obj[array[index]] = this.convertToBytes(ele);
        }
      });
      console.log(obj)
      return obj;
    }
  }
