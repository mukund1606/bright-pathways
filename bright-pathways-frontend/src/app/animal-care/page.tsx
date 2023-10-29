import dynamic from "next/dynamic";
const MapElement = dynamic(() => import("@/components/Map"), { ssr: false });
import SearchElement from "@/components/Search";
import { api } from "@/trpc/server";

async function AnimalCarePage() {
  const data = await api.organisations.getAnimalCare.mutate();
  return (
    <div className="flex flex-col gap-8 px-8 pt-24">
      <h1 className="text-center text-4xl font-bold">Animal Care</h1>
      <SearchElement data={data} />
      <MapElement
        markers={data.map((home) => {
          return {
            name: home.name,
            markerCoords: home.coordinates,
            description: home.name,
            address: home.address,
            email: home.email,
            phone: home.phone,
            type: home.type,
          };
        })}
      />
    </div>
  );
}

export default AnimalCarePage;
