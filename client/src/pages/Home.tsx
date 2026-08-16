/**
 * Champagne Editorial design philosophy: fashion-led beauty photography, warm ivory whitespace,
 * restrained champagne accents, and immediately available WhatsApp booking without a fake calendar.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
  Flower2,
  HeartHandshake,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const bookingNumber = "923355593228";
const whatsappBase = `https://wa.me/${bookingNumber}`;
const phoneLink = "tel:+923355593228";

const whatsappLink = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;

const generalBooking = whatsappLink(
  "Hi Fab's Salon, I would like to book an appointment. Please share your available timings and details.",
);

const bridalBooking = whatsappLink(
  "Hi Fab's Salon, I would like to enquire about bridal services. Please share your packages, availability and details.",
);

const serviceBooking = (service: string) =>
  whatsappLink(
    `Hi Fab's Salon, I would like to book ${service}. Please share the available timings and details.`,
  );

const services = [
  {
    name: "Hair",
    description: "Signature styling for everyday polish or a memorable occasion.",
    image: "/manus-storage/fabs-hair-editorial_b5086b40.jpg",
    icon: Scissors,
  },
  {
    name: "Makeup",
    description: "Soft-glam and occasion looks composed around your features.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85",
    icon: Sparkles,
  },
  {
    name: "Bridal",
    description: "A considered bridal enquiry, from consultation through your day.",
    image: "/manus-storage/fabs-bridal-portrait_e2970bdc.jpg",
    icon: HeartHandshake,
  },
  {
    name: "Skin",
    description: "Focused beauty care for a fresh, light-catching finish.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    icon: Flower2,
  },
  {
    name: "Nails",
    description: "Elegant finishing details for a beautifully put-together look.",
    image: "/manus-storage/fabs-beauty-detail_d21beaf4.jpg",
    icon: Sparkles,
  },
  {
    name: "Spa",
    description: "A quiet beauty ritual when you want to pause and reset.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
    icon: Flower2,
  },
  {
    name: "Beauty Services",
    description: "The thoughtful finishing touches for your next beauty moment.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    icon: Sparkles,
  },
];

const gallery = [
  {
    label: "Bridal",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative bridal beauty portrait in warm evening light",
  },
  {
    label: "Hair",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative salon hair styling moment",
  },
  {
    label: "Makeup",
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative makeup detail with polished beauty styling",
  },
  {
    label: "Nails",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative manicured nails with a delicate finish",
  },
  {
    label: "Beauty",
    src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative beauty products arranged in warm light",
  },
  {
    label: "Salon",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative luxury salon interior detail",
  },
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Bridal", "bridal"],
  ["Gallery", "gallery"],
  ["Locations", "locations"],
  ["Contact", "contact"],
] as const;

function SectionHeading({
  eyebrow,
  title,
  copy,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  inverse?: boolean;
}) {
  return (
    <div className={`section-heading ${inverse ? "section-heading--inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Fab's Salon home" onClick={closeMenu}>
            <img
              src="/manus-storage/fabs-logo-mark_a7c79107.png"
              alt=""
              className="brand-mark"
            />
            <span className="brand-name">FAB&apos;S</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <Button asChild className="nav-booking">
            <a href={generalBooking} target="_blank" rel="noreferrer">
              Book Appointment <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Button>

          <button
            type="button"
            className="menu-trigger"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}
        >
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              <span>{label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-nav__booking"
            href={generalBooking}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Start booking on WhatsApp <MessageCircle size={18} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/manus-storage/fabs-hero-bridal-editorial_69cf1236.jpg"
          alt="Elegant bridal beauty look in a softly lit salon setting"
        />
        <div className="hero__veil" />
        <img
          className="hero__monogram"
          src="/manus-storage/fabs-logo-mark_a7c79107.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero__content container">
          <p className="hero__location">
            <MapPin size={15} aria-hidden="true" /> E-11/2 <span /> I-8 Markaz
          </p>
          <p className="eyebrow eyebrow--light">Fab&apos;s Salon & Bridal Lounge</p>
          <h1 id="hero-title">
            Beauty, Bridal <em>&amp; You</em>
            <br /> Elevated.
          </h1>
          <p className="hero__copy">
            Experience premium beauty and bridal services at Fab&apos;s Salon & Bridal Lounge in Islamabad.
          </p>
          <div className="hero__actions">
            <Button asChild className="button-champagne">
              <a href={generalBooking} target="_blank" rel="noreferrer">
                Book Your Appointment <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link text-link--light" href="#services">
              Explore Services <ChevronRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero__scroll-cue" aria-hidden="true">
          <span /> Scroll to discover
        </div>
      </section>

      <section className="trust-strip" aria-label="Salon highlights">
        <div className="container trust-grid">
          <div>
            <strong>4.7<span>★</span></strong>
            <p>Google rating</p>
          </div>
          <div>
            <strong>4,000<span>+</span></strong>
            <p>Google reviews</p>
          </div>
          <div>
            <strong>02</strong>
            <p>Islamabad locations</p>
          </div>
          <a
            className="trust-follow"
            href="https://www.instagram.com/fabs_salon/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={17} aria-hidden="true" /> Follow Fab&apos;s Salon <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="about" className="about-section section-space">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <img
                src="/manus-storage/fabs-hair-editorial_b5086b40.jpg"
                alt="Salon hair styling in a warm, refined beauty setting"
                loading="lazy"
              />
            </div>
            <div className="about-stamp" aria-hidden="true">
              <span>Beauty</span><i /> <span>Bridal</span><i /> <span>Salon</span>
            </div>
          </div>
          <div className="about-copy">
            <SectionHeading
              eyebrow="The Fab's experience"
              title="A beautiful moment, considered from every angle."
              copy="From everyday beauty to milestone bridal looks, Fab's brings together a professional salon experience, a bridal-focused point of view, and two convenient Islamabad locations."
            />
            <div className="about-points">
              <div><span>01</span> Beauty with a considered finish</div>
              <div><span>02</span> Bridal moments with room to shine</div>
              <div><span>03</span> E-11/2 and I-8 Markaz, Islamabad</div>
            </div>
            <a className="text-link" href="#gallery">
              Discover Fab&apos;s <ChevronRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-space">
        <div className="container">
          <div className="services-topline">
            <SectionHeading
              eyebrow="Choose your moment"
              title="Beauty, in every detail."
              copy="Explore our beauty categories, then start your appointment enquiry directly on WhatsApp."
            />
            <p className="services-note">A direct note to Fab&apos;s is all it takes; timings and details follow on WhatsApp.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.name} className={`service-card service-card--${index + 1}`}>
                  <img src={service.image} alt={`${service.name} service representative image`} loading="lazy" />
                  <div className="service-card__shade" />
                  <div className="service-card__meta">
                    <span className="service-card__icon"><Icon size={17} aria-hidden="true" /></span>
                    <span>0{index + 1}</span>
                  </div>
                  <div className="service-card__content">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href={serviceBooking(service.name)} target="_blank" rel="noreferrer">
                      Book This Service <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="bridal" className="bridal-section">
        <div className="bridal-section__image">
          <img
            src="/manus-storage/fabs-bridal-portrait_e2970bdc.jpg"
            alt="Representative bridal beauty portrait with contemporary South Asian styling"
            loading="lazy"
          />
        </div>
        <div className="bridal-section__content">
          <p className="eyebrow eyebrow--light">The bridal lounge</p>
          <p className="bridal-script">Your moment</p>
          <h2>Your Bridal Moment,<br />Perfected.</h2>
          <p>
            From bridal makeup and wedding beauty through to consultation and portfolio inspiration, start a conversation with the Fab&apos;s team about your day.
          </p>
          <Button asChild className="button-champagne">
            <a href={bridalBooking} target="_blank" rel="noreferrer">
              Enquire About Bridal <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      <section id="gallery" className="gallery-section section-space">
        <div className="container">
          <div className="gallery-intro">
            <SectionHeading
              eyebrow="The visual diary"
              title="A closer look at beauty, bridal, and beyond."
              copy="A champagne-lit glimpse into beauty and bridal moments. Visit Fab's Instagram for the current salon portfolio."
            />
            <a
              className="text-link"
              href="https://www.instagram.com/fabs_salon/"
              target="_blank"
              rel="noreferrer"
            >
              View More on Instagram <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <a
                key={image.label}
                className={`gallery-tile gallery-tile--${index + 1}`}
                href="https://www.instagram.com/fabs_salon/"
                target="_blank"
                rel="noreferrer"
                aria-label={`View Fab's Salon Instagram for ${image.label} inspiration`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span><i>{image.label}</i><ArrowUpRight size={17} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="locations-section section-space">
        <div className="container">
          <div className="locations-heading">
            <SectionHeading
              eyebrow="Find your Fab's"
              title="Two beautiful spaces, one easy conversation."
              copy="Choose your nearest branch, then reach Fab's directly for appointment timings and location help."
            />
          </div>
          <div className="location-grid">
            {[
              {
                branch: "E-11/2",
                address: "Nafees Mansion, PMCHS, E-11/2, Islamabad",
                message: "Hi Fab's Salon, could you please share directions to the E-11/2 branch?",
              },
              {
                branch: "I-8 Markaz",
                address: "I-8 Markaz, Islamabad",
                message: "Hi Fab's Salon, could you please share directions to the I-8 Markaz branch?",
              },
            ].map((location, index) => (
              <article key={location.branch} className="location-card">
                <span className="location-card__number">0{index + 1}</span>
                <MapPin size={23} aria-hidden="true" />
                <p className="eyebrow">Fab&apos;s Salon</p>
                <h3>{location.branch}</h3>
                <p className="location-card__address">{location.address}</p>
                <div className="location-card__actions">
                  <a href={whatsappLink(location.message)} target="_blank" rel="noreferrer">
                    Ask for directions <ChevronRight size={16} aria-hidden="true" />
                  </a>
                  <a href={generalBooking} target="_blank" rel="noreferrer">
                    Book Appointment <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-section__halo" aria-hidden="true" />
        <img
          className="booking-monogram"
          src="/manus-storage/fabs-logo-mark_a7c79107.png"
          alt=""
          aria-hidden="true"
        />
        <div className="container booking-panel">
          <p className="eyebrow eyebrow--light">It starts with hello</p>
          <h2>Ready for your<br /><em>next look?</em></h2>
          <p>Book your appointment directly with Fab&apos;s Salon & Bridal Lounge.</p>
          <div className="booking-panel__actions">
            <Button asChild className="button-champagne">
              <a href={generalBooking} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
              </a>
            </Button>
            <a className="button-outline-light" href={phoneLink}>
              <Phone size={17} aria-hidden="true" /> Call 0335-5593228
            </a>
          </div>
          <p className="booking-panel__note">Availability and confirmation are handled directly by the Fab&apos;s team.</p>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand brand--footer" href="#home" aria-label="Fab's Salon home">
              <img src="/manus-storage/fabs-logo-mark_a7c79107.png" alt="" className="brand-mark" />
              <span className="brand-name">FAB&apos;S</span>
            </a>
            <p>Beauty <span /> Bridal <span /> Salon</p>
            <p className="footer-intro">A considered beauty and bridal experience in Islamabad.</p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Quick links</p>
            {navItems.slice(0, 6).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
          <div className="footer-links">
            <p className="footer-label">Social</p>
            <a href="https://www.instagram.com/fabs_salon/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
            <a href="https://www.facebook.com/fabssaloon/" target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook</a>
            <a href="https://www.tiktok.com/@fab.s_salon" target="_blank" rel="noreferrer"><Music2 size={15} /> TikTok</a>
          </div>
          <div className="footer-contact">
            <p className="footer-label">Contact</p>
            <a href={phoneLink}>0335-5593228</a>
            <p>Islamabad</p>
            <a className="footer-booking" href={generalBooking} target="_blank" rel="noreferrer">
              Book Your Appointment <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Fab&apos;s Salon & Bridal Lounge. All rights reserved.</p>
          <a href="#home">Back to top <ChevronRight size={15} aria-hidden="true" /></a>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Quick booking actions">
        <a href={whatsappBase} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>WhatsApp</span></a>
        <a href={phoneLink}><Phone size={17} /><span>Call</span></a>
        <a href={generalBooking} target="_blank" rel="noreferrer"><Sparkles size={17} /><span>Book</span></a>
      </nav>
    </main>
  );
}
