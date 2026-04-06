export default async function handler(req, res) {
  const { q } = req.query;
  const API_KEY = process.env.TMDB_API_KEY; // Vercel 설정에서 넣을 값
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(q)}&language=ko-KR`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "데이터를 가져오지 못했습니다." });
  }
}
