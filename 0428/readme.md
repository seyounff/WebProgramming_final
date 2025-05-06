# Event Handling & Conditional Rendering in React

## Event Handling

사용자 인터페이스에서 발생하는 다양한 이벤트(클릭, 입력 변경 등)에 반응하여 특정 동작을 수행하는 함수를 **이벤트 핸들러(Event Handler)**라고 합니다.

* **명명 규칙**: 이벤트 핸들러 함수는 일반적으로 `camelCase` 형식으로 작성합니다 (예: `handleClick`, `handleChange`).
* **입력 값 접근**: 이벤트 객체의 `event.target.value` 속성을 사용하여 입력 필드(`input`, `textarea`)의 현재 값을 쉽게 얻을 수 있습니다.
* **인자 전달**: 이벤트 핸들러에 추가적인 인자를 전달하는 방법은 다음과 같습니다.
    * **화살표 함수**: 이벤트 핸들러를 화살표 함수 내에서 호출하면서 인자를 함께 전달합니다.
      ```javascript
      <button onClick={() => handleClick('추가 인자')}>클릭</button>
      ```
    * **`bind` 메서드**: 클래스 컴포넌트에서 이벤트 핸들러를 바인딩할 때 `bind`를 사용하여 인자를 전달할 수 있습니다.
      ```javascript
      <button onClick={this.handleClick.bind(this, '추가 인자')}>클릭</button>
      ```
* **상태 변경**: 이벤트 핸들러 내부에서는 `useState` 훅을 사용하여 컴포넌트의 상태를 업데이트하고 UI를 리렌더링할 수 있습니다.
* **기본 동작 방지**: 폼 제출(`submit`)이나 링크 이동 등 HTML 요소의 기본 동작을 막아야 할 때는 이벤트 객체의 `event.preventDefault()` 메서드를 호출합니다.
* **최적화**: 불필요한 이벤트 핸들러 함수의 재생성을 막아 성능을 최적화하기 위해 `useCallback` 훅을 사용할 수 있습니다.

### 함수 컴포넌트에서의 이벤트 핸들러 정의

1.  **함수 안에 함수**: 이벤트 핸들러 함수를 컴포넌트 함수 내부에서 정의합니다.
    ```javascript
    function MyComponent() {
      const [isToggleOn, setIsToggleOn] = useState(false);

      function handleClick() {
        setIsToggleOn(prevState => !prevState);
      }

      return (
        <button onClick={handleClick}>{isToggleOn ? '켜짐' : '꺼짐'}</button>
      );
    }
    ```

2.  **화살표 함수 사용**: 이벤트 핸들러를 화살표 함수 형태로 정의하는 것이 일반적입니다.
    ```javascript
    function MyComponent() {
      const [isToggleOn, setIsToggleOn] = useState(false);

      const handleClick = () => {
        setIsToggleOn(prevState => !prevState);
      };

      return (
        <button onClick={handleClick}>{isToggleOn ? '켜짐' : '꺼짐'}</button>
      );
    }
    ```

* **이벤트 풀링**: React는 성능 최적화를 위해 이벤트 풀링(Event Pooling)이라는 메커니즘을 사용합니다. 이벤트 핸들러가 실행된 후 이벤트 객체가 재사용되므로, 비동기 코드 내에서 이벤트 객체의 속성에 접근해야 할 경우에는 `event.persist()`를 호출하여 이벤트 객체를 유지해야 합니다.

## Conditional Rendering

**조건부 렌더링(Conditional Rendering)**은 특정 조건에 따라 사용자 인터페이스(UI)에 다른 콘텐츠를 표시하는 방식입니다. 이는 사용자의 상호작용, 데이터의 상태, 또는 애플리케이션의 다양한 조건에 따라 동적으로 UI를 변경하는 데 매우 중요합니다.

* **Truthy와 Falsy 값**: JavaScript에서 `true`는 아니지만 참으로 간주되는 값(예: `1`, `[]`, `{}`, `"hello"`)을 **Truthy** 값이라고 합니다. 반대로 `false`는 아니지만 거짓으로 간주되는 값(예: `0`, `null`, `undefined`, `""`, `NaN`)을 **Falsy** 값이라고 합니다. 이러한 Truthy 및 Falsy 값은 조건부 렌더링 시 조건문에서 유용하게 활용됩니다.

* **엘리먼트 변수 (Element Variables)**: JSX 코드를 변수에 할당하여 조건에 따라 렌더링할 내용을 결정할 수 있습니다. 이는 복잡한 조건부 렌더링 로직을 깔끔하게 관리하는 데 도움이 됩니다.

    ```javascript
    function Greeting({ isLoggedIn }) {
      let greeting;
      if (isLoggedIn) {
        greeting = <h1>환영합니다!</h1>;
      } else {
        greeting = <p>로그인해주세요.</p>;
      }
      return <div>{greeting}</div>;
    }
    ```
