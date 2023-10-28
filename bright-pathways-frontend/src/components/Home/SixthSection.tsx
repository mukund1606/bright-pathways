"use client";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function SixthSection() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-16 border px-10 py-20">
      <h2 className="text-4xl font-bold">Testimonials</h2>
      <motion.div
        className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Card className="py-4">
          <CardHeader className="items-center justify-between px-4">
            <p className="font-bold uppercase">John Doe</p>
            <Avatar></Avatar>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            &ldquo;At this School, our mission is to balance a rigorous
            comprehensive college preparatory curriculum with healthy social and
            emotional development.&rdquo;
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="items-center justify-between px-4">
            <p className="font-bold uppercase">John Doe</p>
            <Avatar></Avatar>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            &ldquo;At this School, our mission is to balance a rigorous
            comprehensive college preparatory curriculum with healthy social and
            emotional development.&rdquo;
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="items-center justify-between px-4">
            <p className="font-bold uppercase">John Doe</p>
            <Avatar></Avatar>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            &ldquo;At this School, our mission is to balance a rigorous
            comprehensive college preparatory curriculum with healthy social and
            emotional development.&rdquo;
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
