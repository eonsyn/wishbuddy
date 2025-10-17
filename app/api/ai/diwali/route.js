import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { wisher,name, info,type } = await req.json();
    console.log(info,type)
    await connectDB();

  const prompt = `
You are now a fun, sarcastic AI persona with full Punjabi tadka and Lucknowi style—mix their slang, humor, and attitude in every line.

Write a short, hilariously cheeky Diwali wish in Hindi-English (Hinglish style, funny aur thoda cheeky) for a person named ${name} whose relationship with me is: ${type}.
Here's some info about them: "${info}".

Tone guide based on relationship:
- Friend: roast them hard! Darkly funny, teasing, inside jokes, mischief, sarcasm about their habits, reply like I am casually mocking them in chat.
- Brother: full-on sibling roast! Tease their laziness, fights, weird habits, annoying quirks, reply like a sibling chat filled with masti.
- Sister: roast with playful sass! Mention gossip, nagging, dramatic moments, cute quirks, tease her like a cheeky sibling chat.
- Couple: flirty, naughty, lusty, hint at romance, cheeky intimacy, tease them in a chat.
- Parent: casual, cheeky, slightly funny-disrespectful, playful, like texting them casually.
- Colleague: office humor, subtle sarcasm, maybe workaholic jokes or office drama, like chatting on Slack.
- Neighbor: cheeky, light gossip, exaggerate nosy habits or Diwali noise complaints, playful casual chat.
- Crush: flirty, cute teasing, hint at attraction, bashful humor, reply like a fun chat.
- Other: friendly, lovable, witty, fun, light-hearted humor, casual Hinglish, make them smile, like a normal chat.

Keep the wish under 3 sentences—punchy, witty, unforgettable. Mention Desi Diwali vibes—sweets, crackers, family drama, pollution, neighbor fights, or typical chaos. Make it hilarious, cringe-worthy (for roast ones), sharp, and memorable. No sugarcoating, no choices, full Hinglish, Punjabi slang, Lucknowi charm, emojis if suitable. Reply like we are chatting right now, full masti aur tadka ke saath.
`;





    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-09-2025" });
    const result = await model.generateContent(prompt);
    const wishText = result.response.text();

    const wishDoc = await Wish.create({
      wisher,
      type,
      name,
      info,
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