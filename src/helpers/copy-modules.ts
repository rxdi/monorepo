import { spawn } from 'child_process';
import { CONFIG } from '../constants';
import { join } from 'path';

export function copyModules(type: keyof typeof CONFIG, cwd: string) {
  return new Promise(resolve => {
    const child = spawn('cp', ['-r', join(process.cwd(), 'node_modules', CONFIG[type]), cwd], { cwd: process.cwd() });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('close', (code: number) => resolve(code));
  });
}
