"use client";

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import { useTheme } from 'next-themes';
import { BsSun, BsMoon, BsBoxArrowInRight } from "react-icons/bs";

const Navbar = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between px-4 md:px-24 text-white">
      <Link href="/PokeApi">
        <h1 className="text-lg md:text-xl">PokeApi</h1>
      </Link>

      <div className="flex gap-x-2 items-center">
        {session?.user && (
          <div className="flex items-center">
            <p className="text-white mr-4">{session.user.name}</p>
            <button
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                });
              }}
              className="bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        )}

        {!session?.user && (
          <button
            onClick={() => signIn()}
            className="bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            <BsBoxArrowInRight />
          </button>
        )}

        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
        >
          {theme === 'light' ? <BsMoon /> : <BsSun />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
