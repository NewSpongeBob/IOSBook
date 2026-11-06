# IOSBook

iOS 系统架构、运行时与应用安全的条理化教程，参考 [AndroidBook](https://github.com/NewSpongeBob/AndroidBook) 的“分部—章节—实验—附录”组织方式。不是把 Android 内容换名，而是按 Apple 平台真实的组件、接口和安全边界重新组织。

## 全书主线

- **可信链**：启动安全、代码签名、Entitlements、数据保护与信任边界。
- **运行链**：XNU、进程与 VM、Mach-O、dyld、Objective-C/Swift Runtime。
- **检测链**：在自有应用、模拟器或明确授权环境中做观测、验证、回归和防御评估。

## 目录

| 部分 | 主题 | 状态 |
| --- | --- | --- |
| 第一部 · 系统与检测基础 | 启动、XNU、dyld、沙盒、签名 | 起步章节已写，持续扩充 |
| 第二部 · XNU 与内核基础 | task/thread、VM、Mach IPC、权限边界 | 目录与章节逐步补充 |
| 第三部 · 加载与可观测性 | Mach-O、dyld、调试信息、诊断 | 起步章节已写，持续扩充 |
| 第四部 · Objective-C / Swift Runtime | 对象、消息派发、ARC、元数据 | 起步章节已写，持续扩充 |
| 第五部 · 应用安全工程 | 数据保护、网络安全、威胁建模 | 起步章节已写，持续扩充 |
| 第六部 · 应用防护与兼容性 | 安全控制设计、版本矩阵、回归验证 | 规划中 |
| 第七部 · 授权实验训练营 | 自建样例、观察、修复、回归 | 规划中 |
| 附录 | 术语、资料、实验记录与排错 | 规划中 |

## 阅读方法

1. 先建立系统模型，再看具体实现；标明设备、系统版本和证据来源。
2. 每个结论配一个可证伪的实验，并区分公开文档、源码观察和推断。
3. 所有动态分析只针对自有或明确授权的应用与设备；训练内容以防御验证为目标。

## 本地预览

```bash
git clone https://github.com/NewSpongeBob/IOSBook.git
cd IOSBook
python3 -m http.server 8000
```

打开 http://localhost:8000。

## GitHub Pages

仓库根目录为纯静态站点。进入 **Settings → Pages**，选择 **Deploy from a branch**，分支 `main`、目录 `/(root)`，保存即可。
