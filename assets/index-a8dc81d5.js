var nt=Object.defineProperty;var lt=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(lt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function F(){}const st=e=>e;function xe(e){return e()}function Ee(){return Object.create(null)}function Q(e){e.forEach(xe)}function $e(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let he;function it(e,t){return he||(he=document.createElement("a")),he.href=t,e===he.href}function ot(e){return Object.keys(e).length===0}const Ge=typeof window<"u";let rt=Ge?()=>window.performance.now():()=>Date.now(),Ce=Ge?e=>requestAnimationFrame(e):F;const ee=new Set;function Ve(e){ee.forEach(t=>{t.c(e)||(ee.delete(t),t.f())}),ee.size!==0&&Ce(Ve)}function at(e){let t;return ee.size===0&&Ce(Ve),{promise:new Promise(n=>{ee.add(t={c:e,f:n})}),abort(){ee.delete(t)}}}function c(e,t){e.appendChild(t)}function Qe(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ct(e){const t=m("style");return ut(Qe(e),t),t.sheet}function ut(e,t){return c(e.head||e,t),t.sheet}function O(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function we(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function C(){return R(" ")}function ft(){return R("")}function ie(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function dt(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _e(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t){l.selected=!0;return}}e.selectedIndex=-1}function Me(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function Je(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,l,t),s}const ve=new Map;let be=0;function ht(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function _t(e,t){const n={stylesheet:ct(t),rules:{}};return ve.set(e,n),n}function De(e,t,n,l,s,i,o,r=0){const u=16.666/l;let a=`{
`;for(let k=0;k<=1;k+=u){const P=t+(n-t)*i(k);a+=k*100+`%{${o(P,1-P)}}
`}const d=a+`100% {${o(n,1-n)}}
}`,p=`__svelte_${ht(d)}_${r}`,g=Qe(e),{stylesheet:h,rules:w}=ve.get(g)||_t(g,e);w[p]||(w[p]=!0,h.insertRule(`@keyframes ${p} ${d}`,h.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${p} ${l}ms linear ${s}ms 1 both`,be+=1,p}function mt(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),s=n.length-l.length;s&&(e.style.animation=l.join(", "),be-=s,be||pt())}function pt(){Ce(()=>{be||(ve.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&A(t)}),ve.clear())})}let re;function oe(e){re=e}function Xe(){if(!re)throw new Error("Function called outside component initialization");return re}function He(e){Xe().$$.on_mount.push(e)}function gt(){const e=Xe();return(t,n,{cancelable:l=!1}={})=>{const s=e.$$.callbacks[t];if(s){const i=Je(t,n,{cancelable:l});return s.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}function et(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const se=[],ye=[],pe=[],Ie=[],wt=Promise.resolve();let Pe=!1;function vt(){Pe||(Pe=!0,wt.then(tt))}function J(e){pe.push(e)}function ze(e){Ie.push(e)}const Se=new Set;let me=0;function tt(){const e=re;do{for(;me<se.length;){const t=se[me];me++,oe(t),bt(t.$$)}for(oe(null),se.length=0,me=0;ye.length;)ye.pop()();for(let t=0;t<pe.length;t+=1){const n=pe[t];Se.has(n)||(Se.add(n),n())}pe.length=0}while(se.length);for(;Ie.length;)Ie.pop()();Pe=!1,Se.clear(),oe(e)}function bt(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}let le;function yt(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function Te(e,t,n){e.dispatchEvent(Je(`${t?"intro":"outro"}${n}`))}const ge=new Set;let G;function kt(){G={r:0,c:[],p:G}}function St(){G.r||Q(G.c),G=G.p}function V(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function te(e,t,n,l){if(e&&e.o){if(ge.has(e))return;ge.add(e),G.c.push(()=>{ge.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const Tt={duration:0};function Ne(e,t,n,l){const s={direction:"both"};let i=t(e,n,s),o=l?0:1,r=null,u=null,a=null;function d(){a&&mt(e,a)}function p(h,w){const y=h.b-o;return w*=Math.abs(y),{a:o,b:h.b,d:y,duration:w,start:h.start,end:h.start+w,group:h.group}}function g(h){const{delay:w=0,duration:y=300,easing:k=st,tick:P=F,css:E}=i||Tt,$={start:rt()+w,b:h};h||($.group=G,G.r+=1),r||u?u=$:(E&&(d(),a=De(e,o,h,y,w,k,E)),h&&P(0,1),r=p($,y),J(()=>Te(e,h,"start")),at(H=>{if(u&&H>u.start&&(r=p(u,y),u=null,Te(e,r.b,"start"),E&&(d(),a=De(e,o,r.b,r.duration,0,k,i.css))),r){if(H>=r.end)P(o=r.b,1-o),Te(e,r.b,"end"),u||(r.b?d():--r.group.r||Q(r.group.c)),r=null;else if(H>=r.start){const L=H-r.start;o=r.a+r.d*k(L/r.duration),P(o,1-o)}}return!!(r||u)}))}return{run(h){$e(i)?yt().then(()=>{i=i(s),g(h)}):g(h)},end(){d(),r=u=null}}}function Re(e,t,n,l){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,l===void 0&&n(e.$$.ctx[s]))}function ke(e){e&&e.c()}function ae(e,t,n,l){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),l||J(()=>{const o=e.$$.on_mount.map(xe).filter($e);e.$$.on_destroy?e.$$.on_destroy.push(...o):Q(o),e.$$.on_mount=[]}),i.forEach(J)}function ce(e,t){const n=e.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function It(e,t){e.$$.dirty[0]===-1&&(se.push(e),vt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,n,l,s,i,o,r=[-1]){const u=re;oe(e);const a=e.$$={fragment:null,ctx:[],props:i,update:F,not_equal:s,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Ee(),dirty:r,skip_bound:!1,root:t.target||u.$$.root};o&&o(a.root);let d=!1;if(a.ctx=n?n(e,t.props||{},(p,g,...h)=>{const w=h.length?h[0]:g;return a.ctx&&s(a.ctx[p],a.ctx[p]=w)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](w),d&&It(e,p)),g}):[],a.update(),d=!0,Q(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const p=dt(t.target);a.fragment&&a.fragment.l(p),p.forEach(A)}else a.fragment&&a.fragment.c();t.intro&&V(e.$$.fragment),ae(e,t.target,t.anchor,t.customElement),tt()}oe(u)}class de{$destroy(){ce(this,1),this.$destroy=F}$on(t,n){if(!$e(n))return F;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!ot(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Pt(e){const t=e-1;return t*t*t+1}function Ae(e,{delay:t=0,duration:n=400,easing:l=Pt,x:s=0,y:i=0,opacity:o=0}={}){const r=getComputedStyle(e),u=+r.opacity,a=r.transform==="none"?"":r.transform,d=u*(1-o);return{delay:t,duration:n,easing:l,css:(p,g)=>`
			transform: ${a} translate(${(1-p)*s}px, ${(1-p)*i}px);
			opacity: ${u-d*g}`}}const $t="https://MTRData.kennymhhui.repl.co/lr?stnId={stn}",Ct="https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id={stn}";class Ht{constructor(t,n,l,s,i,o){U(this,"route_no");U(this,"train_length");U(this,"dest_zh");U(this,"dest_en");U(this,"time_num");U(this,"time_text");this.route_no=t,this.train_length=n,this.dest_zh=l,this.dest_en=s,this.time_text=o,this.time_num=i}}class f{constructor(t,n,l){U(this,"name");U(this,"initials");U(this,"platforms");this.name=n,this.initials=t,this.platforms=l}}function Lt(e,t=!1){return(t?Ct:$t).replace("{stn}",e)}const X=new Map([["1",new f("1","屯門碼頭|Tuen Mun Ferry Pier",[2,3,4,5,7])],["10",new f("10","美樂|Melody Garden",[1,2])],["15",new f("15","蝴蝶|Butterfly",[1,2])],["20",new f("20","輕鐵車廠|Light Rail Depot",[1,2])],["30",new f("30","龍門|Lung Mun",[1,2])],["40",new f("40","青山村|Tsing Shan Tsuen",[1,2])],["50",new f("50","青雲|Tsing Wun",[1,2])],["60",new f("60","建安|Kin On",[1,2])],["70",new f("70","河田|Ho Tin",[1,2])],["75",new f("75","蔡意橋|Choy Yee Bridge",[1,2])],["80",new f("80","澤豐|Affluence",[1,2])],["90",new f("90","屯門醫院|Tuen Mun Hospital",[1,2])],["100",new f("100","兆康|Siu Hong",[1,2,5,6])],["110",new f("110","麒麟|Kei Lun",[1,2])],["120",new f("120","青松|Ching Chung",[1,2])],["130",new f("130","建生|Kin Sang",[1,2])],["140",new f("140","田景|Tin King",[1,2,3])],["150",new f("150","良景|Leung King",[1,2])],["160",new f("160","新圍|San Wai",[1,2])],["170",new f("170","石排|Shek Pai",[1,2])],["180",new f("180","山景 (北)|Shan King (North)",[1])],["190",new f("190","山景 (南)|Shan King (South)",[1])],["200",new f("200","鳴琴|Ming Kum",[1,2])],["212",new f("212","大興 (北)|Tai Hing (North)",[1,2])],["220",new f("220","大興 (南)|Tai Hing (South)",[1,2])],["230",new f("230","銀圍|Ngan Wai",[1,2])],["240",new f("240","兆禧|Siu Hei",[1,2])],["250",new f("250","屯門泳池|Tuen Mun Swimming Pool",[1,2])],["260",new f("260","豐景園|Goodview Garden",[1,2])],["265",new f("265","兆麟|Siu Lun",[1,2])],["270",new f("270","安定|On Ting",[1,2])],["275",new f("275","友愛|Yau Oi",[1])],["280",new f("280","市中心|Town Centre",[4])],["295",new f("295","屯門|Tuen Mun",[1,2])],["300",new f("300","杯渡|Pui To",[1,2])],["310",new f("310","何福堂|Hoh Fuk Tong",[1,2])],["320",new f("320","新墟|San Hui",[1,2])],["330",new f("330","景峰|Prime View",[1,2])],["340",new f("340","鳳地|Fung Tei",[1,2])],["350",new f("350","藍地|Lam Tei",[1,2])],["360",new f("360","泥圍|Nai Wai",[1,2])],["370",new f("370","鍾屋村|Chung Uk Tsuen",[1,2])],["380",new f("380","洪水橋|Hung Shui Kiu",[1,2])],["390",new f("390","塘坊村|Tong Fong Tsuen",[1,2])],["400",new f("400","屏山|Ping Shan",[1,2])],["425",new f("425","坑尾村|Hang Mei Tsuen",[1,2])],["430",new f("430","天水圍|Tin Shui Wai",[1,2,3])],["435",new f("435","天慈|Tin Tsz",[1,2])],["445",new f("445","天耀|Tin Yiu",[1,2])],["448",new f("448","樂湖|Locwood",[1,2])],["450",new f("450","天湖|Tin Wu",[1,2])],["455",new f("455","銀座|Ginza",[1,2])],["460",new f("460","天瑞|Tin Shui",[1,2])],["468",new f("468","頌富|Chung Fu",[1,2])],["480",new f("480","天富|Tin Fu",[1,2])],["490",new f("490","翠湖|Chestwood",[1,2])],["500",new f("500","天榮|Tin Wing",[6,7])],["510",new f("510","天悅|Tin Yuet",[1,2])],["520",new f("520","天秀|Tin Sau",[1,2])],["530",new f("530","濕地公園|Wetland Park",[1,2])],["540",new f("540","天恒|Tin Heng",[1,2])],["550",new f("550","天逸|Tin Yat",[1,2,4,5])],["560",new f("560","水邊圍|Shui Pin Wai",[1,2])],["570",new f("570","豐年路|Fung Nin Road",[1,2])],["580",new f("580","康樂路|Hong Lok Road",[1,2])],["590",new f("590","大棠路|Tai Tong Road",[1,2])],["600",new f("600","元朗|Yuen Long",[2,3,4,5])],["920",new f("920","三聖|Sam Shing",[1,3])]]);function Et(e){let t,n,l,s,i,o,r,u,a,d,p,g=(e[3]||"站名")+"",h,w,y,k,P=(e[4]||"Station Name")+"",E,$,H,L,j,W,x,Z;return{c(){t=m("div"),n=m("table"),l=m("tr"),s=m("td"),i=m("span"),o=R(e[0]),r=C(),u=m("div"),u.innerHTML="月台<br/>Platform",a=C(),d=m("td"),p=m("span"),h=R(g),w=m("br"),y=C(),k=m("span"),E=R(P),$=C(),H=m("td"),L=R(e[1]),j=R(":"),W=R(e[2]),_(i,"class","platcircle svelte-18u92w0"),_(u,"class","plattext svelte-18u92w0"),_(s,"class","platformCell svelte-18u92w0"),_(p,"class","sizeZH svelte-18u92w0"),_(k,"class","en"),_(d,"class","stnName svelte-18u92w0"),_(d,"role","button"),_(d,"tabindex","0"),_(d,"title","Show Config Menu"),_(H,"class","clock svelte-18u92w0"),_(n,"id","titlebarTB"),_(n,"class","svelte-18u92w0"),_(t,"id","titlebar"),_(t,"class","svelte-18u92w0")},m(M,N){O(M,t,N),c(t,n),c(n,l),c(l,s),c(s,i),c(i,o),c(s,r),c(s,u),c(l,a),c(l,d),c(d,p),c(p,h),c(d,w),c(d,y),c(d,k),c(k,E),c(l,$),c(l,H),c(H,L),c(H,j),c(H,W),x||(Z=[ie(d,"click",e[5]),ie(d,"keypress",e[5])],x=!0)},p(M,[N]){N&1&&K(o,M[0]),N&8&&g!==(g=(M[3]||"站名")+"")&&K(h,g),N&16&&P!==(P=(M[4]||"Station Name")+"")&&K(E,P),N&2&&K(L,M[1]),N&4&&K(W,M[2])},i:F,o:F,d(M){M&&A(t),x=!1,Q(Z)}}}function Mt(e,t,n){let{stnId:l}=t,{platform:s}=t;const i=gt();let o=new Date,r,u,a,d;function p(){i("showConfig")}function g(){n(8,o=new Date)}return He(()=>{const h=setInterval(g,2e3);return g(),()=>clearInterval(h)}),e.$$set=h=>{"stnId"in h&&n(6,l=h.stnId),"platform"in h&&n(0,s=h.platform)},e.$$.update=()=>{var h,w;e.$$.dirty&256&&n(1,r=o.getHours().toString().padStart(2,"0")),e.$$.dirty&256&&n(2,u=o.getMinutes().toString().padStart(2,"0")),e.$$.dirty&64&&n(3,a=((h=X.get(l))==null?void 0:h.name.split("|")[0])||""),e.$$.dirty&64&&n(4,d=((w=X.get(l))==null?void 0:w.name.split("|")[1])||"")},[s,r,u,a,d,p,l,g,o]}class Dt extends de{constructor(t){super(),fe(this,t,Mt,Et,ue,{stnId:6,platform:0,updateDate:7})}get updateDate(){return this.$$.ctx[7]}}function Oe(e,t,n){const l=e.slice();return l[4]=t[n],l[6]=n,l}function Fe(e,t,n){const l=e.slice();return l[4]=t[n],l[6]=n,l}function zt(e){let t;return{c(){t=m("tr"),t.innerHTML=`<td class="lineHeightDouble sizeDouble svelte-1k2x9h5"> </td> 
              <td class="svelte-1k2x9h5"></td> 
              <td class="svelte-1k2x9h5"></td> 
              <td class="svelte-1k2x9h5"></td> 
            `,_(t,"class","arrRow svelte-1k2x9h5")},m(n,l){O(n,t,l)},p:F,d(n){n&&A(t)}}}function Nt(e){let t,n,l=e[0][e[6]].route_no+"",s,i,o,r,u=e[0][e[6]].dest_zh+"",a,d,p=e[0][e[6]].dest_en+"",g,h,w,y,k,P,E,$=e[0][e[6]].time_num+"",H,L,j=e[0][e[6]].time_text.split("|")[0]+"",W,x,Z=e[0][e[6]].time_text.split("|")[1]+"",M,N,B={length:e[0][e[6]].train_length},D=[];for(let v=0;v<B.length;v+=1)D[v]=Ke(Fe(e,B,v));return{c(){t=m("tr"),n=m("td"),s=R(l),i=C(),o=m("td"),r=m("span"),a=R(u),d=m("br"),g=R(p),h=C(),w=m("td"),y=m("div");for(let v=0;v<D.length;v+=1)D[v].c();k=C(),P=m("td"),E=m("span"),H=R($),L=m("span"),W=R(j),x=m("br"),M=R(Z),N=C(),_(n,"class","lineHeightDouble sizeDouble svelte-1k2x9h5"),_(r,"class","sizeZH svelte-1k2x9h5"),_(o,"class","svelte-1k2x9h5"),_(y,"class","cars svelte-1k2x9h5"),_(w,"class","svelte-1k2x9h5"),_(E,"class","sizeDouble multiLine svelte-1k2x9h5"),_(L,"class","eta"),_(P,"class","svelte-1k2x9h5"),_(t,"class","arrRow svelte-1k2x9h5")},m(v,S){O(v,t,S),c(t,n),c(n,s),c(t,i),c(t,o),c(o,r),c(r,a),c(o,d),c(o,g),c(t,h),c(t,w),c(w,y);for(let I=0;I<D.length;I+=1)D[I].m(y,null);c(t,k),c(t,P),c(P,E),c(E,H),c(P,L),c(L,W),c(L,x),c(L,M),c(t,N)},p(v,S){if(S&1&&l!==(l=v[0][v[6]].route_no+"")&&K(s,l),S&1&&u!==(u=v[0][v[6]].dest_zh+"")&&K(a,u),S&1&&p!==(p=v[0][v[6]].dest_en+"")&&K(g,p),S&1){B={length:v[0][v[6]].train_length};let I;for(I=0;I<B.length;I+=1){const z=Fe(v,B,I);D[I]?D[I].p(z,S):(D[I]=Ke(z),D[I].c(),D[I].m(y,null))}for(;I<D.length;I+=1)D[I].d(1);D.length=B.length}S&1&&$!==($=v[0][v[6]].time_num+"")&&K(H,$),S&1&&j!==(j=v[0][v[6]].time_text.split("|")[0]+"")&&K(W,j),S&1&&Z!==(Z=v[0][v[6]].time_text.split("|")[1]+"")&&K(M,Z)},d(v){v&&A(t),we(D,v)}}}function Ke(e){let t,n;return{c(){t=m("img"),_(t,"class","car svelte-1k2x9h5"),it(t.src,n="img/lrv.png")||_(t,"src",n),_(t,"alt","LRV Car "+e[6])},m(l,s){O(l,t,s)},p:F,d(l){l&&A(t)}}}function We(e){let t;function n(i,o){return i[6]<i[0].length?Nt:zt}let l=n(e),s=l(e);return{c(){s.c(),t=ft()},m(i,o){s.m(i,o),O(i,t,o)},p(i,o){l===(l=n(i))&&s?s.p(i,o):(s.d(1),s=l(i),s&&(s.c(),s.m(t.parentNode,t)))},d(i){s.d(i),i&&A(t)}}}function Rt(e){let t,n,l,s,i={length:Ze},o=[];for(let r=0;r<i.length;r+=1)o[r]=We(Oe(e,i,r));return{c(){t=m("main"),n=m("table"),l=m("tr"),l.innerHTML=`<td class="svelte-1k2x9h5"><span class="sizeZH svelte-1k2x9h5">路線</span><br/>Route</td> 
            <td class="svelte-1k2x9h5"><span class="sizeZH svelte-1k2x9h5">目的地</span><br/>Destination</td> 
            <td class="svelte-1k2x9h5"></td> 
            <td class="svelte-1k2x9h5"><span class="sizeZH svelte-1k2x9h5">下班車</span><br/>Next Train</td>`,s=C();for(let r=0;r<o.length;r+=1)o[r].c();_(l,"class","header svelte-1k2x9h5"),_(n,"id","eta"),_(n,"class","svelte-1k2x9h5"),_(t,"class","svelte-1k2x9h5")},m(r,u){O(r,t,u),c(t,n),c(n,l),c(n,s);for(let a=0;a<o.length;a+=1)o[a].m(n,null)},p(r,[u]){if(u&1){i={length:Ze};let a;for(a=0;a<i.length;a+=1){const d=Oe(r,i,a);o[a]?o[a].p(d,u):(o[a]=We(d),o[a].c(),o[a].m(n,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=i.length}},i:F,o:F,d(r){r&&A(t),we(o,r)}}}const Ze=10;function At(e,t,n){let{stnId:l}=t,{targetPlatform:s}=t,i=[];async function o(r,u,a=!1){if(r==null||u==null)return;let d;try{d=await fetch(Lt(r,a))}catch{if(!a)return console.warn("Cannot fetch data from proxy server, falling back to MTR"),o(r,u,!0)}let p=await d.json();if(p.status!=1)return;let g=[];for(let h of p.platform_list)if(h.platform_id===u)for(let w of h.route_list){if(w.stop===1)continue;let y,k;w.time_en.includes("min")?(y="分鐘|min",k=w.time_en.split(" min")[0]):w.time_en==="-"?(y=" | ",k="-"):(k="",y=`${w.time_ch}|${w.time_en}`);let P=new Ht(w.route_no,w.train_length,w.dest_ch,w.dest_en,k,y);g.push(P)}n(0,i=g)}return He(async()=>{const r=setInterval(async()=>await o(l,s),1e4);return()=>clearInterval(r)}),e.$$set=r=>{"stnId"in r&&n(1,l=r.stnId),"targetPlatform"in r&&n(2,s=r.targetPlatform)},e.$$.update=()=>{e.$$.dirty&6&&o(l,s)},[i,l,s]}class Ot extends de{constructor(t){super(),fe(this,t,At,Rt,ue,{stnId:1,targetPlatform:2})}}function Ft(e){let t,n,l,s;return t=new Dt({props:{stnId:e[0],platform:e[1]}}),t.$on("showConfig",e[2]),l=new Ot({props:{stnId:e[0],targetPlatform:e[1]}}),{c(){ke(t.$$.fragment),n=C(),ke(l.$$.fragment)},m(i,o){ae(t,i,o),O(i,n,o),ae(l,i,o),s=!0},p(i,[o]){const r={};o&1&&(r.stnId=i[0]),o&2&&(r.platform=i[1]),t.$set(r);const u={};o&1&&(u.stnId=i[0]),o&2&&(u.targetPlatform=i[1]),l.$set(u)},i(i){s||(V(t.$$.fragment,i),V(l.$$.fragment,i),s=!0)},o(i){te(t.$$.fragment,i),te(l.$$.fragment,i),s=!1},d(i){ce(t,i),i&&A(n),ce(l,i)}}}function Kt(e,t,n){let{stnId:l}=t,{platform:s}=t;function i(o){et.call(this,e,o)}return e.$$set=o=>{"stnId"in o&&n(0,l=o.stnId),"platform"in o&&n(1,s=o.platform)},[l,s,i]}class Wt extends de{constructor(t){super(),fe(this,t,Kt,Ft,ue,{stnId:0,platform:1})}}function je(e,t,n){const l=e.slice();return l[5]=t[n],l}function Be(e,t,n){const l=e.slice();return l[8]=t[n][0],l[9]=t[n][1],l}function Ye(e){let t,n=e[9].name.replace("|"," ")+"",l;return{c(){t=m("option"),l=R(n),t.__value=e[8],t.value=t.__value},m(s,i){O(s,t,i),c(t,l)},p:F,d(s){s&&A(t)}}}function qe(e){let t,n=e[5]+"",l,s;return{c(){t=m("option"),l=R(n),t.__value=s=e[5],t.value=t.__value},m(i,o){O(i,t,o),c(t,l)},p(i,o){o&1&&n!==(n=i[5]+"")&&K(l,n),o&1&&s!==(s=i[5])&&(t.__value=s,t.value=t.__value)},d(i){i&&A(t)}}}function Zt(e){var Le;let t,n,l,s,i,o,r,u,a,d,p,g,h,w,y,k,P,E,$,H,L,j,W,x,Z,M,N,B,D,v=[...X],S=[];for(let b=0;b<v.length;b+=1)S[b]=Ye(Be(e,v,b));let I=((Le=X.get(e[0]))==null?void 0:Le.platforms)??[],z=[];for(let b=0;b<I.length;b+=1)z[b]=qe(je(e,I,b));return{c(){t=m("main"),n=m("h1"),n.textContent="輕鐵資訊顯示屏模擬器",l=C(),s=m("h3"),s.textContent="Light Rail PIDS Simulator",i=C(),o=m("hr"),r=C(),u=m("table"),a=m("tr"),d=m("td"),d.innerHTML='<span class="sizeZH svelte-hof67c">車站</span><br/><span class="sizeEN svelte-hof67c">Station</span>',p=C(),g=m("td"),h=m("select");for(let b=0;b<S.length;b+=1)S[b].c();w=C(),y=m("tr"),k=m("td"),k.innerHTML='<span class="sizeZH svelte-hof67c">月台</span><br/><span class="sizeEN svelte-hof67c">Platform</span>',P=C(),E=m("td"),$=m("select");for(let b=0;b<z.length;b+=1)z[b].c();H=C(),L=m("button"),L.textContent="開始 Start",j=C(),W=m("p"),W.textContent="如需要再顯示此菜單，請按頂部的車站名",x=C(),Z=m("p"),Z.textContent="Click the station name at the top to return to this menu.",M=C(),N=m("footer"),N.innerHTML="<p>HKTSS 2023</p>",_(n,"class","sizeZH svelte-hof67c"),_(s,"class","sizeEN svelte-hof67c"),_(d,"class","svelte-hof67c"),_(h,"id","stnOpt"),_(h,"class","svelte-hof67c"),e[0]===void 0&&J(()=>e[3].call(h)),_(g,"class","svelte-hof67c"),_(a,"class","svelte-hof67c"),_(k,"class","svelte-hof67c"),_($,"id","platOpt"),_($,"class","svelte-hof67c"),e[1]===void 0&&J(()=>e[4].call($)),_(E,"class","svelte-hof67c"),_(y,"class","svelte-hof67c"),_(u,"id","cfgTable"),_(u,"class","svelte-hof67c"),_(L,"class","closeBtn svelte-hof67c"),_(t,"class","svelte-hof67c"),_(N,"class","svelte-hof67c")},m(b,Y){O(b,t,Y),c(t,n),c(t,l),c(t,s),c(t,i),c(t,o),c(t,r),c(t,u),c(u,a),c(a,d),c(a,p),c(a,g),c(g,h);for(let q=0;q<S.length;q+=1)S[q].m(h,null);_e(h,e[0]),c(u,w),c(u,y),c(y,k),c(y,P),c(y,E),c(E,$);for(let q=0;q<z.length;q+=1)z[q].m($,null);_e($,e[1]),c(t,H),c(t,L),c(t,j),c(t,W),c(t,x),c(t,Z),O(b,M,Y),O(b,N,Y),B||(D=[ie(h,"change",e[3]),ie($,"change",e[4]),ie(L,"click",e[2])],B=!0)},p(b,[Y]){var q;if(Y&0){v=[...X];let T;for(T=0;T<v.length;T+=1){const ne=Be(b,v,T);S[T]?S[T].p(ne,Y):(S[T]=Ye(ne),S[T].c(),S[T].m(h,null))}for(;T<S.length;T+=1)S[T].d(1);S.length=v.length}if(Y&1&&_e(h,b[0]),Y&1){I=((q=X.get(b[0]))==null?void 0:q.platforms)??[];let T;for(T=0;T<I.length;T+=1){const ne=je(b,I,T);z[T]?z[T].p(ne,Y):(z[T]=qe(ne),z[T].c(),z[T].m($,null))}for(;T<z.length;T+=1)z[T].d(1);z.length=I.length}Y&3&&_e($,b[1])},i:F,o:F,d(b){b&&A(t),we(S,b),we(z,b),b&&A(M),b&&A(N),B=!1,Q(D)}}}function jt(e,t,n){let{stationId:l}=t,{selectedPlatform:s}=t;function i(u){et.call(this,e,u)}function o(){l=Me(this),n(0,l)}function r(){s=Me(this),n(1,s),n(0,l)}return e.$$set=u=>{"stationId"in u&&n(0,l=u.stationId),"selectedPlatform"in u&&n(1,s=u.selectedPlatform)},[l,s,i,o,r]}class Bt extends de{constructor(t){super(),fe(this,t,jt,Zt,ue,{stationId:0,selectedPlatform:1})}}function Ue(e){let t,n,l,s,i,o;function r(d){e[4](d)}function u(d){e[5](d)}let a={};return e[0]!==void 0&&(a.stationId=e[0]),e[1]!==void 0&&(a.selectedPlatform=e[1]),n=new Bt({props:a}),ye.push(()=>Re(n,"stationId",r,e[0])),ye.push(()=>Re(n,"selectedPlatform",u,e[1])),n.$on("click",e[6]),{c(){t=m("div"),ke(n.$$.fragment),_(t,"class","portrait svelte-1yw8xfp")},m(d,p){O(d,t,p),ae(n,t,null),o=!0},p(d,p){const g={};!l&&p&1&&(l=!0,g.stationId=d[0],ze(()=>l=!1)),!s&&p&2&&(s=!0,g.selectedPlatform=d[1],ze(()=>s=!1)),n.$set(g)},i(d){o||(V(n.$$.fragment,d),J(()=>{i||(i=Ne(t,Ae,{y:25,duration:200},!0)),i.run(1)}),o=!0)},o(d){te(n.$$.fragment,d),i||(i=Ne(t,Ae,{y:25,duration:200},!1)),i.run(0),o=!1},d(d){d&&A(t),ce(n),d&&i&&i.end()}}}function Yt(e){let t,n,l,s,i;l=new Wt({props:{stnId:e[0],platform:e[1]}}),l.$on("showConfig",e[3]);let o=e[2]&&Ue(e);return{c(){t=m("main"),n=m("div"),ke(l.$$.fragment),s=C(),o&&o.c(),_(n,"class","portrait svelte-1yw8xfp"),_(t,"class","svelte-1yw8xfp")},m(r,u){O(r,t,u),c(t,n),ae(l,n,null),c(t,s),o&&o.m(t,null),i=!0},p(r,[u]){const a={};u&1&&(a.stnId=r[0]),u&2&&(a.platform=r[1]),l.$set(a),r[2]?o?(o.p(r,u),u&4&&V(o,1)):(o=Ue(r),o.c(),V(o,1),o.m(t,null)):o&&(kt(),te(o,1,1,()=>{o=null}),St())},i(r){i||(V(l.$$.fragment,r),V(o),i=!0)},o(r){te(l.$$.fragment,r),te(o),i=!1},d(r){r&&A(t),ce(l),o&&o.d()}}}function qt(e,t){e!==void 0&&localStorage.setItem("stnId",e),t!==void 0&&localStorage.setItem("platform",t.toString())}function Ut(e,t,n){let l,s,i=!1;function o(){let g=localStorage.getItem("platform"),h=localStorage.getItem("stnId");g==null||h==null?(n(0,l="1"),n(1,s=2),n(2,i=!0)):(n(0,l=h),n(1,s=parseInt(g)))}function r(){const g=new URLSearchParams(window.location.search),h=Object.fromEntries(g.entries());h.stnId!=null&&h.plat!=null&&(n(2,i=!1),n(0,l=h.stnId),n(1,s=parseInt(h.plat)))}He(()=>{o(),r()});const u=()=>n(2,i=!0);function a(g){l=g,n(0,l)}function d(g){s=g,n(1,s)}const p=()=>n(2,i=!1);return e.$$.update=()=>{e.$$.dirty&3&&qt(l,s)},[l,s,i,u,a,d,p]}class xt extends de{constructor(t){super(),fe(this,t,Ut,Yt,ue,{})}}new xt({target:document.getElementById("app")});