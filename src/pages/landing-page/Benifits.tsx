// __________________|| STYLES START ||_______________

const borderAnimationWrapper = "max-w-[460px] mx-auto p-4 bg-white relative border shadow-xl shadow-gray-950/5   dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]   [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2]"

const borderAnimationParent = "glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"

const borderAnimationChild = "absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"

// __________________|| STYLES END ||_______________
// _________________________________________________


// _________|| BENIFITS DATA START ||_____________

const BenefitsData = [
    {
        src: "/images/genrevenue.svg",
        title: "Generate revenue",
        description: "The traffic we deliver is 100% real and has the chance to convert into sales, leads and sign ups."
    },
    {
        src: "/images/genrevenue.svg",
        title: "Generate revenue",
        description: "The traffic we deliver is 100% real and has the chance to convert into sales, leads and sign ups."
    },
    {
        src: "/images/genrevenue.svg",
        title: "Generate revenue",
        description: "The traffic we deliver is 100% real and has the chance to convert into sales, leads and sign ups."
    },
    {
        src: "/images/genrevenue.svg",
        title: "Generate revenue",
        description: "The traffic we deliver is 100% real and has the chance to convert into sales, leads and sign ups."
    },
    {
        src: "/images/genrevenue.svg",
        title: "Generate revenue",
        description: "The traffic we deliver is 100% real and has the chance to convert into sales, leads and sign ups."
    },
    {
        src: "/images/genrevenue.svg",
        title: "Generate revenue",
        description: "The traffic we deliver is 100% real and has the chance to convert into sales, leads and sign ups."
    },
]


export default function Benifits() {
    return (
        <section className="px-4 overflow-hidden" id="benifits">

            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold capitalize">Benefits of our <span className="text-purple-500"> Real Visitors </span> </h2>
                <p className="max-w-2xl mx-auto mt-1">Generate sales and increase engagement with high quality traffic that is demographically targeted.</p>
            </div>

            <div className=" relative mt-8 sm:mt-12 max-w-7xl mb-12 mx-auto">
                {/* BACKGROUND STYLING */}
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>
                <div className="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-primary-300 dark:bg-white/10 mx-auto blur-3xl"></div>

                {/* DATA MAPPING HERE */}
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
                    {BenefitsData.map((data => (
                        <div style={{ borderRadius: "8px" }} className={borderAnimationWrapper}>
                            <div className="flex flex-col-reverse sm:flex-row items-start gap-2 xl:gap-6 ">
                                <div>
                                    <p className="font-semibold mb-1 text-lg capitalize">{data.title}</p>
                                    <p className="text-gray-300">{data.description}</p>
                                </div>
                                <img src={data.src} className="max-w-20 " />
                            </div>
                            <span className={borderAnimationParent}>
                                <span className={borderAnimationChild} />
                            </span>
                        </div>

                    )))
                    }
                </div>
            </div>
        </section >

    )
}
