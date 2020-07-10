var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function h(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){t.value=null==e?"":e}let m;function $(t){m=t}const p=[],y=[],g=[],v=[],M=Promise.resolve();let D=!1;function w(t){g.push(t)}let b=!1;const S=new Set;function _(){if(!b){b=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];$(e),H(e.$$)}for(p.length=0;y.length;)y.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];S.has(e)||(S.add(e),e())}g.length=0}while(p.length);for(;v.length;)v.pop()();D=!1,b=!1,S.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const x=new Set;function O(t,e){-1===t.$$.dirty[0]&&(p.push(t),D||(D=!0,M.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(o,u,s,c,f,h,l=[-1]){const d=m;$(o);const p=u.props||{},y=o.$$={fragment:null,ctx:null,props:h,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:l};let g=!1;if(y.ctx=s?s(o,p,(t,e,...n)=>{const r=n.length?n[0]:e;return y.ctx&&f(y.ctx[t],y.ctx[t]=r)&&(y.bound[t]&&y.bound[t](r),g&&O(o,t)),e}):[],y.update(),g=!0,r(y.before_update),y.fragment=!!c&&c(y.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();u.intro&&((v=o.$$.fragment)&&v.i&&(x.delete(v),v.i(M))),function(t,n,o){const{fragment:u,on_mount:s,on_destroy:a,after_update:c}=t.$$;u&&u.m(n,o),w(()=>{const n=s.map(e).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]}),c.forEach(w)}(o,u.target,u.anchor),_()}var v,M;$(d)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var T=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,e){t.exports=function(){var t="millisecond",e="second",n="minute",r="hour",i="day",o="week",u="month",s="quarter",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,o=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:a,w:o,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:s}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",$={};$[m]=d;var p=function(t){return t instanceof M},y=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)$[t]&&(r=t),e&&($[t]=e,r=t);else{var i=t.name;$[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},g=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},v=l;v.l=y,v.i=p,v.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var M=function(){function h(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var l=h.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return g(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<g(t)},l.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},l.year=function(t){return this.$g(t,"$y",a)},l.month=function(t){return this.$g(t,"$M",u)},l.day=function(t){return this.$g(t,"$W",i)},l.date=function(t){return this.$g(t,"$D","date")},l.hour=function(t){return this.$g(t,"$H",r)},l.minute=function(t){return this.$g(t,"$m",n)},l.second=function(t){return this.$g(t,"$s",e)},l.millisecond=function(e){return this.$g(e,"$ms",t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,s){var c=this,f=!!v.u(s)||s,h=v.p(t),l=function(t,e){var n=v.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(i)},d=function(t,e){return v.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,$=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case a:return f?l(1,0):l(31,11);case u:return f?l(1,$):l(0,$+1);case o:var g=this.$locale().weekStart||0,M=(m<g?m+7:m)-g;return l(f?p-M:p+(6-M),$);case i:case"date":return d(y+"Hours",0);case r:return d(y+"Minutes",1);case n:return d(y+"Seconds",2);case e:return d(y+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(o,s){var c,f=v.p(o),h="set"+(this.$u?"UTC":""),l=(c={},c.day=h+"Date",c.date=h+"Date",c[u]=h+"Month",c[a]=h+"FullYear",c[r]=h+"Hours",c[n]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[f],d=f===i?this.$D+(s-this.$W):s;if(f===u||f===a){var m=this.clone().set("date",1);m.$d[l](d),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else l&&this.$d[l](d);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[v.p(t)]()},l.add=function(t,s){var c,f=this;t=Number(t);var h=v.p(s),l=function(e){var n=g(f);return v.w(n.date(n.date()+Math.round(e*t)),f)};if(h===u)return this.set(u,this.$M+t);if(h===a)return this.set(a,this.$y+t);if(h===i)return l(1);if(h===o)return l(7);var d=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,m=this.$d.getTime()+t*d;return v.w(m,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),o=this.$H,u=this.$m,s=this.$M,a=i.weekdays,c=i.months,h=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].substr(0,o)},l=function(t){return v.s(o%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:v.s(s+1,2,"0"),MMM:h(i.monthsShort,s,c,3),MMMM:h(c,s),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,a,2),ddd:h(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(o),HH:v.s(o,2,"0"),h:l(1),hh:l(2),a:d(o,u,!0),A:d(o,u,!1),m:String(u),mm:v.s(u,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||m[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,i,c){var f,h=v.p(i),l=g(t),d=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,$=v.m(this,l);return $=(f={},f[a]=$/12,f[u]=$,f[s]=$/3,f[o]=(m-d)/6048e5,f.day=(m-d)/864e5,f[r]=m/36e5,f[n]=m/6e4,f[e]=m/1e3,f)[h]||m,c?$:v.a($)},l.daysInMonth=function(){return this.endOf(u).$D},l.$locale=function(){return $[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h}();return g.prototype=M.prototype,g.extend=function(t,e){return t(e,M,g),g},g.locale=y,g.isDayjs=p,g.unix=function(t){return g(1e3*t)},g.en=$[m],g.Ls=$,g}()}));function L(t){let e,n,r,i,o,u,d,m;return{c(){e=c("p"),e.innerHTML='Copy this to your github profile&#39;s <code class="svelte-1mfzrhz">README.md</code>',n=f(),r=c("textarea"),o=f(),u=c("button"),u.innerHTML='<svg title="Copy to clipboard" class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg> Copy',l(e,"class","py-2"),l(r,"name","md"),l(r,"id","mdData"),r.value=i="# "+(t[2].name?t[2].name:"Have you filled the right username?")+"\n"+(t[2].summary?t[2].summary:"Have you filled the right username?")+"\n<hr>\n\n### 📝 Latest articles from [dev.to](https://dev.to/shriji) \t\n"+t[1]()+"\n",l(r,"class","svelte-1mfzrhz")},m(t,i){s(t,e,i),s(t,n,i),s(t,r,i),s(t,o,i),s(t,u,i),d||(m=h(u,"click",z),d=!0)},p(t,e){6&e&&i!==(i="# "+(t[2].name?t[2].name:"Have you filled the right username?")+"\n"+(t[2].summary?t[2].summary:"Have you filled the right username?")+"\n<hr>\n\n### 📝 Latest articles from [dev.to](https://dev.to/shriji) \t\n"+t[1]()+"\n")&&(r.value=i)},d(t){t&&a(e),t&&a(n),t&&a(r),t&&a(o),t&&a(u),d=!1,m()}}}function k(e){let n,i,o,m,$,p,y,g,v,M,D,w,b=e[2]&&L(e);return{c(){n=c("main"),i=c("form"),o=c("label"),m=f(),$=c("input"),p=f(),y=c("button"),y.textContent="Fetch Data",g=f(),b&&b.c(),v=f(),M=c("footer"),M.innerHTML='<span>from</span>  <a href="https://anoram.com">Anoram</a>',l(o,"for","username"),l($,"type","text"),l($,"id","username"),l($,"placeholder","Your dev.to username"),$.required=!0,l(y,"type","submit"),l(M,"class","text-center")},m(t,r){s(t,n,r),u(n,i),u(i,o),u(i,m),u(i,$),d($,e[0]),u(i,p),u(i,y),u(n,g),b&&b.m(n,null),s(t,v,r),s(t,M,r),D||(w=[h($,"input",e[4]),h(y,"click",e[3])],D=!0)},p(t,[e]){1&e&&$.value!==t[0]&&d($,t[0]),t[2]?b?b.p(t,e):(b=L(t),b.c(),b.m(n,null)):b&&(b.d(1),b=null)},i:t,o:t,d(t){t&&a(n),b&&b.d(),t&&a(v),t&&a(M),D=!1,r(w)}}}function z(){document.querySelector("#mdData").select(),document.execCommand("copy")}function C(t,e,n){let r,i="",o="",u="";return[i,u,r,function(t){t.preventDefault();let e=document.querySelector("#username");e.checkValidity(),e.reportValidity(),e.checkValidity()&&(async function(t){const e=await fetch("https://dev.to/api/users/by_username?url="+t);if(n(2,r=await e.json()),e.ok);}(i),async function(t){const e=await fetch(`https://dev.to/api/articles?username=${t}&per_page=5`);if(o=await e.json(),e.ok)n(1,u=()=>{let t="";return o.forEach(e=>{let n=T(e.published_timestamp).format("MMM DD YYYY");t+=`* ${n} [${e.title}](${e.url}) \n`}),t||"No articles yet!"})}(i))},function(){i=this.value,n(0,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),Y(this,t,C,k,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
