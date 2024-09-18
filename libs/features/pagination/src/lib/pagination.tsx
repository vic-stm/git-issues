import React from 'react';
import styles from './pagination.module.css';
interface PaginationProps {
  hasNextPage: boolean;
  onNextClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPreviousClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  page: number;
}
export function Pagination({
  hasNextPage,
  onNextClick,
  onPreviousClick,
  page,
}: PaginationProps) {
  console.log(page)
  return (
    <div className={styles['container']}>
      <button
        className={page === 1 ? styles['disabled'] : styles['enabled']}
        disabled={page === 1}
        onClick={onPreviousClick}
      >
        Página Anterior
      </button>

      <span>Página {page}</span>

      <button
        className={!hasNextPage ? styles['disabled'] : styles['enabled']}
        disabled={!hasNextPage}
        onClick={onNextClick}
      >
        Siguiente Página
      </button>
    </div>
  );
}

export default Pagination;
