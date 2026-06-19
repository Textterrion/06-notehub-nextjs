import css from "./SearchBox.module.css";

interface SearchBoxProps {
  textInput: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({ textInput, onSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      name="search"
      placeholder="Search notes"
      value={textInput}
      onChange={e => onSearch(e.target.value)}
    />
  );
}
