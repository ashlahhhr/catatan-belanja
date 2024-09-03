"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const UangCard = ({ id, nama, harga, createdAt }) => {
  const router = useRouter();
  async function handleDeleteUang() {
    await fetch("https://v1.appbackend.io/v1/rows/IjK3wKlP4v21", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ id }]),
    });

    router.refresh();
  }

  return (
    <div className="card-belanja">
      <div className="flex flex-col">
        <p className="text-sm text-slate-300">
          {new Date(createdAt).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1>{nama}</h1>
        <h1>{harga}</h1>
      </div>
      <button className="btn-danger" onClick={handleDeleteUang}>
        delete
      </button>
    </div>
  );
};
