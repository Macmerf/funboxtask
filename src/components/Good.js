import React from 'react'
import  Photo from '../img/Photo.png'
import '../index.css'
export default class Good extends React.Component{
    constructor(props){
        super(props)
        this.buyElem=this.buyElem.bind(this)
        this.state={
            shape:this.props.shape,
            hovelem:this.props.hovelem,
            hovelemStyle: {color: '#666666', },
            consis:{
            def:<p className='textafter' style ={{ color: '#ffff'}}>Чего сидишь? Порадуй котэ, <span className='buyit' onClick ={this.buyElem} >
                купи</span><span style={{ color: '#1698d9'}}>.</span></p>,
            enb:<p className='textafter' style ={{ color: '#ffff'}} >{this.props.textAfter}</p>,
            dis:<p className='textafter' style ={{ color: '#ffff66'}}> Печалька, {this.props.taste} закончился.</p>
            }
        }
        
        this.actElem=this.actElem.bind(this)
        this.disAsctElem= this.disAsctElem.bind(this)
    }
    //функция на клик
    buyElem(){
        if(this.state.shape ==='default'){
            this.setState({shape:'enable'})
        }else if(this.state.shape ==='enable'){
            this.setState({shape:'default'})
            this.setState({hovelem:this.props.hovelem})
            this.setState({hovelemStyle:{color: '#666666'}})
        }
    }
    //функция при наведении
    actElem(){
        if(this.state.shape ==='enable'){
            this.setState({hovelem:'Котэ не одобряет?'}) 
            this.setState({hovelemStyle:{color: '#d91667'}})
        }
    }
    //возвращаяет состояние после наведения
    disAsctElem(){
        if(this.state.shape ==='enable'){
            this.setState({hovelem:this.props.hovelem}) 
        this.setState({hovelemStyle:{color: '#666666'}}) }
    }
    

    render(){
    return(
        <div className = 'good' >
        <div className={this.state.shape} 
                onClick ={this.buyElem} 
                onMouseEnter ={this.actElem}
                onMouseLeave ={this.disAsctElem}
                >
            <p className='foodfirst'
                style={this.state.hovelemStyle}
            >{this.state.hovelem}</p>
            <h2 className='foodsecond'>Нямушка</h2>
            <h3 className='foodthird'>{this.props.taste}</h3>
            <p className='foodforth'><strong>{this.props.numbf}</strong>{this.props.qty}</p>
            <p className='foodfifth'><strong>{this.props.numbs}</strong>{this.props.gifts}</p>
            <img src ={Photo} alt='Cat' className='foodsixth'/>
            <div  className='foodseventh'><h4><span>{this.props.numbt}</span><br/>{this.props.weight}</h4></div>
        </div>
            {this.state.shape ==='default' ? this.state.consis.def: this.state.shape ==='enable'? this.state.consis.enb: this.state.consis.dis}
        </div>
        )
}
}