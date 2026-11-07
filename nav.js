/**
 * 全书唯一导航数据源。
 * 侧边栏、面包屑、上一讲/下一讲、部级目录都由 app.js 依据本文件渲染。
 * 修改目录时只改这里，不要在各页面手写目录。
 */
const PARTS = [
  {
    file: 'part/01-foundation.html',
    part: '第一部 · 系统与检测基础',
    chapters: [
      { no: '01', file: 'ch/56-jailbreak.html', title: '越狱到底改了什么' },
      { no: '02', file: 'ch/01-boot.html', title: '启动链与信任建立' },
      { no: '03', file: 'ch/57-attest.html', title: '设备证明：安全隔区与 App Attest' },
      { no: '04', file: 'ch/x08-hardening-view.html', title: '注入与越狱检测' },
      { no: '05', file: 'ch/03-dyld.html', title: 'dyld 与程序加载' },
      { no: '06', file: 'ch/58-ptrace.html', title: 'ptrace 与调试附加' },
      { no: '07', file: 'ch/x09-inject.html', title: '注入链：从进程启动到脚本执行' },
      { no: '08', file: 'ch/x04-instrument.html', title: 'hook 原理：改数据、改方法表、改指令' },
      { no: '09', file: 'ch/x02-static.html', title: '静态侦察：从 IPA 到符号' },
      { no: '10', file: 'ch/x03-lldb.html', title: '用调试器观察自有应用' },
      { no: '11', file: 'ch/x06-arm64.html', title: '反汇编基础：ARM64 调用约定' },
      { no: '12', file: 'ch/x07-binary-flow.html', title: '从入口到功能：一次完整分析' },
      { no: '13', file: 'ch/x05-runtime-meta.html', title: 'Objective-C / Swift 元数据' },
      { no: '14', file: 'ch/13-ipc.html', title: 'Mach IPC 与端口' },
      { no: '15', file: 'ch/08-macho.html', title: 'Mach-O 与虚拟地址空间' },
      { no: '16', file: 'ch/32-macho-loadcmd.html', title: 'Mach-O 加载命令' },
      { no: '17', file: 'ch/05-signature.html', title: '代码签名与完整性' },
      { no: '18', file: 'ch/18-automation.html', title: '自动化：XCUITest 与 WDA' }
    ]
  },
  {
    file: 'part/02-kernel.html',
    part: '第二部 · 内核基础',
    chapters: [
      { no: 'K01', file: 'ch/11-process.html', title: '进程、线程与调度' },
      { no: 'K02', file: 'ch/12-vm.html', title: '虚拟内存与映射' },
      { no: 'K03', file: 'ch/59-exceptions.html', title: '异常、信号与崩溃现场' },
      { no: 'K04', file: 'ch/29-filesystem.html', title: '文件系统、容器与数据边界' },
      { no: 'K05', file: 'ch/30-diagnostics.html', title: '系统诊断与追踪' },
      { no: 'K06', file: 'ch/60-kernelcache.html', title: 'kernelcache 与内核符号' },
      { no: 'K07', file: 'ch/34-aslr.html', title: '地址随机化与运行地址' },
      { no: 'K08', file: 'ch/61-kernel-debug.html', title: '内核调试的限制与替代' },
      { no: 'K09', file: 'ch/04-sandbox.html', title: '沙盒与权限边界' },
      { no: 'K10', file: 'ch/62-xpc.html', title: 'XPC 与 Mach 服务' }
    ]
  },
  {
    file: 'part/03-frida.html',
    part: '第三部 · 动态插桩详解',
    chapters: [
      { no: 'F01', file: 'ch/x10-script-timing.html', title: '脚本时机与 ObjC 桥' },
      { no: 'F02', file: 'ch/x11-interceptor.html', title: 'Interceptor：方法级 hook 的字节实现' },
      { no: 'F03', file: 'ch/x12-stalker.html', title: 'Stalker：指令级追踪' },
      { no: 'F04', file: 'ch/x13-swift-limit.html', title: 'Swift 支持与限制' },
      { no: 'F05', file: 'ch/x14-compat-detect.html', title: '兼容与检测面' }
    ]
  },
  {
    file: 'part/04-runtime.html',
    part: '第四部 · 运行时与语言',
    chapters: [
      { no: 'R01', file: 'ch/06-objc.html', title: '对象与消息派发' },
      { no: 'R02', file: 'ch/07-runtime-safety.html', title: '运行时行为与安全边界' },
      { no: 'R03', file: 'ch/15-swift.html', title: 'Swift ABI 与运行时概览' },
      { no: 'R04', file: 'ch/38-arc-lifecycle.html', title: 'ARC 与对象生命周期' },
      { no: 'R05', file: 'ch/39-blocks-closures.html', title: 'Block、闭包与捕获' },
      { no: 'R06', file: 'ch/40-protocol-dispatch.html', title: '协议、泛型与派发边界' }
    ]
  },
  {
    file: 'part/05-framework.html',
    part: '第五部 · 框架与注入',
    chapters: [
      { no: 'W01', file: 'ch/x15-tweak.html', title: 'tweak 是什么：组成、加载与原理' },
      { no: 'W02', file: 'ch/w02-mini-tweak.html', title: '写一个最小 tweak：四步走通' },
      { no: 'W03', file: 'ch/41-objc-swift-bridge.html', title: '互操作与框架边界' },
      { no: 'W04', file: 'ch/w04-tweak-module.html', title: 'tweak 模块化：入口、开关与冲突' }
    ]
  },
  {
    file: 'part/06-hardening.html',
    part: '第六部 · 加固与混淆',
    chapters: [
      { no: 'H01', file: 'ch/x16-hardening.html', title: '加固结构与代价' },
      { no: 'H02', file: 'ch/x17-obfuscation.html', title: '混淆与反混淆阅读' },
      { no: 'H03', file: 'ch/h03-shell.html', title: '企业壳：特征、拆解顺序与识别' },
      { no: 'H04', file: 'ch/h04-vmp.html', title: 'VMP：解释循环与还原路径' }
    ]
  },
  {
    file: 'part/07-training.html',
    part: '第七部 · 实战训练营',
    chapters: [
      { no: 'T01', file: 'ch/19-lab.html', title: '自建靶场的检测与评估' },
      { no: 'T02', file: 'ch/53-lab-data.html', title: '数据流与存储评估' },
      { no: 'T03', file: 'ch/54-lab-network.html', title: '网络与授权验证' },
      { no: 'T04', file: 'ch/55-lab-regression.html', title: '修复、回归与报告' }
    ]
  },
  {
    file: 'part/99-appendix.html',
    part: '附录',
    chapters: [
      { no: 'A01', file: 'ch/10-platform.html', title: '平台安全边界与研究规范' },
      { no: 'A02', file: 'ch/a02.html', title: '术语与实验记录模板' },
      { no: 'A03', file: 'ch/a03.html', title: '官方资料与源码入口' },
      { no: 'A04', file: 'ch/a04.html', title: '版本矩阵模板' },
      { no: 'A05', file: 'ch/a05.html', title: '安全审查清单' },
      { no: 'A06', file: 'ch/a06.html', title: '自测题与参考答案' },
      { no: 'A07', file: 'ch/a07-benchmark.html', title: '章节对标：AndroidBook ↔ IOSBook' },
      { no: 'A08', file: 'ch/a08-outputs.html', title: '实机输出索引' }
    ]
  }
];
