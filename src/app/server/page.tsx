import { getData } from "@/server/actions";

export default async function Server() {
  const text = (await getData()).data

  return (
    <>
      <div>{text}</div>
    </>
  );
}
