import { useRepoIssues } from '@git-issues/api';
import { Issue } from '@git-issues/ui';
import { useEffect, useState } from 'react';
import styles from './issue-list.module.css';
import { Pagination } from '@git-issues/pagination';

interface IssueListProps {
  repoUrl: string;
}

export function IssueList({ repoUrl }: IssueListProps) {
  const [page, setPage] = useState(1);
  const { data: issues, isLoading, error } = useRepoIssues(repoUrl);
  const [issuesToShow, setIssuesToShow] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const totalIssues = issues?.length;
  const issuesPerPage = 5;
  const totalPages = totalIssues / issuesPerPage;

  useEffect(() => {
    const firstIssue = issuesPerPage * (page - 1);
    const pageIssues =
      issues?.slice(firstIssue, firstIssue + issuesPerPage) || [];
    setIssuesToShow(pageIssues);
  }, [issues, page]);

  useEffect(() => {
    if (page === totalPages || totalIssues < issuesPerPage) {
      setHasNextPage(false);
    } else {
      setHasNextPage(true);
    }
  }, [page, totalPages]);

  if (isLoading) {
    return <div className={styles['infoMessage']}>Cargando issues...</div>;
  }

  if (error) {
    return <div className={styles['infoMessage']}>El repositorio indicado es privado o no existe</div>;
  }

  if (!issues.length) {
    return <div className={styles['infoMessage']}>El repositorio indicado se encuentra sin issues</div>;
  }

  return (
    <div className={styles['container']}>
      <ul>
        {issuesToShow.map((issue: any) => (
          <li key={issue.id}>
            <Issue
              body={issue.body}
              createdAt={issue.created_at}
              title={issue.title}
              userAvatar={issue.user?.avatar_url}
              userName={issue.user?.login}
              userUrl={issue.user?.html_url}
            />
          </li>
        ))}
      </ul>

      <Pagination 
        hasNextPage={hasNextPage}
        onNextClick={() => setPage((prev) => prev + 1)}
        onPreviousClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        page={page}
      />
     
    </div>
  );
}

export default IssueList;
