import Link from "next/link";
import Image from "next/image";
import { getTypeColor } from "@/lib/utils";
import { TypePokemon } from "@/components"; 
import { PokemonCardProps } from "@/lib/types";

const PokemonCard = ({ name, image, types }: PokemonCardProps) => {
  const cardBackgroundColor = getTypeColor(types[0]);

  return (
    <Link
      href={name}
      className={`group relative flex flex-col rounded-lg border border-transparent m-3 p-5 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
      style={{ backgroundColor: cardBackgroundColor }}
      key={name + "Card"}
    >
      <div
        className="relative h-64 mb-3 overflow-hidden rounded-lg border-2 border-black"
        style={{
          backgroundImage: `url('/cardBg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="center"
          objectPosition="center"
          className="border-1 border-black "
        />
      </div>
      <h2 className="text-2xl font-semibold text-center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
      <div className="text-center">
        <TypePokemon type={types} />
      </div>
    </Link>
  );
};


export default PokemonCard;