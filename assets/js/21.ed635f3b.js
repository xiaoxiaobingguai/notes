(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{187:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在 使用 Date 相关 api 的时候要牢记一个坑，就是 Safari 对一些时间格式是不支持的。比如：")]),t._v(" "),t._m(2),s("p",[t._v("问题就出在 Safari 对于这个格式 YYYY-MM-DD HH:MM:SS 无法解析，Safari 要求 Date.parse()或 Date()转换日期的字符串需要满足 RFC2822 或 ISO 8601 定义的格式。不过我们可以将其转化为 YYYY/MM/DD HH:MM:SS")]),t._v(" "),t._m(3),s("p",[t._v("相关"),s("a",{attrs:{href:"https://stackoverflow.com/questions/4310953/invalid-date-in-safari",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"safari-下-date-的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safari-下-date-的坑","aria-hidden":"true"}},[this._v("#")]),this._v(" Safari 下 Date 的坑")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("2018-10-16")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-10-16 12:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1539662400000 -- 在Chrome 下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN -- 在Safari下")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-10-16 12:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/-/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);