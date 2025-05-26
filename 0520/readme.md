# 🛠️ React 필터 기능 개선: `setCategories` 오류 해결

> `useFilter` 훅에서 카테고리를 전체로 리셋하고 싶을 때 발생하는 오류에 대한 설명과 해결 방법을 정리한 문서입니다.

---

## 🧩 문제 상황

다음과 같은 코드를 작성했을 때 TypeScript 오류가 발생했습니다:

```ts
filter.setCategories(new Set());
```

> ❌ `Property 'setCategories' does not exist on type ... Did you mean 'categories'?`  
> → `setCategories`라는 함수가 존재하지 않는다는 오류

이는 `useFilter` 훅의 반환 객체에 `setCategories`가 정의되어 있지 않기 때문입니다.

---

## ✅ 해결 방법 1: `setCategories` 함수 직접 추가

`useFilter` 훅 정의 파일 (`useFilter.ts`)에서 `categories` 상태를 선언한 부분을 찾아 다음을 추가합니다:

```ts
const [categories, setCategories] = useState<Set<string>>(new Set());
```

그리고 반환 객체에 다음 항목 추가:

```ts
return {
  ...
  categories,
  setCategories, // ✅ 직접 추가
  ...
};
```

이제 컴포넌트에서 `filter.setCategories(new Set())` 사용 가능!

---

## ✅ 해결 방법 2: `setSingleCategory`에 '전체' 처리 추가

이미 정의된 `setSingleCategory` 함수 내부에서 `'전체'` 키워드가 들어왔을 때 `categories`를 초기화하도록 수정합니다:

```ts
function setSingleCategory(category: string) {
  if (category === '전체') {
    setCategories(new Set());
  } else {
    setCategories(new Set([category]));
  }
}
```

그리고 컴포넌트에서는 다음처럼 간단하게 사용할 수 있습니다:

```ts
onValueChange={(value) => filter.setSingleCategory(value)}
```

---

## ✅ 대안: toggleCategory 반복 호출로 초기화

`setCategories`가 없어도 전체 해제를 하려면 아래와 같이 `toggleCategory`를 반복 호출하는 방식도 사용 가능합니다:

```ts
if (value === '전체') {
  for (const cat of filter.categories) {
    filter.toggleCategory(cat);
  }
}
```

하지만 이 방식은 비효율적이며 상태 동기화 이슈가 있을 수 있어 권장되지 않습니다.

---

## 📌 정리

| 항목 | 설명 |
|------|------|
| 문제 | `setCategories`가 없어 '전체' 선택 시 오류 발생 |
| 원인 | `useFilter` 훅에 해당 메서드 미정의 |
| 권장 해결 | `setCategories` 직접 정의하거나, `setSingleCategory` 내에 '전체' 처리 분기 추가 |

---

## 📎 예시 코드 스니펫

```tsx
<Select
  value={filter.categories.size > 0 ? Array.from(filter.categories)[0] : '전체'}
  onValueChange={value => {
    if (value === '전체') {
      filter.setCategories(new Set());
    } else {
      filter.setSingleCategory(value);
    }
  }}
>
```

---
