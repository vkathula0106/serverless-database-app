(this["webpackJsonpserverless-database-app"]=this["webpackJsonpserverless-database-app"]||[]).push([[10],{41:function(e,t,n){"use strict";n.r(t),n.d(t,"GA4R",(function(){return l})),n.d(t,"GA4React",(function(){return d})),n.d(t,"useGA4React",(function(){return f})),n.d(t,"withTracker",(function(){return p}));var i=n(4),a=n(7),o=n(5),c=n(8),r=n(2),s=n.n(r),u="__ga4React__",d=function(){function e(t,n,i,a,c){if(Object(o.a)(this,e),this.gaCode=t,this.gaConfig=n,this.additionalGaCode=i,this.timeout=a,this.options=c,this.scriptSyncId="ga4ReactScriptSync",this.scriptAsyncId="ga4ReactScriptAsync",this.nonceAsync="",this.nonceSync="",this.gaConfig=n||{},this.gaCode=t,this.timeout=a||5e3,this.additionalGaCode=i,this.options=c,this.options){var r=this.options.nonce;this.nonceAsync=r&&r[0]?r[0]:"",this.nonceSync=r&&r[1]?r[1]:""}}return Object(c.a)(e,[{key:"outputOnResolve",value:function(){return{pageview:this.pageview,event:this.event,gtag:this.gtag}}},{key:"initialize",value:function(){var t=this;return new Promise((function(n,i){e.isInitialized()&&i(new Error("GA4React is being initialized"));var o=document.getElementById(t.scriptAsyncId);o&&o.remove();var c=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("id",t.scriptAsyncId),r.setAttribute("async",""),t.nonceAsync&&"string"===typeof t.nonceAsync&&t.nonceAsync.length>0&&r.setAttribute("nonce",t.nonceAsync),r.setAttribute("src","https://www.googletagmanager.com/gtag/js?id="+t.gaCode),r.onload=function(){var e=document.getElementById(t.scriptSyncId);e&&e.remove();var i=document.getElementById(t.scriptSyncId);i&&i.remove();var o=document.createElement("script");o.setAttribute("id",t.scriptSyncId),t.nonceSync&&"string"===typeof t.nonceSync&&t.nonceSync.length>0&&o.setAttribute("nonce",t.nonceSync);var r="window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);};\n        gtag('js', new Date());\n        gtag('config', '"+t.gaCode+"', "+JSON.stringify(t.gaConfig)+");";t.additionalGaCode&&t.additionalGaCode.forEach((function(e){r+="\ngtag('config', '"+e+"', "+JSON.stringify(t.gaConfig)+");"})),o.innerHTML=r,c.appendChild(o);var s=t.outputOnResolve();Object.assign(window,Object(a.a)({},u,s)),n(s)},r.onerror=function(e){if("string"===typeof e)i("GA4React intialization failed "+e);else{var t=new Error;t.name="GA4React intialization failed",t.message=JSON.stringify(e,["message","arguments","type","name"]),i(t)}};var s=function t(){switch(document.readyState){case"interactive":case"complete":e.isInitialized()||(c.appendChild(r),document.removeEventListener("readystatechange",t))}};"complete"!==document.readyState?document.addEventListener("readystatechange",s):s(),setTimeout((function(){i(new Error("GA4React Timeout"))}),t.timeout)}))}},{key:"pageview",value:function(e,t,n){return this.gtag("event","page_view",{page_path:e,page_location:t||window.location,page_title:n||document.title})}},{key:"event",value:function(e,t,n,i){return void 0===i&&(i=!1),this.gtag("event",e,{event_label:t,event_category:n,non_interaction:i})}},{key:"gtag",value:function(){var e;return(e=window).gtag.apply(e,arguments)}}],[{key:"isInitialized",value:function(){switch("undefined"!==typeof window.__ga4React__){case!0:return!0;default:return!1}}},{key:"getGA4React",value:function(){if(e.isInitialized())return window.__ga4React__;console.error(new Error("GA4React is not initialized"))}}]),e}(),g=function(e,t,n){t(s.a.Children.map(e,(function(e,t){return s.a.isValidElement(e)?e.type&&"undefined"!==typeof e.type.name?s.a.cloneElement(e,{ga4:n,index:t}):e:s.a.createElement(s.a.Fragment,null,e)})))},l=function(e){var t=e.code,n=e.timeout,a=e.config,o=e.additionalCode,c=e.children,u=e.options,l=Object(r.useState)(null),f=Object(i.a)(l,2),p=f[0],y=f[1];return Object(r.useEffect)((function(){if(d.isInitialized()){var e=d.getGA4React();e&&g(c,y,e)}else{new d(""+t,a,o,n,u).initialize().then((function(e){g(c,y,e)}),(function(e){console.error(e)}))}}),[]),s.a.createElement(s.a.Fragment,null,p)},f=function(e,t,n,a,o){var c=Object(r.useState)(void 0),s=Object(i.a)(c,2),u=s[0],g=s[1];return Object(r.useEffect)((function(){if(e)switch(d.isInitialized()){case!1:new d(""+e,t,n,a,o).initialize().then((function(e){g(e)}),(function(e){console.error(e)}));break;case!0:g(d.getGA4React())}else g(d.getGA4React())}),[e]),u};function p(e){return function(t){var n=t.path,i=t.location,a=t.title,o=t.gaCode,c=t.gaTimeout,u=t.gaConfig,g=t.gaAdditionalCode,l=t.options;return Object(r.useEffect)((function(){switch(d.isInitialized()){case!0:var e=d.getGA4React();e&&e.pageview(n,i,a);break;default:case!1:new d(""+o,u,g,c,l).initialize().then((function(e){e.pageview(n,i,a)}),(function(e){console.error(e)}))}})),s.a.createElement(e,Object.assign({},t))}}t.default=d}}]);
//# sourceMappingURL=10.057ea60f.chunk.js.map