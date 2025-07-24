import React, { useState } from "react";

const BonusRule = ({ closeModal }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 md:p-0">

            <div className="relative w-[800px] max-h-[90vh] bg-white text-black rounded shadow-lg  overflow-auto">


                <div className="bg-black text-white px-4 py-1 rounded-t">
                    <h2 className="text-xl font-bold">Bonus Rules</h2>
                    <button
                        onClick={closeModal}
                        className="absolute top-0 right-4 text-white text-2xl font-bold hover:text-red-500"
                    >
                        ×
                    </button>
                </div>
                {/* Content */}
                <div className="p-3">
                    <div className="text-sm ">
                        <p>All new members! We Welcome you with a 300% Sports Bonus on your starting journey.</p>
                        <p>⇒ Claim your bonus immediately and start your journey two times faster.</p>
                        <p>
                            ⇒ The welcome bonus shall exclusively apply to each user's First deposit and Second deposit and even on
                            Every Deposit on your account.
                        </p>
                        <p>⇒ Minimum deposit amount is 300 INR for Every Deposit to claim bonus.</p>
                        <p>⇒ Register an account and make your first deposit.</p>

                        <p className="font-semibold">First Deposit :</p>
                        <ul className="list-disc ml-6">
                            <li>INR 300-5,000 =&gt; 300% on 200 X True Rolling</li>
                            <li>INR 5,001-2,00,000 =&gt; 50% or 15,000 Whichever is MORE on 200X True Rolling</li>
                            <li>INR 2,00,001 OR MORE =&gt; 1,00,000 on 200X True Rolling</li>
                        </ul>

                        <p className="font-semibold">Second Deposit :</p>
                        <ul className="list-disc ml-6">
                            <li>INR 300-10,000 =&gt; 50% on 200X True Rolling</li>
                            <li>INR 10,001 - 4,00,000 =&gt; 25% or 5,000 Whichever is More on 200X True Rolling</li>
                            <li>INR 4,00,001 OR MORE =&gt; 1,00,000 on 200X True Rolling</li>
                        </ul>

                        <p className="font-semibold">On Every Deposit Bonus (min:1000):</p>
                        <p>⇒ 10% on 200 X True Rolling up to Deposit of 10,00,000</p>
                        <p>
                            ⇒ (On Deposit of more than 10,00,000, you will get Bonus equivalent to deposit of 10,00,000)
                        </p>

                        <p className="font-semibold">Referral Bonus:</p>
                        <p>⇒ You can also earn from Referring someone to play on this website.</p>
                        <p>
                            ⇒ You can Earn 20% of First deposit of your Reference, once he Redeem at least 1 coupon of 10 coupons of
                            First Deposit Bonus (If You Refer Someone and He/She deposit 10000, You Earn 2000 Referral Bonus, Which can
                            be converted in to awaiting bonus after your reference Redeem at least 1000 Bonus Coupons Received by him
                            on First Deposit)
                        </p>
                        <p>
                            ⇒ 20% of Your Reference Deposit or 50,000 Whichever is Less on 200X true rolling (Min Deposit:- 2500)
                        </p>

                        <p className="font-semibold"># True Rolling</p>
                        <p>
                            ⇒ True Rolling will be calculated on every bet you placed, i.e it is accumulation of true rolling of all
                            bets
                        </p>
                        <p>
                            ⇒ True Rolling amount is Exposure created on bet or profit on that exposure, whichever is less i.e if you
                            back a non-runner at rate of 45, your Rolling Amount will be 4500
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BonusRule;
