import React from "react";
import { ApolloIcon } from "./icons";

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */

const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-pink-500 mt-5 h-52 p-5 bg-white border border-t-pink-400">
      2021 ©{" "}
      <div className="h-10 ml-1">
        <ApolloIcon width="100px" height="40px" />
      </div>
    </footer>
  );
};

export default Footer;

/** Footer styled components */
// const FooterContainer = styled.div({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: colors.pink.base,
//   marginTop: 30,
//   height: 200,
//   padding: 20,
//   backgroundColor: 'white',
//   borderTop: `solid 1px ${colors.pink.light}`,
// });

// const LogoContainer = styled.div({
//   height: 40,
//   marginLeft: 5,
//   svg: {
//     height: 40,
//   },
// });
