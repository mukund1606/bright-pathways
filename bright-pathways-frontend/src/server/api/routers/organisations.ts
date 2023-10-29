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
  documents: string[];
  isVerified: boolean;
};

export const organisationsRouter = createTRPCRouter({
  getOldAgeHomes: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "https://bright-pathways-backend.onrender.com/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter(
        (oldAgeHome) =>
          oldAgeHome.type === "OLDAGE_HOME" && oldAgeHome.isVerified,
      )
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
          documents: rest.documents.map((doc) => JSON.parse(doc) as string),
        };
      });
  }),
  getAnimalCare: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "https://bright-pathways-backend.onrender.com/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter(
        (animalCare) =>
          animalCare.type === "ANIMAL_CARE" && animalCare.isVerified,
      )
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
          documents: rest.documents.map((doc) => JSON.parse(doc) as string),
        };
      });
  }),
  getAdoptionCenters: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "https://bright-pathways-backend.onrender.com/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter(
        (adoptionCenters) =>
          adoptionCenters.type === "ADOPTION_CENTER" &&
          adoptionCenters.isVerified,
      )
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
          documents: rest.documents.map((doc) => JSON.parse(doc) as string),
        };
      });
  }),
  getSpecialSchool: publicProcedure.mutation(async () => {
    const res = await axios.post(
      "https://bright-pathways-backend.onrender.com/mongo/organisation/search",
    );
    const data = res.data as Data[];
    return data
      .filter(
        (specialSchools) =>
          specialSchools.type === "SPECIAL_SCHOOLS" &&
          specialSchools.isVerified,
      )
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
          documents: rest.documents.map((doc) => JSON.parse(doc) as string),
        };
      });
  }),
});
