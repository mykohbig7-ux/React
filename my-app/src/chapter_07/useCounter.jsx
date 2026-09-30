// my-app/src/chapter_07/useCounter.jsx
//  ---> 숫자 세는 기능만 가능 -> 커스텀 훅(나만의 훅)
//       다른 컴포넌트에서 한 줄로 가져다 사용할 수 있다. (재사용 가능)

// useState : 값을 기억하고, 값만 바뀌면 화면을 다시 렌더링 해주는 훅
// {} : 리엑트가 제공하는 여러 기능 중 필요한 거만 골라서 가져오겠다.
import { useState } from 'react';

function useCounter(initialValue) {
    // const useState(초기값) -> [현재 값, 값을 바꾸는 함수]를 돌려준다.
    // count : 현재 숫자
    // setCount : 숫자를 바꾸는 함수 (호출하면 화면이 다시 그려진다.)
    const [count, setCount] = useState(initialValue);

    // 늘리는 함수 +1
    // () => 식    --> 함수를 짧게 쓰는 방법 (화살표 함수 한 줄 축약형)
    const increaseCount = () => setCount((count) => count + 1);

    // 줄이는 함수 -1
    // 음수가 나오지 않게 하기 위해서 0과 비교 --> Math.max(a, b) : a,b 중 더 큰 값을 나온다.
    const decreaeCount = () => setCount((count) => Math.max(count -1, 0));

    return [count, increaseCount, decreaeCount];
}

// 다른 파일에서  import 할 수 있도록 내보낸다.
export default useCounter;