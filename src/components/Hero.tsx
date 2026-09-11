

const Hero = () => {
    return (
        <div className='flex justify-center items-center container mx-auto'>
            <div className=' max-w-[700px]'>
                <h2 className='font-extrabold text-5xl'>Build Your Ideal
                    Development Stack</h2>
                <p>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your
                    next project.</p>

                <div>
                    <button className="btn btn-secondary">Explore Technologies</button>
                    <button className="btn btn-outline">Learn More</button>
                </div>
            </div>
            <img className='h-[400px]' src="/src/assets/banner-stack.png" alt="" />
        </div>
    );
}

export default Hero;
