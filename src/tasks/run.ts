import { RunProcess } from '../helpers/run-process';
import { readConfig, Stack } from '../helpers/read-config';

export async function Run(stack: string) {
  const config = await readConfig();
  let stacks = Object.keys(config.stacks);

  const StacksMappedOriginal = stacks.map(name => ({
    name,
    options: config.stacks[name].options,
    commands: Object.keys(config.stacks[name].commands).map(
      key => config.stacks[name].commands[key]
    )
  }));
  let StacksMapped = [...StacksMappedOriginal];
  if (stack) {
    StacksMapped = StacksMapped.filter(s => s.name === stack);
  }
  const priorityQueue = StacksMapped.filter(
    s => s.options && s.options.depends
  ) as Stack[];
  await Promise.all(
    priorityQueue.map(async queue => {
      for (const depend of queue.options.depends) {
        const dependFound = StacksMappedOriginal.find(s => s.name === depend);
        if (!dependFound) {
          throw new Error(
            `Missing depend ${depend} inside service ${JSON.stringify(
              queue,
              null,
              2
            )}`
          );
        }
        await RunCommands(dependFound);
      }
    })
  );
  await Promise.all(priorityQueue.map(async queue => await RunCommands(queue)));
  StacksMapped = StacksMapped.filter(
    s => {
      if (priorityQueue.includes({ name: s.name })) {
        return false;
      }
      if (priorityQueue.filter(q => q.options.depends.find(d => d === s.name)).length) {
        return false;
      }
      if (priorityQueue.find(q => q.name === s.name)) {
        return false;
      }
      return true;
    }
  )
  await Promise.all(
    StacksMapped.map(stack => RunCommands(stack))
  );
}

async function RunCommands(stack: Stack) {
  for (const cmd of stack.commands) {
    await RunProcess(cmd, stack.options.cwd, stack.options.signal);
  }
}
