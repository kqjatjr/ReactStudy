# 리엑트를 공부하는 공간

## state

- useState

## Event Handling

### 이벤트를 사용할 때 주의사항

- 이벤트 이름은 카멜 표기법으로 작성한다.

  - 예를들어 HTMLdml `onclick`은 리액트에서는 `onClick`으로 작성해야 한다. 또한 `onkeyup`은 `onKeyUp`으로 작성해야한다.

- 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.

  - HTML에서 이벤트를 설정할 대는 큰따옴표 안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달한다. 앞서 버튼 예제에서도 화살표 함수 문법으로 함수를 만들어 전달했다.

- DOM요소에만 이벤트를 설정할 수 있다.
  - 즉, `div`, `button`, `input`, `form`, `span`등의 DOM요소에는 이벤트를 설정할 수 있지만, 우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 는 없다.  
    예를들어 `MyComponent`에 `onClick` 값을 설정한다면 `MyComponent`를 클릭할때 `doSomething`함수를 실행하는 것이 아니라, 그냥 이름이 `onClick`인 `props`를 `MyComponent`에게 전달해 줄 뿐이다.
