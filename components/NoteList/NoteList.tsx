import css from "./NoteList.module.css";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api";
import type { Note } from "../../types/note";
import Link from "next/link";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();
  const [deletingNoteId, setDeletingNoteId] = useState<string | null>(null);

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onMutate: (noteId: string) => {
      setDeletingNoteId(noteId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onSettled: () => {
      setDeletingNoteId(null);
    },
  });

  if (notes.length === 0 || !notes) {
    return null;
  }

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li className={css.listItem} key={note.id}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <Link href={`/notes/${note.id}`} className={css.detailsLink}>
              View details
            </Link>
            <button
              className={css.button}
              onClick={() => deleteNoteMutation.mutate(note.id)}
              disabled={deletingNoteId === note.id}
            >
              {deleteNoteMutation.isPending && deletingNoteId === note.id
                ? "Deleting..."
                : "Delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
