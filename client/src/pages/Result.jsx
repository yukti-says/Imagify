import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  //  state varibales
  const [image, setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('')
  // submit handler function
  const handleSubmit = async (e) => {
    
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col min-h-[90vh] items-center justify-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded mb-4" />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${isLoading ? 'w-full transition-all duration-[10s]' :'w-0'}`} />
        </div>
       
        <p className={ !isLoading ? 'hidden' : '' }>Loading.....</p>
      </div>
      {/* whenever the image is not loaded here so this will be shown */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full ">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Tell What you want to Generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color "
          />
          <button
            type="submit"
            className="bg-zinc-700 hover:bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white "
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false)
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">
            Generate another
          </p>
          <a
            className="bg-zinc-800 border border-zinc-900 text-white px-8 py-3 rounded-full cursor-pointer"
            href={image}
            target="_blank"
            download
          >
            Download
          </a>
        </div>
      )}
    </form>

    // form for user to input
  );
}

export default Result