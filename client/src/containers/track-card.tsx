import React from "react";
import { Link } from "@reach/router";
import { humanReadableTimeFromSeconds } from "../utils/helpers";
import { Track } from "../types";

const TrackCard = ({ track }: { track: Track }) => {
  const { title, thumbnail, author, length, modulesCount, id } = track;

  return (
    <Link
      to={`track/${id}`}
      className="rounded-lg text-slate-700 bg-cover bg-white shadow bg-center flex flex-col justify-between h-96 m-2 overflow-hidden relative hover:bg-pink-100 cursor-pointer w-[90%] xs:w-[47%] sm:w-[31%]"
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
          <div className="flex items-center">
            <img
              src={author.photo}
              className="h-9 w-9 mr-4 rounded-full object-cover"
            />
            <div className="flex flex-col justify-between">
              <p className="text-base text-slate-700 font-medium underline underline-offset-1">
                {author.name}
              </p>
              <small className="text-slate-500">
                {modulesCount} modules - {humanReadableTimeFromSeconds(length)}
              </small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrackCard;
