"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("로딩 중...");
  // const res = await fetch("http://meowfacts.herokuapp.com", {
  //     next: { revalidate: 3 }, // revalidate 로 ISR 로 만들어 준다.
  //     // cache: 'no-store' no-store 라고하면 SSR 로 행동, 아무것도 지정해주지 않으면 캐시는 영원히 캐시가 되기 때문에 SSG 로 행동
  //   });
  //   const data = await res.json();
  //   const factText = data.data[0];

  useEffect(() => {
    fetch("http://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
