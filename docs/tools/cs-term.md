# :computer: 中日韩计算机科学术语对照

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+SC&family=Noto+Sans+TC&family=Noto+Sans+HK&family=Noto+Sans+JP&family=Noto+Sans+KR&display=swap')
/*
span {
  font-weight: 100;
  text-decoration-skip-ink: none;
  text-decoration-skip: none;
} */

span:lang(en) {
  font-family:
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif;
  font-weight: 300;
}

span:lang(zh-hans), span:lang(zh-cn) {
  font-family:
    'Noto Sans CJK SC',
    'Noto Sans SC',
    'Noto Sans CJK',
    'PingFang SC',
    'Hiragino Sans GB',
    'Microsoft YaHei',
    sans-serif;
}

span:lang(zh-hant), span:lang(zh-tw) {
  font-family:
    'Noto Sans CJK TC',
    'Noto Sans TC',
    'Noto Sans CJK',
    'STKaitiTC-Black',
    'PingFang TC',
    'Hiragino Sans CNS',
    'Microsoft JhengHei',
    sans-serif;
}

span:lang(zh-hk) {
  font-family:
    'Noto Sans CJK HK',
    'Noto Sans HK',
    'Noto Sans CJK',
    'PingFang TC',
    'Hiragino Sans CNS',
    'Microsoft JhengHei',
    sans-serif;
}

span:lang(ja) {
  font-family:
    'Noto Sans CJK JP',
    'Noto Sans JP',
    'Noto Sans CJK',
    'Hiragino Sans',
    'Hiragino Kaku Gothic Pro',
    'Yu Gothic',
    'YuGothic',
    'Meiryo',
    sans-serif;
}

span:lang(ko) {
  font-family:
    'Noto Sans CJK KR',
    'Noto Sans KR',
    'Noto Sans CJK',
    sans-serif;
}

</style>

## 说明

来源：`CJK computer science terms comparison`[:fontawesome-solid-paper-plane:](https://cjk-compsci-terms.netlify.app){ .md-button .md-button--primary }

[![dahlia/cjk-compsci-terms](https://img.shields.io/badge/dahlia-cjk_compsci_terms-orange)](https://github.com/dahlia/cjk-compsci-terms)
![license](https://img.shields.io/github/license/dahlia/cjk-compsci-terms)

---

## Basic Terms 基本术语

{{ read_csv("../assets/data/cs-term/basic.csv") }}

## Units 单位

{{ read_csv("../assets/data/cs-term/units.csv") }}

## Fields of Study 研究领域

{{ read_csv("../assets/data/cs-term/studies.csv") }}

## Computer Programming 程序设计

{{ read_csv("../assets/data/cs-term/programming.csv") }}

## Tools 工具

{{ read_csv("../assets/data/cs-term/tools.csv") }}

## Theory of Computation 计算理论

{{ read_csv("../assets/data/cs-term/theory-comp.csv") }}

## Programming Paradigms 编程范式

{{ read_csv("../assets/data/cs-term/paradigms.csv") }}

## Concurrent Programming 并发编程

{{ read_csv("../assets/data/cs-term/concurrency.csv") }}

## F/OSS 自由及开源软件

{{ read_csv("../assets/data/cs-term/foss.csv") }}
