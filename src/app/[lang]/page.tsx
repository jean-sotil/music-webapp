import Container from "@/components/atoms/Container";
import Hero from "@/components/molecules/Hero";
import ReleasesSlider from "@/components/organisms/ReleasesSlider";

const sections = [
  { id: "hero", component: <Hero /> },
  { id: "releases", component: <ReleasesSlider /> },
  { id: "music", component: <section id="music" className="mb-16"></section> },
  {
    id: "contact",
    component: (
      <section id="contact" className="mb-16 text-center">
        <h2 className="mb-6 font-bold text-4xl text-primary uppercase">
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
    ),
  },
];

export default function Home() {
  return (
    <Container className="mx-auto w-full">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-16">
          {section.component}
        </section>
      ))}
    </Container>
  );
}
