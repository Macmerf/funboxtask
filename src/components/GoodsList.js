import React from 'react'
import '../index.css'
import Good from './Good'
import foodcart from './data'
    class GoodList extends React.Component{
        render(){
            return <div className='app'>
                <h1>Ты сегодня покормил кота?</h1>
                <div className ='Goodlist' >
                {foodcart.map((good,index)=>
                <Good 
                    textAfter ={good.textAfter}
                    hovelem={good.hovelem}
                    shape={good.shape}
                    key ={index}
                    taste ={good.taste}
                    qty ={good.qty} 
                    gifts={good.gifts}
                    weight={good.weight}
                    numbf ={good.numb[0]}
                    numbs ={good.numb[1]}
                    numbt ={good.numb[2]}
                />)
                }
                </div>
            </div>
        }
    }

export default GoodList;