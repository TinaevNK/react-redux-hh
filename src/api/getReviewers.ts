import { User } from "../type";
import { API_USERS_PER_PAGE_VALUE } from "../utils/constants";

export default async function getReviewers(owner: string, repo: string) {
  let contributors = [];
  let i = 1;

  while (true) {
    const res = await getReviewersByPage(owner, repo, i);
    contributors.push(...res);
    i++;
    if (res.length < API_USERS_PER_PAGE_VALUE) break;
  }

  const ownerData: User = {avatar: '', login: ''};

  const result: User[] = contributors.reduce((acc, user) => {
    if (user.login.toLowerCase() === owner.toLowerCase()) {
      ownerData.login = user.login;
      ownerData.avatar = user.avatar_url;
      return acc
    }
    acc.push({ avatar: user.avatar_url, login: user.login })
    return acc
  }, [])


  return {result, ownerData};
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
