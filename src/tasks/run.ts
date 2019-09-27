import { RunProcess } from '../helpers/run-process';
import { readConfig } from '../helpers/read-config';

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
        commands: Object.keys(config.stacks[name]).map(
          key => config.stacks[name][key]
        )
      }))
      .map(async stack => {
        console.log(`Running stack name: ${stack.name}`);
        console.log(
          `Running stack commands: ${JSON.stringify(stack.commands)}`
        );
        for (const cmd of stack.commands) {
          await RunProcess(cmd);
        }
      })
  );
}
