import React from 'react'
import image from '../../images/Rome2.jpg';
import '../Card/Card.css';

import { FaMapMarkerAlt } from 'react-icons/fa';

function Card(props) {

    console.log(props)
    return (
        <div className='mainContainer'>

            <div className='img-container'>
                <img className='img' src={props.item.imageUrl} />
            </div>

            <div className='content'>
                <div className='location'>
                    <p className='name-city'><FaMapMarkerAlt className='icon' /> {props.item.location}</p>
                    <a href={props.item.googleMapsUrl}><p className='google'>View on Google Maps</p> </a>
                </div>
            
            <div className='info'>
                <h2 className='city'>{props.item.title}</h2>
            <h3> {props.item.startDate} - {props.item.endDate}</h3>
            <p className='para'>{props.item.description}</p>
            </div>
            </div>
            
        </div>
    )
}

export default Card
