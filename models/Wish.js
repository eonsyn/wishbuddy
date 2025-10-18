import mongoose from "mongoose";

const WishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    wisher:{type:String,required:true},
    type:{type:String,required:true},
    mode:{type:String,required:true},
    info: { type: String, required: true },
    generatedWish: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Wish || mongoose.model("Wish", WishSchema);
