# [Bronze II] 커맨드 - 17838 

[문제 링크](https://www.acmicpc.net/problem/17838) 

### 성능 요약

메모리: 9784 KB, 시간: 100 ms

### 분류

구현, 문자열

### 제출 일자

2025년 7월 14일 23:54:30

### 문제 설명

<p>평소 헥사던전이라는 비디오 게임을 좋아하는 윤표는 특히 키를 AABBABB로 입력해 사용하는 콤보기를 좋아한다.</p>

<p>게임기에는 키가 무수히 많아, 만들어 낼 수 있는 커맨드 또한 다양하다. 게임에 통달한 윤표는 심심해져서 AABBABB말고도, BBCCBCC, CCDDCDD와 같이 형식은 같으나 구성 문자가 다른 커맨드를 사용해 보았고, 색다른 기술을 사용할 수 있음을 알게 되었다.</p>

<p>이에 윤표는 <strong>윤표가 좋아하는 커맨드</strong>를 정의하였다.</p>

<ol>
	<li>문자열의 길이는 7이다.</li>
	<li>문자열은 정확히 2가지 종류의 문자로 이루어져 있다.</li>
	<li>AABBABB 형식을 만족한다.</li>
</ol>

<p>이에 신이 난 윤표는 커맨드를 생성하는 매크로를 만들었으나, 코딩 실력이 부족하여 <strong>윤표가 좋아하는 커맨드</strong>만 생성하도록 만들 수는 없었다. 이를 답답하게 지켜본 서윤이는 어떤 커맨드가 <strong>윤표가 좋아하는 커맨드</strong>인지를 확인하는 프로그램을 만드려 한다.</p>

### 입력 

 <p>첫 줄에 테스트 케이스의 개수 T가 주어진다. (1 ≤ T ≤ 100)</p>

<p>이후 T개의 줄에 길이 N이고 알파벳 대문자로만 이루어진 문자열이 입력된다. N은 10,000보다 작거나 같은 자연수이다.</p>

### 출력 

 <p>T개 각각의 테스트 케이스에 대해 윤표가 좋아하는 커맨드이면 <code>1</code>, 그렇지 않으면 <code>0</code>을 한 줄에 하나씩 출력한다.</p>

