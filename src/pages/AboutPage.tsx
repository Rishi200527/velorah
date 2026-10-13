
import { Link } from 'react-router-dom'

const features = [
  { icon: '♧', title: 'Student-Centric', subtitle: 'Approach' },
  { icon: '✳', title: 'AI-Powered', subtitle: 'Learning' },
  { icon: '▥', title: 'Personalized', subtitle: 'Practice' },
  { icon: '♧', title: 'Community', subtitle: 'Driven' },
  { icon: '◇', title: 'Safe, Focused', subtitle: 'Learning Space' },
]

const principles = [
  {
    icon: '◎',
    title: 'Our Mission',
    description:
      'To make high-quality, personalized learning accessible to every student and help them build strong problem-solving skills for real-world success.',
  },
  {
    icon: '◉',
    title: 'Our Vision',
    description:
      'To become a leading AI-powered learning platform that transforms how students learn, practice, and achieve their academic goals.',
  },
  {
    icon: '♡',
    title: 'Our Values',
    description:
      'Curiosity, continuous learning, inclusivity, integrity, and a commitment to helping every learner grow at their own pace.',
  },
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-photo" aria-hidden="true" />

        <div className="about-hero-content">
          <p className="about-eyebrow">ABOUT US</p>

          <h1>
            A more human way
            <br />
            to <em>learn, grow</em> and <em>achieve.</em>
          </h1>

          <p className="about-hero-description">
            Velorah is an AI-powered learning platform built for curious
            minds. We combine personalized learning, guided problem solving,
            and continuous learner intelligence to help students truly
            understand, practice, and grow at their own pace.
          </p>

          <Link to="/login" className="about-hero-button">
            Begin Journey <span>→</span>
          </Link>
        </div>

        <div className="about-features">
          {features.map((feature, index) => (
            <div className="about-feature-item" key={index}>
              <span className="about-feature-symbol" aria-hidden="true">
                {feature.icon}
              </span>
              <span className="about-feature-label">
                {feature.title}
                <br />
                {feature.subtitle}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-purpose">
        <div className="about-purpose-heading">
          <div>
            <p className="about-eyebrow">OUR PURPOSE</p>
            <h2>
              Building a generation
              <br />
              of <em>confident learners.</em>
            </h2>
          </div>

          <p>
            We believe that every student has the potential to achieve great
            things when given the right guidance, tools, and support. Velorah
            is designed to make learning more effective, engaging, and
            personalized — so that no learner feels stuck or left behind.
          </p>
        </div>

        <div className="about-principles">
          {principles.map((principle) => (
            <article className="about-principle-card" key={principle.title}>
              <span className="about-principle-symbol" aria-hidden="true">
                {principle.icon}
              </span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-capabilities">
        <p className="about-eyebrow">THE VE​LORAH APPROACH</p>
        <h2>
          Learning that <em>adapts to you.</em>
        </h2>
        <p className="about-capabilities-intro">
          A more personal way to understand concepts, practice skills, and
          keep improving.
        </p>

        <div className="about-capability-grid">
          <article>
            <span>01</span>
            <h3>Personalized Learning Paths</h3>
            <p>
              Learn topics at a pace and difficulty level that fits your
              knowledge and performance.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Guided Problem Solving</h3>
            <p>
              Work through progressive hints and guidance instead of simply
              receiving the answer.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Concept &amp; Misconception Support</h3>
            <p>
              Identify difficult concepts and get explanations and practice
              tailored to your needs.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Personalized Revision</h3>
            <p>
              Revisit weak areas and practice using your learning progress
              and previous mistakes.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Continuous Learner Intelligence</h3>
            <p>
              Use learning progress and problem-solving patterns to improve
              future recommendations.
            </p>
          </article>
        </div>
      </section>

      <section className="about-impact">
        <div className="about-impact-photo" aria-hidden="true" />

        <div className="about-impact-content">
          <div>
            <p className="about-eyebrow">OUR IMPACT</p>
            <h2>
              Empowering learners
              <br />
              <em>every day.</em>
            </h2>
          </div>

          <div className="about-impact-stats">
            <div>
              <strong>5</strong>
              <span>Core Features</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Learning Possibilities</span>
            </div>
            <div>
              <strong>✧</strong>
              <span>Built for Students</span>
            </div>
            <div>
              <strong>◎</strong>
              <span>Learn Anywhere</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-final">
        <p className="about-eyebrow">YOUR NEXT CHAPTER</p>
        <h2>
          Your learning journey
          <br />
          starts <em>here.</em>
        </h2>
        <p>
          Discover a more personal way to learn, practice, and grow with
          Velorah.
        </p>
        <Link to="/login" className="about-hero-button">
          Begin Journey <span>→</span>
        </Link>
      </section>
    </main>
  )
}
