import React from "react";
import { FaChess, FaTableTennis, FaIdBadge, FaDumbbell } from "react-icons/fa";
import { GiCardAceHearts, GiPoolTriangle } from "react-icons/gi";
import bgImage from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0005.jpg"; // Replace with your clubhouse image
import sample1 from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0005.jpg"; // Replace with actual paths
import sample2 from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0005.jpg";
// ... more images

const ClubhouseAmenities = () => {
  const highlightsLeft = [
    "GATED & SECURED CAMPUS",
    "HIGH END CLUB",
    "24/7 CCTV SECURITY",
    "RAIN WATER HARVESTING",
    "EARTHQUAKE RESISTANT STRUCTURE",
    "MIVAN CONSTRUCTION",
    "POWER BACK-UP & WATER SUPPLY",
  ];

  const highlightsRight = [
    "BASEMENT & OPEN CAR PARKING",
    "KIDS PLAY AREA",
    "YOGA MEDITATION AREA",
    "BADMINTON/ TENNIS COURT",
    "COMMERCIAL SHOPS AT FRONT",
    "WELL CONNECTED TO HIGHWAY",
  ];

  return (
    <div className="bg-[#561c29] text-white font-serif px-4 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <img src={bgImage} alt="Clubhouse" className="rounded-md mb-8" />
          <h2 className="text-yellow-500 text-4xl font-semibold italic mb-2">The <span className="text-white not-italic">Ultimate</span></h2>
          <p className="text-2xl mb-6">Clubhouse Amenities</p>

          <div className="grid grid-cols-3 gap-4 border border-gray-300 p-6 rounded-lg bg-[#692634]">
            <div className="flex flex-col items-center">
              <GiCardAceHearts className="text-3xl mb-2" />
              <p>Cards</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTableTennis className="text-3xl mb-2" />
              <p>Table Tennis</p>
            </div>
            <div className="flex flex-col items-center">
              <FaChess className="text-3xl mb-2" />
              <p>Chess</p>
            </div>
            <div className="flex flex-col items-center">
              <FaIdBadge className="text-3xl mb-2" />
              <p>Reception</p>
            </div>
            <div className="flex flex-col items-center">
              <FaDumbbell className="text-3xl mb-2" />
              <p>Gymnasium</p>
            </div>
            <div className="flex flex-col items-center">
              <GiPoolTriangle className="text-3xl mb-2" />
              <p>Pool Table</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-white text-2xl mb-6 border-b pb-2 border-yellow-600">
            KEY PROJECT HIGHLIGHTS:
          </h3>
          <div className="grid grid-cols-2 gap-6 mb-8 text-sm leading-6">
            <ul className="space-y-2 list-disc list-inside">
              {highlightsLeft.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              {highlightsRight.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-3 gap-2">
            {[sample1, sample2, sample1, sample2, sample1, sample2].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`sample-${idx}`}
                className="rounded-md object-cover h-24 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubhouseAmenities;
