import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        type: String, // cloudinary
        required: true,
    },
    thumbnail:{
        type: String, // cloudinary
        required: true,
    },
    title:{
         type: String, 
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    duration:{
        type: String,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    ispublished:{
        type: Boolean,
        default: false,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }

});
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);