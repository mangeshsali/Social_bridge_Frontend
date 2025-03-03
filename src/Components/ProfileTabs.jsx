import React, { useState } from "react";
import SocialConnect from "./Profile/SocialConnect";
import Projects from "./Profile/Projects";
import Posts from "./Profile/Posts";

const ProfileTabs = () => {
  const [currentIndexTab, setCurrentIndexTab] = useState(0);

  const Tabs = [
    {
      title: "Social Connect",
      Component: <SocialConnect />,
    },
    {
      title: "Projects",
      Component: <Projects />,
    },
    {
      title: "Posts",
      Component: <Posts />,
    },
  ];

  const ActiveTabComponent = Tabs[currentIndexTab].Component;

  return (
    <div className="w-full flex justify-center flex-col items-center  p-4 gap-5">
      <div className="flex gap-14">
        {Tabs.map((tab, key) => (
          <p
            onClick={() => setCurrentIndexTab(key)}
            className={`font-semibold text-lg cursor-pointer underline-offset-4  ${
              currentIndexTab === key ? "underline" : ""
            }`}
          >
            {tab.title}
          </p>
        ))}
      </div>

      <div className=" w-full">{ActiveTabComponent}</div>
    </div>
  );
};

export default ProfileTabs;
