---
layout: page
title: 我们的团队
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const official = [
    {
    avatar: '/teammate/碎月游戏官方.jpg',
    name: '碎月游戏官方',
    links: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92C65.6 463.2 43.8 454.2 26.7 436.8C9.7 419.4 .8 396.5 0 368.2V169.8C.8 143.8 9.7 122.2 26.7 104.1C43.8 87.8 65.6 78.8 92 78H121.4L96.1 52.2C90.3 46.5 87.4 39.2 87.4 30.4C87.4 21.6 90.3 14.3 96.1 8.6C101.8 2.9 109.1 0 117.9 0C126.7 0 134 2.9 139.8 8.6L213.1 78H301.1L375.6 8.6C381.7 2.9 389.2 0 398 0C406.8 0 414.1 2.9 419.9 8.6C425.6 14.3 428.5 21.6 428.5 30.4C428.5 39.2 425.6 46.5 419.9 52.2L394.6 78L423.9 78C450.3 78.8 471.9 87.8 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.1C86.5 140.9 78.6 144.2 72.5 150.3C66.3 156.4 63.1 164.2 62.7 173.8V368.2C62.7 377.4 66 385.2 72.5 391.7C79 398.2 86.9 401.5 96.1 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>'
        },
         link: 'https://space.bilibili.com/3493122721975013' }
    ]
  },
]
const think = [
    {
    avatar: '/teammate/王双虎w.avif',
    name: '王双虎',
    desc: '001号组员，最初的想法从这里诞生',
  },  
  {
    avatar: '/teammate/季风又绿东海岸.avif',    
    name: '季风',
    desc: '004号组员，想法很多',
  },
    {
    avatar: '/teammate/落葵.jpg',
    name: '落葵ℒ.𝓀',
    desc: '006号组员，传奇文案主打抽象',
  },  
    {
    avatar: '/teammate/噬狼.jpg',
    name: '噬狼',
    desc: '008号组员，美工大神，曾有游戏制作经历',
  },  
    {
    name: 'Freirc',
    desc: '012号组员，曲神，人脉大佬',
  },  
]

const art = [
    {
    avatar: '/teammate/噬狼.jpg',
    name: '噬狼',
    desc: '008号组员,主美，美工大神，曾有游戏制作经历',
  },  
  {
    avatar: '/teammate/西斯塔.avif',    
    name: '西斯塔',
    desc: '013号组员，主美，立绘画师',
  },
    {
    name: 'digestive兔爷',
    desc: '015号组员，曲绘画师',
  },  

    {
    name: '猪猪桑pignako',
    desc: '011号组员，画技锻炼中',
  },  
]

const musical = [
    {
    name: 'Lex清风',
    desc: '005号组员,曲师，任职于某交响乐团',
  },  
  {
    name: 'FREirc',
    desc: '012号组员，曲神',
  },
    {
    name: '我做题很⑨',
    desc: '016号组员，作曲',
  },  
]

const IT = [
    {
    avatar: '/teammate/C++.avif',
    name: 'C++',
    desc: '002号组员,主程序，全村唯一的希望',
  },  
  {
    name: '随风',
    desc: '007号组员，官网运维',
  },
]

const word = [
    {
    avatar: '/teammate/王双虎w.avif',
    name: '王双虎',
    desc: '001号组员，《轮回Cycle》，《梦境The Dreams》编剧',
  },  
  {
    name: '冬日',
    desc: '003号组员，大鸽子',
  },
    {
    avatar: '/teammate/落葵.jpg',
    name: '落葵ℒ.𝓀',
    desc: '006号组员，传奇文案主打抽象',
  },
]

const animation = [
    {
    name: '风华正喵QAQ',
    desc: '010号组员,PV制作',
  },  
]

const play = [
    {
    name: 'cisyam',
    desc: '009号组员,制作低难度区间谱面',
  },  
  {
    name: 'xuzhou',
    desc: '014号组员，Lightech主策，谱面制作',
  },
]

const know = [
    {
    avatar: '/teammate/王双虎w.avif',
    name: '王双虎',
    desc: '001号组员，拼尽全力只为让你知道我们的存在',
  },  
]

const cute = [
    {
    avatar: '/teammate/季风又绿东海岸.avif',
    name: '季风',
    desc: '004号组员,全能理工男',
  },  
  {
    name: 'cisyam',
    desc: '009号组员，可爱的男生一枚',
  },
]

</script>

<VPTeamPage>

  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>认识一下 碎月网络 背后的年轻成员</template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>官方账号</template>
    <template #lead>关注碎月游戏官方谢谢喵</template>
    <template #members>
      <VPTeamMembers size="small" :members="official" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>策划组</template>
    <template #lead>一切，从这里开始</template>
    <template #members>
      <VPTeamMembers size="small" :members="think" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>美工组</template>
    <template #lead>他们让你"看"得到故事</template>
    <template #members>
      <VPTeamMembers size="small" :members="art" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>音乐组</template>
    <template #lead>他们让你听到属于我们的声音</template>
    <template #members>
      <VPTeamMembers size="small" :members="musical" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>技术组</template>
    <template #lead>一切的基石</template>
    <template #members>
      <VPTeamMembers size="small" :members="IT" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>文案组</template>
    <template #lead>梦想的扩张</template>
    <template #members>
      <VPTeamMembers size="small" :members="word" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>PV组</template>
    <template #lead>让图像动起来</template>
    <template #members>
      <VPTeamMembers size="small" :members="animation" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>谱师组</template>
    <template #lead>为音乐作出图像中的诠释</template>
    <template #members>
      <VPTeamMembers size="small" :members="play" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>运营组</template>
    <template #lead>让你知道我们</template>
    <template #members>
      <VPTeamMembers size="small" :members="know" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>吉祥物组/电焊组</template>
    <template #lead>可爱捏</template>
    <template #members>
      <VPTeamMembers size="small" :members="cute" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>