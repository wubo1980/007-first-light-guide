# 007 First Light 攻略站 — Trae 建站提示词

## 站点定位
007: First Light（2026年5月27日发布，IO Interactive出品）的资深玩家攻略站。
竞品（007firstlight.wiki、007firstlight.org）偏通用入门指南，本站专注**深度策略 + 成就感内容**：

1. **S-Rank速通/潜行路线** — 每关评分最优解，适合追求高分的硬核玩家
2. **Gadget组合攻略** — 特定关卡的最佳装备搭配，非泛泛而谈
3. **成就/奖杯解锁指南** — 全收集/全成就详细路线
4. **TacSim模式深度攻略** — TacSim（战术模拟）模式的评分策略和Leaderboard冲榜技巧
5. **Boss/精英战拆解** — 每个Boss战的多种解法（潜行、强攻、巧用环境）

## 目标用户
硬核潜行游戏玩家（Hitman系列、MGS系列、Splinter Cell系列玩家）
——这群人不满足于"怎么通关"，他们要的是"怎么S-Rank通关"

## 整体设计风格
- 深色主题（间谍/特工氛围）
- 主色：深蓝黑 #0a0d14，强调色：金色 #d4a843（致敬007）
- 辅助色：白色 #e8e8e8，暗金 #8b7335
- 字体：Inter + 标题用 serif 字体（Montserrat 或 Playfair Display）
- 氛围：冷静、专业、高档，像MI6内部资料
- 背景加 subtle 网格线或点阵，模拟特工档案

## 技术要求
- 框架：Next.js + TailwindCSS
- 部署：Vercel（用 GitHub repo）
- 完全响应式（桌面优先）

## 页面结构

### 首页
**Hero区域：**
- Slogan: "Earn Your License to Kill"
- 副标题: "Master 007 First Light — S-Rank Routes, Gadget Builds & TacSim Strategies"
- 主CTA按钮: "View All Guides"
- 背景：深色调加金色细线装饰

**Features区域（4个核心内容板块，卡片式展示）：**
1. 新手必读（New Agent Briefing）
2. 全流程攻略（Mission Walkthroughs）
3. 装备与道具（Gadgets & Loadouts）
4. TacSim模式（Tactical Simulation）

**最新攻略/文章区域：**
- 横向滚动卡片，显示最新3-5篇文章
- 每张卡片：标题+简介+阅读时间+分类标签

**游戏基本信息区域（引用官方数据）：**
- 发行日期：May 27, 2026
- 开发商：IO Interactive
- 平台：PC, PS5, Xbox Series X|S
- 游戏时长：~15小时
- 主线任务：9个

### 攻略页面模板

**文章页结构：**
```
# Title
> 摘要（1-2句话概述）
⏱ 阅读时间：X分钟

## 内容正文
- 分节，每节有 h2 标题
- 关键点用卡片/提示框突出
- 所有重要操作/位置用 > 引用格式或高亮框

## 相关攻略
[相关文章链接]
```

### 页面导航
- 顶部导航：Guides | Gadgets | Missions | TacSim | About
- 底部：版权信息 + 关联链接（Discord/Reddit）

## 初始文章列表（首版要完成的）

1. **New Agent Briefing** — 新手完整入门（controls, detection system, Q Lens, Instinct详解）
2. **Stealth vs Combat Decision Guide** — 什么时候潜行什么时候硬刚 + 最佳技能升级路线
3. **All Gadgets Guide** — 全部8件装备的解锁条件、使用技巧、build推荐
4. **Mission 1 Walkthrough** — 教程关卡 + S-Rank路线和隐藏收集品
5. **Best Loadout for Beginners** — 前期最佳装备组合建议
6. **TacSim Mode Guide** — 模式介绍 + 基础评分策略
7. **Common Beginner Mistakes** — 新手常犯的10个错误（从竞品内容中提炼差异化）

## SEO优化
- 标题格式："[关键词] — 007 First Light Guide"
- 每篇文章至少800词
- 合理使用 h2/h3 结构，代码块、引用、列表
- 站内链接到相关攻略
- Meta description 包含核心关键词
- JSON-LD Schema（Game、FAQPage等）

## 评论引流
- 首页/每篇文章底部加Discord邀请链接
- Reddit /r/JamesBond 和 /r/stealthgames 适合发帖引流
- YouTube评论区自带游戏相关讨论

## 关于本站
- 非官方粉丝站，内容基于玩家社区经验和数据验证
- 声明未受IO Interactive或任何公司赞助
