import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Notes from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { search: "", page: 1, perPage: 12 }],
    queryFn: () => fetchNotes({ search: "", page: 1, perPage: 12 }),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Notes />
      </HydrationBoundary>
    </div>
  );
}
