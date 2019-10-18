(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{380:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux常用命令")]),a._v(" "),e("h5",{attrs:{id:"命令格式与目录处理命令ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令格式与目录处理命令ls","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令格式与目录处理命令"),e("code",[a._v("ls")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令格式与目录处理命令 ls\n命令格式：命令 [-选项][参数]\n\t例：ls -la /etc\n说明：\n\t 1）个别命令使用不遵循格式\n\t 2）当有多个选项时，可以写在一起\n\t 3）简化选项与完整选项\n\t   -a 等于 --all\n")])])]),e("h5",{attrs:{id:"目录处理命令-ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录处理命令-ls","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录处理命令 "),e("code",[a._v("ls")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令名称：ls\n命令因为原意：list\n命令所在路径：/bin/ls\n执行权限：所有用户\n功能描述：显示目录文件\n语法：ls 选项[-ald][文件或目录]\n\t\t-a 显示所有文件，包括隐藏文件\n\t\t-l 详细信息显示\n\t\t-d 查看目录属性\n\n-rw-r–r–\n文件类型（-文件 d目录 l软链接文件）\nrw- r– r–\nu g o\nu所有者 g所属组 o其他人\nr读 w写 x执行\n")])])]),e("h3",{attrs:{id:"目录处理命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录处理命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录处理命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：mkdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：mkdir","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("mkdir")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：make directories\n命令所在路径：/bin/mkdir\n执行权限：所有用户\n执行权限：所有用户\n功能描述：创建新目录\n\t-p 递归创建\n\n例：mkdir -p/tmp/japan/hanmeimei\nmkdir /tmp/japan/lilei /tmp/japan/hanmeimei\n")])])]),e("h5",{attrs:{id:"命令名称：cd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：cd","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("cd")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：change directory\n命令所在路径：shell内置命令\n执行权限：所有用户\n语法：cd [目录名]\n功能描述：切换目录\n\n例：cd /tmp/japan/hanmeimei 切换到指定目录\ncd .. 回到上一级目录\n")])])]),e("h5",{attrs:{id:"命令名称：pwd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：pwd","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("pwd")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：print working directory\n命令所在路径：/bin/pwd\n执行权限：所有用户\n语法：pwd\n功能描述：显示当前目录\n\n范例：$ pwd\n")])])]),e("h5",{attrs:{id:"命令名称：rmdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：rmdir","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("rmdir")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：remove empty directories\n命令所在路径：/bin/rmdir\n执行权限：所有用户\n语法：rmdir [目录名]\n功能描述：删除空目录\n\n范例：$ rmdir /tmp/japan/lilei\n")])])]),e("h5",{attrs:{id:"命令名称：cp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：cp","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("cp")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：copy\n命令所在路径：/bin/cp\n执行权限：所有用户\n语法:cp -rp [原文件或目录][目标目录]\n\t-r 复制目录\n\t-p 保存文件属性\n功能描述：复制文件或目录\n\n范例：$ cp -r /tmp/japan/hanmeimei /root\n将目录/tmp/japan/hanmeimei 复制到目录/root下\ncp -rp /tmp/japan/hameimei /tmp/japan/lilei /root\n将/tmp/japan目录下的hanmeimei和lilei目录复制到root下，并保持目录属性\n")])])]),e("h5",{attrs:{id:"命令名称：mv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：mv","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("mv")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：move\n命令所在路径：/bin/mv\n执行权限：所有用户\n语法:mv [原文件或目录][目标目录]\n功能描述：剪切文件、改名\n")])])]),e("h5",{attrs:{id:"命令名称：rm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：rm","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("rm")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令因为原意：remove\n命令所在路径：/bin/rm\n执行权限：所有用户\n语法:rm -rf[文件或目录]\n\t-r 删除目录\n\t-f 强制执行\n功能描述：删除文件\n\n范例：$ rm /tmp/yum.log\n删除文件/tmp/yum.log\nrm -rf /tmpjapan/lilei\n删除目录/tmp/japan/lilei\n")])])]),e("h3",{attrs:{id:"文件处理命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件处理命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件处理命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：touch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：touch","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("touch")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/touch\n执行权限：所有用户\n语法:touch [文件名]\n功能描述：创建空文件\n\n范例：$ touch log.log\n")])])]),e("h5",{attrs:{id:"命令名称：cat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：cat","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("cat")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/cat\n执行权限：所有用户\n语法:cat [文件名]\n功能描述：显示文件内容\n\t\t-n 显示行号\n\n范例：$ cat /etc/issue\ncat -n /etc/services\n")])])]),e("h5",{attrs:{id:"命令名称：tac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：tac","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("tac")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/tac\n执行权限：所有用户\n语法:tac [文件名]\n功能描述：显示文件内容(反向列示)\n\n范例：$ tac /etc/issue\n")])])]),e("h5",{attrs:{id:"命令名称：more"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：more","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("more")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/more\n执行权限：所有用户\n语法:more [文件名]\n\t(空格)或f  翻页\n\t(Enter)     换行\n\tq或Q     退出\n功能描述：分页显示文件内容\n\n范例：$ more /etc/services\n")])])]),e("h5",{attrs:{id:"命令名称：less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：less","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("less")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/less\n执行权限：所有用户\n语法:less [文件名]\n功能描述：分页显示文件内容(可向上翻页)\n\n范例：$ less /etc/services\n")])])]),e("h5",{attrs:{id:"命令名称：head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：head","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("head")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/head\n执行权限：所有用户\n语法:head [文件名]\n功能描述：显示文件前面几行\n\t-n 指定行数\n\n范例：$ head -n 20 /etc/services\n")])])]),e("h5",{attrs:{id:"命令名称：tail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：tail","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("tail")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/tail\n执行权限：所有用户\n语法:tail [文件名]\n功能描述：显示文件后面面几行\n\t\t-n 指定行数\n\t\t-f 动态显示文件末尾内容\n\n范例：$ tail -n 18 /etc/services\n")])])]),e("h5",{attrs:{id:"命令名称：ln"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：ln","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("ln")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('命令英文原意：link\n命令所在路径：/bin/link\n执行权限：所有用户\n语法:ls -s [原文件][目标文件]\n\t\t-s 创建软链接\n功能描述：生成链接文件\n\n范例：$ ln -s /etc/issue /tmp/issue.soft\n创建文件/etc/issue的软链接/tmp/issue.soft\nln /etc/issue /tmp/issue.hard\n创建文件/etc/issue的硬链接/tmp/issue.hard\n软链接特征：类似Windows快捷方式\n1.1rwxrwxrwx 1软链接\n软链接文件权限都为rwxrwxrwx\n2、文件大小-只是符号链接\n3、/tmp/issue.soft->/etc/issue\n箭头指向原文件\n硬链接特征：\n1.拷贝cp -p + 同步更新\necho "this is a test" >> /etc/motd\n2.可通过i节点识别\n3.不能跨分区\n4.不能针对目录使用\n')])])]),e("h3",{attrs:{id:"权限管理命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限管理命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 权限管理命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：chmod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：chmod","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("chmod")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：change the permissions mode of a file\n命令所在路径：/bin/chmod\n执行权限：所有用户\n语法：chmod [{ugoa}{+-=}{rwx}] [文件或目录]\n\t\t[mode=421 ] [文件或目录]\n\t\t-R 递归修改\n功能描述：改变文件或目录权限\n\n权限的数字表示\n\n权限的数字表示\nr\t4\nw\t2\nx\t1\n\n范例：$ rwxrw-r--\n7 6 4\n范例：$ chmod g+w testfile\n赋予文件testfile所属组写权限\nchmod -R 777 testdir\n修改目录testfile及其目录下文件为所有用户具有全部权限\n")])])]),e("h3",{attrs:{id:"其他权限命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他权限命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他权限命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：chown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：chown","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("chown")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：change file ownership\n命令所在路径：/bin/chown\n执行权限：所有用户\n语法：chown [用户] [文件或目录]\n功能描述：改变文件或目录的所有者\n范例：$ chown hanmeimei beijian\n改变文件beijian的所有者为hanmeimei\n")])])]),e("h5",{attrs:{id:"命令名称：chgrp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：chgrp","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("chgrp")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：change file group ownership\n命令所在路径：/bin/chgrp\n执行权限：所有用户\n语法：chgrp [用户组] [文件或目录]\n功能描述：改变文件或目录的所属组\n范例：$ chgrp hmeimei beijing\n改变文件beijing的所属组为hanmeimei\n")])])]),e("h5",{attrs:{id:"命令名称：umask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：umask","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("umask")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：the user file-creation mask\n命令所在路径：Shell内置命令\n执行权限：所有用户\n语法：umask [-S]\n\t-S 以rwx形式显示新建文件缺省权限\n功能描述：显示、设置文件的缺省权限\n范例：$ umask -S\n")])])]),e("h3",{attrs:{id:"文件搜索命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件搜索命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：find","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("find")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/find\n执行权限：所有用户\n语法：find [搜索范围] [匹配条件]\n功能描述：文件搜索\n\n范例：$ find /etc -name init\n在目录/etc中查找文件init\n-iname 不区分大小写\nfind / -size +204800\n在根目录下查找大于100MB的文件\n+n 大于 -n 小于 n 等于\nfind /home -user hanmeimei\n在根目录下查找所有者为hanmeimei的文件\n-group 根据所属组查找\nfind /etc -cmin -5\n在/etc下查找5分钟内被修改过属性的文件和目录\n-amin 访问时间 access\n-cmin 文件属性 change\n-mmin 文件内容 modify\nfind /etc -size +163840 -a -size -204800\n在/etc下查找大于80MB小于100MB的文件\n-a 两个条件同时满足\n-o 两个条件满足任意一个即可\nfind /etc -name inittab -exec ls -l {} \\;\n在/etc下查找inittab文件并显示其详细信息\n-exec/-ok 命令 {} \\; 对搜索结果执行操作\n-type 根据文件类型查找\nf 文件 d 目录 l 软链接文件\n-inum 根据i节点查找\n")])])]),e("h5",{attrs:{id:"命令名称：locate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：locate","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("locate")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/locate\n执行权限：所有用户\n语法：locate 文件名\n功能描述：在文件资料库中查找文件\n范例：$ locate inittab\n")])])]),e("h5",{attrs:{id:"命令名称：which"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：which","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("which")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/which\n执行权限：所有用户\n语法：which 命令\n功能描述：搜索命令所在目录及别名信息\n范例：$ which ls\n")])])]),e("h5",{attrs:{id:"命令名称：whereis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：whereis","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("whereis")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/whereis\n执行权限：所有用户\n语法：whereis [命令名称]\n功能描述：搜索命令所在目录及帮助文档路径\n范例：$ whereis ls\n")])])]),e("h5",{attrs:{id:"命令名称：grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：grep","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("grep")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/grep\n执行权限：所有用户\n语法：grep -iv [指定字串] [文件]\n功能描述：在文件中搜寻字串匹配的行并输出\n\t\t\t-i 不区分大小写\n\t\t\t-v 排除指定字串\n\n范例：# grep mysql /root/install.log\n")])])]),e("h3",{attrs:{id:"帮助命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 帮助命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：man"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：man","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("man")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：manual\n命令所在路径：/usr/bin/man\n执行权限：所有用户\n语法：man [命令或配置文件]\n功能描述：获得帮助信息\n\n范例： $ man ls\n查看ls命令的帮助信息\n$ man services\n查看配置文件services的帮助信息\n")])])]),e("h5",{attrs:{id:"命令名称：help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：help","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("help")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：Shell内置命令\n执行权限：所有用户\n语法：help 命令\n功能描述：获得Shell内置命令的帮助信息\n范例： $ help umask\n查看umask命令的帮助信息\n")])])]),e("h3",{attrs:{id:"用户管理命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户管理命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户管理命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：useradd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：useradd","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("useradd")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/sbin/useradd\n执行权限：root\n语法：useradd 用户名功能描述：添加新用户\n功能描述：添加新用户\n范例： $ useradd lilei\n")])])]),e("h5",{attrs:{id:"命令名称：passwd-username"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：passwd-username","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("passwd username")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/passwd\n执行权限：所有用户\n语法：passwd 用户名\n功能描述：设置用户密码\n范例： $ passwd lilei\n")])])]),e("h5",{attrs:{id:"命令名称：who"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：who","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("who")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/who\n执行权限：所有用户\n语法：who\n功能描述：查看登录用户信息\n范例： $ who\n")])])]),e("h5",{attrs:{id:"命令名称：w"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：w","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("w")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/w\n执行权限：所有用户\n语法：w\n功能描述：查看登录用户详细信息\n范例： $ w\n")])])]),e("h3",{attrs:{id:"压缩解压命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩解压命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩解压命令")]),a._v(" "),e("h5",{attrs:{id:"命令名称：gzip-只能压缩文件，不能压缩目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：gzip-只能压缩文件，不能压缩目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("gzip")]),a._v("(只能压缩文件，不能压缩目录)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：GNU zip\n命令所在路径：/bin/gzip\n执行权限：所有用户\n语法：gzip [文件]\n功能描述：压缩文件\n压缩后文件格式：.gz\n")])])]),e("h5",{attrs:{id:"命令名称：gunzip-解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：gunzip-解压","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("gunzip")]),a._v("(解压)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：GNU unzip\n命令所在路径：/bin/gunzip\n执行权限：所有用户\n语法：gunzip [压缩文件]\n功能描述：解压缩.gz的压缩文件\n\n范例： $ gunzip boduo.gz\n")])])]),e("h5",{attrs:{id:"命令名称：tar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：tar","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("tar")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/tar\n执行权限：所有用户\n语法：tar 选项[-zcf] [压缩后文件名] [目录]\n\t\t-c 打包\n\t\t-v 显示详细信息\n\t\t-f 指定文件名\n\t\t-z 打包同时压缩\n功能描述：打包目录\n压缩后文件格式：.tar.gz\n\n范例：$ tar -zcf Japan.tar.gz Japan\n将目录Japan打包并压缩为.tar.gz文件\ntar命令解压缩语法:\n-x 解包\n-v 显示详细信息\n-f 指定解压文件\n-z 解压缩\n\n范例：$ tar -zxvf Japan.tar.gz\n")])])]),e("h5",{attrs:{id:"命令名称：zip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：zip","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("zip")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/zip\n执行权限：所有用户\n语法：zip 选项[-r] [压缩后文件名] [文件或目录]\n\t\t-r 压缩目录\n功能描述：压缩文件或目录\n压缩后文件格式：.zip\n范例：$ zip buduo.zip boduo\n压缩文件\n$ zip -r Japan.zip Japan\n压缩目录\n")])])]),e("h5",{attrs:{id:"命令名称：unzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：unzip","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("unzip")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/unzip\n执行权限：所有用户\n语法：unzip [压缩文件]\n功能描述：解压.zip的压缩文件\n范例：$ unzip test.zip\n")])])]),e("h5",{attrs:{id:"命令名称：bzip2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：bzip2","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("bzip2")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/bzip2\n执行权限：所有用户\n语法： bzip2 选项 [-k] [文件]\n\t\t  -k 产生压缩文件后保留原文件\n功能描述：压缩文件\n压缩后文件格式：.bz2\n\n范例：$ bzip2 -k boduo\n$ tar -cjf Japan.tar.bz2 Japan\n")])])]),e("h5",{attrs:{id:"命令名称：bunzip2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：bunzip2","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("bunzip2")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/bunzip2\n执行权限：所有用户\n语法： bunzip2 选项 [-k] [压缩文件]\n\t\t\t-k 解压缩后保留原文件\n功能描述：解压缩\n范例：$ bunzip2 -k boduo.bz2\n$ tar -xjf Japan.tar.bz2\n")])])]),e("h3",{attrs:{id:"网络命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络命令")]),a._v(" "),e("h5",{attrs:{id:"指令名称：write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令名称：write","aria-hidden":"true"}},[a._v("#")]),a._v(" 指令名称："),e("code",[a._v("write")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("指令所在路径：/usr/bin/write\n执行权限：所有用户\n语法：write <用户名>\n功能描述：给用户发信息，以Ctrl+D保存结束\n范例： # write linzhiling\n")])])]),e("h5",{attrs:{id:"命令名称：ping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：ping","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("ping")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/ping\n执行权限：所有用户\n语法：ping 选项 IP地址\n\t\t-c 指定发送次数\n功能描述：测试网络连通性\n\n范例： # ping 192.168.1.156\n")])])]),e("h5",{attrs:{id:"命令名称：ifconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：ifconfig","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("ifconfig")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令英文原意：interface configure\n命令所在路径：/sbin/ifconfig\n执行权限：root\n语法：ifconfig 网卡名称 IP地址\n功能描述：查看和设置网卡信息\n范例：# ifconfig eth0 192.168.8.250\n")])])]),e("h5",{attrs:{id:"命令名称：mail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：mail","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("mail")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/mail\n执行权限：所有用户\n语法：mail [用户名]\n功能描述：查看发送电子邮件\n\n范例：# mail root\n")])])]),e("h5",{attrs:{id:"命令名称：last"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：last","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("last")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/last\n执行权限：所有用户\n语法：last\n功能描述：列出目前与过去登入系统的用户信息\n范例：# last\n")])])]),e("h5",{attrs:{id:"命令名称：lastlog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：lastlog","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("lastlog")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/lastlog\n执行权限：所有用户\n语法：lastlog\n功能描述：检查某特定用户上次登录的时间\n范例：# lastlog\n# lastlog -u 502\n")])])]),e("h5",{attrs:{id:"命令名称：traceroute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：traceroute","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("traceroute")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/traceroute\n执行权限：所有用户\n语法：traceroute\n功能描述：显示数据包到主机间的路径\n范例：# traceroute www.baidu.com\n")])])]),e("h5",{attrs:{id:"命令名称：netstat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：netstat","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("netstat")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/bin/netstat\n执行权限：所有用户\n语法：netstat [选项]\n功能描述：显示网络相关信息\n 选项：\n-t ： TCP协议\n-u ： UDP协议\n-l ： 监听\n-r ： 路由\n-n ： 显示IP地址和端口号\n\n范例：\n# netstat -tlun 查看本机监听的端口\n# netstat -an 查看本机所有的网络连接\n# netstat -rn 查看本机路由表\n")])])]),e("h5",{attrs:{id:"命令名称：setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：setup","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("setup")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令所在路径：/usr/bin/setup\n执行权限：root\n语法：setup\n功能描述：配置网络\n范例：# setup\n")])])]),e("h5",{attrs:{id:"命令名称：mount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令名称：mount","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令名称："),e("code",[a._v("mount")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("命令位置：/bin/mount\n执行权限：所有用户\n命令语法：mount [-t 文件系统] 设备文件名 挂载点\n\n范例：# mount -t iso9660 /dev/sr0 /mnt/cdrom\n")])])]),e("h3",{attrs:{id:"关机重启命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关机重启命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 关机重启命令")]),a._v(" "),e("h5",{attrs:{id:"shutdown-选项-时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shutdown-选项-时间","aria-hidden":"true"}},[a._v("#")]),a._v(" "),e("code",[a._v("shutdown")]),a._v(" [选项] 时间")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("选项：\n-c： 取消前一个关机命令\n-h： 关机\n-r： 重启\n")])])]),e("h5",{attrs:{id:"其他关机命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他关机命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他关机命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# halt\n# poweroff\n# init 0\n")])])]),e("h5",{attrs:{id:"其他重启命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他重启命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他重启命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# reboot\n# init 6\n")])])]),e("h5",{attrs:{id:"系统运行级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统运行级别","aria-hidden":"true"}},[a._v("#")]),a._v(" 系统运行级别")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("0   关机\n1   单用户\n2   不完全多用户，不含NFS服务\n3   完全多用户\n4   未分配\n5   图形界面\n6   重启\n")])])]),e("h5",{attrs:{id:"修改系统默认运行级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改系统默认运行级别","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改系统默认运行级别")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# cat /etc/inittab\nid:3:initdefault:\n")])])]),e("h5",{attrs:{id:"查询系统运行级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询系统运行级别","aria-hidden":"true"}},[a._v("#")]),a._v(" 查询系统运行级别")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# runlevel\n")])])]),e("h5",{attrs:{id:"退出登录命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出登录命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 退出登录命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# logout\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);