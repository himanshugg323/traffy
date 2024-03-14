import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Layout from "../tos/Layout";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from 'react';
import { CheckCircleIcon } from 'lucide-react';

const schema = z.object({
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    email: z.string().email('Invalid email address').min(1, { message: 'Email is required' }),
    phone: z.string().min(1, { message: 'Phone is required' }).min(10, 'Phone number must be at least 10 characters'),
    message: z.string().min(1, { message: 'Message is required' }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {

    const [submitted, setSubmitted] = useState(false); // Added state for tracking submission
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
    });


    const onSubmit = async (data: FormData) => {
        console.log(data);
        async () => {
            await fetch("https://formsubmit.co/himanshuggg323@gmail.com", { method: "post" }).then((e) => {
                if (e.status === 200) {
                    reset();
                    setSubmitted(true);
                }
            }).catch((e) => console.log("Error", e))
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <Layout>
            <div className="max-w-7xl mx-auto my-4 px-4 lg:px-20">
                {submitted ? <div className='bg-purple-950 p-4 flex items-center justify-center flex-col rounded-xl mb-12 max-w-md mx-auto mt-4' >
                    <CheckCircleIcon className='w-12 h-12' />
                    <p className='text-lg capitalize font-medium mt-2'>Form submitted successfully</p>
                    <p className='capitalize'>Our team will contact you within 24hrs</p>
                </div> : <form
                    action="https://formsubmit.co/himanshuggg323@gmail.com"
                    method="POST"
                    // onSubmit={handleSubmit(onSubmit)}
                    className="w-full p-8 my-4 lg:w-9/12 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <div>
                            <Input type="text" placeholder="First Name*" {...register('firstName')} />
                            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <Input type="text" placeholder="Last Name*" {...register('lastName')} />
                            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                        </div>
                        <div>
                            <Input type="email" placeholder="Email*" {...register('email')} />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div>
                            <Input type="tel" placeholder="Phone*" {...register('phone')} />
                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                        </div>
                    </div>
                    <div className="my-4">
                        <Textarea placeholder="Message*" className="w-full h-32" {...register('message')}></Textarea>
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
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
            </div>
        </Layout>
    )
}
