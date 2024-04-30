function Zy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},Qo={},ip={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),$d=Symbol.iterator;function d0(e){return e===null||typeof e!="object"?null:(e=$d&&e[$d]||e["@@iterator"],typeof e=="function"?e:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function $r(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lp(){}lp.prototype=$r.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}var Xu=qu.prototype=new lp;Xu.constructor=qu;op(Xu,$r.prototype);Xu.isPureReactComponent=!0;var Ud=Array.isArray,up=Object.prototype.hasOwnProperty,Yu={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)up.call(t,r)&&!cp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:es,type:e,key:s,ref:o,props:i,_owner:Yu.current}}function h0(e,t){return{$$typeof:es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===es}function f0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fd=/\/+/g;function Ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f0(""+e.key):t.toString(36)}function Ks(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case es:case t0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ba(o,0):r,Ud(i)?(n="",e!=null&&(n=e.replace(Fd,"$&/")+"/"),Ks(i,t,n,"",function(u){return u})):i!=null&&(Ju(i)&&(i=h0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ud(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ba(s,a);o+=Ks(s,t,n,l,i)}else if(l=d0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ba(s,a++),o+=Ks(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return Ks(e,r,"","",function(s){return t.call(n,s,i++)}),r}function p0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Gs={transition:null},g0={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Gs,ReactCurrentOwner:Yu};$.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!Ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=$r;$.Fragment=n0;$.Profiler=i0;$.PureComponent=qu;$.StrictMode=r0;$.Suspense=l0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Yu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)up.call(t,l)&&!cp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:es,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:o0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s0,_context:e},e.Consumer=e};$.createElement=dp;$.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:a0,render:e}};$.isValidElement=Ju;$.lazy=function(e){return{$$typeof:c0,_payload:{_status:-1,_result:e},_init:p0}};$.memo=function(e,t){return{$$typeof:u0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Gs.transition;Gs.transition={};try{e()}finally{Gs.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Re.current.useCallback(e,t)};$.useContext=function(e){return Re.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};$.useEffect=function(e,t){return Re.current.useEffect(e,t)};$.useId=function(){return Re.current.useId()};$.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Re.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};$.useRef=function(e){return Re.current.useRef(e)};$.useState=function(e){return Re.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Re.current.useTransition()};$.version="18.2.0";ip.exports=$;var E=ip.exports;const hp=e0(E),m0=Zy({__proto__:null,default:hp},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=E,y0=Symbol.for("react.element"),w0=Symbol.for("react.fragment"),_0=Object.prototype.hasOwnProperty,E0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S0={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_0.call(t,r)&&!S0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y0,type:e,key:s,ref:o,props:i,_owner:E0.current}}Qo.Fragment=w0;Qo.jsx=fp;Qo.jsxs=fp;rp.exports=Qo;var N=rp.exports,Nl={},pp={exports:{}},He={},gp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var M=P.length;P.push(D);e:for(;0<M;){var Z=M-1>>>1,se=P[Z];if(0<i(se,D))P[Z]=D,P[M]=se,M=Z;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],M=P.pop();if(M!==D){P[0]=M;e:for(var Z=0,se=P.length,Es=se>>>1;Z<Es;){var Sn=2*(Z+1)-1,za=P[Sn],In=Sn+1,Ss=P[In];if(0>i(za,M))In<se&&0>i(Ss,za)?(P[Z]=Ss,P[In]=M,Z=In):(P[Z]=za,P[Sn]=M,Z=Sn);else if(In<se&&0>i(Ss,M))P[Z]=Ss,P[In]=M,Z=In;else break e}}return D}function i(P,D){var M=P.sortIndex-D.sortIndex;return M!==0?M:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,g=3,m=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function v(P){if(w=!1,p(P),!y)if(n(l)!==null)y=!0,Fa(I);else{var D=n(u);D!==null&&ja(v,D.startTime-P)}}function I(P,D){y=!1,w&&(w=!1,f(A),A=-1),m=!0;var M=g;try{for(p(D),h=n(l);h!==null&&(!(h.expirationTime>D)||P&&!$e());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,g=h.priorityLevel;var se=Z(h.expirationTime<=D);D=e.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&r(l),p(D)}else r(l);h=n(l)}if(h!==null)var Es=!0;else{var Sn=n(u);Sn!==null&&ja(v,Sn.startTime-D),Es=!1}return Es}finally{h=null,g=M,m=!1}}var C=!1,R=null,A=-1,V=5,x=-1;function $e(){return!(e.unstable_now()-x<V)}function Wr(){if(R!==null){var P=e.unstable_now();x=P;var D=!0;try{D=R(!0,P)}finally{D?Kr():(C=!1,R=null)}}else C=!1}var Kr;if(typeof d=="function")Kr=function(){d(Wr)};else if(typeof MessageChannel<"u"){var Md=new MessageChannel,Qy=Md.port2;Md.port1.onmessage=Wr,Kr=function(){Qy.postMessage(null)}}else Kr=function(){S(Wr,0)};function Fa(P){R=P,C||(C=!0,Kr())}function ja(P,D){A=S(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Fa(I))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var M=g;g=D;try{return P()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=g;g=P;try{return D()}finally{g=M}},e.unstable_scheduleCallback=function(P,D,M){var Z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=M+se,P={id:c++,callback:D,priorityLevel:P,startTime:M,expirationTime:se,sortIndex:-1},M>Z?(P.sortIndex=M,t(u,P),n(l)===null&&P===n(u)&&(w?(f(A),A=-1):w=!0,ja(v,M-Z))):(P.sortIndex=se,t(l,P),y||m||(y=!0,Fa(I))),P},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(P){var D=g;return function(){var M=g;g=D;try{return P.apply(this,arguments)}finally{g=M}}}})(mp);gp.exports=mp;var I0=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=E,Ve=I0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,Ii={};function Gn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(Ii[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,T0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},zd={};function k0(e){return Ol.call(zd,e)?!0:Ol.call(jd,e)?!1:T0.test(e)?zd[e]=!0:(jd[e]=!0,!1)}function C0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P0(e,t,n,r){if(t===null||typeof t>"u"||C0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qu=/[\-:]([a-z])/g;function Zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qu,Zu);pe[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qu,Zu);pe[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qu,Zu);pe[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function ec(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P0(t,n,i,r)&&(n=null),r||i===null?k0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ts=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Ep=Symbol.for("react.offscreen"),Bd=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Bd&&e[Bd]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Va;function ri(e){if(Va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Va=t&&t[1]||""}return`
`+Va+e}var Ha=!1;function ba(e,t){if(!e||Ha)return"";Ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ha=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function R0(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=ba(e.type,!1),e;case 11:return e=ba(e.type.render,!1),e;case 1:return e=ba(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Ll:return"Profiler";case tc:return"StrictMode";case xl:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _p:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rc:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function A0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N0(e){var t=Sp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ks(e){e._valueTracker||(e._valueTracker=N0(e))}function Ip(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tp(e,t){t=t.checked,t!=null&&ec(e,"checked",t,!1)}function Ul(e,t){Tp(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ii(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function kp(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cs,Pp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cs=Cs||document.createElement("div"),Cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){O0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function Rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function Ap(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var L0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(L0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,mr=null,vr=null;function Kd(e){if(e=rs(e)){if(typeof bl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ra(t),bl(e.stateNode,e.type,t))}}function Np(e){mr?vr?vr.push(e):vr=[e]:mr=e}function Op(){if(mr){var e=mr,t=vr;if(vr=mr=null,Kd(e),t)for(e=0;e<t.length;e++)Kd(t[e])}}function Lp(e,t){return e(t)}function xp(){}var Wa=!1;function Dp(e,t,n){if(Wa)return e(t,n);Wa=!0;try{return Lp(e,t,n)}finally{Wa=!1,(mr!==null||vr!==null)&&(xp(),Op())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=ra(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wl=!1;if(Dt)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Wl=!1}function x0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hi=!1,co=null,ho=!1,Kl=null,D0={onError:function(e){hi=!0,co=e}};function M0(e,t,n,r,i,s,o,a,l){hi=!1,co=null,x0.apply(D0,arguments)}function $0(e,t,n,r,i,s,o,a,l){if(M0.apply(this,arguments),hi){if(hi){var u=co;hi=!1,co=null}else throw Error(_(198));ho||(ho=!0,Kl=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gd(e){if(qn(e)!==e)throw Error(_(188))}function U0(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gd(i),e;if(s===r)return Gd(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function $p(e){return e=U0(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var Fp=Ve.unstable_scheduleCallback,qd=Ve.unstable_cancelCallback,F0=Ve.unstable_shouldYield,j0=Ve.unstable_requestPaint,ee=Ve.unstable_now,z0=Ve.unstable_getCurrentPriorityLevel,sc=Ve.unstable_ImmediatePriority,jp=Ve.unstable_UserBlockingPriority,fo=Ve.unstable_NormalPriority,B0=Ve.unstable_LowPriority,zp=Ve.unstable_IdlePriority,Zo=null,yt=null;function V0(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:W0,H0=Math.log,b0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(H0(e)/b0|0)|0}var Ps=64,Rs=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=si(a):(s&=o,s!==0&&(r=si(s)))}else o=n&~i,o!==0?r=si(o):s!==0&&(r=si(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function K0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=K0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bp(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function Ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Vp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hp,ac,bp,Wp,Kp,ql=!1,As=[],tn=null,nn=null,rn=null,Ci=new Map,Pi=new Map,Kt=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Xr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=rs(t),t!==null&&ac(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y0(e,t,n,r,i){switch(t){case"focusin":return tn=Xr(tn,e,t,n,r,i),!0;case"dragenter":return nn=Xr(nn,e,t,n,r,i),!0;case"mouseover":return rn=Xr(rn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Xr(Ci.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pi.set(s,Xr(Pi.get(s)||null,e,t,n,r,i)),!0}return!1}function Gp(e){var t=Rn(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Mp(n),t!==null){e.blockedOn=t,Kp(e.priority,function(){bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hl=r,n.target.dispatchEvent(r),Hl=null}else return t=rs(n),t!==null&&ac(t),e.blockedOn=n,!1;t.shift()}return!0}function Yd(e,t,n){qs(e)&&n.delete(t)}function J0(){ql=!1,tn!==null&&qs(tn)&&(tn=null),nn!==null&&qs(nn)&&(nn=null),rn!==null&&qs(rn)&&(rn=null),Ci.forEach(Yd),Pi.forEach(Yd)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,J0)))}function Ri(e){function t(i){return Yr(i,e)}if(0<As.length){Yr(As[0],e);for(var n=1;n<As.length;n++){var r=As[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Yr(tn,e),nn!==null&&Yr(nn,e),rn!==null&&Yr(rn,e),Ci.forEach(t),Pi.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Gp(n),n.blockedOn===null&&Kt.shift()}var yr=zt.ReactCurrentBatchConfig,go=!0;function Q0(e,t,n,r){var i=z,s=yr.transition;yr.transition=null;try{z=1,lc(e,t,n,r)}finally{z=i,yr.transition=s}}function Z0(e,t,n,r){var i=z,s=yr.transition;yr.transition=null;try{z=4,lc(e,t,n,r)}finally{z=i,yr.transition=s}}function lc(e,t,n,r){if(go){var i=Xl(e,t,n,r);if(i===null)nl(e,t,r,mo,n),Xd(e,r);else if(Y0(i,e,t,n,r))r.stopPropagation();else if(Xd(e,r),t&4&&-1<X0.indexOf(e)){for(;i!==null;){var s=rs(i);if(s!==null&&Hp(s),s=Xl(e,t,n,r),s===null&&nl(e,t,r,mo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var mo=null;function Xl(e,t,n,r){if(mo=null,e=ic(r),e=Rn(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case sc:return 1;case jp:return 4;case fo:case B0:return 16;case zp:return 536870912;default:return 16}default:return 16}}var Qt=null,uc=null,Xs=null;function Xp(){if(Xs)return Xs;var e,t=uc,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Xs=i.slice(e,1<r?1-r:void 0)}function Ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function Jd(){return!1}function be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ns:Jd,this.isPropagationStopped=Jd,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=be(Ur),ns=Y({},Ur,{view:0,detail:0}),e1=be(ns),Ga,qa,Jr,ea=Y({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ga=e.screenX-Jr.screenX,qa=e.screenY-Jr.screenY):qa=Ga=0,Jr=e),Ga)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),Qd=be(ea),t1=Y({},ea,{dataTransfer:0}),n1=be(t1),r1=Y({},ns,{relatedTarget:0}),Xa=be(r1),i1=Y({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),s1=be(i1),o1=Y({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a1=be(o1),l1=Y({},Ur,{data:0}),Zd=be(l1),u1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function dc(){return h1}var f1=Y({},ns,{key:function(e){if(e.key){var t=u1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p1=be(f1),g1=Y({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=be(g1),m1=Y({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),v1=be(m1),y1=Y({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),w1=be(y1),_1=Y({},ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=be(_1),S1=[9,13,27,32],hc=Dt&&"CompositionEvent"in window,fi=null;Dt&&"documentMode"in document&&(fi=document.documentMode);var I1=Dt&&"TextEvent"in window&&!fi,Yp=Dt&&(!hc||fi&&8<fi&&11>=fi),th=" ",nh=!1;function Jp(e,t){switch(e){case"keyup":return S1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function T1(e,t){switch(e){case"compositionend":return Qp(t);case"keypress":return t.which!==32?null:(nh=!0,th);case"textInput":return e=t.data,e===th&&nh?null:e;default:return null}}function k1(e,t){if(rr)return e==="compositionend"||!hc&&Jp(e,t)?(e=Xp(),Xs=uc=Qt=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yp&&t.locale!=="ko"?null:t.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C1[e.type]:t==="textarea"}function Zp(e,t,n,r){Np(r),t=vo(t,"onChange"),0<t.length&&(n=new cc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,Ai=null;function P1(e){cg(e,0)}function ta(e){var t=or(e);if(Ip(t))return e}function R1(e,t){if(e==="change")return t}var eg=!1;if(Dt){var Ya;if(Dt){var Ja="oninput"in document;if(!Ja){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Ja=typeof ih.oninput=="function"}Ya=Ja}else Ya=!1;eg=Ya&&(!document.documentMode||9<document.documentMode)}function sh(){pi&&(pi.detachEvent("onpropertychange",tg),Ai=pi=null)}function tg(e){if(e.propertyName==="value"&&ta(Ai)){var t=[];Zp(t,Ai,e,ic(e)),Dp(P1,t)}}function A1(e,t,n){e==="focusin"?(sh(),pi=t,Ai=n,pi.attachEvent("onpropertychange",tg)):e==="focusout"&&sh()}function N1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ta(Ai)}function O1(e,t){if(e==="click")return ta(t)}function L1(e,t){if(e==="input"||e==="change")return ta(t)}function x1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:x1;function Ni(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ol.call(t,i)||!at(e[i],t[i]))return!1}return!0}function oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ah(e,t){var n=oh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oh(n)}}function ng(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ng(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rg(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D1(e){var t=rg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(r!==null&&fc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ah(n,s);var o=ah(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M1=Dt&&"documentMode"in document&&11>=document.documentMode,ir=null,Yl=null,gi=null,Jl=!1;function lh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||ir==null||ir!==uo(r)||(r=ir,"selectionStart"in r&&fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Ni(gi,r)||(gi=r,r=vo(Yl,"onSelect"),0<r.length&&(t=new cc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function Os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},Qa={},ig={};Dt&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function na(e){if(Qa[e])return Qa[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ig)return Qa[e]=t[n];return e}var sg=na("animationend"),og=na("animationiteration"),ag=na("animationstart"),lg=na("transitionend"),ug=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){ug.set(e,t),Gn(t,[e])}for(var Za=0;Za<uh.length;Za++){var el=uh[Za],$1=el.toLowerCase(),U1=el[0].toUpperCase()+el.slice(1);gn($1,"on"+U1)}gn(sg,"onAnimationEnd");gn(og,"onAnimationIteration");gn(ag,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(lg,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F1=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function ch(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$0(r,t,void 0,e),e.currentTarget=null}function cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ch(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ch(i,a,u),s=l}}}if(ho)throw e=Kl,ho=!1,Kl=null,e}function b(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var r=e+"__bubble";n.has(r)||(dg(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),dg(n,e,r,t)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[Ls]){e[Ls]=!0,yp.forEach(function(n){n!=="selectionchange"&&(F1.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ls]||(t[Ls]=!0,tl("selectionchange",!1,t))}}function dg(e,t,n,r){switch(qp(t)){case 1:var i=Q0;break;case 4:i=Z0;break;default:i=lc}n=i.bind(null,t,n,e),i=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Dp(function(){var u=s,c=ic(n),h=[];e:{var g=ug.get(e);if(g!==void 0){var m=cc,y=e;switch(e){case"keypress":if(Ys(n)===0)break e;case"keydown":case"keyup":m=p1;break;case"focusin":y="focus",m=Xa;break;case"focusout":y="blur",m=Xa;break;case"beforeblur":case"afterblur":m=Xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=n1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=v1;break;case sg:case og:case ag:m=s1;break;case lg:m=w1;break;case"scroll":m=e1;break;case"wheel":m=E1;break;case"copy":case"cut":case"paste":m=a1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=eh}var w=(t&4)!==0,S=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=ki(d,f),v!=null&&w.push(Li(d,v,p)))),S)break;d=d.return}0<w.length&&(g=new m(g,y,null,n,c),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Hl&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Mt]))break e;if((m||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Rn(y):null,y!==null&&(S=qn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Qd,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=eh,v="onPointerLeave",f="onPointerEnter",d="pointer"),S=m==null?g:or(m),p=y==null?g:or(y),g=new w(v,d+"leave",m,n,c),g.target=S,g.relatedTarget=p,v=null,Rn(c)===u&&(w=new w(f,d+"enter",y,n,c),w.target=p,w.relatedTarget=S,v=w),S=v,m&&y)t:{for(w=m,f=y,d=0,p=w;p;p=Zn(p))d++;for(p=0,v=f;v;v=Zn(v))p++;for(;0<d-p;)w=Zn(w),d--;for(;0<p-d;)f=Zn(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Zn(w),f=Zn(f)}w=null}else w=null;m!==null&&dh(h,g,m,w,!1),y!==null&&S!==null&&dh(h,S,y,w,!0)}}e:{if(g=u?or(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var I=R1;else if(rh(g))if(eg)I=L1;else{I=N1;var C=A1}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=O1);if(I&&(I=I(e,u))){Zp(h,I,n,c);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Fl(g,"number",g.value)}switch(C=u?or(u):window,e){case"focusin":(rh(C)||C.contentEditable==="true")&&(ir=C,Yl=u,gi=null);break;case"focusout":gi=Yl=ir=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,lh(h,n,c);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":lh(h,n,c)}var R;if(hc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else rr?Jp(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Yp&&n.locale!=="ko"&&(rr||A!=="onCompositionStart"?A==="onCompositionEnd"&&rr&&(R=Xp()):(Qt=c,uc="value"in Qt?Qt.value:Qt.textContent,rr=!0)),C=vo(u,A),0<C.length&&(A=new Zd(A,e,null,n,c),h.push({event:A,listeners:C}),R?A.data=R:(R=Qp(n),R!==null&&(A.data=R)))),(R=I1?T1(e,n):k1(e,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(c=new Zd("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}cg(h,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ki(e,n),s!=null&&r.unshift(Li(e,s,i)),s=ki(e,t),s!=null&&r.push(Li(e,s,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ki(n,s),l!=null&&o.unshift(Li(n,l,a))):i||(l=ki(n,s),l!=null&&o.push(Li(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var j1=/\r\n?/g,z1=/\u0000|\uFFFD/g;function hh(e){return(typeof e=="string"?e:""+e).replace(j1,`
`).replace(z1,"")}function xs(e,t,n){if(t=hh(t),hh(e)!==t&&n)throw Error(_(425))}function yo(){}var Ql=null,Zl=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(e){return fh.resolve(null).then(e).catch(H1)}:tu;function H1(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ph(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Fr,xi="__reactProps$"+Fr,Mt="__reactContainer$"+Fr,nu="__reactEvents$"+Fr,b1="__reactListeners$"+Fr,W1="__reactHandles$"+Fr;function Rn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ph(e);e!==null;){if(n=e[ft])return n;e=ph(e)}return t}e=n,n=e.parentNode}return null}function rs(e){return e=e[ft]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ra(e){return e[xi]||null}var ru=[],ar=-1;function mn(e){return{current:e}}function K(e){0>ar||(e.current=ru[ar],ru[ar]=null,ar--)}function H(e,t){ar++,ru[ar]=e.current,e.current=t}var pn={},Ie=mn(pn),Le=mn(!1),Un=pn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function wo(){K(Le),K(Ie)}function gh(e,t,n){if(Ie.current!==pn)throw Error(_(168));H(Ie,t),H(Le,n)}function hg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,A0(e)||"Unknown",i));return Y({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Un=Ie.current,H(Ie,e),H(Le,Le.current),!0}function mh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=hg(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,K(Le),K(Ie),H(Ie,e)):K(Le),H(Le,n)}var kt=null,ia=!1,il=!1;function fg(e){kt===null?kt=[e]:kt.push(e)}function K1(e){ia=!0,fg(e)}function vn(){if(!il&&kt!==null){il=!0;var e=0,t=z;try{var n=kt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,ia=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),Fp(sc,vn),i}finally{z=t,il=!1}}return null}var lr=[],ur=0,Eo=null,So=0,We=[],Ke=0,Fn=null,Ct=1,Pt="";function kn(e,t){lr[ur++]=So,lr[ur++]=Eo,Eo=e,So=t}function pg(e,t,n){We[Ke++]=Ct,We[Ke++]=Pt,We[Ke++]=Fn,Fn=e;var r=Ct;e=Pt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-st(t)+i|n<<i|r,Pt=s+e}else Ct=1<<s|n<<i|r,Pt=e}function pc(e){e.return!==null&&(kn(e,1),pg(e,1,0))}function gc(e){for(;e===Eo;)Eo=lr[--ur],lr[ur]=null,So=lr[--ur],lr[ur]=null;for(;e===Fn;)Fn=We[--Ke],We[Ke]=null,Pt=We[--Ke],We[Ke]=null,Ct=We[--Ke],We[Ke]=null}var ze=null,Fe=null,G=!1,it=null;function gg(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Fe=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Ct,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Fe=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function su(e){if(G){var t=Fe;if(t){var n=t;if(!vh(e,t)){if(iu(e))throw Error(_(418));t=sn(n.nextSibling);var r=ze;t&&vh(e,t)?gg(r,n):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(iu(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function yh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ds(e){if(e!==ze)return!1;if(!G)return yh(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=Fe)){if(iu(e))throw mg(),Error(_(418));for(;t;)gg(e,t),t=sn(t.nextSibling)}if(yh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=ze?sn(e.stateNode.nextSibling):null;return!0}function mg(){for(var e=Fe;e;)e=sn(e.nextSibling)}function Rr(){Fe=ze=null,G=!1}function mc(e){it===null?it=[e]:it.push(e)}var G1=zt.ReactCurrentBatchConfig;function nt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Io=mn(null),To=null,cr=null,vc=null;function yc(){vc=cr=To=null}function wc(e){var t=Io.current;K(Io),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){To=e,vc=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(vc!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(To===null)throw Error(_(308));cr=e,To.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var An=null;function _c(e){An===null?An=[e]:An.push(e)}function vg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_c(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,_c(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function Js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}function wh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var i=e.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var g=a.lane,m=a.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(m,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(m,h,g):y,g==null)break e;h=Y({},h,g);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);zn|=o,e.lanes=o,e.memoizedState=h}}function _h(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var wg=new vp.Component().refs;function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sa={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=ln(e),s=Lt(r,i);s.payload=t,n!=null&&(s.callback=n),t=on(e,s,i),t!==null&&(ot(t,e,i,r),Js(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=ln(e),s=Lt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=on(e,s,i),t!==null&&(ot(t,e,i,r),Js(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=ln(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=on(e,i,r),t!==null&&(ot(t,e,r,n),Js(t,e,r))}};function Eh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,s):!0}function _g(e,t,n){var r=!1,i=pn,s=t.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=xe(t)?Un:Ie.current,r=t.contextTypes,s=(r=r!=null)?Pr(e,i):pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function lu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wg,Ec(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=xe(t)?Un:Ie.current,i.context=Pr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(au(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&sa.enqueueReplaceState(i,i.state,null),ko(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===wg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ms(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ih(e){var t=e._init;return t(e._payload)}function Eg(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=un(f,d),f.index=0,f.sibling=null,f}function s(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=dl(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function l(f,d,p,v){var I=p.type;return I===nr?c(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===bt&&Ih(I)===d.type)?(v=i(d,p.props),v.ref=Qr(f,d,p),v.return=f,v):(v=ro(p.type,p.key,p.props,null,f.mode,v),v.ref=Qr(f,d,p),v.return=f,v)}function u(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=hl(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function c(f,d,p,v,I){return d===null||d.tag!==7?(d=Mn(p,f.mode,v,I),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=dl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ts:return p=ro(d.type,d.key,d.props,null,f.mode,p),p.ref=Qr(f,null,d),p.return=f,p;case tr:return d=hl(d,f.mode,p),d.return=f,d;case bt:var v=d._init;return h(f,v(d._payload),p)}if(ii(d)||Gr(d))return d=Mn(d,f.mode,p,null),d.return=f,d;Ms(f,d)}return null}function g(f,d,p,v){var I=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ts:return p.key===I?l(f,d,p,v):null;case tr:return p.key===I?u(f,d,p,v):null;case bt:return I=p._init,g(f,d,I(p._payload),v)}if(ii(p)||Gr(p))return I!==null?null:c(f,d,p,v,null);Ms(f,p)}return null}function m(f,d,p,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ts:return f=f.get(v.key===null?p:v.key)||null,l(d,f,v,I);case tr:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,I);case bt:var C=v._init;return m(f,d,p,C(v._payload),I)}if(ii(v)||Gr(v))return f=f.get(p)||null,c(d,f,v,I,null);Ms(d,v)}return null}function y(f,d,p,v){for(var I=null,C=null,R=d,A=d=0,V=null;R!==null&&A<p.length;A++){R.index>A?(V=R,R=null):V=R.sibling;var x=g(f,R,p[A],v);if(x===null){R===null&&(R=V);break}e&&R&&x.alternate===null&&t(f,R),d=s(x,d,A),C===null?I=x:C.sibling=x,C=x,R=V}if(A===p.length)return n(f,R),G&&kn(f,A),I;if(R===null){for(;A<p.length;A++)R=h(f,p[A],v),R!==null&&(d=s(R,d,A),C===null?I=R:C.sibling=R,C=R);return G&&kn(f,A),I}for(R=r(f,R);A<p.length;A++)V=m(R,f,A,p[A],v),V!==null&&(e&&V.alternate!==null&&R.delete(V.key===null?A:V.key),d=s(V,d,A),C===null?I=V:C.sibling=V,C=V);return e&&R.forEach(function($e){return t(f,$e)}),G&&kn(f,A),I}function w(f,d,p,v){var I=Gr(p);if(typeof I!="function")throw Error(_(150));if(p=I.call(p),p==null)throw Error(_(151));for(var C=I=null,R=d,A=d=0,V=null,x=p.next();R!==null&&!x.done;A++,x=p.next()){R.index>A?(V=R,R=null):V=R.sibling;var $e=g(f,R,x.value,v);if($e===null){R===null&&(R=V);break}e&&R&&$e.alternate===null&&t(f,R),d=s($e,d,A),C===null?I=$e:C.sibling=$e,C=$e,R=V}if(x.done)return n(f,R),G&&kn(f,A),I;if(R===null){for(;!x.done;A++,x=p.next())x=h(f,x.value,v),x!==null&&(d=s(x,d,A),C===null?I=x:C.sibling=x,C=x);return G&&kn(f,A),I}for(R=r(f,R);!x.done;A++,x=p.next())x=m(R,f,A,x.value,v),x!==null&&(e&&x.alternate!==null&&R.delete(x.key===null?A:x.key),d=s(x,d,A),C===null?I=x:C.sibling=x,C=x);return e&&R.forEach(function(Wr){return t(f,Wr)}),G&&kn(f,A),I}function S(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===nr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ts:e:{for(var I=p.key,C=d;C!==null;){if(C.key===I){if(I=p.type,I===nr){if(C.tag===7){n(f,C.sibling),d=i(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===bt&&Ih(I)===C.type){n(f,C.sibling),d=i(C,p.props),d.ref=Qr(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===nr?(d=Mn(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=ro(p.type,p.key,p.props,null,f.mode,v),v.ref=Qr(f,d,p),v.return=f,f=v)}return o(f);case tr:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=hl(p,f.mode,v),d.return=f,f=d}return o(f);case bt:return C=p._init,S(f,d,C(p._payload),v)}if(ii(p))return y(f,d,p,v);if(Gr(p))return w(f,d,p,v);Ms(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=dl(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return S}var Ar=Eg(!0),Sg=Eg(!1),is={},wt=mn(is),Di=mn(is),Mi=mn(is);function Nn(e){if(e===is)throw Error(_(174));return e}function Sc(e,t){switch(H(Mi,t),H(Di,e),H(wt,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}K(wt),H(wt,t)}function Nr(){K(wt),K(Di),K(Mi)}function Ig(e){Nn(Mi.current);var t=Nn(wt.current),n=zl(t,e.type);t!==n&&(H(Di,e),H(wt,n))}function Ic(e){Di.current===e&&(K(wt),K(Di))}var q=mn(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function Tc(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Qs=zt.ReactCurrentDispatcher,ol=zt.ReactCurrentBatchConfig,jn=0,X=null,re=null,oe=null,Po=!1,mi=!1,$i=0,q1=0;function ge(){throw Error(_(321))}function kc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Cc(e,t,n,r,i,s){if(jn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qs.current=e===null||e.memoizedState===null?Q1:Z1,e=n(r,i),mi){s=0;do{if(mi=!1,$i=0,25<=s)throw Error(_(301));s+=1,oe=re=null,t.updateQueue=null,Qs.current=ew,e=n(r,i)}while(mi)}if(Qs.current=Ro,t=re!==null&&re.next!==null,jn=0,oe=re=X=null,Po=!1,t)throw Error(_(300));return e}function Pc(){var e=$i!==0;return $i=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Qe(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(_(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Ui(e,t){return typeof t=="function"?t(e):t}function al(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((jn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,X.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,at(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,zn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ll(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);at(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Tg(){}function kg(e,t){var n=X,r=Qe(),i=t(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,Rc(Rg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Fi(9,Pg.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(_(349));jn&30||Cg(n,t,i)}return i}function Cg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pg(e,t,n,r){t.value=n,t.getSnapshot=r,Ag(t)&&Ng(e)}function Rg(e,t,n){return n(function(){Ag(t)&&Ng(e)})}function Ag(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Ng(e){var t=$t(e,1);t!==null&&ot(t,e,1,-1)}function Th(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=J1.bind(null,X,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Og(){return Qe().memoizedState}function Zs(e,t,n,r){var i=ht();X.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function oa(e,t,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&kc(r,o.deps)){i.memoizedState=Fi(t,n,s,r);return}}X.flags|=e,i.memoizedState=Fi(1|t,n,s,r)}function kh(e,t){return Zs(8390656,8,e,t)}function Rc(e,t){return oa(2048,8,e,t)}function Lg(e,t){return oa(4,2,e,t)}function xg(e,t){return oa(4,4,e,t)}function Dg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mg(e,t,n){return n=n!=null?n.concat([e]):null,oa(4,4,Dg.bind(null,t,e),n)}function Ac(){}function $g(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ug(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fg(e,t,n){return jn&21?(at(n,t)||(n=Bp(),X.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function X1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{z=n,ol.transition=r}}function jg(){return Qe().memoizedState}function Y1(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zg(e))Bg(t,n);else if(n=vg(e,t,n,r),n!==null){var i=Pe();ot(n,e,r,i),Vg(n,t,r)}}function J1(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zg(e))Bg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=t.interleaved;l===null?(i.next=i,_c(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=vg(e,t,i,r),n!==null&&(i=Pe(),ot(n,e,r,i),Vg(n,t,r))}}function zg(e){var t=e.alternate;return e===X||t!==null&&t===X}function Bg(e,t){mi=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}var Ro={readContext:Je,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Q1={readContext:Je,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:kh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4194308,4,Dg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zs(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Th,useDebugValue:Ac,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Th(!1),t=e[0];return e=X1.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=ht();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ae===null)throw Error(_(349));jn&30||Cg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,kh(Rg.bind(null,r,s,e),[e]),r.flags|=2048,Fi(9,Pg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ht(),t=ae.identifierPrefix;if(G){var n=Pt,r=Ct;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Z1={readContext:Je,useCallback:$g,useContext:Je,useEffect:Rc,useImperativeHandle:Mg,useInsertionEffect:Lg,useLayoutEffect:xg,useMemo:Ug,useReducer:al,useRef:Og,useState:function(){return al(Ui)},useDebugValue:Ac,useDeferredValue:function(e){var t=Qe();return Fg(t,re.memoizedState,e)},useTransition:function(){var e=al(Ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Tg,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1},ew={readContext:Je,useCallback:$g,useContext:Je,useEffect:Rc,useImperativeHandle:Mg,useInsertionEffect:Lg,useLayoutEffect:xg,useMemo:Ug,useReducer:ll,useRef:Og,useState:function(){return ll(Ui)},useDebugValue:Ac,useDeferredValue:function(e){var t=Qe();return re===null?t.memoizedState=e:Fg(t,re.memoizedState,e)},useTransition:function(){var e=ll(Ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Tg,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=R0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tw=typeof WeakMap=="function"?WeakMap:Map;function Hg(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,wu=r),uu(e,t)},n}function bg(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ch(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gw.bind(null,e,t,n),t.then(e,e))}function Ph(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var nw=zt.ReactCurrentOwner,Oe=!1;function ke(e,t,n,r){t.child=e===null?Sg(t,null,n,r):Ar(t,e.child,n,r)}function Ah(e,t,n,r,i){n=n.render;var s=t.ref;return wr(t,i),r=Cc(e,t,n,r,s,i),n=Pc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(G&&n&&pc(t),t.flags|=1,ke(e,t,r,i),t.child)}function Nh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Uc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wg(e,t,s,r,i)):(e=ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=un(s,r),e.ref=t.ref,e.return=t,t.child=e}function Wg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ni(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return cu(e,t,n,r,i)}function Kg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(hr,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(hr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(hr,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(hr,Ue),Ue|=r;return ke(e,t,i,n),t.child}function Gg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var s=xe(n)?Un:Ie.current;return s=Pr(t,s),wr(t,i),n=Cc(e,t,n,r,s,i),r=Pc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(G&&r&&pc(t),t.flags|=1,ke(e,t,n,i),t.child)}function Oh(e,t,n,r,i){if(xe(n)){var s=!0;_o(t)}else s=!1;if(wr(t,i),t.stateNode===null)eo(e,t),_g(t,n,r),lu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=xe(n)?Un:Ie.current,u=Pr(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sh(t,o,r,u),Wt=!1;var g=t.memoizedState;o.state=g,ko(t,r,o,i),l=t.memoizedState,a!==r||g!==l||Le.current||Wt?(typeof c=="function"&&(au(t,n,c,r),l=t.memoizedState),(a=Wt||Eh(t,n,a,r,g,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nt(t.type,a),o.props=u,h=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=xe(n)?Un:Ie.current,l=Pr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==l)&&Sh(t,o,r,l),Wt=!1,g=t.memoizedState,o.state=g,ko(t,r,o,i);var y=t.memoizedState;a!==h||g!==y||Le.current||Wt?(typeof m=="function"&&(au(t,n,m,r),y=t.memoizedState),(u=Wt||Eh(t,n,u,r,g,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return du(e,t,n,r,s,i)}function du(e,t,n,r,i,s){Gg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&mh(t,n,!1),Ut(e,t,s);r=t.stateNode,nw.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ar(t,e.child,null,s),t.child=Ar(t,null,a,s)):ke(e,t,a,s),t.memoizedState=r.state,i&&mh(t,n,!0),t.child}function qg(e){var t=e.stateNode;t.pendingContext?gh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gh(e,t.context,!1),Sc(e,t.containerInfo)}function Lh(e,t,n,r,i){return Rr(),mc(i),t.flags|=256,ke(e,t,n,r),t.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(q,i&1),e===null)return su(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ua(o,r,0,null),e=Mn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=fu(n),t.memoizedState=hu,e):Nc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=un(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=un(a,s):(s=Mn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=hu,r}return s=e.child,e=s.sibling,r=un(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nc(e,t){return t=ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $s(e,t,n,r){return r!==null&&mc(r),Ar(t,e.child,null,n),e=Nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(_(422))),$s(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ua({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ar(t,e.child,null,o),t.child.memoizedState=fu(o),t.memoizedState=hu,s);if(!(t.mode&1))return $s(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=ul(s,r,void 0),$s(e,t,o,r)}if(a=(o&e.childLanes)!==0,Oe||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$t(e,i),ot(r,e,i,-1))}return $c(),r=ul(Error(_(421))),$s(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Fe=sn(i.nextSibling),ze=t,G=!0,it=null,e!==null&&(We[Ke++]=Ct,We[Ke++]=Pt,We[Ke++]=Fn,Ct=e.id,Pt=e.overflow,Fn=t),t=Nc(t,r.children),t.flags|=4096,t)}function xh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function cl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ke(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xh(e,n,t);else if(e.tag===19)xh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,s);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iw(e,t,n){switch(t.tag){case 3:qg(t),Rr();break;case 5:Ig(t);break;case 1:xe(t.type)&&_o(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Xg(e,t,n):(H(q,q.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Kg(e,t,n)}return Ut(e,t,n)}var Jg,pu,Qg,Zg;Jg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};Qg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nn(wt.current);var s=null;switch(n){case"input":i=$l(e,i),r=$l(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=jl(e,i),r=jl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}Bl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&b("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Zg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sw(e,t,n){var r=t.pendingProps;switch(gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return xe(t.type)&&wo(),me(t),null;case 3:return r=t.stateNode,Nr(),K(Le),K(Ie),Tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Su(it),it=null))),pu(e,t),me(t),null;case 5:Ic(t);var i=Nn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Qg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return me(t),null}if(e=Nn(wt.current),Ds(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ft]=t,r[xi]=s,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)b(oi[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Vd(r,s),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},b("invalid",r);break;case"textarea":bd(r,s),b("invalid",r)}Bl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,a,e),i=["children",""+a]):Ii.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":ks(r),Hd(r,s,!0);break;case"textarea":ks(r),Wd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ft]=t,e[xi]=r,Jg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Vl(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)b(oi[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Vd(e,r),i=$l(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),b("invalid",e);break;case"textarea":bd(e,r),i=jl(e,r),b("invalid",e);break;default:i=r}Bl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ap(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ti(e,l):typeof l=="number"&&Ti(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ii.hasOwnProperty(s)?l!=null&&s==="onScroll"&&b("scroll",e):l!=null&&ec(e,s,l,o))}switch(n){case"input":ks(e),Hd(e,r,!1);break;case"textarea":ks(e),Wd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?gr(e,!!r.multiple,s,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Zg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Nn(Mi.current),Nn(wt.current),Ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return me(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Fe!==null&&t.mode&1&&!(t.flags&128))mg(),Rr(),t.flags|=98560,s=!1;else if(s=Ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[ft]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else it!==null&&(Su(it),it=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):$c())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Nr(),pu(e,t),e===null&&Oi(t.stateNode.containerInfo),me(t),null;case 10:return wc(t.type._context),me(t),null;case 17:return xe(t.type)&&wo(),me(t),null;case 19:if(K(q),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Zr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,Zr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>Lr&&(t.flags|=128,r=!0,Zr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Co(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*ee()-s.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function ow(e,t){switch(gc(t),t.tag){case 1:return xe(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),K(Le),K(Ie),Tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ic(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Nr(),null;case 10:return wc(t.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var Us=!1,ye=!1,aw=typeof WeakSet=="function"?WeakSet:Set,k=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function gu(e,t,n){try{n()}catch(r){J(e,t,r)}}var Dh=!1;function lw(e,t){if(Ql=go,e=rg(),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=e,g=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)g=h,h=m;for(;;){if(h===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zl={focusedElem:e,selectionRange:n},go=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:nt(t.type,w),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){J(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return y=Dh,Dh=!1,y}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&gu(t,n,s)}i=i.next}while(i!==r)}}function aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function em(e){var t=e.alternate;t!==null&&(e.alternate=null,em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[xi],delete t[nu],delete t[b1],delete t[W1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tm(e){return e.tag===5||e.tag===3||e.tag===4}function Mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}var ce=null,rt=!1;function Vt(e,t,n){for(n=n.child;n!==null;)nm(e,t,n),n=n.sibling}function nm(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:ye||dr(n,t);case 6:var r=ce,i=rt;ce=null,Vt(e,t,n),ce=r,rt=i,ce!==null&&(rt?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(rt?(e=ce,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Ri(e)):rl(ce,n.stateNode));break;case 4:r=ce,i=rt,ce=n.stateNode.containerInfo,rt=!0,Vt(e,t,n),ce=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gu(n,t,o),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!ye&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Vt(e,t,n),ye=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function $h(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new aw),t.forEach(function(r){var i=vw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,rt=!1;break e;case 3:ce=a.stateNode.containerInfo,rt=!0;break e;case 4:ce=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(ce===null)throw Error(_(160));nm(s,o,i),ce=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}function rm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),dt(e),r&4){try{vi(3,e,e.return),aa(3,e)}catch(w){J(e,e.return,w)}try{vi(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:tt(t,e),dt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(tt(t,e),dt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(w){J(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tp(i,s),Vl(a,o);var u=Vl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ap(i,h):c==="dangerouslySetInnerHTML"?Pp(i,h):c==="children"?Ti(i,h):ec(i,c,h,u)}switch(a){case"input":Ul(i,s);break;case"textarea":kp(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gr(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?gr(i,!!s.multiple,s.defaultValue,!0):gr(i,!!s.multiple,s.multiple?[]:"",!1))}i[xi]=s}catch(w){J(e,e.return,w)}}break;case 6:if(tt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){J(e,e.return,w)}}break;case 3:if(tt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:tt(t,e),dt(e);break;case 13:tt(t,e),dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xc=ee())),r&4&&$h(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,tt(t,e),ye=u):tt(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(k=e,c=e.child;c!==null;){for(h=k=c;k!==null;){switch(g=k,m=g.child,g.tag){case 0:case 11:case 14:case 15:vi(4,g,g.return);break;case 1:dr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){J(r,n,w)}}break;case 5:dr(g,g.return);break;case 22:if(g.memoizedState!==null){Fh(h);continue}}m!==null?(m.return=g,k=m):Fh(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rp("display",o))}catch(w){J(e,e.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){J(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tt(t,e),dt(e),r&4&&$h(e);break;case 21:break;default:tt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var s=Mh(e);yu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mh(e);vu(e,a,o);break;default:throw Error(_(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uw(e,t,n){k=e,im(e)}function im(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Us;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Us;var u=ye;if(Us=o,(ye=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?jh(i):l!==null?(l.return=o,k=l):jh(i);for(;s!==null;)k=s,im(s),s=s.sibling;k=i,Us=a,ye=u}Uh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Uh(e)}}function Uh(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&_h(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_h(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ri(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&mu(t)}catch(g){J(t,t.return,g)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Fh(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function jh(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aa(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var s=t.return;try{mu(t)}catch(l){J(t,s,l)}break;case 5:var o=t.return;try{mu(t)}catch(l){J(t,o,l)}}}catch(l){J(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var cw=Math.ceil,Ao=zt.ReactCurrentDispatcher,Oc=zt.ReactCurrentOwner,Xe=zt.ReactCurrentBatchConfig,F=0,ae=null,ne=null,he=0,Ue=0,hr=mn(0),ie=0,ji=null,zn=0,la=0,Lc=0,yi=null,Ne=null,xc=0,Lr=1/0,Tt=null,No=!1,wu=null,an=null,Fs=!1,Zt=null,Oo=0,wi=0,_u=null,to=-1,no=0;function Pe(){return F&6?ee():to!==-1?to:to=ee()}function ln(e){return e.mode&1?F&2&&he!==0?he&-he:G1.transition!==null?(no===0&&(no=Bp()),no):(e=z,e!==0||(e=window.event,e=e===void 0?16:qp(e.type)),e):1}function ot(e,t,n,r){if(50<wi)throw wi=0,_u=null,Error(_(185));ts(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(la|=n),ie===4&&Gt(e,he)),De(e,r),n===1&&F===0&&!(t.mode&1)&&(Lr=ee()+500,ia&&vn()))}function De(e,t){var n=e.callbackNode;G0(e,t);var r=po(e,e===ae?he:0);if(r===0)n!==null&&qd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qd(n),t===1)e.tag===0?K1(zh.bind(null,e)):fg(zh.bind(null,e)),V1(function(){!(F&6)&&vn()}),n=null;else{switch(Vp(r)){case 1:n=sc;break;case 4:n=jp;break;case 16:n=fo;break;case 536870912:n=zp;break;default:n=fo}n=hm(n,sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sm(e,t){if(to=-1,no=0,F&6)throw Error(_(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=po(e,e===ae?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Lo(e,r);else{t=r;var i=F;F|=2;var s=am();(ae!==e||he!==t)&&(Tt=null,Lr=ee()+500,Dn(e,t));do try{fw();break}catch(a){om(e,a)}while(!0);yc(),Ao.current=s,F=i,ne!==null?t=0:(ae=null,he=0,t=ie)}if(t!==0){if(t===2&&(i=Gl(e),i!==0&&(r=i,t=Eu(e,i))),t===1)throw n=ji,Dn(e,0),Gt(e,r),De(e,ee()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!dw(i)&&(t=Lo(e,r),t===2&&(s=Gl(e),s!==0&&(r=s,t=Eu(e,s))),t===1))throw n=ji,Dn(e,0),Gt(e,r),De(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Cn(e,Ne,Tt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=xc+500-ee(),10<t)){if(po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(Cn.bind(null,e,Ne,Tt),t);break}Cn(e,Ne,Tt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cw(r/1960))-r,10<r){e.timeoutHandle=tu(Cn.bind(null,e,Ne,Tt),r);break}Cn(e,Ne,Tt);break;case 5:Cn(e,Ne,Tt);break;default:throw Error(_(329))}}}return De(e,ee()),e.callbackNode===n?sm.bind(null,e):null}function Eu(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=Lo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Su(t)),e}function Su(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function dw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Lc,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function zh(e){if(F&6)throw Error(_(327));_r();var t=po(e,0);if(!(t&1))return De(e,ee()),null;var n=Lo(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=Eu(e,r))}if(n===1)throw n=ji,Dn(e,0),Gt(e,t),De(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,Ne,Tt),De(e,ee()),null}function Dc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Lr=ee()+500,ia&&vn())}}function Bn(e){Zt!==null&&Zt.tag===0&&!(F&6)&&_r();var t=F;F|=1;var n=Xe.transition,r=z;try{if(Xe.transition=null,z=1,e)return e()}finally{z=r,Xe.transition=n,F=t,!(F&6)&&vn()}}function Mc(){Ue=hr.current,K(hr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B1(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Nr(),K(Le),K(Ie),Tc();break;case 5:Ic(r);break;case 4:Nr();break;case 13:K(q);break;case 19:K(q);break;case 10:wc(r.type._context);break;case 22:case 23:Mc()}n=n.return}if(ae=e,ne=e=un(e.current,null),he=Ue=t,ie=0,ji=null,Lc=la=zn=0,Ne=yi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}An=null}return e}function om(e,t){do{var n=ne;try{if(yc(),Qs.current=Ro,Po){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(jn=0,oe=re=X=null,mi=!1,$i=0,Oc.current=null,n===null||n.return===null){ie=1,ji=t,ne=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Ph(o);if(m!==null){m.flags&=-257,Rh(m,o,a,s,t),m.mode&1&&Ch(s,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Ch(s,u,t),$c();break e}l=Error(_(426))}}else if(G&&a.mode&1){var S=Ph(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Rh(S,o,a,s,t),mc(Or(l,a));break e}}s=l=Or(l,a),ie!==4&&(ie=2),yi===null?yi=[s]:yi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Hg(s,l,t);wh(s,f);break e;case 1:a=l;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(an===null||!an.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=bg(s,a,t);wh(s,v);break e}}s=s.return}while(s!==null)}um(n)}catch(I){t=I,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function am(){var e=Ao.current;return Ao.current=Ro,e===null?Ro:e}function $c(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(zn&268435455)&&!(la&268435455)||Gt(ae,he)}function Lo(e,t){var n=F;F|=2;var r=am();(ae!==e||he!==t)&&(Tt=null,Dn(e,t));do try{hw();break}catch(i){om(e,i)}while(!0);if(yc(),F=n,Ao.current=r,ne!==null)throw Error(_(261));return ae=null,he=0,ie}function hw(){for(;ne!==null;)lm(ne)}function fw(){for(;ne!==null&&!F0();)lm(ne)}function lm(e){var t=dm(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?um(e):ne=t,Oc.current=null}function um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ow(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=sw(n,t,Ue),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Cn(e,t,n){var r=z,i=Xe.transition;try{Xe.transition=null,z=1,pw(e,t,n,r)}finally{Xe.transition=i,z=r}return null}function pw(e,t,n,r){do _r();while(Zt!==null);if(F&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(q0(e,s),e===ae&&(ne=ae=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fs||(Fs=!0,hm(fo,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=z;z=1;var a=F;F|=4,Oc.current=null,lw(e,n),rm(n,e),D1(Zl),go=!!Ql,Zl=Ql=null,e.current=n,uw(n),j0(),F=a,z=o,Xe.transition=s}else e.current=n;if(Fs&&(Fs=!1,Zt=e,Oo=i),s=e.pendingLanes,s===0&&(an=null),V0(n.stateNode),De(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,e=wu,wu=null,e;return Oo&1&&e.tag!==0&&_r(),s=e.pendingLanes,s&1?e===_u?wi++:(wi=0,_u=e):wi=0,vn(),null}function _r(){if(Zt!==null){var e=Vp(Oo),t=Xe.transition,n=z;try{if(Xe.transition=null,z=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Oo=0,F&6)throw Error(_(331));var i=F;for(F|=4,k=e.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:vi(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var g=c.sibling,m=c.return;if(em(c),c===u){k=null;break}if(g!==null){g.return=m,k=g;break}k=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vi(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,k=f;break e}k=s.return}}var d=e.current;for(k=d;k!==null;){o=k;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,k=p;else e:for(o=d;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:aa(9,a)}}catch(I){J(a,a.return,I)}if(a===o){k=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,k=v;break e}k=a.return}}if(F=i,vn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Zo,e)}catch{}r=!0}return r}finally{z=n,Xe.transition=t}}return!1}function Bh(e,t,n){t=Or(n,t),t=Hg(e,t,1),e=on(e,t,1),t=Pe(),e!==null&&(ts(e,1,t),De(e,t))}function J(e,t,n){if(e.tag===3)Bh(e,e,n);else for(;t!==null;){if(t.tag===3){Bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=Or(n,e),e=bg(t,e,1),t=on(t,e,1),e=Pe(),t!==null&&(ts(t,1,e),De(t,e));break}}t=t.return}}function gw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(he&n)===n&&(ie===4||ie===3&&(he&130023424)===he&&500>ee()-xc?Dn(e,0):Lc|=n),De(e,t)}function cm(e,t){t===0&&(e.mode&1?(t=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):t=1);var n=Pe();e=$t(e,t),e!==null&&(ts(e,t,n),De(e,n))}function mw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cm(e,n)}function vw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),cm(e,n)}var dm;dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,iw(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,G&&t.flags&1048576&&pg(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var i=Pr(t,Ie.current);wr(t,n),i=Cc(null,t,r,e,i,n);var s=Pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(s=!0,_o(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(t),i.updater=sa,t.stateNode=i,i._reactInternals=t,lu(t,r,e,n),t=du(null,t,r,!0,s,n)):(t.tag=0,G&&s&&pc(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ww(r),e=nt(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=Oh(null,t,r,e,n);break e;case 11:t=Ah(null,t,r,e,n);break e;case 14:t=Nh(null,t,r,nt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Oh(e,t,r,i,n);case 3:e:{if(qg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,yg(e,t),ko(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Or(Error(_(423)),t),t=Lh(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(_(424)),t),t=Lh(e,t,r,n,i);break e}else for(Fe=sn(t.stateNode.containerInfo.firstChild),ze=t,G=!0,it=null,n=Sg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){t=Ut(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Ig(t),e===null&&su(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,eu(r,i)?o=null:s!==null&&eu(r,s)&&(t.flags|=32),Gg(e,t),ke(e,t,o,n),t.child;case 6:return e===null&&su(t),null;case 13:return Xg(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Ah(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Io,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Le.current){t=Ut(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Lt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ou(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ou(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wr(t,n),i=Je(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=nt(r,t.pendingProps),i=nt(r.type,i),Nh(e,t,r,i,n);case 15:return Wg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),eo(e,t),t.tag=1,xe(r)?(e=!0,_o(t)):e=!1,wr(t,n),_g(t,r,i),lu(t,r,i,n),du(null,t,r,!0,e,n);case 19:return Yg(e,t,n);case 22:return Kg(e,t,n)}throw Error(_(156,t.tag))};function hm(e,t){return Fp(e,t)}function yw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new yw(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ww(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nc)return 11;if(e===rc)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Uc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case nr:return Mn(n.children,i,s,t);case tc:o=8,i|=8;break;case Ll:return e=qe(12,n,t,i|2),e.elementType=Ll,e.lanes=s,e;case xl:return e=qe(13,n,t,i),e.elementType=xl,e.lanes=s,e;case Dl:return e=qe(19,n,t,i),e.elementType=Dl,e.lanes=s,e;case Ep:return ua(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:o=10;break e;case _p:o=9;break e;case nc:o=11;break e;case rc:o=14;break e;case bt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Mn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function ua(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Ep,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _w(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,i,s,o,a,l){return e=new _w(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(s),e}function Ew(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fm(e){if(!e)return pn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(xe(n))return hg(e,n,t)}return t}function pm(e,t,n,r,i,s,o,a,l){return e=Fc(n,r,!0,e,i,s,o,a,l),e.context=fm(null),n=e.current,r=Pe(),i=ln(n),s=Lt(r,i),s.callback=t??null,on(n,s,i),e.current.lanes=i,ts(e,i,r),De(e,r),e}function ca(e,t,n,r){var i=t.current,s=Pe(),o=ln(i);return n=fm(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(i,t,o),e!==null&&(ot(e,i,o,s),Js(e,i,o)),o}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jc(e,t){Vh(e,t),(e=e.alternate)&&Vh(e,t)}function Sw(){return null}var gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function zc(e){this._internalRoot=e}da.prototype.render=zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ca(e,t,null,null)};da.prototype.unmount=zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){ca(null,e,null,null)}),t[Mt]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Gp(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function Iw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xo(o);s.call(u)}}var o=pm(t,r,e,0,null,!1,!1,"",Hh);return e._reactRootContainer=o,e[Mt]=o.current,Oi(e.nodeType===8?e.parentNode:e),Bn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xo(l);a.call(u)}}var l=Fc(e,0,!1,null,null,!1,!1,"",Hh);return e._reactRootContainer=l,e[Mt]=l.current,Oi(e.nodeType===8?e.parentNode:e),Bn(function(){ca(t,l,n,r)}),l}function fa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xo(o);a.call(l)}}ca(t,o,e,i)}else o=Iw(n,t,e,i,r);return xo(o)}Hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(oc(t,n|1),De(t,ee()),!(F&6)&&(Lr=ee()+500,vn()))}break;case 13:Bn(function(){var r=$t(e,1);if(r!==null){var i=Pe();ot(r,e,1,i)}}),jc(e,1)}};ac=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Pe();ot(t,e,134217728,n)}jc(e,134217728)}};bp=function(e){if(e.tag===13){var t=ln(e),n=$t(e,t);if(n!==null){var r=Pe();ot(n,e,t,r)}jc(e,t)}};Wp=function(){return z};Kp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};bl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ra(r);if(!i)throw Error(_(90));Ip(r),Ul(r,i)}}}break;case"textarea":kp(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};Lp=Dc;xp=Bn;var Tw={usingClientEntryPoint:!1,Events:[rs,or,ra,Np,Op,Dc]},ei={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kw={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$p(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{Zo=js.inject(kw),yt=js}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tw;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(_(200));return Ew(e,t,null,n)};He.createRoot=function(e,t){if(!Bc(e))throw Error(_(299));var n=!1,r="",i=gm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,Oi(e.nodeType===8?e.parentNode:e),new zc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=$p(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Bn(e)};He.hydrate=function(e,t,n){if(!ha(t))throw Error(_(200));return fa(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Bc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pm(t,null,e,1,n??null,i,!1,s,o),e[Mt]=t.current,Oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new da(t)};He.render=function(e,t,n){if(!ha(t))throw Error(_(200));return fa(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!ha(e))throw Error(_(40));return e._reactRootContainer?(Bn(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};He.unstable_batchedUpdates=Dc;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ha(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return fa(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mm)}catch(e){console.error(e)}}mm(),pp.exports=He;var Cw=pp.exports,bh=Cw;Nl.createRoot=bh.createRoot,Nl.hydrateRoot=bh.hydrateRoot;const vm=E.createContext();function Pw({children:e,value:t}){return N.jsx(vm.Provider,{value:t,children:e})}function Rw(){return E.useContext(vm)}var Wh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Aw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[c],n[h],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ym(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Aw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Nw;const g=s<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(e){const t=ym(e);return wm.encodeByteArray(t,!0)},Do=function(e){return Ow(e).replace(/\./g,"")},_m=function(e){try{return wm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=()=>Lw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof Wh>"u")return;const e=Wh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Mw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_m(e[1]);return t&&JSON.parse(t)},Vc=()=>{try{return xw()||Dw()||Mw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Em=e=>{var t,n;return(n=(t=Vc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$w=e=>{const t=Em(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Sm=()=>{var e;return(e=Vc())===null||e===void 0?void 0:e.config},Im=e=>{var t;return(t=Vc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Tm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bw(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function km(){try{return typeof indexedDB=="object"}catch{return!1}}function Cm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Vw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="FirebaseError";class ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hw,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?bw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ct(i,a,r)}}function bw(e,t){return e.replace(Ww,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ww=/\{\$([^}]+)}/g;function Kw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Kh(s)&&Kh(o)){if(!zi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function li(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Gw(e,t){const n=new qw(e,t);return n.subscribe.bind(n)}class qw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=fl),i.error===void 0&&(i.error=fl),i.complete===void 0&&(i.complete=fl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function fl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=1e3,Jw=2,Qw=4*60*60*1e3,Zw=.5;function Gh(e,t=Yw,n=Jw){const r=t*Math.pow(n,e),i=Math.round(Zw*r*(Math.random()-.5)*2);return Math.min(Qw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return e&&e._delegate?e._delegate:e}class lt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Uw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(n_(t))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pn){return this.instances.has(t)}getOptions(t=Pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:t_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pn){return this.component?this.component.multipleInstances?t:Pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function t_(e){return e===Pn?void 0:e}function n_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new e_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const i_={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},s_=j.INFO,o_={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},a_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=o_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pa{constructor(t){this.name=t,this._logLevel=s_,this._logHandler=a_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?i_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const l_=(e,t)=>t.some(n=>e instanceof n);let qh,Xh;function u_(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c_(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pm=new WeakMap,Iu=new WeakMap,Rm=new WeakMap,pl=new WeakMap,Hc=new WeakMap;function d_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(cn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Pm.set(n,e)}).catch(()=>{}),Hc.set(t,e),t}function h_(e){if(Iu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Iu.set(e,t)}let Tu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Iu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Rm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function f_(e){Tu=e(Tu)}function p_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gl(this),t,...n);return Rm.set(r,t.sort?t.sort():[t]),cn(r)}:c_().includes(e)?function(...t){return e.apply(gl(this),t),cn(Pm.get(this))}:function(...t){return cn(e.apply(gl(this),t))}}function g_(e){return typeof e=="function"?p_(e):(e instanceof IDBTransaction&&h_(e),l_(e,u_())?new Proxy(e,Tu):e)}function cn(e){if(e instanceof IDBRequest)return d_(e);if(pl.has(e))return pl.get(e);const t=g_(e);return t!==e&&(pl.set(e,t),Hc.set(t,e)),t}const gl=e=>Hc.get(e);function Am(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cn(o.result),l.oldVersion,l.newVersion,cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const m_=["get","getKey","getAll","getAllKeys","count"],v_=["put","add","delete","clear"],ml=new Map;function Yh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ml.get(t))return ml.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=v_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ml.set(t,s),s}f_(e=>({...e,get:(t,n,r)=>Yh(t,n)||e.get(t,n,r),has:(t,n)=>!!Yh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function w_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ku="@firebase/app",Jh="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new pa("@firebase/app"),__="@firebase/app-compat",E_="@firebase/analytics-compat",S_="@firebase/analytics",I_="@firebase/app-check-compat",T_="@firebase/app-check",k_="@firebase/auth",C_="@firebase/auth-compat",P_="@firebase/database",R_="@firebase/database-compat",A_="@firebase/functions",N_="@firebase/functions-compat",O_="@firebase/installations",L_="@firebase/installations-compat",x_="@firebase/messaging",D_="@firebase/messaging-compat",M_="@firebase/performance",$_="@firebase/performance-compat",U_="@firebase/remote-config",F_="@firebase/remote-config-compat",j_="@firebase/storage",z_="@firebase/storage-compat",B_="@firebase/firestore",V_="@firebase/firestore-compat",H_="firebase",b_="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="[DEFAULT]",W_={[ku]:"fire-core",[__]:"fire-core-compat",[S_]:"fire-analytics",[E_]:"fire-analytics-compat",[T_]:"fire-app-check",[I_]:"fire-app-check-compat",[k_]:"fire-auth",[C_]:"fire-auth-compat",[P_]:"fire-rtdb",[R_]:"fire-rtdb-compat",[A_]:"fire-fn",[N_]:"fire-fn-compat",[O_]:"fire-iid",[L_]:"fire-iid-compat",[x_]:"fire-fcm",[D_]:"fire-fcm-compat",[M_]:"fire-perf",[$_]:"fire-perf-compat",[U_]:"fire-rc",[F_]:"fire-rc-compat",[j_]:"fire-gcs",[z_]:"fire-gcs-compat",[B_]:"fire-fst",[V_]:"fire-fst-compat","fire-js":"fire-js",[H_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map,K_=new Map,Pu=new Map;function Qh(e,t){try{e.container.addComponent(t)}catch(n){Vn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if(Pu.has(t))return Vn.debug(`There were multiple attempts to register component ${t}.`),!1;Pu.set(t,e);for(const n of Mo.values())Qh(n,e);for(const n of K_.values())Qh(n,e);return!0}function Yn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function gt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new Xn("app","Firebase",G_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=b_;function Nm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Cu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=Sm()),!n)throw dn.create("no-options");const s=Mo.get(i);if(s){if(zi(n,s.options)&&zi(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new r_(i);for(const l of Pu.values())o.addComponent(l);const a=new q_(n,r,o);return Mo.set(i,a),a}function bc(e=Cu){const t=Mo.get(e);if(!t&&e===Cu&&Sm())return Nm();if(!t)throw dn.create("no-app",{appName:e});return t}function Ye(e,t,n){var r;let i=(r=W_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}St(new lt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="firebase-heartbeat-database",Y_=1,Bi="firebase-heartbeat-store";let vl=null;function Om(){return vl||(vl=Am(X_,Y_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(e=>{throw dn.create("idb-open",{originalErrorMessage:e.message})})),vl}async function J_(e){try{const n=(await Om()).transaction(Bi),r=await n.objectStore(Bi).get(Lm(e));return await n.done,r}catch(t){if(t instanceof ct)Vn.warn(t.message);else{const n=dn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(n.message)}}}async function Zh(e,t){try{const r=(await Om()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(t,Lm(e)),await r.done}catch(n){if(n instanceof ct)Vn.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function Lm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=1024,Z_=30*24*60*60*1e3;class eE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ef();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Z_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:r,unsentEntries:i}=tE(this._heartbeatsCache.heartbeats),s=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ef(){return new Date().toISOString().substring(0,10)}function tE(e,t=Q_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return km()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await J_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function tf(e){return Do(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(e){St(new lt("platform-logger",t=>new y_(t),"PRIVATE")),St(new lt("heartbeat",t=>new eE(t),"PRIVATE")),Ye(ku,Jh,e),Ye(ku,Jh,"esm2017"),Ye("fire-js","")}rE("");function Wc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iE=xm,Dm=new Xn("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new pa("@firebase/auth");function sE(e,...t){$o.logLevel<=j.WARN&&$o.warn(`Auth (${jr}): ${e}`,...t)}function io(e,...t){$o.logLevel<=j.ERROR&&$o.error(`Auth (${jr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,...t){throw Kc(e,...t)}function _t(e,...t){return Kc(e,...t)}function Mm(e,t,n){const r=Object.assign(Object.assign({},iE()),{[t]:n});return new Xn("auth","Firebase",r).create(t,{appName:e.name})}function xt(e){return Mm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Dm.create(e,...t)}function O(e,t,...n){if(!e)throw Kc(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw io(t),new Error(t)}function Ft(e,t){e||Rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function oE(){return nf()==="http:"||nf()==="https:"}function nf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oE()||Tm()||"connection"in navigator)?navigator.onLine:!0}function lE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=jw()||zw()}get(){return aE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new os(3e4,6e4);function yn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bt(e,t,n,r,i={}){return Um(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ss(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),$m.fetch()(Fm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Um(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uE),t);try{const i=new hE(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw zs(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mm(e,c,u);ut(e,c)}}catch(i){if(i instanceof ct)throw i;ut(e,"network-request-failed",{message:String(i)})}}async function as(e,t,n,r,i={}){const s=await Bt(e,t,n,r,i);return"mfaPendingCredential"in s&&ut(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Fm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gc(e.config,i):`${e.config.apiScheme}://${i}`}function dE(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),cE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(e,t,r);return i.customData._tokenResponse=n,i}function rf(e){return e!==void 0&&e.enterprise!==void 0}class fE{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return dE(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pE(e,t){return Bt(e,"GET","/v2/recaptchaConfig",yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(e,t){return Bt(e,"POST","/v1/accounts:delete",t)}async function jm(e,t){return Bt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mE(e,t=!1){const n=et(e),r=await n.getIdToken(t),i=qc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_i(yl(i.auth_time)),issuedAtTime:_i(yl(i.iat)),expirationTime:_i(yl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yl(e){return Number(e)*1e3}function qc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const i=_m(n);return i?JSON.parse(i):(io("Failed to decode base64 JWT payload"),null)}catch(i){return io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sf(e){const t=qc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ct&&vE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function vE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await xr(e,jm(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?zm(s.providerUserInfo):[],a=_E(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Au(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function wE(e){const t=et(e);await Uo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _E(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function zm(e){return e.map(t=>{var{providerId:n}=t,r=Wc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(e,t){const n=await Um(e,{},async()=>{const r=ss({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Fm(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$m.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SE(e,t){return Bt(e,"POST","/v2/accounts:revokeToken",yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):sf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){O(t.length!==0,"internal-error");const n=sf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await EE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Er;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class At{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Wc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Au(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await xr(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return mE(this,t)}reload(){return wE(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new At(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(xt(this.auth));const t=await this.getIdToken();return await xr(this,gE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:v,isAnonymous:I,providerData:C,stsTokenManager:R}=n;O(p&&R,t,"internal-error");const A=Er.fromJSON(this.name,R);O(typeof p=="string",t,"internal-error"),Ht(h,t.name),Ht(g,t.name),O(typeof v=="boolean",t,"internal-error"),O(typeof I=="boolean",t,"internal-error"),Ht(m,t.name),Ht(y,t.name),Ht(w,t.name),Ht(S,t.name),Ht(f,t.name),Ht(d,t.name);const V=new At({uid:p,auth:t,email:g,emailVerified:v,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:A,createdAt:f,lastLoginAt:d});return C&&Array.isArray(C)&&(V.providerData=C.map(x=>Object.assign({},x))),S&&(V._redirectEventId=S),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new Er;i.updateFromServerResponse(n);const s=new At({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Uo(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?zm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Er;a.updateFromIdToken(r);const l=new At({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Au(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Map;function Nt(e){Ft(e instanceof Function,"Expected a class definition");let t=of.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,of.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Bm.type="NONE";const af=Bm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e,t,n){return`firebase:${e}:${t}:${n}`}class Sr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=so(this.userKey,i.apiKey,s),this.fullPersistenceKey=so("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?At._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Sr(Nt(af),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(af);const o=so(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=At._fromJSON(t,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Sr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Sr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Vm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Km(t))return"Blackberry";if(Gm(t))return"Webos";if(Xc(t))return"Safari";if((t.includes("chrome/")||Hm(t))&&!t.includes("edge/"))return"Chrome";if(Wm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vm(e=Te()){return/firefox\//i.test(e)}function Xc(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hm(e=Te()){return/crios\//i.test(e)}function bm(e=Te()){return/iemobile/i.test(e)}function Wm(e=Te()){return/android/i.test(e)}function Km(e=Te()){return/blackberry/i.test(e)}function Gm(e=Te()){return/webos/i.test(e)}function ga(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function IE(e=Te()){var t;return ga(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function TE(){return Bw()&&document.documentMode===10}function qm(e=Te()){return ga(e)||Wm(e)||Gm(e)||Km(e)||/windows phone/i.test(e)||bm(e)}function kE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(e,t=[]){let n;switch(e){case"Browser":n=lf(Te());break;case"Worker":n=`${lf(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(e,t={}){return Bt(e,"GET","/v2/passwordPolicy",yn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=6;class AE{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new CE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await jm(this,{idToken:t}),r=await At._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Uo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(gt(this.app))return Promise.reject(xt(this));const n=t?et(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return gt(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await PE(this),n=new AE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Xn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Nt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&sE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(e){return et(e)}class uf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OE(e){ma=e}function Ym(e){return ma.loadJS(e)}function LE(){return ma.recaptchaEnterpriseScript}function xE(){return ma.gapiScript}function DE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ME="recaptcha-enterprise",$E="NO_RECAPTCHA";class UE{constructor(t){this.type=ME,this.auth=Jn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;rf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o($E)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&rf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LE();l.length!==0&&(l+=a),Ym(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function cf(e,t,n,r=!1){const i=new UE(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cf(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e,t){const n=Yn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zi(s,t??{}))return i;ut(i,"already-initialized")}return n.initialize({options:t})}function jE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function zE(e,t,n){const r=Jn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Jm(t),{host:o,port:a}=BE(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||VE()}function Jm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function BE(e){const t=Jm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:df(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:df(o)}}}function df(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function VE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}async function HE(e,t){return Bt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(e,t){return as(e,"POST","/v1/accounts:signInWithPassword",yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(e,t){return as(e,"POST","/v1/accounts:signInWithEmailLink",yn(e,t))}async function KE(e,t){return as(e,"POST","/v1/accounts:signInWithEmailLink",yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Yc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Vi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Vi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(t,n,"signInWithPassword",bE);case"emailLink":return WE(t,{email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(t,r,"signUpPassword",HE);case"emailLink":return KE(t,{idToken:n,email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(e,t){return as(e,"POST","/v1/accounts:signInWithIdp",yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="http://localhost";class Hn extends Yc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Wc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ir(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ir(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ir(t,n)}buildRequest(){const t={requestUri:GE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ss(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XE(e){const t=ai(li(e)).link,n=t?ai(li(t)).deep_link_id:null,r=ai(li(e)).deep_link_id;return(r?ai(li(r)).link:null)||r||n||t||e}class Jc{constructor(t){var n,r,i,s,o,a;const l=ai(li(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=qE((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=XE(t);try{return new Jc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(t,n){return Vi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Jc.parseLink(n);return O(r,"argument-error"),Vi._fromEmailAndCode(t,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Qm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ls{constructor(){super("facebook.com")}static credential(t){return Hn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ls{constructor(){super("github.com")}static credential(t){return Hn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ls{constructor(){super("twitter.com")}static credential(t,n){return Hn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(e,t){return as(e,"POST","/v1/accounts:signUp",yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await At._fromIdTokenResponse(t,r,i),o=hf(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=hf(r);return new bn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function hf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Fo(t,n,r,i)}}function Zm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(e,s,t,r):s})}async function JE(e,t,n=!1){const r=await xr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(e,t,n=!1){const{auth:r}=e;if(gt(r.app))return Promise.reject(xt(r));const i="reauthenticate";try{const s=await xr(e,Zm(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=qc(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(e.uid===a,r,"user-mismatch"),bn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(e,t,n=!1){if(gt(e.app))return Promise.reject(xt(e));const r="signIn",i=await Zm(e,r,t),s=await bn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ZE(e,t){return ev(Jn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(e){const t=Jn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function eS(e,t,n){if(gt(e.app))return Promise.reject(xt(e));const r=Jn(e),o=await Nu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tv(e),l}),a=await bn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tS(e,t,n){return gt(e.app)?Promise.reject(xt(e)):ZE(et(e),zr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(e,t){return Bt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=et(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await xr(r,nS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iS(e,t,n,r){return et(e).onIdTokenChanged(t,n,r)}function sS(e,t,n){return et(e).beforeAuthStateChanged(t,n)}function oS(e,t,n,r){return et(e).onAuthStateChanged(t,n,r)}function aS(e){return et(e).signOut()}const jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(){const e=Te();return Xc(e)||ga(e)}const uS=1e3,cS=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lS()&&kE(),this.fallbackToPolling=qm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TE()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}rv.type="LOCAL";const dS=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}iv.type="SESSION";const sv=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new va(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Qc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function pS(e){Et().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function vS(){return ov()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",yS=1,zo="firebaseLocalStorage",lv="fbase_key";class us{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(e,t){return e.transaction([zo],t?"readwrite":"readonly").objectStore(zo)}function wS(){const e=indexedDB.deleteDatabase(av);return new us(e).toPromise()}function Ou(){const e=indexedDB.open(av,yS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(zo,{keyPath:lv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(zo)?t(r):(r.close(),await wS(),t(await Ou()))})})}async function ff(e,t,n){const r=ya(e,!0).put({[lv]:t,value:n});return new us(r).toPromise()}async function _S(e,t){const n=ya(e,!1).get(t),r=await new us(n).toPromise();return r===void 0?null:r.value}function pf(e,t){const n=ya(e,!0).delete(t);return new us(n).toPromise()}const ES=800,SS=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ou(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>SS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(vS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new fS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ou();return await ff(t,jo,"1"),await pf(t,jo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ff(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>_S(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>pf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ya(i,!1).getAll();return new us(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const IS=uv;new os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(e,t){return t?Nt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Yc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ir(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ir(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ir(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kS(e){return ev(e.auth,new Zc(e),e.bypassAuthState)}function CS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),QE(n,new Zc(e),e.bypassAuthState)}async function PS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),JE(n,new Zc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return PS;case"reauthViaPopup":case"reauthViaRedirect":return CS;default:ut(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new os(2e3,1e4);class fr extends cv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,RS.get())};t()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="pendingRedirect",oo=new Map;class NS extends cv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=oo.get(this.auth._key());if(!t){try{const r=await OS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}oo.set(this.auth._key(),t)}return this.bypassAuthState||oo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(e,t){const n=DS(t),r=xS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LS(e,t){oo.set(e._key(),t)}function xS(e){return Nt(e._redirectPersistence)}function DS(e){return so(AS,e.config.apiKey,e.name)}async function MS(e,t,n=!1){if(gt(e.app))return Promise.reject(xt(e));const r=Jn(e),i=TS(r,t),o=await new NS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=10*60*1e3;class US{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!dv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$S&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(t))}saveEventToCache(t){this.cachedEventUids.add(gf(t)),this.lastProcessedEventTime=Date.now()}}function gf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function dv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function FS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(e,t={}){return Bt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function VS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jS(e);for(const n of t)try{if(HS(n))return}catch{}ut(e,"unauthorized-domain")}function HS(e){const t=Ru(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BS.test(n))return!1;if(zS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new os(3e4,6e4);function mf(){const e=Et().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function WS(e){return new Promise((t,n)=>{var r,i,s;function o(){mf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mf(),n(_t(e,"network-request-failed"))},timeout:bS.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const a=DE("iframefcb");return Et()[a]=()=>{gapi.load?o():n(_t(e,"network-request-failed"))},Ym(`${xE()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw ao=null,t})}let ao=null;function KS(e){return ao=ao||WS(e),ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new os(5e3,15e3),qS="__/auth/iframe",XS="emulator/auth/iframe",YS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QS(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gc(t,XS):`https://${e.config.authDomain}/${qS}`,r={apiKey:t.apiKey,appName:e.name,v:jr},i=JS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ss(r).slice(1)}`}async function ZS(e){const t=await KS(e),n=Et().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:QS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(e,"network-request-failed"),a=Et().setTimeout(()=>{s(o)},GS.get());function l(){Et().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tI=500,nI=600,rI="_blank",iI="http://localhost";class vf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sI(e,t,n,r=tI,i=nI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(a=Hm(u)?rI:n),Vm(u)&&(t=t||iI,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[m,y])=>`${g}${m}=${y},`,"");if(IE(u)&&a!=="_self")return oI(t||"",a),new vf(null);const h=window.open(t||"",a,c);O(h,e,"popup-blocked");try{h.focus()}catch{}return new vf(h)}function oI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="__/auth/handler",lI="emulator/auth/handler",uI=encodeURIComponent("fac");async function yf(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(t instanceof Qm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Kw(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof ls){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${uI}=${encodeURIComponent(l)}`:"";return`${cI(e)}?${ss(a).slice(1)}${u}`}function cI({config:e}){return e.emulator?Gc(e,lI):`https://${e.authDomain}/${aI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="webStorageSupport";class dI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=MS,this._overrideRedirectResult=LS}async _openPopup(t,n,r,i){var s;Ft((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yf(t,n,r,Ru(),i);return sI(t,o,Qc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await yf(t,n,r,Ru(),i);return pS(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ZS(t),r=new US(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(wl,{type:wl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wl];o!==void 0&&n(!!o),ut(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return qm()||Xc()||ga()}}const hI=dI;var wf="@firebase/auth",_f="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gI(e){St(new lt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xm(e)},u=new NE(r,i,s,l);return jE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),St(new lt("auth-internal",t=>{const n=Jn(t.getProvider("auth").getImmediate());return(r=>new fI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(wf,_f,pI(e)),Ye(wf,_f,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=5*60,vI=Im("authIdTokenMaxAge")||mI;let Ef=null;const yI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vI)return;const i=n==null?void 0:n.token;Ef!==i&&(Ef=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wI(e=bc()){const t=Yn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=FE(e,{popupRedirectResolver:hI,persistence:[IS,dS,sv]}),r=Im("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yI(s.toString());sS(n,o,()=>o(n.currentUser)),iS(n,a=>o(a))}}const i=Em("auth");return i&&zE(n,`http://${i}`),n}function _I(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}OE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_I().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gI("Browser");var EI="firebase",SI="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(EI,SI,"app");const hv="@firebase/installations",ed="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=1e4,pv=`w:${ed}`,gv="FIS_v2",II="https://firebaseinstallations.googleapis.com/v1",TI=60*60*1e3,kI="installations",CI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wn=new Xn(kI,CI,PI);function mv(e){return e instanceof ct&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv({projectId:e}){return`${II}/projects/${e}/installations`}function yv(e){return{token:e.token,requestStatus:2,expiresIn:AI(e.expiresIn),creationTime:Date.now()}}async function wv(e,t){const r=(await t.json()).error;return Wn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _v({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function RI(e,{refreshToken:t}){const n=_v(e);return n.append("Authorization",NI(t)),n}async function Ev(e){const t=await e();return t.status>=500&&t.status<600?e():t}function AI(e){return Number(e.replace("s","000"))}function NI(e){return`${gv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=vv(e),i=_v(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:gv,appId:e.appId,sdkVersion:pv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ev(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:yv(u.authToken)}}else throw await wv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=/^[cdef][\w-]{21}$/,Lu="";function DI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=MI(e);return xI.test(n)?n:Lu}catch{return Lu}}function MI(e){return LI(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new Map;function Tv(e,t){const n=wa(e);kv(n,t),$I(n,t)}function kv(e,t){const n=Iv.get(e);if(n)for(const r of n)r(t)}function $I(e,t){const n=UI();n&&n.postMessage({key:e,fid:t}),FI()}let On=null;function UI(){return!On&&"BroadcastChannel"in self&&(On=new BroadcastChannel("[Firebase] FID Change"),On.onmessage=e=>{kv(e.data.key,e.data.fid)}),On}function FI(){Iv.size===0&&On&&(On.close(),On=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="firebase-installations-database",zI=1,Kn="firebase-installations-store";let _l=null;function td(){return _l||(_l=Am(jI,zI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Kn)}}})),_l}async function Bo(e,t){const n=wa(e),i=(await td()).transaction(Kn,"readwrite"),s=i.objectStore(Kn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Tv(e,t.fid),t}async function Cv(e){const t=wa(e),r=(await td()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(t),await r.done}async function _a(e,t){const n=wa(e),i=(await td()).transaction(Kn,"readwrite"),s=i.objectStore(Kn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Tv(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(e){let t;const n=await _a(e.appConfig,r=>{const i=BI(r),s=VI(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Lu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function BI(e){const t=e||{fid:DI(),registrationStatus:0};return Pv(t)}function VI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=HI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:bI(e)}:{installationEntry:t}}async function HI(e,t){try{const n=await OI(e,t);return Bo(e.appConfig,n)}catch(n){throw mv(n)&&n.customData.serverCode===409?await Cv(e.appConfig):await Bo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function bI(e){let t=await Sf(e.appConfig);for(;t.registrationStatus===1;)await Sv(100),t=await Sf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nd(e);return r||n}return t}function Sf(e){return _a(e,t=>{if(!t)throw Wn.create("installation-not-found");return Pv(t)})}function Pv(e){return WI(e)?{fid:e.fid,registrationStatus:0}:e}function WI(e){return e.registrationStatus===1&&e.registrationTime+fv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI({appConfig:e,heartbeatServiceProvider:t},n){const r=GI(e,n),i=RI(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:pv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ev(()=>fetch(r,a));if(l.ok){const u=await l.json();return yv(u)}else throw await wv("Generate Auth Token",l)}function GI(e,{fid:t}){return`${vv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(e,t=!1){let n;const r=await _a(e.appConfig,s=>{if(!Rv(s))throw Wn.create("not-registered");const o=s.authToken;if(!t&&YI(o))return s;if(o.requestStatus===1)return n=qI(e,t),s;{if(!navigator.onLine)throw Wn.create("app-offline");const a=QI(s);return n=XI(e,a),a}});return n?await n:r.authToken}async function qI(e,t){let n=await If(e.appConfig);for(;n.authToken.requestStatus===1;)await Sv(100),n=await If(e.appConfig);const r=n.authToken;return r.requestStatus===0?rd(e,t):r}function If(e){return _a(e,t=>{if(!Rv(t))throw Wn.create("not-registered");const n=t.authToken;return ZI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function XI(e,t){try{const n=await KI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Bo(e.appConfig,r),n}catch(n){if(mv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Bo(e.appConfig,r)}throw n}}function Rv(e){return e!==void 0&&e.registrationStatus===2}function YI(e){return e.requestStatus===2&&!JI(e)}function JI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+TI}function QI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ZI(e){return e.requestStatus===1&&e.requestTime+fv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(e){const t=e,{installationEntry:n,registrationPromise:r}=await nd(t);return r?r.catch(console.error):rd(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(e,t=!1){const n=e;return await nT(n),(await rd(n,t)).token}async function nT(e){const{registrationPromise:t}=await nd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(e){if(!e||!e.options)throw El("App Configuration");if(!e.name)throw El("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw El(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function El(e){return Wn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="installations",iT="installations-internal",sT=e=>{const t=e.getProvider("app").getImmediate(),n=rT(t),r=Yn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oT=e=>{const t=e.getProvider("app").getImmediate(),n=Yn(t,Av).getImmediate();return{getId:()=>eT(n),getToken:i=>tT(n,i)}};function aT(){St(new lt(Av,sT,"PUBLIC")),St(new lt(iT,oT,"PRIVATE"))}aT();Ye(hv,ed);Ye(hv,ed,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="analytics",lT="firebase_id",uT="origin",cT=60*1e3,dT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",id="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new pa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new Xn("analytics","Analytics",hT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(e){if(!e.startsWith(id)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return Me.warn(t.message),""}return e}function Nv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function pT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function gT(e,t){const n=pT("firebase-js-sdk-policy",{createScriptURL:fT}),r=document.createElement("script"),i=`${id}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function mT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function vT(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Nv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Me.error(a)}e("config",i,s)}async function yT(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Nv(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Me.error(s)}}function wT(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await yT(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await vT(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Me.error(a)}}return i}function _T(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=wT(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function ET(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(id)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=30,IT=1e3;class TT{constructor(t={},n=IT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ov=new TT;function kT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function CT(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:kT(r)},s=dT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function PT(e,t=Ov,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new NT;return setTimeout(async()=>{a.abort()},n!==void 0?n:cT),Lv({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Lv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ov){var s;const{appId:o,measurementId:a}=e;try{await RT(r,t)}catch(l){if(a)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await CT(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!AT(u)){if(i.deleteThrottleMetadata(o),a)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Gh(n,i.intervalMillis,ST):Gh(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),Me.debug(`Calling attemptFetch again in ${c} millis`),Lv(e,h,r,i)}}function RT(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function AT(e){if(!(e instanceof ct)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class NT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function OT(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(){if(km())try{await Cm()}catch(e){return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xT(e,t,n,r,i,s,o){var a;const l=PT(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Me.error(m)),t.push(l);const u=LT().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);ET(s)||gT(s,c.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[uT]="firebase",g.update=!0,h!=null&&(g[lT]=h),i("config",c.measurementId,g),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t){this.app=t}_delete(){return delete Ei[this.app.options.appId],Promise.resolve()}}let Ei={},Tf=[];const kf={};let Sl="dataLayer",MT="gtag",Cf,xv,Pf=!1;function $T(){const e=[];if(Tm()&&e.push("This is a browser extension environment."),Vw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});Me.warn(n.message)}}function UT(e,t,n){$T();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(Ei[r]!=null)throw Be.create("already-exists",{id:r});if(!Pf){mT(Sl);const{wrappedGtag:s,gtagCore:o}=_T(Ei,Tf,kf,Sl,MT);xv=s,Cf=o,Pf=!0}return Ei[r]=xT(e,Tf,kf,t,Cf,Sl,n),new DT(e)}function FT(e=bc()){e=et(e);const t=Yn(e,Vo);return t.isInitialized()?t.getImmediate():jT(e)}function jT(e,t={}){const n=Yn(e,Vo);if(n.isInitialized()){const i=n.getImmediate();if(zi(t,n.getOptions()))return i;throw Be.create("already-initialized")}return n.initialize({options:t})}function zT(e,t,n,r){e=et(e),OT(xv,Ei[e.app.options.appId],t,n,r).catch(i=>Me.error(i))}const Rf="@firebase/analytics",Af="0.10.2";function BT(){St(new lt(Vo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return UT(r,i,n)},"PUBLIC")),St(new lt("analytics-internal",e,"PRIVATE")),Ye(Rf,Af),Ye(Rf,Af,"esm2017");function e(t){try{const n=t.getProvider(Vo).getImmediate();return{logEvent:(r,i,s)=>zT(n,r,i,s)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}BT();var VT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,sd=sd||{},L=VT||self;function Ea(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function cs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function HT(e){return Object.prototype.hasOwnProperty.call(e,Il)&&e[Il]||(e[Il]=++bT)}var Il="closure_uid_"+(1e9*Math.random()>>>0),bT=0;function WT(e,t,n){return e.call.apply(e.bind,arguments)}function KT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ee(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=WT:Ee=KT,Ee.apply(null,arguments)}function Bs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ue(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function wn(){this.s=this.s,this.o=this.o}var GT=0;wn.prototype.s=!1;wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),GT!=0)&&HT(this)};wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function od(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Nf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ea(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Se(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var qT=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};L.addEventListener("test",n,t),L.removeEventListener("test",n,t)}catch{}return e}();function Hi(e){return/^[\s\xa0]*$/.test(e)}function Sa(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return Sa().indexOf(e)!=-1}function ad(e){return ad[" "](e),e}ad[" "]=function(){};function XT(e,t){var n=Vk;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var YT=pt("Opera"),bi=pt("Trident")||pt("MSIE"),Mv=pt("Edge"),xu=Mv||bi,$v=pt("Gecko")&&!(Sa().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),JT=Sa().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function Uv(){var e=L.document;return e?e.documentMode:void 0}e:{var Of="",Tl=function(){var e=Sa();if($v)return/rv:([^\);]+)(\)|;)/.exec(e);if(Mv)return/Edge\/([\d\.]+)/.exec(e);if(bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(JT)return/WebKit\/(\S+)/.exec(e);if(YT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Tl&&(Of=Tl?Tl[1]:""),bi){var Lf=Uv();if(Lf!=null&&Lf>parseFloat(Of))break e}}L.document&&bi&&Uv();function Wi(e,t){if(Se.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($v){e:{try{ad(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:QT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wi.$.h.call(this)}}ue(Wi,Se);var QT={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ds="closure_listenable_"+(1e6*Math.random()|0),ZT=0;function ek(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ZT,this.fa=this.ia=!1}function Ia(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ld(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function tk(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Fv(e){const t={};for(const n in e)t[n]=e[n];return t}const xf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<xf.length;s++)n=xf[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ta(e){this.src=e,this.g={},this.h=0}Ta.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Mu(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ek(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Du(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Dv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ia(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Mu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ud="closure_lm_"+(1e6*Math.random()|0),kl={};function zv(e,t,n,r,i){if(r&&r.once)return Vv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)zv(e,t[s],n,r,i);return null}return n=hd(n),e&&e[ds]?e.O(t,n,cs(r)?!!r.capture:!!r,i):Bv(e,t,n,!1,r,i)}function Bv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=cs(i)?!!i.capture:!!i,a=dd(e);if(a||(e[ud]=a=new Ta(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=nk(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)qT||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(bv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nk(){function e(n){return t.call(e.src,e.listener,n)}const t=rk;return e}function Vv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Vv(e,t[s],n,r,i);return null}return n=hd(n),e&&e[ds]?e.P(t,n,cs(r)?!!r.capture:!!r,i):Bv(e,t,n,!0,r,i)}function Hv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Hv(e,t[s],n,r,i);else r=cs(r)?!!r.capture:!!r,n=hd(n),e&&e[ds]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Mu(s,n,r,i),-1<n&&(Ia(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=dd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Mu(t,n,r,i)),(n=-1<e?t[e]:null)&&cd(n))}function cd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ds])Du(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(bv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=dd(t))?(Du(n,e),n.h==0&&(n.src=null,t[ud]=null)):Ia(e)}}}function bv(e){return e in kl?kl[e]:kl[e]="on"+e}function rk(e,t){if(e.fa)e=!0;else{t=new Wi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&cd(e),e=n.call(r,t)}return e}function dd(e){return e=e[ud],e instanceof Ta?e:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function hd(e){return typeof e=="function"?e:(e[Cl]||(e[Cl]=function(t){return e.handleEvent(t)}),e[Cl])}function le(){wn.call(this),this.i=new Ta(this),this.S=this,this.J=null}ue(le,wn);le.prototype[ds]=!0;le.prototype.removeEventListener=function(e,t,n,r){Hv(this,e,t,n,r)};function fe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Se(t,e);else if(t instanceof Se)t.target=t.target||e;else{var i=t;t=new Se(r,e),jv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Vs(o,r,!0,t)&&i}if(o=t.g=e,i=Vs(o,r,!0,t)&&i,i=Vs(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Vs(o,r,!1,t)&&i}le.prototype.N=function(){if(le.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ia(n[r]);delete e.g[t],e.h--}}this.J=null};le.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};le.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Vs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Du(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var fd=L.JSON.stringify;class ik{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function sk(){var e=pd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ok{constructor(){this.h=this.g=null}add(t,n){const r=Wv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Wv=new ik(()=>new ak,e=>e.reset());class ak{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lk(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function uk(e){L.setTimeout(()=>{throw e},0)}let Ki,Gi=!1,pd=new ok,Kv=()=>{const e=L.Promise.resolve(void 0);Ki=()=>{e.then(ck)}};var ck=()=>{for(var e;e=sk();){try{e.h.call(e.g)}catch(n){uk(n)}var t=Wv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gi=!1};function ka(e,t){le.call(this),this.h=e||1,this.g=t||L,this.j=Ee(this.qb,this),this.l=Date.now()}ue(ka,le);T=ka.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(gd(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}T.N=function(){ka.$.N.call(this),gd(this),delete this.g};function md(e,t,n){if(typeof e=="function")n&&(e=Ee(e,n));else if(e&&typeof e.handleEvent=="function")e=Ee(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Gv(e){e.g=md(()=>{e.g=null,e.i&&(e.i=!1,Gv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dk extends wn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gv(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(e){wn.call(this),this.h=e,this.g={}}ue(qi,wn);var Df=[];function qv(e,t,n,r){Array.isArray(n)||(n&&(Df[0]=n.toString()),n=Df);for(var i=0;i<n.length;i++){var s=zv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Xv(e){ld(e.g,function(t,n){this.g.hasOwnProperty(n)&&cd(t)},e),e.g={}}qi.prototype.N=function(){qi.$.N.call(this),Xv(this)};qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ca(){this.g=!0}Ca.prototype.Ea=function(){this.g=!1};function hk(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function fk(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function pr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+gk(e,n)+(r?" "+r:"")})}function pk(e,t){e.info(function(){return"TIMEOUT: "+t})}Ca.prototype.info=function(){};function gk(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fd(n)}catch{return t}}var Br={},Mf=null;function vd(){return Mf=Mf||new le}Br.Ta="serverreachability";function Yv(e){Se.call(this,Br.Ta,e)}ue(Yv,Se);function Xi(e){const t=vd();fe(t,new Yv(t))}Br.STAT_EVENT="statevent";function Jv(e,t){Se.call(this,Br.STAT_EVENT,e),this.stat=t}ue(Jv,Se);function Ce(e){const t=vd();fe(t,new Jv(t,e))}Br.Ua="timingevent";function Qv(e,t){Se.call(this,Br.Ua,e),this.size=t}ue(Qv,Se);function hs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var yd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wd(){}wd.prototype.h=null;function $f(e){return e.h||(e.h=e.i())}function vk(){}var fs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _d(){Se.call(this,"d")}ue(_d,Se);function Ed(){Se.call(this,"c")}ue(Ed,Se);var $u;function Pa(){}ue(Pa,wd);Pa.prototype.g=function(){return new XMLHttpRequest};Pa.prototype.i=function(){return{}};$u=new Pa;function ps(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new qi(this),this.P=yk,e=xu?125:void 0,this.V=new ka(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zv}function Zv(){this.i=null,this.g="",this.h=!1}var yk=45e3,ey={},Uu={};T=ps.prototype;T.setTimeout=function(e){this.P=e};function Fu(e,t,n){e.L=1,e.A=Aa(jt(t)),e.u=n,e.S=!0,ty(e,null)}function ty(e,t){e.G=Date.now(),gs(e),e.B=jt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),uy(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Zv,e.g=Ny(e.l,n?t:null,!e.u),0<e.O&&(e.M=new dk(Ee(e.Pa,e,e.g),e.O)),qv(e.U,e.g,"readystatechange",e.nb),t=e.I?Fv(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Xi(),hk(e.j,e.v,e.B,e.m,e.W,e.u)}T.nb=function(e){e=e.target;const t=this.M;t&&mt(e)==3?t.l():this.Pa(e)};T.Pa=function(e){try{if(e==this.g)e:{const c=mt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||xu||this.g&&(this.h.h||this.g.ja()||zf(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Xi(3):Xi(2)),Ra(this);var n=this.g.da();this.ca=n;t:if(ny(this)){var r=zf(this.g);e="";var i=r.length,s=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Si(this);var o="";break t}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fk(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hi(a)){var u=a;break t}}u=null}if(n=u)pr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ju(this,n);else{this.i=!1,this.s=3,Ce(12),Ln(this),Si(this);break e}}this.S?(ry(this,c,o),xu&&this.i&&c==3&&(qv(this.U,this.V,"tick",this.mb),this.V.start())):(pr(this.j,this.m,o,null),ju(this,o)),c==4&&Ln(this),this.i&&!this.J&&(c==4?Cy(this.l,this):(this.i=!1,gs(this)))}else jk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Ln(this),Si(this)}}}catch{}finally{}};function ny(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function ry(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=wk(e,n),i==Uu){t==4&&(e.s=4,Ce(14),r=!1),pr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ey){e.s=4,Ce(15),pr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else pr(e.j,e.m,i,null),ju(e,i);ny(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Ce(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pd(t),t.M=!0,Ce(11))):(pr(e.j,e.m,n,"[Invalid Chunked Response]"),Ln(e),Si(e))}T.mb=function(){if(this.g){var e=mt(this.g),t=this.g.ja();this.o<t.length&&(Ra(this),ry(this,e,t),this.i&&e!=4&&gs(this))}};function wk(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Uu:(n=Number(t.substring(n,r)),isNaN(n)?ey:(r+=1,r+n>t.length?Uu:(t=t.slice(r,r+n),e.o=r+n,t)))}T.cancel=function(){this.J=!0,Ln(this)};function gs(e){e.Y=Date.now()+e.P,iy(e,e.P)}function iy(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=hs(Ee(e.lb,e),t)}function Ra(e){e.C&&(L.clearTimeout(e.C),e.C=null)}T.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(pk(this.j,this.B),this.L!=2&&(Xi(),Ce(17)),Ln(this),this.s=2,Si(this)):iy(this,this.Y-e)};function Si(e){e.l.H==0||e.J||Cy(e.l,e)}function Ln(e){Ra(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,gd(e.V),Xv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ju(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||zu(n.i,e))){if(!e.K&&zu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Wo(n),xa(n);else break e;Cd(n),Ce(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=hs(Ee(n.ib,n),6e3));if(1>=hy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xn(n,11)}else if((e.K||n.g==e)&&Wo(n),!Hi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sd(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,W(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ay(r,r.J?r.pa:null,r.Y),o.K){fy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ra(a),gs(a)),r.g=o}else Ty(r);0<n.j.length&&Da(n)}else u[0]!="stop"&&u[0]!="close"||xn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?xn(n,7):kd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Xi(4)}catch{}}function _k(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ea(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ek(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ea(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function sy(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ea(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ek(e),r=_k(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var oy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sk(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $n(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $n){this.h=e.h,Ho(this,e.j),this.s=e.s,this.g=e.g,bo(this,e.m),this.l=e.l;var t=e.i,n=new Yi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Uf(this,n),this.o=e.o}else e&&(t=String(e).match(oy))?(this.h=!1,Ho(this,t[1]||"",!0),this.s=ui(t[2]||""),this.g=ui(t[3]||"",!0),bo(this,t[4]),this.l=ui(t[5]||"",!0),Uf(this,t[6]||"",!0),this.o=ui(t[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}$n.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ci(t,Ff,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ci(t,Ff,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ci(n,n.charAt(0)=="/"?kk:Tk,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ci(n,Pk)),e.join("")};function jt(e){return new $n(e)}function Ho(e,t,n){e.j=n?ui(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function bo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Uf(e,t,n){t instanceof Yi?(e.i=t,Rk(e.i,e.h)):(n||(t=ci(t,Ck)),e.i=new Yi(t,e.h))}function W(e,t,n){e.i.set(t,n)}function Aa(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ui(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ci(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ik),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ik(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ff=/[#\/\?@]/g,Tk=/[#\?:]/g,kk=/[#\?]/g,Ck=/[#\?@]/g,Pk=/#/g;function Yi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _n(e){e.g||(e.g=new Map,e.h=0,e.i&&Sk(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}T=Yi.prototype;T.add=function(e,t){_n(this),this.i=null,e=Vr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ay(e,t){_n(e),t=Vr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ly(e,t){return _n(e),t=Vr(e,t),e.g.has(t)}T.forEach=function(e,t){_n(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};T.ta=function(){_n(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};T.Z=function(e){_n(this);let t=[];if(typeof e=="string")ly(this,e)&&(t=t.concat(this.g.get(Vr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};T.set=function(e,t){return _n(this),this.i=null,e=Vr(this,e),ly(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};T.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function uy(e,t,n){ay(e,t),0<n.length&&(e.i=null,e.g.set(Vr(e,t),od(n)),e.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Vr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Rk(e,t){t&&!e.j&&(_n(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ay(this,r),uy(this,i,n))},e)),e.j=t}var Ak=class{constructor(e,t){this.g=e,this.map=t}};function cy(e){this.l=e||Nk,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Nk=10;function dy(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function hy(e){return e.h?1:e.g?e.g.size:0}function zu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Sd(e,t){e.g?e.g.add(t):e.h=t}function fy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}cy.prototype.cancel=function(){if(this.i=py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function py(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return od(e.i)}var Ok=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function Lk(){this.g=new Ok}function xk(e,t,n){const r=n||"";try{sy(e,function(i,s){let o=i;cs(i)&&(o=fd(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Dk(e,t){const n=new Ca;if(L.Image){const r=new Image;r.onload=Bs(Hs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Bs(Hs,n,r,"TestLoadImage: error",!1,t),r.onabort=Bs(Hs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Bs(Hs,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Hs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Na(e){this.l=e.ec||null,this.j=e.ob||!1}ue(Na,wd);Na.prototype.g=function(){return new Oa(this.l,this.j)};Na.prototype.i=function(e){return function(){return e}}({});function Oa(e,t){le.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Id,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ue(Oa,le);var Id=0;T=Oa.prototype;T.open=function(e,t){if(this.readyState!=Id)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ji(this)};T.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ms(this)),this.readyState=Id};T.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gy(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function gy(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}T.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ms(this):Ji(this),this.readyState==3&&gy(this)}};T.Za=function(e){this.g&&(this.response=this.responseText=e,ms(this))};T.Ya=function(e){this.g&&(this.response=e,ms(this))};T.ka=function(){this.g&&ms(this)};function ms(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ji(e)}T.setRequestHeader=function(e,t){this.v.append(e,t)};T.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ji(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Mk=L.JSON.parse;function te(e){le.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=my,this.L=this.M=!1}ue(te,le);var my="",$k=/^https?$/i,Uk=["POST","PUT"];T=te.prototype;T.Oa=function(e){this.M=e};T.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$u.g(),this.C=this.u?$f(this.u):$f($u),this.g.onreadystatechange=Ee(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){jf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=Dv(Uk,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wy(this),0<this.B&&((this.L=Fk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.ua,this)):this.A=md(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){jf(this,s)}};function Fk(e){return bi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}T.ua=function(){typeof sd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function jf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vy(e),La(e)}function vy(e){e.F||(e.F=!0,fe(e,"complete"),fe(e,"error"))}T.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,fe(this,"complete"),fe(this,"abort"),La(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),La(this,!0)),te.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?yy(this):this.kb())};T.kb=function(){yy(this)};function yy(e){if(e.h&&typeof sd<"u"&&(!e.C[1]||mt(e)!=4||e.da()!=2)){if(e.v&&mt(e)==4)md(e.La,0,e);else if(fe(e,"readystatechange"),mt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(oy)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!$k.test(i?i.toLowerCase():"")}n=r}if(n)fe(e,"complete"),fe(e,"success");else{e.m=6;try{var s=2<mt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",vy(e)}}finally{La(e)}}}}function La(e,t){if(e.g){wy(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||fe(e,"ready");try{n.onreadystatechange=r}catch{}}}function wy(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}T.isActive=function(){return!!this.g};function mt(e){return e.g?e.g.readyState:0}T.da=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Mk(t)}};function zf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case my:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function jk(e){const t={};e=(e.g&&2<=mt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Hi(e[r]))continue;var n=lk(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}tk(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _y(e){let t="";return ld(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Td(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_y(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function ti(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ey(e){this.Ga=0,this.j=[],this.l=new Ca,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ti("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ti("baseRetryDelayMs",5e3,e),this.hb=ti("retryDelaySeedMs",1e4,e),this.eb=ti("forwardChannelMaxRetries",2,e),this.xa=ti("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cy(e&&e.concurrentRequestLimit),this.Ja=new Lk,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=Ey.prototype;T.ra=8;T.H=1;function kd(e){if(Sy(e),e.H==3){var t=e.W++,n=jt(e.I);if(W(n,"SID",e.K),W(n,"RID",t),W(n,"TYPE","terminate"),vs(e,n),t=new ps(e,e.l,t),t.L=2,t.A=Aa(jt(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.A,n=!0),n||(t.g=Ny(t.l,null),t.g.ha(t.A)),t.G=Date.now(),gs(t)}Ry(e)}function xa(e){e.g&&(Pd(e),e.g.cancel(),e.g=null)}function Sy(e){xa(e),e.u&&(L.clearTimeout(e.u),e.u=null),Wo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function Da(e){if(!dy(e.i)&&!e.m){e.m=!0;var t=e.Na;Ki||Kv(),Gi||(Ki(),Gi=!0),pd.add(t,e),e.C=0}}function zk(e,t){return hy(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=hs(Ee(e.Na,e,t),Py(e,e.C)),e.C++,!0)}T.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ps(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Fv(s),jv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Iy(this,i,t),n=jt(this.I),W(n,"RID",e),W(n,"CVER",22),this.F&&W(n,"X-HTTP-Session-Id",this.F),vs(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(_y(s)))+"&"+t:this.o&&Td(n,this.o,s)),Sd(this.i,i),this.bb&&W(n,"TYPE","init"),this.P?(W(n,"$req",t),W(n,"SID","null"),i.aa=!0,Fu(i,n,null)):Fu(i,n,t),this.H=2}}else this.H==3&&(e?Bf(this,e):this.j.length==0||dy(this.i)||Bf(this))};function Bf(e,t){var n;t?n=t.m:n=e.W++;const r=jt(e.I);W(r,"SID",e.K),W(r,"RID",n),W(r,"AID",e.V),vs(e,r),e.o&&e.s&&Td(r,e.o,e.s),n=new ps(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Iy(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Sd(e.i,n),Fu(n,r,t)}function vs(e,t){e.na&&ld(e.na,function(n,r){W(t,r,n)}),e.h&&sy({},function(n,r){W(t,r,n)})}function Iy(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ee(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{xk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Ty(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ki||Kv(),Gi||(Ki(),Gi=!0),pd.add(t,e),e.A=0}}function Cd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=hs(Ee(e.Ma,e),Py(e,e.A)),e.A++,!0)}T.Ma=function(){if(this.u=null,ky(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=hs(Ee(this.jb,this),e)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ce(10),xa(this),ky(this))};function Pd(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function ky(e){e.g=new ps(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=jt(e.wa);W(t,"RID","rpc"),W(t,"SID",e.K),W(t,"AID",e.V),W(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&W(t,"TO",e.qa),W(t,"TYPE","xmlhttp"),vs(e,t),e.o&&e.s&&Td(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Aa(jt(t)),n.u=null,n.S=!0,ty(n,e)}T.ib=function(){this.v!=null&&(this.v=null,xa(this),Cd(this),Ce(19))};function Wo(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function Cy(e,t){var n=null;if(e.g==t){Wo(e),Pd(e),e.g=null;var r=2}else if(zu(e.i,t))n=t.F,fy(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=vd(),fe(r,new Qv(r,n)),Da(e)}else Ty(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&zk(e,t)||r==2&&Cd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:xn(e,5);break;case 4:xn(e,10);break;case 3:xn(e,6);break;default:xn(e,2)}}}function Py(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function xn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ee(e.pb,e);n||(n=new $n("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Ho(n,"https"),Aa(n)),Dk(n.toString(),r)}else Ce(2);e.H=0,e.h&&e.h.za(t),Ry(e),Sy(e)}T.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ce(2)):(this.l.info("Failed to ping google.com"),Ce(1))};function Ry(e){if(e.H=0,e.ma=[],e.h){const t=py(e.i);(t.length!=0||e.j.length!=0)&&(Nf(e.ma,t),Nf(e.ma,e.j),e.i.i.length=0,od(e.j),e.j.length=0),e.h.ya()}}function Ay(e,t,n){var r=n instanceof $n?jt(n):new $n(n);if(r.g!="")t&&(r.g=t+"."+r.g),bo(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $n(null);r&&Ho(s,r),t&&(s.g=t),i&&bo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&W(r,n,t),W(r,"VER",e.ra),vs(e,r),r}function Ny(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new te(new Na({ob:n})):new te(e.va),t.Oa(e.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function Oy(){}T=Oy.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function Ze(e,t){le.call(this),this.g=new Ey(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Hi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Hr(this)}ue(Ze,le);Ze.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ce(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ay(e,null,e.Y),Da(e)};Ze.prototype.close=function(){kd(this.g)};Ze.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=fd(e),e=n);t.j.push(new Ak(t.fb++,e)),t.H==3&&Da(t)};Ze.prototype.N=function(){this.g.h=null,delete this.j,kd(this.g),delete this.g,Ze.$.N.call(this)};function Ly(e){_d.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ue(Ly,_d);function xy(){Ed.call(this),this.status=1}ue(xy,Ed);function Hr(e){this.g=e}ue(Hr,Oy);Hr.prototype.Ba=function(){fe(this.g,"a")};Hr.prototype.Aa=function(e){fe(this.g,new Ly(e))};Hr.prototype.za=function(e){fe(this.g,new xy)};Hr.prototype.ya=function(){fe(this.g,"b")};function Bk(){this.blockSize=-1}function It(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ue(It,Bk);It.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}It.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Pl(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Pl(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Pl(this,r),i=0;break}}this.h=i,this.i+=t};It.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function B(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Vk={};function Rd(e){return-128<=e&&128>e?XT(e,function(t){return new B([t|0],0>t?-1:0)}):new B([e|0],0>e?-1:0)}function vt(e){if(isNaN(e)||!isFinite(e))return Tr;if(0>e)return de(vt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Bu;return new B(t,0)}function Dy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return de(Dy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vt(Math.pow(t,8)),r=Tr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=vt(Math.pow(t,s)),r=r.R(s).add(vt(o))):(r=r.R(n),r=r.add(vt(o)))}return r}var Bu=4294967296,Tr=Rd(0),Vu=Rd(1),Vf=Rd(16777216);T=B.prototype;T.ea=function(){if(Ge(this))return-de(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Bu+r)*t,t*=Bu}return e};T.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ot(this))return"0";if(Ge(this))return"-"+de(this).toString(e);for(var t=vt(Math.pow(e,6)),n=this,r="";;){var i=Go(n,t).g;n=Ko(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ot(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};T.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ot(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ge(e){return e.h==-1}T.X=function(e){return e=Ko(this,e),Ge(e)?-1:Ot(e)?0:1};function de(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new B(n,~e.h).add(Vu)}T.abs=function(){return Ge(this)?de(this):this};T.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new B(n,n[n.length-1]&-2147483648?-1:0)};function Ko(e,t){return e.add(de(t))}T.R=function(e){if(Ot(this)||Ot(e))return Tr;if(Ge(this))return Ge(e)?de(this).R(de(e)):de(de(this).R(e));if(Ge(e))return de(this.R(de(e)));if(0>this.X(Vf)&&0>e.X(Vf))return vt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,bs(n,2*r+2*i),n[2*r+2*i+1]+=s*l,bs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,bs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,bs(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new B(n,0)};function bs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ni(e,t){this.g=e,this.h=t}function Go(e,t){if(Ot(t))throw Error("division by zero");if(Ot(e))return new ni(Tr,Tr);if(Ge(e))return t=Go(de(e),t),new ni(de(t.g),de(t.h));if(Ge(t))return t=Go(e,de(t)),new ni(de(t.g),t.h);if(30<e.g.length){if(Ge(e)||Ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Vu,r=t;0>=r.X(e);)n=Hf(n),r=Hf(r);var i=er(n,1),s=er(r,1);for(r=er(r,2),n=er(n,2);!Ot(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=er(r,1),n=er(n,1)}return t=Ko(e,i.R(t)),new ni(i,t)}for(i=Tr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=vt(n),o=s.R(t);Ge(o)||0<o.X(e);)n-=r,s=vt(n),o=s.R(t);Ot(s)&&(s=Vu),i=i.add(s),e=Ko(e,o)}return new ni(i,e)}T.gb=function(e){return Go(this,e).h};T.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new B(n,this.h&e.h)};T.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new B(n,this.h|e.h)};T.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new B(n,this.h^e.h)};function Hf(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new B(n,e.h)}function er(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new B(i,e.h)}Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;yd.NO_ERROR=0;yd.TIMEOUT=8;yd.HTTP_ERROR=6;mk.COMPLETE="complete";vk.EventType=fs;fs.OPEN="a";fs.CLOSE="b";fs.ERROR="c";fs.MESSAGE="d";le.prototype.listen=le.prototype.O;te.prototype.listenOnce=te.prototype.P;te.prototype.getLastError=te.prototype.Sa;te.prototype.getLastErrorCode=te.prototype.Ia;te.prototype.getStatus=te.prototype.da;te.prototype.getResponseJson=te.prototype.Wa;te.prototype.getResponseText=te.prototype.ja;te.prototype.send=te.prototype.ha;te.prototype.setWithCredentials=te.prototype.Oa;It.prototype.digest=It.prototype.l;It.prototype.reset=It.prototype.reset;It.prototype.update=It.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=vt;B.fromString=Dy;var Hk=B;const bf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new pa("@firebase/firestore");function je(e,...t){if(Dr.logLevel<=j.DEBUG){const n=t.map(Nd);Dr.debug(`Firestore (${ys}): ${e}`,...n)}}function Ad(e,...t){if(Dr.logLevel<=j.ERROR){const n=t.map(Nd);Dr.error(`Firestore (${ys}): ${e}`,...n)}}function bk(e,...t){if(Dr.logLevel<=j.WARN){const n=t.map(Nd);Dr.warn(`Firestore (${ys}): ${e}`,...n)}}function Nd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e="Unexpected state"){const t=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+e;throw Ad(t),new Error(t)}function Hu(e,t){e||Od()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ve.UNAUTHENTICATED))}shutdown(){}}class Kk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gk{constructor(t){this.t=t,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Hu(typeof r.accessToken=="string"),new My(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Hu(t===null||typeof t=="string"),new ve(t)}}class qk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new qk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,je("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Hu(typeof n.token=="string"),this.R=n.token,new Yk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Qk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function $y(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wf,U;(U=Wf||(Wf={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Hk([4294967295,4294967295],0);function Rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&je("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),t())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Ld(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(we.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nC(e,t){if(Ad("AsyncQueue",`${t}: ${e}`),$y(e))return new _e(we.UNAVAILABLE,`${t}: ${e}`);throw e}var Kf,Gf;(Gf=Kf||(Kf={})).J_="default",Gf.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=Zk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{je("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(je("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _e(we.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=nC(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map;function iC(e,t,n,r){if(t===!0&&r===!0)throw new _e(we.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Od()}function oC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _e(we.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sC(e);throw new _e(we.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _e(we.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _e(we.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}iC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _e(we.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _e(we.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wk;switch(r.type){case"firstParty":return new Xk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _e(we.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qf.get(n);r&&(je("ComponentProvider","Removing Datastore"),qf.delete(n),r.terminate())}(this),Promise.resolve()}}function aC(e,t,n,r={}){var i;const s=(e=oC(e,Fy))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ve.MOCK_USER;else{a=Fw(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _e(we.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ve(u)}e._authCredentials=new Kk(new My(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new tC(this,"async_queue_retry"),this.hu=()=>{const n=Rl();n&&je("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const t=Rl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=Rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new kr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!$y(t))throw t;je("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ad("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=Ld.createAndSchedule(this,t,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Od()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class uC extends Fy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new lC}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dC(this),this._firestoreClient.terminate()}}function cC(e,t){const n=typeof e=="object"?e:bc(),r=typeof e=="string"?e:t||"(default)",i=Yn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$w("firestore");s&&aC(i,...s)}return i}function dC(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new eC(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Uy(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new rC(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){ys=i})(jr),St(new lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new uC(new Gk(r.getProvider("auth-internal")),new Jk(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _e(we.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ye(bf,"4.6.1",t),Ye(bf,"4.6.1","esm2017")})();const hC={apiKey:"AIzaSyBeThDmxtkDx25QEgafNoNqBSNkpnASqUc",authDomain:"minidevblogicoma.firebaseapp.com",projectId:"minidevblogicoma",storageBucket:"minidevblogicoma.appspot.com",messagingSenderId:"838985901962",appId:"1:838985901962:web:954bb342a62dedd99aca73",measurementId:"G-TYX9XKQDER"},jy=Nm(hC);FT(jy);cC(jy);const xd=()=>{const[e,t]=E.useState(null),[n,r]=E.useState(null),[i,s]=E.useState(!1),o=wI();async function a(c){r(!0),t(null);try{const{user:h}=await eS(o,c.email,c.password);return await rS(h,{displayName:c.displayName}),r(!1),h}catch(h){console.error(h.message),console.table(typeof h.message);let g;h.message.includes("Password")?g="A senha precisa conter pelo menos 6 caracteres":h.message.includes("email-already")?g="E-mail já cadastrado":g="Ocorreu um error, tente novamente mais tarde",r(!1),t(g)}}const l=()=>{aS(o)},u=async c=>{r(!0),t(!1);try{await tS(o,c.email,c.password),r(!1)}catch(h){console.error(h.message),console.table(typeof h.message);let g;h.message.includes("invalid-login-credentials")?g="Este usuário não está cadastrado":h.message.includes("wrong-password")?g="Há erro com suas credenciais.":g="Ocorreu um error, tente novamente mais tarde",r(!1),t(g)}};return E.useEffect(()=>()=>s(!0),[]),{auth:o,createUser:a,error:e,loading:n,logout:l,login:u}};/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qi.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const Yf="popstate";function fC(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return bu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xo(i)}return gC(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pC(){return Math.random().toString(36).substr(2,8)}function Jf(e,t){return{usr:e.state,key:e.key,idx:t}}function bu(e,t,n,r){return n===void 0&&(n=null),Qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:n,key:t&&t.key||r||pC()})}function Xo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=en.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Qi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=en.Pop;let S=c(),f=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:f})}function g(S,f){a=en.Push;let d=bu(w.location,S,f);n&&n(d,S),u=c()+1;let p=Jf(d,u),v=w.createHref(d);try{o.pushState(p,"",v)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function m(S,f){a=en.Replace;let d=bu(w.location,S,f);n&&n(d,S),u=c();let p=Jf(d,u),v=w.createHref(d);o.replaceState(p,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function y(S){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:Xo(S);return d=d.replace(/ $/,"%20"),Q(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return a},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yf,h),l=S,()=>{i.removeEventListener(Yf,h),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let f=y(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:m,go(S){return o.go(S)}};return w}var Qf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qf||(Qf={}));function mC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?br(t):t,i=Mr(r.pathname||"/",n);if(i==null)return null;let s=By(e);vC(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=RC(i);o=CC(s[a],l)}return o}function By(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),By(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:TC(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Vy(s.path))i(s,o,l)}),t}function Vy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Vy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function vC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yC=/^:[\w-]+$/,wC=3,_C=2,EC=1,SC=10,IC=-2,Zf=e=>e==="*";function TC(e,t){let n=e.split("/"),r=n.length;return n.some(Zf)&&(r+=IC),t&&(r+=_C),n.filter(i=>!Zf(i)).reduce((i,s)=>i+(yC.test(s)?wC:s===""?EC:SC),r)}function kC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function CC(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Wu({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:hn([i,c.pathname]),pathnameBase:LC(hn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=hn([i,c.pathnameBase]))}return s}function Wu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=PC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:g,isOptional:m}=c;if(g==="*"){let w=a[h]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return m&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function PC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function RC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function AC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?br(e):e;return{pathname:n?n.startsWith("/")?n:NC(n,t):t,search:xC(r),hash:DC(i)}}function NC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hy(e,t){let n=OC(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function by(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=br(e):(i=Qi({},e),Q(!i.pathname||!i.pathname.includes("?"),Al("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),Al("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),Al("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?t[h]:"/"}let l=AC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),LC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,DC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function MC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wy=["post","put","patch","delete"];new Set(Wy);const $C=["get",...Wy];new Set($C);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}const Ma=E.createContext(null),Ky=E.createContext(null),En=E.createContext(null),$a=E.createContext(null),Qn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Gy=E.createContext(null);function UC(e,t){let{relative:n}=t===void 0?{}:t;ws()||Q(!1);let{basename:r,navigator:i}=E.useContext(En),{hash:s,pathname:o,search:a}=Ua(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ws(){return E.useContext($a)!=null}function _s(){return ws()||Q(!1),E.useContext($a).location}function qy(e){E.useContext(En).static||E.useLayoutEffect(e)}function Dd(){let{isDataRoute:e}=E.useContext(Qn);return e?YC():FC()}function FC(){ws()||Q(!1);let e=E.useContext(Ma),{basename:t,future:n,navigator:r}=E.useContext(En),{matches:i}=E.useContext(Qn),{pathname:s}=_s(),o=JSON.stringify(Hy(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return qy(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=by(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:hn([t,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[t,r,o,s,e])}function Ua(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(En),{matches:i}=E.useContext(Qn),{pathname:s}=_s(),o=JSON.stringify(Hy(i,r.v7_relativeSplatPath));return E.useMemo(()=>by(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function jC(e,t){return zC(e,t)}function zC(e,t,n,r){ws()||Q(!1);let{navigator:i}=E.useContext(En),{matches:s}=E.useContext(Qn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=_s(),c;if(t){var h;let S=typeof t=="string"?br(t):t;l==="/"||(h=S.pathname)!=null&&h.startsWith(l)||Q(!1),c=S}else c=u;let g=c.pathname||"/",m=g;if(l!=="/"){let S=l.replace(/^\//,"").split("/");m="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=mC(e,{pathname:m}),w=WC(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:hn([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:hn([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return t&&w?E.createElement($a.Provider,{value:{location:Zi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:en.Pop}},w):w}function BC(){let e=XC(),t=MC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const VC=E.createElement(BC,null);class HC extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Qn.Provider,{value:this.props.routeContext},E.createElement(Gy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bC(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Ma);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Qn.Provider,{value:t},r)}function WC(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);c>=0||Q(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:g,errors:m}=n,y=h.route.loader&&g[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,g)=>{let m,y=!1,w=null,S=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||VC,l&&(u<0&&g===0?(JC("route-fallback",!1),y=!0,S=null):u===g&&(y=!0,S=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return m?p=w:y?p=S:h.route.Component?p=E.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=c,E.createElement(bC,{match:h,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?E.createElement(HC,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Xy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xy||{}),Yo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yo||{});function KC(e){let t=E.useContext(Ma);return t||Q(!1),t}function GC(e){let t=E.useContext(Ky);return t||Q(!1),t}function qC(e){let t=E.useContext(Qn);return t||Q(!1),t}function Yy(e){let t=qC(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function XC(){var e;let t=E.useContext(Gy),n=GC(Yo.UseRouteError),r=Yy(Yo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function YC(){let{router:e}=KC(Xy.UseNavigateStable),t=Yy(Yo.UseNavigateStable),n=E.useRef(!1);return qy(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zi({fromRouteId:t},s)))},[e,t])}const ep={};function JC(e,t,n){!t&&!ep[e]&&(ep[e]=!0)}function lo(e){Q(!1)}function QC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=en.Pop,navigator:s,static:o=!1,future:a}=e;ws()&&Q(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Zi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=br(r));let{pathname:c="/",search:h="",hash:g="",state:m=null,key:y="default"}=r,w=E.useMemo(()=>{let S=Mr(c,l);return S==null?null:{location:{pathname:S,search:h,hash:g,state:m,key:y},navigationType:i}},[l,c,h,g,m,y,i]);return w==null?null:E.createElement(En.Provider,{value:u},E.createElement($a.Provider,{children:n,value:w}))}function ZC(e){let{children:t,location:n}=e;return jC(Ku(t),n)}new Promise(()=>{});function Ku(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let s=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ku(r.props.children,s));return}r.type!==lo&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ku(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}function Jy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function e2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function t2(e,t){return e.button===0&&(!t||t==="_self")&&!e2(e)}const n2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],r2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],i2="6";try{window.__reactRouterVersion=i2}catch{}const s2=E.createContext({isTransitioning:!1}),o2="startTransition",tp=m0[o2];function a2(e){let{basename:t,children:n,future:r,window:i}=e,s=E.useRef();s.current==null&&(s.current=fC({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(h=>{u&&tp?tp(()=>l(h)):l(h)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(QC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const l2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,c2=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=t,g=Jy(t,n2),{basename:m}=E.useContext(En),y,w=!1;if(typeof u=="string"&&u2.test(u)&&(y=u,l2))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),I=Mr(v.pathname,m);v.origin===p.origin&&I!=null?u=I+v.search+v.hash:w=!0}catch{}let S=UC(u,{relative:i}),f=h2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return E.createElement("a",Jo({},g,{href:y||S,onClick:w||s?r:d,ref:n,target:l}))}),Ws=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=t,h=Jy(t,r2),g=Ua(l,{relative:h.relative}),m=_s(),y=E.useContext(Ky),{navigator:w,basename:S}=E.useContext(En),f=y!=null&&f2(g)&&u===!0,d=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,p=m.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&S&&(v=Mr(v,S)||v);const I=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let C=p===d||!o&&p.startsWith(d)&&p.charAt(I)==="/",R=v!=null&&(v===d||!o&&v.startsWith(d)&&v.charAt(d.length)==="/"),A={isActive:C,isPending:R,isTransitioning:f},V=C?r:void 0,x;typeof s=="function"?x=s(A):x=[s,C?"active":null,R?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let $e=typeof a=="function"?a(A):a;return E.createElement(c2,Jo({},h,{"aria-current":V,className:x,ref:n,style:$e,to:l,unstable_viewTransition:u}),typeof c=="function"?c(A):c)});var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var np;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(np||(np={}));function d2(e){let t=E.useContext(Ma);return t||Q(!1),t}function h2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=Dd(),u=_s(),c=Ua(e,{relative:o});return E.useCallback(h=>{if(t2(h,n)){h.preventDefault();let g=r!==void 0?r:Xo(u)===Xo(c);l(e,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,s,o,a])}function f2(e,t){t===void 0&&(t={});let n=E.useContext(s2);n==null&&Q(!1);let{basename:r}=d2(Gu.useViewTransitionState),i=Ua(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Mr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Mr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wu(i.pathname,o)!=null||Wu(i.pathname,s)!=null}const p2=()=>N.jsx("div",{children:"Home"}),g2="_login_1n4wa_1",m2={login:g2},v2=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),{login:o,error:a,loading:l}=xd(),u=Dd(),c=async h=>{h.preventDefault(),s("");const m=await o({email:e,password:n});console.table(m),u("/login/showusername")};return E.useEffect(()=>{a&&s(a)},[a]),N.jsxs("div",{className:m2.login,children:[N.jsx("h1",{children:"Entrar no BlogDev"}),N.jsx("p",{children:"Entre no ambiente do BlogDev, e comece a compartilhar suas ideias!"}),N.jsxs("form",{onSubmit:c,children:[N.jsxs("label",{children:[N.jsx("span",{children:"E-mail: "}),N.jsx("input",{type:"email",name:"email",required:!0,value:e,onChange:h=>t(h.target.value),placeholder:"Entre com seu e-mail"})]}),N.jsxs("label",{children:[N.jsx("span",{children:"Senha: "}),N.jsx("input",{type:"password",name:"password",required:!0,value:n,onChange:h=>r(h.target.value),placeholder:"Entre com sua senha"})]}),!l&&N.jsx("button",{className:"btn",children:"Login"}),l&&N.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&N.jsx("p",{className:"error",children:i})]})]})},y2="_navbar_5r8rw_1",w2="_brand_5r8rw_17",_2="_links_list_5r8rw_35",E2="_active_5r8rw_53",S2="_logout_5r8rw_63",Tn={navbar:y2,brand:w2,links_list:_2,active:E2,logout:S2},I2=()=>{const{user:e}=Rw(),{logout:t}=xd();return Dd(),N.jsx(N.Fragment,{children:N.jsxs("nav",{className:Tn.navbar,children:[N.jsxs(Ws,{to:"/",className:Tn.brand,children:["Blog ",N.jsx("span",{children:"Dev"})]}),N.jsxs("ul",{className:Tn.links_list,children:[N.jsx("li",{children:N.jsx(Ws,{to:"/",className:({isActive:n})=>n?Tn.active:null,children:"Home"})}),!e&&N.jsx(N.Fragment,{children:N.jsx("li",{children:N.jsx(Ws,{to:"/login",className:({isActive:n})=>n?Tn.active:null,children:"Login"})})}),N.jsx("li",{children:N.jsx(Ws,{to:"/about",className:({isActive:n})=>n?Tn.active:null,children:"About"})}),e&&N.jsx("li",{children:N.jsx("button",{className:Tn.logout,onClick:t,children:"Exit"})})]})]})})},T2="/assets/Loading-98wbDdkg.gif",k2="_footer_1xqa3_1",C2={footer:k2},P2=()=>N.jsx(N.Fragment,{children:N.jsxs("footer",{className:C2.footer,children:[N.jsx("h3",{children:"Blog da Vida do Desenvolvedor Nomade"}),N.jsx("p",{children:"MiniDev Blog © 2024"})]})}),R2=()=>N.jsx("div",{children:"ShowUsername"});function A2(){const[e,t]=E.useState(void 0),{auth:n}=xd(),r=e===void 0;return E.useEffect(()=>{oS(n,i=>{t(i)})},[n]),r?N.jsx("div",{className:"container load",children:N.jsx("img",{src:T2,alt:"Gif Loading User",width:"120px",height:"120px"})}):N.jsx(N.Fragment,{children:N.jsx(Pw,{value:{user:e},children:N.jsxs(a2,{children:[N.jsx(I2,{}),N.jsx("div",{className:"container",children:N.jsxs(ZC,{children:[N.jsx(lo,{path:"/",element:N.jsx(p2,{})}),N.jsx(lo,{path:"/login",element:N.jsx(v2,{})}),N.jsx(lo,{path:"/login/showusername",element:N.jsx(R2,{})})]})}),N.jsx(P2,{})]})})})}Nl.createRoot(document.getElementById("root")).render(N.jsx(hp.StrictMode,{children:N.jsx(A2,{})}));
