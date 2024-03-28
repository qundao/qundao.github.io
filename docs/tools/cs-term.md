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

[![GitHub Repo stars](https://img.shields.io/github/stars/dahlia/cjk-compsci-terms?style=flat&label=dahlia%2Fcjk-compsci-terms&color=orange)](https://github.com/dahlia/cjk-compsci-terms)
![license](https://img.shields.io/github/license/dahlia/cjk-compsci-terms)

### 简介

=== "English"

    **Cognates**

    Cognates are words that are derived from one side or share a common
    etymology.

    For example, the English word <span>computer</span> and the Korean word
    <span lang="ko">컴퓨터</span> (keompyuteo), the Japanese word
    <span lang="ja">計算科学</span> (keisan kagaku) and the Chinese word
    <span lang="zh">計算科學</span> (jìsuàn kēxué), that
    are both meaning computational science, are cognates.

    Cognates are indicated by the same colored border.

    <span lang="fr">Calque</span> (**loan translation**)

    Calque is a word or phrase borrowed from another language by literal
    word-for-word or root-for-root translation.

    For example, the Chinese word <span lang="zh">軟件</span> (ruǎnjiàn) is a translation
    of the English word <span>software</span>, which translates the English words
    <span>soft</span> → <span lang="zh">軟</span> (ruǎn; *soft* or *flexible*) and <span>ware</span> →
    <span lang="zh">件</span> (jiàn; *clothes* or *item*) respectively.

    Matching words/roots between languages in this way are underlined
    with the same color & shape.

    **Homophonic translations**

    For a root transcribed from a foreign word,
    the original word is displayed on the root.

    For example, as the Japanese word <span lang="ja">コンピュータ</span> (konpyu-ta)
    is a transcription of English word <span>computer</span>, it is displayed like:
    <span lang="ja"><ruby>コンピュータ<rt lang="en">computer</rt></ruby></span>.

    **Romanized pronunciation**

    The pronunciation of each word is shown in Latin letters in parentheses
    below the word.  The transcription system for each language is as follows:

    - Mandarin (China & Taiwan): `Hanyu Pinyin`
    - Cantonese (Hong Kong): `Jyutping` (Linguistic Society of Hong Kong Cantonese Romanization Scheme)
    - Japanese: `Hepburn romanization`
    - Korean: `Revised Romanization of Korean` `RR` (academic transcription for
        recovering morphophonemic elements)

=== "简体中文"

    **同源词** <span lang="en">(cognate)</span>

    同源词指拥有同一个词源的词汇。

    例如：英语的<span lang="en">computer</span>(电脑)和日语的
    <span lang="ja">コンピュータ</span>(电脑)，汉语的<span>科学</span>和韩语的
    <span lang="ko"><ruby>과<rt>gwa</rt>학<rt>hag</rt></ruby></span>(科学)
    互为同源词。

    同源词以相同颜色的边框标示。

    **仿译** <span lang="fr">(calque)</span>

    仿译，指将原文以词素为单位分段翻译的方式。

    例如：汉语单词<span>软件</span>是英语单词<span lang="en">software</span>的翻译，
    分别翻译了英语词素<span lang="en">soft</span>→<span>软</span>和
    <span lang="en">ware</span>→<span>件</span>。

    不同语言译文当中相对应的语素以相同颜色的底线标示。

    **音译**

    在词素为外语音译的情况，在该词素上方加注原文。

    例如：由于日语单词<span lang="ja">コンピュータ</span>(konpyu-ta)是英语单词
    <span lang="en">computer</span>的音译，因此显示为<span lang="ja">
    <ruby>コンピュータ<rt lang="en">computer</rt></ruby></span>。

    **拉丁字母方案**

    每个单词下方的括号中以拉丁字母（罗马字母）显示发音。 每种语言的转写方案如下：

    - 标准汉语（亦称“普通话”、“国语”，中国大陆和中国台湾）: `汉语拼音`
    - 粤语（中国香港）: `香港语言学学会粤语拼音方案`（简称粤拼）
    - 日语: `平文式罗马字`
    - 韩语: `文化观光部2000年式`（“国语罗马字表记法”，用于复形态音素的学术符号）

=== "繁體中文"

    **同源詞** <span lang="en">(cognate)</span>

    同源詞指擁有同一個詞源的詞彙。

    例如：英語的<span lang="en">computer</span>(電腦)和日語的
    <span lang="ja">コンピュータ</span>(電腦)，漢語的<span>科學</span>和韓語的
    <span lang="ko"><ruby>과<rt>gwa</rt>학<rt>hag</rt></ruby></span>(科學)
    互為同源詞。

    同源詞以相同顏色的邊框標示。

    **仿譯** <span lang="fr">(calque)</span>

    仿譯，指將原文以詞素為單位分段翻譯的方式。

    例如：漢語單詞<span>軟件</span>是英語單詞<span lang="en">software</span>的翻譯，
    分別翻譯了英語詞素<span lang="en">soft</span>→<span>軟</span>和
    <span lang="en">ware</span>→<span>件</span>。

    不同語言譯文當中相對應的語素以相同顏色的底線標示。

    **音譯**

    在詞素為外語音譯的情況，在該詞素上方加註原文。

    例如：由於日語單詞<span lang="ja">コンピュータ</span>(konpyu-ta)是英語單詞
    <span lang="en">computer</span>的音譯，因此顯示為<span lang="ja">
    <ruby>コンピュータ<rt lang="en">computer</rt></ruby></span>。

    **羅馬字方案**

    每個單詞下方的括號中以羅馬字顯示發音。 每種語言的轉寫方案如下：

    - 標準漢語（中國和台灣）: `漢語拼音`
    - 廣東話（香港）: `香港語言學學會粵語拼音方案` `粵拼`
    - 日語: `平文式羅馬字`
    - 韓語: `文化觀光部2000年式`（用於復形態音素的學術符號）

=== "Japanese (日本語)"

    **同根語** <span lang="en">(cognate)</span>

    同根語とは、共通の起源を持つ単語を意味します。

    例えば、英語<span lang="en">computer</span>と日本語<span>コンピュータ</span>、
    日本語<span>情報</span>と韓国語<span lang="ko"><ruby>정<rt>チョン</rt>보<rt>ボ</rt>
    </ruby></span><span lang="ko">(情報)</span>は同根語です。

    同根語は、同じ色の枠で表示されます。

    **翻訳借用** <span lang="fr">(calque)</span>

    翻訳借用とは、或る言語が他の言語から語を借用する時、
    借用元の語の意味をなぞり、翻訳して取り入れる事を指します。

    例えば、英語の<span lang="en">artificial intelligence</span>
    の訳語<span>人工知能</span>は、英語の語根の<span lang="en">artificial</span>→<span>人工</span>
    と<span lang="en">intelligence</span>→<span>知能</span>をそれぞれ翻訳して借用しました。

    この様に、言語間で対応する語根は、同じ色と形の下線で表示されます。

    **漢字**

    語根が漢字である場合は、日本語読みの振り仮名を付きます。

    例えば、中国語の単語の<span lang="zh-CN"><ruby>问<rt>ウェン</rt>
    题<rt>ティー</rt></ruby></span>は、日本語の単語の<span>問題</span>と
    同根語であることを分かりやすくする為、中国語読みの<span>ウェンティー</span>
    ではなく日本語読みの<span>もんだい</span>の振り仮名を付きます: <span lang="zh-CN">
    <ruby>问<rt lang="ja">もん</rt>题<rt lang="ja">だい</rt></ruby></span>。

    **音訳**

    語根が外国語を音訳した場合、原文のルビを付きます。

    例えば、中国語の<span lang="zh">圖靈</span>は、英国の数学者であるアラン・
    チューリング(<span lang="en">Alan Turing</span>)の音訳ですが、
    日本語読みをせず原文の<span lang="en">Turing</span>のルビを付きます: <span lang="zh">
    <ruby>圖靈<rt lang="en">Turing</rt></ruby></span>.

    **原音のローマ字表記**

    単語の原音は、単語の下の括弧内にローマ字で表記されます。
    言語別転写規則は、次のとおりです。

    - 日本語: `ヘボン式ローマ字`
    - 標準中国語 (中国と台湾): `漢語拼音`
    - 広東語 (香港): `香港語言学学会粤語拼音方案` `粤拼`
    - 韓国語:   `文化観光部2000年式` (形態音素の復原を前提とした学術表記)

=== "Korean (한국어)"

    **동계어** <span lang="en">(cognate)</span>

    동계어는 한 쪽이 다른 한 쪽에서 파생했거나 공통된 어원을 공유하는 단어들을
    뜻합니다.

    예를 들어, 영어 <span lang="en">computer</span>와 한국어 <span>컴퓨터</span>, 일본어 <q
    lang="ja">情報</span>(조우호우)와 한국어 <span>정보</span>(情報)는 동계어입니다.

    동계어는 같은 색의 테두리로 표시됩니다.

    **번역차용** <span lang="fr">(calque)</span>

    번역차용이란 원어를 어근 단위로 번역하여 단어를 차용하는 방식입니다.

    예를 들어, 영어 <span lang="en">artificial intelligence</span>의 한국어 번역어
    <span lang="ko">인공 지능</span>은 영어의 어근 <span lang="en">artificial</span> →
    <span lang="ko">인공</span>과 <span lang="en">intelligence</span> →
    <span lang="ko">지능</span>을 각각 번역하여 차용했습니다.

    이와 같이 여러 언어 사이에서 대응되는 어근은 같은 색과 모양의 밑줄로
    표시됩니다.

    **한자어**

    어근이 한자어일 경우, 한국식 한자 독음을 글자 위에 표시합니다.

    예를 들어, 일본어 <span lang="ja">情報</span>(조우호우)는 한국어
    <span>정보</span>(情報)와 동계어임을 알아보기 쉽도록, 글자 위에는 일본어 독음인
    <span>조우호우</span>가 아닌 한국 한자음 <span>정보</span>를 표시합니다: <q
    lang="ja"><ruby>情<rt lang="ko">정</rt>報<rt lang="ko">보</rt></ruby></span>.

    **음차**

    어근이 외국어의 음차일 경우, 원문 표기를 어근 위에 표시합니다.

    예를 들어, 중국어 <span lang="zh">圖靈</span>(투링)은 영국 수학자 앨런
    튜링(<span lang="en">Alan Turing</span>)의 음차이므로,
    글자 위에는 한국 한자음 <span>도령</span>이 아니라 원어 <span lang="en">Turing</span>을
    표시합니다: <span lang="zh"><ruby>圖靈<rt lang="en">Turing</rt></ruby></span>.

    **현지음 로마자 표기**

    단어의 현지음은 단어 아래 괄호 안에 로마자로 표기됩니다.
    언어별 전사 방식은 다음과 같습니다.

    - 한국어: `국립국어원 로마자 표기법` (한글 복원을 전제로 한 학술 표기)
    - 일본어:   `헵번식 로마자 표기법`
    - 표준 중국어 (중국·대만):   `한어 병음`
    - 광동어 (홍콩):   `월병`

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
