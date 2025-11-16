import { HydrationBoundary } from "@/components/atoms/HydrationBoundary";
import Container from "@/components/molecules/Container";
import Hero from "@/components/molecules/Hero";
import ReleasesSlider from "@/components/organisms/ReleasesSlider";
import { getReleases } from "@/queries";
import {
  createServerQueryClient,
  dehydrateQueryClientState,
} from "@/utils/createServerClient";

export default async function Home() {
  const queryClient = createServerQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["releases"],
    queryFn: getReleases,
  });

  const dehydratedState = dehydrateQueryClientState(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container className="mx-auto w-full">
        <section id="hero" className="mb-16">
          <Hero />
        </section>
        <section id="releases" className="mb-16">
          <ReleasesSlider />
        </section>
        <section id="music" className="mb-16"></section>
        <section id="contact" className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-4xl text-primary uppercase">
            Get in Touch
          </h2>
          <p className="text-xl">
            Scroll to the bottom or{" "}
            <a href={`mailto:`} className="text-secondary hover:underline">
              click here
            </a>{" "}
            to send an email!
          </p>
        </section>
      </Container>
    </HydrationBoundary>
  );
}
