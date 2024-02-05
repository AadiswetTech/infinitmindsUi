import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
   <section className='mt-20'>
   <div className="bg-gray-50 font-[sans-serif] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-gray-300 uppercase mb-6">Blogs</h2>
          <h2 className="text-3xl font-extrabold text-[#333] uppercase leading-10">Discover Our Letest Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
          <div className="cursor-pointer rounded overflow-hidden group">
            <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-52 object-cover" />
            <div className="py-6">
              <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">A Guide to Igniting Your Imagination</h3>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-52 object-cover" />
            <div className="py-6">
              <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">Hacks to Supercharge Your Day</h3>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="py-6">
              <span className="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">Trends and Predictions</h3>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="py-6">
              <span className="text-sm block text-gray-400 mb-2">10 DEC 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">Innovators Changing the Game</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </section>
  )
}

export default Blog