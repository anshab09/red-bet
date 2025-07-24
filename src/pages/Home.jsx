import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from '../Modal/Login';
import BonusRule from '../Modal/BonusRule';


const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [showBonusModal, setShowBonusModal] = useState(false);

    const handleBonusOpen = () => setShowBonusModal(true);
    const handleBonusClose = () => setShowBonusModal(false)

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const shouldShowLogin = params.get("login") === "true";

        if (shouldShowLogin) {
            setShowLogin(true);

            // Clean the URL after showing the modal
            params.delete("login");
            navigate({ pathname: "/home", search: params.toString() }, { replace: true });
        }
    }, [location.search, navigate]);

    return (
        <>

            <Navbar onBonusClick={handleBonusOpen}  />
            {showLogin &&
                (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>{" "}
                        <Login onClose={() => setShowLogin(false)} />
                    </>
                )


            }

            {showBonusModal && (
                <>
                 <div className="fixed inset-0 bg-black opacity-50 z-50"></div>{" "}
                    <BonusRule closeModal={handleBonusClose} />
                </>
            )}
        </>
    )
}

export default Home