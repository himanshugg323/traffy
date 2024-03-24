import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const DataInclude = [
    {
        title: "Real Visitors Subscription",
        description: "We forward you real visitors from our large network of websites and domains that are not currently being used, but still get lots of quality traffic.",
        src: "/images/girlsitting.svg"
    },
    {
        title: "Helpful Insights & Trackin",
        description: "Track the visitors we send you in our dashboard to see exactly where they are coming from. Get insights into improve your websites speed.",
        src: "/images/barchart.svg"
    },
    {
        title: "Advanced Targeting",
        description: "We only forward you visitors from the countries, devices, and internet browsers that you choose. Targeting is included on all of our plans at no extra charge.",
        src: "/images/buildinglocation.svg"
    },
    {
        title: "Free 5 Day Trial",
        description: "You will receive 5 free days of visitors before we ever charge your card. This lets you try our service without spending any money. Cancel at any time.",
        src: "/images/star.svg"
    },
]

export default function Included() {
    return (
        <section className='px-4 py-12 max-w-6xl mx-auto'>
            <h3 className='text-2xl font-semibold sm:text-3xl mb-12 text-center'>What's <span className='text-purple-500'> Included</span> </h3>

            <div className='grid min-[800px]:grid-cols-2 gap-4 sm:gap-8'>
                {
                    DataInclude.map((data, index) => (
                        <div key={index} className='flex p-4 sm:pr-0 sm:pb-0 sm:pl-4 sm:pt-4  shadow-sm dark:shadow-gray-500 border rounded-sm border-purple-500 bg-white dark:bg-zinc-900'>
                            <div>
                                <p className='font-semibold text-lg capitalize'>{data.title}</p>
                                <p className='dark:text-gray-300 text-gray-500 mt-1 max-w-sm'>{data.description}</p>
                            </div>
                            <img src={data.src} alt="traffy" className='hidden sm:block max-h-[180px] max-w-[180px] ml-auto mt-auto' />
                        </div>
                    ))
                }
            </div>

            <div className=" text-center flex pt-12  items-center justify-center flex-col">
                <p className="text-2xl font-semibold sm:text-3xl">Drive huge amounts of visitors</p>
                <p className="mb-8 mt-1">Start your first campaign to reach new audience!</p>
                <Link to="/" className={cn(buttonVariants({ variant: "default", className: "text-[17px] capitalize" }))}>Started your first campaign now!</Link>
            </div>

        </section>

    )
}
