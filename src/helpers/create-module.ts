import { join } from 'path';
import { MAIN_FOLDER, CONFIG } from '../constants';
import { makeDir } from './make-dir';
import { promisify } from 'util';
import { writeFile } from 'fs';

export async function createModule(name: string, type: 'shared' | 'lib') {
  const sharedFolder = join(process.cwd(), MAIN_FOLDER, CONFIG[type], name);
  try {
    await makeDir(sharedFolder);
  } catch (e) {}
  await promisify(writeFile)(
    join(sharedFolder, 'index.ts'),
    `export function MyLibFunction() {
    return {}
  }`,
    { encoding: 'utf-8' }
  );
  await promisify(writeFile)(
    join(sharedFolder, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          declaration: true,
          outDir: `../../../node_modules/${CONFIG[type]}/${name}`
        }
      },
      null,
      2
    ),
    { encoding: 'utf-8' }
  );
}
