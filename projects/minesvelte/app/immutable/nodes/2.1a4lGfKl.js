import{s as O,e as C,c as T,b as y,f as _,p as k,i as B,n as j,w as L,t as X,d as $,h as x,j as ee,a as R,g as A,x as H,y as te,z as ne,A as le}from"../chunks/scheduler.s4keOlH5.js";import{S as q,i as z,a as D,g as se,c as oe,t as w,b as Y,d as Z,m as J,e as K}from"../chunks/index.HxSdVWBd.js";import{g as ie}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.6R-F81MU.js";function P(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function ae(l){let e,n="🚩";return{c(){e=C("h3"),e.textContent=n,this.h()},l(i){e=T(i,"H3",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-16mkv5o"&&(e.textContent=n),this.h()},h(){k(e,"class","h3")},m(i,o){B(i,e,o)},p:j,d(i){i&&_(e)}}}function re(l){let e,n;return{c(){e=C("h3"),n=X(l[0]),this.h()},l(i){e=T(i,"H3",{class:!0});var o=y(e);n=$(o,l[0]),o.forEach(_),this.h()},h(){k(e,"class","h3")},m(i,o){B(i,e,o),x(e,n)},p(i,o){o&1&&ee(n,i[0])},d(i){i&&_(e)}}}function fe(l){let e,n;function i(c,a){if(c[1]&&c[0]!==0)return re;if(c[2])return ae}let o=i(l),t=o&&o(l);return{c(){e=C("div"),t&&t.c(),this.h()},l(c){e=T(c,"DIV",{class:!0});var a=y(e);t&&t.l(a),a.forEach(_),this.h()},h(){k(e,"class",n="border-2 border-white w-16 h-16 "+l[3]+" flex items-center justify-center")},m(c,a){B(c,e,a),t&&t.m(e,null)},p(c,[a]){o===(o=i(c))&&t?t.p(c,a):(t&&t.d(1),t=o&&o(c),t&&(t.c(),t.m(e,null))),a&8&&n!==(n="border-2 border-white w-16 h-16 "+c[3]+" flex items-center justify-center")&&k(e,"class",n)},i:j,o:j,d(c){c&&_(e),t&&t.d()}}}function ce(l,e,n){let i,{value:o}=e,{visible:t}=e,{flagged:c}=e;return l.$$set=a=>{"value"in a&&n(0,o=a.value),"visible"in a&&n(1,t=a.visible),"flagged"in a&&n(2,c=a.flagged)},l.$$.update=()=>{l.$$.dirty&3&&n(3,i=t&&o==="💣"?"bg-red-900":t?"":"bg-slate-400")},[o,t,c,i]}class ue extends q{constructor(e){super(),z(this,e,ce,fe,O,{value:0,visible:1,flagged:2})}}function U(l,e,n){const i=l.slice();return i[14]=e[n],i[16]=n,i}function W(l){let e,n,i,o,t,c;n=new ue({props:{value:l[14].value,visible:l[14].visible,flagged:l[14].flagged}});function a(){return l[4](l[16])}function p(){return l[5](l[16])}return{c(){e=C("button"),Y(n.$$.fragment),i=R()},l(v){e=T(v,"BUTTON",{});var u=y(e);Z(n.$$.fragment,u),i=A(u),u.forEach(_)},m(v,u){B(v,e,u),J(n,e,null),x(e,i),o=!0,t||(c=[H(e,"click",a),H(e,"contextmenu",ne(p))],t=!0)},p(v,u){l=v;const f={};u&1&&(f.value=l[14].value),u&1&&(f.visible=l[14].visible),u&1&&(f.flagged=l[14].flagged),n.$set(f)},i(v){o||(D(n.$$.fragment,v),o=!0)},o(v){w(n.$$.fragment,v),o=!1},d(v){v&&_(e),K(n),t=!1,le(c)}}}function de(l){let e,n,i,o,t,c="Reset",a,p,v,u=P(l[0]),f=[];for(let d=0;d<u.length;d+=1)f[d]=W(U(l,u,d));const V=d=>w(f[d],1,1,()=>{f[d]=null});return{c(){e=C("div"),n=C("div");for(let d=0;d<f.length;d+=1)f[d].c();i=R(),o=C("div"),t=C("button"),t.textContent=c,this.h()},l(d){e=T(d,"DIV",{class:!0});var g=y(e);n=T(g,"DIV",{class:!0});var m=y(n);for(let s=0;s<f.length;s+=1)f[s].l(m);m.forEach(_),i=A(g),o=T(g,"DIV",{class:!0});var I=y(o);t=T(I,"BUTTON",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1rekr07"&&(t.textContent=c),I.forEach(_),g.forEach(_),this.h()},h(){k(n,"class","grid grid-cols-9 grid-rows-9"),k(t,"class","m-4 btn variant-filled"),k(o,"class","flex-row"),k(e,"class","flex-col")},m(d,g){B(d,e,g),x(e,n);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(n,null);x(e,i),x(e,o),x(o,t),a=!0,p||(v=H(t,"click",l[2]),p=!0)},p(d,[g]){if(g&11){u=P(d[0]);let m;for(m=0;m<u.length;m+=1){const I=U(d,u,m);f[m]?(f[m].p(I,g),D(f[m],1)):(f[m]=W(I),f[m].c(),D(f[m],1),f[m].m(n,null))}for(se(),m=u.length;m<f.length;m+=1)V(m);oe()}},i(d){if(!a){for(let g=0;g<u.length;g+=1)D(f[g]);a=!0}},o(d){f=f.filter(Boolean);for(let g=0;g<f.length;g+=1)w(f[g]);a=!1},d(d){d&&_(e),te(f,d),p=!1,v()}}}const b=9;function F(){let l=[];for(let e=0;e<b;e++)for(let n=0;n<b;n++)l.push({value:0,visible:!1,flagged:!1});return l}function he(l,e){const n=G(l),i=G(e),o=Math.abs(n.row-i.row),t=Math.abs(n.col-i.col);return o<=1&&t<=1}function G(l){return{row:l%b,col:Math.floor(l/b)}}function M(l,e){return l*b+e}function me(l,e,n){const i=ie();let o=!1,t=F();function c(s){let r=10;for(;r>0;){const h=Math.floor(Math.random()*b*b);t[h].value==="💣"||he(h,s)||(n(0,t[h].value="💣",t),r-=1)}p()}function a(s,r){if(s<0||s>=b||r<0||r>=b)return!1;let h=M(s,r);return h<0||h>=t.length?!1:t[h].value==="💣"}function p(){for(let s=0;s<b;s++)for(let r=0;r<b;r++){const h=M(s,r);if(t[h].value==="💣")continue;const S=v(s,r);n(0,t[h].value=S,t)}}function v(s,r){let h=0;const S=[-1,0,1],N=[-1,0,1];for(let E of S)for(let Q of N)a(s+E,r+Q)&&h++;return h}function u(s,r,h){if(!(s<0||s>=b||r<0||r>=b||h.has(M(s,r))))if(h.add(M(s,r)),n(0,t[M(s,r)].visible=!0,t),t[M(s,r)].value===0)u(s+1,r,h),u(s-1,r,h),u(s,r-1,h),u(s,r+1,h),u(s+1,r+1,h),u(s+1,r-1,h),u(s-1,r-1,h),u(s-1,r+1,h);else return}function f(s){o||(c(s),o=!0),n(0,t[s].visible=!0,t);const r=Math.floor(s/b),h=s%b;u(r,h,new Set),t[s].value==="💣"&&setTimeout(()=>{const E={type:"alert",title:"Game Over",body:"You lose!",buttonTextCancel:"Reset",response:()=>d()};i.trigger(E)}),V()&&setTimeout(()=>{const E={type:"alert",title:"Winner",buttonTextCancel:"Hurray!",response:()=>d()};i.trigger(E)})}function V(){return t.filter(s=>s.value!=="💣"&&!s.visible).length===0}function d(){n(0,t=F()),o=!1}function g(s){const r=t[s];r.flagged=!r.flagged,n(0,t)}return[t,f,d,g,s=>f(s),s=>g(s)]}class ge extends q{constructor(e){super(),z(this,e,me,de,O,{})}}function ve(l){let e,n='<h1 class="h1 p-8">Minesweeper</h1>',i,o,t,c;return t=new ge({}),{c(){e=C("div"),e.innerHTML=n,i=R(),o=C("div"),Y(t.$$.fragment),this.h()},l(a){e=T(a,"DIV",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-qmz6a1"&&(e.innerHTML=n),i=A(a),o=T(a,"DIV",{class:!0});var p=y(o);Z(t.$$.fragment,p),p.forEach(_),this.h()},h(){k(e,"class","flex justify-center"),k(o,"class","flex justify-center")},m(a,p){B(a,e,p),B(a,i,p),B(a,o,p),J(t,o,null),c=!0},p:j,i(a){c||(D(t.$$.fragment,a),c=!0)},o(a){w(t.$$.fragment,a),c=!1},d(a){a&&(_(e),_(i),_(o)),K(t)}}}class Ce extends q{constructor(e){super(),z(this,e,null,ve,O,{})}}export{Ce as component};