# @rxdi/monorepo

Create easy `monorepo` with typescript

## Features

- No dependencies
- Maintain monorepo with ease
- Created for Typescript

## Installation

```bash
npm i -g @rxdi/monorepo
```

## Usage

#### Create Empty monorepo

```bash
repo create
```

Following structure will be created

```yml
--root
   -src
     -@apps
     -@lib
     -@shared
```

#### Create `library` module

```bash
repo lib 'lib-name'
```

Will create `library` empty module inside `root/src/@lib`

#### Create `shared` module

```bash
repo shared 'lib-name'
```

Will create `shared` empty module inside `root/src/@shared`

#### Compile monorepo

```bash
repo compile
```

Watch mode

```bash
repo compile --watch
```


## Configuration

```json
{
  "stacks": {
    "daemon": {
      "options": {
        "cwd": "."
      },
      "commands": {
        "stop": "gapi daemon stop",
        "clean": "gapi daemon clean",
        "start": "gapi daemon start",
        "link": "gapi daemon link graphql"
      }
    },
    "frontend": {
      "options": {
        "cwd": "./src/@apps/frontend/"
      },
      "commands": {
        "run": "parcel ./src/index.html"
      }
    },
    "api": {
      "options": {
        "cwd": "./src/@apps/api/"
      },
      "commands": {
        "run": "gapi start --local --lint --minify=false"
      }
    },
    "gateway": {
      "options": {
        "depends": [
          "api",
          "vscode-cloud"

        ],
        "cwd": "./src/@apps/gateway/"
      },
      "commands": {
        "run": "gapi start --local --path=./index.ts"
      }
    },
    "vscode-cloud": {
      "options": {
        "cwd": "./src/@apps/vscode-cloud/"
      },
      "commands": {
        "run": "gapi start --local --inspect --minify=false"
      }
    }
  }
}
```