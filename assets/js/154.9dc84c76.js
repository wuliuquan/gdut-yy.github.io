(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{344:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"chapter-12-serialization（序列化）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#chapter-12-serialization（序列化）","aria-hidden":"true"}},[e._v("#")]),e._v(" Chapter 12. Serialization（序列化）")]),e._v(" "),i("h3",{attrs:{id:"item-87-consider-using-a-custom-serialized-form（考虑使用自定义序列化形式）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#item-87-consider-using-a-custom-serialized-form（考虑使用自定义序列化形式）","aria-hidden":"true"}},[e._v("#")]),e._v(" Item 87: Consider using a custom serialized form（考虑使用自定义序列化形式）")]),e._v(" "),i("p",[e._v("When you are writing a class under time pressure, it is generally appropriate to concentrate your efforts on designing the best API. Sometimes this means releasing a “throwaway” implementation that you know you’ll replace in a future release. Normally this is not a problem, but if the class implements Serializable and uses the default serialized form, you’ll never be able to escape completely from the throwaway implementation. It will dictate the serialized form forever. This is not just a theoretical problem. It happened to several classes in the Java libraries, including BigInteger.")]),e._v(" "),i("p",[e._v("当你在时间紧迫的情况下编写类时，通常应该将精力集中在设计最佳 API 上。有时，这意味着发布一个「一次性」实现，你也知道在将来的版本中会替换它。通常这不是一个问题，但是如果类实现 Serializable 接口并使用默认的序列化形式，你将永远无法完全摆脱这个「一次性」的实现。它将永远影响序列化的形式。这不仅仅是一个理论问题。这种情况发生在 Java 库中的几个类上，包括 BigInteger。")]),e._v(" "),i("p",[i("strong",[e._v("Do not accept the default serialized form without first considering whether it is appropriate.")]),e._v(" Accepting the default serialized form should be a conscious decision that this encoding is reasonable from the standpoint of flexibility, performance, and correctness. Generally speaking, you should accept the default serialized form only if it is largely identical to the encoding that you would choose if you were designing a custom serialized form.")]),e._v(" "),i("p",[i("strong",[e._v("在没有考虑默认序列化形式是否合适之前，不要接受它。")]),e._v(" 接受默认的序列化形式应该是一个三思而后行的决定，即从灵活性、性能和正确性的角度综合来看，这种编码是合理的。一般来说，设计自定义序列化形式时，只有与默认序列化形式所选择的编码在很大程度上相同时，才应该接受默认的序列化形式。")]),e._v(" "),i("p",[e._v("The default serialized form of an object is a reasonably efficient encoding of the physical representation of the object graph rooted at the object. In other words, it describes the data contained in the object and in every object that is reachable from this object. It also describes the topology by which all of these objects are interlinked. The ideal serialized form of an object contains only the logical data represented by the object. It is independent of the physical representation.")]),e._v(" "),i("p",[e._v("对象的默认序列化形式，相对于它的物理表示法而言是一种比较有效的编码形式。换句话说，它描述了对象中包含的数据以及从该对象可以访问的每个对象的数据。它还描述了所有这些对象相互关联的拓扑结构。理想的对象序列化形式只包含对象所表示的逻辑数据。它独立于物理表征。")]),e._v(" "),i("p",[i("strong",[e._v("The default serialized form is likely to be appropriate if an object’s physical representation is identical to its logical content.")]),e._v(" For example, the default serialized form would be reasonable for the following class, which simplistically represents a person’s name:")]),e._v(" "),i("p",[i("strong",[e._v("如果对象的物理表示与其逻辑内容相同，则默认的序列化形式可能是合适的。")]),e._v(" 例如，默认的序列化形式对于下面的类来说是合理的，它简单地表示一个人的名字：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// Good candidate for default serialized form\npublic class Name implements Serializable {\n    /**\n    * Last name. Must be non-null.\n    * @serial\n    */\n    private final String lastName;\n\n    /**\n    * First name. Must be non-null.\n    * @serial\n    */\n    private final String firstName;\n\n    /**\n    * Middle name, or null if there is none.\n    * @serial\n    */\n    private final String middleName;\n    ... // Remainder omitted\n}\n")])])]),i("p",[e._v("Logically speaking, a name consists of three strings that represent a last name, a first name, and a middle name. The instance fields in Name precisely mirror this logical content.")]),e._v(" "),i("p",[e._v("从逻辑上讲，名字由三个字符串组成，分别表示姓、名和中间名。Name 的实例字段精确地反映了这个逻辑内容。")]),e._v(" "),i("p",[i("strong",[e._v("Even if you decide that the default serialized form is appropriate, you often must provide a readObject method to ensure invariants and security.")]),e._v(" In the case of Name, the readObject method must ensure that the fields lastName and firstName are non-null. This issue is discussed at length in Items 88 and 90.")]),e._v(" "),i("p",[i("strong",[e._v("即使你认为默认的序列化形式是合适的，你通常也必须提供 readObject 方法来确保不变性和安全性。")]),e._v(" 对于 Name 类而言, readObject 方法必须确保字段 lastName 和 firstName 是非空的。Item-88 和 Item-90 详细讨论了这个问题。")]),e._v(" "),i("p",[e._v("Note that there are documentation comments on the lastName, firstName, and middleName fields, even though they are private. That is because these private fields define a public API, which is the serialized form of the class, and this public API must be documented. The presence of the @serial tag tells Javadoc to place this documentation on a special page that documents serialized forms.")]),e._v(" "),i("p",[e._v("注意，虽然 lastName、firstName 和 middleName 字段是私有的，但是它们都有文档注释。这是因为这些私有字段定义了一个公共 API，它是类的序列化形式，并且必须对这个公共 API 进行文档化。"),i("code",[e._v("@serial")]),e._v(" 标记的存在告诉 Javadoc 将此文档放在一个特殊的页面上，该页面记录序列化的形式。")]),e._v(" "),i("p",[e._v("Near the opposite end of the spectrum from Name, consider the following class, which represents a list of strings (ignoring for the moment that you would probably be better off using one of the standard List implementations):")]),e._v(" "),i("p",[e._v("与 Name 类不同，考虑下面的类，它是另一个极端。它表示一个字符串列表（使用标准 List 实现可能更好，但此时暂不这么做）：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// Awful candidate for default serialized form\npublic final class StringList implements Serializable {\n    private int size = 0;\n    private Entry head = null;\n    private static class Entry implements Serializable {\n        String data;\n        Entry next;\n        Entry previous;\n    }\n    ... // Remainder omitted\n}\n")])])]),i("p",[e._v("Logically speaking, this class represents a sequence of strings. Physically, it represents the sequence as a doubly linked list. If you accept the default serialized form, the serialized form will painstakingly mirror every entry in the linked list and all the links between the entries, in both directions.")]),e._v(" "),i("p",[e._v("从逻辑上讲，这个类表示字符串序列。在物理上，它将序列表示为双向链表。如果接受默认的序列化形式，该序列化形式将不遗余力地镜像出链表中的所有项，以及这些项之间的所有双向链接。")]),e._v(" "),i("p",[i("strong",[e._v("Using the default serialized form when an object’s physical representation differs substantially from its logical data content has four disadvantages:")])]),e._v(" "),i("p",[i("strong",[e._v("当对象的物理表示与其逻辑数据内容有很大差异时，使用默认的序列化形式有四个缺点：")])]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("It permanently ties the exported API to the current internal representation.")]),e._v(" In the above example, the private StringList.Entry class becomes part of the public API. If the representation is changed in a future release, the StringList class will still need to accept the linked list representation on input and generate it on output. The class will never be rid of all the code dealing with linked list entries, even if it doesn’t use them anymore.")])]),e._v(" "),i("p",[i("strong",[e._v("它将导出的 API 永久地绑定到当前的内部实现。")]),e._v(" 在上面的例子中，私有 "),i("code",[e._v("StringList.Entry")]),e._v(" 类成为公共 API 的一部分。如果在将来的版本中更改了实现，StringList 类仍然需要接受链表形式的输出，并产生链表形式的输出。这个类永远也摆脱不掉处理链表项所需要的所有代码，即使不再使用链表作为内部数据结构。")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("It can consume excessive space.")]),e._v(" In the above example, the serialized form unnecessarily represents each entry in the linked list and all the links. These entries and links are mere implementation details, not worthy of inclusion in the serialized form. Because the serialized form is excessively large, writing it to disk or sending it across the network will be excessively slow.")])]),e._v(" "),i("p",[i("strong",[e._v("它会占用过多的空间。")]),e._v(" 在上面的示例中，序列化的形式不必要地表示链表中的每个条目和所有链接关系。这些链表项以及链接只不过是实现细节，不值得记录在序列化形式中。因为这样的序列化形式过于庞大，将其写入磁盘或通过网络发送将非常慢。")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("It can consume excessive time.")]),e._v(" The serialization logic has no knowledge of the topology of the object graph, so it must go through an expensive graph traversal. In the example above, it would be sufficient simply to follow the next references.")])]),e._v(" "),i("p",[i("strong",[e._v("它会消耗过多的时间。")]),e._v(" 序列化逻辑不知道对象图的拓扑结构，因此必须遍历开销很大的图。在上面的例子中，只要遵循 next 的引用就足够了。")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("It can cause stack overflows.")]),e._v(" The default serialization procedure performs a recursive traversal of the object graph, which can cause stack overflows even for moderately sized object graphs. Serializing a StringList instance with 1,000–1,800 elements generates a StackOverflowError on my machine. Surprisingly, the minimum list size for which serialization causes a stack overflow varies from run to run (on my machine). The minimum list size that exhibits this problem may depend on the platform implementation and command-line flags; some implementations may not have this problem at all.")])]),e._v(" "),i("p",[i("strong",[e._v("它可能导致堆栈溢出。")]),e._v(" 默认的序列化过程执行对象图的递归遍历，即使对于中等规模的对象图，这也可能导致堆栈溢出。用 1000-1800 个元素序列化 StringList 实例会在我的机器上生成一个 StackOverflowError。令人惊讶的是，序列化导致堆栈溢出的最小列表大小因运行而异（在我的机器上）。显示此问题的最小列表大小可能取决于平台实现和命令行标志；有些实现可能根本没有这个问题。")]),e._v(" "),i("p",[e._v("A reasonable serialized form for StringList is simply the number of strings in the list, followed by the strings themselves. This constitutes the logical data represented by a StringList, stripped of the details of its physical representation. Here is a revised version of StringList with writeObject and readObject methods that implement this serialized form. As a reminder, the transient modifier indicates that an instance field is to be omitted from a class’s default serialized form:")]),e._v(" "),i("p",[e._v("StringList 的合理序列化形式就是列表中的字符串数量，然后是字符串本身。这构成了由 StringList 表示的逻辑数据，去掉了其物理表示的细节。下面是修改后的 StringList 版本，带有实现此序列化形式的 writeObject 和 readObject 方法。提醒一下，transient 修饰符表示要从类的默认序列化表单中省略该实例字段：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// StringList with a reasonable custom serialized form\npublic final class StringList implements Serializable {\n    private transient int size = 0;\n    private transient Entry head = null;\n    // No longer Serializable!\n\n    private static class Entry {\n        String data;\n        Entry next;\n        Entry previous;\n    }\n    // Appends the specified string to the list\n    public final void add(String s) { ... }\n\n    /**\n    * Serialize this {@code StringList} instance.\n    **\n    @serialData The size of the list (the number of strings\n    * it contains) is emitted ({@code int}), followed by all of\n    * its elements (each a {@code String}), in the proper\n    * sequence.\n    */\n    private void writeObject(ObjectOutputStream s) throws IOException {\n        s.defaultWriteObject();\n        s.writeInt(size);\n        // Write out all elements in the proper order.\n        for (Entry e = head; e != null; e = e.next)\n            s.writeObject(e.data);\n    }\n\n    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n        s.defaultReadObject();\n        int numElements = s.readInt();\n        // Read in all elements and insert them in list\n        for (int i = 0; i < numElements; i++)\n            add((String) s.readObject());\n    }\n\n    ... // Remainder omitted\n}\n")])])]),i("p",[e._v("The first thing writeObject does is to invoke defaultWriteObject, and the first thing readObject does is to invoke defaultReadObject, even though all of StringList’s fields are transient. You may hear it said that if all of a class’s instance fields are transient, you can dispense with invoking defaultWriteObject and defaultReadObject, but the serialization specification requires you to invoke them regardless. The presence of these calls makes it possible to add nontransient instance fields in a later release while preserving backward and forward compatibility. If an instance is serialized in a later version and deserialized in an earlier version, the added fields will be ignored. Had the earlier version’s readObject method failed to invoke defaultReadObject, the deserialization would fail with a StreamCorruptedException.")]),e._v(" "),i("p",[e._v("writeObject 做的第一件事是调用 defaultWriteObject, readObject 做的第一件事是调用 defaultReadObject，即使 StringList 的所有字段都是 transient 的。你可能听说过，如果一个类的所有实例字段都是 transient 的，那么你可以不调用 defaultWriteObject 和 defaultReadObject，但是序列化规范要求你无论如何都要调用它们。这些调用的存在使得在以后的版本中添加非瞬态实例字段成为可能，同时保留了向后和向前兼容性。如果实例在较晚的版本中序列化，在较早的版本中反序列化，则会忽略添加的字段。如果早期版本的 readObject 方法调用 defaultReadObject 失败，反序列化将失败，并出现 StreamCorruptedException。")]),e._v(" "),i("p",[e._v("Note that there is a documentation comment on the writeObject method, even though it is private. This is analogous to the documentation comment on the private fields in the Name class. This private method defines a public API, which is the serialized form, and that public API should be documented. Like the @serial tag for fields, the @serialData tag for methods tells the Javadoc utility to place this documentation on the serialized forms page.")]),e._v(" "),i("p",[e._v("注意，writeObject 方法有一个文档注释，即使它是私有的。这类似于 Name 类中私有字段的文档注释。这个私有方法定义了一个公共 API，它是序列化的形式，并且应该对该公共 API 进行文档化。与字段的 "),i("code",[e._v("@serial")]),e._v(" 标记一样，方法的 "),i("code",[e._v("@serialData")]),e._v(" 标记告诉 Javadoc 实用工具将此文档放在序列化形式页面上。")]),e._v(" "),i("p",[e._v("To lend some sense of scale to the earlier performance discussion, if the average string length is ten characters, the serialized form of the revised version of StringList occupies about half as much space as the serialized form of the original. On my machine, serializing the revised version of StringList is over twice as fast as serializing the original version, with a list length of ten. Finally, there is no stack overflow problem in the revised form and hence no practical upper limit to the size of StringList that can be serialized.")]),e._v(" "),i("p",[e._v("为了给前面的性能讨论提供一定的伸缩性，如果平均字符串长度是 10 个字符，那么经过修改的 StringList 的序列化形式占用的空间大约是原始字符串序列化形式的一半。在我的机器上，序列化修订后的 StringList 的速度是序列化原始版本的两倍多，列表长度为 10。最后，在修改后的形式中没有堆栈溢出问题，因此对于可序列化的 StringList 的大小没有实际的上限。")]),e._v(" "),i("p",[e._v("While the default serialized form would be bad for StringList, there are classes for which it would be far worse. For StringList, the default serialized form is inflexible and performs badly, but it is correct in the sense that serializing and deserializing a StringList instance yields a faithful copy of the original object with all of its invariants intact. This is not the case for any object whose invariants are tied to implementation-specific details.")]),e._v(" "),i("p",[e._v("虽然默认的序列化形式对 StringList 不好，但是对于某些类来说，情况会更糟。对于 StringList，默认的序列化形式是不灵活的，并且执行得很糟糕，但是它是正确的，因为序列化和反序列化 StringList 实例会生成原始对象的无差错副本，而所有不变量都是完整的。对于任何不变量绑定到特定于实现的细节的对象，情况并非如此。")]),e._v(" "),i("p",[e._v("For example, consider the case of a hash table. The physical representation is a sequence of hash buckets containing key-value entries. The bucket that an entry resides in is a function of the hash code of its key, which is not, in general, guaranteed to be the same from implementation to implementation. In fact, it isn’t even guaranteed to be the same from run to run. Therefore, accepting the default serialized form for a hash table would constitute a serious bug. Serializing and deserializing the hash table could yield an object whose invariants were seriously corrupt.")]),e._v(" "),i("p",[e._v("例如，考虑哈希表的情况。物理表示是包含「键-值」项的哈希桶序列。一个项所在的桶是其键的散列代码的函数，通常情况下，不能保证从一个实现到另一个实现是相同的。事实上，它甚至不能保证每次运行都是相同的。因此，接受哈希表的默认序列化形式将构成严重的 bug。对哈希表进行序列化和反序列化可能会产生一个不变量严重损坏的对象。")]),e._v(" "),i("p",[e._v("Whether or not you accept the default serialized form, every instance field that isn’t labeled transient will be serialized when the defaultWriteObject method is invoked. Therefore, every instance field that can be declared transient should be. This includes derived fields, whose values can be computed from primary data fields, such as a cached hash value. It also includes fields whose values are tied to one particular run of the JVM, such as a long field representing a pointer to a native data structure. "),i("strong",[e._v("Before deciding to make a field nontransient, convince yourself that its value is part of the logical state of the object.")]),e._v(" If you use a custom serialized form, most or all of the instance fields should be labeled transient, as in the StringList example above.")]),e._v(" "),i("p",[e._v("无论你是否接受默认的序列化形式，当调用 defaultWriteObject 方法时，没有标记为 transient 的每个实例字段都会被序列化。因此，可以声明为 transient 的每个实例字段都应该做这个声明。这包括派生字段，其值可以从主数据字段（如缓存的哈希值）计算。它还包括一些字段，这些字段的值与 JVM 的一个特定运行相关联，比如表示指向本机数据结构指针的 long 字段。"),i("strong",[e._v("在决定使字段非 transient 之前，请确信它的值是对象逻辑状态的一部分。")]),e._v(" 如果使用自定义序列化表单，大多数或所有实例字段都应该标记为 transient，如上面的 StringList 示例所示。")]),e._v(" "),i("p",[e._v("If you are using the default serialized form and you have labeled one or more fields transient, remember that these fields will be initialized to their default values when an instance is deserialized: null for object reference fields, zero for numeric primitive fields, and false for boolean fields [JLS, 4.12.5]. If these values are unacceptable for any transient fields, you must provide a readObject method that invokes the defaultReadObject method and then restores transient fields to acceptable values (Item 88). Alternatively, these fields can be lazily initialized the first time they are used (Item 83).")]),e._v(" "),i("p",[e._v("如果使用默认的序列化形式，并且标记了一个或多个字段为 transient，请记住，当反序列化实例时，这些字段将初始化为默认值：对象引用字段为 null，数字基本类型字段为 0，布尔字段为 false [JLS, 4.12.5]。如果这些值对于任何 transient 字段都是不可接受的，则必须提供一个 readObject 方法，该方法调用 defaultReadObject 方法，然后将 transient 字段恢复为可接受的值（Item-88）。或者，可以采用延迟初始化（Item-83），在第一次使用这些字段时初始化它们。")]),e._v(" "),i("p",[e._v("Whether or not you use the default serialized form, "),i("strong",[e._v("you must impose any synchronization on object serialization that you would impose on any other method that reads the entire state of the object.")]),e._v(" So, for example, if you have a thread-safe object (Item 82) that achieves its thread safety by synchronizing every method and you elect to use the default serialized form, use the following write-Object method:")]),e._v(" "),i("p",[e._v("无论你是否使用默认的序列化形式，"),i("strong",[e._v("必须对对象序列化强制执行任何同步操作，就像对读取对象的整个状态的任何其他方法强制执行的那样。")]),e._v(" 例如，如果你有一个线程安全的对象（Item-82），它通过同步每个方法来实现线程安全，并且你选择使用默认的序列化形式，那么使用以下 write-Object 方法：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// writeObject for synchronized class with default serialized form\nprivate synchronized void writeObject(ObjectOutputStream s) throws IOException {\n    s.defaultWriteObject();\n}\n")])])]),i("p",[e._v("If you put synchronization in the writeObject method, you must ensure that it adheres to the same lock-ordering constraints as other activities, or you risk a resource-ordering deadlock [Goetz06, 10.1.5].")]),e._v(" "),i("p",[e._v("如果将同步放在 writeObject 方法中，则必须确保它遵守与其他活动相同的锁排序约束，否则将面临资源排序死锁的风险 [Goetz06, 10.1.5]。")]),e._v(" "),i("p",[i("strong",[e._v("Regardless of what serialized form you choose, declare an explicit serial version UID in every serializable class you write.")]),e._v(" This eliminates the serial version UID as a potential source of incompatibility (Item 86). There is also a small performance benefit. If no serial version UID is provided, an expensive computation is performed to generate one at runtime.")]),e._v(" "),i("p",[i("strong",[e._v("无论选择哪种序列化形式，都要在编写的每个可序列化类中声明显式的序列版本 UID。")]),e._v(" 这消除了序列版本 UID 成为不兼容性的潜在来源（Item-86）。这么做还能获得一个小的性能优势。如果没有提供序列版本 UID，则需要执行高开销的计算在运行时生成一个 UID。")]),e._v(" "),i("p",[e._v("Declaring a serial version UID is simple. Just add this line to your class:")]),e._v(" "),i("p",[e._v("声明序列版本 UID 很简单，只要在你的类中增加这一行：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("private static final long serialVersionUID = randomLongValue;\n")])])]),i("p",[e._v("If you write a new class, it doesn’t matter what value you choose for randomLongValue. You can generate the value by running the serialver utility on the class, but it’s also fine to pick a number out of thin air. It is not required that serial version UIDs be unique. If you modify an existing class that lacks a serial version UID, and you want the new version to accept existing serialized instances, you must use the value that was automatically generated for the old version. You can get this number by running the serialver utility on the old version of the class—the one for which serialized instances exist.")]),e._v(" "),i("p",[e._v("如果你编写一个新类，为 randomLongValue 选择什么值并不重要。你可以通过在类上运行 serialver 实用工具来生成该值，但是也可以凭空选择一个数字。串行版本 UID 不需要是唯一的。如果修改缺少串行版本 UID 的现有类，并且希望新版本接受现有的序列化实例，则必须使用为旧版本自动生成的值。你可以通过在类的旧版本上运行 serialver 实用工具（序列化实例存在于旧版本上）来获得这个数字。")]),e._v(" "),i("p",[e._v("If you ever want to make a new version of a class that is incompatible with existing versions, merely change the value in the serial version UID declaration. This will cause attempts to deserialize serialized instances of previous versions to throw an InvalidClassException. "),i("strong",[e._v("Do not change the serial version UID unless you want to break compatibility with all existing serialized instances of a class.")])]),e._v(" "),i("p",[e._v("如果你希望创建一个新版本的类，它与现有版本不兼容，如果更改序列版本 UID 声明中的值，这将导致反序列化旧版本的序列化实例的操作引发 InvalidClassException。"),i("strong",[e._v("不要更改序列版本 UID，除非你想破坏与现有序列化所有实例的兼容性。")])]),e._v(" "),i("p",[e._v("To summarize, if you have decided that a class should be serializable (Item 86), think hard about what the serialized form should be. Use the default serialized form only if it is a reasonable description of the logical state of the object; otherwise design a custom serialized form that aptly describes the object. You should allocate as much time to designing the serialized form of a class as you allocate to designing an exported method (Item 51). Just as you can’t eliminate exported methods from future versions, you can’t eliminate fields from the serialized form; they must be preserved forever to ensure serialization compatibility. Choosing the wrong serialized form can have a permanent, negative impact on the complexity and performance of a class.")]),e._v(" "),i("p",[e._v("总而言之，如果你已经决定一个类应该是可序列化的（Item-86），那么请仔细考虑一下序列化的形式应该是什么。只有在合理描述对象的逻辑状态时，才使用默认的序列化形式；否则，设计一个适合描述对象的自定义序列化形式。设计类的序列化形式应该和设计导出方法花的时间应该一样多，都应该严谨对待（Item-51）。正如不能从未来版本中删除导出的方法一样，也不能从序列化形式中删除字段；必须永远保存它们，以确保序列化兼容性。选择错误的序列化形式可能会对类的复杂性和性能产生永久性的负面影响。")])])},[],!1,null,null,null);t.default=s.exports}}]);