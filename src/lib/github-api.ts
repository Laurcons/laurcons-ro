function fetchAuthenticated(url: string) {
  console.log('Fetching github', url);
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
}
export async function getRepositoryInfo(
  owner: string,
  name: string,
): Promise<{
  owner: {
    login: string;
  };
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  open_issues_count: number;
}> {
  const response = await fetchAuthenticated(`https://api.github.com/repos/${owner}/${name}`);
  return response.json();
}
