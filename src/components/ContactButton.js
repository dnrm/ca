import React from 'react'

const ContactButton = () => {
    return (
        <div className="fixed bottom-0 right-0 p-4 md:p-6">
            <div className="icons bg-green-400 flex justify-center items-center rounded-full h-20 w-20 shadow-2xl cursor-pointer">
                <a href="https://api.whatsapp.com/send?phone=5218121285867&text=">
                    <i class="fab fa-whatsapp text-5xl text-white"></i>
                </a>
            </div>
        </div>
    )
}

export default ContactButton