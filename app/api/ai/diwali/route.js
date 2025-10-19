import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { wisher, name, info, type, mode } = await req.json();

    await connectDB();

    // 🎇 Base personality prompt
    let prompt = `
You are a fun, lively AI persona with full Indian style—mix Bollywood drama, desi humor, and street-smart attitude. 
Write a short, hilarious Diwali wish in Hinglish (Hindi + English mix) for a person named **${name}**, whose relationship is **${type}**.
Here's what you know about them: "${info}".

Guidelines:
- Keep it under 3 sentences—punchy, funny, and unforgettable.
- DO NOT use "tu" (stay friendly but not too informal).
- Do NOT mention any city unless it's in the info.
- Add emojis naturally if they fit the tone.

🎭 Tone rules (based on relationship):
- **Friend:** Full roast mode! Mischief, sarcasm, inside jokes, and over-the-top fun.
- **Brother:** Sibling banter—tease laziness, fights, and funny habits.
- **Sister:** Playful sass! Gossip, drama, and cute chaos.
- **Couple:** Flirty, naughty, romantic teasing—hint at spark and chemistry.
- **Parent:** Warm, witty, and playful—cute family humor.
- **Colleague:** Office vibes—light sarcasm, work stress jokes.
- **Neighbor:** Gossip-style humor—quirky, funny, and overfamiliar.
- **Crush:** Sweet + flirty with shy humor—make them smile.
- **Other:** Friendly, witty, and full of Diwali vibes.

✨ Must include this Diwali signature line somewhere (fit it smartly):
"Log toh patakha aise hi badnaam hai, asli patakha toh aap ho!"

🌙 Optional but preferred:
End with a natural, witty Diwali closing line, for example:
- "Ab glow toh aapke chehre ka hai, Diwali ki lights bhi sharma jaaye! 😎✨" 
- "Aapke saath Diwali aur bhi roshan lagti hai! 💛🎇"
- "Happy Diwali! Roshni, masti, aur dhamaka aapke saath ho! 🎉💫"

💫 Bonus: If it fits naturally, add a short 1–2 line funny shayari in Hinglish.

Keep the tone full masti aur tadka ke saath—just like a WhatsApp message sent in peak Diwali mood! 💥
`;

    // 🎨 Adjust prompt style based on mode
    if (mode === "roast") {
      prompt += "\nNow make it extra savage, cheeky, roast-style, full of dramatic desi humor—no sugarcoating! 🔥";
    } else if (mode === "polite") {
      prompt += "\nNow make it warm, kind, sweet, and heartfelt—still witty, but full of positive Diwali vibes! 🌸";
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