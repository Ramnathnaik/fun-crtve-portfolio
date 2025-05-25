import mongoose, { Schema, model, models } from "mongoose";

interface IPorfolio {
  _id: mongoose.Types.ObjectId;
  name: string;
  alternateName: string;
  nickname: string;
  birthPlace: string;
  currentCollege: string;
  currentStudy: string;
  futureGoal: string;
  language: string[];
  favoriteColor: string;
  styleLikes: string[];
  isFunLoving: boolean;
  photo: string;
}

const PortfolioSchema = new Schema<IPorfolio>({
  name: {
    type: String,
    required: true,
  },
  alternateName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  birthPlace: {
    type: String,
    required: true,
  },
  currentCollege: {
    type: String,
    required: true,
  },
  currentStudy: {
    type: String,
    required: true,
  },
});

export const Portfolio =
  models.Portfolio || model<IPorfolio>("Portfolio", PortfolioSchema);
