(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0Ytt":function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"0tVQ":function(e,t,r){r("FlQf"),r("VJsP"),e.exports=r("WEpk").Array.from},"2Eek":function(e,t,r){e.exports=r("W7oM")},"4mXO":function(e,t,r){e.exports=r("7TPF")},"5pKv":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"7TPF":function(e,t,r){r("AUvm"),e.exports=r("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,r){var n=r("Y7ZC"),o=r("uplh"),i=r("NsO/"),a=r("vwuL"),s=r("IP1Z");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=i(e),l=a.f,u=o(n),c={},f=0;u.length>f;)void 0!==(r=l(n,t=u[f++]))&&s(c,t,r);return c}})},CpBc:function(e,t,r){var n=r("Y7ZC"),o=r("EP9H");n(n.G+n.F*(parseFloat!=o),{parseFloat:o})},EP9H:function(e,t,r){var n=r("5T2Y").parseFloat,o=r("oc46").trim;e.exports=1/n(r("5pKv")+"-0")!==-1/0?function(e){var t=o(String(e),3),r=n(t);return 0===r&&"-"==t.charAt(0)?-0:r}:n},IP1Z:function(e,t,r){"use strict";var n=r("2faE"),o=r("rr1i");e.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},MXaZ:function(e,t,r){(function(t){var r="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,h=c||f||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,v=function(){return h.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=s.test(e);return r||l.test(e)?u(e.slice(2),r?2:8):a.test(e)?n:+e}e.exports=function(e,t,n){var o,i,a,s,l,u,c=0,f=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var r=o,n=i;return o=i=void 0,c=t,s=e.apply(n,r)}function C(e){var r=e-u;return void 0===u||r>=t||r<0||h&&e-c>=a}function S(){var e=v();if(C(e))return w(e);l=setTimeout(S,function(e){var r=t-(e-u);return h?m(r,a-(e-c)):r}(e))}function w(e){return l=void 0,d&&o?b(e):(o=i=void 0,s)}function x(){var e=v(),r=C(e);if(o=arguments,i=this,u=e,r){if(void 0===l)return function(e){return c=e,l=setTimeout(S,t),f?b(e):s}(u);if(h)return l=setTimeout(S,t),b(u)}return void 0===l&&(l=setTimeout(S,t)),s}return t=y(t)||0,g(n)&&(f=!!n.leading,a=(h="maxWait"in n)?p(y(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=i=l=void 0},x.flush=function(){return void 0===l?s:w(v())},x}}).call(this,r("yLpj"))},"Nj/G":function(e,t,r){e.exports=r("o3Tk")()},"Q/kn":function(e,t,r){e.exports={home:"index_home__3lYMY",title:"index_title__27Lr-",subtitle:"index_subtitle__b40wv",propSetter:"index_propSetter__fZj1r",propSetterLabel:"index_propSetterLabel__11tn7",propSetterInput:"index_propSetterInput__UIEjK",propSetterCheckbox:"index_propSetterCheckbox__1Ld03",propSetterColumn:"index_propSetterColumn__3nrAb",customArrow:"index_customArrow__1fgUV",customArrowLeft:"index_customArrowLeft__1DEel",customArrowRight:"index_customArrowRight__1ca54",customDot:"index_customDot__X40lY",customDotCurrent:"index_customDotCurrent__3hBqb"}},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("hfKm"),o=r.n(n),i=r("2Eek"),a=r.n(i),s=r("XoMD"),l=r.n(s),u=r("Jo+v"),c=r.n(u),f=r("4mXO"),h=r.n(f),d=r("pLtp"),p=r.n(d),m=r("p0XB"),v=r.n(m);var g=r("d04V"),y=r.n(g),b=r("yLu3"),C=r.n(b);function S(e){return function(e){if(v()(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(C()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return y()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=r("UXZV"),x=r.n(w);function N(){return(N=x.a||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var k=r("Wa2I"),E=r.n(k);function _(e,t,r){return t in e?o()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=r("q1tI"),T=r.n(D),O=r("jXUt"),A=r.n(O),P=r("Nj/G"),R=r.n(P),M=r("MXaZ"),j=r.n(M);const L={linear:e=>e,"ease-in":e=>e*e,"ease-out":e=>e*(2-e),"ease-in-out":e=>e<.5?2*e*e:(4-2*e)*e-1};var I=({element:e,duration:t,amount:r,property:n,easing:o})=>{const i="function"===typeof o?o:L[o||"linear"];return new Promise(o=>{let a=null;const s=e[n],l=u=>{a||(a=u);const c=((e,t,r)=>Math.min(Math.max(e,t),r))((u-a)/t,0,1);e[n]=s+r*i(c),c<1?window.requestAnimationFrame(l):o(e[n])};window.requestAnimationFrame(l)})};function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const X=100,Y=.001,$=200,F=(...e)=>e.map(e=>"string"===typeof e?e:e&&Object.entries(e).filter(([e,t])=>"undefined"!==e&&t).map(([e,t])=>e).join(" ")).filter(e=>e).join(" "),V=()=>{};class Z extends O.Component{constructor(...e){super(...e),U(this,"state",{current:0,slideCount:A.a.Children.count(this.props.children),dragging:!1,animating:!1}),U(this,"containerRef",Object(O.createRef)()),U(this,"sliderRef",Object(O.createRef)()),U(this,"animating",!1),U(this,"autoplayInterval",null),U(this,"lastTouch",{}),U(this,"touchScrolling",!1),U(this,"touching",!1),U(this,"velocity",{}),U(this,"drag",{isActive:!1,initialIndex:0,initialMousePos:{clientX:void 0,clientY:void 0},finalMousePos:{clientX:void 0,clientY:void 0}}),U(this,"inertialScrollHandler",j()(()=>{this.swapSlides().then(()=>{this.touchScrolling=!1,this.touching||this.snapCurrentToPosition()})},X)),U(this,"debouncedResize",j()(()=>{this.setCurrent(this.state.current)},$)),U(this,"renderArrows",()=>{if(!this.props.arrows)return null;const{renderArrows:e,infinite:t,arrowClassName:r,modifierLeftClassName:n,modifierRightClassName:o}=this.props,{current:i,animating:a,dragging:s,slideCount:l}=this.state;return"function"===typeof e?e({next:this.handleNext,previous:this.handlePrev,current:i,animating:a,dragging:s,slideCount:l}):A.a.createElement(A.a.Fragment,null,A.a.createElement("button",{className:F("rc-arrow","-left",r,n),disabled:a||s||!t&&0===i,onClick:this.handlePrev},"Prev"),A.a.createElement("button",{className:F("rc-arrow","-right",r,o),disabled:a||s||!t&&i===l-1,onClick:this.handleNext},"Next"))}),U(this,"renderDots",()=>{if(!this.props.dots)return null;const{renderDots:e,dotContainerClassName:t,dotClassName:r,modifierCurrentClassName:n}=this.props,{current:o,animating:i,dragging:a,slideCount:s}=this.state;if("function"===typeof e)return e({setCurrent:this.setCurrent,current:o,animating:i,dragging:a,slideCount:s});const l=e=>()=>this.setCurrent(e);return A.a.createElement("div",{className:F("rc-dots",t)},Array.from({length:s}).map((e,t)=>A.a.createElement("button",{className:F("rc-dot",{"-current":o===t,[n]:o===t},r),key:t,onClick:l(t)},t)))}),U(this,"offset",()=>{const{offset:e}=this.props,{animating:t,dragging:r,current:n}=this.state;return"function"===typeof e?e({animating:t,dragging:r,current:n}):e}),U(this,"setStateAsync",e=>new Promise(t=>this.setState(e,t))),U(this,"setupAutoplay",()=>{const{autoplayIntervalMs:e}=this.props;window.clearInterval(this.autoplayInterval),e>0&&(this.autoplayInterval=window.setInterval(()=>{const{autoplayDirection:e}=this.props;switch(e){case"ltr":this.handleNext();break;case"rtl":this.handlePrev()}},e))}),U(this,"setLastTouch",e=>{if(e.touches[0]){var t,r,n;const{clientX:o,clientY:i,timestamp:a}=this.lastTouch,{clientX:s,clientY:l}=e.touches[0],u=performance.now(),c=null!==(t=u-a)&&void 0!==t?t:u;this.velocity={x:(null!==(r=s-o)&&void 0!==r?r:s)/c,y:(null!==(n=l-i)&&void 0!==n?n:l)/c},this.lastTouch={timestamp:u,clientX:s,clientY:l}}}),U(this,"calculateCurrent",()=>{const{children:e}=this.sliderRef.current,{scrollLeft:t}=this.containerRef.current,{draggable:r,swapOnDragMoveEnd:n}=this.props;let o=1/0,i=null;for(let a=0;a<e.length;a+=1){const r=e[a],n=Math.abs(t-r.offsetLeft);if(!(n<o))break;o=n,i=a}if(r&&n&&!this.drag.isActive&&i===this.drag.initialIndex){const{initialIndex:e,initialMousePos:t,finalMousePos:r}=this.drag;if(r.clientX>t.clientX)return Math.max(e-1,0);if(r.clientX<t.clientX)return Math.min(e+1,this.state.slideCount-1)}return i}),U(this,"setCurrent",(e,t={snap:!1})=>{const{snap:r}=t,{current:n}=this.state,{slideSnapDuration:o,slideSnapEasing:i,slideTransitionDuration:a,slideTransitionEasing:s}=this.props,l=this.containerRef.current.scrollLeft,u=this.sliderRef.current.children[e].offsetLeft;return this.animating=!0,this.setState({animating:!0}),r||this.props.beforeChange({current:n,next:e}),I({element:this.containerRef.current,property:"scrollLeft",duration:r?o:a,amount:u-l-this.offset(),easing:r?i:s}).then(()=>(this.animating=!1,this.setStateAsync({current:e,animating:!1}))).then(()=>{r||this.props.afterChange({previous:n,current:e})})}),U(this,"snapCurrentToPosition",()=>this.setCurrent(this.state.current,{snap:!0})),U(this,"swapSlides",()=>{const e=this.state.current,t=this.calculateCurrent(),r=e!==t;return r&&this.props.beforeChange({current:e,next:t}),this.setStateAsync({current:t}).then(()=>r&&this.props.afterChange({previous:e,current:t}))}),U(this,"shouldAllowCrossAxisScrolling",e=>{var t,r;const n=Math.abs(null!==(t=this.velocity.x)&&void 0!==t?t:0),o=Math.abs(null!==(r=this.velocity.y)&&void 0!==r?r:0),i=o>=n;if(!(e.path||e.composedPath&&e.composedPath()).includes(this.containerRef.current)||i)return!0;const{touching:a,props:{disableNativeScroll:s,touchCrossAxisScrollThreshold:l,touchSwipeVelocityThreshold:u}}=this;return!s||a&&o>l&&n<u}),U(this,"setDragActive",e=>{this.setState({dragging:!0}),this.drag={isActive:!0,initialIndex:this.state.current,initialMousePos:{clientX:e.clientX,clientY:e.clientY},finalMousePos:{clientX:void 0,clientY:void 0}}}),U(this,"setDragInactive",e=>(this.drag={...this.drag,isActive:!1,finalMousePos:{clientX:e.clientX,clientY:e.clientY}},this.setStateAsync({dragging:!1}))),U(this,"handleNext",()=>{const{current:e,slideCount:t}=this.state;if(e!==t-1||this.props.infinite)return this.setCurrent((this.state.current+1)%this.state.slideCount)}),U(this,"handlePrev",()=>{const{current:e}=this.state;if(0!==e||this.props.infinite)return this.setCurrent(0===this.state.current?this.state.slideCount-1:this.state.current-1)}),U(this,"handleKeyboardControlDown",e=>{this.props.keyboardControl&&e.target===this.containerRef.current&&[37,39].includes(e.keyCode)&&(e.preventDefault(),e.stopPropagation())}),U(this,"handleKeyboardControlUp",e=>{if(this.props.keyboardControl&&e.target===this.containerRef.current)switch(e.keyCode){case 37:this.handlePrev();break;case 39:this.handleNext()}}),U(this,"handleSliderOnDragStart",e=>{this.props.draggable&&this.setDragActive(e)}),U(this,"handleSliderMouseMove",e=>{this.props.draggable&&(this.drag.isActive||1!==e.buttons||this.setDragActive(e),this.drag.isActive&&(this.containerRef.current.scrollLeft-=e.movementX,this.swapSlides()))}),U(this,"handleSliderMouseUp",e=>{this.props.draggable&&this.drag.isActive&&this.setDragInactive(e).then(()=>this.swapSlides()).then(()=>{this.snapCurrentToPosition(),this.drag={...this.drag,initalMousePos:{clientX:void 0,clientY:void 0},finalMousePos:{clientX:void 0,clientY:void 0}}})}),U(this,"handleSliderMouseLeave",e=>{this.handleSliderMouseUp(e)}),U(this,"handleSlideMouseUp",(e,t)=>{this.drag.isActive||this.state.current===t||(e.stopPropagation(),this.setCurrent(t))}),U(this,"handleSliderTouchStart",e=>{this.setLastTouch(e),this.touching=!0}),U(this,"handleSliderTouchMove",e=>{var t,r;this.setLastTouch(e),this.touchScrolling=Math.abs(null!==(t=null===(r=this.velocity)||void 0===r?void 0:r.x)&&void 0!==t?t:0)>Y}),U(this,"handleSliderTouchEnd",e=>{this.setLastTouch(e),this.touching=!1;const{disableNativeScroll:t,touchSwipeVelocityThreshold:r}=this.props;t&&Math.abs(this.velocity.x)>r&&(this.velocity.x>0?this.handlePrev():this.handleNext()),this.touchScrolling||t||this.snapCurrentToPosition()}),U(this,"handleScroll",()=>{this.animating||this.disableNativeScroll&&this.velocity.x||(this.swapSlides(),this.touchScrolling&&(this.inertialScrollHandler.cancel(),this.inertialScrollHandler()))}),U(this,"handleTouchScroll",e=>{this.shouldAllowCrossAxisScrolling(e)||e.preventDefault()}),U(this,"handleResize",()=>{this.debouncedResize.cancel(),this.debouncedResize()})}componentDidMount(){var e;window.addEventListener("keydown",this.handleKeyboardControlDown),window.addEventListener("keyup",this.handleKeyboardControlUp),window.addEventListener("resize",this.handleResize),this.containerRef.current.addEventListener("scroll",this.handleScroll),document.body.addEventListener("touchmove",this.handleTouchScroll,{passive:!1}),this.setCurrent(null!==(e=this.props.current)&&void 0!==e?e:0,{snap:!0}),this.setupAutoplay()}componentDidUpdate(e){e.autoplayIntervalMs!==this.props.autoplayIntervalMs&&this.setupAutoplay();const{count:t}=A.a.Children,r=t(this.props.children);t(e.children)!==r&&this.setState({slideCount:r});const{current:n}=this.props;"number"===typeof n&&e.current!==n&&this.setCurrent(n)}componentWillUnmount(){window.clearInterval(this.autoplayInterval),this.containerRef.current.removeEventListener("scroll",this.handleScroll),window.removeEventListener("keydown",this.handleKeyboardControlDown),window.removeEventListener("keyup",this.handleKeyboardControlUp),window.removeEventListener("resize",this.handleResize),document.body.removeEventListener("touchmove",this.handleTouchScroll),this.inertialScrollHandler.cancel(),this.debouncedResize.cancel()}render(){const{children:e,draggable:t,wrapperClassName:r,carouselClassName:n,sliderClassName:o,keyboardControl:i,disableNativeScroll:a,modifierCurrentClassName:s,modifierDraggableClassName:l,modifierDraggingClassName:u,modifierDisableScrollClassName:c}=this.props,{current:f,dragging:h}=this.state,d=this.offset();return A.a.createElement("div",{className:F("rc-wrapper",r)},A.a.createElement("div",{ref:this.containerRef,className:F("rc",{"-no-scroll":a,[c]:a},n),tabIndex:i?"0":"-1"},A.a.createElement("div",{ref:this.sliderRef,className:F("rc-slider",{"-draggable":t,"-dragging":h,[l]:t,[u]:h},o),style:{paddingLeft:d,paddingRight:d},onDragStart:this.handleSliderOnDragStart,onMouseDown:this.handleSliderMouseDown,onMouseMove:this.handleSliderMouseMove,onMouseLeave:this.handleSliderMouseLeave,onMouseUp:this.handleSliderMouseUp,onTouchStart:this.handleSliderTouchStart,onTouchMove:this.handleSliderTouchMove,onTouchEnd:this.handleSliderTouchEnd},A.a.Children.map(e,(e,t)=>A.a.cloneElement(e,{...e.props,key:t,className:F("rc-slide",{"-current":f===t,[s]:f===t},e.props.className),onMouseUp:e=>this.handleSlideMouseUp(e,t),onDragStart:e=>e.preventDefault(),onDrag:e=>e.preventDefault()})))),this.renderArrows(),this.renderDots())}}Z.propTypes={children:R.a.any.isRequired,arrows:R.a.bool,dots:R.a.bool,disableNativeScroll:R.a.bool,draggable:R.a.bool,infinite:R.a.bool,keyboardControl:R.a.bool,resetCurrentOnResize:R.a.bool,swapOnDragMoveEnd:R.a.bool,autoplayIntervalMs:R.a.number,autoplayDirection:R.a.oneOf(["ltr","rtl"]),offset:R.a.oneOfType([R.a.number,R.a.func]),slideSnapEasing:R.a.oneOfType([R.a.func,R.a.oneOf(["linear","ease-in","ease-out","ease-in-out"])]),slideSnapDuration:R.a.number,slideTransitionEasing:R.a.oneOfType([R.a.func,R.a.oneOf(["linear","ease-in","ease-out","ease-in-out"])]),slideTransitionDuration:R.a.number,touchSwipeVelocityThreshold:R.a.number,touchCrossAxisScrollThreshold:R.a.number,current:R.a.number,beforeChange:R.a.func,afterChange:R.a.func,renderArrows:R.a.func,renderDots:R.a.func,wrapperClassName:R.a.string,carouselClassName:R.a.string,sliderClassName:R.a.string,arrowClassName:R.a.string,dotContainerClassName:R.a.string,dotClassName:R.a.string,modifierDraggableClassName:R.a.string,modifierDraggingClassName:R.a.string,modifierCurrentClassName:R.a.string,modifierDisableScrollClassName:R.a.string,modifierLeftClassName:R.a.string,modifierRightClassName:R.a.string},Z.defaultProps={arrows:!1,dots:!1,disableNativeScroll:!1,draggable:!1,infinite:!1,keyboardControl:!1,resetCurrentOnResize:!0,swapOnDragMoveEnd:!0,autoplayIntervalMs:0,autoplayDirection:"ltr",offset:0,slideSnapEasing:"ease-in-out",slideSnapDuration:150,slideTransitionEasing:"ease-in-out",slideTransitionDuration:300,touchSwipeVelocityThreshold:.3,touchCrossAxisScrollThreshold:.45,beforeChange:V,afterChange:V};var z=Z,W=r("LvDl"),q=r("TSYQ"),K=r.n(q),H=r("Q/kn"),B=r.n(H),G=T.a.createElement;function J(e,t){var r=p()(e);if(h.a){var n=h()(e);t&&(n=n.filter((function(t){return c()(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){_(e,t,r[t])})):l.a?a()(e,l()(r)):J(Object(r)).forEach((function(t){o()(e,t,c()(r,t))}))}return e}var ee=[[["arrows","checkbox"],["dots","checkbox"],["disableNativeScroll","checkbox"],["draggable","checkbox"],["infinite","checkbox"],["keyboardControl","checkbox"],["resetCurrentOnResize","checkbox"],["swapOnDragMoveEnd","checkbox"]],[["autoplayIntervalMs","number"],["autoplayDirection",["ltr","rtl"]],["offset","number"],["slideSnapDuration","number"],["slideSnapEasing",["linear","ease-in","ease-out","ease-in-out"]],["slideTransitionDuration","number"],["slideTransitionEasing",["linear","ease-in","ease-out","ease-in-out"]],["touchSwipeVelocityThreshold","number"],["touchCrossAxisScrollThreshold","number"],["current","number"]],[["wrapperClassName","text"],["carouselClassName","text"],["sliderClassName","text"],["arrowClassName","text"],["dotContainerClassName","text"],["dotClassName","text"],["modifierDraggableClassName","text"],["modifierDraggingClassName","text"],["modifierCurrentClassName","text"],["modifierLeftClassName","text"],["modifierRightClassName","text"]]],te=function(e,t,r,n){var o,i="checkbox"===t?"checked":"value";return G("label",{key:e,className:B.a.propSetterLabel},Object(W.isArray)(t)&&G("select",{className:B.a.propSetterInput,onChange:function(t){return n(_({},e,t.target[i]))},value:r[e]},t.map((function(e){return G("option",{key:e,value:e},e)}))),!Object(W.isArray)(t)&&G("input",N({className:"checkbox"===t?B.a.propSetterCheckbox:B.a.propSetterInput},(_(o={type:t},i,r[e]),_(o,"onChange",(function(r){return n(_({},e,"number"===t?E()(r.target[i]):r.target[i]))})),o))),G("span",null,e))},re=function(e){var t=e.previous,r=e.next;return G(T.a.Fragment,null,G("span",{className:"".concat(B.a.customArrow," ").concat(B.a.customArrowLeft),onClick:t},"\u2190"),G("span",{className:"".concat(B.a.customArrow," ").concat(B.a.customArrowRight),onClick:r},"\u2192"))},ne=function(e){var t=e.setCurrent,r=e.current,n=e.slideCount;return G("ul",{className:"rc-dots"},y()({length:n}).map((function(e,n){return G("li",{className:K()(B.a.customDot,_({},B.a.customDotCurrent,r===n)),key:n,onClick:function(){return t(n)}})})))},oe=function(e){var t=e.children,r=Object(D.useState)(!1),n=r[0],o=r[1],i=Object(D.useState)(!1),a=i[0],s=i[1],l=Object(D.useState)(!1),u=l[0],c=l[1],f=Object(D.useReducer)((function(e,t){return Q({},e,{},t)}),{arrows:!1,dots:!1,disableNativeScroll:!1,draggable:!1,infinite:!1,keyboardControl:!1,resetCurrentOnResize:!0,swapOnDragMoveEnd:!0,autoplayIntervalMs:0,autoplayDirection:"ltr",slideSnapDuration:150,slideSnapEasing:"ease-in-out",slideTransitionDuration:300,slideTransitionEasing:"ease-in-out",touchSwipeVelocityThreshold:.3,touchCrossAxisScrollThreshold:.45,offset:100,current:0,renderArrows:void 0,renderDots:void 0,wrapperClassName:void 0,carouselClassName:void 0,sliderClassName:void 0,arrowClassName:void 0,dotContainerClassName:void 0,dotClassName:void 0,modifierDraggableClassName:void 0,modifierDraggingClassName:void 0,modifierCurrentClassName:void 0,modifierLeftClassName:void 0,modifierRightClassName:void 0,modifierDisableScrollClassName:void 0}),h=f[0],d=f[1],p={beforeChange:n?function(e){return console.log("beforeChange",e)}:function(){},afterChange:n?function(e){return console.log("afterChange",e)}:function(){}},m={renderArrows:a?re:void 0,renderDots:u?ne:void 0};return G(T.a.Fragment,null,G("div",{className:B.a.propSetter},ee.map((function(e,t){return G("div",{key:t,className:B.a.propSetterColumn},e.map((function(e){return te.apply(void 0,S(e).concat([h,d]))})))}))),G("div",{className:B.a.propSetter},G("div",{className:B.a.propSetterColumn},G("label",null,G("input",{type:"checkbox",checked:a,onChange:function(e){return s(e.target.checked)}}),"Use custom renderArrows"),G("label",null,G("input",{type:"checkbox",checked:u,onChange:function(e){return c(e.target.checked)}}),"Use custom renderDots")),G("div",{className:B.a.propSetterColumn},G("label",null,G("input",{type:"checkbox",checked:n,onChange:function(e){return o(e.target.checked)}}),"Log beforeChange and afterChange to console"))),t(Q({},h,{},p,{},m)))};t.default=function(){return G("div",{className:B.a.home},G("h1",{className:B.a.title},"@moxy/react-carousel explorer"),G(oe,null,(function(e){return G(z,e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return y()({length:e}).map((function(e,t){return G("img",{key:t,src:"https://placehold.it/300x300/".concat(t).concat(t).concat(t,"/fff")})}))}())})))}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},UXZV:function(e,t,r){e.exports=r("UbbE")},UbbE:function(e,t,r){r("o8NH"),e.exports=r("WEpk").Object.assign},VJsP:function(e,t,r){"use strict";var n=r("2GTP"),o=r("Y7ZC"),i=r("JB68"),a=r("sNwI"),s=r("NwJ3"),l=r("tEej"),u=r("IP1Z"),c=r("fNZA");o(o.S+o.F*!r("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,r,o,f,h=i(e),d="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,g=0,y=c(h);if(v&&(m=n(m,p>2?arguments[2]:void 0,2)),void 0==y||d==Array&&s(y))for(r=new d(t=l(h.length));t>g;g++)u(r,g,v?m(h[g],g):h[g]);else for(f=y.call(h),r=new d;!(o=f.next()).done;g++)u(r,g,v?a(f,m,[o.value,g],!0):o.value);return r.length=g,r}})},W7oM:function(e,t,r){r("nZgG");var n=r("WEpk").Object;e.exports=function(e,t){return n.defineProperties(e,t)}},Wa2I:function(e,t,r){e.exports=r("e+cT")},XoMD:function(e,t,r){e.exports=r("hYAz")},d04V:function(e,t,r){e.exports=r("0tVQ")},"e+cT":function(e,t,r){r("CpBc"),e.exports=r("WEpk").parseFloat},hYAz:function(e,t,r){r("7m0m"),e.exports=r("WEpk").Object.getOwnPropertyDescriptors},jOG8:function(e,t,r){"use strict";var n=r("Qetd"),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var p=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var v="function"===typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function C(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function S(){}function w(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=C.prototype;var x=w.prototype=new S;x.constructor=w,n(x,C.prototype),x.isPureReactComponent=!0;var N={current:null},k={current:null},E=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,r){var n,o={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:k.current}}function T(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g,A=[];function P(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case a:l=!0}}if(l)return n(o,t,""===r?"."+j(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=r+j(s=t[u],u);l+=e(s,c,n,o)}else if(null===t||"object"!==typeof t?c=null:c="function"===typeof(c=v&&t[v]||t["@@iterator"])?c:null,"function"===typeof c)for(t=c.call(t),u=0;!(s=t.next()).done;)l+=e(s=s.value,c=r+j(s,u++),n,o);else if("object"===s)throw n=""+t,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(O,"$&/")+"/"),M(e,I,t=P(t,i,n,o)),R(t)}function X(){var e=N.current;if(null===e)throw Error(g(321));return e}var Y={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,L,t=P(null,null,t,r)),R(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(g(143));return e}},createRef:function(){return{current:null}},Component:C,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:h,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return X().useCallback(e,t)},useContext:function(e,t){return X().useContext(e,t)},useEffect:function(e,t){return X().useEffect(e,t)},useImperativeHandle:function(e,t,r){return X().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return X().useLayoutEffect(e,t)},useMemo:function(e,t){return X().useMemo(e,t)},useReducer:function(e,t,r){return X().useReducer(e,t,r)},useRef:function(e){return X().useRef(e)},useState:function(e){return X().useState(e)},Fragment:s,Profiler:u,StrictMode:l,Suspense:d,createElement:D,cloneElement:function(e,t,r){if(null===e||void 0===e)throw Error(g(267,e));var o=n({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)E.call(t,c)&&!_.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:l}},createFactory:function(e){var t=D.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},$={default:Y},F=$&&Y||$;e.exports=F.default||F},jXUt:function(e,t,r){"use strict";e.exports=r("jOG8")},nZgG:function(e,t,r){var n=r("Y7ZC");n(n.S+n.F*!r("jmDH"),"Object",{defineProperties:r("fpC5")})},o3Tk:function(e,t,r){"use strict";var n=r("0Ytt");function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},o8NH:function(e,t,r){var n=r("Y7ZC");n(n.S+n.F,"Object",{assign:r("kwZ1")})},oc46:function(e,t,r){var n=r("Y7ZC"),o=r("Jes0"),i=r("KUxP"),a=r("5pKv"),s="["+a+"]",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),c=function(e,t,r){var o={},s=i((function(){return!!a[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),l=o[e]=s?t(f):a[e];r&&(o[r]=l),n(n.P+n.F*s,"String",o)},f=c.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=c},uplh:function(e,t,r){var n=r("ar/p"),o=r("mqlF"),i=r("5K7Z"),a=r("5T2Y").Reflect;e.exports=a&&a.ownKeys||function(e){var t=n.f(i(e)),r=o.f;return r?t.concat(r(e)):t}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",1,2,4,0]]]);