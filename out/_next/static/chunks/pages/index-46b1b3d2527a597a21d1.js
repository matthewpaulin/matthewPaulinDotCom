(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{612:function(e,t,i){"use strict";var n=i(5893);t.Z=function(e){var t=e.image,i=e.style,r=e.className;return(0,n.jsx)("img",{src:t.url,alt:t.alternativeText,style:i,className:r})}},1887:function(e,t,i){"use strict";i.d(t,{o:function(){return o}});var n=i(5893),r=(i(7294),i(5656)),s={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}},o=function(e){var t=e.children,i=e.variants;return(0,n.jsx)(r.E.main,{variants:i||s,initial:"hidden",animate:"enter",exit:"exit",transition:{type:"linear"},children:t})}},7587:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return _},default:function(){return E}});var n=i(5893),r=i(1664),s=i(7625),o=i(9398),a=i(1417),c=i(612);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(c){r=!0,s=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=i(7294),u=i(655),p=i(4394),f=i(6368),C=i(4838);function v(){var e=!1,t=[],i=new Set,n={subscribe:function(e){return i.add(e),function(){i.delete(e)}},start:function(n,r){if(e){var s=[];return i.forEach((function(e){s.push((0,f.d5)(e,n,{transitionOverride:r}))})),Promise.all(s)}return new Promise((function(e){t.push({animation:[n,r],resolve:e})}))},set:function(t){return(0,p.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),i.forEach((function(e){(0,C.gg)(e,t)}))},stop:function(){i.forEach((function(e){(0,f.p_)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,i=e.resolve;n.start.apply(n,(0,u.ev)([],(0,u.CR)(t))).then(i)})),function(){e=!1,n.stop()}}};return n}var m=i(5930);var x=i(5656);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var y=new Map,j=new WeakMap,V=0;function w(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(i=e.root)?(j.has(i)||(V+=1,j.set(i,V.toString())),j.get(i)):"0":e[t]);var i})).toString()}function b(e,t,i){if(void 0===i&&(i={}),!e)return function(){};var n=function(e){var t=w(e),i=y.get(t);if(!i){var n,r=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var i,s=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(i=r.get(t.target))||i.forEach((function(e){e(s,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:s,elements:r},y.set(t,i)}return i}(i),r=n.id,s=n.observer,o=n.elements,a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),y.delete(r))}}function k(e){return"function"!==typeof e.children}var H=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,t){e&&i.props.triggerOnce&&i.unobserve(),k(i.props)||i.setState({inView:e,entry:t}),i.props.onChange&&i.props.onChange(e,t)},i.state={inView:!!t.initialInView,entry:void 0},i}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r=n.prototype;return r.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,i=e.root,n=e.rootMargin,r=e.trackVisibility,s=e.delay;this._unobserveCb=b(this.node,this.handleChange,{threshold:t,root:i,rootMargin:n,trackVisibility:r,delay:s})}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!k(this.props)){var e=this.state,t=e.inView,i=e.entry;return this.props.children({inView:t,entry:i,ref:this.handleNode})}var n=this.props,r=n.children,s=n.as,o=n.tag,a=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,d.createElement)(s||o||"div",g({ref:this.handleNode},a),r)},n}(d.Component);H.displayName="InView",H.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var N=function(e){var t=e.children,i=function(){var e=(0,m.h)(v);return(0,d.useEffect)(e.mount,[]),e}(),r=h(function(e){var t=void 0===e?{}:e,i=t.threshold,n=t.delay,r=t.trackVisibility,s=t.rootMargin,o=t.root,a=t.triggerOnce,c=t.skip,l=t.initialInView,h=(0,d.useRef)(),u=(0,d.useState)({inView:!!l}),p=u[0],f=u[1],C=(0,d.useCallback)((function(e){void 0!==h.current&&(h.current(),h.current=void 0),c||e&&(h.current=b(e,(function(e,t){f({inView:e,entry:t}),t.isIntersecting&&a&&h.current&&(h.current(),h.current=void 0)}),{root:o,rootMargin:s,threshold:i,trackVisibility:r,delay:n}))}),[Array.isArray(i)?i.toString():i,o,s,a,c,r,n]);(0,d.useEffect)((function(){h.current||!p.entry||a||c||f({inView:!!l})}));var v=[C,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),2),s=r[0],o=r[1];return(0,d.useEffect)((function(){o?i.start("visible"):i.start("hidden")}),[i,o]),(0,n.jsx)(x.E.div,{ref:s,animate:i,initial:"hidden",transition:{duration:.3},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:0}},children:t})},M=i(1887),_=!0;function E(e){var t=e.projects;return(0,n.jsx)(M.o,{children:(0,n.jsxs)("div",{id:"home-page",children:[(0,n.jsx)("section",{id:"main-hero",className:"is-flex is-flex-direction-column is-justify-content-center px-6 pt-6",children:(0,n.jsxs)("div",{className:"has-text-centered is-align-self-center",children:[(0,n.jsxs)("svg",{id:"name",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1079 112",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M101.896 10.352V110H88.792V35.696L55.672 110H46.456L13.192 35.552V110H0.0880127V10.352H14.2L51.064 92.72L87.928 10.352H101.896Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M119.223 70.256C119.223 62.192 120.855 55.136 124.119 49.088C127.383 42.944 131.847 38.192 137.511 34.832C143.271 31.472 149.655 29.792 156.663 29.792C163.575 29.792 169.575 31.28 174.663 34.256C179.751 37.232 183.543 40.976 186.039 45.488V31.088H199.287V110H186.039V95.312C183.447 99.92 179.559 103.76 174.375 106.832C169.287 109.808 163.335 111.296 156.519 111.296C149.511 111.296 143.175 109.568 137.511 106.112C131.847 102.656 127.383 97.808 124.119 91.568C120.855 85.328 119.223 78.224 119.223 70.256ZM186.039 70.4C186.039 64.448 184.839 59.264 182.439 54.848C180.039 50.432 176.775 47.072 172.647 44.768C168.615 42.368 164.151 41.168 159.255 41.168C154.359 41.168 149.895 42.32 145.863 44.624C141.831 46.928 138.615 50.288 136.215 54.704C133.815 59.12 132.615 64.304 132.615 70.256C132.615 76.304 133.815 81.584 136.215 86.096C138.615 90.512 141.831 93.92 145.863 96.32C149.895 98.624 154.359 99.776 159.255 99.776C164.151 99.776 168.615 98.624 172.647 96.32C176.775 93.92 180.039 90.512 182.439 86.096C184.839 81.584 186.039 76.352 186.039 70.4Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M237.416 41.888V88.4C237.416 92.24 238.232 94.976 239.864 96.608C241.496 98.144 244.328 98.912 248.36 98.912H258.008V110H246.2C238.904 110 233.432 108.32 229.784 104.96C226.136 101.6 224.312 96.08 224.312 88.4V41.888H214.088V31.088H224.312V11.216H237.416V31.088H258.008V41.888H237.416Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M289.869 41.888V88.4C289.869 92.24 290.685 94.976 292.317 96.608C293.949 98.144 296.781 98.912 300.813 98.912H310.461V110H298.653C291.357 110 285.885 108.32 282.237 104.96C278.589 101.6 276.765 96.08 276.765 88.4V41.888H266.541V31.088H276.765V11.216H289.869V31.088H310.461V41.888H289.869Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M365.506 29.648C371.458 29.648 376.834 30.944 381.634 33.536C386.434 36.032 390.178 39.824 392.866 44.912C395.65 50 397.042 56.192 397.042 63.488V110H384.082V65.36C384.082 57.488 382.114 51.488 378.178 47.36C374.242 43.136 368.866 41.024 362.05 41.024C355.138 41.024 349.618 43.184 345.49 47.504C341.458 51.824 339.442 58.112 339.442 66.368V110H326.338V3.43999H339.442V42.32C342.034 38.288 345.586 35.168 350.098 32.96C354.706 30.752 359.842 29.648 365.506 29.648Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M490.447 67.52C490.447 70.016 490.303 72.656 490.015 75.44H426.943C427.423 83.216 430.063 89.312 434.863 93.728C439.759 98.048 445.663 100.208 452.575 100.208C458.239 100.208 462.943 98.912 466.687 96.32C470.527 93.632 473.215 90.08 474.751 85.664H488.863C486.751 93.248 482.527 99.44 476.191 104.24C469.855 108.944 461.983 111.296 452.575 111.296C445.087 111.296 438.367 109.616 432.415 106.256C426.559 102.896 421.951 98.144 418.591 92C415.231 85.76 413.551 78.56 413.551 70.4C413.551 62.24 415.183 55.088 418.447 48.944C421.711 42.8 426.271 38.096 432.127 34.832C438.079 31.472 444.895 29.792 452.575 29.792C460.063 29.792 466.687 31.424 472.447 34.688C478.207 37.952 482.623 42.464 485.695 48.224C488.863 53.888 490.447 60.32 490.447 67.52ZM476.911 64.784C476.911 59.792 475.807 55.52 473.599 51.968C471.391 48.32 468.367 45.584 464.527 43.76C460.783 41.84 456.607 40.88 451.999 40.88C445.375 40.88 439.711 42.992 435.007 47.216C430.399 51.44 427.759 57.296 427.087 64.784H476.911Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M612.864 31.088L588.24 110H574.704L555.696 47.36L536.688 110H523.152L498.384 31.088H511.776L529.92 97.328L549.504 31.088H562.896L582.048 97.472L599.904 31.088H612.864Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M731.364 39.008C731.364 47.36 728.484 54.32 722.724 59.888C717.06 65.36 708.372 68.096 696.66 68.096H677.364V110H664.26V9.63199H696.66C707.988 9.63199 716.58 12.368 722.436 17.84C728.388 23.312 731.364 30.368 731.364 39.008ZM696.66 57.296C703.956 57.296 709.332 55.712 712.788 52.544C716.244 49.376 717.972 44.864 717.972 39.008C717.972 26.624 710.868 20.432 696.66 20.432H677.364V57.296H696.66Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M742.755 70.256C742.755 62.192 744.387 55.136 747.651 49.088C750.915 42.944 755.378 38.192 761.042 34.832C766.802 31.472 773.187 29.792 780.195 29.792C787.107 29.792 793.107 31.28 798.195 34.256C803.283 37.232 807.074 40.976 809.57 45.488V31.088H822.818V110H809.57V95.312C806.978 99.92 803.09 103.76 797.906 106.832C792.818 109.808 786.866 111.296 780.05 111.296C773.042 111.296 766.706 109.568 761.042 106.112C755.378 102.656 750.915 97.808 747.651 91.568C744.387 85.328 742.755 78.224 742.755 70.256ZM809.57 70.4C809.57 64.448 808.371 59.264 805.971 54.848C803.571 50.432 800.307 47.072 796.179 44.768C792.147 42.368 787.682 41.168 782.786 41.168C777.89 41.168 773.427 42.32 769.395 44.624C765.363 46.928 762.147 50.288 759.747 54.704C757.347 59.12 756.146 64.304 756.146 70.256C756.146 76.304 757.347 81.584 759.747 86.096C762.147 90.512 765.363 93.92 769.395 96.32C773.427 98.624 777.89 99.776 782.786 99.776C787.682 99.776 792.147 98.624 796.179 96.32C800.307 93.92 803.571 90.512 805.971 86.096C808.371 81.584 809.57 76.352 809.57 70.4Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M914.947 31.088V110H901.843V98.336C899.347 102.368 895.843 105.536 891.331 107.84C886.915 110.048 882.019 111.152 876.643 111.152C870.499 111.152 864.979 109.904 860.083 107.408C855.187 104.816 851.299 100.976 848.419 95.888C845.635 90.8 844.243 84.608 844.243 77.312V31.088H857.203V75.584C857.203 83.36 859.171 89.36 863.107 93.584C867.043 97.712 872.419 99.776 879.235 99.776C886.243 99.776 891.763 97.616 895.795 93.296C899.827 88.976 901.843 82.688 901.843 74.432V31.088H914.947Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M950.176 3.43999V110H937.072V3.43999H950.176Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M979.278 18.272C976.782 18.272 974.67 17.408 972.942 15.68C971.214 13.952 970.35 11.84 970.35 9.34398C970.35 6.84799 971.214 4.73599 972.942 3.00799C974.67 1.27999 976.782 0.415985 979.278 0.415985C981.678 0.415985 983.694 1.27999 985.326 3.00799C987.054 4.73599 987.918 6.84799 987.918 9.34398C987.918 11.84 987.054 13.952 985.326 15.68C983.694 17.408 981.678 18.272 979.278 18.272ZM985.614 31.088V110H972.51V31.088H985.614Z",stroke:"white",strokeWidth:"5"}),(0,n.jsx)("path",{d:"M1046.4 29.648C1056 29.648 1063.77 32.576 1069.72 38.432C1075.68 44.192 1078.65 52.544 1078.65 63.488V110H1065.69V65.36C1065.69 57.488 1063.72 51.488 1059.79 47.36C1055.85 43.136 1050.48 41.024 1043.66 41.024C1036.75 41.024 1031.23 43.184 1027.1 47.504C1023.07 51.824 1021.05 58.112 1021.05 66.368V110H1007.95V31.088H1021.05V42.32C1023.64 38.288 1027.15 35.168 1031.56 32.96C1036.08 30.752 1041.02 29.648 1046.4 29.648Z",stroke:"white",strokeWidth:"5"})]}),(0,n.jsx)("p",{className:"fadein is-size-4 pt-6",children:"Fourth-year Software Engineering Student @ McMaster University"}),(0,n.jsxs)("ul",{className:"fadein is-flex is-flex-direction-row is-justify-content-center py-6",children:[(0,n.jsx)("li",{className:"px-5",children:(0,n.jsx)("a",{href:"mailto:matthewjpaulin@gmail.com",children:(0,n.jsx)("span",{className:"icon is-large has-text-light glowing hero-icon",children:(0,n.jsx)(s.G,{icon:o.JF9})})})}),(0,n.jsx)("li",{className:"px-5",children:(0,n.jsx)("a",{href:"https://github.com/matthewpaulin",children:(0,n.jsx)("span",{className:"icon is-large has-text-light glowing hero-icon",children:(0,n.jsx)(s.G,{icon:a.pUg})})})}),(0,n.jsx)("li",{className:"px-5",children:(0,n.jsx)("a",{href:"https://www.linkedin.com/in/matthew-paulin",children:(0,n.jsx)("span",{className:"icon is-large has-text-light glowing hero-icon",children:(0,n.jsx)(s.G,{icon:a.D9H})})})})]})]})}),(0,n.jsx)("section",{id:"projects",className:"container my-5",children:(0,n.jsx)("div",{className:"project-columns",children:t&&t.map((function(e){return(0,n.jsx)(N,{children:(0,n.jsx)("div",{className:"project-column",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("header",{className:"card-header",children:(0,n.jsx)("p",{className:"card-header-title is-centered is-size-4",children:e.title})}),(0,n.jsx)("div",{className:"card-image",children:(0,n.jsx)("figure",{className:"image",children:e.preview.url&&(0,n.jsx)(c.Z,{image:e.preview,style:{maxHeight:"350px",width:"auto",margin:"auto"}})||(0,n.jsx)("img",{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"})})}),(0,n.jsxs)("div",{className:"card-content",children:[(0,n.jsx)("div",{className:"tags",children:e&&e.categories.map((function(e,t){return(0,n.jsx)("span",{className:"tag is-link is-medium",children:e},t)}))}),(0,n.jsxs)("div",{className:"project-preview is-flex is-flex-direction-column is-justify-content-space-between",children:[(0,n.jsx)("div",{className:"content has-text-weight-semibold has-text-justified",children:e.subtitle}),(0,n.jsxs)("div",{className:"has-text-centered",children:[(0,n.jsx)(r.default,{href:"/project/".concat(e.slug),children:(0,n.jsx)("button",{className:"button is-dark is-outlined is-rounded",style:{width:"100%"},children:"View Project"})},e.id),e.date&&(0,n.jsx)("p",{className:"has-text-right pt-2 is-size-7",children:e.date})]})]})]})]},e.id)},e.id)})}))})})]})})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7587)}])}},function(e){e.O(0,[656,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);