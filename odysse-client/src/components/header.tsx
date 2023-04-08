import React from "react";
import logo from "../assets/space_cat_logo.png";
import { Link } from "@reach/router";

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center border-b border-b-pink-400 shadow p-4 bg-white">
      <div className="w-[1100px]">
        <div className="flex flex-1">
          <Link to="/" className="no-underline">
            <div className="flex text-pink-400 gap-2 items-center hover:text-pink-700">
              <div className="flex self-center">
                <img src={logo} className="h-[60px] w-[60px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-semibold mb-0">Catstronaut</h3>
                <small className=" pl-2">Kitty space academy</small>
              </div>
            </div>
          </Link>
        </div>
        {children && <div className="flex">{children}</div>}
      </div>
    </div>
  );
};

export default Header;
