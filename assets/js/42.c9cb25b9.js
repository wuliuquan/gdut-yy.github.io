(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{204:function(t,_,a){t.exports=a.p+"assets/img/IMG_6258.43c926e2.jpg"},372:function(t,_,a){"use strict";a.r(_);var v=a(0),r=Object(v.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"《计算机网络7》"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#《计算机网络7》","aria-hidden":"true"}},[t._v("#")]),t._v(" 《计算机网络7》")]),t._v(" "),v("img",{attrs:{src:a(204)}}),t._v(" "),v("h2",{attrs:{id:"书评"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#书评","aria-hidden":"true"}},[t._v("#")]),t._v(" 书评")]),t._v(" "),v("p",[t._v("上课只讲授前6章节，分别是一章概述加五层模型。")]),t._v(" "),v("p",[t._v("课设是 编程实现 网络层 程序（ping arp icmp 之类），当时语言选择是 Java 和 C++，时至今日仍深刻记得 Java 编写网络层压力之大，后来是用 C++ 手动封（IP | ICMP）包，调用 Winsocket 实现。")]),t._v(" "),v("p",[t._v("面试来说，个人感觉偏重第五章内容（运输层 TCP | UDP，三次握手？可靠 UDP 实现？）。")]),t._v(" "),v("h2",{attrs:{id:"第-1-章-概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-1-章-概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 第 1 章 概述")]),t._v(" "),v("h3",{attrs:{id:"_1-3-2-互联网的核心部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-互联网的核心部分","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3.2 互联网的核心部分")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("电路交换")]),t._v("——整个报文的比特流连续地从源点直达终点，好像在一个管道中传送。")]),t._v(" "),v("li",[v("strong",[t._v("报文交换")]),t._v("——整个报文先传送到相邻结点，全部存储下来后查找转发表，转发到下一个结点。（现在报文交换已不再使用了）")]),t._v(" "),v("li",[v("strong",[t._v("分组交换")]),t._v("——单个分组（这只是整个报文的一部分）传送到相邻结点，存储下来后查找转发表，转发到下一个结点。")])]),t._v(" "),v("h3",{attrs:{id:"_1-6-计算机网络的性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-计算机网络的性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6 计算机网络的性能")]),t._v(" "),v("ul",[v("li",[t._v("速率")]),t._v(" "),v("li",[t._v("带宽")]),t._v(" "),v("li",[t._v("吞吐量")]),t._v(" "),v("li",[t._v("时延（发送时延，传播时延，处理时延，排队时延）")]),t._v(" "),v("li",[t._v("时延带积宽")]),t._v(" "),v("li",[t._v("往返时间 RTT")]),t._v(" "),v("li",[t._v("利用率")])]),t._v(" "),v("p",[t._v("TCP/IP 就常被称为是事实上的国际标准。")]),t._v(" "),v("h3",{attrs:{id:"_1-应用层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-应用层","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 应用层")]),t._v(" "),v("p",[t._v("应用层交互的数据单元称为"),v("strong",[t._v("报文")]),t._v("（message）。")]),t._v(" "),v("h3",{attrs:{id:"_2-运输层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-运输层","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 运输层")]),t._v(" "),v("p",[t._v("运输层的任务就是负责向两台主机中"),v("strong",[t._v("进程")]),t._v("之间的通信提供通用的数据传输服务。（TCP UDP）")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("传输控制协议 TCP（Transmission Control Protocol）")]),t._v("——提供面向连接的、可靠的数据传输服务，其数据传输的单位是"),v("strong",[t._v("报文段")]),t._v("（segment）。")]),t._v(" "),v("li",[v("strong",[t._v("用户数据报协议 UDP（User Datagram Protocol）")]),t._v("——提供无连接的、尽最大努力（best-offort）的数据传输服务（不保证数据传输的可靠性）。其数据传输的单位是"),v("strong",[t._v("用户数据报")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"_3-网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络层","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 网络层")]),t._v(" "),v("p",[t._v("网络层为"),v("strong",[t._v("主机")]),t._v("之间提供逻辑通信。")]),t._v(" "),v("p",[v("strong",[t._v("IP 数据报")])]),t._v(" "),v("h3",{attrs:{id:"_4-数据链路层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据链路层","aria-hidden":"true"}},[t._v("#")]),t._v(" 4 数据链路层")]),t._v(" "),v("p",[t._v("在两个相邻结点之间传送数据，"),v("strong",[t._v("帧")]),t._v("（frame）。")]),t._v(" "),v("h3",{attrs:{id:"_5-物理层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-物理层","aria-hidden":"true"}},[t._v("#")]),t._v(" 5 物理层")]),t._v(" "),v("p",[t._v("物理层传输的单位是"),v("strong",[t._v("比特")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"第-2-章-物理层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-物理层","aria-hidden":"true"}},[t._v("#")]),t._v(" 第 2 章 物理层")]),t._v(" "),v("h3",{attrs:{id:"_2-4-信道复用技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-信道复用技术","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 信道复用技术")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("频分复用 FDM（Frequency Division Multiplexing）")]),t._v("：频分复用的所有用户在同样的时间占用不同的带宽资源。")]),t._v(" "),v("li",[v("strong",[t._v("时分复用 TDM（Time Division Multiplexing）")]),t._v("：时分复用的所有用户在不同的时间占用同样的频带宽度。")]),t._v(" "),v("li",[v("strong",[t._v("统计时分复用 STDM（Statistic TDM）")]),t._v("：改进的时分复用。")]),t._v(" "),v("li",[v("strong",[t._v("波分复用 WDM（Wavelength Division Multiplexing）")])]),t._v(" "),v("li",[v("strong",[t._v("码分复用 码分多址 CDMA（Code Division Multiple Access）")])])]),t._v(" "),v("h3",{attrs:{id:"_2-6-adsl-技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-adsl-技术","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.6 ADSL 技术")]),t._v(" "),v("p",[t._v("非对称数字用户线 ADSL（Asymmetric Digital Subscriber Line）技术是用数字技术对现有的模拟电话用户线进行改造。")]),t._v(" "),v("p",[t._v("我国目前采用的方案是"),v("strong",[t._v("离散多音调 DMT（Discrete Multi-Tone）调制技术")])]),t._v(" "),v("h2",{attrs:{id:"第-3-章-数据链路层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-3-章-数据链路层","aria-hidden":"true"}},[t._v("#")]),t._v(" 第 3 章 数据链路层")]),t._v(" "),v("ul",[v("li",[t._v("**链路（link）**就是从一个结点到相邻结点的一段物理线路。（物理链路）")]),t._v(" "),v("li",[v("strong",[t._v("数据链路（data link）")]),t._v("：物理链路加上必要的通信协议。（逻辑链路）")])]),t._v(" "),v("p",[t._v("数据链路协议三个基本问题：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("封装成帧（framing）")]),t._v("：每一种链路层协议都规定了所能传送的帧的"),v("strong",[t._v("数据部分长度上限——最大传送单元 MTU")]),t._v("（Maximum Transfer Unit）。")]),t._v(" "),v("li",[v("strong",[t._v("透明传输")]),t._v("：不管从键盘上输入什么字符都可以放在这样的帧中传输过去。（字节填充法）")]),t._v(" "),v("li",[v("strong",[t._v("差错控制")]),t._v("：误码率 BER（Bit Error Rate）循环冗余检验 CRC（Cyclic Redundancy Check）（或会出现帧丢失、帧重复、帧失序）")])]),t._v(" "),v("p",[t._v("数据链路层可以不向网络层提供 “可靠传输” 服务。")]),t._v(" "),v("h3",{attrs:{id:"_3-2-点对点协议-ppp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-点对点协议-ppp","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 点对点协议 PPP")]),t._v(" "),v("h2",{attrs:{id:"第-4-章-网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-4-章-网络层","aria-hidden":"true"}},[t._v("#")]),t._v(" 第 4 章 网络层")]),t._v(" "),v("p",[t._v("网际协议 IP 是 TCP/IP 体系中两个最主要的协议之一，也是最重要的互联网标准之一。")]),t._v(" "),v("p",[t._v("与 IP 协议配套使用的还有三个协议：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("地址解析协议 ARP（Address Resolution Protocol）")])]),t._v(" "),v("li",[v("strong",[t._v("网际控制报文协议 ICMP（Internet Control Message Protocol）")])]),t._v(" "),v("li",[v("strong",[t._v("网际组管理协议 IGMP（Internet Group Management Protocol）")])])]),t._v(" "),v("p",[t._v("根据中间设备所在的层次，可以有以下四种不同的中间设备：")]),t._v(" "),v("ul",[v("li",[t._v("物理层使用的中间设备叫做"),v("strong",[t._v("转发器（repeater）")]),t._v("。")]),t._v(" "),v("li",[t._v("数据链路层使用的中间设备叫做"),v("strong",[t._v("网桥")]),t._v("或"),v("strong",[t._v("桥接器（bridge）")]),t._v("。")]),t._v(" "),v("li",[t._v("网络层使用的中间设备叫做"),v("strong",[t._v("路由器（router）")]),t._v("。")]),t._v(" "),v("li",[t._v("在网络层以上使用的中间设备叫做"),v("strong",[t._v("网关（gateway）")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"_4-2-5-ip-数据报的格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-ip-数据报的格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2.5 IP 数据报的格式")]),t._v(" "),v("h3",{attrs:{id:"icmp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp","aria-hidden":"true"}},[t._v("#")]),t._v(" ICMP")]),t._v(" "),v("h2",{attrs:{id:"第-5-章-运输层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-5-章-运输层","aria-hidden":"true"}},[t._v("#")]),t._v(" 第 5 章 运输层")]),t._v(" "),v("p",[t._v("当运输层"),v("strong",[t._v("采用面向连接的 TCP 协议时，尽管下面的网络是不可靠的")]),t._v("（只提供尽最大努力服务），但这种逻辑通信信道就相当于"),v("strong",[t._v("一条全双工的可靠信道")]),t._v("。但当运输层采用"),v("strong",[t._v("无连接的 UDP 协议")]),t._v("时，这种逻辑通信信道仍然是一条"),v("strong",[t._v("不可靠信道")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"_5-1-2-运输层的两个主要协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-运输层的两个主要协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.1.2 运输层的两个主要协议")]),t._v(" "),v("p",[t._v("使用 UDP 和 TCP 协议的各种应用和应用层协议：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("应用")]),t._v(" "),v("th",[t._v("应用层协议")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("运输层协议")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("名字转换")]),t._v(" "),v("td",[t._v("DNS（域名系统）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("文件传送")]),t._v(" "),v("td",[t._v("TFTP（简单文件传送协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("路由选择协议")]),t._v(" "),v("td",[t._v("RIP（路由信息协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("IP 地址配置")]),t._v(" "),v("td",[t._v("DHCP（动态主机配置协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("网络管理")]),t._v(" "),v("td",[t._v("SNMP（简单网络管理协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("远程文件服务器")]),t._v(" "),v("td",[t._v("NFS（网络文件系统）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("IP 电话")]),t._v(" "),v("td",[t._v("专业协议")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("流式多媒体通信")]),t._v(" "),v("td",[t._v("专用协议")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("多播")]),t._v(" "),v("td",[t._v("IGMP（网际组管理协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP")])]),t._v(" "),v("tr",[v("td",[t._v("电子邮件")]),t._v(" "),v("td",[t._v("SMTP（简单邮件传送协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")])]),t._v(" "),v("tr",[v("td",[t._v("远程终端接入")]),t._v(" "),v("td",[t._v("TELNET（远程终端协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")])]),t._v(" "),v("tr",[v("td",[t._v("万维网")]),t._v(" "),v("td",[t._v("HTTP（超文本传送协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")])]),t._v(" "),v("tr",[v("td",[t._v("文件传送")]),t._v(" "),v("td",[t._v("FTP（文件传送协议）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")])])])]),t._v(" "),v("h3",{attrs:{id:"_5-2-用户数据报协议-udp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-用户数据报协议-udp","aria-hidden":"true"}},[t._v("#")]),t._v(" // 5.2 用户数据报协议 UDP")]),t._v(" "),v("h3",{attrs:{id:"_5-3-传输控制协议-tcp-概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-传输控制协议-tcp-概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.3 传输控制协议 TCP 概述")]),t._v(" "),v("ol",[v("li",[t._v("TCP 是面向连接的运输层协议")]),t._v(" "),v("li",[t._v("每一条 TCP 连接只能有两个端点（endpoint）")]),t._v(" "),v("li",[t._v("TCP 提供可靠交付的服务")]),t._v(" "),v("li",[t._v("TCP 提供全双工通信")]),t._v(" "),v("li",[t._v("面向字节流")])]),t._v(" "),v("p",[t._v("套接字 socket = （IP 地址：端口号）")]),t._v(" "),v("p",[t._v("TCP 连接 ::= {socket1, socket2} = {（IP1，port1），（IP2，port2）}")]),t._v(" "),v("h3",{attrs:{id:"_5-4-可靠传输的工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-可靠传输的工作原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.4 可靠传输的工作原理")]),t._v(" "),v("p",[t._v("停止等待协议")]),t._v(" "),v("p",[t._v("连续 ARQ 协议")]),t._v(" "),v("h3",{attrs:{id:"_5-5-tcp-报文段的首部格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-tcp-报文段的首部格式","aria-hidden":"true"}},[t._v("#")]),t._v(" // 5.5 TCP 报文段的首部格式")]),t._v(" "),v("h3",{attrs:{id:"_5-6-tcp-可靠传输的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-tcp-可靠传输的实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.6 TCP 可靠传输的实现")]),t._v(" "),v("h3",{attrs:{id:"_5-7-tcp-的流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-tcp-的流量控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.7 TCP 的流量控制")]),t._v(" "),v("h3",{attrs:{id:"_5-8-tcp-的拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-tcp-的拥塞控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.8 TCP 的拥塞控制")]),t._v(" "),v("p",[t._v("慢开始、拥塞避免、快重传、快恢复")]),t._v(" "),v("h3",{attrs:{id:"★5-9-tcp-的运输连接管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#★5-9-tcp-的运输连接管理","aria-hidden":"true"}},[t._v("#")]),t._v(" ★5.9 TCP 的运输连接管理")]),t._v(" "),v("h2",{attrs:{id:"第-6-章-应用层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-6-章-应用层","aria-hidden":"true"}},[t._v("#")]),t._v(" 第 6 章 应用层")]),t._v(" "),v("h2",{attrs:{id:"第-7-章-网络完全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-7-章-网络完全","aria-hidden":"true"}},[t._v("#")]),t._v(" // 第 7 章 网络完全")]),t._v(" "),v("h2",{attrs:{id:"第-8-章-互联网上的音频-视频服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-8-章-互联网上的音频-视频服务","aria-hidden":"true"}},[t._v("#")]),t._v(" // 第 8 章 互联网上的音频/视频服务")]),t._v(" "),v("h2",{attrs:{id:"第-9-章-无线网络和移动网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-9-章-无线网络和移动网络","aria-hidden":"true"}},[t._v("#")]),t._v(" // 第 9 章 无线网络和移动网络")])])},[],!1,null,null,null);_.default=r.exports}}]);