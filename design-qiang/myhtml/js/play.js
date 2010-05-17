(function(b){b.register("customevent","1.0.0.0");var a=function(c){this.events=[];this.name=c};b.Native.initialize({name:"CustomEvent",initialize:a,protect:true});a.implement({fire:function(){var d=[];for(var e=0;e<arguments.length;e++){d.push(arguments[e])}for(var e=0,c=this.events.length;e<c;e++){var f=this.events[e];f[0].call(f[1],this.name,d)}},subscribe:function(d,c){this.events.push([d,c])},clear:function(){this.events=[]}});b.CustomEvent=a})(JUI);(function($){$.register("json","1.0.0.0");var special={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function replaceChars(chr){return special[chr]||"\\u00"+Math.floor(chr.charCodeAt()/16).toString(16)+(chr.charCodeAt()%16).toString(16)}var JSON={decode:function(s){if($.type(s)!="string"||!s.length){return null}return eval("("+s+")")},encode:function(obj){var s=[];switch($.type(obj)){case"undefined":return"undefined";break;case"null":return"null";break;case"number":case"boolean":case"date":case"function":return obj.toString();break;case"string":return'"'+obj.replace(/[\x00-\x1f\\"]/g,replaceChars)+'"';break;case"array":for(var i=0,l=obj.length;i<l;i++){s.push($.JSON.encode(obj[i]))}return"["+s.join(",")+"]";break;case"error":case"object":for(var p in obj){s.push('"'+p.replace(/[\x00-\x1f\\"]/g,replaceChars)+'":'+$.JSON.encode(obj[p]))}return"{"+s.join(",")+"}";break;default:return"";break}}};$.JSON=JSON})(JUI);(function(c){c.register("drag","1.0.0.0");function a(e,f){for(var d in f){e[d]=f[d]}return e}var b=function(i){var d=c(document),e=i,h={},k=this;function j(){e.addEvent("mousedown",g)}function m(){e.removeEvent("mousedown",g)}function g(n){if(n.rightClick){return}h=n.page;k.onStart(n);if(e.setCapture){e.setCapture()}else{if(window.captureEvents){window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)}}d.addEvents({mousemove:f,mouseup:l})}function l(n){if(e.releaseCapture){e.releaseCapture()}else{if(window.captureEvents){window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)}}d.removeEvents({mousemove:f,mouseup:l});k.onStop(n)}function f(n){var o=n.page;k.onDrag(n,{x:o.x-h.x,y:o.y-h.y})}this.onStart=function(n){return n};this.onDrag=function(n,o){return n};this.onStop=function(n){return n};this.detach=function(){m();return this};this.attach=function(){j();return this};j()};c.Native.initialize({name:"Drag",initialize:b,protect:true});c.Drag=b})(JUI);(function(c){c.register("drag.resize","1.0.0.0");function a(e,f){for(var d in f){e[d]=f[d]}return e}var b=function(g,m){var j=c(g),l={onStart:c.empty,onSnap:c.empty,onDrag:c.empty,onStop:c.empty,limit:false,handle:false,modifiers:{x:"width",y:"height"}},d,i,k,f={},h={};l=a(l,m);d=l.handle;i=l.limit;k=l.modifiers;if(c.type(d)==="array"){d=new c.Elements(d)}else{if(d){d=c(d)}else{d=j}}this.constructor.superclass.constructor.apply(this,[d]);function e(o,n){if(c.check(n[0])&&o<n[0]){o=n[0]}if(c.check(n[1])&&o>n[1]){o=n[1]}return o}this.onDrag=function(n,o){h.x=f.width+o.x;h.y=f.height+o.y;if(i){i.x&&(h.x=e(h.x,i.x));i.y&&(h.y=e(h.y,i.y))}for(var q in k){j.setStyle(k[q],h[q])}l.onDrag(n,o)};this.onStart=function(n){f=j.dimension();l.onStart(n)};this.onStop=function(n){l.onStop(n)}};c.Native.initialize({name:"Drag.Resize",initialize:b,protect:true});b=c.extend(b,c.Drag);c.Drag.Resize=b})(JUI);(function(b){b.register("drag.move","1.0.0.0");function a(e,f){for(var d in f){e[d]=f[d]}return e}var c=function(g,m){var j=b(g),l={onStart:b.empty,onSnap:b.empty,onDrag:b.empty,onStop:b.empty,limit:false,handle:false,modifiers:{x:"left",y:"top"}},d,i,k,f={},h={};l=a(l,m);d=l.handle;i=l.limit;k=l.modifiers;if(b.type(d)==="array"){d=new b.Elements(d)}else{if(d){d=b(d)}else{d=j}}this.constructor.superclass.constructor.apply(this,[d]);function e(o,n){if(b.check(n[0])&&o<n[0]){o=n[0]}if(b.check(n[1])&&o>n[1]){o=n[1]}return o}this.onDrag=function(n,o){h.x=f.x+o.x;h.y=f.y+o.y;if(i){i.x&&(h.x=e(h.x,i.x));i.y&&(h.y=e(h.y,i.y))}for(var q in k){j.setStyle(k[q],h[q])}l.onDrag(n,o)};this.onStart=function(n){f=j.position();l.onStart(n)};this.onStop=function(n){l.onStop(n)};j.setStyle("position","absolute")};b.Native.initialize({name:"Drag.Move",initialize:c,protect:true});c=b.extend(c,b.Drag);b.Drag.Move=c})(JUI);var PPLiveActiveX=function(e){var q=false,f=false,a=false;var g="100%",B="100%";var d=null,b="",u="";function k(){}var o=e.ready?e.ready:k;var l=e.boot?e.boot:k;var i=e.installing?e.installing:k;var w=e.notSupport?e.notSupport:k;var j=e.checkInterval?e.checkInterval:3000;var m=e.readyInterval?e.readyInterval:200;var t=e.checkVersion?e.checkVersion:k;var A=e.notInstall?e.notInstall:k;var y=function(){this.initSettings={};this.set=function(p,D){this.initSettings[p]=D;return this};this.setProperties=function(D){for(var E in D){this.set(E,D[E])}};this.get=function(D){var p=this.initSettings[D];p=p?p:"";return p}};var r=new y();r.setProperties({id:"PPLivePlayerActiveX",width:"1px",height:"1px",codebase:"http://dl.pplive.com/PluginSetup.cab"});var n=new y();n.setProperties({logourl:"http://static1.pplive.cn/ikan3/090512/player/playerbg.jpg",logoposition:"center",dbclicktofullscreen:true,showcontextmenu:true,showstateinfo:true,showchannelname:true,showplayerbuffer:true,showdownloadbuffer:true,showdownloadrate:true,showplaycontroller:true,showplayprogress:true,showloadingad:false,showadcountdown:false,adcfgurl:"",enableupdate:"true",enableupdatetip:"true",updateurl:"",url:"",forceversion:"2.3.6.0007",skinpath:"skins\\Default"});if(e!=null){var c=e.properties;for(var s in c){switch(s.toLowerCase()){case"id":r.set("id",c[s]);case"width":g=c[s];break;case"height":B=c[s];break;case"codebase":r.set("codebase",c[s]);break;default:s=s.toLowerCase();n.set(s,c[s]);break}}var z=e.params;for(var s in z){n.set(s.toLowerCase(),z[s])}}this.setAttribute=function(p,D){r.set(p.toLowerCase(),D);return this};this.setAttributes=function(D){for(var p in D){r.set(p.toLowerCase(),D[p])}return this};this.setParam=function(p,D){n.set(p.toLowerCase(),D);return this};this.setParams=function(E){for(var D in E){n.set(D.toLowerCase(),E[D])}return this};function C(){var E=['<object classid="CLSID:ef0d1a14-1033-41a2-a589-240c01edc078"'];for(var D in r.initSettings){E.push([" ",D,'="',r.get(D),'"'].join(""))}E.push(">");for(var F in n.initSettings){E.push(['<param name="',F,'" value="',n.get(F),'">'].join(""))}E.push("</object>");return E.join("")}this.write=function(p){if(typeof(p)=="string"){d=document.getElementById(p)}else{d=p}if(navigator.userAgent.search("MSIE")<=0){d.innerHTML="<p>对不起，目前PPLive网页插件（98KB）暂不支持Firefox、Opera等浏览器，请使用IE观看，谢谢^_^</p>";w();return}u=d.innerHTML;b=C();d.innerHTML=b;v();return this};this.getPlayer=function(){return _player};function v(){_player=document.getElementById(r.get("id"));if((_player||0).IsReady!=undefined){this.installed=true;while(d.children.length>1){var p=d.removeChild(d.children[0]);delete p}_player.style.width=g;_player.style.height=B;t(_player.version);h()}else{if(!f){d.innerHTML=u+b;f=true;A()}setTimeout(v,j)}}function h(){if(_player.IsReady){try{_player.onFrameInstall=null}catch(p){}o(_player)}else{if(_player.IsReady!=undefined&&!a){_player.onFrameInstall=x;a=true;l(_player);setTimeout(h,m)}else{setTimeout(h,m)}}}function x(p,D){try{i(p,D)}catch(E){}}return this};(function(){function f(h,g){for(var i in h){if(typeof g[i]!="undefined"){h[i]=g[i]}}}var d={flashactivex:"http://download.pplive.com/flash_player_10_ax.exe",flashplugin:"http://download.pplive.com/flash_player_10_plugin.exe",ppvadownload:"http://download.pplive.com/ppliveva/ppliveva_setup_ikan.exe"};var e={top:25,bottom:19,left:10,right:10};var c=15;var b={width:560,height:420};var a={player:null,mode:"normal",playList:[],onPlayChange:new $.CustomEvent("onPlayChange"),onVaChange:new $.CustomEvent("onVaChange"),currentVol:0,hasVa:false,isUserEnd:false,clickPlay:false,isAfp:false,isVaOpen:false,fullScreen:false,init:function(h){this.ops={top:function(){return 189},ggUrl:"http://ikan.pptv.com/res/igg/bf_420.htm"};if(h){f(this.ops,h)}this.documentTitle=document.title;this.bgel=$("#popupPlayBox_bg");this.boxel=$("#popupPlayBox");this.inboxel=this.boxel.getElements("div.inbox")[0];this.ggel=this.boxel.getElements("div.inbox .gg")[0];this.ggifmel=this.boxel.getElements("div.inbox .ggifm")[0];this.ggtlel=this.boxel.getElements("div.inbox .gg .tl")[0];this.pluginel=this.boxel.getElements("div.inbox .gg .plugin")[0];this.ppel=this.boxel.getElements("div.inbox .pp")[0];var g=this.boxel.getElements("tr");this.tr_t=g[0];this.td_c_l=g[1].getElements("td")[0];this.td_c_r=g[1].getElements("td")[2];this.tr_b=g[2];this.tr_t.css("cursor","move");a.boxel.css("display","block");this.resizebtnel=this.boxel.getElements("td.bg_4 span")[0];new $.Drag.Move(this.boxel,{handle:this.tr_t});new $.Drag.Resize(this.inboxel,{handle:this.resizebtnel});this.boxel_normal_fx=new $.Fx.Morph(this.inboxel,{duration:500,effect:"Linear:in:out",onComplete:function(){a.tr_t.css("display","none");a.tr_b.css("display","none");a.td_c_l.css("display","none");a.td_c_r.css("display","none");try{a.player.videoResize()}catch(i){}}});this.boxel_cinema_fx=new $.Fx.Morph(this.inboxel,{duration:500,effect:"Linear:in:out",onComplete:function(){a.tr_t.css("display","");a.tr_b.css("display","");a.td_c_l.css("display","");a.td_c_r.css("display","");try{a.player.videoResize()}catch(i){}}});this.boxel_fx=new $.Fx.Morph(this.boxel,{duration:500,effect:"Linear:in:out"});this.closebtnel=this.boxel.getElements("a.clear")[0];this.closebtnel.addEvent("mousedown",function(i){this.setMode("normal");i.stop()},this);$(document).addEvent("keydown",function(i){if(i.key=="esc"&&this.mode=="cinema"){this.setMode("normal");i.stop()}},this);this.resize();this.showPP();setInterval(function(){if(a.mode=="normal"){a.resize()}document.title=a.documentTitle},1000);this.checkIkanPlugin();this.initPlayer()},checkVer:function(j,h){var n=j.split(".");var m=h.split(".");var p,o,g="=";for(var k=0,l=n.length;k<l;k++){p=parseInt(n[k]);o=parseInt(m[k]);if(p>o){g=">";break}if(p<o){g="<"}}return g},checkIkanPlugin:function(){var j=null;var i=null;function h(l){a.showInstallBox();var k=a.ppel.getElements("span");j=k[0];i=k[1]}function g(k,l){if(k!=1){l=100}j.html(l);i.css("width",l+"%");if(k==3){a.isVaOpen=true;a.initPlayer()}}(new PPLiveActiveX({properties:{id:"pplive_ikan_player",width:"100%",height:"100%",codebase:"http://dl.pplive.com/PluginSetup.cab#1.1.0.4"},params:{logourl:"http://static1.pplive.cn/ikan3/090824/images/playerbg.jpg",logoposition:"center",dbclicktofullscreen:"true",showcontextmenu:"true",showstateinfo:"true",showchannelname:"true",showplayerbuffer:"true",showdownloadbuffer:"true",showdownloadrate:"true",showplaycontroller:"false",showplayprogress:"true",showloadingad:"false",showadcountdown:"false",adcfgurl:"",enableupdate:"true",enableupdatetip:"true",updateurl:"",forceversion:"1.0.0.51",skinpath:"skins\\Default"},boot:h,installing:g,checkInterval:3000})).write(this.pluginel)},showInstallBox:function(){var g=['<div class="err_setup">','<p class="txt1">正在下载PP加速器，请稍候...  <span>0</span>%</p>','<p class="txt2"><span style="width:0%;"></span></p>','<p class="txt3">小提示：如果安装程序被杀毒软件阻止，请您解除阻止。</p>',"</div>"].join("");this.ppel.html(g)},showInstallHelp:function(){var g=['<div class="err_point">',"<h4>想要继续观看完整的节目，请安装最新版PP加速器</h4>",'<div class="intro">',"<strong>无法自动安装？您可以选择一下2种方式安装：</strong>","<p>&middot;&nbsp;点击网页顶部的提示信息栏，在弹出对黄框中选择","“安装ActiveX控件”","</p>","<p>",'&middot;&nbsp;或者，<a href="',d.ppvadownload,'" title="下载PP加速器" class="downPPVA">下载PP加速器</a>','后再本地手动安装，并在安装结束后<a href="javascript:;" onclick="window.location.reload();return false;" title="刷新">刷新</a>页面<br />',"<span>&nbsp;&nbsp;（如果安装程序被杀毒软件或防火墙阻止，请您取消此阻止）</span>","</p>","</div>","</div>",].join("");this.ppel.html(g)},setMode:function(m){this.mode=m;if(m=="normal"){this.hidebg();this.boxel_normal_fx.start({width:b.width,height:b.height});this.boxel_fx.start({top:this.ops.top(),left:Math.max(0,(document.documentElement.clientWidth-b.width)/2)})}else{this.showbg();var j=document.documentElement.clientWidth;var g=document.documentElement.clientHeight;var i=j/100*78;var p=g/100*78;var q=this.player.videoSize().split("|");var n=Math.ceil(parseFloat(q[0]));var k=Math.ceil(parseFloat(q[1]));var o=0;var l=0;if(n>k){l=(k/n)*i;o=i}else{l=p;o=(n/k)*p}this.boxel_cinema_fx.start({width:o,height:l});this.boxel_fx.start({left:Math.max(0,(j-o)/2),top:Math.max(0,(g-l)/2)})}},resize:function(){var h=document.documentElement.scrollWidth;var j=document.documentElement.scrollHeight;var g=document.documentElement.clientWidth;var i=document.documentElement.clientHeight;if(this.mode=="normal"){this.boxel.css({top:this.ops.top(),left:Math.max(0,(g-b.width)/2)})}else{this.boxel.css({top:Math.max(0,(document.documentElement.clientHeight-parseInt(this.inboxel.css("height")))/2),left:Math.max(0,(document.documentElement.clientWidth-parseInt(this.inboxel.css("width")))/2)})}this.bgel.css({width:h,height:j})},showbg:function(){var g=document.documentElement.scrollWidth;var i=document.documentElement.scrollHeight;this.bgel.css({display:"block",width:g,height:i})},hidebg:function(){this.bgel.css("display","none")},setPlayList:function(g){this.playList=g},getCurrentEpisodeInfo:function(){var h={id:this.currentVol==-1?"":this.playList[this.currentVol].id,timeline:0};try{h.timeline=parseInt(this.player.timeLoaded())}catch(g){}return h},play:function(g){this.clickPlay=true;this.play_x(g)},play_x:function(g){this.currentVol=g;this.onPlayChange.fire(g,this.playList[g],this.hasVa);try{}catch(h){window.location.hash="#"+g}try{this.player.startPlay(g)}catch(h){setTimeout(function(){try{window.location.hash="#"+g}catch(i){}a.init({top:a.ops.top})},1000)}this.showGG()},medioEnded_x:function(g,h){if(g=="userEnd"){this.isUserEnd=true}if(g=="stoped"){if(!this.isUserEnd&&this.hasVa&&!this.clickPlay){if(h<this.playList.length-1){this.play_x(h+1)}}this.isUserEnd=false}this.clickPlay=false},mediaChanged_x:function(g,h){if(g=="interChanged"){this.showGG()}if(g=="vafail"){this.showHelp()}if(g=="hasva"){this.hasVa=true;this.onVaChange.fire("hasva")}if(g=="afp"){this.isAfp=true;if(!a.isVaOpen){}}if(g=="noplugin"){this.hasVa=false;this.onVaChange.fire("notva")}if(g=="start"){if(this.hasVa&&!this.isAfp){if(!a.isVaOpen){}}this.isAfp=false}if(g=="mediaend"&&!this.clickPlay){this.currentVol=h;this.onPlayChange.fire(h,this.playList[h],this.hasVa)}if(g=="playing"){this.clickPlay=false}},ready:function(){this.player=this.getSwf("video_player");if(this.isVaOpen){this.player.vaJsOpen()}if(!this.player.playListAdd){setTimeout(function(){a.initPlayer()},500);return}for(var h=0;h<this.playList.length;h++){var k=this.playList[h];this.player.playListAdd({title:k.title,flvName:k.link,fileType:"flv",sourceType:"",port:-1,refer:"",rid:"",maxNo:k.maxNo})}var g=0;try{g=parseInt(location.hash.replace("#",""))}catch(j){}g=isNaN(g)?0:g;if(g>=this.playList.length){g=0}this.play_x(g)},switchMode:function(){this.setMode(this.mode=="normal"?"cinema":"normal")},mediaEnded:function(g,i){var h=g;g=h[0];i=parseInt(h[1]);this.medioEnded_x(g,i)},mediaChanged:function(g,i){var h=g;g=h[0];i=parseInt(h[1]);this.mediaChanged_x(g,i)},isFullScreen:function(g){this.fullScreen=g},showHelp:function(){var g=['<div class="mini_ppvaRemind">',"<tt>想要继续观看完整的节目，请安装最新版PP加速器</tt>",'<a href="',d.ppvadownload,'" title="下载PP加速器" class="downPPva">下载PP加速器</a>',"<p>",'<span>在本地手动安装，并在安装结束后<a href="javascript:;" onclick="window.location.reload();">刷新</a>页面</span>',"<br />(如果安装程序被杀毒或防火墙软件阻止，请您取消此阻止)","</p>","</div>"].join("");this.ppel.html(g)},showGG:function(){clearInterval(this._timerid);if(!this.fullScreen){try{this.ggifmel.getElement("iframe").src=this.ops.ggUrl+"?v="+Math.round(Math.random()*100)}catch(j){}}this.ppel.css("margin-left",-9000);this.ggel.css("margin-left",0);this.ggel.css("zoom","-1");var h=" 秒后精彩节目即将开始";var g="&nbsp;&nbsp;正在播放 : "+this.playList[this.currentVol].title+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";this.ggtlel.css("display","");this.ggtlel.html(g+c+h);var i=new Date().getTime();this._timerid=setInterval(function(){var m=Math.max(0,c-Math.floor((new Date().getTime()-i)/1000));var k=0;try{k=parseInt(a.player.bufferInfo().split("|")[0]);k=isNaN(k)?0:k}catch(l){}if(m==0&&k!=100){a.ggtlel.html(g+"节目缓冲中("+k+"%)")}else{a.ggtlel.html(g+m+h)}if(m==0&&k==100){a.showPP();a.player.openResume();a.ggtlel.css("display","none")}},1000)},showPP:function(){try{this.ggifmel.getElement("iframe").src="about:blank"}catch(g){}a.isVaOpen=false;clearInterval(this._timerid);this.ppel.css("margin-left",0);this.ggel.css("margin-left",-9000)},getSwf:function(g){if(navigator.appName.indexOf("Microsoft")!=-1){return window[g]}return document[g]},initPlayer:function(){var n=[0,0,0,0],p=[],h=0,i="Shockwave Flash";if(typeof navigator.plugins&&typeof navigator.plugins[i]=="object"){var o=navigator.plugins[i];if(o&&o.description){p=o.description.replace(/^.*\s+(\S+)\s+\S+$/g,"$1").split(".")}}else{if(typeof window.ActiveXObject){try{var k=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");p=k.GetVariable("$version").split(/\s+/)[1].split(",")}catch(m){}}}h=p.length;while(h--){n[h]=parseInt(p[h],10)}var g="/res/ikan/flash/pptv4player_12_28.swf?v="+Math.floor(Math.random()*100);var j='<p>您没有安装FlashPlayer或者FlashPlayer版本过低，<a target="_blank" href="'+d.flashactivex+'" style="color:yellow;">请点击此处下载安装最新的FlashPlayer</a>。<br/>安装时请关闭浏览器，待安装完成后再启动浏览器。</p>';if(n[0]>9||(n[0]==9&&n[2]>=115)){j=['<object id="video_player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" align="middle">','<param name="allowscriptaccess" value="always" />','<param name="allowfullscreen" value="true" />','<param name="allownetworking" value="all" />','<param name="movie" value="',g,'" />','<param name="quality" value="high" />','<param name="wmode" value="window" />','<param name="bgcolor" value="#000000" />','<embed src="',g,'" name="video_player" quality="high" wmode="window" bgcolor="#000000" width="100%" height="100%" align="middle" allownetworking="all" allowscriptaccess="always" allowfullscreen="true" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>',"</object>"].join("")}this.ppel.html(j)}};window.IkanPlayer=a})();(function(d){d.register("ikan.comment","1.0.0.0");function h(j,i){for(var k in j){if(typeof i[k]!="undefined"){j[k]=i[k]}}}function a(k){var i=[];for(var j in k){i.push(j+"="+encodeURIComponent(k[j]))}return i.join("&")}var g={checkCodeImg:"http://bk.{0}/checkcode/",getList:"http://bk.{0}/xihttp/ikan2/comment/json/get/?",post:"http://bk.{0}/xihttp/ikan2/comment/json/post/?",up:"http://bk.{0}/xihttp/ikan2/comment/json/post/up/?",report:"http://bk.{0}/addreport/",userHome:"http://home.pptv.com/callerhome/"};var b=document.domain;var c="pplive.com";if(b!=""){c=b.indexOf("pptv.com")!=-1?"pptv.com":c}for(var f in g){g[f]=g[f].replace("{0}",c)}var e={isOneGetCheckCode:true,replyId:null,listCount:0,pageCount:0,onPost:new d.CustomEvent("onPost"),timeLine:0,episodeId:"",rebind:function(i){this.cnf={type:null,id:null,num:20,ipage:1};h(this.cnf,i);this.getList()},init:function(k,l,j){this.cnf={type:null,id:null,num:20,ipage:1};h(this.cnf,l);this.ops={contentMaxLength:100,pageNumSplit:" | "};if(j){h(this.ops,j)}d.IKan.User2.onLogined.subscribe(this.onLogined,this);d.IKan.User2.onlogouted.subscribe(this.onlogouted,this);this.lsboxel=k.getElement("div.CommentList");this.count_els=k.getElements(".CommentCount");this.pageNumInfo_els=k.getElements(".PageNum .AllNum");this.pageList_els=k.getElements(".PageNum .PageList");this.btnRef_els=k.getElements(".btnRef");var i=k.getElement("div.inquote");this.lsItemQuoteTp=i.html();i.innerHTML="{Replies_HTML}";this.lsItemTp=this.lsboxel.html();this.lsboxel.html("");this.form_btnLogout_el=k.getElement("a.btnLogout");this.form_btnLogin_el=k.getElement("a.btnLogin");this.form_userName_el=k.getElement("a.userName");this.form_ckNotUser_el=k.getElement("input.ckNotUser");this.form_txtContent_el=k.getElement("textarea.txtContent");this.form_btnPost_el=k.getElement("input.btnPost");this.form_txtCheckCode_el=k.getElement("input.txtCheckCode");this.form_imgCheckCode_el=k.getElement("img.imgCheckCode");this.form_refCheckCode_el=k.getElement("a.refCheckCode");this.form_userName_el.css("display","none");this.form_btnLogout_el.css("display","none");this.form_ckNotUser_el.checked=true;this.form_ckNotUser_el.css("display","none");this.form_txtContent_el.value="";this.form_txtCheckCode_el.value="";this.bindEvent();this.getList()},onLogined:function(k,j){var i=j[0];this.form_ckNotUser_el.checked=false;this.form_userName_el.html(i.UserName);this.form_userName_el.css("display","");this.form_btnLogout_el.css("display","");this.form_ckNotUser_el.css("display","");this.form_btnLogin_el.css("display","none")},onlogouted:function(j,i){this.form_ckNotUser_el.checked=true;this.form_userName_el.css("display","none");this.form_btnLogout_el.css("display","none");this.form_ckNotUser_el.css("display","none");this.form_btnLogin_el.css("display","")},bindEvent:function(){this.form_refCheckCode_el.addEvent("click",function(i){this.refCheckCodeImg();this.form_txtCheckCode_el.focus();this.form_txtCheckCode_el.select();i.stop()},this);this.form_txtCheckCode_el.addEvent("focus",function(){if(this.isOneGetCheckCode){this.refCheckCodeImg()}},this);this.form_txtContent_el.addEvent("keydown",function(i){if(i.key=="enter"&&i.control){this.post();i.stop()}},this);this.form_txtCheckCode_el.addEvent("keydown",function(i){if(i.key=="enter"&&i.control){this.post();i.stop()}},this);this.form_btnPost_el.addEvent("click",function(i){this.post();i.stop()},this);this.form_btnLogin_el.addEvent("click",function(i){var j=this.position();d.IKan.User2.showLoginBox(j);i.stop()});this.form_btnLogout_el.addEvent("click",function(i){d.IKan.User2.logout()});this.btnRef_els.addEvent("click",function(i){this.getList();i.stop()},this)},post:function(){var i=this;var l=this.form_txtContent_el.value;var m=false;var k=l.match(/\[回复 \S* 的发言\]/g);if(k){l=l.replace(k,"");if(this.replyId!=null){m=true}}if(l.length==0){this.form_txtContent_el.focus();return}if(this.form_txtCheckCode_el.value.length==0){this.form_txtCheckCode_el.focus();return}var n={notbkuser:this.form_ckNotUser_el.checked?1:0,content:l.substring(0,this.ops.contentMaxLength),checkcode:this.form_txtCheckCode_el.value};this.onPost.fire();if(m){n.cid=this.replyId}else{n.timeline=this.timeLine;n.episodeid=this.episodeId}var j=g.post+a(this.cnf)+"&"+a(n);this.timeLine=0;this.episodeId="";new d.Loader({url:j,type:"js",callback:function(o){i.postFnc(o)},param:true}).load()},postFnc:function(i){if(i.Status==1){this.refCheckCodeImg();this.form_txtCheckCode_el.value="";this.form_txtContent_el.value="";this.replyId=null;this.cnf.ipage=1;this.getList()}else{alert(i.Msg)}},refCheckCodeImg:function(){this.isOneGetCheckCode=false;this.form_imgCheckCode_el.src=g.checkCodeImg+"?v="+Math.random()},getList:function(){this.lsboxel.html("评论加载中...");var i=this;var j=g.getList+a(this.cnf);new d.Loader({url:j,type:"js",callback:function(k){i.fillList(k)},param:true}).load()},fillList:function(m){if(m.Status==0){this.lsboxel.html("");return}if(this.count_els.length>0){this.count_els.html(m.Data.CommentCount)}this.listCount=m.Data.CommentCount;var l=[];for(var k=0,j=m.Data.Comments.length;k<j;k++){l.push(this.parseItem(m.Data.Comments[k]))}this.lsboxel.html(l.join(""));this.updatePagePanel()},updatePagePanel:function(){if(this.pageNumInfo_els.length>0){this.pageNumInfo_els.html("第"+((this.cnf.ipage-1)*this.cnf.num)+"-"+(this.cnf.ipage*this.cnf.num)+"条 共"+this.listCount+"条")}if(this.pageList_els.length==0){return}this.pageCount=Math.ceil(this.listCount/this.cnf.num);var j=[];var l=this.cnf.ipage;var n=1;var k=this.pageCount;n=l-3;k=l+3;if(n<1){n=1;k=this.pageCount>7?7:this.pageCount}if(k>this.pageCount){n=this.pageCount-6;k=this.pageCount}if(l!=1){j.push('<a href="javascript:;" onclick="$.IKan.Comment.pageChange(-1);return false;">上一页</a>')}if(l>4&&this.pageCount>7){j.push('<a href="javascript:;" onclick="$.IKan.Comment.pageChange(1);return false;">1</a>');j.push("...")}if(n<1){n=1}for(var m=n;m<=k;m++){if(l==m){j.push('<a href="javascript:;" onclick="$.IKan.Comment.pageChange('+m+');return false;" class="now" style="font-weight:bold;color:orange;">'+m+"</a>")}else{j.push('<a href="javascript:;" onclick="$.IKan.Comment.pageChange('+m+');return false;">'+m+"</a>")}}if(l<this.pageCount-3&&this.pageCount>7){j.push("...");j.push('<a href="javascript:;" onclick="$.IKan.Comment.pageChange('+this.pageCount+');return false;">'+this.pageCount+"</a>")}if(l!=this.pageCount&&this.pageCount!=0){j.push('<a href="javascript:;" onclick="$.IKan.Comment.pageChange(-2);return false;">下一页</a>')}this.pageList_els.html(j.join(this.ops.pageNumSplit))},pageChange:function(i){if(i==-1){this.cnf.ipage--}else{if(i==-2){this.cnf.ipage++}else{this.cnf.ipage=i}}this.getList()},parseItem:function(r){var n=[];if(r.Replies.length>0){for(var l=0,m=r.Replies.length;l<m;l++){n.push(this.parseItemQuote(r.Replies[l]))}r.quote_begin="";r.quote_end=""}else{r.quote_begin="<!--";r.quote_end="-->"}r.Replies_HTML=n.join("");var o=r.UserName;var k=r.UserFace;var q=this.checkLoginUser(o);if(q){r.UserName_HTML='<span><a href="'+g.userHome+o+'" target="_blank">'+o+"</a></span>";r.UserFace_HTML='<a href="'+g.userHome+o+'" target="_blank"><img src="'+k+'" width="40" height="40" /></a>'}else{r.UserName_HTML=o;r.UserFace_HTML='<img src="'+k+'" width="40" height="40" />'}var t=this.lsItemTp;for(var j in r){t=t.replace(new RegExp("\\{(\\w*)\\}","g"),function(){var i=arguments[1];if(typeof r[i]=="undefined"){return arguments[0]}return r[i]})}return t},parseItemQuote:function(k){var j=this.lsItemQuoteTp;var l=k.UserName;var i=k.UserFace;var n=this.checkLoginUser(l);if(n){k.UserName_HTML='<span><a href="'+g.userHome+l+'" target="_blank">'+l+"</a></span>";k.UserFace_HTML='<a href="'+g.userHome+l+'" target="_blank"><img src="'+i+'" width="20" height="20" /></a>'}else{k.UserName_HTML=l;k.UserFace_HTML='<img src="'+i+'" width="20" height="20" />'}for(var m in k){j=j.replace(new RegExp("\\{(\\w*)\\}","g"),function(){var o=arguments[1];if(typeof k[o]=="undefined"){return arguments[0]}return k[o]})}return j},checkLoginUser:function(i){return i.match(/\d*.\d.*/g)?false:true},ref:function(){this.getList()},reply:function(j,i){this.replyId=j;this.form_txtContent_el.value="xxx";this.form_txtContent_el.focus();this.form_txtContent_el.value="[回复 "+i+" 的发言]\n";this.form_txtContent_el.focus()},report:function(i){window.open(g.report+this.cnf.type+"/"+this.cnf.id+"/"+i)},up:function(l,k){var i=this;var j=g.up+"type="+this.cnf.type+"&cid="+l;new d.Loader({url:j,type:"js",callback:function(m){if(m.Status==1){if(k!=null){k.html(parseInt(k.html())+1);k.css("color","red")}alert("支持成功!")}else{alert(m.Msg)}},param:true}).load()}};if(typeof d.IKan=="undefined"){d.IKan={}}d.IKan.Comment=e})(JUI);(function(f){f.register("ikan.history","1.0.0.0");var e="ikan.pplive.com";if(document.domain.toLowerCase().indexOf("pptv.com")!=-1){e="ikan.pptv.com"}var d=5;var g="pptv_history";function c(){var i=f.Cookie.read(g);if(i==null){return[]}var h=[];try{h=f.JSON.decode(decodeURIComponent(i))}catch(j){}return h}function a(h){var j={domain:e,path:"/",duration:365};var i=encodeURIComponent(f.JSON.encode(h));f.Cookie.write(g,i,j)}var b={onClear:new f.CustomEvent("onClear"),write:function(m){var j=c();var l=[];for(var k=0,h=j.length;k<h;k++){if(m.link!=j[k].link){l.push(j[k])}}m.time=(new Date()).getTime();l.push(m);if(l.length>d){l.shift()}a(l)},read:function(){var h=c();return h},clear:function(){var h={domain:e,path:"/"};f.Cookie.remove(g,h);this.onClear.fire()}};if(typeof f.IKan=="undefined"){f.IKan={}}f.IKan.History=b})(JUI);(function(d){d.register("ikan.user2","1.0.0.0");var c="pplive.com";if(document.domain.toLowerCase().indexOf("pptv.com")!=-1){c="pptv.com"}var e={login:"http://passport.pptv.com/weblogin.do?",addFavor:"http://bk.pptv.com/xihttp/ikan2/favor/json/post/?",favorCheck:"http://bk.pptv.com/xihttp/ikan2/favor/json/check/?",like:"http://bk.pptv.com/xihttp/ikan2/score/json/post/?",likeCheck:"http://bk.pptv.com/xihttp/ikan2/score/json/check/?"};var f=false,b=true;var a={onLogined:new d.CustomEvent("onLogined"),onlogouted:new d.CustomEvent("onlogouted"),userInfo:{Gender:"",PpNum:"",ExpNum:"",LevelName:"",NextLevelName:"",NextLevelExpNum:"",Area:"",Subscribe:"",UnreadNotes:"",HeadPic:"",Email:"",OnlineTime:"",UserName:""},tryReadUserInfo:function(){var l=d.Cookie.read("UDI");var j=d.Cookie.read("PPName");if(l==null||j==null){this.onlogouted.fire();return}var h=j.split("$");this.userInfo.UserName=decodeURIComponent(h[0]);var i=l.split("$");var g=0;for(var k in this.userInfo){if(k=="UserName"){break}this.userInfo[k]=decodeURIComponent(i[g]);g++}f=true;this.onLogined.fire(this.userInfo)},wirteUserInfo:function(i){var g={domain:c,path:"/",duration:7};for(var h in i){d.Cookie.write(h,i[h],g)}},logout:function(){var g={domain:c,path:"/"};d.Cookie.remove("PPKey",g);d.Cookie.remove("UDI",g);d.Cookie.remove("PPName",g);f=false;this.onlogouted.fire()},login:function(i,j){var g=this;var h=e.login+"username="+i+"&password="+j;new d.Loader({url:h,type:"js",callback:function(k,l){g.loginFnc(k,l)},param:true}).load()},loginFnc:function(g,h){if(g==0){alert(h);return}if(g==1){this.usernameel.value="";this.userpwdel.value="";this.hideLoginBox();this.wirteUserInfo(h)}this.tryReadUserInfo()},checkLogined:function(){return f},showLoginBox:function(h){if(b){b=false;this.boxel=d("#loginBox");this.btnpostel=this.boxel.getElement(".btnPost");this.usernameel=this.boxel.getElement(".userName");this.userpwdel=this.boxel.getElement(".userPwd");this.usernameel.value="";this.userpwdel.value="";d(document).addEvent("click",function(j){if(j.target.getAttribute("stopdocumentclick")==null){this.hideLoginBox()}},this);this.boxel.addEvent("click",function(j){if(j.target.tagName!="A"){j.stop()}});this.btnpostel.addEvent("click",function(j){this.checkLoginForm()},this);this.usernameel.addEvent("keydown",function(j){if(j.key=="enter"){this.checkLoginForm()}},this);this.userpwdel.addEvent("keydown",function(j){if(j.key=="enter"){this.checkLoginForm()}},this)}this.boxel.css({display:"block"});var g=0;var i=0;g=h.x;i=h.y;this.boxel.css({top:i,left:g});this.usernameel.focus()},hideLoginBox:function(){this.boxel.css("display","none")},checkLoginForm:function(){if(this.usernameel.value.length==0){this.usernameel.focus();return}if(this.userpwdel.value.length==0){this.userpwdel.focus();return}this.login(this.usernameel.value,this.userpwdel.value)},favor:function(j,i,k,g){var h=(j=="add"?e.addFavor:e.favorCheck)+"type="+i+"&id="+k;new d.Loader({url:h,type:"js",callback:function(l){g(l)},param:true}).load()},like:function(k,i,l,j,g){var h=(k=="add"?e.like:e.likeCheck)+"type="+i+"&id="+l+"&attitude="+j;new d.Loader({url:h,type:"js",callback:function(m){g(m)},param:true}).load()}};if(typeof d.IKan=="undefined"){d.IKan={}}d.IKan.User2=a})(JUI);(function(b){b.register("photo-slide","1.0.0.0");var a=function(f,e,c,d){this.ops={btnTriggerEvent:"click",autoSwitchTime:5000};this.mergeOptions(d);this.pageCount=0;this.selectedPageNum=0;this.width=e;this.height=c;this.tpEl=f;this.init()};b.Native.initialize({name:"PhotoSlide",initialize:a,protect:true});a.implement({mergeOptions:function(c){for(var d in c){this.ops[d]=c[d]}},beginAutoSwitch:function(){if(this.ops.autoSwitchTime<1||this.pageCount<2){return}clearInterval(this.sid);var c=this;this.sid=setInterval(function(){var d=0;if(c.selectedPageNum<c.pageCount-1){d=c.selectedPageNum+1}c.changePage(d)},this.ops.autoSwitchTime)},stopAutoSwitch:function(){clearInterval(this.sid)},init:function(){this.picsEl=this.tpEl.getElement("div.pics");this.picsEl.css({width:this.width,height:this.height,overflow:"hidden"});this.picsMoveEl=this.picsEl.getElement("div");this.picsMoveEl.css({height:this.height,overflow:"hidden"});this.fx=new b.Fx.Morph(this.picsMoveEl,{duration:500,effect:"Quad:in:out"});this.titleEl=this.tpEl.getElement("div.info .title");this.btnsEl=this.tpEl.getElement("div.info .btns");this.tpEl.addEvent("mouseover",function(c){this.stopAutoSwitch()},this);this.tpEl.addEvent("mouseout",function(c){this.beginAutoSwitch()},this);this.fnc()},fnc:function(){this.infos=[];var e=this.picsMoveEl.getElements("div");this.pageCount=e.length;if(this.pageCount==0){return}this.picsMoveEl.css("width",this.pageCount*this.width);var f=[];for(var d=0,c=this.pageCount;d<c;d++){e[d].css({width:this.width,height:this.height,overflow:"hidden","float":"left"});f.push(['<a href="javascript:;">',d+1,"</a>"].join(""));var h=e[d].getElements("a");if(h.length>0){this.infos.push({title:h[0].attr("title"),link:h[0].attr("href")})}else{this.infos.push({title:"No Text",link:""})}}if(this.btnsEl!=null){this.btnsEl.html(f.join(""));var g=this.btnsEl.getElements("a");g.addEvent(this.ops.btnTriggerEvent,function(j){var i=parseInt(b(j.target).html())-1;this.changePage(i)},this)}this.changePage(0);this.beginAutoSwitch()},changePage:function(c){if(this.btnsEl!=null){var d=this.btnsEl.getElements("a");d[this.selectedPageNum].className="";d[c].className="now"}if(this.titleEl!=null){var e=this.infos[c];this.titleEl.html(e.title);this.titleEl.attr("href",e.link)}this.selectedPageNum=c;this.fx.start({"margin-left":-(this.selectedPageNum*this.width)})}});b.PhotoSlide=a})(JUI);(function(c){c.register("ikan.searchtips","1.0.0.0");var b="pplive.com";if(document.domain!=""){b=document.domain.indexOf("pptv.com")!=-1?"pptv.com":b}var a=function(f,e,d){this.inputel=f;this.btnel=e;this.ops={defaultText:"-- 请输入关键字 --",defaultTextColor:"#999999",textColor:"#000000",tipBoxWidth:"182px",strLength:26,searchSuggestUrl:"http://ikan."+b+"/search/suggest/?kw=",searchUrl:"http://ikan."+b+"/search/?kw="};this.mergeOptions(d);this.init()};c.Native.initialize({name:"SearchTips",initialize:a,protect:true});a.implement({mergeOptions:function(d){for(var e in d){this.ops[e]=d[e]}},truncate:function(e,d,h){var f=0,k=[],j=e.length;for(var g=0;g<j;g++){if(e.charCodeAt(g)>255){f+=2}else{f++}if(f>d){break}}return(h&&g<j)?e.substring(0,g)+"...":e.substring(0,g)},getText:function(){return this.inputel.value.replace(/(^\s+)|(\s+$)/gm,"")},setDefaultState:function(){this.inputel.value=this.ops.defaultText;this.inputel.css("color",this.ops.defaultTextColor)},setNormalState:function(d){this.inputel.value=d?d:"";this.inputel.css("color",this.ops.textColor)},init:function(){this.tipsLis=[];this.selectedIx=-1;this.prevText="";this.gotourl="";this.setDefaultState();this.tipboxel=document.createElement("ul");this.tipboxel.className="sm_search_tips";this.tipboxel.style.overflow="hidden";this.tipboxel.style.position="absolute";this.tipboxel.style.zIndex=1000;this.tipboxel.style.width=this.ops.tipBoxWidth;this.tipboxel.style.display="none";document.documentElement.getElementsByTagName("body")[0].appendChild(this.tipboxel);this.inputel.addEvent("focus",this.input_focus,this);this.inputel.addEvent("blur",this.input_blur,this);this.inputel.addEvent("keydown",this.input_key_down,this);this.inputel.addEvent("keyup",this.input_key_up,this);this.btnel.addEvent("click",this.btn_click,this);c(document).addEvent("click",function(){this.hideTipBox()},this)},fillList:function(h){this.tipsLis=[];this.selectedIx=-1;this.prevText=this.getText();if(h.length==0){this.hideTipBox();return}var g=[];for(var f=0,e=h.length;f<e;f++){g.push(['<li><a href="',h[f].link,'">',this.truncate(h[f].name,this.ops.strLength),"</a></li>"].join(""))}this.tipboxel.innerHTML=g.join("");this.tipsLis=this.tipboxel.getElementsByTagName("li");this.showTipBox()},setSelectedItem:function(d){if(this.tipsLis.length==0){return}if(this.selectedIx==-1){this.selectedIx=0}else{this.tipsLis[this.selectedIx].className="";this.selectedIx+=d}if(this.selectedIx<0){this.selectedIx=this.tipsLis.length-1}if(this.selectedIx>=this.tipsLis.length){this.selectedIx=0}this.tipsLis[this.selectedIx].className="current";this.gotourl=this.tipsLis[this.selectedIx].getElementsByTagName("a")[0].href},showTipBox:function(){this.gotourl="";var d=this.inputel.position();this.tipboxel.style.top=d.y+24+"px";this.tipboxel.style.left=d.x+"px";this.tipboxel.style.display="block"},hideTipBox:function(){this.gotourl="";this.tipboxel.style.display="none"},getSuggestList:function(){var d=this;var e=new c.Loader({url:this.ops.searchSuggestUrl+encodeURIComponent(this.getText()),type:"js",callback:function(f){d.fillList.call(d,f)},param:true});e.load()},input_key_up:function(){if(this.getText()==""){this.hideTipBox()}if(this.getText()!=""&&this.getText()!=this.ops.defaultTex&&this.prevText!=this.getText()){var d=this;clearTimeout(this.tid);this.tid=setTimeout(function(){d.getSuggestList()},400)}},input_focus:function(){if(this.getText()==this.ops.defaultText){this.setNormalState()}},input_blur:function(){if(this.getText()==""){this.setDefaultState()}},btn_click:function(){if(this.getText()!=""&&this.getText()!=this.ops.defaultText){window.location.href=this.ops.searchUrl+encodeURIComponent(this.getText())}},input_key_down:function(d){switch(d.key){case"enter":if(this.gotourl!=""){window.location.href=this.gotourl}else{this.btn_click()}break;case"up":this.setSelectedItem(-1);break;case"down":this.setSelectedItem(1);break}}});if(typeof c.IKan=="undefined"){c.IKan={}}c.IKan.SearchTips=a})(JUI);
