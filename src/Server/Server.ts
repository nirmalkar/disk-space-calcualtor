import { createServer } from "http";
import { CreateFile } from "./createFile";
import { CalculateDiskSpace } from "./spaceCalc";
import fs from 'fs'
export class Server {
  public startServer() {
    const hostname = "127.0.0.1";
    const port = 3001;

    const server = createServer(async (req: any, res: any) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hola Mundo");
      
    });
     // Create a file of 1 GiB
     const diskPercentFilled = new CalculateDiskSpace().readFile()
    //  new CreateFile().createEmptyFileOfSize("./1.txt", diskPercentFilled.avail - 567045376);
     const filePath = "./1.txt";
     if (fs.existsSync('hugeFile.txt')) {
        // if file exists delete it
        fs.unlinkSync('hugeFile.txt');
        }
    server.listen(port, hostname, () => {
      console.log(
        `El servidor se está ejecutando en http://${hostname}:${port}/`
      );
    });
  }
}
