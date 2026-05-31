import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { skinConditionSchema } from "./sanity/schemas/skinCondition";
import { skinGuideSchema } from "./sanity/schemas/skinGuide";
import { skinIngredientSchema } from "./sanity/schemas/skinIngredient";
import { skinRoutineSchema } from "./sanity/schemas/skinRoutine";

export default defineConfig({
  name: "skin-fitlabreviews",
  title: "Fitlabreviews Skin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [skinConditionSchema, skinGuideSchema, skinIngredientSchema, skinRoutineSchema],
  },
});
