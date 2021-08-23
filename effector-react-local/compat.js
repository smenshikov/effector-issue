'use strict';function e(e){return e&&'object'==typeof e&&'default'in e?e.default:e}function t(e,t,n){var r={node:[p.step.run({fn:function(e){return t(e)}})]};if(n){var o=p.createNode(r),u=e.graphite.id,a=n.additionalLinks[u]=n.additionalLinks[u]||[];return a.push(o),function(){var e=a.indexOf(o);-1!==e&&a.splice(e,1),p.clearNode(o)}}r.parent=e,r.family={type:'crosslink',owners:e};var c=p.createNode(r);return function(){p.clearNode(c)}}function n(e,t){return t.displayName=e,t}function r(e,n){p.is.store(e)||d('expect useStore argument to be a store');var r=m(e,n),o=k(),u=l.useRef({store:e,value:r,pending:0});return v((function(){var r=t(e,(function(e){var t=u.current;t.pending||(t.value=e,t.pending=1,o(),t.pending=0)}),n),a=m(e,n),c=u.current;return c.store===e&&c.value!==a&&(c.value=a,c.pending=1,o(),c.pending=0),c.store=e,r}),[e]),r}function o(e,n){var r,o,a,c=e[0],i=e[1],s=y;i?(r=i,o=c,a=[]):(r=c.fn,o=c.store,a=c.keys,s=c.updateFilter||y),p.is.store(o)||d('useStoreMap expects a store'),Array.isArray(a)||d('useStoreMap expects an array as keys'),'function'!=typeof r&&d('useStoreMap expects a function');var f=l.useRef({}),x=f.current;x.fn=r,x.upd=s,x.init=x.store===o,x.store=o;var g=k(),h=l.useMemo((function(){return u(m(o,n),a,f.current),t(o,(function(e){return u(e,a,f.current,g)}),n)}),a);return v((function(){return function(){return h()}}),a),x.val}function u(e,t,n,r){var o=n.fn(e,t);n.init?void 0!==o&&y(o,n.val)&&n.upd(o,n.val)&&(n.val=o,r&&r()):(n.val=o,n.init=1)}function a(e){return r(e)}function c(e,t){function r(e){var n=l.useRef(e),r=a(o);v((function(){return c({props:n.current,state:o.getState()}),function(){i({props:n.current,state:o.getState()})}}),[]);var u=t(e,r);return n.current=e,u}var o;p.is.store(e)?o=e:'object'==typeof e&&null!==e?o=p.combine(e):d('shape should be a store or object with stores');var u='Unknown';o&&o.shortName&&(u=o.shortName);var c=p.createEvent(),i=p.createEvent();return r.mounted=c,r.unmounted=i,n(u+".View",r)}function i(e,t){return n("Connect("+(t.displayName||t.name||'Unknown')+")",(function(n){return l.createElement(t,Object.assign({},n,a(e)))}))}function s(e,t){void 0===t&&(t={});var n=l.useRef(null);v((function(){return e.open(n.current),function(){return e.close(n.current)}}),[e]),function(e,t){if(e===t)return 1;if('object'==typeof e&&null!==e&&'object'==typeof t&&null!==t){var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return 0;for(var o=0;o<n.length;o++){var u=n[o];if(e[u]!==t[u])return 0}return 1}return 0}(n.current,t)||(n.current=t,e.set(t))}Object.defineProperty(exports,'__esModule',{value:1});var f=require('react'),p=require('effector/compat'),l=e(f),v='undefined'!=typeof window?l.useLayoutEffect:l.useEffect,d=function(e){throw Error(e)},m=function(e,t){return t?t.getState(e):e.getState()},y=function(e,t){return e!==t},k=function(){return l.useReducer((function(e){return e+1}),0)[1]};exports.connect=function(e){return function(t){var n=e;return'function'!=typeof e&&(n=t,t=e),i(t,n)}},exports.createComponent=c,exports.createContextComponent=function(e,t,r){return n((e.shortName||'Unknown')+".ContextComponent",(function(n){var o=l.useContext(t),u=a(e);return r(n,u,o)}))},exports.createGate=function(e,t){var r;return void 0===e&&(e='gate'),void 0===t&&(t={}),'object'==typeof e&&null!==e&&('defaultState'in e&&(t=e.defaultState),e.domain&&(r=e.domain),e=e.name),function(e){function t(e){return a(t,e),null}var r=e.name,o=e.domain,u=e.defaultState,a=e.hook,c=(o?o.compositeName.fullName+"/":'')+(void 0===r?'gate':r),i=p.createEvent(c+".set"),s=p.createEvent(c+".open"),f=p.createEvent(c+".close"),l=p.createStore(Boolean(0),{name:c+".status"}).on(s,(function(){return Boolean(1)})).on(f,(function(){return Boolean(0)})),v=p.createStore(u,{name:c+".state"}).on(i,(function(e,t){return t})).reset(f);if(o){var d=o.hooks;p.launch({target:[d.store,d.store,d.event,d.event,d.event],params:[l,v,s,f,i]})}return t.open=s,t.close=f,t.status=l,t.state=v,t.set=i,n("Gate:"+c,t)}({name:e,domain:r,defaultState:t,hook:s})},exports.createReactState=i,exports.createStoreConsumer=function(e){return c(e,(function(e,t){return(0,e.children)(t)}))},exports.useEvent=function(e){return e},exports.useGate=s,exports.useList=function(e,t){return function(e,t,u){var a,c,i=[];'object'==typeof t&&null!==t?(t.keys&&(i=t.keys),a=t.fn,t.getKey&&(c=t.getKey)):a=t,p.is.store(e)||d('expect useList first argument to be a store'),'function'!=typeof a&&d("expect useList's renderItem to be a function"),Array.isArray(i)||d("expect useList's keys to be an array");var s=l.useMemo((function(){var t=n((e.shortName||'Unknown')+".Item",(function(t){var n=t.index,r=t.keys;if(f.current[1])return f.current[0](t.value,t.keyVal);var a=o([{store:e,keys:[n].concat(r),fn:function(e,t){return e[t[0]]}}],u);return f.current[0](a,n)}));return l.memo(t)}),[e,!!c]),f=l.useRef([a,c]);f.current=[a,c];var v=l.useMemo((function(){return i}),i);if(c)return r(e,u).map((function(e){var t=f.current[1](e);return l.createElement(s,{keyVal:t,key:t,keys:v,value:e})}));var m=o([{store:e,keys:[e],fn:function(e){return e.length}}],u);return Array.from({length:m},(function(e,t){return l.createElement(s,{index:t,key:t,keys:v})}))}(e,t)},exports.useStore=a,exports.useStoreMap=function(e,t){return o([e,t])};
//# sourceMappingURL=compat.js.map