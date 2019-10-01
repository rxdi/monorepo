#!/usr/bin/env node
(function () {var m={},ra=m&&m.__awaiter||function(r,$,e,t){return new(e||(e=Promise))(function(i,H){function a(r){try{p(t.next(r))}catch($){H($)}}function n(r){try{p(t.throw(r))}catch($){H($)}}function p(r){var $;r.done?i(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(a,n)}p((t=t.apply(r,$||[])).next())})};Object.defineProperty(m,"__esModule",{value:!0});const Ya=require("util"),Db=require("fs");function Ca(r){return ra(this,void 0,void 0,function*(){return Ya.promisify(Db.mkdir)(r)})}var d=Ca;m.makeDir=d;var b={};Object.defineProperty(b,"__esModule",{value:!0});var _a="src";b.MAIN_FOLDER=_a;var nb={shared:"@shared",lib:"@lib",apps:"@apps"};b.CONFIG=nb;var p={},Eb=p&&p.__awaiter||function(t,e,$,r){return new($||($=Promise))(function(i,n){function c(t){try{a(r.next(t))}catch(e){n(e)}}function o(t){try{a(r.throw(t))}catch(e){n(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof $?e:new $(function(t){t(e)})).then(c,o)}a((r=r.apply(t,e||[])).next())})};Object.defineProperty(p,"__esModule",{value:!0});const sa=require("util"),ua=require("fs");function za(t){return Eb(this,void 0,void 0,function*(){return sa.promisify(ua.exists)(t)})}var ca=za;p.checkExist=ca;var c={},Ja=c&&c.__awaiter||function(e,t,r,$){return new(r||(r=Promise))(function(n,i){function a(e){try{c($.next(e))}catch(t){i(t)}}function o(e){try{c($.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(a,o)}c(($=$.apply(e,t||[])).next())})};Object.defineProperty(c,"__esModule",{value:!0});const Ka=require("util"),Qa=require("fs"),Ua=require("path");function Va(e,t,r="tsconfig.json"){return Ja(this,void 0,void 0,function*(){yield Ka.promisify(Qa.writeFile)(Ua.join(t,r),JSON.stringify(e,null,2),{encoding:"utf-8"})})}var Wa=Va;c.createTsConfig=Wa;var w={},ha=w&&w.__awaiter||function(r,e,t,i){return new(t||(t=Promise))(function(n,o){function a(r){try{d(i.next(r))}catch(e){o(e)}}function $(r){try{d(i.throw(r))}catch(e){o(e)}}function d(r){var e;r.done?n(r.value):(e=r.value,e instanceof t?e:new t(function(r){r(e)})).then(a,$)}d((i=i.apply(r,e||[])).next())})};Object.defineProperty(w,"__esModule",{value:!0});const eb=require("util"),lb=require("fs"),H=require("path");function ub(r){return ha(this,void 0,void 0,function*(){yield d(r),yield L(H.join(r,".gitignore"),"node_modules\ndist\n.cache"),yield L(H.join(r,"index.html"),"<body></body>\n<script src=\"./main.ts\"></script>"),yield L(H.join(r,"main.ts"),"\nimport { MyLibFunction } from '@lib/gosho';\nconsole.log(MyLibFunction())\n\n  "),yield c.createTsConfig({scripts:{postinstall:"npx parcel build ./index.html --experimental-scope-hoisting",start:"npx parcel ./index.html"},browserslist:["last 1 chrome versions"],devDependencies:{typescript:"^3.6.3"}},r,"package.json"),yield c.createTsConfig({references:[{path:"../../tsconfig.json"}],compileOnSave:!1,compilerOptions:{baseUrl:".",sourceMap:!0,composite:!0,module:"esnext",jsx:"react",jsxFactory:"h",declaration:!0,moduleResolution:"node",emitDecoratorMetadata:!0,experimentalDecorators:!0,esModuleInterop:!0,target:"es6",typeRoots:["node_modules/@types"],lib:["es2019","dom"]}},r)})}var X=ub;function L(r,e){return ha(this,void 0,void 0,function*(){yield eb.promisify(lb.writeFile)(r,e,{encoding:"utf-8"})})}w.createFrontend=X;var l={},ta=l&&l.__awaiter||function(t,e,r,$){return new(r||(r=Promise))(function(n,a){function i(t){try{c($.next(t))}catch(e){a(e)}}function o(t){try{c($.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,o)}c(($=$.apply(t,e||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});const z=require("path"),va=require("util"),wa=require("fs");function xa(t,e){return ta(this,void 0,void 0,function*(){const r=z.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG[e]),$=z.join(r,t);try{yield d($)}catch(i){}yield va.promisify(wa.writeFile)(z.join($,"index.ts"),"export function MyLibFunction() {\n    return {}\n  }",{encoding:"utf-8"}),yield c.createTsConfig({extends:"../../tsconfig.settings.json",compilerOptions:{declaration:!0,composite:!0,outDir:`../../../node_modules/${b.CONFIG[e]}/${t}`}},$);const n=z.join(r,"tsconfig.json"),a=require(n);if(!a.references)throw new Error(`Missing "references" inside ${n}`);if(a.references.find(e=>e.path===`./${t}`))throw new Error(`Module already present with name ${t}`);a.references.push({path:`./${t}`}),yield c.createTsConfig(a,r)})}var V=xa;l.createModule=V;var o={},Fa=o&&o.__awaiter||function(e,r,t,$){return new(t||(t=Promise))(function(a,n){function o(e){try{c($.next(e))}catch(r){n(r)}}function l(e){try{c($.throw(e))}catch(r){n(r)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(o,l)}c(($=$.apply(e,r||[])).next())})};Object.defineProperty(o,"__esModule",{value:!0});function Ga(e){return Fa(this,void 0,void 0,function*(){yield V(e,"lib")})}var U=Ga;o.createLib=U;var q={},da=q&&q.__awaiter||function(e,r,n,t){return new(n||(n=Promise))(function(a,i){function o(e){try{l(t.next(e))}catch(r){i(r)}}function $(e){try{l(t.throw(e))}catch(r){i(r)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(o,$)}l((t=t.apply(e,r||[])).next())})};Object.defineProperty(q,"__esModule",{value:!0});const La=require("util"),Ma=require("fs"),aa=require("path");function Ra(e){return da(this,void 0,void 0,function*(){yield d(e),yield ia(aa.join(e,".gitignore"),"node_modules\ndist\n.cache"),yield ia(aa.join(e,"index.ts"),"import { MyLibFunction } from '@lib/gosho';\nconsole.log(MyLibFunction())\nconsole.log('SIGNAL_MAIN_API_STARTED')\n  "),yield c.createTsConfig({scripts:{postinstall:"npx parcel build ./index.ts --experimental-scope-hoisting",start:"npx gapi start --local --path=./index.ts"},browserslist:["last 1 chrome versions"],devDependencies:{typescript:"^3.6.3"}},e,"package.json"),yield c.createTsConfig({references:[{path:"../../tsconfig.json"}],compileOnSave:!1,compilerOptions:{baseUrl:".",sourceMap:!0,composite:!0,module:"esnext",jsx:"react",jsxFactory:"h",declaration:!0,moduleResolution:"node",emitDecoratorMetadata:!0,experimentalDecorators:!0,esModuleInterop:!0,target:"es6",typeRoots:["node_modules/@types"],lib:["es2019","dom"]}},e)})}var na=Ra;function ia(e,r){return da(this,void 0,void 0,function*(){yield La.promisify(Ma.writeFile)(e,r,{encoding:"utf-8"})})}q.createBackend=na;var v={},Xa=v&&v.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function(i,s){function o(e){try{n(a.next(e))}catch(r){s(r)}}function c(e){try{n(a.throw(e))}catch(r){s(r)}}function n(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(o,c)}n((a=a.apply(e,r||[])).next())})};Object.defineProperty(v,"__esModule",{value:!0});const a=require("path");function Za(){return Xa(this,void 0,void 0,function*(){try{yield d(b.MAIN_FOLDER),yield d(a.join(process.cwd(),"tasks"))}catch(e){}yield c.createTsConfig({stacks:{start:{commands:{start:"npx repo run -c ./tasks/run.json"}}}},process.cwd(),"repo.json"),yield c.createTsConfig({stacks:{frontend:{options:{depends:["api"],cwd:"./src/@apps/frontend/",signal:"Built in"},commands:{clean:"rm -rf .cache",run:"npm start"}},api:{options:{signal:"SIGNAL_MAIN_API_STARTED",cwd:"./src/@apps/api/"},commands:{clean:"rm -rf .cache",run:"npm start"}},compile:{options:{depends:["frontend"],cwd:"."},commands:{compile:"repo compile --watch"}}}},a.join(process.cwd(),"tasks"),"run.json"),yield c.createTsConfig({compilerOptions:{module:"commonjs",target:"es6",declaration:!0,composite:!0,moduleResolution:"node",emitDecoratorMetadata:!0,experimentalDecorators:!0,removeComments:!0,allowSyntheticDefaultImports:!0,preserveConstEnums:!0,sourceMap:!0,strictNullChecks:!1,forceConsistentCasingInFileNames:!0,noFallthroughCasesInSwitch:!0,noImplicitAny:!1,noImplicitReturns:!0,noImplicitThis:!1,noUnusedLocals:!0,noUnusedParameters:!1,outDir:"./node_modules",lib:["es2017","es2016","es2015","es6","dom","esnext.asynciterable"],typeRoots:["node_modules/@types"]},include:["./src/**/*"],exclude:["node_modules/**/*","./src/**/*.spec.ts"]},process.cwd()),yield c.createTsConfig({references:[{path:"./@lib/"},{path:"./@shared/"}],compilerOptions:{composite:!0}},a.join(process.cwd(),b.MAIN_FOLDER)),yield c.createTsConfig({name:"@rxdi/monorepo-example",engines:{node:"10"},scripts:{postinstall:"npx repo compile && npx repo install && npx repo compile",start:"npx repo run start"},devDependencies:{"@rxdi/monorepo":"0.0.24",typescript:"3.6.3"},private:!0},process.cwd(),"package.json"),yield c.createTsConfig({compilerOptions:{target:"es2015",module:"commonjs",declaration:!0,declarationMap:!0,sourceMap:!0,strict:!0,composite:!0,esModuleInterop:!0}},a.join(process.cwd(),b.MAIN_FOLDER),"tsconfig.settings.json");for(const r of Object.values(b.CONFIG)){const t=a.join(process.cwd(),b.MAIN_FOLDER,r);if(!(yield ca(t)))try{yield d(t),yield ab(),r!==b.CONFIG.apps&&(yield c.createTsConfig({references:[],compilerOptions:{composite:!0}},t))}catch(e){}}yield X(a.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,"frontend")),yield na(a.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,"api")),yield U("gosho")})}var $=Za;function ab(){return new Promise(e=>setTimeout(()=>e(),100))}v.createWorkspace=$;var y={},fb=y&&y.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function($,n){function o(e){try{i(a.next(e))}catch(r){n(r)}}function c(e){try{i(a.throw(e))}catch(r){n(r)}}function i(e){var r;e.done?$(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(o,c)}i((a=a.apply(e,r||[])).next())})};Object.defineProperty(y,"__esModule",{value:!0});function kb(){return fb(this,void 0,void 0,function*(){yield $()})}var Y=kb;y.Create=Y;var i={},ob=i&&i.__awaiter||function(e,r,t,$){return new(t||(t=Promise))(function(a,i){function n(e){try{c($.next(e))}catch(r){i(r)}}function o(e){try{c($.throw(e))}catch(r){i(r)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(n,o)}c(($=$.apply(e,r||[])).next())})};Object.defineProperty(i,"__esModule",{value:!0});function pb(e){return ob(this,void 0,void 0,function*(){yield U(e)})}var sb=pb;i.CreateLib=sb;var B={},zb=B&&B.__awaiter||function(e,r,o,t){return new(o||(o=Promise))(function(a,$){function n(e){try{c(t.next(e))}catch(r){$(r)}}function f(e){try{c(t.throw(e))}catch(r){$(r)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof o?r:new o(function(e){e(r)})).then(n,f)}c((t=t.apply(e,r||[])).next())})};Object.defineProperty(B,"__esModule",{value:!0});function Cb(e){return zb(this,void 0,void 0,function*(){yield V(e,"shared")})}var Z=Cb;B.CreateShared=Z;var C={},Fb=C&&C.__awaiter||function(r,e,o,t){return new(o||(o=Promise))(function($,i){function u(r){try{p(t.next(r))}catch(e){i(e)}}function n(r){try{p(t.throw(r))}catch(e){i(e)}}function p(r){var e;r.done?$(r.value):(e=r.value,e instanceof o?e:new o(function(r){r(e)})).then(u,n)}p((t=t.apply(r,e||[])).next())})};Object.defineProperty(C,"__esModule",{value:!0});const pa=require("util"),qa=require("child_process");function Hb(r){return Fb(this,void 0,void 0,function*(){return(yield pa.promisify(qa.execFile)("find",[".","-path","*node_modules/*","-prune","-o","-iname","*.json","-print"],{cwd:r})).stdout.split("\n")})}var D=Hb;C.readDir=D;var N={};Object.defineProperty(N,"__esModule",{value:!0});var F=e=>process.argv.toString().includes(e);N.includes=F;var G=(e,r=!0,t=e=>e)=>{if(process.argv.toString().includes(e)){const s=process.argv[process.argv.indexOf(e)+1];return s?s.includes("--")?r:t(s):r}return r};N.nextOrDefault=G;var e={},ga=e&&e.__awaiter||function($,o,e,r){return new(e||(e=Promise))(function(s,t){function a($){try{n(r.next($))}catch(o){t(o)}}function c($){try{n(r.throw($))}catch(o){t(o)}}function n($){var o;$.done?s($.value):(o=$.value,o instanceof e?o:new e(function($){$(o)})).then(a,c)}n((r=r.apply($,o||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0});const ya=require("child_process"),I=require("path"),Aa=require("util"),Ba=require("fs");function J($,o){return new Promise(e=>{const r=ya.spawn("cp",["-r",I.join(process.cwd(),"node_modules",b.CONFIG[$]),o],{cwd:process.cwd()});r.stdout.pipe(process.stdout),r.stderr.pipe(process.stderr),r.on("close",$=>e($))})}var Da=J;function Ea(){return ga(this,void 0,void 0,function*(){const $=yield Aa.promisify(Ba.readdir)(I.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps));yield Promise.all($.map($=>ga(this,void 0,void 0,function*(){const o=I.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,$,"node_modules");yield J("lib",o),yield J("shared",o)})))})}e.copyModules=Da;var h=Ea;e.copyNodeModules=h;var A={},oa=A&&A.__awaiter||function(e,r,o,t){return new(o||(o=Promise))(function(s,a){function n(e){try{i(t.next(e))}catch(r){a(r)}}function c(e){try{i(t.throw(e))}catch(r){a(r)}}function i(e){var r;e.done?s(e.value):(r=e.value,r instanceof o?r:new o(function(e){e(r)})).then(n,c)}i((t=t.apply(e,r||[])).next())})};Object.defineProperty(A,"__esModule",{value:!0});const Ia=require("child_process");var K=(e,r,o={output:!0})=>new Promise(t=>{const s=["tsc"];r&&(s.push("-b"),s.push(...r)),F("--watch")&&s.push("--watch");const a=Ia.spawn("npx",s,{cwd:e});function n(e){e.kill()}o.output&&(a.stdout.pipe(process.stdout),a.stderr.pipe(process.stderr)),a.stdout.on("data",r=>oa(void 0,void 0,void 0,function*(){r.toString().includes("File change detected")&&e!==process.cwd()&&setTimeout(()=>oa(void 0,void 0,void 0,function*(){return yield h()}),1e3)})),process.on("exit",n.bind(null,a)),process.on("SIGINT",()=>process.exit()),process.on("SIGUSR1",n.bind(null,a)),process.on("SIGUSR2",n.bind(null,a)),process.on("uncaughtException",n.bind(null,a)),a.on("close",e=>t(e))});A.TranspileTypescript=K;var x={},ea=x&&x.__awaiter||function(r,$,e,a){return new(e||(e=Promise))(function(t,s){function i(r){try{o(a.next(r))}catch($){s($)}}function n(r){try{o(a.throw(r))}catch($){s($)}}function o(r){var $;r.done?t(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(i,n)}o((a=a.apply(r,$||[])).next())})};Object.defineProperty(x,"__esModule",{value:!0});const f=require("path"),Na=require("util"),Oa=require("fs");function Pa(){return ea(this,void 0,void 0,function*(){const r=[...(yield D(f.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.shared))),...(yield D(f.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.lib)))].filter(r=>r.includes("tsconfig.json")).map(r=>r.replace(process.cwd(),""));return F("--multi-compile")?yield K(process.cwd()):yield Promise.all(r.map(r=>ea(this,void 0,void 0,function*(){let $=f.normalize(f.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.shared,r));(yield Na.promisify(Oa.exists)($))||($=f.normalize(f.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.lib,r)));const e=$.substring(0,$.lastIndexOf("/"));yield K(e,[$])})))})}var M=Pa;x.compileWorkspace=M;var u={},Sa=u&&u.__awaiter||function(e,o,c,$){return new(c||(c=Promise))(function(r,p){function a(e){try{t($.next(e))}catch(o){p(o)}}function i(e){try{t($.throw(e))}catch(o){p(o)}}function t(e){var o;e.done?r(e.value):(o=e.value,o instanceof c?o:new c(function(e){e(o)})).then(a,i)}t(($=$.apply(e,o||[])).next())})};Object.defineProperty(u,"__esModule",{value:!0});function Ta(){return Sa(this,void 0,void 0,function*(){yield M(),yield h(),yield M(),yield h()})}var ka=Ta;u.Compile=ka;var t={},W=t&&t.__awaiter||function(r,$,t,a){return new(t||(t=Promise))(function(e,Z){function n(r){try{i(a.next(r))}catch($){Z($)}}function s(r){try{i(a.throw(r))}catch($){Z($)}}function i(r){var $;r.done?e(r.value):($=r.value,$ instanceof t?$:new t(function(r){r($)})).then(n,s)}i((a=a.apply(r,$||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const O=require("path"),P=require("util"),Q=require("fs");function $a(){return W(this,void 0,void 0,function*(){const r=yield P.promisify(Q.readdir)(O.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps));yield Promise.all(r.map(r=>W(this,void 0,void 0,function*(){(yield P.promisify(Q.exists)(O.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,r,"app-restart.ts")))&&(yield P.promisify(Q.writeFile)(O.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,r,"app-restart.ts"),"",{encoding:"utf-8"}))})))})}var _=$a;t.reactOnChanges=_;var s={},bb=s&&s.__awaiter||function(e,o,s,r){return new(s||(s=Promise))(function(n,c){function t(e){try{$(r.next(e))}catch(o){c(o)}}function i(e){try{$(r.throw(e))}catch(o){c(o)}}function $(e){var o;e.done?n(e.value):(o=e.value,o instanceof s?o:new s(function(e){e(o)})).then(t,i)}$((r=r.apply(e,o||[])).next())})};Object.defineProperty(s,"__esModule",{value:!0});const cb=require("child_process"),db=new Map;var ba=(e,o=process.cwd(),s)=>new Promise(r=>{let n=e.split(" "),c="npx";n.includes("#exit")&&process.exit(0),n.includes(">")&&(c=n[1],n=n.filter(e=>">"!==e&&e!==c));const t=cb.spawn(c,n,{cwd:o});function i(e){e.kill()}console.log(`Starting process: "${e}" Directory: ${o}`),db.set(o,t),t.stdout.on("data",e=>bb(void 0,void 0,void 0,function*(){e.toString().includes(s)&&(console.log(`Resolve signal triggered '${s}'`),r(e)),e.toString().includes("File change detected")&&o!==process.cwd()&&(yield h(),yield _())})),t.stdout.pipe(process.stdout),t.stderr.pipe(process.stderr),process.stdin.resume(),process.on("exit",i.bind(null,t)),process.on("SIGINT",()=>process.exit()),process.on("SIGUSR1",i.bind(null,t)),process.on("SIGUSR2",i.bind(null,t)),process.on("uncaughtException",i.bind(null,t)),t.on("close",e=>r(e))});s.RunProcess=ba;var j={},gb=j&&j.__awaiter||function(r,e,t,$){return new(t||(t=Promise))(function(a,o){function n(r){try{s($.next(r))}catch(e){o(e)}}function i(r){try{s($.throw(r))}catch(e){o(e)}}function s(r){var e;r.done?a(r.value):(e=r.value,e instanceof t?e:new t(function(r){r(e)})).then(n,i)}s(($=$.apply(r,e||[])).next())})};Object.defineProperty(j,"__esModule",{value:!0});const hb=require("path");function ib(){return gb(this,void 0,void 0,function*(){return console.log(G("-c","repo.json")),require(hb.join(process.cwd(),G("-c","repo.json")))})}var jb=ib;j.readConfig=jb;var r={},R=r&&r.__awaiter||function(n,e,o,r){return new(o||(o=Promise))(function(t,i){function s(n){try{$(r.next(n))}catch(e){i(e)}}function a(n){try{$(r.throw(n))}catch(e){i(e)}}function $(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o(function(n){n(e)})).then(s,a)}$((r=r.apply(n,e||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0});function mb(n){return R(this,void 0,void 0,function*(){const e=yield j.readConfig();const o=Object.keys(e.stacks).map(n=>({name:n,options:e.stacks[n].options,commands:Object.keys(e.stacks[n].commands).map(o=>e.stacks[n].commands[o])}));let r=[...o];n&&!n.includes("-c")&&(r=r.filter(e=>e.name===n));let t=r.filter(n=>n.options&&n.options.depends);const i=[];t.forEach(n=>{for(const e of n.options.depends){const r=o.find(n=>n.name===e);if(!r)throw new Error(`Missing depend ${e} inside service ${JSON.stringify(n,null,2)}`);t.find(n=>n.name===r.name)||i.push(r)}});const s=[...new Set(i.map(n=>n.name).map(n=>o.find(e=>e.name===n)))];for(const n of s)yield S(n);yield Promise.all(t.map(n=>R(this,void 0,void 0,function*(){return yield S(n)}))),r=r.filter(n=>!t.includes({name:n.name})&&!t.filter(e=>e.options.depends.find(e=>e===n.name)).length&&!t.find(e=>e.name===n.name)),yield Promise.all(r.map(n=>S(n)))})}var fa=mb;function S(n){return R(this,void 0,void 0,function*(){if(!n)throw new Error(`Missing stack ${JSON.stringify(n)}`);for(const e of n.commands)n.options=n.options||{},yield ba(e,n.options.cwd,n.options.signal)})}r.Run=fa;var T={};Object.defineProperty(T,"__esModule",{value:!0});const qb=require("child_process");var rb=s=>new Promise(e=>{const r=qb.spawn("npx",["npm","install"],{cwd:s});r.stdout.pipe(process.stdout),r.stderr.pipe(process.stderr),r.on("close",s=>e(s))});T.NpmInstall=rb;var g={},tb=g&&g.__awaiter||function(n,$,t,a){return new(t||(t=Promise))(function(r,e){function i(n){try{o(a.next(n))}catch($){e($)}}function s(n){try{o(a.throw(n))}catch($){e($)}}function o(n){var $;n.done?r(n.value):($=n.value,$ instanceof t?$:new t(function(n){n($)})).then(i,s)}o((a=a.apply(n,$||[])).next())})};Object.defineProperty(g,"__esModule",{value:!0});const ja=require("path"),vb=require("util"),wb=require("fs");function xb(){return tb(this,void 0,void 0,function*(){const n=ja.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps),$=yield vb.promisify(wb.readdir)(n);console.log(`Executing 'npm install' on following @apps: '${$}'`),yield Promise.all($.map($=>T.NpmInstall(ja.join(n,$))))})}var yb=xb;g.installApps=yb;var n={},Ab=n&&n.__awaiter||function(n,r,t,$){return new(t||(t=Promise))(function(a,e){function l(n){try{s($.next(n))}catch(r){e(r)}}function o(n){try{s($.throw(n))}catch(r){e(r)}}function s(n){var r;n.done?a(n.value):(r=n.value,r instanceof t?r:new t(function(n){n(r)})).then(l,o)}s(($=$.apply(n,r||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0});function Bb(){return Ab(this,void 0,void 0,function*(){yield g.installApps()})}var la=Bb;n.Install=la;var ma={};Object.defineProperty(ma,"__esModule",{value:!0});var E=new Map([["create",Y],["lib",i.CreateLib],["shared",Z],["compile",ka],["run",fa],["install",la]]);ma.Tasks=E;var k={},Gb=k&&k.__awaiter||function(t,r,e,a){return new(e||(e=Promise))(function(c,n){function $(t){try{o(a.next(t))}catch(r){n(r)}}function s(t){try{o(a.throw(t))}catch(r){n(r)}}function o(t){var r;t.done?c(t.value):(r=t.value,r instanceof e?r:new e(function(t){t(r)})).then($,s)}o((a=a.apply(t,r||[])).next())})};Object.defineProperty(k,"__esModule",{value:!0});function Ha(){return Gb(this,void 0,void 0,function*(){let t=process.argv.slice(2);if(!E.has(t[0]))throw new Error(`Missing task ${t[0]}`);try{yield E.get(t[0])(t[1])}catch(r){console.error(r)}})}Ha();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=k}else if(typeof define==="function"&&define.amd){define(function(){return k})}})();