"use client"; // 에러 컴포넌트는 반드시 클라이언트 컴포넌트여야 합니다

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    // 에러 리포트 서비스에 에러를 기록합니다
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // 세그먼트를 리렌더링하여 에러로부터 리커버링을 시도합니다
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
