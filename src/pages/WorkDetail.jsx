import { useParams } from "react-router-dom";
import { useScrollReveal } from "../hooks";
import { projects } from "../data/portfolio";
import ContactCTA from "../components/ContactCTA";
import "./WorkDetail.css";
import CaseNav from "../components/CaseNav";
// ── Figma embed ────────────────────────────────────────────────────
function FigmaEmbed({ url }) {
  if (!url) return null;

  return (
    <div className="case__figma reveal">
      <iframe
        src={url}
        allowFullScreen
        loading="lazy"
        className="case__figma-iframe"
      />
    </div>
  );
}

// ── Case Study Body ───────────────────────────────────────────────────────────
function CaseBody({ project }) {
  return (
    <div className="case__body">
      {/* Overview */}
      <div className="case__overview reveal">
        <div className="case__role">
          <span className="case__role-label">My Role</span>
          <span className="case__role-value">{project.role}</span>
        </div>
        <h2 className="case__overview-title">
          {project.id === "algonquingo"
            ? "A campus safety app for Algonquin College"
            : project.id === "algonquingoadmin"
              ? "A web portal for the security team"
              : project.id === "mentora"
                ? "A two-sided app for students and tutors"
                : "A platform designed for book lovers"}
        </h2>
        <p className="case__overview-body">{project.overview}</p>

        
      </div>
      {/* {project.figmaEmbed && (
        <div className="case__figma reveal">
          <p className="case__section-heading">Interactive Prototype</p>
          <iframe
            src={project.figmaEmbed}
            allowFullScreen
            loading="lazy"
            className="case__figma-iframe"
          />
        </div>
      )} */}
      {/* Sections */}
      {project.sections.map((sec, i) => (
        <div key={i} className={`case__section reveal reveal-d${(i % 3) + 1}`}>
          <h2 className="case__section-heading">{sec.heading}</h2>

          {sec.body && <p className="case__section-body">{sec.body}</p>}

          {/* Sub-sections (e.g. Wayfinder / Reports / Events) */}
          {sec.subSections &&
            sec.subSections.map((sub) => (
              <div key={sub.name} className="case__subsection">
                <h3 className="case__subsection-name">{sub.name}</h3>
                <p className="case__subsection-body">{sub.body}</p>
                {sub.images && (
                  <div className="case__img-row case__img-row--3">
                    {sub.images.map((img, idx) => (
                      <img key={idx} src={img.src} alt={img.alt} />
                    ))}
                  </div>
                )}
              </div>
            ))}

          {/* Contextual image placeholders per section */}
          <SectionImages project={project} sectionIndex={i} />
        </div>
      ))}

      {/* Conclusion */}
      {project.conclusion && (
        <div className="case__conclusion reveal">
          <h3 className="case__conclusion-heading">Conclusion</h3>
          <p className="case__conclusion-body">{project.conclusion}</p>
        </div>
      )}
    </div>
  );
}

// ── Per-section image grids based on project/section ─────────────────────────
function SectionImages({ project, sectionIndex }) {
  const id = project.id;
  // AlgonquinGO mobile
  if (id === "algonquingo") {
    if (sectionIndex === 0)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="User personas"
        >
          <img src="/img/acGoAppPersonas.png" alt="Algonquin GO Primary personas" />
          {/* <img src="/img/jackie.png" alt="Student user 2 image" />
          <img src="/img/marcus.png" alt="Student user 2 image" /> */}
        </div>
      );
    if (sectionIndex === 1)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="Competitive analysis"
        >
          <img src="/img/ACGO_productresearch.png" alt="Algonquin GO product research" />
          {/* <img src="/img/uottawa.png" alt="University of Ottawa safety app" />
          <img src="/img/svu.png" alt="SVU safety app" /> */}
        </div>
      );
    if (sectionIndex === 2)
      return (
        <>
          <div className="case__img-row" aria-label="Information architecture">
            <img
              src="/img/ACGO_IA.png"
              alt="Algonquin GO app information architecture"
            />
          </div>
        </>
      );
    if (sectionIndex === 3)
      return (
        <>
          <div
            className="case__img-row case__img-row--3"
            aria-label="Wireframes"
          >
            <img
              src="/img/ACGO_wireframes.png"
              alt="Algonquin GO app wireframes"
            />
            {/* <img
              src="/img/wireframereports.png"
              alt="Algonquin GO app wireframe report"
            />
            <img
              src="/img/wireframeevents.png"
              alt="Algonquin GO app wireframe events"
            />
            <img
              src="/img/wireframesos.png"
              alt="Algonquin GO app wireframe sos call"
            /> */}
          </div>
        </>
      );
  }

  // AlgonquinGO admin
  if (id === "algonquingoadmin") {
    if (sectionIndex === 0)
      return (
        <div className="case__img-row" aria-label="User intervies and personas">
          <img src="/img/ACGO_secondarypersona.png" alt="Secondary user" />
        </div>
      );
    if (sectionIndex === 1)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="A glance to the current portal"
        >
          <img src="/img/OldPortal.png" alt="Previous admin portal" />
          {/* <img src="/img/oldportal2.png" alt="Previous admin portal" /> */}
        </div>
      );
    if (sectionIndex === 2)
      return (
        <div className="case__img-row" aria-label="Information Architecture">
          <img
            src="/img/Adminportal_IA.png"
            alt="Admin portal Information Architecture"
          />
        </div>
      );
    if (sectionIndex === 3)
      return (
        <>
          <div
            className="case__img-row case__img-row--3"
            aria-label="Wireframes"
          >
            <img
              src="/img/Admin_wireframes.png"
              alt="Algonquin GO admin portal wireframes"
            />
            {/* <img
              src="/img/adminwireframe2.png"
              alt="Algonquin GO admin portal communications wireframe"
            /> */}
          </div>
        </>
      );
    if (sectionIndex === 5)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="improvements"
        >
          <img src="/img/Alert_b&a.png" alt="Create alert before" />
          {/* <img src="/img/improvement2.png" alt="Create alert after" /> */}
        </div>
      );
  }

  // Mentora
  if (id === "mentora") {
    if (sectionIndex === 0)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="User personas"
        >
          <img src="/img/Mentora_personas.png" alt="Primary and secondary personas" />
          {/* <img src="/img/zita.png" alt="Tutor persona" /> */}
        </div>
      );
    if (sectionIndex === 1)
      return (
        <>
          <div className="case__img-row" aria-label="Product research">
            <div className="case__img-row case__img-row--3">
              <img src="/img/Mentora_productresearch.png" alt="Product research" />
              {/* <img src="/img/udemy.png" alt="Udemy" /> */}
            </div>
          </div>
        </>
      );
    if (sectionIndex === 2)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="Information Architecture"
        >
          <img src="/img/Mentora_IA.png" alt="IA Students and Tutors" />
          {/* <img src="/img/IATutors.png" alt="IA Tutors" /> */}
        </div>
      );
    if (sectionIndex === 3)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="Low Fidelity"
        >
          <img src="/img/Mentora_lowfidelity.png" alt="Low fidelity wireframes" />
          {/* <img src="/img/lowfidelity2.png" alt="Tutors low fidelity" /> */}
        </div>
      );
    if (sectionIndex === 4)
      return (
        <div className="case__img-row case__img-row--3" aria-label="Wireframes">
          <img src="/img/Mentora_wireframes.png" alt="Mid fidelity wireframes" />
          {/* <img src="/img/mentoraw2.png" alt="Tutor details mid fidelity" />
          <img src="/img/mentoraw3.png" alt="Tutor dashboard mid fidelity" /> */}
        </div>
      );
    if (sectionIndex === 5)
      return (
        <div className="case__img-row case__img-row--3" aria-label="Design System">
          <img src="/img/Mentora_DS.png" alt="Design System" />
          {/* <img src="/img/mentorads.png" alt="Design System" /> */}
        </div>
      );
    // if (sectionIndex === 6)
      // return (
        // <div
        //   className="case__img-row case__img-row--2"
        //   aria-label="Usability testing and improvements"
        // >
        //   <img src="/img/mentoraimprov.png" alt="Smart Match improvement" />
        // </div>
      // );
  }

  // Book Nook
  if (id === "booknook") {
    if (sectionIndex === 0)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="Low fidelity wireframes"
        >
          <img src="/img/BN_lowfidelity.png" alt="BookNook lowfidelity" />
        </div>
      );
    if (sectionIndex === 1)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="Product research"
        >
          <img src="/img/BN_productresearch.png" alt="Goodreads" />
          {/* <img src="/img/goodreads2.PNG" alt="Goodreads discover screen" /> */}
        </div>
      );
    if (sectionIndex === 2)
      return (
        <div
          className="case__img-row case__img-row--3"
          aria-label="Design System"
        >
          <img src="/img/BN_DS.png" alt="Design SYstem" />
          {/* <img src="/img/bookdesignsystem.png" alt="Design System" /> */}
        </div>
      );
  }

  return null;
}

// ── WorkDetail Page ───────────────────────────────────────────────────────────
export default function WorkDetail() {
  const { id } = useParams();
  useScrollReveal();

  const project = projects.find((p) => p.id === id);
  const currentIdx = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  if (!project) {
    return (
      <main
        id="main-content"
        style={{ padding: "8rem 5vw", textAlign: "center" }}
      >
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          Project not found
        </h1>
        <a
          href="/work"
          className="btn btn-primary"
          style={{ marginTop: "2rem", display: "inline-flex" }}
        >
          Back to work
        </a>
      </main>
    );
  }

  return (
    <main id="main-content" className="case page-enter">
      {/* ── Back ── */}
      <a href="/work" className="case__back">
        <span className="case__back-arrow">←</span> All projects
      </a>

      {/* ── Header ── */}
      <header className="case__header">
        {project.banner && (
  <div className="case__banner reveal">
    <span className="case__banner-icon">🏆</span>
    {project.banner}
  </div>
)}
        <div className="case__meta" role="list" aria-label="Project details">
          <div className="case__meta-item" role="listitem">
            <p className="case__meta-label">Client</p>
            <p className="case__meta-value">{project.tag}</p>
          </div>
        </div>

        <h1 className="case__title">
          {project.title}
          <span>{project.subtitle}</span>
        </h1>
      </header>

      {/* ── Sticky section nav ── */}
      <CaseNav sections={project.sections} />

      {/* ── Cover: Figma embed if available, else image ── */}
{project.figmaEmbed ? (
  <div className="case__figma reveal">
    <p className="case__section-heading">Interactive Prototype</p>
    <iframe
      src={project.figmaEmbed}
      allowFullScreen
      loading="lazy"
      className="case__figma-iframe"
    />
  </div>
) : (
  <div className="case__cover reveal">
    <div className="case__cover-inner">
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageFallbackLabel}
          className="case__cover-img"
          loading="eager"
          decoding="async"
        />
      ) : (
        <div
          className="case__cover-placeholder"
          role="img"
          aria-label={project.imageFallbackLabel}
        >
          <span className="case__cover-placeholder-label">
            {project.title} — {project.subtitle}
          </span>
        </div>
      )}
    </div>
  </div>
)}
      {/* ── Body ── */}
      <CaseBody project={project} />

      {/* ── Next project ── */}
      <div className="case__next">
        <div>
          <p className="case__next-label">Next project</p>
          <a href={`/work/${nextProject.id}`} className="case__next-link">
            <p className="case__next-title">
              {nextProject.title} — {nextProject.subtitle}
            </p>
          </a>
        </div>
        <a
          href={`/work/${nextProject.id}`}
          className="btn btn-primary case__next-btn"
        >
          View project →
        </a>
      </div>

      <ContactCTA />
    </main>
  );
}
