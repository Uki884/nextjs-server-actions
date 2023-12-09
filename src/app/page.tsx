import { getData } from "@/actions";

export default async function Home() {
  // Server Actions経由でのデータ取得
  const result = await getData();
  console.log("result", result);

  return <div>{result.data}</div>;
}
