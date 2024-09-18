import { useQuery } from 'react-query';

const GITHUB_API_BASE_URL = 'https://api.github.com/repos';

export const fetchRepoTotalIssues = async (repoUrl: string) => {
  const repoPath = extractRepoPath(repoUrl);

  return fetch(`${GITHUB_API_BASE_URL}/${repoPath}/issues`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching issues');
      }
      return response.json();
    })
    .then((data) => data);
};

export const useRepoIssues = (repoUrl: string) => {
  return useQuery(
    ['repoIssues', repoUrl],
    () => fetchRepoTotalIssues(repoUrl),
    {
      keepPreviousData: true,
      enabled: !!repoUrl,
    }
  );
};

const extractRepoPath = (url: string) => {
  const path = new URL(url).pathname;
  const regex = /^(\/[^/]+\/[^/]+)/;
  const match = path.match(regex);
  const extractedPath = match ? match[1].slice(1) : null;
  return extractedPath;
};
