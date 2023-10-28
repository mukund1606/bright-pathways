import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import axios from "axios";

type Data = {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  phone: string;
  address: string;
  coordinates: string;
  description: string;
};

export const organisationsRouter = createTRPCRouter({
  getOldAgeHomes: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "http://localhost:5000/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter((oldAgeHome) => oldAgeHome.type === "OLDAGE_HOME")
      .map((oldAgeHome) => {
        const { coordinates, ...rest } = oldAgeHome;
        return {
          coordinates: JSON.parse(coordinates) as [number, number],
          id: rest.id,
          name: rest.name,
          email: rest.email,
          type: "Old Age Home",
          phone: rest.phone,
          address: rest.address,
          description: rest.description,
        };
      });
  }),
  getAnimalCare: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "http://localhost:5000/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter((oldAgeHome) => oldAgeHome.type === "ANIMAL_CARE")
      .map((animalCare) => {
        const { coordinates, ...rest } = animalCare;
        return {
          coordinates: JSON.parse(coordinates) as [number, number],
          id: rest.id,
          name: rest.name,
          email: rest.email,
          type: "Animal Care",
          phone: rest.phone,
          address: rest.address,
          description: rest.description,
        };
      });
  }),
  getAdoptionCenters: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "http://localhost:5000/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter((oldAgeHome) => oldAgeHome.type === "ADOPTION_CENTER")
      .map((adoptionCenters) => {
        const { coordinates, ...rest } = adoptionCenters;
        return {
          coordinates: JSON.parse(coordinates) as [number, number],
          id: rest.id,
          name: rest.name,
          email: rest.email,
          type: "Adoption Center",
          phone: rest.phone,
          address: rest.address,
          description: rest.description,
        };
      });
  }),
  getSpecialSchool: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "http://localhost:5000/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter((oldAgeHome) => oldAgeHome.type === "SPECIAL_SCHOOLS")
      .map((specialSchools) => {
        const { coordinates, ...rest } = specialSchools;
        return {
          coordinates: JSON.parse(coordinates) as [number, number],
          id: rest.id,
          name: rest.name,
          email: rest.email,
          type: "Special School",
          phone: rest.phone,
          address: rest.address,
          description: rest.description,
        };
      });
  }),
});
