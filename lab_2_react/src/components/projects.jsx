
function Projects(){
    return(
    <section className="space-y-4 [&_article]:rounded-lg [&_article]:border [&_article]:p-4 [&_article]:transition [&_article]:hover:border-indigo-400 [&_article]:hover:shadow [&_h3]:font-semibold [&_a]:text-indigo-700 [&_a]:hover:underline [&_p]:text-slate-600">
      <h2>Projects</h2>
      <article>
        <h3><a href="https://github.com/gamekersol/Floating-Graden" rel="noopener">Floating Garden</a></h3>
        <p>Mobile MVP app written in Flutter (Dart).</p>
      </article>
      <article>
        <h3><a href="https://github.com/gamekersol/Gravity-Land" rel="noopener">Gravity Land</a></h3>
        <p>Physics-based 2D game made with Unity.</p>
      </article>
      <article>
        <h3><a href="https://jjfcompany.itch.io/problem-of-wealth" rel="noopener">Problem of Wealth</a></h3>
        <p>2D game for Android and browser, made with Unity.</p>
      </article>
    </section>
    )
}

export default Projects
