import { spawn } from 'child_process';

export const TranspileTypescript = (cwd: string) => {
  return new Promise(resolve => {
    const child = spawn('npx', ['tsc'], { cwd });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('close', (code: number) => resolve(code));
  });
};
