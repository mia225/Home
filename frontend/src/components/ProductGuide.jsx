import React from "react";
import { FaRegFileAlt, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePersonSearch } from "react-icons/md";

const ProductGuide = () => {
  const steps = [
    {
      icon: <FaRegFileAlt size={40} className="text-[#0A1F4A]" />,
      label: "BROWSE",
    },
    {
      icon: <FaShoppingCart size={40} className="text-[#0A1F4A]" />,
      label: "ADD TO CART",
    },
    {
      icon: <AiOutlineShoppingCart size={40} className="text-[#0A1F4A]" />,
      label: "CHECKOUT",
    },
    {
      icon: <FaCreditCard size={40} className="text-[#0A1F4A]" />,
      label: "PAYMENT",
    },
    {
      icon: <MdOutlinePersonSearch size={40} className="text-[#0A1F4A]" />,
      label: "THEN WAIT",
    },
  ];

  return (
    <section className="bg-[#0A1F4A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          ONE STOP ONE SHOP
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base max-w-2xl mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Steps */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-5 
            gap-6 
            md:gap-8 
            justify-items-center
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                bg-white 
                text-center 
                p-6 
                rounded-lg 
                shadow-md 
                w-full
                max-w-[150px]
                flex 
                flex-col 
                items-center 
                hover:translate-y-1 
                transition
              "
            >
              {step.icon}
              <p className="text-[#0A1F4A] font-semibold text-sm mt-3">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGuide;