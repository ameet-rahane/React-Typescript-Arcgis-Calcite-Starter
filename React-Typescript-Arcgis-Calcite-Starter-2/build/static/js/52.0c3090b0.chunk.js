webpackJsonp([52],{87:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),e.d(r,"scopeCss",function(){return J});var n=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;for(var n=Array(t),s=0,r=0;r<e;r++)for(var o=arguments[r],c=0,a=o.length;c<a;c++,s++)n[s]=o[c];return n},s=function(t){var r,e=[],n=0;return t=t.replace(/(\[[^\]]*\])/g,function(t,r){var s="__ph-"+n+"__";return e.push(r),n++,s}),r=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,r,s){var o="__ph-"+n+"__";return e.push(s),n++,r+o}),{content:r,placeholders:e}},o=function(t,r){return r.replace(/__ph-(\d+)__/g,function(r,e){return t[+e]})},c=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("(-shadowcsshost"+c,"gim"),i=new RegExp("(-shadowcsscontext"+c,"gim"),u=new RegExp("(-shadowcssslotted"+c,"gim"),l=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],f=/-shadowcsshost/gim,p=/:host/gim,d=/::slotted/gim,g=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,v=function(t){return t.replace(m,"")},w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=function(t){return t.match(w)||[]},x=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,O=function(t,r){var e=S(t),n=0;return e.escapedString.replace(x,function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=e.blocks[n++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},l=r(u);return""+t[1]+l.selector+t[3]+i+l.content+a})},S=function(t){for(var r=t.split(b),e=[],n=[],s=0,o=[],c=0;c<r.length;c++){var a=r[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(n.push(o.join("")),e.push("%BLOCK%"),o=[]),e.push(a)),"{"===a&&s++}return o.length>0&&(n.push(o.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},W=function(t){return t=t.replace(g,"-shadowcsscontext").replace(p,"-shadowcsshost").replace(d,"-shadowcssslotted")},j=function(t,r,e){return t.replace(r,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(e("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]})},C=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},E=function(t){return j(t,a,C)},L=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?C(t,r,e):t+r+e+", "+r+" "+t+e},R=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(u,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var s=t[2].trim(),o=t[3],c=e+s+o,a="",i=t[4]-1;i>=0;i--){var u=t[5][i];if("}"===u||","===u)break;a=u+a}var l=a+c,h=""+a.trimRight()+c.trim();if(l.trim()!==h.trim()){var f=h+", "+l;n.push({orgSelector:l,updatedSelector:f})}return c}return"-shadowcsshost-no-combinator"+t[3]}),{selectors:n,cssText:t}},k=function(t){return j(t,i,L)},B=function(t){return h.reduce(function(t,r){return t.replace(r," ")},t)},K=function(t){var r=/\[/g,e=/\]/g;return t=t.replace(r,"\\[").replace(e,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")},T=function(t,r){return!K(r).test(t)},y=function(t,r,e){if(f.lastIndex=0,f.test(t)){var n="."+e;return t.replace(l,function(t,r){return r.replace(/([^:]*)(:*)(.*)/,function(t,r,e,s){return r+n+e+s})}).replace(f,n+" ")}return r+" "+t},A=function(t,r,e){var n=/\[is=([^\]]*)\]/g;r=r.replace(n,function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r[0]});var c="."+r,a=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=y(t,r,e);else{var s=t.replace(f,"");if(s.length>0){var o=s.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+c+o[2]+o[3])}}return n},i=s(t);t=i.content;for(var u,l="",h=0,p=/( |>|\+|~(?!=))\s*/g,d=t.indexOf("-shadowcsshost-no-combinator")>-1,g=!d;null!==(u=p.exec(t));){var m=u[1],v=t.slice(h,u.index).trim();g=g||v.indexOf("-shadowcsshost-no-combinator")>-1;l+=(g?a(v):v)+" "+m+" ",h=p.lastIndex}var w=t.substring(h);return g=g||w.indexOf("-shadowcsshost-no-combinator")>-1,l+=g?a(w):w,o(i.placeholders,l)},I=function(t,r,e,n){return t.split(",").map(function(t){return n&&t.indexOf("."+n)>-1?t.trim():T(t,r)?A(t,r,e).trim():t.trim()}).join(", ")},M=function(t,r,e,n,s){return O(t,function(t){var s=t.selector,o=t.content;return"@"!==t.selector[0]?s=I(t.selector,r,e,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=M(t.content,r,e,n)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}})},$=function(t,r,e,n,s){t=W(t),t=E(t),t=k(t);var o=R(t,n);return t=o.cssText,t=B(t),r&&(t=M(t,r,e,n)),t=t.replace(/-shadowcsshost-no-combinator/g,"."+e),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:t.trim(),slottedSelectors:o.selectors}},J=function(t,r,e){var s=r+"-h",o=r+"-s",c=_(t);t=v(t);var a=[];if(e){var i=function(t){var r="/*!@___"+a.length+"___*/",e="/*!@"+t.selector+"*/";return a.push({placeholder:r,comment:e}),t.selector=r+t.selector,t};t=O(t,function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=O(t.content,i),t):t})}var u=$(t,r,s,o);return t=n([u.cssText],c).join("\n"),e&&a.forEach(function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)}),u.slottedSelectors.forEach(function(r){t=t.replace(r.orgSelector,r.updatedSelector)}),t}}});
//# sourceMappingURL=52.0c3090b0.chunk.js.map