"use client";
import { useParams } from "next/navigation";

export default function Produto() {
  const params = useParams();

  return <h1>produto bola{params.id}</h1>;
}