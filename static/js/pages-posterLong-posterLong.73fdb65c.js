(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-posterLong-posterLong"],{"0130":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".container999[data-v-6170ef5e]{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""]),t.exports=e},"0171":function(t,e,n){"use strict";n.r(e);var r=n("eed0"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"039b":function(t,e,n){"use strict";n.r(e);var r=n("c19c"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"23dc7":function(t,e,n){"use strict";var r=n("5c04"),o=n.n(r);o.a},2633:function(t,e,n){"use strict";n.r(e);var r=n("83ac"),o=n("039b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("23dc7");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"6170ef5e",null,!1,r["a"],a);e["default"]=s.exports},"38f8":function(t,e,n){"use strict";var r=n("ec72"),o=n.n(r);o.a},"5c04":function(t,e,n){var r=n("0130");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("2e63a36c",r,!0,{sourceMap:!1,shadowMode:!1})},6634:function(t,e,n){"use strict";n.r(e);var r=n("d59f"),o=n("0171");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("38f8");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"19a568bd",null,!1,r["a"],a);e["default"]=s.exports},"83ac":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container999"},[n("v-uni-button",{staticStyle:{color:"white",background:"linear-gradient(to left, #f58365, #ff188a)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPost.apply(void 0,arguments)}}},[t._v("打开长表单海报")]),t.posterShow?n("poster",{ref:"poster",on:{closePost:function(e){arguments[0]=e=t.$handleEvent(e),t.closePost.apply(void 0,arguments)}}}):t._e()],1)},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=y;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},x={};x[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==r&&o.call(m,a)&&(x=m);var w=W.prototype=T.prototype=Object.create(x);L.prototype=w.constructor=W,W.constructor=L,W[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,W):(t.__proto__=W,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},P(X.prototype),X.prototype[c]=function(){return this},l.AsyncIterator=X,l.async=function(t,e,n,r){var o=new X(y(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(H),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),H(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;H(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function y(t,e,n,r){var o=e&&e.prototype instanceof T?e:T,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=k(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function T(){}function L(){}function W(){}function P(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function X(t){function e(n,r,i,a){var c=b(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function k(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return z()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function H(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:z}}function z(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b9da:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bg[data-v-19a568bd]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:998;background-color:rgba(0,0,0,.8)}.fixedBox[data-v-19a568bd]{width:100%;height:%?100?%;position:fixed;bottom:%?30?%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:1000}.fixedBox .boxLeft[data-v-19a568bd],\r\n.fixedBox .boxRight[data-v-19a568bd]{width:50%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:1000;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.fixedBox .boxLeft .flexBtn[data-v-19a568bd],\r\n.fixedBox .boxRight .flexBtn[data-v-19a568bd]{position:relative;z-index:1000;width:%?200?%;height:%?60?%;text-align:center;line-height:%?55?%;font-size:%?24?%;border-bottom:%?6?% #f58365 solid;border-radius:%?32?%;color:#fff;background:-webkit-linear-gradient(right,#f58365,#ff188a);background:linear-gradient(270deg,#f58365,#ff188a)}.btnHover[data-v-19a568bd]{height:%?55?%!important;border-bottom:0 #f6be3c solid!important;-webkit-transform:translateY(3px) translateZ(0)!important;transform:translateY(3px) translateZ(0)!important}.isCan[data-v-19a568bd]{border-radius:10px;z-index:999;position:fixed;left:0;top:-99999px;margin:auto;background-size:100%}',""]),t.exports=e},c19c:function(t,e,n){"use strict";var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("6634")),i={components:{poster:o.default},data:function(){return{posterShow:!1}},onLoad:function(){},methods:{closePost:function(){this.posterShow=!1},openPost:function(){var t=this,e={content:"动态参数,URL等,URL需使用https并添加download域名,预览未添加域名需要打开调试者模式",title1Top:100,title1:"我是标题1",form1Title:[{name:"区域1",sWidth:.15},{name:"名称1",sWidth:.25},{name:"类别",sWidth:.55},{name:"联系方式1",sWidth:.7}],form2Title:[{name:"区域1",sWidth:.15},{name:"名称1",sWidth:.25},{name:"类别",sWidth:.55},{name:"联系方式1",sWidth:.7}],form1:[{0:"区域预取",1:"名称名称",2:"待定",3:"d联系方式121221"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"d联系方式121222"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"}],title2:"我是标题2",form2:[{0:"区域预取",1:"盛大的",2:"待定",3:"地方撒旦3333"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"}]};this.posterShow=!0,uni.showLoading({title:"绘制ing...",mask:!0}),setTimeout((function(){t.$refs.poster.drawNew(e)}),10)}}};e.default=i},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}},d59f:function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"posterContainer"},[n("v-uni-canvas",{staticClass:"isCan",style:{width:t.cansWidth+"px",height:t.cansHeight+"px"},attrs:{"canvas-id":"zwyPoster"}}),t.tempImgShow?n("v-uni-scroll-view",{staticStyle:{height:"90vh",width:"100vw",position:"fixed",left:"0",top:"0"},attrs:{"scroll-y":"true"}},[n("v-uni-image",{style:{width:t.cansWidth+"px",height:t.cansHeight+"px"},attrs:{src:t.tempImg},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.longpress.apply(void 0,arguments)}}})],1):t._e(),t.tempImgShow?n("v-uni-view",{staticClass:"fixedBox"},[n("v-uni-view",{staticClass:"boxLeft"},[n("v-uni-button",{staticClass:"flexBtn btnLeft",attrs:{"hover-class":"btnHover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.longpress.apply(void 0,arguments)}}},[t._v("长按图片保存")])],1),n("v-uni-view",{staticClass:"boxRight"},[n("v-uni-button",{staticClass:"flexBtn btnRight",attrs:{"hover-class":"btnHover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeCans.apply(void 0,arguments)}}},[t._v("关闭")])],1)],1):t._e()],1)},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},ec72:function(t,e,n){var r=n("b9da");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("0526b28f",r,!0,{sourceMap:!1,shadowMode:!1})},eed0:function(t,e,n){"use strict";var r=n("ee27");n("4160"),n("c975"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("c964")),i="",a={props:{},data:function(){return{tempImgShow:!1,tempImg:"",cansWidth:270,cansHeight:430}},created:function(){this.ctx=uni.createCanvasContext("zwyPoster",this);var t=this;uni.getSystemInfo({success:function(e){t.cansHeight=e.screenHeight,t.cansWidth=e.windowWidth}})},computed:{today:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,n=(new Date).getDate(),r=t+"年"+e+"月"+n+"日";return r}},methods:{drawNew:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.cansHeight=20*(t.form1.length+t.form2.length)+t.title1Top+200+100,n.next=3,e.drawBg({url:"/static/can_bg.jpg",sLeft:0,sTop:0,sWidth:1,sHeight:1});case 3:return i=t.title1Top,n.next=6,e.drawText({text:t.title1,sLeft:"center",sTop:t.title1Top,fontSize:12,color:"#5A390F"});case 6:return n.next=8,e.drawForm(t.form1,t.form1Title);case 8:return n.next=10,e.drawText({text:t.title2,sLeft:"center",sTop:i,fontSize:12,color:"#5A390F"});case 10:return n.next=12,e.drawForm(t.form2,t.form2Title);case 12:return n.next=14,e.drawBg({url:"/static/scan.jpg",sLeft:.1,sTop:i,sWidth:100,sHeight:100,r:5});case 14:return n.next=16,e.drawText({text:["扫码体验","加入我们把","12345手动"],sLeft:.42,sTop:i+30,fontSize:10,color:"#5A390F",lineHeight:12});case 16:return n.next=18,e.drawPara({para:"恭喜您获得了5元兰博基尼优惠劵！兑换码XXXX高1亮1文1字XXXXXX高2亮2文2字XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",fontSize:10,sLeft:.56,sTop:.85,titleHeight:16,sMaxWidth:.34,redWord:["高1亮1文1字","高2亮2文2字","兰博基尼优惠劵"],color:"#5A390F",redColor:"#DD524D",bold:!1});case 18:e.saveCans();case 19:case"end":return n.stop()}}),n)})))()},longpress:function(){uni.saveImageToPhotosAlbum({filePath:this.tempImg,success:function(t){uni.showToast({title:"保存相册成功"}),console.log("save success")},fail:function(t){console.log(t),"saveImageToPhotosAlbum:fail auth deny"==t.errMsg&&uni.showModal({title:"您需要授权相册权限",success:function(t){t.confirm&&uni.openSetting({success:function(t){},fail:function(t){console.log(t)}})}})}})},measureText:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(t){t=String(t);t=t.split("");var n=0;return t.forEach((function(t){/[a-zA-Z]/.test(t)?n+=7:/[0-9]/.test(t)?n+=5.5:/\./.test(t)?n+=2.7:/-/.test(t)?n+=3.25:/[\u4e00-\u9fa5]/.test(t)?n+=10:/\(|\)/.test(t)?n+=3.73:/\s/.test(t)?n+=2.5:/%/.test(t)?n+=8:n+=10})),n*e/10}(t)},closeCans:function(){this.$emit("closePost")},drawForm:function(t,e){var n=this;return new Promise((function(r,o){for(var a=20,c=.9*n.cansWidth,s=a*(t.length+2)+i,u={},l=0;l<e.length+1;l++)0==l?u[0]=.1*n.cansWidth:l==e.length?u[l]=.9*n.cansWidth:u[l]=n.cansWidth*e[l]["sWidth"];n.ctx.lineWidth=.5,n.ctx.setFontSize(8),n.ctx.setTextBaseline("top");for(l=0;l<=e.length+1;l++)n.ctx.moveTo(u[l],i+a),n.ctx.lineTo(u[l],s);for(l=0;l<=t.length+1;l++){var f=a*(l+1)+i;if(n.ctx.moveTo(u[0],f),n.ctx.lineTo(c,f),l<=t.length)if(0==l)for(var h=0;h<e.length;h++)n.ctx.fillText(e[h].name,u[h]+8,f+8);else{var d=l-1;for(var p in t[d])n.ctx.fillText(t[d][p],u[p]+8,f+8)}}n.ctx.stroke(),n.ctx.draw(!0),setTimeout((function(){i=s+30,r()}),50)}))},saveCans:function(){console.log("保存");var t=1.5;t=1;var e=this;uni.canvasToTempFilePath({x:0,y:0,width:e.cansWidth*t,height:e.cansHeight*t,destWidth:e.cansWidth*t*2,destHeight:e.cansHeight*t*2,canvasId:"zwyPoster",success:function(t){uni.hideLoading(),setTimeout((function(){e.tempImgShow=!0,e.tempImg=t.tempFilePath}),100)},fail:function(t){uni.hideLoading(),console.log(t)}},this)},circleImg:function(t,e,n,r){var o=this;return new Promise((function(i,a){uni.getImageInfo({src:t,success:function(t){e=Math.ceil(o.cansWidth*e),n=Math.ceil(o.cansHeight*n),r=r>1?r:Math.ceil(o.cansWidth*r),o.ctx.save();var a=2*r,c=e+r,s=n+r;o.ctx.arc(c,s,r,0,2*Math.PI),o.ctx.clip(),o.ctx.drawImage(t.path,e,n,a,a),o.ctx.restore(),o.ctx.draw(!0),i()}})}))},drawPara:function(t){var e=this;return new Promise((function(n,r){var o,i={};if(t.redWord.length>0)for(var a=0;a<t.redWord.length;a++){var c=0,s=void 0;while((s=t.para.indexOf(t.redWord[a],c))>-1){i[s]=!0;for(var u=0;u<t.redWord[a].length;u++)i[s+u]=!0;c=s+1}}e.ctx.font="normal normal ".concat(t.fontSize,"px sans-serif"),e.ctx.setFillStyle(t.color),o="center"==t.sLeft?e.cansWidth*(.5-t.sMaxWidth/2)-t.fontSize:t.sLeft*e.cansWidth;var l=Math.floor(e.cansWidth*t.sMaxWidth);console.log(t.sMaxWidth),console.log(l);var f=t.para.split(""),h="",d=0,p=0;for(a=0;a<f.length;a++)h+=a>0?f[a-1]:f[0],p=e.measureText(h,t.fontSize),p>l&&(d++,h="占",p=e.measureText(h,t.fontSize)),i[a]&&(e.ctx.save(),t.bold&&(e.ctx.font="normal bold ".concat(t.fontSize,"px sans-serif")),e.ctx.setFillStyle(t.redColor)),e.ctx.fillText(f[a],o+p,t.sTop*e.cansHeight+t.titleHeight*d),e.ctx.restore();e.ctx.draw(!0),setTimeout((function(){n()}),50)}))},drawBg:function(t){var e=this;return new Promise((function(n,r){var o,i,a,c,s;i=t.sTop<=1?e.cansHeight*t.sTop:t.sTop,a=t.sWidth<=1?e.cansWidth*t.sWidth:t.sWidth,c=t.sHeight<=1?e.cansHeight*t.sHeight:t.sHeight,o="center"==t.sLeft?t.sWidth<=1?e.cansWidth*(.5-t.sWidth/2):.5*e.cansWidth-t.sWidth/2:e.cansWidth*t.sLeft,t.r?(s=t.r,e.ctx.save(),a<2*s&&(s=a/2),c<2*s&&(s=c/2),e.ctx.beginPath(),e.ctx.moveTo(o+s,i),e.ctx.arcTo(o+a,i,o+a,i+c,s),e.ctx.arcTo(o+a,i+c,o,i+c,s),e.ctx.arcTo(o,i+c,o,i,s),e.ctx.arcTo(o,i,o+a,i,s),e.ctx.closePath(),e.ctx.clip(),e.ctx.drawImage(t.url,o,i,a,c),e.ctx.restore(),e.ctx.draw(!0)):(e.ctx.drawImage(t.url,o,i,a,c),e.ctx.draw(!0)),console.log(t.url),setTimeout((function(){n()}),50)}))},drawWebBgTest:function(t){var e=this;return new Promise((function(n,r){uni.getImageInfo({src:t.url,success:function(r){var o,i,a,c,s;i=e.cansHeight*t.sTop,a=e.cansWidth*t.sWidth,c=t.sHeight?e.cansHeight*t.sHeight:a,o="center"==t.sLeft?e.cansWidth*(.5-t.sWidth/2):e.cansWidth*t.sLeft,t.r?(s=t.r,e.ctx.save(),e.ctx.beginPath(),e.ctx.arc(o+s,i+s,s,Math.PI,1.5*Math.PI),e.ctx.moveTo(o+s,i),e.ctx.lineTo(o+a-s,i),e.ctx.lineTo(o+a,i+s),e.ctx.arc(o+a-s,i+s,s,1.5*Math.PI,2*Math.PI),e.ctx.lineTo(o+a,i+c-s),e.ctx.lineTo(o+a-s,i+c),e.ctx.arc(o+a-s,i+c-s,s,0,.5*Math.PI),e.ctx.lineTo(o+s,i+c),e.ctx.lineTo(o,i+c-s),e.ctx.arc(o+s,i+c-s,s,.5*Math.PI,Math.PI),e.ctx.lineTo(o,i+s),e.ctx.lineTo(o+s,i),e.ctx.closePath(),e.ctx.clip(),e.ctx.drawImage(r.path,o,i,a,c),e.ctx.restore(),e.ctx.draw(!0)):(e.ctx.drawImage(r.path,o,i,a,c),e.ctx.draw(!0)),n()}})}))},drawText:function(t){var e=this;return new Promise((function(n,r){var o;if(e.ctx.save(),t.bold&&(e.ctx.font="normal bold ".concat(t.fontSize,"px sans-serif")),e.ctx.setFillStyle(t.color),e.ctx.setFontSize(t.fontSize),"center"==t.sLeft){var i=e.measureText(t.text,t.fontSize);o=.5*e.cansWidth-i/2}else o=t.sLeft<=1?t.sLeft*e.cansWidth:t.sLeft;t.sTop;if(t.sTop<=1&&(t.sTop=t.sTop*e.cansHeight),t.text instanceof Array){t.lineHeight||(t.lineHeight=t.fontSize+2),console.log("我是数组",t.text);for(var a=0;a<t.text.length;a++)e.ctx.fillText(t.text[a],o,t.sTop+t.lineHeight*a)}else console.log("我是字符串",t.text),e.ctx.fillText(t.text,o,t.sTop);e.ctx.draw(!0),e.ctx.restore(),setTimeout((function(){n()}),50)}))}}};e.default=a}}]);