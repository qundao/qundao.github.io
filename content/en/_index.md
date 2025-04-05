---
title: ARCHIPELAGO
framed: true
---

## :alarm_clock: Sculpting in Time

> Ars longa, vita brevis.

<div class="index-cover">

![every](/images/index/萬.svg)
![thing](/images/index/物.svg)

<div>


## :rainbow: Theme Switch

Click on a tile to change the color scheme:

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
