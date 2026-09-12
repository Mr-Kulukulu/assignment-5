

const Hero = () => {
    return (
        <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Hero Content */}
                <div className="max-w-[700px] text-center md:text-left">
                    <h2 className="font-extrabold text-4xl sm:text-5xl mb-7">
                        Build Your Ideal{" "}
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="mt-5 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                        <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white border-none hover:scale-105 transition-transform duration-300">
                            Explore Technologies
                        </button>

                        <button className="btn btn-outline">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center">
                    <img
                        className="w-full max-w-[400px] h-auto"
                        src="/src/assets/banner-stack.png"
                        alt="Development stack"
                    />
                </div>

            </div>
        </div>
    );
}

export default Hero;
