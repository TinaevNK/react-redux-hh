import { User } from "../type";
import { API_USERS_PER_PAGE_VALUE } from "../utils/constants";

export default async function getReviewers(owner: string, repo: string) {
  let contributors: User[] = [];
  let i = 1;

  while (true) {
    const res = await getReviewersByPage(owner, repo, i);
    contributors.push(...res);
    i++;
    if (res.length < API_USERS_PER_PAGE_VALUE) break;
  }

  return contributors;
}

async function getReviewersByPage(
  owner: string,
  repo: string,
  page: number,
) {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=${API_USERS_PER_PAGE_VALUE}&page=${page}`,
  );
  if (!res.ok) throw new Error();
  return await res.json();
}
