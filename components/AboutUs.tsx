import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-20 text-center relative text-pi">
      {/* Subtle decorative element */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-300"></div>
      
      <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight mt-8">
        Designed to Define a<br className="hidden md:block" /> New Standard of Elegance
      </h2>
      
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
        Distinctive pieces created to inspire confidence and elevate every moment.  
        At Klassy Official, we design with purpose—to empower the women who wear us.
      </p>
      
      {/* Subtle section divider */}
      <div className="w-24 h-px bg-gray-200 mx-auto mb-10"></div>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          From the first sketch to the final stitch, each garment is a celebration of artistry and detail.  
          Our collections are thoughtfully curated using premium fabrics, refined cuts, and elevated finishes.
        </p>
        
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
          Whether it's a milestone celebration or a quiet moment of self-expression, 
          Klassy is made to accompany you in style.
        </p>
      </div>
      
      <p className="max-w-2xl mx-auto text-base md:text-lg text-black italic font-light">
        Because trends fade, but statements are forever.
      </p>
      
      {/* Signature-like element */}
      <div className="mt-12">
        <div className="w-16 h-px bg-gray-400 mx-auto"></div>
      </div>
    </div>
  )
}

export default AboutUs