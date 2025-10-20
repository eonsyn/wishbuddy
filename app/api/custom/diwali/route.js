import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";

 export async function POST(req) {
  try {
    const { wisher, name, wishText, type, mode } = await req.json();
    await connectDB();

    // 💾 Save wish to database
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

 