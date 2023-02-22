import { routes } from "@/constants/routes";
import Link from "next/link";
import React, { FC } from "react";

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="bg-gray-700">
      <div className="container">
        <header className="flex items-center justify-between h-20">
          <Link
            href={routes.home}
            className="text-gray-100 font-semibold text-3xl"
          >
            Note App
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Header;
