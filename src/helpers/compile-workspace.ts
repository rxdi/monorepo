import { join, normalize } from 'path';
import { readDir } from './read-dir';
import { MAIN_FOLDER, CONFIG } from '../constants';
import { TranspileTypescript } from './transpile-typescript';

export async function compileWorkspace() {
  const file_list = [
    ...(await readDir(join(process.cwd(), MAIN_FOLDER, CONFIG.shared))),
    ...(await readDir(join(process.cwd(), MAIN_FOLDER, CONFIG.lib)))
  ];
  const tsFiles = file_list
    .filter(f => f.includes('.ts'))
    .map(f => f.replace(process.cwd(), ''));

  await Promise.all(
    tsFiles.map(async file => {
      const dir = normalize(join(process.cwd(), file));
      const cwd = dir.substring(0, dir.lastIndexOf('/'));
      await TranspileTypescript(cwd);
    })
  );
}
