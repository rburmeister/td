"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {

      gsap.to("#medicalProfessionalImage", {
          translateY: "-100px",
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: '+=100px',
              end: "+=1000px",
              scrub: true,
          }
      });

      gsap.to("#medicalProfessionalFamilyImage", {
          translateY: "-100px",
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: 'top',
              end: "+=1000px",
              scrub: true,
          }
      });
   
      gsap.to("#plusSignIcon", {
        opacity: 1,
        transform: "translate(0,0) rotate(0)",
        scrollTrigger: {
            trigger: "#plusSignIcon",
            start: "top bottom",
            end: "+=300",
            scrub: true,
            easing: "none"
          }
      });

      gsap.to("#womanProfessionalImage", {
        opacity: 1,
        transform: "translate(0,0) rotate(0) scale(1)",
        scrollTrigger: {
            trigger: "#womanProfessionalImage",
            start: "top bottom",
            end: "+=300",
            scrub: true,
            easing: "none"
          }
      });

      gsap.to("#dotGridImage", {
        opacity: 1,
        transform: "translate(0,0) rotate(0)",
        scrollTrigger: {
            trigger: "#dotGridImage",
            start: "top bottom",
            end: "+=300",
            scrub: true,
            easing: "none"
          }
      });

      gsap.to("#nationwideHealthcareSection", {
        opacity: 1,
        transform: "translate(0,0) rotate(0)",
        scrollTrigger: {
            trigger: "#nationwideHealthcareSection",
            start: "top bottom",
            end: "+=300",
            scrub: true,
            easing: "none"
          }
      });

    });
  
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <Image
            src="/medical-professional.jpg"
            alt="Medical professional with stethoscope looking at chart" 
            id="medicalProfessionalImage"
            className={styles.medicalProfessionalImage}
            width={332}
            height={391}
            unoptimized 
          />
          <div className={styles.box1} id="box1"></div>
          <div className={styles.box2} id="box2"></div>
          <span className={`${styles.label} kronaOne`}>Choose Your</span>
          {/* <div className={styles.largeText}>
            <span className={`${styles.large} kronaOne`}>ACC</span>
            <span className={`${styles.large} kronaOne`}>ESS</span>
          </div> */}
          <Image
            src="/ACCESS.png"
            alt="ACCESS text" 
            id="access-text"
            className={styles.accessTextImage}
            width={776}
            height={548}
            unoptimized 
          />
          <h1>Expand your provider network <span className="messinaSerifItalicBold">anywhere</span> in the country. Or lease just the network locations you need. With MagnaCare Access, <span className="messinaSansBold">the choice is yours.</span></h1>
          <Image
            src="/medical-professional-family.jpg"
            alt="Medical professional with father and daughter"
            id="medicalProfessionalFamilyImage"
            className={styles.medicalProfessionalFamilyImage}
            width={369}
            height={508}
            unoptimized 
          />
        </div>
      </section>

      {/* Email Sign up Section */}
      <section className={styles.emailSignUp}>
        <div className={styles.wrap}>
          <Image
              src="/plus-sign-icon.png"
              alt="Plus sign icon"
              id="plusSignIcon"
              className={styles.medicalProfessionalFamilyImage}
              width={126}
              height={126}
              unoptimized 
            />
           <form>
            <label htmlFor="email" hidden>Email Address</label>
            <input type="email" id="email" placeholder="Email Address" name="email" required />
            <button type="submit" aria-label="Learn more about our services" className="kronaOne">Learn More</button>
          </form>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className={styles.featuredImages}>
        <div className={styles.wrap}>
          <Image
            src="/woman-professional.jpg"
            alt="Woman professional smiling"
            id="womanProfessionalImage"
            className={styles.womanProfessionalImage}
            width={928}
            height={672}
            unoptimized 
          />
          <Image
            src="/dot-grid.png"
            alt="Grid of dots"
            id="dotGridImage"
            className={styles.dotGridImage}
            width={254}
            height={264}
            unoptimized 
          />
        </div>
      </section>

      {/* Nationwide Healthcare Section */}
      <section className={styles.nationwideHealthcare} id="nationwideHealthcareSection">
        <div className={styles.wrap}>
          <h2>Need to offer <span className="italic messinaSerifItalic">nationwide </span> access to health care providers?</h2>
          <div className={styles.contentWrap}>
            <div className={styles.content}>
              <p>MagnaCare has an extensive PPO network that includes all 50 states and Puerto Rico, with top-rated doctors and hospitals, as well as inpatient and outpatient services such as rehab centers, urgent care centers and ambulatory surgery centers.</p>
              <a href="/contact" aria-label="Contact us for more information" title="Learn more about how to contact us" className="kronaOne">Contact us</a>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/united-states-map.png"
                alt="Map of united states with circle indicator ovelayed in center"
                id="nationwideHealthcareImage"
                className={styles.nationwideHealthcareImage}
                width={640}
                height={395}
                unoptimized 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
