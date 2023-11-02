import React from 'react'

function Contact() {
    return (
        <div className='contact' id='contact'>
            <h1>Contact</h1>

            <form action="" className='contact_form'>

                <label htmlFor="name">Name</label>
                <input type="text" id='name' />



                <label htmlFor="email">Email</label>
                <input type="text" id='email' />



                <label htmlFor="">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" />


            </form>
        </div>
    )
}

export default Contact