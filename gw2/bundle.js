!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){n(4),e.exports=n(3)},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(){return Math.floor(2*Math.random())%2==0}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._books=t,this._achievements=n}var t,n,o;return t=e,(n=[{key:"generateCompleteProgress",value:function(){return this._achievements.map(function(e){return{bits:[],current:e.bits.length,done:!0,id:e.achievementId,max:e.bits.length}})}},{key:"generatePartialProgress",value:function(){return this._achievements.map(function(e){var t=e.bits.length,n=s(),o=[],r=t;if(!n){for(var a=0;a<t;a++){s()?o.push(a):r--}r==t&&(n=!0,o=[])}return{bits:o,current:r,done:n,id:e.achievementId,max:t}})}},{key:"mapAchievementsToBooks",value:function(e){var t={};this._achievements.forEach(function(e){return t[e.achievementId]=e});var n={},o=[];return this._books.forEach(function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}({},e,{status:"locked"});o.push(t),n[e.name]=t}),e.forEach(function(e){var o=t[e.id];null!=o&&(o.bits.map(function(t,o){if(e.done||e.bits.includes(o)){var r=t.book;if(r)if(t.page){var a=n[r];null==a?console.log("Unable to find book with name: "+r):a.text.find(function(e){return e.page==t.page}).isUnlocked=!0}else n[r].status="complete"}}),e.done&&o.unlockOnCompletion&&o.unlockOnCompletion.forEach(function(e){var t=e.book;n[t].text.find(function(t){return t.page==e.page}).isUnlocked=!0}))}),o.forEach(function(e){if("paged"==e.type){var t=e.text.filter(function(e){return e.isUnlocked}).length;0==t||(t==e.text.length?e.status="complete":e.status="partial")}else"book-paged"==e.type&&"complete"==e.status&&e.text.forEach(function(e){return e.isUnlocked=!0})}),o}}])&&u(t.prototype,n),o&&u(t,o),e}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props.book;return r.a.createElement("div",{className:"card border-warning"},r.a.createElement("div",{className:"card-body text-warning"},r.a.createElement("h4",{className:"card-title"},e.name),"You have yet to acquire this book."))}}])&&p(n.prototype,o),a&&p(n,a),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,O(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e="Page Missing",t="warning";return this.props.page.isUnlocked&&(e=this.props.page.text,t="primary"),r.a.createElement("div",{className:"card mb-3 border-"+t},this.props.page.description&&r.a.createElement("div",{className:"card-header"},this.props.page.description),r.a.createElement("div",{className:"preview card-body"},e.split("\n").map(function(e,t){return r.a.createElement("p",{key:"p-"+t},e)})))}}])&&v(n.prototype,o),a&&v(n,a),t}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,j(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props.book;return e?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.name),e.text.map(function(e){return r.a.createElement(k,{page:e,key:e.page})}))):"Uh-oh"}}])&&E(n.prototype,o),a&&E(n,a),t}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,T(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props.value;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"preview card-body"},r.a.createElement("h4",{className:"card-title"},e.name),e.text.split("\n").map(function(e,t){return r.a.createElement("p",{key:"p-"+t},e)})))}}])&&N(n.prototype,o),a&&N(n,a),t}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,M(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props.book;return e?"locked"==e.status?r.a.createElement(h,{book:e}):"paged"==e.type||"book-paged"==e.type?r.a.createElement(C,{book:e}):r.a.createElement(B,{value:e}):r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body text-secondary"},"No book selected to preview."))}}])&&U(n.prototype,o),a&&U(n,a),t}();function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),q(this,F(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r.a.Component),n=t,(o=[{key:"handleChange",value:function(e){this.props.onChange(e.target.checked)}},{key:"render",value:function(){return r.a.createElement("label",{className:"btn form-check-inline btn-outline-primary btn-sm "+(this.props.isChecked?"active":"disabled")},r.a.createElement("input",{type:"checkbox",checked:this.props.isChecked,onChange:this.handleChange.bind(this),autoComplete:"off"})," ",this.props.name)}}])&&V(n.prototype,o),a&&V(n,a),t}();function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Q(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,W(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,r.a.Component),n=t,(o=[{key:"setValue",value:function(e,t){this.props.onSelectionChange(e,t)}},{key:"render",value:function(){var e=this,t=this.props.filters;return console.log(t.products),r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("label",{className:"my-1 mr-2"},"Show only"),r.a.createElement("div",{className:"btn-group-toggle mr-1"},Object.keys(t).map(function(n){return r.a.createElement(G,{key:n,name:n,isChecked:t[n],onChange:function(t){return e.setValue(n,t)}})})))}}])&&J(n.prototype,o),a&&J(n,a),t}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function te(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=te(this,ne(t).call(this,e))).state=e.value,n.onClick=e.onClick,n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e="light";switch(this.state.status){case"partial":e="secondary";break;case"complete":e="primary"}return r.a.createElement("a",{href:"#",className:"list-group-item-"+e+" list-group-item "+(this.props.filters[this.state.status]?"d-flex":"d-none")+" justify-content-between align-items-center",onClick:this.onClick},this.state.name,"partial"==this.state.status&&r.a.createElement("span",{className:"badge badge-warning badge-pill"},this.state.text.filter(function(e){return!e.isUnlocked}).length))}}])&&ee(n.prototype,o),a&&ee(n,a),t}();function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ce(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var le=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ce(this,ue(t).call(this,e))).state={achievements:[],isLoaded:!1,error:null,preview:null,filters:{complete:!0,partial:!0,locked:!0}},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;if("UNLOCK_ALL"!=this.props.apiKey)if("UNLOCK_NONE"!=this.props.apiKey)if("UNLOCK_SOME"!=this.props.apiKey){var t="https://api.guildwars2.com/v2/account/achievements?access_token="+this.props.apiKey;fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({achievements:t,isLoaded:!0})},function(t){e.setState({isLoaded:!0,error:t})})}else{var n=this.props.repository.generatePartialProgress();this.setState({achievements:n,isLoaded:!0})}else this.setState({achievements:[],isLoaded:!0});else{var o=this.props.repository.generateCompleteProgress();this.setState({achievements:o,isLoaded:!0})}}},{key:"previewBook",value:function(e){this.setState({preview:e})}},{key:"_onSelectionChange",value:function(e,t){var n=this.state.filters;n[e]=t,this.setState({filters:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,o=t.isLoaded,a=t.achievements,i=t.preview,c=t.filters;if(n)return r.a.createElement("div",null,"Error: ",n.message);if(o){var u=this.props.repository.mapAchievementsToBooks(a);return u.sort(function(e,t){return e.name.localeCompare(t.name)}),r.a.createElement("div",{className:"codex container-fluid h-100"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Tyrian Bookshelf")),r.a.createElement("div",{className:"row",style:{height:"90%"}},r.a.createElement("div",{className:"col-sm-4 h-100",style:{overflowY:"auto"}},r.a.createElement(Z,{filters:c,onSelectionChange:this._onSelectionChange.bind(this)}),r.a.createElement("div",{className:"list-group"},u.map(function(t){return r.a.createElement(re,{key:t.name,value:t,onClick:function(){return e.previewBook(t)},filters:c})}))),r.a.createElement("div",{className:"col-sm-8 h-100",style:{overflowY:"auto"}},r.a.createElement(D,{book:i}))))}return r.a.createElement("div",null,"Loading achievement progress...")}}])&&ie(n.prototype,o),a&&ie(n,a),t}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=ye(t).call(this,e))||"object"!==fe(r)&&"function"!=typeof r?be(o):r).state={apiKey:"UNLOCK_ALL",areBooksLoaded:!1,books:null,areAchievementsLoaded:!1,achievements:null,filters:{}},n.handleChange=n.handleChange.bind(be(n)),n.handleSubmit=n.handleSubmit.bind(be(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;fetch("https://floodbars.github.io/gw2/data/bookshelf-achievements.json").then(function(e){return e.json()}).then(function(t){e.setState({errors:e.state.errors,achievements:t,areAchievementsLoaded:!0})},function(t){e.setState({areAchievementsLoaded:!0,books:e.state.books,areBooksLoaded:e.state.areBooksLoaded,error:t})}),fetch("https://floodbars.github.io/gw2/data/bookshelf-books.json").then(function(e){return e.json()}).then(function(t){e.setState({errors:e.state.errors,books:t,areBooksLoaded:!0})},function(t){e.setState({areBooksLoaded:!0,achievements:e.state.achievements,areAchievementsLoaded:e.state.areAchievementsLoaded,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.areBooksLoaded,o=e.areAchievementsLoaded;e.books,e.achievements,e.preview;return t?r.a.createElement("div",null,"Error: ",t.message):n&&o?r.a.createElement("div",null,r.a.createElement("h1",null,"Tyrian Bookshelf"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"api-key"},"API Key"),r.a.createElement("input",{id:"api-key",className:"form-control",onChange:this.handleChange,value:this.state.apiKey})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Load"))):r.a.createElement("div",null,"Loading data...")}},{key:"handleChange",value:function(e){this.setState({apiKey:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.apiKey.length){this.setState(function(e){return{apiKey:e.apiKey}});var t=new l(this.state.books,this.state.achievements);i.a.render(r.a.createElement(le,{apiKey:this.state.apiKey,repository:t}),document.getElementById("root"))}}}])&&pe(n.prototype,o),a&&pe(n,a),t}();i.a.render(r.a.createElement(he,null),document.getElementById("root"))}]);