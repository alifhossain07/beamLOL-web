import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaSpotify,
  FaSalesforce,
  FaSlack,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDropbox,
  FaGithub,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";

const Collaborator = () => {
  return (
    <div className="py-20">
      <section className="text-gray-200 py-12 ">
        <div className=" w-9/12 mx-auto">
          {/* Header */}
          <h3 className="text-[#bcdff4] text-xl font-bold font-heading-aldrich tracking-wider uppercase mb-10">
            Our Collabs
          </h3>
          <h2 className="text-3xl lg:text-4xl tracking-wider font-heading-aldrich text-yellow-400 font-bold mb-10">
            COLLABORATIONS
          </h2>

          {/* Marquee Section */}
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={false}
            className="flex items-center gap-12"
          >
            {/* Example companies using React Icons */}
            <div className="text-center mr-12">
              <FaAws className="text-yellow-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">AWS</p>
            </div>

            <div className="text-center mr-12">
              <FaGoogle className="text-blue-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Google</p>
            </div>

            <div className="text-center mr-12">
              <FaMicrosoft className="text-green-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Microsoft</p>
            </div>

            <div className="text-center mr-12">
              <FaApple className="text-gray-400 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Apple</p>
            </div>

            <div className="text-center mr-12">
              <FaSpotify className="text-green-600 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Spotify</p>
            </div>

            <div className="text-center mr-12">
              <FaSalesforce className="text-blue-400 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Salesforce</p>
            </div>

            <div className="text-center mr-12">
              <FaSlack className="text-purple-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Slack</p>
            </div>

            <div className="text-center mr-12">
              <FaFacebook className="text-blue-600 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Facebook</p>
            </div>

            <div className="text-center mr-12">
              <FaTwitter className="text-blue-400 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Twitter</p>
            </div>

            <div className="text-center mr-12">
              <FaInstagram className="text-pink-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Instagram</p>
            </div>

            <div className="text-center mr-12">
              <FaDropbox className="text-blue-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Dropbox</p>
            </div>

            <div className="text-center mr-12">
              <FaGithub className="text-gray-300 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">GitHub</p>
            </div>

            <div className="text-center mr-12">
              <FaLinkedin className="text-blue-700 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">LinkedIn</p>
            </div>

            <div className="text-center mr-12">
              <FaReddit className="text-orange-500 text-7xl mb-4 mx-auto" />
              <p className="text-lg font-text-oxanium">Reddit</p>
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Collaborator;
