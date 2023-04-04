import React from "react";
import { Link } from "@tanstack/router";
import { humanReadableTimeFromSeconds } from "../utils/helpers";

/**
 * Track Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
const TrackCard = ({ track }) => {
  const { title, thumbnail, author, length, modulesCount, id } = track;

  return (
    <Link
      to={`track/${id}`}
      className="rounded-lg text-slate-700 bg-cover bg-white shadow bg-center flex flex-col justify-between h-96 m-2 overflow-hidden relative hover:text-pink-700 cursor-pointer"
    >
      <div className="flex flex-col justify-around h-full">
        <div className='h-56 relative after:content-[""] after:absolute after:inset-0 after:bg-[rgba(250,0,150,0.20)]'>
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full grayscale"
          />
        </div>
        <div className="p-4 flex-1 flex text-slate-800 flex-col justify-around">
          <h3 className="text-center text-xl font-bold text-slate-700 flex-1">
            {title || ""}
          </h3>
          <div className="flex">
            <img
              src={author.photo}
              className="h-8 w-8 mr-4 rounded-full object-cover"
            />
            <div className="flex flex-col justify-between">
              <div className="text-lg">{author.name}</div>
              <div className="">
                {modulesCount} modules - {humanReadableTimeFromSeconds(length)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrackCard;

/** Track Card styled components */
// const CardContainer = styled(Link)({
//   borderRadius: 6,
//   color: colors.text,
//   backgroundSize: 'cover',
//   backgroundColor: 'white',
//   boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
//   backgroundPosition: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   [mq[0]]: {
//     width: '90%',
//   },
//   [mq[1]]: {
//     width: '47%',
//   },
//   [mq[2]]: {
//     width: '31%',
//   },
//   height: 380,
//   margin: 10,
//   overflow: 'hidden',
//   position: 'relative',
//   ':hover': {
//     backgroundColor: colors.pink.lightest,
//   },
//   cursor: 'pointer',
// });

// const CardContent = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-around',
//   height: '100%',
// });

// const CardTitle = styled.h3({
//   textAlign: 'center',
//   fontSize: '1.4em',
//   lineHeight: '1em',
//   fontWeight: 700,
//   color: colors.text,
//   flex: 1,
// });

// const CardImageContainer = styled.div({
//   height: 220,
//   position: 'relative',
//   '::after': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     background: 'rgba(250,0,150,0.20)',
//   },
// });

// const CardImage = styled.img({
//   objectFit: 'cover',
//   width: '100%',
//   height: '100%',
//   filter: 'grayscale(60%)',
// });

// const CardBody = styled.div({
//   padding: 18,
//   flex: 1,
//   display: 'flex',
//   color: colors.textSecondary,
//   flexDirection: 'column',
//   justifyContent: 'space-around',
// });

// const CardFooter = styled.div({
//   display: 'flex',
//   flexDirection: 'Row',
// });

// const AuthorImage = styled.img({
//   height: 30,
//   width: 30,
//   marginRight: 8,
//   borderRadius: '50%',
//   objectFit: 'cover',
// });

// const AuthorAndTrack = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// });

// const AuthorName = styled.div({
//   lineHeight: '1em',
//   fontSize: '1.1em',
// });

// const TrackLength = styled.div({
//   fontSize: '0.8em',
// });
