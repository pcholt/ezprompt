// Spectrum Colorpicker v1.0.9
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT
(function(D,e,Aa){function qa(c,b,a){for(var k=[],d=0;d<c.length;d++){var g=tinycolor(c[d]),f=0.5>g.toHsl().l?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light",f=f+(tinycolor.equals(b,c[d])?" sp-thumb-active":""),e=ra?"background-color:"+g.toRgbString():"filter:"+g.toFilter();k.push('<span title="'+g.toRgbString()+'" data-color="'+g.toRgbString()+'" class="'+f+'"><span class="sp-thumb-inner" style="'+e+';" /></span>')}return"<div class='sp-cf "+a+"'>"+k.join("")+"</div>"}function Oa(c,b){var a=
c.outerWidth(),k=c.outerHeight(),d=b.outerHeight(),g=c[0].ownerDocument,f=g.documentElement,l=f.clientWidth+e(g).scrollLeft(),g=f.clientHeight+e(g).scrollTop(),f=b.offset();f.top+=d;f.left-=Math.min(f.left,f.left+a>l&&l>a?Math.abs(f.left+a-l):0);f.top-=Math.min(f.top,f.top+k>g&&g>k?Math.abs(k+d-0):0);return f}function A(){}function Pa(c){c.stopPropagation()}function V(c,b){var a=Array.prototype.slice,d=a.call(arguments,2);return function(){return c.apply(b,d.concat(a.call(arguments)))}}function ga(c,
b,a,d){function fa(a){a.stopPropagation&&a.stopPropagation();a.preventDefault&&a.preventDefault();a.returnValue=!1}function g(a){if(h){if(W&&9>document.documentMode&&!a.button)return f();var d=a.originalEvent.touches,k=d?d[0].pageY:a.pageY,d=Math.max(0,Math.min((d?d[0].pageX:a.pageX)-s.left,p)),k=Math.max(0,Math.min(k-s.top,j));r&&fa(a);b.apply(c,[d,k,a])}}function f(){h&&(e(l).unbind(F),e(l.body).removeClass("sp-dragging"),d.apply(c,arguments));h=!1}b=b||function(){};a=a||function(){};d=d||function(){};
var l=c.ownerDocument||document,h=!1,s={},j=0,p=0,r="ontouchstart"in D,F={};F.selectstart=fa;F.dragstart=fa;F[r?"touchmove":"mousemove"]=g;F[r?"touchend":"mouseup"]=f;e(c).bind(r?"touchstart":"mousedown",function(b){if(!(b.which?3==b.which:2==b.button)&&!h&&!1!==a.apply(c,arguments))h=!0,j=e(c).height(),p=e(c).width(),s=e(c).offset(),e(l).bind(F),e(l.body).addClass("sp-dragging"),r||g(b),fa(b)})}var Ba={beforeShow:A,move:A,change:A,show:A,hide:A,color:!1,flat:!1,showInput:!1,showButtons:!0,clickoutFiresChange:!1,
showInitial:!1,showPalette:!1,showPaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",preferredFormat:!1,className:"",showAlpha:!1,theme:"sp-light",palette:["fff","000"],selectionPalette:[],disabled:!1},R=[],W=!!/msie/i.exec(D.navigator.userAgent),ra,z=document.createElement("div").style;z.cssText="background-color:rgba(0,0,0,.5)";ra=!!~(""+z.backgroundColor).indexOf("rgba")||!!~(""+z.backgroundColor).indexOf("hsla");var Ca,z="";if(W)for(var q=
1;6>=q;q++)z+="<div class='sp-"+q+"'></div>";Ca=["<div class='sp-container'><div class='sp-palette-container'><div class='sp-palette sp-thumb sp-cf'></div></div><div class='sp-picker-container'><div class='sp-top sp-cf'><div class='sp-fill'></div><div class='sp-top-inner'><div class='sp-color'><div class='sp-sat'><div class='sp-val'><div class='sp-dragger'></div></div></div></div><div class='sp-hue'><div class='sp-slider'></div>",z,"</div></div><div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div></div><div class='sp-input-container sp-cf'><input class='sp-input' type='text' spellcheck='false'  /></div><div class='sp-initial sp-thumb sp-cf'></div><div class='sp-button-container sp-cf'><a class='sp-cancel' href='#'></a><button class='sp-choose'></button></div></div></div>"].join("");
e.fn.spectrum=function(c,b){if("string"==typeof c){var a=this,d=Array.prototype.slice.call(arguments,1);this.each(function(){var b=R[e(this).data("spectrum.id")];if(b){var g=b[c];if(!g)throw Error("Spectrum: no such method: '"+c+"'");"get"==c?a=b.get():"container"==c?a=b.container:"option"==c?a=b.option.apply(b,d):"destroy"==c?(b.destroy(),e(this).removeData("spectrum.id")):g.apply(b,d)}});return a}return this.spectrum("destroy").each(function(){var a,b=function(){m.toggleClass("sp-flat",L);m.toggleClass("sp-input-disabled",
!n.showInput);m.toggleClass("sp-alpha-enabled",n.showAlpha);m.toggleClass("sp-buttons-disabled",!n.showButtons||L);m.toggleClass("sp-palette-disabled",!n.showPalette);m.toggleClass("sp-palette-only",n.showPaletteOnly);m.toggleClass("sp-initial-disabled",!n.showInitial);m.addClass(n.className);q()},d=function(a){if(J&&(a=tinycolor(a).toRgbString(),-1===e.inArray(a,S)&&S.push(a),y&&D.localStorage))try{D.localStorage[y]=S.join(";")}catch(b){}},k=function(){var a=[],b=S,c={},d;if(n.showPalette){for(var k=
0;k<ha.length;k++)for(var f=0;f<ha[k].length;f++)d=tinycolor(ha[k][f]).toRgbString(),c[d]=!0;for(k=0;k<b.length;k++)d=tinycolor(b[k]).toRgbString(),c.hasOwnProperty(d)||(a.push(b[k]),c[d]=!0)}return a.reverse().slice(0,n.maxSelectionSize)},h=function(){var a=B(),b=e.map(ha,function(b,c){return qa(b,a,"sp-palette-row sp-palette-row-"+c)});S&&b.push(qa(k(),a,"sp-palette-row sp-palette-row-selection"));Da.html(b.join(""))},p=function(){if(n.showInitial){var a=M,b=B();Ea.html(qa([a,b],b,"sp-palette-row-initial"))}},
j=function(){(0===N||0===X||0===ia)&&q();m.addClass(ea)},t=function(){m.removeClass(ea)},r=function(){var a=tinycolor(H.val());a.ok?u(a):H.addClass("sp-validation-error")},F=function(){Y?G():sa()},sa=function(){if(Y)q();else if(!1!==C.beforeShow(B())){for(var a=0;a<R.length;a++)R[a]&&R[a].hide();Y=!0;e(ja).bind("click.spectrum",G);e(D).bind("resize.spectrum",K);T.addClass("sp-active");m.show();n.showPalette&&h();q();v();M=B();p();C.show(M)}},G=function(a){if((!a||!("click"==a.type&&2==a.button))&&
Y&&!L)Y=!1,e(ja).unbind("click.spectrum",G),e(D).unbind("resize.spectrum",K),T.removeClass("sp-active"),m.hide(),tinycolor.equals(B(),M)||(za&&"cancel"!==a?x(!0):u(M,!0)),C.hide(B())},u=function(a,b){if(!tinycolor.equals(a,B())){var c=tinycolor(a),d=c.toHsv();Z=d.h;ka=d.s;la=d.v;I=d.a;v();b||(ma=ta||c.format)}},B=function(){return tinycolor.fromRatio({h:Z,s:ka,v:la,a:Math.round(100*I)/100})},$=function(){v();C.move(B())},v=function(){H.removeClass("sp-validation-error");z();var a=tinycolor({h:Z,s:"1.0",
v:"1.0"});na.css("background-color",a.toHexString());a=ma;if(1>I&&("hex"===a||"name"===a))a="rgb";var b=B(),c=b.toHexString(),d=b.toRgbString();ra||1===b.alpha?ua.css("background-color",d):(ua.css("background-color","transparent"),ua.css("filter",b.toFilter()));if(n.showAlpha){d=b.toRgb();d.a=0;var d=tinycolor(d).toRgbString(),k="linear-gradient(left, "+d+", "+c+")";W?aa.css("filter",tinycolor(d).toFilter({gradientType:1},c)):(aa.css("background","-webkit-"+k),aa.css("background","-moz-"+k),aa.css("background",
"-ms-"+k),aa.css("background",k))}if(n.showInput){if(1>I&&("hex"===a||"name"===a))a="rgb";H.val(b.toString(a))}n.showPalette&&h();p()},z=function(){var a=ka*X,b=N-la*N,a=Math.max(-O,Math.min(X-O,a-O)),b=Math.max(-O,Math.min(N-O,b-O));Fa.css({top:b,left:a});Ga.css({left:I*Q-ca/2});Ha.css({top:Z*ia-da})},x=function(a){var b=B();va&&E.val(b.toString(ma)).change();var c=!tinycolor.equals(b,M);M=b;d(b);a&&c&&C.change(b)},q=function(){X=na.width();N=na.height();O=Fa.height();wa.width();ia=wa.height();da=
Ha.height();Q=Ia.width();ca=Ga.width();L||m.offset(Oa(m,ba));z()};a=function(){G();xa=!0;E.attr("disabled",!0);ba.addClass("sp-disabled")};var n,w=e.extend({},Ba,c);w.callbacks={move:V(w.move,this),change:V(w.change,this),show:V(w.show,this),hide:V(w.hide,this),beforeShow:V(w.beforeShow,this)};n=w;var L=n.flat,J=n.showSelectionPalette,y=n.localStorageKey,A=n.theme,C=n.callbacks,K,U=q,P;K=function(){var a=this,b=arguments;P||(P=setTimeout(function(){P=null;U.apply(a,b)},10))};var Y=!1,X=0,N=0,O=0,
ia=0,Q=0,ca=0,da=0,Z=0,ka=0,la=0,I=1,w=n.palette.slice(0),ha=e.isArray(w[0])?w:[w],S=n.selectionPalette.slice(0),ea="sp-dragging",ja=this.ownerDocument,w=ja.body,E=e(this),xa=!1,m=e(Ca,ja).addClass(A),na=m.find(".sp-color"),Fa=m.find(".sp-dragger"),wa=m.find(".sp-hue"),Ha=m.find(".sp-slider"),aa=m.find(".sp-alpha-inner"),Ia=m.find(".sp-alpha"),Ga=m.find(".sp-alpha-handle"),H=m.find(".sp-input"),Da=m.find(".sp-palette"),Ea=m.find(".sp-initial"),Ja=m.find(".sp-cancel"),Ka=m.find(".sp-choose"),va=E.is("input"),
ya=va&&!L,T=ya?e("<div class='sp-replacer'><div class='sp-preview'><div class='sp-preview-inner'></div></div><div class='sp-dd'>&#9660;</div></div>").addClass(A):e([]),ba=ya?T:E,ua=T.find(".sp-preview-inner"),oa=n.color||va&&E.val(),M=!1,ta=n.preferredFormat,ma=ta,za=!n.showButtons||n.clickoutFiresChange,A=function(a){a.data&&a.data.ignore?(u(e(this).data("color")),$()):(u(e(this).data("color")),x(!0),$(),G());return!1};W&&m.find("*:not(input)").attr("unselectable","on");b();ya&&E.hide().after(T);
L?E.after(m).hide():e(w).append(m.hide());if(y&&D.localStorage){try{var La=D.localStorage[y].split(",#");1<La.length&&(delete D.localStorage[y],e.each(La,function(a,b){d(b)}))}catch(Ma){}try{S=D.localStorage[y].split(";")}catch(Na){}}ba.bind("click.spectrum touchstart.spectrum",function(a){xa||F();a.stopPropagation();e(a.target).is("input")||a.preventDefault()});(E.is(":disabled")||!0===n.disabled)&&a();m.click(Pa);H.change(r);H.bind("paste",function(){setTimeout(r,1)});H.keydown(function(a){13==
a.keyCode&&r()});Ja.text(n.cancelText);Ja.bind("click.spectrum",function(a){a.stopPropagation();a.preventDefault();G("cancel")});Ka.text(n.chooseText);Ka.bind("click.spectrum",function(a){a.stopPropagation();a.preventDefault();H.hasClass("sp-validation-error")||(x(!0),G())});ga(Ia,function(a,b,c){I=a/Q;c.shiftKey&&(I=Math.round(10*I)/10);$()});ga(wa,function(a,b){Z=parseFloat(b/ia);$()},j,t);ga(na,function(a,b){ka=parseFloat(a/X);la=parseFloat((N-b)/N);$()},j,t);oa?(u(oa),v(),ma=ta||tinycolor(oa).format,
d(oa)):v();L&&sa();j=W?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Da.delegate(".sp-thumb-el",j,A);Ea.delegate(".sp-thumb-el:nth-child(1)",j,{ignore:!0},A);var pa={show:sa,hide:G,toggle:F,reflow:q,option:function(a,c){if(a===Aa)return e.extend({},n);if(c===Aa)return n[a];n[a]=c;b()},enable:function(){xa=!1;E.attr("disabled",!1);ba.removeClass("sp-disabled")},disable:a,set:function(a){u(a);x()},get:B,destroy:function(){E.show();ba.unbind("click.spectrum touchstart.spectrum");m.remove();
T.remove();R[pa.id]=null},container:m};pa.id=R.push(pa)-1;a=pa;e(this).data("spectrum.id",a.id)})};e.fn.spectrum.load=!0;e.fn.spectrum.loadOpts={};e.fn.spectrum.draggable=ga;e.fn.spectrum.defaults=Ba;e.spectrum={};e.spectrum.localization={};e.spectrum.palettes={};e.fn.spectrum.processNativeColorInputs=function(){var c=e("<input type='color' value='!' />")[0];"color"===c.type&&"!"!=c.value||e("input[type=color]").spectrum({preferredFormat:"hex6"})};var d=function(c){var b,a,k,e,g;if("object"==typeof c&&
c.hasOwnProperty("_tc_id"))return c;a=c;var f=0,l=0,h=0;c=1;var s=!1,j=!1;if("string"==typeof a)a:{a=a.replace(za,"").replace(Ma,"").toLowerCase();var q=!1;if(P[a])a=P[a],q=!0;else if("transparent"==a){a={r:0,g:0,b:0,a:0};break a}a=(b=x.rgb.exec(a))?{r:b[1],g:b[2],b:b[3]}:(b=x.rgba.exec(a))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=x.hsl.exec(a))?{h:b[1],s:b[2],l:b[3]}:(b=x.hsla.exec(a))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=x.hsv.exec(a))?{h:b[1],s:b[2],v:b[3]}:(b=x.hex6.exec(a))?{r:parseInt(b[1],16),g:parseInt(b[2],
16),b:parseInt(b[3],16),format:q?"name":"hex"}:(b=x.hex3.exec(a))?{r:parseInt(b[1]+""+b[1],16),g:parseInt(b[2]+""+b[2],16),b:parseInt(b[3]+""+b[3],16),format:q?"name":"hex"}:!1}"object"==typeof a&&(a.hasOwnProperty("r")&&a.hasOwnProperty("g")&&a.hasOwnProperty("b")?(f=255*t(a.r,255),l=255*t(a.g,255),h=255*t(a.b,255),s=!0,j="rgb"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("v")?(j=a.h,l=a.s,h=a.v,j=6*t(j,360),l=t(l,100),h=t(h,100),f=J.floor(j),s=j-f,j=h*(1-l),b=h*(1-s*l),s=h*(1-
(1-s)*l),q=f%6,f=255*[h,b,j,j,s,h][q],l=255*[s,h,h,b,j,j][q],h=255*[j,j,s,h,h,b][q],s=!0,j="hsv"):a.hasOwnProperty("h")&&(a.hasOwnProperty("s")&&a.hasOwnProperty("l"))&&(f=a.h,j=a.s,h=a.l,l=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},f=t(f,360),j=t(j,100),h=t(h,100),0===j?j=h=b=h:(b=0.5>h?h*(1+j):h+j-h*j,s=2*h-b,j=l(s,b,f+1/3),h=l(s,b,f),b=l(s,b,f-1/3)),f=255*j,l=255*h,h=255*b,s=!0,j="hsl"),a.hasOwnProperty("a")&&(c=a.a));f=u(255,v(f,0));l=u(255,
v(l,0));h=u(255,v(h,0));1>f&&(f=p(f));1>l&&(l=p(l));1>h&&(h=p(h));b=s;a=a&&a.format||j;k=f;e=l;g=h;var r=y(c);return{ok:b,format:a,_tc_id:Na++,alpha:r,toHsv:function(){var a=ca(k,e,g);return{h:a.h,s:a.s,v:a.v,a:r}},toHsvString:function(){var a=ca(k,e,g),b=p(360*a.h),c=p(100*a.s),a=p(100*a.v);return 1==r?"hsv("+b+", "+c+"%, "+a+"%)":"hsva("+b+", "+c+"%, "+a+"%, "+r+")"},toHsl:function(){var a=da(k,e,g);return{h:a.h,s:a.s,l:a.l,a:r}},toHslString:function(){var a=da(k,e,g),b=p(360*a.h),c=p(100*a.s),
a=p(100*a.l);return 1==r?"hsl("+b+", "+c+"%, "+a+"%)":"hsla("+b+", "+c+"%, "+a+"%, "+r+")"},toHex:function(){return K(k,e,g)},toHexString:function(a){return"#"+K(k,e,g,a)},toRgb:function(){return{r:p(k),g:p(e),b:p(g),a:r}},toRgbString:function(){return 1==r?"rgb("+p(k)+", "+p(e)+", "+p(g)+")":"rgba("+p(k)+", "+p(e)+", "+p(g)+", "+r+")"},toName:function(){return Qa[K(k,e,g)]||!1},toFilter:function(a,b){var c=K(k,e,g,!0),f=c,h=Math.round(255*y(r)).toString(16),j=h,l=a&&a.gradientType?"GradientType = 1, ":
"";b&&(j=d(b),f=j.toHex(),j=Math.round(255*y(j.alpha)).toString(16));return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr=#"+C(h)+c+",endColorstr=#"+C(j)+f+")"},toString:function(a){a=a||this.format;var b=!1;"rgb"===a&&(b=this.toRgbString());"hex"===a&&(b=this.toHexString());"hex6"===a&&(b=this.toHexString(!0));"name"===a&&(b=this.toName());"hsl"===a&&(b=this.toHslString());"hsv"===a&&(b=this.toHsvString());return b||this.toHexString(!0)}}},da=function(c,b,a){c=t(c,255);b=t(b,255);
a=t(a,255);var d=v(c,b,a),e=u(c,b,a),g,f=(d+e)/2;if(d==e)g=e=0;else{var l=d-e,e=0.5<f?l/(2-d-e):l/(d+e);switch(d){case c:g=(b-a)/l+(b<a?6:0);break;case b:g=(a-c)/l+2;break;case a:g=(c-b)/l+4}g/=6}return{h:g,s:e,l:f}},ca=function(c,b,a){c=t(c,255);b=t(b,255);a=t(a,255);var d=v(c,b,a),e=u(c,b,a),g,f=d-e;if(d==e)g=0;else{switch(d){case c:g=(b-a)/f+(b<a?6:0);break;case b:g=(a-c)/f+2;break;case a:g=(c-b)/f+4}g/=6}return{h:g,s:0===d?0:f/d,v:d}},K=function(c,b,a,d){c=[C(p(c).toString(16)),C(p(b).toString(16)),
C(p(a).toString(16))];return!d&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")},t=function(c,b){"string"==typeof c&&(-1!=c.indexOf(".")&&1===y(c))&&(c="100%");var a="string"===typeof c&&-1!=c.indexOf("%");c=u(b,v(0,y(c)));a&&(c*=b/100);return 1E-6>J.abs(c-b)?1:1<=c?c%b/y(b):c},C=function(c){return 1==c.length?"0"+c:""+c},za=/^[\s,#]+/,Ma=/\s+$/,Na=0,J=Math,p=J.round,u=J.min,v=J.max,Q=J.random,y=
this.parseFloat;d.fromRatio=function(c){if("object"==typeof c)for(var b in c)1===c[b]&&(c[b]="1.0");return d(c)};d.equals=function(c,b){return!c||!b?!1:d(c).toRgbString()==d(b).toRgbString()};d.random=function(){return d.fromRatio({r:Q(),g:Q(),b:Q()})};d.desaturate=function(c,b){var a=d(c).toHsl();a.s-=(b||10)/100;a.s=u(1,v(0,a.s));return d(a)};d.saturate=function(c,b){var a=d(c).toHsl();a.s+=(b||10)/100;a.s=u(1,v(0,a.s));return d(a)};d.greyscale=function(c){return d.desaturate(c,100)};d.lighten=
function(c,b){var a=d(c).toHsl();a.l+=(b||10)/100;a.l=u(1,v(0,a.l));return d(a)};d.darken=function(c,b){var a=d(c).toHsl();a.l-=(b||10)/100;a.l=u(1,v(0,a.l));return d(a)};d.complement=function(c){c=d(c).toHsl();c.h=(c.h+0.5)%1;return d(c)};d.triad=function(c){var b=d(c).toHsl(),a=360*b.h;return[d(c),d({h:(a+120)%360,s:b.s,l:b.l}),d({h:(a+240)%360,s:b.s,l:b.l})]};d.tetrad=function(c){var b=d(c).toHsl(),a=360*b.h;return[d(c),d({h:(a+90)%360,s:b.s,l:b.l}),d({h:(a+180)%360,s:b.s,l:b.l}),d({h:(a+270)%
360,s:b.s,l:b.l})]};d.splitcomplement=function(c){var b=d(c).toHsl(),a=360*b.h;return[d(c),d({h:(a+72)%360,s:b.s,l:b.l}),d({h:(a+216)%360,s:b.s,l:b.l})]};d.analogous=function(c,b,a){b=b||6;a=a||30;var e=d(c).toHsl();a=360/a;c=[d(c)];e.h*=360;for(e.h=(e.h-(a*b>>1)+720)%360;--b;)e.h=(e.h+a)%360,c.push(d(e));return c};d.monochromatic=function(c,b){b=b||6;for(var a=d(c).toHsv(),e=a.h,p=a.s,a=a.v,g=[],f=1/b;b--;)g.push(d({h:e,s:p,v:a})),a=(a+f)%1;return g};d.readable=function(c,b){var a=d(c).toRgb(),e=
d(b).toRgb();return 10404<(e.r-a.r)*(e.r-a.r)+(e.g-a.g)*(e.g-a.g)+(e.b-a.b)*(e.b-a.b)};var P=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",
darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",
forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",
lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",
moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",
sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},z=d,q=P,ea={},U;for(U in q)q.hasOwnProperty(U)&&(ea[q[U]]=U);var Qa=z.hexNames=ea,x;x={rgb:RegExp("rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?"),
rgba:RegExp("rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?"),hsl:RegExp("hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?"),hsla:RegExp("hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?"),
hsv:RegExp("hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?"),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};this.tinycolor=d;e(function(){e.fn.spectrum.load&&e.fn.spectrum.processNativeColorInputs()})})(window,jQuery);