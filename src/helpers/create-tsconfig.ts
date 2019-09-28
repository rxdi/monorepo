import { promisify } from 'util';
import { writeFile } from 'fs';
import { join } from 'path';

export async function createTsConfig() {
  await promisify(writeFile)(
    join(process.cwd(), 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          module: 'commonjs',
          target: 'es6',
          declaration: true,
          moduleResolution: 'node',
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          removeComments: true,
          allowSyntheticDefaultImports: true,
          preserveConstEnums: true,
          sourceMap: true,
          strictNullChecks: false,
          forceConsistentCasingInFileNames: true,
          noFallthroughCasesInSwitch: true,
          noImplicitAny: false,
          noImplicitReturns: true,
          noImplicitThis: false,
          noUnusedLocals: true,
          noUnusedParameters: false,
          outDir: './node_modules',
          lib: [
            'es2017',
            'es2016',
            'es2015',
            'es6',
            'dom',
            'esnext.asynciterable'
          ],
          typeRoots: ['node_modules/@types']
        },
        include: ['./src/**/*'],
        exclude: ['node_modules/**/*', './src/**/*.spec.ts']
      },
      null,
      2
    ),
    { encoding: 'utf-8' }
  );
}
