import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <Image src="/brupper-logo.png" alt="Brupper" width={42} height={42} />
          BRUPPER
        </a>
        <ul className="nav-links">
          <li><a href="#download">Download</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">Daily meal subscriptions</span>
            <h1 className="hero-title">
              Food that<br />
              <em>shows up</em><br />
              for you.
            </h1>
            <p className="hero-subtitle">
              Fresh home-style lunch and dinner, subscribed monthly and delivered to your door — no thinking required.
            </p>
            <div className="hero-actions" id="download">
              <a href="#" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download APK
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="https://plus.unsplash.com/premium_vector-1736753954445-cff6395f519f?q=80&w=600&auto=format&fit=crop"
              alt="A plate of food"
              width={480}
              height={480}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
