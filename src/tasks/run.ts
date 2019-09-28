import { RunProcess } from '../helpers/run-process';
import { readConfig, StackScriptOptions } from '../helpers/read-config';
import { BehaviorSubject } from '../helpers/rx-fake';
export interface Stack {
  name: string;
  options: StackScriptOptions;
  commands: string[];
}
export async function Run(stack: string) {
  const config = await readConfig();
  let stacks = Object.keys(config.stacks);
  if (stack) {
    stacks = stacks.filter(s => s === stack);
  }
  await Promise.all(
    stacks
      .map(name => ({
        name,
        options: config.stacks[name].options,
        commands: Object.keys(config.stacks[name].commands).map(
          key => config.stacks[name].commands[key]
        )
      }))
      .map(async stack => {
        if (stack.options.depends && stack.options.depends.length) {
          setTimeout(async () => await RunCommands(stack), 4000);
        } else {
          console.log(`Running stack name: ${stack.name}`);
          console.log(
            `Running stack commands: ${JSON.stringify(stack.commands)}`
          );
          await RunCommands(stack);
          console.log('AAAAAAA OOMG')
        }
      })
  );
}

async function RunCommands(stack: Stack) {
  for (const cmd of stack.commands) {
    await RunProcess(cmd, stack.options.cwd);
  }
}
