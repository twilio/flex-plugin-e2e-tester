!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=11)}([function(e,t){e.exports=React},function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"flush",(function(){return o})),r.d(t,"hydrate",(function(){return c})),r.d(t,"cx",(function(){return s})),r.d(t,"merge",(function(){return l})),r.d(t,"getRegisteredStyles",(function(){return u})),r.d(t,"injectGlobal",(function(){return f})),r.d(t,"keyframes",(function(){return d})),r.d(t,"css",(function(){return p})),r.d(t,"sheet",(function(){return h})),r.d(t,"caches",(function(){return g}));var n=r(10),i="undefined"!==typeof e?e:{},a=Object(n.a)(i),o=a.flush,c=a.hydrate,s=a.cx,l=a.merge,u=a.getRegisteredStyles,f=a.injectGlobal,d=a.keyframes,p=a.css,h=a.sheet,g=a.caches}.call(this,r(16))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12);t.loadPlugin=n.loadPlugin,t.FlexPlugin=n.FlexPlugin;var i=r(13);t.getAssetsUrl=i.getAssetsUrl,t.getRuntimeUrl=i.getRuntimeUrl;var a=r(14);t.loadJS=a.loadJS;var o=r(15);t.loadCSS=o.loadCSS},function(e,t){e.exports=Redux},function(e,t,r){"use strict";t.a=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(26).slice(2)}},function(e,t){e.exports=window.Twilio.Flex},function(e,t){e.exports=ReactRedux},function(e,t,r){e.exports=function(){"use strict";return function(e){function t(t){if(t)try{e(t+"}")}catch(r){}}return function(r,n,i,a,o,c,s,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}}()},function(e,t,r){e.exports=r(17)()},function(e,t,r){"use strict";var n=r(4),i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=function(e){for(var t,r=e.length,n=r^r,i=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++i;switch(r){case 3:n^=(255&e.charCodeAt(i+2))<<16;case 2:n^=(255&e.charCodeAt(i+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(i)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)};var o=function(e){function t(e,t,n){var i=t.trim().split(h);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var c=0;for(e=0===o?"":e[0]+" ";c<a;++c)t[c]=r(e,t[c],n).trim();break;default:var s=c=0;for(t=[];c<a;++c)for(var l=0;l<o;++l)t[s++]=r(e[l]+" ",i[c],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,a){var o=e+";",c=2*t+3*r+4*a;if(944===c){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===j||2===j&&i(s,1)?"-webkit-"+s+s:s}if(0===j||2===j&&!i(o,1))return o;switch(c){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(A,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return d.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(v,"tb");break;case 232:s=o.replace(v,"tb-rl");break;case 220:s=o.replace(v,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,c=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(x,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(x,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,a).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+a&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),M(2!==t?n:n.replace(O,"$1"),r,t)}function a(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function o(e,t,r,n,i,a,o,c,l,u){for(var f,d=0,p=t;d<E;++d)switch(f=T[d].call(s,e,p,r,n,i,a,o,c,l,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!==typeof e?j=1:(j=2,M=e):j=0),c}function s(e,r){var c=e;if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<E){var s=o(-1,r,c,c,S,_,0,0,0,0);void 0!==s&&"string"===typeof s&&(r=s)}var f=function e(r,c,s,f,d){for(var p,h,g,v,w,x=0,O=0,C=0,A=0,T=0,M=0,N=g=p=0,F=0,z=0,D=0,L=0,U=s.length,$=U-1,B="",W="",H="",V="";F<U;){if(h=s.charCodeAt(F),F===$&&0!==O+A+C+x&&(0!==O&&(h=47===O?10:47),A=C=x=0,U++,$++),0===O+A+C+x){if(F===$&&(0<z&&(B=B.replace(u,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=s.charAt(F)}h=59}switch(h){case 123:for(p=(B=B.trim()).charCodeAt(0),g=1,L=++F;F<U;){switch(h=s.charCodeAt(F)){case 123:g++;break;case 125:g--;break;case 47:switch(h=s.charCodeAt(F+1)){case 42:case 47:e:{for(N=F+1;N<$;++N)switch(s.charCodeAt(N)){case 47:if(42===h&&42===s.charCodeAt(N-1)&&F+2!==N){F=N+1;break e}break;case 10:if(47===h){F=N+1;break e}}F=N}}break;case 91:h++;case 40:h++;case 34:case 39:for(;F++<$&&s.charCodeAt(F)!==h;);}if(0===g)break;F++}switch(g=s.substring(L,F),0===p&&(p=(B=B.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<z&&(B=B.replace(u,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:z=c;break;default:z=R}if(L=(g=e(c,z,g,h,d+1)).length,0<E&&(w=o(3,g,z=t(R,B,D),c,S,_,L,h,d,f),B=z.join(""),void 0!==w&&0===(L=(g=w.trim()).length)&&(h=0,g="")),0<L)switch(h){case 115:B=B.replace(k,a);case 100:case 109:case 45:g=B+"{"+g+"}";break;case 107:g=(B=B.replace(b,"$1 $2"))+"{"+g+"}",g=1===j||2===j&&i("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=B+g,112===f&&(W+=g,g="")}else g="";break;default:g=e(c,t(c,B,D),g,f,d+1)}H+=g,g=D=z=N=p=0,B="",h=s.charCodeAt(++F);break;case 125:case 59:if(1<(L=(B=(0<z?B.replace(u,""):B).trim()).length))switch(0===N&&(p=B.charCodeAt(0),45===p||96<p&&123>p)&&(L=(B=B.replace(" ",":")).length),0<E&&void 0!==(w=o(1,B,c,r,S,_,W.length,f,d,f))&&0===(L=(B=w.trim()).length)&&(B="\0\0"),p=B.charCodeAt(0),h=B.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){V+=B+s.charAt(F);break}default:58!==B.charCodeAt(L-1)&&(W+=n(B,p,h,B.charCodeAt(2)))}D=z=N=p=0,B="",h=s.charCodeAt(++F)}}switch(h){case 13:case 10:47===O?O=0:0===1+p&&107!==f&&0<B.length&&(z=1,B+="\0"),0<E*I&&o(0,B,c,r,S,_,W.length,f,d,f),_=1,S++;break;case 59:case 125:if(0===O+A+C+x){_++;break}default:switch(_++,v=s.charAt(F),h){case 9:case 32:if(0===A+x+O)switch(T){case 44:case 58:case 9:case 32:v="";break;default:32!==h&&(v=" ")}break;case 0:v="\\0";break;case 12:v="\\f";break;case 11:v="\\v";break;case 38:0===A+O+x&&(z=D=1,v="\f"+v);break;case 108:if(0===A+O+x+P&&0<N)switch(F-N){case 2:112===T&&58===s.charCodeAt(F-3)&&(P=T);case 8:111===M&&(P=M)}break;case 58:0===A+O+x&&(N=F);break;case 44:0===O+C+A+x&&(z=1,v+="\r");break;case 34:case 39:0===O&&(A=A===h?0:0===A?h:A);break;case 91:0===A+O+C&&x++;break;case 93:0===A+O+C&&x--;break;case 41:0===A+O+x&&C--;break;case 40:if(0===A+O+x){if(0===p)switch(2*T+3*M){case 533:break;default:p=1}C++}break;case 64:0===O+C+A+x+N+g&&(g=1);break;case 42:case 47:if(!(0<A+x+C))switch(O){case 0:switch(2*h+3*s.charCodeAt(F+1)){case 235:O=47;break;case 220:L=F,O=42}break;case 42:47===h&&42===T&&L+2!==F&&(33===s.charCodeAt(L+2)&&(W+=s.substring(L,F+1)),v="",O=0)}}0===O&&(B+=v)}M=T,T=h,F++}if(0<(L=W.length)){if(z=c,0<E&&(void 0!==(w=o(2,W,z,r,S,_,L,f,d,f))&&0===(W=w).length))return V+W+H;if(W=z.join(",")+"{"+W+"}",0!==j*P){switch(2!==j||i(W,2)||(P=0),P){case 111:W=W.replace(y,":-moz-$1")+W;break;case 112:W=W.replace(m,"::-webkit-input-$1")+W.replace(m,"::-moz-$1")+W.replace(m,":-ms-input-$1")+W}P=0}}return V+W+H}(R,c,r,0,0);return 0<E&&(void 0!==(s=o(-2,f,c,c,S,_,f.length,0,0,0))&&(f=s)),"",P=0,_=S=1,f}var l=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,y=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,x=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,_=1,S=1,P=0,j=1,R=[],T=[],E=0,M=null,I=0;return s.use=function e(t){switch(t){case void 0:case null:E=T.length=0;break;default:switch(t.constructor){case Array:for(var r=0,n=t.length;r<n;++r)e(t[r]);break;case Function:T[E++]=t;break;case Boolean:I=0|!!t}}return e},s.set=c,void 0!==e&&c(e),s},c=r(8),s=r.n(c),l=/[A-Z]|^ms/g,u=Object(n.a)((function(e){return e.replace(l,"-$&").toLowerCase()})),f=function(e,t){return null==t||"boolean"===typeof t?"":1===i[e]||45===e.charCodeAt(1)||isNaN(t)||0===t?t:t+"px"},d=function e(t){for(var r=t.length,n=0,i="";n<r;n++){var a=t[n];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"function":0,o=e([a()]);break;case"object":if(Array.isArray(a))o=e(a);else for(var c in o="",a)a[c]&&c&&(o&&(o+=" "),o+=c);break;default:o=a}o&&(i&&(i+=" "),i+=o)}}return i},p="undefined"!==typeof document;function h(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key||""),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),(void 0!==e.container?e.container:document.head).appendChild(t),t}var g=function(){function e(e){this.isSpeedy=!0,this.tags=[],this.ctr=0,this.opts=e}var t=e.prototype;return t.inject=function(){if(this.injected)throw new Error("already injected!");this.tags[0]=h(this.opts),this.injected=!0},t.speedy=function(e){if(0!==this.ctr)throw new Error("cannot change speedy now");this.isSpeedy=!!e},t.insert=function(e,t){if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(this.tags[this.tags.length-1]);try{r.insertRule(e,r.cssRules.length)}catch(i){0}}else{var n=h(this.opts);this.tags.push(n),n.appendChild(document.createTextNode(e+(t||"")))}this.ctr++,this.ctr%65e3===0&&this.tags.push(h(this.opts))},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,this.injected=!1},e}();t.a=function(e,t){if(void 0!==e.__SECRET_EMOTION__)return e.__SECRET_EMOTION__;void 0===t&&(t={});var r,n,i=t.key||"css",c=s()((function(e){r+=e,p&&h.insert(e,m)}));void 0!==t.prefix&&(n={prefix:t.prefix});var l={registered:{},inserted:{},nonce:t.nonce,key:i},h=new g(t);p&&h.inject();var b=new o(n);b.use(t.stylisPlugins)(c);var m="";function y(e,t){if(null==e)return"";switch(typeof e){case"boolean":return"";case"function":if(void 0!==e.__emotion_styles){var r=e.toString();return r}return y.call(this,void 0===this?e():e(this.mergedProps,this.context),t);case"object":return x.call(this,e);default:var n=l.registered[e];return!1===t&&void 0!==n?n:e}}var v,k,w=new WeakMap;function x(e){if(w.has(e))return w.get(e);var t="";return Array.isArray(e)?e.forEach((function(e){t+=y.call(this,e,!1)}),this):Object.keys(e).forEach((function(r){"object"!==typeof e[r]?void 0!==l.registered[e[r]]?t+=r+"{"+l.registered[e[r]]+"}":t+=u(r)+":"+f(r,e[r])+";":Array.isArray(e[r])&&"string"===typeof e[r][0]&&void 0===l.registered[e[r][0]]?e[r].forEach((function(e){t+=u(r)+":"+f(r,e)+";"})):t+=r+"{"+y.call(this,e[r],!1)+"}"}),this),w.set(e,t),t}var O=/label:\s*([^\s;\n{]+)\s*;/g,C=function(e,t){return a(e+t)+t},A=function(e){var t=!0,r="",n="";null==e||void 0===e.raw?(t=!1,r+=y.call(this,e,!1)):r+=e[0];for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return a.forEach((function(n,i){r+=y.call(this,n,46===r.charCodeAt(r.length-1)),!0===t&&void 0!==e[i+1]&&(r+=e[i+1])}),this),k=r,r=r.replace(O,(function(e,t){return n+="-"+t,""})),v=C(r,n),r};function _(e,t){void 0===l.inserted[v]&&(r="",b(e,t),l.inserted[v]=r)}var S=function(){var e=A.apply(this,arguments),t=i+"-"+v;return void 0===l.registered[t]&&(l.registered[t]=k),_("."+t,e),t};function P(e,t){var r="";return t.split(" ").forEach((function(t){void 0!==l.registered[t]?e.push(t):r+=t+" "})),r}function j(e,t){var r=[],n=P(r,e);return r.length<2?e:n+S(r,t)}function R(e){l.inserted[e]=!0}if(p){var T=document.querySelectorAll("[data-emotion-"+i+"]");Array.prototype.forEach.call(T,(function(e){h.tags[0].parentNode.insertBefore(e,h.tags[0]),e.getAttribute("data-emotion-"+i).split(" ").forEach(R)}))}var E={flush:function(){p&&(h.flush(),h.inject()),l.inserted={},l.registered={}},hydrate:function(e){e.forEach(R)},cx:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return j(d(t))},merge:j,getRegisteredStyles:P,injectGlobal:function(){var e=A.apply(this,arguments);_("",e)},keyframes:function(){var e=A.apply(this,arguments),t="animation-"+v;return _("","@keyframes "+t+"{"+e+"}"),t},css:S,sheet:h,caches:l};return e.__SECRET_EMOTION__=E,E}},function(e,t,r){e.exports=r(19)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){this.uniqueName="plugin-external-static-json",this.version="0.0.0",this.dependencies={"flex-plugin-scripts":"3.5.0","flex-plugin":"3.5.0","craco-config-flex-plugin":"3.5.0","flex-ui":"1.17.2",react:"16.5.2","react-dom":"16.5.2"},this.name=e,console.log("loading "+this.name+"@"+this.version+" plugin")};t.FlexPlugin=n,t.loadPlugin=function(e){Twilio&&Twilio.Flex&&Twilio.Flex.Plugins?Twilio.Flex.Plugins.init(e):console.warn("This version of Flex does not appear to support plugins.")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRuntimeUrl=function(){if(document&&document.currentScript){var e=document.currentScript;if("string"===typeof e.src){var t=e.src;return t.substr(0,t.lastIndexOf("/"))}}return""},t.getAssetsUrl=function(){return t.getRuntimeUrl()+"/assets"}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(5));t.loadJS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("script");t.id="external-js-"+i.default(),t.type="text/javascript",t.src=e,document.body.appendChild(t)}))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(5));t.loadCSS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("link");t.id="external-css-"+i.default(),t.rel="stylesheet",t.type="text/css",t.media="all",t.href=e,document.head.appendChild(t)}))}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n=r(18);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(2);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=r(0),d=r.n(f),p=r(6),h=r(7),g=r(3);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={isOpen:!0},k=function e(){i(this,e)};k.dismissBar=function(){return{type:"DISMISS_BAR"}};var w=r(1),x=r(9),O=r.n(x),C=r(4),A=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,_=Object(C.a)(A.test.bind(A));function S(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var P,j="__EMOTION_THEMING__",R=((P={})[j]=O.a.object,P);function T(e){this.setState({theme:e})}var E=_,M=function(e){return"theme"!==e&&"innerRef"!==e},I=function(){return!0},N=function(e,t){for(var r=2,n=arguments.length;r<n;r++){var i=arguments[r],a=void 0;for(a in i)e(a)&&(t[a]=i[a])}return t};function F(){var e,t,r=(e=["\n  padding: 10px;\n  margin: 0px;\n  color: #fff;\n  background: #2fa8ba;\n  display: inline-block;\n  width: 20%;\n\n  .accented {\n    color: red;\n    cursor: pointer;\n    float: right;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return F=function(){return r},r}var z=function(e,t){var r=function(n,i){var a,o,c,s;void 0!==i&&(a=i.e,o=i.label,c=i.target,s=n.__emotion_forwardProp&&i.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var l=n.__emotion_real===n,u=void 0===a&&l&&n.__emotion_base||n;return"function"!==typeof s&&(s="string"===typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?E:M),function(){var f=arguments,d=l&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==o&&d.push("label:"+o+";"),void 0===a)if(null==f[0]||void 0===f[0].raw)d.push.apply(d,f);else{d.push(f[0][0]);for(var p=f.length,h=1;h<p;h++)d.push(f[h],f[0][h])}else 0;var g=function(r){function n(){return r.apply(this,arguments)||this}S(n,r);var i=n.prototype;return i.componentWillMount=function(){void 0!==this.context[j]&&(this.unsubscribe=this.context[j].subscribe(T.bind(this)))},i.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[j].unsubscribe(this.unsubscribe)},i.render=function(){var r=this.props,n=this.state;this.mergedProps=N(I,{},r,{theme:null!==n&&n.theme||r.theme||{}});var i="",o=[];return r.className&&(i+=void 0===a?e.getRegisteredStyles(o,r.className):r.className+" "),i+=void 0===a?e.css.apply(this,d.concat(o)):a,void 0!==c&&(i+=" "+c),t.createElement(u,N(s,{},r,{className:i,ref:r.innerRef}))},n}(t.Component);return g.displayName=void 0!==o?o:"Styled("+("string"===typeof u?u:u.displayName||u.name||"Component")+")",void 0!==n.defaultProps&&(g.defaultProps=n.defaultProps),g.contextTypes=R,g.__emotion_styles=d,g.__emotion_base=u,g.__emotion_real=g,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+c}}),g.withComponent=function(e,t){return r(e,void 0!==t?N(I,{},i,t):i).apply(void 0,d)},g}};return r}(w,d.a)("div")(F()),D=function(e){return e.isOpen?d.a.createElement(z,{id:"static-json-external-plugin"},"Static JSON external plugin"):null},L=Object(h.connect)((function(e){return{isOpen:e["private-v2"].customTaskList.isOpen}}),(function(e){return{dismissBar:Object(g.bindActionCreators)(k.dismissBar,e)}}))(D),U=Object(g.combineReducers)({customTaskList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISMISS_BAR":return y({},e,{isOpen:!1});default:return e}}}),$=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(h,e);var t,r,n,s,f=(t=h,function(){var e,r=o(t);if(c()){var n=o(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)});function h(){return i(this,h),f.call(this,"PrivateV2Plugin")}return r=h,(n=[{key:"init",value:function(e,t){this.registerReducers(t),e.AgentDesktopView.Panel1.Content.add(d.a.createElement(L,{key:"static-json-external-plugin"}),{sortOrder:-1})}},{key:"registerReducers",value:function(e){e.store.addReducer?e.store.addReducer("private-v2",U):console.error("You need FlexUI > 1.9.0 to use built-in redux; you are currently on ".concat(p.VERSION))}}])&&a(r.prototype,n),s&&a(r,s),h}(n.FlexPlugin);n.loadPlugin($)}]);
//# sourceMappingURL=bundle.js.map