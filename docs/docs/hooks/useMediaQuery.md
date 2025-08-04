# useMediaQuery

`useMediaQuery`는 브라우저의 CSS 미디어 쿼리 조건 일치 여부를 확인하고, 해당 조건이 변경될 때 자동으로 상태를 업데이트하는 커스텀 React Hook입니다.  
반응형 UI를 구현하거나 특정 화면 크기 조건에서만 동작해야 하는 로직을 처리할 때 유용합니다.

이 훅은 `(max-width: {number}px)` 또는 `(min-width: {number}px)` 형식의 쿼리만 허용하며, 잘못된 형식의 쿼리가 전달되면 **개발 모드에서 경고 메시지**를 출력합니다.

## 🔗 사용법

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
const [isSmall, isMedium] = useMediaQuery(['(max-width: 640px)', '(max-width: 1024px)']);
```

### 매개변수

- query: 확인할 미디어 쿼리 문자열 또는 문자열 배열
  - 형식: `(max-width: {number}px)` 또는 `(min-width: {number}px)`

  - 문자열 배열을 전달하면 각 쿼리에 대한 결과가 배열로 반환됩니다.

### 반환값

- boolean: 단일 쿼리를 전달한 경우 조건 일치 여부를 반환합니다.

- boolean[]: 쿼리 배열을 전달한 경우 각 조건의 일치 여부를 배열로 반환합니다.

### 추가 기능

- 쿼리 형식 제한
  - TypeScript WidthQuery 타입을 활용하여 `(max-width: {number}px)` 또는 `(min-width: {number}px)` 형식만 허용합니다.

- 런타임 유효성 검사
  - 잘못된 형식의 쿼리가 전달되면 개발 모드에서 경고 메시지를 출력합니다.

- SSR 안전성
  - 서버사이드 렌더링 환경에서도 안전하게 동작하도록 초기 상태를 처리합니다.

## ✅ 예시

### 단일 쿼리 사용

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');

return <div>{isMobile ? '모바일 화면' : '데스크톱 화면'}</div>;
```

### 배열 쿼리 사용

```tsx
const [isSmall, isMedium] = useMediaQuery(['(max-width: 640px)', '(max-width: 1024px)']);

console.log('Small 화면 여부:', isSmall);
console.log('Medium 화면 여부:', isMedium);
```
