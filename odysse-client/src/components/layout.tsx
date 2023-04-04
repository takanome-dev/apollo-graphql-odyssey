import React from "react";
import { cn } from "../utils/classname";
import Footer from "./footer";
import Header from "./header";
// import { widths, unit } from '../styles';

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({
  children,
  fullWidth = false,
  grid = false,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  grid?: boolean;
}) => {
  return (
    <>
      <Header />
      <div
        className={cn(
          "flex flex-wrap self-center grow w-full",
          grid ? "justify-center flex-row" : "justify-top flex-col",
          fullWidth ? "p-0" : "p-4 pb-10 max-w-[1100px]"
        )}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
// const PageContainer = styled.div((props) => ({
//   display: 'flex',
//   justifyContent: props.grid ? 'center' : 'top',
//   flexDirection: props.grid ? 'row' : 'column',
//   flexWrap: 'wrap',
//   alignSelf: 'center',
//   flexGrow: 1,
//   maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
//   width: '100%',
//   padding: props.fullWidth ? 0 : unit * 2,
//   paddingBottom: unit * 5,
// }));
