import { products } from '@/utils'
import Link from 'next/link'
import React from 'react'

const Three = () => {
  return (
    <div className="bg-white w-full p-4 md:p-12">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-light tracking-wide text-gray-900 mb-3">Meet the Sisters</h2>
      </div>
      
      {/* Container with nested appearance and border on all sides */}
      <div className="flex flex-col border border-black">
        {/* Container for the sections - mobile column, desktop row */}
        <div className="flex flex-col md:flex-row w-full">
          {products.map((product, index) => (
            <React.Fragment key={index}>
              {/* Section with top border for mobile (except first) and left border for desktop (except first) */}
              <div 
                className={`flex-1 relative ${
                  index > 0 ? 'border-t md:border-t-0 md:border-l border-black' : ''
                }`}
              >
                {/* Full image container */}
                <div className="relative h-96 md:h-120 overflow-hidden">
                  <img 
                    src={product.pictures[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  
                  {/* Content overlay positioned at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/90 mb-6 max-w-xs mx-auto">
                      {product.quickDescription}
                    </p>
                    <Link href={'./collection'} className="border cursor-pointer border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2 text-sm tracking-wider uppercase font-light text-white">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Additional feature banner */}
      <div className="mt-8 text-center border-t border-gray-200 pt-8">
        <p className="text-gray-500 italic text-sm tracking-wide">
          Free shipping on orders over $150 • Ethically made • Limited edition pieces
        </p>
      </div>
    </div>
  )
}

export default Three