import React, { useEffect, useRef, useState } from 'react';
import Cards from './Cards';
import { CaretLeft, CaretRight } from 'phosphor-react';

const Carousel = () => {
  const infoCards = [
    {img:'https://m.media-amazon.com/images/I/41LOK80rwJL._FMwebp_.jpg', title:'Star Wars: Knights of the Old Republic'},
    {img:'https://m.media-amazon.com/images/I/61lcurSACTL._FMwebp_.jpg', title:'DEATHLOOP'},
    {img:'https://m.media-amazon.com/images/I/61wR96zk4pL._FMwebp_.jpg', title:'Caverns of Mars'},
    {img:'https://m.media-amazon.com/images/I/41pYAQ5RxkL._FMwebp_.jpg', title:'Orten was the Case'},
    {img:'https://m.media-amazon.com/images/I/41VQ+VCjxgL._FMwebp_.jpg', title:'The Dungeon of Naheulbeuk: The Amulet of Chaos'},
    {img:'https://m.media-amazon.com/images/I/61zvv2QFcOL._FMwebp_.jpg', title:'Black Widow: Recharged'},
    {img:'https://m.media-amazon.com/images/I/41Aw5rnzrsL._FMwebp_.jpg', title:"Q.U.B.E: Director's Cut"},
    {img:'https://m.media-amazon.com/images/I/61zvv2QFcOL._FMwebp_.jpg', title:'Behind the Frame: The Finest Scenery'},
  ];

  const groupedCards = [];
  for (let i = 0; i < infoCards.length; i += 4) {
    groupedCards.push(infoCards.slice(i, i + 4));
  }

  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
        setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  return (
    <div className='flex items-center relative mb-7'>
        <button onClick={handlePrev} disabled={scrollPosition != maxScroll}>
            <CaretLeft 
            size={32}
            weight="bold" 
            className={`${scrollPosition === maxScroll ? 'cursor-pointer' : 'opacity-60 cursor-no-drop' } -mt-8 text-white absolute -left-10 `} />
        </button>
        <div ref={carouselRef} className='flex transition-all scroll-smooth snap-mandatory gap-4 snap-x overflow-hidden w-full m-auto max-w-[1700px]'>
                {groupedCards.map((group, groupIndex) => (
                    <div key={groupIndex} className='w-full gap-4 min-w-full snap-center h-full flex'>
                    {group.map((info, cardIndex) => (
                        <Cards key={cardIndex} props={info} />
                    ))}
                    </div>
                ))}
        </div>
        <button onClick={handleNext} disabled={scrollPosition != 0}>
            <CaretRight 
            size={32} 
            weight="bold" 
            className={` ${scrollPosition === 0 ? 'cursor-pointer' : 'opacity-60 cursor-no-drop'}  -mt-8 text-white absolute -right-10 `} />
        </button>
    </div>
  );
};

export default Carousel;
