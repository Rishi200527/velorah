
import { Link } from 'react-router-dom'

const hostedVideo =
"eLearning.mp4"
export default function HomePage() {
  return (
    <main className="hero-page">
      <video
        className="hero-video"
        src="/velorah-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={(event) => {
          const video = event.currentTarget
          video.muted = true
          video.play().catch(() => undefined)
        }}
        onError={(event) => {
          const video = event.currentTarget

          if (!video.dataset.fallback) {
            video.dataset.fallback = 'true'
            video.src = hostedVideo
            video.load()
          }
        }}
        aria-hidden="true"
      />

      <div className="hero-shade" />

      <section className="hero-copy">
        <p className="hero-eyebrow">A MORE PERSONAL WAY TO LEARN</p>

        <h1>
          Where <em>dreams</em> rise
          <br className="desktop-break" /> through the silence.
        </h1>

        <p className="hero-description">
          A focused learning space for curious minds. Build your DSA
          foundation, choose your language, and make steady progress with
          a path designed around you.
        </p>

        {/* Begin Journey opens the authentication page */}
        <Link className="hero-cta" to="/login">
          Begin Journey <span>↗</span>
        </Link>

        <div className="hero-footnote">
          <span>LEARN WITH INTENTION</span>
          <span>BUILD SKILLS THAT LAST</span>
        </div>
      </section>
    </main>
  )
}
