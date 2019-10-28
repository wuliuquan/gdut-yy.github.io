(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{319:function(v,_,e){"use strict";e.r(_);var t=e(0),a=Object(t.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("blockquote",[e("p",[v._v("一个单子只是自函子范畴中的幺半群。")])]),v._v(" "),e("p",[v._v("我让你糊涂了？别担心，我也糊涂！所有这些只对已经有了函数式编程™（FP）背景的人才有意义的词儿，对于我们其他大多数人都只是混乱的胡话。")]),v._v(" "),e("p",[v._v("这本书不会教你这些词是什么意思。如果那才是你寻找的，就继续寻找。事实上，已经有许多了不起的书籍在用 "),e("em",[v._v("正确的方法")]),v._v(" 从上到下地教授 FP。这些词有着重要的含义，而且如果你正式地深度学习 FP，你就绝对需要熟悉他们。")]),v._v(" "),e("p",[v._v("但这本书将要用一种十分不同的方式探讨这些话题。与大多数探讨 FP 的方式相比，我将从最底层开始展示 FP 的基础概念，很少使用特殊或不直观的术语。我们将对每一种原理采用一种实践的方式而非一种纯学术的角度。毫无疑问，"),e("strong",[v._v("这里会有术语")]),v._v("。但对于引入它们并解释为什么它们重要这件事上，我们将会十分小心谨慎。")]),v._v(" "),e("p",[v._v("很遗憾，我不是 FP 酷小子俱乐部的持卡会员。我们从没正式地学习过关于 FP 的任何东西。虽然我有计算机科学的学术背景，而且我数学还不错，但是数学符号也不是我的大脑理解程序的方式。我没写过一行的 Scheme、Clojure、或 Haskell。我也不是一个老式 Lisp 程序员。")]),v._v(" "),e("p",[v._v("我参加过无数谈论 FP 的会议，每一次都抱着这样一种孤注一掷的希望：终于，"),e("em",[v._v("这一次")]),v._v("，将是我理解整个函数式编程谜团的机会。但每一次，我都沮丧地离开，意识到所有那些术语在我头脑中乱成一团而且完全不知道自己学到了什么。也许我学到了东西。但是在很长一段时间里，我无法搞清那些东西是什么。")]),v._v(" "),e("p",[v._v("一点儿一点儿地，经过各种摸爬滚打，我梳理清楚了那些重要概念的一点一滴，而对正式 FP 程序员来说那是再自然不过的。我学得很慢，而且我是从实用和经验的角度学习的，而非使用恰当术语的学术角度。你有没有过这样的经历，你已经知道一件事情很长时间了，后来才终于发现它有一个你从不知道的特定名称！？")]),v._v(" "),e("p",[v._v("也许你像我一样；我在 “大数据” 这样的行业分支中听了许多年 “map-reduce” 这样的术语，而根本不知道它们是什么。最终我学习了 "),e("code",[v._v("map(..)")]),v._v(" 函数是做什么的 —— 这要比我知道列表操作是 FP 程序员道路的基石，以及什么使它们如此重要要早得多。我知道 "),e("em",[v._v("map")]),v._v(" 是什么，要比我知道它被称作 "),e("code",[v._v("map(..)")]),v._v(" 要早得多。")]),v._v(" "),e("p",[v._v("终于我开始将所有这些理解的细枝末节收集起来，形成了我现在所说的 “轻量函数式编程”（FLP）。")]),v._v(" "),e("h2",{attrs:{id:"使命"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使命","aria-hidden":"true"}},[v._v("#")]),v._v(" 使命")]),v._v(" "),e("p",[v._v("但是，为什么学习函数式编程对你如此重要，即便是轻量的形式？")]),v._v(" "),e("p",[v._v("近几年我开始对一些事情深信不疑，它如此强烈以至于你 "),e("em",[v._v("几乎")]),v._v(" 可以称它为宗教信仰。我相信程序的根本在于人，而非代码。我相信代码首要意义是人之间的交流，而它指示计算机工作只不过是一种 "),e("em",[v._v("副作用")]),v._v("（听听我自负的笑声）。")]),v._v(" "),e("p",[v._v("我的看法是，函数式编程的核心是在你的代码中使用一些模式，这些模式尽人皆知、易于理解、"),e("em",[v._v("而且")]),v._v(" 被证实可以远离那些使代码变得难于理解的错误。照此看来，FP —— 或者，嗯哼，FLP！—— 可能是所有开发者能够得到的最重要的工具集合之一。")]),v._v(" "),e("blockquote",[e("p",[v._v("单子的诅咒是…… 一旦你理解了它…… 你就失去了向任何人讲明白它的能力。")]),v._v(" "),e("p",[v._v('Douglas Crockford 2012 "Monads and Gonads"')]),v._v(" "),e("p",[v._v("https://www.youtube.com/watch?v=dkZFtimgAcM")])]),v._v(" "),e("p",[v._v("我希望这本书 “可能” 打破这种诅咒，尽管我们在最后的附录中才会谈到 “单子”。")]),v._v(" "),e("p",[v._v("正式的 FP 程序员总是声称 FP 的 "),e("em",[v._v("真正价值")]),v._v(" 在于从根本上 100% 地使用它：一种要么全有要么全无的逻辑。他们相信如果你在程序的一部分中使用 FP 但在另一部分中没有，那么整个程序就会被非 FP 的东西所污染而因此可能使 FP 显得毫无价值。")]),v._v(" "),e("p",[v._v("我要毫不含糊地说："),e("strong",[v._v("我认为绝对主义是一种炒作")]),v._v("。在我看来这就好像在说这本书只有在我自始至终使用完美的语法和主动语态时才是好的；如果我犯了任何错误，就会降低整本书的质量。胡说八道。")]),v._v(" "),e("p",[v._v("我越善于用一种清晰、一致的语态写作，这本书给你的体验就越好。但我不是一个 100% 完美的作者。有些部分会比其他部分写得好。那些我依然可以改进的部分不会使这本书的其他有用的部分作废。")]),v._v(" "),e("p",[v._v("我们的代码也是一样。你越在更多的代码上实施这些原理，你的代码就越好。在 25% 的时间里好好利用它们，你就会得到一些好处。在 80% 的时间里利用它们，你就会看到更多的好处。")]),v._v(" "),e("p",[v._v("也许会有几处例外，但我想你不会在这本书中发现很多绝对的东西。相反我们将会谈到要为之努力的追求、目标、和原理。我们会谈到平衡、实用主义、以及权衡。")]),v._v(" "),e("p",[v._v("欢迎参加这次探索 FP 中最有用最实际的基础的旅行。我们都有好多东西要学！")])])},[],!1,null,null,null);_.default=a.exports}}]);