(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"01af":function(e,t,r){"use strict";r("357d")},"034f":function(e,t,r){"use strict";r("85ec")},"05ac":function(e,t,r){"use strict";r("155f")},"080f":function(e,t,r){},"10ec":function(e,t,r){"use strict";r("72a3")},1224:function(e,t,r){"use strict";r("fe45")},"155f":function(e,t,r){},"19ae":function(e,t,r){"use strict";r("1ef3")},"1ef3":function(e,t,r){},"32aa":function(e,t,r){"use strict";r("db8c")},"357d":function(e,t,r){},3921:function(e,t,r){"use strict";r("5ebd")},"4dd0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,a,s,i,o,c,u,l,h,d,m,p,f,v,b,g,j,O,y,w,C,k,_,T,x,$,P,R,N,E,U,A,D,S,F,M,L,I,q,J,z,H,W,Z,B,V,G,K,Q,X,Y,ee,te,re,ne,ae=r("2b0e"),se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"home-screen"}},[r("MainHeader"),r("router-view",{attrs:{id:"router-block"}})],1)])},ie=[],oe=r("d4ec"),ce=r("bee2"),ue=r("262e"),le=r("2caf"),he=r("1b40"),de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"main-header"}},[r("h1",{staticClass:"pointer logo",on:{click:function(t){return e.goToHome()}}},[e._v("ART FORUM")]),null!==this.$store.state.user.email?r("div",[r("span",{attrs:{id:"logout-button"}},[r("span",{on:{click:e.logout}},[e._v("Logout "+e._s(this.$store.state.user.name)+" ")]),"admin"===this.$store.state.user.userRole?r("span",{on:{click:function(t){return e.goToAdmin()}}},[e._v(" | Admin Powers")]):e._e()])]):r("div",[r("span",{attrs:{id:"login-button"},on:{click:e.login}},[e._v("Login |")]),r("span",{attrs:{id:"register-button"},on:{click:e.register}},[e._v("Register")])])])])},me=[],pe=(n=Object(he["a"])(),n(a=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){return Object(oe["a"])(this,r),t.apply(this,arguments)}return Object(ce["a"])(r,[{key:"goToHome",value:function(){"/"!==this.$route.path&&this.$router.push("/")}},{key:"goToAdmin",value:function(){"/admin"!==this.$route.path&&this.$router.push("/admin")}},{key:"login",value:function(){this.$router.push("/login")}},{key:"register",value:function(){this.$router.push("/register")}},{key:"logout",value:function(){this.$store.dispatch("logout"),"/"!==this.$route.path&&this.$router.push("/")}}]),r}(he["c"]))||a),fe=pe,ve=(r("01af"),r("2877")),be=Object(ve["a"])(fe,de,me,!1,null,"b9901e0a",null),ge=be.exports,je=(s=Object(he["a"])({components:{MainHeader:ge}}),s(i=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){return Object(oe["a"])(this,r),t.apply(this,arguments)}return Object(ce["a"])(r,[{key:"created",value:function(){this.$store.dispatch("fetchLoggedInUser")}}]),r}(he["c"]))||i),Oe=je,ye=(r("034f"),Object(ve["a"])(Oe,se,ie,!1,null,null,null)),we=ye.exports,Ce=r("8c4f"),ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("p",{staticClass:"directory"},[e._v("All Discussions")]),e._l(e.forumTopics,(function(t,n){return r("div",{key:n,staticClass:"pointer",attrs:{id:"forum-topic"},on:{click:function(r){return e.goToSubForum(t)}}},[r("h3",[e._v(e._s(t))])])}))],2)},_e=[],Te=(o=Object(he["a"])(),o(c=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){return Object(oe["a"])(this,r),t.apply(this,arguments)}return Object(ce["a"])(r,[{key:"goToSubForum",value:function(e){this.$router.push("/forum/".concat(e))}},{key:"forumTopics",get:function(){return this.$store.state.forumTopics}}]),r}(he["c"]))||c),xe=Te,$e=(r("ef6e"),Object(ve["a"])(xe,ke,_e,!1,null,"561a90ef",null)),Pe=$e.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("form",{staticClass:"login-block",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("h3",{staticClass:"login-h3"},[e._v("Login")]),e.errors.length?r("p",[r("ul",e._l(e.errors,(function(t,n){return r("p",{key:n,staticClass:"red"},[e._v(e._s(t+" "))])})),0)]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-box",attrs:{type:"email",id:"email",name:"email",placeholder:"Enter Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-box",attrs:{type:"password",id:"password",name:"password",placeholder:"Enter Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("button",{staticClass:"input-box",attrs:{id:"submit"}},[e._v("Login")])])])},Ne=[],Ee=(r("99af"),r("96cf"),r("1da1")),Ue=r("257e"),Ae=r("ade3"),De=(u=Object(he["a"])(),u((h=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(Ae["a"])(Object(Ue["a"])(e),"email",null),Object(Ae["a"])(Object(Ue["a"])(e),"password",null),Object(Ae["a"])(Object(Ue["a"])(e),"errors",[]),e}return Object(ce["a"])(r,[{key:"checkForm",value:function(){if(this.errors=[],null===this.email?this.errors.push("Email required."):this.validEmail(this.email)||this.errors.push("Valid email required."),null===this.password&&this.errors.push("Password required."),!this.errors.length)return!0}},{key:"validEmail",value:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}},{key:"login",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.checkForm(),t&&(r={email:this.email,password:this.password},this.$store.dispatch("login",r).then(this.redirect()));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"redirect",value:function(){this.$router.push("/")}}]),r}(he["c"]),l=h))||l),Se=De,Fe=(r("9588"),Object(ve["a"])(Se,Re,Ne,!1,null,"601c5806",null)),Me=Fe.exports,Le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"directory"},[r("span",{staticClass:"pointer",on:{click:e.goToHome}},[e._v("All Discussions > ")]),e._v(" "+e._s(this.$route.path.substring(1).split("/")[1].replace("%20"," "))+" ")]),r("div",{attrs:{id:""}},e._l(e.threads,(function(e,t){return r("Thread",{key:t,staticClass:"pointer",attrs:{thread:e}})})),1),null!==this.$store.state.user.userRole?r("h4",{staticClass:"pointer create-new-thread-button",on:{click:e.toggleThreadCreation}},[e._v(" Create New Discussion ")]):e._e(),r("div",[e.isCreatingNewThread?r("CreateNewThread",{staticClass:"start-new-thread"}):e._e()],1)])},Ie=[],qe=(r("e439"),r("d3b7"),r("ac1f"),r("1276"),r("63ae")),Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{on:{click:function(t){return e.goToThreadPage(e.thread.threadsId)}}},[r("div",{attrs:{id:"thread"}},[r("h4",{staticClass:"thread-title"},[e._v(" "+e._s(e.thread.title)+" "),r("span",{staticClass:"last-updated"},[e._v(e._s(e.calculateTimePast)+" "),e.thread.isClosed?r("font-awesome-icon",{staticClass:"red",attrs:{icon:["fas","lock"]}}):e._e()],1)]),r("h5",{staticClass:"thread-username"},[e._v(e._s(e.thread.name))])])])},ze=[],He=r("6b7b"),We=(r("f890"),d=Object(he["a"])(),m=Object(he["b"])(),d((b=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(He["a"])(Object(Ue["a"])(e),"thread",v,Object(Ue["a"])(e)),e}return Object(ce["a"])(r,[{key:"goToThreadPage",value:function(e){this.$store.commit("setCurrentThread",this.$props.thread),this.$router.push("".concat(this.$router.currentRoute.path,"/").concat(e))}},{key:"calculateTimePast",get:function(){var e=new Date;e=e.getTime();var t=this.$props.thread.timeUpdated,r=e-t;r/=1e3;var n=Math.floor(r%60);r/=60;var a=Math.floor(r%60);r/=60;var s=Math.floor(r%24),i=Math.floor(r/24);return i>=1?i+" days ago":s<=23&&s>=1?s+" hours ago":a>=1?a+" minutes ago":n+" seconds ago"}}]),r}(he["c"]),f=b,v=Object(qe["a"])(f.prototype,"thread",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p),Ze=We,Be=(r("77e6"),Object(ve["a"])(Ze,Je,ze,!1,null,"1908ca08",null)),Ve=Be.exports,Ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"create-new-thread"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"title-input",attrs:{type:"text",required:"",placeholder:"Enter a title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"content-input",attrs:{required:"",placeholder:"Say something"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),e._v(" "),r("input",{staticClass:"submit-new-thread",attrs:{type:"submit",value:"Post New Discussion"}})])])},Ke=[],Qe=(g=Object(he["a"])(),g((O=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(Ae["a"])(Object(Ue["a"])(e),"title",""),Object(Ae["a"])(Object(Ue["a"])(e),"content",""),e}return Object(ce["a"])(r,[{key:"submit",value:function(){var e=new Date,t=this.$route.path.substring(1).split("/")[1],r={title:this.title,content:this.content,timeCreated:e.getTime(),timeUpdated:e.getTime(),subforum:t,userId:this.$store.state.user.id};this.createNewThread(r),this.$router.push("/")}},{key:"createNewThread",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:r=e.sent,r||console.log("Failed.");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(he["c"]),j=O))||j),Xe=Qe,Ye=(r("32aa"),Object(ve["a"])(Xe,Ge,Ke,!1,null,"130be7d8",null)),et=Ye.exports,tt=(y=Object(he["a"])({components:{Thread:Ve,CreateNewThread:et}}),w=Object(he["d"])("threads"),y((_=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(Ae["a"])(Object(Ue["a"])(e),"isCreatingNewThread",e.$store.state.isCreatingNewThread),Object(Ae["a"])(Object(Ue["a"])(e),"threads",null),e}return Object(ce["a"])(r,[{key:"onChange",value:function(e){this.threads=e}},{key:"goToHome",value:function(){this.$router.push("/")}},{key:"toggleThreadCreation",value:function(){this.isCreatingNewThread=!this.isCreatingNewThread}},{key:"updateThreads",value:function(e){this.threads=e}},{key:"fetchThreads",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads/specific/".concat(this.$route.path.substring(1).split("/")[1]));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.updateThreads(t);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchThreads()}}]),r}(he["c"]),k=_,Object(qe["a"])(k.prototype,"onChange",[w],Object.getOwnPropertyDescriptor(k.prototype,"onChange"),k.prototype),C=k))||C),rt=tt,nt=(r("1224"),Object(ve["a"])(rt,Le,Ie,!1,null,"7bf9fbec",null)),at=nt.exports,st=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"thread-page"}},[r("p",{staticClass:"directory"},[r("span",{staticClass:"pointer",on:{click:e.goToHome}},[e._v("All Discussions > ")]),r("span",{staticClass:"pointer",on:{click:e.goToCategory}},[e._v(" "+e._s(e.currentCategory)+" > ")]),r("b",[e._v(e._s(this.currentThread.title))])]),r("div",{staticClass:"current-thread shadow"},[r("div",{staticClass:"comment-header"},[r("font-awesome-icon",{attrs:{icon:["fas","user-secret"]}}),r("span",{staticClass:"comment-user"},[e._v(e._s(this.currentThread.name))]),r("span",{staticClass:"user-role"},[e._v(" ( "+e._s(this.currentThread.userRole)+" ) ")]),r("span",{staticClass:"comment-date"},[e._v(" "+e._s(e.calculateTimePast))]),e.hasPermission?r("span",[e.isThreadClosed?e._e():r("font-awesome-icon",{staticClass:"close-thread pointer",attrs:{icon:["fas","times"]},on:{click:e.closeThread}})],1):e._e(),e.isThreadClosed?r("font-awesome-icon",{staticClass:"close-thread",attrs:{icon:["fas","lock"]}}):e._e()],1),r("h2",{staticClass:"thread-title"},[e._v(e._s(e.currentThread.title))]),r("p",{staticClass:"thread-desc"},[e._v(e._s(e.currentThread.content))])]),r("div",[r("div",{staticClass:"comments-bar"},[r("p",[e._v(" "+e._s(null!==this.comments&&0!==this.comments.length?"Comments":"Be the first to comment!")+" ")])]),e._l(e.comments,(function(t,n){return r("Comment",{key:n,attrs:{comment:t,isLocked:e.isThreadClosed}})}))],2),e.isThreadClosed||null===e.userRole?e._e():r("div",[r("h4",{staticClass:"pointer create-new-comment-button",on:{click:e.toggleCommentCreation}},[e._v(" Add a reply ")])]),r("div",[e.isCreatingNewComment?r("CreateNewComment"):e._e()],1)])},it=[],ot=(r("a4d3"),r("e01a"),r("caad"),r("2532"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{"shadow warning":e.comment.isWarning,shadow:!e.comment.isWarning},attrs:{id:"comment"}},[r("div",{staticClass:"comment-header"},[r("font-awesome-icon",{attrs:{icon:["fas","user-secret"]}}),r("span",{staticClass:"comment-user"},[e._v(e._s(e.comment.name)+" "),r("span",{staticClass:"user-role"},[e._v("| "+e._s(e.comment.userRole)+" ")])]),r("span",{staticClass:"comment-date"},[e._v(e._s(e.calculateTimePast))]),e.hasPermission?r("span",[e.isLocked?e._e():r("font-awesome-icon",{staticClass:"delete-comment pointer",attrs:{icon:["fas","times"]},on:{click:function(t){return e.deleteThisComment(e.comment.commentsId)}}})],1):e._e(),r("p",{staticClass:"comment-content"},[e._v(e._s(e.comment.content))])],1)])}),ct=[],ut=(T=Object(he["a"])(),x=Object(he["b"])(),$=Object(he["b"])(),T((U=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(He["a"])(Object(Ue["a"])(e),"comment",N,Object(Ue["a"])(e)),Object(He["a"])(Object(Ue["a"])(e),"isLocked",E,Object(Ue["a"])(e)),Object(Ae["a"])(Object(Ue["a"])(e),"hasPermission",!1),Object(Ae["a"])(Object(Ue["a"])(e),"userRole",e.$store.state.user.userRole),Object(Ae["a"])(Object(Ue["a"])(e),"userDescription",e.$store.state.user.description),Object(Ae["a"])(Object(Ue["a"])(e),"currentCategory",e.$route.path.substring(1).split("/")[1]),e}return Object(ce["a"])(r,[{key:"checkPermissions",value:function(){this.userDescription&&this.userDescription.includes(this.currentCategory)||"admin"===this.userRole?this.hasPermission=!0:this.hasPermission=!1}},{key:"deleteThisComment",value:function(e){this.deleteComment(e),this.$router.push("/forum/".concat(this.currentCategory))}},{key:"deleteComment",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/comments/".concat(t),{method:"DELETE"});case 2:return r=e.sent,e.next=5,r.json();case 5:r=e.sent,r||console.log("Failed.");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.checkPermissions()}},{key:"calculateTimePast",get:function(){var e=new Date;e=e.getTime();var t=this.$props.comment.date,r=e-t;r/=1e3;var n=Math.floor(r%60);r/=60;var a=Math.floor(r%60);r/=60;var s=Math.floor(r%24),i=Math.floor(r/24);return i>=1?i+" days ago":s<=23&&s>=1?s+" hours ago":a>=1?a+" minutes ago":n+" seconds ago"}}]),r}(he["c"]),R=U,N=Object(qe["a"])(R.prototype,"comment",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=Object(qe["a"])(R.prototype,"isLocked",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=R))||P),lt=ut,ht=(r("3921"),Object(ve["a"])(lt,ot,ct,!1,null,"22636298",null)),dt=ht.exports,mt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"create-new-comment"}},[r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"content-input",attrs:{required:"",placeholder:"Say something"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),e._v(" "),r("input",{staticClass:"submit-new-comment",attrs:{type:"submit",value:"Post Comment"},on:{click:e.submit}}),e.hasPermission?r("input",{staticClass:"submit-new-warning",attrs:{type:"submit",value:"Post as a Warning"},on:{click:e.submitWarning}}):e._e()])])},pt=[],ft=(A=Object(he["a"])(),A((S=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(Ae["a"])(Object(Ue["a"])(e),"content",""),Object(Ae["a"])(Object(Ue["a"])(e),"userRole",e.$store.state.user.userRole),Object(Ae["a"])(Object(Ue["a"])(e),"userDescription",e.$store.state.user.description),Object(Ae["a"])(Object(Ue["a"])(e),"currentCategory",e.$route.path.substring(1).split("/")[1]),Object(Ae["a"])(Object(Ue["a"])(e),"hasPermission",!1),e}return Object(ce["a"])(r,[{key:"checkPermissions",value:function(){"moderator"===this.userRole&&this.userDescription.includes(this.currentCategory)||"admin"===this.$store.state.user.userRole?this.hasPermission=!0:this.hasPermission=!1}},{key:"submit",value:function(){if(""!==this.content){var e=new Date,t=this.$route.path.substring(1).split("/")[2],r={content:this.content,date:e.getTime(),threadId:t,userId:this.$store.state.user.id,isWarning:0};this.createNewComment(r),this.updateThread(t,r.date),this.$router.push("/forum/".concat(this.currentCategory))}}},{key:"submitWarning",value:function(){var e=new Date,t=this.$route.path.substring(1).split("/")[2],r={content:this.content,date:e.getTime(),threadId:t,userId:this.$store.state.user.id,isWarning:1};this.createNewComment(r),this.updateThread(t,r.date),this.$router.push("/forum/".concat(this.currentCategory))}},{key:"createNewComment",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:r=e.sent,r||console.log("Failed.");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateThread",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={timeUpdated:r},e.next=3,fetch("/api/threads/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,a||console.log("Failed.");case 8:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.checkPermissions()}}]),r}(he["c"]),D=S))||D),vt=ft,bt=(r("05ac"),Object(ve["a"])(vt,mt,pt,!1,null,"232a1f9c",null)),gt=bt.exports,jt=(F=Object(he["a"])({components:{Comment:dt,CreateNewComment:gt}}),F((q=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(He["a"])(Object(Ue["a"])(e),"thread",I,Object(Ue["a"])(e)),Object(Ae["a"])(Object(Ue["a"])(e),"comments",null),Object(Ae["a"])(Object(Ue["a"])(e),"isThreadClosed",!1),Object(Ae["a"])(Object(Ue["a"])(e),"hasPermission",!1),Object(Ae["a"])(Object(Ue["a"])(e),"currentThread",{}),Object(Ae["a"])(Object(Ue["a"])(e),"userRole",e.$store.state.user.userRole),Object(Ae["a"])(Object(Ue["a"])(e),"userDescription",e.$store.state.user.description),Object(Ae["a"])(Object(Ue["a"])(e),"currentCategory",e.$route.path.substring(1).split("/")[1]),Object(Ae["a"])(Object(Ue["a"])(e),"currentThreadId",e.$route.path.substring(1).split("/")[2]),Object(Ae["a"])(Object(Ue["a"])(e),"isCreatingNewComment",!1),e}return Object(ce["a"])(r,[{key:"checkPermissions",value:function(){"moderator"===this.userRole&&this.userDescription.includes(this.currentCategory)||"admin"===this.$store.state.user.userRole?this.hasPermission=!0:this.hasPermission=!1}},{key:"goToHome",value:function(){this.$router.push("/")}},{key:"goToCategory",value:function(){this.$router.push("/forum/".concat(this.currentCategory))}},{key:"toggleCommentCreation",value:function(){this.isCreatingNewComment=!this.isCreatingNewComment}},{key:"closeThread",value:function(){var e={isClosed:1};this.closeThreadOnDb(e),this.isCreatingNewComment=!1,this.isThreadClosed=!0}},{key:"closeThreadOnDb",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads/".concat(this.currentThread.threadsId),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:r=e.sent,r||console.log("Failed.");case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateThread",value:function(e){this.currentThread=e,this.isThreadClosed=this.currentThread.isClosed}},{key:"updateComments",value:function(e){this.comments=e}},{key:"fetchThread",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads/".concat(this.currentThreadId));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.updateThread(t);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"fetchComments",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/comments/specific/".concat(this.currentThreadId));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.updateComments(t);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchThread(),this.fetchComments(),this.checkPermissions()}},{key:"calculateTimePast",get:function(){var e=new Date;e=e.getTime();var t=this.currentThread.timeCreated,r=e-t;r/=1e3;var n=Math.floor(r%60);r/=60;var a=Math.floor(r%60);r/=60;var s=Math.floor(r%24),i=Math.floor(r/24);return i>=1?i+" days ago":s<=23&&s>=1?s+" hours ago":a>=1?a+" minutes ago":n+" seconds ago"}}]),r}(he["c"]),L=q,I=Object(qe["a"])(L.prototype,"thread",[he["b"]],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=L))||M),Ot=jt,yt=(r("a144"),Object(ve["a"])(Ot,st,it,!1,null,"58dd848e",null)),wt=yt.exports,Ct=function(){var e=this,t=e.$createElement,r=e._self._c||t;return"admin"===this.$store.state.user.userRole?r("div",{attrs:{id:"admin-page"}},[r("h1",{staticClass:"welcome-text"},[e._v("Admin Power Page")]),r("div",{attrs:{id:""}},e._l(e.users,(function(e,t){return r("UpdateUser",{key:t,staticClass:"pointer",attrs:{user:e}})})),1)]):r("div",{staticClass:"welcome-text"},[e._v("NO ACCESS.")])},kt=[],_t=(r("4de4"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"shadow",attrs:{id:"user"},on:{click:e.editUser}},[r("font-awesome-icon",{attrs:{icon:["fas","user-secret"]}}),r("span",{staticClass:"username"},[e._v(e._s(e.user.name))]),r("span",{staticClass:"userrole"},[e._v(e._s(e.user.userRole))]),r("span",{staticClass:"userdesc"},[e._v(" | "+e._s(e.user.description))]),r("span",{staticClass:"delete-user"},[r("font-awesome-icon",{staticClass:"edit-user pointer",attrs:{icon:["fas","edit"]},on:{click:e.editUser}}),r("font-awesome-icon",{staticClass:"pointer",attrs:{icon:["fas","times"]},on:{click:function(t){return e.deleteThisUser(e.user.id)}}})],1)],1),e.isEditingUser?r("div",{attrs:{id:"edit-user-block"}},[r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.newRole,expression:"newRole"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newRole=t.target.multiple?r:r[0]}}},e._l(e.roles,(function(t,n){return r("option",{key:n,domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" ")])})),0),"moderator"===this.newRole?r("span",e._l(e.subforums,(function(t,n){return r("span",{key:n,staticClass:"checkboxes"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"subforum.checked"}],attrs:{type:"checkbox","true-value":t.text,"false-value":0},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:e._q(t.checked,t.text)},on:{change:function(r){var n=t.checked,a=r.target,s=a.checked?t.text:0;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&e.$set(t,"checked",n.concat([i])):o>-1&&e.$set(t,"checked",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(t,"checked",s)}}}),e._v(" "+e._s(t.text)+" ")])})),0):e._e(),r("input",{staticClass:"submit-edited-user",attrs:{type:"submit",value:"Save User Changes"},on:{click:e.submit}})])]):e._e()])}),Tt=[],xt=(r("4160"),r("159b"),J=Object(he["a"])(),z=Object(he["b"])(),J((B=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(He["a"])(Object(Ue["a"])(e),"user",Z,Object(Ue["a"])(e)),Object(Ae["a"])(Object(Ue["a"])(e),"isEditingUser",!1),Object(Ae["a"])(Object(Ue["a"])(e),"roles",e.$store.state.roles),Object(Ae["a"])(Object(Ue["a"])(e),"subforums",[{text:"Traditional Art",checked:""},{text:"Digital Art",checked:""},{text:"Photography",checked:""}]),Object(Ae["a"])(Object(Ue["a"])(e),"newRole",""),Object(Ae["a"])(Object(Ue["a"])(e),"newDescription",""),e}return Object(ce["a"])(r,[{key:"editUser",value:function(){this.isEditingUser=!this.isEditingUser}},{key:"submit",value:function(){var e=this;this.subforums.forEach((function(t){e.newDescription=e.newDescription+t.checked+" "}));var t={userRole:this.newRole,description:this.newDescription};this.editUserInDb(t),this.$router.push("/")}},{key:"editUserInDb",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/".concat(this.$props.user.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:r=e.sent,r||console.log("Failed.");case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteThisUser",value:function(e){var t={userRole:"",description:"userLeft",password:"userLeft"};this.deleteUser(e,t),this.$router.push("/")}},{key:"deleteUser",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,n||console.log("Failed.");case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()}]),r}(he["c"]),W=B,Z=Object(qe["a"])(W.prototype,"user",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=W))||H),$t=xt,Pt=(r("19ae"),Object(ve["a"])($t,_t,Tt,!1,null,"589822e1",null)),Rt=Pt.exports,Nt=(V=Object(he["a"])({components:{UpdateUser:Rt}}),G=Object(he["d"])("users"),V((X=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(Ae["a"])(Object(Ue["a"])(e),"isEditingUser",!1),Object(Ae["a"])(Object(Ue["a"])(e),"users",null),e}return Object(ce["a"])(r,[{key:"onChange",value:function(e){this.users=e}},{key:"toggleUserEditingField",value:function(){this.isEditingUser=!this.isEditingUser}},{key:"updateUsers",value:function(e){e=e.filter((function(e){return"Owl"!==e.name})),e=e.filter((function(e){return"userLeft"!==e.description})),this.users=e}},{key:"fetchUsers",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.updateUsers(t);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchUsers()}}]),r}(he["c"]),Q=X,Object(qe["a"])(Q.prototype,"onChange",[G],Object.getOwnPropertyDescriptor(Q.prototype,"onChange"),Q.prototype),K=Q))||K),Et=Nt,Ut=(r("dd40"),Object(ve["a"])(Et,Ct,kt,!1,null,"37492b86",null)),At=Ut.exports,Dt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("form",{staticClass:"register-block",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("h3",{staticClass:"register"},[e._v("Register")]),e.errors.length?r("p",[r("ul",e._l(e.errors,(function(t,n){return r("p",{key:n,staticClass:"red"},[e._v(e._s(t+" "))])})),0)]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"register-box",attrs:{type:"text",id:"name",name:"name",placeholder:"Enter First Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"register-box",attrs:{type:"email",id:"email",name:"email",placeholder:"Enter Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"register-box",attrs:{type:"password",id:"password",name:"password",placeholder:"Enter Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("button",{staticClass:"register-box",attrs:{id:"submit"}},[e._v("Register")])])])},St=[],Ft=(Y=Object(he["a"])(),Y((te=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){var e;Object(oe["a"])(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(Ae["a"])(Object(Ue["a"])(e),"name",null),Object(Ae["a"])(Object(Ue["a"])(e),"email",null),Object(Ae["a"])(Object(Ue["a"])(e),"password",null),Object(Ae["a"])(Object(Ue["a"])(e),"errors",[]),e}return Object(ce["a"])(r,[{key:"checkForm",value:function(){if(this.errors=[],null===this.name&&this.errors.push("Name required."),null===this.password&&this.errors.push("Password required."),null===this.email?this.errors.push("Email required."):this.validEmail(this.email)||this.errors.push("Valid email required."),!this.errors.length)return!0}},{key:"validEmail",value:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}},{key:"submit",value:function(){var e=this.checkForm();if(e){var t={name:this.name,email:this.email,password:this.password,userRole:"basicUser"};this.createNewUser(t),this.$router.push("/")}}},{key:"createNewUser",value:function(){var e=Object(Ee["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:r=e.sent,r||console.log("Failed.");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(he["c"]),ee=te))||ee),Mt=Ft,Lt=(r("10ec"),Object(ve["a"])(Mt,Dt,St,!1,null,"4cda419e",null)),It=Lt.exports,qt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Jt=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h3",[e._v("PAGE NOT FOUND")])])}],zt=(re=Object(he["a"])(),re(ne=function(e){Object(ue["a"])(r,e);var t=Object(le["a"])(r);function r(){return Object(oe["a"])(this,r),t.apply(this,arguments)}return r}(he["c"]))||ne),Ht=zt,Wt=(r("7278"),Object(ve["a"])(Ht,qt,Jt,!1,null,"1d99f60a",null)),Zt=Wt.exports;ae["a"].use(Ce["a"]);var Bt=[{path:"/",name:"Home",component:Pe},{path:"/login",name:"Login",component:Me},{path:"/register",name:"Register",component:It},{path:"/admin",name:"AdminPage",component:At},{path:"/forum/:subforum",name:"SubForum",component:at},{path:"/forum/:subforum/:id",name:"ThreadPage",component:wt},{path:"*",name:"PageNotFound",component:Zt}],Vt=new Ce["a"]({mode:"history",base:"/",routes:Bt}),Gt=Vt,Kt=r("2f62");ae["a"].use(Kt["a"]);var Qt=new Kt["a"].Store({state:{user:{name:null,email:null,userRole:null},forumTopics:["Traditional Art","Digital Art","Photography"],roles:[{text:"Admin",value:"admin"},{text:"Moderator",value:"moderator"},{text:"Basic User",value:"basicUser"}],isCreatingNewThread:!1,isCreatingNewComment:!1,currentThread:{}},mutations:{setUser:function(e,t){e.user=t},setCurrentThread:function(e,t){e.currentThread=t},setIsCreatingNewThread:function(e,t){e.isCreatingNewThread=t},setIsCreatingNewComment:function(e,t){e.isCreatingNewComment=t}},actions:{fetchLoggedInUser:function(e){return Object(Ee["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,fetch("/api/login");case 3:return n=t.sent,t.next=6,n.json();case 6:n=t.sent,n&&r("setUser",n);case 8:case"end":return t.stop()}}),t)})))()},login:function(e,t,r){return Object(Ee["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})});case 3:return s=n.sent,n.next=6,s.json();case 6:s=n.sent,s?a("setUser",s):console.log("Login failed.");case 8:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(Ee["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,fetch("/api/login",{method:"DELETE"});case 3:return n=t.sent,t.next=6,n.json();case 6:n=t.sent,n?r("setUser",{name:null,email:null,userRole:null}):console.log("Logout failed.");case 8:case"end":return t.stop()}}),t)})))()}},modules:{}}),Xt=r("ecee"),Yt=r("c074"),er=r("ad3d");r("4dd0");Xt["c"].add(Yt["d"],Yt["c"],Yt["b"],Yt["a"]),ae["a"].component("font-awesome-icon",er["a"]),ae["a"].config.productionTip=!1,new ae["a"]({router:Gt,store:Qt,render:function(e){return e(we)}}).$mount("#app")},"5ebd":function(e,t,r){},"68c2":function(e,t,r){},7278:function(e,t,r){"use strict";r("fd18")},"72a3":function(e,t,r){},"77e6":function(e,t,r){"use strict";r("68c2")},"85ec":function(e,t,r){},9588:function(e,t,r){"use strict";r("eb18")},a144:function(e,t,r){"use strict";r("b329")},a3bf:function(e,t,r){},b329:function(e,t,r){},db8c:function(e,t,r){},dd40:function(e,t,r){"use strict";r("a3bf")},eb18:function(e,t,r){},ef6e:function(e,t,r){"use strict";r("080f")},fd18:function(e,t,r){},fe45:function(e,t,r){}});
//# sourceMappingURL=app.4b0fb844.js.map