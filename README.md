## ZenMind-Pro Hexo Theme
本主题是基于  [ZenMind](https://github.com/LenChou95/hexo-theme-ZenMind) 修改的，增加了部分特效，以及新的功能。

在此，首先感谢 [@lenchou95](https://twitter.com/lenchou95) 提供的 [ZenMind](https://github.com/LenChou95/hexo-theme-ZenMind)，以及[https://imzl.com](https://imzl.com)的样式参考。

如需原本的主题，请移步 [ZenMind](https://github.com/LenChou95/hexo-theme-ZenMind)。

## 为什么要发布这个主题？

原本的 ZenMind 主题非常优秀，但是在 [@lenchou95](https://twitter.com/lenchou95) 的博客下，我看到了更多的样式以及功能，在issue中反馈给 [@lenchou95](https://twitter.com/lenchou95)，他并没有回复，所以就自己修改了。



## Live Demo

预览：[https://www.lazydaily.cn](https://www.lazydaily.cn)



## 功能

ZenMind功能

- 响应式设计，兼容手机端、Pad 端以及 PC 端；
- 支持所有现代浏览器；
- Markdown 常用格式支持；
- 代码高亮、行数显示支持；
- 目前版本支持的模版页：首页、文章详情页、归档页、单页；
- 中英文兼容，显示良好；
- 不支持评论。


Pro新增功能

**主页：**

- 时间格式改成“YYYY-MM-DD”，统一全站时间格式
- 标题添加悬停效果
- 添加左侧个人信息页，同时添加网站访问次数统计

**文章详情页：**

- 文章目录（支持点击目录跳转），支持目录隐藏/显示，
- 添加上下篇切换，返回顶部，返回主页按钮
- 统一了字体样式，正文使用字体为 Montserrat，代码使用字体为 JetBrainsMono-Italic
- 使用懒加载方式加载图片，添加图片点击全屏展示效果
- 添加代码全屏展示效果
- 更改加文章中粗样式效果为加粗，下划线

**归档页：**

- 优化页面样式，添加年份展示，文章标签展示
- 添加分类列表以及分类展示

**其他：**

- 部分点击特效，以及页面样式调整，具体可 查看 [ZenMind Demo](https://imzl.com/zenmind/) 对比
- 添加黑暗、明亮主题，以及切换主题功能
- 搜索功能（暂未实现）
- 评论功能（暂未实现）

## 安装
1. 克隆仓库到 Hexo themes 目录：
`git clone https://github.com/z1gui/hexo-theme-ZenMind-Pro themes/ZenMind`
2. 修改 Hexo 配置文件 `_config.yml`，将 `theme` 字段值改为 `ZenMind`；
3. 运行 `hexo serve` 预览主题效果。

## 已开启高亮代码

主题内置了 [highlightjs](https://highlightjs.org/) 以及 [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js) 两个插件，默认启用，无需手动开启。如无效果，请将 hexo/_config.yml 中的以下两处 `true` 改为 `false`：

```yml
highlight:
  enable: false
prismjs:
  enable: false
```

## 更换 favicon

请同命名覆盖替换 `source/img/favicon.ico` 文件；

如你需要使用 `.png` 格式，可在 `layout/_partial/head.ejs` Favicon 处修改。

## 更换 apple-touch-icon
请同命名覆盖替换 `source/img/apple-touch-icon.png` 图片。

## 其他

-   如果你觉得主题不错，欢迎分享出去；使用中遇到问题，可以在 [GitHub Issues](https://github.com/z1gui/hexo-theme-ZenMind-Pro/issues) 提交反馈；
-   可以在 [mail](mailto:leon6line@gmail.com) 与我取得联系。


## 作者

[z1gui](https://github.com/z1gui) <[lazydaily.cn](https://www.lazydaily.cn)>

再次感谢 [@lenchou95](https://twitter.com/lenchou95) 提供的 [ZenMind](https://github.com/LenChou95/hexo-theme-ZenMind)，以及[https://imzl.com](https://imzl.com)的样式参考。

## 版权声明

遵守 [MIT License](https://zh.wikipedia.org/wiki/MIT許可證) 协议
