import { createServer } from "http";
import { CreateFile } from "./createFile";
import { CalculateDiskSpace } from "./spaceCalc";
export class Server {
  public startServer() {
    const hostname = "127.0.0.1";
    const port = 3000;

    const server = createServer(async (req: any, res: any) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hola Mundo");
      
    });
     // Create a file of 1 GiB
     new CreateFile().createEmptyFileOfSize("./1.txt", 1 * 1024 * 1024 * 1024);
   const diskPercentFilled = new CalculateDiskSpace().readFile()
   console.log(diskPercentFilled, 'disk filled!')
    server.listen(port, hostname, () => {
      console.log(
        `El servidor se está ejecutando en http://${hostname}:${port}/`
      );
    });
  }
}
