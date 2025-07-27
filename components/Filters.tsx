import React from 'react'
import { Button } from './ui/button'

const Filters = () => {

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Active Filters */}
        <div className="mb-4 hidden">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-white">
              Dresses
              <svg className="ml-2 cursor-pointer hover:text-gray-300" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.42 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4z"/>
              </svg>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-white">
              Size M
              <svg className="ml-2 cursor-pointer hover:text-gray-300" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.42 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4z"/>
              </svg>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-white">
              $50-$100
              <svg className="ml-2 cursor-pointer hover:text-gray-300" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.42 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4z"/>
              </svg>
            </span>
            <button className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors">
              Clear All
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-start space-x-4 overflow-x-scroll">
          
          {/* Category Filter */}
         <div className='relative'>
          <Button>Jumpsuits</Button>
         </div>
          {/* Size Filter */}
          <div className="relative">
            <Button>Dresses</Button>
          </div>

          {/* Color Filter */}
          <div className="relative">
             <Button>Best sellers</Button>
          </div>

          {/* Price Filter */}
          <div className="relative">
             <Button>New in</Button>
          </div>
        </div>

       

      </div>
    </div>
  )
}
export default Filters
