import{createMutableSource as t,useCallback as n,useMutableSource as e}from"react";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var u=function(t,n){return"function"==typeof n?n(t):n},o=function(t,n){if(!t.includes(n))throw new Error("'"+n+"' not found. It must be provided in initialState as a property key.")};function i(n,e){var i=Object.keys(n),c=n,a=function(){var t=new Map;return i.forEach(function(n){t.set(n,new Set)}),t.set(null,new Set),t}(),f=function(t,n){i.forEach(function(e){t[e]!==n[e]&&a.get(e).forEach(function(t){t()})}),a.get(null).forEach(function(t){t()})},s={getState:function(){return c},setState:function(t){var n=c;c=u(n,t),f(n,c)},getStateByKey:function(t){return"production"!==process.env.NODE_ENV&&o(i,t),c[t]},setStateByKey:function(t,n){var e,f;"production"!==process.env.NODE_ENV&&o(i,t),c=r(r({},e=c),{},((f={})[t]=u(e[t],n),f)),a.get(t).forEach(function(t){t()}),a.get(null).forEach(function(t){t()})},dispatch:function(t){if(!e)throw new Error("no reducer specified");var n=c;return c=e(n,t),f(n,c),t},subscribe:function(t,n){var e=a.get(t);return e.add(n),function(){e.delete(n)}},mutableSource:void 0};return s.mutableSource=t(s,function(){return c}),s}function c(t,r){var u=n(function(t){return r?t.getStateByKey(r):t.getState()},[r]),o=n(function(t,n){return t.subscribe(r||null,n)},[r]);return[e(t.mutableSource,u,o),n(function(n){r?t.setStateByKey(r,n):t.setState(n)},[t,r])]}var a=function(t){var n=i(t);return{useGlobalState:function(t){return c(n,t)},getGlobalState:n.getStateByKey,setGlobalState:n.setStateByKey}},f=function t(n,e,r){if(void 0===e&&(e=n(void 0,{type:void 0})),r)return r(t)(n,e);var u=i(e,n);return{useGlobalState:function(t){return c(u,t)},getState:u.getState,setState:u.setState,dispatch:u.dispatch}},s=function(){return window.__REDUX_DEVTOOLS_EXTENSION__?function(){return[].slice.call(arguments).reduce(function(t,n){return function(){return t(n.apply(void 0,[].slice.call(arguments)))}})}(function(e){return function(u,o,i){if(t=u,n=o,i)return i(e)(u,o);var c=e(u,o);return r(r({},c),{},{useGlobalState:function(t){return[c.useGlobalState(t)[0],function(){throw new Error("Update is not allowed when using DevTools")}]}})}},window.__REDUX_DEVTOOLS_EXTENSION__(),function(e){return function(u,o,i){if(i)return i(e)(u,o);var c=e(t,n),a=r(r({},u(o,{type:"@@redux/INIT"})),n),f=[];return r(r({},c),{},{getState:function(){return a},dispatch:function(t){return a=u(a,t),c.setState(a.computedStates[a.currentStateIndex].state),f.forEach(function(t){return t()}),t},subscribe:function(t){return f.push(t),function(){var n=f.indexOf(t);f.splice(n,1)}}})}}):function(t){return t};var t,n};export{i as createAtom,a as createGlobalState,f as createStore,s as reduxDevToolsExt,c as useAtom};
//# sourceMappingURL=index.esm.js.map
