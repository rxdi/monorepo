import { spawn } from 'child_process';
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
    child.on('close', (code: number) => resolve(code));
  });
};
