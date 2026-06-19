// "use client";

// import css from "./Pagination.module.css";
// import type { ComponentType } from "react";
// import ReactPaginateModule from "react-paginate";
// import type { ReactPaginateProps } from "react-paginate";

// type ModuleWithDefault<T> = { default: T };

// const ReactPaginate = (
//   ReactPaginateModule as unknown as ModuleWithDefault<
//     ComponentType<ReactPaginateProps>
//   >
// ).default;

import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({selected}: { selected: number}) => onPageChange(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
