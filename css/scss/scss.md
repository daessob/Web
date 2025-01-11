# 기본 사용법

.nav {}
.nav > ul {}
.nav > ul > li {}

를 scss를 이용하여 표기시

.nav {
    > ul {
        li {
        
        }
    }
}

# 변수

@mixins 
예를 들어 같은 스타일의 버튼이 있다고 하면 
속성을 저장하고 불러오기

@mixins 변수명() {
    width: 150px
    height: 30px
    background-color: red;
}

불러오기

.btn {
    @include 불러오고싶은스타일변수명
}