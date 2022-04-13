<template lang="pug">
main
  header
    a(href='/')
      img.logo(alt='logo' src='../assets/logo.png')
    span NekoCraft
  section#first(bp='grid vertical-center' :style='styleObject')
    div(bp='12')
      img.shake-slow.logo(alt='logo' src='../assets/logo.png')
      h1 NekoCraft
      h3 公益 | 正版 | 原版生存 | 死亡不掉
      p 一个和谐友爱的 MineCraft 服务器
      p
      .buttons
        a.btn.btn-primary(role='button' href='https://jq.qq.com/?_wv=1027&k=5mmRYXm' target='_blank') 加入Q群
        a.btn.btn-secondary(role='button' href='http://user.nekocraft.net/#/about' target='_blank') 服务器规定
  section#second
    section(bp='grid vertical-center')
      div(bp='10 offset-2 5@md offset-2@md')
        iframe(src='//player.bilibili.com/player.html?aid=204181396&bvid=BV1Th411y7TB&cid=297720995&page=1' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true')
      .container.right(bp='4@md offset-8@md 12 offset-1')
        h1 新年活动: 焰火之夜
        p 夜幕沉寂之时, 焰火冉冉升起.
        p 告别旧年迷离, 沉醉今夜绚丽.
        p 这个除夕, 大家欢闹嬉戏.
        p 这段记忆, 注定难以舍弃.
        p.small (点击左侧以播放视频)
    section(bp='grid vertical-center')
      div(bp='last@md 4@md 10 offset-2')
        img.img(src='../assets/members.jpg')
      .container(bp='first@md 12 5@md offset-2@md')
        h1 这是一个温馨的大家庭
        p 我们, 或许不够完美.
        p 但是, 却充满着欢笑与喜悦.
        p.small (至今已有 2k+ 小伙伴加入了服务器)
    h1 更多图片
    section#more
      .swiper
        #slide.swiper-wrapper
          img.swiper-slide(v-for='image in images' :key='image' :src='getRandomImage(image)')
        .swiper-pagination.swiper-pagination-white
        .swiper-button-prev.swiper-button-white
        .swiper-button-next.swiper-button-white
  section#third(bp='grid vertical-center')
    div(bp='12') 我们的优势
    section(bp='4@md 12')
      img(src='../assets/minecraft.png')
      p 高频处理器, TPS大部分时间都在20左右
      p 独立机房, 三线网路, 让您保持流畅游戏体验
    section(bp='4@md 12')
      img(src='../assets/minecraft.png')
      p 玩法多样, 建筑、红石、养老样样均可
      p 死亡不掉落已开启, 让您愉快游戏
    section(bp='4@md 12')
      img(src='../assets/minecraft.png')
      p 已通过 MCBBS 公益服务器审核
      p 只为打造一个良好的游戏环境和社区
  section#forth
    h1 服务器管理组
    div
      section
        img.img(src='https://minotar.net/helm/KagurazakaSatori/100.png')
        h3 KagurazakaSatori
        p 服主
      section
        img.img(src='https://minotar.net/helm/HarukawaSayaka/100.png')
        h3 HarukawaSayaka
        p 管理员
      section
        img.img(src='https://minotar.net/helm/tobell/100.png')
        h3 tobell
        p 管理员
      section
        img.img(src='https://minotar.net/helm/Lulu_Fengling/100.png')
        h3 Lulu_Fengling
        p 管理员
      section
        img.img(src='https://minotar.net/helm/RukiaOvO/100.png')
        h3 RukiaOvO
        p 管理员
      section
        img.img(src='https://minotar.net/helm/YtonE/100.png')
        h3 YtonE
        p 管理员
    h1 联系我们
    ul
      li
        | QQ 群:
        a(href='https://jq.qq.com/?_wv=1027&k=5mmRYXm' target='_blank') 7923309
      li
        | Telegram 群组:
        a(href='https://t.me/NekoCraft' target='_blank') @NekoCraft
      li
        a(href='https://www.mcbbs.net/thread-1156058-1-1.html' target='_blank') MCBBS 宣传贴
      li
        a(href='https://user.nekocraft.net' target='_blank') 用户中心
      li
        a(href='https://user.nekocraft.net/#/maps' target='_blank') 网页地图
      li
        a(href='https://user.nekocraft.net/#/about' target='_blank') 服务器规定
      li
        a(href='https://github.com/neko-craft' target='_blank') Github
  footer
    a(href='http://www.beian.miit.gov.cn' target='_blank') 桂ICP备20005600号-1
    span.copy Copyright © 2021 Apisium All rights reserved.

</template>

<script>
import Swiper from "swiper";
window.mySwiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const bgs = [0, 1, 2, 3, 4, 5, 6].map((i) => `../assets/backgrounds/${i}.jpg`);
const keys = Object.keys(bgs);
export default {
  data() {
    return {
      images: Object.keys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).sort(
        () => Math.random() - 0.5
      ),
      styleObject: {
        backgroundImage: `url(${
          new URL(bgs[keys[(Math.random() * keys.length) | 0]], import.meta.url)
            .href
        })`,
      },
    };
  },
  methods: {
    getRandomImage(key) {
      return new URL(`../assets/images/${key}.jpg`, import.meta.url).href;
    },
  },
};
</script>
