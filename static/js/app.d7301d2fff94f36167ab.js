webpackJsonp([1],[,,,,function(t,e,i){"use strict";var s=i(51),n=i.n(s),a={apiKey:"AIzaSyDVtDRcmQWg4kRhvcgMRHg_GuZunZnY81s",authDomain:"amerisleep-cms.firebaseapp.com",databaseURL:"https://amerisleep-cms.firebaseio.com",projectId:"amerisleep-cms",storageBucket:"amerisleep-cms.appspot.com",messagingSenderId:"1008114877802"},o=n.a.initializeApp(a);o.auth().onAuthStateChanged(function(t){t?t.getIdToken(!0).then(function(t){t&&(console.log("LOGGED IN"),localStorage.setItem("TOKEN",t))}):console.log("LOGGED OUT")}),e.a=o},,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=i(7),n=i(87),a=i(78),o=i.n(a),r=i(81),l=i.n(r),c=i(80),u=i.n(c);s.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/amerisleep-cms/:product/edit",name:"Edit",component:o.a,meta:{requiresAuth:!0}},{path:"/amerisleep-cms/login",name:"Login",component:u.a},{path:"/amerisleep-cms/",name:"Products",component:l.a,meta:{requiresAuth:!0}}]})},,,,,,,,,,,,,function(t,e,i){"use strict";var s=i(7),n=i(20),a=i(42),o=i(41),r=i(43);s.a.use(n.a),e.a=new n.a.Store({state:r.a,mutations:a.a,actions:o.a})},function(t,e,i){var s=i(6)(null,i(85),null,null,null);t.exports=s.exports},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),n=i(39),a=i(89),o=i.n(a);s.a.use(o.a),e.default={name:"edit",data:function(){return{product:this.$route.params.product,token:localStorage.getItem("TOKEN"),content:{title:"",firmness:"",body:""},size:{name:"",size:"",price:"0",promo:"0"}}},firebase:function(){return{DB_SIZES:n.a.ref(this.product+"/sizes"),DB_CONTENT:{source:n.a.ref(this.product+"/content"),readyCallback:function(t){this.content.title=t.val().title,this.content.firmness=t.val().firmness,this.content.body=t.val().body}}}},computed:{store_sizes:function(){return this.$store.state.sizes}},methods:{updateStore:function(){this.$store.dispatch("add_new_size")},onSubmitContent:function(){this.$firebaseRefs.DB_CONTENT.set(this.content)},onAddSize:function(){this.$firebaseRefs.DB_SIZES.push(this.size),this.size.name="",this.size.price="",this.size.promo="",this.size.size="",document.getElementById("sizeName").focus()},onDelete:function(t){this.$firebaseRefs.DB_SIZES.child(t[".key"]).remove()},updateSizeAttribute:function(t,e,i){this.$firebaseRefs.DB_SIZES.child(t[".key"]).child(i).set(e)},updateName:function(t,e){this.$firebaseRefs.DB_SIZES.child(t[".key"]).child("name").set(e)},updateSize:function(t,e){this.$firebaseRefs.DB_SIZES.child(t[".key"]).child("size").set(e)},updateSizePrice:function(t,e){this.$firebaseRefs.DB_SIZES.child(t[".key"]).child("price").set(e)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4);e.default={name:"app-header",data:function(){return{username:s.a.auth().currentUser.displayName}},methods:{onSignout:function(){this.$store.dispatch("logout")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4);s.a.auth();e.default={name:"login",data:function(){return{creds:{email:"",password:""}}},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn},isValid:function(){return this.$store.state.isValid},isLogging:function(){return this.$store.state.isLogging}},mounted:function(){this.isLoggedIn&&this.$router.push("/amerisleep-cms")},methods:{onLogin:function(){this.$store.dispatch("login",this.creds)},onSignup:function(){this.$store.dispatch("sigup",this.creds)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(79),n=i.n(s);e.default={name:"products",components:{appHeader:n.a}}},function(t,e,i){"use strict";var s=i(4),n=s.a.database();e.a=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),n=i(20),a=i(33),o=i.n(a),r=i(34),l=i(32),c=i(19),u=i(4),p=u.a.auth();s.a.use(r.a),s.a.use(n.a),s.a.config.productionTip=!1,s.a.http.options.root="https://amerisleep-cms.firebaseapp.com",c.a.beforeEach(function(t,e,i){t.matched.some(function(t){return t.meta.requiresAuth})?p.currentUser?i():i({name:"Login"}):i()});var m=p.onAuthStateChanged(function(){new s.a({el:"#app",router:c.a,store:l.a,beforeMount:function(){},template:"<App/>",components:{App:o.a}}),m()})},function(t,e,i){"use strict";var s=i(19),n=i(4),a=n.a.auth(),o={sigup:function(t,e){t.commit;a.createUserWithEmailAndPassword(e.email,e.password).then(function(t){t.updateProfile({displayName:document.getElementById("username").value}),t.sendEmailVerification().then(function(){console.log("email sent")},function(t){console.log(t)})}).catch(function(t){console.log(t.message)})},login:function(t,e){var i=t.commit;a.signInWithEmailAndPassword(e.email,e.password).then(function(t){!1!==t.emailVerified?(i("LOGGING"),setTimeout(function(){s.a.push("/amerisleep-cms"),i("LOGIN")},1e3)):console.log("USER NOT VERIFIED: CHECK EMAIL")}).catch(function(t){i("VALIDATION")})},logout:function(t){var e=t.commit;a.signOut(),localStorage.removeItem("TOKEN"),window.location.href="/amerisleep-cms/login",e("LOGOUT")}};e.a=o},function(t,e,i){"use strict";var s={LOGGING:function(t){t.isLogging=!0},LOGIN:function(t){t.isLogging=!1,t.isLoggedIn=!0},LOGOUT:function(t){t.isLoggedIn=!1},VALIDATION:function(t){t.isValid=!1},ADD_NEW_SIZE:function(t,e){t.sizes=e}};e.a=s},function(t,e,i){"use strict";var s={sizes:[],isLoggedIn:!!localStorage.getItem("TOKEN"),isLogging:!1,isValid:!0};e.a=s},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){function s(t){i(46)}var n=i(6)(i(35),i(86),s,null,null);t.exports=n.exports},function(t,e,i){function s(t){i(45)}var n=i(6)(i(36),i(84),s,"data-v-50ac7d1a",null);t.exports=n.exports},function(t,e,i){function s(t){i(44)}var n=i(6)(i(37),i(82),s,null,null);t.exports=n.exports},function(t,e,i){var s=i(6)(i(38),i(83),null,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"login is-flexy is-middle is-center is-column"},[i("div",{staticClass:"box is-flexy is-wrap is-column is-center"},[i("img",{staticClass:"logo",attrs:{src:"/static/img/logo.png",alt:"Amerisleep"}}),t._v(" "),i("form",{staticClass:"is-full",on:{submit:function(t){t.preventDefault()}}},[i("div",{staticClass:"form-row"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],staticClass:"form-controller",class:{invalid:!t.isValid},attrs:{type:"email",placeholder:"Email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||(t.creds.email=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-row"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"form-controller",class:{invalid:!t.isValid},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||(t.creds.password=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),i("button",{staticClass:"button is-primary",class:{isLogging:t.isLogging},attrs:{type:"submit"},on:{click:t.onLogin}},[t.isLogging?t._e():i("span",[t._v("Log in")]),t._v(" "),t.isLogging?i("span",[i("img",{attrs:{src:"/static/img/loading.gif",width:"22px"}})]):t._e()])]),t._v(" "),t.isValid?t._e():i("div",{staticClass:"text-alert"},[t._v("\n      Invalid email or password. Please try again or "),i("a",{attrs:{href:"mailto:felipe.nobre@wmpcreative.com?subject=Amerisleep CMS login troubles"}},[t._v("contact")]),t._v(" the administrator!\n    ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-row info"},[i("span",[t._v("If you can't remember your details please "),i("a",{attrs:{href:"mailto:felipe.nobre@wmpcreative.com?subject=Amerisleep CMS login troubles"}},[t._v("contact")]),t._v(" the administrator of your system.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"products"},[i("app-header"),t._v(" "),i("div",{staticClass:"wrapper"},[i("h2",[t._v("The Range USA")]),t._v(" "),i("h3",[t._v("MATTRESSES")]),t._v(" "),i("div",{staticClass:"listing is-flexy is-between"},[i("router-link",{staticClass:"item",attrs:{to:"/amerisleep-cms/as1/edit"}},[i("span",[t._v("AS1")]),i("i",[t._v("edit")])]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/amerisleep-cms/as2/edit"}},[i("span",[t._v("AS2")]),i("i",[t._v("edit")])]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/amerisleep-cms/as3/edit"}},[i("span",[t._v("AS3")]),i("i",[t._v("edit")])]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/amerisleep-cms/as4/edit"}},[i("span",[t._v("AS4")]),i("i",[t._v("edit")])]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/amerisleep-cms/as5/edit"}},[i("span",[t._v("AS5")]),i("i",[t._v("edit")])])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"header"},[i("div",{staticClass:"wrapper is-flexy is-between is-middle"},[t._m(0),t._v(" "),i("div",{staticClass:"user is-flexy is-middle"},[i("div",{staticClass:"is-flexy is-right is-column"},[i("h5",[t._v(t._s(t.username))]),t._v(" "),i("h6",[t._v("Administrator")])]),t._v(" "),i("button",{staticClass:"logout",on:{click:t.onSignout}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"/amerisleep-cms"}},[i("img",{staticClass:"logo",attrs:{src:"/static/img/logo.png",alt:"Amerisleep"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"edit"},[i("h1",[t._v("Editing "+t._s(t.$route.params.product))]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-sm-8 "},[i("h4",[t._v("CONTENT")]),t._v(" "),i("ul",{staticClass:"list-group"},[i("li",{staticClass:"list-group-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.content.title,expression:"content.title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.content.title},on:{input:function(e){e.target.composing||(t.content.title=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.content.firmness,expression:"content.firmness"}],attrs:{type:"text",placeholder:"Firmness"},domProps:{value:t.content.firmness},on:{input:function(e){e.target.composing||(t.content.firmness=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content.body,expression:"content.body"}],attrs:{placeholder:"Content",rows:"7",cols:"80"},domProps:{value:t.content.body},on:{input:function(e){e.target.composing||(t.content.body=e.target.value)}}})])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-sm-12 "},[i("hr"),t._v(" "),i("h4",[t._v("SIZES")]),t._v(" "),i("ul",{staticClass:"list-group"},[i("li",{staticClass:"list-group-item"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.size.name,expression:"size.name"}],attrs:{id:"sizeName"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.size.name=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a product")]),t._v(" "),i("option",{attrs:{value:"Twin"}},[t._v("Twin")]),t._v(" "),i("option",{attrs:{value:"Twin XL"}},[t._v("Twin XL")]),t._v(" "),i("option",{attrs:{value:"Full"}},[t._v("Full")]),t._v(" "),i("option",{attrs:{value:"Queen"}},[t._v("Queen")]),t._v(" "),i("option",{attrs:{value:"King"}},[t._v("King")]),t._v(" "),i("option",{attrs:{value:"California King"}},[t._v("California King")]),t._v(" "),i("option",{attrs:{value:"Split King"}},[t._v("Split King")])]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.size.size,expression:"size.size"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.size.size=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a size")]),t._v(" "),i("option",{attrs:{value:'38" x 74"'}},[t._v('38" x 74"')]),t._v(" "),i("option",{attrs:{value:'38" x 80"'}},[t._v('38" x 80"')]),t._v(" "),i("option",{attrs:{value:'54" x 75"'}},[t._v('54" x 75"')]),t._v(" "),i("option",{attrs:{value:'60" x 80"'}},[t._v('60" x 80"')]),t._v(" "),i("option",{attrs:{value:'76" x 80"'}},[t._v('76" x 80"')]),t._v(" "),i("option",{attrs:{value:'72" x 84"'}},[t._v('72" x 84"')]),t._v(" "),i("option",{attrs:{value:'38" x 80" - 2'}},[t._v('38" x 80" - 2')])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.size.price,expression:"size.price"}],attrs:{type:"text",placeholder:"Price"},domProps:{value:t.size.price},on:{input:function(e){e.target.composing||(t.size.price=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.size.promo,expression:"size.promo"}],attrs:{type:"text",placeholder:"Promotion Price"},domProps:{value:t.size.promo},on:{input:function(e){e.target.composing||(t.size.promo=e.target.value)}}}),t._v(" "),i("button",{staticClass:"btn btn-primary",on:{click:t.onAddSize}},[t._v("ADD SIZE")])])]),t._v(" "),i("ul",{staticClass:"list-group"},t._l(t.DB_SIZES,function(e,s){return i("li",{staticClass:"list-group-item"},[i("input",{domProps:{value:e.name},on:{input:function(i){t.updateSizeAttribute(e,i.target.value,"name")}}}),t._v(" "),i("input",{domProps:{value:e.size},on:{input:function(i){t.updateSizeAttribute(e,i.target.value,"size")}}}),t._v(" "),i("input",{domProps:{value:e.price},on:{input:function(i){t.updateSizeAttribute(e,i.target.value,"price")}}}),t._v(" "),i("input",{attrs:{placeholder:"Promotion Price"},domProps:{value:e.promo},on:{input:function(i){t.updateSizeAttribute(e,i.target.value,"promo")}}}),t._v(" "),i("span",{staticClass:"btn btn-danger",on:{click:function(i){t.onDelete(e)}}},[t._v("DELETE")])])})),t._v(" "),i("button",{staticClass:"btn btn-primary",on:{click:t.onSubmitContent}},[t._v("SAVE")])])])])},staticRenderFns:[]}},,,,function(t,e){}],[40]);
//# sourceMappingURL=app.d7301d2fff94f36167ab.js.map