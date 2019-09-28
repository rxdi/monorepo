import { join } from 'path';
export interface StackScriptOptions {
  cwd: string;
  depends: string[];
  signal: string;
}
export interface StackScriptCommands {
  [key: string]: string;
}
export interface StackScript {
  [key: string]: { commands: StackScriptCommands; options: StackScriptOptions };
}
export interface Stack {
  name: string;
  options: StackScriptOptions;
  commands: string[];
}
export async function readConfig(): Promise<{
  stacks: StackScript;
}> {
  return require(join(process.cwd(), 'repo.json'));
}
