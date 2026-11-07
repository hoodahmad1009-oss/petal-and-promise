
"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  CalendarDays,
  Flower2,
  Heart,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const collections = [
  {
    number: "01",
    name: "Bridal Bouquets",
    description: "For the most beautiful beginning.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=900&q=85",
  },
  {
    number: "02",
    name: "Romantic Florals",
    description: "Soft details, unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=85",
  },
  {
    number: "03",
    name: "Wedding Details",
    description: "Every little detail matters.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const message = `Hello Petal & Promise! I'd like to book an appointment.

Name: ${data.get("name")}
Phone: ${data.get("phone")}
Event Date: ${data.get("eventDate")}
Appointment Date: ${data.get("appointmentDate")}
Preferred Time: ${data.get("time")}
Message: ${data.get("message")}`;

    // Replace with client's real WhatsApp number.
    const whatsappNumber = "923001234567";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      {/* ANNOUNCEMENT */}
      <div className="announcement">
        A LITTLE BEAUTY FOR YOUR BIGGEST MOMENTS
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          PETAL <span>&</span> PROMISE
          <small>WEDDING FLORALS</small>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#appointment" onClick={() => setMenuOpen(false)}>Appointments</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Location</a>
        </nav>

        <a href="#appointment" className="nav-cta">
          LET'S TALK <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image" />

        <div className="hero-content">
          <span className="eyebrow">
            <Flower2 size={15} /> MADE WITH LOVE, ALWAYS
          </span>

          <h1>
            Flowers for
            <br />
            your <em>forever</em>
            <br />
            moments.
          </h1>

          <p>
            Thoughtfully crafted wedding florals that turn
            your most beautiful memories into something
            unforgettable.
          </p>

          <div className="hero-actions">
            <a href="#collections" className="primary-btn">
              EXPLORE COLLECTIONS <ArrowRight size={16} />
            </a>

            <a href="#story" className="text-btn">
              DISCOVER OUR STORY
            </a>
          </div>
        </div>

        <div className="hero-side-note">
          A FLOWER IS A MEMORY IN BLOOM — EST. 2026
        </div>

        <div className="hero-bottom">
          <span>01 — 03</span>
          <span>CRAFTED FOR YOUR SPECIAL DAY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section-padding" id="story">
        <div className="intro-label">
          A DIFFERENT KIND OF FLORAL EXPERIENCE
        </div>

        <div>
          <h2>
            Not just flowers.
            <br />
            <em>A feeling that stays.</em>
          </h2>

          <p>
            Every love story deserves its own kind of beauty.
            We bring together delicate blooms, thoughtful
            details and a little bit of magic to create florals
            that feel truly yours.
          </p>

          <a href="#appointment" className="underlined-link">
            LET'S CREATE SOMETHING BEAUTIFUL
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections section-padding" id="collections">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR SIGNATURE WORK</span>
            <h2>Made for <em>moments.</em></h2>
          </div>

          <p>
            A collection of thoughtful florals,
            designed to make every occasion feel extraordinary.
          </p>
        </div>

        <div className="collection-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.number}>
              <div className="collection-image">
                <img src={item.image} alt={item.name} />

                <span className="collection-number">
                  {item.number}
                </span>

                <a href="#appointment" className="image-arrow">
                  <ArrowUpRight size={21} />
                </a>
              </div>

              <div className="collection-info">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight size={19} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <Sparkles size={23} strokeWidth={1} />

        <h2>
          "The smallest details
          <br />
          make the <em>biggest memories.</em>"
        </h2>

        <span>THE PETAL & PROMISE PHILOSOPHY</span>
      </section>

      {/* APPOINTMENT */}
      <section className="appointment section-padding" id="appointment">
        <div className="appointment-image">
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000&q=85"
            alt="Beautiful wedding flowers"
          />

          <div className="image-caption">
            YOUR STORY, OUR FLOWERS.
          </div>
        </div>

        <div className="appointment-content">
          <span className="eyebrow">
            <CalendarDays size={15} />
            LET'S PLAN YOUR MOMENT
          </span>

          <h2>
            Let's make
            <br />
            something <em>beautiful.</em>
          </h2>

          <p>
            Tell us about your special day. Book a personal
            consultation and let's bring your floral vision
            to life.
          </p>

          <form className="booking-form" onSubmit={handleBooking}>
            <div className="form-row">
              <label>
                YOUR NAME
                <input
                  name="name"
                  type="text"
                  placeholder="Full name"
                  required
                />
              </label>

              <label>
                PHONE NUMBER
                <input
                  name="phone"
                  type="tel"
                  placeholder="+92 300 1234567"
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                EVENT DATE
                <input name="eventDate" type="date" required />
              </label>

              <label>
                APPOINTMENT DATE
                <input name="appointmentDate" type="date" required />
              </label>
            </div>

            <label>
              PREFERRED TIME
              <select name="time" required defaultValue="">
                <option value="" disabled>Select a time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
              </select>
            </label>

            <label>
              TELL US ABOUT YOUR EVENT
              <textarea
                name="message"
                placeholder="Share your wedding details or floral preferences..."
                rows={3}
              />
            </label>

            <button
              type="submit"
              className="primary-btn booking-submit"
            >
              REQUEST AN APPOINTMENT
              <ArrowRight size={16} />
            </button>

            <span className="appointment-note">
              YOUR DETAILS WILL BE SENT VIA WHATSAPP
            </span>
          </form>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location section-padding" id="location">
        <div className="location-content">
          <span className="eyebrow">
            <MapPin size={15} /> COME SAY HELLO
          </span>

          <h2>
            A little place
            <br />
            full of <em>flowers.</em>
          </h2>

          <p>
            We'd love to welcome you into our floral world.
            Visit our studio and let's talk about your
            upcoming celebration.
          </p>

          <div className="address">
            <MapPin size={19} />

            <div>
              <strong>OUR FLORAL STUDIO</strong>
              <span>Sample Location · Lahore, Pakistan</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Lahore+Pakistan"
            target="_blank"
            rel="noreferrer"
            className="underlined-link"
          >
            GET DIRECTIONS <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="map-placeholder">
          <iframe
            title="Petal and Promise Studio Location"
            src="https://maps.google.com/maps?q=Lahore%2C%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Lahore+Pakistan"
            target="_blank"
            rel="noreferrer"
            className="map-overlay-link"
          >
            <MapPin size={15} />
            EXPLORE LOCATION
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="booking-strip" id="booking">
        <div>
          <span className="eyebrow">
            YOUR SPECIAL DAY STARTS HERE
          </span>

          <h2>
            Let's talk about <em>your flowers.</em>
          </h2>
        </div>

        <a href="#appointment" className="primary-btn">
          BOOK YOUR CONSULTATION <ArrowRight size={16} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <a href="#home" className="logo">
            PETAL <span>&</span> PROMISE
            <small>WEDDING FLORALS</small>
          </a>

          <p>Flowers crafted for your forever moments.</p>
        </div>

        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#story">OUR STORY</a>
          <a href="#appointment">APPOINTMENTS</a>
        </div>

        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <span style={{ fontSize: "13px", fontWeight: "600" }}>
              IG
            </span>
          </a>

          <a href="#location" aria-label="Location">
            <MapPin size={19} />
          </a>
        </div>

        <div className="copyright">
          © 2026 PETAL & PROMISE. ALL RIGHTS RESERVED.

          <span>
            MADE WITH <Heart size={12} /> FOR LOVE.
          </span>
        </div>
      </footer>
    </main>
  );
}
