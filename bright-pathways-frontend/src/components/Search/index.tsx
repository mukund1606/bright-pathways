"use client";

import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Link, Card, CardHeader, CardBody } from "@nextui-org/react";

type SearchElementProps = {
  coordinates: [number, number];
  id: string;
  name: string;
  email: string;
  type: string;
  phone: string;
  address: string;
  description: string;
  documents: string[];
}[];

function SearchElement({ data }: { data: SearchElementProps }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<SearchElementProps>([]);
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="text-center text-2xl font-bold uppercase">Search</h1>
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          const filtered = data.filter((element) => {
            return element.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          setFilteredData(filtered ?? []);
          if (e.target.value === "") {
            setFilteredData([]);
          }
        }}
      />
      <div className="absolute top-24 z-20 flex w-full flex-col gap-4 bg-white">
        {filteredData.map((value, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <h1 className="text-3xl font-bold uppercase">{value.name}</h1>
              </CardHeader>
              <CardBody>
                <p>
                  <span className="font-bold">Email:</span>
                  {value.email}
                </p>
                <p>
                  <span className="font-bold">Type:</span>
                  {value.type}
                </p>
                <p>
                  <span className="font-bold">Phone:</span>
                  {value.phone}
                </p>
                <p>
                  <span className="font-bold">Address:</span>
                  {value.address}
                </p>
                <p>
                  <span className="font-bold">Description:</span>
                  {value.description}
                </p>
                <div>
                  <span className="font-bold">Documents:</span>
                  {
                    <ul>
                      {value.documents.map((value, index) => {
                        return (
                          <Link href={`https://utfs.io/f/${value}`} key={index}>
                            <li>Document {index + 1}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  }
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default SearchElement;
