# React 개념 정리

## 🌟 Element
- UI의 구체적인 구성 요소를 나타내며, **불변 객체**입니다.
- 실제 DOM 요소가 아닌 **가상 DOM(Virtual DOM)** 에 존재하는 객체입니다.

```jsx
const element = React.createElement(
  'h1',                    // type: HTML 태그 (h1)
  { className: 'greeting' }, // props: className 속성
  'Hello, World!'           // children: 자식 내용
);
```

---

## 🏗️ Component
- **Element를 생성하고 관리하는 함수 또는 클래스**입니다.

### 1️⃣ 초기 렌더링
- 리액트 애플리케이션이 처음 실행되면 컴포넌트가 렌더링되고 가상 DOM이 생성됩니다.
- 이 가상 DOM은 메모리 내에서 구성된 후 실제 DOM에 반영됩니다.
- Virtual DOM을 기반으로 브라우저에 렌더링됩니다.

### 2️⃣ 상태 변화
- 컴포넌트의 **state**나 **props**가 변경되면 리액트는 해당 컴포넌트를 다시 렌더링하여 새로운 가상 DOM을 생성합니다.

### 3️⃣ 비교(Diffing)
- 리액트는 이전 가상 DOM과 새로운 가상 DOM을 비교하여 변경된 부분을 찾습니다.
- 이를 **Diffing(디프 알고리즘)** 이라고 하며, 변경된 부분만을 찾아서 실제 DOM에 적용합니다.

### 4️⃣ 업데이트
- 변경된 부분이 확인되면, 리액트는 **최소한의 변경만을 실제 DOM에 적용**하여 성능을 최적화합니다.

---

## 🎭 React Component 역할
- 어떠한 속성을 입력으로 받아 **React Element**를 생성하여 반환합니다.
- 화면에 나타날 요소를 생성합니다.

📌 **예시**
```jsx
<Component image="서울.jpg" color="#de3151" title="서울" />
```

---

## 🔍 Props (Properties)
- **읽기 전용**입니다.
- 모든 React 컴포넌트는 **props를 직접 변경할 수 없으며**, 같은 props에 대해서는 항상 같은 결과를 보여줘야 합니다.

### 🏛️ Pure Function이란?
- **input을 변경하지 않으며**, 같은 input에 대해 항상 같은 output을 리턴하는 함수입니다.

### 🔹 사용법
- 키-값 쌍의 형태로 전달됩니다.
- 문자열 외에도 **정수, 변수, 컴포넌트 등**을 전달할 때 **중괄호 `{}`** 를 사용합니다.

```jsx
function Greeting(props) {
  return <h1>안녕, {props.name}!</h1>;
}
```

---

## 📌 컴포넌트의 종류

### 1️⃣ 함수 컴포넌트 (간단하고 직관적)
```jsx
function Name(props) {
  return <h1>안녕, {props.name}</h1>;
}
```

### 2️⃣ 클래스 컴포넌트 (과거에 사용, 현재는 거의 안 씀)
```jsx
class Name extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```

---

## 🛠️ 컴포넌트 구조화 기법

### 📌 컴포넌트 합성
- 여러 개의 **컴포넌트를 합쳐서 하나의 컴포넌트**를 만드는 것

### 📌 컴포넌트 추출
- 큰 컴포넌트에서 일부를 추출하여 **새로운 컴포넌트로 만드는 것**
- 기능 단위로 구분하는 것이 좋음

---

