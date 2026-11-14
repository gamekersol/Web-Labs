
function Header(){
    return(
        <header className="space-y-3">
        <h1 className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-4xl font-bold text-transparent">Roman Kaminskiy</h1>
        <p className="font-medium text-indigo-600">Flutter &amp; Unity Developer · Cybersecurity Student</p>
        <p className="text-slate-600">Cybersecurity student at Lviv Polytechnic who builds mobile apps and 2D games. I take ideas to working prototypes in Flutter and Unity, and write lower-level code in C++ and Odin.</p>
        <section>
            <h2 className="sr-only">Contact Information</h2>
            <ul className="flex flex-wrap gap-2 text-sm [&_li]:rounded-full [&_li]:bg-indigo-50 [&_li]:px-3 [&_li]:py-1 [&_a]:font-medium [&_a]:text-indigo-700 [&_a]:hover:underline">
            <li>Phone: <a href="tel:+380960284438">+380 960 284 438</a></li>
            <li>Email: <a href="mailto:kam.roma.26@gmail.com">kam.roma.26@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/gamekersol" rel="noopener">gamekersol</a></li>
            </ul>
        </section>
        </header>
    )
}

export default Header
