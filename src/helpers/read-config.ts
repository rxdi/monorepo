import { join } from 'path';

export async function readConfig(): Promise<{
    stacks: { [key: string]: { [key: string]: string } }
  }> {
  return require(join(process.cwd(), 'repo.json'));
}
