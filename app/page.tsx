import Image from "next/image";
import CopyPhone from "./components/CopyPhone";
import {
  ArrowIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  PinIcon,
  Stars,
  WhatsAppIcon,
} from "./components/Icons";
import s from "./page.module.css";

import abula from "../public/images/amala-abula.jpg";
import abulaClose from "../public/images/amala-abula-close.jpg";
import efoRiro from "../public/images/swallow-efo-riro.jpg";
import pepperedMeat from "../public/images/peppered-meat.jpg";
import tableSpread from "../public/images/table-spread.jpg";
import cocktailPineapple from "../public/images/cocktail-pineapple.jpg";
import cocktailBlue from "../public/images/cocktail-blue.jpg";
import loungeInterior from "../public/images/lounge-interior.jpg";
import dateSetup from "../public/images/date-setup.jpg";
import dateToast from "../public/images/date-toast.jpg";

const wa = (msg: string) => `https://wa.me/2348162900017?text=${encodeURIComponent(msg)}`;

const BIZ = {
  address: "52 Adeniran Ogunsanya Street, Surulere, Lagos",
  phoneDisplay: "0816 290 0017",
  phoneTel: "+2348162900017",
  whatsapp: "https://wa.me/2348162900017",
  reserve: wa("Hi Samiat Ololade! I'd like to reserve a table."),
  amalaDate: wa("Hi Samiat Ololade! When is the next Amala Date? I'd like to book for two."),
  instagram: "https://www.instagram.com/s.o_restaurant_lagos/",
  instagramHandle: "@s.o_restaurant_lagos",
  facebook: "https://www.facebook.com/p/Samiat-Ololade-Restaurantng-61563611174731/",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=SO+Restaurant+And+Lounge+52+Adeniran+Ogunsanya+St+Surulere+Lagos",
  reviews:
    "https://www.google.com/maps/search/?api=1&query=SO+Restaurant+And+Lounge+52+Adeniran+Ogunsanya+St+Surulere+Lagos",
};

const DISHES = [
  {
    no: "02",
    name: "Swallow & efo riro",
    note: "Spinach stew loaded with prawns and assorted, served with a soft swallow.",
    img: efoRiro,
    alt: "Bowl of efo riro with prawns beside wrapped swallow on a dark plate",
  },
  {
    no: "03",
    name: "Peppered meat",
    note: "Charred, glossy, tossed with onions and peppers. Order it for the table.",
    img: pepperedMeat,
    alt: "Peppered meat with green and red peppers in a heart-shaped white dish",
  },
  {
    no: "04",
    name: "The rice spread",
    note: "Ofada with ayamase, jollof and fried rice, with plantain and fish on the side.",
    img: tableSpread,
    alt: "Overhead view of ofada rice with ayamase, jollof rice and fried rice on a marble table",
  },
];

export default function Home() {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerInner}>
          <a href="#top" className={s.wordmark} aria-label="Samiat Ololade Restaurant, back to top">
            <span className={s.wordmarkName}>Samiat Ololade</span>
            <span className={s.wordmarkSub}>Restaurant · Surulere</span>
          </a>
          <nav className={s.nav} aria-label="Sections">
            <a href="#dishes">Dishes</a>
            <a href="#amala-date">Amala Date</a>
            <a href="#visit">Visit</a>
          </nav>
          <a href={BIZ.reserve} className={s.headerCta} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={16} />
            Reserve
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className={s.hero}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>Amala · Abula · Cocktails — Surulere, Lagos</p>
            <h1 className={s.heroTitle}>
              Bring a date.
              <br />
              We&rsquo;ll bring <em>the amala.</em>
            </h1>
            <p className={s.heroLede}>
              Abula done properly (soft amala, gbegiri, ewedu and a deep pepper stew), a cocktail
              list worth lingering over, and a warm room on Adeniran Ogunsanya. We&rsquo;re open 24
              hours, so the evening ends when you say so.
            </p>
            <div className={s.ctaRow}>
              <a href={BIZ.reserve} className={s.btnPrimary} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                Reserve on WhatsApp
              </a>
              <a href={BIZ.instagram} className={s.btnGhost} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} />
                Follow on Instagram
              </a>
            </div>
            <a href="#reviews" className={s.heroProof}>
              <Stars rating={4.6} size={15} idPrefix="hero-star" />
              <span>
                <strong>4.6</strong> from 109 Google reviews
              </span>
            </a>
          </div>

          <div className={s.heroArt}>
            <figure className={s.heroArch}>
              <Image
                src={cocktailPineapple}
                alt="Pineapple cocktail in a cut-crystal glass with a paper umbrella, on a dark bar"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 860px) 78vw, 36vw"
                className={s.cover}
                style={{ objectPosition: "50% 45%" }}
              />
            </figure>
            <figure className={s.heroPlate}>
              <Image
                src={abulaClose}
                alt="Abula: amala with gbegiri, ewedu and pepper stew with assorted meat"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 860px) 52vw, 22vw"
                className={s.cover}
              />
            </figure>
            <span className={s.hoursBadge}>
              <span className={s.hoursBig}>24</span>
              <span className={s.hoursSmall}>hours,
                <br />
                every day</span>
            </span>
          </div>
        </section>

        <div className={s.factRule} role="list" aria-label="At a glance">
          <span role="listitem">Amala &amp; abula specialists</span>
          <span role="listitem">Cocktails</span>
          <span role="listitem">₦10,000–20,000 per person</span>
          <span role="listitem">Open 24 hours</span>
        </div>

        {/* SIGNATURE DISHES */}
        <section id="dishes" className={s.section}>
          <div className={s.sectionHead}>
            <p className={s.kicker}>Signature dishes</p>
            <h2 className={s.h2}>
              The house plate, and <em>what to pour with it.</em>
            </h2>
          </div>

          <article className={s.feature}>
            <figure className={s.featureImg}>
              <Image
                src={abula}
                alt="Abula plated on white: amala spread beneath gbegiri, ewedu and red pepper stew with shaki, ponmo and goat meat"
                fill
                placeholder="blur"
                sizes="(max-width: 860px) 100vw, 58vw"
                className={s.cover}
              />
            </figure>
            <div className={s.featureCopy}>
              <span className={s.dishNo}>01</span>
              <h3 className={s.h3}>Amala &amp; abula</h3>
              <p>
                The reason to come. A bed of soft, earthy amala under gbegiri and ewedu, finished
                with our pepper stew and a generous pile of assorted: shaki, ponmo, goat. It&rsquo;s
                Ibadan comfort food, plated like it deserves a reservation.
              </p>
              <p className={s.featureAside}>Eat it with your hands. Nobody here will judge.</p>
            </div>
          </article>

          <ul className={s.dishGrid}>
            {DISHES.map((d) => (
              <li key={d.no} className={s.dish}>
                <figure className={s.dishImg}>
                  <Image src={d.img} alt={d.alt} fill placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 30vw" className={s.cover} />
                </figure>
                <span className={s.dishNo}>{d.no}</span>
                <h3 className={s.h3sm}>{d.name}</h3>
                <p>{d.note}</p>
              </li>
            ))}
          </ul>

          <article className={s.bar}>
            <div className={s.barCopy}>
              <span className={s.dishNo}>05</span>
              <h3 className={s.h3}>The cocktail bar</h3>
              <p>
                Fresh pineapple, cut crystal, something blue and a little dangerous. The bar is
                the other half of the evening: order a round while the amala is on its way, and
                another once it&rsquo;s gone.
              </p>
              <a href={BIZ.instagram} className={s.textLink} target="_blank" rel="noopener noreferrer">
                See what&rsquo;s pouring on Instagram <ArrowIcon size={16} />
              </a>
            </div>
            <figure className={s.barImgTall}>
              <Image src={cocktailBlue} alt="Frosted blue cocktail on the bar in front of backlit bottles" fill placeholder="blur" sizes="(max-width: 860px) 50vw, 24vw" className={s.cover} />
            </figure>
            <figure className={s.barImgShort}>
              <Image src={cocktailPineapple} alt="Pineapple cocktail garnished with dried pineapple and a green paper umbrella" fill placeholder="blur" sizes="(max-width: 860px) 50vw, 24vw" className={s.cover} style={{ objectPosition: "50% 40%" }} />
            </figure>
          </article>
        </section>

        {/* AMALA DATE */}
        <section id="amala-date" className={s.date}>
          <div className={s.dateInner}>
            <div className={s.dateHead}>
              <p className={s.kickerGold}>Our recurring evening</p>
              <h2 className={s.dateTitle}>
                Amala <em>Date</em>
              </h2>
              <p className={s.dateLede}>
                Amala Date is the evening we built the place around: amala and abula paired with
                cocktails, set for two. Roses, candlelight, a toast before the food lands. It&rsquo;s
                the Nigerian comfort meal you grew up on, turned into the night out you&rsquo;ll
                actually remember.
              </p>
              <a href={BIZ.amalaDate} className={s.btnGold} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                Ask about the next Amala Date
              </a>
            </div>

            <div className={s.dateGallery}>
              <figure className={`${s.dateImg} ${s.dateImgA}`}>
                <Image src={dateSetup} alt="Rose-covered arch with candles and petals scattered across the floor, set for a couple" fill placeholder="blur" sizes="(max-width: 860px) 60vw, 30vw" className={s.cover} />
              </figure>
              <figure className={`${s.dateImg} ${s.dateImgB}`}>
                <Image src={dateToast} alt="Two glasses of rosé raised in a toast beside candles and rose petals" fill placeholder="blur" sizes="(max-width: 860px) 45vw, 20vw" className={s.cover} style={{ objectPosition: "40% 0%" }} />
              </figure>
              <figure className={`${s.dateImg} ${s.dateImgC}`}>
                <Image src={loungeInterior} alt="The lounge: green velvet booths, a wall of Nigerian portraits and a mirror ball" fill placeholder="blur" sizes="(max-width: 860px) 45vw, 20vw" className={s.cover} style={{ objectPosition: "50% 70%" }} />
              </figure>
            </div>

            <ol className={s.courses}>
              <li>
                <span className={s.courseNo}>I</span>
                <h3>Arrive</h3>
                <p>Cocktails first. Take the booth under the portraits and let the room warm up.</p>
              </li>
              <li>
                <span className={s.courseNo}>II</span>
                <h3>Sit down</h3>
                <p>Amala or abula, the full works, with assorted to share and a second round.</p>
              </li>
              <li>
                <span className={s.courseNo}>III</span>
                <h3>Stay</h3>
                <p>We&rsquo;re open 24 hours. Nobody is stacking chairs around you.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className={s.section}>
          <div className={s.sectionHead}>
            <p className={s.kicker}>Visit</p>
            <h2 className={s.h2}>
              Tucked away on <em>Adeniran Ogunsanya.</em>
            </h2>
          </div>

          <div className={s.visit}>
            <dl className={s.visitList}>
              <div className={s.visitRow}>
                <dt><PinIcon size={18} /> Address</dt>
                <dd>
                  {BIZ.address}
                  <a href={BIZ.directions} className={s.textLink} target="_blank" rel="noopener noreferrer">
                    Get directions on Google Maps <ArrowIcon size={16} />
                  </a>
                </dd>
              </div>
              <div className={s.visitRow}>
                <dt><ClockIcon size={18} /> Hours</dt>
                <dd>
                  <span className={s.visitBig}>Open 24 hours</span>
                  Every day. Lunch, dinner, or amala at 3am.
                </dd>
              </div>
              <div className={s.visitRow}>
                <dt><WhatsAppIcon size={18} /> Phone &amp; WhatsApp</dt>
                <dd>
                  <a href={`tel:${BIZ.phoneTel}`} className={s.visitBig}>{BIZ.phoneDisplay}</a>
                  <span className={s.phoneActions}>
                    <CopyPhone display={BIZ.phoneDisplay} value={BIZ.phoneDisplay} className={s.copyBtn} />
                    <a href={BIZ.whatsapp} className={s.copyBtn} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon size={16} /> Open WhatsApp
                    </a>
                  </span>
                </dd>
              </div>
              <div className={s.visitRow}>
                <dt>Price</dt>
                <dd>₦10,000–20,000 per person</dd>
              </div>
              <div className={s.visitRow}>
                <dt>Follow</dt>
                <dd className={s.socials}>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon size={18} /> {BIZ.instagramHandle}
                  </a>
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer">
                    <FacebookIcon size={18} /> Facebook
                  </a>
                </dd>
              </div>
            </dl>

            <figure className={s.visitImg}>
              <Image src={loungeInterior} alt="Inside Samiat Ololade: velvet booths, checkerboard floor and a gallery wall of portraits" fill placeholder="blur" sizes="(max-width: 860px) 100vw, 40vw" className={s.cover} style={{ objectPosition: "50% 72%" }} />
              <figcaption>Look out for the gallery wall. We&rsquo;re easy to miss from the street, so follow the directions link.</figcaption>
            </figure>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className={s.reviews}>
          <div className={s.reviewsInner}>
            <div className={s.score}>
              <span className={s.scoreNum}>4.6</span>
              <Stars rating={4.6} size={24} idPrefix="review-star" className={s.scoreStars} />
              <span className={s.scoreMeta}>109 reviews on Google</span>
            </div>
            <blockquote className={s.quote}>
              <p>&ldquo;Food was made fresh, very tasty and the portion sizes were really good.&rdquo;</p>
              <footer>Onyinye Okolie, Google review</footer>
            </blockquote>
            <a href={BIZ.reviews} className={s.textLink} target="_blank" rel="noopener noreferrer">
              Read all reviews on Google <ArrowIcon size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div>
            <p className={s.footerMark}>Samiat Ololade</p>
            <p className={s.footerSub}>Restaurant · Home of the Amala Date</p>
          </div>
          <div className={s.footerCols}>
            <p>
              {BIZ.address}
              <br />
              Open 24 hours ·{" "}
              <a href={`tel:${BIZ.phoneTel}`}>{BIZ.phoneDisplay}</a>
            </p>
            <p className={s.footerLinks}>
              <a href={BIZ.reserve} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={BIZ.directions} target="_blank" rel="noopener noreferrer">Directions</a>
            </p>
          </div>
        </div>
        <p className={s.copyright}>© {new Date().getFullYear()} Samiat Ololade Restaurant, Surulere, Lagos.</p>
      </footer>
    </>
  );
}
