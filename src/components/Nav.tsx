const Nav = () => {
    return (
        <div className=' py-2'>
            <div className="flex justify-between items-center container mx-auto sticky top-0 z-50 ">

                <img src="/src/assets/logo-text.png" alt="Logo" />
                <nav className="flex gap-4">
                    <ul><a href="">Home</a></ul>
                    <ul><a href="">Technologies</a></ul>
                    <ul><a href="">Projects</a></ul>
                    <ul><a href="">About</a></ul>
                    <ul><a href="">Contact</a></ul>
                </nav>
                <div className="flex justify-center items-center gap-2">
                    <button className="btn btn-ghost">Sign In</button>
                    <button className="btn btn-active btn-secondary">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
