import React, { useState } from 'react';
import './Portfolio.css';
import por from '../../assets/por.png'; // make sure this path is correct

const FILTERS = ['All', 'Life', 'Moments', 'Nature', 'Stories', 'Travel'];

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Brand Landing Page',
    src: por, // <-- use the imported variable directly (not {por})
    category: 'Life',
    featured: true,
  },
  {
    id: 2,
    title: 'Cozy Workspace',
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80',
    category: 'Moments',
  },
  {
    id: 3,
    title: 'Product Shot - Mobile',
    src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    category: 'Stories',
  },
  {
    id: 4,
    title: 'Marketing Mockup',
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80',
    category: 'Life',
  },
  {
    id: 5,
    title: 'Mobile App Preview',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    category: 'Nature',
  },
  {
    id: 6,
    title: 'Admin Dashboard',
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    category: 'Travel',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = GALLERY_IMAGES.filter((g) =>
    activeFilter === 'All' ? true : g.category === activeFilter
  );

  // precompute featured
  const featuredItem = filtered.find((g) => g.featured);

  return (
    <main className="portfolio-page">
      {/* Hero / Banner */}
      <section className="portfolio-hero">
        <div className="hero-inner container">
          <h1 className="hero-title">Portfolio</h1>
        </div>
      </section>

      {/* Our Work heading + filters */}
      <section className="our-work container">
        <h2 className="section-heading">Our Work</h2>

        <div className="filters" role="tablist" aria-label="Portfolio filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
              role="tab"
              aria-selected={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="gallery">
          {/* Featured (first large) */}
          {featuredItem && (
            <div className="gallery-feature">
              <img
                src={featuredItem.src}
                alt={featuredItem.title}
                className="gallery-img featured-img"
                loading="lazy"
              />
            </div>
          )}

          {/* Right column or next items */}
          <div className="gallery-side">
            {/* Show top non-featured items */}
            {filtered
              .filter((g) => !g.featured)
              .slice(0, 2)
              .map((g) => (
                <div className="gallery-item tall" key={g.id}>
                  <img src={g.src} alt={g.title} className="gallery-img" loading="lazy" />
                </div>
              ))}
          </div>

          {/* Row of three smaller images */}
          <div className="gallery-row">
            {filtered
              .filter((g) => !g.featured)
              .slice(2, 5)
              .map((g) => (
                <div className="gallery-thumb" key={g.id}>
                  <img src={g.src} alt={g.title} className="gallery-img" loading="lazy" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band container">
        <div className="cta-inner">
          <blockquote className="cta-quote">
            “Some of the History of Our Company is that we are Catching up through Video”
          </blockquote>
          <a className="btn-primary" href="/contact">Get In Touch</a>
        </div>
      </section>
    </main>
  );
}
