import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>MarkitUp - Social Media Unleashed</title>
        <meta
          name="description"
          content="Created for Fueler Proof of Work Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={styles.header}
      >
        {/* Left */}
        <div className={styles.left}>
          <Image src="/logo.svg" alt="MarkitUp Logo" width={180} height={36} />
        </div>

        {/* Middle */}
        <div className={styles.middle}>
          <HeaderLink to="/" isActive>
            Home
          </HeaderLink>
          <HeaderLink to="#">Services</HeaderLink>
          <HeaderLink to="#">About</HeaderLink>
          <HeaderLink to="#">Contact</HeaderLink>
        </div>

        {/* Right */}
        <div className={styles.right}>
          {/* Discord button */}
          <Link href="#discord" passHref>
            <a className={styles.discordButton}>
              Join us on{" "}
              <Image
                alt="Discord"
                src="/images/discord-logo.svg"
                height="20"
                width="94.8"
              />
            </a>
          </Link>
        </div>
      </motion.header>

      {/* Hero */}
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          {/* Text */}
          <div className={styles.text}>
            {/* Main */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={styles.heading}
            >
              Join India&rsquo;s First{" "}
              <motion.span className={styles.secondaryDark}>
                Builders Community
              </motion.span>
            </motion.h1>
            <p
              className={styles.content}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            >
              We help individuals to grow by unleashing the potential of social
              media 🚀
            </p>
          </div>
          {/* Illustration */}
          <div className={styles.illustration}>
            {/* Left */}
            <div className={styles.left}>
              <h3>Trusted by</h3>
              <div className={styles.image}>
                <Image
                  src="/images/trusted-by.svg"
                  width="195"
                  height="60"
                  alt="People"
                />
              </div>
            </div>

            {/* Middle Illsutration */}
            <div className={styles.middle}>
              <Image
                src="/images/hero-img.png"
                alt="Illustration of people in an office environment"
                width={710}
                height={410}
              />
            </div>

            {/* Right */}
            <div className={styles.right}>
              <div className={styles.image}>
                <Image
                  src="/images/trophy.svg"
                  width="43"
                  height="43"
                  alt="People"
                />
              </div>
              <h4>
                Best Community <span className={styles.strong}>Award 2022</span>
              </h4>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.top}>
            <div className={styles.stroke}></div>
            <div className={styles.stroke}></div>
          </div>

          <ul className={styles.middle}>
            <li>
              <div className={styles.left}>
                <Image
                  src="/images/groups.svg"
                  width="73"
                  height="60"
                  alt="Groups"
                />
              </div>
              <div className={styles.right}>
                <h4>40,000+</h4>
                <span className={styles.subtext}>Community Members</span>
              </div>
            </li>
            <li>
              <div className={styles.left}>
                <Image
                  src="/images/laptop.svg"
                  width="79"
                  height="66"
                  alt="Laptop"
                />
              </div>
              <div className={styles.right}>
                <h4>300+</h4>
                <span className={styles.subtext}>Discord Servers</span>
              </div>
            </li>
            <li>
              <div className={styles.left}>
                <Image
                  src="/images/rocket-outline.svg"
                  width="49"
                  height="70"
                  alt="Groups"
                />
              </div>
              <div className={styles.right}>
                <h4>1000+</h4>
                <span className={styles.subtext}>Side projects done</span>
              </div>
            </li>
          </ul>

          <div className={styles.bottom}>
            <div className={styles.stroke}></div>
            <div className={styles.stroke}></div>
            <div className={styles.stroke}></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        Created with &lt;3 by{" "}
        <Link href="https://twitter.com/Just_Moh_it" passHref>
          <a className={styles.underline}>Mohit Yadav</a>
        </Link>
      </footer>
    </div>
  );
}

const HeaderLink = ({ to, children, isActive }) => {
  return (
    <Link passHref href={to}>
      <a
        className={[styles.headerLink, isActive ? styles.active : ""].join(" ")}
      >
        {children}
      </a>
    </Link>
  );
};
