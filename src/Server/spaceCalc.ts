const { execSync } = require("child_process");
const { readFileSync } = require("fs");

export class CalculateDiskSpace {
    public convertToBytes(val: string){
        const sizConst = 1024
        switch(val.slice(val.length - 1)){
            case 'T':
                return parseInt(val) *sizConst**4;
            case 'G':
                return parseInt(val) * sizConst**3;
            case 'M':
                return parseInt(val) * sizConst**2;
            case 'K':
                return parseInt(val) * sizConst
            default:
                return val
        }
    }
    public readFile() {
      execSync('df -h > df.txt');
      let space
      try{
       space = readFileSync('df.txt')
        .toString()
        .split('\n');
      }catch(error: any){
        console.log(error.message)
      }
      const values = space[1].split(' ').filter((ele: string) => parseInt(ele));
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
