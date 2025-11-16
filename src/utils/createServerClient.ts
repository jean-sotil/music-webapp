import { dehydrate, QueryClient } from "@tanstack/react-query";

export const createServerQueryClient = () => new QueryClient();

export const dehydrateQueryClientState = dehydrate;
