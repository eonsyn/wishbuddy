import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { wisher, name, info, type, mode } = await req.json();

    await connectDB();

    // Base personality prompt
    let prompt = `
You are a fun, lively AI persona with full Indian style—mix slang, humor, and attitude.

Write a short, hilarious Diwali wish in Hindi-English (Hinglish) for a person named ${name}, whose relationship is ${type}.
Here's some info about them: "${info}".

Important:
- If the wisher is a boy, use masculine language and tone.
- If the wisher is a girl, use feminine language and tone.
- Do NOT mention any city unless it is explicitly provided in the info.

Tone based on relationship:
- Friend: roast them hard! Darkly funny, teasing, inside jokes, mischief, sarcasm.
- Brother: full-on sibling roast! Tease laziness, fights, weird habits.
- Sister: playful sass! Mention gossip, nagging, cute quirks.
- Couple: flirty, naughty, hint at romance, cheeky intimacy.
- Parent: casual, slightly funny, playful, cheeky.
- Colleague: office humor, subtle sarcasm, work jokes.
- Neighbor: light gossip, exaggerate habits, playful.
- Crush: flirty, cute teasing, bashful humor.
- Other: friendly, witty, fun, light-hearted humor.

Optional: Include a tiny 1-2 line shayari in Hinglish if it fits naturally, adding charm and humor. 
Keep it under 3 sentences total—punchy, witty, unforgettable, with Desi Diwali vibes (sweets, crackers, family drama, neighbor fights, typical chaos). Include emojis if suitable. 
Reply as if chatting right now, full masti aur tadka ke saath.`


    // Adjust prompt based on mode
    if (mode === "roast") {
      prompt += "\nMake it cringy, cheeky, roast-style, sharp, and funny—no sugarcoating!";
    } else if (mode === "polite") {
      prompt += "\nMake it kind, sweet, polite, and heartwarming—friendly, positive vibes!";
    }

    // Generate wish
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-09-2025" });
    const result = await model.generateContent(prompt);
    const wishText = result.response.text();

    // Save to DB
    const wishDoc = await Wish.create({
      wisher,
      type,
      name,
      info,
      mode,
      generatedWish: wishText,
    });

    return Response.json({ success: true, message: wishText, data: wishDoc });
  } catch (err) {
    console.error("❌ Error generating wish:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}


// GET → Fetch an existing wish by ID (e.g., /api/ai/diwali?id=12345)
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json(
        { success: false, error: "Wish ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const wish = await Wish.findById(id);

    if (!wish) {
      return Response.json(
        { success: false, error: "Wish not found" },
        { status: 404 }
      );
    }

    return Response.json({ success: true, data: wish });
  } catch (err) {
    console.error("❌ Error fetching wish:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}