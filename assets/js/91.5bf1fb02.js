(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{333:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"附录b：填补块儿作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录b：填补块儿作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 附录B：填补块儿作用域")]),t._v(" "),s("p",[t._v("在第三章中，我们探索了块儿作用域。我们看到最早在 ES3 中引入的 "),s("code",[t._v("with")]),t._v(" 和 "),s("code",[t._v("catch")]),t._v(" 子句都是存在于 JavaScript 中的块儿作用域的小例子。")]),t._v(" "),s("p",[t._v("但是 ES6 引入的 "),s("code",[t._v("let")]),t._v(" 最终使我们的代码有了完整的，不受约束的块作用域能力。不论是在功能上还是在代码风格上，块作用域都使许多激动人心的事情成为可能。")]),t._v(" "),s("p",[t._v("但要是我们想在前 ES6 环境中使用块儿作用域呢？")]),t._v(" "),s("p",[t._v("考虑这段代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n")])])]),s("p",[t._v("它在 ES6 环境下工作的非常好。但是我们能在前 ES6 中这么做吗？"),s("code",[t._v("catch")]),t._v(" 就是答案。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n")])])]),s("p",[t._v("哇！这真是难看和奇怪的代码。我们看到一个 "),s("code",[t._v("try/catch")]),t._v(" 似乎强制抛出一个错误，但是这个它抛出的“错误”只是一个值 "),s("code",[t._v("2")]),t._v("。然后接收它的变量声明是在 "),s("code",[t._v("catch(a)")]),t._v(" 子句中。三观：毁尽。")]),t._v(" "),s("p",[t._v("没错，"),s("code",[t._v("catch")]),t._v(" 子句拥有块儿作用域，这意味着它可以被用于在前 ES6 环境中填补块儿作用域。")]),t._v(" "),s("p",[t._v("“但是……”，你说。“……没人愿意写这么丑的代码！”你是对的。也没人编写由 CoffeeScript 编译器输出的（某些）代码。这不是重点。")]),t._v(" "),s("p",[t._v("重点是工具可以将 ES6 代码转译为能够在前 ES6 环境中工作的代码。你可以使用块儿作用域编写代码，并从这样的功能中获益，然后让一个编译工具来掌管生成将在部署之后实际 "),s("em",[t._v("工作")]),t._v(" 的代码。")]),t._v(" "),s("p",[t._v("这实际上是所有（嗯哼，大多数）ES6 特性首选的迁移路径：在从前 ES6 到 ES6 的转变过程中，使用一个代码转译器将 ES6 代码转换为 ES5 兼容的代码。")]),t._v(" "),s("h2",{attrs:{id:"traceur"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traceur","aria-hidden":"true"}},[t._v("#")]),t._v(" Traceur")]),t._v(" "),s("p",[t._v("Google 维护着一个称为“Traceur”[^note-traceur]的项目，它的任务正是为了广泛使用 ES6 特性而将它转译为前 ES6（大多数是 ES5，但不是全部！）代码。TC39 协会依赖这个工具（和其他的工具）来测试他们所规定的特性的语义。")]),t._v(" "),s("p",[t._v("Traceur 将从我们的代码段中产生出什么？你猜对了！")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("所以，使用这种工具，我们可以开始利用块儿作用域，无论我们是否面向 ES6，因为 "),s("code",[t._v("try/catch")]),t._v(" 从 ES3 那时就开始存在了（并且这样工作）。")]),t._v(" "),s("h2",{attrs:{id:"隐含的与明确的块儿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐含的与明确的块儿","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐含的与明确的块儿")]),t._v(" "),s("p",[t._v("在第三章中，在我们介绍块儿作用域时，我们认识了一些关于代码可维护性/可重构性的潜在陷阱。有什么其他的方法可以利用块儿作用域同时减少这些负面影响吗？")]),t._v(" "),s("p",[t._v("考虑一下 "),s("code",[t._v("let")]),t._v(" 的这种形式，它被称为“let 块儿”或“let 语句”（和以前的“let 声明”对比来说）。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n")])])]),s("p",[t._v("与隐含地劫持一个既存的块儿不同，let 语句为它的作用域绑定明确地创建了一个块儿。这个明确的块儿不仅更显眼，而且在代码重构方面健壮得多，从文法上讲，它通过强制所有的声明都位于块儿的顶部而产生了某种程度上更干净的代码。这使任何块儿都更易于观察，更易于知道什么属于这个作用域和什么不属于这个作用域。")]),t._v(" "),s("p",[t._v("作为一种模式，它是与许多人在函数作用域中采纳的方式相对称的 —— 它们手动地将所有"),s("code",[t._v("var")]),t._v("声明移动/提升到函数的顶部。let 语句有意地将它们放在块儿的顶部，而且如果你没有通篇到处使用 "),s("code",[t._v("let")]),t._v(" 声明，那么你的块儿作用域声明就会在某种程度上更易于识别和维护。")]),t._v(" "),s("p",[t._v("但是，这里有一个问题。let 语句的形式没有包含在 ES6 中。就连官方的 Traceur 编译器也不接受这种形式的代码。")]),t._v(" "),s("p",[t._v("我们有两个选择。我们可以使用 ES6 合法的语法格式化，再加上一点儿代码规则：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*let*/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n")])])]),s("p",[t._v("但是，工具就意味着要解决我们的问题。所以另一个选项是编写明确的 let 语句块儿，并让工具将他转换为合理的，可以工作的代码。")]),t._v(" "),s("p",[t._v("所以，我建造了一个称为“let-er”[^note-let_er]的工具来解决这个问题。"),s("em",[t._v("let-er")]),t._v(" 是一个编译期代码转译器，它唯一的任务就是找到 let 语句形式并转译它们。它将你的代码其他部分原封不动地留下，包括任何 let 声明。你可以安全地将 "),s("em",[t._v("let-er")]),t._v(" 用于 ES6 转译器的第一步，然后如果有需要，你可以将你的代码通过 Traceur 这样的东西。")]),t._v(" "),s("p",[t._v("另外，"),s("em",[t._v("let-er")]),t._v(" 有一个配置标志 "),s("code",[t._v("--es6")]),t._v("，当它打开时（默认是关闭），会改变生成的代码的种类。与使用 "),s("code",[t._v("try/catch")]),t._v(" 的 ES3 填补黑科技不同的是，"),s("em",[t._v("let-er")]),t._v(" 将拿着我们的代码并产生完全兼容 ES6 的代码，没有黑科技：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n")])])]),s("p",[t._v("所以，你可以立即开始使用 "),s("em",[t._v("let-er")]),t._v("，而且可以面向所有前 ES6 环境，当你仅关心 ES6 时，你可以加入配置标志并立即仅面向 ES6。")]),t._v(" "),s("p",[t._v("而且最重要的是，"),s("strong",[t._v("你可以使用更好的和更明确的 let 语句形式")]),t._v("，即便它（还）不是任何 ES 官方版本的一部分。")]),t._v(" "),s("h2",{attrs:{id:"性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),s("p",[t._v("让我在 "),s("code",[t._v("try/catch")]),t._v(" 的性能问题上加入最后一个快速的说明，并/或解决这个问题：“为什么不使用一个IIFE来创建作用域？”")]),t._v(" "),s("p",[t._v("首先，"),s("code",[t._v("try/catch")]),t._v(" 的性能 "),s("em",[t._v("是")]),t._v(" 慢一些，但是没有任何合理的假设表明它 "),s("em",[t._v("必须")]),t._v(" 是这样，或者它 "),s("em",[t._v("总是")]),t._v(" 这样。因为 TC39 认可的官方 ES6 转译器使用 "),s("code",[t._v("try/catch")]),t._v("，Traceur 团队已经让 Chrome 去改进 "),s("code",[t._v("try/catch")]),t._v(" 的性能了，而且它们有很明显的动力这样做。")]),t._v(" "),s("p",[t._v("第二，IIFE 和 "),s("code",[t._v("try/catch")]),t._v(" 不是一个合理的“苹果对苹果”的比较，因为一个包装着任意代码的函数改变了这段代码的含义，以及它的 "),s("code",[t._v("this")]),t._v("、"),s("code",[t._v("return")]),t._v("、"),s("code",[t._v("break")]),t._v("、和 "),s("code",[t._v("continue")]),t._v(" 的含义。IIFE 不是一个合适一般替代品。它只能在特定的情况下手动使用。")]),t._v(" "),s("p",[t._v("真正的问题变成了：你是否想要使用块儿作用域。如果是，这些工具给你提供了这些选择。如果不，那就在你的代码中继续使用 "),s("code",[t._v("var")]),t._v("！")]),t._v(" "),s("p",[t._v("[^note-traceur]: "),s("a",{attrs:{href:"http://traceur-compiler.googlecode.com/git/demo/repl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Traceur"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("[^note-let_er]: "),s("a",{attrs:{href:"https://github.com/getify/let-er",target:"_blank",rel:"noopener noreferrer"}},[t._v("let-er"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);