import { promisify } from 'util';
import { execFile } from 'child_process';

export async function readDir(path: string) {
  return (await promisify(execFile)('find', [path])).stdout.split('\n');
}
