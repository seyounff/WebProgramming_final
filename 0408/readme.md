# 📘 React 기초 정리
.
---

## 📌 훅(Hook)이란?

> 리액트의 **state와 생명주기 기능**에 갈고리를 걸어, 원하는 시점에 특정 함수가 실행되도록 만든 기능입니다.  
> 모든 Hook은 `use`로 시작합니다.  
> 예) `useState`, `useEffect`, `useRef` 등

---

## 🧭 SPA vs MPA

| 구분                              | 설명                                                            |
| --------------------------------- | --------------------------------------------------------------- |
| **SPA (Single Page Application)** | 페이지 전환 없이 한 페이지에서 필요한 데이터만 교체하여 렌더링  |
| **MPA (Multi Page Application)**  | 페이지 이동마다 새로운 HTML을 요청하고 렌더링하는 전통적인 방식 |

---

## ⚙️ useState()

React 함수형 컴포넌트에서 **상태(state)를 관리**할 수 있도록 해주는 Hook  
클래스형 컴포넌트의 `this.state`와 `this.setState`를 대체합니다.  
상태를 업데이트하는 함수를 제공하며, 렌더링 될 때마다 상태가 유지됩니다.

```js
const [state, setState] = useState(initialValue);
```

| 항목           | 설명                 |
| -------------- | -------------------- |
| `state`        | 현재 상태 값         |
| `setState`     | 상태를 변경하는 함수 |
| `initialValue` | 초기 상태 값         |

---

## 🧠 상태(State)란?

렌더링 결과물에 영향을 주는 정보입니다.  
변수는 값이 바뀌어도 화면이 자동으로 바뀌지 않지만,  
**state는 값이 바뀌면 자동으로 화면이 갱신됩니다.**

> 상태 값이 바뀌면 관련 컴포넌트가 자동으로 **리렌더링** 됩니다.

---

## 👪 컴포넌트 리렌더링

- 부모 컴포넌트가 리렌더링되면 **자식 컴포넌트도 함께 리렌더링**됩니다.

---

## ⚡ setState는 비동기적으로 작동합니다

- 다음 작업을 멈추지 않고 계속 진행됨
- 실행 순서가 보장되지 않음
- Non-blocking 방식
- **Batch Update**: 여러 상태 변경을 모아서 **한 번만 리렌더링**

---

## 🏛️ 클래스형 컴포넌트에서의 상태 변경

```js
this.setState({ count: count + 1 });

this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));
```

---

## 🧼 JSX에서의 이벤트 처리

- 이벤트 속성은 **camelCase**로 작성해야 합니다.
- **함수로 전달**해야 합니다.

❌ 잘못된 예:

```jsx
onClick = "changeName()";
```

✅ 올바른 예:

```jsx
onClick = { changeName };
```

---

📝 **Tip:** 이 문서는 React 입문자를 위한 기초 정리입니다. 실습을 통해 직접 사용해보며 익히는 것이 가장 좋습니다!
