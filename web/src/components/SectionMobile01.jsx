
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const SectionMobile01 = () => {

  const banners = [
    {imgBanner:'https://m.media-amazon.com/images/I/81Md3BV7vJL._SX1600_._AGmerlin_._FMwebp_.jpg', 
    preview:'https://m.media-amazon.com/images/I/612BafT5KxL._SX256_._AGmerlin_._FMwebp_.jpg' },
    {imgBanner:'https://m.media-amazon.com/images/I/91TvndeCN8L._SX1600_._AGmerlin_._FMwebp_.jpg',
    preview:'https://m.media-amazon.com/images/I/61eQcTPQ4fL._SX256_._AGmerlin_._FMwebp_.jpg' },
    {imgBanner:'https://m.media-amazon.com/images/I/71oNDnpS8nL._SX1600_._AGmerlin_._FMwebp_.jpg',
    preview:'https://m.media-amazon.com/images/I/61X3sknekKL._SX256_._AGmerlin_._FMwebp_.jpg' },
    {imgBanner:'https://m.media-amazon.com/images/I/A1CBN2ynvbL._SX1600_._AGmerlin_._FMwebp_.jpg',
    preview:'https://m.media-amazon.com/images/I/6180AYJpDUL._SX256_._AGmerlin_._FMwebp_.jpg' },
    {imgBanner:'https://m.media-amazon.com/images/I/71fSSPxj6yL._SX1600_._AGmerlin_._FMwebp_.jpg',
    preview:'https://m.media-amazon.com/images/I/41LOK80rwJL._SX256_._AGmerlin_._FMwebp_.jpg' },
]

const [activeIndex, setActiveIndex] = useState(0);
const [width, setWidth] = useState(0);

useEffect(() => {
const intervalId = setInterval(() => {
  setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  setWidth(0); // Reset width when changing banners
}, 5000);

return () => clearInterval(intervalId);
}, [banners]);

useEffect(() => {
let animationId;

const updateWidth = (startTimestamp) => {
  const elapsed = Date.now() - startTimestamp;
  const progress = (elapsed / 5000) * 100;

  if (progress <= 100) {
    setWidth(progress);
    animationId = requestAnimationFrame(() => updateWidth(startTimestamp));
  } else {
    setWidth(0);
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length); // Immediately change image after reaching 100%
  }
};

const startAnimation = () => {
  const startTimestamp = Date.now();
  updateWidth(startTimestamp);
};

startAnimation(); // Start animation on component mount

return () => cancelAnimationFrame(animationId);
}, [activeIndex]);

const handlePreviewClick = (index) => {
setActiveIndex(index);
setWidth(0); // Reset width when a preview is clicked
};

  return (
    <div className='w-full'>

    <header className='shadow-sm shadow-black w-full h-14 absolute z-50 bg-[#0B0418]  flex justify-between items-center'>
      <div className='w-full max-w-[1600px] m-auto max-sm:px-6 max-lg:px-12 px-6 py-3'>
        <img src={logo} alt="" />
      </div>
    </header>

    <div className='h-[208px] max-lg:h-[386px] max-[450px]:h-[200px] w-full relative'>
    <div className='w-full h-full flex justify-center relative'>

        <div className='absolute -bottom-5 max-[450px]:-bottom-16 max-lg:-bottom-14 w-full max-lg:h-[100px] h-[60px] bg-gradient-to-t max-lg:via-[rgb(11,4,24)] from-[#0B0418] to-transparent z-20'/>
            <div className='absolute max-[450px]:text-[22px] text-center z-30 font-semibold text-[28px] -bottom-9 text-white drop-shadow-md'>
                <h1>VALORANT</h1>
                <p className='text-[#C2BCD3] mt-1 text-base max-[450px]:text-sm font-semibold'>Conteúdo do jogo grátis com o prime</p>
            </div>
            <img
              className="object-cover absolute top-3 max-[450px]:top-4 max-lg:top-7 w-full h-full"
              src={banners[activeIndex].imgBanner}
              alt=""
            />
        </div>

        <div className=' relative max-md:pl-56 items-center Noscroll overflow-auto pr-5 -bottom-12 z-50 justify-center flex gap-4'>
          {banners.map((preview, index) => (
            <div
            onClick={() => handlePreviewClick(index)}
            key={index}
              className='min-w-[101px] z-50 h-14 relative rounded-md overflow-hidden'>
                 <div style={{ width: `${width}%` }} className={`${index === activeIndex ? 'h-full bg-[#00000071] absolute' : ''}`}/>
              <img src={preview.preview} className='object-cover h-full w-full' />
            </div>
          ))}
        </div>

    </div>
    </div>
  )
}

export default SectionMobile01