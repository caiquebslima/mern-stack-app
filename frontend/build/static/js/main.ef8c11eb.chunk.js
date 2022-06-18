(this["webpackJsonpmy-webpack-project"]=this["webpackJsonpmy-webpack-project"]||[]).push([[0],{93:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(44),c=r(4),o=r(10),i=r(3),u=r(8),l=r(16),j=r.n(l),d="/api/users/",b=function(){var e=Object(u.a)(Object(i.a)().mark((function e(t){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post(d,t);case 2:return(r=e.sent).data&&localStorage.setItem("user",JSON.stringify(r.data)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(Object(i.a)().mark((function e(t){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post(d+"login",t);case 2:return(r=e.sent).data&&localStorage.setItem("user",JSON.stringify(r.data)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("user");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={register:b,logout:f,login:p},g=JSON.parse(localStorage.getItem("user")),m={user:g||null,isError:!1,isSuccess:!1,isLoading:!1,message:""},h=Object(o.b)("auth/register",function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.register(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n=e.t0.response&&e.t0.response.data&&e.t0.response.data.message||e.t0.message||e.t0.toString(),e.abrupt("return",r.rejectWithValue(n));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()),x=Object(o.b)("auth/login",function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.login(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n=e.t0.response&&e.t0.response.data&&e.t0.response.data.message||e.t0.message||e.t0.toString(),e.abrupt("return",r.rejectWithValue(n));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()),v=Object(o.b)("auth/logout",Object(u.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.logout();case 2:case"end":return e.stop()}}),e)})))),w=Object(o.c)({name:"auth",initialState:m,reducers:{reset:function(e){e.isLoading=!1,e.isError=!1,e.isSuccess=!1,e.message=""}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.isLoading=!0})).addCase(h.fulfilled,(function(e,t){e.isLoading=!1,e.isSuccess=!0,e.user=t.payload})).addCase(h.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.message=e.payload,e.user=null})).addCase(x.pending,(function(e){e.isLoading=!0})).addCase(x.fulfilled,(function(e,t){e.isLoading=!1,e.isSuccess=!0,e.user=t.payload})).addCase(x.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.message=e.payload,e.user=null})).addCase(v.fulfilled,(function(e){e.user=null}))}}),y=w.actions.reset,S=w.reducer,N="/api/goals/",C=function(){var e=Object(u.a)(Object(i.a)().mark((function e(t){var r,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:"Bearer ".concat(t)}},e.next=3,j.a.get(N,r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(r)}},e.next=3,j.a.post(N,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"Bearer ".concat(r)}},e.next=3,j.a.delete(N+t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),E={getGoals:C,createGoal:L,deleteGoal:k},F={goals:[],isError:!1,isSuccess:!1,isLoading:!1,message:""},G=Object(o.b)("goals/getAll",function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=r.getState().auth.user.token,e.next=4,E.getGoals(n);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.response&&e.t0.response.data&&e.t0.response.data.message||e.t0.message||e.t0.toString(),e.abrupt("return",r.rejectWithValue(a));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()),A=Object(o.b)("goals/create",function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=r.getState().auth.user.token,e.next=4,E.createGoal(t,n);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.response&&e.t0.response.data&&e.t0.response.data.message||e.t0.message||e.t0.toString(),e.abrupt("return",r.rejectWithValue(a));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()),D=Object(o.b)("goals/delete",function(){var e=Object(u.a)(Object(i.a)().mark((function e(t,r){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=r.getState().auth.user.token,e.next=4,E.deleteGoal(t,n);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.response&&e.t0.response.data&&e.t0.response.data.message||e.t0.message||e.t0.toString(),e.abrupt("return",r.rejectWithValue(a));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()),I=Object(o.c)({name:"goals",initialState:F,reducers:{reset:function(e){return F}},extraReducers:function(e){e.addCase(A.pending,(function(e){e.isLoading=!0})).addCase(A.fulfilled,(function(e,t){e.isLoading=!1,e.isSuccess=!0,e.goals.push(t.payload)})).addCase(A.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.message=t.payload})).addCase(G.pending,(function(e){e.isLoading=!0})).addCase(G.fulfilled,(function(e,t){e.isLoading=!1,e.isSuccess=!0,e.goals=t.payload})).addCase(G.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.message=t.payload,e.goals=[]})).addCase(D.pending,(function(e){e.isLoading=!0})).addCase(D.fulfilled,(function(e,t){e.isLoading=!1,e.isSuccess=!0,e.goals=e.goals.filter((function(e){return e._id!==t.payload._id}))})).addCase(D.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.message=t.payload,e.goals=[]}))}}),W=I.actions.reset,B=I.reducer,J=Object(o.a)({reducer:{auth:S,goals:B}}),V=r(11),R=r(2),_=r(14),z=r(1),P=function(){var e=Object(R.f)(),t=Object(c.b)(),r=Object(c.c)((function(e){return e.auth})).user;return Object(z.jsxs)("header",{className:"header",children:[Object(z.jsx)("div",{className:"logo",children:Object(z.jsx)(V.b,{to:"/",children:"GoalSetter"})}),r?Object(z.jsx)("ul",{children:Object(z.jsx)("li",{children:Object(z.jsxs)("button",{className:"btn",onClick:function(){t(v()),t(y()),e("/login")},children:[Object(z.jsx)(_.b,{})," Logout"]})})}):Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:Object(z.jsxs)(V.b,{to:"/login",children:[Object(z.jsx)(_.a,{})," Login"]})}),Object(z.jsx)("li",{children:Object(z.jsxs)(V.b,{to:"/register",children:[Object(z.jsx)(_.c,{})," Register"]})})]})]})},T=r(12),M=function(){return Object(z.jsx)("div",{className:"loadingSpinnerContainer",children:Object(z.jsx)("div",{className:"loadingSpinner"})})},X=r(7),Y=function(){var e=Object(n.useState)(""),t=Object(X.a)(e,2),r=t[0],a=t[1],s=Object(c.b)();return Object(z.jsx)("section",{className:"form",children:Object(z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(A({text:r})),a("")},children:[Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"text",children:"Goal"}),Object(z.jsx)("input",{type:"text",name:"goal",id:"goal",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("button",{className:"btn btn-block",type:"submit",children:"Add goal"})})]})})},q=function(e){var t=e.goal,r=Object(c.b)();return Object(z.jsxs)("div",{className:"goal",children:[Object(z.jsx)("div",{children:new Date(t.createdAt).toLocaleString("pt-br")}),Object(z.jsx)("h2",{children:t.text}),Object(z.jsx)("button",{onClick:function(){return r(D(t._id))},className:"close",children:"X"})]})},H=function(){var e=Object(R.f)(),t=Object(c.b)(),r=Object(c.c)((function(e){return e.auth})).user,a=Object(c.c)((function(e){return e.goals})),s=a.goals,o=a.isLoading,i=a.isError,u=a.message;return Object(n.useEffect)((function(){i&&u&&T.toast.error(u)}),[s,i,u,e,t]),Object(n.useEffect)((function(){return i&&u&&console.log(u),r||e("/login"),t(G()),function(){t(W())}}),[r,e,i,u,t]),o?Object(z.jsx)(M,{}):Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("section",{className:"heading",children:[Object(z.jsxs)("h1",{children:["Welcome, ",r&&r.name]}),Object(z.jsx)("p",{children:"Goals Dashboard"}),Object(z.jsx)(Y,{}),Object(z.jsx)("section",{className:"content",children:s.length>0?Object(z.jsx)("div",{className:"goals",children:s.map((function(e){return Object(z.jsx)(q,{goal:e},e._id)}))}):Object(z.jsx)("h3",{children:"You have not set any goals"})})]})})},K=r(19),Q=r(13),U=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(X.a)(e,2),r=t[0],a=t[1],s=r.email,o=r.password,i=Object(R.f)(),u=Object(c.b)(),l=Object(c.c)((function(e){return e.auth})),j=l.user,d=l.isLoading,b=l.isError,p=l.isSuccess,f=l.message;Object(n.useEffect)((function(){b&&f&&T.toast.error(f),(p||j)&&i("/"),u(y())}),[j,b,p,f,i,u]);var O=function(e){a((function(t){return Object(Q.a)(Object(Q.a)({},t),{},Object(K.a)({},e.target.name,e.target.value))}))};return d?Object(z.jsx)(M,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("section",{className:"heading",children:[Object(z.jsxs)("h1",{children:[Object(z.jsx)(_.a,{})," "]}),Object(z.jsx)("p",{children:"Login"})]}),Object(z.jsx)("section",{className:"form",children:Object(z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(x({email:s,password:o}))},children:[Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("input",{className:"form-control",type:"text",name:"email",id:"email",value:s,placeholder:"Enter your email",onChange:O})}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("input",{className:"form-control",type:"password",name:"password",id:"password",value:o,placeholder:"Enter password",onChange:O})}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("button",{type:"submit",className:"btn btn-block",children:"Login"})})]})})]})},Z=function(){var e=Object(n.useState)({name:"",email:"",password:"",password2:""}),t=Object(X.a)(e,2),r=t[0],a=t[1],s=r.name,o=r.email,i=r.password,u=r.password2,l=Object(R.f)(),j=Object(c.b)(),d=Object(c.c)((function(e){return e.auth})),b=d.user,p=d.isLoading,f=d.isError,O=d.isSuccess,g=d.message;Object(n.useEffect)((function(){f&&T.toast.error(g),(O||b)&&l("/"),j(y())}),[b,f,O,g,l,j]);var m=function(e){a((function(t){return Object(Q.a)(Object(Q.a)({},t),{},Object(K.a)({},e.target.name,e.target.value))}))};return p?Object(z.jsx)(M,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("section",{className:"heading",children:[Object(z.jsxs)("h1",{children:[Object(z.jsx)(_.c,{})," "]}),Object(z.jsx)("p",{children:"Create an Account"})]}),Object(z.jsx)("section",{className:"form",children:Object(z.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),i!==u)?T.toast.error("Passwords do not match"):j(h({name:s,email:o,password:i}))},children:[Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",value:s,placeholder:"Enter your name",onChange:m})}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("input",{className:"form-control",type:"text",name:"email",id:"email",value:o,placeholder:"Enter your email",onChange:m})}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("input",{className:"form-control",type:"password",name:"password",id:"password",value:i,placeholder:"Enter password",onChange:m})}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("input",{className:"form-control",type:"password",name:"password2",id:"password2",value:u,placeholder:"Confirm password",onChange:m})}),Object(z.jsx)("div",{className:"form-group",children:Object(z.jsx)("button",{type:"submit",className:"btn btn-block",children:"Submit"})})]})})]})};r(92);var $=function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(V.a,{children:Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)(P,{}),Object(z.jsxs)(R.c,{children:[Object(z.jsx)(R.a,{path:"/",element:Object(z.jsx)(H,{})}),Object(z.jsx)(R.a,{path:"/login",element:Object(z.jsx)(U,{})}),Object(z.jsx)(R.a,{path:"/register",element:Object(z.jsx)(Z,{})})]})]})}),Object(z.jsx)(T.ToastContainer,{})]})},ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,95)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},te=(r(93),document.getElementById("root"));Object(s.createRoot)(te).render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(c.a,{store:J,children:Object(z.jsx)($,{})})})),ee()}},[[94,1,2]]]);
//# sourceMappingURL=main.ef8c11eb.chunk.js.map