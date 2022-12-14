import React from "react";

import data from "../assets/dummyData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
  const [datas, setDatas] = React.useState([{}]);

  React.useEffect(() => {
    document.title = "Dumbgram";
    setDatas(data);
    return console.log(datas);
  }, [datas]);

  return (
    <>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="left-0 z-100 pl-6 fixed w-64 h-screen border border-r-1 border-neutral-300">
          <div className="flex items-center gap-3 my-10 w-max">
            <img
              src="https://imgs.search.brave.com/VSGFyGJAWF806juSz49EQfafPYYbZ5istp41qqK1qzY/rs:fit:512:355:1/g:ce/aHR0cHM6Ly9kdW1i/d2F5cy5pZC9hc3Nl/dHMvaW1hZ2VzL2Jy/YW5kcmVkLnBuZw"
              alt="logo"
              className="w-12 h-auto"
            />
            <p className="text-xl text-black font-semibold">Dumbgram</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={solid("home")} className="w-6 h-6" />
            <p className="text-lg text-black font-medium antialiasing">Home</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              className="w-6 h-6"
            />
            <p className="text-lg text-black font-light antialiasing">Search</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={regular("compass")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Explore
            </p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={regular("message")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Messages
            </p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={regular("heart")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Notification
            </p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon
              icon={regular("square-plus")}
              className="w-6 h-6"
            />
            <p className="text-lg text-black font-light antialiasing">Create</p>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <FontAwesomeIcon icon={solid("user")} className="w-6 h-6" />
            <p className="text-lg text-black font-light antialiasing">
              Profile
            </p>
          </div>
        </div>
        <div className="relative w-[50vh] h-screen flex flex-col whitespace-nowrap overflow-scroll scrollbar-hide">
          {datas.map((item: any) => {
            return (
              <div className="bg-white border border-1 border-neutral-300 rounded-lg my-3">
                <div className="m-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.user_image}
                      alt="userImg"
                      className="object-cover w-10 h-10 rounded-full"
                    />
                    <p className="text-sm text-black font-medium antialiasing">
                      {item.username}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={solid("ellipsis")}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <img
                    src={item.post_image}
                    alt="postImg"
                    className="w-full h-full"
                  />
                </div>
                <div className="m-3 flex flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      {item.isLiked ? (
                        <FontAwesomeIcon
                          icon={solid("heart")}
                          className="w-6 h-6 text-red-600"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={regular("heart")}
                          className="w-6 h-6"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={regular("comment")}
                        className="w-6 h-6"
                      />
                      <FontAwesomeIcon
                        icon={regular("paper-plane")}
                        className="w-6 h-6"
                      />
                    </div>
                    <FontAwesomeIcon
                      icon={regular("bookmark")}
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-sm text-black font-medium antialiasing">
                    {item.likes} Likes
                  </p>
                  <p className="text-sm text-black font-normal flex gap-1">
                    <strong>{item.username}</strong>
                    {item.description}
                  </p>
                  <p className="text-sm text-neutral-400 font-normal">
                    View all {item.comment}{" "}
                    {item.comment === 1 ? "comment" : "comments"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
