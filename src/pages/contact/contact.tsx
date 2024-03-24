import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Layout from "../tos/Layout";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from 'react';
import { CheckCircleIcon, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom";

export default function Contact() {

    const [submitted] = useState(false);

    const [state, handleSubmit] = useForm("mbjnavkd");
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            {state.succeeded ? <div className="p-6 shadow rounded-lg sm:mt-12 max-w-sm mx-auto border text-center">
                <CheckCircle2 className="fill-green-500 text-white w-12 h-12 mx-auto" />
                <p className="text-lg mt-4">Form Submitted Sucessfully</p>
                <Link to="/" className="bg-purple-600 text-white rounded-md px-6 py-2 mt-5 block mx-auto">Home</Link>
            </div> :
                <div className="max-w-7xl mx-auto my-4 px-4 lg:px-20">
                    {submitted ? <div className='bg-purple-950 p-4 flex items-center justify-center flex-col rounded-xl mb-12 max-w-md mx-auto mt-4' >
                        <CheckCircleIcon className='w-12 h-12' />
                        <p className='text-lg capitalize font-medium mt-2'>Form submitted successfully</p>
                        <p className='capitalize'>Our team will contact you within 24hrs</p>
                    </div> : <form
                        method="POST"
                        onSubmit={handleSubmit}
                        className="w-full p-8 my-4 lg:w-9/12 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <div>
                                <Input required id="firstName" name="firstName" type="text" placeholder="First Name*" />
                                <ValidationError
                                    prefix="firstName"
                                    field="firstName"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <Input required type="text" name="lastName" id="lastName" placeholder="Last Name*" />
                                <ValidationError
                                    prefix="lastName"
                                    field="lastName"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <Input required type="email" id="lastName" name="lastName" placeholder="Email*" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <Input required type="tel" id="tel" name="tel" placeholder="Phone*" />
                                <ValidationError
                                    prefix="tel"
                                    field="tel"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <Textarea required placeholder="Message*" id="message" name="message" className="w-full h-32"></Textarea>
                            <ValidationError
                                prefix="message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <Button className="text-md">Send Message</Button>
                    </form>}
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-purple-950 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.</p>
                            <div className="flex my-4 gap-4">
                                <div className="text-2xl w-[20px] pt-1">
                                    <FaLocationDot />
                                </div>
                                <div className="w-full">
                                    <h2 className="text-2xl">Main Office</h2>
                                    <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                                </div>
                            </div>
                            <div className="flex my-4 gap-4">
                                <div className="w-[20px] pt-1.5 text-xl">
                                    <FaPhoneAlt />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-300">+91 9876543210</p>
                                </div>
                            </div>
                            <div className="flex my-4 gap-4">
                                <a href="/" target="_blank" className="text-2xl hover:text-purple-300">
                                    <FaFacebookSquare />
                                </a>
                                <a href="/" target="_blank" className="text-2xl hover:text-purple-300">
                                    <FaLinkedin />
                                </a>
                                <a href="/" target="_blank" className="text-2xl hover:text-purple-300">
                                    <FaSquareXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>}
        </Layout>
    )
}
