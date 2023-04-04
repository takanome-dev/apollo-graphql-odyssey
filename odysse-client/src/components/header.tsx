import React from "react";
import logo from "../assets/space_cat_logo.png";
import { Link } from "@tanstack/router";

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center border border-pink-100 shadow p-4 bg-white">
      <div className="w-[1100px]">
        <div className="flex flex-1">
          <Link to="/" className="no-underline">
            <div className="flex text-pink-500 items-center hover:text-pink-700">
              <div className="flex self-center">
                <img src={logo} className="h-16 w-16 mr-8" />
              </div>
              <div className="flex flex-col">
                <h3 className="leading-4 mb-0">Catstronaut</h3>
                <div className="text-[0.9em] leading-[0.8em] pl-2">
                  Kitty space academy
                </div>
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

/** Header styled components */
// const HeaderBar = styled.div({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderBottom: `solid 1px ${colors.pink.light}`,
//   boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
//   padding: '5px 30px',
//   minHeight: 80,
//   backgroundColor: 'white',
// });

// const Container = styled.div({
//   width: `${widths.regularPageWidth}px`,
// });

// const HomeLink = styled(Link)({
//   textDecoration: "none",
// });

// const HomeButtonContainer = styled.div({
//   display: "flex",
//   flex: 1,
// });

// const HomeButton = styled.div({
//   display: "flex",
//   flexDirection: "row",
//   color: colors.accent,
//   alignItems: "center",
//   ":hover": {
//     color: colors.pink.dark,
//   },
// });

// const LogoContainer = styled.div({ display: "flex", alignSelf: "center" });

// const Logo = styled.img({
//   height: 60,
//   width: 60,
//   marginRight: 8,
// });

// const Title = styled.div({
//   display: "flex",
//   flexDirection: "column",
//   h3: {
//     lineHeight: "1em",
//     marginBottom: 0,
//   },
//   div: {
//     fontSize: "0.9em",
//     lineHeight: "0.8em",
//     paddingLeft: 2,
//   },
// });
