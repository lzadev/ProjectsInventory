import { model, Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  description: string;
  devServer: string;
  qaServer: string;
  uatServer: string;
  prodServer: string;
  isMicroservice: boolean;
  isMadeWithBoilerplate: boolean;
  framework: string;
  frameworkVersion: string;
  operation: string;
  isActive: boolean;
}

const ProjectSchema: Schema<IProject> = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  devServer: { type: String, required: true },
  qaServer: { type: String, required: true },
  uatServer: { type: String, required: true },
  prodServer: { type: String, required: true },
  isMicroservice: { type: Boolean, required: true, default: false },
  isMadeWithBoilerplate: { type: Boolean, required: true, default: false },
  framework: { type: String, required: true },
  frameworkVersion: { type: String, required: true },
  operation: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: false },
});

export default model<IProject>("Project", ProjectSchema);
