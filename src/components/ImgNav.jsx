import React from 'react'
import { Link } from 'react-router-dom'
function ImgNav(props) {

    let data_local = [
        {
            id: '1',
            src: "https://i.natgeofe.com/n/857a969e-9fe6-4b5e-959f-157ad9fdf7f9/reflection-salar-de-uyuni-bolivia_2x1.jpg",
            title: "Bolivian Salt Lakes",
            desc: "Bolivia’s Salar de Uyuni is considered one of the most extreme and remarkable vistas in all of South America, if not Earth. Stretching more than 4,050 square miles of the Altiplano, it is the world’s largest salt flat, left behind by prehistoric lakes evaporated long ago. Here, a thick crust of salt extends to the horizon, covered by quilted, polygonal patterns of salt rising from the ground. National Geoghraphic"

        },

        {
            id: '2',
            src: "https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7-1200-80.jpg",
            title: "Aurora Northern Lights",
            desc: "The northern lights, also known as the aurora borealis, are a natural phenomenon that can be seen in the night sky in wintertime in the grand north. Visitors flock from all over the world to northern latitude countries, such as Norway, to see them. But the stars need to align, so to speak, for you to be able to witness such a beautiful phenomenon - Nordic Visitor"


        },
        {
            id:"3",
            src:"https://i.redd.it/siho9e260ld91.jpg",
            title:"Pillers of Creation",
            desc:"Pillars of Creation is a photograph taken by the Hubble Space Telescope of elephant trunks of interstellar gas and dust in the Eagle Nebula, in the Serpens constellation, some 6,500–7,000 light-years (2,000–2,100 pc; 61–66 Em) from Earth. - Wikipedia",
         },

         {
            id:"4",
            src:"https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_3x2.jpg",
            title:"Taj Mahal",
            desc:"The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD. - whc.unesco.org",
         },

         {
            id:"5",
            src:"https://theamazingraces.com/wp-content/uploads/2019/06/positano-vertical-city.jpg",
            title:"positano vertical city",
            desc:"Positano stands to the west of the fascinating natural terrace on the Tyrrhenian Sea that is the Amalfi Coast, a UNESCO World Heritage Site. Here, the typical Mediterranean landscape of southern Italy reigns supreme, with white houses sloping down towards the sea and splendid beaches - Italia.com",
         },

         {
            id:"6",
            src:"https://static.boredpanda.com/blog/wp-content/uploads/2016/10/emerald-tomb-ceiling-shah-cheragh-shiraz-iran-3.jpg",
            title:"Green Mosque",
            desc:"Shah Cheragh is a funerary monument and mosque in Shiraz, Iran. It translates to “King of the Light” and it’s easy to understand why. The jaw-dropping interior of this structure has millions of tiny mirror shards which bounce the light in every direction.",
         },

  
    ];


console.log(data_local)

  return (
    <div className='flex overflow-x-scroll self-center w-[100%] pb-5 space-x-3 p-2 max-md:static absolute bottom-0 z-10  max-md:bg-slate-700 bg-gray-900 '>
                {data_local.map((link, index) => {
                    if (link.id === props.id) return
                    return <Link key={index} to="/about" state={{ data: link, allData: data_local }} >
                        <img src={link.src} alt="" className='w-[150px] h-[100px] min-w-[150px]' />
                    </Link>
                })

                }
            </div>
  )
}

export default ImgNav
