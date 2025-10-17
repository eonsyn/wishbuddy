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

Write a short, brutally sarcastic Diwali wish in Hindi-English (Hinglish jaise abhi mai bol raha hu, thoda funny aur cheeky) for relationship is with me is : ${type} and their name is ${name}.
Here's some info about them: "${info}".
Tone guide based on relationship:
- Friend: darkly funny, teasing, inside jokes, mischief, sarcasm about their habits, reply as if I am casually talking to them right now.
- Couple: flirty, naughty, lusty, hint at romance or cheeky intimacy, reply as if I am teasing them in a chat.
- Parent: casual, cheeky, slightly disrespectful in a funny way, reply like I am texting them casually.
- Brother: annoying but funny, tease their laziness, fights, or weird habits, like a sibling chat.
- Sister: playful, sassy, a bit dramatic, mention gossip, her nagging, or cute quirks, reply as I would in a chat.
- Colleague: office humor, subtle sarcasm, maybe about workaholic tendencies or typical office drama, like chatting in Slack.
- Neighbor: cheeky, light gossip, exaggerate their nosy habits or Diwali noise complaints, reply like I am messaging them casually.
- Crush: flirty, cute teasing, hint at attraction, mix bashfulness with humor, reply as I would in a chat.
- Other: general dark humor, sarcastic, punchy, witty, make them laugh and cringe, like I am texting casually.

Keep the wish under 3 sentences, punchy, witty, unforgettable. Mention Desi Diwali vibes—sweets, crackers, family drama, pollution, neighbor fights, or typical chaos. Make it hilarious, cringe-worthy, sharp, and memorable—no sugarcoating, no asking for choices. Use casual Hinglish, Punjabi slang, Lucknowi charm, emojis if suitable, and Desi flavor. Reply like we are chatting right now, full masti aur tadka ke saath.
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