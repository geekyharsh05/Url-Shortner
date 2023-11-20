import mongoose, { Schema } from 'mongoose';

export interface IUrl {
  shortID: string;
  redirectURL: string;
  visitHistory: Array<{ timestamp: number }>;
}

const urlSchema = new Schema<IUrl>(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const urlModel = mongoose.model<IUrl>('Url', urlSchema);

export default urlModel;
