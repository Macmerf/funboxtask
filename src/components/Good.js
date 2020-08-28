import React from 'react'
import  Photo from '../img/Photo.png'
import '../index.css'
export default function Good({taste, qty,gifts,weight,shape,numbf,numbs}){
    return(
        <div className={shape}>
            <p className='foodfirst'>Сказочное заморское яство</p>
            <h2 className='foodsecond'>Нямушка</h2>
            <h3 className='foodthird'>{taste}</h3>
            <p className='foodforth'><strong>{numbf}</strong>{qty}</p>
            <p className='foodfifth'><strong>{numbs}</strong>{gifts}</p>
            <img src ={Photo} alt='Cat' className='foodsixth'/>
            <h4 className='foodseventh'>{weight}</h4>
        </div>
    )
}