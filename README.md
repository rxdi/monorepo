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
