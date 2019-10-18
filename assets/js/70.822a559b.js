(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{444:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux查看硬件信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux查看硬件信息","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux查看硬件信息")]),a._v(" "),t("h5",{attrs:{id:"系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统","aria-hidden":"true"}},[a._v("#")]),a._v(" 系统")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# uname -a               # 查看内核/操作系统/CPU信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# head -n 1 /etc/issue   # 查看操作系统版本")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat /proc/cpuinfo      # 查看CPU信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hostname               # 查看计算机名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# lspci -tv              # 列出所有PCI设备（yum install pciutils）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# lsusb -tv              # 列出所有USB设备")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# lsmod                  # 列出加载的内核模块")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# env                    # 查看环境变量")]),a._v("\n")])])]),t("h5",{attrs:{id:"资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源","aria-hidden":"true"}},[a._v("#")]),a._v(" 资源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# free -m                # 查看内存使用量和交换区使用量")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# df -h                  # 查看各分区使用情况")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# du -sh <目录名>        # 查看指定目录的大小")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# grep MemTotal /proc/meminfo   # 查看内存总量")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# grep MemFree /proc/meminfo    # 查看空闲内存量")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# uptime                 # 查看系统运行时间、用户数、负载")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat /proc/loadavg      # 查看系统负载")]),a._v("\n")])])]),t("h5",{attrs:{id:"磁盘和分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘和分区","aria-hidden":"true"}},[a._v("#")]),a._v(" 磁盘和分区")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mount | column -t      # 查看挂接的分区状态")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# fdisk -l               # 查看所有分区")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# swapon -s              # 查看所有交换分区")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hdparm -i /dev/hda     # 查看磁盘参数(仅适用于IDE设备)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# dmesg | grep IDE       # 查看启动时IDE设备检测状况")]),a._v("\n")])])]),t("h5",{attrs:{id:"网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ifconfig               # 查看所有网络接口的属性")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# iptables -L            # 查看防火墙设置")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# route -n               # 查看路由表")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# netstat -lntp          # 查看所有监听端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# netstat -antp          # 查看所有已经建立的连接")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# netstat -s             # 查看网络统计信息")]),a._v("\n")])])]),t("h5",{attrs:{id:"进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ps -ef                 # 查看所有进程")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# top                    # 实时显示进程状态")]),a._v("\n")])])]),t("h5",{attrs:{id:"用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# w                      # 查看活动用户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# id <用户名>            # 查看指定用户信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# last                   # 查看用户登录日志")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cut -d: -f1 /etc/passwd   # 查看系统所有用户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cut -d: -f1 /etc/group    # 查看系统所有组")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# crontab -l             # 查看当前用户的计划任务")]),a._v("\n")])])]),t("h5",{attrs:{id:"服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 服务")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# chkconfig --list       # 列出所有系统服务")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# chkconfig --list | grep on    # 列出所有启动的系统服务")]),a._v("\n")])])]),t("h5",{attrs:{id:"程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序","aria-hidden":"true"}},[a._v("#")]),a._v(" 程序")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rpm -qa                # 查看所有安装的软件包")]),a._v("\n")])])]),t("h5",{attrs:{id:"查看网卡型号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看网卡型号","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看网卡型号")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# lspci | grep Ethernet")]),a._v("\n")])])]),t("h5",{attrs:{id:"查看内存和cpu最直接最常用的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看内存和cpu最直接最常用的命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看内存和cpu最直接最常用的命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# free")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat /proc/cpuinfo")]),a._v("\n")])])]),t("h5",{attrs:{id:"查看硬盘信息（查看硬盘型号和硬盘序列号）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看硬盘信息（查看硬盘型号和硬盘序列号）","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看硬盘信息（查看硬盘型号和硬盘序列号）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# df -h")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);