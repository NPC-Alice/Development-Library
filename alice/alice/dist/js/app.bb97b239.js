(function(t){function e(e){for(var n,i,c=e[0],l=e[1],r=e[2],p=0,d=[];p<c.length;p++)i=c[p],s[i]&&d.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,r||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"021a":function(t,e,a){"use strict";var n=a("7910"),s=a.n(n);s.a},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"1e42":function(t,e,a){},"27f4":function(t,e,a){"use strict";var n=a("f50d"),s=a.n(n);s.a},3205:function(t,e,a){"use strict";var n=a("1e42"),s=a.n(n);s.a},"4ed3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("nav-header"),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container wrapper"},[a("ul",[a("li",{on:{click:function(e){t.changeItemStatus(0)}}},[a("router-link",{staticClass:"item-active",attrs:{to:"/"}},[t._v("")])],1),a("li",{on:{click:function(e){t.changeItemStatus(1)}}},[a("router-link",{staticClass:"item-active",attrs:{to:"/write"}},[t._v("")])],1),a("li",{on:{click:function(e){t.changeItemStatus(2)}}},[a("router-link",{staticClass:"item-active",attrs:{to:"/news"}},[t._v("")])],1),a("li",{on:{click:function(e){t.changeItemStatus(3)}}},[a("router-link",{staticClass:"item-active",attrs:{to:"me"}},[t._v("")])],1)])])},c=[],l={name:"navHeader",props:{},data(){return{checkStatus:[!0,!1,!1,!1]}},methods:{changeItemStatus(t){this.checkStatus[t]?(this.updateCheckStatusBool(!1),this.checkStatus.splice(t,t-1,!1)):(this.updateCheckStatusBool(!1),this.checkStatus.splice(t,t-1,!0))},updateCheckStatusBool(t){this.checkStatus.length=0,this.checkStatus=[t,t,t,t]},onSelected(t,e){this.$emit()}}},r=l,u=(a("fa5b"),a("2877")),p=Object(u["a"])(r,i,c,!1,null,"0d4fd094",null);p.options.__file="NavHeader.vue";var d=p.exports,f=(a("f5df"),{components:{navHeader:d}}),v=f,m=(a("034f"),Object(u["a"])(v,s,o,!1,null,null,null));m.options.__file="App.vue";var h=m.exports,_=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"con"}},[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"pull-left"},[a("router-link",{attrs:{id:"blog",to:"/"}},[t._v("")])],1),a("div",{staticClass:"pull-right"},[a("router-link",{attrs:{id:"about",to:"/about"}},[t._v("")])],1)]),a("div",{staticClass:"list",attrs:{id:"page_list"}})])},b=[],C=a("1157"),k=a.n(C),y={mounted:function(){k()(document).ready(function(){k()("#blog").click(function(){k.a.ajax({url:"http://api.pjhubs.com/blog",async:!1,data:{page:"1",uid:"9609352425",nick_name:"pjhubs"},type:"get",contentType:"application/json;charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"flightHandler",success:function(t){if(666==t.msgCode)for(var e=t.msg.blogs,a=k()("#page_list"),n=0;n<e.length;n++){var s=k()('<div class="homeCell-container"></div>');console.log(e[n].masuser["nick_name"]);var o=k()('<h1 class="titleP"> '+e[n].masuser["nick_name"]+"</h1>"),i=k()('<p class="contentP"> '+e[n].content+"</p>"),c=k()('<div class="bottom"></div>'),l=k()('<div class="bottom-views"></div>'),r=k()('<p class="bottom-views-span">&#xeac1;</p>'),u=k()('<p class="bottom-views-count" style="margin: 0;font-size: 14px;"> '+e[n].read_num+"</p>"),p=k()('<p class="bottom-timeP"> '+e[n].created_time+"</p>");r.appendTo(l),u.appendTo(l),l.appendTo(c),p.appendTo(c),o.appendTo(s),i.appendTo(s),c.appendTo(s),s.appendTo(a)}else console.log(t.msg)},error:function(){console.log("出错了")}})})})}},j=y,w=(a("3205"),Object(u["a"])(j,g,b,!1,null,"70abc494",null));w.options.__file="Home.vue";var T=w.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("This is an about page")]),a("h1",[t._v("This is an about page")]),a("h1",[t._v("This is an about page")]),a("h1",[t._v("This is an about page")]),a("h1",[t._v("This is an about 2333")]),a("h1",[t._v("This is an about 4666")])])}],O=(a("727f"),{}),$=Object(u["a"])(O,x,S,!1,null,"5480aeeb",null);$.options.__file="About.vue";var E=$.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"input-container"},[a("div",{staticClass:"form-group"},[a("h1",[t._v("Alice")]),t._m(0),a("div",{staticClass:"block-edge"}),t._m(1),a("input",{staticClass:"form-control",attrs:{type:"button",id:"login",value:"登陆",name:"login"}}),t._m(2),a("p",{staticClass:"pull-right"},[t._v("忘记密码")]),a("div",{staticClass:"block-edge"}),a("div",{staticClass:"block-edge"}),a("p",{staticClass:"tips"},[t._v("没有账号？"),a("router-link",{staticClass:"navbar-link",attrs:{to:"/register"}},[t._v("立即注册")])],1)])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon"},[t._v("账 号")]),a("input",{staticClass:"form-control",attrs:{name:"uid",id:"uid_log",type:"text",autocomplete:"off"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon"},[t._v("密 码")]),a("input",{staticClass:"form-control",attrs:{name:"pw",id:"pw_log",type:"password",autocomplete:"off"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"pull-left"},[a("input",{attrs:{type:"checkbox",name:"rempas"}}),t._v("  记住密码")])}],I=(a("8237"),{mounted:function(){k()("#login").click(function(){var t=k()("#uid_log").val(),e=k()("#pw_log").val();console.log("登陆账号:",t),console.log("登陆密码(加密前):",e),k.a.ajax({url:"http://api.pjhubs.com/masuser/login",async:!1,data:{phoneNumber:t,uid:t,nick_name:"alice_"+t,sign:e,timestamp:(new Date).getTime()},type:"get",contentType:"application/json;charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"flightHandler",success:function(t){666==t.msgCode?(console.log(t.msg.masuser["uid"]+"登陆成功"),window.location.href="localhost:8080/user"):console.log(t.msg+"登陆失败")},error:function(t){alert("连接服务器失败!")}})})}}),M=I,A=(a("e4c4"),Object(u["a"])(M,P,H,!1,null,"18c1144d",null));A.options.__file="Me.vue";var B=A.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("消息")]),a("div",{staticClass:"pagestyle"},[a("div",{staticClass:"list",attrs:{id:"msg_list"}})])])}],z={mounted:function(){k()(document).ready(function(){k.a.ajax({url:"http://api.pjhubs.com/notifications",async:!1,data:{page:"1",uid:"20181228",nick_name:"alice_20181228"},type:"get",contentType:"application/json;charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"flightHandler",success:function(t){if(console.log(t),666==t.msgCode)for(var e=t.msg.notifications,a=k()("#msg_list"),n=0;n<e.length;n++){var s=k()('<div class="newsCell-container"></div>');console.log(e[n].p_uid);var o=k()('<h1 class="titleP"> '+e[n].p_uid+"</h1>"),i=k()('<p class="contentP"> '+e[n].content["content"]+"</p>"),c=(k()('<p class="contentP"> '+e[n].p_content+"</p>"),k()('<input type="submit" name="finish" value="回复" >'),k()('<div class="bottom"></div>')),l=k()('<div class="bottom-views"></div>'),r=k()('<p class="bottom-views-span">&#xeac1;</p>'),u=k()('<p class="bottom-timeP"> '+e[n].p_created_time+"</p>");r.appendTo(l),l.appendTo(c),u.appendTo(c),o.appendTo(s),i.appendTo(s),c.appendTo(s),s.appendTo(a)}else console.log(t.msg)},error:function(){console.log("出错了")}})})}},D=z,R=(a("27f4"),Object(u["a"])(D,N,J,!1,null,"30d47efc",null));R.options.__file="News.vue";var U=R.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form-group",attrs:{method:"get"}},[a("div",[a("h1",[t._v("标题")]),a("input",{staticClass:"form-control",attrs:{autocomplete:"off",name:"title",type:"text"}})]),a("div",[a("h1",[t._v("内容")]),a("textarea",{attrs:{id:"content",maxlength:"200",name:"content",rows:"10",placeholder:"分享你的心事..."}}),a("div",{staticClass:"pull-right"},[t._v(" \n        还可输入"),a("span",{staticClass:"text-count"},[t._v("200")]),t._v("字\n      ")]),a("input",{staticClass:"form-control",attrs:{autocomplete:"off",id:"publish",type:"button",name:"finish",value:"发布"}})])]),a("div",{staticClass:"footer"})])}],F={mounted:function(){k()("#content").keyup(function(){var t=this.value.length;k()(".text-count").text(200-t)}),k()("#publish").click(function(){var t=k()("#content").val();k.a.ajax({url:"http://api.pjhubs.com/blog/createBlog",async:!1,data:{uid:"6496237762",nick_name:"alice_20181228",content:t},type:"get",contentType:"application/json;charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"flightHandler",success:function(t){666==t.msgCode?alert(t.msg+", 去主页查看"):console.log("uid20181228发布失败, 原因"+t.msg)},error:function(){console.log("出错了")}})})}},G=F,K=(a("b73e"),Object(u["a"])(G,W,q,!1,null,"2da7c0cd",null));K.options.__file="Write.vue";var L=K.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"input-container"},[a("div",{staticClass:"form-group"},[a("h1",[t._v("Alice")]),t._m(0),a("div",{staticClass:"block-edge"}),t._m(1),a("input",{staticClass:"form-control",attrs:{type:"button",value:"注册",id:"register",name:"register"}}),a("div",{staticClass:"block-edge"}),a("div",{staticClass:"block-edge"}),a("p",{staticClass:"tips"},[t._v("已有账号？"),a("router-link",{staticClass:"navbar-link",attrs:{to:"/me"}},[t._v("返回登陆")])],1)])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon"},[t._v("账 号")]),a("input",{staticClass:"form-control",attrs:{id:"uid",type:"text",autocomplete:"off",placeholder:"请输入手机号"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon"},[t._v("密 码")]),a("input",{staticClass:"form-control",attrs:{id:"pw",type:"password",autocomplete:"off"}})])}],X={mounted:function(){k()("#register").click(function(){var t=k()("#uid").val(),e=k()("#pw").val();console.log("注册账号:",t),console.log("注册密码:",e),k.a.ajax({url:"http://api.pjhubs.com/masuser/createmasuser",async:!1,data:{phoneNumber:t,uid:t,nick_name:"alice_"+t,password:e},type:"get",contentType:"application/json;charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"flightHandler",success:function(t){666==t.msgCode?console.log(t.msg.masuser["uid"]+"注册成功"):alert(t.msg)},error:function(t){alert("服务器连接失败")}})})}},Y=X,Z=(a("021a"),Object(u["a"])(Y,Q,V,!1,null,"520cc792",null));Z.options.__file="Register.vue";var tt,et,at=Z.exports,nt=(a("a9d9"),{}),st=Object(u["a"])(nt,tt,et,!1,null,"6ea6be6f",null);st.options.__file="User.vue";var ot=st.exports;n["a"].use(_["a"]);var it=new _["a"]({routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:E},{path:"/me",name:"me",component:B},{path:"/news",name:"news",component:U},{path:"/write",name:"write",component:L},{path:"/register",name:"register",component:at},{path:"/user",name:"user",component:ot}]}),ct=a("2f62");n["a"].use(ct["a"]);var lt=new ct["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:it,store:lt,render:function(t){return t(h)}}).$mount("#app")},"727f":function(t,e,a){"use strict";var n=a("4ed3"),s=a.n(n);s.a},7910:function(t,e,a){},"7c6a":function(t,e,a){},"85ec":function(t,e,a){},"92e8":function(t,e,a){},a9d9:function(t,e,a){"use strict";var n=a("aada"),s=a.n(n);s.a},aada:function(t,e,a){},b73e:function(t,e,a){"use strict";var n=a("92e8"),s=a.n(n);s.a},e4c4:function(t,e,a){"use strict";var n=a("f8b7"),s=a.n(n);s.a},f50d:function(t,e,a){},f8b7:function(t,e,a){},fa5b:function(t,e,a){"use strict";var n=a("7c6a"),s=a.n(n);s.a}});
//# sourceMappingURL=app.bb97b239.js.map