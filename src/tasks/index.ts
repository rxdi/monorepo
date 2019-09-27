import { Create } from './create';
import { CreateLib } from './create-lib';
import { CreateShared } from '../helpers/create-shared';
import { Compile } from './compile';

export const Tasks = new Map<string, Function>([
  ['create', Create],
  ['lib', CreateLib],
  ['shared', CreateShared],
  ['compile', Compile]
]);
