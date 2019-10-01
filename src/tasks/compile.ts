import { compileWorkspace } from '../helpers/compile-workspace';
import { copyNodeModules } from '../helpers/copy-modules';
import { includes } from '../helpers/args-extrators';

export async function Compile() {
  await compileWorkspace();
  if (includes('--copy-modules')) {
    await copyNodeModules();
  }
}
