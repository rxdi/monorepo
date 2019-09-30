import { makeDir } from './make-dir';
import { MAIN_FOLDER, CONFIG } from '../constants';
import { checkExist } from './check-exist';
import { join } from 'path';
import { createTsConfig } from './create-tsconfig';

export async function createWorkspace() {
  try {
    await makeDir(MAIN_FOLDER);
  } catch (e) {

  }
  console.log('OMG', MAIN_FOLDER)

  await createTsConfig(
    {
      references: [{ path: './@lib/' }, { path: './@shared/' }]
    },
    join(process.cwd(), MAIN_FOLDER)
  );
  await createTsConfig(
    {
      compilerOptions: {
        target: 'es2015',
        module: 'commonjs',
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        strict: true,
        composite: true,
        esModuleInterop: true
      }
    },
    join(process.cwd(), MAIN_FOLDER),
    'tsconfig.settings.json'
  );
  console.log('OMG', MAIN_FOLDER)
  for (const value of Object.values(CONFIG)) {
    const folder = join(process.cwd(), MAIN_FOLDER, value);
    if (!(await checkExist(folder))) {
      try {
        await makeDir(folder);
        await wait();
        await createTsConfig(
          {
            references: []
          },
          folder
        );
      } catch (e) {}
    }
  }
}


function wait() {
  return new Promise((resolve) => setTimeout(() => resolve(), 100))
}