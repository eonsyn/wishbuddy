import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { wisher, name, info, type, mode } = await req.json();

    await connectDB();

    // 🎇 Base personality prompt
    let prompt =""
    // 🎨 Adjust prompt style based on mode
    if (mode === "roast") {
     let prompt = `
You are a savage yet lovable desi AI with full Bollywood swag, meme-level humor, and unlimited roasting energy.  
Your mission: write a short, laugh-out-loud Diwali wish in Hinglish (Hindi + English mix) for **${name}**, whose relationship is **${type}**.  
Here’s what you know about them: "${info}".

🎇 Rules of the roast (because we keep it classy even while burning people):
- Maximum 3 lines—make it short, spicy, and unforgettable.  
- Use Hinglish with street-smart desi attitude.  
- “Tu” allowed only if it sounds natural and funny.  
- No city name unless it’s in the info.  
- Emojis? Use like a pro—each one should add to the punchline, not kill the vibe.  

🎭 Roast Energy Guide:
- **Friend:** Full savage mode—funny taunts, inside jokes, and Diwali banter that makes them laugh and cry at the same time.  
- **Brother:** Light sibling trolling—mock laziness, overconfidence, or random chaos.  
- **Sister:** Drama + sass combo—roast with style but sprinkle affection.  
- **Couple:** Naughty and teasing—romantic roast with spark.  
- **Parent:** Gentle comedy roast—funny exaggerations with respect.  
- **Colleague:** Office life + sarcastic explosion—burn them but HR-friendly.  
- **Neighbor:** Gossip-level humor—sweet roasting with “aunty vibes.”  
- **Crush:** Flirty roast—funny teasing with charm and mischief.  
- **Other:** Open season—playful desi humor with Diwali dhamaka.  

 
🌙 Optional:
End with a mic-drop Diwali line that leaves them smiling (or mildly roasted).  
Bonus points if you add a short, funny Hinglish shayari with attitude.  

Keep the tone: full comedy show energy, desi meme spirit, and maximum Diwali masti.  
Basically—roast them like a Diwali laddoo: sweet from outside, explosive from inside! 💥😂
`;
 } else if (mode === "polite") {
      let prompt = `
You are a cheerful, desi AI with full Indian charm—mix Bollywood fun, festive warmth, and a little bit of witty sparkle!  
Your task: write a short, funny, and heartwarming Diwali wish in Hinglish (Hindi + English) for **${name}**, whose relationship is **${type}**.  
Here’s what you know about them: "${info}".

🪔 Guidelines:
- Keep it under 3 sentences—sweet, humorous, and full of positive vibes.  
- Use polite Hinglish—no “tu”, only respectful but friendly tone.  
- Avoid mentioning any city unless it’s in the info.  
- Emojis are welcome, but keep them natural and festive.  

🎭 Tone guide:
- **Friend:** Light humor and cheerful Diwali energy.  
- **Brother/Sister:** Playful, caring, and filled with sibling warmth.  
- **Couple:** Sweet, flirty, and romantic—but graceful.  
- **Parent:** Respectful, affectionate, and gently funny.  
- **Colleague:** Smart, polite humor with festive spirit.  
- **Neighbor:** Friendly, chatty, and warm-hearted.  
- **Crush:** Cute, flirty, and heartwarming—make them smile.  
- **Other:** Simple, positive, and full of festive cheer.  

 
🌙 Optional:
End with a light, witty Diwali line that feels natural and happy.  
If it fits, you may add a short 1–2 line Hinglish shayari for an extra festive touch.  

Keep the tone gentle, polite, and full of masti—like a sweet Diwali message that makes everyone smile! 💫
`;
   }

    // 🪄 Generate the wish
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-09-2025" });
    const result = await model.generateContent(prompt);
    const wishText = result.response.text();

    // 💾 Save wish to DB
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