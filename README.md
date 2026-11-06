# IOSBook

iOS 系统架构 · 运行时 · 安全 —— 从 Mach-O 与 dyld 到 objc runtime 与内核工程的一本条理化教程。

## 这本书讲什么

这不是零散的技巧合集，而是一套按能力阶梯组织的工程手册。全书围绕三条主线展开：

- 可信链：怎么验证签名、完整性与信任关系
- 运行链：怎么理解 dyld、objc runtime、Mach 与进程加载
- 检测链：怎么发现 Hook、检测、反调试与越权行为

## 目录

| 部分 | 内容 | 讲数 |
| --- | --- | --- |
| 第一部 · iOS 与系统基础 | boot / Mach / dyld / launchd / sandbox / 签名 | 8 |
| 第二部 · 运行时与对象模型 | objc runtime / ISA / msg_send / KVO / KVC / swizzling | 9 |
| 第三部 · 内存与加载 | ASLR / Mach-O / mmap / heap / stack / lazy binding | 8 |
| 第四部 · 检测与防护 | Frida / ptrace / anti-debug / block / SSL pinning | 8 |
| 第五部 · 内核与越狱工程 | xnu / kext / PAC / syscall / privilege | 7 |
| 附录 | 速查表 / 术语 / 学习路线 / 排错 | 5 |

## 学习方法

1. 先建模型，再记细节。
2. 每个结论配一个可证伪实验。
3. 改完必须回归。

## 本地预览

```bash
git clone https://github.com/NewSpongeBob/IOSBook.git
cd IOSBook
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 说明

- 纯静态站点，无 JavaScript 框架依赖
- 支持目录搜索、代码复制、移动端阅读
- `.nojekyll` 已启用，适合 GitHub Pages
