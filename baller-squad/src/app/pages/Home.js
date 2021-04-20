// Home page for app
import React, { useContext } from "react";
import { HomeBlock } from "../components/home/HomeBlock";
import { Footer } from "../components/Nav/Footer";
import { Link } from "react-router-dom";
import {
  AccessibleForward,
  FitnessCenter,
  AttachMoney,
  EmojiEmotions,
} from "@material-ui/icons";
import { Profile } from "../components/home/Profile";
import { RouteContext } from "../routeContext";

// Home Display
// Lots of HMTL and CSS not really any logic just displays
export const Home = () => {
  const { route, setRoute } = useContext(RouteContext);
  return (
    <>
      <div className="flex lg:h-full flex-col">
        <div className="w-full h-full p-5 space-y-4">
          <div className="bg-simple-gray-29 rounded-lg divide-y-4 divide-purple-400">
            <div className="text-5xl text-center p-4 text-purple-300">
              What is Squickz?
            </div>
            <div
              className={`h-full w-full p-5 lg:flex-row md:flex-row md:space-y-0 flex-col lg:space-y-0 space-y-4 flex flex1 justify-evenly`}
            >
              <HomeBlock icon={<AccessibleForward />} text={`It's Fast!`} />
              <HomeBlock icon={<EmojiEmotions />} text={`It's Fun!`} />
              <HomeBlock icon={<FitnessCenter />} text={`It's Swag!`} />
              <HomeBlock icon={<AttachMoney />} text={`It's Free!`} />
            </div>
            <div
              className={`h-full w-full p-5 text-lg flex flex-col justify-evenly items-center space-y-4`}
            >
              <div>
                <span className={`text-purple-300 text-2xl`}>Squickz</span> is
                the newest and hottest game in town. Some say it's even more
                addicting than <i>Runescape&trade;</i>. Test your skills and try
                to beat the timer with how fast you can click!
              </div>
              <Link to="/play" onClick={()=>setRoute("/play")}>
                <div
                  className={`bg-purple-700 rounded-full py-3 px-6 hover:w-44 w-40 flex align-middle text-lg text-center justify-center p-5 hover:bg-purple-600 ease-in-out duration-200`}
                >
                  Play Now!
                </div>
              </Link>
            </div>
          </div>
          <div className={`p-5 space-y-6 bg-simple-gray-1e rounded-lg`}>
            <div
              className={`text-purple-400 text-center justify-center text-3xl`}
            >
              This app was brought to you by the <i>BallerSquad</i>
            </div>
            <Profile
              name={`Calvin Lapp`}
              studentNumber={100561321}
              description={`Coolest person in the group.  Really kind, caring, sweet, athletic, funny, humble, handsome, and amazing at everything he does.`}
            />
            <Profile
              name={`Henry Zheng`}
              studentNumber={100625387}
              description={`A handsome devil and the charm of the group.  Likes to giggle.`}
            />
            <Profile
              name={`Paul Kerrigan`}
              studentNumber={100643837}
              description={`A strong, dependable boy.  Always there for ya and likes tea.`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
