'use client'

import TextField from "@/component/TextField/TextField";
import { getData } from "@/server/actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState('');
  // Server Actions経由でのデータ取得
  useEffect(() => {
    getData().then((data) => {
      setText(data.data);
    });
  }, []);


  return (
    <>
      <div>{text}</div>
      <TextField onChange={(value) => setText(value)} value={text} />
    </>
  );
}
