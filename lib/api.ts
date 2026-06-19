import axios from "axios";
import type { Note, CreateNote } from "../types/note";

export interface FetchNotesResponse {
  totalPages: number;
  notes: Note[];
}

interface FetchNoteParams {
  search?: string;
  page?: number;
  perPage?: number;
}

const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN as string;
const apiClient = axios.create({
  baseURL: "https://notehub-public.goit.study/api/notes",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchNotes = async (
  params: FetchNoteParams,
): Promise<FetchNotesResponse> => {
  const response = await apiClient.get<FetchNotesResponse>("", { params });
  return response.data;
};

export const createNote = async (noteData: CreateNote): Promise<Note> => {
  const response = await apiClient.post<Note>("", noteData);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<{ id: string }> => {
  const response = await apiClient.delete<{ id: string }>(`/${noteId}`);
  return response.data;
};

export async function fetchNoteById(noteId: string): Promise<Note> {
  const { data } = await apiClient.get<Note>(`/${noteId}`);
  return data;
}

export const updateNote = async (
  noteId: string,
  noteData: Partial<CreateNote>,
): Promise<Note> => {
  const response = await apiClient.patch<Note>(`/${noteId}`, noteData);
  return response.data;
};
