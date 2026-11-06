# IOSBook

iOS 系统架构、运行时与应用安全的条理化学习手册，参考 [AndroidBook](https://github.com/NewSpongeBob/AndroidBook) 的分部、章节式组织方式。

全书以三条主线串联：

- **可信链**：系统和应用如何建立、验证信任。
- **运行链**：程序如何加载、映射并执行。
- **检测链**：如何在授权环境中观察行为、验证安全假设。

## 目录

| 部分 | 主题 | 起步章节 |
| --- | --- | --- |
| 第一部 · 系统基础 | 启动、xnu、dyld、沙盒、代码签名 | 5 |
| 第二部 · Objective-C Runtime | 对象、类、消息派发与运行时安全 | 2 |
| 第三部 · Mach-O 与内存 | 文件格式与虚拟地址空间 | 1 |
| 第四部 · 应用安全 | 威胁建模与防护验证 | 1 |
| 第五部 · 平台安全 | 安全边界与研究规范 | 1 |

## 阅读方法

1. 先建立系统模型，再查具体实现细节。
2. 每个结论注明依据、系统版本和实验条件。
3. 只在自有设备、模拟器或明确授权的环境中测试，优先进行防御性分析。

## 本地预览

```bash
git clone https://github.com/NewSpongeBob/IOSBook.git
cd IOSBook
python3 -m http.server 8000
```

然后打开 http://localhost:8000。

## GitHub Pages

仓库根目录已有静态站点入口。进入 **Settings → Pages**，选择 **Deploy from a branch**，分支设为 `main`、目录设为 `/(root)` 并保存。
