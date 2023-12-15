import React from 'react'
import magnify from '../assets/magnify.png'
import Cards from './Cards'
import BannerCarousel from './carousel'

const SectionMobile02 = () => {

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

  return (
    <div className='w-full mt-20 m-auto max-w-[1600px] '>
    <div className='flex flex-wrap pt-12 items-center justify-between px-6'>
        <div className='flex gap-2 text-xs py-5 relative whitespace-nowrap'>
            <button className='hover:bg-opacity-20 hover:bg-white py-1 px-3 h-9 rounded-full bg-opacity-20 bg-white text-white font-bold'>Todos</button>
            <button className='hover:bg-opacity-20 font-semibold hover:bg-white py-1 px-3 h-9 rounded-full text-[#C2BCD3]'>Jogos gratuitos</button>
            <button className='hover:bg-opacity-20 font-semibold hover:bg-white py-1 px-3 h-9 rounded-full text-[#C2BCD3]'>Mais benefícios</button>
        </div>
        <div className='w-[404px] mb-3 flex items-center rounded-full relative h-[35px] focus:bg-[#3B3646] border-[1px] border-white overflow-hidden'>
            <img src={magnify} alt="" className='px-4 absolute' />
            <input type="text" placeholder='Pesquisar no Prime Gaming' className='focus:bg-[#ffffff22] font-normal text-xs pb-1 text-[#C2BCD3] pl-12 w-full h-full bg-transparent outline-none' />
        </div>
    </div>
    <h1 className='text-white py-2 font-semibold text-[18px] px-6 leading-5'>Jogos completos para PC, <span className='font-bold'>grátis com Prime Gaming</span></h1>
        <div className='w-full flex p-1 gap-2 overflow-auto Noscroll pl-6'>
            {infoCards.map((info,index)=>
                <Cards key={index} props={info}/>
            )}
        </div>
        <h1 className='text-white px-6 py-6 font-semibold text-[22px] border-t-[1px] border-[#c2bcd35b]'>Desafios diários, <span className='font-bold'>uma exclusividade Prime Gaming</span></h1>
            <div className='
             grid
            max-md:grid-cols-2
             max-[850px]:grid-cols-3
            px-6 gap-2'>
                {infoCards.map((info,index)=>
                <Cards key={index} props={info}/>
                )}
            </div>
    </div>
  )
}

export default SectionMobile02