import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_ocwx401", "template_cltnpxg", form.current, "ORVshdlW8xkYA2n5o")
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Email Sent!");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="space-y-8 bg-white p-8 shadow-lg    ">
            <h2 className="text-4xl font-semibold  border-l-4 border-[--text-highlight] text-[--text-primary] px-2">
                Reach Me
            </h2>
            <div className="grid grid-cols-2">
                <div className="space-y-4">
                    <div className="flex gap-2 items-center">
                        <FaGithub />
                        <a
                            target="_blank"
                            href="https://github.com/mmehedihasan05"
                            className="hover:font-medium hover:text-[--text-highlight]"
                        >
                            mmehedihasan05
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <IoLogoLinkedin />
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/mmehedihasan05/"
                            className="hover:font-medium hover:text-[--text-highlight]"
                        >
                            mmehedihasan05
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdEmail />
                        <a
                            href="mailto:mmehedi.hasan229@gmail.com"
                            className="hover:font-medium hover:text-[--text-highlight]"
                        >
                            mmehedi.hasan229@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdCall />
                        <a className="hover:font-medium hover:text-[--text-highlight]">
                            +8801991562818
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaLocationDot />
                        <a className="hover:font-medium hover:text-[--text-highlight]">
                            Chittagong, Bangladesh
                        </a>
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
                        <input
                            className=" shadow-md rounded-md px-4 py-2"
                            type="text"
                            name="user_name"
                            placeholder="Name"
                        />
                        <input
                            className=" shadow-md rounded-md px-4 py-2"
                            type="email"
                            name="user_email"
                            placeholder="Email"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className=" shadow-md rounded-md px-4 py-2"
                        />
                        <input
                            className=" shadow-md rounded-md px-4 py-2 btn btn-primary"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
