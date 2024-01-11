"use client";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <p>error!!</p>
      <button onClick={() => reset()}>try</button>
    </div>
  );
}
