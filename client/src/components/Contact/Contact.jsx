import { useState } from "react";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://portfolio-flmi.onrender.com/api/contact",
                formData
            );

            alert(res.data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            alert("Something went wrong");
            console.log(error);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 px-6"
        >
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-center text-5xl lg:text-6xl font-bold mb-16">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>

                <div
                    className="
            max-w-3xl
            mx-auto
            bg-[#09122c]
            border border-cyan-500/20
            rounded-3xl
            p-8
            hover:border-cyan-400
            hover:shadow-[0_0_25px_#00e5ff]
            transition-all duration-300
        "
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block mb-2 text-gray-300">Name</label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="
                                w-full
                                bg-[#0b1736]
                                border border-cyan-500/30
                                rounded-lg
                                px-4 py-3 
                                text-white
                                outline-none
                                focus:border-cyan-400
                            "
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-gray-300">Email</label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="
                  w-full
                  bg-[#0b1736]
                  border border-cyan-500/30
                  rounded-lg
                  px-4 py-3
                  text-white
                  outline-none
                  focus:border-cyan-400
                "
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-2 text-gray-300">Message</label>

                            <textarea
                                rows="6"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                required
                                className="
                  w-full
                  bg-[#0b1736]
                  border border-cyan-500/30
                  rounded-lg
                  px-4 py-3
                  text-white
                  outline-none
                  resize-none
                  focus:border-cyan-400
                "
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="
                px-8 py-3
                bg-cyan-500
                text-black
                font-semibold
                rounded-full
                hover:bg-cyan-400
                transition
            "
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;