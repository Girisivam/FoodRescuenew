import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Heart, Leaf, Menu, MoveUpRight, X } from 'lucide-react';

const navLinks = [
  { href: '#why', label: 'Why it matters' },
  { href: '#how', label: 'How it works' },
  { href: '#principles', label: 'Our approach' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#f5f2e8] text-[#243d32]">
      <div className="border-b border-[#d9d6c9] bg-[#e9e8da] px-5 py-2 text-center text-[11px] font-medium tracking-[.04em] text-[#496254]">
        A community effort to make good food go further.
      </div>
      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-16">
        <a href="#top" aria-label="FoodRescue home" className="group flex items-center gap-2.5" data-testid="link-home">
          <span className="grid size-9 place-items-center rounded-full bg-[#2e5844] text-[#f5f2e8] transition-transform duration-300 group-hover:rotate-[-8deg]">
            <Leaf size={18} strokeWidth={1.8} />
          </span>
          <span className="text-[18px] font-bold tracking-[-.055em]">food<span className="font-normal">rescue</span></span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} data-testid={`link-nav-${link.href.slice(1)}`} className="text-[13px] font-medium text-[#58675c] transition-colors hover:text-[#c35d45]">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#get-involved" className="hidden items-center gap-2 rounded-full bg-[#2e5844] px-5 py-3 text-[12px] font-semibold text-[#f8f5eb] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244936] md:inline-flex" data-testid="link-header-intro">
          Find your place <ArrowRight size={14} />
        </a>
        <button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center rounded-full border border-[#d9d6c9] md:hidden" data-testid="button-mobile-menu">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="absolute left-4 right-4 top-[calc(100%-4px)] rounded-2xl border border-[#dedbce] bg-[#f7f5ed] p-3 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-[#e9e8da]" data-testid={`link-mobile-${link.href.slice(1)}`}>{link.label}</a>
            ))}
            <a href="#get-involved" onClick={closeMenu} className="mt-1 flex items-center justify-between rounded-xl bg-[#2e5844] px-4 py-3 text-sm font-semibold text-[#f8f5eb]" data-testid="link-mobile-intro">Find your place <ArrowRight size={15} /></a>
          </nav>
        )}
      </header>

      <section id="top" className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-7 md:px-10 md:pb-24 md:pt-12 lg:grid-cols-[.94fr_1.06fr] lg:gap-14 lg:px-16 lg:pb-28">
        <div className="relative z-10 max-w-[600px]">
          <p className="eyebrow reveal mb-6 flex items-center gap-2 text-[#b65a43]"><span className="h-px w-7 bg-[#b65a43]" />Good food. Good neighbors.</p>
          <h1 className="serif reveal reveal-delay-1 text-[clamp(3.5rem,8vw,7.3rem)] leading-[.91] tracking-[-.065em] text-[#264535]">
            There’s more<br />to the table.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-[440px] text-[16px] leading-[1.75] text-[#58675c] md:text-[18px]">
            FoodRescue brings surplus food from local businesses to the community organizations that can put it to good use.
          </p>
          <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-5">
            <a href="#how" className="group inline-flex items-center gap-3 rounded-full bg-[#c35d45] px-6 py-4 text-[13px] font-semibold text-[#fff9ee] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a94d39]" data-testid="link-hero-how">
              See how it works <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="#why" className="text-[13px] font-semibold text-[#365642] underline decoration-[#b8c1b3] underline-offset-4 transition-colors hover:text-[#c35d45]" data-testid="link-hero-why">Why food rescue?</a>
          </div>
          <div className="mt-12 flex items-center gap-3 border-t border-[#d9d6c9] pt-5 text-[12px] text-[#6a756a]">
            <span className="grid size-8 place-items-center rounded-full bg-[#e7e5d8] text-[#466850]"><Heart size={15} /></span>
            <span>A practical way to care for people and place.</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[700px] lg:ml-auto">
          <div className="relative overflow-hidden rounded-[44%_44%_8px_8px] bg-[#d9c6a7]">
            <img src="/community-kitchen.jpg" alt="Neighbors sorting fresh produce together in a community kitchen" className="aspect-[1.03/1] w-full object-cover object-center md:aspect-[1.12/1]" data-testid="img-community-kitchen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#243d32]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-2 flex max-w-[255px] items-center gap-3 rounded-2xl border border-[#e3dfd1] bg-[#f7f5ed] px-4 py-3 shadow-[0_16px_45px_rgba(39,57,43,.12)] md:-left-8 md:bottom-8">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e8e6d8] text-[#42634c]"><Leaf size={18} /></span>
            <span className="text-[12px] leading-snug text-[#59685c]"><strong className="mb-0.5 block text-[13px] text-[#2d4737]">Rescue, together.</strong>Local surplus meets local need.</span>
          </div>
          <span className="serif absolute -right-1 top-7 hidden rotate-6 text-[18px] italic text-[#f4e5c6] md:block">A little less waste,<br />a lot more care.</span>
        </div>
      </section>

      <section className="border-y border-[#d9d6c9] bg-[#e9e8da]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10 lg:px-16">
          <span className="eyebrow text-[#a95b45]">The simple idea</span>
          <p className="serif max-w-[850px] text-[25px] leading-snug tracking-[-.03em] text-[#355542] md:text-[34px]">Good food deserves a destination. <span className="text-[#a95b45]">So does everyone.</span></p>
          <a href="#how" aria-label="Read how FoodRescue works" className="hidden size-12 shrink-0 place-items-center rounded-full border border-[#b9c0ae] text-[#355542] transition-all hover:bg-[#355542] hover:text-[#f5f2e8] md:grid" data-testid="link-idea-how"><ArrowDownRight size={20} /></a>
        </div>
      </section>

      <section id="why" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[.72fr_1fr] lg:gap-24 lg:px-16">
        <div>
          <p className="eyebrow mb-5 text-[#b65a43]">A gap we can close</p>
          <h2 className="serif max-w-[460px] text-[clamp(2.7rem,5vw,4.6rem)] leading-[.98] tracking-[-.055em]">Plenty to share.<br /><span className="text-[#9a694b]">Needs close by.</span></h2>
        </div>
        <div className="max-w-[640px] pt-1">
          <p className="text-[16px] leading-[1.85] text-[#5d6b60] md:text-[18px]">Every day, perfectly good food can be left without a home while neighbors nearby are working to put nourishing meals on the table. FoodRescue is built around a straightforward belief: when local businesses and local nonprofits can find one another, more food can be shared instead of thrown away.</p>
          <div className="mt-9 grid gap-5 border-t border-[#d9d6c9] pt-6 sm:grid-cols-2">
            <div>
              <span className="eyebrow text-[#a95b45]">For food donors</span>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5d6b60]">A path to pass along safe, surplus food when it’s available.</p>
            </div>
            <div>
              <span className="eyebrow text-[#a95b45]">For community groups</span>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5d6b60]">A connection to nearby food that can support your work.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative bg-[#2d5140] px-5 py-20 text-[#f5f2e8] md:px-10 md:py-28 lg:px-16">
        <div className="absolute right-0 top-0 h-full w-[42%] opacity-[.08]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(#e8d9b8 1px, transparent 1px)', backgroundSize: '17px 17px' }} />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5 text-[#e7bd82]">A simple connection</p>
              <h2 className="serif max-w-[700px] text-[clamp(2.8rem,6vw,5.5rem)] leading-[.95] tracking-[-.055em]">From extra to<br className="hidden md:block" /> something meaningful.</h2>
            </div>
            <p className="max-w-[310px] pb-1 text-[14px] leading-[1.7] text-[#d0d9ce]">A good handoff takes coordination, care and people who know their neighborhoods.</p>
          </div>
          <div className="grid border-t border-[#77907e]/55 md:grid-cols-3">
            {[
              { n: '01', title: 'A donor has extra', desc: 'A grocer, café, farm or food business has safe surplus they can share.', tag: 'LOCAL FOOD BUSINESSES' },
              { n: '02', title: 'A community need is known', desc: 'An NGO or neighborhood organization understands what its community can use.', tag: 'COMMUNITY ORGANIZATIONS' },
              { n: '03', title: 'Food finds its next table', desc: 'With a thoughtful match and practical coordination, good food can reach people.', tag: 'A MORE USEFUL ROUTE' },
            ].map((step) => (
              <article key={step.n} className="group border-b border-[#77907e]/55 py-7 md:border-b-0 md:border-r md:px-7 md:py-8 first:md:pl-0 last:md:border-r-0">
                <div className="mb-10 flex items-start justify-between">
                  <span className="serif text-[35px] text-[#e7bd82]">{step.n}</span>
                  <MoveUpRight size={17} className="text-[#9db2a0] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="eyebrow text-[#c6d1c4]">{step.tag}</p>
                <h3 className="serif mt-3 text-[27px] tracking-[-.025em]">{step.title}</h3>
                <p className="mt-3 max-w-[300px] text-[14px] leading-[1.7] text-[#d0d9ce]">{step.desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-[12px] leading-relaxed text-[#c1cfc2]">FoodRescue is introducing this approach. Matching, coordination and participation tools are not active yet.</p>
        </div>
      </section>

      <section id="principles" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[.85fr_1fr] lg:gap-24 lg:px-16">
        <div className="relative overflow-hidden rounded-[3px_72px_3px_3px] bg-[#e7d9bd] p-8 md:p-12">
          <span className="absolute -right-7 -top-8 size-48 rounded-full border border-[#bca986] opacity-50" />
          <span className="absolute -right-1 top-[-4px] size-36 rounded-full border border-[#bca986] opacity-50" />
          <p className="eyebrow relative text-[#a95b45]">Rooted in real life</p>
          <p className="serif relative mt-12 max-w-[420px] text-[clamp(2.25rem,4vw,3.7rem)] leading-[1.03] tracking-[-.045em] text-[#3b5743]">Not a shortcut.<br />A better connection.</p>
          <div className="relative mt-9 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[.1em] text-[#526e55]"><span className="h-px w-8 bg-[#a95b45]" />Built for neighbors, by neighbors</div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-5 text-[#b65a43]">Our approach</p>
          <h2 className="serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[.98] tracking-[-.055em]">Useful, local,<br />and rooted in care.</h2>
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.8] text-[#5d6b60]">Food rescue works best when it respects what food donors can offer and what community organizations actually need. We’re shaping FoodRescue around that relationship—not a one-size-fits-all promise.</p>
          <ul className="mt-8 space-y-4">
            {['Keep good food in circulation.', 'Make local relationships the starting point.', 'Be clear about what is ready—and what is still taking shape.'].map((item, i) => (
              <li key={item} className="flex items-center gap-3 text-[14px] text-[#435b49]"><span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#bdc7b8] text-[#a95b45]">{i === 2 ? <ArrowRight size={13} /> : <Leaf size={13} />}</span>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="get-involved" className="mx-5 mb-16 overflow-hidden rounded-[4px_70px_4px_4px] bg-[#d6e0d1] md:mx-10 lg:mx-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12 md:py-16">
          <div>
            <p className="eyebrow mb-5 text-[#a95b45]">An introduction, for now</p>
            <h2 className="serif max-w-[670px] text-[clamp(2.8rem,6vw,5.2rem)] leading-[.94] tracking-[-.055em] text-[#2e4e3b]">There’s room<br />at this table.</h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.75] text-[#536659]">FoodRescue is at the beginning. We’re sharing the idea and building toward a way for local donors and community organizations to connect.</p>
          </div>
          <a href="#top" className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#6d8b71] px-6 py-4 text-[13px] font-semibold text-[#31523d] transition-all duration-300 hover:bg-[#31523d] hover:text-[#f5f2e8]" data-testid="link-back-to-top">
            Explore the introduction <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d9d6c9] px-5 py-7 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-[12px] text-[#6a756a] sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex w-fit items-center gap-2 font-semibold tracking-[-.04em] text-[#355542]" data-testid="link-footer-home"><span className="grid size-7 place-items-center rounded-full bg-[#2e5844] text-[#f5f2e8]"><Leaf size={14} /></span>foodrescue</a>
          <p>Good food, finding its way.</p>
          <a href="#principles" className="flex w-fit items-center gap-1 transition-colors hover:text-[#b65a43]" data-testid="link-footer-approach">Our approach <MoveUpRight size={12} /></a>
        </div>
      </footer>
    </main>
  );
}

export default App;
