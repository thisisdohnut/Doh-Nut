import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Gemini DOH-NUT Headline Generation API
  app.post("/api/generate-headlines", async (req, res) => {
    try {
      const { keyword, tone = "street-drop", customApiKey } = req.body;

      if (!keyword || typeof keyword !== "string" || !keyword.trim()) {
        return res.status(400).json({ error: "Keyword or theme is required." });
      }

      const apiKey = customApiKey || process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(400).json({
          error: "API_KEY_REQUIRED",
          message: "No Gemini API key found. Please provide an API key in the tool or configure GEMINI_API_KEY in settings."
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const toneDescriptions: Record<string, string> = {
        "street-drop": "High-energy product drop or limited edition hype. Loud, punchy, countdown street excitement.",
        "cheeky-social": "Playful, funny, meme-adjacent call-to-action for Instagram and TikTok. Tag-a-friend vibe.",
        "packaging-tape": "Bold box tape, bag stamp, or receipt slogan. Short, memorable, punchy motto.",
        "pasar-malam": "Malaysian urban street food excitement. Warm, local slang touch, fresh-from-the-fryer joy.",
        "late-night": "Midnight sugar cravings, study fuel, skate sessions, unapologetic indulgence."
      };

      const toneContext = toneDescriptions[tone] || toneDescriptions["street-drop"];

      const prompt = `Generate 5 unique, high-impact brand headlines and taglines for the donut brand DOH-NUT based on the keyword/theme: "${keyword.trim()}".
Context & Tone: ${toneContext}

Tone Guidelines:
- Brand Name: DOH-NUT
- Vibe: Short, punchy, cheeky, bold street attitude, Malaysian street snack culture, youth skate energy.
- Words to LOVE: "HOT DOUGH", "FRESH GLAZE", "ZERO APOLOGIES", "BITE FIRST", "STEADY", "CRAVINGS", "CRUNCH", "BOOM".
- Words to STRICTLY BAN: corporate jargon like "confectionery", "culinary delight", "patrons", "valued clientele", "innovative solutions".
- Length: 3 to 12 words per headline. Punchy!

Return a JSON array with exactly 5 objects having:
- "headline": The main punchy headline/tagline in uppercase or title-case.
- "subtext": A short 1-sentence supporting hype line or call-to-action.
- "category": Short label like "STREET DROP", "BOX TAPE", "SOCIAL HOOK", "STICKER", or "STORE SIGN".
- "vibeScore": A funny metric like "100% Crisp", "Cheeky 10/10", "Sugar Rush", "Zero Apologies".`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: `You are the lead copywriter for DOH-NUT, the boldest Malaysian artisan street donut brand. You write short, infectious, unapologetic slogans with zero corporate fluff. Always return pure JSON.`,
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "[]";
      let parsedData;
      try {
        parsedData = JSON.parse(responseText);
      } catch (parseError) {
        // Fallback cleanup if model wrapped in markdown
        const cleaned = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        parsedData = JSON.parse(cleaned);
      }

      res.json({
        success: true,
        keyword: keyword.trim(),
        tone,
        headlines: Array.isArray(parsedData) ? parsedData : (parsedData.headlines || [parsedData])
      });
    } catch (err: any) {
      console.error("Error generating headlines with Gemini:", err);
      const errorMessage = err?.message || "Failed to generate headlines";
      res.status(500).json({
        error: "GENERATION_FAILED",
        message: errorMessage
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DOH-NUT Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
