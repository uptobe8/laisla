(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();var hd={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function i1(){if(ov)return xl;ov=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:l}}return xl.Fragment=e,xl.jsx=t,xl.jsxs=t,xl}var lv;function a1(){return lv||(lv=1,hd.exports=i1()),hd.exports}var H=a1(),dd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function s1(){if(cv)return pt;cv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function x(z,$,ye){this.props=z,this.context=$,this.refs=S,this.updater=ye||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=x.prototype;function N(z,$,ye){this.props=z,this.context=$,this.refs=S,this.updater=ye||E}var R=N.prototype=new D;R.constructor=N,T(R,x.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function I(){}var U={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function b(z,$,ye){var ve=ye.ref;return{$$typeof:o,type:z,key:$,ref:ve!==void 0?ve:null,props:ye}}function A(z,$){return b(z.type,$,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function W(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ye){return $[ye]})}var ae=/\/+/g;function ue(z,$){return typeof z=="object"&&z!==null&&z.key!=null?W(""+z.key):$.toString(36)}function re(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(I,I):(z.status="pending",z.then(function($){z.status==="pending"&&(z.status="fulfilled",z.value=$)},function($){z.status==="pending"&&(z.status="rejected",z.reason=$)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,$,ye,ve,Ne){var te=typeof z;(te==="undefined"||te==="boolean")&&(z=null);var fe=!1;if(z===null)fe=!0;else switch(te){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(z.$$typeof){case o:case e:fe=!0;break;case _:return fe=z._init,B(fe(z._payload),$,ye,ve,Ne)}}if(fe)return Ne=Ne(z),fe=ve===""?"."+ue(z,0):ve,O(Ne)?(ye="",fe!=null&&(ye=fe.replace(ae,"$&/")+"/"),B(Ne,$,ye,"",function(je){return je})):Ne!=null&&(V(Ne)&&(Ne=A(Ne,ye+(Ne.key==null||z&&z.key===Ne.key?"":(""+Ne.key).replace(ae,"$&/")+"/")+fe)),$.push(Ne)),1;fe=0;var Ue=ve===""?".":ve+":";if(O(z))for(var Fe=0;Fe<z.length;Fe++)ve=z[Fe],te=Ue+ue(ve,Fe),fe+=B(ve,$,ye,te,Ne);else if(Fe=y(z),typeof Fe=="function")for(z=Fe.call(z),Fe=0;!(ve=z.next()).done;)ve=ve.value,te=Ue+ue(ve,Fe++),fe+=B(ve,$,ye,te,Ne);else if(te==="object"){if(typeof z.then=="function")return B(re(z),$,ye,ve,Ne);throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(z,$,ye){if(z==null)return z;var ve=[],Ne=0;return B(z,ve,"","",function(te){return $.call(ye,te,Ne++)}),ve}function Y(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(ye){(z._status===0||z._status===-1)&&(z._status=1,z._result=ye)},function(ye){(z._status===0||z._status===-1)&&(z._status=2,z._result=ye)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var de=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Te={map:K,forEach:function(z,$,ye){K(z,function(){$.apply(this,arguments)},ye)},count:function(z){var $=0;return K(z,function(){$++}),$},toArray:function(z){return K(z,function($){return $})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return pt.Activity=g,pt.Children=Te,pt.Component=x,pt.Fragment=t,pt.Profiler=r,pt.PureComponent=N,pt.StrictMode=a,pt.Suspense=d,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,pt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},pt.cache=function(z){return function(){return z.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(z,$,ye){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ve=T({},z.props),Ne=z.key;if($!=null)for(te in $.key!==void 0&&(Ne=""+$.key),$)!G.call($,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&$.ref===void 0||(ve[te]=$[te]);var te=arguments.length-2;if(te===1)ve.children=ye;else if(1<te){for(var fe=Array(te),Ue=0;Ue<te;Ue++)fe[Ue]=arguments[Ue+2];ve.children=fe}return b(z.type,Ne,ve)},pt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},pt.createElement=function(z,$,ye){var ve,Ne={},te=null;if($!=null)for(ve in $.key!==void 0&&(te=""+$.key),$)G.call($,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(Ne[ve]=$[ve]);var fe=arguments.length-2;if(fe===1)Ne.children=ye;else if(1<fe){for(var Ue=Array(fe),Fe=0;Fe<fe;Fe++)Ue[Fe]=arguments[Fe+2];Ne.children=Ue}if(z&&z.defaultProps)for(ve in fe=z.defaultProps,fe)Ne[ve]===void 0&&(Ne[ve]=fe[ve]);return b(z,te,Ne)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(z){return{$$typeof:f,render:z}},pt.isValidElement=V,pt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:Y}},pt.memo=function(z,$){return{$$typeof:h,type:z,compare:$===void 0?null:$}},pt.startTransition=function(z){var $=U.T,ye={};U.T=ye;try{var ve=z(),Ne=U.S;Ne!==null&&Ne(ye,ve),typeof ve=="object"&&ve!==null&&typeof ve.then=="function"&&ve.then(I,de)}catch(te){de(te)}finally{$!==null&&ye.types!==null&&($.types=ye.types),U.T=$}},pt.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},pt.use=function(z){return U.H.use(z)},pt.useActionState=function(z,$,ye){return U.H.useActionState(z,$,ye)},pt.useCallback=function(z,$){return U.H.useCallback(z,$)},pt.useContext=function(z){return U.H.useContext(z)},pt.useDebugValue=function(){},pt.useDeferredValue=function(z,$){return U.H.useDeferredValue(z,$)},pt.useEffect=function(z,$){return U.H.useEffect(z,$)},pt.useEffectEvent=function(z){return U.H.useEffectEvent(z)},pt.useId=function(){return U.H.useId()},pt.useImperativeHandle=function(z,$,ye){return U.H.useImperativeHandle(z,$,ye)},pt.useInsertionEffect=function(z,$){return U.H.useInsertionEffect(z,$)},pt.useLayoutEffect=function(z,$){return U.H.useLayoutEffect(z,$)},pt.useMemo=function(z,$){return U.H.useMemo(z,$)},pt.useOptimistic=function(z,$){return U.H.useOptimistic(z,$)},pt.useReducer=function(z,$,ye){return U.H.useReducer(z,$,ye)},pt.useRef=function(z){return U.H.useRef(z)},pt.useState=function(z){return U.H.useState(z)},pt.useSyncExternalStore=function(z,$,ye){return U.H.useSyncExternalStore(z,$,ye)},pt.useTransition=function(){return U.H.useTransition()},pt.version="19.2.7",pt}var uv;function im(){return uv||(uv=1,dd.exports=s1()),dd.exports}var tn=im(),pd={exports:{}},yl={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function r1(){return fv||(fv=1,(function(o){function e(B,K){var Y=B.length;B.push(K);e:for(;0<Y;){var de=Y-1>>>1,Te=B[de];if(0<r(Te,K))B[de]=K,B[Y]=Te,Y=de;else break e}}function t(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var K=B[0],Y=B.pop();if(Y!==K){B[0]=Y;e:for(var de=0,Te=B.length,z=Te>>>1;de<z;){var $=2*(de+1)-1,ye=B[$],ve=$+1,Ne=B[ve];if(0>r(ye,Y))ve<Te&&0>r(Ne,ye)?(B[de]=Ne,B[ve]=Y,de=ve):(B[de]=ye,B[$]=Y,de=$);else if(ve<Te&&0>r(Ne,Y))B[de]=Ne,B[ve]=Y,de=ve;else break e}}return K}function r(B,K){var Y=B.sortIndex-K.sortIndex;return Y!==0?Y:B.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],h=[],_=1,g=null,v=3,y=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var K=t(h);K!==null;){if(K.callback===null)a(h);else if(K.startTime<=B)a(h),K.sortIndex=K.expirationTime,e(d,K);else break;K=t(h)}}function O(B){if(T=!1,R(B),!E)if(t(d)!==null)E=!0,I||(I=!0,W());else{var K=t(h);K!==null&&re(O,K.startTime-B)}}var I=!1,U=-1,G=5,b=-1;function A(){return S?!0:!(o.unstable_now()-b<G)}function V(){if(S=!1,I){var B=o.unstable_now();b=B;var K=!0;try{e:{E=!1,T&&(T=!1,D(U),U=-1),y=!0;var Y=v;try{t:{for(R(B),g=t(d);g!==null&&!(g.expirationTime>B&&A());){var de=g.callback;if(typeof de=="function"){g.callback=null,v=g.priorityLevel;var Te=de(g.expirationTime<=B);if(B=o.unstable_now(),typeof Te=="function"){g.callback=Te,R(B),K=!0;break t}g===t(d)&&a(d),R(B)}else a(d);g=t(d)}if(g!==null)K=!0;else{var z=t(h);z!==null&&re(O,z.startTime-B),K=!1}}break e}finally{g=null,v=Y,y=!1}K=void 0}}finally{K?W():I=!1}}}var W;if(typeof N=="function")W=function(){N(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=V,W=function(){ue.postMessage(null)}}else W=function(){x(V,0)};function re(B,K){U=x(function(){B(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return B()}finally{v=Y}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return K()}finally{v=Y}},o.unstable_scheduleCallback=function(B,K,Y){var de=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Y+Te,B={id:_++,callback:K,priorityLevel:B,startTime:Y,expirationTime:Te,sortIndex:-1},Y>de?(B.sortIndex=Y,e(h,B),t(d)===null&&B===t(h)&&(T?(D(U),U=-1):T=!0,re(O,Y-de))):(B.sortIndex=Te,e(d,B),E||y||(E=!0,I||(I=!0,W()))),B},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(B){var K=v;return function(){var Y=v;v=K;try{return B.apply(this,arguments)}finally{v=Y}}}})(gd)),gd}var hv;function o1(){return hv||(hv=1,md.exports=r1()),md.exports}var _d={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function l1(){if(dv)return qn;dv=1;var o=im();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,h,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:h,implementation:_}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qn.createPortal=function(d,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,_)},qn.flushSync=function(d){var h=u.T,_=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=h,a.p=_,a.d.f()}},qn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},qn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},qn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var _=h.as,g=f(_,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},qn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},qn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,g=f(_,h.crossOrigin);a.d.L(d,_,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},qn.preloadModule=function(d,h){if(typeof d=="string")if(h){var _=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},qn.requestFormReset=function(d){a.d.r(d)},qn.unstable_batchedUpdates=function(d,h){return d(h)},qn.useFormState=function(d,h,_){return u.H.useFormState(d,h,_)},qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},qn.version="19.2.7",qn}var pv;function c1(){if(pv)return _d.exports;pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_d.exports=l1(),_d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function u1(){if(mv)return yl;mv=1;var o=o1(),e=im(),t=c1();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(a(188))}function h(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,c=i;;){var p=s.return;if(p===null)break;var m=p.alternate;if(m===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===s)return d(p),n;if(m===c)return d(p),i;m=m.sibling}throw Error(a(188))}if(s.return!==c.return)s=p,c=m;else{for(var M=!1,C=p.child;C;){if(C===s){M=!0,s=p,c=m;break}if(C===c){M=!0,c=p,s=m;break}C=C.sibling}if(!M){for(C=m.child;C;){if(C===s){M=!0,s=m,c=p;break}if(C===c){M=!0,c=m,s=p;break}C=C.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function _(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=_(n),i!==null)return i;n=n.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Symbol.for("react.client.reference");function ue(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ae?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case I:return"SuspenseList";case b:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case E:return"Portal";case N:return n.displayName||"Context";case D:return(n._context.displayName||"Context")+".Consumer";case R:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case U:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case G:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}var re=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},de=[],Te=-1;function z(n){return{current:n}}function $(n){0>Te||(n.current=de[Te],de[Te]=null,Te--)}function ye(n,i){Te++,de[Te]=n.current,n.current=i}var ve=z(null),Ne=z(null),te=z(null),fe=z(null);function Ue(n,i){switch(ye(te,i),ye(Ne,n),ye(ve,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?D_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=D_(i),n=L_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}$(ve),ye(ve,n)}function Fe(){$(ve),$(Ne),$(te)}function je(n){n.memoizedState!==null&&ye(fe,n);var i=ve.current,s=L_(i,n.type);i!==s&&(ye(Ne,n),ye(ve,s))}function mt(n){Ne.current===n&&($(ve),$(Ne)),fe.current===n&&($(fe),ml._currentValue=Y)}var an,X;function Rt(n){if(an===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);an=i&&i[1]||"",X=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+n+X}var ct=!1;function ot(n,i){if(!n||ct)return"";ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var se=ce}Reflect.construct(n,[],xe)}else{try{xe.call()}catch(ce){se=ce}n.call(xe.prototype)}}else{try{throw Error()}catch(ce){se=ce}(xe=n())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),M=m[0],C=m[1];if(M&&C){var k=M.split(`
`),ie=C.split(`
`);for(p=c=0;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;for(;p<ie.length&&!ie[p].includes("DetermineComponentFrameRoot");)p++;if(c===k.length||p===ie.length)for(c=k.length-1,p=ie.length-1;1<=c&&0<=p&&k[c]!==ie[p];)p--;for(;1<=c&&0<=p;c--,p--)if(k[c]!==ie[p]){if(c!==1||p!==1)do if(c--,p--,0>p||k[c]!==ie[p]){var me=`
`+k[c].replace(" at new "," at ");return n.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",n.displayName)),me}while(1<=c&&0<=p);break}}}finally{ct=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Rt(s):""}function Ze(n,i){switch(n.tag){case 26:case 27:case 5:return Rt(n.type);case 16:return Rt("Lazy");case 13:return n.child!==i&&i!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return ot(n.type,!1);case 11:return ot(n.type.render,!1);case 1:return ot(n.type,!0);case 31:return Rt("Activity");default:return""}}function Qt(n){try{var i="",s=null;do i+=Ze(n,s),s=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var ke=Object.prototype.hasOwnProperty,at=o.unstable_scheduleCallback,on=o.unstable_cancelCallback,Ht=o.unstable_shouldYield,P=o.unstable_requestPaint,w=o.unstable_now,ee=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Ee=o.unstable_UserBlockingPriority,he=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,Re=o.unstable_IdlePriority,Ke=o.log,Qe=o.unstable_setDisableYieldValue,Ae=null,Ce=null;function et(n){if(typeof Ke=="function"&&Qe(n),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,n)}catch{}}var ze=Math.clz32?Math.clz32:q,Oe=Math.log,ht=Math.LN2;function q(n){return n>>>=0,n===0?32:31-(Oe(n)/ht|0)|0}var we=256,De=262144,He=4194304;function be(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function _e(n,i,s){var c=n.pendingLanes;if(c===0)return 0;var p=0,m=n.suspendedLanes,M=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~m,c!==0?p=be(c):(M&=C,M!==0?p=be(M):s||(s=C&~n,s!==0&&(p=be(s))))):(C=c&~m,C!==0?p=be(C):M!==0?p=be(M):s||(s=c&~n,s!==0&&(p=be(s)))),p===0?0:i!==0&&i!==p&&(i&m)===0&&(m=p&-p,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:p}function Ve(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ft(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var n=He;return He<<=1,(He&62914560)===0&&(He=4194304),n}function Mt(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Se(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ge(n,i,s,c,p,m){var M=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var C=n.entanglements,k=n.expirationTimes,ie=n.hiddenUpdates;for(s=M&~s;0<s;){var me=31-ze(s),xe=1<<me;C[me]=0,k[me]=-1;var se=ie[me];if(se!==null)for(ie[me]=null,me=0;me<se.length;me++){var ce=se[me];ce!==null&&(ce.lane&=-536870913)}s&=~xe}c!==0&&yt(n,c,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(M&~i))}function yt(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-ze(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|s&261930}function It(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var c=31-ze(s),p=1<<c;p&i|n[c]&i&&(n[c]|=i),s&=~p}}function si(n,i){var s=i&-i;return s=(s&42)!==0?1:di(s),(s&(n.suspendedLanes|i))!==0?0:s}function di(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function $i(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Fi(){var n=K.p;return n!==0?n:(n=window.event,n===void 0?32:ev(n.type))}function Hi(n,i){var s=K.p;try{return K.p=n,i()}finally{K.p=s}}var jn=Math.random().toString(36).slice(2),dn="__reactFiber$"+jn,_n="__reactProps$"+jn,ea="__reactContainer$"+jn,qa="__reactEvents$"+jn,lr="__reactListeners$"+jn,Ns="__reactHandles$"+jn,cr="__reactResources$"+jn,vn="__reactMarker$"+jn;function L(n){delete n[dn],delete n[_n],delete n[qa],delete n[lr],delete n[Ns]}function Z(n){var i=n[dn];if(i)return i;for(var s=n.parentNode;s;){if(i=s[ea]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=B_(n);n!==null;){if(s=n[dn])return s;n=B_(n)}return i}n=s,s=n.parentNode}return null}function oe(n){if(n=n[dn]||n[ea]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function le(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function J(n){var i=n[cr];return i||(i=n[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Me(n){n[vn]=!0}var Pe=new Set,We={};function Be(n,i){nt(n,i),nt(n+"Capture",i)}function nt(n,i){for(We[n]=i,n=0;n<i.length;n++)Pe.add(i[n])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},St={};function kt(n){return ke.call(St,n)?!0:ke.call(it,n)?!1:ut.test(n)?St[n]=!0:(it[n]=!0,!1)}function sn(n,i,s){if(kt(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function Xt(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Et(n,i,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+c)}}function qe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ln(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ot(n,i,s){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(M){s=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Bn(n){if(!n._valueTracker){var i=ln(n)?"checked":"value";n._valueTracker=Ot(n,i,""+n[i])}}function ma(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return n&&(c=ln(n)?n.checked?"true":"false":n.value),n=c,n!==s?(i.setValue(n),!0):!1}function Un(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Us=/[\n"\\]/g;function Ct(n){return n.replace(Us,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Wn(n,i,s,c,p,m,M,C){n.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.type=M:n.removeAttribute("type"),i!=null?M==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+qe(i)):n.value!==""+qe(i)&&(n.value=""+qe(i)):M!=="submit"&&M!=="reset"||n.removeAttribute("value"),i!=null?Cn(n,M,qe(i)):s!=null?Cn(n,M,qe(s)):c!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+qe(C):n.removeAttribute("name")}function Qn(n,i,s,c,p,m,M,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Bn(n);return}s=s!=null?""+qe(s):"",i=i!=null?""+qe(i):s,C||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(n.name=M),Bn(n)}function Cn(n,i,s){i==="number"&&Un(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function xn(n,i,s,c){if(n=n.options,i){i={};for(var p=0;p<s.length;p++)i["$"+s[p]]=!0;for(s=0;s<n.length;s++)p=i.hasOwnProperty("$"+n[s].value),n[s].selected!==p&&(n[s].selected=p),p&&c&&(n[s].defaultSelected=!0)}else{for(s=""+qe(s),i=null,p=0;p<n.length;p++){if(n[p].value===s){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function ur(n,i,s){if(i!=null&&(i=""+qe(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+qe(s):""}function ta(n,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(a(92));if(re(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=qe(i),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c),Bn(n)}function fr(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Jy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wm(n,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,s):typeof s!="number"||s===0||Jy.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function Rm(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&s[p]!==c&&wm(n,p,c)}else for(var m in i)i.hasOwnProperty(m)&&wm(n,m,i[m])}function lf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $y=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(n){return eS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function ga(){}var cf=null;function uf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hr=null,dr=null;function Cm(n){var i=oe(n);if(i&&(n=i.stateNode)){var s=n[_n]||null;e:switch(n=i.stateNode,i.type){case"input":if(Wn(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ct(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==n&&c.form===n.form){var p=c[_n]||null;if(!p)throw Error(a(90));Wn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===n.form&&ma(c)}break e;case"textarea":ur(n,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&xn(n,!!s.multiple,i,!1)}}}var ff=!1;function Dm(n,i,s){if(ff)return n(i,s);ff=!0;try{var c=n(i);return c}finally{if(ff=!1,(hr!==null||dr!==null)&&(Fc(),hr&&(i=hr,n=dr,dr=hr=null,Cm(i),n)))for(i=0;i<n.length;i++)Cm(n[i])}}function No(n,i){var s=n.stateNode;if(s===null)return null;var c=s[_n]||null;if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=!1;if(_a)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){hf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{hf=!1}var Ya=null,df=null,$l=null;function Lm(){if($l)return $l;var n,i=df,s=i.length,c,p="value"in Ya?Ya.value:Ya.textContent,m=p.length;for(n=0;n<s&&i[n]===p[n];n++);var M=s-n;for(c=1;c<=M&&i[s-c]===p[m-c];c++);return $l=p.slice(n,1<c?1-c:void 0)}function ec(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function tc(){return!0}function Nm(){return!1}function ri(n){function i(s,c,p,m,M){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(s=n[C],this[C]=s?s(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?tc:Nm,this.isPropagationStopped=Nm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),i}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=ri(Os),Oo=g({},Os,{view:0,detail:0}),tS=ri(Oo),pf,mf,Io,ic=g({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Io&&(Io&&n.type==="mousemove"?(pf=n.screenX-Io.screenX,mf=n.screenY-Io.screenY):mf=pf=0,Io=n),pf)},movementY:function(n){return"movementY"in n?n.movementY:mf}}),Um=ri(ic),nS=g({},ic,{dataTransfer:0}),iS=ri(nS),aS=g({},Oo,{relatedTarget:0}),gf=ri(aS),sS=g({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=ri(sS),oS=g({},Os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lS=ri(oS),cS=g({},Os,{data:0}),Om=ri(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hS[n])?!!i[n]:!1}function _f(){return dS}var pS=g({},Oo,{key:function(n){if(n.key){var i=uS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ec(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(n){return n.type==="keypress"?ec(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ec(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mS=ri(pS),gS=g({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=ri(gS),_S=g({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),vS=ri(_S),xS=g({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=ri(xS),SS=g({},ic,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=ri(SS),ES=g({},Os,{newState:0,oldState:0}),TS=ri(ES),bS=[9,13,27,32],vf=_a&&"CompositionEvent"in window,Po=null;_a&&"documentMode"in document&&(Po=document.documentMode);var AS=_a&&"TextEvent"in window&&!Po,Pm=_a&&(!vf||Po&&8<Po&&11>=Po),zm=" ",Bm=!1;function Fm(n,i){switch(n){case"keyup":return bS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var pr=!1;function wS(n,i){switch(n){case"compositionend":return Hm(i);case"keypress":return i.which!==32?null:(Bm=!0,zm);case"textInput":return n=i.data,n===zm&&Bm?null:n;default:return null}}function RS(n,i){if(pr)return n==="compositionend"||!vf&&Fm(n,i)?(n=Lm(),$l=df=Ya=null,pr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pm&&i.locale!=="ko"?null:i.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!CS[n.type]:i==="textarea"}function Gm(n,i,s,c){hr?dr?dr.push(c):dr=[c]:hr=c,i=Wc(i,"onChange"),0<i.length&&(s=new nc("onChange","change",null,s,c),n.push({event:s,listeners:i}))}var zo=null,Bo=null;function DS(n){T_(n,0)}function ac(n){var i=le(n);if(ma(i))return n}function km(n,i){if(n==="change")return i}var Xm=!1;if(_a){var xf;if(_a){var yf="oninput"in document;if(!yf){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),yf=typeof jm.oninput=="function"}xf=yf}else xf=!1;Xm=xf&&(!document.documentMode||9<document.documentMode)}function Wm(){zo&&(zo.detachEvent("onpropertychange",qm),Bo=zo=null)}function qm(n){if(n.propertyName==="value"&&ac(Bo)){var i=[];Gm(i,Bo,n,uf(n)),Dm(DS,i)}}function LS(n,i,s){n==="focusin"?(Wm(),zo=i,Bo=s,zo.attachEvent("onpropertychange",qm)):n==="focusout"&&Wm()}function NS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ac(Bo)}function US(n,i){if(n==="click")return ac(i)}function OS(n,i){if(n==="input"||n==="change")return ac(i)}function IS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var pi=typeof Object.is=="function"?Object.is:IS;function Fo(n,i){if(pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!ke.call(i,p)||!pi(n[p],i[p]))return!1}return!0}function Ym(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Km(n,i){var s=Ym(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=i&&c>=i)return{node:s,offset:i-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ym(s)}}function Zm(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Zm(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qm(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Un(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Un(n.document)}return i}function Sf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var PS=_a&&"documentMode"in document&&11>=document.documentMode,mr=null,Mf=null,Ho=null,Ef=!1;function Jm(n,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ef||mr==null||mr!==Un(c)||(c=mr,"selectionStart"in c&&Sf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ho&&Fo(Ho,c)||(Ho=c,c=Wc(Mf,"onSelect"),0<c.length&&(i=new nc("onSelect","select",null,i,s),n.push({event:i,listeners:c}),i.target=mr)))}function Is(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var gr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},Tf={},$m={};_a&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Ps(n){if(Tf[n])return Tf[n];if(!gr[n])return n;var i=gr[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in $m)return Tf[n]=i[s];return n}var eg=Ps("animationend"),tg=Ps("animationiteration"),ng=Ps("animationstart"),zS=Ps("transitionrun"),BS=Ps("transitionstart"),FS=Ps("transitioncancel"),ig=Ps("transitionend"),ag=new Map,bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bf.push("scrollEnd");function Vi(n,i){ag.set(n,i),Be(i,[n])}var sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Ti=[],_r=0,Af=0;function rc(){for(var n=_r,i=Af=_r=0;i<n;){var s=Ti[i];Ti[i++]=null;var c=Ti[i];Ti[i++]=null;var p=Ti[i];Ti[i++]=null;var m=Ti[i];if(Ti[i++]=null,c!==null&&p!==null){var M=c.pending;M===null?p.next=p:(p.next=M.next,M.next=p),c.pending=p}m!==0&&sg(s,p,m)}}function oc(n,i,s,c){Ti[_r++]=n,Ti[_r++]=i,Ti[_r++]=s,Ti[_r++]=c,Af|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function wf(n,i,s,c){return oc(n,i,s,c),lc(n)}function zs(n,i){return oc(n,null,null,i),lc(n)}function sg(n,i,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var p=!1,m=n.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&i!==null&&(p=31-ze(s),n=m.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=s|536870912),m):null}function lc(n){if(50<ll)throw ll=0,Ph=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var vr={};function HS(n,i,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,i,s,c){return new HS(n,i,s,c)}function Rf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function va(n,i){var s=n.alternate;return s===null?(s=mi(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function rg(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function cc(n,i,s,c,p,m){var M=0;if(c=n,typeof n=="function")Rf(n)&&(M=1);else if(typeof n=="string")M=jM(n,s,ve.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case b:return n=mi(31,s,i,p),n.elementType=b,n.lanes=m,n;case T:return Bs(s.children,p,m,i);case S:M=8,p|=24;break;case x:return n=mi(12,s,i,p|2),n.elementType=x,n.lanes=m,n;case O:return n=mi(13,s,i,p),n.elementType=O,n.lanes=m,n;case I:return n=mi(19,s,i,p),n.elementType=I,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:M=10;break e;case D:M=9;break e;case R:M=11;break e;case U:M=14;break e;case G:M=16,c=null;break e}M=29,s=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=mi(M,s,i,p),i.elementType=n,i.type=c,i.lanes=m,i}function Bs(n,i,s,c){return n=mi(7,n,c,i),n.lanes=s,n}function Cf(n,i,s){return n=mi(6,n,null,i),n.lanes=s,n}function og(n){var i=mi(18,null,null,0);return i.stateNode=n,i}function Df(n,i,s){return i=mi(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var lg=new WeakMap;function bi(n,i){if(typeof n=="object"&&n!==null){var s=lg.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Qt(i)},lg.set(n,i),i)}return{value:n,source:i,stack:Qt(i)}}var xr=[],yr=0,uc=null,Vo=0,Ai=[],wi=0,Ka=null,na=1,ia="";function xa(n,i){xr[yr++]=Vo,xr[yr++]=uc,uc=n,Vo=i}function cg(n,i,s){Ai[wi++]=na,Ai[wi++]=ia,Ai[wi++]=Ka,Ka=n;var c=na;n=ia;var p=32-ze(c)-1;c&=~(1<<p),s+=1;var m=32-ze(i)+p;if(30<m){var M=p-p%5;m=(c&(1<<M)-1).toString(32),c>>=M,p-=M,na=1<<32-ze(i)+p|s<<p|c,ia=m+n}else na=1<<m|s<<p|c,ia=n}function Lf(n){n.return!==null&&(xa(n,1),cg(n,1,0))}function Nf(n){for(;n===uc;)uc=xr[--yr],xr[yr]=null,Vo=xr[--yr],xr[yr]=null;for(;n===Ka;)Ka=Ai[--wi],Ai[wi]=null,ia=Ai[--wi],Ai[wi]=null,na=Ai[--wi],Ai[wi]=null}function ug(n,i){Ai[wi++]=na,Ai[wi++]=ia,Ai[wi++]=Ka,na=i.id,ia=i.overflow,Ka=n}var Fn=null,cn=null,Nt=!1,Za=null,Ri=!1,Uf=Error(a(519));function Qa(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(bi(i,n)),Uf}function fg(n){var i=n.stateNode,s=n.type,c=n.memoizedProps;switch(i[dn]=n,i[_n]=c,s){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(s=0;s<ul.length;s++)bt(ul[s],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":bt("invalid",i),Qn(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":bt("invalid",i);break;case"textarea":bt("invalid",i),ta(i,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||R_(i.textContent,s)?(c.popover!=null&&(bt("beforetoggle",i),bt("toggle",i)),c.onScroll!=null&&bt("scroll",i),c.onScrollEnd!=null&&bt("scrollend",i),c.onClick!=null&&(i.onclick=ga),i=!0):i=!1,i||Qa(n,!0)}function hg(n){for(Fn=n.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Fn=Fn.return}}function Sr(n){if(n!==Fn)return!1;if(!Nt)return hg(n),Nt=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Qh(n.type,n.memoizedProps)),s=!s),s&&cn&&Qa(n),hg(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));cn=z_(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));cn=z_(n)}else i===27?(i=cn,fs(n.type)?(n=nd,nd=null,cn=n):cn=i):cn=Fn?Di(n.stateNode.nextSibling):null;return!0}function Fs(){cn=Fn=null,Nt=!1}function Of(){var n=Za;return n!==null&&(ui===null?ui=n:ui.push.apply(ui,n),Za=null),n}function Go(n){Za===null?Za=[n]:Za.push(n)}var If=z(null),Hs=null,ya=null;function Ja(n,i,s){ye(If,i._currentValue),i._currentValue=s}function Sa(n){n._currentValue=If.current,$(If)}function Pf(n,i,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===s)break;n=n.return}}function zf(n,i,s,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var M=p.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=p;for(var k=0;k<i.length;k++)if(C.context===i[k]){m.lanes|=s,C=m.alternate,C!==null&&(C.lanes|=s),Pf(m.return,s,n),c||(M=null);break e}m=C.next}}else if(p.tag===18){if(M=p.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Pf(M,s,n),M=null}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===n){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}}function Mr(n,i,s,c){n=null;for(var p=i,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var M=p.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var C=p.type;pi(p.pendingProps.value,M.value)||(n!==null?n.push(C):n=[C])}}else if(p===fe.current){if(M=p.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(ml):n=[ml])}p=p.return}n!==null&&zf(i,n,s,c),i.flags|=262144}function fc(n){for(n=n.firstContext;n!==null;){if(!pi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Vs(n){Hs=n,ya=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Hn(n){return dg(Hs,n)}function hc(n,i){return Hs===null&&Vs(n),dg(n,i)}function dg(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ya===null){if(n===null)throw Error(a(308));ya=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ya=ya.next=i;return s}var VS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},GS=o.unstable_scheduleCallback,kS=o.unstable_NormalPriority,Mn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new VS,data:new Map,refCount:0}}function ko(n){n.refCount--,n.refCount===0&&GS(kS,function(){n.controller.abort()})}var Xo=null,Ff=0,Er=0,Tr=null;function XS(n,i){if(Xo===null){var s=Xo=[];Ff=0,Er=Gh(),Tr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Ff++,i.then(pg,pg),i}function pg(){if(--Ff===0&&Xo!==null){Tr!==null&&(Tr.status="fulfilled");var n=Xo;Xo=null,Er=0,Tr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function jS(n,i){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<s.length;p++)(0,s[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var mg=B.S;B.S=function(n,i){J0=w(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&XS(n,i),mg!==null&&mg(n,i)};var Gs=z(null);function Hf(){var n=Gs.current;return n!==null?n:rn.pooledCache}function dc(n,i){i===null?ye(Gs,Gs.current):ye(Gs,i.pool)}function gg(){var n=Hf();return n===null?null:{parent:Mn._currentValue,pool:n}}var br=Error(a(460)),Vf=Error(a(474)),pc=Error(a(542)),mc={then:function(){}};function _g(n){return n=n.status,n==="fulfilled"||n==="rejected"}function vg(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(ga,ga),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,yg(n),n;default:if(typeof i.status=="string")i.then(ga,ga);else{if(n=rn,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,yg(n),n}throw Xs=i,br}}function ks(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Xs=s,br):s}}var Xs=null;function xg(){if(Xs===null)throw Error(a(459));var n=Xs;return Xs=null,n}function yg(n){if(n===br||n===pc)throw Error(a(483))}var Ar=null,jo=0;function gc(n){var i=jo;return jo+=1,Ar===null&&(Ar=[]),vg(Ar,n,i)}function Wo(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function _c(n,i){throw i.$$typeof===v?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Sg(n){function i(Q,j){if(n){var ne=Q.deletions;ne===null?(Q.deletions=[j],Q.flags|=16):ne.push(j)}}function s(Q,j){if(!n)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function c(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function p(Q,j){return Q=va(Q,j),Q.index=0,Q.sibling=null,Q}function m(Q,j,ne){return Q.index=ne,n?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<j?(Q.flags|=67108866,j):ne):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function M(Q){return n&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,j,ne,ge){return j===null||j.tag!==6?(j=Cf(ne,Q.mode,ge),j.return=Q,j):(j=p(j,ne),j.return=Q,j)}function k(Q,j,ne,ge){var st=ne.type;return st===T?me(Q,j,ne.props.children,ge,ne.key):j!==null&&(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===G&&ks(st)===j.type)?(j=p(j,ne.props),Wo(j,ne),j.return=Q,j):(j=cc(ne.type,ne.key,ne.props,null,Q.mode,ge),Wo(j,ne),j.return=Q,j)}function ie(Q,j,ne,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==ne.containerInfo||j.stateNode.implementation!==ne.implementation?(j=Df(ne,Q.mode,ge),j.return=Q,j):(j=p(j,ne.children||[]),j.return=Q,j)}function me(Q,j,ne,ge,st){return j===null||j.tag!==7?(j=Bs(ne,Q.mode,ge,st),j.return=Q,j):(j=p(j,ne),j.return=Q,j)}function xe(Q,j,ne){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Cf(""+j,Q.mode,ne),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ne=cc(j.type,j.key,j.props,null,Q.mode,ne),Wo(ne,j),ne.return=Q,ne;case E:return j=Df(j,Q.mode,ne),j.return=Q,j;case G:return j=ks(j),xe(Q,j,ne)}if(re(j)||W(j))return j=Bs(j,Q.mode,ne,null),j.return=Q,j;if(typeof j.then=="function")return xe(Q,gc(j),ne);if(j.$$typeof===N)return xe(Q,hc(Q,j),ne);_c(Q,j)}return null}function se(Q,j,ne,ge){var st=j!==null?j.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return st!==null?null:C(Q,j,""+ne,ge);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===st?k(Q,j,ne,ge):null;case E:return ne.key===st?ie(Q,j,ne,ge):null;case G:return ne=ks(ne),se(Q,j,ne,ge)}if(re(ne)||W(ne))return st!==null?null:me(Q,j,ne,ge,null);if(typeof ne.then=="function")return se(Q,j,gc(ne),ge);if(ne.$$typeof===N)return se(Q,j,hc(Q,ne),ge);_c(Q,ne)}return null}function ce(Q,j,ne,ge,st){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Q=Q.get(ne)||null,C(j,Q,""+ge,st);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Q=Q.get(ge.key===null?ne:ge.key)||null,k(j,Q,ge,st);case E:return Q=Q.get(ge.key===null?ne:ge.key)||null,ie(j,Q,ge,st);case G:return ge=ks(ge),ce(Q,j,ne,ge,st)}if(re(ge)||W(ge))return Q=Q.get(ne)||null,me(j,Q,ge,st,null);if(typeof ge.then=="function")return ce(Q,j,ne,gc(ge),st);if(ge.$$typeof===N)return ce(Q,j,ne,hc(j,ge),st);_c(j,ge)}return null}function Xe(Q,j,ne,ge){for(var st=null,zt=null,$e=j,_t=j=0,Lt=null;$e!==null&&_t<ne.length;_t++){$e.index>_t?(Lt=$e,$e=null):Lt=$e.sibling;var Bt=se(Q,$e,ne[_t],ge);if(Bt===null){$e===null&&($e=Lt);break}n&&$e&&Bt.alternate===null&&i(Q,$e),j=m(Bt,j,_t),zt===null?st=Bt:zt.sibling=Bt,zt=Bt,$e=Lt}if(_t===ne.length)return s(Q,$e),Nt&&xa(Q,_t),st;if($e===null){for(;_t<ne.length;_t++)$e=xe(Q,ne[_t],ge),$e!==null&&(j=m($e,j,_t),zt===null?st=$e:zt.sibling=$e,zt=$e);return Nt&&xa(Q,_t),st}for($e=c($e);_t<ne.length;_t++)Lt=ce($e,Q,_t,ne[_t],ge),Lt!==null&&(n&&Lt.alternate!==null&&$e.delete(Lt.key===null?_t:Lt.key),j=m(Lt,j,_t),zt===null?st=Lt:zt.sibling=Lt,zt=Lt);return n&&$e.forEach(function(gs){return i(Q,gs)}),Nt&&xa(Q,_t),st}function lt(Q,j,ne,ge){if(ne==null)throw Error(a(151));for(var st=null,zt=null,$e=j,_t=j=0,Lt=null,Bt=ne.next();$e!==null&&!Bt.done;_t++,Bt=ne.next()){$e.index>_t?(Lt=$e,$e=null):Lt=$e.sibling;var gs=se(Q,$e,Bt.value,ge);if(gs===null){$e===null&&($e=Lt);break}n&&$e&&gs.alternate===null&&i(Q,$e),j=m(gs,j,_t),zt===null?st=gs:zt.sibling=gs,zt=gs,$e=Lt}if(Bt.done)return s(Q,$e),Nt&&xa(Q,_t),st;if($e===null){for(;!Bt.done;_t++,Bt=ne.next())Bt=xe(Q,Bt.value,ge),Bt!==null&&(j=m(Bt,j,_t),zt===null?st=Bt:zt.sibling=Bt,zt=Bt);return Nt&&xa(Q,_t),st}for($e=c($e);!Bt.done;_t++,Bt=ne.next())Bt=ce($e,Q,_t,Bt.value,ge),Bt!==null&&(n&&Bt.alternate!==null&&$e.delete(Bt.key===null?_t:Bt.key),j=m(Bt,j,_t),zt===null?st=Bt:zt.sibling=Bt,zt=Bt);return n&&$e.forEach(function(n1){return i(Q,n1)}),Nt&&xa(Q,_t),st}function en(Q,j,ne,ge){if(typeof ne=="object"&&ne!==null&&ne.type===T&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var st=ne.key;j!==null;){if(j.key===st){if(st=ne.type,st===T){if(j.tag===7){s(Q,j.sibling),ge=p(j,ne.props.children),ge.return=Q,Q=ge;break e}}else if(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===G&&ks(st)===j.type){s(Q,j.sibling),ge=p(j,ne.props),Wo(ge,ne),ge.return=Q,Q=ge;break e}s(Q,j);break}else i(Q,j);j=j.sibling}ne.type===T?(ge=Bs(ne.props.children,Q.mode,ge,ne.key),ge.return=Q,Q=ge):(ge=cc(ne.type,ne.key,ne.props,null,Q.mode,ge),Wo(ge,ne),ge.return=Q,Q=ge)}return M(Q);case E:e:{for(st=ne.key;j!==null;){if(j.key===st)if(j.tag===4&&j.stateNode.containerInfo===ne.containerInfo&&j.stateNode.implementation===ne.implementation){s(Q,j.sibling),ge=p(j,ne.children||[]),ge.return=Q,Q=ge;break e}else{s(Q,j);break}else i(Q,j);j=j.sibling}ge=Df(ne,Q.mode,ge),ge.return=Q,Q=ge}return M(Q);case G:return ne=ks(ne),en(Q,j,ne,ge)}if(re(ne))return Xe(Q,j,ne,ge);if(W(ne)){if(st=W(ne),typeof st!="function")throw Error(a(150));return ne=st.call(ne),lt(Q,j,ne,ge)}if(typeof ne.then=="function")return en(Q,j,gc(ne),ge);if(ne.$$typeof===N)return en(Q,j,hc(Q,ne),ge);_c(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,j!==null&&j.tag===6?(s(Q,j.sibling),ge=p(j,ne),ge.return=Q,Q=ge):(s(Q,j),ge=Cf(ne,Q.mode,ge),ge.return=Q,Q=ge),M(Q)):s(Q,j)}return function(Q,j,ne,ge){try{jo=0;var st=en(Q,j,ne,ge);return Ar=null,st}catch($e){if($e===br||$e===pc)throw $e;var zt=mi(29,$e,null,Q.mode);return zt.lanes=ge,zt.return=Q,zt}finally{}}}var js=Sg(!0),Mg=Sg(!1),$a=!1;function Gf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function es(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ts(n,i,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Gt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=lc(n),sg(n,null,s),i}return oc(n,c,i,s),lc(n)}function qo(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,It(n,s)}}function Xf(n,i){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?p=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?p=m=i:m=m.next=i}else p=m=i;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var jf=!1;function Yo(){if(jf){var n=Tr;if(n!==null)throw n}}function Ko(n,i,s,c){jf=!1;var p=n.updateQueue;$a=!1;var m=p.firstBaseUpdate,M=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var k=C,ie=k.next;k.next=null,M===null?m=ie:M.next=ie,M=k;var me=n.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==M&&(C===null?me.firstBaseUpdate=ie:C.next=ie,me.lastBaseUpdate=k))}if(m!==null){var xe=p.baseState;M=0,me=ie=k=null,C=m;do{var se=C.lane&-536870913,ce=se!==C.lane;if(ce?(Dt&se)===se:(c&se)===se){se!==0&&se===Er&&(jf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Xe=n,lt=C;se=i;var en=s;switch(lt.tag){case 1:if(Xe=lt.payload,typeof Xe=="function"){xe=Xe.call(en,xe,se);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=lt.payload,se=typeof Xe=="function"?Xe.call(en,xe,se):Xe,se==null)break e;xe=g({},xe,se);break e;case 2:$a=!0}}se=C.callback,se!==null&&(n.flags|=64,ce&&(n.flags|=8192),ce=p.callbacks,ce===null?p.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ie=me=ce,k=xe):me=me.next=ce,M|=se;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,p.lastBaseUpdate=ce,p.shared.pending=null}}while(!0);me===null&&(k=xe),p.baseState=k,p.firstBaseUpdate=ie,p.lastBaseUpdate=me,m===null&&(p.shared.lanes=0),rs|=M,n.lanes=M,n.memoizedState=xe}}function Eg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function Tg(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Eg(s[n],i)}var wr=z(null),vc=z(0);function bg(n,i){n=Da,ye(vc,n),ye(wr,i),Da=n|i.baseLanes}function Wf(){ye(vc,Da),ye(wr,wr.current)}function qf(){Da=vc.current,$(wr),$(vc)}var gi=z(null),Ci=null;function ns(n){var i=n.alternate;ye(yn,yn.current&1),ye(gi,n),Ci===null&&(i===null||wr.current!==null||i.memoizedState!==null)&&(Ci=n)}function Yf(n){ye(yn,yn.current),ye(gi,n),Ci===null&&(Ci=n)}function Ag(n){n.tag===22?(ye(yn,yn.current),ye(gi,n),Ci===null&&(Ci=n)):is()}function is(){ye(yn,yn.current),ye(gi,gi.current)}function _i(n){$(gi),Ci===n&&(Ci=null),$(yn)}var yn=z(0);function xc(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ed(s)||td(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ma=0,gt=null,Jt=null,En=null,yc=!1,Rr=!1,Ws=!1,Sc=0,Zo=0,Cr=null,WS=0;function pn(){throw Error(a(321))}function Kf(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!pi(n[s],i[s]))return!1;return!0}function Zf(n,i,s,c,p,m){return Ma=m,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=n===null||n.memoizedState===null?c0:fh,Ws=!1,m=s(c,p),Ws=!1,Rr&&(m=Rg(i,s,c,p)),wg(n),m}function wg(n){B.H=$o;var i=Jt!==null&&Jt.next!==null;if(Ma=0,En=Jt=gt=null,yc=!1,Zo=0,Cr=null,i)throw Error(a(300));n===null||Tn||(n=n.dependencies,n!==null&&fc(n)&&(Tn=!0))}function Rg(n,i,s,c){gt=n;var p=0;do{if(Rr&&(Cr=null),Zo=0,Rr=!1,25<=p)throw Error(a(301));if(p+=1,En=Jt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=u0,m=i(s,c)}while(Rr);return m}function qS(){var n=B.H,i=n.useState()[0];return i=typeof i.then=="function"?Qo(i):i,n=n.useState()[0],(Jt!==null?Jt.memoizedState:null)!==n&&(gt.flags|=1024),i}function Qf(){var n=Sc!==0;return Sc=0,n}function Jf(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function $f(n){if(yc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}yc=!1}Ma=0,En=Jt=gt=null,Rr=!1,Zo=Sc=0,Cr=null}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?gt.memoizedState=En=n:En=En.next=n,En}function Sn(){if(Jt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=En===null?gt.memoizedState:En.next;if(i!==null)En=i,Jt=n;else{if(n===null)throw gt.alternate===null?Error(a(467)):Error(a(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},En===null?gt.memoizedState=En=n:En=En.next=n}return En}function Mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(n){var i=Zo;return Zo+=1,Cr===null&&(Cr=[]),n=vg(Cr,n,i),i=gt,(En===null?i.memoizedState:En.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?c0:fh),n}function Ec(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Qo(n);if(n.$$typeof===N)return Hn(n)}throw Error(a(438,String(n)))}function eh(n){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=gt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Mc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),c=0;c<n;c++)s[c]=A;return i.index++,s}function Ea(n,i){return typeof i=="function"?i(n):i}function Tc(n){var i=Sn();return th(i,Jt,n)}function th(n,i,s){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var p=n.baseQueue,m=c.pending;if(m!==null){if(p!==null){var M=p.next;p.next=m.next,m.next=M}i.baseQueue=p=m,c.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{i=p.next;var C=M=null,k=null,ie=i,me=!1;do{var xe=ie.lane&-536870913;if(xe!==ie.lane?(Dt&xe)===xe:(Ma&xe)===xe){var se=ie.revertLane;if(se===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),xe===Er&&(me=!0);else if((Ma&se)===se){ie=ie.next,se===Er&&(me=!0);continue}else xe={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},k===null?(C=k=xe,M=m):k=k.next=xe,gt.lanes|=se,rs|=se;xe=ie.action,Ws&&s(m,xe),m=ie.hasEagerState?ie.eagerState:s(m,xe)}else se={lane:xe,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},k===null?(C=k=se,M=m):k=k.next=se,gt.lanes|=xe,rs|=xe;ie=ie.next}while(ie!==null&&ie!==i);if(k===null?M=m:k.next=C,!pi(m,n.memoizedState)&&(Tn=!0,me&&(s=Tr,s!==null)))throw s;n.memoizedState=m,n.baseState=M,n.baseQueue=k,c.lastRenderedState=m}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function nh(n){var i=Sn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var c=s.dispatch,p=s.pending,m=i.memoizedState;if(p!==null){s.pending=null;var M=p=p.next;do m=n(m,M.action),M=M.next;while(M!==p);pi(m,i.memoizedState)||(Tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,c]}function Cg(n,i,s){var c=gt,p=Sn(),m=Nt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!pi((Jt||p).memoizedState,s);if(M&&(p.memoizedState=s,Tn=!0),p=p.queue,sh(Ng.bind(null,c,p,n),[n]),p.getSnapshot!==i||M||En!==null&&En.memoizedState.tag&1){if(c.flags|=2048,Dr(9,{destroy:void 0},Lg.bind(null,c,p,s,i),null),rn===null)throw Error(a(349));m||(Ma&127)!==0||Dg(c,i,s)}return s}function Dg(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=Mc(),gt.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Lg(n,i,s,c){i.value=s,i.getSnapshot=c,Ug(i)&&Og(n)}function Ng(n,i,s){return s(function(){Ug(i)&&Og(n)})}function Ug(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!pi(n,s)}catch{return!0}}function Og(n){var i=zs(n,2);i!==null&&fi(i,n,2)}function ih(n){var i=Jn();if(typeof n=="function"){var s=n;if(n=s(),Ws){et(!0);try{s()}finally{et(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i}function Ig(n,i,s,c){return n.baseState=s,th(n,Jt,typeof c=="function"?c:Ea)}function YS(n,i,s,c,p){if(wc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};B.T!==null?s(!0):m.isTransition=!1,c(m),s=i.pending,s===null?(m.next=i.pending=m,Pg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Pg(n,i){var s=i.action,c=i.payload,p=n.state;if(i.isTransition){var m=B.T,M={};B.T=M;try{var C=s(p,c),k=B.S;k!==null&&k(M,C),zg(n,i,C)}catch(ie){ah(n,i,ie)}finally{m!==null&&M.types!==null&&(m.types=M.types),B.T=m}}else try{m=s(p,c),zg(n,i,m)}catch(ie){ah(n,i,ie)}}function zg(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Bg(n,i,c)},function(c){return ah(n,i,c)}):Bg(n,i,s)}function Bg(n,i,s){i.status="fulfilled",i.value=s,Fg(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,Pg(n,s)))}function ah(n,i,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,Fg(i),i=i.next;while(i!==c)}n.action=null}function Fg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Hg(n,i){return i}function Vg(n,i){if(Nt){var s=rn.formState;if(s!==null){e:{var c=gt;if(Nt){if(cn){t:{for(var p=cn,m=Ri;p.nodeType!==8;){if(!m){p=null;break t}if(p=Di(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){cn=Di(p.nextSibling),c=p.data==="F!";break e}}Qa(c)}c=!1}c&&(i=s[0])}}return s=Jn(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hg,lastRenderedState:i},s.queue=c,s=r0.bind(null,gt,c),c.dispatch=s,c=ih(!1),m=uh.bind(null,gt,!1,c.queue),c=Jn(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,s=YS.bind(null,gt,p,m,s),p.dispatch=s,c.memoizedState=n,[i,s,!1]}function Gg(n){var i=Sn();return kg(i,Jt,n)}function kg(n,i,s){if(i=th(n,i,Hg)[0],n=Tc(Ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Qo(i)}catch(M){throw M===br?pc:M}else c=i;i=Sn();var p=i.queue,m=p.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Dr(9,{destroy:void 0},KS.bind(null,p,s),null)),[c,m,n]}function KS(n,i){n.action=i}function Xg(n){var i=Sn(),s=Jt;if(s!==null)return kg(i,s,n);Sn(),i=i.memoizedState,s=Sn();var c=s.queue.dispatch;return s.memoizedState=n,[i,c,!1]}function Dr(n,i,s,c){return n={tag:n,create:s,deps:c,inst:i,next:null},i=gt.updateQueue,i===null&&(i=Mc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,i.lastEffect=n),n}function jg(){return Sn().memoizedState}function bc(n,i,s,c){var p=Jn();gt.flags|=n,p.memoizedState=Dr(1|i,{destroy:void 0},s,c===void 0?null:c)}function Ac(n,i,s,c){var p=Sn();c=c===void 0?null:c;var m=p.memoizedState.inst;Jt!==null&&c!==null&&Kf(c,Jt.memoizedState.deps)?p.memoizedState=Dr(i,m,s,c):(gt.flags|=n,p.memoizedState=Dr(1|i,m,s,c))}function Wg(n,i){bc(8390656,8,n,i)}function sh(n,i){Ac(2048,8,n,i)}function ZS(n){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=Mc(),gt.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function qg(n){var i=Sn().memoizedState;return ZS({ref:i,nextImpl:n}),function(){if((Gt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Yg(n,i){return Ac(4,2,n,i)}function Kg(n,i){return Ac(4,4,n,i)}function Zg(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qg(n,i,s){s=s!=null?s.concat([n]):null,Ac(4,4,Zg.bind(null,i,n),s)}function rh(){}function Jg(n,i){var s=Sn();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&Kf(i,c[1])?c[0]:(s.memoizedState=[n,i],n)}function $g(n,i){var s=Sn();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&Kf(i,c[1]))return c[0];if(c=n(),Ws){et(!0);try{n()}finally{et(!1)}}return s.memoizedState=[c,i],c}function oh(n,i,s){return s===void 0||(Ma&1073741824)!==0&&(Dt&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=e_(),gt.lanes|=n,rs|=n,s)}function e0(n,i,s,c){return pi(s,i)?s:wr.current!==null?(n=oh(n,s,c),pi(n,i)||(Tn=!0),n):(Ma&42)===0||(Ma&1073741824)!==0&&(Dt&261930)===0?(Tn=!0,n.memoizedState=s):(n=e_(),gt.lanes|=n,rs|=n,i)}function t0(n,i,s,c,p){var m=K.p;K.p=m!==0&&8>m?m:8;var M=B.T,C={};B.T=C,uh(n,!1,i,s);try{var k=p(),ie=B.S;if(ie!==null&&ie(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var me=jS(k,c);Jo(n,i,me,yi(n))}else Jo(n,i,c,yi(n))}catch(xe){Jo(n,i,{then:function(){},status:"rejected",reason:xe},yi())}finally{K.p=m,M!==null&&C.types!==null&&(M.types=C.types),B.T=M}}function QS(){}function lh(n,i,s,c){if(n.tag!==5)throw Error(a(476));var p=n0(n).queue;t0(n,p,i,Y,s===null?QS:function(){return i0(n),s(c)})}function n0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function i0(n){var i=n0(n);i.next===null&&(i=n.alternate.memoizedState),Jo(n,i.next.queue,{},yi())}function ch(){return Hn(ml)}function a0(){return Sn().memoizedState}function s0(){return Sn().memoizedState}function JS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=yi();n=es(s);var c=ts(i,n,s);c!==null&&(fi(c,i,s),qo(c,i,s)),i={cache:Bf()},n.payload=i;return}i=i.return}}function $S(n,i,s){var c=yi();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wc(n)?o0(i,s):(s=wf(n,i,s,c),s!==null&&(fi(s,n,c),l0(s,i,c)))}function r0(n,i,s){var c=yi();Jo(n,i,s,c)}function Jo(n,i,s,c){var p={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(wc(n))o0(i,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,C=m(M,s);if(p.hasEagerState=!0,p.eagerState=C,pi(C,M))return oc(n,i,p,0),rn===null&&rc(),!1}catch{}finally{}if(s=wf(n,i,p,c),s!==null)return fi(s,n,c),l0(s,i,c),!0}return!1}function uh(n,i,s,c){if(c={lane:2,revertLane:Gh(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},wc(n)){if(i)throw Error(a(479))}else i=wf(n,s,c,2),i!==null&&fi(i,n,2)}function wc(n){var i=n.alternate;return n===gt||i!==null&&i===gt}function o0(n,i){Rr=yc=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function l0(n,i,s){if((s&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,It(n,s)}}var $o={readContext:Hn,use:Ec,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};$o.useEffectEvent=pn;var c0={readContext:Hn,use:Ec,useCallback:function(n,i){return Jn().memoizedState=[n,i===void 0?null:i],n},useContext:Hn,useEffect:Wg,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,bc(4194308,4,Zg.bind(null,i,n),s)},useLayoutEffect:function(n,i){return bc(4194308,4,n,i)},useInsertionEffect:function(n,i){bc(4,2,n,i)},useMemo:function(n,i){var s=Jn();i=i===void 0?null:i;var c=n();if(Ws){et(!0);try{n()}finally{et(!1)}}return s.memoizedState=[c,i],c},useReducer:function(n,i,s){var c=Jn();if(s!==void 0){var p=s(i);if(Ws){et(!0);try{s(i)}finally{et(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=$S.bind(null,gt,n),[c.memoizedState,n]},useRef:function(n){var i=Jn();return n={current:n},i.memoizedState=n},useState:function(n){n=ih(n);var i=n.queue,s=r0.bind(null,gt,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:rh,useDeferredValue:function(n,i){var s=Jn();return oh(s,n,i)},useTransition:function(){var n=ih(!1);return n=t0.bind(null,gt,n.queue,!0,!1),Jn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var c=gt,p=Jn();if(Nt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),rn===null)throw Error(a(349));(Dt&127)!==0||Dg(c,i,s)}p.memoizedState=s;var m={value:s,getSnapshot:i};return p.queue=m,Wg(Ng.bind(null,c,m,n),[n]),c.flags|=2048,Dr(9,{destroy:void 0},Lg.bind(null,c,m,s,i),null),s},useId:function(){var n=Jn(),i=rn.identifierPrefix;if(Nt){var s=ia,c=na;s=(c&~(1<<32-ze(c)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Sc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=WS++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:ch,useFormState:Vg,useActionState:Vg,useOptimistic:function(n){var i=Jn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=uh.bind(null,gt,!0,s),s.dispatch=i,[n,i]},useMemoCache:eh,useCacheRefresh:function(){return Jn().memoizedState=JS.bind(null,gt)},useEffectEvent:function(n){var i=Jn(),s={impl:n};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},fh={readContext:Hn,use:Ec,useCallback:Jg,useContext:Hn,useEffect:sh,useImperativeHandle:Qg,useInsertionEffect:Yg,useLayoutEffect:Kg,useMemo:$g,useReducer:Tc,useRef:jg,useState:function(){return Tc(Ea)},useDebugValue:rh,useDeferredValue:function(n,i){var s=Sn();return e0(s,Jt.memoizedState,n,i)},useTransition:function(){var n=Tc(Ea)[0],i=Sn().memoizedState;return[typeof n=="boolean"?n:Qo(n),i]},useSyncExternalStore:Cg,useId:a0,useHostTransitionStatus:ch,useFormState:Gg,useActionState:Gg,useOptimistic:function(n,i){var s=Sn();return Ig(s,Jt,n,i)},useMemoCache:eh,useCacheRefresh:s0};fh.useEffectEvent=qg;var u0={readContext:Hn,use:Ec,useCallback:Jg,useContext:Hn,useEffect:sh,useImperativeHandle:Qg,useInsertionEffect:Yg,useLayoutEffect:Kg,useMemo:$g,useReducer:nh,useRef:jg,useState:function(){return nh(Ea)},useDebugValue:rh,useDeferredValue:function(n,i){var s=Sn();return Jt===null?oh(s,n,i):e0(s,Jt.memoizedState,n,i)},useTransition:function(){var n=nh(Ea)[0],i=Sn().memoizedState;return[typeof n=="boolean"?n:Qo(n),i]},useSyncExternalStore:Cg,useId:a0,useHostTransitionStatus:ch,useFormState:Xg,useActionState:Xg,useOptimistic:function(n,i){var s=Sn();return Jt!==null?Ig(s,Jt,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:eh,useCacheRefresh:s0};u0.useEffectEvent=qg;function hh(n,i,s,c){i=n.memoizedState,s=s(c,i),s=s==null?i:g({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var dh={enqueueSetState:function(n,i,s){n=n._reactInternals;var c=yi(),p=es(c);p.payload=i,s!=null&&(p.callback=s),i=ts(n,p,c),i!==null&&(fi(i,n,c),qo(i,n,c))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var c=yi(),p=es(c);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=ts(n,p,c),i!==null&&(fi(i,n,c),qo(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=yi(),c=es(s);c.tag=2,i!=null&&(c.callback=i),i=ts(n,c,s),i!==null&&(fi(i,n,s),qo(i,n,s))}};function f0(n,i,s,c,p,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!Fo(s,c)||!Fo(p,m):!0}function h0(n,i,s,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==n&&dh.enqueueReplaceState(i,i.state,null)}function qs(n,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(n=n.defaultProps){s===i&&(s=g({},s));for(var p in n)s[p]===void 0&&(s[p]=n[p])}return s}function d0(n){sc(n)}function p0(n){console.error(n)}function m0(n){sc(n)}function Rc(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function g0(n,i,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ph(n,i,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){Rc(n,i)},s}function _0(n){return n=es(n),n.tag=3,n}function v0(n,i,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var m=c.value;n.payload=function(){return p(m)},n.callback=function(){g0(i,s,c)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(n.callback=function(){g0(i,s,c),typeof p!="function"&&(os===null?os=new Set([this]):os.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function eM(n,i,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&Mr(i,s,p,!0),s=gi.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?Hc():s.alternate===null&&mn===0&&(mn=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),Fh(n,c,p)),!1;case 22:return s.flags|=65536,c===mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),Fh(n,c,p)),!1}throw Error(a(435,s.tag))}return Fh(n,c,p),Hc(),!1}if(Nt)return i=gi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==Uf&&(n=Error(a(422),{cause:c}),Go(bi(n,s)))):(c!==Uf&&(i=Error(a(423),{cause:c}),Go(bi(i,s))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=bi(c,s),p=ph(n.stateNode,c,p),Xf(n,p),mn!==4&&(mn=2)),!1;var m=Error(a(520),{cause:c});if(m=bi(m,s),ol===null?ol=[m]:ol.push(m),mn!==4&&(mn=2),i===null)return!0;c=bi(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=p&-p,s.lanes|=n,n=ph(s.stateNode,c,n),Xf(s,n),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(os===null||!os.has(m))))return s.flags|=65536,p&=-p,s.lanes|=p,p=_0(p),v0(p,n,s,c),Xf(s,p),!1}s=s.return}while(s!==null);return!1}var mh=Error(a(461)),Tn=!1;function Vn(n,i,s,c){i.child=n===null?Mg(i,null,s,c):js(i,n.child,s,c)}function x0(n,i,s,c,p){s=s.render;var m=i.ref;if("ref"in c){var M={};for(var C in c)C!=="ref"&&(M[C]=c[C])}else M=c;return Vs(i),c=Zf(n,i,s,M,m,p),C=Qf(),n!==null&&!Tn?(Jf(n,i,p),Ta(n,i,p)):(Nt&&C&&Lf(i),i.flags|=1,Vn(n,i,c,p),i.child)}function y0(n,i,s,c,p){if(n===null){var m=s.type;return typeof m=="function"&&!Rf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,S0(n,i,m,c,p)):(n=cc(s.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Eh(n,p)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:Fo,s(M,c)&&n.ref===i.ref)return Ta(n,i,p)}return i.flags|=1,n=va(m,c),n.ref=i.ref,n.return=i,i.child=n}function S0(n,i,s,c,p){if(n!==null){var m=n.memoizedProps;if(Fo(m,c)&&n.ref===i.ref)if(Tn=!1,i.pendingProps=c=m,Eh(n,p))(n.flags&131072)!==0&&(Tn=!0);else return i.lanes=n.lanes,Ta(n,i,p)}return gh(n,i,s,c,p)}function M0(n,i,s,c){var p=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,n!==null){for(c=i.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~m}else c=0,i.child=null;return E0(n,i,m,s,c)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&dc(i,m!==null?m.cachePool:null),m!==null?bg(i,m):Wf(),Ag(i);else return c=i.lanes=536870912,E0(n,i,m!==null?m.baseLanes|s:s,s,c)}else m!==null?(dc(i,m.cachePool),bg(i,m),is(),i.memoizedState=null):(n!==null&&dc(i,null),Wf(),is());return Vn(n,i,p,s),i.child}function el(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function E0(n,i,s,c,p){var m=Hf();return m=m===null?null:{parent:Mn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},n!==null&&dc(i,null),Wf(),Ag(i),n!==null&&Mr(n,i,c,!0),i.childLanes=p,null}function Cc(n,i){return i=Lc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function T0(n,i,s){return js(i,n.child,null,s),n=Cc(i,i.pendingProps),n.flags|=2,_i(i),i.memoizedState=null,n}function tM(n,i,s){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Nt){if(c.mode==="hidden")return n=Cc(i,c),i.lanes=536870912,el(null,n);if(Yf(i),(n=cn)?(n=P_(n,Ri),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Ka!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=og(n),s.return=i,i.child=s,Fn=i,cn=null)):n=null,n===null)throw Qa(i);return i.lanes=536870912,null}return Cc(i,c)}var m=n.memoizedState;if(m!==null){var M=m.dehydrated;if(Yf(i),p)if(i.flags&256)i.flags&=-257,i=T0(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(Tn||Mr(n,i,s,!1),p=(s&n.childLanes)!==0,Tn||p){if(c=rn,c!==null&&(M=si(c,s),M!==0&&M!==m.retryLane))throw m.retryLane=M,zs(n,M),fi(c,n,M),mh;Hc(),i=T0(n,i,s)}else n=m.treeContext,cn=Di(M.nextSibling),Fn=i,Nt=!0,Za=null,Ri=!1,n!==null&&ug(i,n),i=Cc(i,c),i.flags|=4096;return i}return n=va(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Dc(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function gh(n,i,s,c,p){return Vs(i),s=Zf(n,i,s,c,void 0,p),c=Qf(),n!==null&&!Tn?(Jf(n,i,p),Ta(n,i,p)):(Nt&&c&&Lf(i),i.flags|=1,Vn(n,i,s,p),i.child)}function b0(n,i,s,c,p,m){return Vs(i),i.updateQueue=null,s=Rg(i,c,s,p),wg(n),c=Qf(),n!==null&&!Tn?(Jf(n,i,m),Ta(n,i,m)):(Nt&&c&&Lf(i),i.flags|=1,Vn(n,i,s,m),i.child)}function A0(n,i,s,c,p){if(Vs(i),i.stateNode===null){var m=vr,M=s.contextType;typeof M=="object"&&M!==null&&(m=Hn(M)),m=new s(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=dh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},Gf(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?Hn(M):vr,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(hh(i,s,M,c),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&dh.enqueueReplaceState(m,m.state,null),Ko(i,c,m,p),Yo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var C=i.memoizedProps,k=qs(s,C);m.props=k;var ie=m.context,me=s.contextType;M=vr,typeof me=="object"&&me!==null&&(M=Hn(me));var xe=s.getDerivedStateFromProps;me=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||ie!==M)&&h0(i,m,c,M),$a=!1;var se=i.memoizedState;m.state=se,Ko(i,c,m,p),Yo(),ie=i.memoizedState,C||se!==ie||$a?(typeof xe=="function"&&(hh(i,s,xe,c),ie=i.memoizedState),(k=$a||f0(i,s,k,c,se,ie,M))?(me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=ie),m.props=c,m.state=ie,m.context=M,c=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,kf(n,i),M=i.memoizedProps,me=qs(s,M),m.props=me,xe=i.pendingProps,se=m.context,ie=s.contextType,k=vr,typeof ie=="object"&&ie!==null&&(k=Hn(ie)),C=s.getDerivedStateFromProps,(ie=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==xe||se!==k)&&h0(i,m,c,k),$a=!1,se=i.memoizedState,m.state=se,Ko(i,c,m,p),Yo();var ce=i.memoizedState;M!==xe||se!==ce||$a||n!==null&&n.dependencies!==null&&fc(n.dependencies)?(typeof C=="function"&&(hh(i,s,C,c),ce=i.memoizedState),(me=$a||f0(i,s,me,c,se,ce,k)||n!==null&&n.dependencies!==null&&fc(n.dependencies))?(ie||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,ce,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,ce,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===n.memoizedProps&&se===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ce),m.props=c,m.state=ce,m.context=k,c=me):(typeof m.componentDidUpdate!="function"||M===n.memoizedProps&&se===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&se===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,Dc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=js(i,n.child,null,p),i.child=js(i,null,s,p)):Vn(n,i,s,p),i.memoizedState=m.state,n=i.child):n=Ta(n,i,p),n}function w0(n,i,s,c){return Fs(),i.flags|=256,Vn(n,i,s,c),i.child}var _h={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(n){return{baseLanes:n,cachePool:gg()}}function xh(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=xi),n}function R0(n,i,s){var c=i.pendingProps,p=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),M&&(p=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,n===null){if(Nt){if(p?ns(i):is(),(n=cn)?(n=P_(n,Ri),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Ka!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=og(n),s.return=i,i.child=s,Fn=i,cn=null)):n=null,n===null)throw Qa(i);return td(n)?i.lanes=32:i.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(is(),p=i.mode,C=Lc({mode:"hidden",children:C},p),c=Bs(c,p,s,null),C.return=i,c.return=i,C.sibling=c,i.child=C,c=i.child,c.memoizedState=vh(s),c.childLanes=xh(n,M,s),i.memoizedState=_h,el(null,c)):(ns(i),yh(i,C))}var k=n.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(m)i.flags&256?(ns(i),i.flags&=-257,i=Sh(n,i,s)):i.memoizedState!==null?(is(),i.child=n.child,i.flags|=128,i=null):(is(),C=c.fallback,p=i.mode,c=Lc({mode:"visible",children:c.children},p),C=Bs(C,p,s,null),C.flags|=2,c.return=i,C.return=i,c.sibling=C,i.child=c,js(i,n.child,null,s),c=i.child,c.memoizedState=vh(s),c.childLanes=xh(n,M,s),i.memoizedState=_h,i=el(null,c));else if(ns(i),td(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var ie=M.dgst;M=ie,c=Error(a(419)),c.stack="",c.digest=M,Go({value:c,source:null,stack:null}),i=Sh(n,i,s)}else if(Tn||Mr(n,i,s,!1),M=(s&n.childLanes)!==0,Tn||M){if(M=rn,M!==null&&(c=si(M,s),c!==0&&c!==k.retryLane))throw k.retryLane=c,zs(n,c),fi(M,n,c),mh;ed(C)||Hc(),i=Sh(n,i,s)}else ed(C)?(i.flags|=192,i.child=n.child,i=null):(n=k.treeContext,cn=Di(C.nextSibling),Fn=i,Nt=!0,Za=null,Ri=!1,n!==null&&ug(i,n),i=yh(i,c.children),i.flags|=4096);return i}return p?(is(),C=c.fallback,p=i.mode,k=n.child,ie=k.sibling,c=va(k,{mode:"hidden",children:c.children}),c.subtreeFlags=k.subtreeFlags&65011712,ie!==null?C=va(ie,C):(C=Bs(C,p,s,null),C.flags|=2),C.return=i,c.return=i,c.sibling=C,i.child=c,el(null,c),c=i.child,C=n.child.memoizedState,C===null?C=vh(s):(p=C.cachePool,p!==null?(k=Mn._currentValue,p=p.parent!==k?{parent:k,pool:k}:p):p=gg(),C={baseLanes:C.baseLanes|s,cachePool:p}),c.memoizedState=C,c.childLanes=xh(n,M,s),i.memoizedState=_h,el(n.child,c)):(ns(i),s=n.child,n=s.sibling,s=va(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,n!==null&&(M=i.deletions,M===null?(i.deletions=[n],i.flags|=16):M.push(n)),i.child=s,i.memoizedState=null,s)}function yh(n,i){return i=Lc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Lc(n,i){return n=mi(22,n,null,i),n.lanes=0,n}function Sh(n,i,s){return js(i,n.child,null,s),n=yh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function C0(n,i,s){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Pf(n.return,i,s)}function Mh(n,i,s,c,p,m){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=c,M.tail=s,M.tailMode=p,M.treeForkCount=m)}function D0(n,i,s){var c=i.pendingProps,p=c.revealOrder,m=c.tail;c=c.children;var M=yn.current,C=(M&2)!==0;if(C?(M=M&1|2,i.flags|=128):M&=1,ye(yn,M),Vn(n,i,c,s),c=Nt?Vo:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&C0(n,s,i);else if(n.tag===19)C0(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(s=i.child,p=null;s!==null;)n=s.alternate,n!==null&&xc(n)===null&&(p=s),s=s.sibling;s=p,s===null?(p=i.child,i.child=null):(p=s.sibling,s.sibling=null),Mh(i,!1,p,s,m,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&xc(n)===null){i.child=p;break}n=p.sibling,p.sibling=s,s=p,p=n}Mh(i,!0,s,null,m,c);break;case"together":Mh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Ta(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(Mr(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=va(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=va(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function Eh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&fc(n)))}function nM(n,i,s){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),Ja(i,Mn,n.memoizedState.cache),Fs();break;case 27:case 5:je(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Yf(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(ns(i),i.flags|=128,null):(s&i.child.childLanes)!==0?R0(n,i,s):(ns(i),n=Ta(n,i,s),n!==null?n.sibling:null);ns(i);break;case 19:var p=(n.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(Mr(n,i,s,!1),c=(s&i.childLanes)!==0),p){if(c)return D0(n,i,s);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ye(yn,yn.current),c)break;return null;case 22:return i.lanes=0,M0(n,i,s,i.pendingProps);case 24:Ja(i,Mn,n.memoizedState.cache)}return Ta(n,i,s)}function L0(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)Tn=!0;else{if(!Eh(n,s)&&(i.flags&128)===0)return Tn=!1,nM(n,i,s);Tn=(n.flags&131072)!==0}else Tn=!1,Nt&&(i.flags&1048576)!==0&&cg(i,Vo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=ks(i.elementType),i.type=n,typeof n=="function")Rf(n)?(c=qs(n,c),i.tag=1,i=A0(null,i,n,c,s)):(i.tag=0,i=gh(null,i,n,c,s));else{if(n!=null){var p=n.$$typeof;if(p===R){i.tag=11,i=x0(null,i,n,c,s);break e}else if(p===U){i.tag=14,i=y0(null,i,n,c,s);break e}}throw i=ue(n)||n,Error(a(306,i,""))}}return i;case 0:return gh(n,i,i.type,i.pendingProps,s);case 1:return c=i.type,p=qs(c,i.pendingProps),A0(n,i,c,p,s);case 3:e:{if(Ue(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;p=m.element,kf(n,i),Ko(i,c,null,s);var M=i.memoizedState;if(c=M.cache,Ja(i,Mn,c),c!==m.cache&&zf(i,[Mn],s,!0),Yo(),c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=w0(n,i,c,s);break e}else if(c!==p){p=bi(Error(a(424)),i),Go(p),i=w0(n,i,c,s);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(cn=Di(n.firstChild),Fn=i,Nt=!0,Za=null,Ri=!0,s=Mg(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Fs(),c===p){i=Ta(n,i,s);break e}Vn(n,i,c,s)}i=i.child}return i;case 26:return Dc(n,i),n===null?(s=G_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Nt||(s=i.type,n=i.pendingProps,c=qc(te.current).createElement(s),c[dn]=i,c[_n]=n,Gn(c,s,n),Me(c),i.stateNode=c):i.memoizedState=G_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return je(i),n===null&&Nt&&(c=i.stateNode=F_(i.type,i.pendingProps,te.current),Fn=i,Ri=!0,p=cn,fs(i.type)?(nd=p,cn=Di(c.firstChild)):cn=p),Vn(n,i,i.pendingProps.children,s),Dc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Nt&&((p=c=cn)&&(c=NM(c,i.type,i.pendingProps,Ri),c!==null?(i.stateNode=c,Fn=i,cn=Di(c.firstChild),Ri=!1,p=!0):p=!1),p||Qa(i)),je(i),p=i.type,m=i.pendingProps,M=n!==null?n.memoizedProps:null,c=m.children,Qh(p,m)?c=null:M!==null&&Qh(p,M)&&(i.flags|=32),i.memoizedState!==null&&(p=Zf(n,i,qS,null,null,s),ml._currentValue=p),Dc(n,i),Vn(n,i,c,s),i.child;case 6:return n===null&&Nt&&((n=s=cn)&&(s=UM(s,i.pendingProps,Ri),s!==null?(i.stateNode=s,Fn=i,cn=null,n=!0):n=!1),n||Qa(i)),null;case 13:return R0(n,i,s);case 4:return Ue(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,s):Vn(n,i,c,s),i.child;case 11:return x0(n,i,i.type,i.pendingProps,s);case 7:return Vn(n,i,i.pendingProps,s),i.child;case 8:return Vn(n,i,i.pendingProps.children,s),i.child;case 12:return Vn(n,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,Ja(i,i.type,c.value),Vn(n,i,c.children,s),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,Vs(i),p=Hn(p),c=c(p),i.flags|=1,Vn(n,i,c,s),i.child;case 14:return y0(n,i,i.type,i.pendingProps,s);case 15:return S0(n,i,i.type,i.pendingProps,s);case 19:return D0(n,i,s);case 31:return tM(n,i,s);case 22:return M0(n,i,s,i.pendingProps);case 24:return Vs(i),c=Hn(Mn),n===null?(p=Hf(),p===null&&(p=rn,m=Bf(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=s),p=m),i.memoizedState={parent:c,cache:p},Gf(i),Ja(i,Mn,p)):((n.lanes&s)!==0&&(kf(n,i),Ko(i,null,null,s),Yo()),p=n.memoizedState,m=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),Ja(i,Mn,c)):(c=m.cache,Ja(i,Mn,c),c!==p.cache&&zf(i,[Mn],s,!0))),Vn(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ba(n){n.flags|=4}function Th(n,i,s,c,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(a_())n.flags|=8192;else throw Xs=mc,Vf}else n.flags&=-16777217}function N0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!q_(i))if(a_())n.flags|=8192;else throw Xs=mc,Vf}function Nc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Vt():536870912,n.lanes|=i,Or|=i)}function tl(n,i){if(!Nt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function un(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(i)for(var p=n.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=s,i}function iM(n,i,s){var c=i.pendingProps;switch(Nf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return un(i),null;case 3:return s=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Sa(Mn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Sr(i)?ba(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Of())),un(i),null;case 26:var p=i.type,m=i.memoizedState;return n===null?(ba(i),m!==null?(un(i),N0(i,m)):(un(i),Th(i,p,null,c,s))):m?m!==n.memoizedState?(ba(i),un(i),N0(i,m)):(un(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&ba(i),un(i),Th(i,p,n,c,s)),null;case 27:if(mt(i),s=te.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&ba(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return un(i),null}n=ve.current,Sr(i)?fg(i):(n=F_(p,c,s),i.stateNode=n,ba(i))}return un(i),null;case 5:if(mt(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&ba(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return un(i),null}if(m=ve.current,Sr(i))fg(i);else{var M=qc(te.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?M.createElement("select",{is:c.is}):M.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?M.createElement(p,{is:c.is}):M.createElement(p)}}m[dn]=i,m[_n]=c;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;e:switch(Gn(m,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&ba(i)}}return un(i),Th(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&ba(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=te.current,Sr(i)){if(n=i.stateNode,s=i.memoizedProps,c=null,p=Fn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[dn]=i,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||R_(n.nodeValue,s)),n||Qa(i,!0)}else n=qc(n).createTextNode(c),n[dn]=i,i.stateNode=n}return un(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(c=Sr(i),s!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[dn]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),n=!1}else s=Of(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return un(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Sr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[dn]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),p=!1}else p=Of(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=s,i):(s=c!==null,n=n!==null&&n.memoizedState!==null,s&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==p&&(c.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),Nc(i,i.updateQueue),un(i),null);case 4:return Fe(),n===null&&Wh(i.stateNode.containerInfo),un(i),null;case 10:return Sa(i.type),un(i),null;case 19:if($(yn),c=i.memoizedState,c===null)return un(i),null;if(p=(i.flags&128)!==0,m=c.rendering,m===null)if(p)tl(c,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=xc(n),m!==null){for(i.flags|=128,tl(c,!1),n=m.updateQueue,i.updateQueue=n,Nc(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)rg(s,n),s=s.sibling;return ye(yn,yn.current&1|2),Nt&&xa(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&w()>zc&&(i.flags|=128,p=!0,tl(c,!1),i.lanes=4194304)}else{if(!p)if(n=xc(m),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,Nc(i,n),tl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Nt)return un(i),null}else 2*w()-c.renderingStartTime>zc&&s!==536870912&&(i.flags|=128,p=!0,tl(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=w(),n.sibling=null,s=yn.current,ye(yn,p?s&1|2:s&1),Nt&&xa(i,c.treeForkCount),n):(un(i),null);case 22:case 23:return _i(i),qf(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),s=i.updateQueue,s!==null&&Nc(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),n!==null&&$(Gs),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Sa(Mn),un(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function aM(n,i){switch(Nf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Sa(Mn),Fe(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return mt(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));Fs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(_i(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Fs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $(yn),null;case 4:return Fe(),null;case 10:return Sa(i.type),null;case 22:case 23:return _i(i),qf(),n!==null&&$(Gs),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Sa(Mn),null;case 25:return null;default:return null}}function U0(n,i){switch(Nf(i),i.tag){case 3:Sa(Mn),Fe();break;case 26:case 27:case 5:mt(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:$(yn);break;case 10:Sa(i.type);break;case 22:case 23:_i(i),qf(),n!==null&&$(Gs);break;case 24:Sa(Mn)}}function nl(n,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&n)===n){c=void 0;var m=s.create,M=s.inst;c=m(),M.destroy=c}s=s.next}while(s!==p)}}catch(C){qt(i,i.return,C)}}function as(n,i,s){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var m=p.next;c=m;do{if((c.tag&n)===n){var M=c.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,p=i;var k=s,ie=C;try{ie()}catch(me){qt(p,k,me)}}}c=c.next}while(c!==m)}}catch(me){qt(i,i.return,me)}}function O0(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{Tg(i,s)}catch(c){qt(n,n.return,c)}}}function I0(n,i,s){s.props=qs(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){qt(n,i,c)}}function il(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(p){qt(n,i,p)}}function aa(n,i){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){qt(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){qt(n,i,p)}else s.current=null}function P0(n){var i=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){qt(n,n.return,p)}}function bh(n,i,s){try{var c=n.stateNode;AM(c,n.type,s,i),c[_n]=i}catch(p){qt(n,n.return,p)}}function z0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&fs(n.type)||n.tag===4}function Ah(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||z0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&fs(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ga));else if(c!==4&&(c===27&&fs(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(wh(n,i,s),n=n.sibling;n!==null;)wh(n,i,s),n=n.sibling}function Uc(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(c!==4&&(c===27&&fs(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Uc(n,i,s),n=n.sibling;n!==null;)Uc(n,i,s),n=n.sibling}function B0(n){var i=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Gn(i,c,s),i[dn]=n,i[_n]=s}catch(m){qt(n,n.return,m)}}var Aa=!1,bn=!1,Rh=!1,F0=typeof WeakSet=="function"?WeakSet:Set,On=null;function sM(n,i){if(n=n.containerInfo,Kh=eu,n=Qm(n),Sf(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,C=-1,k=-1,ie=0,me=0,xe=n,se=null;t:for(;;){for(var ce;xe!==s||p!==0&&xe.nodeType!==3||(C=M+p),xe!==m||c!==0&&xe.nodeType!==3||(k=M+c),xe.nodeType===3&&(M+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)se=xe,xe=ce;for(;;){if(xe===n)break t;if(se===s&&++ie===p&&(C=M),se===m&&++me===c&&(k=M),(ce=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=ce}s=C===-1||k===-1?null:{start:C,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zh={focusedElem:n,selectionRange:s},eu=!1,On=i;On!==null;)if(i=On,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,On=n;else for(;On!==null;){switch(i=On,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)p=n[s],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=i,p=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var Xe=qs(s.type,p);n=c.getSnapshotBeforeUpdate(Xe,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(lt){qt(s,s.return,lt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)$h(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":$h(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,On=n;break}On=i.return}}function H0(n,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(n,s),c&4&&nl(5,s);break;case 1:if(Ra(n,s),c&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(M){qt(s,s.return,M)}else{var p=qs(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(M){qt(s,s.return,M)}}c&64&&O0(s),c&512&&il(s,s.return);break;case 3:if(Ra(n,s),c&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Tg(n,i)}catch(M){qt(s,s.return,M)}}break;case 27:i===null&&c&4&&B0(s);case 26:case 5:Ra(n,s),i===null&&c&4&&P0(s),c&512&&il(s,s.return);break;case 12:Ra(n,s);break;case 31:Ra(n,s),c&4&&k0(n,s);break;case 13:Ra(n,s),c&4&&X0(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=pM.bind(null,s),OM(n,s))));break;case 22:if(c=s.memoizedState!==null||Aa,!c){i=i!==null&&i.memoizedState!==null||bn,p=Aa;var m=bn;Aa=c,(bn=i)&&!m?Ca(n,s,(s.subtreeFlags&8772)!==0):Ra(n,s),Aa=p,bn=m}break;case 30:break;default:Ra(n,s)}}function V0(n){var i=n.alternate;i!==null&&(n.alternate=null,V0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&L(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var hn=null,oi=!1;function wa(n,i,s){for(s=s.child;s!==null;)G0(n,i,s),s=s.sibling}function G0(n,i,s){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,s)}catch{}switch(s.tag){case 26:bn||aa(s,i),wa(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:bn||aa(s,i);var c=hn,p=oi;fs(s.type)&&(hn=s.stateNode,oi=!1),wa(n,i,s),hl(s.stateNode),hn=c,oi=p;break;case 5:bn||aa(s,i);case 6:if(c=hn,p=oi,hn=null,wa(n,i,s),hn=c,oi=p,hn!==null)if(oi)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(s.stateNode)}catch(m){qt(s,i,m)}else try{hn.removeChild(s.stateNode)}catch(m){qt(s,i,m)}break;case 18:hn!==null&&(oi?(n=hn,O_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Gr(n)):O_(hn,s.stateNode));break;case 4:c=hn,p=oi,hn=s.stateNode.containerInfo,oi=!0,wa(n,i,s),hn=c,oi=p;break;case 0:case 11:case 14:case 15:as(2,s,i),bn||as(4,s,i),wa(n,i,s);break;case 1:bn||(aa(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&I0(s,i,c)),wa(n,i,s);break;case 21:wa(n,i,s);break;case 22:bn=(c=bn)||s.memoizedState!==null,wa(n,i,s),bn=c;break;default:wa(n,i,s)}}function k0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Gr(n)}catch(s){qt(i,i.return,s)}}}function X0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Gr(n)}catch(s){qt(i,i.return,s)}}function rM(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new F0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new F0),i;default:throw Error(a(435,n.tag))}}function Oc(n,i){var s=rM(n);i.forEach(function(c){if(!s.has(c)){s.add(c);var p=mM.bind(null,n,c);c.then(p,p)}})}function li(n,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],m=n,M=i,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(fs(C.type)){hn=C.stateNode,oi=!1;break e}break;case 5:hn=C.stateNode,oi=!1;break e;case 3:case 4:hn=C.stateNode.containerInfo,oi=!0;break e}C=C.return}if(hn===null)throw Error(a(160));G0(m,M,p),hn=null,oi=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)j0(i,n),i=i.sibling}var Gi=null;function j0(n,i){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:li(i,n),ci(n),c&4&&(as(3,n,n.return),nl(3,n),as(5,n,n.return));break;case 1:li(i,n),ci(n),c&512&&(bn||s===null||aa(s,s.return)),c&64&&Aa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=Gi;if(li(i,n),ci(n),c&512&&(bn||s===null||aa(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":m=p.getElementsByTagName("title")[0],(!m||m[vn]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(c),p.head.insertBefore(m,p.querySelector("head > title"))),Gn(m,c,s),m[dn]=n,Me(m),c=m;break e;case"link":var M=j_("link","href",p).get(c+(s.href||""));if(M){for(var C=0;C<M.length;C++)if(m=M[C],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(C,1);break t}}m=p.createElement(c),Gn(m,c,s),p.head.appendChild(m);break;case"meta":if(M=j_("meta","content",p).get(c+(s.content||""))){for(C=0;C<M.length;C++)if(m=M[C],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(C,1);break t}}m=p.createElement(c),Gn(m,c,s),p.head.appendChild(m);break;default:throw Error(a(468,c))}m[dn]=n,Me(m),c=m}n.stateNode=c}else W_(p,n.type,n.stateNode);else n.stateNode=X_(p,c,n.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?W_(p,n.type,n.stateNode):X_(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&bh(n,n.memoizedProps,s.memoizedProps)}break;case 27:li(i,n),ci(n),c&512&&(bn||s===null||aa(s,s.return)),s!==null&&c&4&&bh(n,n.memoizedProps,s.memoizedProps);break;case 5:if(li(i,n),ci(n),c&512&&(bn||s===null||aa(s,s.return)),n.flags&32){p=n.stateNode;try{fr(p,"")}catch(Xe){qt(n,n.return,Xe)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,bh(n,p,s!==null?s.memoizedProps:p)),c&1024&&(Rh=!0);break;case 6:if(li(i,n),ci(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(Xe){qt(n,n.return,Xe)}}break;case 3:if(Zc=null,p=Gi,Gi=Yc(i.containerInfo),li(i,n),Gi=p,ci(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Gr(i.containerInfo)}catch(Xe){qt(n,n.return,Xe)}Rh&&(Rh=!1,W0(n));break;case 4:c=Gi,Gi=Yc(n.stateNode.containerInfo),li(i,n),ci(n),Gi=c;break;case 12:li(i,n),ci(n);break;case 31:li(i,n),ci(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Oc(n,c)));break;case 13:li(i,n),ci(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Pc=w()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Oc(n,c)));break;case 22:p=n.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,ie=Aa,me=bn;if(Aa=ie||p,bn=me||k,li(i,n),bn=me,Aa=ie,ci(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(s===null||k||Aa||bn||Ys(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,p)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=k.stateNode;var xe=k.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Xe){qt(k,k.return,Xe)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=p?"":k.memoizedProps}catch(Xe){qt(k,k.return,Xe)}}}else if(i.tag===18){if(s===null){k=i;try{var ce=k.stateNode;p?I_(ce,!0):I_(k.stateNode,!1)}catch(Xe){qt(k,k.return,Xe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Oc(n,s))));break;case 19:li(i,n),ci(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Oc(n,c)));break;case 30:break;case 21:break;default:li(i,n),ci(n)}}function ci(n){var i=n.flags;if(i&2){try{for(var s,c=n.return;c!==null;){if(z0(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var p=s.stateNode,m=Ah(n);Uc(n,m,p);break;case 5:var M=s.stateNode;s.flags&32&&(fr(M,""),s.flags&=-33);var C=Ah(n);Uc(n,C,M);break;case 3:case 4:var k=s.stateNode.containerInfo,ie=Ah(n);wh(n,ie,k);break;default:throw Error(a(161))}}catch(me){qt(n,n.return,me)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;W0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ra(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)H0(n,i.alternate,i),i=i.sibling}function Ys(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:as(4,i,i.return),Ys(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&I0(i,i.return,s),Ys(i);break;case 27:hl(i.stateNode);case 26:case 5:aa(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}n=n.sibling}}function Ca(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(p,m,s),nl(4,m);break;case 1:if(Ca(p,m,s),c=m,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(ie){qt(c,c.return,ie)}if(c=m,p=c.updateQueue,p!==null){var C=c.stateNode;try{var k=p.shared.hiddenCallbacks;if(k!==null)for(p.shared.hiddenCallbacks=null,p=0;p<k.length;p++)Eg(k[p],C)}catch(ie){qt(c,c.return,ie)}}s&&M&64&&O0(m),il(m,m.return);break;case 27:B0(m);case 26:case 5:Ca(p,m,s),s&&c===null&&M&4&&P0(m),il(m,m.return);break;case 12:Ca(p,m,s);break;case 31:Ca(p,m,s),s&&M&4&&k0(p,m);break;case 13:Ca(p,m,s),s&&M&4&&X0(p,m);break;case 22:m.memoizedState===null&&Ca(p,m,s),il(m,m.return);break;case 30:break;default:Ca(p,m,s)}i=i.sibling}}function Ch(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&ko(s))}function Dh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ko(n))}function ki(n,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)q0(n,i,s,c),i=i.sibling}function q0(n,i,s,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:ki(n,i,s,c),p&2048&&nl(9,i);break;case 1:ki(n,i,s,c);break;case 3:ki(n,i,s,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ko(n)));break;case 12:if(p&2048){ki(n,i,s,c),n=i.stateNode;try{var m=i.memoizedProps,M=m.id,C=m.onPostCommit;typeof C=="function"&&C(M,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(k){qt(i,i.return,k)}}else ki(n,i,s,c);break;case 31:ki(n,i,s,c);break;case 13:ki(n,i,s,c);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?ki(n,i,s,c):al(n,i):m._visibility&2?ki(n,i,s,c):(m._visibility|=2,Lr(n,i,s,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Ch(M,i);break;case 24:ki(n,i,s,c),p&2048&&Dh(i.alternate,i);break;default:ki(n,i,s,c)}}function Lr(n,i,s,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,M=i,C=s,k=c,ie=M.flags;switch(M.tag){case 0:case 11:case 15:Lr(m,M,C,k,p),nl(8,M);break;case 23:break;case 22:var me=M.stateNode;M.memoizedState!==null?me._visibility&2?Lr(m,M,C,k,p):al(m,M):(me._visibility|=2,Lr(m,M,C,k,p)),p&&ie&2048&&Ch(M.alternate,M);break;case 24:Lr(m,M,C,k,p),p&&ie&2048&&Dh(M.alternate,M);break;default:Lr(m,M,C,k,p)}i=i.sibling}}function al(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,c=i,p=c.flags;switch(c.tag){case 22:al(s,c),p&2048&&Ch(c.alternate,c);break;case 24:al(s,c),p&2048&&Dh(c.alternate,c);break;default:al(s,c)}i=i.sibling}}var sl=8192;function Nr(n,i,s){if(n.subtreeFlags&sl)for(n=n.child;n!==null;)Y0(n,i,s),n=n.sibling}function Y0(n,i,s){switch(n.tag){case 26:Nr(n,i,s),n.flags&sl&&n.memoizedState!==null&&WM(s,Gi,n.memoizedState,n.memoizedProps);break;case 5:Nr(n,i,s);break;case 3:case 4:var c=Gi;Gi=Yc(n.stateNode.containerInfo),Nr(n,i,s),Gi=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=sl,sl=16777216,Nr(n,i,s),sl=c):Nr(n,i,s));break;default:Nr(n,i,s)}}function K0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function rl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];On=c,Q0(c,n)}K0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(n),n=n.sibling}function Z0(n){switch(n.tag){case 0:case 11:case 15:rl(n),n.flags&2048&&as(9,n,n.return);break;case 3:rl(n);break;case 12:rl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Ic(n)):rl(n);break;default:rl(n)}}function Ic(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];On=c,Q0(c,n)}K0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:as(8,i,i.return),Ic(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ic(i));break;default:Ic(i)}n=n.sibling}}function Q0(n,i){for(;On!==null;){var s=On;switch(s.tag){case 0:case 11:case 15:as(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ko(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,On=c;else e:for(s=n;On!==null;){c=On;var p=c.sibling,m=c.return;if(V0(c),c===s){On=null;break e}if(p!==null){p.return=m,On=p;break e}On=m}}}var oM={getCacheForType:function(n){var i=Hn(Mn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return Hn(Mn).controller.signal}},lM=typeof WeakMap=="function"?WeakMap:Map,Gt=0,rn=null,Tt=null,Dt=0,Wt=0,vi=null,ss=!1,Ur=!1,Lh=!1,Da=0,mn=0,rs=0,Ks=0,Nh=0,xi=0,Or=0,ol=null,ui=null,Uh=!1,Pc=0,J0=0,zc=1/0,Bc=null,os=null,Dn=0,ls=null,Ir=null,La=0,Oh=0,Ih=null,$0=null,ll=0,Ph=null;function yi(){return(Gt&2)!==0&&Dt!==0?Dt&-Dt:B.T!==null?Gh():Fi()}function e_(){if(xi===0)if((Dt&536870912)===0||Nt){var n=De;De<<=1,(De&3932160)===0&&(De=262144),xi=n}else xi=536870912;return n=gi.current,n!==null&&(n.flags|=32),xi}function fi(n,i,s){(n===rn&&(Wt===2||Wt===9)||n.cancelPendingCommit!==null)&&(Pr(n,0),cs(n,Dt,xi,!1)),Se(n,s),((Gt&2)===0||n!==rn)&&(n===rn&&((Gt&2)===0&&(Ks|=s),mn===4&&cs(n,Dt,xi,!1)),sa(n))}function t_(n,i,s){if((Gt&6)!==0)throw Error(a(327));var c=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Ve(n,i),p=c?fM(n,i):Bh(n,i,!0),m=c;do{if(p===0){Ur&&!c&&cs(n,i,0,!1);break}else{if(s=n.current.alternate,m&&!cM(s)){p=Bh(n,i,!1),m=!1;continue}if(p===2){if(m=i,n.errorRecoveryDisabledLanes&m)var M=0;else M=n.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var C=n;p=ol;var k=C.current.memoizedState.isDehydrated;if(k&&(Pr(C,M).flags|=256),M=Bh(C,M,!1),M!==2){if(Lh&&!k){C.errorRecoveryDisabledLanes|=m,Ks|=m,p=4;break e}m=ui,ui=p,m!==null&&(ui===null?ui=m:ui.push.apply(ui,m))}p=M}if(m=!1,p!==2)continue}}if(p===1){Pr(n,0),cs(n,i,0,!0);break}e:{switch(c=n,m=p,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:cs(c,i,xi,!ss);break e;case 2:ui=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Pc+300-w(),10<p)){if(cs(c,i,xi,!ss),_e(c,0,!0)!==0)break e;La=i,c.timeoutHandle=N_(n_.bind(null,c,s,ui,Bc,Uh,i,xi,Ks,Or,ss,m,"Throttled",-0,0),p);break e}n_(c,s,ui,Bc,Uh,i,xi,Ks,Or,ss,m,null,-0,0)}}break}while(!0);sa(n)}function n_(n,i,s,c,p,m,M,C,k,ie,me,xe,se,ce){if(n.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},Y0(i,m,xe);var Xe=(m&62914560)===m?Pc-w():(m&4194048)===m?J0-w():0;if(Xe=qM(xe,Xe),Xe!==null){La=m,n.cancelPendingCommit=Xe(u_.bind(null,n,i,m,s,c,p,M,C,k,me,xe,null,se,ce)),cs(n,m,M,!ie);return}}u_(n,i,m,s,c,p,M,C,k)}function cM(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],m=p.getSnapshot;p=p.value;try{if(!pi(m(),p))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cs(n,i,s,c){i&=~Nh,i&=~Ks,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var m=31-ze(p),M=1<<m;c[m]=-1,p&=~M}s!==0&&yt(n,s,i)}function Fc(){return(Gt&6)===0?(cl(0),!1):!0}function zh(){if(Tt!==null){if(Wt===0)var n=Tt.return;else n=Tt,ya=Hs=null,$f(n),Ar=null,jo=0,n=Tt;for(;n!==null;)U0(n.alternate,n),n=n.return;Tt=null}}function Pr(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,CM(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),La=0,zh(),rn=n,Tt=s=va(n.current,null),Dt=i,Wt=0,vi=null,ss=!1,Ur=Ve(n,i),Lh=!1,Or=xi=Nh=Ks=rs=mn=0,ui=ol=null,Uh=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-ze(c),m=1<<p;i|=n[p],c&=~m}return Da=i,rc(),s}function i_(n,i){gt=null,B.H=$o,i===br||i===pc?(i=xg(),Wt=3):i===Vf?(i=xg(),Wt=4):Wt=i===mh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vi=i,Tt===null&&(mn=1,Rc(n,bi(i,n.current)))}function a_(){var n=gi.current;return n===null?!0:(Dt&4194048)===Dt?Ci===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?n===Ci:!1}function s_(){var n=B.H;return B.H=$o,n===null?$o:n}function r_(){var n=B.A;return B.A=oM,n}function Hc(){mn=4,ss||(Dt&4194048)!==Dt&&gi.current!==null||(Ur=!0),(rs&134217727)===0&&(Ks&134217727)===0||rn===null||cs(rn,Dt,xi,!1)}function Bh(n,i,s){var c=Gt;Gt|=2;var p=s_(),m=r_();(rn!==n||Dt!==i)&&(Bc=null,Pr(n,i)),i=!1;var M=mn;e:do try{if(Wt!==0&&Tt!==null){var C=Tt,k=vi;switch(Wt){case 8:zh(),M=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(i=!0);var ie=Wt;if(Wt=0,vi=null,zr(n,C,k,ie),s&&Ur){M=0;break e}break;default:ie=Wt,Wt=0,vi=null,zr(n,C,k,ie)}}uM(),M=mn;break}catch(me){i_(n,me)}while(!0);return i&&n.shellSuspendCounter++,ya=Hs=null,Gt=c,B.H=p,B.A=m,Tt===null&&(rn=null,Dt=0,rc()),M}function uM(){for(;Tt!==null;)o_(Tt)}function fM(n,i){var s=Gt;Gt|=2;var c=s_(),p=r_();rn!==n||Dt!==i?(Bc=null,zc=w()+500,Pr(n,i)):Ur=Ve(n,i);e:do try{if(Wt!==0&&Tt!==null){i=Tt;var m=vi;t:switch(Wt){case 1:Wt=0,vi=null,zr(n,i,m,1);break;case 2:case 9:if(_g(m)){Wt=0,vi=null,l_(i);break}i=function(){Wt!==2&&Wt!==9||rn!==n||(Wt=7),sa(n)},m.then(i,i);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:_g(m)?(Wt=0,vi=null,l_(i)):(Wt=0,vi=null,zr(n,i,m,7));break;case 5:var M=null;switch(Tt.tag){case 26:M=Tt.memoizedState;case 5:case 27:var C=Tt;if(M?q_(M):C.stateNode.complete){Wt=0,vi=null;var k=C.sibling;if(k!==null)Tt=k;else{var ie=C.return;ie!==null?(Tt=ie,Vc(ie)):Tt=null}break t}}Wt=0,vi=null,zr(n,i,m,5);break;case 6:Wt=0,vi=null,zr(n,i,m,6);break;case 8:zh(),mn=6;break e;default:throw Error(a(462))}}hM();break}catch(me){i_(n,me)}while(!0);return ya=Hs=null,B.H=c,B.A=p,Gt=s,Tt!==null?0:(rn=null,Dt=0,rc(),mn)}function hM(){for(;Tt!==null&&!Ht();)o_(Tt)}function o_(n){var i=L0(n.alternate,n,Da);n.memoizedProps=n.pendingProps,i===null?Vc(n):Tt=i}function l_(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=b0(s,i,i.pendingProps,i.type,void 0,Dt);break;case 11:i=b0(s,i,i.pendingProps,i.type.render,i.ref,Dt);break;case 5:$f(i);default:U0(s,i),i=Tt=rg(i,Da),i=L0(s,i,Da)}n.memoizedProps=n.pendingProps,i===null?Vc(n):Tt=i}function zr(n,i,s,c){ya=Hs=null,$f(i),Ar=null,jo=0;var p=i.return;try{if(eM(n,p,i,s,Dt)){mn=1,Rc(n,bi(s,n.current)),Tt=null;return}}catch(m){if(p!==null)throw Tt=p,m;mn=1,Rc(n,bi(s,n.current)),Tt=null;return}i.flags&32768?(Nt||c===1?n=!0:Ur||(Dt&536870912)!==0?n=!1:(ss=n=!0,(c===2||c===9||c===3||c===6)&&(c=gi.current,c!==null&&c.tag===13&&(c.flags|=16384))),c_(i,n)):Vc(i)}function Vc(n){var i=n;do{if((i.flags&32768)!==0){c_(i,ss);return}n=i.return;var s=iM(i.alternate,i,Da);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=n}while(i!==null);mn===0&&(mn=5)}function c_(n,i){do{var s=aM(n.alternate,n);if(s!==null){s.flags&=32767,Tt=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){Tt=n;return}Tt=n=s}while(n!==null);mn=6,Tt=null}function u_(n,i,s,c,p,m,M,C,k){n.cancelPendingCommit=null;do Gc();while(Dn!==0);if((Gt&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Af,Ge(n,s,m,M,C,k),n===rn&&(Tt=rn=null,Dt=0),Ir=i,ls=n,La=s,Oh=m,Ih=p,$0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,gM(he,function(){return m_(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,p=K.p,K.p=2,M=Gt,Gt|=4;try{sM(n,i,s)}finally{Gt=M,K.p=p,B.T=c}}Dn=1,f_(),h_(),d_()}}function f_(){if(Dn===1){Dn=0;var n=ls,i=Ir,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var p=Gt;Gt|=4;try{j0(i,n);var m=Zh,M=Qm(n.containerInfo),C=m.focusedElem,k=m.selectionRange;if(M!==C&&C&&C.ownerDocument&&Zm(C.ownerDocument.documentElement,C)){if(k!==null&&Sf(C)){var ie=k.start,me=k.end;if(me===void 0&&(me=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(me,C.value.length);else{var xe=C.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var ce=se.getSelection(),Xe=C.textContent.length,lt=Math.min(k.start,Xe),en=k.end===void 0?lt:Math.min(k.end,Xe);!ce.extend&&lt>en&&(M=en,en=lt,lt=M);var Q=Km(C,lt),j=Km(C,en);if(Q&&j&&(ce.rangeCount!==1||ce.anchorNode!==Q.node||ce.anchorOffset!==Q.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var ne=xe.createRange();ne.setStart(Q.node,Q.offset),ce.removeAllRanges(),lt>en?(ce.addRange(ne),ce.extend(j.node,j.offset)):(ne.setEnd(j.node,j.offset),ce.addRange(ne))}}}}for(xe=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var ge=xe[C];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}eu=!!Kh,Zh=Kh=null}finally{Gt=p,K.p=c,B.T=s}}n.current=i,Dn=2}}function h_(){if(Dn===2){Dn=0;var n=ls,i=Ir,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var p=Gt;Gt|=4;try{H0(n,i.alternate,i)}finally{Gt=p,K.p=c,B.T=s}}Dn=3}}function d_(){if(Dn===4||Dn===3){Dn=0,P();var n=ls,i=Ir,s=La,c=$0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,Ir=ls=null,p_(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(os=null),$i(s),i=i.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=B.T,p=K.p,K.p=2,B.T=null;try{for(var m=n.onRecoverableError,M=0;M<c.length;M++){var C=c[M];m(C.value,{componentStack:C.stack})}}finally{B.T=i,K.p=p}}(La&3)!==0&&Gc(),sa(n),p=n.pendingLanes,(s&261930)!==0&&(p&42)!==0?n===Ph?ll++:(ll=0,Ph=n):ll=0,cl(0)}}function p_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,ko(i)))}function Gc(){return f_(),h_(),d_(),m_()}function m_(){if(Dn!==5)return!1;var n=ls,i=Oh;Oh=0;var s=$i(La),c=B.T,p=K.p;try{K.p=32>s?32:s,B.T=null,s=Ih,Ih=null;var m=ls,M=La;if(Dn=0,Ir=ls=null,La=0,(Gt&6)!==0)throw Error(a(331));var C=Gt;if(Gt|=4,Z0(m.current),q0(m,m.current,M,s),Gt=C,cl(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,m)}catch{}return!0}finally{K.p=p,B.T=c,p_(n,i)}}function g_(n,i,s){i=bi(s,i),i=ph(n.stateNode,i,2),n=ts(n,i,2),n!==null&&(Se(n,2),sa(n))}function qt(n,i,s){if(n.tag===3)g_(n,n,s);else for(;i!==null;){if(i.tag===3){g_(i,n,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(os===null||!os.has(c))){n=bi(s,n),s=_0(2),c=ts(i,s,2),c!==null&&(v0(s,c,i,n),Se(c,2),sa(c));break}}i=i.return}}function Fh(n,i,s){var c=n.pingCache;if(c===null){c=n.pingCache=new lM;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(s)||(Lh=!0,p.add(s),n=dM.bind(null,n,i,s),i.then(n,n))}function dM(n,i,s){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,rn===n&&(Dt&s)===s&&(mn===4||mn===3&&(Dt&62914560)===Dt&&300>w()-Pc?(Gt&2)===0&&Pr(n,0):Nh|=s,Or===Dt&&(Or=0)),sa(n)}function __(n,i){i===0&&(i=Vt()),n=zs(n,i),n!==null&&(Se(n,i),sa(n))}function pM(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),__(n,s)}function mM(n,i){var s=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),__(n,s)}function gM(n,i){return at(n,i)}var kc=null,Br=null,Hh=!1,Xc=!1,Vh=!1,us=0;function sa(n){n!==Br&&n.next===null&&(Br===null?kc=Br=n:Br=Br.next=n),Xc=!0,Hh||(Hh=!0,vM())}function cl(n,i){if(!Vh&&Xc){Vh=!0;do for(var s=!1,c=kc;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var m=0;else{var M=c.suspendedLanes,C=c.pingedLanes;m=(1<<31-ze(42|n)+1)-1,m&=p&~(M&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,S_(c,m))}else m=Dt,m=_e(c,c===rn?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Ve(c,m)||(s=!0,S_(c,m));c=c.next}while(s);Vh=!1}}function _M(){v_()}function v_(){Xc=Hh=!1;var n=0;us!==0&&RM()&&(n=us);for(var i=w(),s=null,c=kc;c!==null;){var p=c.next,m=x_(c,i);m===0?(c.next=null,s===null?kc=p:s.next=p,p===null&&(Br=s)):(s=c,(n!==0||(m&3)!==0)&&(Xc=!0)),c=p}Dn!==0&&Dn!==5||cl(n),us!==0&&(us=0)}function x_(n,i){for(var s=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var M=31-ze(m),C=1<<M,k=p[M];k===-1?((C&s)===0||(C&c)!==0)&&(p[M]=ft(C,i)):k<=i&&(n.expiredLanes|=C),m&=~C}if(i=rn,s=Dt,s=_e(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===i&&(Wt===2||Wt===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&on(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ve(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(c!==null&&on(c),$i(s)){case 2:case 8:s=Ee;break;case 32:s=he;break;case 268435456:s=Re;break;default:s=he}return c=y_.bind(null,n),s=at(s,c),n.callbackPriority=i,n.callbackNode=s,i}return c!==null&&c!==null&&on(c),n.callbackPriority=2,n.callbackNode=null,2}function y_(n,i){if(Dn!==0&&Dn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Gc()&&n.callbackNode!==s)return null;var c=Dt;return c=_e(n,n===rn?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(t_(n,c,i),x_(n,w()),n.callbackNode!=null&&n.callbackNode===s?y_.bind(null,n):null)}function S_(n,i){if(Gc())return null;t_(n,i,!0)}function vM(){DM(function(){(Gt&6)!==0?at(pe,_M):v_()})}function Gh(){if(us===0){var n=Er;n===0&&(n=we,we<<=1,(we&261888)===0&&(we=256)),us=n}return us}function M_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Jl(""+n)}function E_(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function xM(n,i,s,c,p){if(i==="submit"&&s&&s.stateNode===p){var m=M_((p[_n]||null).action),M=c.submitter;M&&(i=(i=M[_n]||null)?M_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var C=new nc("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(us!==0){var k=M?E_(p,M):new FormData(p);lh(s,{pending:!0,data:k,method:p.method,action:m},null,k)}}else typeof m=="function"&&(C.preventDefault(),k=M?E_(p,M):new FormData(p),lh(s,{pending:!0,data:k,method:p.method,action:m},m,k))},currentTarget:p}]})}}for(var kh=0;kh<bf.length;kh++){var Xh=bf[kh],yM=Xh.toLowerCase(),SM=Xh[0].toUpperCase()+Xh.slice(1);Vi(yM,"on"+SM)}Vi(eg,"onAnimationEnd"),Vi(tg,"onAnimationIteration"),Vi(ng,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(zS,"onTransitionRun"),Vi(BS,"onTransitionStart"),Vi(FS,"onTransitionCancel"),Vi(ig,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function T_(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],p=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var C=c[M],k=C.instance,ie=C.currentTarget;if(C=C.listener,k!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=ie;try{m(p)}catch(me){sc(me)}p.currentTarget=null,m=k}else for(M=0;M<c.length;M++){if(C=c[M],k=C.instance,ie=C.currentTarget,C=C.listener,k!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=ie;try{m(p)}catch(me){sc(me)}p.currentTarget=null,m=k}}}}function bt(n,i){var s=i[qa];s===void 0&&(s=i[qa]=new Set);var c=n+"__bubble";s.has(c)||(b_(i,n,2,!1),s.add(c))}function jh(n,i,s){var c=0;i&&(c|=4),b_(s,n,c,i)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Wh(n){if(!n[jc]){n[jc]=!0,Pe.forEach(function(s){s!=="selectionchange"&&(MM.has(s)||jh(s,!1,n),jh(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jc]||(i[jc]=!0,jh("selectionchange",!1,i))}}function b_(n,i,s,c){switch(ev(i)){case 2:var p=ZM;break;case 8:p=QM;break;default:p=od}s=p.bind(null,i,s,n),p=void 0,!hf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,s,{capture:!0,passive:p}):n.addEventListener(i,s,!0):p!==void 0?n.addEventListener(i,s,{passive:p}):n.addEventListener(i,s,!1)}function qh(n,i,s,c,p){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var C=c.stateNode.containerInfo;if(C===p)break;if(M===4)for(M=c.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===p)return;M=M.return}for(;C!==null;){if(M=Z(C),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){c=m=M;continue e}C=C.parentNode}}c=c.return}Dm(function(){var ie=m,me=uf(s),xe=[];e:{var se=ag.get(n);if(se!==void 0){var ce=nc,Xe=n;switch(n){case"keypress":if(ec(s)===0)break e;case"keydown":case"keyup":ce=mS;break;case"focusin":Xe="focus",ce=gf;break;case"focusout":Xe="blur",ce=gf;break;case"beforeblur":case"afterblur":ce=gf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=vS;break;case eg:case tg:case ng:ce=rS;break;case ig:ce=yS;break;case"scroll":case"scrollend":ce=tS;break;case"wheel":ce=MS;break;case"copy":case"cut":case"paste":ce=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Im;break;case"toggle":case"beforetoggle":ce=TS}var lt=(i&4)!==0,en=!lt&&(n==="scroll"||n==="scrollend"),Q=lt?se!==null?se+"Capture":null:se;lt=[];for(var j=ie,ne;j!==null;){var ge=j;if(ne=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ne===null||Q===null||(ge=No(j,Q),ge!=null&&lt.push(fl(j,ge,ne))),en)break;j=j.return}0<lt.length&&(se=new ce(se,Xe,null,s,me),xe.push({event:se,listeners:lt}))}}if((i&7)===0){e:{if(se=n==="mouseover"||n==="pointerover",ce=n==="mouseout"||n==="pointerout",se&&s!==cf&&(Xe=s.relatedTarget||s.fromElement)&&(Z(Xe)||Xe[ea]))break e;if((ce||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(Xe=s.relatedTarget||s.toElement,ce=ie,Xe=Xe?Z(Xe):null,Xe!==null&&(en=l(Xe),lt=Xe.tag,Xe!==en||lt!==5&&lt!==27&&lt!==6)&&(Xe=null)):(ce=null,Xe=ie),ce!==Xe)){if(lt=Um,ge="onMouseLeave",Q="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Im,ge="onPointerLeave",Q="onPointerEnter",j="pointer"),en=ce==null?se:le(ce),ne=Xe==null?se:le(Xe),se=new lt(ge,j+"leave",ce,s,me),se.target=en,se.relatedTarget=ne,ge=null,Z(me)===ie&&(lt=new lt(Q,j+"enter",Xe,s,me),lt.target=ne,lt.relatedTarget=en,ge=lt),en=ge,ce&&Xe)t:{for(lt=EM,Q=ce,j=Xe,ne=0,ge=Q;ge;ge=lt(ge))ne++;ge=0;for(var st=j;st;st=lt(st))ge++;for(;0<ne-ge;)Q=lt(Q),ne--;for(;0<ge-ne;)j=lt(j),ge--;for(;ne--;){if(Q===j||j!==null&&Q===j.alternate){lt=Q;break t}Q=lt(Q),j=lt(j)}lt=null}else lt=null;ce!==null&&A_(xe,se,ce,lt,!1),Xe!==null&&en!==null&&A_(xe,en,Xe,lt,!0)}}e:{if(se=ie?le(ie):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var zt=km;else if(Vm(se))if(Xm)zt=OS;else{zt=NS;var $e=LS}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&lf(ie.elementType)&&(zt=km):zt=US;if(zt&&(zt=zt(n,ie))){Gm(xe,zt,s,me);break e}$e&&$e(n,se,ie),n==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&Cn(se,"number",se.value)}switch($e=ie?le(ie):window,n){case"focusin":(Vm($e)||$e.contentEditable==="true")&&(mr=$e,Mf=ie,Ho=null);break;case"focusout":Ho=Mf=mr=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Jm(xe,s,me);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":Jm(xe,s,me)}var _t;if(vf)e:{switch(n){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else pr?Fm(n,s)&&(Lt="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Lt="onCompositionStart");Lt&&(Pm&&s.locale!=="ko"&&(pr||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&pr&&(_t=Lm()):(Ya=me,df="value"in Ya?Ya.value:Ya.textContent,pr=!0)),$e=Wc(ie,Lt),0<$e.length&&(Lt=new Om(Lt,n,null,s,me),xe.push({event:Lt,listeners:$e}),_t?Lt.data=_t:(_t=Hm(s),_t!==null&&(Lt.data=_t)))),(_t=AS?wS(n,s):RS(n,s))&&(Lt=Wc(ie,"onBeforeInput"),0<Lt.length&&($e=new Om("onBeforeInput","beforeinput",null,s,me),xe.push({event:$e,listeners:Lt}),$e.data=_t)),xM(xe,n,ie,s,me)}T_(xe,i)})}function fl(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Wc(n,i){for(var s=i+"Capture",c=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=No(n,s),p!=null&&c.unshift(fl(n,p,m)),p=No(n,i),p!=null&&c.push(fl(n,p,m))),n.tag===3)return c;n=n.return}return[]}function EM(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function A_(n,i,s,c,p){for(var m=i._reactName,M=[];s!==null&&s!==c;){var C=s,k=C.alternate,ie=C.stateNode;if(C=C.tag,k!==null&&k===c)break;C!==5&&C!==26&&C!==27||ie===null||(k=ie,p?(ie=No(s,m),ie!=null&&M.unshift(fl(s,ie,k))):p||(ie=No(s,m),ie!=null&&M.push(fl(s,ie,k)))),s=s.return}M.length!==0&&n.push({event:i,listeners:M})}var TM=/\r\n?/g,bM=/\u0000|\uFFFD/g;function w_(n){return(typeof n=="string"?n:""+n).replace(TM,`
`).replace(bM,"")}function R_(n,i){return i=w_(i),w_(n)===i}function $t(n,i,s,c,p,m){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||fr(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&fr(n,""+c);break;case"className":Xt(n,"class",c);break;case"tabIndex":Xt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(n,s,c);break;case"style":Rm(n,c,m);break;case"data":if(i!=="object"){Xt(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Jl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&$t(n,i,"name",p.name,p,null),$t(n,i,"formEncType",p.formEncType,p,null),$t(n,i,"formMethod",p.formMethod,p,null),$t(n,i,"formTarget",p.formTarget,p,null)):($t(n,i,"encType",p.encType,p,null),$t(n,i,"method",p.method,p,null),$t(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Jl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=ga);break;case"onScroll":c!=null&&bt("scroll",n);break;case"onScrollEnd":c!=null&&bt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Jl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":bt("beforetoggle",n),bt("toggle",n),sn(n,"popover",c);break;case"xlinkActuate":Et(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Et(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Et(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Et(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Et(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Et(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Et(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Et(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Et(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":sn(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=$y.get(s)||s,sn(n,s,c))}}function Yh(n,i,s,c,p,m){switch(s){case"style":Rm(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof c=="string"?fr(n,c):(typeof c=="number"||typeof c=="bigint")&&fr(n,""+c);break;case"onScroll":c!=null&&bt("scroll",n);break;case"onScrollEnd":c!=null&&bt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!We.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),i=s.slice(2,p?s.length-7:void 0),m=n[_n]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(i,m,p),typeof c=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,c,p);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):sn(n,s,c)}}}function Gn(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",n),bt("load",n);var c=!1,p=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$t(n,i,m,M,s,null)}}p&&$t(n,i,"srcSet",s.srcSet,s,null),c&&$t(n,i,"src",s.src,s,null);return;case"input":bt("invalid",n);var C=m=M=p=null,k=null,ie=null;for(c in s)if(s.hasOwnProperty(c)){var me=s[c];if(me!=null)switch(c){case"name":p=me;break;case"type":M=me;break;case"checked":k=me;break;case"defaultChecked":ie=me;break;case"value":m=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:$t(n,i,c,me,s,null)}}Qn(n,m,C,k,ie,M,p,!1);return;case"select":bt("invalid",n),c=M=m=null;for(p in s)if(s.hasOwnProperty(p)&&(C=s[p],C!=null))switch(p){case"value":m=C;break;case"defaultValue":M=C;break;case"multiple":c=C;default:$t(n,i,p,C,s,null)}i=m,s=M,n.multiple=!!c,i!=null?xn(n,!!c,i,!1):s!=null&&xn(n,!!c,s,!0);return;case"textarea":bt("invalid",n),m=p=c=null;for(M in s)if(s.hasOwnProperty(M)&&(C=s[M],C!=null))switch(M){case"value":c=C;break;case"defaultValue":p=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:$t(n,i,M,C,s,null)}ta(n,c,p,m);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(c=s[k],c!=null))switch(k){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:$t(n,i,k,c,s,null)}return;case"dialog":bt("beforetoggle",n),bt("toggle",n),bt("cancel",n),bt("close",n);break;case"iframe":case"object":bt("load",n);break;case"video":case"audio":for(c=0;c<ul.length;c++)bt(ul[c],n);break;case"image":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"embed":case"source":case"link":bt("error",n),bt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in s)if(s.hasOwnProperty(ie)&&(c=s[ie],c!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$t(n,i,ie,c,s,null)}return;default:if(lf(i)){for(me in s)s.hasOwnProperty(me)&&(c=s[me],c!==void 0&&Yh(n,i,me,c,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(c=s[C],c!=null&&$t(n,i,C,c,s,null))}function AM(n,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,M=null,C=null,k=null,ie=null,me=null;for(ce in s){var xe=s[ce];if(s.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":k=xe;default:c.hasOwnProperty(ce)||$t(n,i,ce,null,c,xe)}}for(var se in c){var ce=c[se];if(xe=s[se],c.hasOwnProperty(se)&&(ce!=null||xe!=null))switch(se){case"type":m=ce;break;case"name":p=ce;break;case"checked":ie=ce;break;case"defaultChecked":me=ce;break;case"value":M=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:ce!==xe&&$t(n,i,se,ce,c,xe)}}Wn(n,M,C,k,ie,me,m,p);return;case"select":ce=M=C=se=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ce=k;default:c.hasOwnProperty(m)||$t(n,i,m,null,c,k)}for(p in c)if(m=c[p],k=s[p],c.hasOwnProperty(p)&&(m!=null||k!=null))switch(p){case"value":se=m;break;case"defaultValue":C=m;break;case"multiple":M=m;default:m!==k&&$t(n,i,p,m,c,k)}i=C,s=M,c=ce,se!=null?xn(n,!!s,se,!1):!!c!=!!s&&(i!=null?xn(n,!!s,i,!0):xn(n,!!s,s?[]:"",!1));return;case"textarea":ce=se=null;for(C in s)if(p=s[C],s.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:$t(n,i,C,null,c,p)}for(M in c)if(p=c[M],m=s[M],c.hasOwnProperty(M)&&(p!=null||m!=null))switch(M){case"value":se=p;break;case"defaultValue":ce=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==m&&$t(n,i,M,p,c,m)}ur(n,se,ce);return;case"option":for(var Xe in s)if(se=s[Xe],s.hasOwnProperty(Xe)&&se!=null&&!c.hasOwnProperty(Xe))switch(Xe){case"selected":n.selected=!1;break;default:$t(n,i,Xe,null,c,se)}for(k in c)if(se=c[k],ce=s[k],c.hasOwnProperty(k)&&se!==ce&&(se!=null||ce!=null))switch(k){case"selected":n.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:$t(n,i,k,se,c,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)se=s[lt],s.hasOwnProperty(lt)&&se!=null&&!c.hasOwnProperty(lt)&&$t(n,i,lt,null,c,se);for(ie in c)if(se=c[ie],ce=s[ie],c.hasOwnProperty(ie)&&se!==ce&&(se!=null||ce!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:$t(n,i,ie,se,c,ce)}return;default:if(lf(i)){for(var en in s)se=s[en],s.hasOwnProperty(en)&&se!==void 0&&!c.hasOwnProperty(en)&&Yh(n,i,en,void 0,c,se);for(me in c)se=c[me],ce=s[me],!c.hasOwnProperty(me)||se===ce||se===void 0&&ce===void 0||Yh(n,i,me,se,c,ce);return}}for(var Q in s)se=s[Q],s.hasOwnProperty(Q)&&se!=null&&!c.hasOwnProperty(Q)&&$t(n,i,Q,null,c,se);for(xe in c)se=c[xe],ce=s[xe],!c.hasOwnProperty(xe)||se===ce||se==null&&ce==null||$t(n,i,xe,se,c,ce)}function C_(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wM(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var p=s[c],m=p.transferSize,M=p.initiatorType,C=p.duration;if(m&&C&&C_(M)){for(M=0,C=p.responseEnd,c+=1;c<s.length;c++){var k=s[c],ie=k.startTime;if(ie>C)break;var me=k.transferSize,xe=k.initiatorType;me&&C_(xe)&&(k=k.responseEnd,M+=me*(k<C?1:(C-ie)/(k-ie)))}if(--c,i+=8*(m+M)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Kh=null,Zh=null;function qc(n){return n.nodeType===9?n:n.ownerDocument}function D_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Qh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jh=null;function RM(){var n=window.event;return n&&n.type==="popstate"?n===Jh?!1:(Jh=n,!0):(Jh=null,!1)}var N_=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,U_=typeof Promise=="function"?Promise:void 0,DM=typeof queueMicrotask=="function"?queueMicrotask:typeof U_<"u"?function(n){return U_.resolve(null).then(n).catch(LM)}:N_;function LM(n){setTimeout(function(){throw n})}function fs(n){return n==="head"}function O_(n,i){var s=i,c=0;do{var p=s.nextSibling;if(n.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"||s==="/&"){if(c===0){n.removeChild(p),Gr(i);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")hl(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,hl(s);for(var m=s.firstChild;m;){var M=m.nextSibling,C=m.nodeName;m[vn]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=M}}else s==="body"&&hl(n.ownerDocument.body);s=p}while(s);Gr(i)}function I_(n,i){var s=n;n=0;do{var c=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=c}while(s)}function $h(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":$h(s),L(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function NM(n,i,s,c){for(;n.nodeType===1;){var p=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[vn])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Di(n.nextSibling),n===null)break}return null}function UM(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Di(n.nextSibling),n===null))return null;return n}function P_(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Di(n.nextSibling),n===null))return null;return n}function ed(n){return n.data==="$?"||n.data==="$~"}function td(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function OM(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Di(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var nd=null;function z_(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return Di(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function B_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function F_(n,i,s){switch(i=qc(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function hl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);L(n)}var Li=new Map,H_=new Set;function Yc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Na=K.d;K.d={f:IM,r:PM,D:zM,C:BM,L:FM,m:HM,X:GM,S:VM,M:kM};function IM(){var n=Na.f(),i=Fc();return n||i}function PM(n){var i=oe(n);i!==null&&i.tag===5&&i.type==="form"?i0(i):Na.r(n)}var Fr=typeof document>"u"?null:document;function V_(n,i,s){var c=Fr;if(c&&typeof i=="string"&&i){var p=Ct(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),H_.has(p)||(H_.add(p),n={rel:n,crossOrigin:s,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Gn(i,"link",n),Me(i),c.head.appendChild(i)))}}function zM(n){Na.D(n),V_("dns-prefetch",n,null)}function BM(n,i){Na.C(n,i),V_("preconnect",n,i)}function FM(n,i,s){Na.L(n,i,s);var c=Fr;if(c&&n&&i){var p='link[rel="preload"][as="'+Ct(i)+'"]';i==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+Ct(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+Ct(s.imageSizes)+'"]')):p+='[href="'+Ct(n)+'"]';var m=p;switch(i){case"style":m=Hr(n);break;case"script":m=Vr(n)}Li.has(m)||(n=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Li.set(m,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(dl(m))||i==="script"&&c.querySelector(pl(m))||(i=c.createElement("link"),Gn(i,"link",n),Me(i),c.head.appendChild(i)))}}function HM(n,i){Na.m(n,i);var s=Fr;if(s&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+Ct(c)+'"][href="'+Ct(n)+'"]',m=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Vr(n)}if(!Li.has(m)&&(n=g({rel:"modulepreload",href:n},i),Li.set(m,n),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(pl(m)))return}c=s.createElement("link"),Gn(c,"link",n),Me(c),s.head.appendChild(c)}}}function VM(n,i,s){Na.S(n,i,s);var c=Fr;if(c&&n){var p=J(c).hoistableStyles,m=Hr(n);i=i||"default";var M=p.get(m);if(!M){var C={loading:0,preload:null};if(M=c.querySelector(dl(m)))C.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Li.get(m))&&id(n,s);var k=M=c.createElement("link");Me(k),Gn(k,"link",n),k._p=new Promise(function(ie,me){k.onload=ie,k.onerror=me}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Kc(M,i,c)}M={type:"stylesheet",instance:M,count:1,state:C},p.set(m,M)}}}function GM(n,i){Na.X(n,i);var s=Fr;if(s&&n){var c=J(s).hoistableScripts,p=Vr(n),m=c.get(p);m||(m=s.querySelector(pl(p)),m||(n=g({src:n,async:!0},i),(i=Li.get(p))&&ad(n,i),m=s.createElement("script"),Me(m),Gn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function kM(n,i){Na.M(n,i);var s=Fr;if(s&&n){var c=J(s).hoistableScripts,p=Vr(n),m=c.get(p);m||(m=s.querySelector(pl(p)),m||(n=g({src:n,async:!0,type:"module"},i),(i=Li.get(p))&&ad(n,i),m=s.createElement("script"),Me(m),Gn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function G_(n,i,s,c){var p=(p=te.current)?Yc(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Hr(s.href),s=J(p).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Hr(s.href);var m=J(p).hoistableStyles,M=m.get(n);if(M||(p=p.ownerDocument||p,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,M),(m=p.querySelector(dl(n)))&&!m._p&&(M.instance=m,M.state.loading=5),Li.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Li.set(n,s),m||XM(p,n,s,M.state))),i&&c===null)throw Error(a(528,""));return M}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Vr(s),s=J(p).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Hr(n){return'href="'+Ct(n)+'"'}function dl(n){return'link[rel="stylesheet"]['+n+"]"}function k_(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function XM(n,i,s,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Gn(i,"link",s),Me(i),n.head.appendChild(i))}function Vr(n){return'[src="'+Ct(n)+'"]'}function pl(n){return"script[async]"+n}function X_(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+Ct(s.href)+'"]');if(c)return i.instance=c,Me(c),c;var p=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Me(c),Gn(c,"style",p),Kc(c,s.precedence,n),i.instance=c;case"stylesheet":p=Hr(s.href);var m=n.querySelector(dl(p));if(m)return i.state.loading|=4,i.instance=m,Me(m),m;c=k_(s),(p=Li.get(p))&&id(c,p),m=(n.ownerDocument||n).createElement("link"),Me(m);var M=m;return M._p=new Promise(function(C,k){M.onload=C,M.onerror=k}),Gn(m,"link",c),i.state.loading|=4,Kc(m,s.precedence,n),i.instance=m;case"script":return m=Vr(s.src),(p=n.querySelector(pl(m)))?(i.instance=p,Me(p),p):(c=s,(p=Li.get(m))&&(c=g({},s),ad(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),Me(p),Gn(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Kc(c,s.precedence,n));return i.instance}function Kc(n,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,m=p,M=0;M<c.length;M++){var C=c[M];if(C.dataset.precedence===i)m=C;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function id(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function ad(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Zc=null;function j_(n,i,s){if(Zc===null){var c=new Map,p=Zc=new Map;p.set(s,c)}else p=Zc,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),p=0;p<s.length;p++){var m=s[p];if(!(m[vn]||m[dn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=n+M;var C=c.get(M);C?C.push(m):c.set(M,[m])}}return c}function W_(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function jM(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function q_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function WM(n,i,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var p=Hr(c.href),m=i.querySelector(dl(p));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=Qc.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=m,Me(m);return}m=i.ownerDocument||i,c=k_(c),(p=Li.get(p))&&id(c,p),m=m.createElement("link"),Me(m);var M=m;M._p=new Promise(function(C,k){M.onload=C,M.onerror=k}),Gn(m,"link",c),s.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=Qc.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var sd=0;function qM(n,i){return n.stylesheets&&n.count===0&&$c(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var c=setTimeout(function(){if(n.stylesheets&&$c(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&sd===0&&(sd=62500*wM());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&$c(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>sd?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Jc=null;function $c(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Jc=new Map,i.forEach(YM,n),Jc=null,Qc.call(n))}function YM(n,i){if(!(i.state.loading&4)){var s=Jc.get(n);if(s)var c=s.get(null);else{s=new Map,Jc.set(n,s);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var M=p[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),c=M)}c&&s.set(null,c)}p=i.instance,M=p.getAttribute("data-precedence"),m=s.get(M)||c,m===c&&s.set(null,p),s.set(M,p),this.count++,c=Qc.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var ml={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function KM(n,i,s,c,p,m,M,C,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Y_(n,i,s,c,p,m,M,C,k,ie,me,xe){return n=new KM(n,i,s,M,k,ie,me,xe,C),i=1,m===!0&&(i|=24),m=mi(3,null,null,i),n.current=m,m.stateNode=n,i=Bf(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:i},Gf(m),n}function K_(n){return n?(n=vr,n):vr}function Z_(n,i,s,c,p,m){p=K_(p),c.context===null?c.context=p:c.pendingContext=p,c=es(i),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=ts(n,c,i),s!==null&&(fi(s,n,i),qo(s,n,i))}function Q_(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function rd(n,i){Q_(n,i),(n=n.alternate)&&Q_(n,i)}function J_(n){if(n.tag===13||n.tag===31){var i=zs(n,67108864);i!==null&&fi(i,n,67108864),rd(n,67108864)}}function $_(n){if(n.tag===13||n.tag===31){var i=yi();i=di(i);var s=zs(n,i);s!==null&&fi(s,n,i),rd(n,i)}}var eu=!0;function ZM(n,i,s,c){var p=B.T;B.T=null;var m=K.p;try{K.p=2,od(n,i,s,c)}finally{K.p=m,B.T=p}}function QM(n,i,s,c){var p=B.T;B.T=null;var m=K.p;try{K.p=8,od(n,i,s,c)}finally{K.p=m,B.T=p}}function od(n,i,s,c){if(eu){var p=ld(c);if(p===null)qh(n,i,c,tu,s),tv(n,c);else if($M(p,n,i,s,c))c.stopPropagation();else if(tv(n,c),i&4&&-1<JM.indexOf(n)){for(;p!==null;){var m=oe(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=be(m.pendingLanes);if(M!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var k=1<<31-ze(M);C.entanglements[1]|=k,M&=~k}sa(m),(Gt&6)===0&&(zc=w()+500,cl(0))}}break;case 31:case 13:C=zs(m,2),C!==null&&fi(C,m,2),Fc(),rd(m,2)}if(m=ld(c),m===null&&qh(n,i,c,tu,s),m===p)break;p=m}p!==null&&c.stopPropagation()}else qh(n,i,c,null,s)}}function ld(n){return n=uf(n),cd(n)}var tu=null;function cd(n){if(tu=null,n=Z(n),n!==null){var i=l(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=u(i),n!==null)return n;n=null}else if(s===31){if(n=f(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return tu=n,null}function ev(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case pe:return 2;case Ee:return 8;case he:case Ye:return 32;case Re:return 268435456;default:return 32}default:return 32}}var ud=!1,hs=null,ds=null,ps=null,gl=new Map,_l=new Map,ms=[],JM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(n,i){switch(n){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(i.pointerId)}}function vl(n,i,s,c,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[p]},i!==null&&(i=oe(i),i!==null&&J_(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function $M(n,i,s,c,p){switch(i){case"focusin":return hs=vl(hs,n,i,s,c,p),!0;case"dragenter":return ds=vl(ds,n,i,s,c,p),!0;case"mouseover":return ps=vl(ps,n,i,s,c,p),!0;case"pointerover":var m=p.pointerId;return gl.set(m,vl(gl.get(m)||null,n,i,s,c,p)),!0;case"gotpointercapture":return m=p.pointerId,_l.set(m,vl(_l.get(m)||null,n,i,s,c,p)),!0}return!1}function nv(n){var i=Z(n.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){n.blockedOn=i,Hi(n.priority,function(){$_(s)});return}}else if(i===31){if(i=f(s),i!==null){n.blockedOn=i,Hi(n.priority,function(){$_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=ld(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);cf=c,s.target.dispatchEvent(c),cf=null}else return i=oe(s),i!==null&&J_(i),n.blockedOn=s,!1;i.shift()}return!0}function iv(n,i,s){nu(n)&&s.delete(i)}function e1(){ud=!1,hs!==null&&nu(hs)&&(hs=null),ds!==null&&nu(ds)&&(ds=null),ps!==null&&nu(ps)&&(ps=null),gl.forEach(iv),_l.forEach(iv)}function iu(n,i){n.blockedOn===i&&(n.blockedOn=null,ud||(ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,e1)))}var au=null;function av(n){au!==n&&(au=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){au===n&&(au=null);for(var i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(cd(c||s)===null)continue;break}var m=oe(s);m!==null&&(n.splice(i,3),i-=3,lh(m,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function Gr(n){function i(k){return iu(k,n)}hs!==null&&iu(hs,n),ds!==null&&iu(ds,n),ps!==null&&iu(ps,n),gl.forEach(i),_l.forEach(i);for(var s=0;s<ms.length;s++){var c=ms[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)nv(s),s.blockedOn===null&&ms.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],m=s[c+1],M=p[_n]||null;if(typeof m=="function")M||av(s);else if(M){var C=null;if(m&&m.hasAttribute("formAction")){if(p=m,M=m[_n]||null)C=M.formAction;else if(cd(p)!==null)continue}else C=M.action;typeof C=="function"?s[c+1]=C:(s.splice(c,3),c-=3),av(s)}}}function sv(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return p=M})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function fd(n){this._internalRoot=n}su.prototype.render=fd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,c=yi();Z_(s,c,n,i,null,null)},su.prototype.unmount=fd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Z_(n.current,2,null,n,null,null),Fc(),i[ea]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var i=Fi();n={blockedOn:null,target:n,priority:i};for(var s=0;s<ms.length&&i!==0&&i<ms[s].priority;s++);ms.splice(s,0,n),s===0&&nv(n)}};var rv=e.version;if(rv!=="19.2.7")throw Error(a(527,rv,"19.2.7"));K.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=h(i),n=n!==null?_(n):null,n=n===null?null:n.stateNode,n};var t1={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Ae=ru.inject(t1),Ce=ru}catch{}}return yl.createRoot=function(n,i){if(!r(n))throw Error(a(299));var s=!1,c="",p=d0,m=p0,M=m0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=Y_(n,1,!1,null,null,s,c,null,p,m,M,sv),n[ea]=i.current,Wh(n),new fd(i)},yl.hydrateRoot=function(n,i,s){if(!r(n))throw Error(a(299));var c=!1,p="",m=d0,M=p0,C=m0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=Y_(n,1,!0,i,s??null,c,p,k,m,M,C,sv),i.context=K_(null),s=i.current,c=yi(),c=di(c),p=es(c),p.callback=null,ts(s,p,c),s=c,i.current.lanes=s,Se(i,s),sa(i),n[ea]=i.current,Wh(n),new su(i)},yl.version="19.2.7",yl}var gv;function f1(){if(gv)return pd.exports;gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),pd.exports=u1(),pd.exports}var h1=f1();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zx=(...o)=>o.filter((e,t,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=tn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:r="",children:l,iconNode:u,...f},d)=>tn.createElement("svg",{ref:d,...p1,width:e,height:e,stroke:o,strokeWidth:a?Number(t)*24/Number(e):t,className:Zx("lucide",r),...f},[...u.map(([h,_])=>tn.createElement(h,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=(o,e)=>{const t=tn.forwardRef(({className:a,...r},l)=>tn.createElement(m1,{ref:l,iconNode:e,className:Zx(`lucide-${d1(o)}`,a),...r}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Xn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=Xn("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=Xn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Xn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Xn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=Xn("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=Xn("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Xn("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Xn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=Xn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=Xn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=Xn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=Xn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Xn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=Xn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Xn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=Xn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function S1({disabled:o=!1}){const e=tn.useRef(null),t=tn.useRef(null),a=(u,f)=>{window.dispatchEvent(new CustomEvent("isla:move",{detail:{x:u,z:f}}))},r=(u,f)=>{const d=e.current,h=t.current;if(!d||!h||o)return;const _=d.getBoundingClientRect(),g=u-(_.left+_.width/2),v=f-(_.top+_.height/2),y=Math.hypot(g,v),E=_.width*.31,T=Math.min(y,E),S=y>0?g/y:0,x=y>0?v/y:0;h.style.transform=`translate(${S*T}px, ${x*T}px)`,a(S*(T/E),x*(T/E))},l=()=>{t.current&&(t.current.style.transform="translate(0, 0)"),a(0,0)};return H.jsxs("div",{ref:e,className:"game-control joystick-base",onPointerDown:u=>{u.currentTarget.setPointerCapture(u.pointerId),r(u.clientX,u.clientY)},onPointerMove:u=>{u.currentTarget.hasPointerCapture(u.pointerId)&&r(u.clientX,u.clientY)},onPointerUp:l,onPointerCancel:l,"aria-label":"Joystick de movimiento",children:[H.jsx("div",{className:"joystick-ring"}),H.jsx("div",{ref:t,className:"joystick-stick"})]})}function Ml({title:o,eyebrow:e,children:t,onClose:a,wide:r=!1}){return H.jsx("div",{className:"modal-backdrop",role:"dialog","aria-modal":"true","aria-label":o,children:H.jsxs("section",{className:`modal-card ${r?"modal-wide":""}`,children:[H.jsxs("header",{className:"modal-header",children:[H.jsxs("div",{children:[e&&H.jsx("p",{className:"eyebrow",children:e}),H.jsx("h2",{children:o})]}),H.jsx("button",{className:"icon-button",onClick:a,"aria-label":"Cerrar",children:H.jsx(y1,{size:21})})]}),H.jsx("div",{className:"modal-content",children:t})]})})}const Ua="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf",ou=[{id:"lala",name:"Lala",role:"Torbellino del festival",special:"Baile del pavo real",description:'Una chica que es un torbellino. Su baile "Pavo real" fue tan mítico que terminó ligando hasta con 4 chicos durante el fin de semana.',color:"#ef7435",accent:"#f6c66e",modelUrl:`${Ua}/Michelle.glb`,scale:1},{id:"lety",name:"Lety",role:"Reina del chillout",special:"Mi chillout, mis normas",description:"Nos cuidó a todos, soltó su frase legendaria y racionó las golosinas para que llegaran hasta el domingo.",color:"#0b5964",accent:"#f5ead2",modelUrl:`${Ua}/kira.glb`,scale:1},{id:"isa",name:"Isa",role:"Flechazo del sábado",special:"No perdió el tiempo",description:"Llegó el sábado y no perdió el tiempo: comió, bebió y ligó con el guapo del festival, un malagueño muy vacilón y gracioso.",color:"#2f8f83",accent:"#ffd166",modelUrl:`${Ua}/Michelle.glb`,scale:1},{id:"patri",name:"Patri",role:"Intensa y graciosísima",special:"Piripi power",description:"Loquita por naturaleza, despistada e intensa, pero más graciosa que nadie. El viernes iba tan piripi que casi no recordaba cómo se llamaba.",color:"#c94f7c",accent:"#ffd9ec",modelUrl:`${Ua}/kira.glb`,scale:1},{id:"luis",name:"Luis",role:"Vacile malagueño",special:"Bajar el ego",description:"El malagueño gracioso y vacilón cuyo gran objetivo fue bajarle el ego a Aitor con bromas usando una cinta métrica de costura y un cenicero.",color:"#3568a8",accent:"#ffc16b",modelUrl:`${Ua}/Soldier.glb`,scale:1},{id:"fran",name:"Fran",role:"Calma con tormenta",special:"Resurgir",description:"Un tío tranquilo y torbellino a la vez. El sábado consiguió que Aitor resurgiera de las cenizas.",color:"#4f6b52",accent:"#d8e5b6",modelUrl:`${Ua}/readyplayer.me.glb`,scale:1},{id:"clara",name:"Clara",role:"Dueña de la pista",special:"Tomar el festival",description:"Al principio parecía modosita, pero el resumen real fue claro: se hizo con el festival y no paró de bailar en todo el fin de semana.",color:"#8d5dd6",accent:"#f3dcff",modelUrl:`${Ua}/Michelle.glb`,scale:1.03},{id:"jesucristo",name:"Jesucristo",role:"Pelazo sagrado",special:"Aura del buen rollo",description:"Nuestro amigo con el pelo más bonito del festival: media melena morena preciosa, majo, agradable y con una vibra impecable.",color:"#7c4a36",accent:"#ffd6b3",modelUrl:`${Ua}/readyplayer.me.glb`,scale:1},{id:"aitor",name:"Aitor",role:"Loquito desenjaulado",special:"Modo desatado",description:"Un loquito desenjaulado que empieza a disfrutar de la vida junto a Patri. Quiso que todos estuvieran cómodos, relajados y felices, y se pegó una panzada a bailar fuera de lo normal.",color:"#d14e2f",accent:"#ffe0bf",modelUrl:`${Ua}/Soldier.glb`,scale:1.02}],hi=[{id:"golosinas",label:"Las golosinas racionadas",zone:"Chillout",description:"La reserva estratégica de Lety para sobrevivir hasta el domingo sin motín."},{id:"papas_revolconas",label:"Papas revolconas de la barra",zone:"Barra",description:"Ración caliente recogida en la barra para recuperar energía."},{id:"llave_water",label:"La llave del water",zone:"Water",description:"Llave escondida en la zona del water estilo Moraleja."},{id:"carpeta_rosa",label:"Carpeta rosa de los polvos mágicos",zone:"Chillout",description:"Carpeta rosa misteriosa con polvos mágicos de festival."},{id:"pistola_agua",label:"Pistola de agua",zone:"Playa",description:"Arma refrescante para sobrevivir al calor de la isla."},{id:"tienda_sin_palos",label:"Tienda de campaña sin palos",zone:"Camping",description:"La tienda imposible que aguanta como puede."},{id:"colchon_pinchado",label:"Colchón pinchado",zone:"Camping",description:"Un clásico de festival: el colchón que prometía descanso y dio suelo."},{id:"barca_remo",label:"Barca de remo",zone:"Embarque",description:"La barca para moverse por el pantano y volver a la isla."},{id:"dj_bueno",label:"DJ Bueno",zone:"Escenario",description:"El DJ que salva la noche cuando entra el tema correcto."},{id:"dj_malo",label:"DJ Malo",zone:"Escenario",description:"El DJ que pincha raro y provoca caos controlado."},{id:"hamaca",label:"Hamaca del chillout",zone:"Chillout",description:"La hamaca para intentar descansar antes de volver a bailar."},{id:"fuente",label:"Fuente de la isla",zone:"Plaza",description:"Punto de referencia con agua y luz en mitad del mapa."},{id:"pole_dance",label:"Barra de pole dance",zone:"Pista",description:"Barra metálica para el momento más inesperado de la pista."},{id:"cinta",label:"La cinta métrica",zone:"Barra",description:"Una de las armas del vacile con la que Luis intentó bajarle el ego a Aitor."},{id:"cenicero",label:"El cenicero del malagueño",zone:"Playa",description:"El otro objeto clave de las bromas malagueñas del fin de semana."},{id:"pulsera",label:"La pulsera cashless",zone:"Taquilla",description:"Todavía parece tener saldo para una última ronda en la isla."},{id:"mapa",label:"El mapa del embarque",zone:"Embarque",description:"La ruta que llevó al grupo a la aventura más surrealista del pantano."},{id:"abanico",label:"El abanico de la pista",zone:"Escenario",description:"El testigo silencioso de Clara y de la panzada de baile de Aitor."},{id:"melena",label:"El recuerdo del pelazo",zone:"Mirador",description:"Una reliquia simbólica del pelo más bonito de todo el festival."},{id:"foto",label:"La foto del amanecer",zone:"Muralla",description:"La prueba definitiva de que el grupo exprimió la isla hasta el final."}],bv={quality:"high",sound:!0,cameraShake:!0};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="180",M1=0,Av=1,E1=2,Qx=1,Jx=2,Ha=3,ca=0,ti=1,Oi=2,Xa=0,po=1,lp=2,wv=3,Rv=4,T1=5,ar=100,b1=101,A1=102,w1=103,R1=104,C1=200,D1=201,L1=202,N1=203,cp=204,up=205,U1=206,O1=207,I1=208,P1=209,z1=210,B1=211,F1=212,H1=213,V1=214,fp=0,hp=1,dp=2,_o=3,pp=4,mp=5,gp=6,_p=7,$x=0,G1=1,k1=2,ws=0,ey=1,ty=2,ny=3,sm=4,iy=5,ay=6,sy=7,Cv="attached",X1="detached",ry=300,vo=301,xo=302,vp=303,xp=304,nf=306,Cs=1e3,As=1001,qu=1002,ni=1003,oy=1004,Pl=1005,Ei=1006,Hu=1007,Va=1008,ua=1009,ly=1010,cy=1011,Vl=1012,rm=1013,rr=1014,Yi=1015,ja=1016,om=1017,lm=1018,Gl=1020,uy=35902,fy=35899,hy=1021,dy=1022,zi=1023,kl=1026,Xl=1027,cm=1028,um=1029,py=1030,fm=1031,hm=1033,Vu=33776,Gu=33777,ku=33778,Xu=33779,yp=35840,Sp=35841,Mp=35842,Ep=35843,Tp=36196,bp=37492,Ap=37496,wp=37808,Rp=37809,Cp=37810,Dp=37811,Lp=37812,Np=37813,Up=37814,Op=37815,Ip=37816,Pp=37817,zp=37818,Bp=37819,Fp=37820,Hp=37821,Vp=36492,Gp=36494,kp=36495,Xp=36283,jp=36284,Wp=36285,qp=36286,j1=2200,W1=2201,q1=2202,jl=2300,Wl=2301,Sd=2302,uo=2400,fo=2401,Yu=2402,dm=2500,Y1=2501,K1=0,my=1,Yp=2,Z1=3200,Q1=3201,gy=0,J1=1,bs="",wn="srgb",ai="srgb-linear",Ku="linear",Yt="srgb",kr=7680,Dv=519,$1=512,eE=513,tE=514,_y=515,nE=516,iE=517,aE=518,sE=519,Kp=35044,Lv="300 es",la=2e3,Zu=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const l=r.indexOf(t);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nv=1234567;const Bl=Math.PI/180,yo=180/Math.PI;function Ki(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Yn[o&255]+Yn[o>>8&255]+Yn[o>>16&255]+Yn[o>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]).toLowerCase()}function At(o,e,t){return Math.max(e,Math.min(t,o))}function pm(o,e){return(o%e+e)%e}function rE(o,e,t,a,r){return a+(o-e)*(r-a)/(t-e)}function oE(o,e,t){return o!==e?(t-o)/(e-o):0}function Fl(o,e,t){return(1-t)*o+t*e}function lE(o,e,t,a){return Fl(o,e,1-Math.exp(-t*a))}function cE(o,e=1){return e-Math.abs(pm(o,e*2)-e)}function uE(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function fE(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function hE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function dE(o,e){return o+Math.random()*(e-o)}function pE(o){return o*(.5-Math.random())}function mE(o){o!==void 0&&(Nv=o);let e=Nv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gE(o){return o*Bl}function _E(o){return o*yo}function vE(o){return(o&o-1)===0&&o!==0}function xE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function SE(o,e,t,a,r){const l=Math.cos,u=Math.sin,f=l(t/2),d=u(t/2),h=l((e+a)/2),_=u((e+a)/2),g=l((e-a)/2),v=u((e-a)/2),y=l((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(f*_,d*g,d*v,f*h);break;case"YZY":o.set(d*v,f*_,d*g,f*h);break;case"ZXZ":o.set(d*g,d*v,f*_,f*h);break;case"XZX":o.set(f*_,d*E,d*y,f*h);break;case"YXY":o.set(d*y,f*_,d*E,f*h);break;case"ZYZ":o.set(d*E,d*y,f*_,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const co={DEG2RAD:Bl,RAD2DEG:yo,generateUUID:Ki,clamp:At,euclideanModulo:pm,mapLinear:rE,inverseLerp:oE,lerp:Fl,damp:lE,pingpong:cE,smoothstep:uE,smootherstep:fE,randInt:hE,randFloat:dE,randFloatSpread:pE,seededRandom:mE,degToRad:gE,radToDeg:_E,isPowerOfTwo:vE,ceilPowerOfTwo:xE,floorPowerOfTwo:yE,setQuaternionFromProperEuler:SE,normalize:Kt,denormalize:qi};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,r=e.elements;return this.x=r[0]*t+r[3]*a+r[6],this.y=r[1]*t+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),r=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*r+e.x,this.y=l*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,t=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=r}static slerpFlat(e,t,a,r,l,u,f){let d=a[r+0],h=a[r+1],_=a[r+2],g=a[r+3];const v=l[u+0],y=l[u+1],E=l[u+2],T=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(f===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=T;return}if(g!==T||d!==v||h!==y||_!==E){let S=1-f;const x=d*v+h*y+_*E+g*T,D=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const O=Math.sqrt(N),I=Math.atan2(O,x*D);S=Math.sin(S*I)/O,f=Math.sin(f*I)/O}const R=f*D;if(d=d*S+v*R,h=h*S+y*R,_=_*S+E*R,g=g*S+T*R,S===1-f){const O=1/Math.sqrt(d*d+h*h+_*_+g*g);d*=O,h*=O,_*=O,g*=O}}e[t]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,a,r,l,u){const f=a[r],d=a[r+1],h=a[r+2],_=a[r+3],g=l[u],v=l[u+1],y=l[u+2],E=l[u+3];return e[t]=f*E+_*g+d*y-h*v,e[t+1]=d*E+_*v+h*g-f*y,e[t+2]=h*E+_*y+f*v-d*g,e[t+3]=_*E-f*g-d*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,r){return this._x=e,this._y=t,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,r=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(a/2),_=f(r/2),g=f(l/2),v=d(a/2),y=d(r/2),E=d(l/2);switch(u){case"XYZ":this._x=v*_*g+h*y*E,this._y=h*y*g-v*_*E,this._z=h*_*E+v*y*g,this._w=h*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+h*y*E,this._y=h*y*g-v*_*E,this._z=h*_*E-v*y*g,this._w=h*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-h*y*E,this._y=h*y*g+v*_*E,this._z=h*_*E+v*y*g,this._w=h*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-h*y*E,this._y=h*y*g+v*_*E,this._z=h*_*E-v*y*g,this._w=h*_*g+v*y*E;break;case"YZX":this._x=v*_*g+h*y*E,this._y=h*y*g+v*_*E,this._z=h*_*E-v*y*g,this._w=h*_*g-v*y*E;break;case"XZY":this._x=v*_*g-h*y*E,this._y=h*y*g-v*_*E,this._z=h*_*E+v*y*g,this._w=h*_*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],r=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],_=t[6],g=t[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-d)*y,this._y=(l-h)*y,this._z=(u-r)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-d)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(l+h)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(l-h)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(u-r)/y,this._x=(l+h)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,t/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,r=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,_=t._w;return this._x=a*_+u*f+r*h-l*d,this._y=r*_+u*d+l*f-a*h,this._z=l*_+u*h+a*d-r*f,this._w=u*_-a*f-r*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,r=this._y,l=this._z,u=this._w;let f=u*e._w+a*e._x+r*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*a+t*this._x,this._y=y*r+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),_=Math.atan2(h,f),g=Math.sin((1-t)*_)/h,v=Math.sin(t*_)/h;return this._w=u*g+this._w*v,this._x=a*g+this._x*v,this._y=r*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,a=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*r,this.y=l[1]*t+l[4]*a+l[7]*r,this.z=l[2]*t+l[5]*a+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,r=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,r=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*r-f*a),_=2*(f*t-l*r),g=2*(l*a-u*t);return this.x=t+d*h+u*g-f*_,this.y=a+d*_+f*h-l*g,this.z=r+d*g+l*_-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*r,this.y=l[1]*t+l[5]*a+l[9]*r,this.z=l[2]*t+l[6]*a+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,r=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=r*d-l*f,this.y=l*u-a*d,this.z=a*f-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return t*t+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const r=Math.sin(t)*e;return this.x=r*Math.sin(a),this.y=Math.cos(t)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new F,Uv=new Zi;class vt{constructor(e,t,a,r,l,u,f,d,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,r,l,u,f,d,h)}set(e,t,a,r,l,u,f,d,h){const _=this.elements;return _[0]=e,_[1]=r,_[2]=f,_[3]=t,_[4]=l,_[5]=d,_[6]=a,_[7]=u,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,r=t.elements,l=this.elements,u=a[0],f=a[3],d=a[6],h=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],T=r[0],S=r[3],x=r[6],D=r[1],N=r[4],R=r[7],O=r[2],I=r[5],U=r[8];return l[0]=u*T+f*D+d*O,l[3]=u*S+f*N+d*I,l[6]=u*x+f*R+d*U,l[1]=h*T+_*D+g*O,l[4]=h*S+_*N+g*I,l[7]=h*x+_*R+g*U,l[2]=v*T+y*D+E*O,l[5]=v*S+y*N+E*I,l[8]=v*x+y*R+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],_=e[8];return t*u*_-t*f*h-a*l*_+a*f*d+r*l*h-r*u*d}invert(){const e=this.elements,t=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],_=e[8],g=_*u-f*h,v=f*d-_*l,y=h*l-u*d,E=t*g+a*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(r*h-_*a)*T,e[2]=(f*a-r*u)*T,e[3]=v*T,e[4]=(_*t-r*d)*T,e[5]=(r*l-f*t)*T,e[6]=y*T,e[7]=(a*d-h*t)*T,e[8]=(u*t-a*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,r,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(a*d,a*h,-a*(d*u+h*f)+u+e,-r*h,r*d,-r*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ed.makeScale(e,t)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let r=0;r<9;r++)if(t[r]!==a[r])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new vt;function vy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ql(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ME(){const o=ql("canvas");return o.style.display="block",o}const Ov={};function Yl(o){o in Ov||(Ov[o]=!0,console.warn(o))}function EE(o,e,t){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const Iv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TE(){const o={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Yt&&(r.r=Wa(r.r),r.g=Wa(r.g),r.b=Wa(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(r.r=mo(r.r),r.g=mo(r.g),r.b=mo(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bs?Ku:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Yl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Yl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ai]:{primaries:e,whitePoint:a,transfer:Ku,toXYZ:Iv,fromXYZ:Pv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:Iv,fromXYZ:Pv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),o}const Ut=TE();function Wa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Xr;class bE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Xr===void 0&&(Xr=ql("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Xr}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ql("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Wa(l[u]/255)*255;return a.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Wa(t[a]/255)*255):t[a]=Wa(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class mm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(Td(r[u].image)):l.push(Td(r[u]))}else l=Td(r);a.url=l}return t||(e.images[this.uuid]=a),a}}function Td(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wE=0;const bd=new F;class Rn extends or{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,a=As,r=As,l=Ei,u=Va,f=zi,d=ua,h=Rn.DEFAULT_ANISOTROPY,_=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ki(),this.name="",this.source=new mm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ry)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=ry;Rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,a=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,r){return this.x=e,this.y=t,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,r=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*r+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,r,l;const d=e.elements,h=d[0],_=d[4],g=d[8],v=d[1],y=d[5],E=d[9],T=d[2],S=d[6],x=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,R=(y+1)/2,O=(x+1)/2,I=(_+v)/4,U=(g+T)/4,G=(E+S)/4;return N>R&&N>O?N<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(N),r=I/a,l=U/a):R>O?R<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(R),a=I/r,l=G/r):O<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(O),a=U/l,r=G/l),this.set(a,r,l,t),this}let D=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(g-T)/D,this.z=(v-_)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends or{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:a.depth},l=new Rn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new mm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends RE{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class xy extends Rn{constructor(e=null,t=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CE extends Rn{constructor(e=null,t=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Xi):Xi.fromBufferAttribute(l,u),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),lu.copy(a.boundingBox)),lu.applyMatrix4(e.matrixWorld),this.union(lu)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),cu.subVectors(this.max,El),jr.subVectors(e.a,El),Wr.subVectors(e.b,El),qr.subVectors(e.c,El),_s.subVectors(Wr,jr),vs.subVectors(qr,Wr),Zs.subVectors(jr,qr);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-Zs.z,Zs.y,_s.z,0,-_s.x,vs.z,0,-vs.x,Zs.z,0,-Zs.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-Zs.y,Zs.x,0];return!Ad(t,jr,Wr,qr,cu)||(t=[1,0,0,0,1,0,0,0,1],!Ad(t,jr,Wr,qr,cu))?!1:(uu.crossVectors(_s,vs),t=[uu.x,uu.y,uu.z],Ad(t,jr,Wr,qr,cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new F,new F,new F,new F,new F,new F,new F,new F],Xi=new F,lu=new ha,jr=new F,Wr=new F,qr=new F,_s=new F,vs=new F,Zs=new F,El=new F,cu=new F,uu=new F,Qs=new F;function Ad(o,e,t,a,r){for(let l=0,u=o.length-3;l<=u;l+=3){Qs.fromArray(o,l);const f=r.x*Math.abs(Qs.x)+r.y*Math.abs(Qs.y)+r.z*Math.abs(Qs.z),d=e.dot(Qs),h=t.dot(Qs),_=a.dot(Qs);if(Math.max(-Math.max(d,h,_),Math.min(d,h,_))>f)return!1}return!0}const DE=new ha,Tl=new F,wd=new F;class da{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):DE.setFromPoints(e).getCenter(a);let r=0;for(let l=0,u=e.length;l<u;l++)r=Math.max(r,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const t=Tl.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),r=(a-this.radius)*.5;this.center.addScaledVector(Tl,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(wd)),this.expandByPoint(Tl.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ia=new F,Rd=new F,fu=new F,xs=new F,Cd=new F,hu=new F,Dd=new F;class Zl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ia)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ia.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ia.copy(this.origin).addScaledVector(this.direction,t),Ia.distanceToSquared(e))}distanceSqToSegment(e,t,a,r){Rd.copy(e).add(t).multiplyScalar(.5),fu.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(Rd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(fu),f=xs.dot(this.direction),d=-xs.dot(fu),h=xs.lengthSq(),_=Math.abs(1-u*u);let g,v,y,E;if(_>0)if(g=u*d-f,v=u*f-d,E=l*_,g>=0)if(v>=-E)if(v<=E){const T=1/_;g*=T,v*=T,y=g*(g+u*v+2*f)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+h):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Rd).addScaledVector(fu,v),y}intersectSphere(e,t){Ia.subVectors(e.center,this.origin);const a=Ia.dot(this.direction),r=Ia.dot(Ia)-a*a,l=e.radius*e.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,r,l,u,f,d;const h=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,t)}intersectsBox(e){return this.intersectBox(e,Ia)!==null}intersectTriangle(e,t,a,r,l){Cd.subVectors(t,e),hu.subVectors(a,e),Dd.crossVectors(Cd,hu);let u=this.direction.dot(Dd),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;xs.subVectors(this.origin,e);const d=f*this.direction.dot(hu.crossVectors(xs,hu));if(d<0)return null;const h=f*this.direction.dot(Cd.cross(xs));if(h<0||d+h>u)return null;const _=-f*xs.dot(Dd);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,a,r,l,u,f,d,h,_,g,v,y,E,T,S){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,r,l,u,f,d,h,_,g,v,y,E,T,S)}set(e,t,a,r,l,u,f,d,h,_,g,v,y,E,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=a,x[12]=r,x[1]=l,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),l=1/Yr.setFromMatrixColumn(e,1).length(),u=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,r=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(r),h=Math.sin(r),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*_,y=u*g,E=f*_,T=f*g;t[0]=d*_,t[4]=-d*g,t[8]=h,t[1]=y+E*h,t[5]=v-T*h,t[9]=-f*d,t[2]=T-v*h,t[6]=E+y*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*_,y=d*g,E=h*_,T=h*g;t[0]=v+T*f,t[4]=E*f-y,t[8]=u*h,t[1]=u*g,t[5]=u*_,t[9]=-f,t[2]=y*f-E,t[6]=T+v*f,t[10]=u*d}else if(e.order==="ZXY"){const v=d*_,y=d*g,E=h*_,T=h*g;t[0]=v-T*f,t[4]=-u*g,t[8]=E+y*f,t[1]=y+E*f,t[5]=u*_,t[9]=T-v*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const v=u*_,y=u*g,E=f*_,T=f*g;t[0]=d*_,t[4]=E*h-y,t[8]=v*h+T,t[1]=d*g,t[5]=T*h+v,t[9]=y*h-E,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*h,E=f*d,T=f*h;t[0]=d*_,t[4]=T-v*g,t[8]=E*g+y,t[1]=g,t[5]=u*_,t[9]=-f*_,t[2]=-h*_,t[6]=y*g+E,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*d,y=u*h,E=f*d,T=f*h;t[0]=d*_,t[4]=-g,t[8]=h*_,t[1]=v*g+T,t[5]=u*_,t[9]=y*g-E,t[2]=E*g-y,t[6]=f*_,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,NE)}lookAt(e,t,a){const r=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ys.crossVectors(a,Si),ys.lengthSq()===0&&(Math.abs(a.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ys.crossVectors(a,Si)),ys.normalize(),du.crossVectors(Si,ys),r[0]=ys.x,r[4]=du.x,r[8]=Si.x,r[1]=ys.y,r[5]=du.y,r[9]=Si.y,r[2]=ys.z,r[6]=du.z,r[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,r=t.elements,l=this.elements,u=a[0],f=a[4],d=a[8],h=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],T=a[6],S=a[10],x=a[14],D=a[3],N=a[7],R=a[11],O=a[15],I=r[0],U=r[4],G=r[8],b=r[12],A=r[1],V=r[5],W=r[9],ae=r[13],ue=r[2],re=r[6],B=r[10],K=r[14],Y=r[3],de=r[7],Te=r[11],z=r[15];return l[0]=u*I+f*A+d*ue+h*Y,l[4]=u*U+f*V+d*re+h*de,l[8]=u*G+f*W+d*B+h*Te,l[12]=u*b+f*ae+d*K+h*z,l[1]=_*I+g*A+v*ue+y*Y,l[5]=_*U+g*V+v*re+y*de,l[9]=_*G+g*W+v*B+y*Te,l[13]=_*b+g*ae+v*K+y*z,l[2]=E*I+T*A+S*ue+x*Y,l[6]=E*U+T*V+S*re+x*de,l[10]=E*G+T*W+S*B+x*Te,l[14]=E*b+T*ae+S*K+x*z,l[3]=D*I+N*A+R*ue+O*Y,l[7]=D*U+N*V+R*re+O*de,l[11]=D*G+N*W+R*B+O*Te,l[15]=D*b+N*ae+R*K+O*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],r=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],_=e[2],g=e[6],v=e[10],y=e[14],E=e[3],T=e[7],S=e[11],x=e[15];return E*(+l*d*g-r*h*g-l*f*v+a*h*v+r*f*y-a*d*y)+T*(+t*d*y-t*h*v+l*u*v-r*u*y+r*h*_-l*d*_)+S*(+t*h*g-t*f*y-l*u*g+a*u*y+l*f*_-a*h*_)+x*(-r*f*_-t*d*g+t*f*v+r*u*g-a*u*v+a*d*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],_=e[8],g=e[9],v=e[10],y=e[11],E=e[12],T=e[13],S=e[14],x=e[15],D=g*S*h-T*v*h+T*d*y-f*S*y-g*d*x+f*v*x,N=E*v*h-_*S*h-E*d*y+u*S*y+_*d*x-u*v*x,R=_*T*h-E*g*h+E*f*y-u*T*y-_*f*x+u*g*x,O=E*g*d-_*T*d-E*f*v+u*T*v+_*f*S-u*g*S,I=t*D+a*N+r*R+l*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=D*U,e[1]=(T*v*l-g*S*l-T*r*y+a*S*y+g*r*x-a*v*x)*U,e[2]=(f*S*l-T*d*l+T*r*h-a*S*h-f*r*x+a*d*x)*U,e[3]=(g*d*l-f*v*l-g*r*h+a*v*h+f*r*y-a*d*y)*U,e[4]=N*U,e[5]=(_*S*l-E*v*l+E*r*y-t*S*y-_*r*x+t*v*x)*U,e[6]=(E*d*l-u*S*l-E*r*h+t*S*h+u*r*x-t*d*x)*U,e[7]=(u*v*l-_*d*l+_*r*h-t*v*h-u*r*y+t*d*y)*U,e[8]=R*U,e[9]=(E*g*l-_*T*l-E*a*y+t*T*y+_*a*x-t*g*x)*U,e[10]=(u*T*l-E*f*l+E*a*h-t*T*h-u*a*x+t*f*x)*U,e[11]=(_*f*l-u*g*l-_*a*h+t*g*h+u*a*y-t*f*y)*U,e[12]=O*U,e[13]=(_*T*r-E*g*r+E*a*v-t*T*v-_*a*S+t*g*S)*U,e[14]=(E*f*r-u*T*r-E*a*d+t*T*d+u*a*S-t*f*S)*U,e[15]=(u*g*r-_*f*r+_*a*d-t*g*d-u*a*v+t*f*v)*U,this}scale(e){const t=this.elements,a=e.x,r=e.y,l=e.z;return t[0]*=a,t[4]*=r,t[8]*=l,t[1]*=a,t[5]*=r,t[9]*=l,t[2]*=a,t[6]*=r,t[10]*=l,t[3]*=a,t[7]*=r,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,r))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),r=Math.sin(t),l=1-a,u=e.x,f=e.y,d=e.z,h=l*u,_=l*f;return this.set(h*u+a,h*f-r*d,h*d+r*f,0,h*f+r*d,_*f+a,_*d-r*u,0,h*d-r*f,_*d+r*u,l*d*d+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,r,l,u){return this.set(1,a,l,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,a){const r=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,_=u+u,g=f+f,v=l*h,y=l*_,E=l*g,T=u*_,S=u*g,x=f*g,D=d*h,N=d*_,R=d*g,O=a.x,I=a.y,U=a.z;return r[0]=(1-(T+x))*O,r[1]=(y+R)*O,r[2]=(E-N)*O,r[3]=0,r[4]=(y-R)*I,r[5]=(1-(v+x))*I,r[6]=(S+D)*I,r[7]=0,r[8]=(E+N)*U,r[9]=(S-D)*U,r[10]=(1-(v+T))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,a){const r=this.elements;let l=Yr.set(r[0],r[1],r[2]).length();const u=Yr.set(r[4],r[5],r[6]).length(),f=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),e.x=r[12],e.y=r[13],e.z=r[14],ji.copy(this);const h=1/l,_=1/u,g=1/f;return ji.elements[0]*=h,ji.elements[1]*=h,ji.elements[2]*=h,ji.elements[4]*=_,ji.elements[5]*=_,ji.elements[6]*=_,ji.elements[8]*=g,ji.elements[9]*=g,ji.elements[10]*=g,t.setFromRotationMatrix(ji),a.x=l,a.y=u,a.z=f,this}makePerspective(e,t,a,r,l,u,f=la,d=!1){const h=this.elements,_=2*l/(t-e),g=2*l/(a-r),v=(t+e)/(t-e),y=(a+r)/(a-r);let E,T;if(d)E=l/(u-l),T=u*l/(u-l);else if(f===la)E=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===Zu)E=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,a,r,l,u,f=la,d=!1){const h=this.elements,_=2/(t-e),g=2/(a-r),v=-(t+e)/(t-e),y=-(a+r)/(a-r);let E,T;if(d)E=1/(u-l),T=u/(u-l);else if(f===la)E=-2/(u-l),T=-(u+l)/(u-l);else if(f===Zu)E=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let r=0;r<16;r++)if(t[r]!==a[r])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const Yr=new F,ji=new dt,LE=new F(0,0,0),NE=new F(1,1,1),ys=new F,du=new F,Si=new F,zv=new dt,Bv=new Zi;class fa{constructor(e=0,t=0,a=0,r=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,r=this._order){return this._x=e,this._y=t,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const r=e.elements,l=r[0],u=r[4],f=r[8],d=r[1],h=r[5],_=r[9],g=r[2],v=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zv,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UE=0;const Fv=new F,Kr=new Zi,Pa=new dt,pu=new F,bl=new F,OE=new F,IE=new Zi,Hv=new F(1,0,0),Vv=new F(0,1,0),Gv=new F(0,0,1),kv={type:"added"},PE={type:"removed"},Zr={type:"childadded",child:null},Ld={type:"childremoved",child:null};class fn extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new F,t=new fa,a=new Zi,r=new F(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new vt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Hv,e)}rotateY(e){return this.rotateOnAxis(Vv,e)}rotateZ(e){return this.rotateOnAxis(Gv,e)}translateOnAxis(e,t){return Fv.copy(e).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hv,e)}translateY(e){return this.translateOnAxis(Vv,e)}translateZ(e){return this.translateOnAxis(Gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?pu.copy(e):pu.set(e,t,a);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(bl,pu,this.up):Pa.lookAt(pu,bl,this.up),this.quaternion.setFromRotationMatrix(Pa),r&&(Pa.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Pa),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kv),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PE),Ld.child=e,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kv),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,IE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,_=d.length;h<_;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));r.material=f}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(f){const d=[];for(const h in f){const _=f[h];delete _.metadata,d.push(_)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}fn.DEFAULT_UP=new F(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new F,za=new F,Nd=new F,Ba=new F,Qr=new F,Jr=new F,Xv=new F,Ud=new F,Od=new F,Id=new F,Pd=new Pt,zd=new Pt,Bd=new Pt;class Ii{constructor(e=new F,t=new F,a=new F){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,r){r.subVectors(a,t),Wi.subVectors(e,t),r.cross(Wi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,t,a,r,l){Wi.subVectors(r,t),za.subVectors(a,t),Nd.subVectors(e,t);const u=Wi.dot(Wi),f=Wi.dot(za),d=Wi.dot(Nd),h=za.dot(za),_=za.dot(Nd),g=u*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(h*d-f*_)*v,E=(u*_-f*d)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,a,r){return this.getBarycoord(e,t,a,r,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(e,t,a,r,l,u,f,d){return this.getBarycoord(e,t,a,r,Ba)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Ba.x),d.addScaledVector(u,Ba.y),d.addScaledVector(f,Ba.z),d)}static getInterpolatedAttribute(e,t,a,r,l,u){return Pd.setScalar(0),zd.setScalar(0),Bd.setScalar(0),Pd.fromBufferAttribute(e,t),zd.fromBufferAttribute(e,a),Bd.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Pd,l.x),u.addScaledVector(zd,l.y),u.addScaledVector(Bd,l.z),u}static isFrontFacing(e,t,a,r){return Wi.subVectors(a,t),za.subVectors(e,t),Wi.cross(za).dot(r)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,r){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,a,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),za.subVectors(this.a,this.b),Wi.cross(za).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,r,l){return Ii.getInterpolation(e,this.a,this.b,this.c,t,a,r,l)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,r=this.b,l=this.c;let u,f;Qr.subVectors(r,a),Jr.subVectors(l,a),Ud.subVectors(e,a);const d=Qr.dot(Ud),h=Jr.dot(Ud);if(d<=0&&h<=0)return t.copy(a);Od.subVectors(e,r);const _=Qr.dot(Od),g=Jr.dot(Od);if(_>=0&&g<=_)return t.copy(r);const v=d*g-_*h;if(v<=0&&d>=0&&_<=0)return u=d/(d-_),t.copy(a).addScaledVector(Qr,u);Id.subVectors(e,l);const y=Qr.dot(Id),E=Jr.dot(Id);if(E>=0&&y<=E)return t.copy(l);const T=y*h-d*E;if(T<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(a).addScaledVector(Jr,f);const S=_*E-y*g;if(S<=0&&g-_>=0&&y-E>=0)return Xv.subVectors(l,r),f=(g-_)/(g-_+(y-E)),t.copy(r).addScaledVector(Xv,f);const x=1/(S+T+v);return u=T*x,f=v*x,t.copy(a).addScaledVector(Qr,u).addScaledVector(Jr,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},mu={h:0,s:0,l:0};function Fd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class rt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,a,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=a,Ut.colorSpaceToWorking(this,r),this}setHSL(e,t,a,r=Ut.workingColorSpace){if(e=pm(e,1),t=At(t,0,1),a=At(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Fd(u,l,e+1/3),this.g=Fd(u,l,e),this.b=Fd(u,l,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,t=wn){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const a=yy[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ut.workingToColorSpace(Kn.copy(this),e),Math.round(At(Kn.r*255,0,255))*65536+Math.round(At(Kn.g*255,0,255))*256+Math.round(At(Kn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Kn.copy(this),t);const a=Kn.r,r=Kn.g,l=Kn.b,u=Math.max(a,r,l),f=Math.min(a,r,l);let d,h;const _=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=_<=.5?g/(u+f):g/(2-u-f),u){case a:d=(r-l)/g+(r<l?6:0);break;case r:d=(l-a)/g+2;break;case l:d=(a-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=_,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=wn){Ut.workingToColorSpace(Kn.copy(this),e);const t=Kn.r,a=Kn.g,r=Kn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,t,a){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(mu);const a=Fl(Ss.h,mu.h,t),r=Fl(Ss.s,mu.s,t),l=Fl(Ss.l,mu.l,t);return this.setHSL(a,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,r=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*r,this.g=l[1]*t+l[4]*a+l[7]*r,this.b=l[2]*t+l[5]*a+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new rt;rt.NAMES=yy;let zE=0;class Qi extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=po,this.side=ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=up,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(a.blending=this.blending),this.side!==ca&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==cp&&(a.blendSrc=this.blendSrc),this.blendDst!==up&&(a.blendDst=this.blendDst),this.blendEquation!==ar&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=r(e.textures),u=r(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const r=t.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ga extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new F,gu=new Je;let BE=0;class ii{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Kp,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=t.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)gu.fromBufferAttribute(this,t),gu.applyMatrix3(e),this.setXY(t,gu.x,gu.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=qi(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Kt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,t,a,r,l){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),r=Kt(r,this.array),l=Kt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class Sy extends ii{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class My extends ii{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Zt extends ii{constructor(e,t,a){super(new Float32Array(e),t,a)}}let FE=0;const Ni=new dt,Hd=new fn,$r=new F,Mi=new ha,Al=new ha,In=new F;class zn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vy(e)?My:Sy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new vt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,a){return Ni.makeTranslation(e,t,a),this.applyMatrix4(Ni),this}scale(e,t,a){return Ni.makeScale(e,t,a),this.applyMatrix4(Ni),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zt(a,3))}else{const a=Math.min(e.length,t.count);for(let r=0;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const l=t[a];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const a=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Al.setFromBufferAttribute(f),this.morphTargetsRelative?(In.addVectors(Mi.min,Al.min),Mi.expandByPoint(In),In.addVectors(Mi.max,Al.max),Mi.expandByPoint(In)):(Mi.expandByPoint(Al.min),Mi.expandByPoint(Al.max))}Mi.getCenter(a);let r=0;for(let l=0,u=e.count;l<u;l++)In.fromBufferAttribute(e,l),r=Math.max(r,a.distanceToSquared(In));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,_=f.count;h<_;h++)In.fromBufferAttribute(f,h),d&&($r.fromBufferAttribute(e,h),In.add($r)),r=Math.max(r,a.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,r=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let G=0;G<a.count;G++)f[G]=new F,d[G]=new F;const h=new F,_=new F,g=new F,v=new Je,y=new Je,E=new Je,T=new F,S=new F;function x(G,b,A){h.fromBufferAttribute(a,G),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,A),v.fromBufferAttribute(l,G),y.fromBufferAttribute(l,b),E.fromBufferAttribute(l,A),_.sub(h),g.sub(h),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(V),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(V),f[G].add(T),f[b].add(T),f[A].add(T),d[G].add(S),d[b].add(S),d[A].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,b=D.length;G<b;++G){const A=D[G],V=A.start,W=A.count;for(let ae=V,ue=V+W;ae<ue;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const N=new F,R=new F,O=new F,I=new F;function U(G){O.fromBufferAttribute(r,G),I.copy(O);const b=f[G];N.copy(b),N.sub(O.multiplyScalar(O.dot(b))).normalize(),R.crossVectors(I,b);const V=R.dot(d[G])<0?-1:1;u.setXYZW(G,N.x,N.y,N.z,V)}for(let G=0,b=D.length;G<b;++G){const A=D[G],V=A.start,W=A.count;for(let ae=V,ue=V+W;ae<ue;ae+=3)U(e.getX(ae+0)),U(e.getX(ae+1)),U(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new F,l=new F,u=new F,f=new F,d=new F,h=new F,_=new F,g=new F;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),_.subVectors(u,l),g.subVectors(r,l),_.cross(g),f.fromBufferAttribute(a,E),d.fromBufferAttribute(a,T),h.fromBufferAttribute(a,S),f.add(_),d.add(_),h.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)r.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),g.subVectors(r,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(f,d){const h=f.array,_=f.itemSize,g=f.normalized,v=new h.constructor(d.length*_);let y=0,E=0;for(let T=0,S=d.length;T<S;T++){f.isInterleavedBufferAttribute?y=d[T]*f.data.stride+f.offset:y=d[T]*_;for(let x=0;x<_;x++)v[E++]=h[y++]}return new ii(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],h=e(d,a);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let _=0,g=h.length;_<g;_++){const v=h[_],y=e(v,a);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const d in a){const h=a[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],_=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];_.push(y.toJSON(e.data))}_.length>0&&(r[d]=_,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const h in r){const _=r[h];this.setAttribute(h,_.clone(t))}const l=e.morphAttributes;for(const h in l){const _=[],g=l[h];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,_=u.length;h<_;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jv=new dt,Js=new Zl,_u=new da,Wv=new F,vu=new F,xu=new F,yu=new F,Vd=new F,Su=new F,qv=new F,Mu=new F;class Le extends fn{constructor(e=new zn,t=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(l&&f){Su.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const _=f[d],g=l[d];_!==0&&(Vd.fromBufferAttribute(g,e),u?Su.addScaledVector(Vd,_):Su.addScaledVector(Vd.sub(t),_))}t.add(Su)}return t}raycast(e,t){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),_u.copy(a.boundingSphere),_u.applyMatrix4(l),Js.copy(e.ray).recast(e.near),!(_u.containsPoint(Js.origin)===!1&&(Js.intersectSphere(_u,Wv)===null||Js.origin.distanceToSquared(Wv)>(e.far-e.near)**2))&&(jv.copy(l).invert(),Js.copy(e.ray).applyMatrix4(jv),!(a.boundingBox!==null&&Js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,a){let r;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],D=Math.max(S.start,y.start),N=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,O=N;R<O;R+=3){const I=f.getX(R),U=f.getX(R+1),G=f.getX(R+2);r=Eu(this,x,e,a,h,_,g,I,U,G),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const D=f.getX(S),N=f.getX(S+1),R=f.getX(S+2);r=Eu(this,u,e,a,h,_,g,D,N,R),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],D=Math.max(S.start,y.start),N=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,O=N;R<O;R+=3){const I=R,U=R+1,G=R+2;r=Eu(this,x,e,a,h,_,g,I,U,G),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const D=S,N=S+1,R=S+2;r=Eu(this,u,e,a,h,_,g,D,N,R),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function HE(o,e,t,a,r,l,u,f){let d;if(e.side===ti?d=a.intersectTriangle(u,l,r,!0,f):d=a.intersectTriangle(r,l,u,e.side===ca,f),d===null)return null;Mu.copy(f),Mu.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Mu);return h<t.near||h>t.far?null:{distance:h,point:Mu.clone(),object:o}}function Eu(o,e,t,a,r,l,u,f,d,h){o.getVertexPosition(f,vu),o.getVertexPosition(d,xu),o.getVertexPosition(h,yu);const _=HE(o,e,t,a,vu,xu,yu,qv);if(_){const g=new F;Ii.getBarycoord(qv,vu,xu,yu,g),r&&(_.uv=Ii.getInterpolatedAttribute(r,f,d,h,g,new Je)),l&&(_.uv1=Ii.getInterpolatedAttribute(l,f,d,h,g,new Je)),u&&(_.normal=Ii.getInterpolatedAttribute(u,f,d,h,g,new F),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new F,materialIndex:0};Ii.getNormal(vu,xu,yu,v.normal),_.face=v,_.barycoord=g}return _}class Ft extends zn{constructor(e=1,t=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],_=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,a,t,e,u,l,0),E("z","y","x",1,-1,a,t,-e,u,l,1),E("x","z","y",1,1,e,a,t,r,u,2),E("x","z","y",1,-1,e,a,-t,r,u,3),E("x","y","z",1,-1,e,t,a,r,l,4),E("x","y","z",-1,-1,e,t,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2));function E(T,S,x,D,N,R,O,I,U,G,b){const A=R/U,V=O/G,W=R/2,ae=O/2,ue=I/2,re=U+1,B=G+1;let K=0,Y=0;const de=new F;for(let Te=0;Te<B;Te++){const z=Te*V-ae;for(let $=0;$<re;$++){const ye=$*A-W;de[T]=ye*D,de[S]=z*N,de[x]=ue,h.push(de.x,de.y,de.z),de[T]=0,de[S]=0,de[x]=I>0?1:-1,_.push(de.x,de.y,de.z),g.push($/U),g.push(1-Te/G),K+=1}}for(let Te=0;Te<G;Te++)for(let z=0;z<U;z++){const $=v+z+re*Te,ye=v+z+re*(Te+1),ve=v+(z+1)+re*(Te+1),Ne=v+(z+1)+re*Te;d.push($,ye,Ne),d.push(ye,ve,Ne),Y+=6}f.addGroup(y,Y,b),y+=Y,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const t in o){e[t]={};for(const a in o[t]){const r=o[t][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=r.clone():Array.isArray(r)?e[t][a]=r.slice():e[t][a]=r}}return e}function ei(o){const e={};for(let t=0;t<o.length;t++){const a=So(o[t]);for(const r in a)e[r]=a[r]}return e}function VE(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Ey(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Ds={clone:So,merge:ei};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=VE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class Ty extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new F,Yv=new Je,Kv=new Je;class Zn extends Ty{constructor(e=50,t=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Yv,Kv),t.subVectors(Kv,Yv)}setViewOffset(e,t,a,r,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bl*.5*this.fov)/this.zoom,a=2*t,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*r/d,t-=u.offsetY*a/h,r*=u.width/d,a*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class XE extends fn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(eo,to,e,t);r.layers=this.layers,this.add(r);const l=new Zn(eo,to,e,t);l.layers=this.layers,this.add(l);const u=new Zn(eo,to,e,t);u.layers=this.layers,this.add(u);const f=new Zn(eo,to,e,t);f.layers=this.layers,this.add(f);const d=new Zn(eo,to,e,t);d.layers=this.layers,this.add(d);const h=new Zn(eo,to,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,r,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===la)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Zu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(t,l),e.setRenderTarget(a,1,r),e.render(t,u),e.setRenderTarget(a,2,r),e.render(t,f),e.setRenderTarget(a,3,r),e.render(t,d),e.setRenderTarget(a,4,r),e.render(t,h),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(t,_),e.setRenderTarget(g,v,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class by extends Rn{constructor(e=[],t=vo,a,r,l,u,f,d,h,_){super(e,t,a,r,l,u,f,d,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jE extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new by(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ft(5,5,5),l=new kn({name:"CubemapFromEquirect",uniforms:So(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Xa});l.uniforms.tEquirect.value=t;const u=new Le(r,l),f=t.minFilter;return t.minFilter===Va&&(t.minFilter=Ei),new XE(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,r=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,r);e.setRenderTarget(l)}}class nn extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let r=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,a),x=this._getHandJoint(h,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,E=.005;h.inputState.pinching&&v>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=t.getPose(e.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new nn;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class _m{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(e),this.density=t}clone(){return new _m(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qE extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ay{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kp,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let r=0,l=this.stride;r<l;r++)this.array[e+r]=t.array[a+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new F;class Kl{constructor(e,t,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=qi(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Kt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),r=Kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,t,a,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),r=Kt(r,this.array),l=Kt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[r+l])}return new ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[r+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wy extends Qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let no;const wl=new F,io=new F,ao=new F,so=new Je,Rl=new Je,Ry=new dt,Tu=new F,Cl=new F,bu=new F,Zv=new Je,kd=new Je,Qv=new Je;class Jv extends fn{constructor(e=new wy){if(super(),this.isSprite=!0,this.type="Sprite",no===void 0){no=new zn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Ay(t,5);no.setIndex([0,1,2,0,2,3]),no.setAttribute("position",new Kl(a,3,0,!1)),no.setAttribute("uv",new Kl(a,2,3,!1))}this.geometry=no,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),io.setFromMatrixScale(this.matrixWorld),Ry.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&io.multiplyScalar(-ao.z);const a=this.material.rotation;let r,l;a!==0&&(l=Math.cos(a),r=Math.sin(a));const u=this.center;Au(Tu.set(-.5,-.5,0),ao,u,io,r,l),Au(Cl.set(.5,-.5,0),ao,u,io,r,l),Au(bu.set(.5,.5,0),ao,u,io,r,l),Zv.set(0,0),kd.set(1,0),Qv.set(1,1);let f=e.ray.intersectTriangle(Tu,Cl,bu,!1,wl);if(f===null&&(Au(Cl.set(-.5,.5,0),ao,u,io,r,l),kd.set(0,1),f=e.ray.intersectTriangle(Tu,bu,Cl,!1,wl),f===null))return;const d=e.ray.origin.distanceTo(wl);d<e.near||d>e.far||t.push({distance:d,point:wl.clone(),uv:Ii.getInterpolation(wl,Tu,Cl,bu,Zv,kd,Qv,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Au(o,e,t,a,r,l){so.subVectors(o,t).addScalar(.5).multiply(a),r!==void 0?(Rl.x=l*so.x-r*so.y,Rl.y=r*so.x+l*so.y):Rl.copy(so),o.copy(e),o.x+=Rl.x,o.y+=Rl.y,o.applyMatrix4(Ry)}const $v=new F,ex=new Pt,tx=new Pt,YE=new F,nx=new dt,wu=new F,Xd=new da,ix=new dt,jd=new Zl;class KE extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cv,this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ha),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,wu),this.boundingBox.expandByPoint(wu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new da),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,wu),this.boundingSphere.expandByPoint(wu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xd.copy(this.boundingSphere),Xd.applyMatrix4(r),e.ray.intersectsSphere(Xd)!==!1&&(ix.copy(r).invert(),jd.copy(e.ray).applyMatrix4(ix),!(this.boundingBox!==null&&jd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let a=0,r=t.count;a<r;a++){e.fromBufferAttribute(t,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===X1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const a=this.skeleton,r=this.geometry;ex.fromBufferAttribute(r.attributes.skinIndex,e),tx.fromBufferAttribute(r.attributes.skinWeight,e),$v.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=tx.getComponent(l);if(u!==0){const f=ex.getComponent(l);nx.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),t.addScaledVector(YE.copy($v).applyMatrix4(nx),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cy extends fn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dy extends Rn{constructor(e=null,t=1,a=1,r,l,u,f,d,h=ni,_=ni,g,v){super(null,u,f,d,h,_,r,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ax=new dt,ZE=new dt;class vm{constructor(e=[],t=[]){this.uuid=Ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const a=new dt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,t=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:ZE;ax.multiplyMatrices(f,t[l]),ax.toArray(a,l*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new vm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const a=new Dy(t,e,e,zi,Yi);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const l=e.bones[a];let u=t[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new Cy),this.bones.push(u),this.boneInverses.push(new dt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,a=this.boneInverses;for(let r=0,l=t.length;r<l;r++){const u=t[r];e.bones.push(u.uuid);const f=a[r];e.boneInverses.push(f.toArray())}return e}}class Zp extends ii{constructor(e,t,a,r=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ro=new dt,sx=new dt,Ru=[],rx=new ha,QE=new dt,Dl=new Le,Ll=new da;class JE extends Le{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,QE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ha),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,ro),rx.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(rx)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new da),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,ro),Ll.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(Ll)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,r=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=r[u+f]}raycast(e,t){const a=this.matrixWorld,r=this.count;if(Dl.geometry=this.geometry,Dl.material=this.material,Dl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ll.copy(this.boundingSphere),Ll.applyMatrix4(a),e.ray.intersectsSphere(Ll)!==!1))for(let l=0;l<r;l++){this.getMatrixAt(l,ro),sx.multiplyMatrices(a,ro),Dl.matrixWorld=sx,Dl.raycast(e,Ru);for(let u=0,f=Ru.length;u<f;u++){const d=Ru[u];d.instanceId=l,d.object=this,t.push(d)}Ru.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Dy(new Float32Array(r*this.count),r,this.count,cm,Yi));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<a.length;h++)u+=a[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=r*e;l[d]=f,l.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wd=new F,$E=new F,eT=new vt;class Ts{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,r){return this.normal.set(e,t,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const r=Wd.subVectors(a,t).cross($E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(Wd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||eT.getNormalMatrix(e),r=this.coplanarPoint(Wd).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new da,tT=new Je(.5,.5),Cu=new F;class xm{constructor(e=new Ts,t=new Ts,a=new Ts,r=new Ts,l=new Ts,u=new Ts){this.planes=[e,t,a,r,l,u]}set(e,t,a,r,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=la,a=!1){const r=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],_=l[4],g=l[5],v=l[6],y=l[7],E=l[8],T=l[9],S=l[10],x=l[11],D=l[12],N=l[13],R=l[14],O=l[15];if(r[0].setComponents(h-u,y-_,x-E,O-D).normalize(),r[1].setComponents(h+u,y+_,x+E,O+D).normalize(),r[2].setComponents(h+f,y+g,x+T,O+N).normalize(),r[3].setComponents(h-f,y-g,x-T,O-N).normalize(),a)r[4].setComponents(d,v,S,R).normalize(),r[5].setComponents(h-d,y-v,x-S,O-R).normalize();else if(r[4].setComponents(h-d,y-v,x-S,O-R).normalize(),t===la)r[5].setComponents(h+d,y+v,x+S,O+R).normalize();else if(t===Zu)r[5].setComponents(d,v,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);const t=tT.distanceTo(e.center);return $s.radius=.7071067811865476+t,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,a=e.center,r=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const r=t[a];if(Cu.x=r.normal.x>0?e.max.x:e.min.x,Cu.y=r.normal.y>0?e.max.y:e.min.y,Cu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ly extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new F,Ju=new F,ox=new dt,Nl=new Zl,Du=new da,qd=new F,lx=new F;class ym extends fn{constructor(e=new zn,t=new Ly){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let r=1,l=t.count;r<l;r++)Qu.fromBufferAttribute(t,r-1),Ju.fromBufferAttribute(t,r),a[r]=a[r-1],a[r]+=Qu.distanceTo(Ju);e.setAttribute("lineDistance",new Zt(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,r=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Du.copy(a.boundingSphere),Du.applyMatrix4(r),Du.radius+=l,e.ray.intersectsSphere(Du)===!1)return;ox.copy(r).invert(),Nl.copy(e.ray).applyMatrix4(ox);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const y=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=h){const x=_.getX(T),D=_.getX(T+1),N=Lu(this,e,Nl,d,x,D,T);N&&t.push(N)}if(this.isLineLoop){const T=_.getX(E-1),S=_.getX(y),x=Lu(this,e,Nl,d,T,S,E-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=h){const x=Lu(this,e,Nl,d,T,T+1,T);x&&t.push(x)}if(this.isLineLoop){const T=Lu(this,e,Nl,d,E-1,y,E-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Lu(o,e,t,a,r,l,u){const f=o.geometry.attributes.position;if(Qu.fromBufferAttribute(f,r),Ju.fromBufferAttribute(f,l),t.distanceSqToSegment(Qu,Ju,qd,lx)>a)return;qd.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(qd);if(!(h<e.near||h>e.far))return{distance:h,point:lx.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const cx=new F,ux=new F;class nT extends ym{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let r=0,l=t.count;r<l;r+=2)cx.fromBufferAttribute(t,r),ux.fromBufferAttribute(t,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+cx.distanceTo(ux);e.setAttribute("lineDistance",new Zt(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iT extends ym{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ny extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fx=new dt,Qp=new Zl,Nu=new da,Uu=new F;class aT extends fn{constructor(e=new zn,t=new Ny){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,r=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Nu.copy(a.boundingSphere),Nu.applyMatrix4(r),Nu.radius+=l,e.ray.intersectsSphere(Nu)===!1)return;fx.copy(r).invert(),Qp.copy(e.ray).applyMatrix4(fx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=a.index,g=a.attributes.position;if(h!==null){const v=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let E=v,T=y;E<T;E++){const S=h.getX(E);Uu.fromBufferAttribute(g,S),hx(Uu,S,d,r,e,t,this)}}else{const v=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let E=v,T=y;E<T;E++)Uu.fromBufferAttribute(g,E),hx(Uu,E,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function hx(o,e,t,a,r,l,u){const f=Qp.distanceSqToPoint(o);if(f<t){const d=new F;Qp.closestPointToPoint(o,d),d.applyMatrix4(a);const h=r.ray.origin.distanceTo(d);if(h<r.near||h>r.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Uy extends Rn{constructor(e,t,a,r,l,u,f,d,h){super(e,t,a,r,l,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oy extends Rn{constructor(e,t,a=rr,r,l,u,f=ni,d=ni,h,_=kl,g=1){if(_!==kl&&_!==Xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,r,l,u,f,d,_,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Iy extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends zn{constructor(e=1,t=1,a=4,r=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:a,radialSegments:r,heightSegments:l},t=Math.max(0,t),a=Math.max(1,Math.floor(a)),r=Math.max(3,Math.floor(r)),l=Math.max(1,Math.floor(l));const u=[],f=[],d=[],h=[],_=t/2,g=Math.PI/2*e,v=t,y=2*g+v,E=a*2+l,T=r+1,S=new F,x=new F;for(let D=0;D<=E;D++){let N=0,R=0,O=0,I=0;if(D<=a){const b=D/a,A=b*Math.PI/2;R=-_-e*Math.cos(A),O=e*Math.sin(A),I=-e*Math.cos(A),N=b*g}else if(D<=a+l){const b=(D-a)/l;R=-_+b*t,O=e,I=0,N=g+b*v}else{const b=(D-a-l)/a,A=b*Math.PI/2;R=_+e*Math.sin(A),O=e*Math.cos(A),I=e*Math.sin(A),N=g+v+b*g}const U=Math.max(0,Math.min(1,N/y));let G=0;D===0?G=.5/r:D===E&&(G=-.5/r);for(let b=0;b<=r;b++){const A=b/r,V=A*Math.PI*2,W=Math.sin(V),ae=Math.cos(V);x.x=-O*ae,x.y=R,x.z=O*W,f.push(x.x,x.y,x.z),S.set(-O*ae,I,O*W),S.normalize(),d.push(S.x,S.y,S.z),h.push(A+G,U)}if(D>0){const b=(D-1)*T;for(let A=0;A<r;A++){const V=b+A,W=b+A+1,ae=D*T+A,ue=D*T+A+1;u.push(V,W,ae),u.push(W,ue,ae)}}}this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $u extends zn{constructor(e=1,t=32,a=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:a,thetaLength:r},t=Math.max(3,t);const l=[],u=[],f=[],d=[],h=new F,_=new Je;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const y=a+g/t*r;h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.push(h.x,h.y,h.z),f.push(0,0,1),_.x=(u[v]/e+1)/2,_.y=(u[v+1]/e+1)/2,d.push(_.x,_.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gn extends zn{constructor(e=1,t=1,a=1,r=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:a,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const h=this;r=Math.floor(r),l=Math.floor(l);const _=[],g=[],v=[],y=[];let E=0;const T=[],S=a/2;let x=0;D(),u===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(y,2));function D(){const R=new F,O=new F;let I=0;const U=(t-e)/a;for(let G=0;G<=l;G++){const b=[],A=G/l,V=A*(t-e)+e;for(let W=0;W<=r;W++){const ae=W/r,ue=ae*d+f,re=Math.sin(ue),B=Math.cos(ue);O.x=V*re,O.y=-A*a+S,O.z=V*B,g.push(O.x,O.y,O.z),R.set(re,U,B).normalize(),v.push(R.x,R.y,R.z),y.push(ae,1-A),b.push(E++)}T.push(b)}for(let G=0;G<r;G++)for(let b=0;b<l;b++){const A=T[b][G],V=T[b+1][G],W=T[b+1][G+1],ae=T[b][G+1];(e>0||b!==0)&&(_.push(A,V,ae),I+=3),(t>0||b!==l-1)&&(_.push(V,W,ae),I+=3)}h.addGroup(x,I,0),x+=I}function N(R){const O=E,I=new Je,U=new F;let G=0;const b=R===!0?e:t,A=R===!0?1:-1;for(let W=1;W<=r;W++)g.push(0,S*A,0),v.push(0,A,0),y.push(.5,.5),E++;const V=E;for(let W=0;W<=r;W++){const ue=W/r*d+f,re=Math.cos(ue),B=Math.sin(ue);U.x=b*B,U.y=S*A,U.z=b*re,g.push(U.x,U.y,U.z),v.push(0,A,0),I.x=re*.5+.5,I.y=B*.5*A+.5,y.push(I.x,I.y),E++}for(let W=0;W<r;W++){const ae=O+W,ue=V+W;R===!0?_.push(ue,ue+1,ae):_.push(ue+1,ue,ae),G+=3}h.addGroup(x,G,R===!0?1:2),x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ls extends gn{constructor(e=1,t=1,a=32,r=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,a,r,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:a,heightSegments:r,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Ls(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sm extends zn{constructor(e=[],t=[],a=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:a,detail:r};const l=[],u=[];f(r),h(a),_(),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(l.slice(),3)),this.setAttribute("uv",new Zt(u,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function f(D){const N=new F,R=new F,O=new F;for(let I=0;I<t.length;I+=3)y(t[I+0],N),y(t[I+1],R),y(t[I+2],O),d(N,R,O,D)}function d(D,N,R,O){const I=O+1,U=[];for(let G=0;G<=I;G++){U[G]=[];const b=D.clone().lerp(R,G/I),A=N.clone().lerp(R,G/I),V=I-G;for(let W=0;W<=V;W++)W===0&&G===I?U[G][W]=b:U[G][W]=b.clone().lerp(A,W/V)}for(let G=0;G<I;G++)for(let b=0;b<2*(I-G)-1;b++){const A=Math.floor(b/2);b%2===0?(v(U[G][A+1]),v(U[G+1][A]),v(U[G][A])):(v(U[G][A+1]),v(U[G+1][A+1]),v(U[G+1][A]))}}function h(D){const N=new F;for(let R=0;R<l.length;R+=3)N.x=l[R+0],N.y=l[R+1],N.z=l[R+2],N.normalize().multiplyScalar(D),l[R+0]=N.x,l[R+1]=N.y,l[R+2]=N.z}function _(){const D=new F;for(let N=0;N<l.length;N+=3){D.x=l[N+0],D.y=l[N+1],D.z=l[N+2];const R=S(D)/2/Math.PI+.5,O=x(D)/Math.PI+.5;u.push(R,1-O)}E(),g()}function g(){for(let D=0;D<u.length;D+=6){const N=u[D+0],R=u[D+2],O=u[D+4],I=Math.max(N,R,O),U=Math.min(N,R,O);I>.9&&U<.1&&(N<.2&&(u[D+0]+=1),R<.2&&(u[D+2]+=1),O<.2&&(u[D+4]+=1))}}function v(D){l.push(D.x,D.y,D.z)}function y(D,N){const R=D*3;N.x=e[R+0],N.y=e[R+1],N.z=e[R+2]}function E(){const D=new F,N=new F,R=new F,O=new F,I=new Je,U=new Je,G=new Je;for(let b=0,A=0;b<l.length;b+=9,A+=6){D.set(l[b+0],l[b+1],l[b+2]),N.set(l[b+3],l[b+4],l[b+5]),R.set(l[b+6],l[b+7],l[b+8]),I.set(u[A+0],u[A+1]),U.set(u[A+2],u[A+3]),G.set(u[A+4],u[A+5]),O.copy(D).add(N).add(R).divideScalar(3);const V=S(O);T(I,A+0,D,V),T(U,A+2,N,V),T(G,A+4,R,V)}}function T(D,N,R,O){O<0&&D.x===1&&(u[N]=D.x-1),R.x===0&&R.z===0&&(u[N]=O/2/Math.PI+.5)}function S(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.vertices,e.indices,e.radius,e.details)}}class ef extends Sm{constructor(e=1,t=0){const a=(1+Math.sqrt(5))/2,r=1/a,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-a,0,-r,a,0,r,-a,0,r,a,-r,-a,0,-r,a,0,r,-a,0,r,a,0,-a,0,-r,a,0,-r,-a,0,r,a,0,r],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ef(e.radius,e.detail)}}class Ao extends zn{constructor(e=1,t=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:r};const l=e/2,u=t/2,f=Math.floor(a),d=Math.floor(r),h=f+1,_=d+1,g=e/f,v=t/d,y=[],E=[],T=[],S=[];for(let x=0;x<_;x++){const D=x*v-u;for(let N=0;N<h;N++){const R=N*g-l;E.push(R,-D,0),T.push(0,0,1),S.push(N/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<f;D++){const N=D+h*x,R=D+h*(x+1),O=D+1+h*(x+1),I=D+1+h*x;y.push(N,R,I),y.push(R,O,I)}this.setIndex(y),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(T,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pi extends zn{constructor(e=1,t=32,a=16,r=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let h=0;const _=[],g=new F,v=new F,y=[],E=[],T=[],S=[];for(let x=0;x<=a;x++){const D=[],N=x/a;let R=0;x===0&&u===0?R=.5/t:x===a&&d===Math.PI&&(R=-.5/t);for(let O=0;O<=t;O++){const I=O/t;g.x=-e*Math.cos(r+I*l)*Math.sin(u+N*f),g.y=e*Math.cos(u+N*f),g.z=e*Math.sin(r+I*l)*Math.sin(u+N*f),E.push(g.x,g.y,g.z),v.copy(g).normalize(),T.push(v.x,v.y,v.z),S.push(I+R,1-N),D.push(h++)}_.push(D)}for(let x=0;x<a;x++)for(let D=0;D<t;D++){const N=_[x][D+1],R=_[x][D],O=_[x+1][D],I=_[x+1][D+1];(x!==0||u>0)&&y.push(N,R,I),(x!==a-1||d<Math.PI)&&y.push(R,O,I)}this.setIndex(y),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(T,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pn extends zn{constructor(e=1,t=.4,a=12,r=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:r,arc:l},a=Math.floor(a),r=Math.floor(r);const u=[],f=[],d=[],h=[],_=new F,g=new F,v=new F;for(let y=0;y<=a;y++)for(let E=0;E<=r;E++){const T=E/r*l,S=y/a*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(T),g.y=(e+t*Math.cos(S))*Math.sin(T),g.z=t*Math.sin(S),f.push(g.x,g.y,g.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),v.subVectors(g,_).normalize(),d.push(v.x,v.y,v.z),h.push(E/r),h.push(y/a)}for(let y=1;y<=a;y++)for(let E=1;E<=r;E++){const T=(r+1)*y+E-1,S=(r+1)*(y-1)+E-1,x=(r+1)*(y-1)+E,D=(r+1)*y+E;u.push(T,S,D),u.push(S,x,D)}this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sT extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tt extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gy,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pa extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rT extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oT extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ou(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function lT(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function cT(o){function e(r,l){return o[r]-o[l]}const t=o.length,a=new Array(t);for(let r=0;r!==t;++r)a[r]=r;return a.sort(e),a}function dx(o,e,t){const a=o.length,r=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=t[l]*e;for(let d=0;d!==e;++d)r[u++]=o[f+d]}return r}function Py(o,e,t,a){let r=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[r++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),t.push(...u)),l=o[r++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=o[r++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),t.push(u)),l=o[r++];while(l!==void 0)}class Ql{constructor(e,t,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let a=this._cachedIndex,r=t[a],l=t[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let f=a+2;;){if(r===void 0){if(e<l)break i;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=r,r=t[++a],e<r)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(a=2,l=f);for(let d=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===d)break;if(r=l,l=t[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<t[f]?u=f:a=f+1}if(r=t[a],l=t[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,r)}return this.interpolate_(a,l,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r;for(let u=0;u!==r;++u)t[u]=a[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uT extends Ql{constructor(e,t,a,r){super(e,t,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uo,endingEnd:uo}}intervalChanged_(e,t,a){const r=this.parameterPositions;let l=e-2,u=e+1,f=r[l],d=r[u];if(f===void 0)switch(this.getSettings_().endingStart){case fo:l=e,f=2*t-a;break;case Yu:l=r.length-2,f=t+r[l]-r[l+1];break;default:l=e,f=a}if(d===void 0)switch(this.getSettings_().endingEnd){case fo:u=e,d=2*a-t;break;case Yu:u=1,d=a+r[1]-r[0];break;default:u=e-1,d=t}const h=(a-t)*.5,_=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-a),this._offsetPrev=l*_,this._offsetNext=u*_}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,_=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(a-t)/(r-t),T=E*E,S=T*E,x=-v*S+2*v*T-v*E,D=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*E+1,N=(-1-y)*S+(1.5+y)*T+.5*E,R=y*S-y*T;for(let O=0;O!==f;++O)l[O]=x*u[_+O]+D*u[h+O]+N*u[d+O]+R*u[g+O];return l}}class zy extends Ql{constructor(e,t,a,r){super(e,t,a,r)}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,_=(a-t)/(r-t),g=1-_;for(let v=0;v!==f;++v)l[v]=u[h+v]*g+u[d+v]*_;return l}}class fT extends Ql{constructor(e,t,a,r){super(e,t,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ji{constructor(e,t,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ou(t,this.TimeBufferType),this.values=Ou(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:Ou(e.times,Array),values:Ou(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new fT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jl:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case Sd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jl;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return Sd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let a=0,r=t.length;a!==r;++a)t[a]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let a=0,r=t.length;a!==r;++a)t[a]*=e}return this}trim(e,t){const a=this.times,r=a.length;let l=0,u=r-1;for(;l!==r&&a[l]<e;)++l;for(;u!==-1&&a[u]>t;)--u;if(++u,l!==0||u!==r){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,l=a.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const d=a[f];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(r!==void 0&&lT(r))for(let f=0,d=r.length;f!==d;++f){const h=r[f];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Sd,l=e.length-1;let u=1;for(let f=1;f<l;++f){let d=!1;const h=e[f],_=e[f+1];if(h!==_&&(f!==1||h!==e[0]))if(r)d=!0;else{const g=f*a,v=g-a,y=g+a;for(let E=0;E!==a;++E){const T=t[g+E];if(T!==t[v+E]||T!==t[y+E]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const g=f*a,v=u*a;for(let y=0;y!==a;++y)t[v+y]=t[g+y]}++u}}if(l>0){e[u]=e[l];for(let f=l*a,d=u*a,h=0;h!==a;++h)t[d+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*a)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),a=this.constructor,r=new a(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ji.prototype.ValueTypeName="";Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Wl;class wo extends Ji{constructor(e,t,a){super(e,t,a)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=jl;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class By extends Ji{constructor(e,t,a,r){super(e,t,a,r)}}By.prototype.ValueTypeName="color";class Mo extends Ji{constructor(e,t,a,r){super(e,t,a,r)}}Mo.prototype.ValueTypeName="number";class hT extends Ql{constructor(e,t,a,r){super(e,t,a,r)}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(a-t)/(r-t);let h=e*f;for(let _=h+f;h!==_;h+=4)Zi.slerpFlat(l,0,u,h-f,u,h,d);return l}}class Eo extends Ji{constructor(e,t,a,r){super(e,t,a,r)}InterpolantFactoryMethodLinear(e){return new hT(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Ji{constructor(e,t,a){super(e,t,a)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=jl;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Ji{constructor(e,t,a,r){super(e,t,a,r)}}To.prototype.ValueTypeName="vector";class Jp{constructor(e="",t=-1,a=[],r=dm){this.name=e,this.tracks=a,this.duration=t,this.blendMode=r,this.uuid=Ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)t.push(pT(a[u]).scale(r));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const t=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,u=a.length;l!==u;++l)t.push(Ji.toJSON(a[l]));return r}static CreateFromMorphTargetSequence(e,t,a,r){const l=t.length,u=[];for(let f=0;f<l;f++){let d=[],h=[];d.push((f+l-1)%l,f,(f+1)%l),h.push(0,1,0);const _=cT(d);d=dx(d,1,_),h=dx(h,1,_),!r&&d[0]===0&&(d.push(l),h.push(h[0])),u.push(new Mo(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/a))}return new this(e,-1,u)}static findByName(e,t){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===t)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,t,a){const r={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],_=h.name.match(l);if(_&&_.length>1){const g=_[1];let v=r[g];v||(r[g]=v=[]),v.push(h)}}const u=[];for(const f in r)u.push(this.CreateFromMorphTargetSequence(f,r[f],t,a));return u}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(g,v,y,E,T){if(y.length!==0){const S=[],x=[];Py(y,S,x,E),S.length!==0&&T.push(new g(v,S,x))}},r=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const v=h[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let T=0;T<v[E].morphTargets.length;T++)y[v[E].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let D=0;D!==v[E].morphTargets.length;++D){const N=v[E];S.push(N.time),x.push(N.morphTarget===T?1:0)}r.push(new Mo(".morphTargetInfluence["+T+"]",S,x))}d=y.length*u}else{const y=".bones["+t[g].name+"]";a(To,y+".position",v,"pos",r),a(Eo,y+".quaternion",v,"rot",r),a(To,y+".scale",v,"scl",r)}}return r.length===0?null:new this(l,d,r,f)}resetDuration(){const e=this.tracks;let t=0;for(let a=0,r=e.length;a!==r;++a){const l=this.tracks[a];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dT(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return By;case"quaternion":return Eo;case"bool":case"boolean":return wo;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function pT(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dT(o.type);if(o.times===void 0){const t=[],a=[];Py(o.keys,t,a,"value"),o.times=t,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ka={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class mT{constructor(e,t,a){const r=this;let l=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this.abortController=new AbortController,this.itemStart=function(_){f++,l===!1&&r.onStart!==void 0&&r.onStart(_,u,f),l=!0},this.itemEnd=function(_){u++,r.onProgress!==void 0&&r.onProgress(_,u,f),u===f&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return d?d(_):_},this.setURLModifier=function(_){return d=_,this},this.addHandler=function(_,g){return h.push(_,g),this},this.removeHandler=function(_){const g=h.indexOf(_);return g!==-1&&h.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=h.length;g<v;g+=2){const y=h[g],E=h[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const gT=new mT;class Co{constructor(e){this.manager=e!==void 0?e:gT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(r,l){a.load(e,r,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fa={};class _T extends Error{constructor(e,t){super(e),this.response=t}}class Fy extends Co{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=ka.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Fa[e]!==void 0){Fa[e].push({onLoad:t,onProgress:a,onError:r});return}Fa[e]=[],Fa[e].push({onLoad:t,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const _=Fa[e],g=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let T=0;const S=new ReadableStream({start(x){D();function D(){g.read().then(({done:N,value:R})=>{if(N)x.close();else{T+=R.byteLength;const O=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let I=0,U=_.length;I<U;I++){const G=_[I];G.onProgress&&G.onProgress(O)}x.enqueue(R),D()}},N=>{x.error(N)})}}});return new Response(S)}else throw new _T(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(_=>new DOMParser().parseFromString(_,f));case"json":return h.json();default:if(f==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return h.arrayBuffer().then(E=>y.decode(E))}}}).then(h=>{ka.add(`file:${e}`,h);const _=Fa[e];delete Fa[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const _=Fa[e];if(_===void 0)throw this.manager.itemError(e),h;delete Fa[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const oo=new WeakMap;class vT extends Co{constructor(e){super(e)}load(e,t,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=ka.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let g=oo.get(u);g===void 0&&(g=[],oo.set(u,g)),g.push({onLoad:t,onError:r})}return u}const f=ql("img");function d(){_(),t&&t(this);const g=oo.get(this)||[];for(let v=0;v<g.length;v++){const y=g[v];y.onLoad&&y.onLoad(this)}oo.delete(this),l.manager.itemEnd(e)}function h(g){_(),r&&r(g),ka.remove(`image:${e}`);const v=oo.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(g)}oo.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function _(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),ka.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class Hy extends Co{constructor(e){super(e)}load(e,t,a,r){const l=new Rn,u=new vT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},a,r),l}}class af extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xT extends af{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yd=new dt,px=new F,mx=new F;class Mm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=ua,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xm,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;px.setFromMatrixPosition(e.matrixWorld),t.position.copy(px),mx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mx),t.updateMatrixWorld(),Yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yT extends Mm{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,a=yo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(a!==t.fov||r!==t.aspect||l!==t.far)&&(t.fov=a,t.aspect=r,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vy extends af{constructor(e,t,a=0,r=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=a,this.angle=r,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new yT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gx=new dt,Ul=new F,Kd=new F;class ST extends Mm{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const a=this.camera,r=this.matrix,l=e.distance||a.far;l!==a.far&&(a.far=l,a.updateProjectionMatrix()),Ul.setFromMatrixPosition(e.matrixWorld),a.position.copy(Ul),Kd.copy(a.position),Kd.add(this._cubeDirections[t]),a.up.copy(this._cubeUps[t]),a.lookAt(Kd),a.updateMatrixWorld(),r.makeTranslation(-Ul.x,-Ul.y,-Ul.z),gx.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gx,a.coordinateSystem,a.reversedDepth)}}class tf extends af{constructor(e,t,a=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new ST}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sf extends Ty{constructor(e=-1,t=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class MT extends Mm{constructor(){super(new sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gy extends af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Zd=new WeakMap;class ET extends Co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=ka.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(h=>{if(Zd.has(u)===!0)r&&r(Zd.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(h),l.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(h){return ka.add(`image-bitmap:${e}`,h),t&&t(h),l.manager.itemEnd(e),h}).catch(function(h){r&&r(h),Zd.set(d,h),ka.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});ka.add(`image-bitmap:${e}`,d),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class TT extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ky{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class bT{constructor(e,t,a){this.binding=e,this.valueSize=a;let r,l,u;switch(t){case"quaternion":r=this._slerp,l=this._slerpAdditive,u=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":r=this._select,l=this._select,u=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:r=this._lerp,l=this._lerpAdditive,u=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=l,this._setIdentity=u,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const a=this.buffer,r=this.valueSize,l=e*r+r;let u=this.cumulativeWeight;if(u===0){for(let f=0;f!==r;++f)a[l+f]=a[f];u=t}else{u+=t;const f=t/u;this._mixBufferRegion(a,l,0,f,r)}this.cumulativeWeight=u}accumulateAdditive(e){const t=this.buffer,a=this.valueSize,r=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,a),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,a=this.buffer,r=e*t+t,l=this.cumulativeWeight,u=this.cumulativeWeightAdditive,f=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const d=t*this._origIndex;this._mixBufferRegion(a,r,d,1-l,t)}u>0&&this._mixBufferRegionAdditive(a,r,this._addIndex*t,1,t);for(let d=t,h=t+t;d!==h;++d)if(a[d]!==a[d+t]){f.setValue(a,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,a=this.valueSize,r=a*this._origIndex;e.getValue(t,r);for(let l=a,u=r;l!==u;++l)t[l]=t[r+l%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let a=e;a<t;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[t+a]=this.buffer[e+a]}_select(e,t,a,r,l){if(r>=.5)for(let u=0;u!==l;++u)e[t+u]=e[a+u]}_slerp(e,t,a,r){Zi.slerpFlat(e,t,e,t,e,a,r)}_slerpAdditive(e,t,a,r,l){const u=this._workIndex*l;Zi.multiplyQuaternionsFlat(e,u,e,t,e,a),Zi.slerpFlat(e,t,e,t,e,u,r)}_lerp(e,t,a,r,l){const u=1-r;for(let f=0;f!==l;++f){const d=t+f;e[d]=e[d]*u+e[a+f]*r}}_lerpAdditive(e,t,a,r,l){for(let u=0;u!==l;++u){const f=t+u;e[f]=e[f]+e[a+u]*r}}}const Em="\\[\\]\\.:\\/",AT=new RegExp("["+Em+"]","g"),Tm="[^"+Em+"]",wT="[^"+Em.replace("\\.","")+"]",RT=/((?:WC+[\/:])*)/.source.replace("WC",Tm),CT=/(WCOD+)?/.source.replace("WCOD",wT),DT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tm),LT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tm),NT=new RegExp("^"+RT+CT+DT+LT+"$"),UT=["material","materials","bones","map"];class OT{constructor(e,t,a){const r=a||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,t)}setValue(e,t){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,l=a.length;r!==l;++r)a[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}}class jt{constructor(e,t,a){this.path=t,this.parsedPath=a||jt.parseTrackName(t),this.node=jt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new jt.Composite(e,t,a):new jt(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AT,"")}static parseTrackName(e){const t=NT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const l=a.nodeName.substring(r+1);UT.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const d=a(f.children);if(d)return d}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)e[t++]=a[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,a=t.objectName,r=t.propertyName;let l=t.propertyIndex;if(e||(e=jt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=t.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let _=0;_<e.length;_++)if(e[_].name===h){h=_;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[r];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(l!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}jt.Composite=OT;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class IT{constructor(e,t,a=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=a,this.blendMode=r;const l=t.tracks,u=l.length,f=new Array(u),d={endingStart:uo,endingEnd:uo};for(let h=0;h!==u;++h){const _=l[h].createInterpolant(null);f[h]=_,_.settings=d}this._interpolantSettings=d,this._interpolants=f,this._propertyBindings=new Array(u),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=W1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,a=!1){if(e.fadeOut(t),this.fadeIn(t),a===!0){const r=this._clip.duration,l=e._clip.duration,u=l/r,f=r/l;e.warp(1,u,t),this.warp(f,1,t)}return this}crossFadeTo(e,t,a=!1){return e.crossFadeFrom(this,t,a)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,a){const r=this._mixer,l=r.time,u=this.timeScale;let f=this._timeScaleInterpolant;f===null&&(f=r._lendControlInterpolant(),this._timeScaleInterpolant=f);const d=f.parameterPositions,h=f.sampleValues;return d[0]=l,d[1]=l+a,h[0]=e/u,h[1]=t/u,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,a,r){if(!this.enabled){this._updateWeight(e);return}const l=this._startTime;if(l!==null){const d=(e-l)*a;d<0||a===0?t=0:(this._startTime=null,t=a*d)}t*=this._updateTimeScale(e);const u=this._updateTime(t),f=this._updateWeight(e);if(f>0){const d=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Y1:for(let _=0,g=d.length;_!==g;++_)d[_].evaluate(u),h[_].accumulateAdditive(f);break;case dm:default:for(let _=0,g=d.length;_!==g;++_)d[_].evaluate(u),h[_].accumulate(r,f)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const a=this._weightInterpolant;if(a!==null){const r=a.evaluate(e)[0];t*=r,e>a.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const a=this._timeScaleInterpolant;if(a!==null){const r=a.evaluate(e)[0];t*=r,e>a.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,a=this.loop;let r=this.time+e,l=this._loopCount;const u=a===q1;if(e===0)return l===-1?r:u&&(l&1)===1?t-r:r;if(a===j1){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(l===-1&&(e>=0?(l=0,this._setEndings(!0,this.repetitions===0,u)):this._setEndings(this.repetitions===0,!0,u)),r>=t||r<0){const f=Math.floor(r/t);r-=t*f,l+=Math.abs(f);const d=this.repetitions-l;if(d<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(d===1){const h=e<0;this._setEndings(h,!h,u)}else this._setEndings(!1,!1,u);this._loopCount=l,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f})}}else this.time=r;if(u&&(l&1)===1)return t-r}return r}_setEndings(e,t,a){const r=this._interpolantSettings;a?(r.endingStart=fo,r.endingEnd=fo):(e?r.endingStart=this.zeroSlopeAtStart?fo:uo:r.endingStart=Yu,t?r.endingEnd=this.zeroSlopeAtEnd?fo:uo:r.endingEnd=Yu)}_scheduleFading(e,t,a){const r=this._mixer,l=r.time;let u=this._weightInterpolant;u===null&&(u=r._lendControlInterpolant(),this._weightInterpolant=u);const f=u.parameterPositions,d=u.sampleValues;return f[0]=l,d[0]=t,f[1]=l+e,d[1]=a,this}}const PT=new Float32Array(1);class zT extends or{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const a=e._localRoot||this._root,r=e._clip.tracks,l=r.length,u=e._propertyBindings,f=e._interpolants,d=a.uuid,h=this._bindingsByRootAndName;let _=h[d];_===void 0&&(_={},h[d]=_);for(let g=0;g!==l;++g){const v=r[g],y=v.name;let E=_[y];if(E!==void 0)++E.referenceCount,u[g]=E;else{if(E=u[g],E!==void 0){E._cacheIndex===null&&(++E.referenceCount,this._addInactiveBinding(E,d,y));continue}const T=t&&t._propertyBindings[g].binding.parsedPath;E=new bT(jt.create(a,y,T),v.ValueTypeName,v.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,d,y),u[g]=E}f[g].resultBuffer=E.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const a=(e._localRoot||this._root).uuid,r=e._clip.uuid,l=this._actionsByClip[r];this._bindAction(e,l&&l.knownActions[0]),this._addInactiveAction(e,r,a)}const t=e._propertyBindings;for(let a=0,r=t.length;a!==r;++a){const l=t[a];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let a=0,r=t.length;a!==r;++a){const l=t[a];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,a){const r=this._actions,l=this._actionsByClip;let u=l[t];if(u===void 0)u={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,l[t]=u;else{const f=u.knownActions;e._byClipCacheIndex=f.length,f.push(e)}e._cacheIndex=r.length,r.push(e),u.actionByRoot[a]=e}_removeInactiveAction(e){const t=this._actions,a=t[t.length-1],r=e._cacheIndex;a._cacheIndex=r,t[r]=a,t.pop(),e._cacheIndex=null;const l=e._clip.uuid,u=this._actionsByClip,f=u[l],d=f.knownActions,h=d[d.length-1],_=e._byClipCacheIndex;h._byClipCacheIndex=_,d[_]=h,d.pop(),e._byClipCacheIndex=null;const g=f.actionByRoot,v=(e._localRoot||this._root).uuid;delete g[v],d.length===0&&delete u[l],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let a=0,r=t.length;a!==r;++a){const l=t[a];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(e){const t=this._actions,a=e._cacheIndex,r=this._nActiveActions++,l=t[r];e._cacheIndex=r,t[r]=e,l._cacheIndex=a,t[a]=l}_takeBackAction(e){const t=this._actions,a=e._cacheIndex,r=--this._nActiveActions,l=t[r];e._cacheIndex=r,t[r]=e,l._cacheIndex=a,t[a]=l}_addInactiveBinding(e,t,a){const r=this._bindingsByRootAndName,l=this._bindings;let u=r[t];u===void 0&&(u={},r[t]=u),u[a]=e,e._cacheIndex=l.length,l.push(e)}_removeInactiveBinding(e){const t=this._bindings,a=e.binding,r=a.rootNode.uuid,l=a.path,u=this._bindingsByRootAndName,f=u[r],d=t[t.length-1],h=e._cacheIndex;d._cacheIndex=h,t[h]=d,t.pop(),delete f[l],Object.keys(f).length===0&&delete u[r]}_lendBinding(e){const t=this._bindings,a=e._cacheIndex,r=this._nActiveBindings++,l=t[r];e._cacheIndex=r,t[r]=e,l._cacheIndex=a,t[a]=l}_takeBackBinding(e){const t=this._bindings,a=e._cacheIndex,r=--this._nActiveBindings,l=t[r];e._cacheIndex=r,t[r]=e,l._cacheIndex=a,t[a]=l}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let a=e[t];return a===void 0&&(a=new zy(new Float32Array(2),new Float32Array(2),1,PT),a.__cacheIndex=t,e[t]=a),a}_takeBackControlInterpolant(e){const t=this._controlInterpolants,a=e.__cacheIndex,r=--this._nActiveControlInterpolants,l=t[r];e.__cacheIndex=r,t[r]=e,l.__cacheIndex=a,t[a]=l}clipAction(e,t,a){const r=t||this._root,l=r.uuid;let u=typeof e=="string"?Jp.findByName(r,e):e;const f=u!==null?u.uuid:e,d=this._actionsByClip[f];let h=null;if(a===void 0&&(u!==null?a=u.blendMode:a=dm),d!==void 0){const g=d.actionByRoot[l];if(g!==void 0&&g.blendMode===a)return g;h=d.knownActions[0],u===null&&(u=h._clip)}if(u===null)return null;const _=new IT(this,u,t,a);return this._bindAction(_,h),this._addInactiveAction(_,f,l),_}existingAction(e,t){const a=t||this._root,r=a.uuid,l=typeof e=="string"?Jp.findByName(a,e):e,u=l?l.uuid:e,f=this._actionsByClip[u];return f!==void 0&&f.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let a=t-1;a>=0;--a)e[a].stop();return this}update(e){e*=this.timeScale;const t=this._actions,a=this._nActiveActions,r=this.time+=e,l=Math.sign(e),u=this._accuIndex^=1;for(let h=0;h!==a;++h)t[h]._update(r,e,l,u);const f=this._bindings,d=this._nActiveBindings;for(let h=0;h!==d;++h)f[h].apply(u);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,a=e.uuid,r=this._actionsByClip,l=r[a];if(l!==void 0){const u=l.knownActions;for(let f=0,d=u.length;f!==d;++f){const h=u[f];this._deactivateAction(h);const _=h._cacheIndex,g=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,g._cacheIndex=_,t[_]=g,t.pop(),this._removeInactiveBindingsForAction(h)}delete r[a]}}uncacheRoot(e){const t=e.uuid,a=this._actionsByClip;for(const u in a){const f=a[u].actionByRoot,d=f[t];d!==void 0&&(this._deactivateAction(d),this._removeInactiveAction(d))}const r=this._bindingsByRootAndName,l=r[t];if(l!==void 0)for(const u in l){const f=l[u];f.restoreOriginalState(),this._removeInactiveBinding(f)}}uncacheAction(e,t){const a=this.existingAction(e,t);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}}const _x=new dt;class BT{constructor(e,t,a=0,r=1/0){this.ray=new Zl(e,t),this.near=a,this.far=r,this.camera=null,this.layers=new gm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _x.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_x),this}intersectObject(e,t=!0,a=[]){return $p(e,this,a,t),a.sort(vx),a}intersectObjects(e,t=!0,a=[]){for(let r=0,l=e.length;r<l;r++)$p(e[r],this,a,t);return a.sort(vx),a}}function vx(o,e){return o.distance-e.distance}function $p(o,e,t,a){let r=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(r=!1),r===!0&&a===!0){const l=o.children;for(let u=0,f=l.length;u<f;u++)$p(l[u],e,t,!0)}}function xx(o,e,t,a){const r=FT(a);switch(t){case hy:return o*e;case cm:return o*e/r.components*r.byteLength;case um:return o*e/r.components*r.byteLength;case py:return o*e*2/r.components*r.byteLength;case fm:return o*e*2/r.components*r.byteLength;case dy:return o*e*3/r.components*r.byteLength;case zi:return o*e*4/r.components*r.byteLength;case hm:return o*e*4/r.components*r.byteLength;case Vu:case Gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ku:case Xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:case Ep:return Math.max(o,16)*Math.max(e,8)/4;case yp:case Mp:return Math.max(o,8)*Math.max(e,8)/2;case Tp:case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Vp:case Gp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Xp:case jp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wp:case qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FT(o){switch(o){case ua:case ly:return{byteLength:1,components:1};case Vl:case cy:case ja:return{byteLength:2,components:1};case om:case lm:return{byteLength:2,components:4};case rr:case rm:case Yi:return{byteLength:4,components:1};case uy:case fy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xy(){let o=null,e=!1,t=null,a=null;function r(l,u){t(l,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function HT(o){const e=new WeakMap;function t(f,d){const h=f.array,_=f.usage,g=h.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,h,_),f.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,h){const _=d.array,g=d.updateRanges;if(o.bindBuffer(h,f),g.length===0)o.bufferSubData(h,0,_);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];o.bufferSubData(h,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(o.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:r,remove:l,update:u}}var VT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$T=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ub=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ub=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:VT,alphahash_pars_fragment:GT,alphamap_fragment:kT,alphamap_pars_fragment:XT,alphatest_fragment:jT,alphatest_pars_fragment:WT,aomap_fragment:qT,aomap_pars_fragment:YT,batching_pars_vertex:KT,batching_vertex:ZT,begin_vertex:QT,beginnormal_vertex:JT,bsdfs:$T,iridescence_fragment:eb,bumpmap_pars_fragment:tb,clipping_planes_fragment:nb,clipping_planes_pars_fragment:ib,clipping_planes_pars_vertex:ab,clipping_planes_vertex:sb,color_fragment:rb,color_pars_fragment:ob,color_pars_vertex:lb,color_vertex:cb,common:ub,cube_uv_reflection_fragment:fb,defaultnormal_vertex:hb,displacementmap_pars_vertex:db,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:gb,colorspace_fragment:_b,colorspace_pars_fragment:vb,envmap_fragment:xb,envmap_common_pars_fragment:yb,envmap_pars_fragment:Sb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Ub,envmap_vertex:Eb,fog_vertex:Tb,fog_pars_vertex:bb,fog_fragment:Ab,fog_pars_fragment:wb,gradientmap_pars_fragment:Rb,lightmap_pars_fragment:Cb,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Lb,lights_pars_begin:Nb,lights_toon_fragment:Ob,lights_toon_pars_fragment:Ib,lights_phong_fragment:Pb,lights_phong_pars_fragment:zb,lights_physical_fragment:Bb,lights_physical_pars_fragment:Fb,lights_fragment_begin:Hb,lights_fragment_maps:Vb,lights_fragment_end:Gb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:Wb,map_fragment:qb,map_pars_fragment:Yb,map_particle_fragment:Kb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:Jb,morphinstance_vertex:$b,morphcolor_vertex:eA,morphnormal_vertex:tA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:sA,normal_pars_fragment:rA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:dA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:_A,dithering_fragment:vA,dithering_pars_fragment:xA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:EA,shadowmap_vertex:TA,shadowmask_pars_fragment:bA,skinbase_vertex:AA,skinning_pars_vertex:wA,skinning_vertex:RA,skinnormal_vertex:CA,specularmap_fragment:DA,specularmap_pars_fragment:LA,tonemapping_fragment:NA,tonemapping_pars_fragment:UA,transmission_fragment:OA,transmission_pars_fragment:IA,uv_pars_fragment:PA,uv_pars_vertex:zA,uv_vertex:BA,worldpos_vertex:FA,background_vert:HA,background_frag:VA,backgroundCube_vert:GA,backgroundCube_frag:kA,cube_vert:XA,cube_frag:jA,depth_vert:WA,depth_frag:qA,distanceRGBA_vert:YA,distanceRGBA_frag:KA,equirect_vert:ZA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:$A,meshbasic_vert:e2,meshbasic_frag:t2,meshlambert_vert:n2,meshlambert_frag:i2,meshmatcap_vert:a2,meshmatcap_frag:s2,meshnormal_vert:r2,meshnormal_frag:o2,meshphong_vert:l2,meshphong_frag:c2,meshphysical_vert:u2,meshphysical_frag:f2,meshtoon_vert:h2,meshtoon_frag:d2,points_vert:p2,points_frag:m2,shadow_vert:g2,shadow_frag:_2,sprite_vert:v2,sprite_frag:x2},Ie={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},oa={basic:{uniforms:ei([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ei([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ei([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ei([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ei([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ei([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ei([Ie.points,Ie.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ei([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ei([Ie.common,Ie.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ei([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ei([Ie.sprite,Ie.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:ei([Ie.common,Ie.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:ei([Ie.lights,Ie.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};oa.physical={uniforms:ei([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Iu={r:0,b:0,g:0},er=new fa,y2=new dt;function S2(o,e,t,a,r,l,u){const f=new rt(0);let d=l===!0?0:1,h,_,g=null,v=0,y=null;function E(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?t:e).get(R)),R}function T(N){let R=!1;const O=E(N);O===null?x(f,d):O&&O.isColor&&(x(O,1),R=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(N,R){const O=E(R);O&&(O.isCubeTexture||O.mapping===nf)?(_===void 0&&(_=new Le(new Ft(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:So(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),er.copy(R.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler(er)),_.material.toneMapped=Ut.getTransfer(O.colorSpace)!==Yt,(g!==O||v!==O.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(h===void 0&&(h=new Le(new Ao(2,2),new kn({name:"BackgroundMaterial",uniforms:So(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=O,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(O.colorSpace)!==Yt,O.matrixAutoUpdate===!0&&O.updateMatrix(),h.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function x(N,R){N.getRGB(Iu,Ey(o)),a.buffers.color.setClear(Iu.r,Iu.g,Iu.b,R,u)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,R=1){f.set(N),d=R,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,x(f,d)},render:T,addToRenderList:S,dispose:D}}function M2(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function f(A,V,W,ae,ue){let re=!1;const B=g(ae,W,V);l!==B&&(l=B,h(l.object)),re=y(A,ae,W,ue),re&&E(A,ae,W,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,R(A,V,W,ae),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return o.createVertexArray()}function h(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function g(A,V,W){const ae=W.wireframe===!0;let ue=a[A.id];ue===void 0&&(ue={},a[A.id]=ue);let re=ue[V.id];re===void 0&&(re={},ue[V.id]=re);let B=re[ae];return B===void 0&&(B=v(d()),re[ae]=B),B}function v(A){const V=[],W=[],ae=[];for(let ue=0;ue<t;ue++)V[ue]=0,W[ue]=0,ae[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:ae,object:A,attributes:{},index:null}}function y(A,V,W,ae){const ue=l.attributes,re=V.attributes;let B=0;const K=W.getAttributes();for(const Y in K)if(K[Y].location>=0){const Te=ue[Y];let z=re[Y];if(z===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),Te===void 0||Te.attribute!==z||z&&Te.data!==z.data)return!0;B++}return l.attributesNum!==B||l.index!==ae}function E(A,V,W,ae){const ue={},re=V.attributes;let B=0;const K=W.getAttributes();for(const Y in K)if(K[Y].location>=0){let Te=re[Y];Te===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Te=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Te=A.instanceColor));const z={};z.attribute=Te,Te&&Te.data&&(z.data=Te.data),ue[Y]=z,B++}l.attributes=ue,l.attributesNum=B,l.index=ae}function T(){const A=l.newAttributes;for(let V=0,W=A.length;V<W;V++)A[V]=0}function S(A){x(A,0)}function x(A,V){const W=l.newAttributes,ae=l.enabledAttributes,ue=l.attributeDivisors;W[A]=1,ae[A]===0&&(o.enableVertexAttribArray(A),ae[A]=1),ue[A]!==V&&(o.vertexAttribDivisor(A,V),ue[A]=V)}function D(){const A=l.newAttributes,V=l.enabledAttributes;for(let W=0,ae=V.length;W<ae;W++)V[W]!==A[W]&&(o.disableVertexAttribArray(W),V[W]=0)}function N(A,V,W,ae,ue,re,B){B===!0?o.vertexAttribIPointer(A,V,W,ue,re):o.vertexAttribPointer(A,V,W,ae,ue,re)}function R(A,V,W,ae){T();const ue=ae.attributes,re=W.getAttributes(),B=V.defaultAttributeValues;for(const K in re){const Y=re[K];if(Y.location>=0){let de=ue[K];if(de===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const Te=de.normalized,z=de.itemSize,$=e.get(de);if($===void 0)continue;const ye=$.buffer,ve=$.type,Ne=$.bytesPerElement,te=ve===o.INT||ve===o.UNSIGNED_INT||de.gpuType===rm;if(de.isInterleavedBufferAttribute){const fe=de.data,Ue=fe.stride,Fe=de.offset;if(fe.isInstancedInterleavedBuffer){for(let je=0;je<Y.locationSize;je++)x(Y.location+je,fe.meshPerAttribute);A.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let je=0;je<Y.locationSize;je++)S(Y.location+je);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let je=0;je<Y.locationSize;je++)N(Y.location+je,z/Y.locationSize,ve,Te,Ue*Ne,(Fe+z/Y.locationSize*je)*Ne,te)}else{if(de.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)x(Y.location+fe,de.meshPerAttribute);A.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let fe=0;fe<Y.locationSize;fe++)S(Y.location+fe);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let fe=0;fe<Y.locationSize;fe++)N(Y.location+fe,z/Y.locationSize,ve,Te,z*Ne,z/Y.locationSize*fe*Ne,te)}}else if(B!==void 0){const Te=B[K];if(Te!==void 0)switch(Te.length){case 2:o.vertexAttrib2fv(Y.location,Te);break;case 3:o.vertexAttrib3fv(Y.location,Te);break;case 4:o.vertexAttrib4fv(Y.location,Te);break;default:o.vertexAttrib1fv(Y.location,Te)}}}}D()}function O(){G();for(const A in a){const V=a[A];for(const W in V){const ae=V[W];for(const ue in ae)_(ae[ue].object),delete ae[ue];delete V[W]}delete a[A]}}function I(A){if(a[A.id]===void 0)return;const V=a[A.id];for(const W in V){const ae=V[W];for(const ue in ae)_(ae[ue].object),delete ae[ue];delete V[W]}delete a[A.id]}function U(A){for(const V in a){const W=a[V];if(W[A.id]===void 0)continue;const ae=W[A.id];for(const ue in ae)_(ae[ue].object),delete ae[ue];delete W[A.id]}}function G(){b(),u=!0,l!==r&&(l=r,h(l.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:G,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function E2(o,e,t){let a;function r(h){a=h}function l(h,_){o.drawArrays(a,h,_),t.update(_,a,1)}function u(h,_,g){g!==0&&(o.drawArraysInstanced(a,h,_,g),t.update(_,a,g))}function f(h,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];t.update(y,a,1)}function d(h,_,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)u(h[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,h,0,_,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=_[T]*v[T];t.update(E,a,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function T2(o,e,t,a){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(U){return!(U!==zi&&a.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const G=U===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ua&&a.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Yi&&!G)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=d(h);_!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:O,maxSamples:I}}function b2(o){const e=this;let t=null,a=0,r=!1,l=!1;const u=new Ts,f=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||r;return r=v,a=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=_(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!r||E===null||E.length===0||l&&!S)l?_(null):h();else{const D=l?0:a,N=D*4;let R=x.clippingState||null;d.value=R,R=_(E,v,N,y);for(let O=0;O!==N;++O)R[O]=t[O];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,y,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,E!==!0||S===null){const x=y+T*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,R=y;N!==T;++N,R+=4)u.copy(g[N]).applyMatrix4(D,f),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function A2(o){let e=new WeakMap;function t(u,f){return f===vp?u.mapping=vo:f===xp&&(u.mapping=xo),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===vp||f===xp)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new jE(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),t(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const ho=4,yx=[.125,.215,.35,.446,.526,.582],sr=20,Qd=new sf,Sx=new rt;let Jd=null,$d=0,ep=0,tp=!1;const ir=(1+Math.sqrt(5))/2,lo=1/ir,Mx=[new F(-ir,lo,0),new F(ir,lo,0),new F(-lo,0,ir),new F(lo,0,ir),new F(0,ir,-lo),new F(0,ir,lo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],w2=new F;class Ex{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,r=100,l={}){const{size:u=256,position:f=w2}=l;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,ep),this._renderer.xr.enabled=tp,e.scissorTest=!1,Pu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ja,format:zi,colorSpace:ai,depthBuffer:!1},r=Tx(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tx(e,t,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R2(l)),this._blurMaterial=C2(l,e,t)}return r}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Qd)}_sceneToCubeUV(e,t,a,r,l){const d=new Zn(90,1,t,a),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Sx),g.toneMapping=ws,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const T=new Ga({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),S=new Le(new Ft,T);let x=!1;const D=e.background;D?D.isColor&&(T.color.copy(D),e.background=null,x=!0):(T.color.copy(Sx),x=!0);for(let N=0;N<6;N++){const R=N%3;R===0?(d.up.set(0,h[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+_[N],l.y,l.z)):R===1?(d.up.set(0,0,h[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+_[N],l.z)):(d.up.set(0,h[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+_[N]));const O=this._cubeSize;Pu(r,R*O,N>2?O:0,O,O),g.setRenderTarget(r),x&&g.render(S,d),g.render(e,d)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=D}_textureToCubeUV(e,t){const a=this._renderer,r=e.mapping===vo||e.mapping===xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bx());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new Le(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Pu(t,0,0,3*d,2*d),a.setRenderTarget(t),a.render(u,Qd)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Mx[(r-l-1)%Mx.length];this._blur(e,l-1,l,u,f)}t.autoClear=a}_blur(e,t,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,r,"latitudinal",l),this._halfBlur(u,e,a,a,r,"longitudinal",l)}_halfBlur(e,t,a,r,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Le(this._lodPlanes[r],h),v=h.uniforms,y=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*sr-1),T=l/E,S=isFinite(l)?1+Math.floor(_*T):sr;S>sr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${sr}`);const x=[];let D=0;for(let U=0;U<sr;++U){const G=U/T,b=Math.exp(-G*G/2);x.push(b),U===0?D+=b:U<S&&(D+=2*b)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-a;const R=this._sizeLods[r],O=3*R*(r>N-ho?r-N+ho:0),I=4*(this._cubeSize-R);Pu(t,O,I,3*R,2*R),d.setRenderTarget(t),d.render(g,Qd)}}function R2(o){const e=[],t=[],a=[];let r=o;const l=o-ho+1+yx.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);t.push(f);let d=1/f;u>o-ho?d=yx[u-o+ho-1]:u===0&&(d=0),a.push(d);const h=1/(f-2),_=-h,g=1+h,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,T=3,S=2,x=1,D=new Float32Array(T*E*y),N=new Float32Array(S*E*y),R=new Float32Array(x*E*y);for(let I=0;I<y;I++){const U=I%3*2/3-1,G=I>2?0:-1,b=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];D.set(b,T*E*I),N.set(v,S*E*I);const A=[I,I,I,I,I,I];R.set(A,x*E*I)}const O=new zn;O.setAttribute("position",new ii(D,T)),O.setAttribute("uv",new ii(N,S)),O.setAttribute("faceIndex",new ii(R,x)),e.push(O),r>ho&&r--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function Tx(o,e,t){const a=new Bi(o,e,t);return a.texture.mapping=nf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Pu(o,e,t,a,r){o.viewport.set(e,t,a,r),o.scissor.set(e,t,a,r)}function C2(o,e,t){const a=new Float32Array(sr),r=new F(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function bx(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Ax(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function bm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D2(o){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const d=f.mapping,h=d===vp||d===xp,_=d===vo||d===xo;if(h||_){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Ex(o)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return h&&y&&y.height>0||_&&y&&r(y)?(t===null&&(t=new Ex(o)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let d=0;const h=6;for(let _=0;_<h;_++)f[_]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function L2(o){const e={};function t(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const r=t(a);return r===null&&Yl("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function N2(o,e,t,a){const r={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function h(g){const v=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let N=0,R=D.length;N<R;N+=3){const O=D[N+0],I=D[N+1],U=D[N+2];v.push(O,I,I,U,U,O)}}else if(E!==void 0){const D=E.array;T=E.version;for(let N=0,R=D.length/3-1;N<R;N+=3){const O=N+0,I=N+1,U=N+2;v.push(O,I,I,U,U,O)}}else return;const S=new(vy(v)?My:Sy)(v,1);S.version=T;const x=l.get(g);x&&e.remove(x),l.set(g,S)}function _(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function U2(o,e,t){let a;function r(v){a=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,y){o.drawElements(a,y,l,v*u),t.update(y,a,1)}function h(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,l,v*u,E),t.update(y,a,E))}function _(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];t.update(S,a,1)}function g(v,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,l,v,0,T,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*T[D];t.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function O2(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=f*(l/3);break;case o.LINES:t.lines+=f*(l/2);break;case o.LINE_STRIP:t.lines+=f*(l-1);break;case o.LINE_LOOP:t.lines+=f*l;break;case o.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:a}}function I2(o,e,t){const a=new WeakMap,r=new Pt;function l(u,f,d){const h=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let A=function(){G.dispose(),a.delete(f),f.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let O=f.attributes.position.count*R,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*I*4*g),G=new xy(U,O,I,g);G.type=Yi,G.needsUpdate=!0;const b=R*4;for(let V=0;V<g;V++){const W=x[V],ae=D[V],ue=N[V],re=O*I*4*V;for(let B=0;B<W.count;B++){const K=B*b;E===!0&&(r.fromBufferAttribute(W,B),U[re+K+0]=r.x,U[re+K+1]=r.y,U[re+K+2]=r.z,U[re+K+3]=0),T===!0&&(r.fromBufferAttribute(ae,B),U[re+K+4]=r.x,U[re+K+5]=r.y,U[re+K+6]=r.z,U[re+K+7]=0),S===!0&&(r.fromBufferAttribute(ue,B),U[re+K+8]=r.x,U[re+K+9]=r.y,U[re+K+10]=r.z,U[re+K+11]=ue.itemSize===4?r.w:1)}}v={count:g,texture:G,size:new Je(O,I)},a.set(f,v),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const T=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",T),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function P2(o,e,t,a){let r=new WeakMap;function l(d){const h=a.render.frame,_=d.geometry,g=e.get(d,_);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return g}function u(){r=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const jy=new Rn,wx=new Oy(1,1),Wy=new xy,qy=new CE,Yy=new by,Rx=[],Cx=[],Dx=new Float32Array(16),Lx=new Float32Array(9),Nx=new Float32Array(4);function Do(o,e,t){const a=o[0];if(a<=0||a>0)return o;const r=e*t;let l=Rx[r];if(l===void 0&&(l=new Float32Array(r),Rx[r]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,o[u].toArray(l,f)}return l}function Ln(o,e){if(o.length!==e.length)return!1;for(let t=0,a=o.length;t<a;t++)if(o[t]!==e[t])return!1;return!0}function Nn(o,e){for(let t=0,a=e.length;t<a;t++)o[t]=e[t]}function rf(o,e){let t=Cx[e];t===void 0&&(t=new Int32Array(e),Cx[e]=t);for(let a=0;a!==e;++a)t[a]=o.allocateTextureUnit();return t}function z2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function B2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;o.uniform2fv(this.addr,e),Nn(t,e)}}function F2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;o.uniform3fv(this.addr,e),Nn(t,e)}}function H2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;o.uniform4fv(this.addr,e),Nn(t,e)}}function V2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(Ln(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Ln(t,a))return;Nx.set(a),o.uniformMatrix2fv(this.addr,!1,Nx),Nn(t,a)}}function G2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(Ln(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Ln(t,a))return;Lx.set(a),o.uniformMatrix3fv(this.addr,!1,Lx),Nn(t,a)}}function k2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(Ln(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Ln(t,a))return;Dx.set(a),o.uniformMatrix4fv(this.addr,!1,Dx),Nn(t,a)}}function X2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function j2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;o.uniform2iv(this.addr,e),Nn(t,e)}}function W2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;o.uniform3iv(this.addr,e),Nn(t,e)}}function q2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;o.uniform4iv(this.addr,e),Nn(t,e)}}function Y2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function K2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;o.uniform2uiv(this.addr,e),Nn(t,e)}}function Z2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;o.uniform3uiv(this.addr,e),Nn(t,e)}}function Q2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;o.uniform4uiv(this.addr,e),Nn(t,e)}}function J2(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(wx.compareFunction=_y,l=wx):l=jy,t.setTexture2D(e||l,r)}function $2(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),t.setTexture3D(e||qy,r)}function ew(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),t.setTextureCube(e||Yy,r)}function tw(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),t.setTexture2DArray(e||Wy,r)}function nw(o){switch(o){case 5126:return z2;case 35664:return B2;case 35665:return F2;case 35666:return H2;case 35674:return V2;case 35675:return G2;case 35676:return k2;case 5124:case 35670:return X2;case 35667:case 35671:return j2;case 35668:case 35672:return W2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return K2;case 36295:return Z2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(o,e){o.uniform1fv(this.addr,e)}function aw(o,e){const t=Do(e,this.size,2);o.uniform2fv(this.addr,t)}function sw(o,e){const t=Do(e,this.size,3);o.uniform3fv(this.addr,t)}function rw(o,e){const t=Do(e,this.size,4);o.uniform4fv(this.addr,t)}function ow(o,e){const t=Do(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function lw(o,e){const t=Do(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function cw(o,e){const t=Do(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function uw(o,e){o.uniform1iv(this.addr,e)}function fw(o,e){o.uniform2iv(this.addr,e)}function hw(o,e){o.uniform3iv(this.addr,e)}function dw(o,e){o.uniform4iv(this.addr,e)}function pw(o,e){o.uniform1uiv(this.addr,e)}function mw(o,e){o.uniform2uiv(this.addr,e)}function gw(o,e){o.uniform3uiv(this.addr,e)}function _w(o,e){o.uniform4uiv(this.addr,e)}function vw(o,e,t){const a=this.cache,r=e.length,l=rf(t,r);Ln(a,l)||(o.uniform1iv(this.addr,l),Nn(a,l));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||jy,l[u])}function xw(o,e,t){const a=this.cache,r=e.length,l=rf(t,r);Ln(a,l)||(o.uniform1iv(this.addr,l),Nn(a,l));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||qy,l[u])}function yw(o,e,t){const a=this.cache,r=e.length,l=rf(t,r);Ln(a,l)||(o.uniform1iv(this.addr,l),Nn(a,l));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||Yy,l[u])}function Sw(o,e,t){const a=this.cache,r=e.length,l=rf(t,r);Ln(a,l)||(o.uniform1iv(this.addr,l),Nn(a,l));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||Wy,l[u])}function Mw(o){switch(o){case 5126:return iw;case 35664:return aw;case 35665:return sw;case 35666:return rw;case 35674:return ow;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class Ew{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=nw(t.type)}}class Tw{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mw(t.type)}}class bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(e,t[f.id],a)}}}const np=/(\w+)(\])?(\[|\.)?/g;function Ux(o,e){o.seq.push(e),o.map[e.id]=e}function Aw(o,e,t){const a=o.name,r=a.length;for(np.lastIndex=0;;){const l=np.exec(a),u=np.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===r){Ux(t,h===void 0?new Ew(f,o,e):new Tw(f,o,e));break}else{let g=t.map[f];g===void 0&&(g=new bw(f),Ux(t,g)),t=g}}}class ju{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=e.getActiveUniform(t,r),u=e.getUniformLocation(t,l.name);Aw(l,u,this)}}setValue(e,t,a,r){const l=this.map[t];l!==void 0&&l.setValue(e,a,r)}setOptional(e,t,a){const r=t[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,t,a,r){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,r)}}static seqWithValue(e,t){const a=[];for(let r=0,l=e.length;r!==l;++r){const u=e[r];u.id in t&&a.push(u)}return a}}function Ox(o,e,t){const a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),a}const ww=37297;let Rw=0;function Cw(o,e){const t=o.split(`
`),a=[],r=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=r;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return a.join(`
`)}const Ix=new vt;function Dw(o){Ut._getMatrix(Ix,Ut.workingColorSpace,o);const e=`mat3( ${Ix.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Ku:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Px(o,e,t){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Cw(o.getShaderSource(e),f)}else return l}function Lw(o,e){const t=Dw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nw(o,e){let t;switch(e){case ey:t="Linear";break;case ty:t="Reinhard";break;case ny:t="Cineon";break;case sm:t="ACESFilmic";break;case ay:t="AgX";break;case sy:t="Neutral";break;case iy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zu=new F;function Uw(){Ut.getLuminanceCoefficients(zu);const o=zu.x.toFixed(4),e=zu.y.toFixed(4),t=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ow(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function Iw(o){const e=[];for(const t in o){const a=o[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function Pw(o,e){const t={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(e,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return t}function zl(o){return o!==""}function zx(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(o){return o.replace(zw,Fw)}const Bw=new Map;function Fw(o,e){let t=xt[e];if(t===void 0){const a=Bw.get(e);if(a!==void 0)t=xt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return em(t)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fx(o){return o.replace(Hw,Vw)}function Vw(o,e,t,a){let r="";for(let l=parseInt(e);l<parseInt(t);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function Hx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ha&&(e="SHADOWMAP_TYPE_VSM"),e}function kw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vo:case xo:e="ENVMAP_TYPE_CUBE";break;case nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $x:e="ENVMAP_BLENDING_MULTIPLY";break;case G1:e="ENVMAP_BLENDING_MIX";break;case k1:e="ENVMAP_BLENDING_ADD";break}return e}function Ww(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function qw(o,e,t,a){const r=o.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=Gw(t),h=kw(t),_=Xw(t),g=jw(t),v=Ww(t),y=Ow(t),E=Iw(l),T=r.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(zl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(zl).join(`
`),x.length>0&&(x+=`
`)):(S=[Hx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),x=[Hx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?xt.tonemapping_pars_fragment:"",t.toneMapping!==ws?Nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Lw("linearToOutputTexel",t.outputColorSpace),Uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),u=em(u),u=zx(u,t),u=Bx(u,t),f=em(f),f=zx(f,t),f=Bx(f,t),u=Fx(u),f=Fx(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+S+u,R=D+x+f,O=Ox(r,r.VERTEX_SHADER,N),I=Ox(r,r.FRAGMENT_SHADER,R);r.attachShader(T,O),r.attachShader(T,I),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function U(V){if(o.debug.checkShaderErrors){const W=r.getProgramInfoLog(T)||"",ae=r.getShaderInfoLog(O)||"",ue=r.getShaderInfoLog(I)||"",re=W.trim(),B=ae.trim(),K=ue.trim();let Y=!0,de=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,O,I);else{const Te=Px(r,O,"vertex"),z=Px(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+re+`
`+Te+`
`+z)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(B===""||K==="")&&(de=!1);de&&(V.diagnostics={runnable:Y,programLog:re,vertexShader:{log:B,prefix:S},fragmentShader:{log:K,prefix:x}})}r.deleteShader(O),r.deleteShader(I),G=new ju(r,T),b=Pw(r,T)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,ww)),A},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=I,this}let Yw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new Zw(e),t.set(e,a)),a}}class Zw{constructor(e){this.id=Yw++,this.code=e,this.usedTimes=0}}function Qw(o,e,t,a,r,l,u){const f=new gm,d=new Kw,h=new Set,_=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,A,V,W,ae){const ue=W.fog,re=ae.geometry,B=b.isMeshStandardMaterial?W.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),Y=K&&K.mapping===nf?K.image.height:null,de=E[b.type];b.precision!==null&&(y=r.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const Te=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,z=Te!==void 0?Te.length:0;let $=0;re.morphAttributes.position!==void 0&&($=1),re.morphAttributes.normal!==void 0&&($=2),re.morphAttributes.color!==void 0&&($=3);let ye,ve,Ne,te;if(de){const Mt=oa[de];ye=Mt.vertexShader,ve=Mt.fragmentShader}else ye=b.vertexShader,ve=b.fragmentShader,d.update(b),Ne=d.getVertexShaderID(b),te=d.getFragmentShaderID(b);const fe=o.getRenderTarget(),Ue=o.state.buffers.depth.getReversed(),Fe=ae.isInstancedMesh===!0,je=ae.isBatchedMesh===!0,mt=!!b.map,an=!!b.matcap,X=!!K,Rt=!!b.aoMap,ct=!!b.lightMap,ot=!!b.bumpMap,Ze=!!b.normalMap,Qt=!!b.displacementMap,ke=!!b.emissiveMap,at=!!b.metalnessMap,on=!!b.roughnessMap,Ht=b.anisotropy>0,P=b.clearcoat>0,w=b.dispersion>0,ee=b.iridescence>0,pe=b.sheen>0,Ee=b.transmission>0,he=Ht&&!!b.anisotropyMap,Ye=P&&!!b.clearcoatMap,Re=P&&!!b.clearcoatNormalMap,Ke=P&&!!b.clearcoatRoughnessMap,Qe=ee&&!!b.iridescenceMap,Ae=ee&&!!b.iridescenceThicknessMap,Ce=pe&&!!b.sheenColorMap,et=pe&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Oe=!!b.specularColorMap,ht=!!b.specularIntensityMap,q=Ee&&!!b.transmissionMap,we=Ee&&!!b.thicknessMap,De=!!b.gradientMap,He=!!b.alphaMap,be=b.alphaTest>0,_e=!!b.alphaHash,Ve=!!b.extensions;let ft=ws;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ft=o.toneMapping);const Vt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:ve,defines:b.defines,customVertexShaderID:Ne,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:je,batchingColor:je&&ae._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ae.instanceColor!==null,instancingMorph:Fe&&ae.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ai,alphaToCoverage:!!b.alphaToCoverage,map:mt,matcap:an,envMap:X,envMapMode:X&&K.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:ct,bumpMap:ot,normalMap:Ze,displacementMap:v&&Qt,emissiveMap:ke,normalMapObjectSpace:Ze&&b.normalMapType===J1,normalMapTangentSpace:Ze&&b.normalMapType===gy,metalnessMap:at,roughnessMap:on,anisotropy:Ht,anisotropyMap:he,clearcoat:P,clearcoatMap:Ye,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ke,dispersion:w,iridescence:ee,iridescenceMap:Qe,iridescenceThicknessMap:Ae,sheen:pe,sheenColorMap:Ce,sheenRoughnessMap:et,specularMap:ze,specularColorMap:Oe,specularIntensityMap:ht,transmission:Ee,transmissionMap:q,thicknessMap:we,gradientMap:De,opaque:b.transparent===!1&&b.blending===po&&b.alphaToCoverage===!1,alphaMap:He,alphaTest:be,alphaHash:_e,combine:b.combine,mapUv:mt&&T(b.map.channel),aoMapUv:Rt&&T(b.aoMap.channel),lightMapUv:ct&&T(b.lightMap.channel),bumpMapUv:ot&&T(b.bumpMap.channel),normalMapUv:Ze&&T(b.normalMap.channel),displacementMapUv:Qt&&T(b.displacementMap.channel),emissiveMapUv:ke&&T(b.emissiveMap.channel),metalnessMapUv:at&&T(b.metalnessMap.channel),roughnessMapUv:on&&T(b.roughnessMap.channel),anisotropyMapUv:he&&T(b.anisotropyMap.channel),clearcoatMapUv:Ye&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:et&&T(b.sheenRoughnessMap.channel),specularMapUv:ze&&T(b.specularMap.channel),specularColorMapUv:Oe&&T(b.specularColorMap.channel),specularIntensityMapUv:ht&&T(b.specularIntensityMap.channel),transmissionMapUv:q&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:He&&T(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ze||Ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!re.attributes.uv&&(mt||He),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ue,skinning:ae.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ft,decodeVideoTexture:mt&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===Yt,decodeVideoTextureEmissive:ke&&b.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(b.emissiveMap.colorSpace)===Yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||je)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=h.has(1),Vt.vertexUv2s=h.has(2),Vt.vertexUv3s=h.has(3),h.clear(),Vt}function x(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)A.push(V),A.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(D(A,b),N(A,b),A.push(o.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function D(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function N(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reversedDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=E[b.type];let V;if(A){const W=oa[A];V=Ds.clone(W.uniforms)}else V=b.uniforms;return V}function O(b,A){let V;for(let W=0,ae=_.length;W<ae;W++){const ue=_[W];if(ue.cacheKey===A){V=ue,++V.usedTimes;break}}return V===void 0&&(V=new qw(o,A,b,l),_.push(V)),V}function I(b){if(--b.usedTimes===0){const A=_.indexOf(b);_[A]=_[_.length-1],_.pop(),b.destroy()}}function U(b){d.remove(b)}function G(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:O,releaseProgram:I,releaseShaderCache:U,programs:_,dispose:G}}function Jw(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function r(u,f,d){o.get(u)[f]=d}function l(){o=new WeakMap}return{has:e,get:t,remove:a,update:r,dispose:l}}function $w(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Vx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Gx(){const o=[];let e=0;const t=[],a=[],r=[];function l(){e=0,t.length=0,a.length=0,r.length=0}function u(g,v,y,E,T,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=S),e++,x}function f(g,v,y,E,T,S){const x=u(g,v,y,E,T,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):t.push(x)}function d(g,v,y,E,T,S){const x=u(g,v,y,E,T,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):t.unshift(x)}function h(g,v){t.length>1&&t.sort(g||$w),a.length>1&&a.sort(v||Vx),r.length>1&&r.sort(v||Vx)}function _(){for(let g=e,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:a,transparent:r,init:l,push:f,unshift:d,finish:_,sort:h}}function eR(){let o=new WeakMap;function e(a,r){const l=o.get(a);let u;return l===void 0?(u=new Gx,o.set(a,[u])):r>=l.length?(u=new Gx,l.push(u)):u=l[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function tR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new rt};break;case"SpotLight":t={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return o[e.id]=t,t}}}function nR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let iR=0;function aR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sR(o){const e=new tR,t=nR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new F);const r=new F,l=new dt,u=new dt;function f(h){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let y=0,E=0,T=0,S=0,x=0,D=0,N=0,R=0,O=0,I=0,U=0;h.sort(aR);for(let b=0,A=h.length;b<A;b++){const V=h[b],W=V.color,ae=V.intensity,ue=V.distance,re=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=W.r*ae,g+=W.g*ae,v+=W.b*ae;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],ae);U++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=t.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=re,a.directionalShadowMatrix[y]=V.shadow.matrix,D++}a.directional[y]=B,y++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(W).multiplyScalar(ae),B.distance=ue,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[T]=B;const K=V.shadow;if(V.map&&(a.spotLightMap[O]=V.map,O++,K.updateMatrices(V),V.castShadow&&I++),a.spotLightMatrix[T]=K.matrix,V.castShadow){const Y=t.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=re,R++}T++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(W).multiplyScalar(ae),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=B,S++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const K=V.shadow,Y=t.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=re,a.pointShadowMatrix[E]=V.shadow.matrix,N++}a.point[E]=B,E++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(ae),B.groundColor.copy(V.groundColor).multiplyScalar(ae),a.hemi[x]=B,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const G=a.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==D||G.numPointShadows!==N||G.numSpotShadows!==R||G.numSpotMaps!==O||G.numLightProbes!==U)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=R+O-I,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=U,G.directionalLength=y,G.pointLength=E,G.spotLength=T,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=D,G.numPointShadows=N,G.numSpotShadows=R,G.numSpotMaps=O,G.numLightProbes=U,a.version=iR++)}function d(h,_){let g=0,v=0,y=0,E=0,T=0;const S=_.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const N=h[x];if(N.isDirectionalLight){const R=a.directional[g];R.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(S),g++}else if(N.isSpotLight){const R=a.spot[y];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(N.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),v++}else if(N.isHemisphereLight){const R=a.hemi[T];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:f,setupView:d,state:a}}function kx(o){const e=new sR(o),t=[],a=[];function r(_){h.camera=_,t.length=0,a.length=0}function l(_){t.push(_)}function u(_){a.push(_)}function f(){e.setup(t)}function d(_){e.setupView(t,_)}const h={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function rR(o){let e=new WeakMap;function t(r,l=0){const u=e.get(r);let f;return u===void 0?(f=new kx(o),e.set(r,[f])):l>=u.length?(f=new kx(o),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const oR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cR(o,e,t){let a=new xm;const r=new Je,l=new Je,u=new Pt,f=new rT({depthPacking:Q1}),d=new oT,h={},_=t.maxTextureSize,g={[ca]:ti,[ti]:ca,[Oi]:Oi},v=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:oR,fragmentShader:lR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new zn;E.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Le(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qx;let x=this.type;this.render=function(I,U,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const b=o.getRenderTarget(),A=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Xa),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ae=x!==Ha&&this.type===Ha,ue=x===Ha&&this.type!==Ha;for(let re=0,B=I.length;re<B;re++){const K=I[re],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const de=Y.getFrameExtents();if(r.multiply(de),l.copy(Y.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/de.x),r.x=l.x*de.x,Y.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/de.y),r.y=l.y*de.y,Y.mapSize.y=l.y)),Y.map===null||ae===!0||ue===!0){const z=this.type!==Ha?{minFilter:ni,magFilter:ni}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Bi(r.x,r.y,z),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Te=Y.getViewportCount();for(let z=0;z<Te;z++){const $=Y.getViewport(z);u.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),W.viewport(u),Y.updateMatrices(K,z),a=Y.getFrustum(),R(U,G,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Ha&&D(Y,G),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,A,V)};function D(I,U){const G=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bi(r.x,r.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(U,null,G,v,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(U,null,G,y,T,null)}function N(I,U,G,b){let A=null;const V=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)A=V;else if(A=G.isPointLight===!0?d:f,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=A.uuid,ae=U.uuid;let ue=h[W];ue===void 0&&(ue={},h[W]=ue);let re=ue[ae];re===void 0&&(re=A.clone(),ue[ae]=re,U.addEventListener("dispose",O)),A=re}if(A.visible=U.visible,A.wireframe=U.wireframe,b===Ha?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:g[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=o.properties.get(A);W.light=G}return A}function R(I,U,G,b,A){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Ha)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const ae=e.update(I),ue=I.material;if(Array.isArray(ue)){const re=ae.groups;for(let B=0,K=re.length;B<K;B++){const Y=re[B],de=ue[Y.materialIndex];if(de&&de.visible){const Te=N(I,de,b,A);I.onBeforeShadow(o,I,U,G,ae,Te,Y),o.renderBufferDirect(G,null,ae,Te,I,Y),I.onAfterShadow(o,I,U,G,ae,Te,Y)}}}else if(ue.visible){const re=N(I,ue,b,A);I.onBeforeShadow(o,I,U,G,ae,re,null),o.renderBufferDirect(G,null,ae,re,I,null),I.onAfterShadow(o,I,U,G,ae,re,null)}}const W=I.children;for(let ae=0,ue=W.length;ae<ue;ae++)R(W[ae],U,G,b,A)}function O(I){I.target.removeEventListener("dispose",O);for(const G in h){const b=h[G],A=I.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const uR={[fp]:hp,[dp]:gp,[pp]:_p,[_o]:mp,[hp]:fp,[gp]:dp,[_p]:pp,[mp]:_o};function fR(o,e){function t(){let q=!1;const we=new Pt;let De=null;const He=new Pt(0,0,0,0);return{setMask:function(be){De!==be&&!q&&(o.colorMask(be,be,be,be),De=be)},setLocked:function(be){q=be},setClear:function(be,_e,Ve,ft,Vt){Vt===!0&&(be*=ft,_e*=ft,Ve*=ft),we.set(be,_e,Ve,ft),He.equals(we)===!1&&(o.clearColor(be,_e,Ve,ft),He.copy(we))},reset:function(){q=!1,De=null,He.set(-1,0,0,0)}}}function a(){let q=!1,we=!1,De=null,He=null,be=null;return{setReversed:function(_e){if(we!==_e){const Ve=e.get("EXT_clip_control");_e?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=_e;const ft=be;be=null,this.setClear(ft)}},getReversed:function(){return we},setTest:function(_e){_e?fe(o.DEPTH_TEST):Ue(o.DEPTH_TEST)},setMask:function(_e){De!==_e&&!q&&(o.depthMask(_e),De=_e)},setFunc:function(_e){if(we&&(_e=uR[_e]),He!==_e){switch(_e){case fp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case dp:o.depthFunc(o.LESS);break;case _o:o.depthFunc(o.LEQUAL);break;case pp:o.depthFunc(o.EQUAL);break;case mp:o.depthFunc(o.GEQUAL);break;case gp:o.depthFunc(o.GREATER);break;case _p:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}He=_e}},setLocked:function(_e){q=_e},setClear:function(_e){be!==_e&&(we&&(_e=1-_e),o.clearDepth(_e),be=_e)},reset:function(){q=!1,De=null,He=null,be=null,we=!1}}}function r(){let q=!1,we=null,De=null,He=null,be=null,_e=null,Ve=null,ft=null,Vt=null;return{setTest:function(Mt){q||(Mt?fe(o.STENCIL_TEST):Ue(o.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!q&&(o.stencilMask(Mt),we=Mt)},setFunc:function(Mt,Se,Ge){(De!==Mt||He!==Se||be!==Ge)&&(o.stencilFunc(Mt,Se,Ge),De=Mt,He=Se,be=Ge)},setOp:function(Mt,Se,Ge){(_e!==Mt||Ve!==Se||ft!==Ge)&&(o.stencilOp(Mt,Se,Ge),_e=Mt,Ve=Se,ft=Ge)},setLocked:function(Mt){q=Mt},setClear:function(Mt){Vt!==Mt&&(o.clearStencil(Mt),Vt=Mt)},reset:function(){q=!1,we=null,De=null,He=null,be=null,_e=null,Ve=null,ft=null,Vt=null}}}const l=new t,u=new a,f=new r,d=new WeakMap,h=new WeakMap;let _={},g={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,D=null,N=null,R=null,O=null,I=null,U=new rt(0,0,0),G=0,b=!1,A=null,V=null,W=null,ae=null,ue=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=K>=2);let de=null,Te={};const z=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),ye=new Pt().fromArray(z),ve=new Pt().fromArray($);function Ne(q,we,De,He){const be=new Uint8Array(4),_e=o.createTexture();o.bindTexture(q,_e),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ve=0;Ve<De;Ve++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,He,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(we+Ve,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return _e}const te={};te[o.TEXTURE_2D]=Ne(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Ne(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Ne(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Ne(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),fe(o.DEPTH_TEST),u.setFunc(_o),ot(!1),Ze(Av),fe(o.CULL_FACE),Rt(Xa);function fe(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function Ue(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Fe(q,we){return g[q]!==we?(o.bindFramebuffer(q,we),g[q]=we,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function je(q,we){let De=y,He=!1;if(q){De=v.get(we),De===void 0&&(De=[],v.set(we,De));const be=q.textures;if(De.length!==be.length||De[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Ve=be.length;_e<Ve;_e++)De[_e]=o.COLOR_ATTACHMENT0+_e;De.length=be.length,He=!0}}else De[0]!==o.BACK&&(De[0]=o.BACK,He=!0);He&&o.drawBuffers(De)}function mt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const an={[ar]:o.FUNC_ADD,[b1]:o.FUNC_SUBTRACT,[A1]:o.FUNC_REVERSE_SUBTRACT};an[w1]=o.MIN,an[R1]=o.MAX;const X={[C1]:o.ZERO,[D1]:o.ONE,[L1]:o.SRC_COLOR,[cp]:o.SRC_ALPHA,[z1]:o.SRC_ALPHA_SATURATE,[I1]:o.DST_COLOR,[U1]:o.DST_ALPHA,[N1]:o.ONE_MINUS_SRC_COLOR,[up]:o.ONE_MINUS_SRC_ALPHA,[P1]:o.ONE_MINUS_DST_COLOR,[O1]:o.ONE_MINUS_DST_ALPHA,[B1]:o.CONSTANT_COLOR,[F1]:o.ONE_MINUS_CONSTANT_COLOR,[H1]:o.CONSTANT_ALPHA,[V1]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(q,we,De,He,be,_e,Ve,ft,Vt,Mt){if(q===Xa){T===!0&&(Ue(o.BLEND),T=!1);return}if(T===!1&&(fe(o.BLEND),T=!0),q!==T1){if(q!==S||Mt!==b){if((x!==ar||R!==ar)&&(o.blendEquation(o.FUNC_ADD),x=ar,R=ar),Mt)switch(q){case po:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lp:o.blendFunc(o.ONE,o.ONE);break;case wv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case po:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case wv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}D=null,N=null,O=null,I=null,U.set(0,0,0),G=0,S=q,b=Mt}return}be=be||we,_e=_e||De,Ve=Ve||He,(we!==x||be!==R)&&(o.blendEquationSeparate(an[we],an[be]),x=we,R=be),(De!==D||He!==N||_e!==O||Ve!==I)&&(o.blendFuncSeparate(X[De],X[He],X[_e],X[Ve]),D=De,N=He,O=_e,I=Ve),(ft.equals(U)===!1||Vt!==G)&&(o.blendColor(ft.r,ft.g,ft.b,Vt),U.copy(ft),G=Vt),S=q,b=!1}function ct(q,we){q.side===Oi?Ue(o.CULL_FACE):fe(o.CULL_FACE);let De=q.side===ti;we&&(De=!De),ot(De),q.blending===po&&q.transparent===!1?Rt(Xa):Rt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const He=q.stencilWrite;f.setTest(He),He&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ke(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):Ue(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(q){A!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),A=q)}function Ze(q){q!==M1?(fe(o.CULL_FACE),q!==V&&(q===Av?o.cullFace(o.BACK):q===E1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ue(o.CULL_FACE),V=q}function Qt(q){q!==W&&(B&&o.lineWidth(q),W=q)}function ke(q,we,De){q?(fe(o.POLYGON_OFFSET_FILL),(ae!==we||ue!==De)&&(o.polygonOffset(we,De),ae=we,ue=De)):Ue(o.POLYGON_OFFSET_FILL)}function at(q){q?fe(o.SCISSOR_TEST):Ue(o.SCISSOR_TEST)}function on(q){q===void 0&&(q=o.TEXTURE0+re-1),de!==q&&(o.activeTexture(q),de=q)}function Ht(q,we,De){De===void 0&&(de===null?De=o.TEXTURE0+re-1:De=de);let He=Te[De];He===void 0&&(He={type:void 0,texture:void 0},Te[De]=He),(He.type!==q||He.texture!==we)&&(de!==De&&(o.activeTexture(De),de=De),o.bindTexture(q,we||te[q]),He.type=q,He.texture=we)}function P(){const q=Te[de];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ee(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(q){ye.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),ye.copy(q))}function et(q){ve.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),ve.copy(q))}function ze(q,we){let De=h.get(we);De===void 0&&(De=new WeakMap,h.set(we,De));let He=De.get(q);He===void 0&&(He=o.getUniformBlockIndex(we,q.name),De.set(q,He))}function Oe(q,we){const He=h.get(we).get(q);d.get(we)!==He&&(o.uniformBlockBinding(we,He,q.__bindingPointIndex),d.set(we,He))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},de=null,Te={},g={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,D=null,N=null,R=null,O=null,I=null,U=new rt(0,0,0),G=0,b=!1,A=null,V=null,W=null,ae=null,ue=null,ye.set(0,0,o.canvas.width,o.canvas.height),ve.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:fe,disable:Ue,bindFramebuffer:Fe,drawBuffers:je,useProgram:mt,setBlending:Rt,setMaterial:ct,setFlipSided:ot,setCullFace:Ze,setLineWidth:Qt,setPolygonOffset:ke,setScissorTest:at,activeTexture:on,bindTexture:Ht,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:ee,texImage2D:Qe,texImage3D:Ae,updateUBOMapping:ze,uniformBlockBinding:Oe,texStorage2D:Re,texStorage3D:Ke,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:Ye,scissor:Ce,viewport:et,reset:ht}}function hR(o,e,t,a,r,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Je,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return y?new OffscreenCanvas(P,w):ql("canvas")}function T(P,w,ee){let pe=1;const Ee=Ht(P);if((Ee.width>ee||Ee.height>ee)&&(pe=ee/Math.max(Ee.width,Ee.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(pe*Ee.width),Ye=Math.floor(pe*Ee.height);g===void 0&&(g=E(he,Ye));const Re=w?E(he,Ye):g;return Re.width=he,Re.height=Ye,Re.getContext("2d").drawImage(P,0,0,he,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+he+"x"+Ye+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(P,w,ee,pe,Ee=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=w;if(w===o.RED&&(ee===o.FLOAT&&(he=o.R32F),ee===o.HALF_FLOAT&&(he=o.R16F),ee===o.UNSIGNED_BYTE&&(he=o.R8)),w===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.R8UI),ee===o.UNSIGNED_SHORT&&(he=o.R16UI),ee===o.UNSIGNED_INT&&(he=o.R32UI),ee===o.BYTE&&(he=o.R8I),ee===o.SHORT&&(he=o.R16I),ee===o.INT&&(he=o.R32I)),w===o.RG&&(ee===o.FLOAT&&(he=o.RG32F),ee===o.HALF_FLOAT&&(he=o.RG16F),ee===o.UNSIGNED_BYTE&&(he=o.RG8)),w===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.RG8UI),ee===o.UNSIGNED_SHORT&&(he=o.RG16UI),ee===o.UNSIGNED_INT&&(he=o.RG32UI),ee===o.BYTE&&(he=o.RG8I),ee===o.SHORT&&(he=o.RG16I),ee===o.INT&&(he=o.RG32I)),w===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(he=o.RGB16UI),ee===o.UNSIGNED_INT&&(he=o.RGB32UI),ee===o.BYTE&&(he=o.RGB8I),ee===o.SHORT&&(he=o.RGB16I),ee===o.INT&&(he=o.RGB32I)),w===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),ee===o.UNSIGNED_INT&&(he=o.RGBA32UI),ee===o.BYTE&&(he=o.RGBA8I),ee===o.SHORT&&(he=o.RGBA16I),ee===o.INT&&(he=o.RGBA32I)),w===o.RGB&&(ee===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),ee===o.UNSIGNED_INT_10F_11F_11F_REV&&(he=o.R11F_G11F_B10F)),w===o.RGBA){const Ye=Ee?Ku:Ut.getTransfer(pe);ee===o.FLOAT&&(he=o.RGBA32F),ee===o.HALF_FLOAT&&(he=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(he=Ye===Yt?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(P,w){let ee;return P?w===null||w===rr||w===Gl?ee=o.DEPTH24_STENCIL8:w===Yi?ee=o.DEPTH32F_STENCIL8:w===Vl&&(ee=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rr||w===Gl?ee=o.DEPTH_COMPONENT24:w===Yi?ee=o.DEPTH_COMPONENT32F:w===Vl&&(ee=o.DEPTH_COMPONENT16),ee}function O(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ni&&P.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){const w=P.target;w.removeEventListener("dispose",I),G(w),w.isVideoTexture&&_.delete(w)}function U(P){const w=P.target;w.removeEventListener("dispose",U),A(w)}function G(P){const w=a.get(P);if(w.__webglInit===void 0)return;const ee=P.source,pe=v.get(ee);if(pe){const Ee=pe[w.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&b(P),Object.keys(pe).length===0&&v.delete(ee)}a.remove(P)}function b(P){const w=a.get(P);o.deleteTexture(w.__webglTexture);const ee=P.source,pe=v.get(ee);delete pe[w.__cacheKey],u.memory.textures--}function A(P){const w=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let Ee=0;Ee<w.__webglFramebuffer[pe].length;Ee++)o.deleteFramebuffer(w.__webglFramebuffer[pe][Ee]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=P.textures;for(let pe=0,Ee=ee.length;pe<Ee;pe++){const he=a.get(ee[pe]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),u.memory.textures--),a.remove(ee[pe])}a.remove(P)}let V=0;function W(){V=0}function ae(){const P=V;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),V+=1,P}function ue(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function re(P,w){const ee=a.get(P);if(P.isVideoTexture&&at(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ee.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ee,P,w);return}}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+w)}function B(P,w){const ee=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){te(ee,P,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+w)}function K(P,w){const ee=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){te(ee,P,w);return}t.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+w)}function Y(P,w){const ee=a.get(P);if(P.version>0&&ee.__version!==P.version){fe(ee,P,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+w)}const de={[Cs]:o.REPEAT,[As]:o.CLAMP_TO_EDGE,[qu]:o.MIRRORED_REPEAT},Te={[ni]:o.NEAREST,[oy]:o.NEAREST_MIPMAP_NEAREST,[Pl]:o.NEAREST_MIPMAP_LINEAR,[Ei]:o.LINEAR,[Hu]:o.LINEAR_MIPMAP_NEAREST,[Va]:o.LINEAR_MIPMAP_LINEAR},z={[$1]:o.NEVER,[sE]:o.ALWAYS,[eE]:o.LESS,[_y]:o.LEQUAL,[tE]:o.EQUAL,[aE]:o.GEQUAL,[nE]:o.GREATER,[iE]:o.NOTEQUAL};function $(P,w){if(w.type===Yi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Hu||w.magFilter===Pl||w.magFilter===Va||w.minFilter===Ei||w.minFilter===Hu||w.minFilter===Pl||w.minFilter===Va)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,de[w.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,de[w.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,de[w.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Te[w.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Te[w.minFilter]),w.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ni||w.minFilter!==Pl&&w.minFilter!==Va||w.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function ye(P,w){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));const pe=w.source;let Ee=v.get(pe);Ee===void 0&&(Ee={},v.set(pe,Ee));const he=ue(w);if(he!==P.__cacheKey){Ee[he]===void 0&&(Ee[he]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),Ee[he].usedTimes++;const Ye=Ee[P.__cacheKey];Ye!==void 0&&(Ee[P.__cacheKey].usedTimes--,Ye.usedTimes===0&&b(w)),P.__cacheKey=he,P.__webglTexture=Ee[he].texture}return ee}function ve(P,w,ee){return Math.floor(Math.floor(P/ee)/w)}function Ne(P,w,ee,pe){const he=P.updateRanges;if(he.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,ee,pe,w.data);else{he.sort((Ae,Ce)=>Ae.start-Ce.start);let Ye=0;for(let Ae=1;Ae<he.length;Ae++){const Ce=he[Ye],et=he[Ae],ze=Ce.start+Ce.count,Oe=ve(et.start,w.width,4),ht=ve(Ce.start,w.width,4);et.start<=ze+1&&Oe===ht&&ve(et.start+et.count-1,w.width,4)===Oe?Ce.count=Math.max(Ce.count,et.start+et.count-Ce.start):(++Ye,he[Ye]=et)}he.length=Ye+1;const Re=o.getParameter(o.UNPACK_ROW_LENGTH),Ke=o.getParameter(o.UNPACK_SKIP_PIXELS),Qe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Ae=0,Ce=he.length;Ae<Ce;Ae++){const et=he[Ae],ze=Math.floor(et.start/4),Oe=Math.ceil(et.count/4),ht=ze%w.width,q=Math.floor(ze/w.width),we=Oe,De=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),t.texSubImage2D(o.TEXTURE_2D,0,ht,q,we,De,ee,pe,w.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Re),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qe)}}function te(P,w,ee){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const Ee=ye(P,w),he=w.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+ee);const Ye=a.get(he);if(he.version!==Ye.__version||Ee===!0){t.activeTexture(o.TEXTURE0+ee);const Re=Ut.getPrimaries(Ut.workingColorSpace),Ke=w.colorSpace===bs?null:Ut.getPrimaries(w.colorSpace),Qe=w.colorSpace===bs||Re===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Ae=T(w.image,!1,r.maxTextureSize);Ae=on(w,Ae);const Ce=l.convert(w.format,w.colorSpace),et=l.convert(w.type);let ze=N(w.internalFormat,Ce,et,w.colorSpace,w.isVideoTexture);$(pe,w);let Oe;const ht=w.mipmaps,q=w.isVideoTexture!==!0,we=Ye.__version===void 0||Ee===!0,De=he.dataReady,He=O(w,Ae);if(w.isDepthTexture)ze=R(w.format===Xl,w.type),we&&(q?t.texStorage2D(o.TEXTURE_2D,1,ze,Ae.width,Ae.height):t.texImage2D(o.TEXTURE_2D,0,ze,Ae.width,Ae.height,0,Ce,et,null));else if(w.isDataTexture)if(ht.length>0){q&&we&&t.texStorage2D(o.TEXTURE_2D,He,ze,ht[0].width,ht[0].height);for(let be=0,_e=ht.length;be<_e;be++)Oe=ht[be],q?De&&t.texSubImage2D(o.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ce,et,Oe.data):t.texImage2D(o.TEXTURE_2D,be,ze,Oe.width,Oe.height,0,Ce,et,Oe.data);w.generateMipmaps=!1}else q?(we&&t.texStorage2D(o.TEXTURE_2D,He,ze,Ae.width,Ae.height),De&&Ne(w,Ae,Ce,et)):t.texImage2D(o.TEXTURE_2D,0,ze,Ae.width,Ae.height,0,Ce,et,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){q&&we&&t.texStorage3D(o.TEXTURE_2D_ARRAY,He,ze,ht[0].width,ht[0].height,Ae.depth);for(let be=0,_e=ht.length;be<_e;be++)if(Oe=ht[be],w.format!==zi)if(Ce!==null)if(q){if(De)if(w.layerUpdates.size>0){const Ve=xx(Oe.width,Oe.height,w.format,w.type);for(const ft of w.layerUpdates){const Vt=Oe.data.subarray(ft*Ve/Oe.data.BYTES_PER_ELEMENT,(ft+1)*Ve/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,ft,Oe.width,Oe.height,1,Ce,Vt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,Ae.depth,Ce,Oe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,ze,Oe.width,Oe.height,Ae.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?De&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,Ae.depth,Ce,et,Oe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,be,ze,Oe.width,Oe.height,Ae.depth,0,Ce,et,Oe.data)}else{q&&we&&t.texStorage2D(o.TEXTURE_2D,He,ze,ht[0].width,ht[0].height);for(let be=0,_e=ht.length;be<_e;be++)Oe=ht[be],w.format!==zi?Ce!==null?q?De&&t.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ce,Oe.data):t.compressedTexImage2D(o.TEXTURE_2D,be,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?De&&t.texSubImage2D(o.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ce,et,Oe.data):t.texImage2D(o.TEXTURE_2D,be,ze,Oe.width,Oe.height,0,Ce,et,Oe.data)}else if(w.isDataArrayTexture)if(q){if(we&&t.texStorage3D(o.TEXTURE_2D_ARRAY,He,ze,Ae.width,Ae.height,Ae.depth),De)if(w.layerUpdates.size>0){const be=xx(Ae.width,Ae.height,w.format,w.type);for(const _e of w.layerUpdates){const Ve=Ae.data.subarray(_e*be/Ae.data.BYTES_PER_ELEMENT,(_e+1)*be/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,Ce,et,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,et,Ae.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ae.width,Ae.height,Ae.depth,0,Ce,et,Ae.data);else if(w.isData3DTexture)q?(we&&t.texStorage3D(o.TEXTURE_3D,He,ze,Ae.width,Ae.height,Ae.depth),De&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,et,Ae.data)):t.texImage3D(o.TEXTURE_3D,0,ze,Ae.width,Ae.height,Ae.depth,0,Ce,et,Ae.data);else if(w.isFramebufferTexture){if(we)if(q)t.texStorage2D(o.TEXTURE_2D,He,ze,Ae.width,Ae.height);else{let be=Ae.width,_e=Ae.height;for(let Ve=0;Ve<He;Ve++)t.texImage2D(o.TEXTURE_2D,Ve,ze,be,_e,0,Ce,et,null),be>>=1,_e>>=1}}else if(ht.length>0){if(q&&we){const be=Ht(ht[0]);t.texStorage2D(o.TEXTURE_2D,He,ze,be.width,be.height)}for(let be=0,_e=ht.length;be<_e;be++)Oe=ht[be],q?De&&t.texSubImage2D(o.TEXTURE_2D,be,0,0,Ce,et,Oe):t.texImage2D(o.TEXTURE_2D,be,ze,Ce,et,Oe);w.generateMipmaps=!1}else if(q){if(we){const be=Ht(Ae);t.texStorage2D(o.TEXTURE_2D,He,ze,be.width,be.height)}De&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ce,et,Ae)}else t.texImage2D(o.TEXTURE_2D,0,ze,Ce,et,Ae);S(w)&&x(pe),Ye.__version=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,ee){if(w.image.length!==6)return;const pe=ye(P,w),Ee=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+ee);const he=a.get(Ee);if(Ee.version!==he.__version||pe===!0){t.activeTexture(o.TEXTURE0+ee);const Ye=Ut.getPrimaries(Ut.workingColorSpace),Re=w.colorSpace===bs?null:Ut.getPrimaries(w.colorSpace),Ke=w.colorSpace===bs||Ye===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let _e=0;_e<6;_e++)!Qe&&!Ae?Ce[_e]=T(w.image[_e],!0,r.maxCubemapSize):Ce[_e]=Ae?w.image[_e].image:w.image[_e],Ce[_e]=on(w,Ce[_e]);const et=Ce[0],ze=l.convert(w.format,w.colorSpace),Oe=l.convert(w.type),ht=N(w.internalFormat,ze,Oe,w.colorSpace),q=w.isVideoTexture!==!0,we=he.__version===void 0||pe===!0,De=Ee.dataReady;let He=O(w,et);$(o.TEXTURE_CUBE_MAP,w);let be;if(Qe){q&&we&&t.texStorage2D(o.TEXTURE_CUBE_MAP,He,ht,et.width,et.height);for(let _e=0;_e<6;_e++){be=Ce[_e].mipmaps;for(let Ve=0;Ve<be.length;Ve++){const ft=be[Ve];w.format!==zi?ze!==null?q?De&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,ft.width,ft.height,ze,ft.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,ft.width,ft.height,ze,Oe,ft.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,ht,ft.width,ft.height,0,ze,Oe,ft.data)}}}else{if(be=w.mipmaps,q&&we){be.length>0&&He++;const _e=Ht(Ce[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,He,ht,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ce[_e].width,Ce[_e].height,ze,Oe,Ce[_e].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,Ce[_e].width,Ce[_e].height,0,ze,Oe,Ce[_e].data);for(let Ve=0;Ve<be.length;Ve++){const Vt=be[Ve].image[_e].image;q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,Vt.width,Vt.height,ze,Oe,Vt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,ht,Vt.width,Vt.height,0,ze,Oe,Vt.data)}}else{q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze,Oe,Ce[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,ze,Oe,Ce[_e]);for(let Ve=0;Ve<be.length;Ve++){const ft=be[Ve];q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,ze,Oe,ft.image[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,ht,ze,Oe,ft.image[_e])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),he.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ue(P,w,ee,pe,Ee,he){const Ye=l.convert(ee.format,ee.colorSpace),Re=l.convert(ee.type),Ke=N(ee.internalFormat,Ye,Re,ee.colorSpace),Qe=a.get(w),Ae=a.get(ee);if(Ae.__renderTarget=w,!Qe.__hasExternalTextures){const Ce=Math.max(1,w.width>>he),et=Math.max(1,w.height>>he);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?t.texImage3D(Ee,he,Ke,Ce,et,w.depth,0,Ye,Re,null):t.texImage2D(Ee,he,Ke,Ce,et,0,Ye,Re,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),ke(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Ee,Ae.__webglTexture,0,Qt(w)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Ee,Ae.__webglTexture,he),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(P,w,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,P),w.depthBuffer){const pe=w.depthTexture,Ee=pe&&pe.isDepthTexture?pe.type:null,he=R(w.stencilBuffer,Ee),Ye=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Qt(w);ke(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,he,w.width,w.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,he,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,he,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,P)}else{const pe=w.textures;for(let Ee=0;Ee<pe.length;Ee++){const he=pe[Ee],Ye=l.convert(he.format,he.colorSpace),Re=l.convert(he.type),Ke=N(he.internalFormat,Ye,Re,he.colorSpace),Qe=Qt(w);ee&&ke(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,Ke,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qe,Ke,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function je(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=a.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),re(w.depthTexture,0);const Ee=pe.__webglTexture,he=Qt(w);if(w.depthTexture.format===kl)ke(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(w.depthTexture.format===Xl)ke(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function mt(P){const w=a.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const Ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",Ee)};pe.addEventListener("dispose",Ee),w.__depthDisposeCallback=Ee}w.__boundDepthTexture=pe}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const pe=P.texture.mipmaps;pe&&pe.length>0?je(w.__webglFramebuffer[0],P):je(w.__webglFramebuffer,P)}else if(ee){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=o.createRenderbuffer(),Fe(w.__webglDepthbuffer[pe],P,!1);else{const Ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,he)}}else{const pe=P.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Fe(w.__webglDepthbuffer,P,!1);else{const Ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,he)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function an(P,w,ee){const pe=a.get(P);w!==void 0&&Ue(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&mt(P)}function X(P){const w=P.texture,ee=a.get(P),pe=a.get(w);P.addEventListener("dispose",U);const Ee=P.textures,he=P.isWebGLCubeRenderTarget===!0,Ye=Ee.length>1;if(Ye||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,u.memory.textures++),he){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let Ke=0;Ke<w.mipmaps.length;Ke++)ee.__webglFramebuffer[Re][Ke]=o.createFramebuffer()}else ee.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let Re=0,Ke=Ee.length;Re<Ke;Re++){const Qe=a.get(Ee[Re]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&ke(P)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<Ee.length;Re++){const Ke=Ee[Re];ee.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);const Qe=l.convert(Ke.format,Ke.colorSpace),Ae=l.convert(Ke.type),Ce=N(Ke.internalFormat,Qe,Ae,Ke.colorSpace,P.isXRRenderTarget===!0),et=Qt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Ce,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),$(o.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ke=0;Ke<w.mipmaps.length;Ke++)Ue(ee.__webglFramebuffer[Re][Ke],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke);else Ue(ee.__webglFramebuffer[Re],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Re=0,Ke=Ee.length;Re<Ke;Re++){const Qe=Ee[Re],Ae=a.get(Qe);let Ce=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ae.__webglTexture),$(Ce,Qe),Ue(ee.__webglFramebuffer,P,Qe,o.COLOR_ATTACHMENT0+Re,Ce,0),S(Qe)&&x(Ce)}t.unbindTexture()}else{let Re=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,pe.__webglTexture),$(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Ke=0;Ke<w.mipmaps.length;Ke++)Ue(ee.__webglFramebuffer[Ke],P,w,o.COLOR_ATTACHMENT0,Re,Ke);else Ue(ee.__webglFramebuffer,P,w,o.COLOR_ATTACHMENT0,Re,0);S(w)&&x(Re),t.unbindTexture()}P.depthBuffer&&mt(P)}function Rt(P){const w=P.textures;for(let ee=0,pe=w.length;ee<pe;ee++){const Ee=w[ee];if(S(Ee)){const he=D(P),Ye=a.get(Ee).__webglTexture;t.bindTexture(he,Ye),x(he),t.unbindTexture()}}}const ct=[],ot=[];function Ze(P){if(P.samples>0){if(ke(P)===!1){const w=P.textures,ee=P.width,pe=P.height;let Ee=o.COLOR_BUFFER_BIT;const he=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=a.get(P),Re=w.length>1;if(Re)for(let Qe=0;Qe<w.length;Qe++)t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Ke=P.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Qe=0;Qe<w.length;Qe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const Ae=a.get(w[Qe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ae,0)}o.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,Ee,o.NEAREST),d===!0&&(ct.length=0,ot.length=0,ct.push(o.COLOR_ATTACHMENT0+Qe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(he),ot.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Qe=0;Qe<w.length;Qe++){t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qe,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const Ae=a.get(w[Qe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qe,o.TEXTURE_2D,Ae,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const w=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Qt(P){return Math.min(r.maxSamples,P.samples)}function ke(P){const w=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(P){const w=u.render.frame;_.get(P)!==w&&(_.set(P,w),P.update())}function on(P,w){const ee=P.colorSpace,pe=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==ai&&ee!==bs&&(Ut.getTransfer(ee)===Yt?(pe!==zi||Ee!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function Ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=an,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ke}function dR(o,e){function t(a,r=bs){let l;const u=Ut.getTransfer(r);if(a===ua)return o.UNSIGNED_BYTE;if(a===om)return o.UNSIGNED_SHORT_4_4_4_4;if(a===lm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===uy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===fy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===ly)return o.BYTE;if(a===cy)return o.SHORT;if(a===Vl)return o.UNSIGNED_SHORT;if(a===rm)return o.INT;if(a===rr)return o.UNSIGNED_INT;if(a===Yi)return o.FLOAT;if(a===ja)return o.HALF_FLOAT;if(a===hy)return o.ALPHA;if(a===dy)return o.RGB;if(a===zi)return o.RGBA;if(a===kl)return o.DEPTH_COMPONENT;if(a===Xl)return o.DEPTH_STENCIL;if(a===cm)return o.RED;if(a===um)return o.RED_INTEGER;if(a===py)return o.RG;if(a===fm)return o.RG_INTEGER;if(a===hm)return o.RGBA_INTEGER;if(a===Vu||a===Gu||a===ku||a===Xu)if(u===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Vu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ku)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Vu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ku)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===yp||a===Sp||a===Mp||a===Ep)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===yp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Sp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Mp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ep)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Tp||a===bp||a===Ap)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Tp||a===bp)return u===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Ap)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===wp||a===Rp||a===Cp||a===Dp||a===Lp||a===Np||a===Up||a===Op||a===Ip||a===Pp||a===zp||a===Bp||a===Fp||a===Hp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===wp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Rp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Cp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Dp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Lp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Np)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Up)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Op)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ip)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Bp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Fp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Hp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Vp||a===Gp||a===kp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Vp)return u===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Gp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===kp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Xp||a===jp||a===Wp||a===qp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Xp)return l.COMPRESSED_RED_RGTC1_EXT;if(a===jp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Wp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Gl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:t}}const pR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new Iy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new kn({vertexShader:pR,fragmentShader:mR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Ao(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _R extends or{constructor(e,t){super();const a=this;let r=null,l=1,u=null,f="local-floor",d=1,h=null,_=null,g=null,v=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",S=new gR,x={},D=t.getContextAttributes();let N=null,R=null;const O=[],I=[],U=new Je;let G=null;const b=new Zn;b.viewport=new Pt;const A=new Zn;A.viewport=new Pt;const V=[b,A],W=new TT;let ae=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=O[te];return fe===void 0&&(fe=new Gd,O[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=O[te];return fe===void 0&&(fe=new Gd,O[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=O[te];return fe===void 0&&(fe=new Gd,O[te]=fe),fe.getHandSpace()};function re(te){const fe=I.indexOf(te.inputSource);if(fe===-1)return;const Ue=O[fe];Ue!==void 0&&(Ue.update(te.inputSource,te.frame,h||u),Ue.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",K);for(let te=0;te<O.length;te++){const fe=I[te];fe!==null&&(I[te]=null,O[te].disconnect(fe))}ae=null,ue=null,S.reset();for(const te in x)delete x[te];e.setRenderTarget(N),y=null,v=null,g=null,r=null,R=null,Ne.stop(),a.isPresenting=!1,e.setPixelRatio(G),e.setSize(U.width,U.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(N=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",B),r.addEventListener("inputsourceschange",K),D.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Fe=null,je=null;D.depth&&(je=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=D.stencil?Xl:kl,Fe=D.stencil?Gl:rr);const mt={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(mt),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new Bi(v.textureWidth,v.textureHeight,{format:zi,type:ua,depthTexture:new Oy(v.textureWidth,v.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ue={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(r,t,Ue),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Bi(y.framebufferWidth,y.framebufferHeight,{format:zi,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(f),Ne.setContext(r),Ne.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(te){for(let fe=0;fe<te.removed.length;fe++){const Ue=te.removed[fe],Fe=I.indexOf(Ue);Fe>=0&&(I[Fe]=null,O[Fe].disconnect(Ue))}for(let fe=0;fe<te.added.length;fe++){const Ue=te.added[fe];let Fe=I.indexOf(Ue);if(Fe===-1){for(let mt=0;mt<O.length;mt++)if(mt>=I.length){I.push(Ue),Fe=mt;break}else if(I[mt]===null){I[mt]=Ue,Fe=mt;break}if(Fe===-1)break}const je=O[Fe];je&&je.connect(Ue)}}const Y=new F,de=new F;function Te(te,fe,Ue){Y.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(Ue.matrixWorld);const Fe=Y.distanceTo(de),je=fe.projectionMatrix.elements,mt=Ue.projectionMatrix.elements,an=je[14]/(je[10]-1),X=je[14]/(je[10]+1),Rt=(je[9]+1)/je[5],ct=(je[9]-1)/je[5],ot=(je[8]-1)/je[0],Ze=(mt[8]+1)/mt[0],Qt=an*ot,ke=an*Ze,at=Fe/(-ot+Ze),on=at*-ot;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(on),te.translateZ(at),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),je[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ht=an+at,P=X+at,w=Qt-on,ee=ke+(Fe-on),pe=Rt*X/P*Ht,Ee=ct*X/P*Ht;te.projectionMatrix.makePerspective(w,ee,pe,Ee,Ht,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function z(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let fe=te.near,Ue=te.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Ue=S.depthFar)),W.near=A.near=b.near=fe,W.far=A.far=b.far=Ue,(ae!==W.near||ue!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),ae=W.near,ue=W.far),W.layers.mask=te.layers.mask|6,b.layers.mask=W.layers.mask&3,A.layers.mask=W.layers.mask&5;const Fe=te.parent,je=W.cameras;z(W,Fe);for(let mt=0;mt<je.length;mt++)z(je[mt],Fe);je.length===2?Te(W,b,A):W.projectionMatrix.copy(b.projectionMatrix),$(te,W,Fe)};function $(te,fe,Ue){Ue===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ue.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=yo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(te){d=te,v!==null&&(v.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(te){return x[te]};let ye=null;function ve(te,fe){if(_=fe.getViewerPose(h||u),E=fe,_!==null){const Ue=_.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let Fe=!1;Ue.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let X=0;X<Ue.length;X++){const Rt=Ue[X];let ct=null;if(y!==null)ct=y.getViewport(Rt);else{const Ze=g.getViewSubImage(v,Rt);ct=Ze.viewport,X===0&&(e.setRenderTargetTextures(R,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(R))}let ot=V[X];ot===void 0&&(ot=new Zn,ot.layers.enable(X),ot.viewport=new Pt,V[X]=ot),ot.matrix.fromArray(Rt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Rt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ct.x,ct.y,ct.width,ct.height),X===0&&(W.matrix.copy(ot.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(ot)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=a.getBinding();const X=g.getDepthInformation(Ue[0]);X&&X.isValid&&X.texture&&S.init(X,r.renderState)}if(je&&je.includes("camera-access")&&T){e.state.unbindTexture(),g=a.getBinding();for(let X=0;X<Ue.length;X++){const Rt=Ue[X].camera;if(Rt){let ct=x[Rt];ct||(ct=new Iy,x[Rt]=ct);const ot=g.getCameraImage(Rt);ct.sourceTexture=ot}}}}for(let Ue=0;Ue<O.length;Ue++){const Fe=I[Ue],je=O[Ue];Fe!==null&&je!==void 0&&je.update(Fe,fe,h||u)}ye&&ye(te,fe),fe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ne=new Xy;Ne.setAnimationLoop(ve),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const tr=new fa,vR=new dt;function xR(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Ey(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,D,N,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),T(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,D,N):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),N=D.envMap,R=D.envMapRotation;N&&(S.envMap.value=N,tr.copy(R),tr.x*=-1,tr.y*=-1,tr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),S.envMapRotation.value.setFromMatrix4(vR.makeRotationFromEuler(tr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=N*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function yR(o,e,t,a){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,N){const R=N.program;a.uniformBlockBinding(D,R)}function h(D,N){let R=r[D.id];R===void 0&&(E(D),R=_(D),r[D.id]=R,D.addEventListener("dispose",S));const O=N.program;a.updateUBOMapping(D,O);const I=e.render.frame;l[D.id]!==I&&(v(D),l[D.id]=I)}function _(D){const N=g();D.__bindingPointIndex=N;const R=o.createBuffer(),O=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,O,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,R),R}function g(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const N=r[D.id],R=D.uniforms,O=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,U=R.length;I<U;I++){const G=Array.isArray(R[I])?R[I]:[R[I]];for(let b=0,A=G.length;b<A;b++){const V=G[b];if(y(V,I,b,O)===!0){const W=V.__offset,ae=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let re=0;re<ae.length;re++){const B=ae[re],K=T(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,W+ue,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,ue),ue+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,N,R,O){const I=D.value,U=N+"_"+R;if(O[U]===void 0)return typeof I=="number"||typeof I=="boolean"?O[U]=I:O[U]=I.clone(),!0;{const G=O[U];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return O[U]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function E(D){const N=D.uniforms;let R=0;const O=16;for(let U=0,G=N.length;U<G;U++){const b=Array.isArray(N[U])?N[U]:[N[U]];for(let A=0,V=b.length;A<V;A++){const W=b[A],ae=Array.isArray(W.value)?W.value:[W.value];for(let ue=0,re=ae.length;ue<re;ue++){const B=ae[ue],K=T(B),Y=R%O,de=Y%K.boundary,Te=Y+de;R+=de,Te!==0&&O-Te<K.storage&&(R+=O-Te),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=R,R+=K.storage}}}const I=R%O;return I>0&&(R+=O-I),D.__size=R,D.__cache={},this}function T(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function S(D){const N=D.target;N.removeEventListener("dispose",S);const R=u.indexOf(N.__bindingPointIndex);u.splice(R,1),o.deleteBuffer(r[N.id]),delete r[N.id],delete l[N.id]}function x(){for(const D in r)o.deleteBuffer(r[D]);u=[],r={},l={}}return{bind:d,update:h,dispose:x}}class SR{constructor(e={}){const{canvas:t=ME(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const D=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ws,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let O=!1;this._outputColorSpace=wn;let I=0,U=0,G=null,b=-1,A=null;const V=new Pt,W=new Pt;let ae=null;const ue=new rt(0);let re=0,B=t.width,K=t.height,Y=1,de=null,Te=null;const z=new Pt(0,0,B,K),$=new Pt(0,0,B,K);let ye=!1;const ve=new xm;let Ne=!1,te=!1;const fe=new dt,Ue=new F,Fe=new Pt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function an(){return G===null?Y:1}let X=a;function Rt(L,Z){return t.getContext(L,Z)}try{const L={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${am}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",be,!1),X===null){const Z="webgl2";if(X=Rt(Z,L),X===null)throw Rt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ct,ot,Ze,Qt,ke,at,on,Ht,P,w,ee,pe,Ee,he,Ye,Re,Ke,Qe,Ae,Ce,et,ze,Oe,ht;function q(){ct=new L2(X),ct.init(),ze=new dR(X,ct),ot=new T2(X,ct,e,ze),Ze=new fR(X,ct),ot.reversedDepthBuffer&&v&&Ze.buffers.depth.setReversed(!0),Qt=new O2(X),ke=new Jw,at=new hR(X,ct,Ze,ke,ot,ze,Qt),on=new A2(R),Ht=new D2(R),P=new HT(X),Oe=new M2(X,P),w=new N2(X,P,Qt,Oe),ee=new P2(X,w,P,Qt),Ae=new I2(X,ot,at),Re=new b2(ke),pe=new Qw(R,on,Ht,ct,ot,Oe,Re),Ee=new xR(R,ke),he=new eR,Ye=new rR(ct),Qe=new S2(R,on,Ht,Ze,ee,y,d),Ke=new cR(R,ee,ot),ht=new yR(X,Qt,ot,Ze),Ce=new E2(X,ct,Qt),et=new U2(X,ct,Qt),Qt.programs=pe.programs,R.capabilities=ot,R.extensions=ct,R.properties=ke,R.renderLists=he,R.shadowMap=Ke,R.state=Ze,R.info=Qt}q();const we=new _R(R,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=ct.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ct.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(B,K,!1))},this.getSize=function(L){return L.set(B,K)},this.setSize=function(L,Z,oe=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,K=Z,t.width=Math.floor(L*Y),t.height=Math.floor(Z*Y),oe===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(L,Z,oe){B=L,K=Z,Y=oe,t.width=Math.floor(L*oe),t.height=Math.floor(Z*oe),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(z)},this.setViewport=function(L,Z,oe,le){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,Z,oe,le),Ze.viewport(V.copy(z).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy($)},this.setScissor=function(L,Z,oe,le){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,Z,oe,le),Ze.scissor(W.copy($).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(L){Ze.setScissorTest(ye=L)},this.setOpaqueSort=function(L){de=L},this.setTransparentSort=function(L){Te=L},this.getClearColor=function(L){return L.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(L=!0,Z=!0,oe=!0){let le=0;if(L){let J=!1;if(G!==null){const Me=G.texture.format;J=Me===hm||Me===fm||Me===um}if(J){const Me=G.texture.type,Pe=Me===ua||Me===rr||Me===Vl||Me===Gl||Me===om||Me===lm,We=Qe.getClearColor(),Be=Qe.getClearAlpha(),nt=We.r,ut=We.g,it=We.b;Pe?(E[0]=nt,E[1]=ut,E[2]=it,E[3]=Be,X.clearBufferuiv(X.COLOR,0,E)):(T[0]=nt,T[1]=ut,T[2]=it,T[3]=Be,X.clearBufferiv(X.COLOR,0,T))}else le|=X.COLOR_BUFFER_BIT}Z&&(le|=X.DEPTH_BUFFER_BIT),oe&&(le|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Qe.dispose(),he.dispose(),Ye.dispose(),ke.dispose(),on.dispose(),Ht.dispose(),ee.dispose(),Oe.dispose(),ht.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ge),we.removeEventListener("sessionend",yt),It.stop()};function De(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const L=Qt.autoReset,Z=Ke.enabled,oe=Ke.autoUpdate,le=Ke.needsUpdate,J=Ke.type;q(),Qt.autoReset=L,Ke.enabled=Z,Ke.autoUpdate=oe,Ke.needsUpdate=le,Ke.type=J}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _e(L){const Z=L.target;Z.removeEventListener("dispose",_e),Ve(Z)}function Ve(L){ft(L),ke.remove(L)}function ft(L){const Z=ke.get(L).programs;Z!==void 0&&(Z.forEach(function(oe){pe.releaseProgram(oe)}),L.isShaderMaterial&&pe.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,oe,le,J,Me){Z===null&&(Z=je);const Pe=J.isMesh&&J.matrixWorld.determinant()<0,We=ea(L,Z,oe,le,J);Ze.setMaterial(le,Pe);let Be=oe.index,nt=1;if(le.wireframe===!0){if(Be=w.getWireframeAttribute(oe),Be===void 0)return;nt=2}const ut=oe.drawRange,it=oe.attributes.position;let St=ut.start*nt,kt=(ut.start+ut.count)*nt;Me!==null&&(St=Math.max(St,Me.start*nt),kt=Math.min(kt,(Me.start+Me.count)*nt)),Be!==null?(St=Math.max(St,0),kt=Math.min(kt,Be.count)):it!=null&&(St=Math.max(St,0),kt=Math.min(kt,it.count));const sn=kt-St;if(sn<0||sn===1/0)return;Oe.setup(J,le,We,oe,Be);let Xt,Et=Ce;if(Be!==null&&(Xt=P.get(Be),Et=et,Et.setIndex(Xt)),J.isMesh)le.wireframe===!0?(Ze.setLineWidth(le.wireframeLinewidth*an()),Et.setMode(X.LINES)):Et.setMode(X.TRIANGLES);else if(J.isLine){let qe=le.linewidth;qe===void 0&&(qe=1),Ze.setLineWidth(qe*an()),J.isLineSegments?Et.setMode(X.LINES):J.isLineLoop?Et.setMode(X.LINE_LOOP):Et.setMode(X.LINE_STRIP)}else J.isPoints?Et.setMode(X.POINTS):J.isSprite&&Et.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Yl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Et.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const qe=J._multiDrawStarts,ln=J._multiDrawCounts,Ot=J._multiDrawCount,Bn=Be?P.get(Be).bytesPerElement:1,ma=ke.get(le).currentProgram.getUniforms();for(let Un=0;Un<Ot;Un++)ma.setValue(X,"_gl_DrawID",Un),Et.render(qe[Un]/Bn,ln[Un])}else if(J.isInstancedMesh)Et.renderInstances(St,sn,J.count);else if(oe.isInstancedBufferGeometry){const qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ln=Math.min(oe.instanceCount,qe);Et.renderInstances(St,sn,ln)}else Et.render(St,sn)};function Vt(L,Z,oe){L.transparent===!0&&L.side===Oi&&L.forceSinglePass===!1?(L.side=ti,L.needsUpdate=!0,jn(L,Z,oe),L.side=ca,L.needsUpdate=!0,jn(L,Z,oe),L.side=Oi):jn(L,Z,oe)}this.compile=function(L,Z,oe=null){oe===null&&(oe=L),x=Ye.get(oe),x.init(Z),N.push(x),oe.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),L!==oe&&L.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const le=new Set;return L.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Me=J.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const We=Me[Pe];Vt(We,oe,J),le.add(We)}else Vt(Me,oe,J),le.add(Me)}),x=N.pop(),le},this.compileAsync=function(L,Z,oe=null){const le=this.compile(L,Z,oe);return new Promise(J=>{function Me(){if(le.forEach(function(Pe){ke.get(Pe).currentProgram.isReady()&&le.delete(Pe)}),le.size===0){J(L);return}setTimeout(Me,10)}ct.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Mt=null;function Se(L){Mt&&Mt(L)}function Ge(){It.stop()}function yt(){It.start()}const It=new Xy;It.setAnimationLoop(Se),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(L){Mt=L,we.setAnimationLoop(L),L===null?It.stop():It.start()},we.addEventListener("sessionstart",Ge),we.addEventListener("sessionend",yt),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Z),Z=we.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,Z,G),x=Ye.get(L,N.length),x.init(Z),N.push(x),fe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ve.setFromProjectionMatrix(fe,la,Z.reversedDepth),te=this.localClippingEnabled,Ne=Re.init(this.clippingPlanes,te),S=he.get(L,D.length),S.init(),D.push(S),we.enabled===!0&&we.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&si(Me,Z,-1/0,R.sortObjects)}si(L,Z,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(de,Te),mt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,mt&&Qe.addToRenderList(S,L),this.info.render.frame++,Ne===!0&&Re.beginShadows();const oe=x.state.shadowsArray;Ke.render(oe,L,Z),Ne===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,J=S.transmissive;if(x.setupLights(),Z.isArrayCamera){const Me=Z.cameras;if(J.length>0)for(let Pe=0,We=Me.length;Pe<We;Pe++){const Be=Me[Pe];$i(le,J,L,Be)}mt&&Qe.render(L);for(let Pe=0,We=Me.length;Pe<We;Pe++){const Be=Me[Pe];di(S,L,Be,Be.viewport)}}else J.length>0&&$i(le,J,L,Z),mt&&Qe.render(L),di(S,L,Z);G!==null&&U===0&&(at.updateMultisampleRenderTarget(G),at.updateRenderTargetMipmap(G)),L.isScene===!0&&L.onAfterRender(R,L,Z),Oe.resetDefaultState(),b=-1,A=null,N.pop(),N.length>0?(x=N[N.length-1],Ne===!0&&Re.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function si(L,Z,oe,le){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ve.intersectsSprite(L)){le&&Fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(fe);const Pe=ee.update(L),We=L.material;We.visible&&S.push(L,Pe,We,oe,Fe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ve.intersectsObject(L))){const Pe=ee.update(L),We=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Fe.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Fe.copy(Pe.boundingSphere.center)),Fe.applyMatrix4(L.matrixWorld).applyMatrix4(fe)),Array.isArray(We)){const Be=Pe.groups;for(let nt=0,ut=Be.length;nt<ut;nt++){const it=Be[nt],St=We[it.materialIndex];St&&St.visible&&S.push(L,Pe,St,oe,Fe.z,it)}}else We.visible&&S.push(L,Pe,We,oe,Fe.z,null)}}const Me=L.children;for(let Pe=0,We=Me.length;Pe<We;Pe++)si(Me[Pe],Z,oe,le)}function di(L,Z,oe,le){const J=L.opaque,Me=L.transmissive,Pe=L.transparent;x.setupLightsView(oe),Ne===!0&&Re.setGlobalState(R.clippingPlanes,oe),le&&Ze.viewport(V.copy(le)),J.length>0&&Fi(J,Z,oe),Me.length>0&&Fi(Me,Z,oe),Pe.length>0&&Fi(Pe,Z,oe),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function $i(L,Z,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[le.id]===void 0&&(x.state.transmissionRenderTarget[le.id]=new Bi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ja:ua,minFilter:Va,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Me=x.state.transmissionRenderTarget[le.id],Pe=le.viewport||V;Me.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const We=R.getRenderTarget(),Be=R.getActiveCubeFace(),nt=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(ue),re=R.getClearAlpha(),re<1&&R.setClearColor(16777215,.5),R.clear(),mt&&Qe.render(oe);const ut=R.toneMapping;R.toneMapping=ws;const it=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),x.setupLightsView(le),Ne===!0&&Re.setGlobalState(R.clippingPlanes,le),Fi(L,oe,le),at.updateMultisampleRenderTarget(Me),at.updateRenderTargetMipmap(Me),ct.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let kt=0,sn=Z.length;kt<sn;kt++){const Xt=Z[kt],Et=Xt.object,qe=Xt.geometry,ln=Xt.material,Ot=Xt.group;if(ln.side===Oi&&Et.layers.test(le.layers)){const Bn=ln.side;ln.side=ti,ln.needsUpdate=!0,Hi(Et,oe,le,qe,ln,Ot),ln.side=Bn,ln.needsUpdate=!0,St=!0}}St===!0&&(at.updateMultisampleRenderTarget(Me),at.updateRenderTargetMipmap(Me))}R.setRenderTarget(We,Be,nt),R.setClearColor(ue,re),it!==void 0&&(le.viewport=it),R.toneMapping=ut}function Fi(L,Z,oe){const le=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Me=L.length;J<Me;J++){const Pe=L[J],We=Pe.object,Be=Pe.geometry,nt=Pe.group;let ut=Pe.material;ut.allowOverride===!0&&le!==null&&(ut=le),We.layers.test(oe.layers)&&Hi(We,Z,oe,Be,ut,nt)}}function Hi(L,Z,oe,le,J,Me){L.onBeforeRender(R,Z,oe,le,J,Me),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(R,Z,oe,le,L,Me),J.transparent===!0&&J.side===Oi&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,R.renderBufferDirect(oe,Z,le,J,L,Me),J.side=ca,J.needsUpdate=!0,R.renderBufferDirect(oe,Z,le,J,L,Me),J.side=Oi):R.renderBufferDirect(oe,Z,le,J,L,Me),L.onAfterRender(R,Z,oe,le,J,Me)}function jn(L,Z,oe){Z.isScene!==!0&&(Z=je);const le=ke.get(L),J=x.state.lights,Me=x.state.shadowsArray,Pe=J.state.version,We=pe.getParameters(L,J.state,Me,Z,oe),Be=pe.getProgramCacheKey(We);let nt=le.programs;le.environment=L.isMeshStandardMaterial?Z.environment:null,le.fog=Z.fog,le.envMap=(L.isMeshStandardMaterial?Ht:on).get(L.envMap||le.environment),le.envMapRotation=le.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,nt===void 0&&(L.addEventListener("dispose",_e),nt=new Map,le.programs=nt);let ut=nt.get(Be);if(ut!==void 0){if(le.currentProgram===ut&&le.lightsStateVersion===Pe)return _n(L,We),ut}else We.uniforms=pe.getUniforms(L),L.onBeforeCompile(We,R),ut=pe.acquireProgram(We,Be),nt.set(Be,ut),le.uniforms=We.uniforms;const it=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=Re.uniform),_n(L,We),le.needsLights=lr(L),le.lightsStateVersion=Pe,le.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),le.currentProgram=ut,le.uniformsList=null,ut}function dn(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=ju.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function _n(L,Z){const oe=ke.get(L);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function ea(L,Z,oe,le,J){Z.isScene!==!0&&(Z=je),at.resetTextureUnits();const Me=Z.fog,Pe=le.isMeshStandardMaterial?Z.environment:null,We=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ai,Be=(le.isMeshStandardMaterial?Ht:on).get(le.envMap||Pe),nt=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),it=!!oe.morphAttributes.position,St=!!oe.morphAttributes.normal,kt=!!oe.morphAttributes.color;let sn=ws;le.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(sn=R.toneMapping);const Xt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Et=Xt!==void 0?Xt.length:0,qe=ke.get(le),ln=x.state.lights;if(Ne===!0&&(te===!0||L!==A)){const Cn=L===A&&le.id===b;Re.setState(le,L,Cn)}let Ot=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ln.state.version||qe.outputColorSpace!==We||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==Be||le.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Re.numPlanes||qe.numIntersection!==Re.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==ut||qe.morphTargets!==it||qe.morphNormals!==St||qe.morphColors!==kt||qe.toneMapping!==sn||qe.morphTargetsCount!==Et)&&(Ot=!0):(Ot=!0,qe.__version=le.version);let Bn=qe.currentProgram;Ot===!0&&(Bn=jn(le,Z,J));let ma=!1,Un=!1,Us=!1;const Ct=Bn.getUniforms(),Wn=qe.uniforms;if(Ze.useProgram(Bn.program)&&(ma=!0,Un=!0,Us=!0),le.id!==b&&(b=le.id,Un=!0),ma||A!==L){Ze.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ct.setValue(X,"projectionMatrix",L.projectionMatrix),Ct.setValue(X,"viewMatrix",L.matrixWorldInverse);const xn=Ct.map.cameraPosition;xn!==void 0&&xn.setValue(X,Ue.setFromMatrixPosition(L.matrixWorld)),ot.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,Un=!0,Us=!0)}if(J.isSkinnedMesh){Ct.setOptional(X,J,"bindMatrix"),Ct.setOptional(X,J,"bindMatrixInverse");const Cn=J.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ct.setValue(X,"boneTexture",Cn.boneTexture,at))}J.isBatchedMesh&&(Ct.setOptional(X,J,"batchingTexture"),Ct.setValue(X,"batchingTexture",J._matricesTexture,at),Ct.setOptional(X,J,"batchingIdTexture"),Ct.setValue(X,"batchingIdTexture",J._indirectTexture,at),Ct.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(X,"batchingColorTexture",J._colorsTexture,at));const Qn=oe.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&Ae.update(J,oe,Bn),(Un||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Ct.setValue(X,"receiveShadow",J.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Wn.envMap.value=Be,Wn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Z.environment!==null&&(Wn.envMapIntensity.value=Z.environmentIntensity),Un&&(Ct.setValue(X,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&qa(Wn,Us),Me&&le.fog===!0&&Ee.refreshFogUniforms(Wn,Me),Ee.refreshMaterialUniforms(Wn,le,Y,K,x.state.transmissionRenderTarget[L.id]),ju.upload(X,dn(qe),Wn,at)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(ju.upload(X,dn(qe),Wn,at),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ct.setValue(X,"center",J.center),Ct.setValue(X,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(X,"normalMatrix",J.normalMatrix),Ct.setValue(X,"modelMatrix",J.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Cn=le.uniformsGroups;for(let xn=0,ur=Cn.length;xn<ur;xn++){const ta=Cn[xn];ht.update(ta,Bn),ht.bind(ta,Bn)}}return Bn}function qa(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function lr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(L,Z,oe){const le=ke.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ke.get(L.texture).__webglTexture=Z,ke.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Z){const oe=ke.get(L);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0};const Ns=X.createFramebuffer();this.setRenderTarget=function(L,Z=0,oe=0){G=L,I=Z,U=oe;let le=!0,J=null,Me=!1,Pe=!1;if(L){const Be=ke.get(L);if(Be.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(X.FRAMEBUFFER,null),le=!1;else if(Be.__webglFramebuffer===void 0)at.setupRenderTarget(L);else if(Be.__hasExternalTextures)at.rebindTextures(L,ke.get(L.texture).__webglTexture,ke.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const it=L.depthTexture;if(Be.__boundDepthTexture!==it){if(it!==null&&ke.has(it)&&(L.width!==it.image.width||L.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(L)}}const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const ut=ke.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ut[Z])?J=ut[Z][oe]:J=ut[Z],Me=!0):L.samples>0&&at.useMultisampledRTT(L)===!1?J=ke.get(L).__webglMultisampledFramebuffer:Array.isArray(ut)?J=ut[oe]:J=ut,V.copy(L.viewport),W.copy(L.scissor),ae=L.scissorTest}else V.copy(z).multiplyScalar(Y).floor(),W.copy($).multiplyScalar(Y).floor(),ae=ye;if(oe!==0&&(J=Ns),Ze.bindFramebuffer(X.FRAMEBUFFER,J)&&le&&Ze.drawBuffers(L,J),Ze.viewport(V),Ze.scissor(W),Ze.setScissorTest(ae),Me){const Be=ke.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,oe)}else if(Pe){const Be=Z;for(let nt=0;nt<L.textures.length;nt++){const ut=ke.get(L.textures[nt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+nt,ut.__webglTexture,oe,Be)}}else if(L!==null&&oe!==0){const Be=ke.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Be.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(L,Z,oe,le,J,Me,Pe,We=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){Ze.bindFramebuffer(X.FRAMEBUFFER,Be);try{const nt=L.textures[We],ut=nt.format,it=nt.type;if(!ot.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-le&&oe>=0&&oe<=L.height-J&&(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We),X.readPixels(Z,oe,le,J,ze.convert(ut),ze.convert(it),Me))}finally{const nt=G!==null?ke.get(G).__webglFramebuffer:null;Ze.bindFramebuffer(X.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(L,Z,oe,le,J,Me,Pe,We=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be)if(Z>=0&&Z<=L.width-le&&oe>=0&&oe<=L.height-J){Ze.bindFramebuffer(X.FRAMEBUFFER,Be);const nt=L.textures[We],ut=nt.format,it=nt.type;if(!ot.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,St),X.bufferData(X.PIXEL_PACK_BUFFER,Me.byteLength,X.STREAM_READ),L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We),X.readPixels(Z,oe,le,J,ze.convert(ut),ze.convert(it),0);const kt=G!==null?ke.get(G).__webglFramebuffer:null;Ze.bindFramebuffer(X.FRAMEBUFFER,kt);const sn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await EE(X,sn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,St),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Me),X.deleteBuffer(St),X.deleteSync(sn),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Z=null,oe=0){const le=Math.pow(2,-oe),J=Math.floor(L.image.width*le),Me=Math.floor(L.image.height*le),Pe=Z!==null?Z.x:0,We=Z!==null?Z.y:0;at.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Pe,We,J,Me),Ze.unbindTexture()};const cr=X.createFramebuffer(),vn=X.createFramebuffer();this.copyTextureToTexture=function(L,Z,oe=null,le=null,J=0,Me=null){Me===null&&(J!==0?(Yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=J,J=0):Me=0);let Pe,We,Be,nt,ut,it,St,kt,sn;const Xt=L.isCompressedTexture?L.mipmaps[Me]:L.image;if(oe!==null)Pe=oe.max.x-oe.min.x,We=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,ut=oe.min.y,it=oe.isBox3?oe.min.z:0;else{const Qn=Math.pow(2,-J);Pe=Math.floor(Xt.width*Qn),We=Math.floor(Xt.height*Qn),L.isDataArrayTexture?Be=Xt.depth:L.isData3DTexture?Be=Math.floor(Xt.depth*Qn):Be=1,nt=0,ut=0,it=0}le!==null?(St=le.x,kt=le.y,sn=le.z):(St=0,kt=0,sn=0);const Et=ze.convert(Z.format),qe=ze.convert(Z.type);let ln;Z.isData3DTexture?(at.setTexture3D(Z,0),ln=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(at.setTexture2DArray(Z,0),ln=X.TEXTURE_2D_ARRAY):(at.setTexture2D(Z,0),ln=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ot=X.getParameter(X.UNPACK_ROW_LENGTH),Bn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ma=X.getParameter(X.UNPACK_SKIP_PIXELS),Un=X.getParameter(X.UNPACK_SKIP_ROWS),Us=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Xt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Xt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,nt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ut),X.pixelStorei(X.UNPACK_SKIP_IMAGES,it);const Ct=L.isDataArrayTexture||L.isData3DTexture,Wn=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){const Qn=ke.get(L),Cn=ke.get(Z),xn=ke.get(Qn.__renderTarget),ur=ke.get(Cn.__renderTarget);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,ur.__webglFramebuffer);for(let ta=0;ta<Be;ta++)Ct&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ke.get(L).__webglTexture,J,it+ta),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ke.get(Z).__webglTexture,Me,sn+ta)),X.blitFramebuffer(nt,ut,Pe,We,St,kt,Pe,We,X.DEPTH_BUFFER_BIT,X.NEAREST);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||L.isRenderTargetTexture||ke.has(L)){const Qn=ke.get(L),Cn=ke.get(Z);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,cr),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,vn);for(let xn=0;xn<Be;xn++)Ct?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qn.__webglTexture,J,it+xn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qn.__webglTexture,J),Wn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Cn.__webglTexture,Me,sn+xn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Cn.__webglTexture,Me),J!==0?X.blitFramebuffer(nt,ut,Pe,We,St,kt,Pe,We,X.COLOR_BUFFER_BIT,X.NEAREST):Wn?X.copyTexSubImage3D(ln,Me,St,kt,sn+xn,nt,ut,Pe,We):X.copyTexSubImage2D(ln,Me,St,kt,nt,ut,Pe,We);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Wn?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(ln,Me,St,kt,sn,Pe,We,Be,Et,qe,Xt.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(ln,Me,St,kt,sn,Pe,We,Be,Et,Xt.data):X.texSubImage3D(ln,Me,St,kt,sn,Pe,We,Be,Et,qe,Xt):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Me,St,kt,Pe,We,Et,qe,Xt.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Me,St,kt,Xt.width,Xt.height,Et,Xt.data):X.texSubImage2D(X.TEXTURE_2D,Me,St,kt,Pe,We,Et,qe,Xt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ot),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Bn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ma),X.pixelStorei(X.UNPACK_SKIP_ROWS,Un),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Us),Me===0&&Z.generateMipmaps&&X.generateMipmap(ln),Ze.unbindTexture()},this.initRenderTarget=function(L){ke.get(L).__webglFramebuffer===void 0&&at.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?at.setTextureCube(L,0):L.isData3DTexture?at.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?at.setTexture2DArray(L,0):at.setTexture2D(L,0),Ze.unbindTexture()},this.resetState=function(){I=0,U=0,G=null,Ze.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}function Xx(o,e){if(e===K1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Yp||e===my){let t=o.getIndex();if(t===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let d=0;d<f.count;d++)u.push(d);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=t.count-2,r=[];if(e===Yp)for(let u=1;u<=a;u++)r.push(t.getX(0)),r.push(t.getX(u)),r.push(t.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(t.getX(u)),r.push(t.getX(u+1)),r.push(t.getX(u+2))):(r.push(t.getX(u+2)),r.push(t.getX(u+1)),r.push(t.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(r),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class MR extends Co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new VR(t)})}load(e,t,a,r){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=Hl.extractUrlBase(e);u=Hl.resolveURL(h,this.path)}else u=Hl.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){r?r(h):console.error(h),l.manager.itemError(e),l.manager.itemEnd(e)},d=new Fy(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{l.parse(h,u,function(_){t(_),l.manager.itemEnd(e)},f)}catch(_){f(_)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,r){let l;const u={},f={},d=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Ky){try{u[wt.KHR_BINARY_GLTF]=new GR(e)}catch(g){r&&r(g);return}l=JSON.parse(u[wt.KHR_BINARY_GLTF].content)}else l=JSON.parse(d.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new tC(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){const g=this.pluginCallbacks[_](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[g.name]=g,u[g.name]=!0}if(l.extensionsUsed)for(let _=0;_<l.extensionsUsed.length;++_){const g=l.extensionsUsed[_],v=l.extensionsRequired||[];switch(g){case wt.KHR_MATERIALS_UNLIT:u[g]=new bR;break;case wt.KHR_DRACO_MESH_COMPRESSION:u[g]=new kR(l,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:u[g]=new XR;break;case wt.KHR_MESH_QUANTIZATION:u[g]=new jR;break;default:v.indexOf(g)>=0&&f[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(u),h.setPlugins(f),h.parse(a,r)}parseAsync(e,t){const a=this;return new Promise(function(r,l){a.parse(e,t,r,l)})}}function ER(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TR{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let a=0,r=t.length;a<r;a++){const l=t[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,a="light:"+e;let r=t.cache.get(a);if(r)return r;const l=t.json,d=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let h;const _=new rt(16777215);d.color!==void 0&&_.setRGB(d.color[0],d.color[1],d.color[2],ai);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new Gy(_),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new tf(_),h.distance=g;break;case"spot":h=new Vy(_),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),ra(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),r=Promise.resolve(h),t.cache.add(a,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,a=this.parser,l=a.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(d){return a._getNodeRef(t.cache,f,d)})}}class bR{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ga}extendParams(e,t,a){const r=[];e.color=new rt(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],ai),e.opacity=u[3]}l.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",l.baseColorTexture,wn))}return Promise.all(r)}}class AR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class wR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(f,f)}return Promise.all(l)}}class RR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class CR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class DR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],ai)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(t,"sheenColorMap",u.sheenColorTexture,wn)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class LR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class NR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(f[0],f[1],f[2],ai),Promise.all(l)}}class UR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class OR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(f[0],f[1],f[2],ai),u.specularColorTexture!==void 0&&l.push(a.assignTexture(t,"specularColorMap",u.specularColorTexture,wn)),Promise.all(l)}}class IR{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class PR{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:pa}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class zR{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,a=t.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const l=r.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class BR{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,a=this.parser,r=a.json,l=r.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=r.images[u.source];let d=a.textureLoader;if(f.uri){const h=a.options.manager.getHandler(f.uri);h!==null&&(d=h)}return a.loadTextureImage(e,u.source,d)}}class FR{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,a=this.parser,r=a.json,l=r.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=r.images[u.source];let d=a.textureLoader;if(f.uri){const h=a.options.manager.getHandler(f.uri);h!==null&&(d=h)}return a.loadTextureImage(e,u.source,d)}}class HR{constructor(e){this.name=wt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],l=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const d=r.byteOffset||0,h=r.byteLength||0,_=r.count,g=r.byteStride,v=new Uint8Array(f,d,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(_,g,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(_*g);return u.decodeGltfBuffer(new Uint8Array(y),_,g,v,r.mode,r.filter),y})})}else return null}}class VR{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=t.meshes[a.mesh];for(const h of r.primitives)if(h.mode!==Ui.TRIANGLES&&h.mode!==Ui.TRIANGLE_STRIP&&h.mode!==Ui.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],d={};for(const h in u)f.push(this.parser.getDependency("accessor",u[h]).then(_=>(d[h]=_,d[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const _=h.pop(),g=_.isGroup?_.children:[_],v=h[0].count,y=[];for(const E of g){const T=new dt,S=new F,x=new Zi,D=new F(1,1,1),N=new JE(E.geometry,E.material,v);for(let R=0;R<v;R++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,R),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,R),d.SCALE&&D.fromBufferAttribute(d.SCALE,R),N.setMatrixAt(R,T.compose(S,x,D));for(const R in d)if(R==="_COLOR_0"){const O=d[R];N.instanceColor=new Zp(O.array,O.itemSize,O.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&E.geometry.setAttribute(R,d[R]);fn.prototype.copy.call(N,E),this.parser.assignFinalMaterial(N),y.push(N)}return _.isGroup?(_.clear(),_.add(...y),_):y[0]}))}}const Ky="glTF",Ol=12,jx={JSON:1313821514,BIN:5130562};class GR{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ol),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ky)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ol,l=new DataView(e,Ol);let u=0;for(;u<r;){const f=l.getUint32(u,!0);u+=4;const d=l.getUint32(u,!0);if(u+=4,d===jx.JSON){const h=new Uint8Array(e,Ol+u,f);this.content=a.decode(h)}else if(d===jx.BIN){const h=Ol+u;this.body=e.slice(h,h+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,r=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},d={},h={};for(const _ in u){const g=tm[_]||_.toLowerCase();f[g]=u[_]}for(const _ in e.attributes){const g=tm[_]||_.toLowerCase();if(u[_]!==void 0){const v=a.accessors[e.attributes[_]],y=go[v.componentType];h[g]=y.name,d[g]=v.normalized===!0}}return t.getDependency("bufferView",l).then(function(_){return new Promise(function(g,v){r.decodeDracoFile(_,function(y){for(const E in y.attributes){const T=y.attributes[E],S=d[E];S!==void 0&&(T.normalized=S)}g(y)},f,h,ai,v)})})}}class XR{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jR{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}}class Zy extends Ql{constructor(e,t,a,r){super(e,t,a,r)}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r*3+r;for(let u=0;u!==r;u++)t[u]=a[l+u];return t}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=f*2,h=f*3,_=r-t,g=(a-t)/_,v=g*g,y=v*g,E=e*h,T=E-h,S=-2*y+3*v,x=y-v,D=1-S,N=x-v+g;for(let R=0;R!==f;R++){const O=u[T+R+f],I=u[T+R+d]*_,U=u[E+R+f],G=u[E+R]*_;l[R]=D*O+N*I+S*U+x*G}return l}}const WR=new Zi;class qR extends Zy{interpolate_(e,t,a,r){const l=super.interpolate_(e,t,a,r);return WR.fromArray(l).normalize().toArray(l),l}}const Ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},go={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wx={9728:ni,9729:Ei,9984:oy,9985:Hu,9986:Pl,9987:Va},qx={33071:As,33648:qu,10497:Cs},ip={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YR={CUBICSPLINE:void 0,LINEAR:Wl,STEP:jl},ap={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KR(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ca})),o.DefaultMaterial}function nr(o,e,t){for(const a in t.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function ra(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZR(o,e,t){let a=!1,r=!1,l=!1;for(let h=0,_=e.length;h<_;h++){const g=e[h];if(g.POSITION!==void 0&&(a=!0),g.NORMAL!==void 0&&(r=!0),g.COLOR_0!==void 0&&(l=!0),a&&r&&l)break}if(!a&&!r&&!l)return Promise.resolve(o);const u=[],f=[],d=[];for(let h=0,_=e.length;h<_;h++){const g=e[h];if(a){const v=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;u.push(v)}if(r){const v=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;f.push(v)}if(l){const v=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d)]).then(function(h){const _=h[0],g=h[1],v=h[2];return a&&(o.morphAttributes.position=_),r&&(o.morphAttributes.normal=g),l&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function QR(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let a=0,r=t.length;a<r;a++)o.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JR(o){let e;const t=o.extensions&&o.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sp(t.attributes):e=o.indices+":"+sp(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+sp(o.targets[a]);return e}function sp(o){let e="";const t=Object.keys(o).sort();for(let a=0,r=t.length;a<r;a++)e+=t[a]+":"+o[t[a]]+";";return e}function nm(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $R(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const eC=new dt;class tC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ER,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const d=f.match(/Version\/(\d+)/);r=a&&d?parseInt(d[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||l&&u<98?this.textureLoader=new Hy(this.options.manager):this.textureLoader=new ET(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const a=this,r=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return nr(l,f,r),ra(f,r),Promise.all(a._invokeAll(function(d){return d.afterRoot&&d.afterRoot(f)})).then(function(){for(const d of f.scenes)d.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let r=0,l=t.length;r<l;r++){const u=t[r].joints;for(let f=0,d=u.length;f<d;f++)e[u[f]].isBone=!0}for(let r=0,l=e.length;r<l;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;const r=a.clone(),l=(u,f)=>{const d=this.associations.get(u);d!=null&&this.associations.set(f,d);for(const[h,_]of u.children.entries())l(_,f.children[h])};return l(a,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){const r=e(t[a]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const a=[];for(let r=0;r<t.length;r++){const l=e(t[r]);l&&a.push(l)}return a}getDependency(e,t){const a=e+":"+t;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":r=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(l,u){a.load(Hl.resolveURL(t.uri,r.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){const r=t.byteLength||0,l=t.byteOffset||0;return a.slice(l,l+r)})}loadAccessor(e){const t=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=ip[r.type],f=go[r.componentType],d=r.normalized===!0,h=new f(r.count*u);return Promise.resolve(new ii(h,u,d))}const l=[];return r.bufferView!==void 0?l.push(this.getDependency("bufferView",r.bufferView)):l.push(null),r.sparse!==void 0&&(l.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],d=ip[r.type],h=go[r.componentType],_=h.BYTES_PER_ELEMENT,g=_*d,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let T,S;if(y&&y!==g){const x=Math.floor(v/y),D="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let N=t.cache.get(D);N||(T=new h(f,x*y,r.count*y/_),N=new Ay(T,y/_),t.cache.add(D,N)),S=new Kl(N,d,v%y/_,E)}else f===null?T=new h(r.count*d):T=new h(f,v,r.count*d),S=new ii(T,d,E);if(r.sparse!==void 0){const x=ip.SCALAR,D=go[r.sparse.indices.componentType],N=r.sparse.indices.byteOffset||0,R=r.sparse.values.byteOffset||0,O=new D(u[1],N,r.sparse.count*x),I=new h(u[2],R,r.sparse.count*d);f!==null&&(S=new ii(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,G=O.length;U<G;U++){const b=O[U];if(S.setX(b,I[U*d]),d>=2&&S.setY(b,I[U*d+1]),d>=3&&S.setZ(b,I[U*d+2]),d>=4&&S.setW(b,I[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const t=this.json,a=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const d=a.manager.getHandler(u.uri);d!==null&&(f=d)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,a){const r=this,l=this.json,u=l.textures[e],f=l.images[t],d=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,a).then(function(_){_.flipY=!1,_.name=u.name||f.name||"",_.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(_.name=f.uri);const v=(l.samplers||{})[u.sampler]||{};return _.magFilter=Wx[v.magFilter]||Ei,_.minFilter=Wx[v.minFilter]||Va,_.wrapS=qx[v.wrapS]||Cs,_.wrapT=qx[v.wrapT]||Cs,_.generateMipmaps=!_.isCompressedTexture&&_.minFilter!==ni&&_.minFilter!==Ei,r.associations.set(_,{textures:e}),_}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const a=this,r=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=r.images[e],f=self.URL||self.webkitURL;let d=u.uri||"",h=!1;if(u.bufferView!==void 0)d=a.getDependency("bufferView",u.bufferView).then(function(g){h=!0;const v=new Blob([g],{type:u.mimeType});return d=f.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const _=Promise.resolve(d).then(function(g){return new Promise(function(v,y){let E=v;t.isImageBitmapLoader===!0&&(E=function(T){const S=new Rn(T);S.needsUpdate=!0,v(S)}),t.load(Hl.resolveURL(g,l.path),E,void 0,y)})}).then(function(g){return h===!0&&f.revokeObjectURL(d),ra(g,u),g.userData.mimeType=u.mimeType||$R(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=_,_}assignTexture(e,t,a,r){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[wt.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const d=l.associations.get(u);u=l.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let a=e.material;const r=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let d=this.cache.get(f);d||(d=new Ny,Qi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(f,d)),a=d}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let d=this.cache.get(f);d||(d=new Ly,Qi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,this.cache.add(f,d)),a=d}if(r||l||u){let f="ClonedMaterial:"+a.uuid+":";r&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let d=this.cache.get(f);d||(d=a.clone(),l&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(f,d),this.associations.set(d,this.associations.get(a))),a=d}e.material=a}getMaterialType(){return tt}loadMaterial(e){const t=this,a=this.json,r=this.extensions,l=a.materials[e];let u;const f={},d=l.extensions||{},h=[];if(d[wt.KHR_MATERIALS_UNLIT]){const g=r[wt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),h.push(g.extendParams(f,l,t))}else{const g=l.pbrMetallicRoughness||{};if(f.color=new rt(1,1,1),f.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;f.color.setRGB(v[0],v[1],v[2],ai),f.opacity=v[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(f,"map",g.baseColorTexture,wn)),f.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,f.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(f,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(f,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=Oi);const _=l.alphaMode||ap.OPAQUE;if(_===ap.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,_===ap.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==Ga&&(h.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new Je(1,1),l.normalTexture.scale!==void 0)){const g=l.normalTexture.scale;f.normalScale.set(g,g)}if(l.occlusionTexture!==void 0&&u!==Ga&&(h.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==Ga){const g=l.emissiveFactor;f.emissive=new rt().setRGB(g[0],g[1],g[2],ai)}return l.emissiveTexture!==void 0&&u!==Ga&&h.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,wn)),Promise.all(h).then(function(){const g=new u(f);return l.name&&(g.name=l.name),ra(g,l),t.associations.set(g,{materials:e}),l.extensions&&nr(r,g,l),g})}createUniqueName(e){const t=jt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,a=this.extensions,r=this.primitiveCache;function l(f){return a[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(d){return Yx(d,f,t)})}const u=[];for(let f=0,d=e.length;f<d;f++){const h=e[f],_=JR(h),g=r[_];if(g)u.push(g.promise);else{let v;h.extensions&&h.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?v=l(h):v=Yx(new zn,h,t),r[_]={primitive:h,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const t=this,a=this.json,r=this.extensions,l=a.meshes[e],u=l.primitives,f=[];for(let d=0,h=u.length;d<h;d++){const _=u[d].material===void 0?KR(this.cache):this.getDependency("material",u[d].material);f.push(_)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(d){const h=d.slice(0,d.length-1),_=d[d.length-1],g=[];for(let y=0,E=_.length;y<E;y++){const T=_[y],S=u[y];let x;const D=h[y];if(S.mode===Ui.TRIANGLES||S.mode===Ui.TRIANGLE_STRIP||S.mode===Ui.TRIANGLE_FAN||S.mode===void 0)x=l.isSkinnedMesh===!0?new KE(T,D):new Le(T,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===Ui.TRIANGLE_STRIP?x.geometry=Xx(x.geometry,my):S.mode===Ui.TRIANGLE_FAN&&(x.geometry=Xx(x.geometry,Yp));else if(S.mode===Ui.LINES)x=new nT(T,D);else if(S.mode===Ui.LINE_STRIP)x=new ym(T,D);else if(S.mode===Ui.LINE_LOOP)x=new iT(T,D);else if(S.mode===Ui.POINTS)x=new aT(T,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&QR(x,l),x.name=t.createUniqueName(l.name||"mesh_"+e),ra(x,l),S.extensions&&nr(r,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,E=g.length;y<E;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return l.extensions&&nr(r,g[0],l),g[0];const v=new nn;l.extensions&&nr(r,v,l),t.associations.set(v,{meshes:e});for(let y=0,E=g.length;y<E;y++)v.add(g[y]);return v})}loadCamera(e){let t;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new Zn(co.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(t=new sf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),ra(t,a),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],a=[];for(let r=0,l=t.joints.length;r<l;r++)a.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const l=r.pop(),u=r,f=[],d=[];for(let h=0,_=u.length;h<_;h++){const g=u[h];if(g){f.push(g);const v=new dt;l!==null&&v.fromArray(l.array,h*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new vm(f,d)})}loadAnimation(e){const t=this.json,a=this,r=t.animations[e],l=r.name?r.name:"animation_"+e,u=[],f=[],d=[],h=[],_=[];for(let g=0,v=r.channels.length;g<v;g++){const y=r.channels[g],E=r.samplers[y.sampler],T=y.target,S=T.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,D=r.parameters!==void 0?r.parameters[E.output]:E.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",D)),h.push(E),_.push(T))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(h),Promise.all(_)]).then(function(g){const v=g[0],y=g[1],E=g[2],T=g[3],S=g[4],x=[];for(let N=0,R=v.length;N<R;N++){const O=v[N],I=y[N],U=E[N],G=T[N],b=S[N];if(O===void 0)continue;O.updateMatrix&&O.updateMatrix();const A=a._createAnimationTracks(O,I,U,G,b);if(A)for(let V=0;V<A.length;V++)x.push(A[V])}const D=new Jp(l,void 0,x);return ra(D,r),D})}createNodeMesh(e){const t=this.json,a=this,r=t.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,r.mesh,l);return r.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let d=0,h=r.weights.length;d<h;d++)f.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(e){const t=this.json,a=this,r=t.nodes[e],l=a._loadNodeShallow(e),u=[],f=r.children||[];for(let h=0,_=f.length;h<_;h++)u.push(a.getDependency("node",f[h]));const d=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([l,Promise.all(u),d]).then(function(h){const _=h[0],g=h[1],v=h[2];v!==null&&_.traverse(function(y){y.isSkinnedMesh&&y.bind(v,eC)});for(let y=0,E=g.length;y<E;y++)_.add(g[y]);return _})}_loadNodeShallow(e){const t=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?r.createUniqueName(l.name):"",f=[],d=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&f.push(d),l.camera!==void 0&&f.push(r.getDependency("camera",l.camera).then(function(h){return r._getNodeRef(r.cameraCache,l.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let _;if(l.isBone===!0?_=new Cy:h.length>1?_=new nn:h.length===1?_=h[0]:_=new fn,_!==h[0])for(let g=0,v=h.length;g<v;g++)_.add(h[g]);if(l.name&&(_.userData.name=l.name,_.name=u),ra(_,l),l.extensions&&nr(a,_,l),l.matrix!==void 0){const g=new dt;g.fromArray(l.matrix),_.applyMatrix4(g)}else l.translation!==void 0&&_.position.fromArray(l.translation),l.rotation!==void 0&&_.quaternion.fromArray(l.rotation),l.scale!==void 0&&_.scale.fromArray(l.scale);if(!r.associations.has(_))r.associations.set(_,{});else if(l.mesh!==void 0&&r.meshCache.refs[l.mesh]>1){const g=r.associations.get(_);r.associations.set(_,{...g})}return r.associations.get(_).nodes=e,_}),this.nodeCache[e]}loadScene(e){const t=this.extensions,a=this.json.scenes[e],r=this,l=new nn;a.name&&(l.name=r.createUniqueName(a.name)),ra(l,a),a.extensions&&nr(t,l,a);const u=a.nodes||[],f=[];for(let d=0,h=u.length;d<h;d++)f.push(r.getDependency("node",u[d]));return Promise.all(f).then(function(d){for(let _=0,g=d.length;_<g;_++)l.add(d[_]);const h=_=>{const g=new Map;for(const[v,y]of r.associations)(v instanceof Qi||v instanceof Rn)&&g.set(v,y);return _.traverse(v=>{const y=r.associations.get(v);y!=null&&g.set(v,y)}),g};return r.associations=h(l),l})}_createAnimationTracks(e,t,a,r,l){const u=[],f=e.name?e.name:e.uuid,d=[];Es[l.path]===Es.weights?e.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(f);let h;switch(Es[l.path]){case Es.weights:h=Mo;break;case Es.rotation:h=Eo;break;case Es.translation:case Es.scale:h=To;break;default:switch(a.itemSize){case 1:h=Mo;break;case 2:case 3:default:h=To;break}break}const _=r.interpolation!==void 0?YR[r.interpolation]:Wl,g=this._getArrayFromAccessor(a);for(let v=0,y=d.length;v<y;v++){const E=new h(d[v]+"."+Es[l.path],t.array,g,_);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const a=nm(t.constructor),r=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=t[l]*a;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof Eo?qR:Zy;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nC(o,e,t){const a=e.attributes,r=new ha;if(a.POSITION!==void 0){const f=t.json.accessors[a.POSITION],d=f.min,h=f.max;if(d!==void 0&&h!==void 0){if(r.set(new F(d[0],d[1],d[2]),new F(h[0],h[1],h[2])),f.normalized){const _=nm(go[f.componentType]);r.min.multiplyScalar(_),r.max.multiplyScalar(_)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new F,d=new F;for(let h=0,_=l.length;h<_;h++){const g=l[h];if(g.POSITION!==void 0){const v=t.json.accessors[g.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const T=nm(go[v.componentType]);d.multiplyScalar(T)}f.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(f)}o.boundingBox=r;const u=new da;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function Yx(o,e,t){const a=e.attributes,r=[];function l(u,f){return t.getDependency("accessor",u).then(function(d){o.setAttribute(f,d)})}for(const u in a){const f=tm[u]||u.toLowerCase();f in o.attributes||r.push(l(a[u],f))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});r.push(u)}return Ut.workingColorSpace!==ai&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ut.workingColorSpace}" not supported.`),ra(o,e),nC(o,e,t),Promise.all(r).then(function(){return e.targets!==void 0?ZR(o,e.targets,t):o})}class iC extends Le{constructor(e,t={}){super(e),this.isWater=!0;const a=this,r=t.textureWidth!==void 0?t.textureWidth:512,l=t.textureHeight!==void 0?t.textureHeight:512,u=t.clipBias!==void 0?t.clipBias:0,f=t.alpha!==void 0?t.alpha:1,d=t.time!==void 0?t.time:0,h=t.waterNormals!==void 0?t.waterNormals:null,_=t.sunDirection!==void 0?t.sunDirection:new F(.70707,.70707,0),g=new rt(t.sunColor!==void 0?t.sunColor:16777215),v=new rt(t.waterColor!==void 0?t.waterColor:8355711),y=t.eye!==void 0?t.eye:new F(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,T=t.side!==void 0?t.side:ca,S=t.fog!==void 0?t.fog:!1,x=new Ts,D=new F,N=new F,R=new F,O=new dt,I=new F(0,0,-1),U=new Pt,G=new F,b=new F,A=new Pt,V=new dt,W=new Zn,ae=new Bi(r,l),ue={name:"MirrorShader",uniforms:Ds.merge([Ie.fog,Ie.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new dt},sunColor:{value:new rt(8355711)},sunDirection:{value:new F(.70707,.70707,0)},eye:{value:new F},waterColor:{value:new rt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},re=new kn({name:ue.name,uniforms:Ds.clone(ue.uniforms),vertexShader:ue.vertexShader,fragmentShader:ue.fragmentShader,lights:!0,side:T,fog:S});re.uniforms.mirrorSampler.value=ae.texture,re.uniforms.textureMatrix.value=V,re.uniforms.alpha.value=f,re.uniforms.time.value=d,re.uniforms.normalSampler.value=h,re.uniforms.sunColor.value=g,re.uniforms.waterColor.value=v,re.uniforms.sunDirection.value=_,re.uniforms.distortionScale.value=E,re.uniforms.eye.value=y,a.material=re,a.onBeforeRender=function(B,K,Y){if(N.setFromMatrixPosition(a.matrixWorld),R.setFromMatrixPosition(Y.matrixWorld),O.extractRotation(a.matrixWorld),D.set(0,0,1),D.applyMatrix4(O),G.subVectors(N,R),G.dot(D)>0)return;G.reflect(D).negate(),G.add(N),O.extractRotation(Y.matrixWorld),I.set(0,0,-1),I.applyMatrix4(O),I.add(R),b.subVectors(N,I),b.reflect(D).negate(),b.add(N),W.position.copy(G),W.up.set(0,1,0),W.up.applyMatrix4(O),W.up.reflect(D),W.lookAt(b),W.far=Y.far,W.updateMatrixWorld(),W.projectionMatrix.copy(Y.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(W.projectionMatrix),V.multiply(W.matrixWorldInverse),x.setFromNormalAndCoplanarPoint(D,N),x.applyMatrix4(W.matrixWorldInverse),U.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const de=W.projectionMatrix;A.x=(Math.sign(U.x)+de.elements[8])/de.elements[0],A.y=(Math.sign(U.y)+de.elements[9])/de.elements[5],A.z=-1,A.w=(1+de.elements[10])/de.elements[14],U.multiplyScalar(2/U.dot(A)),de.elements[2]=U.x,de.elements[6]=U.y,de.elements[10]=U.z+1-u,de.elements[14]=U.w,y.setFromMatrixPosition(Y.matrixWorld);const Te=B.getRenderTarget(),z=B.xr.enabled,$=B.shadowMap.autoUpdate;a.visible=!1,B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(ae),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(K,W),a.visible=!0,B.xr.enabled=z,B.shadowMap.autoUpdate=$,B.setRenderTarget(Te);const ye=Y.viewport;ye!==void 0&&B.state.viewport(ye)}}}class of extends Le{constructor(){const e=of.SkyShader,t=new kn({name:e.name,uniforms:Ds.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ti,depthWrite:!1});super(new Ft(1,1,1),t),this.isSky=!0}}of.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aC=new sf(-1,1,1,-1,0,1);class sC extends zn{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const rC=new sC;class Am{constructor(e){this._mesh=new Le(rC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class oC extends Lo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ds.clone(e.uniforms),this.material=new kn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Am(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kx extends Lo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const r=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),l.buffers.stencil.setFunc(r.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(r.EQUAL,1,4294967295),l.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),l.buffers.stencil.setLocked(!0)}}class lC extends Lo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cC{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new Je);this._width=a.width,this._height=a.height,t=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ja}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oC(Wu),this.copyPass.material.blending=Xa,this.clock=new ky}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let r=0,l=this.passes.length;r<l;r++){const u=this.passes[r];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const f=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Kx!==void 0&&(u instanceof Kx?a=!0:u instanceof lC&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(a,r),this.renderTarget2.setSize(a,r);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uC extends Lo{constructor(e,t,a=null,r=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=r,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,a){const r=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=r}}const fC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class bo extends Lo{constructor(e,t=1,a,r){super(),this.strength=t,this.radius=a,this.threshold=r,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Bi(l,u,{type:ja}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const g=new Bi(l,u,{type:ja});g.texture.name="UnrealBloomPass.h"+_,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const v=new Bi(l,u,{type:ja});v.texture.name="UnrealBloomPass.v"+_,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),l=Math.round(l/2),u=Math.round(u/2)}const f=fC;this.highPassUniforms=Ds.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new Je(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ds.clone(Wu.uniforms),this.blendMaterial=new kn({uniforms:this.copyUniforms,vertexShader:Wu.vertexShader,fragmentShader:Wu.fragmentShader,blending:lp,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new rt,this._oldClearAlpha=1,this._basic=new Ga,this._fsQuad=new Am(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(a,r);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,r),this.renderTargetsVertical[l].setSize(a,r),this.separableBlurMaterials[l].uniforms.invSize.value=new Je(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2)}render(e,t,a,r,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[d].uniforms.direction.value=bo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=bo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[];for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(e*e))/e);return new kn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new kn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}bo.BlurDirectionX=new Je(1,0);bo.BlurDirectionY=new Je(0,1);const Bu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class hC extends Lo{constructor(){super(),this.uniforms=Ds.clone(Bu.uniforms),this.material=new sT({name:Bu.name,uniforms:this.uniforms,vertexShader:Bu.vertexShader,fragmentShader:Bu.fragmentShader}),this._fsQuad=new Am(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ut.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ey?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ty?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ny?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ay?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sy?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===iy&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const dC={golosinas:new F(-10,.3,7),papas_revolconas:new F(6.6,.35,8.4),llave_water:new F(15.5,.35,1.8),carpeta_rosa:new F(-6.5,.35,7.2),pistola_agua:new F(-17.3,.35,6.4),tienda_sin_palos:new F(-16.5,.35,11.5),colchon_pinchado:new F(-12.5,.28,-10.5),barca_remo:new F(-18.5,.32,-6.8),dj_bueno:new F(-2.7,.75,-15.6),dj_malo:new F(2.7,.75,-15.6),hamaca:new F(-17,.35,12.5),fuente:new F(15.8,.35,-2.5),pole_dance:new F(5.8,.35,-13.5),cinta:new F(4,.35,8),cenicero:new F(12,.25,5),pulsera:new F(-3,.35,12),mapa:new F(-14,.25,-4),abanico:new F(0,.55,-14),melena:new F(-7,1.4,-11),foto:new F(10,.8,-8)},rp=(o,e,t=512)=>{const a=document.createElement("canvas");a.width=t,a.height=t;const r=a.getContext("2d");if(!r)return new Rn;r.fillStyle=o,r.fillRect(0,0,t,t);for(let u=0;u<11e3;u+=1){const f=Math.random()*.14;r.fillStyle=`${e}${Math.floor(f*255).toString(16).padStart(2,"0")}`;const d=Math.random()*2.2+.3;r.beginPath(),r.arc(Math.random()*t,Math.random()*t,d,0,Math.PI*2),r.fill()}const l=new Uy(a);return l.wrapS=l.wrapT=Cs,l.repeat.set(8,8),l.colorSpace=wn,l.anisotropy=8,l},pC=o=>{const e=document.createElement("canvas");e.width=640,e.height=132;const t=e.getContext("2d");if(!t)return new Jv;t.fillStyle="rgba(5, 34, 38, 0.9)",t.beginPath(),t.roundRect(12,12,616,108,34),t.fill(),t.strokeStyle="rgba(239, 116, 53, 0.9)",t.lineWidth=5,t.stroke(),t.fillStyle="#f5ead2",t.font="700 35px Trebuchet MS",t.textAlign="center",t.textBaseline="middle",t.fillText(o,320,66);const a=new Uy(e);a.colorSpace=wn;const r=new Jv(new wy({map:a,transparent:!0,depthWrite:!1}));return r.scale.set(4.6,.95,1),r},mC=(o,e,t,a,r)=>{const l=new nn,u=new tt({color:7293232,roughness:1});for(let d=0;d<5;d+=1){const h=new Le(new gn(.18*a,.25*a,1.15*a,8),u);h.position.y=.55*a+d*.96*a,h.rotation.z=Math.sin(d*.7+r)*.055,h.castShadow=!0,l.add(h)}const f=new tt({color:2645567,roughness:.82,side:Oi});for(let d=0;d<9;d+=1){const h=new Le(new Ls(.38*a,3.2*a,6),f);h.position.y=5.15*a,h.rotation.z=Math.PI/2.2,h.rotation.y=d/9*Math.PI*2,h.position.x=Math.cos(h.rotation.y)*.9*a,h.position.z=Math.sin(h.rotation.y)*.9*a,h.castShadow=!0,l.add(h)}l.position.set(e,0,t),l.rotation.y=r,o.add(l)},Fu=(o,e,t,a,r)=>{const l=new nn,u=new Le(new Ls(2.15,2.4,4),new tt({color:r,roughness:.9,side:Oi}));u.position.y=1.2,u.rotation.y=Math.PI/4,u.castShadow=!0;const f=new Le(new Ao(.85,1.4),new tt({color:1777701,roughness:1}));f.position.set(0,.75,1.53),l.add(u,f),l.position.set(e,0,t),l.rotation.y=a,o.add(l)},gC=o=>{const e=new nn,t=new tt({color:1383456,metalness:.65,roughness:.35}),a=new Le(new Ft(12,1.1,5.5),t);a.position.y=.55,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const r=new tt({color:9016986,metalness:.9,roughness:.22});[[0,5.5,-2.4,12.5,.16,.16],[-6,3,-2.4,.16,5.2,.16],[6,3,-2.4,.16,5.2,.16]].forEach(([u,f,d,h,_,g])=>{const v=new Le(new Ft(h,_,g),r);v.position.set(u,f,d),v.castShadow=!0,e.add(v)});for(let u=0;u<6;u+=1){const f=new Le(new gn(.19,.28,.38,12),t);f.rotation.x=Math.PI/2,f.position.set(-4.5+u*1.8,5.15,-2.25),e.add(f);const d=new Vy([15692853,16111470,3912870][u%3],38,21,.28,.55,1.2);d.position.copy(f.position),d.target.position.set(-4.5+u*1.8,0,4),e.add(d,d.target)}for(const u of[-4.9,4.9]){const f=new Le(new Ft(1.3,3.1,1.1),new tt({color:592652,roughness:.5}));f.position.set(u,2,.2),f.castShadow=!0,e.add(f)}e.position.set(0,0,-18),o.add(e)},_C=o=>{const e=new tt({color:7695198,roughness:.96}),t=new nn;for(const r of[-1.4,1.4]){const l=new Le(new Ft(16,3.8,1.2),e);l.position.set(0,1.9,r),l.castShadow=!0,l.receiveShadow=!0,t.add(l)}for(const r of[-7.5,7.5]){const l=new Le(new gn(2.1,2.35,6.2,18),e);l.position.set(r,3.1,0),l.castShadow=!0,l.receiveShadow=!0,t.add(l)}const a=new Le(new Ft(3.4,3.2,3.2),new tt({color:2697248,roughness:.9}));a.position.set(0,1.6,0),t.add(a),t.position.set(7,.2,-8.5),t.rotation.y=-.38,o.add(t)},vC=o=>{const e=new tt({color:7951671,roughness:.9}),t=new nn;for(let u=0;u<8;u+=1){const f=new Le(new Ft(1.35,.18,4.2),e);f.position.set(u*1.28,0,0),f.castShadow=!0,f.receiveShadow=!0,t.add(f)}for(const u of[-.3,3.7,7.7]){const f=new Le(new gn(.16,.2,2.2,10),e);f.position.set(u,-.7,1.7),t.add(f)}t.position.set(-23,.3,-3),t.rotation.y=.12,o.add(t);const a=new nn,r=new Le(new Rs(1.15,4.5,8,18),new tt({color:15789798,metalness:.1,roughness:.5}));r.scale.set(1,.45,1),r.rotation.z=Math.PI/2,r.castShadow=!0,a.add(r);const l=new Le(new Ft(2.1,.9,1.4),new tt({color:2248031,roughness:.4}));l.position.y=.5,a.add(l),a.position.set(-17.5,.3,-6.1),a.rotation.y=.1,o.add(a)},xC=o=>{const e=new nn,t=new Le(new Ft(7,1.2,1.25),new tt({color:7161129,roughness:.78}));t.position.y=.6,t.castShadow=!0,e.add(t);const a=new Le(new Ft(8.2,.22,3.4),new tt({color:15918540,roughness:.85}));a.position.y=3.3,a.castShadow=!0,e.add(a);for(const r of[-3.6,3.6])for(const l of[-1.1,1.1]){const u=new Le(new gn(.08,.08,3.2,10),new tt({color:4473924,metalness:.8,roughness:.3}));u.position.set(r,1.6,l),e.add(u)}e.position.set(4,.2,8),e.rotation.y=-.24,o.add(e);for(let r=0;r<8;r+=1){const l=new Le(new Pi(1.15,20,14),new tt({color:[15692853,2250596,15124328][r%3],roughness:.95}));l.scale.y=.48,l.position.set(-11+r%4*2.5,.55,5+Math.floor(r/4)*2.5),l.rotation.y=r*.7,l.castShadow=!0,o.add(l)}},Il=(o,e,t,a,r=13077347,l,u=!1)=>{const f=new nn,d=new tt({color:r,roughness:.72}),h=new tt({color:a,roughness:.55,metalness:.05}),_=new tt({color:2364946,roughness:.85}),g=new Le(new Rs(.22,.72,6,12),h);g.position.y=1.02;const v=new Le(new Pi(.18,16,12),d);v.position.y=1.63;const y=new Le(new Pi(.19,16,10,0,Math.PI*2,0,Math.PI*.62),_);y.position.y=1.74,f.add(g,v,y);for(const E of[-1,1]){const T=new Le(new Rs(.045,.55,5,8),d);T.position.set(E*.31,1.08,0),T.rotation.z=E*(u?-1.05:-.22);const S=new Le(new Rs(.06,.55,5,8),_);S.position.set(E*.11,.42,0),S.rotation.z=E*(u?.18:.04),f.add(T,S)}if(l){const E=makeLabel(l);E.position.y=2.12,E.scale.set(3.4,.7,1),f.add(E)}return f.position.set(e,.05,t),f.rotation.y=Math.random()*Math.PI*2,o.add(f),f},yC=o=>{const e=new tt({color:8014631,roughness:.82});new tt({color:15851965,roughness:.75});const t=new tt({color:15692853,roughness:.52}),a=new tt({color:743780,roughness:.55}),r=new tt({color:16743096,roughness:.5}),l=new tt({color:14014940,metalness:.75,roughness:.22}),u=new tt({color:4891580,transparent:!0,opacity:.74,roughness:.2,metalness:.05});Il(o,2.5,9.2,16777215,13208420,"Camarero",!1),Il(o,5.3,9.1,16777215,12154968,"Camarera",!1),[[-3.8,-12.8,16739179],[-2.2,-11.8,48121],[-.5,-12.5,16765286],[1.5,-11.7,10182117],[3.3,-12.9,3116931],[4.7,-11.5,15817653]].forEach(([z,$,ye])=>Il(o,z,$,ye,13208420,void 0,!0));const f=Il(o,6.7,-10.6,16765404,13208420,"Loca festivalera",!0),d=new tt({color:16731501,roughness:.45,metalness:.15});for(const z of[-1,1]){const $=new Le(new Pi(.07,8,6),d);$.position.set(z*.11,1.28,.2),f.add($)}const h=new nn,_=new Le(new Ft(2,2.8,1.8),new tt({color:15331569,roughness:.45}));_.position.y=1.4;const g=new Le(new Ft(1.55,2.25,.08),new tt({color:2383216,roughness:.5}));g.position.set(0,1.25,.93);const v=makeLabel("Water Moraleja · busca la llave");v.position.y=3.15,v.scale.set(4.8,.9,1),h.add(_,g,v),h.position.set(15.8,.05,2.4),h.rotation.y=-.4,o.add(h);const y=new nn,E=new Le(new Ft(1.25,.06,.9),r);E.position.y=.52,E.rotation.z=-.14,y.add(E);const T=new Le(new Pi(.08,12,8),new tt({color:16176895,emissive:9060348,emissiveIntensity:.6}));T.position.set(.35,.62,.08),y.add(T),y.position.set(-6.5,.2,7.2),o.add(y);const S=new nn,x=new Le(new Ft(.9,.22,.25),new tt({color:46296,roughness:.4}));x.position.y=.65;const D=new Le(new Ft(.18,.42,.18),t);D.position.set(-.22,.42,0),D.rotation.z=-.25;const N=new Le(new gn(.06,.06,.65,14),l);N.rotation.z=Math.PI/2,N.position.set(.65,.68,0),S.add(x,D,N),S.position.set(-17.3,.15,6.4),o.add(S);const R=new nn,O=new Le(new Ls(1.9,.45,4),new tt({color:15692853,roughness:.9}));O.position.y=.25,O.rotation.set(Math.PI/2,.1,Math.PI/4),R.add(O);const I=makeLabel("Tienda sin palos");I.position.y=1.15,I.scale.set(3.2,.65,1),R.add(I),R.position.set(-16.5,.05,11.5),o.add(R);const U=new Le(new Ft(2.8,.22,1.55),new tt({color:9425896,roughness:.65}));U.position.set(-12.5,.2,-10.5),U.rotation.z=-.12,U.scale.y=.38,o.add(U);const G=new nn,b=new Le(new Rs(.75,2.8,8,18),new tt({color:9394736,roughness:.72}));b.rotation.z=Math.PI/2,b.scale.y=.36,b.position.y=.42;const A=new Le(new gn(.025,.025,3.2,10),e);A.rotation.z=Math.PI/2.9,A.position.y=.7,G.add(b,A),G.position.set(-18.5,.05,-6.8),G.rotation.y=.35,o.add(G);for(const[z,$,ye]of[[-2.7,"DJ Bueno",3116931],[2.7,"DJ Malo",15692853]]){Il(o,z,-16.1,ye,13208420,$,!0);const ve=new Le(new Ft(1.8,.7,.9),new tt({color:1053978,roughness:.45,metalness:.2}));ve.position.set(z,.65,-14.8),o.add(ve);for(const Ne of[-1,1]){const te=new Le(new gn(.22,.22,.04,24),l);te.rotation.x=Math.PI/2,te.position.set(z+Ne*.38,1.05,-14.35),o.add(te)}}const V=new nn,W=new Le(new Ft(3.2,.08,.78),new tt({color:16116434,roughness:.82}));W.position.y=.82,W.rotation.z=-.06;const ae=new Le(new gn(.025,.025,3.7,10),l);ae.rotation.z=Math.PI/2,ae.position.y=.95,V.add(W,ae),V.position.set(-17,.1,12.5),o.add(V);const ue=new nn,re=new Le(new gn(1.05,1.2,.34,32),l);re.position.y=.25;const B=new Le(new gn(.75,.85,.12,32),u);B.position.y=.48;const K=new Le(new gn(.035,.055,1.35,12),u);K.position.y=1.12;const Y=new tf(7854591,6,6,1.4);Y.position.y=1.4,ue.add(re,B,K,Y),ue.position.set(15.8,.05,-2.5),o.add(ue);const de=new Le(new gn(.055,.055,3.5,18),l);de.position.set(5.8,1.75,-13.5),de.castShadow=!0,o.add(de);const Te=new Le(new gn(.7,.7,.12,30),a);Te.position.set(5.8,.08,-13.5),o.add(Te)},SC=o=>{const e=hi.find(g=>g.id===o),t=new nn,a=dC[o]??new F(0,.3,0),r=new tt({color:14723149,metalness:.72,roughness:.25}),l=new tt({color:1521213,metalness:.25,roughness:.55}),u=new tt({color:15655625,roughness:.75}),f=new tt({color:15692853,roughness:.55});let d;if(o==="cinta"){const g=new Le(new gn(.48,.48,.28,28),f);g.rotation.x=Math.PI/2,g.position.y=.66,t.add(g);const v=new Le(new Ft(1.25,.08,.16),u);v.position.set(.72,.66,0),v.rotation.z=-.1,t.add(v)}else if(o==="cenicero"){const g=new Le(new gn(.72,.58,.2,28),r);g.position.y=.45,t.add(g);const v=new Le(new Pn(.38,.08,12,32),l);v.rotation.x=Math.PI/2,v.position.y=.57,t.add(v)}else if(o==="melena")for(let g=0;g<9;g+=1){const v=new Le(new Pn(.32+g*.025,.045,8,34,Math.PI*1.25),new tt({color:g%2?2692880:3875095,roughness:.82}));v.position.set((g-4)*.07,.72+Math.sin(g)*.05,0),v.rotation.set(Math.PI/2.7,.1*g,-.7+g*.15),t.add(v)}else if(o==="mapa"||o==="foto"){const g=new Le(new Ft(1.45,.06,1),u);g.position.y=.75,g.rotation.x=-.18,g.rotation.z=o==="foto"?.2:-.1,t.add(g)}else if(o==="pulsera"||o==="abanico"){const g=new Le(new Pn(.48,.12,14,34),o==="pulsera"?f:u);if(g.position.y=.75,g.rotation.x=Math.PI/2.7,t.add(g),o==="abanico")for(let v=0;v<7;v+=1){const y=new Le(new Ft(.09,.95,.05),f);y.position.y=.6,y.rotation.z=-.58+v*.19,t.add(y)}}else{const g=new Le(new Ft(1.65,.85,1.15),o==="golosinas"?f:l);g.position.y=.52,g.castShadow=!0,t.add(g);const v=new Le(new Ft(1.72,.22,1.2),r);v.position.set(0,1.03,-.48),v.geometry.translate(0,0,.48),d=v,t.add(v)}const h=new Le(new Pn(1.2,.045,10,42),new Ga({color:16765306,transparent:!0,opacity:.8}));h.rotation.x=Math.PI/2,h.position.y=.12,t.add(h);const _=pC((e==null?void 0:e.label)??o);return _.position.y=2.05,t.add(_),t.position.copy(a),t.userData={id:o,label:(e==null?void 0:e.label)??o,opened:!1,glow:h,lid:d,baseY:a.y},t},MC=o=>{const e=new ha().setFromObject(o),t=e.getSize(new F),r=2.15/Math.max(t.y,.001);o.scale.setScalar(r),e.setFromObject(o);const l=e.getCenter(new F),u=e.min.y;o.position.set(-l.x,-u,-l.z),o.traverse(f=>{if(f instanceof Le){f.castShadow=!0,f.receiveShadow=!0;const d=f.material;Array.isArray(d)?d.forEach(h=>{h.envMapIntensity=1.15}):d.envMapIntensity=1.15}})},EC=(o,e)=>{const t=new nn;t.name=`profile-${e.id}`;const a=new tt({color:e.color,roughness:.56,metalness:.08}),r=new tt({color:e.accent,roughness:.5,metalness:.16}),l=new tt({color:2823954,roughness:.9}),u=new tt({color:14199114,roughness:.34,metalness:.65}),f=(d,h,_,g,v)=>{const y=new Le(d,h);return y.position.set(_,g,v),y.castShadow=!0,t.add(y),y};if(e.id==="lala"){const d=new nn;for(let _=0;_<7;_+=1){const g=-.82+_*.27,v=new Le(new gn(.012,.016,.72,8),a);v.position.set(Math.sin(g)*.24,1.78+Math.cos(g)*.14,-.13),v.rotation.z=-g;const y=new Le(new Pi(.055,14,10),_%2?r:u);y.position.set(Math.sin(g)*.47,2.05+Math.cos(g)*.18,-.14),d.add(v,y)}t.add(d);const h=f(new Pn(.27,.035,12,40,Math.PI*1.35),r,0,.91,.02);h.rotation.x=Math.PI/2,h.rotation.z=-.42}if(e.id==="lety"){const d=f(new Ft(.22,.2,.09),a,.22,.92,.11);d.rotation.z=-.08;const h=f(new Pn(.52,.018,8,48,Math.PI*1.32),r,-.02,1.25,.05);h.rotation.z=.7;for(let _=0;_<5;_+=1)f(new Pi(.025,10,8),new tt({color:[16739179,16765286,7064439,5084927,13073919][_]}),.15+_*.035,.98,.17)}if(e.id==="isa"){const h=f(new Pn(.07,.012,8,22),l,-.075,1.86,.15).clone();h.position.x=.075,t.add(h),f(new Ft(.06,.012,.012),l,0,1.86,.15);for(const _ of[-1,1]){const g=f(new Pn(.055,.012,8,24),u,_*.36,.92,0);g.rotation.x=Math.PI/2}}if(e.id==="patri"){for(let h=0;h<7;h+=1){const _=h/7*Math.PI*2,g=f(new Pi(.035,10,8),new tt({color:[16731501,16762967,10182117,48121,15817653][h%5]}),Math.cos(_)*.15,2.02+Math.sin(_)*.04,.02+Math.sin(_)*.12);g.scale.y=.7}const d=new nn;for(let h=0;h<4;h+=1){const _=new Le(new Ft(.025,.62,.012),h%2?a:r);_.position.set(-.18+h*.12,1.16,-.12),_.rotation.z=-.16+h*.1,d.add(_)}t.add(d)}if(e.id==="luis"){const d=f(new Pn(.31,.018,8,56,Math.PI*1.55),new tt({color:16181153,roughness:.8}),.03,1.24,.09);d.rotation.z=.52;for(let _=0;_<9;_+=1)f(new Ft(.006,.03,.008),l,-.18+_*.045,1.03+_*.025,.12);const h=f(new gn(.08,.09,.025,24),r,.34,.86,.08);h.rotation.x=Math.PI/2}if(e.id==="fran"){const d=f(new Pn(.22,.035,10,40,Math.PI*1.35),a,0,1.52,.02);d.rotation.z=.38;const h=f(new Ls(.055,.22,16),new tt({color:15692853,emissive:5969664,emissiveIntensity:.5}),0,1.18,.14);h.rotation.z=.2;const _=f(new Ls(.035,.16,14),r,.035,1.17,.16);_.rotation.z=-.18}if(e.id==="clara"){const d=f(new Pn(.24,.025,10,52),u,0,1.02,.03);d.rotation.x=Math.PI/2;for(const h of[-1,1]){const _=f(new Pn(.06,.018,8,28),r,h*.37,.95,0);_.rotation.x=Math.PI/2}}if(e.id==="jesucristo"){f(new Pi(.19,18,14,0,Math.PI*2,0,Math.PI*.72),l,0,1.98,-.01).scale.set(1.05,1,1.02);for(let _=0;_<10;_+=1){const g=_/10*Math.PI*2,v=f(new Rs(.035,.42+_%3*.08,5,10),l,Math.cos(g)*.16,1.7,Math.sin(g)*.13-.02);v.rotation.z=Math.cos(g)*.18,v.rotation.x=Math.sin(g)*.15}const h=f(new Pn(.17,.012,8,44,Math.PI*1.5),u,0,1.46,.11);h.rotation.z=.35}if(e.id==="aitor"){const d=f(new Pn(.18,.014,8,48,Math.PI*1.52),u,0,1.45,.11);d.rotation.z=.35,f(new Pi(.035,12,10),u,0,1.24,.13);const h=f(new Pn(.25,.028,10,48,Math.PI*1.25),a,-.02,1.55,.02);h.rotation.z=-.42;for(const _ of[-1,1]){const g=f(new Pn(.055,.014,8,24),r,_*.36,.9,0);g.rotation.x=Math.PI/2}}o.add(t)};function TC({character:o,initialCollected:e,paused:t,settings:a,onCollected:r,onComplete:l,onReady:u,onMessage:f}){const d=tn.useRef(null),h=tn.useRef(t),_=tn.useRef({onCollected:r,onComplete:l,onReady:u,onMessage:f});return tn.useEffect(()=>{h.current=t},[t]),tn.useEffect(()=>{_.current={onCollected:r,onComplete:l,onReady:u,onMessage:f}},[r,l,u,f]),tn.useEffect(()=>{const g=d.current;if(!g)return;let v=!1,y=0;const E=new qE;E.fog=new _m(11130069,.015);const T=new Zn(54,g.clientWidth/g.clientHeight,.1,240),S=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.matchMedia("(pointer: coarse)").matches,x=new SR({antialias:a.quality==="high"&&!S,powerPreference:"high-performance"});x.setPixelRatio(Math.min(window.devicePixelRatio,S?1:a.quality==="high"?1.45:1.1)),x.setSize(g.clientWidth,g.clientHeight),x.shadowMap.enabled=!0,x.shadowMap.type=Jx,x.toneMapping=sm,x.toneMappingExposure=1.05,x.outputColorSpace=wn,g.appendChild(x.domElement);const D=new cC(x);D.addPass(new uC(E,T)),a.quality==="high"&&!S&&D.addPass(new bo(new Je(g.clientWidth,g.clientHeight),.42,.7,.86)),D.addPass(new hC);const N=new of;N.scale.setScalar(45e4),E.add(N);const R=N.material.uniforms;R.turbidity.value=7.5,R.rayleigh.value=1.65,R.mieCoefficient.value=.004,R.mieDirectionalG.value=.86;const O=new F;O.setFromSphericalCoords(1,co.degToRad(90-17),co.degToRad(132)),R.sunPosition.value.copy(O);const G=new Hy().load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg",Se=>{Se.wrapS=Se.wrapT=Cs}),b=new Ao(260,260),A=new iC(b,{textureWidth:a.quality==="high"?1024:512,textureHeight:a.quality==="high"?1024:512,waterNormals:G,sunDirection:O,sunColor:16770239,waterColor:1527652,distortionScale:3.3,fog:!0});A.rotation.x=-Math.PI/2,A.position.y=-1.35,E.add(A),E.add(new xT(16115143,2313797,2.15));const V=new Gy(16768941,4.2);V.position.set(-24,42,18),V.castShadow=!0,V.shadow.mapSize.set(a.quality==="high"?2048:1024,a.quality==="high"?2048:1024),V.shadow.camera.left=-45,V.shadow.camera.right=45,V.shadow.camera.top=45,V.shadow.camera.bottom=-45,E.add(V);const W=new tf(15692853,18,38,1.8);W.position.set(0,8,-16),E.add(W);const ae=rp("#706c5b","#c4b99a"),ue=rp("#4d7549","#9db46d"),re=rp("#c9ae78","#f0ddb2"),B=new Le(new gn(27,31,3.7,64),new tt({map:ae,color:9076842,roughness:1}));B.position.y=-2.1,B.receiveShadow=!0,E.add(B);const K=new Le(new $u(28,80),new tt({map:re,color:14138758,roughness:.97}));K.rotation.x=-Math.PI/2,K.position.y=-.22,K.receiveShadow=!0,E.add(K);const Y=new Le(new $u(23.5,80),new tt({map:ue,color:6586702,roughness:.93}));Y.rotation.x=-Math.PI/2,Y.position.y=-.02,Y.receiveShadow=!0,E.add(Y);const de=Se=>{const Ge=Math.sin(Se*931.17)*43758.5453;return Ge-Math.floor(Ge)};for(let Se=0;Se<34;Se+=1){const Ge=de(Se+1)*Math.PI*2,yt=19+de(Se+20)*8,It=new Le(new ef(.55+de(Se+40)*1.35,1),new tt({color:new rt().setHSL(.11,.07,.34+de(Se+60)*.12),roughness:1}));It.position.set(Math.cos(Ge)*yt,-.05,Math.sin(Ge)*yt),It.scale.y=.6+de(Se+80)*.9,It.rotation.set(de(Se+90),de(Se+100)*Math.PI,de(Se+110)),It.castShadow=!0,It.receiveShadow=!0,E.add(It)}[[-19,12,1.2,.4],[-15,-12,.92,1.4],[18,12,1.08,2.1],[20,-3,1.25,.9],[-6,17,.82,1.8],[10,17,.95,2.7],[-21,1,.88,.2],[14,-16,1.12,2.3]].forEach(([Se,Ge,yt,It])=>mC(E,Se,Ge,yt,It)),Fu(E,-8,14,.2,15692853),Fu(E,-13,12,-.25,14207143),Fu(E,11,13,.4,3432296),Fu(E,16,9,-.5,14207143),gC(E),_C(E),vC(E),xC(E),yC(E);const Te=new nn;for(let Se=0;Se<12;Se+=1){const Ge=new Le(new ef(.28),new tt({color:6643285,roughness:1})),yt=Se/12*Math.PI*2;Ge.position.set(Math.cos(yt)*1.2,.2,Math.sin(yt)*1.2),Te.add(Ge)}const z=new Le(new Ls(.46,1.35,18),new tt({color:16756782,emissive:16735520,emissiveIntensity:3,transparent:!0,opacity:.9}));z.position.y=.72,Te.add(z);const $=new tf(16742956,24,13,1.7);$.position.y=1.5,Te.add($),Te.position.set(-2,0,5),E.add(Te);const ye=hi.map(Se=>{const Ge=SC(Se.id);return e.includes(Se.id)&&(Ge.visible=!1,Ge.userData.opened=!0),E.add(Ge),Ge}),ve=new nn;ve.position.set(0,.05,12),E.add(ve);let Ne=null,te=null,fe=null,Ue=null,Fe=null,je=null;const mt=new MR;let an=!1;const X=window.setTimeout(()=>{!an&&!v&&(an=!0,_.current.onReady(),_.current.onMessage("Mundo cargado. El personaje terminará de aparecer en segundo plano."))},3500),Rt=(Se,Ge=.18)=>{!Se||Se===fe||(Se.reset().fadeIn(Ge).play(),fe==null||fe.fadeOut(Ge),fe=Se)},ct=Se=>{MC(Se.scene),Se.scene.scale.multiplyScalar(o.scale||1),EC(Se.scene,o),Ne=Se.scene,ve.add(Ne),te=new zT(Ne);const Ge=di=>Se.animations.find($i=>di.some(Fi=>$i.name.toLowerCase().includes(Fi))),yt=Ge(["idle"])??Se.animations[0],It=Ge(["walk"])??Se.animations[1]??yt,si=Ge(["run"])??Se.animations[2]??It;Ue=yt?te.clipAction(yt):null,Fe=It?te.clipAction(It):Ue,je=si?te.clipAction(si):Fe,Rt(Ue,0),window.clearTimeout(X),an||(an=!0,_.current.onReady())},ke=new Set(["lala","lety","isa","patri","clara"]).has(o.id)?"https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Michelle.glb":"https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Soldier.glb";mt.loadAsync(o.modelUrl).then(ct).catch(()=>{mt.loadAsync(ke).then(ct).catch(()=>{_.current.onMessage("No se pudo cargar el personaje 3D. Revisa la conexión."),window.clearTimeout(X),an||(an=!0,_.current.onReady())})});const at=new Set,on=new Je;let Ht=.72,P=.38,w=!1,ee=new Je,pe=0,Ee=!0,he=!1,Ye=!1,Re=!1,Ke=0,Qe=0,Ae=null,Ce=performance.now(),et=new Set(e);const ze=new BT,Oe=Se=>{at.add(Se.key.toLowerCase()),Se.code==="Space"&&(Ye=!0),Se.key.toLowerCase()==="e"&&(he=!0),Se.key.toLowerCase()==="q"&&(Re=!0)},ht=Se=>at.delete(Se.key.toLowerCase()),q=Se=>{const Ge=Se.detail;on.set(Ge.x,Ge.z)},we=Se=>{const Ge=Se.detail;Ge==="jump"&&(Ye=!0),Ge==="interact"&&(he=!0),Ge==="special"&&(Re=!0)},De=Se=>{Se.target.closest(".game-control")||(w=!0,ee.set(Se.clientX,Se.clientY))},He=Se=>{if(!w)return;const Ge=Se.clientX-ee.x,yt=Se.clientY-ee.y;ee.set(Se.clientX,Se.clientY),Ht-=Ge*.004,P=co.clamp(P-yt*.003,.18,.78)},be=()=>{w=!1};window.addEventListener("keydown",Oe),window.addEventListener("keyup",ht),window.addEventListener("isla:move",q),window.addEventListener("isla:action",we),x.domElement.addEventListener("pointerdown",De),window.addEventListener("pointermove",He),window.addEventListener("pointerup",be);const _e=()=>{if(!d.current)return;const Se=d.current.clientWidth,Ge=d.current.clientHeight;T.aspect=Se/Ge,T.updateProjectionMatrix(),x.setSize(Se,Ge),D.setSize(Se,Ge)};window.addEventListener("resize",_e);const Ve=Se=>{if(!Se.userData.opened){if(Se.userData.opened=!0,Se.userData.lid){const Ge=Se.userData.lid.rotation.x,yt=-Math.PI*.72;let It=0;const si=()=>{It+=.055,Se.userData.lid.rotation.x=co.lerp(Ge,yt,Math.min(It,1)),It<1&&!v&&requestAnimationFrame(si)};si()}Se.userData.glow.visible=!1,et.add(Se.userData.id),_.current.onCollected(Se.userData.id),_.current.onMessage(`Encontrado: ${Se.userData.label}`),setTimeout(()=>{Se.visible=!1},680),et.size>=hi.length&&setTimeout(()=>_.current.onComplete(),1100)}},ft=Se=>{if(Se<Qe){_.current.onMessage("Movimiento especial recargando");return}if(Qe=Se+6500,Ke=Se+2800,(o.id==="lety"||o.id==="jesucristo")&&(ye.filter(Ge=>!Ge.userData.opened).forEach(Ge=>Ge.userData.glow.scale.setScalar(2.2)),_.current.onMessage(o.id==="lety"?"Mi chillout, mis normas: secretos revelados":"Aura del buen rollo: recuerdos revelados")),o.id==="luis"){const Ge=ye.filter(yt=>!yt.userData.opened).sort((yt,It)=>yt.position.distanceTo(ve.position)-It.position.distanceTo(ve.position))[0];Ge&&Ve(Ge),_.current.onMessage("Vacile malagueño activado")}(o.id==="patri"||o.id==="fran")&&(pe=o.id==="patri"?10.8:8.8,Ee=!1,_.current.onMessage(o.id==="patri"?"Piripi power":"Fran hace resurgir al grupo")),o.id==="isa"&&_.current.onMessage("Isa no pierde el tiempo"),o.id==="lala"&&_.current.onMessage("Baile del pavo real"),o.id==="clara"&&_.current.onMessage("Clara se hace con el festival"),o.id==="aitor"&&_.current.onMessage("Aitor activa el modo desatado")},Vt=new ky,Mt=Se=>{if(v)return;y=requestAnimationFrame(Mt);const Ge=Math.min((Se-Ce)/1e3,.035);if(Ce=Se,!h.current){const yt=Se<Ke,It=(at.has("d")||at.has("arrowright")?1:0)-(at.has("a")||at.has("arrowleft")?1:0),si=(at.has("s")||at.has("arrowdown")?1:0)-(at.has("w")||at.has("arrowup")?1:0),di=new Je(It+on.x,si+on.y);di.length()>1&&di.normalize();const $i=new F(-Math.sin(Ht),0,-Math.cos(Ht)),Fi=new F(Math.cos(Ht),0,-Math.sin(Ht)),Hi=$i.multiplyScalar(-di.y).add(Fi.multiplyScalar(di.x)),jn=yt?o.id==="isa"?2.25:o.id==="lala"?1.55:o.id==="fran"?1.75:o.id==="aitor"?1.7:1:1,dn=Hi.lengthSq()>.04;if(dn){Hi.normalize(),ve.position.addScaledVector(Hi,5.4*jn*Ge);const vn=Math.atan2(Hi.x,Hi.z);ve.rotation.y=co.lerp(ve.rotation.y,vn,.18),Rt(jn>1.4?je:Fe)}else Rt(Ue);const _n=Math.hypot(ve.position.x,ve.position.z);_n>24.6&&(ve.position.x*=24.6/_n,ve.position.z*=24.6/_n),Ye&&Ee&&(pe=8.4,Ee=!1),Ye=!1,pe-=22*Ge,ve.position.y+=pe*Ge,ve.position.y<=.05&&(ve.position.y=.05,pe=0,Ee=!0),Re&&ft(Se),Re=!1,yt&&(o.id==="lala"||o.id==="clara")&&(ve.rotation.y+=Ge*9.5),yt&&(o.id==="patri"||o.id==="aitor")&&(ve.rotation.y+=Ge*7.5),Ae=ye.filter(vn=>!vn.userData.opened&&vn.visible).sort((vn,L)=>vn.position.distanceTo(ve.position)-L.position.distanceTo(ve.position))[0]??null;const ea=yt&&(o.id==="lala"||o.id==="jesucristo")?5.3:2.45;he&&Ae&&Ae.position.distanceTo(ve.position)<=ea&&Ve(Ae),he=!1,ye.forEach((vn,L)=>{vn.userData.opened||!vn.visible||(vn.userData.glow.rotation.z+=Ge*(.65+L*.03),vn.position.y=vn.userData.baseY+Math.sin(Se*.0024+L)*.08,yt&&(o.id==="lety"||o.id==="jesucristo")||vn.userData.glow.scale.lerp(new F(1,1,1),.06))}),Ne&&(Ne.position.y=Math.sin(Se*.006)*(dn?.018:.008),yt&&(o.id==="lala"||o.id==="clara")?Ne.rotation.z=Math.sin(Se*.018)*.13:Ne.rotation.z*=.86),te==null||te.update(Ge),z.scale.y=.82+Math.sin(Se*.016)*.17+Math.sin(Se*.029)*.08,$.intensity=21+Math.sin(Se*.015)*4,A.material.uniforms.time.value+=Ge*.65;const qa=8.7,lr=Math.cos(P)*qa,Ns=new F(ve.position.x+Math.sin(Ht)*lr,ve.position.y+2.2+Math.sin(P)*qa,ve.position.z+Math.cos(Ht)*lr);a.cameraShake&&yt&&(o.id==="patri"||o.id==="aitor")&&(Ns.x+=Math.sin(Se*.04)*.1,Ns.y+=Math.cos(Se*.05)*.08),T.position.lerp(Ns,.085);const cr=ve.position.clone().add(new F(0,1.25,0));T.lookAt(cr),ze.setFromCamera(new Je(0,0),T)}D.render(Vt.getDelta())};return y=requestAnimationFrame(Mt),()=>{v=!0,window.clearTimeout(X),cancelAnimationFrame(y),window.removeEventListener("keydown",Oe),window.removeEventListener("keyup",ht),window.removeEventListener("isla:move",q),window.removeEventListener("isla:action",we),x.domElement.removeEventListener("pointerdown",De),window.removeEventListener("pointermove",He),window.removeEventListener("pointerup",be),window.removeEventListener("resize",_e),E.traverse(Se=>{var Ge;if(Se instanceof Le){(Ge=Se.geometry)==null||Ge.dispose();const yt=Se.material;Array.isArray(yt)?yt.forEach(It=>It.dispose()):yt==null||yt.dispose()}}),x.dispose(),D.dispose(),G.dispose(),ae.dispose(),ue.dispose(),re.dispose(),g.replaceChildren()}},[o,a.quality,a.cameraShake]),H.jsx("div",{ref:d,className:"absolute inset-0","aria-label":"Mundo 3D de La Isla"})}const Qy="la-isla-3d-save-v4",bC=()=>{try{const o=localStorage.getItem(Qy);if(!o)throw new Error("empty");const e=JSON.parse(o);return{characterId:e.characterId??"lala",collected:Array.isArray(e.collected)?e.collected:[],started:!!e.started,settings:{...bv,...e.settings??{}}}}catch{return{characterId:"lala",collected:[],started:!1,settings:bv}}},op=o=>{window.dispatchEvent(new CustomEvent("isla:action",{detail:o}))};function AC(){const[o,e]=tn.useState(bC),[t,a]=tn.useState("home"),[r,l]=tn.useState(null),[u,f]=tn.useState(!1),[d,h]=tn.useState(""),[_,g]=tn.useState(0),v=tn.useRef(null),[y,E]=tn.useState(!1),T=tn.useMemo(()=>ou.find(b=>b.id===o.characterId)??ou[0],[o.characterId]);tn.useEffect(()=>{localStorage.setItem(Qy,JSON.stringify(o))},[o]),tn.useEffect(()=>{const b=new Audio("./audio/la-isla-fondo.mp3");b.loop=!0,b.preload="auto",b.volume=.36,v.current=b;const A=()=>E(!1);return b.addEventListener("ended",A),()=>{b.pause(),b.removeEventListener("ended",A),v.current=null}},[]),tn.useEffect(()=>{if(!d)return;const b=window.setTimeout(()=>h(""),2300);return()=>window.clearTimeout(b)},[d,_]);const S=tn.useCallback(b=>{h(b),g(A=>A+1)},[]),x=tn.useCallback(b=>{e(A=>A.collected.includes(b)?A:{...A,collected:[...A.collected,b],started:!0})},[]),D=()=>{!o.settings.sound||!v.current||v.current.play().then(()=>E(!0)).catch(()=>E(!1))},N=()=>{var b;(b=v.current)==null||b.pause(),E(!1)},R=b=>{G({sound:b}),b&&v.current&&v.current.play().then(()=>E(!0)).catch(()=>E(!1)),b||N()},O=b=>{D(),e(A=>({...A,characterId:b,started:!0})),f(!0),l(null),a("game")},I=()=>{D(),e(b=>({...b,collected:[],started:!1})),l(null),a("select")},U=()=>{D(),f(!0),l(null),a("game")},G=b=>{e(A=>({...A,settings:{...A.settings,...b}}))};return t==="home"?H.jsxs("main",{className:"home-screen",children:[H.jsx("div",{className:"home-noise"}),H.jsx("div",{className:"home-orbit home-orbit-one"}),H.jsx("div",{className:"home-orbit home-orbit-two"}),H.jsxs("header",{className:"home-header",children:[H.jsx("span",{children:"LA ISLA 26"}),H.jsxs("button",{className:"home-music-button",onClick:()=>y?N():D(),children:[y?H.jsx(xd,{size:17}):H.jsx(yd,{size:17}),y?"Música activada":"Activar música"]}),H.jsx("span",{children:"ISLA DEL BURGUILLO · ÁVILA"})]}),H.jsxs("section",{className:"home-hero",children:[H.jsxs("div",{className:"home-copy",children:[H.jsx("p",{className:"eyebrow",children:"Aventura gráfica cinematográfica"}),H.jsxs("h1",{children:["LA ISLA",H.jsx("br",{}),H.jsx("em",{children:"RECUERDA"})]}),H.jsx("p",{className:"home-lead",children:"Vuelve al festival. Elige a tu personaje, explora la muralla, la playa, el embarque y el escenario, y recupera todos los recuerdos antes del último barco."}),H.jsxs("div",{className:"home-actions",children:[H.jsxs("button",{className:"primary-button",onClick:I,children:[H.jsx(Sv,{size:20,fill:"currentColor"})," Nueva partida"]}),o.started&&H.jsxs("button",{className:"secondary-button",onClick:U,children:[H.jsx(vv,{size:20})," Continuar · ",o.collected.length,"/",hi.length]})]})]}),H.jsxs("div",{className:"island-emblem","aria-hidden":"true",children:[H.jsx("div",{className:"emblem-sun"}),H.jsxs("div",{className:"emblem-island",children:[H.jsx("span",{}),H.jsx("span",{}),H.jsx("span",{})]}),H.jsx("div",{className:"emblem-water"})]})]}),H.jsxs("footer",{className:"home-footer",children:[H.jsx("span",{children:"9 personajes"}),H.jsx("span",{children:"8 recuerdos"}),H.jsx("span",{children:"Mapa 3D explorable"}),H.jsx("span",{children:"Guardado automático"})]})]}):t==="select"?H.jsxs("main",{className:"select-screen",children:[H.jsxs("header",{className:"select-header",children:[H.jsxs("button",{className:"back-button",onClick:()=>a("home"),children:[H.jsx(g1,{size:19})," Volver"]}),H.jsxs("div",{children:[H.jsx("p",{className:"eyebrow",children:"Antes de desembarcar"}),H.jsx("h1",{children:"Elige tu personaje"})]}),H.jsxs("span",{className:"select-counter",children:["01 / ",String(ou.length).padStart(2,"0")]})]}),H.jsx("section",{className:"character-grid",children:ou.map((b,A)=>H.jsxs("article",{className:"character-card",style:{"--character":b.color,"--accent":b.accent},children:[H.jsxs("div",{className:"character-visual",children:[H.jsxs("span",{className:"character-number",children:["0",A+1]}),H.jsx("div",{className:"character-aura"}),H.jsx("div",{className:"character-monogram",children:b.name.slice(0,1)}),H.jsx("div",{className:"model-chip",children:"Modelo humano 3D animado"})]}),H.jsxs("div",{className:"character-copy",children:[H.jsx("p",{className:"character-role",children:b.role}),H.jsx("h2",{children:b.name}),H.jsxs("div",{className:"special-line",children:[H.jsx(vd,{size:16})," ",b.special]}),H.jsx("p",{children:b.description}),H.jsxs("button",{onClick:()=>O(b.id),children:["Jugar con ",b.name,H.jsx(_1,{size:18})]})]})]},b.id))})]}):t==="ending"?H.jsxs("main",{className:"ending-screen",children:[H.jsx("div",{className:"ending-light"}),H.jsxs("div",{className:"ending-content",children:[H.jsx("p",{className:"eyebrow",children:"Misión completada"}),H.jsxs("h1",{children:["La isla",H.jsx("br",{}),"recuerda"]}),H.jsxs("p",{children:["Has recuperado los ",hi.length," recuerdos y desbloqueado el último amanecer del festival."]}),H.jsxs("div",{className:"ending-stats",children:[H.jsxs("div",{children:[H.jsx("strong",{children:hi.length}),H.jsx("span",{children:"Recuerdos"})]}),H.jsxs("div",{children:[H.jsx("strong",{children:T.name}),H.jsx("span",{children:"Personaje"})]}),H.jsxs("div",{children:[H.jsx("strong",{children:"100%"}),H.jsx("span",{children:"Isla explorada"})]})]}),H.jsxs("button",{className:"primary-button",onClick:I,children:[H.jsx(Mv,{size:20})," Volver a jugar"]}),H.jsx("button",{className:"ending-home",onClick:()=>a("home"),children:"Volver al inicio"})]})]}):H.jsxs("main",{className:"game-screen",children:[H.jsx(TC,{character:T,initialCollected:o.collected,paused:r!==null||u,settings:o.settings,onCollected:x,onComplete:()=>{l(null),a("ending")},onReady:()=>f(!1),onMessage:S}),H.jsxs("header",{className:"game-hud game-control",children:[H.jsxs("div",{className:"hud-character",children:[H.jsx("div",{className:"hud-avatar",style:{background:T.color},children:T.name.slice(0,1)}),H.jsxs("div",{children:[H.jsx("span",{children:T.role}),H.jsx("strong",{children:T.name})]})]}),H.jsxs("div",{className:"hud-mission",children:[H.jsx("span",{children:"Misión principal"}),H.jsx("strong",{children:"Recupera los recuerdos"}),H.jsx("div",{className:"progress-track",children:H.jsx("div",{style:{width:`${o.collected.length/hi.length*100}%`}})}),H.jsxs("small",{children:[o.collected.length," de ",hi.length]})]}),H.jsx("button",{className:"hud-pause",onClick:()=>l("pause"),"aria-label":"Pausar",children:H.jsx(x1,{size:22})})]}),H.jsxs("nav",{className:"quick-menu game-control","aria-label":"Menú del juego",children:[H.jsxs("button",{onClick:()=>l("map"),children:[H.jsx(yv,{size:19}),H.jsx("span",{children:"Mapa"})]}),H.jsxs("button",{onClick:()=>l("inventory"),children:[H.jsx(_v,{size:19}),H.jsx("span",{children:"Inventario"})]}),H.jsxs("button",{onClick:()=>l("missions"),children:[H.jsx(xv,{size:19}),H.jsx("span",{children:"Misiones"})]}),H.jsxs("button",{onClick:()=>l("settings"),children:[H.jsx(Ev,{size:19}),H.jsx("span",{children:"Ajustes"})]}),H.jsxs("button",{onClick:()=>y?N():D(),children:[y?H.jsx(xd,{size:19}):H.jsx(yd,{size:19}),H.jsx("span",{children:"Música"})]})]}),H.jsxs("div",{className:"game-controls",children:[H.jsx(S1,{disabled:r!==null||u}),H.jsxs("div",{className:"action-cluster game-control",children:[H.jsxs("button",{className:"round-action jump-action",onPointerDown:()=>op("jump"),children:[H.jsx(vv,{size:21}),H.jsx("span",{children:"Saltar"})]}),H.jsxs("button",{className:"round-action interact-action",onPointerDown:()=>op("interact"),children:[H.jsx(v1,{size:22}),H.jsx("span",{children:"Abrir"})]}),H.jsxs("button",{className:"special-action",onPointerDown:()=>op("special"),style:{"--special":T.color},children:[H.jsx(Tv,{size:22,fill:"currentColor"}),H.jsx("span",{children:T.special})]})]})]}),H.jsx("div",{className:`game-toast ${d?"visible":""}`,children:d},_),H.jsx("div",{className:"desktop-hint",children:"WASD · ratón para cámara · espacio · E · Q"}),u&&H.jsxs("div",{className:"loading-layer",children:[H.jsxs("div",{className:"loading-spinner",children:[H.jsx("span",{}),H.jsx("span",{}),H.jsx("span",{})]}),H.jsx("p",{children:"Cargando personaje y mundo 3D"}),H.jsx("small",{children:"Preparando playa, muralla, escenario y animaciones"})]}),r==="pause"&&H.jsxs(Ml,{title:"Partida pausada",eyebrow:"La Isla 26",onClose:()=>l(null),children:[H.jsxs("div",{className:"pause-character",children:[H.jsx("div",{style:{background:T.color},children:T.name.slice(0,1)}),H.jsxs("span",{children:[H.jsx("small",{children:"Jugando con"}),H.jsx("strong",{children:T.name})]})]}),H.jsxs("button",{className:"menu-button primary",onClick:()=>l(null),children:[H.jsx(Sv,{size:19})," Continuar"]}),H.jsxs("div",{className:"menu-grid",children:[H.jsxs("button",{className:"menu-button",onClick:()=>l("map"),children:[H.jsx(yv,{size:19})," Mapa"]}),H.jsxs("button",{className:"menu-button",onClick:()=>l("inventory"),children:[H.jsx(_v,{size:19})," Inventario"]}),H.jsxs("button",{className:"menu-button",onClick:()=>l("missions"),children:[H.jsx(xv,{size:19})," Misiones"]}),H.jsxs("button",{className:"menu-button",onClick:()=>l("settings"),children:[H.jsx(Ev,{size:19})," Ajustes"]})]}),H.jsxs("button",{className:"menu-button",onClick:()=>a("select"),children:[H.jsx(Mv,{size:19})," Cambiar personaje"]}),H.jsx("button",{className:"danger-button",onClick:I,children:"Reiniciar progreso"})]}),r==="map"&&H.jsxs(Ml,{title:"Mapa de la isla",eyebrow:"Exploración",onClose:()=>l(null),wide:!0,children:[H.jsxs("div",{className:"island-map",children:[H.jsx("div",{className:"map-water-lines"}),H.jsxs("div",{className:"map-island-shape",children:[hi.map((b,A)=>H.jsxs("div",{className:`map-marker marker-${A+1} ${o.collected.includes(b.id)?"done":""}`,title:b.zone,children:[o.collected.includes(b.id)?H.jsx(Sl,{size:13}):A+1,H.jsx("span",{children:b.zone})]},b.id)),H.jsx("div",{className:"map-zone map-stage",children:"ESCENARIO"}),H.jsx("div",{className:"map-zone map-wall",children:"MURALLA"}),H.jsx("div",{className:"map-zone map-dock",children:"EMBARQUE"}),H.jsx("div",{className:"map-zone map-beach",children:"PLAYA"})]})]}),H.jsx("p",{className:"modal-note",children:"Los marcadores naranjas todavía esconden un recuerdo. Los verdes ya están completados."})]}),r==="inventory"&&H.jsx(Ml,{title:"Inventario",eyebrow:`${o.collected.length} de ${hi.length} objetos`,onClose:()=>l(null),wide:!0,children:H.jsx("div",{className:"inventory-grid",children:hi.map(b=>{const A=o.collected.includes(b.id);return H.jsxs("article",{className:`inventory-item ${A?"found":"locked"}`,children:[H.jsx("div",{className:"inventory-icon",children:A?H.jsx(Sl,{size:24}):"?"}),H.jsxs("div",{children:[H.jsx("span",{children:b.zone}),H.jsx("h3",{children:A?b.label:"Recuerdo desconocido"}),H.jsx("p",{children:A?b.description:"Explora esta zona para descubrirlo."})]})]},b.id)})})}),r==="missions"&&H.jsxs(Ml,{title:"Misiones",eyebrow:"Diario del isleño",onClose:()=>l(null),wide:!0,children:[H.jsxs("section",{className:"mission-main",children:[H.jsxs("div",{children:[H.jsx("span",{children:"Misión principal"}),H.jsx("h3",{children:"La isla recuerda"}),H.jsx("p",{children:"Recupera los ocho objetos que resumen el fin de semana antes del último barco."})]}),H.jsxs("strong",{children:[o.collected.length,"/",hi.length]})]}),H.jsxs("div",{className:"mission-list",children:[H.jsxs("article",{className:o.collected.length>=3?"done":"",children:[H.jsx(Sl,{size:18}),H.jsxs("div",{children:[H.jsx("h4",{children:"Primeras pistas"}),H.jsx("p",{children:"Encuentra tres recuerdos."})]}),H.jsxs("span",{children:[Math.min(o.collected.length,3),"/3"]})]}),H.jsxs("article",{className:o.collected.includes("mapa")?"done":"",children:[H.jsx(Sl,{size:18}),H.jsxs("div",{children:[H.jsx("h4",{children:"El camino de vuelta"}),H.jsx("p",{children:"Recupera el mapa del embarque."})]}),H.jsx("span",{children:o.collected.includes("mapa")?"1/1":"0/1"})]}),H.jsxs("article",{className:o.collected.includes("golosinas")?"done":"",children:[H.jsx(Sl,{size:18}),H.jsxs("div",{children:[H.jsx("h4",{children:"Mi chillout, mis normas"}),H.jsx("p",{children:"Encuentra la caja de golosinas."})]}),H.jsx("span",{children:o.collected.includes("golosinas")?"1/1":"0/1"})]}),H.jsxs("article",{className:o.collected.length===hi.length?"done":"",children:[H.jsx(vd,{size:18}),H.jsxs("div",{children:[H.jsx("h4",{children:"Hasta el amanecer"}),H.jsx("p",{children:"Completa toda la colección."})]}),H.jsxs("span",{children:[o.collected.length,"/",hi.length]})]})]})]}),r==="settings"&&H.jsx(Ml,{title:"Ajustes",eyebrow:"Experiencia",onClose:()=>l(null),children:H.jsxs("div",{className:"settings-list",children:[H.jsxs("label",{children:[H.jsxs("span",{children:[o.settings.sound?H.jsx(xd,{size:20}):H.jsx(yd,{size:20}),H.jsx("b",{children:"Sonido"}),H.jsx("small",{children:"Efectos de interacción y ambiente."})]}),H.jsx("input",{type:"checkbox",checked:o.settings.sound,onChange:b=>R(b.target.checked)})]}),H.jsxs("label",{children:[H.jsxs("span",{children:[H.jsx(vd,{size:20}),H.jsx("b",{children:"Movimiento de cámara"}),H.jsx("small",{children:"Vibración sutil en habilidades especiales."})]}),H.jsx("input",{type:"checkbox",checked:o.settings.cameraShake,onChange:b=>G({cameraShake:b.target.checked})})]}),H.jsxs("div",{className:"quality-row",children:[H.jsxs("span",{children:[H.jsx(Tv,{size:20}),H.jsx("b",{children:"Calidad gráfica"}),H.jsx("small",{children:"El cambio recarga la escena 3D."})]}),H.jsxs("div",{children:[H.jsx("button",{className:o.settings.quality==="medium"?"active":"",onClick:()=>G({quality:"medium"}),children:"Media"}),H.jsx("button",{className:o.settings.quality==="high"?"active":"",onClick:()=>G({quality:"high"}),children:"Alta"})]})]})]})})]})}h1.createRoot(document.getElementById("root")).render(H.jsx(tn.StrictMode,{children:H.jsx(AC,{})}));
