import { Schema, model, models } from "mongoose";

const JobSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    logoBackground: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    postedAt: {
      type: String,
      required: true,
    },
    contract: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    apply: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      content: { type: String },
      items: [
        {
          type: String,
        },
      ],
    },
    role: {
      content: { type: String },
      items: [
        {
          type: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

const Job = models.Job || model("Job", JobSchema, "devjobs");

export default Job;
