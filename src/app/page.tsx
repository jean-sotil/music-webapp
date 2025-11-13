import Container from "@/components/atoms/Container";
import Hero from "@/components/molecules/Hero";
import ReleasesGrid from "@/components/organisms/ReleasesGrid";

// import ReleasesGrid from '@/components/ReleasesGrid';
// import MusicEmbed from '@/components/MusicEmbed';
// import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <Container className="w-full mx-auto">
      <div id="hero">
        <Hero />
      </div>

      <section id="releases">
        <ReleasesGrid />
      </section>

      <hr className="border-t border-secondary/20 my-16" />

      {/* ==================================================
        SECTION 3: MUSIC EMBED
        (Will be replaced by <MusicEmbed /> in Task 9)
        ==================================================
      */}
      <section id="music" className="mb-16"></section>

      {/* ==================================================
        SECTION 4: CONTACT (The actual contact section is in the footer, 
        but we'll include a link or a brief section here if needed)
        ==================================================
      */}
      <section id="contact" className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary uppercase">
          Get in Touch
        </h2>
        <p className="text-xl">
          Scroll to the bottom or{" "}
          <a href={`mailto:`} className="text-secondary hover:underline">
            click here
          </a>
          to send an email!
        </p>
      </section>
    </Container>
  );
}
