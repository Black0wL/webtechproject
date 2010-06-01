(function(){var g=this,f=g.JUI,d=g.$,i=1,a={},b={browser:"browser.js",element:"element.js",selector:"selector.js",string:"string.js",array:"array.js"},e=JUI=g.JUI=g.$=function(j,k){if(a.element){return new e.Element(j,false)}return document.getElementById(j)};var h={initialize:function(p){p=p||{};var k=p.initialize;var j=p.legacy;var o=p.name||JUI.name;var m=k||j;var l=p.protect;var q=p.afterImplement||function(){};m.constructor=this.initialize;m.$family=o.toLowerCase();if(j&&k){m.prototype=j.prototype}m.prototype.constructor=m;m.prototype.$family=m.$family;var r=function(u,s,v,t){if(!l||t||!u.prototype[s]){u.prototype[s]=v}q.call(u,s,v);return u};m.alias=function(u,s,v){if(typeof u=="string"){if((u=this.prototype[u])){return r(this,s,u,v)}}for(var t in u){this.alias(t,u[t],s)}return this};m.genericize=function(t,s){if(typeof t=="string"){if((!s||!this[t])&&typeof this.prototype[t]=="function"){this[t]=function(){var v=Array.prototype.slice.call(arguments);return this.prototype[t].apply(v.shift(),v)}}return}for(var u=0;u<t.length;u++){this.genericize(t[u],s)}return this};m.implement=function(t,s,v){if(typeof t=="string"){return r(this,t,s,v)}for(var u in t){r(this,u,t[u],s)}return this}},genericize:function(j,k){j&&j.genericize(k)},implement:function(o,m){for(var k=0,j=o.length;k<j;k++){o[k].implement(m)}}};e.Native=h;(function(){var j={Array:Array,Boolean:Boolean,Date:Date,Function:Function,Number:Number,RegExp:RegExp,String:String,JUI:e};for(var o in j){h.initialize({name:o,initialize:j[o],protect:true})}var m={Array:["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","toString","unshift","valueOf"],String:["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf"]};for(var l in m){for(var k=m[l].length;k--;){h.genericize(g[l],m[l])}}})();e.name="jui";e.version="1.0.0.0";e.expando="_JUI_"+new Date,e.type=function(j){if(j==undefined){return false}if(j.$family){return(j.$family=="number"&&!isFinite(j))?false:j.$family}if(j.nodeName){switch(j.nodeType){case 1:return"element";case 3:return(/\S/).test(j.nodeValue)?"textnode":"whitespace"}}else{if(typeof j.length=="number"){if(j.callee){return"arguments"}else{if(j.item){return"collection"}}}}return typeof j};e.empty=function(){};e.noConfilict=function(){g.$=d;return this};e.extend=function(o,l){if(!l){throw"Failed! Inherit from a null object"}var j=l.prototype,m=function(){};m.prototype=j;var k=new m();o.prototype=k;k.constructor=o;o.superclass=j;if(l!=Object&&j.constructor==Object.prototype.constructor){j.constructor=l}return o};e.register=function(k,j){a[k]=j};function c(k){var j=document.createElement("script");j.type="text/javascript";j.src=k;document.getElementsByTagName("head")[0].appendChild(j)}e.requires=function(){var k=0,j;while(j=arguments[k++]){(!a[j])&&c(b[j])}};e.loaded=function(j){return a[j]!==null};e.now=function(){return +new Date};e.getUid=(g.ActiveXObject)?function(j){return(j[e.expando]||(j[e.expando]=[i++]))[0]}:function(j){return j[e.expando]||(j[e.expando]=i++)}})();(function(a){a.register("selector","1.0.0.0");var b=(function(){var z={},p={},m={},f={"class":"className"},d=/^(?:(?:([-]?\d*)(n{1}))?([-+]?\d*)|(odd|even))$/,y=/((?:[_a-zA-Z][\w-]*)|\*)|(?:#([\w-]+))|(?:\.([\w-]+))|(?:\[([a-z]+\w*)+([~\|\^\$\*!]?=)?['"]?([^\]]*?)["']?\])|(?::([\-\w]+)(?:\(['"]?(.+?)["']?\))*)|(?:\s*((?:[>+~\s,])|$)\s*)/g;(function(){var E=document.createElement("div"),F=(new Date()).getTime();E.innerHTML='<a name="'+F+'" class="€ b"></a>';p.qsa=!!(E.querySelectorAll&&E.querySelectorAll(".€").length)})();function D(F){var E=a.getUid(F);return(z[E])?null:(z[E]=true)}function v(E){return true}function g(E){return E.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&")}function q(E){return{combinator:E||" ",tag:"*",id:null,classes:[],attributes:[],pseudos:[]}}function x(H){if(m[H]){return m[H]}var G=[],K=[],E,F,J,I=sli=ci=ai=pi=0;E=q();y.lastIndex=0;while(F=y.exec(H)){if(F[1]){E.tag=F[1].toUpperCase()}else{if(F[2]){E.id=F[2]}else{if(F[3]){E.classes[ci++]=F[3]}else{if(F[4]){E.attributes[ai++]={key:F[4],op:F[5],value:F[6]}}else{if(F[7]){E.pseudos[pi++]={key:F[7],value:F[8]}}else{if(F[9]){K[I++]=E;if(F[9]==","){G[sli++]=K;K=[];I=0;J=null}else{J=F[9]}E=q(J);ci=ai=pi=0}else{break}}}}}}}K[I++]=E;G[sli++]=K;return m[H]=G}var A={" ":function(F,G,I,K){var H,L,J=0,E=I.length;H=G.getElementsByTagName(F);if(K){while(L=H[J++]){L.nodeType==1&&K(L)&&(I[E++]=L)}}else{while(L=H[J++]){L.nodeType==1&&(I[E++]=L)}}return I},">":function(F,G,I){var H,K,J=0,E=I.length;H=G.getElementsByTagName(F);while(K=H[J++]){K.parentNode==G&&(I[E++]=K)}return I},"+":function(F,G,H,I){var E=H.length;while(G=G.nextSibling){if(G.nodeType==1){G.tagName==F&&I(G)&&(H[E++]=G);break}}return H},"~":function(F,G,H,I){var E=H.length;while(G=G.nextSibling){if(G.nodeType==1){if(!I(G)){break}G.tagName==F&&(H[E++]=G)}}return H}};var k={" ":function(F,E){while(F=F.parentNode){if(F==E||(E==document&&F.documentElement)){return true}}return false},">":function(F,E){return F.parentNode==E},"+":function(F,E){while(F=F.previousSibling){if(F.nodeType!=1){continue}if(F==E){return true}else{if(F.tagName==F.tagName){return false}}}return false},"~":function(F,E){while(n=n.previousSibling){if(n==E){return true}}return false}};var j={"=":function(E){return E},"~=":function(E){return new RegExp("(?:^|\\s+)"+g(E)+"(?:\\s+|$)")},"!=":function(E){return E},"^=":function(E){return new RegExp("^"+g(E))},"$=":function(E){return new RegExp(g(E)+"$")},"*=":function(E){return new RegExp(g(E))},"|=":function(E){return new RegExp("^"+g(E)+"-?")}};var s={"=":function(E,F){return E==F},"~=":function(E,F){return F.test(E)},"!=":function(E,F){return E!=F},"^=":function(E,F){return F.test(E)},"$=":function(E,F){return F.test(E)},"*=":function(E,F){return F.test(E)},"|=":function(E,F){return F.test(E)}};var r={},t={};function u(H){if(r[H]){return r[H]}var F,G,E;F=H.match(d);switch(F[4]){case"even":G=2;E=0;break;case"odd":G=2;E=1;break;default:G=parseInt(F[1],10);G=isNaN(G)?(F[2]?1:0):G;E=parseInt(F[3],10);isNaN(E)&&(E=0);break}return(r[H]={a:G,b:E})}function i(F,J,L,M){var I,G,K,E,H=1;I=a.getUid(F);G=a.getUid(F.parentNode);E=t[G]||(t[G]={});if(!E[I]){while((F=F[L])){if(F.nodeType!=1||(M&&F.tagName!=M)){continue}K=E[a.getUid(F)];if(K){H=K+H;break}H++}E[I]=H}return J.a?E[I]%J.a==J.b:J.b==E[I]}function w(H,E){var G=H;while((G=G.previousSibling)){if(G.nodeType===1&&(!E||G.tagName==E)){return false}}var F=H;while((F=F.nextSibling)){if(F.nodeType===1&&(!E||F.tagName==E)){return false}}return true}var e={root:function(E){return E===E.ownerDocument.documentElement},"nth-child":function(F,E){return(E.a==1&&!E.b)?true:i(F,E,"previousSibling",false)},"nth-last-child":function(F,E){return(E.a==1&&!E.b)?true:i(F,E,"previousSibling",false)},"nth-of-type":function(F,E){return i(F,E,"previousSibling",F.tagName)},"nth-last-of-type":function(F,E){return i(F,E,"nextSibling",F.tagName)},"first-child":function(F){var E=F.parentNode.firstChild;while(E.nodeType!=1){E=E.nextSibling}return F===E},"last-child":function(E){while((E=E.nextSibling)){if(E.nodeType===1){return false}}return true},"first-of-type":function(G){var F=G.parentNode.firstChild,E=G.tagName;while(F.nodeType!=1||F.tagName!=E){F=F.nextSibling}return G===F},"last-of-type":function(F){var E=F.tagName;while((F=F.nextSibling)){if(F.nodeType==1&&F.tagName==E){return false}}return true},"only-child":function(E){return w(E)},"only-of-type":function(E){return w(E,E.tagName)},empty:function(E){return !E.firstChild},parent:function(E){return !!E.firstChild},enabled:function(){return node.disabled===false&&node.type!=="hidden"},disabled:function(){return node.disabled===true},checked:function(E){return E.checked===true},selected:function(E){E.parentNode.selectedIndex;return E.selected===true},visible:function(E){return E.offsetWidth>0||E.offsetHeight>0},hidden:function(E){return E.offsetWidth===0||E.offsetHeight===0},not:function(E,F){return !c(E,F)},contains:function(F,E){return E.test(F.innerText||F.textContent||"")},odd:function(E){return},even:function(E){return}};e.nth=e["nth-child"];e.index=e["nth-child"];var B={t:function(E){return x(E)},n:function(E){return new RegExp(g(E))},h:function(E){return u(E)}};var o={klass:function(E,F){var K,H=0,G=[],I=0,J;J=new RegExp("(?:^|\\s+)"+g(F)+"(?:\\s+|$)");while(K=E[H++]){J.test(K.className)&&(G[I++]=K)}return G},attribute:function(F,J){var G,H=0,I=[],E=0,L,M=f[J.key]||J.key,K=/^(?:src|href|action)$/.test(M)?2:0;if(J.op){L=j[J.op](J.value);while(G=F[H++]){s[J.op](G[M]||G.getAttribute(M,K),L)&&(I[E++]=G)}}else{while(G=F[H++]){((G[M]||G.getAttribute(M,K))!=null)&&(I[E++]=G)}}return I},pseudo:function(F,G){var E=G.value,J=G.key,L,I=0,H=[],K=0;E&&(E=B[J.charAt(2)](E));while(L=F[I++]){e[J](L,E)&&(H[K++]=L)}return H}};function C(I,K){var M=[],N,L=0,P,R=D,F=I.combinator,E=I.id,Q=I.tag,H=I.classes,J=I.attributes,O=I.pseudos;if(E){var G=document.getElementById(E);if(Q=="*"||G.tagName==Q){while(cxt=K[L++]){if(k[F](G,cxt)){M=[G];break}}}}else{if(Q){L=0;z={};if(K.length==1){R=false}while(cxt=K[L++]){M=A[F](Q,cxt,M,R)}}}if(H.length>(L=0)){while(P=H[L++]){M=o.klass(M,P)}}if(J.length>(L=0)){while(P=J[L++]){M=o.attribute(M,P)}}if(O.length>(L=0)){while(P=O[L++]){M=o.pseudo(M,P)}}return M}function l(G,H){var F=0,E;z={};t={};while(E=G[F++]){H=C(E,H)}return H}function h(E,J){var H=[],G=0,I,F=x(E);while(I=F[G++]){if(H.length>0){H=l(I,J).concat(H)}else{H=l(I,J)}}return H}function c(J,F){var H=0,I,G,K,E;F=F[0][0];if(F.id&&F.id!=J.id){return false}if(F.classes.length>(H=0)){while(I=F.classes[H++]){if(!(new RegExp("(?:^|\\s+)"+g(I)+"(?:\\s+|$)")).test(J.className)){return false}}}if(F.attributes.length>(H=0)){while(I=F.attributes[H++]){G=f[I.key];E=/^(?:src|href|action)$/.test(G)?2:0;G=J[G]||J.getAttribute(G,E);if(I.op){if(!s[I.op](G,j[I.op](I.value))){return false}}else{if(G==null){return false}}}}if(F.pseudos.length>(H=0)){while(I=F.pseudos[H++]){(K=I.value)&&(K=B[I.key.charAt(2)](K));if(!e[I.key](J,K)){return false}}}return true}return function(E,F){if(!E||typeof E!=="string"){return[]}F=F||document;if(F.nodeType!==1&&F.nodeType!==9){return[]}return h(E,[F])}})();a.Whizz=b})(JUI);(function(g){g.register("element","1.0.1.0");var o={},b={},j={};(function(){var r=document.createElement("div"),t="_jui_"+(new Date()).getTime(),q;r.innerHTML='   <link/><table></table><a name="'+t+'" class="€ b" href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select>';o={opacity:(typeof r.style.opacity)!=="undefined"?true:false,innerText:(typeof r.innerText)!==undefined?true:false,leadingWhitespace:r.firstChild&&r.firstChild.nodeType==3,cssFloat:!(r.style.cssFloat===undefined),cloneEvent:false,tbody:false,htmlSerialize:false};if(r.getElementsByTagName){o.tbody=!!r.getElementsByTagName("tbody").length;o.htmlSerialize=!!r.getElementsByTagName("link").length}if(r.attachEvent&&r.fireEvent){r.attachEvent("onclick",function s(){o.cloneEvent=true;r.detachEvent("onclick",s)});r.cloneNode(true).fireEvent("onclick")}})();function l(q){return q.replace(/-\D/g,function(r){return r.charAt(1).toUpperCase()})}function f(q){return q.replace(/[A-Z]/g,function(r){return("-"+r.charAt(0).toLowerCase())})}var h={"class":"className","for":"htmlFor","float":o.cssFloat?"cssFloat":"styleFloat"},m={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"},k={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};(function(){var B=["Top","Right","Bottom","Left"],s="margin",q="padding",A="border",u=B.length,x;while(x=B[--u]){var z=s+x,y=q+x,w=A+x;k[s][z]=m[z]="@px";k[q][y]=m[y]="@px";k[A][w]=m[w]="@px @ rgb(@, @, @)";var t=w+"Width",v=w+"Style",r=w+"Color";k[w]={};k.borderWidth[t]=k[w][t]=m[t]="@px";k.borderStyle[v]=k[w][v]=m[v]="@";k.borderColor[r]=k[w][r]=m[r]="rgb(@, @, @)"}})();var c={compact:true,nowrap:true,ismap:true,declare:true,noshade:true,checked:true,disabled:true,readonly:true,multiple:true,selected:true,noresize:true,defer:true};var d=function(q,u){if(u!==false){var t=p(document.createElement(q));if(u&&u.style){t.css(u.style);delete u.style}t.attr(u);return t}if(g.type(q)!=="string"){return p(q)}var t,r,s=/^#([\w-]+)$/;if(s.test(q)||!g.loaded("selector")){return p(document.getElementById(q.replace("#","")))}else{r=g.Whizz(q);return new a(r,false)}};var a=function(r){if(r&&r.$family!=="elements"){var q=0,u=[];while((u[q]=p(r[q++]))){}u.length--;var s=a.prototype;for(var t in s){u[t]=s[t]}r=u}return r};function p(q){if(q&&!q.$family&&!(/^object|embed$/i).test(q.tagName)){var r=d.prototype;for(var s in r){q[s]=r[s]}}return q}g.Native.initialize({name:"Element",initialize:d,protect:true,afterImplement:function(q,r){if(Array[q]){return}a.implement(q,function(){var s=[],w=true;for(var u=0,t=this.length;u<t;u++){var v=this[u][q].apply(this[u],arguments);s.push(v);if(w){w=(g.type(v)=="element")}}return(w)?new a(s,false):s})}});g.Native.initialize({name:"Elements",initialize:a,protect:true});function i(w){var x=/^<(\w+)\s*\/?>$/.exec(w);if(x){return document.createElement(x[1])}var y=[],t=[],q=document.createElement("div");w=w.replace(/(<(\w+)[^>]*?)\/>/g,function(B,C,A){return A.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?B:C+"></"+A+">"});var z=w.replace(/^\s+/,"").substring(0,10).toLowerCase();var s=!z.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!z.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||z.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!z.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!z.indexOf("<td")||!z.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!z.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];q.innerHTML=s[1]+w+s[2];while(s[0]--){q=q.lastChild}if(o.tbody){var r=/<tbody/i.test(w),v=!z.indexOf("<table")&&!r?q.firstChild&&q.firstChild.childNodes:s[1]=="<table>"&&!r?q.childNodes:[];for(var u=v.length-1;u>=0;--u){if((v[u].tagName=="TBODY")&&!v[u].childNodes.length){v[u].parentNode.removeChild(v[u])}}}if(!o.leadingWhitespace&&/^\s/.test(w)){q.insertBefore(document.createTextNode(w.match(/^\s*/)[0]),q.firstChild)}return q.firstChild}function e(q,t){var s=0,r=q.length;for(var s=0;s<r;s++){if(q[s]==t){return true}}return false}d.implement({setStyle:function(u,w){if(u=="opacity"){w=parseFloat(w);if(o.opacity){this.style.opacity=w}else{this.style.filter=(this.style.filter||"").replace(/alpha\([^)]*\)/,"")+(w+""=="NaN"?"":"alpha(opacity="+w*100+")");this.zoom=1}return}u=h[u]||l(u);var t=g.type(w);if(t!="string"){w=(t!="array"&&t!="arguments")?[w]:w;var q=(m[u]||"@").split(" "),s=q.length,r;while(s--){r=w[s];if(!(r===0||r)){q[s]=""}else{q[s]=g.type(r)=="number"?q[s].replace("@",Math.round(r)):r}}w=q.join(" ")}else{if(w==""+Number(w)){w=Math.round(w)}}try{this.style[u]=w}catch(x){}return this},getStyle:function(u){if(u=="opacity"){if(o.opacity){return this.style.opacity}else{return this.style.filter&&this.style.filter.indexOf("opacity=")>=0?(parseFloat(this.style.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}}u=h[u]||l(u);var q=this.style[u];if(!(q===0||q)){q=[];for(var r in k){if(u!=r){continue}for(var t in k[r]){q.push(this.getStyle(t))}return q.join(" ")}if(this.currentStyle){return this.currentStyle[u]}var v=this.getDocument().defaultView.getComputedStyle(this,null);return(v)?v.getPropertyValue([f(u)]):null}return q},css:function(q,r){if(g.type(q)=="object"){for(var s in q){this.setStyle(s,q[s])}return this}if(r===undefined){return this.getStyle(q)}else{this.setStyle(q,r);return this}},getProperty:function(q){var r=h[q];var s=(r)?this[r]:this.getAttribute(q,2);return(c[q])?!!s:(r)?s:s||null},setProperty:function(q,s){var r=h[q];if(r&&c[q]){s=!!s}r?this[r]=s:this.setAttribute(q,""+s);return this},attr:function(q,s){if(g.type(q)=="object"){for(var r in q){this.setProperty(r,q[r])}return this}if(s===undefined){return this.getProperty(q)}else{this.setProperty(q,s);return this}},dimension:function(q){if(!(q===0||q)){return{width:this.offsetWidth,height:this.offsetHeight}}if(q.width!==undefined){this.css("width",q.width)}if(q.height!==undefined){this.css("height",q.height)}return this},position:function(u){if(u===undefined){if(this.parentNode===null||this.style.display=="none"){return false}if(this.getBoundingClientRect){box=this.getBoundingClientRect();var r=Math.max(document.documentElement.scrollTop,document.body.scrollTop);var s=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);return{x:box.left+s,y:box.top+r}}else{if(document.getBoxObjectFor){box=document.getBoxObjectFor(this);var q=(this.style.borderLeftWidth)?parseInt(this.style.borderLeftWidth):0;var t=(this.style.borderTopWidth)?parseInt(this.style.borderTopWidth):0;u=[box.x-q,box.y-t]}else{u=[this.offsetLeft,this.offsetTop];parent=this.offsetParent;if(parent!=this){while(parent){u[0]+=parent.offsetLeft;u[1]+=parent.offsetTop;parent=parent.offsetParent}}if(this.style.position=="absolute"){u[0]-=document.body.offsetLeft;u[1]-=document.body.offsetTop}}}if(this.parentNode){parent=this.parentNode}else{parent=null}while(parent&&parent.tagName!="BODY"&&parent.tagName!="HTML"){u[0]-=parent.scrollLeft;u[1]-=parent.scrollTop;if(parent.parentNode){parent=parent.parentNode}else{parent=null}}return{x:u[0],y:u[1]}}if(u.x!==undefined){this.css("left",u.x)}if(u.y!==undefined){this.css("top",u.y)}return this}});d.implement({data:function(q,s){var r=g.getUid(this);if(q&&!b[r]){b[r]={}}if(s!==undefined){b[r][q]=s;return s}return q?b[r][q]:r},erase:function(q){var r=g.getUid(this);if(q){if(b[r]){delete b[r][q];q="";for(q in b[r]){break}(!q)&&this.erase()}}else{delete b[r]}return this}});d.implement({getDocument:function(){return this.ownerDocument},getElement:function(q){var r=[];if(g.loaded("selector")){r=g.Whizz(q,this)}else{r=this.getElementsByTagName(q)}return r[0]?new d(r[0],false):null},getElements:function(q){if(g.loaded("selector")){return new a(g.Whizz(q,this),false)}else{return new a(this.getElementsByTagName(q),false)}}});d.implement({txt:function(q){if(q===undefined){return this[o.innerText?"innerText":"textContent"]}else{this.html(q.escapeHTML());return q}},html:function(q){if(q!==undefined){this.innerHTML=q}return this.innerHTML},clone:function(r){r=r!==false;if(o.cloneEvent){var q=this.outerHTML;if(!q){var s=this.ownerDocument.createElement("div");s.appendChild(this.cloneNode(r));q=s.innerHTML}return new d(i(q.replace(new RegExp(g.expando+'="(?:\d+|null)"',"g"),"").replace(/^\s*/,"")),false)}else{return new d(this.cloneNode(r),false)}},prependTo:function(q){q.insertBefore(this,q.firstChild);return this},appendTo:function(q){q.appendChild(this);return this},inject:function(q,r){if(r=="top"){this.prependTo(q)}else{this.appendTo(q)}return this},insert:function(q,r){if(r=="after"){this.after(q)}else{this.before(q)}return this},before:function(q){q.parentNode.insertBefore(this,q);return this},after:function(q){var r=q.parentNode;if(q.nextSibling){r.insertBefore(this,q.nextSibling)}else{r.appendChild(this)}return this},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this},empty:function(){var s,r=this.childNodes,q=0;while(s=r[q++]){s.destroy()}return this},destroy:function(){this.empty();this.dispose();this.removeEvents();return null}});d.alias({dispose:"remove"});d.implement({cloneEvents:function(w,t){w=new d(w,false);var v=this.data("events");if(!v){return}if(!t){for(var u in v){this.cloneEvents(w,u)}}else{if(v[t]){var r=0,s,q=v[t].keys;while(s=q[r++]){this.addEvent(t,s)}}}return this},addEvent:function(u,t,w,v){var r=this.data("events")||this.data("events",{});w=w?w:this;r[u]=r[u]||{keys:[],values:[]};if(!v&&e(r[u].keys,t)){return this}var s=function(x){if(g.loaded("event")){x=new g.Event(x)}t.call(w,x)};if(u=="unload"){var q=s;s=function(){self.removeListener("unload",s);q()}}if(this.addEventListener){this.addEventListener(u,s,false)}else{this.attachEvent("on"+u,s)}r[u].keys.push(t);r[u].values.push(s);return this},removeEvent:function(u,t){var s=this.data("events");if(!s||!s[u]){return this}if(!t){var r=0,q=s[u].keys;while(t=q[r++]){this.removeEvent(u,t)}delete s[u];u="";for(u in s){break}if(!u){this.erase()}else{this.data("events",s)}return this}var w=-1,r=0,v;while(v=s[u].keys[r]){if(v==t){w=r;break}r++}if(w==-1){return this}s[u].keys.splice(w,1);t=s[u].values.splice(w,1)[0];if(this.removeEventListener){this.removeEventListener(u,t,false)}else{this.detachEvent("on"+u,t)}return this},addEvents:function(q){for(var r in q){this.addEvent(r,q[r])}return this},removeEvents:function(q){if(g.type(q)=="object"){for(var s in q){this.removeEvent(s,q[s])}return this}var r=this.data("events");if(!r){return this}if(!q){for(var s in r){this.removeEvent(s)}this.erase("events")}else{this.removeEvent(q)}return this},fireEvent:function(u,t,r){var y=this.data("events");if(!y||!y[u]){return this}var q=0,w=y[u],v,s,x=this;while(v=w[q++]){s=function(z){return function(){z.apply(x,t)}};setTimeout(s(v),r)}return this}});g.Element=d;g.Elements=a})(JUI);(function(c){c.register("event","1.0.0.0");var b={"8":"backspace","9":"tab","13":"enter","27":"esc","32":"space","38":"up","40":"down","37":"left","39":"right","46":"delete"};var a=function(d){if(d.$family==="event"){return d}var o=document,i=window,m=d.type;var j=d.target||d.srcElement;while(j&&j.nodeType==3){j=j.parentNode}if(/key/.test(m)){var e=d.which||d.keyCode;var p=b[e];if(m=="keydown"){var g=e-111;if(g>0&&g<13){p="f"+g}}p=p||String.fromCharCode(e).toLowerCase()}else{if(m.match(/(click|mouse|menu)/i)){o=(!o.compatMode||o.compatMode=="CSS1Compat")?o.documentElement:o.body;var l={x:d.pageX||d.clientX+o.scrollLeft,y:d.pageY||d.clientY+o.scrollTop};var f={x:(d.pageX)?d.pageX-i.pageXOffset:d.clientX,y:(d.pageY)?d.pageY-i.pageYOffset:d.clientY};if(m.match(/DOMMouseScroll|mousewheel/)){var k=(d.wheelDelta)?d.wheelDelta/120:-(d.detail||0)/3}var h=(d.which==3)||(d.button==2)}}return(function(r,q){for(var s in q){r[s]=q[s]}return r})(this,{event:d,type:m,page:l,client:f,rightClick:h,wheel:k,target:j,code:e,key:p,shift:d.shiftKey,control:d.ctrlKey,alt:d.altKey,meta:d.metaKey})};c.Native.initialize({name:"Event",initialize:a,protect:true});a.implement({stop:function(){return this.stopPropagation().preventDefault()},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation()}else{this.event.cancelBubble=true}return this},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault()}else{this.event.returnValue=false}return this}});c.Event=a})(JUI);(function(b){b.register("customevent","1.0.0.0");var a=function(c){this.events=[];this.name=c};b.Native.initialize({name:"CustomEvent",initialize:a,protect:true});a.implement({fire:function(){var d=[];for(var e=0;e<arguments.length;e++){d.push(arguments[e])}for(var e=0,c=this.events.length;e<c;e++){var f=this.events[e];f[0].call(f[1],this.name,d)}},subscribe:function(d,c){this.events.push([d,c])},clear:function(){this.events=[]}});b.CustomEvent=a})(JUI);(function(d){d.register("cookie","1.0.0.0");var a={encode:false,decode:false,path:false,domain:false,duration:false,secure:false,document:document};function c(e){for(var f in e){a[f]=e[f]}}var b={write:function(g,h,f){c(f);if(a.encode){h=encodeURIComponent(h)}if(a.domain){h+="; domain="+a.domain}if(a.path){h+="; path="+a.path}if(a.duration){var e=new Date();e.setTime(e.getTime()+a.duration*24*3600000);h+="; expires="+e.toGMTString()}if(a.secure){h+="; secure"}a.document.cookie=g+"="+h;return this},read:function(f,e){var g=a.document.cookie.match("(?:^|;)\\s*"+f.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")+"=([^;]*)");if(a.decode){return(g)?decodeURIComponent(g[1]):null}else{return(g)?g[1]:null}},remove:function(f,e){c(e);a.duration=-1;b.write(f,"");return this}};d.Cookie=b})(JUI);(function(e){e.register("loader","1.0.0.0");var g={},a,c=1,b="jui_cb_";var f=function(h){a=h;return this};e.Native.initialize({name:"Loader",initialize:f,protect:true});function d(r){r=r||a||{};var h,j,p="js",q=e.empty,k,o,i;h=r.url;p=r.type;j=r.charset;q=r.callback;o=r.bind;k=r.param;i=r.cache;if(!h||h==""){return}try{if(k&&q){e.Loader[b+c]=function(){q.apply(o,arguments)};if(h.indexOf("?")>-1){h=h+"&cb=JUI.Loader."+b+c}else{h=h+"?cb=JUI.Loader."+b+c}if(!i){h=h+"&r="+Math.random()}c++}var l;if(p=="css"){l=document.createElement("link");l.rel="stylesheet";l.type="text/css";l.href=h}else{l=document.createElement("script");l.src=h;l.type="text/javascript"}j&&(l.charset=j);if(!k&&q){l.onload=function(){q.apply(o,[h,true])};l.onerror=function(){q.apply(o,[h,false])};l.onreadystatechange=function(){if(l.readyState=="loaded"){q.apply(o,[h,true])}}}g[h]=l;document.getElementsByTagName("head")[0].appendChild(l)}catch(m){q(h,false)}}f.implement({load:function(k){if(!k){k=[a]}else{if(e.type(k)!="array"){k=Array.prototype.slice.call(arguments,0)}}var h=0,j;while(j=k[h++]){d(j)}return this},chain:function(j){if(e.type(j)!="array"){j=Array.prototype.slice.call(arguments,0)}if(!j||j.length==0){return}var i=j.shift(),h=this;cb=function(k,m){m.callback(m.url);h.chain(k)};this.load({url:i.url,type:i.type,callback:cb(j,i)})},cancel:function(h){if(!g[h]){return}document.removeChild(g[h]);delete g[h]}});e.Loader=f})(JUI);(function(d){d.register("ikan.user2","1.0.0.0");var c="pplive.com";if(document.domain.toLowerCase().indexOf("pptv.com")!=-1){c="pptv.com"}var e={login:"http://passport.pptv.com/weblogin.do?",addFavor:"http://bk.pptv.com/xihttp/ikan2/favor/json/post/?",favorCheck:"http://bk.pptv.com/xihttp/ikan2/favor/json/check/?",like:"http://bk.pptv.com/xihttp/ikan2/score/json/post/?",likeCheck:"http://bk.pptv.com/xihttp/ikan2/score/json/check/?"};var f=false,b=true;var a={onLogined:new d.CustomEvent("onLogined"),onlogouted:new d.CustomEvent("onlogouted"),userInfo:{Gender:"",PpNum:"",ExpNum:"",LevelName:"",NextLevelName:"",NextLevelExpNum:"",Area:"",Subscribe:"",UnreadNotes:"",HeadPic:"",Email:"",OnlineTime:"",UserName:""},tryReadUserInfo:function(){var l=d.Cookie.read("UDI");var j=d.Cookie.read("PPName");if(l==null||j==null){this.onlogouted.fire();return}var h=j.split("$");this.userInfo.UserName=decodeURIComponent(h[0]);var i=l.split("$");var g=0;for(var k in this.userInfo){if(k=="UserName"){break}this.userInfo[k]=decodeURIComponent(i[g]);g++}f=true;this.onLogined.fire(this.userInfo)},wirteUserInfo:function(i){var g={domain:c,path:"/",duration:7};for(var h in i){d.Cookie.write(h,i[h],g)}},logout:function(){var g={domain:c,path:"/"};d.Cookie.remove("PPKey",g);d.Cookie.remove("UDI",g);d.Cookie.remove("PPName",g);f=false;this.onlogouted.fire()},login:function(i,j){var g=this;var h=e.login+"username="+i+"&password="+j;new d.Loader({url:h,type:"js",callback:function(k,l){g.loginFnc(k,l)},param:true}).load()},loginFnc:function(g,h){if(g==0){alert(h);return}if(g==1){this.usernameel.value="";this.userpwdel.value="";this.hideLoginBox();this.wirteUserInfo(h)}this.tryReadUserInfo()},checkLogined:function(){return f},showLoginBox:function(h){if(b){b=false;this.boxel=d("#loginBox");this.btnpostel=this.boxel.getElement(".btnPost");this.usernameel=this.boxel.getElement(".userName");this.userpwdel=this.boxel.getElement(".userPwd");this.usernameel.value="";this.userpwdel.value="";d(document).addEvent("click",function(j){if(j.target.getAttribute("stopdocumentclick")==null){this.hideLoginBox()}},this);this.boxel.addEvent("click",function(j){if(j.target.tagName!="A"){j.stop()}});this.btnpostel.addEvent("click",function(j){this.checkLoginForm()},this);this.usernameel.addEvent("keydown",function(j){if(j.key=="enter"){this.checkLoginForm()}},this);this.userpwdel.addEvent("keydown",function(j){if(j.key=="enter"){this.checkLoginForm()}},this)}this.boxel.css({display:"block"});var g=0;var i=0;g=h.x;i=h.y;this.boxel.css({top:i,left:g});this.usernameel.focus()},hideLoginBox:function(){this.boxel.css("display","none")},checkLoginForm:function(){if(this.usernameel.value.length==0){this.usernameel.focus();return}if(this.userpwdel.value.length==0){this.userpwdel.focus();return}this.login(this.usernameel.value,this.userpwdel.value)},favor:function(j,i,k,g){var h=(j=="add"?e.addFavor:e.favorCheck)+"type="+i+"&id="+k;new d.Loader({url:h,type:"js",callback:function(l){g(l)},param:true}).load()},like:function(k,i,l,j,g){var h=(k=="add"?e.like:e.likeCheck)+"type="+i+"&id="+l+"&attitude="+j;new d.Loader({url:h,type:"js",callback:function(m){g(m)},param:true}).load()}};if(typeof d.IKan=="undefined"){d.IKan={}}d.IKan.User2=a})(JUI);(function(c){c.register("ikan.searchtips","1.0.0.0");var b="pplive.com";if(document.domain!=""){b=document.domain.indexOf("pptv.com")!=-1?"pptv.com":b}var a=function(f,e,d){this.inputel=f;this.btnel=e;this.ops={defaultText:"-- 请输入关键字 --",defaultTextColor:"#999999",textColor:"#000000",tipBoxWidth:"182px",strLength:26,searchSuggestUrl:"http://ikan."+b+"/search/suggest/?kw=",searchUrl:"http://ikan."+b+"/search/?kw="};this.mergeOptions(d);this.init()};c.Native.initialize({name:"SearchTips",initialize:a,protect:true});a.implement({mergeOptions:function(d){for(var e in d){this.ops[e]=d[e]}},truncate:function(e,d,h){var f=0,k=[],j=e.length;for(var g=0;g<j;g++){if(e.charCodeAt(g)>255){f+=2}else{f++}if(f>d){break}}return(h&&g<j)?e.substring(0,g)+"...":e.substring(0,g)},getText:function(){return this.inputel.value.replace(/(^\s+)|(\s+$)/gm,"")},setDefaultState:function(){this.inputel.value=this.ops.defaultText;this.inputel.css("color",this.ops.defaultTextColor)},setNormalState:function(d){this.inputel.value=d?d:"";this.inputel.css("color",this.ops.textColor)},init:function(){this.tipsLis=[];this.selectedIx=-1;this.prevText="";this.gotourl="";this.setDefaultState();this.tipboxel=document.createElement("ul");this.tipboxel.className="sm_search_tips";this.tipboxel.style.overflow="hidden";this.tipboxel.style.position="absolute";this.tipboxel.style.zIndex=1000;this.tipboxel.style.width=this.ops.tipBoxWidth;this.tipboxel.style.display="none";document.documentElement.getElementsByTagName("body")[0].appendChild(this.tipboxel);this.inputel.addEvent("focus",this.input_focus,this);this.inputel.addEvent("blur",this.input_blur,this);this.inputel.addEvent("keydown",this.input_key_down,this);this.inputel.addEvent("keyup",this.input_key_up,this);this.btnel.addEvent("click",this.btn_click,this);c(document).addEvent("click",function(){this.hideTipBox()},this)},fillList:function(h){this.tipsLis=[];this.selectedIx=-1;this.prevText=this.getText();if(h.length==0){this.hideTipBox();return}var g=[];for(var f=0,e=h.length;f<e;f++){g.push(['<li><a href="',h[f].link,'">',this.truncate(h[f].name,this.ops.strLength),"</a></li>"].join(""))}this.tipboxel.innerHTML=g.join("");this.tipsLis=this.tipboxel.getElementsByTagName("li");this.showTipBox()},setSelectedItem:function(d){if(this.tipsLis.length==0){return}if(this.selectedIx==-1){this.selectedIx=0}else{this.tipsLis[this.selectedIx].className="";this.selectedIx+=d}if(this.selectedIx<0){this.selectedIx=this.tipsLis.length-1}if(this.selectedIx>=this.tipsLis.length){this.selectedIx=0}this.tipsLis[this.selectedIx].className="current";this.gotourl=this.tipsLis[this.selectedIx].getElementsByTagName("a")[0].href},showTipBox:function(){this.gotourl="";var d=this.inputel.position();this.tipboxel.style.top=d.y+24+"px";this.tipboxel.style.left=d.x+"px";this.tipboxel.style.display="block"},hideTipBox:function(){this.gotourl="";this.tipboxel.style.display="none"},getSuggestList:function(){var d=this;var e=new c.Loader({url:this.ops.searchSuggestUrl+encodeURIComponent(this.getText()),type:"js",callback:function(f){d.fillList.call(d,f)},param:true});e.load()},input_key_up:function(){if(this.getText()==""){this.hideTipBox()}if(this.getText()!=""&&this.getText()!=this.ops.defaultTex&&this.prevText!=this.getText()){var d=this;clearTimeout(this.tid);this.tid=setTimeout(function(){d.getSuggestList()},400)}},input_focus:function(){if(this.getText()==this.ops.defaultText){this.setNormalState()}},input_blur:function(){if(this.getText()==""){this.setDefaultState()}},btn_click:function(){if(this.getText()!=""&&this.getText()!=this.ops.defaultText){window.location.href=this.ops.searchUrl+encodeURIComponent(this.getText())}},input_key_down:function(d){switch(d.key){case"enter":if(this.gotourl!=""){window.location.href=this.gotourl}else{this.btn_click()}break;case"up":this.setSelectedItem(-1);break;case"down":this.setSelectedItem(1);break}}});if(typeof c.IKan=="undefined"){c.IKan={}}c.IKan.SearchTips=a})(JUI);