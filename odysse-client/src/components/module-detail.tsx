import React from "react";
import ReactPlayer from "react-player/youtube";
import MarkDown from "./md-content";
import { cn } from "../utils/classname";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import ContentSection from "./content-section";
import ModulesNav from "./modules-navigation";

/**
 * Module Detail renders content of a given module:
 * Video player, modules navigation and markdown content
 */
const ModuleDetail = ({ track, module }) => {
  const { videoUrl, title, content } = module;
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="flex justify-center bg-slate-500 p-5 border border-b-pink-500">
        <div
          className={cn(
            "flex self-center w-full max-w-[1600px] max-h-[(1600*(2/3))/(16/9)px]",
            width && `h-[((${width}-60)*(2/3))/(16/9)px]`
          )}
        >
          <div className="w-[66%]">
            <ReactPlayer url={videoUrl} width="100%" height="100%" />
          </div>
          <ModulesNav track={track} module={module}></ModulesNav>
        </div>
      </div>
      <ContentSection>
        <h1 className="mt-2 mb-6 pb-4 text-slate-400 border border-b-pink-300">
          {title}
        </h1>
        <MarkDown content={content} />
      </ContentSection>
    </>
  );
};

export default ModuleDetail;

/** Module Detail styled components */
// const TopSection = styled.div({
//   display: 'flex',
//   justifyContent: 'center',
//   backgroundColor: colors.black.base,
//   padding: 20,
//   borderBottom: `solid 1px ${colors.pink.base}`,
// });

// const TopContainer = styled.div(({ totalWidth }) => ({
//   display: 'flex',
//   flexDirection: 'row',
//   alignSelf: 'center',
//   width: '100%',
//   maxWidth: widths.largePageWidth,
//   // 60 below removes 3 * 20 horizontal paddings (sides and inner between player and list)
//   height: ((totalWidth - 60) * (2 / 3)) / (16 / 9),
//   maxHeight: (widths.largePageWidth * (2 / 3)) / (16 / 9),
// }));

// const PlayerContainer = styled.div({
//   width: '66%',
// });

// const ModuleTitle = styled.h1({
//   marginTop: 10,
//   marginBottom: 30,
//   paddingBottom: 10,
//   color: colors.black.lighter,
//   borderBottom: `solid 1px ${colors.pink.base}`,
// });
