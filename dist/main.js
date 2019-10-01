#!/usr/bin/env node
(function () {var k={},ia=k&&k.__awaiter||function(r,$,e,t){return new(e||(e=Promise))(function(i,H){function a(r){try{p(t.next(r))}catch($){H($)}}function n(r){try{p(t.throw(r))}catch($){H($)}}function p(r){var $;r.done?i(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(a,n)}p((t=t.apply(r,$||[])).next())})};Object.defineProperty(k,"__esModule",{value:!0});const ob=require("util"),nb=require("fs");function ib(r){return ia(this,void 0,void 0,function*(){return ob.promisify(nb.mkdir)(r)})}var i=ib;k.makeDir=i;var b={};Object.defineProperty(b,"__esModule",{value:!0});var bb="src";b.MAIN_FOLDER=bb;var $a={shared:"@shared",lib:"@lib",apps:"@apps"};b.CONFIG=$a;var o={},Za=o&&o.__awaiter||function(t,e,$,r){return new($||($=Promise))(function(i,n){function c(t){try{a(r.next(t))}catch(e){n(e)}}function o(t){try{a(r.throw(t))}catch(e){n(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof $?e:new $(function(t){t(e)})).then(c,o)}a((r=r.apply(t,e||[])).next())})};Object.defineProperty(o,"__esModule",{value:!0});const Wa=require("util"),Va=require("fs");function Qa(t){return Za(this,void 0,void 0,function*(){return Wa.promisify(Va.exists)(t)})}var $=Qa;o.checkExist=$;var c={},Ia=c&&c.__awaiter||function(e,t,r,$){return new(r||(r=Promise))(function(n,i){function a(e){try{c($.next(e))}catch(t){i(t)}}function o(e){try{c($.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(a,o)}c(($=$.apply(e,t||[])).next())})};Object.defineProperty(c,"__esModule",{value:!0});const Ha=require("util"),Ga=require("fs"),Ea=require("path");function Aa(e,t,r="tsconfig.json"){return Ia(this,void 0,void 0,function*(){yield Ha.promisify(Ga.writeFile)(Ea.join(t,r),JSON.stringify(e,null,2),{encoding:"utf-8"})})}var za=Aa;c.createTsConfig=za;var n={},wa=n&&n.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(a,o){function s(e){try{n(i.next(e))}catch(t){o(t)}}function c(e){try{n(i.throw(e))}catch(t){o(t)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,c)}n((i=i.apply(e,t||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0});const O=require("path");function ta(){return wa(this,void 0,void 0,function*(){try{yield i(b.MAIN_FOLDER)}catch(e){}yield c.createTsConfig({compilerOptions:{module:"commonjs",target:"es6",declaration:!0,moduleResolution:"node",emitDecoratorMetadata:!0,experimentalDecorators:!0,removeComments:!0,allowSyntheticDefaultImports:!0,preserveConstEnums:!0,sourceMap:!0,strictNullChecks:!1,forceConsistentCasingInFileNames:!0,noFallthroughCasesInSwitch:!0,noImplicitAny:!1,noImplicitReturns:!0,noImplicitThis:!1,noUnusedLocals:!0,noUnusedParameters:!1,outDir:"./node_modules",lib:["es2017","es2016","es2015","es6","dom","esnext.asynciterable"],typeRoots:["node_modules/@types"]},include:["./src/**/*"],exclude:["node_modules/**/*","./src/**/*.spec.ts"]},process.cwd()),yield c.createTsConfig({references:[{path:"./@lib/"},{path:"./@shared/"}]},O.join(process.cwd(),b.MAIN_FOLDER)),yield c.createTsConfig({compilerOptions:{target:"es2015",module:"commonjs",declaration:!0,declarationMap:!0,sourceMap:!0,strict:!0,composite:!0,esModuleInterop:!0}},O.join(process.cwd(),b.MAIN_FOLDER),"tsconfig.settings.json");for(const t of Object.values(b.CONFIG)){const r=O.join(process.cwd(),b.MAIN_FOLDER,t);if(!(yield $(r)))try{yield i(r),yield la(),yield c.createTsConfig({references:[]},r)}catch(e){}}})}var V=ta;function la(){return new Promise(e=>setTimeout(()=>e(),100))}n.createWorkspace=V;var r={},ja=r&&r.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function($,n){function o(e){try{i(a.next(e))}catch(r){n(r)}}function c(e){try{i(a.throw(e))}catch(r){n(r)}}function i(e){var r;e.done?$(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(o,c)}i((a=a.apply(e,r||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0});function fa(){return ja(this,void 0,void 0,function*(){yield V()})}var R=fa;r.Create=R;var t={},mb=t&&t.__awaiter||function(t,e,r,$){return new(r||(r=Promise))(function(n,a){function i(t){try{c($.next(t))}catch(e){a(e)}}function o(t){try{c($.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,o)}c(($=$.apply(t,e||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const u=require("path"),lb=require("util"),Ka=require("fs");function qa(t,e){return mb(this,void 0,void 0,function*(){const r=u.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG[e]),$=u.join(r,t);try{yield i($)}catch(i){}yield lb.promisify(Ka.writeFile)(u.join($,"index.ts"),"export function MyLibFunction() {\n    return {}\n  }",{encoding:"utf-8"}),yield c.createTsConfig({extends:"../../tsconfig.settings.json",compilerOptions:{declaration:!0,outDir:`../../../node_modules/${b.CONFIG[e]}/${t}`}},$);const n=u.join(r,"tsconfig.json"),a=require(n);if(!a.references)throw new Error(`Missing "references" inside ${n}`);if(a.references.find(e=>e.path===`./${t}`))throw new Error(`Module already present with name ${t}`);a.references.push({path:`./${t}`}),yield c.createTsConfig(a,r)})}var M=qa;t.createModule=M;var x={},ea=x&&x.__awaiter||function(e,r,t,$){return new(t||(t=Promise))(function(a,n){function o(e){try{c($.next(e))}catch(r){n(r)}}function l(e){try{c($.throw(e))}catch(r){n(r)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(o,l)}c(($=$.apply(e,r||[])).next())})};Object.defineProperty(x,"__esModule",{value:!0});function Fa(e){return ea(this,void 0,void 0,function*(){yield M(e,"lib")})}var P=Fa;x.createLib=P;var d={},ga=d&&d.__awaiter||function(e,r,t,$){return new(t||(t=Promise))(function(a,i){function n(e){try{c($.next(e))}catch(r){i(r)}}function o(e){try{c($.throw(e))}catch(r){i(r)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(n,o)}c(($=$.apply(e,r||[])).next())})};Object.defineProperty(d,"__esModule",{value:!0});function ka(e){return ga(this,void 0,void 0,function*(){yield P(e)})}var pa=ka;d.CreateLib=pa;var w={},ra=w&&w.__awaiter||function(e,r,o,t){return new(o||(o=Promise))(function(a,$){function n(e){try{c(t.next(e))}catch(r){$(r)}}function f(e){try{c(t.throw(e))}catch(r){$(r)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof o?r:new o(function(e){e(r)})).then(n,f)}c((t=t.apply(e,r||[])).next())})};Object.defineProperty(w,"__esModule",{value:!0});function Da(e){return ra(this,void 0,void 0,function*(){yield M(e,"shared")})}var X=Da;w.CreateShared=X;var v={},La=v&&v.__awaiter||function(r,e,o,t){return new(o||(o=Promise))(function($,i){function u(r){try{p(t.next(r))}catch(e){i(e)}}function n(r){try{p(t.throw(r))}catch(e){i(e)}}function p(r){var e;r.done?$(r.value):(e=r.value,e instanceof o?e:new o(function(r){r(e)})).then(u,n)}p((t=t.apply(r,e||[])).next())})};Object.defineProperty(v,"__esModule",{value:!0});const Pa=require("util"),Ya=require("child_process");function db(r){return La(this,void 0,void 0,function*(){return(yield Pa.promisify(Ya.execFile)("find",[".","-path","*node_modules/*","-prune","-o","-iname","*.json","-print"],{cwd:r})).stdout.split("\n")})}var J=db;v.readDir=J;var H={};Object.defineProperty(H,"__esModule",{value:!0});var F=e=>process.argv.toString().includes(e);H.includes=F;var E=(e,r=!0,t=e=>e)=>{if(process.argv.toString().includes(e)){const s=process.argv[process.argv.indexOf(e)+1];return s?s.includes("--")?r:t(s):r}return r};H.nextOrDefault=E;var S={};Object.defineProperty(S,"__esModule",{value:!0});const ha=require("child_process");var z=(s,r)=>new Promise(e=>{const p=["tsc"];r&&(p.push("-b"),p.push(...r)),F("--watch")&&p.push("--watch");const o=ha.spawn("npx",p,{cwd:s});function t(s){s.kill()}o.stdout.pipe(process.stdout),o.stderr.pipe(process.stderr),process.on("exit",t.bind(null,o)),process.on("SIGINT",()=>process.exit()),process.on("SIGUSR1",t.bind(null,o)),process.on("SIGUSR2",t.bind(null,o)),process.on("uncaughtException",t.bind(null,o)),o.on("close",s=>e(s))});S.TranspileTypescript=z;var s={},T=s&&s.__awaiter||function(r,$,e,a){return new(e||(e=Promise))(function(t,s){function i(r){try{o(a.next(r))}catch($){s($)}}function n(r){try{o(a.throw(r))}catch($){s($)}}function o(r){var $;r.done?t(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(i,n)}o((a=a.apply(r,$||[])).next())})};Object.defineProperty(s,"__esModule",{value:!0});const a=require("path"),ma=require("util"),na=require("fs");function oa(){return T(this,void 0,void 0,function*(){const r=[...(yield J(a.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.shared))),...(yield J(a.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.lib)))].filter(r=>r.includes("tsconfig.json")).map(r=>r.replace(process.cwd(),""));return F("--multi-compile")?yield z(process.cwd()):yield Promise.all(r.map(r=>T(this,void 0,void 0,function*(){let $=a.normalize(a.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.shared,r));(yield ma.promisify(na.exists)($))||($=a.normalize(a.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.lib,r)));const e=$.substring(0,$.lastIndexOf("/"));yield z(e,[$])})))})}var U=oa;s.compileWorkspace=U;var h={},W=h&&h.__awaiter||function($,o,e,r){return new(e||(e=Promise))(function(s,t){function a($){try{c(r.next($))}catch(o){t(o)}}function n($){try{c(r.throw($))}catch(o){t(o)}}function c($){var o;$.done?s($.value):(o=$.value,o instanceof e?o:new e(function($){$(o)})).then(a,n)}c((r=r.apply($,o||[])).next())})};Object.defineProperty(h,"__esModule",{value:!0});const sa=require("child_process"),p=require("path"),ua=require("util"),va=require("fs");function N($,o){return new Promise(e=>{const r=sa.spawn("cp",["-r",p.join(process.cwd(),"node_modules",b.CONFIG[$]),o],{cwd:process.cwd()});r.stdout.pipe(process.stdout),r.stderr.pipe(process.stderr),r.on("close",$=>e($))})}var xa=N;function ya(){return W(this,void 0,void 0,function*(){const $=yield ua.promisify(va.readdir)(p.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps));yield Promise.all($.map($=>W(this,void 0,void 0,function*(){yield N("lib",p.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,$,"node_modules")),yield N("shared",p.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,$,"node_modules"))})))})}h.copyModules=xa;var K=ya;h.copyNodeModules=K;var y={},Ba=y&&y.__awaiter||function(e,c,o,$){return new(o||(o=Promise))(function(r,t){function p(e){try{i($.next(e))}catch(c){t(c)}}function a(e){try{i($.throw(e))}catch(c){t(c)}}function i(e){var c;e.done?r(e.value):(c=e.value,c instanceof o?c:new o(function(e){e(c)})).then(p,a)}i(($=$.apply(e,c||[])).next())})};Object.defineProperty(y,"__esModule",{value:!0});function Ca(){return Ba(this,void 0,void 0,function*(){yield U(),yield K()})}var Q=Ca;y.Compile=Q;var l={},Y=l&&l.__awaiter||function(r,$,t,a){return new(t||(t=Promise))(function(e,Z){function n(r){try{i(a.next(r))}catch($){Z($)}}function s(r){try{i(a.throw(r))}catch($){Z($)}}function i(r){var $;r.done?e(r.value):($=r.value,$ instanceof t?$:new t(function(r){r($)})).then(n,s)}i((a=a.apply(r,$||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});const D=require("path"),C=require("util"),B=require("fs");function Ja(){return Y(this,void 0,void 0,function*(){const r=yield C.promisify(B.readdir)(D.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps));yield Promise.all(r.map(r=>Y(this,void 0,void 0,function*(){(yield C.promisify(B.exists)(D.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,r,"app-restart.ts")))&&(yield C.promisify(B.writeFile)(D.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps,r,"app-restart.ts"),"",{encoding:"utf-8"}))})))})}var Z=Ja;l.reactOnChanges=Z;var j={},Ma=j&&j.__awaiter||function(e,o,s,r){return new(s||(s=Promise))(function(n,c){function t(e){try{i(r.next(e))}catch(o){c(o)}}function $(e){try{i(r.throw(e))}catch(o){c(o)}}function i(e){var o;e.done?n(e.value):(o=e.value,o instanceof s?o:new s(function(e){e(o)})).then(t,$)}i((r=r.apply(e,o||[])).next())})};Object.defineProperty(j,"__esModule",{value:!0});const Na=require("child_process"),Oa=new Map;var _=(e,o=process.cwd(),s)=>new Promise(r=>{console.log(`Starting process: "${e}" Directory: ${o}`);const n=Na.spawn("npx",e.split(" "),{cwd:o});function c(e){e.kill()}Oa.set(o,n),n.stdout.on("data",e=>Ma(void 0,void 0,void 0,function*(){e.toString().includes(s)&&(console.log(`Resolve signal triggered '${s}'`),r(e)),e.toString().includes("File change detected")&&o!==process.cwd()&&(yield K(),yield Z())})),n.stdout.pipe(process.stdout),n.stderr.pipe(process.stderr),process.stdin.resume(),process.on("exit",c.bind(null,n)),process.on("SIGINT",()=>process.exit()),process.on("SIGUSR1",c.bind(null,n)),process.on("SIGUSR2",c.bind(null,n)),process.on("uncaughtException",c.bind(null,n)),n.on("close",e=>r(e))});j.RunProcess=_;var f={},Ra=f&&f.__awaiter||function(r,e,t,$){return new(t||(t=Promise))(function(a,o){function n(r){try{s($.next(r))}catch(e){o(e)}}function i(r){try{s($.throw(r))}catch(e){o(e)}}function s(r){var e;r.done?a(r.value):(e=r.value,e instanceof t?e:new t(function(r){r(e)})).then(n,i)}s(($=$.apply(r,e||[])).next())})};Object.defineProperty(f,"__esModule",{value:!0});const Sa=require("path");function Ta(){return Ra(this,void 0,void 0,function*(){return console.log(E("-c","repo.json")),require(Sa.join(process.cwd(),E("-c","repo.json")))})}var Ua=Ta;f.readConfig=Ua;var q={},G=q&&q.__awaiter||function(n,e,o,r){return new(o||(o=Promise))(function(t,i){function s(n){try{$(r.next(n))}catch(e){i(e)}}function a(n){try{$(r.throw(n))}catch(e){i(e)}}function $(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o(function(n){n(e)})).then(s,a)}$((r=r.apply(n,e||[])).next())})};Object.defineProperty(q,"__esModule",{value:!0});function Xa(n){return G(this,void 0,void 0,function*(){const e=yield f.readConfig();const o=Object.keys(e.stacks).map(n=>({name:n,options:e.stacks[n].options,commands:Object.keys(e.stacks[n].commands).map(o=>e.stacks[n].commands[o])}));let r=[...o];n&&!n.includes("-c")&&(r=r.filter(e=>e.name===n));let t=r.filter(n=>n.options&&n.options.depends);const i=[];t.forEach(n=>{for(const e of n.options.depends){const r=o.find(n=>n.name===e);if(!r)throw new Error(`Missing depend ${e} inside service ${JSON.stringify(n,null,2)}`);t.find(n=>n.name===r.name)||i.push(r)}});const s=[...new Set(i.map(n=>n.name).map(n=>o.find(e=>e.name===n)))];for(const n of s)yield A(n);yield Promise.all(t.map(n=>G(this,void 0,void 0,function*(){return yield A(n)}))),r=r.filter(n=>!t.includes({name:n.name})&&!t.filter(e=>e.options.depends.find(e=>e===n.name)).length&&!t.find(e=>e.name===n.name)),yield Promise.all(r.map(n=>A(n)))})}var aa=Xa;function A(n){return G(this,void 0,void 0,function*(){if(!n)throw new Error(`Missing stack ${JSON.stringify(n)}`);for(const e of n.commands)n.options=n.options||{},yield _(e,n.options.cwd,n.options.signal)})}q.Run=aa;var L={};Object.defineProperty(L,"__esModule",{value:!0});const _a=require("child_process");var ab=s=>new Promise(e=>{const r=_a.spawn("npx",["npm","install"],{cwd:s});r.stdout.pipe(process.stdout),r.stderr.pipe(process.stderr),r.on("close",s=>e(s))});L.NpmInstall=ab;var e={},cb=e&&e.__awaiter||function(n,$,t,a){return new(t||(t=Promise))(function(r,e){function i(n){try{o(a.next(n))}catch($){e($)}}function s(n){try{o(a.throw(n))}catch($){e($)}}function o(n){var $;n.done?r(n.value):($=n.value,$ instanceof t?$:new t(function(n){n($)})).then(i,s)}o((a=a.apply(n,$||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0});const ba=require("path"),eb=require("util"),fb=require("fs");function gb(){return cb(this,void 0,void 0,function*(){const n=ba.join(process.cwd(),b.MAIN_FOLDER,b.CONFIG.apps),$=yield eb.promisify(fb.readdir)(n);console.log(`Executing 'npm install' on following @apps: '${$}'`),yield Promise.all($.map($=>L.NpmInstall(ba.join(n,$))))})}var hb=gb;e.installApps=hb;var m={},jb=m&&m.__awaiter||function(n,r,t,$){return new(t||(t=Promise))(function(a,e){function l(n){try{s($.next(n))}catch(r){e(r)}}function o(n){try{s($.throw(n))}catch(r){e(r)}}function s(n){var r;n.done?a(n.value):(r=n.value,r instanceof t?r:new t(function(n){n(r)})).then(l,o)}s(($=$.apply(n,r||[])).next())})};Object.defineProperty(m,"__esModule",{value:!0});function kb(){return jb(this,void 0,void 0,function*(){yield e.installApps()})}var ca=kb;m.Install=ca;var da={};Object.defineProperty(da,"__esModule",{value:!0});var I=new Map([["create",R],["lib",d.CreateLib],["shared",X],["compile",Q],["run",aa],["install",ca]]);da.Tasks=I;var g={},pb=g&&g.__awaiter||function(t,r,e,a){return new(e||(e=Promise))(function(c,n){function $(t){try{o(a.next(t))}catch(r){n(r)}}function s(t){try{o(a.throw(t))}catch(r){n(r)}}function o(t){var r;t.done?c(t.value):(r=t.value,r instanceof e?r:new e(function(t){t(r)})).then($,s)}o((a=a.apply(t,r||[])).next())})};Object.defineProperty(g,"__esModule",{value:!0});function qb(){return pb(this,void 0,void 0,function*(){let t=process.argv.slice(2);if(!I.has(t[0]))throw new Error(`Missing task ${t[0]}`);try{yield I.get(t[0])(t[1])}catch(r){console.error(r)}})}qb();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=g}else if(typeof define==="function"&&define.amd){define(function(){return g})}})();