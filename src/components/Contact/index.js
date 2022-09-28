import './index.scss'

const Contact = () => {
    
    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        Contact
                    </h1>
                    <p>
                        contact
                    </p>
                    <div className='contact-form'>
                        <form>
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
                                    text="text" 
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
            </div>
        </>
    )
}
export default Contact