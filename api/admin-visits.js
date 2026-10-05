export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { password } = req.body || {};

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      success: false,
      error: "Invalid password"
    });
  }

  try {
    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/visitor_stats?id=eq.1&select=visit_count`,
      {
        headers: {
          apikey: process.env.SUPABASE_SECRET_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}`
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        success: false,
        error: "Unable to get visit count"
      });
    }

    return res.status(200).json({
      success: true,
      visits: data[0]?.visit_count ?? 0
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
}