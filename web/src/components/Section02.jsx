import React from 'react'
import magnify from '../assets/magnify.png'
import Cards from './Cards'
import BannerCarousel from './carousel'

const Section02 = () => {

  const infoCards = [
    {img:'https://m.media-amazon.com/images/I/41LOK80rwJL._FMwebp_.jpg', title:'Star Wars: Knights of the Old Republic'},
    {img:'https://m.media-amazon.com/images/I/61lcurSACTL._FMwebp_.jpg', title:'DEATHLOOP'},
    {img:'https://m.media-amazon.com/images/I/61wR96zk4pL._FMwebp_.jpg', title:'Caverns of Mars'},
    {img:'https://m.media-amazon.com/images/I/41pYAQ5RxkL._FMwebp_.jpg', title:'Orten was the Case'},
    {img:'https://m.media-amazon.com/images/I/41VQ+VCjxgL._FMwebp_.jpg', title:'The Dungeon of Naheulbeuk: The Amulet of Chaos'},
    {img:'https://m.media-amazon.com/images/I/61zvv2QFcOL._FMwebp_.jpg', title:'Black Widow: Recharged'},
    {img:'https://m.media-amazon.com/images/I/41Aw5rnzrsL._FMwebp_.jpg', title:"Q.U.B.E: Director's Cut"},
    {img:'https://m.media-amazon.com/images/I/61zvv2QFcOL._FMwebp_.jpg', title:'Behind the Frame: The Finest Scenery'},
  ]

  return (
    <div className='w-full px-[78px] max-lg:px-[40px] m-auto max-w-[1600px]'>
    <div className='flex pt-6 items-center justify-between '>
        <div className='flex gap-5 text-lg max-lg:text-base'>
            <button className='hover:bg-opacity-20 hover:bg-white py-[13px] px-5 rounded-full bg-opacity-20 bg-white text-white font-bold'>Todos</button>
            <button className='hover:bg-opacity-20 font-semibold hover:bg-white p-3 px-5 rounded-full text-[#C2BCD3]'>Jogos grátis</button>
            <button className='hover:bg-opacity-20 font-semibold hover:bg-white p-3 px-5 rounded-full text-[#C2BCD3]'>Mais benefícios</button>
        </div>
        <div className='w-[404px] flex items-center rounded-full relative h-[45px] focus:bg-[#3B3646] border-[1px] border-white overflow-hidden'>
            <img src={magnify} alt="" className='px-4 absolute' />
            <input type="text" placeholder='Pesquisar no Prime Gaming' className='focus:bg-[#ffffff22] font-normal text-lg text-[#C2BCD3] pl-12 w-full h-full bg-transparent outline-none' />
        </div>
    </div>
    <h1 className='text-white py-[13px] font-semibold text-[22px]'>Um novo jogo a cada semana, grátis com Amazon Prime</h1>
    <BannerCarousel />
    <h1 className='text-white py-6 font-semibold text-[22px] border-t-[1px] border-[#c2bcd35b]'>Desafios diários, <span className='font-bold'>uma exclusividade Prime Gaming</span></h1>
      <div className='grid
      max-lg:grid-cols-3
             grid-cols-4 gap-2'>
        {infoCards.map((info,index)=>
          <Cards key={index} props={info}/>
        )}
      </div>
    </div>
  )
}

export default Section02