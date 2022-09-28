import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'


const Contact = () => {

    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_zz27wxh',
                refForm.current,
                'xemcS10KHUKkZoDgZaser'
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
                        Feel free to contact me using email, discord or any of my social medias
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Name' 
                                    required 
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Email' 
                                    required 
                                    />
                                </li>
                                <li>
                                    <input 
                                    placeholder='Subject' 
                                    type="text" 
                                    name="subject" 
                                    required/>
                                </li>
                                <li>
                                    <textarea 
                                    placeholder='Message' 
                                    text="Message" 
                                    name="Message" 
                                    required/>
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
                <div className="info-map">
                    Nathanael Kim
                    <br/>
                    California, United States,
                    <br />
                    2404 Nutwood Ave
                    <br />
                    Fullerton
                    <br />
                    nateykim@gmail.com
                </div>
                <div className="map-wrap">
                    <MapContainer center={[33.8768860, -117.8887704]} zoom={11.5}>
                        <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.8768860, -117.8887704]}>
                            <Popup>
                            My apartment across <br /> from Cal State Fullerton
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}
export default Contact