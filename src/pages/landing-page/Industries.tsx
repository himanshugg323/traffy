import { Link } from 'react-router-dom'
import { Ecommerce, Finance, LeadGenration, MobileApps, MobileUtilities, Software } from '../../assets/icons/Industries'

const icons = [
    { icon: <MobileUtilities />, title: "Mobile Utilities" },
    { icon: <Software />, title: "Software" },
    { icon: <LeadGenration />, title: "Lead Genration" },
    { icon: <Ecommerce />, title: "Ecoomerce" },
    { icon: <MobileApps />, title: "Mobile Apps" },
    { icon: <Finance />, title: "Finance" },
]
export default function Industries() {
    return (
        <section className='px-4 py-12 sm:py-24 max-w-6xl mx-auto'>
            <h3 className='text-2xl font-semibold sm:text-3xl mb-12 text-center max-w-[560px] mx-auto'>
                <span className='text-purple-500'>One billion </span>
                monthly audience for industry-focused campaigns
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-between max-w-3xl gap-4 mx-auto text-center'>
                {icons.map((icon, index) => {
                    return (
                        <div key={index} className='p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 duration-200'>
                            {icon.icon}
                            <p className='mt-1'>{icon.title}</p>
                        </div>

                    )
                })}
            </div>

            <div className='mt-10 text-center'>
                <p className='text-xl mb-2'>Reach to new audience with us!</p>
                <Link to="/" className='px-8 py-2 rounded-md bg-purple-600 text-white mx-auto block max-w-max'>Join Now</Link>
            </div>
        </section>
    )
}

