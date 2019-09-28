import { join } from 'path';
export interface StackScriptOptions {
  cwd: string;
  depends: string[];
}
export interface StackScriptCommands {
  [key: string]: string;
}
export interface StackScript {
  [key: string]: { commands: StackScriptCommands; options: StackScriptOptions };
}
export async function readConfig(): Promise<{
  stacks: StackScript;
}> {
  return require(join(process.cwd(), 'repo.json'));
}
