import React, { useState } from 'react'
import './Communi.css'
import white_arrow from '../../assets/white-arrow.png'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Communi = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "985e0eb4-ba98-49c7-a7ac-e7228948957e")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        })

        const data = await response.json();

        if (data.success) {
            setResult("Form submitted successfully");
            event.target.reset();
        } else {
            console.log('error', data);
            setResult(data.message);
        }

    }


    return (
        <div className='communi'>
            <div className="communi-col">
                <h1>Send us a message <img src={msg_icon} alt="" /></h1>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important tous as we strive to provide exceptional service to our university community</p>

                <ul>
                    <li><img src={mail_icon} alt="" />sukantobarman87@gmail.com</li>
                    <li><img src={phone_icon} alt="" />01786961347</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States </li>
                </ul>
            </div>
            <div className="communi-col">
                <form onSubmit={onSubmit} action="">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter your mobile number' required />
                    <label htmlFor="">Write your message</label>
                    <textarea name="message" rows="6" required></textarea>
                    <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt="" /></button>
                </form>
            </div>
        </div>
    )
}

export default Communi
