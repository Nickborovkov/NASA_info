(this.webpackJsonpEarth_Data=this.webpackJsonpEarth_Data||[]).push([[8],{250:function(e,t,n){e.exports={form:"formsStylesMedia_form__1C2i4"}},255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=u(o),i=u(n(36)),s=n(256),l=u(n(257)),c=u(n(258)),d=u(n(259));function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,v=0,b=0,j=0,y="data-lazyload-listened",_=[],O=[],w=!1;try{var x=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,x)}catch(P){}var g=!!w&&{capture:!1,passive:!0},E=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,r=void 0,o=void 0,a=void 0,i=void 0;try{var s=t.getBoundingClientRect();r=s.top,o=s.left,a=s.height,i=s.width}catch(P){r=m,o=v,a=j,i=b}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,d=Math.max(r,0),u=Math.max(o,0),f=Math.min(l,r+a)-d,p=Math.min(c,o+i)-u,h=void 0,y=void 0,_=void 0,O=void 0;try{var w=n.getBoundingClientRect();h=w.top,y=w.left,_=w.height,O=w.width}catch(P){h=m,y=v,_=j,O=b}var x=h-d,g=y-u,E=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return x-E[0]<=f&&x+_+E[1]>=0&&g-E[0]<=p&&g+O+E[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(P){n=m,r=j}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+r+i[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},N=function(){O.forEach((function(e){var t=_.indexOf(e);-1!==t&&_.splice(t,1)})),O=[]},D=function(){for(var e=0;e<_.length;++e){var t=_[e];E(t)}N()},A=void 0,C=null,M=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===A||"debounce"===A&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",C,g),(0,s.off)(window,"resize",C,g),C=null),C||(void 0!==this.props.debounce?(C=(0,c.default)(D,"number"===typeof this.props.debounce?this.props.debounce:300),A="debounce"):void 0!==this.props.throttle?(C=(0,d.default)(D,"number"===typeof this.props.throttle?this.props.throttle:300),A="throttle"):C=D),this.props.overflow){var r=(0,l.default)(this.ref);if(r&&"function"===typeof r.getAttribute){var o=+r.getAttribute(y)+1;1===o&&r.addEventListener("scroll",C,g),r.setAttribute(y,o)}}else if(0===_.length||n){var a=this.props,i=a.scroll,u=a.resize;i&&(0,s.on)(e,"scroll",C,g),u&&(0,s.on)(window,"resize",C,g)}_.push(this),E(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",C,g),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=_.indexOf(this);-1!==n&&_.splice(n,1),0===_.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",C,g),(0,s.off)(window,"scroll",C,g))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,r=e.placeholder,o=e.className,i=e.classNamePrefix,s=e.style;return a.default.createElement("div",{className:i+"-wrapper "+o,ref:this.setRef,style:s},this.visible?n:r||a.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(o.Component);M.propTypes={className:i.default.string,classNamePrefix:i.default.string,once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool,style:i.default.object},M.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){f(this,o);var e=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+z(t),e}return h(o,n),r(o,[{key:"render",value:function(){return a.default.createElement(M,e,a.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=M,t.forceCheck=D,t.forceVisible=function(){for(var e=0;e<_.length;++e){var t=_[e];t.visible=!0,t.forceUpdate()}N()}},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,s=o["overflow-x"],l=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(s)&&n.test(l))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,s=void 0,l=function l(){var c=+new Date-i;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(s=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(s=e.apply(a,o),a=null,o=null),s}}},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,o;return t||(t=250),function(){var a=n||this,i=+new Date,s=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout((function(){r=i,e.apply(a,s)}),t)):(r=i,e.apply(a,s))}}},263:function(e,t,n){e.exports={neows:"neows_neows__2uGO_",title:"neows_title__2nJNk",asteroidsArray:"neows_asteroidsArray__12ksP",asteroid:"neows_asteroid__2yJLj",date:"neows_date__1m0qS",name:"neows_name__1hEuZ",diam:"neows_diam__MMk36",diameter:"neows_diameter__2AOIH",diameterEpx:"neows_diameterEpx__1dZVz",danger:"neows_danger___R-RL",hazardExp:"neows_hazardExp__1e_8Z"}},264:function(e,t,n){e.exports={title:"neowsMedia_title__1NUdx"}},277:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(263),a=n.n(o),i=n(264),s=n.n(i),l=n(4),c=n.n(l),d=n(27),u=n(80),f=n(77),p=n(59),h=n.n(p),m=n(250),v=n.n(m),b=n(78),j=n(60),y=n(76),_=n(33),O=n(10),w=n(2),x=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.errors.error})),n=j.b().shape({startDate:j.c().required("Start date required"),endDate:j.c().required("End date required")});return Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{initialValues:{startDate:"",endDate:""},validateOnBlur:!0,onSubmit:function(t){e(Object(u.c)(t.startDate,t.endDate)),e(Object(O.b)(null))},validationSchema:n,children:function(e){var n=e.values,r=e.errors,o=e.touched,a=e.handleSubmit,i=e.handleBlur,s=e.handleChange,l=e.isValid,d=e.dirty;return Object(w.jsxs)("form",{className:c()(h.a.form,v.a.form),children:[Object(w.jsx)("h3",{className:h.a.title,children:"Choose time interval"}),Object(w.jsxs)("div",{className:h.a.inputsHolder,children:[Object(y.b)(h.a.formSubtitle,"Start date",o.startDate,r.startDate,h.a.input,"date","startDate","1900-01-01",_.a,s,i,n.startDate),Object(y.b)(h.a.formSubtitle,"End date",o.endDate,r.endDate,h.a.input,"date","endDate","1900-01-01",_.a,s,i,n.endDate)]}),Object(w.jsx)("p",{className:h.a.intervalHint,children:"Maximal interval is 1 week"}),Object(y.a)(h.a.formButton,l,d,a,"Show"),t&&Object(w.jsx)("h3",{className:h.a.errorCase,children:"Not available, please change date interval"})]})}})})},g=n(6),E=n(255),N=n.n(E);t.default=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.neows.neowsArray})),n=Object(d.c)((function(e){return e.neows.intervalDateStart})),o=Object(d.c)((function(e){return e.neows.intervalDateEnd})),i=Object(d.c)((function(e){return e.library.searchStart})),l=Object(d.c)((function(e){return e.errors.error}));return Object(r.useEffect)((function(){e(Object(u.b)(n,o))}),[e,n,o]),Object(r.useEffect)((function(){e(Object(O.b)(null))}),[e]),i?Object(w.jsx)(g.a,{to:"/nasaLibrary"}):Object(w.jsxs)("div",{className:a.a.neows,children:[Object(w.jsx)("h2",{className:c()(a.a.title,s.a.title),children:"List of Asteroids based on their closest approach date to Earth"}),Object(w.jsx)(x,{}),0===t.length&&!l&&Object(w.jsx)(f.a,{}),0!==t.length&&!l&&Object(w.jsx)("div",{children:Object.keys(t).map((function(e){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("h3",{className:a.a.date,children:["Date: ",e]}),Object(w.jsx)("div",{className:a.a.asteroidsArray,children:t[e].map((function(e){return Object(w.jsx)("div",{className:a.a.asteroid,children:Object(w.jsx)(N.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{className:a.a.name,children:["Asteroid name: ",e.name]}),Object(w.jsxs)("div",{className:a.a.diam,children:[Object(w.jsx)("p",{className:a.a.diameter,children:"Diameter:"}),Object(w.jsxs)("p",{className:a.a.diameterEpx,children:["From ",e.estimated_diameter.meters.estimated_diameter_min.toFixed(2)," meters"]}),Object(w.jsxs)("p",{className:a.a.diameterEpx,children:["To ",e.estimated_diameter.meters.estimated_diameter_max.toFixed(2)," meters"]})]}),Object(w.jsx)("div",{children:Object(w.jsxs)("p",{className:a.a.danger,children:["Potentially hazardous? -",e.is_potentially_hazardous_asteroid?Object(w.jsx)("span",{className:a.a.hazardExp,children:" Yes"}):Object(w.jsx)("span",{children:" No"})]})})]})})},e.id)}))})]},e)}))})]})}}}]);
//# sourceMappingURL=8.6f134cd9.chunk.js.map