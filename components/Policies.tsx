import React from 'react';

const Policies = () => {
    const cards = [ 
        {
            item: "Worldwide Shipping",
            description: "Get your order delivered anywhere in the world",
            icon: "/icons/shipping.jpg"
        },
        {
            item: "Secure Payment",
            description: "We ensure your payments are secure and safe",
            icon: "/icons/payment.png",
        },
        {
            item: "Return Policy",
            description: "Terms and conditions apply",
            icon: "/icons/reload.jpg"
        },
        {
            item: "24/7 Support",
            description: "We are always here to help you",
            icon: "/icons/headphones.jpg"
        }
    ];

    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
                    Our Policies
                </h2>

                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center bg-gray-100 rounded-xl shadow-lg p-6 w-72 hover:shadow-xl transition-all duration-300">
                            {/* Icon */}
                            <img src={card.icon} alt={card.item} className="w-16 h-16 object-contain mb-4" />

                            {/* Title */}
                            <h3 className="text-lg font-medium text-gray-900">{card.item}</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 text-center mt-2">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Policies;
