---
icon: material/map-legend
hide:
  - footer
  - toc
title: ""
---

<style>
  .md-typeset button[data-md-color-primary] > code {
    background-color: var(--md-primary-fg-color);
    color: var(--md-code-bg-color);
  }
  .md-typeset button[data-md-color-accent] > code {
    background-color: var(--md-code-bg-color);
    color: var(--md-accent-fg-color);
  }
</style>

## :alarm_clock: 雕刻时光

> 天何言哉？四时行焉，百物生焉，天何言哉？

![萬](assets/images/index/萬.svg){ width=200px }
![物](assets/images/index/物.svg){ width=200px }

---

## :rainbow: 切换主题

### 配色方案

<!-- Color scheme 配色方案 -->

点击色块可更换明暗配色方案：

<div class="mdx-switch">
  <button data-md-color-scheme="default"><code>默认</code></button>
  <button data-md-color-scheme="slate"><code>板岩灰</code></button>
</div>

### 主色/辅助色

点击色块更换主题的主色/辅助色：

| 序号 | 主色                                                                     | 辅助色                                                                  |
| ---- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 1    | <button data-md-color-primary="red"><code>红色</code></button>           | <button data-md-color-accent="red"><code>红色</code></button>           |
| 2    | <button data-md-color-primary="pink"><code>粉色</code></button>          | <button data-md-color-accent="pink"><code>粉色</code></button>          |
| 3    | <button data-md-color-primary="purple"><code>紫色</code></button>        | <button data-md-color-accent="purple"><code>紫色</code></button>        |
| 4    | <button data-md-color-primary="deep-purple"><code>深紫色</code></button> | <button data-md-color-accent="deep-purple"><code>深紫色</code></button> |
| 5    | <button data-md-color-primary="indigo"><code>靛蓝色</code></button>      | <button data-md-color-accent="indigo"><code>靛蓝色</code></button>      |
| 6    | <button data-md-color-primary="blue"><code>蓝色</code></button>          | <button data-md-color-accent="blue"><code>蓝色</code></button>          |
| 7    | <button data-md-color-primary="light-blue"><code>浅蓝色</code></button>  | <button data-md-color-accent="light-blue"><code>浅蓝色</code></button>  |
| 8    | <button data-md-color-primary="cyan"><code>青色</code></button>          | <button data-md-color-accent="cyan"><code>青色</code></button>          |
| 9    | <button data-md-color-primary="teal"><code>蓝绿色</code></button>        | <button data-md-color-accent="teal"><code>蓝绿色</code></button>        |
| 10   | <button data-md-color-primary="green"><code>绿色</code></button>         | <button data-md-color-accent="green"><code>绿色</code></button>         |
| 11   | <button data-md-color-primary="light-green"><code>浅绿色</code></button> | <button data-md-color-accent="light-green"><code>浅绿色</code></button> |
| 12   | <button data-md-color-primary="lime"><code>酸橙色</code></button>        | <button data-md-color-accent="lime"><code>酸橙色</code></button>        |
| 13   | <button data-md-color-primary="yellow"><code>黄色</code></button>        | <button data-md-color-accent="yellow"><code>黄色</code></button>        |
| 14   | <button data-md-color-primary="amber"><code>琥珀色</code></button>       | <button data-md-color-accent="amber"><code>琥珀色</code></button>       |
| 15   | <button data-md-color-primary="orange"><code>橙色</code></button>        | <button data-md-color-accent="orange"><code>橙色</code></button>        |
| 16   | <button data-md-color-primary="deep-orange"><code>深橙色</code></button> | <button data-md-color-accent="deep-orange"><code>深橙色</code></button> |
| 17   | <button data-md-color-primary="brown"><code>棕色</code></button>         |                                                                         |
| 18   | <button data-md-color-primary="grey"><code>灰色</code></button>          |                                                                         |
| 19   | <button data-md-color-primary="blue-grey"><code>深灰色</code></button>   |                                                                         |
| 20   | <button data-md-color-primary="black"><code>黑色</code></button>         |                                                                         |
| 21   | <button data-md-color-primary="white"><code>白色</code></button>         |                                                                         |

<div class="mdx-switch">

</div>

<script>

  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      document.body.setAttribute("data-md-color-switching", "")
      var attr = this.getAttribute("data-md-color-scheme")
      document.body.setAttribute("data-md-color-scheme", attr)
      var name = document.querySelector("#__code_0 code span.l")
      name.textContent = attr
      setTimeout(function() {
        document.body.removeAttribute("data-md-color-switching")
      })
    })
  })

  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })

  var buttons = document.querySelectorAll("button[data-md-color-accent]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-accent")
      document.body.setAttribute("data-md-color-accent", attr)
      var name = document.querySelector("#__code_2 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>
