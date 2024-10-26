export const sidebar = {
    '/press/': [
      {
        text: '这是个例子',
        items: [
          { text: '简介', link: '/press/' },
          {
            text: '特别栏目',
            base: '/press/特别栏目/',
            collapsed: false,
            items: [
                {text: '2024国庆特辑', link: '2024国庆特辑/'},
            ]
            }
        ]
      }
    ]
  }
  
// 以上都是示范，用于侧边栏