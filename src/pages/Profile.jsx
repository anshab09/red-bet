import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { tab } = useParams();
    const validTabs = ["overview", "stack", "password"];
    const [activeTab, setActiveTab] = useState(validTabs.includes(tab) ? tab : "overview");

     useEffect(() => {
        if (validTabs.includes(tab)) {
            setActiveTab(tab);
        }
    }, [tab]);
    // Password State
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const [userData, setUserData] = useState({
        userId: "Demo898",
        availableChips: "220/-",
        exposure: "5.00/-",
        totalChips: "90/-",
        profitLoss: "120000.00/-", // You can change this to a number if you want formatting
    });

    // Stack Settings State
    const [stackValues, setStackValues] = useState([
        "100", "500", "2000", "20000", "200", "1000", "5000", "1500"
    ]);

    const handleStackChange = (index, value) => {
        const updated = [...stackValues];
        updated[index] = value;
        setStackValues(updated);
    };

    const handleStackSave = () => {
        alert(`Stack values saved: ${stackValues.join(", ")}`);
    };

    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match.");
            return;
        }
        alert("Password changed successfully!");
        // Reset form (optional)
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    const tabs = [
        { key: "overview", label: "OVERVIEW" },
        { key: "stack", label: "STACK SETTINGS" },
        { key: "password", label: "CHANGE PASSWORD" },
    ];

    return (
        <div className="min-h-screen bg-[#e8f0f2] p-4">
            {/* Header */}
            <div className="bg-[#2e2e2e] text-white text-sm font-bold px-4 py-2 rounded-t-md text-center">
                PROFILE
            </div>

            <div className="bg-white rounded-b-md shadow max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
                {/* Avatar Section */}
                <div className="flex flex-col items-center justify-center py-6 border-b md:border-b-0 md:border-r border-gray-300">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mb-3"
                    />
                    <h2 className="text-lg font-extrabold tracking-widest text-center">DEMO123</h2>
                </div>

                {/* Tabs & Content */}
                <div className="md:col-span-2 w-full ">
                    {/* Tab Navigation */}
                    <div className="relative">
                        <div className="flex mx-4 border-b border-gray-200 text-sm font-medium">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex-1 text-center cursor-pointer py-2 relative transition-colors duration-200 ${activeTab === tab.key
                                        ? "text-[#800000]"
                                        : "text-black hover:text-[#800000]"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.key && (
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#800000] transition-all duration-300"></div>
                                    )}
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
                                <div className="space-y-2 text-sm w-full">
                                    {[
                                        ["User Id :", userData.userId],
                                        ["Available Chips :", userData.availableChips],
                                        ["Exposure :", userData.exposure],
                                        ["Total Chips :", userData.totalChips],
                                        ["Profit/Loss :", <span className="text-green-600 font-bold">0.00/-</span>],
                                    ].map(([label, value], i) => (
                                        <div
                                            key={i}
                                            className={`grid grid-cols-2 sm:grid-cols-3 ${i < 4 ? "border-b border-gray-200" : ""
                                                } py-1`}
                                        >
                                            <span className="font-semibold text-gray-700">{label}</span>
                                            <span className="col-span-2 sm:col-span-2 text-gray-800">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === "stack" && (
                            <div className="grid grid-cols-2 gap-4">
                                {stackValues.map((value, index) => (
                                    <div key={index} className="flex">
                                        <div className="bg-[#800000] text-white text-sm font-bold flex items-center justify-center w-16 h-12 rounded-l">
                                            {value}
                                        </div>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(e) => handleStackChange(index, e.target.value)}
                                            className="w-full h-12 border border-gray-300 px-3 text-sm outline-none rounded-r"
                                        />
                                    </div>
                                ))}
                                <div className="col-span-2">
                                    <button
                                        onClick={handleStackSave}
                                        className="w-full bg-[#800000] text-white py-2 font-semibold rounded"
                                    >
                                        SAVE
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "password" && (
                            <div className="space-y-4">
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <label className="sm:w-48 font-semibold">Current Password :</label>
                                        <input
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            className="flex-1 border border-gray-300 rounded px-3 py-2 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <label className="sm:w-48 font-semibold">New Password :</label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="flex-1 border border-gray-300 rounded px-3 py-2 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <label className="sm:w-48 font-semibold">Re-enter New Password :</label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="flex-1 border border-gray-300 rounded px-3 py-2 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="text-xs text-gray-600 italic space-y-1">
                                    <p><strong>Note:</strong> The New Password field must be at least 6 characters</p>
                                    <p><strong>Note:</strong> The New Password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number</p>
                                </div>

                                <button
                                    onClick={handlePasswordChange}
                                    className="w-full bg-[#800000] text-white py-2 font-semibold rounded"
                                >
                                    Change Password
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
