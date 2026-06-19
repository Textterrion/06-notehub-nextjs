"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error }: Props) {
  return <p>Failed to load notes. {error.message}</p>;
}
