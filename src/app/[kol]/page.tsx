"use client";

import Home from "@/sections/home";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import kols from "../../config/kol";

export default function KolPage() {
  const params = useParams();

  useEffect(() => {
    const kol = params.kol as string;
    if (!kol) return;
    if (!kols[kol]) return;
    fetch("https://api.stg.dumpdump.fun/api/v1/visit", {
      method: "POST",
      body: JSON.stringify({
        kol_code: kols[kol]
      })
    });
  }, [params]);
  return <Home />;
}
