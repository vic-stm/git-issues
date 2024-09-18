import { format, parseISO } from 'date-fns';
import styles from './issue.module.css';

interface IssueProps {
  body: string;
  createdAt: string;
  title: string;
  userAvatar: string;
  userName: string;
  userUrl: string;
}

export function Issue({
  body,
  createdAt,
  title,
  userAvatar,
  userName,
  userUrl,
}: IssueProps) {
  const formattedCreatedDate = format(
    parseISO(createdAt),
    'dd/MM/yyyy HH:mm:ss'
  );
  return (
    <div className={styles['container']}>
      <div className={styles['userAvatar']}>
        <a href={userUrl}>
          <img src={userAvatar} alt={`${userName} avatar`} />
        </a>
      </div>
      <div className={styles['header']}>
        <p className={styles['issueTitle']}>{title}</p>
      </div>
      <div className={styles['userInfo']}>
        <p className={styles['username']}>{userName}</p>
        <p className={styles['creationDate']}>{formattedCreatedDate}</p>
      </div>
      <div className={styles['body']}>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Issue;
