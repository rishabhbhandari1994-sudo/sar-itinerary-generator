// api/proxy.js
// Node.js serverless function to proxy image requests and bypass CORS issues

module.exports = async function (req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const targetUrl = decodeURIComponent(url);
    console.log(`Proxying request to: ${targetUrl}`);

    // Use global fetch (available in Node.js 18+)
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Target returned status ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = await response.arrayBuffer();

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    return res.status(200).send(Buffer.from(buffer));

  } catch (error) {
    console.error('Proxy failed:', error);
    
    // Fallback: Redirect browser to direct image URL if fetching fails
    try {
      const directUrl = decodeURIComponent(url);
      return res.redirect(302, directUrl);
    } catch (redirectErr) {
      return res.status(500).json({ error: 'Proxy failed and fallback redirect failed' });
    }
  }
};
