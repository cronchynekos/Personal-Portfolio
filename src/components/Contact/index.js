import './index.scss'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'


const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_ndjy673',
                'template_zz27wxh',
                form.current,
                'WT_sh37QCBKzOGyao'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    
    return (
        <>
            <div className="container contact-page">
                
                <div className='text-zone'>
                    <h1>
                        Contact
                    </h1>
                    <p>
                        Feel free to send me a message!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                    type='text' 
                                    name='from_name' 
                                    placeholder='Name' 
                                    required
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                    type='email' 
                                    name='email_id' 
                                    placeholder='Email' 
                                    required
                                    />
                                </li>
                                <li>
                                    <input 
                                    placeholder='Subject' 
                                    type="text" 
                                    name="subject"
                                    required 
                                    />
                                </li>
                                <li>
                                    <textarea 
                                    placeholder='Message' 
                                    text="Message" 
                                    name="message"
                                    required 
                                    />
                                </li>
                                <li>
                                    <input 
                                    type="submit" 
                                    className="flat-button" 
                                    value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* <div className="info-map">
                    Nathanael Kim
                    <br/>
                    California, United States,
                    <br />
                    2404 Nutwood Ave
                    <br />
                    Fullerton
                    <br />
                    nateykim@gmail.com
                    <br />
                    Jichu.nyk#7370
                    <br />
                </div> */}
                <div className="map-wrap">
                    <MapContainer center={[33.8768860, -117.8887704]} zoom={10.5}>
                        <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.8768860, -117.8887704]}>
                            <Popup>
                            Home Sweet Home!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                {/* <div className ='BGFill'></div> */}
            </div>
        </>
    )
}
export default Contact