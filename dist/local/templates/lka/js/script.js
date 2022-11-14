/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
;
/* flatpickr v4.6.13,, @license MIT */ ! function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).flatpickr = n()
}(this, (function () {
    "use strict";
    var e = function () {
        return (e = Object.assign || function (e) {
            for (var n, t = 1, a = arguments.length; t < a; t++)
                for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            return e
        }).apply(this, arguments)
    };

    function n() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        var a = Array(e),
            i = 0;
        for (n = 0; n < t; n++)
            for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++) a[i] = o[r];
        return a
    }
    var t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        a = {
            _disable: [],
            allowInput: !1,
            allowInvalidPreload: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: !0,
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function (e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function (e) {
                var n = new Date(e.getTime());
                n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - (n.getDay() + 6) % 7);
                var t = new Date(n.getFullYear(), 0, 4);
                return 1 + Math.round(((n.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        },
        i = {
            weekdays: {
                shorthand: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                longhand: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
            },
            months: {
                shorthand: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Окрябрь", "Ноябрь", "Декабрь"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function (e) {
                var n = e % 100;
                if (n > 3 && n < 21) return "th";
                switch (n % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: !1
        },
        o = function (e, n) {
            return void 0 === n && (n = 2), ("000" + e).slice(-1 * n)
        },
        r = function (e) {
            return !0 === e ? 1 : 0
        };

    function l(e, n) {
        var t;
        return function () {
            var a = this,
                i = arguments;
            clearTimeout(t), t = setTimeout((function () {
                return e.apply(a, i)
            }), n)
        }
    }
    var c = function (e) {
        return e instanceof Array ? e : [e]
    };

    function s(e, n, t) {
        if (!0 === t) return e.classList.add(n);
        e.classList.remove(n)
    }

    function d(e, n, t) {
        var a = window.document.createElement(e);
        return n = n || "", t = t || "", a.className = n, void 0 !== t && (a.textContent = t), a
    }

    function u(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function f(e, n) {
        return n(e) ? e : e.parentNode ? f(e.parentNode, n) : void 0
    }

    function m(e, n) {
        var t = d("div", "numInputWrapper"),
            a = d("input", "numInput " + e),
            i = d("span", "arrowUp"),
            o = d("span", "arrowDown");
        if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", a.pattern = "\\d*"), void 0 !== n)
            for (var r in n) a.setAttribute(r, n[r]);
        return t.appendChild(a), t.appendChild(i), t.appendChild(o), t
    }

    function g(e) {
        try {
            return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        } catch (n) {
            return e.target
        }
    }
    var p = function () {},
        h = function (e, n, t) {
            return t.months[n ? "shorthand" : "longhand"][e]
        },
        v = {
            D: p,
            F: function (e, n, t) {
                e.setMonth(t.months.longhand.indexOf(n))
            },
            G: function (e, n) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
            },
            H: function (e, n) {
                e.setHours(parseFloat(n))
            },
            J: function (e, n) {
                e.setDate(parseFloat(n))
            },
            K: function (e, n, t) {
                e.setHours(e.getHours() % 12 + 12 * r(new RegExp(t.amPM[1], "i").test(n)))
            },
            M: function (e, n, t) {
                e.setMonth(t.months.shorthand.indexOf(n))
            },
            S: function (e, n) {
                e.setSeconds(parseFloat(n))
            },
            U: function (e, n) {
                return new Date(1e3 * parseFloat(n))
            },
            W: function (e, n, t) {
                var a = parseInt(n),
                    i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
                return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i
            },
            Y: function (e, n) {
                e.setFullYear(parseFloat(n))
            },
            Z: function (e, n) {
                return new Date(n)
            },
            d: function (e, n) {
                e.setDate(parseFloat(n))
            },
            h: function (e, n) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
            },
            i: function (e, n) {
                e.setMinutes(parseFloat(n))
            },
            j: function (e, n) {
                e.setDate(parseFloat(n))
            },
            l: p,
            m: function (e, n) {
                e.setMonth(parseFloat(n) - 1)
            },
            n: function (e, n) {
                e.setMonth(parseFloat(n) - 1)
            },
            s: function (e, n) {
                e.setSeconds(parseFloat(n))
            },
            u: function (e, n) {
                return new Date(parseFloat(n))
            },
            w: p,
            y: function (e, n) {
                e.setFullYear(2e3 + parseFloat(n))
            }
        },
        D = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        },
        w = {
            Z: function (e) {
                return e.toISOString()
            },
            D: function (e, n, t) {
                return n.weekdays.shorthand[w.w(e, n, t)]
            },
            F: function (e, n, t) {
                return h(w.n(e, n, t) - 1, !1, n)
            },
            G: function (e, n, t) {
                return o(w.h(e, n, t))
            },
            H: function (e) {
                return o(e.getHours())
            },
            J: function (e, n) {
                return void 0 !== n.ordinal ? e.getDate() + n.ordinal(e.getDate()) : e.getDate()
            },
            K: function (e, n) {
                return n.amPM[r(e.getHours() > 11)]
            },
            M: function (e, n) {
                return h(e.getMonth(), !0, n)
            },
            S: function (e) {
                return o(e.getSeconds())
            },
            U: function (e) {
                return e.getTime() / 1e3
            },
            W: function (e, n, t) {
                return t.getWeek(e)
            },
            Y: function (e) {
                return o(e.getFullYear(), 4)
            },
            d: function (e) {
                return o(e.getDate())
            },
            h: function (e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function (e) {
                return o(e.getMinutes())
            },
            j: function (e) {
                return e.getDate()
            },
            l: function (e, n) {
                return n.weekdays.longhand[e.getDay()]
            },
            m: function (e) {
                return o(e.getMonth() + 1)
            },
            n: function (e) {
                return e.getMonth() + 1
            },
            s: function (e) {
                return e.getSeconds()
            },
            u: function (e) {
                return e.getTime()
            },
            w: function (e) {
                return e.getDay()
            },
            y: function (e) {
                return String(e.getFullYear()).substring(2)
            }
        },
        b = function (e) {
            var n = e.config,
                t = void 0 === n ? a : n,
                o = e.l10n,
                r = void 0 === o ? i : o,
                l = e.isMobile,
                c = void 0 !== l && l;
            return function (e, n, a) {
                var i = a || r;
                return void 0 === t.formatDate || c ? n.split("").map((function (n, a, o) {
                    return w[n] && "\\" !== o[a - 1] ? w[n](e, i, t) : "\\" !== n ? n : ""
                })).join("") : t.formatDate(e, n, i)
            }
        },
        C = function (e) {
            var n = e.config,
                t = void 0 === n ? a : n,
                o = e.l10n,
                r = void 0 === o ? i : o;
            return function (e, n, i, o) {
                if (0 === e || e) {
                    var l, c = o || r,
                        s = e;
                    if (e instanceof Date) l = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e);
                    else if ("string" == typeof e) {
                        var d = n || (t || a).dateFormat,
                            u = String(e).trim();
                        if ("today" === u) l = new Date, i = !0;
                        else if (t && t.parseDate) l = t.parseDate(e, d);
                        else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
                        else {
                            for (var f = void 0, m = [], g = 0, p = 0, h = ""; g < d.length; g++) {
                                var w = d[g],
                                    b = "\\" === w,
                                    C = "\\" === d[g - 1] || b;
                                if (D[w] && !C) {
                                    h += D[w];
                                    var M = new RegExp(h).exec(e);
                                    M && (f = !0) && m["Y" !== w ? "push" : "unshift"]({
                                        fn: v[w],
                                        val: M[++p]
                                    })
                                } else b || (h += ".")
                            }
                            l = t && t.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), m.forEach((function (e) {
                                var n = e.fn,
                                    t = e.val;
                                return l = n(l, t, c) || l
                            })), l = f ? l : void 0
                        }
                    }
                    if (l instanceof Date && !isNaN(l.getTime())) return !0 === i && l.setHours(0, 0, 0, 0), l;
                    t.errorHandler(new Error("Invalid date provided: " + s))
                }
            }
        };

    function M(e, n, t) {
        return void 0 === t && (t = !0), !1 !== t ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(n.getTime()).setHours(0, 0, 0, 0) : e.getTime() - n.getTime()
    }
    var y = function (e, n, t) {
            return 3600 * e + 60 * n + t
        },
        x = 864e5;

    function E(e) {
        var n = e.defaultHour,
            t = e.defaultMinute,
            a = e.defaultSeconds;
        if (void 0 !== e.minDate) {
            var i = e.minDate.getHours(),
                o = e.minDate.getMinutes(),
                r = e.minDate.getSeconds();
            n < i && (n = i), n === i && t < o && (t = o), n === i && t === o && a < r && (a = e.minDate.getSeconds())
        }
        if (void 0 !== e.maxDate) {
            var l = e.maxDate.getHours(),
                c = e.maxDate.getMinutes();
            (n = Math.min(n, l)) === l && (t = Math.min(c, t)), n === l && t === c && (a = e.maxDate.getSeconds())
        }
        return {
            hours: n,
            minutes: t,
            seconds: a
        }
    }
    "function" != typeof Object.assign && (Object.assign = function (e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        if (!e) throw TypeError("Cannot convert undefined or null to object");
        for (var a = function (n) {
                n && Object.keys(n).forEach((function (t) {
                    return e[t] = n[t]
                }))
            }, i = 0, o = n; i < o.length; i++) {
            var r = o[i];
            a(r)
        }
        return e
    });

    function k(p, v) {
        var w = {
            config: e(e({}, a), I.defaultConfig),
            l10n: i
        };

        function k() {
            var e;
            return (null === (e = w.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
        }

        function T(e) {
            return e.bind(w)
        }

        function S() {
            var e = w.config;
            !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function () {
                if (void 0 !== w.calendarContainer && (w.calendarContainer.style.visibility = "hidden", w.calendarContainer.style.display = "block"), void 0 !== w.daysContainer) {
                    var n = (w.days.offsetWidth + 1) * e.showMonths;
                    w.daysContainer.style.width = n + "px", w.calendarContainer.style.width = n + (void 0 !== w.weekWrapper ? w.weekWrapper.offsetWidth : 0) + "px", w.calendarContainer.style.removeProperty("visibility"), w.calendarContainer.style.removeProperty("display")
                }
            }))
        }

        function _(e) {
            if (0 === w.selectedDates.length) {
                var n = void 0 === w.config.minDate || M(new Date, w.config.minDate) >= 0 ? new Date : new Date(w.config.minDate.getTime()),
                    t = E(w.config);
                n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()), w.selectedDates = [n], w.latestSelectedDateObj = n
            }
            void 0 !== e && "blur" !== e.type && function (e) {
                e.preventDefault();
                var n = "keydown" === e.type,
                    t = g(e),
                    a = t;
                void 0 !== w.amPM && t === w.amPM && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]);
                var i = parseFloat(a.getAttribute("min")),
                    l = parseFloat(a.getAttribute("max")),
                    c = parseFloat(a.getAttribute("step")),
                    s = parseInt(a.value, 10),
                    d = e.delta || (n ? 38 === e.which ? 1 : -1 : 0),
                    u = s + c * d;
                if (void 0 !== a.value && 2 === a.value.length) {
                    var f = a === w.hourElement,
                        m = a === w.minuteElement;
                    u < i ? (u = l + u + r(!f) + (r(f) && r(!w.amPM)), m && L(void 0, -1, w.hourElement)) : u > l && (u = a === w.hourElement ? u - l - r(!w.amPM) : i, m && L(void 0, 1, w.hourElement)), w.amPM && f && (1 === c ? u + s === 23 : Math.abs(u - s) > c) && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]), a.value = o(u)
                }
            }(e);
            var a = w._input.value;
            O(), ye(), w._input.value !== a && w._debouncedChange()
        }

        function O() {
            if (void 0 !== w.hourElement && void 0 !== w.minuteElement) {
                var e, n, t = (parseInt(w.hourElement.value.slice(-2), 10) || 0) % 24,
                    a = (parseInt(w.minuteElement.value, 10) || 0) % 60,
                    i = void 0 !== w.secondElement ? (parseInt(w.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== w.amPM && (e = t, n = w.amPM.textContent, t = e % 12 + 12 * r(n === w.l10n.amPM[1]));
                var o = void 0 !== w.config.minTime || w.config.minDate && w.minDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.minDate, !0),
                    l = void 0 !== w.config.maxTime || w.config.maxDate && w.maxDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.maxDate, !0);
                if (void 0 !== w.config.maxTime && void 0 !== w.config.minTime && w.config.minTime > w.config.maxTime) {
                    var c = y(w.config.minTime.getHours(), w.config.minTime.getMinutes(), w.config.minTime.getSeconds()),
                        s = y(w.config.maxTime.getHours(), w.config.maxTime.getMinutes(), w.config.maxTime.getSeconds()),
                        d = y(t, a, i);
                    if (d > s && d < c) {
                        var u = function (e) {
                            var n = Math.floor(e / 3600),
                                t = (e - 3600 * n) / 60;
                            return [n, t, e - 3600 * n - 60 * t]
                        }(c);
                        t = u[0], a = u[1], i = u[2]
                    }
                } else {
                    if (l) {
                        var f = void 0 !== w.config.maxTime ? w.config.maxTime : w.config.maxDate;
                        (t = Math.min(t, f.getHours())) === f.getHours() && (a = Math.min(a, f.getMinutes())), a === f.getMinutes() && (i = Math.min(i, f.getSeconds()))
                    }
                    if (o) {
                        var m = void 0 !== w.config.minTime ? w.config.minTime : w.config.minDate;
                        (t = Math.max(t, m.getHours())) === m.getHours() && a < m.getMinutes() && (a = m.getMinutes()), a === m.getMinutes() && (i = Math.max(i, m.getSeconds()))
                    }
                }
                A(t, a, i)
            }
        }

        function F(e) {
            var n = e || w.latestSelectedDateObj;
            n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds())
        }

        function A(e, n, t) {
            void 0 !== w.latestSelectedDateObj && w.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0), w.hourElement && w.minuteElement && !w.isMobile && (w.hourElement.value = o(w.config.time_24hr ? e : (12 + e) % 12 + 12 * r(e % 12 == 0)), w.minuteElement.value = o(n), void 0 !== w.amPM && (w.amPM.textContent = w.l10n.amPM[r(e >= 12)]), void 0 !== w.secondElement && (w.secondElement.value = o(t)))
        }

        function N(e) {
            var n = g(e),
                t = parseInt(n.value) + (e.delta || 0);
            (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && ee(t)
        }

        function P(e, n, t, a) {
            return n instanceof Array ? n.forEach((function (n) {
                return P(e, n, t, a)
            })) : e instanceof Array ? e.forEach((function (e) {
                return P(e, n, t, a)
            })) : (e.addEventListener(n, t, a), void w._handlers.push({
                remove: function () {
                    return e.removeEventListener(n, t, a)
                }
            }))
        }

        function Y() {
            De("onChange")
        }

        function j(e, n) {
            var t = void 0 !== e ? w.parseDate(e) : w.latestSelectedDateObj || (w.config.minDate && w.config.minDate > w.now ? w.config.minDate : w.config.maxDate && w.config.maxDate < w.now ? w.config.maxDate : w.now),
                a = w.currentYear,
                i = w.currentMonth;
            try {
                void 0 !== t && (w.currentYear = t.getFullYear(), w.currentMonth = t.getMonth())
            } catch (e) {
                e.message = "Invalid date supplied: " + t, w.config.errorHandler(e)
            }
            n && w.currentYear !== a && (De("onYearChange"), q()), !n || w.currentYear === a && w.currentMonth === i || De("onMonthChange"), w.redraw()
        }

        function H(e) {
            var n = g(e);
            ~n.className.indexOf("arrow") && L(e, n.classList.contains("arrowUp") ? 1 : -1)
        }

        function L(e, n, t) {
            var a = e && g(e),
                i = t || a && a.parentNode && a.parentNode.firstChild,
                o = we("increment");
            o.delta = n, i && i.dispatchEvent(o)
        }

        function R(e, n, t, a) {
            var i = ne(n, !0),
                o = d("span", e, n.getDate().toString());
            return o.dateObj = n, o.$i = a, o.setAttribute("aria-label", w.formatDate(n, w.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === M(n, w.now) && (w.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), i ? (o.tabIndex = -1, be(n) && (o.classList.add("selected"), w.selectedDateElem = o, "range" === w.config.mode && (s(o, "startRange", w.selectedDates[0] && 0 === M(n, w.selectedDates[0], !0)), s(o, "endRange", w.selectedDates[1] && 0 === M(n, w.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), "range" === w.config.mode && function (e) {
                return !("range" !== w.config.mode || w.selectedDates.length < 2) && (M(e, w.selectedDates[0]) >= 0 && M(e, w.selectedDates[1]) <= 0)
            }(n) && !be(n) && o.classList.add("inRange"), w.weekNumbers && 1 === w.config.showMonths && "prevMonthDay" !== e && a % 7 == 6 && w.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + w.config.getWeek(n) + "</span>"), De("onDayCreate", o), o
        }

        function W(e) {
            e.focus(), "range" === w.config.mode && oe(e)
        }

        function B(e) {
            for (var n = e > 0 ? 0 : w.config.showMonths - 1, t = e > 0 ? w.config.showMonths : -1, a = n; a != t; a += e)
                for (var i = w.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                    var c = i.children[l];
                    if (-1 === c.className.indexOf("hidden") && ne(c.dateObj)) return c
                }
        }

        function J(e, n) {
            var t = k(),
                a = te(t || document.body),
                i = void 0 !== e ? e : a ? t : void 0 !== w.selectedDateElem && te(w.selectedDateElem) ? w.selectedDateElem : void 0 !== w.todayDateElem && te(w.todayDateElem) ? w.todayDateElem : B(n > 0 ? 1 : -1);
            void 0 === i ? w._input.focus() : a ? function (e, n) {
                for (var t = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : w.currentMonth, a = n > 0 ? w.config.showMonths : -1, i = n > 0 ? 1 : -1, o = t - w.currentMonth; o != a; o += i)
                    for (var r = w.daysContainer.children[o], l = t - w.currentMonth === o ? e.$i + n : n < 0 ? r.children.length - 1 : 0, c = r.children.length, s = l; s >= 0 && s < c && s != (n > 0 ? c : -1); s += i) {
                        var d = r.children[s];
                        if (-1 === d.className.indexOf("hidden") && ne(d.dateObj) && Math.abs(e.$i - s) >= Math.abs(n)) return W(d)
                    }
                w.changeMonth(i), J(B(i), 0)
            }(i, n) : W(i)
        }

        function K(e, n) {
            for (var t = (new Date(e, n, 1).getDay() - w.l10n.firstDayOfWeek + 7) % 7, a = w.utils.getDaysInMonth((n - 1 + 12) % 12, e), i = w.utils.getDaysInMonth(n, e), o = window.document.createDocumentFragment(), r = w.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", s = a + 1 - t, u = 0; s <= a; s++, u++) o.appendChild(R("flatpickr-day " + l, new Date(e, n - 1, s), 0, u));
            for (s = 1; s <= i; s++, u++) o.appendChild(R("flatpickr-day", new Date(e, n, s), 0, u));
            for (var f = i + 1; f <= 42 - t && (1 === w.config.showMonths || u % 7 != 0); f++, u++) o.appendChild(R("flatpickr-day " + c, new Date(e, n + 1, f % i), 0, u));
            var m = d("div", "dayContainer");
            return m.appendChild(o), m
        }

        function U() {
            if (void 0 !== w.daysContainer) {
                u(w.daysContainer), w.weekNumbers && u(w.weekNumbers);
                for (var e = document.createDocumentFragment(), n = 0; n < w.config.showMonths; n++) {
                    var t = new Date(w.currentYear, w.currentMonth, 1);
                    t.setMonth(w.currentMonth + n), e.appendChild(K(t.getFullYear(), t.getMonth()))
                }
                w.daysContainer.appendChild(e), w.days = w.daysContainer.firstChild, "range" === w.config.mode && 1 === w.selectedDates.length && oe()
            }
        }

        function q() {
            if (!(w.config.showMonths > 1 || "dropdown" !== w.config.monthSelectorType)) {
                var e = function (e) {
                    return !(void 0 !== w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && e < w.config.minDate.getMonth()) && !(void 0 !== w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() && e > w.config.maxDate.getMonth())
                };
                w.monthsDropdownContainer.tabIndex = -1, w.monthsDropdownContainer.innerHTML = "";
                for (var n = 0; n < 12; n++)
                    if (e(n)) {
                        var t = d("option", "flatpickr-monthDropdown-month");
                        t.value = new Date(w.currentYear, n).getMonth().toString(), t.textContent = h(n, w.config.shorthandCurrentMonth, w.l10n), t.tabIndex = -1, w.currentMonth === n && (t.selected = !0), w.monthsDropdownContainer.appendChild(t)
                    }
            }
        }

        function $() {
            var e, n = d("div", "flatpickr-month"),
                t = window.document.createDocumentFragment();
            w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? e = d("span", "cur-month") : (w.monthsDropdownContainer = d("select", "flatpickr-monthDropdown-months"), w.monthsDropdownContainer.setAttribute("aria-label", w.l10n.monthAriaLabel), P(w.monthsDropdownContainer, "change", (function (e) {
                var n = g(e),
                    t = parseInt(n.value, 10);
                w.changeMonth(t - w.currentMonth), De("onMonthChange")
            })), q(), e = w.monthsDropdownContainer);
            var a = m("cur-year", {
                    tabindex: "-1"
                }),
                i = a.getElementsByTagName("input")[0];
            i.setAttribute("aria-label", w.l10n.yearAriaLabel), w.config.minDate && i.setAttribute("min", w.config.minDate.getFullYear().toString()), w.config.maxDate && (i.setAttribute("max", w.config.maxDate.getFullYear().toString()), i.disabled = !!w.config.minDate && w.config.minDate.getFullYear() === w.config.maxDate.getFullYear());
            var o = d("div", "flatpickr-current-month");
            return o.appendChild(e), o.appendChild(a), t.appendChild(o), n.appendChild(t), {
                container: n,
                yearElement: i,
                monthElement: e
            }
        }

        function V() {
            u(w.monthNav), w.monthNav.appendChild(w.prevMonthNav), w.config.showMonths && (w.yearElements = [], w.monthElements = []);
            for (var e = w.config.showMonths; e--;) {
                var n = $();
                w.yearElements.push(n.yearElement), w.monthElements.push(n.monthElement), w.monthNav.appendChild(n.container)
            }
            w.monthNav.appendChild(w.nextMonthNav)
        }

        function z() {
            w.weekdayContainer ? u(w.weekdayContainer) : w.weekdayContainer = d("div", "flatpickr-weekdays");
            for (var e = w.config.showMonths; e--;) {
                var n = d("div", "flatpickr-weekdaycontainer");
                w.weekdayContainer.appendChild(n)
            }
            return G(), w.weekdayContainer
        }

        function G() {
            if (w.weekdayContainer) {
                var e = w.l10n.firstDayOfWeek,
                    t = n(w.l10n.weekdays.shorthand);
                e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
                for (var a = w.config.showMonths; a--;) w.weekdayContainer.children[a].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
            }
        }

        function Z(e, n) {
            void 0 === n && (n = !0);
            var t = n ? e : e - w.currentMonth;
            t < 0 && !0 === w._hidePrevMonthArrow || t > 0 && !0 === w._hideNextMonthArrow || (w.currentMonth += t, (w.currentMonth < 0 || w.currentMonth > 11) && (w.currentYear += w.currentMonth > 11 ? 1 : -1, w.currentMonth = (w.currentMonth + 12) % 12, De("onYearChange"), q()), U(), De("onMonthChange"), Ce())
        }

        function Q(e) {
            return w.calendarContainer.contains(e)
        }

        function X(e) {
            if (w.isOpen && !w.config.inline) {
                var n = g(e),
                    t = Q(n),
                    a = !(n === w.input || n === w.altInput || w.element.contains(n) || e.path && e.path.indexOf && (~e.path.indexOf(w.input) || ~e.path.indexOf(w.altInput))) && !t && !Q(e.relatedTarget),
                    i = !w.config.ignoredFocusElements.some((function (e) {
                        return e.contains(n)
                    }));
                a && i && (w.config.allowInput && w.setDate(w._input.value, !1, w.config.altInput ? w.config.altFormat : w.config.dateFormat), void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement && "" !== w.input.value && void 0 !== w.input.value && _(), w.close(), w.config && "range" === w.config.mode && 1 === w.selectedDates.length && w.clear(!1))
            }
        }

        function ee(e) {
            if (!(!e || w.config.minDate && e < w.config.minDate.getFullYear() || w.config.maxDate && e > w.config.maxDate.getFullYear())) {
                var n = e,
                    t = w.currentYear !== n;
                w.currentYear = n || w.currentYear, w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth = Math.min(w.config.maxDate.getMonth(), w.currentMonth) : w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && (w.currentMonth = Math.max(w.config.minDate.getMonth(), w.currentMonth)), t && (w.redraw(), De("onYearChange"), q())
            }
        }

        function ne(e, n) {
            var t;
            void 0 === n && (n = !0);
            var a = w.parseDate(e, void 0, n);
            if (w.config.minDate && a && M(a, w.config.minDate, void 0 !== n ? n : !w.minDateHasTime) < 0 || w.config.maxDate && a && M(a, w.config.maxDate, void 0 !== n ? n : !w.maxDateHasTime) > 0) return !1;
            if (!w.config.enable && 0 === w.config.disable.length) return !0;
            if (void 0 === a) return !1;
            for (var i = !!w.config.enable, o = null !== (t = w.config.enable) && void 0 !== t ? t : w.config.disable, r = 0, l = void 0; r < o.length; r++) {
                if ("function" == typeof (l = o[r]) && l(a)) return i;
                if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime()) return i;
                if ("string" == typeof l) {
                    var c = w.parseDate(l, void 0, !0);
                    return c && c.getTime() === a.getTime() ? i : !i
                }
                if ("object" == typeof l && void 0 !== a && l.from && l.to && a.getTime() >= l.from.getTime() && a.getTime() <= l.to.getTime()) return i
            }
            return !i
        }

        function te(e) {
            return void 0 !== w.daysContainer && (-1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && w.daysContainer.contains(e))
        }

        function ae(e) {
            var n = e.target === w._input,
                t = w._input.value.trimEnd() !== Me();
            !n || !t || e.relatedTarget && Q(e.relatedTarget) || w.setDate(w._input.value, !0, e.target === w.altInput ? w.config.altFormat : w.config.dateFormat)
        }

        function ie(e) {
            var n = g(e),
                t = w.config.wrap ? p.contains(n) : n === w._input,
                a = w.config.allowInput,
                i = w.isOpen && (!a || !t),
                o = w.config.inline && t && !a;
            if (13 === e.keyCode && t) {
                if (a) return w.setDate(w._input.value, !0, n === w.altInput ? w.config.altFormat : w.config.dateFormat), w.close(), n.blur();
                w.open()
            } else if (Q(n) || i || o) {
                var r = !!w.timeContainer && w.timeContainer.contains(n);
                switch (e.keyCode) {
                    case 13:
                        r ? (e.preventDefault(), _(), fe()) : me(e);
                        break;
                    case 27:
                        e.preventDefault(), fe();
                        break;
                    case 8:
                    case 46:
                        t && !w.config.allowInput && (e.preventDefault(), w.clear());
                        break;
                    case 37:
                    case 39:
                        if (r || t) w.hourElement && w.hourElement.focus();
                        else {
                            e.preventDefault();
                            var l = k();
                            if (void 0 !== w.daysContainer && (!1 === a || l && te(l))) {
                                var c = 39 === e.keyCode ? 1 : -1;
                                e.ctrlKey ? (e.stopPropagation(), Z(c), J(B(1), 0)) : J(void 0, c)
                            }
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var s = 40 === e.keyCode ? 1 : -1;
                        w.daysContainer && void 0 !== n.$i || n === w.input || n === w.altInput ? e.ctrlKey ? (e.stopPropagation(), ee(w.currentYear - s), J(B(1), 0)) : r || J(void 0, 7 * s) : n === w.currentYearElement ? ee(w.currentYear - s) : w.config.enableTime && (!r && w.hourElement && w.hourElement.focus(), _(e), w._debouncedChange());
                        break;
                    case 9:
                        if (r) {
                            var d = [w.hourElement, w.minuteElement, w.secondElement, w.amPM].concat(w.pluginElements).filter((function (e) {
                                    return e
                                })),
                                u = d.indexOf(n);
                            if (-1 !== u) {
                                var f = d[u + (e.shiftKey ? -1 : 1)];
                                e.preventDefault(), (f || w._input).focus()
                            }
                        } else !w.config.noCalendar && w.daysContainer && w.daysContainer.contains(n) && e.shiftKey && (e.preventDefault(), w._input.focus())
                }
            }
            if (void 0 !== w.amPM && n === w.amPM) switch (e.key) {
                case w.l10n.amPM[0].charAt(0):
                case w.l10n.amPM[0].charAt(0).toLowerCase():
                    w.amPM.textContent = w.l10n.amPM[0], O(), ye();
                    break;
                case w.l10n.amPM[1].charAt(0):
                case w.l10n.amPM[1].charAt(0).toLowerCase():
                    w.amPM.textContent = w.l10n.amPM[1], O(), ye()
            }(t || Q(n)) && De("onKeyDown", e)
        }

        function oe(e, n) {
            if (void 0 === n && (n = "flatpickr-day"), 1 === w.selectedDates.length && (!e || e.classList.contains(n) && !e.classList.contains("flatpickr-disabled"))) {
                for (var t = e ? e.dateObj.getTime() : w.days.firstElementChild.dateObj.getTime(), a = w.parseDate(w.selectedDates[0], void 0, !0).getTime(), i = Math.min(t, w.selectedDates[0].getTime()), o = Math.max(t, w.selectedDates[0].getTime()), r = !1, l = 0, c = 0, s = i; s < o; s += x) ne(new Date(s), !0) || (r = r || s > i && s < o, s < a && (!l || s > l) ? l = s : s > a && (!c || s < c) && (c = s));
                Array.from(w.rContainer.querySelectorAll("*:nth-child(-n+" + w.config.showMonths + ") > ." + n)).forEach((function (n) {
                    var i, o, s, d = n.dateObj.getTime(),
                        u = l > 0 && d < l || c > 0 && d > c;
                    if (u) return n.classList.add("notAllowed"), void["inRange", "startRange", "endRange"].forEach((function (e) {
                        n.classList.remove(e)
                    }));
                    r && !u || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function (e) {
                        n.classList.remove(e)
                    })), void 0 !== e && (e.classList.add(t <= w.selectedDates[0].getTime() ? "startRange" : "endRange"), a < t && d === a ? n.classList.add("startRange") : a > t && d === a && n.classList.add("endRange"), d >= l && (0 === c || d <= c) && (o = a, s = t, (i = d) > Math.min(o, s) && i < Math.max(o, s)) && n.classList.add("inRange")))
                }))
            }
        }

        function re() {
            !w.isOpen || w.config.static || w.config.inline || de()
        }

        function le(e) {
            return function (n) {
                var t = w.config["_" + e + "Date"] = w.parseDate(n, w.config.dateFormat),
                    a = w.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== t && (w["min" === e ? "minDateHasTime" : "maxDateHasTime"] = t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0), w.selectedDates && (w.selectedDates = w.selectedDates.filter((function (e) {
                    return ne(e)
                })), w.selectedDates.length || "min" !== e || F(t), ye()), w.daysContainer && (ue(), void 0 !== t ? w.currentYearElement[e] = t.getFullYear().toString() : w.currentYearElement.removeAttribute(e), w.currentYearElement.disabled = !!a && void 0 !== t && a.getFullYear() === t.getFullYear())
            }
        }

        function ce() {
            return w.config.wrap ? p.querySelector("[data-input]") : p
        }

        function se() {
            "object" != typeof w.config.locale && void 0 === I.l10ns[w.config.locale] && w.config.errorHandler(new Error("flatpickr: invalid locale " + w.config.locale)), w.l10n = e(e({}, I.l10ns.default), "object" == typeof w.config.locale ? w.config.locale : "default" !== w.config.locale ? I.l10ns[w.config.locale] : void 0), D.D = "(" + w.l10n.weekdays.shorthand.join("|") + ")", D.l = "(" + w.l10n.weekdays.longhand.join("|") + ")", D.M = "(" + w.l10n.months.shorthand.join("|") + ")", D.F = "(" + w.l10n.months.longhand.join("|") + ")", D.K = "(" + w.l10n.amPM[0] + "|" + w.l10n.amPM[1] + "|" + w.l10n.amPM[0].toLowerCase() + "|" + w.l10n.amPM[1].toLowerCase() + ")", void 0 === e(e({}, v), JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr && void 0 === I.defaultConfig.time_24hr && (w.config.time_24hr = w.l10n.time_24hr), w.formatDate = b(w), w.parseDate = C({
                config: w.config,
                l10n: w.l10n
            })
        }

        function de(e) {
            if ("function" != typeof w.config.position) {
                if (void 0 !== w.calendarContainer) {
                    De("onPreCalendarPosition");
                    var n = e || w._positionElement,
                        t = Array.prototype.reduce.call(w.calendarContainer.children, (function (e, n) {
                            return e + n.offsetHeight
                        }), 0),
                        a = w.calendarContainer.offsetWidth,
                        i = w.config.position.split(" "),
                        o = i[0],
                        r = i.length > 1 ? i[1] : null,
                        l = n.getBoundingClientRect(),
                        c = window.innerHeight - l.bottom,
                        d = "above" === o || "below" !== o && c < t && l.top > t,
                        u = window.pageYOffset + l.top + (d ? -t - 2 : n.offsetHeight + 2);
                    if (s(w.calendarContainer, "arrowTop", !d), s(w.calendarContainer, "arrowBottom", d), !w.config.inline) {
                        var f = window.pageXOffset + l.left,
                            m = !1,
                            g = !1;
                        "center" === r ? (f -= (a - l.width) / 2, m = !0) : "right" === r && (f -= a - l.width, g = !0), s(w.calendarContainer, "arrowLeft", !m && !g), s(w.calendarContainer, "arrowCenter", m), s(w.calendarContainer, "arrowRight", g);
                        var p = window.document.body.offsetWidth - (window.pageXOffset + l.right),
                            h = f + a > window.document.body.offsetWidth,
                            v = p + a > window.document.body.offsetWidth;
                        if (s(w.calendarContainer, "rightMost", h), !w.config.static)
                            if (w.calendarContainer.style.top = u + "px", h)
                                if (v) {
                                    var D = function () {
                                        for (var e = null, n = 0; n < document.styleSheets.length; n++) {
                                            var t = document.styleSheets[n];
                                            if (t.cssRules) {
                                                try {
                                                    t.cssRules
                                                } catch (e) {
                                                    continue
                                                }
                                                e = t;
                                                break
                                            }
                                        }
                                        return null != e ? e : (a = document.createElement("style"), document.head.appendChild(a), a.sheet);
                                        var a
                                    }();
                                    if (void 0 === D) return;
                                    var b = window.document.body.offsetWidth,
                                        C = Math.max(0, b / 2 - a / 2),
                                        M = D.cssRules.length,
                                        y = "{left:" + l.left + "px;right:auto;}";
                                    s(w.calendarContainer, "rightMost", !1), s(w.calendarContainer, "centerMost", !0), D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + y, M), w.calendarContainer.style.left = C + "px", w.calendarContainer.style.right = "auto"
                                } else w.calendarContainer.style.left = "auto", w.calendarContainer.style.right = p + "px";
                        else w.calendarContainer.style.left = f + "px", w.calendarContainer.style.right = "auto"
                    }
                }
            } else w.config.position(w, e)
        }

        function ue() {
            w.config.noCalendar || w.isMobile || (q(), Ce(), U())
        }

        function fe() {
            w._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(w.close, 0) : w.close()
        }

        function me(e) {
            e.preventDefault(), e.stopPropagation();
            var n = f(g(e), (function (e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
            }));
            if (void 0 !== n) {
                var t = n,
                    a = w.latestSelectedDateObj = new Date(t.dateObj.getTime()),
                    i = (a.getMonth() < w.currentMonth || a.getMonth() > w.currentMonth + w.config.showMonths - 1) && "range" !== w.config.mode;
                if (w.selectedDateElem = t, "single" === w.config.mode) w.selectedDates = [a];
                else if ("multiple" === w.config.mode) {
                    var o = be(a);
                    o ? w.selectedDates.splice(parseInt(o), 1) : w.selectedDates.push(a)
                } else "range" === w.config.mode && (2 === w.selectedDates.length && w.clear(!1, !1), w.latestSelectedDateObj = a, w.selectedDates.push(a), 0 !== M(a, w.selectedDates[0], !0) && w.selectedDates.sort((function (e, n) {
                    return e.getTime() - n.getTime()
                })));
                if (O(), i) {
                    var r = w.currentYear !== a.getFullYear();
                    w.currentYear = a.getFullYear(), w.currentMonth = a.getMonth(), r && (De("onYearChange"), q()), De("onMonthChange")
                }
                if (Ce(), U(), ye(), i || "range" === w.config.mode || 1 !== w.config.showMonths ? void 0 !== w.selectedDateElem && void 0 === w.hourElement && w.selectedDateElem && w.selectedDateElem.focus() : W(t), void 0 !== w.hourElement && void 0 !== w.hourElement && w.hourElement.focus(), w.config.closeOnSelect) {
                    var l = "single" === w.config.mode && !w.config.enableTime,
                        c = "range" === w.config.mode && 2 === w.selectedDates.length && !w.config.enableTime;
                    (l || c) && fe()
                }
                Y()
            }
        }
        w.parseDate = C({
            config: w.config,
            l10n: w.l10n
        }), w._handlers = [], w.pluginElements = [], w.loadedPlugins = [], w._bind = P, w._setHoursFromDate = F, w._positionCalendar = de, w.changeMonth = Z, w.changeYear = ee, w.clear = function (e, n) {
            void 0 === e && (e = !0);
            void 0 === n && (n = !0);
            w.input.value = "", void 0 !== w.altInput && (w.altInput.value = "");
            void 0 !== w.mobileInput && (w.mobileInput.value = "");
            w.selectedDates = [], w.latestSelectedDateObj = void 0, !0 === n && (w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth());
            if (!0 === w.config.enableTime) {
                var t = E(w.config),
                    a = t.hours,
                    i = t.minutes,
                    o = t.seconds;
                A(a, i, o)
            }
            w.redraw(), e && De("onChange")
        }, w.close = function () {
            w.isOpen = !1, w.isMobile || (void 0 !== w.calendarContainer && w.calendarContainer.classList.remove("open"), void 0 !== w._input && w._input.classList.remove("active"));
            De("onClose")
        }, w.onMouseOver = oe, w._createElement = d, w.createDay = R, w.destroy = function () {
            void 0 !== w.config && De("onDestroy");
            for (var e = w._handlers.length; e--;) w._handlers[e].remove();
            if (w._handlers = [], w.mobileInput) w.mobileInput.parentNode && w.mobileInput.parentNode.removeChild(w.mobileInput), w.mobileInput = void 0;
            else if (w.calendarContainer && w.calendarContainer.parentNode)
                if (w.config.static && w.calendarContainer.parentNode) {
                    var n = w.calendarContainer.parentNode;
                    if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                        for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                        n.parentNode.removeChild(n)
                    }
                } else w.calendarContainer.parentNode.removeChild(w.calendarContainer);
            w.altInput && (w.input.type = "text", w.altInput.parentNode && w.altInput.parentNode.removeChild(w.altInput), delete w.altInput);
            w.input && (w.input.type = w.input._type, w.input.classList.remove("flatpickr-input"), w.input.removeAttribute("readonly"));
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function (e) {
                try {
                    delete w[e]
                } catch (e) {}
            }))
        }, w.isEnabled = ne, w.jumpToDate = j, w.updateValue = ye, w.open = function (e, n) {
            void 0 === n && (n = w._positionElement);
            if (!0 === w.isMobile) {
                if (e) {
                    e.preventDefault();
                    var t = g(e);
                    t && t.blur()
                }
                return void 0 !== w.mobileInput && (w.mobileInput.focus(), w.mobileInput.click()), void De("onOpen")
            }
            if (w._input.disabled || w.config.inline) return;
            var a = w.isOpen;
            w.isOpen = !0, a || (w.calendarContainer.classList.add("open"), w._input.classList.add("active"), De("onOpen"), de(n));
            !0 === w.config.enableTime && !0 === w.config.noCalendar && (!1 !== w.config.allowInput || void 0 !== e && w.timeContainer.contains(e.relatedTarget) || setTimeout((function () {
                return w.hourElement.select()
            }), 50))
        }, w.redraw = ue, w.set = function (e, n) {
            if (null !== e && "object" == typeof e)
                for (var a in Object.assign(w.config, e), e) void 0 !== ge[a] && ge[a].forEach((function (e) {
                    return e()
                }));
            else w.config[e] = n, void 0 !== ge[e] ? ge[e].forEach((function (e) {
                return e()
            })) : t.indexOf(e) > -1 && (w.config[e] = c(n));
            w.redraw(), ye(!0)
        }, w.setDate = function (e, n, t) {
            void 0 === n && (n = !1);
            void 0 === t && (t = w.config.dateFormat);
            if (0 !== e && !e || e instanceof Array && 0 === e.length) return w.clear(n);
            pe(e, t), w.latestSelectedDateObj = w.selectedDates[w.selectedDates.length - 1], w.redraw(), j(void 0, n), F(), 0 === w.selectedDates.length && w.clear(!1);
            ye(n), n && De("onChange")
        }, w.toggle = function (e) {
            if (!0 === w.isOpen) return w.close();
            w.open(e)
        };
        var ge = {
            locale: [se, G],
            showMonths: [V, S, z],
            minDate: [j],
            maxDate: [j],
            positionElement: [ve],
            clickOpens: [function () {
                !0 === w.config.clickOpens ? (P(w._input, "focus", w.open), P(w._input, "click", w.open)) : (w._input.removeEventListener("focus", w.open), w._input.removeEventListener("click", w.open))
            }]
        };

        function pe(e, n) {
            var t = [];
            if (e instanceof Array) t = e.map((function (e) {
                return w.parseDate(e, n)
            }));
            else if (e instanceof Date || "number" == typeof e) t = [w.parseDate(e, n)];
            else if ("string" == typeof e) switch (w.config.mode) {
                case "single":
                case "time":
                    t = [w.parseDate(e, n)];
                    break;
                case "multiple":
                    t = e.split(w.config.conjunction).map((function (e) {
                        return w.parseDate(e, n)
                    }));
                    break;
                case "range":
                    t = e.split(w.l10n.rangeSeparator).map((function (e) {
                        return w.parseDate(e, n)
                    }))
            } else w.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
            w.selectedDates = w.config.allowInvalidPreload ? t : t.filter((function (e) {
                return e instanceof Date && ne(e, !1)
            })), "range" === w.config.mode && w.selectedDates.sort((function (e, n) {
                return e.getTime() - n.getTime()
            }))
        }

        function he(e) {
            return e.slice().map((function (e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? w.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: w.parseDate(e.from, void 0),
                    to: w.parseDate(e.to, void 0)
                } : e
            })).filter((function (e) {
                return e
            }))
        }

        function ve() {
            w._positionElement = w.config.positionElement || w._input
        }

        function De(e, n) {
            if (void 0 !== w.config) {
                var t = w.config[e];
                if (void 0 !== t && t.length > 0)
                    for (var a = 0; t[a] && a < t.length; a++) t[a](w.selectedDates, w.input.value, w, n);
                "onChange" === e && (w.input.dispatchEvent(we("change")), w.input.dispatchEvent(we("input")))
            }
        }

        function we(e) {
            var n = document.createEvent("Event");
            return n.initEvent(e, !0, !0), n
        }

        function be(e) {
            for (var n = 0; n < w.selectedDates.length; n++) {
                var t = w.selectedDates[n];
                if (t instanceof Date && 0 === M(t, e)) return "" + n
            }
            return !1
        }

        function Ce() {
            w.config.noCalendar || w.isMobile || !w.monthNav || (w.yearElements.forEach((function (e, n) {
                var t = new Date(w.currentYear, w.currentMonth, 1);
                t.setMonth(w.currentMonth + n), w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? w.monthElements[n].textContent = h(t.getMonth(), w.config.shorthandCurrentMonth, w.l10n) + " " : w.monthsDropdownContainer.value = t.getMonth().toString(), e.value = t.getFullYear().toString()
            })), w._hidePrevMonthArrow = void 0 !== w.config.minDate && (w.currentYear === w.config.minDate.getFullYear() ? w.currentMonth <= w.config.minDate.getMonth() : w.currentYear < w.config.minDate.getFullYear()), w._hideNextMonthArrow = void 0 !== w.config.maxDate && (w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth + 1 > w.config.maxDate.getMonth() : w.currentYear > w.config.maxDate.getFullYear()))
        }

        function Me(e) {
            var n = e || (w.config.altInput ? w.config.altFormat : w.config.dateFormat);
            return w.selectedDates.map((function (e) {
                return w.formatDate(e, n)
            })).filter((function (e, n, t) {
                return "range" !== w.config.mode || w.config.enableTime || t.indexOf(e) === n
            })).join("range" !== w.config.mode ? w.config.conjunction : w.l10n.rangeSeparator)
        }

        function ye(e) {
            void 0 === e && (e = !0), void 0 !== w.mobileInput && w.mobileFormatStr && (w.mobileInput.value = void 0 !== w.latestSelectedDateObj ? w.formatDate(w.latestSelectedDateObj, w.mobileFormatStr) : ""), w.input.value = Me(w.config.dateFormat), void 0 !== w.altInput && (w.altInput.value = Me(w.config.altFormat)), !1 !== e && De("onValueUpdate")
        }

        function xe(e) {
            var n = g(e),
                t = w.prevMonthNav.contains(n),
                a = w.nextMonthNav.contains(n);
            t || a ? Z(t ? -1 : 1) : w.yearElements.indexOf(n) >= 0 ? n.select() : n.classList.contains("arrowUp") ? w.changeYear(w.currentYear + 1) : n.classList.contains("arrowDown") && w.changeYear(w.currentYear - 1)
        }
        return function () {
            w.element = w.input = p, w.isOpen = !1,
                function () {
                    var n = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                        i = e(e({}, JSON.parse(JSON.stringify(p.dataset || {}))), v),
                        o = {};
                    w.config.parseDate = i.parseDate, w.config.formatDate = i.formatDate, Object.defineProperty(w.config, "enable", {
                        get: function () {
                            return w.config._enable
                        },
                        set: function (e) {
                            w.config._enable = he(e)
                        }
                    }), Object.defineProperty(w.config, "disable", {
                        get: function () {
                            return w.config._disable
                        },
                        set: function (e) {
                            w.config._disable = he(e)
                        }
                    });
                    var r = "time" === i.mode;
                    if (!i.dateFormat && (i.enableTime || r)) {
                        var l = I.defaultConfig.dateFormat || a.dateFormat;
                        o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : l + " H:i" + (i.enableSeconds ? ":S" : "")
                    }
                    if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                        var s = I.defaultConfig.altFormat || a.altFormat;
                        o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : s + " h:i" + (i.enableSeconds ? ":S" : "") + " K"
                    }
                    Object.defineProperty(w.config, "minDate", {
                        get: function () {
                            return w.config._minDate
                        },
                        set: le("min")
                    }), Object.defineProperty(w.config, "maxDate", {
                        get: function () {
                            return w.config._maxDate
                        },
                        set: le("max")
                    });
                    var d = function (e) {
                        return function (n) {
                            w.config["min" === e ? "_minTime" : "_maxTime"] = w.parseDate(n, "H:i:S")
                        }
                    };
                    Object.defineProperty(w.config, "minTime", {
                        get: function () {
                            return w.config._minTime
                        },
                        set: d("min")
                    }), Object.defineProperty(w.config, "maxTime", {
                        get: function () {
                            return w.config._maxTime
                        },
                        set: d("max")
                    }), "time" === i.mode && (w.config.noCalendar = !0, w.config.enableTime = !0);
                    Object.assign(w.config, o, i);
                    for (var u = 0; u < n.length; u++) w.config[n[u]] = !0 === w.config[n[u]] || "true" === w.config[n[u]];
                    t.filter((function (e) {
                        return void 0 !== w.config[e]
                    })).forEach((function (e) {
                        w.config[e] = c(w.config[e] || []).map(T)
                    })), w.isMobile = !w.config.disableMobile && !w.config.inline && "single" === w.config.mode && !w.config.disable.length && !w.config.enable && !w.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for (u = 0; u < w.config.plugins.length; u++) {
                        var f = w.config.plugins[u](w) || {};
                        for (var m in f) t.indexOf(m) > -1 ? w.config[m] = c(f[m]).map(T).concat(w.config[m]) : void 0 === i[m] && (w.config[m] = f[m])
                    }
                    i.altInputClass || (w.config.altInputClass = ce().className + " " + w.config.altInputClass);
                    De("onParseConfig")
                }(), se(),
                function () {
                    if (w.input = ce(), !w.input) return void w.config.errorHandler(new Error("Invalid input element specified"));
                    w.input._type = w.input.type, w.input.type = "text", w.input.classList.add("flatpickr-input"), w._input = w.input, w.config.altInput && (w.altInput = d(w.input.nodeName, w.config.altInputClass), w._input = w.altInput, w.altInput.placeholder = w.input.placeholder, w.altInput.disabled = w.input.disabled, w.altInput.required = w.input.required, w.altInput.tabIndex = w.input.tabIndex, w.altInput.type = "text", w.input.setAttribute("type", "hidden"), !w.config.static && w.input.parentNode && w.input.parentNode.insertBefore(w.altInput, w.input.nextSibling));
                    w.config.allowInput || w._input.setAttribute("readonly", "readonly");
                    ve()
                }(),
                function () {
                    w.selectedDates = [], w.now = w.parseDate(w.config.now) || new Date;
                    var e = w.config.defaultDate || ("INPUT" !== w.input.nodeName && "TEXTAREA" !== w.input.nodeName || !w.input.placeholder || w.input.value !== w.input.placeholder ? w.input.value : null);
                    e && pe(e, w.config.dateFormat);
                    w._initialDate = w.selectedDates.length > 0 ? w.selectedDates[0] : w.config.minDate && w.config.minDate.getTime() > w.now.getTime() ? w.config.minDate : w.config.maxDate && w.config.maxDate.getTime() < w.now.getTime() ? w.config.maxDate : w.now, w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth(), w.selectedDates.length > 0 && (w.latestSelectedDateObj = w.selectedDates[0]);
                    void 0 !== w.config.minTime && (w.config.minTime = w.parseDate(w.config.minTime, "H:i"));
                    void 0 !== w.config.maxTime && (w.config.maxTime = w.parseDate(w.config.maxTime, "H:i"));
                    w.minDateHasTime = !!w.config.minDate && (w.config.minDate.getHours() > 0 || w.config.minDate.getMinutes() > 0 || w.config.minDate.getSeconds() > 0), w.maxDateHasTime = !!w.config.maxDate && (w.config.maxDate.getHours() > 0 || w.config.maxDate.getMinutes() > 0 || w.config.maxDate.getSeconds() > 0)
                }(), w.utils = {
                    getDaysInMonth: function (e, n) {
                        return void 0 === e && (e = w.currentMonth), void 0 === n && (n = w.currentYear), 1 === e && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) ? 29 : w.l10n.daysInMonth[e]
                    }
                }, w.isMobile || function () {
                    var e = window.document.createDocumentFragment();
                    if (w.calendarContainer = d("div", "flatpickr-calendar"), w.calendarContainer.tabIndex = -1, !w.config.noCalendar) {
                        if (e.appendChild((w.monthNav = d("div", "flatpickr-months"), w.yearElements = [], w.monthElements = [], w.prevMonthNav = d("span", "flatpickr-prev-month"), w.prevMonthNav.innerHTML = w.config.prevArrow, w.nextMonthNav = d("span", "flatpickr-next-month"), w.nextMonthNav.innerHTML = w.config.nextArrow, V(), Object.defineProperty(w, "_hidePrevMonthArrow", {
                                get: function () {
                                    return w.__hidePrevMonthArrow
                                },
                                set: function (e) {
                                    w.__hidePrevMonthArrow !== e && (s(w.prevMonthNav, "flatpickr-disabled", e), w.__hidePrevMonthArrow = e)
                                }
                            }), Object.defineProperty(w, "_hideNextMonthArrow", {
                                get: function () {
                                    return w.__hideNextMonthArrow
                                },
                                set: function (e) {
                                    w.__hideNextMonthArrow !== e && (s(w.nextMonthNav, "flatpickr-disabled", e), w.__hideNextMonthArrow = e)
                                }
                            }), w.currentYearElement = w.yearElements[0], Ce(), w.monthNav)), w.innerContainer = d("div", "flatpickr-innerContainer"), w.config.weekNumbers) {
                            var n = function () {
                                    w.calendarContainer.classList.add("hasWeeks");
                                    var e = d("div", "flatpickr-weekwrapper");
                                    e.appendChild(d("span", "flatpickr-weekday", w.l10n.weekAbbreviation));
                                    var n = d("div", "flatpickr-weeks");
                                    return e.appendChild(n), {
                                        weekWrapper: e,
                                        weekNumbers: n
                                    }
                                }(),
                                t = n.weekWrapper,
                                a = n.weekNumbers;
                            w.innerContainer.appendChild(t), w.weekNumbers = a, w.weekWrapper = t
                        }
                        w.rContainer = d("div", "flatpickr-rContainer"), w.rContainer.appendChild(z()), w.daysContainer || (w.daysContainer = d("div", "flatpickr-days"), w.daysContainer.tabIndex = -1), U(), w.rContainer.appendChild(w.daysContainer), w.innerContainer.appendChild(w.rContainer), e.appendChild(w.innerContainer)
                    }
                    w.config.enableTime && e.appendChild(function () {
                        w.calendarContainer.classList.add("hasTime"), w.config.noCalendar && w.calendarContainer.classList.add("noCalendar");
                        var e = E(w.config);
                        w.timeContainer = d("div", "flatpickr-time"), w.timeContainer.tabIndex = -1;
                        var n = d("span", "flatpickr-time-separator", ":"),
                            t = m("flatpickr-hour", {
                                "aria-label": w.l10n.hourAriaLabel
                            });
                        w.hourElement = t.getElementsByTagName("input")[0];
                        var a = m("flatpickr-minute", {
                            "aria-label": w.l10n.minuteAriaLabel
                        });
                        w.minuteElement = a.getElementsByTagName("input")[0], w.hourElement.tabIndex = w.minuteElement.tabIndex = -1, w.hourElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getHours() : w.config.time_24hr ? e.hours : function (e) {
                            switch (e % 24) {
                                case 0:
                                case 12:
                                    return 12;
                                default:
                                    return e % 12
                            }
                        }(e.hours)), w.minuteElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getMinutes() : e.minutes), w.hourElement.setAttribute("step", w.config.hourIncrement.toString()), w.minuteElement.setAttribute("step", w.config.minuteIncrement.toString()), w.hourElement.setAttribute("min", w.config.time_24hr ? "0" : "1"), w.hourElement.setAttribute("max", w.config.time_24hr ? "23" : "12"), w.hourElement.setAttribute("maxlength", "2"), w.minuteElement.setAttribute("min", "0"), w.minuteElement.setAttribute("max", "59"), w.minuteElement.setAttribute("maxlength", "2"), w.timeContainer.appendChild(t), w.timeContainer.appendChild(n), w.timeContainer.appendChild(a), w.config.time_24hr && w.timeContainer.classList.add("time24hr");
                        if (w.config.enableSeconds) {
                            w.timeContainer.classList.add("hasSeconds");
                            var i = m("flatpickr-second");
                            w.secondElement = i.getElementsByTagName("input")[0], w.secondElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getSeconds() : e.seconds), w.secondElement.setAttribute("step", w.minuteElement.getAttribute("step")), w.secondElement.setAttribute("min", "0"), w.secondElement.setAttribute("max", "59"), w.secondElement.setAttribute("maxlength", "2"), w.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), w.timeContainer.appendChild(i)
                        }
                        w.config.time_24hr || (w.amPM = d("span", "flatpickr-am-pm", w.l10n.amPM[r((w.latestSelectedDateObj ? w.hourElement.value : w.config.defaultHour) > 11)]), w.amPM.title = w.l10n.toggleTitle, w.amPM.tabIndex = -1, w.timeContainer.appendChild(w.amPM));
                        return w.timeContainer
                    }());
                    s(w.calendarContainer, "rangeMode", "range" === w.config.mode), s(w.calendarContainer, "animate", !0 === w.config.animate), s(w.calendarContainer, "multiMonth", w.config.showMonths > 1), w.calendarContainer.appendChild(e);
                    var i = void 0 !== w.config.appendTo && void 0 !== w.config.appendTo.nodeType;
                    if ((w.config.inline || w.config.static) && (w.calendarContainer.classList.add(w.config.inline ? "inline" : "static"), w.config.inline && (!i && w.element.parentNode ? w.element.parentNode.insertBefore(w.calendarContainer, w._input.nextSibling) : void 0 !== w.config.appendTo && w.config.appendTo.appendChild(w.calendarContainer)), w.config.static)) {
                        var l = d("div", "flatpickr-wrapper");
                        w.element.parentNode && w.element.parentNode.insertBefore(l, w.element), l.appendChild(w.element), w.altInput && l.appendChild(w.altInput), l.appendChild(w.calendarContainer)
                    }
                    w.config.static || w.config.inline || (void 0 !== w.config.appendTo ? w.config.appendTo : window.document.body).appendChild(w.calendarContainer)
                }(),
                function () {
                    w.config.wrap && ["open", "close", "toggle", "clear"].forEach((function (e) {
                        Array.prototype.forEach.call(w.element.querySelectorAll("[data-" + e + "]"), (function (n) {
                            return P(n, "click", w[e])
                        }))
                    }));
                    if (w.isMobile) return void
                    function () {
                        var e = w.config.enableTime ? w.config.noCalendar ? "time" : "datetime-local" : "date";
                        w.mobileInput = d("input", w.input.className + " flatpickr-mobile"), w.mobileInput.tabIndex = 1, w.mobileInput.type = e, w.mobileInput.disabled = w.input.disabled, w.mobileInput.required = w.input.required, w.mobileInput.placeholder = w.input.placeholder, w.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", w.selectedDates.length > 0 && (w.mobileInput.defaultValue = w.mobileInput.value = w.formatDate(w.selectedDates[0], w.mobileFormatStr));
                        w.config.minDate && (w.mobileInput.min = w.formatDate(w.config.minDate, "Y-m-d"));
                        w.config.maxDate && (w.mobileInput.max = w.formatDate(w.config.maxDate, "Y-m-d"));
                        w.input.getAttribute("step") && (w.mobileInput.step = String(w.input.getAttribute("step")));
                        w.input.type = "hidden", void 0 !== w.altInput && (w.altInput.type = "hidden");
                        try {
                            w.input.parentNode && w.input.parentNode.insertBefore(w.mobileInput, w.input.nextSibling)
                        } catch (e) {}
                        P(w.mobileInput, "change", (function (e) {
                            w.setDate(g(e).value, !1, w.mobileFormatStr), De("onChange"), De("onClose")
                        }))
                    }();
                    var e = l(re, 50);
                    w._debouncedChange = l(Y, 300), w.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && P(w.daysContainer, "mouseover", (function (e) {
                        "range" === w.config.mode && oe(g(e))
                    }));
                    P(w._input, "keydown", ie), void 0 !== w.calendarContainer && P(w.calendarContainer, "keydown", ie);
                    w.config.inline || w.config.static || P(window, "resize", e);
                    void 0 !== window.ontouchstart ? P(window.document, "touchstart", X) : P(window.document, "mousedown", X);
                    P(window.document, "focus", X, {
                        capture: !0
                    }), !0 === w.config.clickOpens && (P(w._input, "focus", w.open), P(w._input, "click", w.open));
                    void 0 !== w.daysContainer && (P(w.monthNav, "click", xe), P(w.monthNav, ["keyup", "increment"], N), P(w.daysContainer, "click", me));
                    if (void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement) {
                        var n = function (e) {
                            return g(e).select()
                        };
                        P(w.timeContainer, ["increment"], _), P(w.timeContainer, "blur", _, {
                            capture: !0
                        }), P(w.timeContainer, "click", H), P([w.hourElement, w.minuteElement], ["focus", "click"], n), void 0 !== w.secondElement && P(w.secondElement, "focus", (function () {
                            return w.secondElement && w.secondElement.select()
                        })), void 0 !== w.amPM && P(w.amPM, "click", (function (e) {
                            _(e)
                        }))
                    }
                    w.config.allowInput && P(w._input, "blur", ae)
                }(), (w.selectedDates.length || w.config.noCalendar) && (w.config.enableTime && F(w.config.noCalendar ? w.latestSelectedDateObj : void 0), ye(!1)), S();
            var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !w.isMobile && n && de(), De("onReady")
        }(), w
    }

    function T(e, n) {
        for (var t = Array.prototype.slice.call(e).filter((function (e) {
                return e instanceof HTMLElement
            })), a = [], i = 0; i < t.length; i++) {
            var o = t[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = k(o, n || {}), a.push(o._flatpickr)
            } catch (e) {
                console.error(e)
            }
        }
        return 1 === a.length ? a[0] : a
    }
    "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
        return T(this, e)
    }, HTMLElement.prototype.flatpickr = function (e) {
        return T([this], e)
    });
    var I = function (e, n) {
        return "string" == typeof e ? T(window.document.querySelectorAll(e), n) : e instanceof Node ? T([e], n) : T(e, n)
    };
    return I.defaultConfig = {}, I.l10ns = {
        en: e({}, i),
        default: e({}, i)
    }, I.localize = function (n) {
        I.l10ns.default = e(e({}, I.l10ns.default), n)
    }, I.setDefaults = function (n) {
        I.defaultConfig = e(e({}, I.defaultConfig), n)
    }, I.parseDate = C({}), I.formatDate = b({}), I.compareDates = M, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function (e) {
        return T(this, e)
    }), Date.prototype.fp_incr = function (e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = I), I
}));
;
/*! For license information please see choices.min.js.LICENSE.txt */
!function(){"use strict";var e={282:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.clearChoices=t.activateChoices=t.filterChoices=t.addChoice=void 0;var n=i(883);t.addChoice=function(e){var t=e.value,i=e.label,s=e.id,r=e.groupId,o=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,h=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:s,groupId:r,disabled:o,elementId:a,customProperties:c,placeholder:l,keyCode:h}},t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(e){return void 0===e&&(e=!0),{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},783:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=void 0;var n=i(883);t.addGroup=function(e){var t=e.value,i=e.id,s=e.active,r=e.disabled;return{type:n.ACTION_TYPES.ADD_GROUP,value:t,id:i,active:s,disabled:r}}},464:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.highlightItem=t.removeItem=t.addItem=void 0;var n=i(883);t.addItem=function(e){var t=e.value,i=e.label,s=e.id,r=e.choiceId,o=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:s,choiceId:r,groupId:o,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},137:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.setIsLoading=t.resetTo=t.clearAll=void 0;var n=i(883);t.clearAll=function(){return{type:n.ACTION_TYPES.CLEAR_ALL}},t.resetTo=function(e){return{type:n.ACTION_TYPES.RESET_TO,state:e}},t.setIsLoading=function(e){return{type:n.ACTION_TYPES.SET_IS_LOADING,isLoading:e}}},373:function(e,t,i){var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,s=0,r=t.length;s<r;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=s(i(996)),o=s(i(221)),a=i(282),c=i(783),l=i(464),h=i(137),u=i(520),d=i(883),p=i(789),f=i(799),m=i(655),v=s(i(744)),g=s(i(686)),_="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,y={},E=function(){function e(t,i){var s=this;void 0===t&&(t="[data-choice]"),void 0===i&&(i={}),void 0===i.allowHTML&&console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."),this.config=r.default.all([p.DEFAULT_CONFIG,e.defaults.options,i],{arrayMerge:function(e,t){return n([],t,!0)}});var o=(0,f.diff)(this.config,p.DEFAULT_CONFIG);o.length&&console.warn("Unknown config option(s) passed",o.join(", "));var a="string"==typeof t?document.querySelector(t):t;if(!(a instanceof HTMLInputElement||a instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=a.type===d.TEXT_TYPE,this._isSelectOneElement=a.type===d.SELECT_ONE_TYPE,this._isSelectMultipleElement=a.type===d.SELECT_MULTIPLE_TYPE,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes("".concat(this.config.renderSelectedChoices))||(this.config.renderSelectedChoices="auto"),i.addItemFilter&&"function"!=typeof i.addItemFilter){var c=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);this.config.addItemFilter=c.test.bind(c)}if(this._isTextElement?this.passedElement=new u.WrappedInput({element:a,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new u.WrappedSelect({element:a,classNames:this.config.classNames,template:function(e){return s._templates.option(e)}}),this.initialised=!1,this._store=new v.default,this._initialState=m.defaultState,this._currentState=m.defaultState,this._prevState=m.defaultState,this._currentValue="",this._canSearch=!!this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=(0,f.generateId)(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var l=window.getComputedStyle(this.passedElement.element).direction;l!==window.getComputedStyle(document.documentElement).direction&&(this._direction=l)}if(this._idNames={itemChoice:"item-choice"},this._isSelectElement&&(this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options),this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&this._isTextElement){var h=this.passedElement.value.split(this.config.delimiter);this._presetItems=this._presetItems.concat(h)}if(this.passedElement.options&&this.passedElement.options.forEach((function(e){s._presetChoices.push({value:e.value,label:e.innerHTML,selected:!!e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:e.dataset["custom-properties"]})})),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised",{element:t}),void(this.initialised=!0);this.init()}return Object.defineProperty(e,"defaults",{get:function(){return Object.preventExtensions({get options(){return y},get templates(){return g.default}})},enumerable:!1,configurable:!0}),e.prototype.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},e.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=g.default,this.initialised=!1)},e.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},e.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},e.prototype.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e||!e.id)return this;var i=e.id,n=e.groupId,s=void 0===n?-1:n,r=e.value,o=void 0===r?"":r,a=e.label,c=void 0===a?"":a,h=s>=0?this._store.getGroupById(s):null;return this._store.dispatch((0,l.highlightItem)(i,!0)),t&&this.passedElement.triggerEvent(d.EVENTS.highlightItem,{id:i,value:o,label:c,groupValue:h&&h.value?h.value:null}),this},e.prototype.unhighlightItem=function(e){if(!e||!e.id)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,s=e.value,r=void 0===s?"":s,o=e.label,a=void 0===o?"":o,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch((0,l.highlightItem)(t,!1)),this.passedElement.triggerEvent(d.EVENTS.highlightItem,{id:t,value:r,label:a,groupValue:c&&c.value?c.value:null}),this},e.prototype.highlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.highlightItem(t)})),this},e.prototype.unhighlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.unhighlightItem(t)})),this},e.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.value===e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.id!==e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach((function(i){t._removeItem(i),e&&t._triggerChange(i.value)})),this},e.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive||requestAnimationFrame((function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(d.EVENTS.showDropdown,{})})),this},e.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame((function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(d.EVENTS.hideDropdown,{})})),this):this},e.prototype.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce((function(t,i){var n=e?i.value:i;return t.push(n),t}),[]);return this._isSelectOneElement?t[0]:t},e.prototype.setValue=function(e){var t=this;return this.initialised?(e.forEach((function(e){return t._setChoiceOrItem(e)})),this):this},e.prototype.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement||(Array.isArray(e)?e:[e]).forEach((function(e){return t._findAndSelectChoiceByValue(e)})),this},e.prototype.setChoices=function(e,t,i,n){var s=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var r=e(this);if("function"==typeof Promise&&r instanceof Promise)return new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return s._handleLoadingState(!0)})).then((function(){return r})).then((function(e){return s.setChoices(e,t,i,n)})).catch((function(e){s.config.silent||console.error(e)})).then((function(){return s._handleLoadingState(!1)})).then((function(){return s}));if(!Array.isArray(r))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof r));return this.setChoices(r,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach((function(e){if(e.choices)s._addGroup({id:e.id?parseInt("".concat(e.id),10):null,group:e,valueKey:t,labelKey:i});else{var n=e;s._addChoice({value:n[t],label:n[i],isSelected:!!n.selected,isDisabled:!!n.disabled,placeholder:!!n.placeholder,customProperties:n.customProperties})}})),this._stopLoading(),this},e.prototype.clearChoices=function(){return this._store.dispatch((0,a.clearChoices)()),this},e.prototype.clearStore=function(){return this._store.dispatch((0,h.clearAll)()),this},e.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0))),this},e.prototype._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},e.prototype._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,s=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame((function(){return e.choiceList.scrollToTop()})),i.length>=1&&!this._isSearching){var r=n.filter((function(e){return!0===e.placeholder&&-1===e.groupId}));r.length>=1&&(s=this._createChoicesFragment(r,s)),s=this._createGroupsFragment(i,n,s)}else n.length>=1&&(s=this._createChoicesFragment(n,s));if(s.childNodes&&s.childNodes.length>0){var o=this._store.activeItems,a=this._canAddItem(o,this.input.value);if(a.response)this.choiceList.append(s),this._highlightChoice();else{var c=this._getTemplate("notice",a.notice);this.choiceList.append(c)}}else{var l=void 0;c=void 0,this._isSearching?(c="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,l=this._getTemplate("notice",c,"no-results")):(c="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,l=this._getTemplate("notice",c,"no-choices")),this.choiceList.append(l)}},e.prototype._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},e.prototype._createGroupsFragment=function(e,t,i){var n=this;return void 0===i&&(i=document.createDocumentFragment()),this.config.shouldSort&&e.sort(this.config.sorter),e.forEach((function(e){var s=function(e){return t.filter((function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)}))}(e);if(s.length>=1){var r=n._getTemplate("choiceGroup",e);i.appendChild(r),n._createChoicesFragment(s,i,!0)}})),i},e.prototype._createChoicesFragment=function(e,t,i){var s=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var r=this.config,o=r.renderSelectedChoices,a=r.searchResultLimit,c=r.renderChoiceLimit,l=this._isSearching?f.sortByScore:this.config.sorter,h=function(e){if("auto"!==o||s._isSelectOneElement||!e.selected){var i=s._getTemplate("choice",e,s.config.itemSelectText);t.appendChild(i)}},u=e;"auto"!==o||this._isSelectOneElement||(u=e.filter((function(e){return!e.selected})));var d=u.reduce((function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e}),{placeholderChoices:[],normalChoices:[]}),p=d.placeholderChoices,m=d.normalChoices;(this.config.shouldSort||this._isSearching)&&m.sort(l);var v=u.length,g=this._isSelectOneElement?n(n([],p,!0),m,!0):m;this._isSearching?v=a:c&&c>0&&!i&&(v=c);for(var _=0;_<v;_+=1)g[_]&&h(g[_]);return t},e.prototype._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,s=n.shouldSortItems,r=n.sorter,o=n.removeItemButton;return s&&!this._isSelectOneElement&&e.sort(r),this._isTextElement?this.passedElement.value=e.map((function(e){return e.value})).join(this.config.delimiter):this.passedElement.options=e,e.forEach((function(e){var n=i._getTemplate("item",e,o);t.appendChild(n)})),t},e.prototype._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent(d.EVENTS.change,{value:e})},e.prototype._selectPlaceholderChoice=function(e){this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value)},e.prototype._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode&&t.parentNode.dataset.id,n=i&&e.find((function(e){return e.id===parseInt(i,10)}));n&&(this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._store.placeholderChoice&&this._selectPlaceholderChoice(this._store.placeholderChoice))}},e.prototype._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var s=t.dataset.id;e.forEach((function(e){e.id!==parseInt("".concat(s),10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)})),this.input.focus()}},e.prototype._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=i&&this._store.getChoiceById(i);if(n){var s=e[0]&&e[0].keyCode?e[0].keyCode:void 0,r=this.dropdown.isActive;n.keyCode=s,this.passedElement.triggerEvent(d.EVENTS.choice,{choice:n}),n.selected||n.disabled||this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value)),this.clearInput(),r&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},e.prototype._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some((function(e){return e.highlighted}));this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},e.prototype._startLoading=function(){this._store.dispatch((0,h.setIsLoading)(!0))},e.prototype._stopLoading=function(){this._store.dispatch((0,h.setIsLoading)(!1))},e.prototype._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild(".".concat(this.config.classNames.placeholder));e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText))&&this.itemList.append(t):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t&&(t.innerHTML=this._placeholderValue||""):this.input.placeholder=this._placeholderValue||"")},e.prototype._handleSearch=function(e){if(this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,s=i.searchChoices,r=t.some((function(e){return!e.active}));if(null!=e&&e.length>=n){var o=s?this._searchChoices(e):0;this.passedElement.triggerEvent(d.EVENTS.search,{value:e,resultCount:o})}else r&&(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0)))}},e.prototype._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var s=(0,f.existsInArray)(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&s&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},e.prototype._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t==="".concat(i," "))return 0;var s=this._store.searchableChoices,r=t,c=Object.assign(this.config.fuseOptions,{keys:n([],this.config.searchFields,!0),includeMatches:!0}),l=new o.default(s,c).search(r);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch((0,a.filterChoices)(l)),l.length},e.prototype._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},e.prototype._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},e.prototype._onKeyDown=function(e){var t=e.keyCode,i=this._store.activeItems,n=this.input.isFocussed,s=this.dropdown.isActive,r=this.itemList.hasChildren(),o=String.fromCharCode(t),a=/[a-zA-Z0-9-_ ]/.test(o),c=d.KEY_CODES.BACK_KEY,l=d.KEY_CODES.DELETE_KEY,h=d.KEY_CODES.ENTER_KEY,u=d.KEY_CODES.A_KEY,p=d.KEY_CODES.ESC_KEY,f=d.KEY_CODES.UP_KEY,m=d.KEY_CODES.DOWN_KEY,v=d.KEY_CODES.PAGE_UP_KEY,g=d.KEY_CODES.PAGE_DOWN_KEY;switch(this._isTextElement||s||!a||(this.showDropdown(),this.input.isFocussed||(this.input.value+=o.toLowerCase())),t){case u:return this._onSelectKey(e,r);case h:return this._onEnterKey(e,i,s);case p:return this._onEscapeKey(s);case f:case v:case m:case g:return this._onDirectionKey(e,s);case l:case c:return this._onDeleteKey(e,i,n)}},e.prototype._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,s=this._store.activeItems,r=this._canAddItem(s,n),o=d.KEY_CODES.BACK_KEY,c=d.KEY_CODES.DELETE_KEY;if(this._isTextElement)if(r.notice&&n){var l=this._getTemplate("notice",r.notice);this.dropdown.element.innerHTML=l.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0);else{var h=(i===o||i===c)&&t&&!t.value,u=!this._isTextElement&&this._isSearching,p=this._canSearch&&r.response;h&&u?(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0))):p&&this._handleSearch(this.input.rawValue)}this._canSearch=this.config.searchEnabled},e.prototype._onSelectKey=function(e,t){var i=e.ctrlKey,n=e.metaKey;(i||n)&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},e.prototype._onEnterKey=function(e,t,i){var n=e.target,s=d.KEY_CODES.ENTER_KEY,r=n&&n.hasAttribute("data-button");if(this._isTextElement&&n&&n.value){var o=this.input.value;this._canAddItem(t,o).response&&(this.hideDropdown(!0),this._addItem({value:o}),this._triggerChange(o),this.clearInput())}if(r&&(this._handleButtonAction(t,n),e.preventDefault()),i){var a=this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));a&&(t[0]&&(t[0].keyCode=s),this._handleChoiceAction(t,a)),e.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),e.preventDefault())},e.prototype._onEscapeKey=function(e){e&&(this.hideDropdown(!0),this.containerOuter.focus())},e.prototype._onDirectionKey=function(e,t){var i=e.keyCode,n=e.metaKey,s=d.KEY_CODES.DOWN_KEY,r=d.KEY_CODES.PAGE_UP_KEY,o=d.KEY_CODES.PAGE_DOWN_KEY;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var a=i===s||i===o?1:-1,c="[data-choice-selectable]",l=void 0;if(n||i===o||i===r)l=a>0?this.dropdown.element.querySelector("".concat(c,":last-of-type")):this.dropdown.element.querySelector(c);else{var h=this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));l=h?(0,f.getAdjacentEl)(h,c,a):this.dropdown.element.querySelector(c)}l&&((0,f.isScrolledIntoView)(l,this.choiceList.element,a)||this.choiceList.scrollToChildElement(l,a),this._highlightChoice(l)),e.preventDefault()}},e.prototype._onDeleteKey=function(e,t,i){var n=e.target;this._isSelectOneElement||n.value||!i||(this._handleBackspace(t),e.preventDefault())},e.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},e.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation()),this._wasTap=!0},e.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(_&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var s=t.closest("[data-button],[data-item],[data-choice]");if(s instanceof HTMLElement){var r=e.shiftKey,o=this._store.activeItems,a=s.dataset;"button"in a?this._handleButtonAction(o,s):"item"in a?this._handleItemAction(o,s,r):"choice"in a&&this._handleChoiceAction(o,s)}e.preventDefault()}}},e.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},e.prototype._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},e.prototype._onFocus=function(e){var t,i=this,n=e.target;n&&this.containerOuter.element.contains(n)&&((t={})[d.TEXT_TYPE]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[d.SELECT_ONE_TYPE]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[d.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},e.prototype._onBlur=function(e){var t,i=this,n=e.target;if(n&&this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var s=this._store.activeItems.some((function(e){return e.highlighted}));((t={})[d.TEXT_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),s&&i.unhighlightAll(),i.hideDropdown(!0))},t[d.SELECT_ONE_TYPE]=function(){i.containerOuter.removeFocusState(),(n===i.input.element||n===i.containerOuter.element&&!i._canSearch)&&i.hideDropdown(!0)},t[d.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),i.hideDropdown(!0),s&&i.unhighlightAll())},t)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},e.prototype._onFormReset=function(){this._store.dispatch((0,h.resetTo)(this._initialState))},e.prototype._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=e;Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach((function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")})),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(d.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},e.prototype._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,s=e.choiceId,r=void 0===s?-1:s,o=e.groupId,a=void 0===o?-1:o,c=e.customProperties,h=void 0===c?{}:c,u=e.placeholder,p=void 0!==u&&u,f=e.keyCode,m=void 0===f?-1:f,v="string"==typeof t?t.trim():t,g=this._store.items,_=n||v,y=r||-1,E=a>=0?this._store.getGroupById(a):null,b=g?g.length+1:1;this.config.prependValue&&(v=this.config.prependValue+v.toString()),this.config.appendValue&&(v+=this.config.appendValue.toString()),this._store.dispatch((0,l.addItem)({value:v,label:_,id:b,choiceId:y,groupId:a,customProperties:h,placeholder:p,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(b),this.passedElement.triggerEvent(d.EVENTS.addItem,{id:b,value:v,label:_,customProperties:h,groupValue:E&&E.value?E.value:null,keyCode:m})},e.prototype._removeItem=function(e){var t=e.id,i=e.value,n=e.label,s=e.customProperties,r=e.choiceId,o=e.groupId,a=o&&o>=0?this._store.getGroupById(o):null;t&&r&&(this._store.dispatch((0,l.removeItem)(t,r)),this.passedElement.triggerEvent(d.EVENTS.removeItem,{id:t,value:i,label:n,customProperties:s,groupValue:a&&a.value?a.value:null}))},e.prototype._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,s=e.isSelected,r=void 0!==s&&s,o=e.isDisabled,c=void 0!==o&&o,l=e.groupId,h=void 0===l?-1:l,u=e.customProperties,d=void 0===u?{}:u,p=e.placeholder,f=void 0!==p&&p,m=e.keyCode,v=void 0===m?-1:m;if(null!=t){var g=this._store.choices,_=n||t,y=g?g.length+1:1,E="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(y);this._store.dispatch((0,a.addChoice)({id:y,groupId:h,elementId:E,value:t,label:_,disabled:c,customProperties:d,placeholder:f,keyCode:v})),r&&this._addItem({value:t,label:_,choiceId:y,customProperties:d,placeholder:f,keyCode:v})}},e.prototype._addGroup=function(e){var t=this,i=e.group,n=e.id,s=e.valueKey,r=void 0===s?"value":s,o=e.labelKey,a=void 0===o?"label":o,l=(0,f.isType)("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),h=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;l?(this._store.dispatch((0,c.addGroup)({value:i.label,id:h,active:!0,disabled:u})),l.forEach((function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[r],label:(0,f.isType)("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:h,customProperties:e.customProperties,placeholder:e.placeholder})}))):this._store.dispatch((0,c.addGroup)({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},e.prototype._getTemplate=function(e){for(var t,i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return(t=this._templates[e]).call.apply(t,n([this,this.config],i,!1))},e.prototype._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,f.strToEl)),this._templates=(0,r.default)(g.default,t)},e.prototype._createElements=function(){this.containerOuter=new u.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type,this.config.labelId),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new u.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new u.Input({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new u.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new u.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new u.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},e.prototype._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},e.prototype._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&i.parentNode&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach((function(e){return t._addGroup({group:e,id:e.id||null})}))},e.prototype._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some((function(e){return e.selected})),n=e.findIndex((function(e){return void 0===e.disabled||!e.disabled}));e.forEach((function(e,s){var r=e.value,o=void 0===r?"":r,a=e.label,c=e.customProperties,l=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var h=!(!t._isSelectOneElement||i||s!==n)||e.selected,u=e.disabled;t._addChoice({value:o,label:a,isSelected:!!h,isDisabled:!!u,placeholder:!!l,customProperties:c})}else t._addChoice({value:o,label:a,isSelected:!!e.selected,isDisabled:!!e.disabled,placeholder:!!e.placeholder,customProperties:c})}))},e.prototype._addPredefinedItems=function(e){var t=this;e.forEach((function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})}))},e.prototype._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[(0,f.getType)(e).toLowerCase()]()},e.prototype._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find((function(i){return t.config.valueComparer(i.value,e)}));i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},e.prototype._generatePlaceholderValue=function(){if(this._isSelectElement&&this.passedElement.placeholderOption){var e=this.passedElement.placeholderOption;return e?e.text:null}var t=this.config,i=t.placeholder,n=t.placeholderValue,s=this.passedElement.element.dataset;if(i){if(n)return n;if(s.placeholder)return s.placeholder}return null},e}();t.default=E},613:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),s=i(883),r=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,s=e.position;this.element=t,this.classNames=n,this.type=i,this.position=s,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return e.prototype.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: ".concat(e+1,"px)")).matches:"top"===this.position&&(t=!0),t},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},e.prototype.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},e.prototype.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},e.prototype.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===s.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},e.prototype.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===s.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},e.prototype.wrap=function(e){(0,n.wrap)(e,this.element)},e.prototype.unwrap=function(e){this.element.parentNode&&(this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element))},e.prototype.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},e.prototype.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=r},217:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}return Object.defineProperty(e.prototype,"distanceFromTopWindow",{get:function(){return this.element.getBoundingClientRect().bottom},enumerable:!1,configurable:!0}),e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},e.prototype.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},e}();t.default=i},520:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WrappedSelect=t.WrappedInput=t.List=t.Input=t.Container=t.Dropdown=void 0;var s=n(i(217));t.Dropdown=s.default;var r=n(i(613));t.Container=r.default;var o=n(i(11));t.Input=o.default;var a=n(i(624));t.List=a.default;var c=n(i(541));t.WrappedInput=c.default;var l=n(i(982));t.WrappedSelect=l.default},11:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),s=i(883),r=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,s=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=s,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(e.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return(0,n.sanitise)(this.element.value)},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rawValue",{get:function(){return this.element.value},enumerable:!1,configurable:!0}),e.prototype.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},e.prototype.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.blur=function(){this.isFocussed&&this.element.blur()},e.prototype.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},e.prototype.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth="".concat(n.length+1,"ch"),t.width="".concat(i.length+1,"ch")},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype._onInput=function(){this.type!==s.SELECT_ONE_TYPE&&this.setWidth()},e.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=r},624:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(883),s=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return e.prototype.clear=function(){this.element.innerHTML=""},e.prototype.append=function(e){this.element.appendChild(e)},e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.hasChildren=function(){return this.element.hasChildNodes()},e.prototype.scrollToTop=function(){this.element.scrollTop=0},e.prototype.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,s=this.element.scrollTop+n,r=e.offsetHeight,o=e.offsetTop+r,a=t>0?this.element.scrollTop+o-s:e.offsetTop;requestAnimationFrame((function(){i._animateScroll(a,t)}))}},e.prototype._scrollDown=function(e,t,i){var n=(i-e)/t,s=n>1?n:1;this.element.scrollTop=e+s},e.prototype._scrollUp=function(e,t,i){var n=(e-i)/t,s=n>1?n:1;this.element.scrollTop=e-s},e.prototype._animateScroll=function(e,t){var i=this,s=n.SCROLLING_SPEED,r=this.element.scrollTop,o=!1;t>0?(this._scrollDown(r,s,e),r<e&&(o=!0)):(this._scrollUp(r,s,e),r>e&&(o=!0)),o&&requestAnimationFrame((function(){i._animateScroll(e,t)}))},e}();t.default=s},730:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),s=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}return Object.defineProperty(e.prototype,"isActive",{get:function(){return"active"===this.element.dataset.choice},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this.element.dir},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),e.prototype.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},e.prototype.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},e.prototype.triggerEvent=function(e,t){(0,n.dispatchEvent)(this.element,e,t)},e}();t.default=s},541:function(e,t,i){var n,s=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var i=t.element,n=t.classNames,s=t.delimiter,r=e.call(this,{element:i,classNames:n})||this;return r.delimiter=s,r}return s(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!1,configurable:!0}),t}(r(i(730)).default);t.default=o},982:function(e,t,i){var n,s=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var i=t.element,n=t.classNames,s=t.template,r=e.call(this,{element:i,classNames:n})||this;return r.template=s,r}return s(t,e),Object.defineProperty(t.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"optionGroups",{get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach((function(e){return n=e,s=t.template(n),void i.appendChild(s);var n,s})),this.appendDocFragment(i)},enumerable:!1,configurable:!0}),t.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},t}(r(i(730)).default);t.default=o},883:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SCROLLING_SPEED=t.SELECT_MULTIPLE_TYPE=t.SELECT_ONE_TYPE=t.TEXT_TYPE=t.KEY_CODES=t.ACTION_TYPES=t.EVENTS=void 0,t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL",RESET_TO:"RESET_TO",SET_IS_LOADING:"SET_IS_LOADING"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.TEXT_TYPE="text",t.SELECT_ONE_TYPE="select-one",t.SELECT_MULTIPLE_TYPE="select-multiple",t.SCROLLING_SPEED=4},789:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CONFIG=t.DEFAULT_CLASSNAMES=void 0;var n=i(799);t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,allowHTML:!0,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'.concat((0,n.sanitise)(e),'"</b>')},maxItemText:function(e){return"Only ".concat(e," values can be added")},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},labelId:"",callbackOnInit:null,callbackOnCreateTemplates:null,classNames:t.DEFAULT_CLASSNAMES}},18:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},978:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},948:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},359:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},285:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},533:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},187:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),s=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),s(i(18),t),s(i(978),t),s(i(948),t),s(i(359),t),s(i(285),t),s(i(533),t),s(i(287),t),s(i(132),t),s(i(837),t),s(i(598),t),s(i(369),t),s(i(37),t),s(i(47),t),s(i(923),t),s(i(876),t)},287:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},132:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},837:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},598:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},37:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},369:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},47:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},923:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},876:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},799:function(e,t){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.diff=t.cloneObject=t.existsInArray=t.dispatchEvent=t.sortByScore=t.sortByAlpha=t.strToEl=t.sanitise=t.isScrolledIntoView=t.getAdjacentEl=t.wrap=t.isType=t.getType=t.generateId=t.generateChars=t.getRandomNumber=void 0,t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.generateChars=function(e){return Array.from({length:e},(function(){return(0,t.getRandomNumber)(0,36).toString(36)})).join("")},t.generateId=function(e,i){var n=e.id||e.name&&"".concat(e.name,"-").concat((0,t.generateChars)(2))||(0,t.generateChars)(4);return n=n.replace(/(:|\.|\[|\]|,)/g,""),"".concat(i,"-").concat(n)},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isType=function(e,i){return null!=i&&(0,t.getType)(i)===e},t.wrap=function(e,t){return void 0===t&&(t=document.createElement("div")),e.parentNode&&(e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)),t.appendChild(e)},t.getAdjacentEl=function(e,t,i){void 0===i&&(i=1);for(var n="".concat(i>0?"next":"previous","ElementSibling"),s=e[n];s;){if(s.matches(t))return s;s=s[n]}return s},t.isScrolledIntoView=function(e,t,i){return void 0===i&&(i=1),!!e&&(i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop)},t.sanitise=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.strToEl=(i=document.createElement("div"),function(e){var t=e.trim();i.innerHTML=t;for(var n=i.children[0];i.firstChild;)i.removeChild(i.firstChild);return n}),t.sortByAlpha=function(e,t){var i=e.value,n=e.label,s=void 0===n?i:n,r=t.value,o=t.label,a=void 0===o?r:o;return s.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},t.sortByScore=function(e,t){var i=e.score,n=void 0===i?0:i,s=t.score;return n-(void 0===s?0:s)},t.dispatchEvent=function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)},t.existsInArray=function(e,t,i){return void 0===i&&(i="value"),e.some((function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t}))},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter((function(e){return n.indexOf(e)<0}))}},273:function(e,t){var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,s=0,r=t.length;s<r;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_CHOICE":var s=n,r={id:s.id,elementId:s.elementId,groupId:s.groupId,value:s.value,label:s.label||s.value,disabled:s.disabled||!1,selected:!1,active:!0,score:9999,customProperties:s.customProperties,placeholder:s.placeholder||!1};return i(i([],e,!0),[r],!1);case"ADD_ITEM":var o=n;return o.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt("".concat(o.choiceId),10)&&(t.selected=!0),t})):e;case"REMOVE_ITEM":var a=n;return a.choiceId&&a.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt("".concat(a.choiceId),10)&&(t.selected=!1),t})):e;case"FILTER_CHOICES":var c=n;return e.map((function(e){var t=e;return t.active=c.results.some((function(e){var i=e.item,n=e.score;return i.id===t.id&&(t.score=n,!0)})),t}));case"ACTIVATE_CHOICES":var l=n;return e.map((function(e){var t=e;return t.active=l.active,t}));case"CLEAR_CHOICES":return t.defaultState;default:return e}}},871:function(e,t){var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,s=0,r=t.length;s<r;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_GROUP":var s=n;return i(i([],e,!0),[{id:s.id,value:s.value,active:s.active,disabled:s.disabled}],!1);case"CLEAR_CHOICES":return[];default:return e}}},655:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0;var s=i(857),r=n(i(52)),o=n(i(871)),a=n(i(273)),c=n(i(502)),l=i(799);t.defaultState={groups:[],items:[],choices:[],loading:!1};var h=(0,s.combineReducers)({items:r.default,groups:o.default,choices:a.default,loading:c.default});t.default=function(e,i){var n=e;if("CLEAR_ALL"===i.type)n=t.defaultState;else if("RESET_TO"===i.type)return(0,l.cloneObject)(i.state);return h(n,i)}},52:function(e,t){var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,s=0,r=t.length;s<r;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_ITEM":var s=n;return i(i([],e,!0),[{id:s.id,choiceId:s.choiceId,groupId:s.groupId,value:s.value,label:s.label,active:!0,highlighted:!1,customProperties:s.customProperties,placeholder:s.placeholder||!1,keyCode:null}],!1).map((function(e){var t=e;return t.highlighted=!1,t}));case"REMOVE_ITEM":return e.map((function(e){var t=e;return t.id===n.id&&(t.active=!1),t}));case"HIGHLIGHT_ITEM":var r=n;return e.map((function(e){var t=e;return t.id===r.id&&(t.highlighted=r.highlighted),t}));default:return e}}},502:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=!1,t.default=function(e,i){return void 0===e&&(e=t.defaultState),void 0===i&&(i={}),"SET_IS_LOADING"===i.type?i.isLoading:e}},744:function(e,t,i){var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,s=0,r=t.length;s<r;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(857),o=s(i(655)),a=function(){function e(){this._store=(0,r.createStore)(o.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}return e.prototype.subscribe=function(e){this._store.subscribe(e)},e.prototype.dispatch=function(e){this._store.dispatch(e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._store.getState()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.state.items},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeItems",{get:function(){return this.items.filter((function(e){return!0===e.active}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"highlightedActiveItems",{get:function(){return this.items.filter((function(e){return e.active&&e.highlighted}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"choices",{get:function(){return this.state.choices},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeChoices",{get:function(){return this.choices.filter((function(e){return!0===e.active}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectableChoices",{get:function(){return this.choices.filter((function(e){return!0!==e.disabled}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"searchableChoices",{get:function(){return this.selectableChoices.filter((function(e){return!0!==e.placeholder}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"placeholderChoice",{get:function(){return n([],this.choices,!0).reverse().find((function(e){return!0===e.placeholder}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groups",{get:function(){return this.state.groups},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeGroups",{get:function(){var e=this.groups,t=this.choices;return e.filter((function(e){var i=!0===e.active&&!1===e.disabled,n=t.some((function(e){return!0===e.active&&!1===e.disabled}));return i&&n}),[])},enumerable:!1,configurable:!0}),e.prototype.isLoading=function(){return this.state.loading},e.prototype.getChoiceById=function(e){return this.activeChoices.find((function(t){return t.id===parseInt(e,10)}))},e.prototype.getGroupById=function(e){return this.groups.find((function(t){return t.id===e}))},e}();t.default=a},686:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i={containerOuter:function(e,t,i,n,s,r,o){var a=e.classNames.containerOuter,c=Object.assign(document.createElement("div"),{className:a});return c.dataset.type=r,t&&(c.dir=t),n&&(c.tabIndex=0),i&&(c.setAttribute("role",s?"combobox":"listbox"),s&&c.setAttribute("aria-autocomplete","list")),c.setAttribute("aria-haspopup","true"),c.setAttribute("aria-expanded","false"),o&&c.setAttribute("aria-labeledby",o),c},containerInner:function(e){var t=e.classNames.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.classNames,n=i.list,s=i.listSingle,r=i.listItems;return Object.assign(document.createElement("div"),{className:"".concat(n," ").concat(t?s:r)})},placeholder:function(e,t){var i,n=e.allowHTML,s=e.classNames.placeholder;return Object.assign(document.createElement("div"),((i={className:s})[n?"innerHTML":"innerText"]=t,i))},item:function(e,t,i){var n,s,r=e.allowHTML,o=e.classNames,a=o.item,c=o.button,l=o.highlightedState,h=o.itemSelectable,u=o.placeholder,d=t.id,p=t.value,f=t.label,m=t.customProperties,v=t.active,g=t.disabled,_=t.highlighted,y=t.placeholder,E=Object.assign(document.createElement("div"),((n={className:a})[r?"innerHTML":"innerText"]=f,n));if(Object.assign(E.dataset,{item:"",id:d,value:p,customProperties:m}),v&&E.setAttribute("aria-selected","true"),g&&E.setAttribute("aria-disabled","true"),y&&E.classList.add(u),E.classList.add(_?l:h),i){g&&E.classList.remove(h),E.dataset.deletable="";var b="Remove item",S=Object.assign(document.createElement("button"),((s={type:"button",className:c})[r?"innerHTML":"innerText"]=b,s));S.setAttribute("aria-label","".concat(b,": '").concat(p,"'")),S.dataset.button="",E.appendChild(S)}return E},choiceList:function(e,t){var i=e.classNames.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i,n=e.allowHTML,s=e.classNames,r=s.group,o=s.groupHeading,a=s.itemDisabled,c=t.id,l=t.value,h=t.disabled,u=Object.assign(document.createElement("div"),{className:"".concat(r," ").concat(h?a:"")});return u.setAttribute("role","group"),Object.assign(u.dataset,{group:"",id:c,value:l}),h&&u.setAttribute("aria-disabled","true"),u.appendChild(Object.assign(document.createElement("div"),((i={className:o})[n?"innerHTML":"innerText"]=l,i))),u},choice:function(e,t,i){var n,s=e.allowHTML,r=e.classNames,o=r.item,a=r.itemChoice,c=r.itemSelectable,l=r.selectedState,h=r.itemDisabled,u=r.placeholder,d=t.id,p=t.value,f=t.label,m=t.groupId,v=t.elementId,g=t.disabled,_=t.selected,y=t.placeholder,E=Object.assign(document.createElement("div"),((n={id:v})[s?"innerHTML":"innerText"]=f,n.className="".concat(o," ").concat(a),n));return _&&E.classList.add(l),y&&E.classList.add(u),E.setAttribute("role",m&&m>0?"treeitem":"option"),Object.assign(E.dataset,{choice:"",id:d,value:p,selectText:i}),g?(E.classList.add(h),E.dataset.choiceDisabled="",E.setAttribute("aria-disabled","true")):(E.classList.add(c),E.dataset.choiceSelectable=""),E},input:function(e,t){var i=e.classNames,n=i.input,s=i.inputCloned,r=Object.assign(document.createElement("input"),{type:"search",name:"search_terms",className:"".concat(n," ").concat(s),autocomplete:"off",autocapitalize:"off",spellcheck:!1});return r.setAttribute("role","textbox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-label",t),r},dropdown:function(e){var t=e.classNames,i=t.list,n=t.listDropdown,s=document.createElement("div");return s.classList.add(i,n),s.setAttribute("aria-expanded","false"),s},notice:function(e,t,i){var n,s=e.allowHTML,r=e.classNames,o=r.item,a=r.itemChoice,c=r.noResults,l=r.noChoices;void 0===i&&(i="");var h=[o,a];return"no-choices"===i?h.push(l):"no-results"===i&&h.push(c),Object.assign(document.createElement("div"),((n={})[s?"innerHTML":"innerText"]=t,n.className=h.join(" "),n))},option:function(e){var t=e.label,i=e.value,n=e.customProperties,s=e.active,r=e.disabled,o=new Option(t,i,!1,s);return n&&(o.dataset.customProperties="".concat(n)),o.disabled=!!r,o}};t.default=i},996:function(e){var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function s(e,t,i){return e.concat(t).map((function(e){return n(e,i)}))}function r(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function o(e,t){try{return t in e}catch(e){return!1}}function a(e,i,c){(c=c||{}).arrayMerge=c.arrayMerge||s,c.isMergeableObject=c.isMergeableObject||t,c.cloneUnlessOtherwiseSpecified=n;var l=Array.isArray(i);return l===Array.isArray(e)?l?c.arrayMerge(e,i,c):function(e,t,i){var s={};return i.isMergeableObject(e)&&r(e).forEach((function(t){s[t]=n(e[t],i)})),r(t).forEach((function(r){(function(e,t){return o(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(o(e,r)&&i.isMergeableObject(t[r])?s[r]=function(e,t){if(!t.customMerge)return a;var i=t.customMerge(e);return"function"==typeof i?i:a}(r,i)(e[r],t[r],i):s[r]=n(t[r],i))})),s}(e,i,c):n(i,c)}a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return a(e,i,t)}),{})};var c=a;e.exports=c},221:function(e,t,i){function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===l(e)}function s(e){return"string"==typeof e}function r(e){return"number"==typeof e}function o(e){return"object"==typeof e}function a(e){return null!=e}function c(e){return!e.trim().length}function l(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}i.r(t),i.d(t,{default:function(){return R}});const h=Object.prototype.hasOwnProperty;class u{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let i=d(e);t+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function d(e){let t=null,i=null,r=null,o=1;if(s(e)||n(e))r=e,t=p(e),i=f(e);else{if(!h.call(e,"name"))throw new Error("Missing name property in key");const n=e.name;if(r=n,h.call(e,"weight")&&(o=e.weight,o<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(n));t=p(n),i=f(n)}return{path:t,id:i,weight:o,src:r}}function p(e){return n(e)?e:e.split(".")}function f(e){return n(e)?e.join("."):e}var m={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let i=[],c=!1;const h=(e,t,u)=>{if(a(e))if(t[u]){const d=e[t[u]];if(!a(d))return;if(u===t.length-1&&(s(d)||r(d)||function(e){return!0===e||!1===e||function(e){return o(e)&&null!==e}(e)&&"[object Boolean]"==l(e)}(d)))i.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(d));else if(n(d)){c=!0;for(let e=0,i=d.length;e<i;e+=1)h(d[e],t,u+1)}else t.length&&h(d,t,u+1)}else i.push(e)};return h(e,s(t)?t.split("."):t,0),c?i:i[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const v=/[^ ]+/g;class g{constructor({getFn:e=m.getFn,fieldNormWeight:t=m.fieldNormWeight}={}){this.norm=function(e=1,t=3){const i=new Map,n=Math.pow(10,t);return{get(t){const s=t.match(v).length;if(i.has(s))return i.get(s);const r=1/Math.pow(s,.5*e),o=parseFloat(Math.round(r*n)/n);return i.set(s,o),o},clear(){i.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,s(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();s(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,i=this.size();t<i;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!a(e)||c(e))return;let i={v:e,i:t,n:this.norm.get(e)};this.records.push(i)}_addObject(e,t){let i={i:t,$:{}};this.keys.forEach(((t,r)=>{let o=this.getFn(e,t.path);if(a(o))if(n(o)){let e=[];const t=[{nestedArrIndex:-1,value:o}];for(;t.length;){const{nestedArrIndex:i,value:r}=t.pop();if(a(r))if(s(r)&&!c(r)){let t={v:r,i:i,n:this.norm.get(r)};e.push(t)}else n(r)&&r.forEach(((e,i)=>{t.push({nestedArrIndex:i,value:e})}))}i.$[r]=e}else if(!c(o)){let e={v:o,n:this.norm.get(o)};i.$[r]=e}})),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function _(e,t,{getFn:i=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const s=new g({getFn:i,fieldNormWeight:n});return s.setKeys(e.map(d)),s.setSources(t),s.create(),s}function y(e,{errors:t=0,currentLocation:i=0,expectedLocation:n=0,distance:s=m.distance,ignoreLocation:r=m.ignoreLocation}={}){const o=t/e.length;if(r)return o;const a=Math.abs(n-i);return s?o+a/s:a?1:o}const E=32;function b(e){let t={};for(let i=0,n=e.length;i<n;i+=1){const s=e.charAt(i);t[s]=(t[s]||0)|1<<n-i-1}return t}class S{constructor(e,{location:t=m.location,threshold:i=m.threshold,distance:n=m.distance,includeMatches:s=m.includeMatches,findAllMatches:r=m.findAllMatches,minMatchCharLength:o=m.minMatchCharLength,isCaseSensitive:a=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:t,threshold:i,distance:n,includeMatches:s,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:c},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:b(e),startIndex:t})},h=this.pattern.length;if(h>E){let e=0;const t=h%E,i=h-t;for(;e<i;)l(this.pattern.substr(e,E),e),e+=E;if(t){const e=h-E;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:i}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return i&&(t.indices=[[0,e.length-1]]),t}const{location:n,distance:s,threshold:r,findAllMatches:o,minMatchCharLength:a,ignoreLocation:c}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:f,score:v,indices:g}=function(e,t,i,{location:n=m.location,distance:s=m.distance,threshold:r=m.threshold,findAllMatches:o=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:c=m.includeMatches,ignoreLocation:l=m.ignoreLocation}={}){if(t.length>E)throw new Error("Pattern length exceeds max of 32.");const h=t.length,u=e.length,d=Math.max(0,Math.min(n,u));let p=r,f=d;const v=a>1||c,g=v?Array(u):[];let _;for(;(_=e.indexOf(t,f))>-1;){let e=y(t,{currentLocation:_,expectedLocation:d,distance:s,ignoreLocation:l});if(p=Math.min(e,p),f=_+h,v){let e=0;for(;e<h;)g[_+e]=1,e+=1}}f=-1;let b=[],S=1,I=h+u;const O=1<<h-1;for(let n=0;n<h;n+=1){let r=0,a=I;for(;r<a;)y(t,{errors:n,currentLocation:d+a,expectedLocation:d,distance:s,ignoreLocation:l})<=p?r=a:I=a,a=Math.floor((I-r)/2+r);I=a;let c=Math.max(1,d-a+1),m=o?u:Math.min(d+a,u)+h,_=Array(m+2);_[m+1]=(1<<n)-1;for(let r=m;r>=c;r-=1){let o=r-1,a=i[e.charAt(o)];if(v&&(g[o]=+!!a),_[r]=(_[r+1]<<1|1)&a,n&&(_[r]|=(b[r+1]|b[r])<<1|1|b[r+1]),_[r]&O&&(S=y(t,{errors:n,currentLocation:o,expectedLocation:d,distance:s,ignoreLocation:l}),S<=p)){if(p=S,f=o,f<=d)break;c=Math.max(1,2*d-f)}}if(y(t,{errors:n+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:l})>p)break;b=_}const C={isMatch:f>=0,score:Math.max(.001,S)};if(v){const e=function(e=[],t=m.minMatchCharLength){let i=[],n=-1,s=-1,r=0;for(let o=e.length;r<o;r+=1){let o=e[r];o&&-1===n?n=r:o||-1===n||(s=r-1,s-n+1>=t&&i.push([n,s]),n=-1)}return e[r-1]&&r-n>=t&&i.push([n,r-1]),i}(g,a);e.length?c&&(C.indices=e):C.isMatch=!1}return C}(e,t,d,{location:n+p,distance:s,threshold:r,findAllMatches:o,minMatchCharLength:a,includeMatches:i,ignoreLocation:c});f&&(u=!0),h+=v,f&&g&&(l=[...l,...g])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&i&&(d.indices=l),d}}class I{constructor(e){this.pattern=e}static isMultiMatch(e){return O(e,this.multiRegex)}static isSingleMatch(e){return O(e,this.singleRegex)}search(){}}function O(e,t){const i=e.match(t);return i?i[1]:null}class C extends I{constructor(e,{location:t=m.location,threshold:i=m.threshold,distance:n=m.distance,includeMatches:s=m.includeMatches,findAllMatches:r=m.findAllMatches,minMatchCharLength:o=m.minMatchCharLength,isCaseSensitive:a=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(e),this._bitapSearch=new S(e,{location:t,threshold:i,distance:n,includeMatches:s,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class T extends I{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,i=0;const n=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,i))>-1;)i=t+s,n.push([t,i-1]);const r=!!n.length;return{isMatch:r,score:r?0:1,indices:n}}}const L=[class extends I{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},T,class extends I{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends I{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends I{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends I{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends I{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},C],w=L.length,A=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,M=new Set([C.type,T.type]);const P=[];function x(e,t){for(let i=0,n=P.length;i<n;i+=1){let n=P[i];if(n.condition(e,t))return new n(e,t)}return new S(e,t)}const N="$and",D=e=>!(!e.$and&&!e.$or),j=e=>({[N]:Object.keys(e).map((t=>({[t]:e[t]})))});function F(e,t,{auto:i=!0}={}){const r=e=>{let a=Object.keys(e);const c=(e=>!!e.$path)(e);if(!c&&a.length>1&&!D(e))return r(j(e));if((e=>!n(e)&&o(e)&&!D(e))(e)){const n=c?e.$path:a[0],r=c?e.$val:e[n];if(!s(r))throw new Error((e=>`Invalid value for key ${e}`)(n));const o={keyId:f(n),pattern:r};return i&&(o.searcher=x(r,t)),o}let l={children:[],operator:a[0]};return a.forEach((t=>{const i=e[t];n(i)&&i.forEach((e=>{l.children.push(r(e))}))})),l};return D(e)||(e=j(e)),r(e)}function k(e,t){const i=e.matches;t.matches=[],a(i)&&i.forEach((e=>{if(!a(e.indices)||!e.indices.length)return;const{indices:i,value:n}=e;let s={indices:i,value:n};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)}))}function K(e,t){t.score=e.score}class R{constructor(e,t={},i){this.options={...m,...t},this.options.useExtendedSearch,this._keyStore=new u(this.options.keys),this.setCollection(e,i)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof g))throw new Error("Incorrect 'index' type");this._myIndex=t||_(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){a(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let i=0,n=this._docs.length;i<n;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,n-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let l=s(e)?s(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=m.ignoreFieldNorm}){e.forEach((e=>{let i=1;e.matches.forEach((({key:e,norm:n,score:s})=>{const r=e?e.weight:null;i*=Math.pow(0===s&&r?Number.EPSILON:s,(r||1)*(t?1:n))})),e.score=i}))}(l,{ignoreFieldNorm:c}),o&&l.sort(a),r(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:i=m.includeMatches,includeScore:n=m.includeScore}={}){const s=[];return i&&s.push(k),n&&s.push(K),e.map((e=>{const{idx:i}=e,n={item:t[i],refIndex:i};return s.length&&s.forEach((t=>{t(e,n)})),n}))}(l,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const t=x(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach((({v:e,i:i,n:s})=>{if(!a(e))return;const{isMatch:r,score:o,indices:c}=t.searchIn(e);r&&n.push({item:e,idx:i,matches:[{score:o,value:e,norm:s,indices:c}]})})),n}_searchLogical(e){const t=F(e,this.options),i=(e,t,n)=>{if(!e.children){const{keyId:i,searcher:s}=e,r=this._findMatches({key:this._keyStore.get(i),value:this._myIndex.getValueForItemAtKeyId(t,i),searcher:s});return r&&r.length?[{idx:n,item:t,matches:r}]:[]}const s=[];for(let r=0,o=e.children.length;r<o;r+=1){const o=e.children[r],a=i(o,t,n);if(a.length)s.push(...a);else if(e.operator===N)return[]}return s},n=this._myIndex.records,s={},r=[];return n.forEach((({$:e,i:n})=>{if(a(e)){let o=i(t,e,n);o.length&&(s[n]||(s[n]={idx:n,item:e,matches:[]},r.push(s[n])),o.forEach((({matches:e})=>{s[n].matches.push(...e)})))}})),r}_searchObjectList(e){const t=x(e,this.options),{keys:i,records:n}=this._myIndex,s=[];return n.forEach((({$:e,i:n})=>{if(!a(e))return;let r=[];i.forEach(((i,n)=>{r.push(...this._findMatches({key:i,value:e[n],searcher:t}))})),r.length&&s.push({idx:n,item:e,matches:r})})),s}_findMatches({key:e,value:t,searcher:i}){if(!a(t))return[];let s=[];if(n(t))t.forEach((({v:t,i:n,n:r})=>{if(!a(t))return;const{isMatch:o,score:c,indices:l}=i.searchIn(t);o&&s.push({score:c,key:e,value:t,idx:n,norm:r,indices:l})}));else{const{v:n,n:r}=t,{isMatch:o,score:a,indices:c}=i.searchIn(n);o&&s.push({score:a,key:e,value:n,norm:r,indices:c})}return s}}R.version="6.5.3",R.createIndex=_,R.parseIndex=function(e,{getFn:t=m.getFn,fieldNormWeight:i=m.fieldNormWeight}={}){const{keys:n,records:s}=e,r=new g({getFn:t,fieldNormWeight:i});return r.setKeys(n),r.setIndexRecords(s),r},R.config=m,R.parseQuery=F,function(...e){P.push(...e)}(class{constructor(e,{isCaseSensitive:t=m.isCaseSensitive,includeMatches:i=m.includeMatches,minMatchCharLength:n=m.minMatchCharLength,ignoreLocation:s=m.ignoreLocation,findAllMatches:r=m.findAllMatches,location:o=m.location,threshold:a=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:i,minMatchCharLength:n,findAllMatches:r,ignoreLocation:s,location:o,threshold:a,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let i=e.trim().split(A).filter((e=>e&&!!e.trim())),n=[];for(let e=0,s=i.length;e<s;e+=1){const s=i[e];let r=!1,o=-1;for(;!r&&++o<w;){const e=L[o];let i=e.isMultiMatch(s);i&&(n.push(new e(i,t)),r=!0)}if(!r)for(o=-1;++o<w;){const e=L[o];let i=e.isSingleMatch(s);if(i){n.push(new e(i,t));break}}}return n}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,r=[],o=0;for(let n=0,a=t.length;n<a;n+=1){const a=t[n];r.length=0,s=0;for(let t=0,n=a.length;t<n;t+=1){const n=a[t],{isMatch:c,indices:l,score:h}=n.search(e);if(!c){o=0,s=0,r.length=0;break}if(s+=1,o+=h,i){const e=n.constructor.type;M.has(e)?r=[...r,...l]:r.push(l)}}if(s){let e={isMatch:!0,score:o/s};return i&&(e.indices=r),e}}return{isMatch:!1,score:1}}})},857:function(e,t,i){function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}i.r(t),i.d(t,{__DO_NOT_USE__ActionTypes:function(){return l},applyMiddleware:function(){return v},bindActionCreators:function(){return f},combineReducers:function(){return d},compose:function(){return m},createStore:function(){return u}});var a="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function h(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,i){var n;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(o(0));if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error(o(1));return i(u)(e,t)}if("function"!=typeof e)throw new Error(o(2));var s=e,r=t,c=[],d=c,p=!1;function f(){d===c&&(d=c.slice())}function m(){if(p)throw new Error(o(3));return r}function v(e){if("function"!=typeof e)throw new Error(o(4));if(p)throw new Error(o(5));var t=!0;return f(),d.push(e),function(){if(t){if(p)throw new Error(o(6));t=!1,f();var i=d.indexOf(e);d.splice(i,1),c=null}}}function g(e){if(!h(e))throw new Error(o(7));if(void 0===e.type)throw new Error(o(8));if(p)throw new Error(o(9));try{p=!0,r=s(r,e)}finally{p=!1}for(var t=c=d,i=0;i<t.length;i++)(0,t[i])();return e}function _(e){if("function"!=typeof e)throw new Error(o(10));s=e,g({type:l.REPLACE})}function y(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(o(11));function i(){e.next&&e.next(m())}return i(),{unsubscribe:t(i)}}})[a]=function(){return this},e}return g({type:l.INIT}),(n={dispatch:g,subscribe:v,getState:m,replaceReducer:_})[a]=y,n}function d(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var s=t[n];"function"==typeof e[s]&&(i[s]=e[s])}var r,a=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:l.INIT}))throw new Error(o(12));if(void 0===i(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(o(13))}))}(i)}catch(e){r=e}return function(e,t){if(void 0===e&&(e={}),r)throw r;for(var n=!1,s={},c=0;c<a.length;c++){var l=a[c],h=i[l],u=e[l],d=h(u,t);if(void 0===d)throw t&&t.type,new Error(o(14));s[l]=d,n=n||d!==u}return(n=n||a.length!==Object.keys(e).length)?s:e}}function p(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return p(e,t);if("object"!=typeof e||null===e)throw new Error(o(16));var i={};for(var n in e){var s=e[n];"function"==typeof s&&(i[n]=p(s,t))}return i}function m(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error(o(15))},s={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},a=t.map((function(e){return e(s)}));return n=m.apply(void 0,a)(i.dispatch),r(r({},i),{},{dispatch:n})}}}}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n,s,r={};n=i(373),s=i.n(n),i(187),i(883),i(789),i(686),r.default=s(),window.Choices=r.default}();;
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function($) {
	function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';             
}

var pasteEventName = getPasteEvent() + ".mask",
	ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	android=/android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	dataName: "rawMaskFn",
	placeholder: '_',
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
			len;

		if (!mask && this.length > 0) {
			input = $(this[0]);
			return input.data($.mask.dataName)();
		}
		settings = $.extend({
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
				mask.split(""),
				function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					}
				}),
				focusText = input.val();

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = settings.placeholder;
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = settings.placeholder; i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function keydownEvent(e) {
				var k = e.which,
					pos,
					begin,
					end;

				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if (k == 27) {//escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
				var k = e.which,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if (k) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								setTimeout($.proxy($.fn.caret,input,next),0);
							}else{
								input.caret(next);
							}

							if (settings.completed && next >= len) {
								settings.completed.call(input);
							}
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							break;
						}
					} else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
						pos++;
						lastMatch = i;
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					input.val("");
					clearBuffer(0, len);
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=settings.placeholder ? c : null;
				}).join('');
			});

			if (!input.attr("readonly"))
				input
				.one("unmask", function() {
					input
						.unbind(".mask")
						.removeData($.mask.dataName);
				})
				.bind("focus.mask", function() {
					clearTimeout(caretTimeoutId);
					var pos,
						moveCaret;

					focusText = input.val();
					pos = checkVal();
					
					caretTimeoutId = setTimeout(function(){
						writeBuffer();
						if (pos == mask.length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.bind("blur.mask", function() {
					checkVal();
					if (input.val() != focusText)
						input.change();
				})
				.bind("keydown.mask", keydownEvent)
				.bind("keypress.mask", keypressEvent)
				.bind(pasteEventName, function() {
					setTimeout(function() { 
						var pos=checkVal(true);
						input.caret(pos); 
						if (settings.completed && pos == input.val().length)
							settings.completed.call(input);
					}, 0);
				});
			checkVal(); //Perform initial check for existing values
		});
	}
});


})(jQuery);;
/*!
 * jQuery.filer
 * Copyright (c) 2015 CreativeDream
 * Website: http://creativedream.net/plugins/jquery.filer
 * Version: 1.0 (30-01-2015)
 * Requires: jQuery v1.7.1 or later
 */
(function(e){"use strict";e.fn.filer=function(t){return this.each(function(n,r){var i=e(r),s=".jFiler",o=e(),u=e(),a=e(),f=[],l=e.extend(true,{},e.fn.filer.defaults,t),c={init:function(){i.wrap('<div class="jFiler"></div>');o=i.closest(s);c._changeInput()},_bindInput:function(){if(l.changeInput&&u.size()>0){u.bind("click",c._clickHandler)}i.on({focus:function(){u.addClass("focused")},blur:function(){u.removeClass("focused")},change:function(){c._onChange()}});if(l.dragDrop){(u.length>0?u:i).bind("drop",c._dragDrop.drop).bind("dragover",c._dragDrop.dragEnter).bind("dragleave",c._dragDrop.dragLeave)}if(l.uploadFile&&l.clipBoardPaste){e(window).on("paste",c._clipboardPaste)}},_unbindInput:function(){if(l.changeInput&&u.size()>0){u.unbind("click",c._clickHandler)}},_clickHandler:function(){i.click()},_applyAttrSettings:function(){var e=["name","limit","maxSize","extensions","changeInput","showThumbs","appendTo","theme","addMore","excludeName","files"];for(var t in e){var n="data-jfiler-"+e[t];if(c._assets.hasAttr(n)){switch(e[t]){case"changeInput":case"showThumbs":case"addMore":l[e[t]]=["true","false"].indexOf(i.attr(n))>-1?i.attr(n)=="true":i.attr(n);break;case"extensions":l[e[t]]=i.attr(n).replace(/ /g,"").split(",");break;case"files":l[e[t]]=JSON.parse(i.attr(n));break;default:l[e[t]]=i.attr(n)}i.removeAttr(n)}}},_changeInput:function(){c._applyAttrSettings();if(l.theme){o.addClass("jFiler-theme-"+l.theme)}if(i.get(0).tagName.toLowerCase()!="input"&&i.get(0).type!="file"){u=i;i=e('<input type="file" name="'+l.name+'" />');i.css({position:"absolute",left:"-9999px",top:"-9999px","z-index":"-9999"});o.prepend(i);c._isGn=i}else{if(l.changeInput){switch(typeof l.changeInput){case"boolean":u=e('<div class="jFiler-input"><div class="jFiler-input-caption"><span>'+l.captions.feedback+'</span></div><div class="jFiler-input-button">'+l.captions.button+'</div></div>"');break;case"string":case"object":u=e(l.changeInput);break;case"function":u=e(l.changeInput(o,i,l));break}i.after(u);i.css({position:"absolute",left:"-9999px",top:"-9999px","z-index":"-9999"})}}if(!l.limit||l.limit&&l.limit>=2){i.attr("multiple","multiple");i.attr("name").slice(-2)!="[]"?i.attr("name",i.attr("name")+"[]"):null}c._bindInput();if(l.files){c._append(false,{files:l.files})}},_clear:function(){c.files=null;if(!l.uploadFile&&!l.addMore){c._reset()}c._set("feedback",c._itFl&&c._itFl.length>0?c._itFl.length+" "+l.captions.feedback2:l.captions.feedback);l.onEmpty!=null&&typeof l.onEmpty=="function"?l.onEmpty(o,u,i):null},_reset:function(t){if(!t){if(!l.uploadFile&&l.addMore){for(var n=0;n<f.length;n++){f[n].remove()}f=[];c._unbindInput();if(c._isGn){i=c._isGn}else{i=e(r)}c._bindInput()}c._set("input","")}c._itFl=[];c._itFc=null;o.find("input[name^='jfiler-items-exclude-']:hidden").remove();a.fadeOut("fast",function(){e(this).remove()});a=e()},_set:function(e,t){switch(e){case"input":i.val("");break;case"feedback":if(u.length>0){u.find(".jFiler-input-caption span").html(t)}break}},_filesCheck:function(){var t=0;if(l.limit&&c.files.length+c._itFl.length>l.limit){alert(c._assets.textParse(l.captions.errors.filesLimit));return false}for(var n=0;n<c.files.length;n++){var r=c.files[n].name.split(".").pop().toLowerCase(),i=c.files[n],s={name:i.name,size:i.size,size2:c._assets.bytesToSize(i.size),type:i.type,ext:r};if(l.extensions!=null&&e.inArray(r,l.extensions)==-1){alert(c._assets.textParse(l.captions.errors.filesType,s));return false;break}if(l.maxSize!=null&&c.files[n].size>l.maxSize*1048576){alert(c._assets.textParse(l.captions.errors.filesSize,s));return false;break}if(i.size==4096&&i.type.length==0){return false;break}t+=c.files[n].size}if(l.maxSize!=null&&t>=Math.round(l.maxSize*1048576)){alert(c._assets.textParse(l.captions.errors.filesSizeAll));return false}if(l.addMore||l.uploadFile){var s=c._itFl.filter(function(e,t){if(e.file.name==i.name&&e.file.size==i.size&&e.file.type==i.type&&(i.lastModified?e.file.lastModified==i.lastModified:true)){return true}});if(s.length>0){return false}}return true},_thumbCreator:{create:function(t){var n=c.files[t],r=c._itFc?c._itFc.id:t,i=n.name,s=n.size,o=n.type.split("/",1).toString().toLowerCase(),u=i.indexOf(".")!=-1?i.split(".").pop().toLowerCase():"",f=l.uploadFile?'<div class="jFiler-jProgressBar">'+l.templates.progressBar+"</div>":"",h={id:r,name:i,size:s,size2:c._assets.bytesToSize(s),type:o,extension:u,icon:c._assets.getIcon(u,o),icon2:c._thumbCreator.generateIcon({type:o,extension:u}),image:'<div class="jFiler-item-thumb-image fi-loading"></div>',progressBar:f,_appended:n._appended},p="";if(n.opts){h=e.extend({},n.opts,h)}p=e(c._thumbCreator.renderContent(h)).attr("data-jfiler-index",r);p.get(0).jfiler_id=r;c._thumbCreator.renderFile(n,p,h);if(n.forList){return p}c._itFc.html=p;p.hide()[l.templates.itemAppendToEnd?"appendTo":"prependTo"](a.find(l.templates._selectors.list)).show();if(!n._appended){c._onSelect(t)}},renderContent:function(e){return c._assets.textParse(e._appended?l.templates.itemAppend:l.templates.item,e)},renderFile:function(t,n,r){if(n.find(".jFiler-item-thumb-image").size()==0){return false}if(t.file&&r.type=="image"){var i='<img src="'+t.file+'" draggable="false" />',s=n.find(".jFiler-item-thumb-image.fi-loading");e(i).error(function(){i=c._thumbCreator.generateIcon(r);n.addClass("jFiler-no-thumbnail");s.removeClass("fi-loading").html(i)}).load(function(){s.removeClass("fi-loading").html(i)});return true}if(window.File&&window.FileList&&window.FileReader&&r.type=="image"){var o=new FileReader;o.onload=function(t){var i='<img src="'+t.target.result+'" draggable="false" />',s=n.find(".jFiler-item-thumb-image.fi-loading");e(i).error(function(){i=c._thumbCreator.generateIcon(r);n.addClass("jFiler-no-thumbnail");s.removeClass("fi-loading").html(i)}).load(function(){s.removeClass("fi-loading").html(i)})};o.readAsDataURL(t)}else{var i=c._thumbCreator.generateIcon(r),s=n.find(".jFiler-item-thumb-image.fi-loading");n.addClass("jFiler-no-thumbnail");s.removeClass("fi-loading").html(i)}},generateIcon:function(t){var n=new Array(3);if(t&&t.type&&t.extension){switch(t.type){case"image":n[0]="f-image";n[1]='<i class="icon-jfi-file-image"></i>';break;case"video":n[0]="f-video";n[1]='<i class="icon-jfi-file-video"></i>';break;case"audio":n[0]="f-audio";n[1]='<i class="icon-jfi-file-audio"></i>';break;default:n[0]="f-file f-file-ext-"+t.extension;n[1]=t.extension.length>0?"."+t.extension:"";n[2]=1}}else{n[0]="f-file";n[1]=t.extension&&t.extension.length>0?"."+t.extension:"";n[2]=1}var r='<span class="jFiler-icon-file '+n[0]+'">'+n[1]+"</span>";if(n[2]==1){var i=c._assets.text2Color(t.extension);if(i){var s=e(r).appendTo("body"),o=s.css("box-shadow");o=i+o.substring(o.replace(/^.*(rgba?\([^)]+\)).*$/,"$1").length,o.length);s.css({"-webkit-box-shadow":o,"-moz-box-shadow":o,"box-shadow":o});r=s.prop("outerHTML");s.remove()}}return r},_box:function(t){if(l.beforeShow!=null&&typeof l.beforeShow=="function"?!l.beforeShow(c.files,a,o,u,i):false){return false}if(a.length<1){if(l.appendTo){var n=e(l.appendTo)}else{var n=o}n.find(".jFiler-items").remove();a=e('<div class="jFiler-items jFiler-row"></div>');a.append(c._assets.textParse(l.templates.box)).appendTo(n);a.on("click",l.templates._selectors.remove,function(n){n.preventDefault();var r=l.templates.removeConfirmation?confirm(l.captions.removeConfirmation):true;if(r){c._remove(t?t.remove.event:n,t?t.remove.el:e(this).closest(l.templates._selectors.item))}})}for(var r=0;r<c.files.length;r++){c._addToMemory(r);c._thumbCreator.create(r)}}},_upload:function(t){var n=c._itFc.html,r=new FormData;r.append(i.attr("name"),c._itFc.file,c._itFc.file.name?c._itFc.file.name:false);if(l.uploadFile.data!=null&&e.isPlainObject(l.uploadFile.data)){for(k in l.uploadFile.data){r.append(k,l.uploadFile.data[k])}}c._ajax.send(n,r,c._itFc)},_ajax:{send:function(t,n,r){r.ajax=e.ajax({url:l.uploadFile.url,data:n,type:l.uploadFile.type,enctype:l.uploadFile.enctype,xhr:function(){var n=e.ajaxSettings.xhr();if(n.upload){n.upload.addEventListener("progress",function(e){c._ajax.progressHandling(e,t)},false)}return n},complete:function(){r.ajax=false},beforeSend:function(e,n){return l.uploadFile.beforeSend!=null&&typeof l.uploadFile.beforeSend=="function"?l.uploadFile.beforeSend(t,a,o,u,i,e,n):true},success:function(e,n,s){r.uploaded=true;l.uploadFile.success!=null&&typeof l.uploadFile.success=="function"?l.uploadFile.success(e,t,a,o,u,i,n,s):null},error:function(e,n,s){r.uploaded=false;l.uploadFile.error!=null&&typeof l.uploadFile.error=="function"?l.uploadFile.error(t,a,o,u,i,e,n,s):null},statusCode:l.uploadFile.statusCode,cache:false,contentType:false,processData:false});return r.ajax},progressHandling:function(e,t){if(e.lengthComputable){var n=Math.round(e.loaded*100/e.total).toString();l.uploadFile.onProgress!=null&&typeof l.uploadFile.onProgress=="function"?l.uploadFile.onProgress(n,t,a,o,u,i):null;t.find(".jFiler-jProgressBar").find(l.templates._selectors.progressBar).css("width",n+"%")}}},_dragDrop:{dragEnter:function(e){e.preventDefault();e.stopPropagation();o.addClass("dragged");c._set("feedback",l.captions.drop);l.dragDrop.dragEnter!=null&&typeof l.dragDrop.dragEnter=="function"?l.dragDrop.dragEnter(e,u,i,o):null},dragLeave:function(e){e.preventDefault();e.stopPropagation();if(!c._dragDrop._dragLeaveCheck(e)){return false}o.removeClass("dragged");c._set("feedback",l.captions.feedback);l.dragDrop.dragLeave!=null&&typeof l.dragDrop.dragLeave=="function"?l.dragDrop.dragLeave(e,u,i,o):null},drop:function(e){e.preventDefault();o.removeClass("dragged");if(!e.originalEvent.dataTransfer.files||e.originalEvent.dataTransfer.files.length<=0){return}c._set("feedback",l.captions.feedback);c._onChange(e,e.originalEvent.dataTransfer.files);l.dragDrop.drop!=null&&typeof l.dragDrop.drop=="function"?l.dragDrop.drop(e.originalEvent.dataTransfer.files,e,u,i,o):null},_dragLeaveCheck:function(t){var n=t.relatedTarget,r=false;if(n!==u){if(n){r=e.contains(u,n)}if(r){return false}}return true}},_clipboardPaste:function(e,t){if(!t&&!e.originalEvent.clipboardData&&!e.originalEvent.clipboardData.items){return}if(t&&!e.originalEvent.dataTransfer&&!e.originalEvent.dataTransfer.items){return}if(c._clPsePre){return}var n=t?e.originalEvent.dataTransfer.items:e.originalEvent.clipboardData.items,r=function(e,t,n){t=t||"";n=n||512;var r=atob(e);var i=[];for(var s=0;s<r.length;s+=n){var o=r.slice(s,s+n);var u=new Array(o.length);for(var a=0;a<o.length;a++){u[a]=o.charCodeAt(a)}var f=new Uint8Array(u);i.push(f)}var l=new Blob(i,{type:t});return l};if(n){for(var i=0;i<n.length;i++){if(n[i].type.indexOf("image")!==-1||n[i].type.indexOf("text/uri-list")!==-1){if(t){try{window.atob(e.originalEvent.dataTransfer.getData("text/uri-list").toString().split(",")[1])}catch(e){return}}var s=t?r(e.originalEvent.dataTransfer.getData("text/uri-list").toString().split(",")[1],"image/png"):n[i].getAsFile();s.name=Math.random().toString(36).substring(5);s.name+=s.type.indexOf("/")!=-1?"."+s.type.split("/")[1].toString().toLowerCase():".png";c._onChange(e,[s]);c._clPsePre=setTimeout(function(){delete c._clPsePre},1e3)}}}},_onSelect:function(t){if(l.uploadFile&&!e.isEmptyObject(l.uploadFile)){c._upload(t)}l.onSelect!=null&&typeof l.onSelect=="function"?l.onSelect(c.files[t],c._itFc.html,a,o,u,i):null;if(t+1>=c.files.length){l.afterShow!=null&&typeof l.afterShow=="function"?l.afterShow(a,o,u,i):null}},_onChange:function(t,n){if(!n){if(!i.get(0).files||typeof i.get(0).files=="undefined"||i.get(0).files.length==0){if(!l.uploadFile&&!l.addMore){c._set("input","");c._clear()}return false}c.files=i.get(0).files}else{if(!n||n.length==0){c._set("input","");c._clear();return false}c.files=n}if(!l.uploadFile&&!l.addMore){c._reset(true)}if(!c._filesCheck()){c._set("input","");c._clear();return false}c._set("feedback",c.files.length+c._itFl.length+" "+l.captions.feedback2);if(l.showThumbs){c._thumbCreator._box()}else{for(var r=0;r<c.files.length;r++){c._addToMemory(r);c._onSelect(r)}}if(!l.uploadFile&&l.addMore){var s=e('<input type="file" />');var o=i.prop("attributes");e.each(o,function(){s.attr(this.name,this.value)});i.after(s);c._unbindInput();f.push(s);i=s;c._bindInput()}},_append:function(e,t){var n=!t?false:t.files;if(!n||n.length<=0){return}c.files=n;if(l.showThumbs){for(var r=0;r<c.files.length;r++){c.files[r]._appended=true}c._thumbCreator._box()}},_getList:function(e,t){var n=!t?false:t.files;if(!n||n.length<=0){return}c.files=n;if(l.showThumbs){var r=[];for(var s=0;s<c.files.length;s++){c.files[s].forList=true;r.push(c._thumbCreator.create(s))}if(t.callback){t.callback(r,a,o,u,i)}}},_remove:function(t,r){if(r.binded){if(r.data.id){r=a.find(l.templates._selectors.item+"[data-jfiler-index='"+r.data.id+"']");if(r.size()==0){return false}}if(r.data.el){r=r.data.el}}var s=r.get(0).jfiler_id||r.attr("data-jfiler-index"),f=null,h=function(t){var r=o.find("input[name^='jfiler-items-exclude-']:hidden").first(),s=c._itFl[t].file,u=[];if(r.size()==0){r=e('<input type="hidden" name="jfiler-items-exclude-'+(l.excludeName?l.excludeName:(i.attr("name").slice(-2)!="[]"?i.attr("name"):i.attr("name").substring(0,i.attr("name").length-2))+"-"+n)+'">');r.appendTo(o)}else{u=JSON.parse(r.val())}u.push(s.name);u=JSON.stringify(u);r.val(u)},d=function(t,n){h(n);c._itFl.splice(n,1);if(c._itFl.length<1){c._reset();c._clear()}else{c._set("feedback",c._itFl.length+" "+l.captions.feedback2)}t.fadeOut("fast",function(){e(this).remove()})};for(var v in c._itFl){if(v==="length"||!c._itFl.hasOwnProperty(v))continue;if(c._itFl[v].id==s){f=v}}if(!c._itFl.hasOwnProperty(f)){return false}if(c._itFl[f].ajax){c._itFl[f].ajax.abort();d(r,f);return}l.onRemove!=null&&typeof l.onRemove=="function"?l.onRemove(r,c._itFl[f].file,f,a,o,u,i):null;d(r,f)},_addToMemory:function(t){c._itFl.push({id:c._itFl.length,file:c.files[t],html:e(),ajax:false,uploaded:false});c._itFc=c._itFl[c._itFl.length-1]},_assets:{bytesToSize:function(e){if(e==0)return"0 Byte";var t=1e3;var n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];var r=Math.floor(Math.log(e)/Math.log(t));return(e/Math.pow(t,r)).toPrecision(3)+" "+n[r]},hasAttr:function(e,t){var t=!t?i:t,n=t.attr(e);if(!n||typeof n=="undefined"){return false}else{return true}},getIcon:function(t,n){var r=["audio","image","text","video"];if(e.inArray(n,r)>-1){return'<i class="icon-jfi-file-'+n+" jfi-file-ext-"+t+'"></i>'}return'<i class="icon-jfi-file-o jfi-file-type-'+n+" jfi-file-ext-"+t+'"></i>'},textParse:function(t,n){n=e.extend({},{limit:l.limit,maxSize:l.maxSize},n&&e.isPlainObject(n)?n:{});switch(typeof t){case"string":return t.replace(/\{\{fi-(.*?)\}\}/g,function(e,t){t=t.replace(/ /g,"");if(t.match(/(.*?)\|limitTo\:(\d+)/)){return t.replace(/(.*?)\|limitTo\:(\d+)/,function(e,t,r){var t=n[t]?n[t]:"",i=t.substring(0,r);i=t.length>i.length?i.substring(0,i.length-3)+"...":i;return i})}else{return n[t]?n[t]:""}});break;case"function":return t(n);break;default:return t}},text2Color:function(e){if(!e||e.length==0){return false}for(var t=0,n=0;t<e.length;n=e.charCodeAt(t++)+((n<<5)-n));for(var t=0,r="#";t<3;r+=("00"+(n>>t++*2&255).toString(16)).slice(-2));return r}},files:null,_itFl:[],_itFc:null};c.init();i.on("filer.append",function(e,t){c._append(e,t)});i.on("filer.remove",function(e,t){t.binded=true;c._remove(e,t)});i.on("filer.reset",function(e){c._reset();c._clear();return true});i.on("filer.generateList",function(e,t){return c._getList(e,t)});return this})};e.fn.filer.defaults={limit:null,maxSize:null,extensions:null,changeInput:true,showThumbs:false,appendTo:null,theme:null,templates:{box:null,item:null,itemAppend:null,progressBar:null,itemAppendToEnd:false,removeConfirmation:true,_selectors:{list:null,item:null,progressBar:null,remove:null}},files:null,uploadFile:null,dragDrop:null,addMore:false,clipBoardPaste:true,excludeName:null,beforeShow:null,onSelect:null,afterShow:null,onRemove:null,onEmpty:null,captions:{button:"Choose Files",feedback:"Choose files To Upload",feedback2:"files were chosen",drop:"Drop file here to Upload",removeConfirmation:"Are you sure you want to remove this file?",errors:{filesLimit:"Only {{fi-limit}} files are allowed to be uploaded.",filesType:"Only Images are allowed to be uploaded.",filesSize:"{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",filesSizeAll:"Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."}}}})(jQuery);

$(function(){
    let $eventBtn = $('.events');
    let $notificationTab = $('.notification-tab');
    
    function showNotificationWindow(elem) {
        elem.addClass('events--active');
        $notificationTab.slideDown(100);
    }
    
    function hideNotificationWindow(elem) {
        elem.removeClass('events--active');
        $notificationTab.slideUp(100);
    }
    
    if($eventBtn){
    $eventBtn.on('click', function () {
        if ($(this).hasClass('events--active')) {
            hideNotificationWindow($(this));
        } else {
            showNotificationWindow($(this));
        }
    });
    }
    // notification-tab код работы таба в окне уведомлений
    let $notificationControlBtn = $('.notification-tab__control .btn');
    let $notificationTabField = $('.notification-tab__field');
    if($notificationControlBtn){
       $notificationControlBtn.on('click', function () {
           if (!$(this).hasClass('active')) {
               $notificationControlBtn.removeClass('active');
               $(this).addClass('active');
               $notificationTabField.hide();
               $notificationTabField.eq($(this).index()).show();
           }
       });
    }


    // обрабатываю все клики в документе.
    $(document).on('click', function (e) {
    
        //если клик вне окна уведомлений, то скрываю коно уведомлений.
        if ($eventBtn.hasClass('events--active')) {
            if (!$eventBtn.is(e.target) && $eventBtn.has(e.target).length === 0 && !$notificationTab.is(e.target) && $notificationTab.has(e.target).length === 0) {
                hideNotificationWindow($eventBtn);
            }
        } 
    });
    
    
    let tabControlItems = $('.great-tab__control-elem');
    let tabDisplayItems = $('.great-tab__display-elem');
    if(tabControlItems){
        tabControlItems.on('click', function(){
            tabControlItems.removeClass('active');
            $(this).addClass('active');
            tabDisplayItems.hide();
            tabDisplayItems.eq($(this).index()).show();
        })
    }
    // Подключаю маски для полей ввода
 
        // $("#date").mask("99/99/9999");
        $(".tel").mask("+7 (999) 999-99-99"); 
        $(".snils").mask("999-999-999 99");  
 

        $('.file-input').filer({
            limit: null,
            maxSize: null,
            extensions: null,
            changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Перетащите файл сюда или кликните по полю</h3> <span>Выберите файл с расширением (jpg, jpeg, png, pdf) и размером не превышающим 1мб</span></div></div></div>',
            showThumbs: true,
            appendTo: null,
            theme: "dragdropbox",
            templates: {
                box: '<ul class="jFiler-item-list"></ul>',
                item: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <li>{{fi-progressBar}}</li>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
                itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
                progressBar: '<div class="bar"></div>',
                itemAppendToEnd: false,
                removeConfirmation: false,
                _selectors: {
                    list: '.jFiler-item-list',
                    item: '.jFiler-item',
                    progressBar: '.bar',
                    remove: '.jFiler-item-trash-action',
                }
            },
            uploadFile: {
                url: "upload.php",
                data: {},
                type: 'POST',
                enctype: 'multipart/form-data',
                beforeSend: function(){},
                success: function(data, el){
                    var parent = el.find(".jFiler-jProgressBar").parent();
                    el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                        $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");    
                    });
                },
                error: function(el){
                    var parent = el.find(".jFiler-jProgressBar").parent();
                    el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                        $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");    
                    });
                },
                statusCode: {},
                onProgress: function(){},
            },
            dragDrop: {
                dragEnter: function(){},
                dragLeave: function(){},
                drop: function(){},
            },
            addMore: true,
            clipBoardPaste: true,
            excludeName: null,
            beforeShow: function(){return true},
            onSelect: function(){},
            afterShow: function(){},
            onRemove: function(){},
            onEmpty: function(){},
            captions: {
                button: "Выберите файлы",
                feedback: "Choose files To Upload",
                feedback2: "Выберите файлы для Загрузки",
                drop: "Поместите файл сюда для загрузки",
                removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
                errors: {
                    filesLimit: "Разрешается загружать только файлы {{fi-limit}}.",
                    filesType: "К загрузке допускаются только изображения.",
                    filesSize: "{{fi-name}} слишком большой! Пожалуйста, загрузите файл размером до {{fi-maxSize}} Мб.",
                    filesSizeAll: "Выбранные вами файлы слишком велики! Пожалуйста, загружайте файлы размером до {{fi-maxSize}} Мб."
                }
            }
        });

            // ------------------РАБОТА С МОДАЛЬНЫМИ ОКНАМИ------------------
    /**
     * showModal - функция выводящая модальное окно 
     * @param {string} classModalWindow - уникальный класс или индификатор модального окна.
     */
    function showModal(classModalWindow){
        let modalContainer = $('.modal-container');
        let modal = $(`.modal-container ${classModalWindow}`); 
        modalContainer.addClass('modal-container--show');
        setTimeout(function(){
            modal.fadeIn(100);
        }, 100);
    }
    /**
     * hideModal - функция скрывающее модальное окно 
     * @param {string} classModalWindow - уникальный класс или индификатор модального окна.
     */
    function hideModal(classModalWindow){
        let modalContainer = $('.modal-container');
        let modal = $(`.modal-container ${classModalWindow}`); 
        modal.fadeOut(100);
        setTimeout(function(){
            modalContainer.removeClass('modal-container--show');
        }, 100);
    } 
    
    let modalContainer = $('.modal-container');
    modalContainer.on('click', function(e){
        if(e.target.classList.contains('modal-container')){ 
            hideModal('.modal');
        } 
    });

    let showModalBtn = $('.btn--show-modal'); //элементы открывающие модалки.
    let btnCloseModal = $('.close-modal'); //какой то элемент в модалке с классом close-modal нужный  для закрытия модалки (по умолчанию крестик)

    //открытие конкретной модалки
    showModalBtn.on('click', function(e){
        e.preventDefault();
        if(e.target.getAttribute('data-open-modal')){   
            showModal('.'+ e.target.getAttribute('data-open-modal'));
        } 
    });
    //закрытие всех модалок
    btnCloseModal.on('click', function(e){
        e.preventDefault(); 
        hideModal('.modal');
    });

    // ----------SPOILER-------------
    let spoilerBtn = $('.spoiler .spoiler__header');
    spoilerBtn.on('click', function(){
        $(this).toggleClass('spoiler__header--active');
        $(this).next('.spoiler__container').slideToggle(200);
    });

    // стандартный таб
 
    let tabJSControlItem = $('.tab-js__control-item');
    let tabJSContainer = $('.tab-js__container'); 

    tabJSControlItem.on('click', function(){
        let tab = $(this).parents('.tab-js');
        let controlBtn = tab.find('.tab-js__control-item');
        let container = tab.find('.tab-js__container');
        controlBtn.removeClass('active');
        $(this).addClass('active');
        container.removeClass('active').removeClass('on');
        let thisContainer = container.eq(controlBtn.index($(this)))
        thisContainer.addClass('active');
        setTimeout(function(){
            thisContainer.addClass('on');
        }, 200)


 
    })

});

let greatShadow = document.querySelector('.great-shadow');
let burgerBtn = document.querySelector('.btn-burger');
let mainMenuBox = document.querySelector('.main-menu-box');

// если нет меню, то бургер кнопка удаляется.
if(!mainMenuBox && burgerBtn){
    burgerBtn.remove();
}
 
// показ и скрытие мобильного меню.
function toggleMenu(){
    burgerBtn.classList.toggle('btn-burger--active');
    mainMenuBox.classList.toggle('main-menu-box--show');
    greatShadow.classList.toggle('great-shadow--show');
}
if(burgerBtn){
    burgerBtn.addEventListener('click', toggleMenu);
    greatShadow.addEventListener('click', toggleMenu);
}

// показ и скрытие пароля
let passEye = document.querySelectorAll('.form-elem--password svg');
if(passEye){
    passEye.forEach(svgItem=>{
        svgItem.addEventListener('click', function(e){
            let container = this.parentElement;
            let passInput = container.firstElementChild;
            if(passInput.getAttribute('type') === 'password'){
                passInput.setAttribute('type', 'text');
            }else{
                passInput.setAttribute('type', 'password');
            }
            container.classList.toggle('form-elem--password-show');  
        });
    });
}

// если у ссылки стоит класс указывающий что она не активна, то кодом ниже отключаю возможность срабатывания перехода при клике на эту  ссылку.
let allLinls = document.querySelectorAll('a');
allLinls.forEach(link=>{
    link.addEventListener('click', function(e){ 
        if(this.classList.contains('disabled')){
            e.preventDefault(); 
        }
    });
});

// подключаю плагин календарь
let arInputDateElem = document.querySelectorAll('.flatpickr'); 
if(arInputDateElem.length > 0){
    arInputDateElem.forEach(item=>{
        flatpickr(item, {
            enableTime: false,
            dateFormat: 'd.m.Y',
            time_24hr: true
        });
    })
    
}

// подключаю плагин селект
let arFormCategory = []; 
let formCategorySelects = document.querySelectorAll('.form__category-select'); 
if(formCategorySelects.length > 0){
    formCategorySelects.forEach(select=>{
        if(select.classList.contains('form__category-select--no-search')){
            arFormCategory.push(new Choices(select,{  
                // placeholder: false, 
                placeholder: true,
                placeholderValue: '',  
                searchEnabled: false, 
            })); 
        }else{
            arFormCategory.push(new Choices(select,{ 
                noResultsText: 'Значение не найдено',
                loadingText: 'Загрузка...',  
                // placeholder: false, 
                placeholder: true,
                placeholderValue: '', 
                searchPlaceholderValue: 'Введите искомое значение', 
                searchEnabled: true, 
            })); 
        }
        
        let thisSelect = select.parentElement.parentElement;
        
        select.addEventListener('change', function(){
            if(this.value != ''){
                this.closest('.form-elem').classList.add('form-elem--active'); 
            } 
        });
        
    });
} 

{/* <div class="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="0" data-value="" data-custom-properties="[object Object]" aria-selected="true">This is a placeholder</div> */}

{/* <div class="choices__item choices__item--selectable" data-item="" data-id="0" data-value="m" data-custom-properties="[object Object]" aria-selected="true">Тема вторая</div> */}

// aria-selected="true"
let choicesSelecValue = document.querySelectorAll('.choices__list--single .choices__item--selectable');
choicesSelecValue.forEach(item=>{
    // item.innerHTML = 'This is a placeholder';
    // item.setAttribute('data-id', 0);
    // item.setAttribute('data-value', '');
});
let choicesSelecValueCommot = document.querySelectorAll('.choices__list--dropdown .choices__item--selectable');
choicesSelecValueCommot.forEach(item=>{  
    console.log(item)
    if(item.getAttribute('aria-selected')){
        console.log(item.getAttribute('aria-selected'));
        console.log(item.innerHTML);
    }
});


// Код работы большого таба с формой - НАЧАЛО
 
let arStatusItems = document.querySelectorAll('.status-list__item'); //массив со статус элементами (из левого сайдбара)
let arContainers = document.querySelectorAll('.form-questionnaire__item'); //массив с контейнерами 
let arrAllInput = document.querySelectorAll('.form-elem__input--validation'); //массив с элементами формы обязательными к заполнению
let arrAllInputGroup = document.querySelectorAll('.form-elem__input--validation-group');
 
/**
 * функция плавного показа элемента - аналог fadeIn() из jQuery
 * @param {object} elem - элемент DOM с которым будут проводится манипуляции
 */
 function fadeIn(elem) {
	var opacity = 0.01;
	elem.style.display = "block";
  
	var timer = setInterval(function() {
		if(opacity >= 1) {
			clearInterval(timer);
		}
		elem.style.opacity = opacity;
		opacity += opacity * 0.2;
	}, 1)
	
}
/**
 * функция плавного показа элемента - аналог fadeOut() из jQuery
 * @param {object} elem - элемент DOM с которым будут проводится манипуляции
 */
function fadeOut(elem) { 
	var opacity = 1; 
	var timer = setInterval(function() {
		if(opacity <= 0.1) {
			clearInterval(timer);
			elem.style.display = "none";
		} 
		elem.style.opacity = opacity; 
		opacity -= opacity * 0.1; 
	}, 1); 
}
 
/**Функция проверки на заполнненость полей страницы таба
 * @param {object} elem - елемент input 
 * возвращает массив с id контейнера и статусом его заполненности.
 */
function checkingFullnessContainerFields(elem){ 
    let container = elem.closest('.form-questionnaire__item');
    let arElemValidationGroup = container.querySelectorAll('.form-elem__input--validation-group');
    let containerInputs = container.querySelectorAll('.form-elem__input--validation'); 
    let groupFlag = true;
    let itemFlag = true;
    let fullesFlag = false; 

    if(arElemValidationGroup){ 
        for(let key in arElemValidationGroup){
            if(arElemValidationGroup[key].checked){ 
                groupFlag = true;
                break;
            }else{
                groupFlag = false; 
            }
        }
    } 
    if(containerInputs){
        containerInputs.forEach(input=>{ 
            if(!input.value){
                itemFlag = false;
            } 
        });
    }
    
    if(groupFlag && itemFlag){
        fullesFlag = true;
    }else{
        fullesFlag = false;
    }
    
    let arAnswer = [container.getAttribute('id'), fullesFlag];  
    return arAnswer; 
}
/**
 * Функция по введенным параметрам активирует кнопки перехода (или кнопку отправки данных формы), а так же пункты в статус списке в левом сайтбаре
 *  @param {array} arr-  массив возвращаемый функцией checkingFullnessContainerFields 
 */
function toggleActiveTabElements(arr){
    let currentBtnNext = document.querySelector('#' + arr[0] + ' .btn-next');
    let condition = document.querySelector('#' + arr[0] + ' .form-questionnaire__condition');
 
    if(arr[1]){  
        arStatusItems.forEach(item=>{ 
            if(item.getAttribute('href') == '#' + arr[0]){ 
               let currentStatusItem =  item.querySelector('.status-marker');
               if(!currentStatusItem.classList.contains('status-marker--filled')){
                    currentStatusItem.classList.add('status-marker--filled');
               }
            } 
        }); 

        if(currentBtnNext.tagName === 'A'){
            currentBtnNext.classList.remove('disabled'); // активирую кнопку-ссылку
        }else{
            currentBtnNext.removeAttribute('disabled') //активирую кнопку
        }
        
        if(condition){
            condition.classList.add('form-questionnaire__condition--hide'); //убираю предупреждение под кнопкой ссылкой
        }
        
    }else{
        arStatusItems.forEach(item=>{
            if(item.getAttribute('href') == '#' + arr[0]){
                let currentStatusItem =  item.querySelector('.status-marker');
                if(currentStatusItem.classList.contains('status-marker--filled')){
                    currentStatusItem.classList.remove('status-marker--filled');
               }
            }
        });
        // console.log(currentBtnNext)
         if(currentBtnNext.tagName === 'A'){
            currentBtnNext.classList.add('disabled'); // активирую кнопку-ссылку
        }else{
            currentBtnNext.setAttribute('disabled', 'disabled') //активирую кнопку
        }

        if(condition){
            condition.classList.remove('form-questionnaire__condition--hide');
        } 
    } 
}
 /**
  * функция перехода по табу
  * @param {string} idContainer -  это id контейнера, он же href  в кнопках ссылках
  */
  function toggleShowContainer(idContainer){

    arStatusItems.forEach(item=>{
        item.classList.remove('current-item')
    });
    let currentStatusItem = document.querySelector('.status-list__item[href="'+idContainer+'"]');

    currentStatusItem.classList.add('current-item')
    currentStatusItem.classList.remove('disabled');

    let container = document.querySelector(idContainer); 
    arContainers.forEach(item=>{
        item.style.display = 'none'; 
    });
    fadeIn(container); 
} 

// навешиваю на все input обязательыне к заполнению событие проверки их заполненности
if(arrAllInput){
    arrAllInput.forEach(input=>{
        input.addEventListener('keyup', function(){  
            console.log('click')
            toggleActiveTabElements(checkingFullnessContainerFields(this));
        })
    });
} 

// обработка кликов по элементам статус бара в левом сайтбаре
arStatusItems.forEach(item=>{
    item.addEventListener('click', function(e){ 
        e.preventDefault();
        if(!this.classList.contains('disabled')){
            toggleShowContainer(this.getAttribute('href'));
        }
    })
});

//обработка кликов по кнопкам пеерхода по контейнерам таба
let arTabBtn = document.querySelectorAll('.form-questionnaire__btn-box a.btn');
arTabBtn.forEach(btn=>{
    btn.addEventListener('click', function(e){ 
        if(!this.classList.contains('disabled')){  
            toggleShowContainer(this.getAttribute('href'));
        }
    });
})

arrAllInputGroup.forEach(item=>{
    item.addEventListener('change', function(){
        toggleActiveTabElements(checkingFullnessContainerFields(this)); 
    });
});

// Код работы большого таба с формой - КОНЕЦ

// Вставка полей для дополнительного родственника
let btnAddRelative = document.querySelector('.btn-add-relative');
let relativeBoxNumber = 1;
if(btnAddRelative){
    btnAddRelative.addEventListener('click', function(e){
        let relativeBox = document.querySelector('.relative-box');   
        let submitBtn = document.querySelector('.form-questionnaire .btn[type="submit"]');
 
        submitBtn.setAttribute('disabled', 'disabled');
        let newRelativeBox = `<div class="relative-box relative-box-${relativeBoxNumber} relative-box-separator"><div class="columns-box columns-box--two-col"><label class="form-elem"><select class="form__category-select form-elem__input--validation" name="contact-face-relative-${relativeBoxNumber}" id="cazwt127" required><option value="">This is a placeholder</option><option value="f">Отец</option><option value="m">Мать</option><option value="gf">Дедушка</option><option value="gm">Бабушка</option></select><span>Кем приходится<sup>*</sup></span></label><label class="form-elem"><input type="text" class="form-elem__input form-elem__input--validation" name="contact-face-full-name-${relativeBoxNumber}" placeholder="Ф.И.О." autocomplete="off"><span>Ф.И.О.<sup>*</sup></span></label><label class="form-elem"><input type="tel" class="form-elem__input form-elem__input--validation" name="contact-face-phone-namber-${relativeBoxNumber}" placeholder="Номер телефона" autocomplete="off"><span>Номер телефона<sup>*</sup></span></label><label class="form-elem"><input type="text" class="form-elem__input form-elem__input--validation" name="contact-face-place-of-work-${relativeBoxNumber}" placeholder="Место работы" autocomplete="off"><span>Место работы<sup>*</sup></span></label></div><label class="form-elem"><input type="tel" class="form-elem__input form-elem__input--validation" name="contact-face-contact-address-${relativeBoxNumber}" placeholder="Контактный адрес" autocomplete="off"><span>Контактный адрес<sup>*</sup></span></label></div>`;

        relativeBox.insertAdjacentHTML('afterend', newRelativeBox);
        
        let arFormSelets = []; 
        let relativeSelects = document.querySelectorAll(`.relative-box-${relativeBoxNumber} .form__category-select`); 
        if(relativeSelects.length > 0){
            relativeSelects.forEach(select=>{
                arFormSelets.push(new Choices(select,{  
                    // placeholder: false, 
                    placeholder: true,
                    placeholderValue: '',  
                    searchEnabled: false, 
                })); 
                let thisSelect = select.parentElement.parentElement;
                
                select.addEventListener('change', function(){
                    if(this.value != ''){
                        this.closest('.form-elem').classList.add('form-elem--active'); 
                    } 
                });
                
            });
        } 
        relativeBoxNumber ++;
    })
}