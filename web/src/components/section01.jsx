import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import settings from '../assets/settings.png'

const Section01 = () => {

    const banners = [
        {imgBanner:'https://m.media-amazon.com/images/I/81Md3BV7vJL._SX1600_._AGmerlin_._FMwebp_.jpg', 
        preview:'https://m.media-amazon.com/images/I/612BafT5KxL._SX256_._AGmerlin_._FMwebp_.jpg',
        subtitle:'VALORANT',
        title:'Spray Quase Engasguei',
        text:'Cuspa alguns danos com respingos do Spray Quase Engasguei.' },
        {imgBanner:'https://m.media-amazon.com/images/I/91TvndeCN8L._SX1600_._AGmerlin_._FMwebp_.jpg',
        preview:'https://m.media-amazon.com/images/I/61eQcTPQ4fL._SX256_._AGmerlin_._FMwebp_.jpg',
        subtitle:'League of Legends',
        title:'Cápsula Prime Gaming',
        text:'Obtenha 350 RP, uma skin épica, uma skin de sentinela misteriosa e muito mais.' },
        {imgBanner:'https://m.media-amazon.com/images/I/71oNDnpS8nL._SX1600_._AGmerlin_._FMwebp_.jpg',
        preview:'https://m.media-amazon.com/images/I/61X3sknekKL._SX256_._AGmerlin_._FMwebp_.jpg',
        subtitle:'Star Wars: Knights of the Old Republic',
        title:'Incluso gratuitamente com o Prime',
        text:'Você conseguirá dominar o incrível poder da Força?' },
        {imgBanner:'https://m.media-amazon.com/images/I/A1CBN2ynvbL._SX1600_._AGmerlin_._FMwebp_.jpg',
        preview:'https://m.media-amazon.com/images/I/6180AYJpDUL._SX256_._AGmerlin_._FMwebp_.jpg',
        subtitle:'PUBG' ,
        text:'Mostre sua paixão pela batalha com o Tabardo da Fúria.',
        title:'Dê à sua BSV-M um visual novo com a skin de arma rara Rising Waters e ganhe um pulo de...'},
        {imgBanner:'https://m.media-amazon.com/images/I/71fSSPxj6yL._SX1600_._AGmerlin_._FMwebp_.jpg',
        preview:'https://m.media-amazon.com/images/I/41LOK80rwJL._SX256_._AGmerlin_._FMwebp_.jpg',
        subtitle:'Star Wars: Knights of the Old Republic',
        title:'Incluso gratuitamente com o Prime',
        text:'Você conseguirá dominar o incrível poder da Força?' },
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

            <header className='shadow-sm shadow-black w-full  h-16 py-5  flex justify-between items-center'>
              <div className='w-full flex justify-between max-w-[1600px] m-auto px-20'>
                <img src={logo} alt="" />
                <img src={settings} alt="" />
              </div>
            </header>

            <div className='w-full max-w-[1600px] m-auto'>
                <div className='w-full h-[584px]'>  
                    <div className='w-full h-full flex justify-center relative'>
                        <div  className='absolute bottom-0 w-full h-[100px] bg-gradient-to-t via-[#0B0418] from-[#0B0418] to-transparent z-20'/>
                        <div  className='absolute right-0 w-[498px] h-full bg-gradient-to-l from-[#0b0418e4] to-transparent z-20'/>
                        <img
                            className="object-cover absolute w-full h-full"
                            src={banners[activeIndex].imgBanner}
                            alt=""
                        />

                        <div className='absolute z-30 text-white right-16 bottom-16 w-full max-w-sm flex h-full flex-col justify-center'>
                          <p className='text-base  font-semibold'>{banners[activeIndex].subtitle}</p>
                          <h1 className='text-3xl pb-3 font-semibold'>{banners[activeIndex].title}</h1>
                          <p className='text-base py-4'>{banners[activeIndex].text}</p>
                          <p className='pt-4'>Grátis com Prime Gaming</p>
                          <button className='w-[210px] rounded-md mt-1 p-2 whitespace-nowrap bg-[#9146FF]'>Obtenha conteúdo no jogo</button>
                        </div>

                        <div className='w-full max-w-[935px] absolute bottom-1 z-20 justify-center flex gap-4'>
                            {banners.map((preview, index)=>
                                <div
                                onClick={() => handlePreviewClick(index)}
                                key={index}
                                className='w-44 h-24 rounded-md relative overflow-hidden'>
                                    <div style={{ width: `${width}%` }} className={`${index === activeIndex ? 'h-full bg-[#00000071] absolute' : ''}`}/>
                                    <img src={preview.preview} className='object-cover h-full w-full'/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )}
export default Section01