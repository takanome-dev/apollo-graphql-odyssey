import ReactPlayer from "react-player/youtube";
import MarkDown from "./md-content";
import { cn } from "../utils/classname";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import ContentSection from "./content-section";
import ModulesNav from "./modules-navigation";
import { Module, Track } from "../types";

interface Props {
  track?: Track;
  module?: Module;
}

const ModuleDetail = ({ track, module }: Props) => {
  const { width } = useWindowDimensions();

  if (!module) return null;

  const { videoUrl, title, content } = module;

  return (
    <>
      <div className="flex justify-center bg-slate-800 p-5 border-b border-b-pink-500">
        <div
          className={cn(
            "flex self-center w-full max-w-[1600px] max-h-[490px]"
            // width && `h-[((${width}-60)*(2/3))/(16/9)px]`
          )}
        >
          <div className="w-[66%]">
            <ReactPlayer url={videoUrl} width="100%" height="100%" />
          </div>
          <ModulesNav track={track} module={module}></ModulesNav>
        </div>
      </div>
      <ContentSection>
        <h1 className="mt-2 mb-6 pb-4 text-slate-800 text-4xl font-semibold border-b border-b-pink-300">
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
