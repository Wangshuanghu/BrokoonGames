export default {
    head: [
        ['link', { rel: 'icon', href: '/light-icon.png' }],
    ],
    title: '碎月网络官方',
    lastUpdated: true,
    description: '碎月网络，游戏开发组织，正在开发galgame《遇之泪》',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: '碎月游戏', //站点标题
        logo: {
          light: '/light-icon.png',
          dark: '/dark-icon.png',
          alt: 'Logo'
        },
        description: '碎月网络，游戏开发组织，正在开发galgame《遇之泪》',//
        nav: [
            { text: "首页", link: "/" },
            { text: "作品", link: "/games/" },
            { text: "团队", link: "/structure/" },
        { text: “碎音杯” , link: "/bromusiccup/“ },
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
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Wangshuanghu/BrokoonGames" },
        ],
        footer: {
            copyright: 'Copyright © 2022-2024 <a href="https://brokoon.college/">碎月网络</a>— —<a href="https://github.com/Wangshuanghu/BrokoonGames">我们的仓库</a>'
        },
        lastUpdatedText: "最近更新时间",
        search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索文章",
                  buttonAriaLabel: "搜索文章",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询条件",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
    },
};
