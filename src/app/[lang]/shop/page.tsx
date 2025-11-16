import { HydrationBoundary } from "@/components/atoms/HydrationBoundary";
import Title from "@/components/atoms/Title";
import ReleasesGrid from "@/components/organisms/ReleasesGrid";
import { getReleases } from "@/queries";
import {
  createServerQueryClient,
  dehydrateQueryClientState,
} from "@/utils/createServerClient";

export default async function ShopPage() {
  const queryClient = createServerQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["releases"],
    queryFn: getReleases,
  });

  const dehydratedState = dehydrateQueryClientState(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Title level={1}>Shop Page</Title>
      <ReleasesGrid />
    </HydrationBoundary>
  );
}
