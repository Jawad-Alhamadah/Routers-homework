import React from 'react'
import { Link } from 'react-router-dom';
import ImgNav from '../components/ImgNav';
function Home() {
    let data = [
        {
            id: '1',
            src: "https://i.natgeofe.com/n/857a969e-9fe6-4b5e-959f-157ad9fdf7f9/reflection-salar-de-uyuni-bolivia_2x1.jpg",
            title: "Bolivian Salt Lakes",
            desc: "Bolivia’s Salar de Uyuni is considered one of the most extreme and remarkable vistas in all of South America, if not Earth. Stretching more than 4,050 square miles of the Altiplano, it is the world’s largest salt flat, left behind by prehistoric lakes evaporated long ago. Here, a thick crust of salt extends to the horizon, covered by quilted, polygonal patterns of salt rising from the ground. National Geoghraphic"

        },
  
    ];
    return (

        <div className=" w-screen h-screen  max-md:bg-top bg-center p-2 max-md:justify-start  max-md:grid flex justify-center items-center flex-col">

            <img src={data[0].src} alt="" className='   max-md:static absolute -z-10 w-[100%]' />
            <div className='p-2 flex flex-col from-transparent max-md:via-slate-950/0 via-slate-950/70  to-transparent bg-gradient-to-r '>
                <h1 className='text-white text-3xl mb-2 max-md:text-start text-center '>{data[0].title}</h1>
                <p className='text-sm text-white w-[70%] self-center max-md:w-[95%] max-md:self-start'>{data[0].desc}</p>
            </div>
            <ImgNav id={data[0].id}></ImgNav>

           
        </div>

    )
}

export default Home
