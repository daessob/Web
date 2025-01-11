# SCSS

## 기본 사용법
<pre><code>
.nav {}
.nav > ul {}
.nav > ul > li {}

</code></pre>

를 scss를 이용하여 표기시
<pre><code>
.nav {
    > ul {
        li {
        
        }
    }
}

</code></pre>

## 변수

@mixins 
예를 들어 같은 스타일의 버튼이 있다고 하면 
속성을 저장하고 불러오기
<pre><code>
@mixins 변수명() {
    width: 150px
    height: 30px
    background-color: red;
}

</code></pre>

불러오기
<pre><code>
.btn {
    @include 불러오고싶은스타일변수명
}

</code></pre>