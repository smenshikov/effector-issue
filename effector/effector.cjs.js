function e(e,t,r,a){(j(e)||I(e))&&('family'in e||'graphite'in e)||N(`${t}: expect ${r} to be a unit (store, event or effect)${a}`)}function t(t,r,a){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n],r,`${n} item of ${a}`,'');else e(t,r,a,' or array of units')}function r(e,t){pe={parent:pe,value:e,template:fe(e,'template')||de(),sidRoot:fe(e,'sidRoot')||pe&&pe.sidRoot};try{return t()}finally{pe=le(pe)}}function a({node:e=[],from:t,source:r,parent:a=t||r,to:n,target:o,child:s=n||o,scope:l={},meta:i={},family:f={type:'regular'},regional:c}={}){let u=ge(a),p=ge(f.links),d=ge(f.owners),m=[];for(let t=0;t<e.length;t++){let r=e[t];r&&m.push(r)}let g={id:O(),seq:m,next:ge(s),meta:i,scope:l,family:{type:f.type||"crosslink",links:p,owners:d}};for(let e=0;e<p.length;e++)ee(p[e]).push(g);for(let e=0;e<d.length;e++)te(d[e]).push(g);for(let e=0;e<u.length;e++)u[e].next.push(g);return c&&pe&&ue(oe(pe),[g]),g}function n(e,t){for(let r in e)t(e[r],r)}function o(e,t){e.forEach(t)}function s(e,t,r){let a=Ie,n=null,o=Ce;if(e.target&&(t=e.params,r=e.defer,a='page'in e?e.page:a,e.stack&&(n=e.stack),o=ie(e)||o,e=e.target),o&&Ce&&o!==Ce&&(Ce=null),Array.isArray(e))for(let r=0;r<e.length;r++)Se('pure',a,Z(e[r]),n,t[r],o);else Se('pure',a,Z(e),n,t,o);if(r&&!Ne)return;let s,l,i,f,c,u,p={isRoot:Ne,currentPage:Ie,forkPage:Ce,isWatch:je};Ne=0;e:for(;f=we();){let{idx:e,stack:t,type:r}=f;i=t.node,Ie=c=t.page,Ce=ie(t),c?u=c.reg:Ce&&(u=Ce.reg);let a=!!c,n=!!Ce,o={fail:0,scope:i.scope};s=l=0;for(let f=e;f<i.seq.length&&!s;f++){let d=i.seq[f];switch(d.type){case"barrier":{let{priority:a,barrierID:n}=d.data,o=c?`${c.fullID}_${n}`:n;if(f!==e||r!==a){Me.has(o)||(Me.add(o),Ae(f,t,a,n));continue e}Me.delete(o);break}case'mov':{let e,r=d.data;switch(r.from){case"stack":e=oe(t);break;case"a":case'b':e=t[r.from];break;case"value":e=r.store;break;case k:if(u&&!u[r.store.id])if(a){let e=De(c,r.store.id);t.page=c=e,e?u=e.reg:n?(Oe(Ce,r.store),u=Ce.reg):u=void 0}else n&&Oe(Ce,r.store);e=J(u&&u[r.store.id]||r.store)}switch(r.to){case"stack":t.value=e;break;case"a":case'b':t[r.to]=e;break;case k:_e(c,Ce,i,r.target).current=e}break}case'check':l=oe(t)===('defined'===d.data.type?void 0:J(_e(c,Ce,i,d.data.store)));break;case"filter":l=!$e(o,d.data,t);break;case'run':if(f!==e||"effect"!==r){Ae(f,t,"effect");continue e}case'compute':je='watch'===fe(i,'op'),t.value=$e(o,d.data,t),je=p.isWatch}s=o.fail||l}if(!s){for(let e=0;e<i.next.length;e++)Se('child',c,i.next[e],t,oe(t),ie(t));let e=ie(t);if(e){fe(i,'needFxCounter')&&Se('child',c,e.fxCount,t,0,e),fe(i,'storeChange')&&Se('child',c,e.storeChange,t,0,e);let r=e.additionalLinks[i.id];if(r)for(let a=0;a<r.length;a++)Se('child',c,r[a],t,oe(t),e)}}}Ne=p.isRoot,Ie=p.currentPage,Ce=ie(p)}function l(e,t="combine"){let r=t+'(',a='',o=0;return n(e,(e=>{o<25&&(null!=e&&(r+=a,r+=v(e)?Ee(e).fullName:e.toString()),o+=1,a=', ')})),r+')'}function i(e,t){let r,a,n=e;if(t){let n=Ee(t);0===e.length?(r=n.path,a=n.fullName):(r=n.path.concat([e]),a=0===n.fullName.length?e:n.fullName+'/'+e)}else r=0===e.length?[]:[e],a=e;return{shortName:n,fullName:a,path:r}}function f(e,...t){let r=de();if(r){let a=r.handlers[e];if(a)return a(r,...t)}}function c(e,t){let r=(e,...t)=>Ie?((e,t,r,a)=>{let n=Ie,o=null;if(t)for(o=Ie;o&&o.template!==t;)o=le(o);Fe(o);let s=e.create(r,a);return Fe(n),s})(r,n,e,t):r.create(e,t);r.graphite=a({meta:Xe("event",r,t,e),regional:1}),r.create=e=>(s({target:r,params:e,forkPage:Ce}),e),r.watch=$(Ge,r),r.map=e=>Ze(r,"map",e,[H({fn:Y})]),r.filter=e=>Ze(r,"filter",e.fn?e:e.fn,[L({fn:Y})]),r.filterMap=e=>Ze(r,'filterMap',e,[H({fn:Y}),B.defined()]),r.prepend=e=>{let t=c('* \u2192 '+r.shortName,{parent:le(r)});return f('eventPrepend',Z(t)),We(t,r,{scope:{fn:e},node:[H({fn:Y})],meta:{op:'prepend'}}),Qe(r,t),t};let n=de();return r}function u(e,r){function n(e,t){p.off(e),se(p).set(e,Te(et(e,p,'on',1,t,m)))}let o=G(e),l=G(e),i=Ye('updates');f('storeBase',o,l);let c=o.id,p={subscribers:new Map,updates:i,defaultState:e,stateRef:o,getState(){let e,t=o;if(Ie){let t=Ie;for(;t&&!t.reg[c];)t=le(t);t&&(e=t)}return!e&&Ce&&(Oe(Ce,o,1),e=Ce),e&&(t=e.reg[c]),J(t)},setState(e){s({target:p,params:e,defer:1,forkPage:Ce})},reset(...e){for(let t of e)p.on(t,(()=>p.defaultState));return p},on(e,r){if(t(e,'.on','first argument'),Array.isArray(e))for(let t of e)n(t,r);else n(e,r);return p},off(e){let t=se(p).get(e);return t&&(t(),se(p).delete(e)),p},map(e,t){let r,a;j(e)&&(r=e,e=e.fn),void 0!==t&&console.error('second argument of store.map is deprecated, use updateFilter instead');let n=p.getState();de()?a=null:void 0!==n&&(a=e(n,t));let s=u(a,{name:`${p.shortName} \u2192 *`,\u0254:r,strict:0}),l=et(p,s,"map",0,e);return K(re(s),{type:"map",fn:e,from:o}),re(s).noInit=1,f('storeMap',o,l),s},watch(e,t){if(!t||!v(e)){let t=Ge(p,e);return f('storeWatch',o,e)||e(p.getState()),t}return I(t)||N('second argument should be a function'),e.watch((e=>t(p.getState(),e)))}},d=Xe(k,p,r),m=p.defaultConfig.updateFilter;return p.graphite=a({scope:{state:o},node:[B.defined(),B.changed({store:l}),m&&V({store:l,to:"a"}),m&&L({fn:(e,t,{a:r})=>m(e,r)}),W({store:o}),W({store:l})],child:i,meta:d,regional:1}),d.sid&&(d.storeChange=1,o.sid=d.sid),Ke&&void 0===e&&N("current state can't be undefined, use null instead"),ue(p,[i]),p}function p(...e){let t,r,a;Re(e[0],((t,r)=>{a=t,e=r}));let n,o,s,l=e[e.length-1];if(I(l)?(r=e.slice(0,-1),t=l):r=e,1===r.length){let e=r[0];w(e)||(n=e,o=1)}if(!o&&(n=r,t)){s=1;let e=t;t=t=>e(...t)}return j(n)||N('shape should be an object'),tt(Array.isArray(n),!s,n,a,t)}function d(){let e={};return e.req=new Promise(((t,r)=>{e.rs=t,e.rj=r})),e.req.catch((()=>{})),e}function m(e,t){let r=c(e,t),n=r.defaultConfig.handler||(()=>N(`no handler used in ${r.getType()}`)),o=Z(r);ce(o,'unit',r.kind="effect"),r.use=e=>(I(e)||N('.use argument should be a function'),n=e,r);let l=r.finally=Ye('finally'),i=r.done=l.filterMap({named:'done',fn({status:e,params:t,result:r}){if('done'===e)return{params:t,result:r}}}),f=r.fail=l.filterMap({named:'fail',fn({status:e,params:t,error:r}){if('fail'===e)return{params:t,error:r}}}),p=r.doneData=i.map({named:'doneData',fn:({result:e})=>e}),m=r.failData=f.map({named:'failData',fn:({error:e})=>e}),g=a({scope:{getHandler:r.use.getCurrent=()=>n,finally:l,handlerId:fe(o,'sid')},node:[T({fn({params:e,req:t},{finally:r,getHandler:a,handlerId:n},o){let s,l=rt(e,t,1,r,o),i=rt(e,t,0,r,o);try{let t;t=ie(o)&&ie(o).handlers[n]||a(),s=t(e)}catch(e){return void i(e)}j(s)&&I(s.then)?s.then(l,i):l(s)}})],meta:{op:'fx',fx:'runner'}});o.scope.runner=g,o.seq.push(H({fn:(e,t,r)=>le(r)?{params:e,req:{rs(e){},rj(e){}}}:e}),T({fn:(e,{runner:t},r)=>(s({target:t,params:e,defer:1,forkPage:ie(r)}),e.params)})),r.create=e=>{let t=d(),a={params:e,req:t};if(Ce){if(!je){let e=Ce;t.req.finally((()=>{qe(e)})).catch((()=>{}))}s({target:r,params:a,forkPage:Ce})}else s(r,a);return t.req};let h=r.inFlight=u(0,{named:'inFlight'}).on(r,(e=>e+1)).on(l,(e=>e-1));ce(l,'needFxCounter',1),ce(r,'needFxCounter',1);let y=r.pending=h.map({fn:e=>e>0,named:'pending'});return ue(r,[l,i,f,p,m,y,h,g]),r}function g(e,r){let a=c(r||l(e,'merge'));return t(e,'merge','first argument'),Ue({from:e,to:a,meta:{op:'merge'}}),a}function h(...e){let r,n,s,l,[[i,d,m],h]=ze(e);void 0===d&&j(i)&&(e=>{let t=0;return o(ot,(r=>{r in e&&(null==e[r]&&N(`sample: ${r} should be defined`),t=1)})),t})(i)&&(d=i.clock,m=i.fn,l=i.greedy,r=i.target,n=i.name,s=i.sid,i=i.source);let y=1;void 0===i&&(t(d,'sample','clock'),Array.isArray(d)&&(d=g(d)),i=d,y=0),y&&!v(i)&&(i=p(i)),void 0===d&&(d=i),t(d,'sample','clock'),n=h||n||i.shortName;let b=!!r;if(r||(w(i)&&w(d)?r=u(m?m(J(re(i)),J(re(d))):J(re(i)),{name:n,sid:s}):(r=c(n),f('sampleTarget',Z(r)))),w(i)){let e=re(i);ue(i,[We(d,r,{scope:{fn:m},node:[f('sampleSourceLoader'),!l&&z({priority:"sampler"}),V({store:e,to:m?"a":"stack"}),m&&H({fn:X}),f('sampleSourceUpward',b)],meta:{op:"sample",sample:k}})]),f('sampleStoreSource',e)}else{let e=G(0),t=G(),n=G();f('sampleNonStoreSource',e,t,n),a({parent:i,node:[W({store:t}),V({from:"value",store:1,target:e})],family:{owners:[i,r,d],links:r},meta:{op:"sample",sample:'source'},regional:1}),ue(i,[We(d,r,{scope:{fn:m},node:[f('sampleSourceLoader'),W({store:n}),V({store:e}),L({fn:e=>e}),!l&&z({priority:"sampler"}),V({store:t}),V({store:n,to:"a"}),m&&H({fn:Q}),f('sampleSourceUpward',b)],meta:{op:"sample",sample:'clock'}})])}return r}function y(e,t){if(Array.isArray(e)&&(e=new Map(e)),e instanceof Map){let r={};for(let[a,n]of e)v(a)||N('Map key should be a unit'),t&&t(a,n),r[a.sid]=n;return r}return e}Object.defineProperty(exports,'__esModule',{value:1});let b='undefined'!=typeof Symbol&&Symbol.observable||'@@observable',k='store',v=e=>(I(e)||j(e))&&'kind'in e;const x=e=>t=>v(t)&&t.kind===e;let w=x(k),S=x("event"),A=x("effect"),P=x("domain"),M=x("scope");var C={__proto__:null,unit:v,store:w,event:S,effect:A,domain:P,scope:M};let N=e=>{throw Error(e)},j=e=>'object'==typeof e&&null!==e,I=e=>'function'==typeof e,q=e=>{j(e)||I(e)||N('expect first argument be an object')};const F=()=>{let e=0;return()=>""+ ++e};let D=F(),_=F(),O=F(),$=(e,t)=>e.bind(null,t);const E=(e,t)=>({id:_(),type:e,data:t});let R=0,z=({priority:e="barrier"})=>E("barrier",{barrierID:++R,priority:e}),V=({from:e=k,store:t,target:r,to:a=(r?k:"stack")})=>E('mov',{from:e,store:t,to:a,target:r}),B={defined:()=>E('check',{type:'defined'}),changed:({store:e})=>E('check',{type:'changed',store:e})},H=$(E,'compute'),L=$(E,"filter"),T=$(E,'run'),W=({store:e})=>V({from:"stack",target:e});var U={__proto__:null,barrier:z,mov:V,check:B,compute:H,filter:L,run:T,update:W};let G=e=>({id:_(),current:e}),J=({current:e})=>e,K=(e,t)=>{e.before||(e.before=[]),e.before.push(t)},Q=(e,{fn:t},{a:r})=>t(e,r),X=(e,{fn:t},{a:r})=>t(r,e),Y=(e,{fn:t})=>t(e),Z=e=>e.graphite||e,ee=e=>e.family.owners,te=e=>e.family.links,re=e=>e.stateRef,ae=e=>e.config,ne=e=>e["\u0254"],oe=e=>e.value,se=e=>e.subscribers,le=e=>e.parent,ie=e=>e.forkPage,fe=(e,t)=>Z(e).meta[t],ce=(e,t,r)=>Z(e).meta[t]=r,ue=(e,t)=>{let r=Z(e);for(let e=0;e<t.length;e++){let a=Z(t[e]);"domain"!==r.family.type&&(a.family.type="crosslink"),ee(a).push(r),te(r).push(a)}},pe=null,de=()=>pe&&pe.template,me=e=>(e&&pe&&pe.sidRoot&&(e=`${pe.sidRoot}\u0254${e}`),e);const ge=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Z);let he=(e,t)=>e.includes(t),ye=(e,t)=>{let r=e.indexOf(t);-1!==r&&e.splice(r,1)},be=null;const ke=(e,t)=>{if(!e)return t;if(!t)return e;let r,a=e.v.type===t.v.type;return(a&&e.v.id>t.v.id||!a&&"sampler"===e.v.type)&&(r=e,e=t,t=r),r=ke(e.r,t),e.r=e.l,e.l=r,e},ve=[];let xe=0;for(;xe<5;)ve.push({first:null,last:null,size:0}),xe+=1;const we=()=>{for(let e=0;e<5;e++){let t=ve[e];if(t.size>0){if(2===e||3===e){t.size-=1;let e=be.v;return be=ke(be.l,be.r),e}1===t.size&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},Se=(e,t,r,a,n,o)=>Ae(0,{a:null,b:null,node:r,parent:a,value:n,page:t,forkPage:o},e),Ae=(e,t,r,a=0)=>{let n=Pe(r),o=ve[n],s={v:{idx:e,stack:t,type:r,id:a},l:null,r:null};2===n||3===n?be=ke(be,s):(0===o.size?o.first=s:o.last.r=s,o.last=s),o.size+=1},Pe=e=>{switch(e){case'child':return 0;case'pure':return 1;case"barrier":return 2;case"sampler":return 3;case"effect":return 4;default:return-1}},Me=new Set;let Ce,Ne=1,je=0,Ie=null,qe=e=>{Ce=e},Fe=e=>{Ie=e};const De=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=le(e);if(e)return e}return null};let _e=(e,t,r,a,n)=>{let o=De(e,a.id);return o?o.reg[a.id]:t?(Oe(t,a,n),t.reg[a.id]):a},Oe=(e,t,r)=>{let a=e.reg;if(a[t.id])return;let n={id:t.id,current:t.current};if(t.sid&&(e.sidIdMap[t.sid]=t.id),t.sid&&t.sid in e.sidValuesMap)n.current=e.sidValuesMap[t.sid];else if((r||!t.noInit)&&t.before){let s=0;o(t.before,(t=>{switch(t.type){case"map":{let o=t.from;if(o||t.fn){o&&Oe(e,o,r);let s=o&&a[o.id].current;n.current=t.fn?t.fn(s):s}break}case'field':{Oe(e,t.from,r);let o=a[t.from.id];s||(s=1,n.current=Array.isArray(n.current)?[...n.current]:{...n.current}),n.current[t.field]=a[o.id].current;break}}}))}a[t.id]=n};const $e=(e,{fn:t},r)=>{try{return t(oe(r),e.scope,r)}catch(t){console.error(t),e.fail=1}},Ee=e=>e.compositeName;let Re=(e,t)=>{q(e),ne(e)&&t(ae(e),ne(e))},ze=e=>{let t;return Re(e[0],((r,a)=>{t=r,e=a})),[e,t]};const Ve=(e,t)=>{ye(e.next,t),ye(ee(e),t),ye(te(e),t)},Be=(e,t,r)=>{let a;e.next.length=0,e.seq.length=0,e.scope=null;let n=te(e);for(;a=n.pop();)Ve(a,e),(t||r&&!fe(e,'sample')||"crosslink"===a.family.type)&&Be(a,t,'on'!==fe(a,'op')&&r);for(n=ee(e);a=n.pop();)Ve(a,e),r&&"crosslink"===a.family.type&&Be(a,t,'on'!==fe(a,'op')&&r)},He=e=>e.clear();let Le=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),w(e))He(se(e));else if(P(e)){r=1;let t=e.history;He(t.events),He(t.effects),He(t.stores),He(t.domains)}Be(Z(e),!!t,r)},Te=e=>{let t=()=>Le(e);return t.unsubscribe=t,t},We=(e,t,{node:r,scope:n,meta:o})=>a({node:r,parent:e,child:t,scope:n,meta:o,family:{owners:[e,t],links:t},regional:1}),Ue=e=>{let r;Re(e,((t,a)=>{r=t,e=a}));let{from:n,to:o,meta:s={op:'forward'}}=e;return t(n,'forward','"from"'),t(o,'forward','"to"'),r&&(s.config=r),Te(a({parent:n,child:o,meta:s,family:{},regional:1}))},Ge=(e,t)=>(I(t)||N('.watch argument should be a function'),Te(a({scope:{fn:t},node:[T({fn:Y})],parent:e,meta:{op:'watch'},family:{owners:e},regional:1})));const Je=(e,t)=>(j(e)&&(Je(ae(e),t),null!=e.name&&(j(e.name)?Je(e.name,t):I(e.name)?t.handler=e.name:t.name=e.name),e.loc&&(t.loc=e.loc),(e.sid||null===e.sid)&&(t.sid=e.sid),e.handler&&(t.handler=e.handler),e.updateFilter&&(t.updateFilter=e.updateFilter),le(e)&&(t.parent=le(e)),'strict'in e&&(t.strict=e.strict),e.named&&(t.named=e.named),Je(ne(e),t)),t);let Ke,Qe=(e,t,r="event")=>{le(e)&&le(e).hooks[r](t)},Xe=(e,t,r,a)=>{let n=Je({name:a,config:r},{}),o="domain"===e,s=D(),{parent:l=null,sid:f=null,strict:c=1,named:u=null}=n,p=u||n.name||(o?'':s),d=i(p,l),m={unit:t.kind=e,name:t.shortName=p,sid:t.sid=me(f),named:u,unitId:t.id=s};if(t.parent=l,t.compositeName=d,t.defaultConfig=n,t.thru=e=>e(t),t.getType=()=>d.fullName,!o){t.subscribe=e=>(q(e),t.watch(I(e)?e:t=>{e.next&&e.next(t)})),t[b]=()=>t;let e=de();e&&(m.nativeTemplate=e)}return Ke=c,m},Ye=e=>c({named:e});const Ze=(e,t,r,a)=>{let n;j(r)&&(n=r,r=r.fn);let o=c({name:`${e.shortName} \u2192 *`,\u0254:n});return We(e,o,{scope:{fn:r},node:a,meta:{op:t}}),o},et=(e,t,r,a,n,o)=>{let s=re(t),l=[V({store:s,to:"a"}),H({fn:a?X:Q}),B.defined(),B.changed({store:s}),o&&L({fn:(e,t,{a:r})=>o(e,r)}),W({store:s})];return f('storeOnMap',s,l,w(e)&&re(e)),We(e,t,{scope:{fn:n},node:l,meta:{op:r}})},tt=(e,t,r,a,o)=>{let s=e?e=>e.slice():e=>({...e}),i=e?[]:{},c=s(i),p=G(c),d=G(1);p.type=e?'list':'shape',p.noInit=1,f('combineBase',p,d);let m=u(c,{name:a||l(r)}),g=re(m);g.noInit=1,ce(m,'isCombine',1);let h=[B.defined(),V({store:p,to:"a"}),L({fn:(e,{key:t},{a:r})=>e!==r[t]}),V({store:d,to:'b'}),H({fn(e,{clone:t,key:r,spread:a},n){a&&n.b&&(n.a=t(n.a)),n.a[r]=e}}),V({from:"a",target:p}),V({from:"value",store:0,target:d}),z({priority:"barrier"}),V({from:"value",store:1,target:d}),V({store:p}),o&&H({fn:Y}),B.changed({store:g})];return n(r,((e,r)=>{if(!w(e))return void(c[r]=i[r]=e);i[r]=e.defaultState,c[r]=e.getState();let a=We(e,m,{scope:{key:r,clone:s,fn:o,spread:t},node:h,meta:{op:'combine'}}),n=re(e);K(p,{type:'field',field:r,from:n}),f('combineField',n,a)})),m.defaultShape=r,K(g,{type:"map",from:p,fn:o}),de()||(m.defaultState=o?g.current=o(c):i),m};let rt=(e,t,r,a,n)=>o=>s({target:[a,at],params:[r?{status:'done',params:e,result:o}:{status:'fail',params:e,error:o},{fn:r?t.rs:t.rj,value:o}],defer:1,page:n.page,forkPage:ie(n)}),at=a({node:[T({fn({fn:e,value:t}){e(t)}})],meta:{op:'fx',fx:'sidechain'}});const nt=(e,t,r)=>(e.create=t=>(s(e,t),t),Z(e).seq.push(H({fn:(e,t,r)=>(r.forkPage=null,e)})),e.watch((e=>{ue(r,[e]),t.add(e),e.ownerSet||(e.ownerSet=t),le(e)||(e.parent=r)})),ue(r,[e]),r=>(t.forEach(r),e.watch(r))),ot=['source','clock','target'],st=(e,t,r,a)=>{let n=e[t];n&&s({target:n,params:Array.isArray(n)?n.map((()=>r)):r,defer:1,stack:a})};exports.allSettled=(e,{scope:t,params:r})=>{if(!v(e))return Promise.reject(Error('first argument should be unit'));let a=d();a.parentFork=Ce;let{fxCount:n}=t;n.scope.defers.push(a);let o=[e],l=[];return A(e)?l.push({params:r,req:{rs(e){a.value={status:'done',value:e}},rj(e){a.value={status:'fail',value:e}}}}):l.push(r),o.push(n),l.push(null),s({target:o,params:l,forkPage:t}),a.req},exports.attach=e=>{let t;Re(e,((r,a)=>{t=r,e=a}));let{source:r,effect:a,mapParams:n}=e,o=!A(a)&&I(a);if(n||(n=r&&!o?(e,t)=>t:e=>e),o){let e=a;a=m((([t,r])=>e(t,r)))}let l=m(e,t);ce(l,'attached',1);let i,{runner:f}=Z(l).scope,c=({params:e,req:t},{finally:r,effect:a,isPlain:o},l)=>{let i,f=rt(e,t,0,r,l);try{i=n(e,l.a)}catch(e){return f(e)}s({target:a,params:{params:o?[i,l.a]:i,req:{rs:rt(e,t,1,r,l),rj:f}},page:l.page,defer:1})};if(r){let e;w(r)?(e=r,ue(r,[l])):(e=p(r),ue(l,[e])),i=[T({fn:e=>e}),V({store:re(e),to:"a"}),H({fn:c})]}else i=[T({fn:c})];return ue(a,[l]),f.scope.effect=a,f.scope.isPlain=o,f.seq.splice(0,1,...i),Qe(a,l,"effect"),l},exports.clearNode=Le,exports.combine=p,exports.createApi=(...e)=>{let[[t,r],a]=ze(e),o={};return n(r,((e,r)=>{let n=o[r]=c(r,{parent:le(t),config:a});t.on(n,e),Qe(t,n)})),o},exports.createDomain=function e(t,r){let o=new Set,s=new Set,l=new Set,i=new Set,f=a({family:{type:"domain"},regional:1}),p={history:{domains:o,stores:s,effects:l,events:i},graphite:f};f.meta=Xe("domain",p,r,t);let[d,g,h,y]=['onEvent','onEffect','onStore','onDomain'].map(Ye);p.hooks={event:d,effect:g,store:h,domain:y},p.onCreateEvent=nt(d,i,p),p.onCreateEffect=nt(g,l,p),p.onCreateStore=nt(h,s,p),p.onCreateDomain=nt(y,o,p),p.createEvent=p.event=(e,t)=>d(c(e,{parent:p,config:t})),p.createEffect=p.effect=(e,t)=>g(m(e,{parent:p,config:t})),p.createDomain=p.domain=(t,r)=>e({name:t,parent:p,config:r}),p.createStore=p.store=(e,t)=>h(u(e,{parent:p,config:t}));let b=le(p);return b&&(n(p.hooks,((e,t)=>{Ue({from:e,to:b.hooks[t]})})),b.hooks.domain(p)),p},exports.createEffect=m,exports.createEvent=c,exports.createNode=a,exports.createStore=u,exports.createStoreObject=(...e)=>(console.error('createStoreObject is deprecated, use combine instead'),p(...e)),exports.fork=(e,t)=>{let r,n=e;P(e)&&(r=e,n=t);let s=(e=>{let t=a({scope:{defers:[],inFlight:0,fxID:0},node:[H({fn(e,t,r){le(r)?'finally'===fe(le(r).node,'named')?t.inFlight-=1:(t.inFlight+=1,t.fxID+=1):t.fxID+=1}}),z({priority:"sampler"}),T({fn(e,t){let{inFlight:r,defers:a,fxID:n}=t;r>0||0===a.length||Promise.resolve().then((()=>{t.fxID===n&&o(a.splice(0,a.length),(e=>{qe(e.parentFork),e.rs(e.value)}))}))}})],meta:{unit:"forkInFlightCounter"}}),r=a({node:[H({fn(e,t,r){let a=le(r);if(a&&le(a)){let t=a.node;if(!fe(t,'isCombine')||'combine'!==fe(le(a).node,'op')){let a=ie(r),n=t.scope.state.id,o=fe(t,'sid');a.sidIdMap[o]=n,a.sidValuesMap[o]=e}}}})]}),n={cloneOf:e,reg:{},sidValuesMap:{},sidIdMap:{},getState:e=>'current'in e?_e(Ie,n,null,e).current:((e,t)=>_e(Ie,t,e,e.scope.state,1).current)(Z(e),n),kind:"scope",graphite:a({family:{type:"domain",links:[t,r]},meta:{unit:'fork'},scope:{forkInFlightCounter:t}}),additionalLinks:{},handlers:{},fxCount:t,storeChange:r};return n})(r);if(n){if(n.values){let e=y(n.values,(e=>!w(e)&&N('Values map can contain only stores as keys')));Object.assign(s.sidValuesMap,e)}n.handlers&&(s.handlers=y(n.handlers,(e=>{A(e)||N("Handlers map can contain only effects as keys"),fe(e,'attached')&&N('Handlers can`t accept attached effects')})))}return s},exports.forward=Ue,exports.fromObservable=e=>{q(e);let t=b in e?e[b]():e;t.subscribe||N('expect observable to have .subscribe');let r=c(),a=Te(r);return t.subscribe({next:r,error:a,complete:a}),r},exports.guard=(...e)=>{let r={op:'guard'},n='guard',[[o,s],l]=ze(e);l&&(r.config=l,l.name&&(n=l.name)),s||(s=o,o=s.source);let{filter:i,greedy:f,clock:u,name:d=n}=s,m=s.target||c(d,r.config),y=v(i),b=1;return void 0===o&&(t(u,'guard','clock'),Array.isArray(u)&&(u=g(u)),o=u,b=0),b&&!v(o)&&(o=p(o)),u&&(t(u,'guard','clock'),o=h({source:o,clock:u,greedy:f,fn:y?null:(e,t)=>({source:e,clock:t})})),t(m,'guard','target'),y?h({source:i,clock:o,target:a({node:[L({fn:({guard:e})=>e}),H({fn:({data:e})=>e})],child:m,meta:r,family:{owners:[o,i,m,...[].concat(u||[])],links:m},regional:1}),fn:(e,t)=>({guard:e,data:t}),greedy:f,name:d}):(I(i)||N('`filter` should be function or unit'),We(o,m,{scope:{fn:i},node:u?[L({fn:({source:e,clock:t},{fn:r})=>r(e,t)}),H({fn:({source:e})=>e})]:[L({fn:Y})],meta:r})),m},exports.hydrate=(e,{values:t})=>{j(t)||N('values property should be an object');let r,a,n=y(t),l=Object.getOwnPropertyNames(n),i=[],f=[];M(e)?(r=e,Object.assign(r.sidValuesMap,n),r.cloneOf||N('scope should be created from domain'),a=Z(r.cloneOf)):P(e)?a=Z(e):N('first argument of hydrate should be domain or scope'),(e=>{let t=[];(function e(r){he(t,r)||(t.push(r),fe(r,'unit')===k&&fe(r,'sid')&&((e,t)=>{he(l,t)&&(i.push(e),f.push(n[t]))})(r,fe(r,'sid')),o(r.next,e),o(ee(r),e),o(te(r),e))})(e)})(a),s({target:i,params:f,forkPage:r})},exports.is=C,exports.launch=s,exports.merge=g,exports.restore=(e,t,r)=>{if(w(e))return e;if(v(e)){let a,n=le(e);return S(e)&&(a=u(t,{parent:n,name:e.shortName,\u0254:r}).on(e,((e,t)=>t))),A(e)&&(a=u(t,{parent:n,name:e.shortName,\u0254:r}),Ue({from:e.doneData,to:a})),n&&n.hooks.store(a),a}let a=Array.isArray(e)?[]:{};return n(e,((e,t)=>{a[t]=w(e)?e:u(e,{name:t})})),a},exports.sample=h,exports.scopeBind=(e,{scope:t}={})=>{t||Ce||N('scopeBind cannot be called outside of forked .watch');let r=t||Ce;return A(e)?t=>{let a=d();return s({target:e,params:{params:t,req:a},forkPage:r}),a.req}:t=>(s({target:e,params:t,forkPage:r}),t)},exports.serialize=(e,{ignore:t=[]}={})=>{let r=t.map((({sid:e})=>e)),a={};return n(e.sidValuesMap,((t,n)=>{if(r.includes(n))return;let o=e.sidIdMap[n];a[n]=o&&o in e.reg?e.reg[o].current:t})),a},exports.setStoreName=(e,t)=>{e.shortName=t,Object.assign(Ee(e),i(t,le(e)))},exports.split=(...e)=>{let t,[[r,o],s]=ze(e),l=!o;l&&(t=r.cases,o=r.match,r=r.source);let i=w(o),u=!v(o)&&I(o),p=!i&&!u&&j(o);t||(t={}),l||(p||N('match should be an object'),n(o,((e,r)=>{t[r]=c(s)})),t.__=c(s));let d,m=new Set([].concat(r,Object.values(t))),g=Object.keys(i||u?t:o);if(i||u)i&&m.add(o),d=[i&&z({priority:'sampler'}),i&&V({store:re(o),to:'a'}),L({fn(e,t,r){let a=String(i?r.a:o(e));st(t,he(g,a)?a:'__',e,r)}})];else if(p){let e=G({});e.type='shape';let t,r=[V({store:e,to:"a"}),H({fn(e,{key:t},{a:r}){r[t]=e}})],a=[];n(o,((n,o)=>{if(v(n)){t=1,a.push(o),m.add(n);let s=We(n,[],{node:r,scope:{key:o}});if(w(n)){e.current[o]=n.getState();let t=re(n);K(e,{type:'field',field:o,from:t}),f('splitMatchStore',t,s)}}})),t&&f('splitBase',e),d=[t&&z({priority:'sampler'}),t&&V({store:e,to:'a'}),L({fn(e,t,r){for(let n=0;n<g.length;n++){let s=g[n];if(he(a,s)?r.a[s]:o[s](e))return void st(t,s,e,r)}st(t,'__',e,r)}})]}else N('expect match to be unit, function or object');if(a({meta:{op:'split'},parent:r,scope:t,node:d,family:{type:'crosslink',owners:Array.from(m)},regional:1}),!l)return t},exports.step=U,exports.version="21.8.12",exports.withFactory=({sid:e,name:t,loc:n,method:o,fn:s})=>r(a({meta:{sidRoot:me(e),name:t,loc:n,method:o}}),s),exports.withRegion=r;
//# sourceMappingURL=effector.cjs.js.map
