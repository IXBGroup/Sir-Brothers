"use client";

import { useState } from "react";

const services = [
  ["01", "Tree Removal", "Safe removal of unwanted, damaged and problem trees."],
  ["02", "Stump Removal", "Remove old stumps and reclaim usable yard space."],
  ["03", "Cedar Tree Removal", "Clear unwanted cedars from properties, pastures and acreages."],
  ["04", "Storm Cleanup", "Fast cleanup of fallen trees, limbs and storm debris."],
  ["05", "Skid Steer Work", "Equipment and operator for cleanup, clearing and other projects."],
  ["06", "Property & Brush Cleanup", "Clear overgrown areas, brush, trees and unwanted material."],
  ["07", "Hauling", "Hauling and removal of iron, debris and other materials."],
  ["08", "Snow Removal", "Seasonal snow removal for homes and businesses."],
];

const projects = [
  ["Equipment", "Equipment Ready — Custer County", "center", "/sir-equipment-hauling.webp"],
  ["Skid Steer Work", "Property & Equipment Work — Central Nebraska", "center", "/sir-skid-steer-property-work.webp"],
  ["Local Fleet", "Work Trucks — Broken Bow, Nebraska", "center 58%", "/sir-work-trucks.webp"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="S.I.R Brothers LLC home">
          <span className="brand-mark">S.I.R</span>
          <span><b>BROTHERS LLC</b><small>TREE + PROPERTY SERVICES</small></span>
        </a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(!menuOpen)}>MENU</button>
        <nav id="nav" className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          {[["Services","services"],["Projects","projects"],["About","about"],["Service Area","service-area"],["Contact","contact"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-cta" href="tel:+13084403207">CALL 308-440-3207</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> BROKEN BOW, NEBRASKA</p>
          <h1>TREE REMOVAL<br />&amp; PROPERTY CLEANUP<br /><em>DONE RIGHT.</em></h1>
          <p className="hero-copy">Tree removal, stump removal, cedar clearing, storm cleanup and skid steer work throughout Broken Bow and Central Nebraska.</p>
          <div className="button-row">
            <a className="button primary" href="#contact">GET A FREE ESTIMATE <b>→</b></a>
            <a className="button secondary" href="tel:+13084403207">CALL 308-440-3207</a>
          </div>
        </div>
        <div className="hero-location"><span>WORKING ACROSS</span><strong>CUSTER COUNTY</strong><small>+ CENTRAL NEBRASKA</small></div>
      </section>

      <section className="trust" aria-label="Why choose S.I.R Brothers LLC">
        {[["LOCALLY","OWNED"],["PROFESSIONAL","EQUIPMENT"],["FREE","ESTIMATES"],["CENTRAL","NEBRASKA"]].map(([a,b],i)=><div key={a}><span>0{i+1}</span><strong>{a}<br />{b}</strong></div>)}
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> WHAT WE DO</p><h2>BUILT FOR<br /><em>TOUGH JOBS.</em></h2></div>
          <p>From one problem tree to a full property cleanup, S.I.R Brothers LLC brings the equipment and work ethic to get it handled.</p>
        </div>
        <div className="service-grid">
          {services.map(([n,title,copy]) => <article className="service-card" key={title}><span>{n}</span><div className="service-photo" aria-hidden="true"><b>{n}</b></div><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Request estimate for ${title}`}>GET AN ESTIMATE →</a></article>)}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-photo"><span>LOCAL CREW<br />PRO EQUIPMENT</span></div>
        <div className="about-copy">
          <p className="eyebrow"><span /> ABOUT S.I.R BROTHERS LLC</p>
          <h2>LOCAL EQUIPMENT.<br />LOCAL CREW.<br /><em>HARD WORK.</em></h2>
          <p>S.I.R Brothers LLC is based in Broken Bow and serves homeowners, farms, acreages and businesses throughout Custer County and Central Nebraska.</p>
          <p>We pair practical experience with professional equipment to take on demanding outdoor work—and we treat your property like it matters. The goal is simple: finish the job, haul away the mess and leave the ground as clean and cared for as the work allows.</p>
          <div className="care-note"><strong>THE JOB ISN’T DONE</strong><span>until the property is cleaned up and ready to use.</span></div>
          <a className="text-link" href="#contact">TELL US ABOUT YOUR JOB →</a>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> BEFORE / DURING / AFTER</p><h2>WORK THAT<br /><em>SPEAKS FOR ITSELF.</em></h2></div>
          <p>Tree work is hands-on. Open any project for a closer look at the equipment, process and cleanup.</p>
        </div>
        <div className="project-grid">
          {projects.map(([cat,caption,pos,image],i) => <button key={caption} className={`project-card p${i+1}`} onClick={() => setLightbox(i)} style={{backgroundPosition: pos, backgroundImage: `linear-gradient(0deg,#050505e8,transparent 65%),url('${image}')`}} aria-label={`Open ${caption} image`}><span>{cat}</span><strong>{caption}</strong><i>＋</i></button>)}
        </div>
        <p className="gallery-note">Have project photos? Email them to <a href="mailto:sirbrothersllc@gmail.com">sirbrothersllc@gmail.com</a> to keep this gallery growing.</p>
      </section>

      <section className="service-area" id="service-area">
        <div className="area-copy"><p className="eyebrow"><span /> WHERE WE WORK</p><h2>PROUDLY SERVING<br /><em>CENTRAL NEBRASKA.</em></h2><p>Need tree removal in Broken Bow, stump grinding in Custer County, or storm cleanup farther down the road? We serve rural properties, farms, homes and businesses across the region.</p><a className="button primary" href="#contact">CHECK YOUR LOCATION →</a></div>
        <div className="area-map" aria-label="Service areas"><div className="map-ring r1"/><div className="map-ring r2"/><div className="map-pin main">BROKEN BOW<small>HOME BASE</small></div><div className="city c1">NORTH PLATTE</div><div className="city c2">KEARNEY</div><div className="city c3">GRAND ISLAND</div><strong>CUSTER COUNTY</strong><span>Surrounding communities welcome—call to ask.</span></div>
      </section>

      <section className="big-cta"><p className="eyebrow"><span /> READY WHEN YOU ARE</p><h2>GOT TREES THAT<br /><em>NEED TO GO?</em></h2><p>Whether it’s one tree, a yard full of stumps, storm damage or a property that needs cleared, give S.I.R Brothers LLC a call.</p><div className="button-row"><a className="button light" href="tel:+13084403207">CALL 308-440-3207</a><a className="button black" href="#contact">REQUEST A FREE ESTIMATE →</a></div></section>

      <section className="contact" id="contact">
        <div className="contact-intro"><p className="eyebrow"><span /> FREE ESTIMATES</p><h2>LET’S TALK<br /><em>ABOUT THE JOB.</em></h2><p>Share a few details and we’ll follow up about your tree removal, cleanup or equipment work.</p><a className="phone-big" href="tel:+13084403207"><small>CALL DIRECT</small>308-440-3207</a><a className="contact-email" href="mailto:sirbrothersllc@gmail.com">sirbrothersllc@gmail.com</a><div className="social-links" aria-label="Find S.I.R Brothers LLC online"><a href="https://www.facebook.com/SIRBrothersLLC" target="_blank" rel="noopener noreferrer"><b>f</b><span>Facebook</span></a><a href="https://www.instagram.com/s.i.r.brothers/" target="_blank" rel="noopener noreferrer"><b>◎</b><span>Instagram</span></a><a href="https://share.google/v4ysNRUhPK3Wgt2Ms" target="_blank" rel="noopener noreferrer"><b>G</b><span>Google Business</span></a></div></div>
        <form action="mailto:sirbrothersllc@gmail.com" method="post" encType="text/plain">
          <label>Name<input name="Name" required autoComplete="name" /></label>
          <label>Phone<input name="Phone" type="tel" required autoComplete="tel" /></label>
          <label>Email<input name="Email" type="email" autoComplete="email" /></label>
          <label>City / Location<input name="Location" required autoComplete="address-level2" /></label>
          <label className="full">Service Needed<select name="Service"><option>Tree Removal</option><option>Stump Removal / Grinding</option><option>Cedar Tree Removal</option><option>Storm Cleanup</option><option>Skid Steer Work</option><option>Property / Brush Cleanup</option><option>Hauling</option><option>Snow Removal</option></select></label>
          <label className="full">Tell Us About The Job<textarea name="Job Details" rows={5} required /></label>
          <label className="full upload">Upload Photos<input type="file" name="Photos" accept="image/*" multiple /><small>Your email app will open when you submit. Attach selected job photos there before sending.</small></label>
          <button className="button primary full" type="submit">REQUEST MY FREE ESTIMATE →</button>
        </form>
      </section>

      <footer><div className="footer-brand"><strong>S.I.R BROTHERS LLC</strong><span>Tree + Property Services</span></div><div><b>BROKEN BOW, NEBRASKA 68822</b><span>Custer County • Central Nebraska</span></div><div><a href="tel:+13084403207">308-440-3207</a><a href="mailto:sirbrothersllc@gmail.com">sirbrothersllc@gmail.com</a></div><div className="footer-links"><a href="#home">Home</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#service-area">Service Area</a><a href="#contact">Contact</a><a href="https://www.facebook.com/SIRBrothersLLC" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://www.instagram.com/s.i.r.brothers/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://share.google/v4ysNRUhPK3Wgt2Ms" target="_blank" rel="noopener noreferrer">Google Business</a></div><small className="copyright">© {new Date().getFullYear()} S.I.R Brothers LLC. All rights reserved.</small></footer>

      <a className="mobile-call" href="tel:+13084403207"><span>CALL S.I.R BROTHERS LLC</span><strong>308-440-3207</strong></a>
      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={projects[lightbox][1]} onClick={() => setLightbox(null)}><button aria-label="Close image">×</button><div className="lightbox-image" style={{backgroundPosition: projects[lightbox][2], backgroundImage: `url('${projects[lightbox][3]}')`}}/><p>{projects[lightbox][1]}</p></div>}
    </main>
  );
}
