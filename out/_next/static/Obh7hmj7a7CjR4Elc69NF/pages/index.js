(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],d=r[s]||new Set;d.has(l)?o=!1:(d.add(l),r[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=o.default();function h(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("Tred"),c=n.n(u),s=n("Z4Yb"),l=n.n(s),f=n("YFqc"),d=n.n(f),p=a.a.createElement,h="Harrison Peng",m="Harrison's Website";function v(e){var t=e.children,n=e.home;return p("div",{className:c.a.container},p(i.a,null,p("link",{rel:"icon",href:"/favicon.ico"}),p("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),p("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(m),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),p("meta",{name:"og:title",content:m}),p("meta",{name:"twitter:card",content:"summary_large_image"})),p("header",{className:c.a.header},n?p(a.a.Fragment,null,p("img",{src:"/images/profile.png",className:"".concat(c.a.headerHomeImage," ").concat(l.a.borderCircle),alt:h}),p("h1",{className:l.a.heading2Xl},h),p("h2",{className:l.a.headingXl},"Traveling | Workout | Programming | Reading | Movie | Drama")):p(a.a.Fragment,null,p(d.a,{href:"/"},p("a",null,p("img",{src:"/images/profile.png",className:"".concat(c.a.headerImage," ").concat(l.a.borderCircle),alt:h}))),p("h2",{className:l.a.headingLg},p(d.a,{href:"/"},p("a",{className:l.a.colorInherit},h))))),p("main",null,t),!n&&p("div",{className:c.a.backToHome},p(d.a,{href:"/"},p("a",null,"\u2190 Back to home"))))}var g=a.a.createElement;function y(){return g(v,{home:!0},g(i.a,null,g("title",null,m)),g("section",{className:l.a.headingMd},g("p",null,"Hello")))}},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",backToHome:"layout_backToHome__1vZsp"}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(s,u);var c=l(s);function s(e){var o;return r(this,s),o=c.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},Z4Yb:function(e,t,n){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,d=l(n("q1tI")),p=n("QmWs"),h=n("g/15"),m=s(n("nOHt")),v=n("elyg");function g(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new Map,_=window.IntersectionObserver,b={};function w(){return f||(_?f=new _((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){o(n,e);var t=c(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:(0,v.addBasePath)(g(e)),as:t?(0,v.addBasePath)(g(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,u=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),u=u?(0,p.resolve)(c,u):i,e.preventDefault();var s=a.props.scroll;null==s&&(s=u.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](i,u,{shallow:a.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,p.resolve)(e,n);return[a,r?(0,p.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),d.default.cloneElement(o,i)}}]),n}(d.Component);t.default=k},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);