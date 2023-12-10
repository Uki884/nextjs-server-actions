"use server";

import { redirect } from "next/navigation";

export async function createData(formData: string) {
  console.log("create", formData);
  redirect(`/`);
}

export async function getData() {
  return { data: "Hello World" };
}
