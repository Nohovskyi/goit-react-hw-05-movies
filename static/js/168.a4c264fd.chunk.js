"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{687:function(t,n,e){e.d(n,{CL:function(){return _},KS:function(){return h},VQ:function(){return w},dI:function(){return v},wH:function(){return y}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="9f3449ca8495a13b6d35e887839f0061",s="https://api.themoviedb.org/3",o="".concat(s,"/trending/movie/week"),p="".concat(s,"/search/movie"),f="".concat(s,"/movie/");function h(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e=new URLSearchParams({api_key:i,page:n}),t.abrupt("return",u.Z.get("".concat(o,"?").concat(e)));case 3:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:i,query:n}),t.abrupt("return",u.Z.get("".concat(p,"?").concat(e)));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n,r=new URLSearchParams({api_key:i}),t.abrupt("return",u.Z.get("".concat(f).concat(e,"?").concat(r)));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n,r=new URLSearchParams({api_key:i}),t.abrupt("return",u.Z.get("".concat(s,"/movie/").concat(e,"/credits?").concat(r)));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n,r=new URLSearchParams({api_key:i}),t.abrupt("return",u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?").concat(r)));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},168:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),s=e(689),o=e(687),p=e(474),f="Reviews_list__okdpy",h="Reviews_list__text__pib+T",l="Reviews_list__item__QxZSA",v=e(184),m=function(){var t=(0,s.UO)().movieId,n=(0,i.useState)([]),e=(0,a.Z)(n,2),c=e[0],m=e[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.wH)(t);case 2:e=n.sent,r=e.data.results,m(r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,v.jsx)(v.Fragment,{children:c.length?(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)(p.a,{}),children:(0,v.jsx)("ul",{className:f,children:c.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,v.jsxs)("li",{className:l,children:[(0,v.jsxs)("h3",{children:["Author: ",e]}),(0,v.jsx)("p",{className:h,children:r})]},n)}))})}):(0,v.jsx)("p",{children:"We do not have any reviews for this movie"})})}}}]);
//# sourceMappingURL=168.a4c264fd.chunk.js.map