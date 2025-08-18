import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  description: string;
};

export default function ServiceCard({ description, icon, name }: Props) {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      <Image src={icon} alt={name} width={60} height={60} className="mb-4" />
      <h2 className="text-xl font-semibold text-white">{name}</h2>
      <p className="text-gray-400 mt-2 text-sm">{description}</p>
    </div>
  );
}
