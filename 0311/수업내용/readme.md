리액트 ?
	SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구
리액트의 장점
	업데이트 : 화면에 나타나는 내용이 바뀜
	빠른 업데이터를 위해 Virtual DOM 사용
컴포넌트 기반 구조
	모든 페이지가 컴포넌트(구성요소)로 구성
	하나의 컴포넌트는 또 다른 여러 개의 컴포넌트 조합으로 구성

npx create-react-app <name>
	리액트 기반 웹 애플리케이션을 생성하는 명령어

JSX란 ?
	JavaScript와 XML/HTML을 합친 것
	const element = <h1>Hello, world!</h1>;
	
JSX의 장점
	1. 코드가 간결해짐
	2. 가독성이 향상됨
	3. Injection Attack 해킹 방법을 방어함

Babel이 하는 일
	TransForm syntax(구문 변환)
		트랜스파일링은 최신의 자바스크립트 문법을 오래된 브라우저가 이해할 수 있도록 변환해 준다.

WebPack
	자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구

npm start (시작)  ->  Ctrl + C (종료)

리액트 폴더 구조
	node_modules
		현재 프로젝트에 포함된 라이브러리들이 설치되어 있는 폴더
	public 	
		index.html 과 같은 정적 파일이 포함되는 곳, 컴파일이 필요 없는 파일들이 위치하는 폴더
		*index.html
			index.js에 대응 HTML 템플릿 파일
			index.js 의 document.getElementById('root') 를 <body> 절의 id = root 호출
	src
		리액트 내부에서 작성하는 거의 모든 파일들이 이 폴더 내부에서 작성 명령어에 따라 JS로 컴파일이 실행
		assets
			이미지 혹은 폰트와 같은 파일들이 저장되는 폴더
		components
			재사용 가능한 컴포넌트들이 위치하는 폴더
		config
			여러 개의 config 파일들이 위치하는 폴더
		constants
			공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더
		hooks (= hoc)
			커스텀 훅이 위치하는 폴더
		pages
			react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치
		*index.js
			메인 프로그램, HTML 템플릿 및 JavaScript의 컴포넌트를 조합하여 렌더링
		*App.js
			컴포넌트를 정의하는 프로그램
			실제로 화면에 표시되는 내용 등은 여기에서 정의
	.gitignore
		깃에 포함하고 싶지 않은 파일의 이름 혹은 폴더 등을 입력하는 파일
	package.json
		프로젝트에 관련된 기본적인 내용(프로젝트의 이름, 버전) 과 라이브러리 목록이 포함
		라이브러리가 설치된 node_modules 대신에  package,json을 깃에 포함하여 올리게 되며 
		후에 누군가가 프로젝트를 클론할 때 이 package.json에 적혀있는 라이브러리의 목록을 기준으로 
		npm에서 설치

app.css -> app.js -> index.js -> index.html 의 구조
			
app.js 에서 export 로 내보내는 구절이 필요함, 단 두번 연속 사용하면 안 됨



Release : 같은 제품을 새롭게 만드는 것 		ex) : 새로운 버전을 배포 , 새로운 아이피 번로 부여
Deploy : 프로그램 등을 서버와 같은 기기에 설치하여 서비스 등을 제공하는 의미
Distribute : 제품을 사용자들이 사용할 수 있도록 서비스 등을 제공하는 의미