import { makeDir } from './make-dir';
import { MAIN_FOLDER, CONFIG } from '../constants';
import { checkExist } from './check-exist';
import { join } from 'path';
import { createTsConfig } from './create-tsconfig';

export async function createWorkspace() {
  try {
    await makeDir(MAIN_FOLDER);
    await makeDir(join(process.cwd(), 'tasks'));
  } catch (e) {}
  await createTsConfig(
    {
      stacks: {
        start: {
          commands: {
            start: 'npx repo run -c ./tasks/run.json'
          }
        }
      }
    },
    process.cwd(),
    'repo.json'
  );
  await createTsConfig(
    {
      stacks: {
        frontend: {
          options: {
            cwd: './src/@apps/frontend/',
            depends: ['gateway'],
            signal: 'Built in'
          },
          commands: {
            clean: 'rm -rf .cache',
            link: 'gapi daemon link graphql',
            run: 'npm start'
          }
        },
        api: {
          options: {
            signal: 'SIGNAL_MAIN_API_STARTED',
            cwd: './src/@apps/api/'
          },
          commands: {
            clean: 'rm -rf .cache',
            link: 'gapi daemon link graphql',
            run: 'npm start'
          }
        },
        gateway: {
          options: {
            signal: 'SIGNAL_GATEWAY_STARTED',
            depends: ['api', 'cloud'],
            cwd: './src/@apps/gateway/'
          },
          commands: {
            clean: 'rm -rf .cache',
            link: 'gapi daemon link graphql',
            run: 'npm start'
          }
        },
        cloud: {
          options: {
            signal: 'SIGNAL_VS_CODE_STARTED',
            cwd: './src/@apps/cloud/'
          },
          commands: {
            clean: 'rm -rf .cache',
            link: 'gapi daemon link graphql',
            run: 'npm start'
          }
        },
        compile: {
          options: {
            cwd: '.',
            depends: ['frontend']
          },
          commands: {
            compile: 'repo compile --watch'
          }
        }
      }
    },
    join(process.cwd(), 'tasks'),
    'run.json'
  );
  await createTsConfig(
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
    process.cwd()
  );

  await createTsConfig(
    {
      references: [{ path: './@lib/' }, { path: './@shared/' }]
    },
    join(process.cwd(), MAIN_FOLDER)
  );
  await createTsConfig(
    {
      compilerOptions: {
        target: 'es2015',
        module: 'commonjs',
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        strict: true,
        composite: true,
        esModuleInterop: true
      }
    },
    join(process.cwd(), MAIN_FOLDER),
    'tsconfig.settings.json'
  );
  for (const value of Object.values(CONFIG)) {
    const folder = join(process.cwd(), MAIN_FOLDER, value);
    if (!(await checkExist(folder))) {
      try {
        await makeDir(folder);
        await wait();
        await createTsConfig(
          {
            references: [],
            compilerOptions: {
              composite: true
            }
          },
          folder
        );
      } catch (e) {}
    }
  }
}

function wait() {
  return new Promise(resolve => setTimeout(() => resolve(), 100));
}
