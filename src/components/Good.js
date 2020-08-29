import React from 'react'
import  Photo from '../img/Photo.png'
import '../index.css'
//import foodcart from './data'
export default class Good extends React.Component{
    constructor(props){
        super(props)
        this.state={
            shape:this.props.shape,
            hovelem:this.props.hovelem,
        }
        this.buyElem=this.buyElem.bind(this)
        this.actElem=this.actElem.bind(this)
    }
    
    buyElem(){
        if(this.state.shape ==='default'){
            this.setState({shape:'enable'})
        }else if(this.state.shape ==='enable'){
            this.setState({shape:'default'})
            this.setState({hovelem:this.props.hovelem})
        }
    }

    actElem(){
        if(this.state.shape ==='enable'){
            this.setState({hovelem:'Котэ не одобряет?'}) 
        }
    }

    render(){
    return(
        <div className = 'good' >
        <div className={this.state.shape} onClick ={this.buyElem} onMouseLeave ={this.actElem}>
            <p className='foodfirst' id = {this.state.shape} >{this.state.hovelem}</p>
            <h2 className='foodsecond'>Нямушка</h2>
            <h3 className='foodthird'>{this.props.taste}</h3>
            <p className='foodforth'><strong>{this.props.numbf}</strong>{this.props.qty}</p>
            <p className='foodfifth'><strong>{this.props.numbs}</strong>{this.props.gifts}</p>
            <img src ={Photo} alt='Cat' className='foodsixth'/>
            <div  className='foodseventh'><h4><span>{this.props.numbt}</span><br/>{this.props.weight}</h4></div>
        </div>
        <p>Головы щучьи с чесноком да свежайшая сёмгушка.</p>
        </div>
        )
}
}