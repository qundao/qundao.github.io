---
title: 群岛
framed: true
---

## :alarm_clock: 雕刻时光

> 天何言哉？四时行焉，百物生焉，天何言哉？

<div class="index-cover">

![every](/images/index/萬.svg)
![thing](/images/index/物.svg)

<div>

## :rainbow: 切换主题

<!-- Color scheme 配色方案 -->

点击色块可更换明暗配色方案：

<div class="mdx-switch">
  <button data-md-color-scheme="default">default</button>
  <button data-md-color-scheme="slate">slate</button>
</div>

<script>
var buttons = document.querySelectorAll("button[data-md-color-scheme]");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.body.setAttribute("data-md-color-switching", "");

    var attr = this.getAttribute("data-md-color-scheme");
    const root = document.documentElement;
    if (attr === 'default') {
      root.removeAttribute('data-theme'); // 切换回亮色模式
    } else {
      root.setAttribute('data-theme', 'dark'); // 切换到暗色模式
    }
  })
})
</script>
