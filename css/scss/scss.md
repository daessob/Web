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

$bg-color: red; </br>
$bg-colors: (red, blue, green);

## @mixins 
예를 들어 같은 스타일의 버튼이 있다고 하면 
속성을 저장하고 불러오기
<pre><code>
@mixins 변수명() {
    width: 150px
    height: 30px
    background-color: red;
}

</code></pre>

### 불러오기
<pre><code>
.btn {
    @include 불러오고싶은스타일변수명
}

</code></pre>

### 조건문 활용
<pre><code>
@mixin response-breakpoint($breakpoint) {
	@if $breakpoint == tablet {
		// true, false
		@media (1025px > width) {
			@content;
		}
	} @else if $breakpoint == mobile {
		@media (900px > width) {
			@content;
		}
	}
}


@include response-breakpoint(tablet) {
	background-color: green;
}
@include response-breakpoint(mobile) {
	background-color: blue;
	color: #fff;
}

</code></pre>

## 반복문

<pre><code>
@for $i from 1 through 5 { 
	// 1 ~ 5까지
	&-#{$i} { 
		background-color: nth((), $i);
	}
}

@for $i from 1 through length($bg-colors) {
	//변수의 길이를 가지고 와서 적용가능
}

</code></pre>