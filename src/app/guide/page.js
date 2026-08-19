import Link from "next/link";
import GuideVideo from "../../components/guide/GuideVideo";

export default function GuidePage() {
  return (
    <main className="guide-page">

      {/* =========================
          GUIDE HERO
      ========================= */}
      <section className="guide-hero">
        <div className="guide-hero-overlay"></div>

        <div className="guide-hero-content">
          <div className="guide-hero-outline">
            CropGen
          </div>

          <h1>
            CropGen
            <br />
            Monitoring User Guide
          </h1>

          <p>
            Step-by-step video tutorials to help you manage
            <br className="desktop-break" />
            your farm smarter and more efficiently.
          </p>
        </div>
      </section>


      {/* =========================
          BREADCRUMB + TITLE
      ========================= */}
      <div className="guide-container">

        <div className="guide-breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <span>CropGen Monitoring User Guide</span>
        </div>

        <section className="guide-heading">
          <h2>CropGen Monitoring User Guide</h2>

          <div className="guide-heading-line"></div>
        </section>


        {/* =========================
            VIDEO GUIDE HEADING
            Everything BELOW this
            remains your original code
        ========================= */}

        <section className="guide-content">

          <div className="guide-video-heading">
            <div className="guide-video-icon">
              ▶
            </div>

            <div>
              <h2>Video Guide</h2>
              <p>
                Explore our step-by-step video tutorials.
              </p>
            </div>
          </div>


          {/* =========================
              YOUR ORIGINAL VIDEO CODE
          ========================= */}

          {/* First Video */}
          <div className="guide-video-section">
            <h3>Create an Account</h3>

            <GuideVideo videoId="htka9NpmIiQ" />
          </div>

          {/* Second Video */}
          <div className="guide-video-section">
            <h3>How to Add a Field</h3>

            <GuideVideo videoId="VwSCnAOS8" />
          </div>

          {/* Third Video */}
          <div className="guide-video-section">
            <h3>How to Analyze Your Farm using CropGen Analytics</h3>

            <GuideVideo videoId="Vx8KKJVNugI" />
          </div>

          {/* Fourth Video */}
          <div className="guide-video-section">
            <h3>How to Manage Farm Operations</h3>

            <GuideVideo videoId="jO95hhbHWoY" />
          </div>

          {/* Fifth Video */}
          <div className="guide-video-section">
            <h3>How to Check Weather and Forecast</h3>

            <GuideVideo videoId="girqtNaK-CM" />
          </div>

          {/* Sixth Video */}
          <div className="guide-video-section">
            <h3>How to Manage Your Account & Farm Settings</h3>

            <GuideVideo videoId="BwWy7aLkdbM" />
          </div>

        </section>

      </div>

    </main>
  );
}