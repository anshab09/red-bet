import React, { useState } from 'react';

const Bonus = () => {
    const validTabs = ["overview", "stack", "password"];
    const [activeTab, setActiveTab] = useState("");

    // Password State






    const tabs = [
        { key: "IN-PROGRESS", label: "IN-PROGRESS" },
        { key: "REDEEMED", label: "REDEEMED" },
        { key: "EXPIRED & VOID", label: "EXPIRED & VOID" },
    ];

    return (
        <div className="bg-[#e7ebf0] min-h-screen font-sans">

            <div className="bg-[#dde5e8]">
                <div className="relative h-[48px] my-2">
                    <div className="absolute  top-0 left-0 h-full w-[220px] bg-[#c8102e] clip-ribbon text-white font-bold text-sm flex items-center pl-4">
                        BONUS LIST
                    </div>
                </div>
            </div>

            <div className="md:col-span-2 w-full  ">

                <div className="  mt-4 bg-[#343435] ">
                    <div className=" flex flex-col sm:flex-row  overflow-hidden text-sm font-xs  max-w-sm ">
                        {tabs.map((tab) => (
                            <div
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={` px-2 py-2  justify-center items-center cursor-pointer transition-all duration-200 ${activeTab === tab.key
                                        ? "bg-[#800000] text-white"
                                        : " text-white hover:bg-[#800000]"
                                    }`}
                            >
                                {tab.label}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Tab Content */}
                <div className="p-4 sm:p-6 text-sm text-gray-800">
                    {activeTab === "overview" && (
                        <>
                            <p className="mb-4">
                                Welcome to{" "}
                                <span className="text-[#800000] font-semibold">reddybook</span>,{" "}
                                <span className="font-bold text-[#800000]">demo123</span>
                            </p>

                        </>
                    )}

                    {activeTab === "stack" && (
                        <div className="grid grid-cols-2 gap-4">

                            <div className="col-span-2">
                                <button
                                    className="w-full bg-[#800000] text-white py-2 font-semibold rounded"
                                >
                                    SAVE
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "password" && (
                        <div className="space-y-4">




                            <button
                                className="w-full bg-[#800000] text-white py-2 font-semibold rounded"
                            >
                                Change Password
                            </button>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Bonus
