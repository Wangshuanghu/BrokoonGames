import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: "首页", link: "/" },
  { text: "作品", link: "/games/" },
  { text: "团队", link: "/structure/" },
  { text: "碎音杯" , link: "/bromusiccup/" },
  { text: "关于我们", link: "/aboutus/"},
  { text: "论坛" , link: "http://3xfrc.fun/forum.php?mod=forumdisplay&fid=89" },
  {
    text: "友情链接",
    items: [
      { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
      { text: "MCJPG", link: "https://mcjpg.org/" },
      { text: "联动：Blophy Nova", link: "https://blophy.net/" },
      ]
  }
]
