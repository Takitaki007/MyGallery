  // 3. Insert new user data 
export const insertUser = async (userData) => {
  "use server";

  const res = await fetch("http://96.9.81.187:8085/api/v1/romantic-date", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W10sInN1YiI6InJlbmRlckBnbWFpbC5jb20iLCJpYXQiOjE3NDkyMzUzMzksImV4cCI6MTc0OTMyMTczOX0.xwnYpTAsyTdEHYVL5gPY9BoamgS8JZWCyf6Bh6RMiRrLBSgsC-lqLzjT4hR9cddJzXioj37H8FHgFx5EsWIavA" // Use correct token
    },
    body: JSON.stringify(userData),
  });
};