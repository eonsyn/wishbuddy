import mongoose from "mongoose";

const WishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    wisher:{type:String,required:true},
    type:{type:String,required:true},
    mode:{type:String },
    info: { type: String  },
    generatedWish: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Wish || mongoose.model("Wish", WishSchema);
