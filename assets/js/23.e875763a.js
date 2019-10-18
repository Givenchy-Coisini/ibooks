(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{324:function(t,a,s){t.exports=s.p+"assets/img/2743275-ee7b41bee36ca18b.56df212f.png"},325:function(t,a,s){t.exports=s.p+"assets/img/2743275-0ba4495f601d65b7.874d4d17.png"},326:function(t,a,s){t.exports=s.p+"assets/img/2743275-49ee1dbd6da82ff5.bd4d0bfd.png"},450:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"idea安装lombok及使用详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idea安装lombok及使用详解","aria-hidden":"true"}},[t._v("#")]),t._v(" IDEA安装lombok及使用详解")]),t._v(" "),e("blockquote",[e("p",[t._v("项目中经常使用bean，entity等类，绝大部分数据类类中都需要get、set、toString、equals和hashCode方法，虽然eclipse和idea开发环境下都有自 动生成的快捷方式，但自动生成这些代码后，如果bean中的属性一旦有修改、删除或增加时，需要重新生成或删除get/set等方法，给代码维护增加负担。而使用了lombok则不一样，使用了lombok的注解\n("),e("code",[t._v("@Setter")]),t._v(","),e("code",[t._v("@Getter")]),t._v(","),e("code",[t._v("@ToString")]),t._v(","),e("code",[t._v("@RequiredArgsConstructor")]),t._v(","),e("code",[t._v("@EqualsAndHashCode")]),t._v("或"),e("code",[t._v("@Data")]),t._v(")之后，就不需要编写或生成get/set等方法，很大程度上减少了代码量，而且减少了代码维护的负担。故强烈建议项目中使用"),e("code",[t._v("lombok")]),t._v("，去掉bean中get、set、toString、equals和hashCode等方法的代码。")])]),t._v(" "),e("h4",{attrs:{id:"_1、安装lombok插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装lombok插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、安装lombok插件")]),t._v(" "),e("p",[e("img",{attrs:{src:s(324),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(325),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(326),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2、添加lombok的maven的pom-xml依赖："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加lombok的maven的pom-xml依赖：","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、添加"),e("code",[t._v("lombok")]),t._v("的maven的"),e("code",[t._v("pom.xml")]),t._v("依赖：")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.projectlombok"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lombok"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.10"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"_3、示例代码student-java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、示例代码student-java","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、示例代码"),e("code",[t._v("Student.java")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("package com.lombok.demo;\n\nimport lombok.EqualsAndHashCode;\nimport lombok.Getter;\nimport lombok.Setter;\nimport lombok.ToString;\n\n/**\n * Created by zhousiwei on 2017/2/8\n */\n@Data\npublic class Student {\n\tprivate String name;\n\tprivate int age;\n\tprivate String male;\n\tprivate String studentNo;\n}\n")])])]),e("p",[e("strong",[t._v("Tips:"),e("code",[t._v("@Data")]),t._v("注解的作用相当于"),e("code",[t._v("@Getter")]),t._v(","),e("code",[t._v("@Setter")]),t._v(","),e("code",[t._v("@RequiredArgsConstructor")]),t._v(","),e("code",[t._v("@ToString")]),t._v(","),e("code",[t._v("@EqualsAndHashCode")]),t._v("的合集。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);