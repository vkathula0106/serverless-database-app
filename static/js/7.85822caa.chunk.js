(this["webpackJsonpserverless-database-app"]=this["webpackJsonpserverless-database-app"]||[]).push([[7],{43:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var a=t(14),n=t(2),o=t.n(n),s=t(40).q.p((function(e){return Object(a.b)({marginTop:5,marginBottom:-5,fontSize:12,fontWeight:500,color:"red",height:0,overflow:"visible"},e.theme.errorText?Object(a.b)({},e.theme.errorText):{})}));function c(e){return e.value&&e.value.length?o.a.createElement(s,Object.assign({},e),e.value):o.a.createElement(o.a.Fragment,null)}},47:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),o=t(1),s=t(4),c=t(2),i=t.n(c),u=t(42),l=t(14),d=t(40),m=t(43),g=d.q.h2((function(e){return Object(l.b)({fontFamily:"inherit",fontSize:15,fontWeight:300,letterSpacing:-.2,lineHeight:"20px",whiteSpace:"normal"},e.theme.secondaryText?Object(l.b)({},e.theme.secondaryText):{})}));function f(e){return i.a.createElement(g,Object.assign({},e))}r.default=function(e){var r,t,a=e.setCurrentPage,g=e.dictionary,b=e.emailTemplate,p=Object(c.useState)(!1),w=Object(s.a)(p,2),h=w[0],E=w[1],v=Object(c.useState)(),x=Object(s.a)(v,2),P=x[0],S=x[1],C=Object(u.k)(),j=C.register,O=C.handleSubmit,k=C.reset,B=C.formState,y=B.errors,z=B.isSubmitting,L=Object(l.f)(),F=L.forgotPassword,T=L.forgotPasswordConfirm,q=function(){var e=Object(o.a)(n.a.mark((function e(r){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.email){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,F(r.email,b);case 4:(t=e.sent).success?(S(r.email),E(!0),d.t.success("Check your email for a verification code")):"RequestLimitExceeded"===t.errorCode?d.t.error(g.errorRequestLimitExceeded):"BadFormat"===t.errorCode?(k(),d.t.error(g.errorBadInputFormat)):"NoUserExists"===t.errorCode?(k(),d.t.error(g.errorNoAccountFound)):(k(),d.t.error("Bad request"));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(n.a.mark((function e(r){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.code&&r.newPassword&&P){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,T(r.code,P,r.newPassword);case 4:(t=e.sent).success?(E(!1),S(""),a("SignIn"),d.t.success("Password successfully changed")):"BadPasswordLength"===t.errorCode?d.t.error(g.errorPasswordTooShort):"BadFormat"===t.errorCode?(k(),d.t.error(g.errorBadInputFormat)):"NoUserExists"===t.errorCode?(k(),d.t.error(g.errorNoAccountFound)):"WrongVerificationCode"===t.errorCode?d.t.error(g.errorWrongVerificationCode):d.t.error("Bad request");case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),A={minLength:{value:8,message:"Password must be at least 8 characters long"},maxLength:{value:100,message:"Password too long"},pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/gm,message:"Must contain a digit and uppercase and lowercase letters"}},H={minLength:{value:8,message:"Incorrect code length"}};return h?i.a.createElement(u.b,{onSubmit:O(I)},i.a.createElement(u.c,null,g.forgotPasswordConfirmHeader),i.a.createElement(u.g,{size:"medium"}),i.a.createElement(u.d,{register:function(){return j("code",H)},label:g.codeLabel,disabled:z}),i.a.createElement(m.a,{value:null==(r=y.code)?void 0:r.message}),i.a.createElement(u.g,{size:"xlarge"}),i.a.createElement(u.f,{register:function(){return j("newPassword",A)},label:g.forgotPasswordConfirmLabel,autoComplete:"new-password",disabled:z}),i.a.createElement(m.a,{value:null==(t=y.newPassword)?void 0:t.message}),i.a.createElement(u.g,{size:"xlarge"}),i.a.createElement(u.i,{disabled:z},g.forgotPasswordConfirmSubmitButton)):i.a.createElement(u.b,{onSubmit:O(q)},i.a.createElement(u.c,null,g.forgotPasswordHeader),i.a.createElement(f,null,g.forgotPasswordSecondaryHeader),i.a.createElement(u.g,{size:"medium"}),i.a.createElement(u.a,{register:function(){return j("email")},label:g.newEmailLabel,disabled:z}),i.a.createElement(u.g,{size:"medium"}),i.a.createElement(u.i,{disabled:z},g.forgotPasswordSubmitButton),i.a.createElement(u.j,{onClick:function(e){return a("SignIn")},disabled:z},g.backToSignIn))}}}]);
//# sourceMappingURL=7.85822caa.chunk.js.map