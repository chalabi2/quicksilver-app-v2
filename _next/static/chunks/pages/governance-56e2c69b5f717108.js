(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{1822:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/governance",function(){return c(67612)}])},90638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(96856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=e.default,g={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?g.loader=function(){return a}:"function"==typeof a?g.loader=a:"object"==typeof a&&(g=f({},g,a)),(g=f({},g,b)).loadableGenerated&&delete(g=f({},g,g.loadableGenerated)).loadableGenerated,"boolean"==typeof g.ssr&&!g.suspense){if(!g.ssr)return delete g.ssr,h(c,g);delete g.ssr}return c(g)},b.noSSR=h,g(c(67294));var e=g(c(14302));function f(){return(f=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function g(a){return a&&a.__esModule?a:{default:a}}function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},16319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d,e,f=(d=c(67294),d&&d.__esModule?d:{default:d}).default.createContext(null);b.LoadableContext=f},14302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=c(79658).Z,f=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var g=(d=c(67294),d&&d.__esModule?d:{default:d}),h=c(16319);function i(){return(i=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var j=c(67294).useSyncExternalStore,k=[],l=[],m=!1;function n(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var o=function(){function a(b,c){e(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return f(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function p(a){return function(a,b){var c=function(){if(!n){var b=new o(a,k);n={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return n.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(k.modules)&&k.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=j(n.subscribe,n.getCurrentValue,n.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:n.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(k.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:n.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},f=function(a,b){return d(),g.default.createElement(k.lazy,i({},a,{ref:b}))},k=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);k.suspense&&(k.lazy=g.default.lazy(k.loader));var n=null;if(!m){var p=k.webpack?k.webpack():k.modules;p&&l.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=k.suspense?f:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(n,a)}function q(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return q(a,b)})}p.preloadAll=function(){return new Promise(function(a,b){q(k).then(a,b)})},p.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return m=!0,b()};q(l,a).then(c,c)})},window.__NEXT_PRELOADREADY=p.preloadReady,b.default=p},67612:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n}});var d=c(85893),e=c(23100),f=c(36979),g=c(88911),h=c(5152),i=c.n(h),j=c(9008),k=c.n(j),l=c(43517),m=i()(function(){return Promise.resolve(l.lU)},{ssr:!1});function n(){var a="quicksilver";return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(e.xu,{w:"100vw",h:"100vh",bgImage:"url('https://s3-alpha-sig.figma.com/quicksilver-app-v2/img/555d/db64/f5bf65e93a15603069e8e865d5f6d60d?Expires=1694995200&Signature=fYfmbqDdOGRYtSeEsOkavPhhkaNQK1UFFfICaUaM1k9OVEpACsoWOcK2upjRW7Tfs-pPTJBuQuvcmF9gBjosh5-Al2xTWHYzDlR~CYJNzsXcseIEnVf7H8lCdJqhZY-T0r~lmbJK5-CmbulWfOaubc-wyY3C-oM3b1RanGV1TqmPZto5bbHwf56jDYqK86HedVMXbUCOlzkeBw2R93AkmNDMOdDbKa9rIKqxil64DuQQAfIFxWm1Rc69Jc1-4K-bunsS~kfz8bSET6TIGmR15nCo~ibfISG72YYKAa7zz6XqUY6GKmmG-Yhj9XyyYb7Jy02r5axNei3DRD78SBe~6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",bgSize:"fit",bgPosition:"right center",bgAttachment:"fixed",bgRepeat:"no-repeat",bgColor:"#000000",children:[(0,d.jsx)(l.h4,{chainName:"quicksilver"}),(0,d.jsx)(l.Kl,{}),(0,d.jsxs)(f.W,{justifyContent:"center",alignItems:"center",maxW:"5xl",children:[(0,d.jsxs)(k(),{children:[(0,d.jsx)("title",{children:"Governance"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,d.jsx)("link",{rel:"icon",href:"/quicksilver-app-v2/img/favicon.png"})]}),(0,d.jsxs)(e.xu,{maxHeight:"3xl",width:"100%",padding:2,children:[(0,d.jsx)(g.x,{pb:2,color:"white",fontSize:"24px",children:"Proposals"}),a&&(0,d.jsx)(m,{chainName:a})]})]})]})})}},5152:function(a,b,c){a.exports=c(90638)},36979:function(a,b,c){"use strict";c.d(b,{W:function(){return j}});var d=c(16554),e=c(67798),f=c(77030),g=c(65548),h=c(25432),i=c(85893),j=(0,d.G)(function(a,b){let{className:c,centerContent:d,...j}=(0,e.Lr)(a),k=(0,f.mq)("Container",a);return(0,i.jsx)(g.m.div,{ref:b,className:(0,h.cx)("chakra-container",c),...j,__css:{...k,...d&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});j.displayName="Container"}},function(a){a.O(0,[445,609,13,260,617,343,937,751,703,774,888,179],function(){var b;return a(a.s=1822)}),_N_E=a.O()}])