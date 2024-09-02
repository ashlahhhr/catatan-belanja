import { UangCard } from "@/components/uang/uang.card";
import { UangCreate } from "@/components/uang/uang.create";

async function getUang() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/IjK3wKlP4v21", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getUang();

  return (
    <div className=" space-y-2">
      <UangCreate />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((uang) => {
          return (
            <UangCard
              key={uang._id}
              id={uang._id}
              nama={uang.nama}
              harga={uang.harga}
              createdAt={uang.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}
