"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const UangCreate = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const router = useRouter();

  async function handleAddUang() {
    await fetch("https://v1.appbackend.io/v1/rows/IjK3wKlP4v21", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ nama, harga }]),
    });

    router.refresh();
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-slate-900">CATATAN BELANJA</h1>
      <textarea
        className="text-slate-800 border rounded-md bg-slate-200 p-1"
        onChange={(e) => setNama(e.target.value)}
        placeholder="nama item"
      ></textarea>
      <input
        className="text-slate-800 border rounded-md bg-slate-200 p-1"
        onChange={(e) => setHarga(e.target.value)}
        placeholder="harga"
      ></input>
      <button
        className="text-white border rounded-lg bg-indigo-900 p-3"
        onClick={handleAddUang}
      >
        tambah
      </button>
    </div>
  );
};
