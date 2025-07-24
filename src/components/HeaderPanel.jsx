


import React from 'react';

const HeaderPanel = () => {
  return (
    <div
      className="border p-2 rounded mb-2"
      style={{
        backgroundImage: 'url("https://speedcdn.io/assets/score_card/desktop.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex justify-between items-center text-white bg-opacity-60 rounded px-2 py-2">

        {/* Batsman SVG */}
        <div className="hidden md:block w-14 sm:w-10 flex-shrink-0">
          <img
            src="https://speedcdn.io/assets/score_card/batsman-bold-outline.svg"
            alt="Batsman"
            className="h-[90px] sm:h-[60px] w-auto"
          />
        </div>

        {/* Left Team Info */}
        <div className="text-right leading-tight text-sm sm:text-xs sm:min-w-[75px] min-w-[90px]">
          <div className="font-semibold">ENG</div>
          <div>
            <span className="font-semibold">565/6</span>{' '}
            <span className="font-semibold">(96.3)</span>
          </div>
          <div>
            <span className="font-semibold">0/0</span>{' '}
            <span className="font-semibold">(0.0)</span>
          </div>
          <div>
            <span className="font-semibold">CRR:</span> 0
          </div>
        </div>

        {/* Match Status Block */}
        <div className="border border-white rounded-md px-3 py-2 text-center text-sm sm:text-xs  bg-opacity-90 text-black max-w-[300px] sm:max-w-[180px] w-full mx-2 sm:mx-1 sm:px-2 sm:py-1">
          <p className="italic font-semibold text-base sm:text-sm mb-1">DAY 2 STUMPS</p>

          {/* Ball-by-ball display */}
          <div className="flex justify-center mb-1 space-x-1">
            {[2, 4, 2, 4, 1, 0].map((ball, idx) => (
              <div
                key={idx}
                className="w-5 h-5 sm:w-4 sm:h-4 bg-gray-200 rounded-full flex items-center justify-center text-sm sm:text-[10px] font-semibold"
              >
                {ball}
              </div>
            ))}
          </div>

          {/* Trail Info */}
          <div className="font-semibold text-[14px] sm:text-[12px] mb-1">
            ZIM trail by 270 runs
          </div>

          {/* Batsman Info */}
          <div className="flex justify-between text-sm sm:text-xs px-1 text-white gap-4">
            <div><span className="font-semibold">*</span>S Williams <span>22 (11)</span></div>
            <div>Ben Curran <span>4 (26)</span></div>
          </div>
        </div>

        {/* Right Team Info */}
        <div className="text-left leading-tight text-sm sm:text-xs sm:min-w-[75px] min-w-[90px]">
          <div className="font-semibold">ZIM</div>
          <div>
            <span className="font-semibold">265/9</span>{' '}
            <span className="font-semibold">(63.2)</span>
          </div>
          <div>
            <span className="font-semibold">30/2</span>{' '}
            <span className="font-semibold">(10.0)</span>
          </div>
          <div>
            <span className="font-semibold">CRR:</span> 3
          </div>
        </div>

        {/* Bowler SVG */}
        <div className="hidden md:block w-14 sm:w-10 flex-shrink-0">
          <img
            src="https://speedcdn.io/assets/score_card/baller-bold-outline.svg"
            alt="Bowler"
            className="h-[90px] sm:h-[60px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
