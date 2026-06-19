import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetails from "./NoteDetails.client";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotesPage({ params }: Props) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetails />
      </HydrationBoundary>
    </div>
  );
}
