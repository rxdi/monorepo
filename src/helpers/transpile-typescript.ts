import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import { includes } from './args-extrators';

export const TranspileTypescript = (cwd: string) => {
  return new Promise(resolve => {
    const args = ['tsc'];
    if (includes('--watch')) {
      args.push('--watch');
    }
    const child = spawn('npx', args, { cwd });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    process.stdin.resume(); //so the program will not close instantly

    function exitHandler(child: ChildProcessWithoutNullStreams) {
      child.kill();
    }

    //do something when app is closing
    process.on('exit', exitHandler.bind(null, child));

    //catches ctrl+c event
    process.on('SIGINT', () => process.exit());

    // catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler.bind(null, child));
    process.on('SIGUSR2', exitHandler.bind(null, child));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, child));
    child.on('close', (code: number) => resolve(code));
  });
};
