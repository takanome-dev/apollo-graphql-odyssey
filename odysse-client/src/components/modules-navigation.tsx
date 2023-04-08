import React from "react";
import { Link } from "@reach/router";
// import { colors, IconArrowRight, IconDoubleArrowRight } from "../styles";
import { humanReadableTimeFromSeconds } from "../utils/helpers";
import { cn } from "../utils/classname";
import { IconArrowRight, IconDoubleArrowRight } from "./icons";
import { Module, Track } from "../types";

interface Props {
  track?: Track;
  module?: Module;
}

const ModulesNav = ({ module, track }: Props) => {
  if (!track || !module) return null;

  return (
    <div className="relative w-[33%] ml-5 bg-slate-800 rounded-lg border border-slate-700 overflow-auto">
      <div className="flex sticky h-[70px] items-center justify-center text-center bg-slate-800 border-b border-b-pink-500 hover:bg-slate-900">
        <h4 className="text-2xl">
          <Link to="../.." className="no-underline text-[#EBEEF0]">
            {track.title}
          </Link>
        </h4>
      </div>
      <ul className="list-none m-0 p-0 overflow-scroll h-[calc(100%-70px)]">
        {track.modules.map(navModule => (
          <li
            className="border-b border-b-slate-700 last:border-b-0"
            key={`module_${navModule.id}`}
          >
            <div>
              <Link to={`../${navModule.id}`} className="flex items-center">
                <div
                  className={cn(
                    "min-h-[80px] py-2 px-5 flex items-center justify-between flex-1 hover:text-white",
                    navModule.id === module.id
                      ? "bg-slate-900 text-slate-50"
                      : "bg-slate-800 text-slate-50 hover:bg-slate-900"
                  )}
                >
                  {navModule.id === module.id ? (
                    <IconDoubleArrowRight width="14px" />
                  ) : (
                    <IconArrowRight width="14px" weight="thin" />
                  )}
                  <p className="">{navModule.title}</p>
                  <div>{humanReadableTimeFromSeconds(navModule.length)}</div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesNav;

/** Module Navigation styled components */
// const ModulesNavContainer = styled.div({
//   width: '33%',
//   position: 'relative',
//   marginLeft: 20,
//   backgroundColor: colors.black.light,
//   borderRadius: 4,
//   border: `solid 1px ${colors.black.lighter}`,
//   overflow: 'auto',
// });

const trackTitleHeight = 70;

// const ModuleTitle = styled.div({
//   display: 'flex',
//   position: 'sticky',
//   fontSize: '1.6em',
//   fontWeight: '400',
//   height: trackTitleHeight,
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: 'center',
//   backgroundColor: 'colors.pink.base',
//   borderBottom: `solid 1px ${colors.pink.base}`,

//   a: {
//     textDecoration: 'none',
//     color: colors.silver.base,
//   },
//   ':hover': {
//     backgroundColor: colors.black.base,
//   },
// });

// const ModulesList = styled.ul({
//   listStyle: 'none',
//   margin: 0,
//   padding: 0,
//   overflowY: 'scroll',
//   height: `calc(100% - ${trackTitleHeight}px)`,
// });

// const ModuleListItem = styled.li((props) => ({
//   borderBottom: `solid 1px ${colors.grey.darker}`,
//   ':last-child': {
//     borderBottom: 'none',
//   },
// }));

// const ModuleNavStyledLink = styled(Link)({
//   textDecoration: 'none',
//   display: 'flex',
//   alignItems: 'center',
// });

// const ModuleListItemContent = styled.div((props) => ({
//   backgroundColor: props.isActive ? colors.black.base : colors.black.light,
//   color: props.isActive ? colors.silver.lighter : colors.silver.darker,
//   minHeight: 80,
//   padding: '10px 20px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   fontSize: '1.1em',
//   flex: 1,
//   ':hover': {
//     backgroundColor: props.isActive ? colors.black.dark : colors.black.base,
//     color: 'white',
//   },
// }));
