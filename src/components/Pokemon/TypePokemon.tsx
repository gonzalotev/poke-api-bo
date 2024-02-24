import React from "react";
import Image from "next/image";
import { getTypeColor, getTypeLogo } from "@/lib/utils";
import { TypeBadgeProps } from "@/lib/types";

const TypePokemon: React.FC<TypeBadgeProps> = ({ type }) => (
  <div className="flex items-center justify-center">
    {Array.isArray(type) ? (
      type.map((t, index) => (
        <div key={t} className="flex items-center mx-1">
          <div className="w-6 h-6 mr-2">
            <Image 
            src={`/${getTypeLogo(t)}`} 
            alt={t} 
            className="w-6 h-6 mr-2"
            width={8}
            height={8}
            />
          </div>
          <span
            className={`text-white`}
            style={{
              backgroundColor: getTypeColor(t),
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </span>
        </div>
      ))
    ) : (
      <div className="flex items-center">
        <div className="w-6 h-6 mr-2">
          <Image src={`/${getTypeLogo(type)}`} alt={type} width={6} height={6} />
        </div>
        <span
          className={`text-white`}
          style={{
            backgroundColor: getTypeColor(type),
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
    )}
  </div>
);

export default TypePokemon;
