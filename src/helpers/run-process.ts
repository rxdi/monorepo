import { spawn, ChildProcessWithoutNullStreams } from 'child_process';

export const RunProcess = (command: string, cwd: string = process.cwd()) => {
  return new Promise(resolve => {
    const child = spawn('npx', command.split(' '), { cwd });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.resume(); //so the program will not close instantly

    function exitHandler(child: ChildProcessWithoutNullStreams) {
      child.kill();
      process.exit()
    }

    //do something when app is closing
    process.on('exit', exitHandler.bind(null, child));

    //catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, child));

    // catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler.bind(null, child));
    process.on('SIGUSR2', exitHandler.bind(null, child));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, child));
    child.on('close', (code: number) => resolve(code));
  });
};
