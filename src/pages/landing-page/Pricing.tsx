import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const data = [
    {
        planName: "Huddle",
        dailyVisitors: 500,
        monthlyVisitors: "15",
        price: 15,
    },
    {
        planName: "Crowd",
        dailyVisitors: '1,000',
        monthlyVisitors: "30",
        price: 28,
    },
    {
        planName: "Club",
        dailyVisitors: '1,500',
        monthlyVisitors: "45",
        price: 40,
    },
    {
        planName: "Festival",
        dailyVisitors: '2,000',
        monthlyVisitors: "60",
        price: 50,
    },
    {
        planName: "Community",
        dailyVisitors: '3,000',
        monthlyVisitors: "90",
        price: 70,
    },
    {
        planName: "Metropolitan",
        dailyVisitors: '5,000',
        monthlyVisitors: "150",
        price: 110,
    },
    {
        planName: "Global",
        dailyVisitors: '7,500',
        monthlyVisitors: "225",
        price: 160,
    },
    {
        planName: "Cosmos",
        dailyVisitors: '10,000',
        monthlyVisitors: "300",
        price: 200,
    },
    {
        planName: "Universe",
        dailyVisitors: '20,000',
        monthlyVisitors: "600",
        price: 400,
    },

]

export default function Pricing() {
    return (
        <section id="pricing" className='px-4 pb-24 max-w-6xl mx-auto'>

            <div className='text-center'>
                <h3 className='text-2xl capitalize font-semibold sm:text-3xl mb-4 text-center'>
                    Start <span className='text-primary'> First Campaign </span>  with us
                </h3>
                <p className='mt-3'>Start with a free 5 day trial. Cancel at anytime!</p>
                <p>Monthly subscription on all our plans.</p>
            </div>

            <div className=' gap-4 sm:gap-8 mt-12 sm:bg-zinc-800 px-6 py-8 rounded-md max-w-5xl mx-auto'>
                {
                    data.map((data, index) => (
                        <div key={index} className='flex flex-col sm:flex-row items-start justify-between w-full border px-4 py-6 rounded-lg sm:rounded-none sm:border-y-0 sm:border-x-0 sm:border-b pb-4 mb-4 border-zinc-600 bg-zinc-800 sm:bg-transparent'>
                            <div className='text-center sm:text-start w-full '>
                                <p className='font-semibold text-lg capitalize'>{data.planName} Plan</p>
                                <p className='text-gray-300 mt-1 text-sm max-w-sm'>{data.dailyVisitors} visitors per day</p>
                            </div>
                            <div className='flex flex-wrap items-center justify-around my-4 sm:mt-0 gap-4 w-full '>
                                <p className='text-gray-300 mt-1 max-w-sm text-lg font-medium'>{data.monthlyVisitors}K <span className='text-gray-500'> Visitors</span> </p>
                                <p className='text-gray-300 mt-1 max-w-sm text-lg font-medium'>${data.price}/ <span className='text-gray-500'>mo</span></p>
                            </div>
                            <Link to="/" className={cn(buttonVariants({ variant: "default", className: "w-full sm:w-auto" }))}>Start Now!</Link>
                        </div>
                    ))
                }
            </div>

        </section>

    )
}
