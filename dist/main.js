#!/usr/bin/env node
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"helpers/make-dir.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function u(t){try{s(i.next(t))}catch(e){o(e)}}function c(t){try{s(i.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(u,c)}s((i=i.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("util"),n=require("fs");function i(i){return t(this,void 0,void 0,function*(){return e.promisify(n.mkdir)(i)})}exports.makeDir=i;
},{}],"constants.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MAIN_FOLDER="src",exports.CONFIG={shared:"@shared",lib:"@lib",apps:"@apps"};
},{}],"helpers/check-exist.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function u(t){try{s(i.next(t))}catch(e){o(e)}}function c(t){try{s(i.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(u,c)}s((i=i.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("util"),n=require("fs");function i(i){return t(this,void 0,void 0,function*(){return e.promisify(n.exists)(i)})}exports.checkExist=i;
},{}],"helpers/create-tsconfig.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))(function(r,o){function u(t){try{s(i.next(t))}catch(n){o(n)}}function c(t){try{s(i.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e(function(t){t(n)})).then(u,c)}s((i=i.apply(t,n||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("util"),e=require("fs"),i=require("path");function r(r,o,u="tsconfig.json"){return t(this,void 0,void 0,function*(){yield n.promisify(e.writeFile)(i.join(o,u),JSON.stringify(r,null,2),{encoding:"utf-8"})})}exports.createTsConfig=r;
},{}],"helpers/create-workspace.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))(function(n,r){function i(e){try{a(s.next(e))}catch(t){r(t)}}function c(e){try{a(s.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(i,c)}a((s=s.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./make-dir"),o=require("../constants"),s=require("./check-exist"),n=require("path"),r=require("./create-tsconfig");function i(){return e(this,void 0,void 0,function*(){try{yield t.makeDir(o.MAIN_FOLDER)}catch(e){}yield r.createTsConfig({compilerOptions:{module:"commonjs",target:"es6",declaration:!0,moduleResolution:"node",emitDecoratorMetadata:!0,experimentalDecorators:!0,removeComments:!0,allowSyntheticDefaultImports:!0,preserveConstEnums:!0,sourceMap:!0,strictNullChecks:!1,forceConsistentCasingInFileNames:!0,noFallthroughCasesInSwitch:!0,noImplicitAny:!1,noImplicitReturns:!0,noImplicitThis:!1,noUnusedLocals:!0,noUnusedParameters:!1,outDir:"./node_modules",lib:["es2017","es2016","es2015","es6","dom","esnext.asynciterable"],typeRoots:["node_modules/@types"]},include:["./src/**/*"],exclude:["node_modules/**/*","./src/**/*.spec.ts"]},process.cwd()),yield r.createTsConfig({references:[{path:"./@lib/"},{path:"./@shared/"}]},n.join(process.cwd(),o.MAIN_FOLDER)),yield r.createTsConfig({compilerOptions:{target:"es2015",module:"commonjs",declaration:!0,declarationMap:!0,sourceMap:!0,strict:!0,composite:!0,esModuleInterop:!0}},n.join(process.cwd(),o.MAIN_FOLDER),"tsconfig.settings.json");for(const i of Object.values(o.CONFIG)){const a=n.join(process.cwd(),o.MAIN_FOLDER,i);if(!(yield s.checkExist(a)))try{yield t.makeDir(a),yield c(),yield r.createTsConfig({references:[]},a)}catch(e){}}})}function c(){return new Promise(e=>setTimeout(()=>e(),100))}exports.createWorkspace=i;
},{"./make-dir":"helpers/make-dir.ts","../constants":"constants.ts","./check-exist":"helpers/check-exist.ts","./create-tsconfig":"helpers/create-tsconfig.ts"}],"tasks/create.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,c){function i(e){try{u(r.next(e))}catch(t){c(t)}}function a(e){try{u(r.throw(e))}catch(t){c(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,a)}u((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../helpers/create-workspace");function n(){return e(this,void 0,void 0,function*(){yield t.createWorkspace()})}exports.Create=n;
},{"../helpers/create-workspace":"helpers/create-workspace.ts"}],"helpers/create-module.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,n,r,t){return new(r||(r=Promise))(function(i,o){function s(e){try{u(t.next(e))}catch(n){o(n)}}function c(e){try{u(t.throw(e))}catch(n){o(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof r?n:new r(function(e){e(n)})).then(s,c)}u((t=t.apply(e,n||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("path"),r=require("../constants"),t=require("./make-dir"),i=require("util"),o=require("fs"),s=require("./create-tsconfig");function c(c,u){return e(this,void 0,void 0,function*(){const e=n.join(process.cwd(),r.MAIN_FOLDER,r.CONFIG[u]),a=n.join(e,c);try{yield t.makeDir(a)}catch(l){}yield i.promisify(o.writeFile)(n.join(a,"index.ts"),"export function MyLibFunction() {\n    return {}\n  }",{encoding:"utf-8"}),yield s.createTsConfig({extends:"../../tsconfig.settings.json",compilerOptions:{declaration:!0,outDir:`../../../node_modules/${r.CONFIG[u]}/${c}`}},a);const f=n.join(e,"tsconfig.json"),d=require(f);if(!d.references)throw new Error(`Missing "references" inside ${f}`);if(d.references.find(e=>e.path===`./${c}`))throw new Error(`Module already present with name ${c}`);d.references.push({path:`./${c}`}),yield s.createTsConfig(d,e)})}exports.createModule=c;
},{"../constants":"constants.ts","./make-dir":"helpers/make-dir.ts","./create-tsconfig":"helpers/create-tsconfig.ts"}],"helpers/create-lib.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function c(e){try{a(i.next(e))}catch(t){r(t)}}function u(e){try{a(i.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./create-module");function n(n){return e(this,void 0,void 0,function*(){yield t.createModule(n,"lib")})}exports.createLib=n;
},{"./create-module":"helpers/create-module.ts"}],"tasks/create-lib.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function c(e){try{a(i.next(e))}catch(t){o(t)}}function u(e){try{a(i.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("../helpers/create-lib");function n(n){return e(this,void 0,void 0,function*(){yield t.createLib(n)})}exports.CreateLib=n;
},{"../helpers/create-lib":"helpers/create-lib.ts"}],"helpers/create-shared.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function c(e){try{a(r.next(e))}catch(t){i(t)}}function u(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,u)}a((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./create-module");function n(n){return e(this,void 0,void 0,function*(){yield t.createModule(n,"shared")})}exports.CreateShared=n;
},{"./create-module":"helpers/create-module.ts"}],"helpers/read-dir.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function u(t){try{s(i.next(t))}catch(e){o(e)}}function c(t){try{s(i.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(u,c)}s((i=i.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("util"),n=require("child_process");function i(i){return t(this,void 0,void 0,function*(){return(yield e.promisify(n.execFile)("find",[i])).stdout.split("\n")})}exports.readDir=i;
},{}],"helpers/args-extrators.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.includes=(e=>process.argv.toString().includes(e)),exports.nextOrDefault=((e,r=!0,s=(e=>e))=>{if(process.argv.toString().includes(e)){const t=process.argv[process.argv.indexOf(e)+1];return t?t.includes("--")?r:s(t):r}return r});
},{}],"helpers/transpile-typescript.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const s=require("child_process"),e=require("./args-extrators");exports.TranspileTypescript=(o=>new Promise(r=>{const n=["tsc"];e.includes("--watch")&&n.push("--watch");const t=s.spawn("npx",n,{cwd:o});function c(s){s.kill()}t.stdout.pipe(process.stdout),t.stderr.pipe(process.stderr),process.on("exit",c.bind(null,t)),process.on("SIGINT",()=>process.exit()),process.on("SIGUSR1",c.bind(null,t)),process.on("SIGUSR2",c.bind(null,t)),process.on("uncaughtException",c.bind(null,t)),t.on("close",s=>r(s))}));
},{"./args-extrators":"helpers/args-extrators.ts"}],"helpers/compile-workspace.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,r,i,t){return new(i||(i=Promise))(function(n,s){function c(e){try{a(t.next(e))}catch(r){s(r)}}function o(e){try{a(t.throw(e))}catch(r){s(r)}}function a(e){var r;e.done?n(e.value):(r=e.value,r instanceof i?r:new i(function(e){e(r)})).then(c,o)}a((t=t.apply(e,r||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("path"),i=require("./read-dir"),t=require("../constants"),n=require("./transpile-typescript"),s=require("./args-extrators");function c(){return e(this,void 0,void 0,function*(){const c=[...yield i.readDir(r.join(process.cwd(),t.MAIN_FOLDER,t.CONFIG.shared)),...yield i.readDir(r.join(process.cwd(),t.MAIN_FOLDER,t.CONFIG.lib))].filter(e=>e.includes(".ts")).map(e=>e.replace(process.cwd(),""));return s.includes("--multi-compile")?yield n.TranspileTypescript(process.cwd()):yield Promise.all(c.map(i=>e(this,void 0,void 0,function*(){const e=r.normalize(r.join(process.cwd(),i)),t=e.substring(0,e.lastIndexOf("/"));yield n.TranspileTypescript(t)})))})}exports.compileWorkspace=c;
},{"./read-dir":"helpers/read-dir.ts","../constants":"constants.ts","./transpile-typescript":"helpers/transpile-typescript.ts","./args-extrators":"helpers/args-extrators.ts"}],"helpers/copy-modules.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("child_process"),s=require("../constants"),r=require("path");function o(o,t){return new Promise(c=>{const p=e.spawn("cp",["-r",r.join(process.cwd(),"node_modules",s.CONFIG[o]),t],{cwd:process.cwd()});p.stdout.pipe(process.stdout),p.stderr.pipe(process.stderr),p.on("close",e=>c(e))})}exports.copyModules=o;
},{"../constants":"constants.ts"}],"tasks/compile.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,o,i,r){return new(i||(i=Promise))(function(s,n){function t(e){try{u(r.next(e))}catch(o){n(o)}}function c(e){try{u(r.throw(e))}catch(o){n(o)}}function u(e){var o;e.done?s(e.value):(o=e.value,o instanceof i?o:new i(function(e){e(o)})).then(t,c)}u((r=r.apply(e,o||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("../helpers/compile-workspace"),i=require("../helpers/copy-modules"),r=require("util"),s=require("fs"),n=require("path"),t=require("../constants"),c=require("../helpers/args-extrators");function u(){return e(this,void 0,void 0,function*(){yield o.compileWorkspace();const u=yield r.promisify(s.readdir)(n.join(process.cwd(),t.MAIN_FOLDER,t.CONFIG.apps));c.includes("--copy-modules")&&(yield Promise.all(u.map(o=>e(this,void 0,void 0,function*(){yield i.copyModules("lib",n.join(process.cwd(),t.MAIN_FOLDER,t.CONFIG.apps,o,"node_modules")),yield i.copyModules("shared",n.join(process.cwd(),t.MAIN_FOLDER,t.CONFIG.apps,o,"node_modules"))}))))})}exports.Compile=u;
},{"../helpers/compile-workspace":"helpers/compile-workspace.ts","../helpers/copy-modules":"helpers/copy-modules.ts","../constants":"constants.ts","../helpers/args-extrators":"helpers/args-extrators.ts"}],"helpers/run-process.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const s=require("child_process");exports.RunProcess=((e,o=process.cwd(),n)=>new Promise(r=>{console.log(`Starting process: "${e}" Directory: ${o}`);const t=s.spawn("npx",e.split(" "),{cwd:o});function c(s){s.kill()}t.stdout.on("data",s=>{s.toString().includes(n)&&(console.log(`Resolve signal triggered '${n}'`),r(s))}),t.stdout.pipe(process.stdout),t.stderr.pipe(process.stderr),process.stdin.resume(),process.on("exit",c.bind(null,t)),process.on("SIGINT",()=>process.exit()),process.on("SIGUSR1",c.bind(null,t)),process.on("SIGUSR2",c.bind(null,t)),process.on("uncaughtException",c.bind(null,t)),t.on("close",s=>r(s))}));
},{}],"helpers/read-config.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function c(e){try{s(r.next(e))}catch(t){i(t)}}function u(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,u)}s((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const t=require("path"),n=require("./args-extrators");function r(){return e(this,void 0,void 0,function*(){return console.log(n.nextOrDefault("-c","repo.json")),require(t.join(process.cwd(),n.nextOrDefault("-c","repo.json")))})}exports.readConfig=r;
},{"./args-extrators":"helpers/args-extrators.ts"}],"tasks/run.ts":[function(require,module,exports) {
"use strict";var n=this&&this.__awaiter||function(n,e,i,t){return new(i||(i=Promise))(function(o,s){function r(n){try{a(t.next(n))}catch(e){s(e)}}function c(n){try{a(t.throw(n))}catch(e){s(e)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof i?e:new i(function(n){n(e)})).then(r,c)}a((t=t.apply(n,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../helpers/run-process"),i=require("../helpers/read-config");function t(e){return n(this,void 0,void 0,function*(){const t=yield i.readConfig();const s=Object.keys(t.stacks).map(n=>({name:n,options:t.stacks[n].options,commands:Object.keys(t.stacks[n].commands).map(e=>t.stacks[n].commands[e])}));let r=[...s];e&&!e.includes("-c")&&(r=r.filter(n=>n.name===e));let c=r.filter(n=>n.options&&n.options.depends);const a=[];c.forEach(n=>{for(const e of n.options.depends){const i=s.find(n=>n.name===e);if(!i)throw new Error(`Missing depend ${e} inside service ${JSON.stringify(n,null,2)}`);c.find(n=>n.name===i.name)||a.push(i)}});const d=[...new Set(a.map(n=>n.name).map(n=>s.find(e=>e.name===n)))];for(const n of d)yield o(n);yield Promise.all(c.map(e=>n(this,void 0,void 0,function*(){return yield o(e)}))),r=r.filter(n=>!c.includes({name:n.name})&&(!c.filter(e=>e.options.depends.find(e=>e===n.name)).length&&!c.find(e=>e.name===n.name))),yield Promise.all(r.map(n=>o(n)))})}function o(i){return n(this,void 0,void 0,function*(){if(!i)throw new Error(`Missing stack ${JSON.stringify(i)}`);for(const n of i.commands)yield e.RunProcess(n,i.options.cwd,i.options.signal)})}exports.Run=t;
},{"../helpers/run-process":"helpers/run-process.ts","../helpers/read-config":"helpers/read-config.ts"}],"helpers/npm-install.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("child_process");exports.NpmInstall=(s=>new Promise(t=>{const r=e.spawn("npx",["npm","install"],{cwd:s});r.stdout.pipe(process.stdout),r.stderr.pipe(process.stderr),r.on("close",e=>t(e))}));
},{}],"helpers/install-apps.ts":[function(require,module,exports) {
"use strict";var n=this&&this.__awaiter||function(n,e,t,i){return new(t||(t=Promise))(function(o,r){function s(n){try{c(i.next(n))}catch(e){r(e)}}function a(n){try{c(i.throw(n))}catch(e){r(e)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t(function(n){n(e)})).then(s,a)}c((i=i.apply(n,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("path"),t=require("../constants"),i=require("./npm-install"),o=require("util"),r=require("fs");function s(){return n(this,void 0,void 0,function*(){const n=e.join(process.cwd(),t.MAIN_FOLDER,t.CONFIG.apps),s=yield o.promisify(r.readdir)(n);console.log(`Executing 'npm install' on following @apps: '${s}'`),yield Promise.all(s.map(t=>i.NpmInstall(e.join(n,t))))})}exports.installApps=s;
},{"../constants":"constants.ts","./npm-install":"helpers/npm-install.ts"}],"tasks/install.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(n){r(n)}}function c(t){try{u(i.throw(t))}catch(n){r(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e(function(t){t(n)})).then(s,c)}u((i=i.apply(t,n||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const n=require("../helpers/install-apps");function e(){return t(this,void 0,void 0,function*(){yield n.installApps()})}exports.Install=e;
},{"../helpers/install-apps":"helpers/install-apps.ts"}],"tasks/index.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./create"),r=require("./create-lib"),t=require("../helpers/create-shared"),a=require("./compile"),i=require("./run"),l=require("./install");exports.Tasks=new Map([["create",e.Create],["lib",r.CreateLib],["shared",t.CreateShared],["compile",a.Compile],["run",i.Run],["install",l.Install]]);
},{"./create":"tasks/create.ts","./create-lib":"tasks/create-lib.ts","../helpers/create-shared":"helpers/create-shared.ts","./compile":"tasks/compile.ts","./run":"tasks/run.ts","./install":"tasks/install.ts"}],"main.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{a(r.next(t))}catch(e){o(e)}}function c(t){try{a(r.throw(t))}catch(e){o(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,c)}a((r=r.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./tasks");function n(){return t(this,void 0,void 0,function*(){let t=process.argv.slice(2);if(!e.Tasks.has(t[0]))throw new Error(`Missing task ${t[0]}`);try{yield e.Tasks.get(t[0])(t[1])}catch(n){console.error(n)}})}n();
},{"./tasks":"tasks/index.ts"}]},{},["main.ts"], null)
//# sourceMappingURL=/main.js.map