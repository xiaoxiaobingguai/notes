(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{211:function(t,e,a){"use strict";a.r(e);var i=a(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("前端性能监控分为两种方式，一种叫做合成监控（Synthetic Monitoring，SYN），另一种是真实用户监控（Real User Monitoring，RUM）。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("什么叫合成监控？就是在一个模拟场景里，去提交一个需要做性能审计的页面，通过一系列的工具、规则去运行你的页面，提取一些性能指标，得出一个审计报告。")]),t._v(" "),a("p",[t._v("常见的工具有 Google 的 Lighthouse，webpagetest，pagespeed 等。")]),t._v(" "),a("p",[t._v("当然其实业界对于 Lighthouse 也是评价有褒有贬，因为 Google 借助这个看似中立的性能评审工具也是在推行它的一些技术的方案。 比如你的页面如果没有支持 PWA 评分就不会很高。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("所谓真实用户监控，就是用户在我们的页面访问之后就会产生各种各样的性能指标，之后会将这些性能指标上传的我们的日志服务器上，进行数据的提起清洗加工，最后在我们的监控平台上进行展示和分析的一个过程。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("在真实用户性能数据采集时，要关注四个方面的东西：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("采集性能数据时先抹平 Navigation Timing spec 差异，优先使用 PerformanceTimeline API(在复杂场景，亦可考虑优先使用 PerformanceObserver)。")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("First Meaningful Paint，首次有效渲染时长，这个指标最早是由 Google 提出的，它的一个核心的想法是渲染并不一定代表着用户看到了主要内容，Load 也不一定代表用户看到主要内容，那用户什么时候能够看到主要内容呢？我们假设当一个网页的 DOM 结构发生剧烈的变化的时候，就是这个网页主要内容出现的时候，那么在这样的一个时间点上，就是用户看到主要内容的一个时间点。")]),t._v(" "),a("p",[t._v("它的优点是相对校准的估算出内容渲染时间，贴近用户感知。但缺点是无原生 API 支持，算法推导时 DOM 节点不含权重。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("上报页⾯加载开始时间，以及后续各时间点相对增量，在数据端进行阶段清洗和异常处理。")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("我们都知道在做前端的数据采集的时候，维度数据是非常重要的，除了我们刚才定义的各种度量，怎样采集到合适的相关维度，也能够极大地帮助我们分析页面性能的效果。")]),t._v(" "),a("p",[t._v("在分析页面性能的时候，有很多相对专业的维度是会被大家忽略掉的，比如说当前页面是否可见，这个页面加载方式是怎么样的，它是直接打开，还是刷新打开，还是前进后退打开等等。就是通过后面的数据分析，我们会发现，不同的页面操作，页面打开方式都会对我们页面加载的性能会有影响，以及一些更复杂的，比如说是否启用 HTTP2、Service Worker 等等，这些数据我们都应该尽可能采集到，从而能够更好的去分析我们的页面性能。")]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("本文为"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247490527&idx=1&sn=cc2549683b3ff69c042483d78ced766a&chksm=f951ae9cce26278a263ecf2937b5c4957c9b37f35b7efe4c1a8c6ab69c74ebcb43c54e62abda&token=1927326837&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("蚂蚁金服如何把前端性能监控做到极致?"),a("OutboundLink")],1),t._v(" 的阅读笔记。")]),t._v(" "),a("p",[t._v("拓展阅读 "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33825610",target:"_blank",rel:"noopener noreferrer"}},[t._v("我理解的前端性能 & 优化"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前端性能监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端性能监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端性能监控")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("2019.02.24")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"合成监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合成监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 合成监控")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("合成监控的优缺点")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("优点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("缺点")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("实现简单")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无法还原全部真实场景")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("能采集到丰富的数据，如硬件指标或瀑布图")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("登录等场景需要额外解决")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("不影响真实用户的访问性能")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("单次数据不够稳定")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("可以提供页面加载幻灯片等可视化分析途径")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据量较小，无法发挥更大价值")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"真实用户监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#真实用户监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 真实用户监控")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("真实用户监控的优缺点")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("优点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("缺点")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("无需配置模拟条件，完全还原真实场景")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一定程度影响真实用户的访问性能及流量消耗")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("不存在登录等需要额外解决的场景")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无法采集硬件相关指标")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据样本足够庞大，可以减少统计误差")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("受传输限制无法采集完整的资源加载瀑布图")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("新年数据可与其它数据关联，产生更大价值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无法可视化展示加载过程")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比","aria-hidden":"true"}},[this._v("#")]),this._v(" 对比")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("对比项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("合成监控")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("真实用户监控")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("实现难度及成本")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("较低")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("较高")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("采集数据丰富度")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("丰富")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基础")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据样本量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("较小")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大(视业务体量)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("适合场景")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("团队自由业务，对性能做定性分析，或配合 CI 做小数据量的监控分析")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("作为中台产品支持前台业务，对性能做定量分析，结合业务数据进行深度挖掘")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("使用标准的 API")])]),this._v(" "),e("li",[e("p",[this._v("定义合适的指标")])]),this._v(" "),e("li",[e("p",[this._v("采集正确的数据")])]),this._v(" "),e("li",[e("p",[this._v("上报关联的维度")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"使用标准的-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用标准的-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用标准的 API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("之前大家都使用一个叫 "),e("code",[this._v("performance.timing")]),this._v("，来做性能监控。但这个 API 已经“废弃”了。为什么会被废弃？因为 W3C 给我们提供了更全面、更强大的一个性能分析矩阵，比单一的 performance.timing 更加强大，能帮助我们从各个方面分析前端页面性能。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"定义合适的指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义合适的指标","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义合适的指标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"怎样采集正确的数据？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎样采集正确的数据？","aria-hidden":"true"}},[this._v("#")]),this._v(" 怎样采集正确的数据？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"上报关联的维度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上报关联的维度","aria-hidden":"true"}},[this._v("#")]),this._v(" 上报关联的维度")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"原文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原文","aria-hidden":"true"}},[this._v("#")]),this._v(" 原文")])}],!1,null,null,null);e.default=r.exports}}]);