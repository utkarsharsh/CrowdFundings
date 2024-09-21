import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import charitybg from "../assets/charitybg.png" 

const SubscriptionPage = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,  
        });
      }, []);
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "Free",
      benefits: ["Access to basic features","Directory & search visibility.", "Basic donor analytics."],
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "$15/month",
      benefits: ["Featured listings for more visibility.", "Early access to new features", "Priority support", "Custom profile branding."],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$30/month",
      benefits: [
        "Featured listings for more visibility.",
        "All Pro Plan features",
       "Advanced campaign management.",
      ],
    },
  ];

  return (
    <div className="overflow-x-clip">
     <div 
    className='relative flex flex-col gap-8 py-10 justify-center items-center max-w-[100vw] overflow-x-hidden   '
    style={{ backgroundImage: `url(${charitybg})` }}
    >
        <h1 className="text-4xl md:text-5xl font-[rowdies] underline text-black">Choose Your Plan</h1>
        <p className="text-lg font-medium text-blueone max-w-3xl">
          Unlock exclusive features and support our mission by subscribing to one of our membership plans.
          Select the plan that best suits your needs and start making a difference today!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-16 px-5 md:px-20 bg-white">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg border-t-4 border-bluefour hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-bluethree mb-4">{plan.name}</h2>
            <p className="text-3xl font-extrabold text-bluethree mb-4">{plan.price}</p>
            <ul className="flex flex-col gap-2 text-gray-600 mb-6">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MdArrowForward className="text-bluefour" />
                  {benefit}
                </li>
              ))}
            </ul>
            <NavLink to={`/subscribe/${plan.id}`}>
              <button className="uppercase text-white bg-bluethree hover:bg-bluetwo px-6 py-3 rounded-full font-medium">
                Subscribe Now
              </button>
            </NavLink>
          </div>
        ))}
      </div>

    <div 

    className='relative flex flex-col gap-8 py-10 justify-center items-center max-w-[100vw] overflow-x-hidden   '
    style={{ backgroundImage: `url(${charitybg})` }}
    >
        <h3 className="text-3xl md:text-4xl font-[rowdies] text-textbrown mb-4">
          Join our community and make an impact!
        </h3>
        <NavLink to="/about-us">
          <button className="bg-bluethree text-white hover:bg-bluetwo px-8 py-3 rounded-full font-medium">
            Learn More About Us
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SubscriptionPage;
