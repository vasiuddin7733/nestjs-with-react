import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import { log } from "console";

const IndexPage = () => {
  const numbers: number[] = [...Array(36).keys()].map(i => i + 1)

  const init = 1;
  const value: number = numbers.reduce((acc, num) => {
    const currentVal = acc * num;
    return currentVal; // Return the updated accumulator
  }, init);


  console.log(value);


  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  )
};

export default IndexPage;
