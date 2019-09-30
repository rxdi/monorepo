import { compileWorkspace } from '../helpers/compile-workspace';
import { copyModules } from '../helpers/copy-modules';
import { promisify } from 'util';
import { readdir } from 'fs';
import { join } from 'path';
import { MAIN_FOLDER, CONFIG } from '../constants';

export async function Compile() {
  await compileWorkspace();
  const apps = await promisify(readdir)(
    join(process.cwd(), MAIN_FOLDER, CONFIG.apps)
  );
  await Promise.all(
    apps.map(async app => {
      await copyModules(
        'lib',
        join(process.cwd(), MAIN_FOLDER, CONFIG.apps, app, 'node_modules')
      );
      await copyModules(
        'shared',
        join(process.cwd(), MAIN_FOLDER, CONFIG.apps, app, 'node_modules')
      );
    })
  );
}
