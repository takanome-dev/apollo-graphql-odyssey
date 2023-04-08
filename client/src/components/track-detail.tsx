import React from "react";
import { humanReadableTimeFromSeconds } from "../utils/helpers";
import { Link } from "@reach/router";
import ContentSection from "./content-section";
import MarkDown from "./md-content";
import { Button, IconBook, IconRun, IconTime, IconView } from "./icons";
import { Track } from "../types";

const TrackDetail = ({ track }: { track?: Track }) => {
  if (!track) return null;

  const {
    title,
    description,
    thumbnail,
    author,
    length,
    modulesCount,
    modules,
    numberOfViews,
  } = track;

  return (
    <ContentSection>
      <img
        src={thumbnail}
        alt=""
        className="object-cover max-h-[400px] rounded-md mb-8"
      />
      <div className="flex flex-col items-center p-5 rounded-md mb-8 border  bg-[#FCFDFF]">
        <div className="flex justify-between items-center w-full pb-5 mb-5 border-b">
          <h1 className="w-full text-center mb-1 text-4xl text-slate-800 font-bold">
            {title}
          </h1>
        </div>
        <div className="flex justify-between items-center w-full pb-5 mb-5 border-b">
          <div className="flex flex-col items-center justify-between text-slate-900 self-center">
            <h4 className="mb-1 text-base font-semibold text-slate-800">
              Track details
            </h4>
            <div className="flex items-center max-h-6 w-full">
              <IconView width="16px" className="max-h-4 text-slate-500" />
              <div id="viewCount" className="ml-2 text-pink-500">
                {numberOfViews} view(s)
              </div>
            </div>
            <div className="flex items-center max-h-6 w-full">
              <IconBook
                width="14px"
                height="14px"
                className="max-h-4 text-slate-500"
              />
              <div className="ml-2 text-slate-600">{modulesCount} modules</div>
            </div>
            <div className="flex items-center max-h-6 w-full">
              <IconTime width="14px" className="max-h-4 text-slate-500" />
              <div className="ml-2 text-slate-600">
                {humanReadableTimeFromSeconds(length)}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between text-slate-900 self-center">
            <h4 className="mb-1 text-base font-semibold text-slate-800">
              Author
            </h4>
            <img
              src={author.photo}
              className="w-8 h-8 mb-2 rounded-full object-cover"
            />
            <small className="text-slate-600">{author.name}</small>
          </div>
          <div>
            <Link to={`./module/${modules[0]["id"]}`} className="text-white">
              <Button
                icon={<IconRun width="20px" />}
                color="#f25cc1"
                // className="text-pink-500"
                size="large"
              >
                Start Track
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center justify-between text-slate-900 self-center">
            <h4 className="mb-1 text-base font-semibold text-slate-800">
              Modules
            </h4>
            <ul className="list-none p-0 m-0 mt-1">
              {modules.map(module => (
                <li
                  key={module.title}
                  className="flex justify-between pb-[2px] text-[1em]"
                >
                  <div>{module.title}</div>
                  <div className="ml-8 text-slate-500">
                    {humanReadableTimeFromSeconds(module.length)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MarkDown content={description} />
    </ContentSection>
  );
};

export default TrackDetail;

/** Track detail styled components */
// const CoverImage = styled.img({
//   objectFit: 'cover',
//   maxHeight: 400,
//   borderRadius: 4,
//   marginBottom: 30,
// });

// const StyledLink = styled(Link)({
//   textDecoration: 'none',
//   color: 'white',
// });

// const TrackDetails = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: 20,
//   borderRadius: 4,
//   marginBottom: 30,
//   border: `solid 1px ${colors.silver.dark}`,
//   backgroundColor: colors.silver.lighter,
//   h1: {
//     width: '100%',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   h4: {
//     fontSize: '1.2em',
//     marginBottom: 5,
//     color: colors.text,
//   },
// });

// const DetailRow = styled.div({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   width: '100%',
//   paddingBottom: 20,
//   marginBottom: 20,
//   borderBottom: `solid 1px ${colors.silver.dark}`,
// });

// const DetailItem = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   color: colors.textSecondary,
//   alignSelf: 'center',
// });

// const AuthorImage = styled.img({
//   height: 30,
//   width: 30,
//   marginBottom: 8,
//   borderRadius: '50%',
//   objectFit: 'cover',
// });

// const AuthorName = styled.div({
//   lineHeight: '1em',
//   fontSize: '1em',
// });

// const IconAndLabel = styled.div({
//   display: 'flex',
//   flex: 'row',
//   alignItems: 'center',
//   maxHeight: 20,
//   width: '100%',
//   div: {
//     marginLeft: 8,
//   },
//   svg: {
//     maxHeight: 16,
//   },
//   '#viewCount': {
//     color: colors.pink.base,
//   },
// });

// const ModuleListContainer = styled.div({
//   width: '100%',
//   ul: {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     marginTop: 5,
//     li: {
//       fontSize: '1em',
//       display: 'flex',
//       justifyContent: 'space-between',
//       paddingBottom: 2,
//     },
//   },
// });

// const ModuleLength = styled.div({
//   marginLeft: 30,
//   color: colors.grey.light,
// });
