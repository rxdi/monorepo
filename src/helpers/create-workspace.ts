import { makeDir } from './make-dir';
import { MAIN_FOLDER, CONFIG } from '../constants';
import { checkExist } from './check-exist';
import { join } from 'path';

export async function createWorkspace() {
  try {
    await makeDir(MAIN_FOLDER);
  } catch (e) {}
  for (const value of Object.values(CONFIG)) {
    if (!(await checkExist(join(MAIN_FOLDER, value)))) {
      try {
        await makeDir(join(MAIN_FOLDER, value));
      } catch (e) {}
    }
  }
}
