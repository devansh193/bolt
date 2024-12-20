import mongoose from "mongoose";
export interface IFile {
  originalName: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  downloadLink: string;
  uploadedAt: Date;
  expiresAt?: Date;
}

export interface IFileDocument extends IFile, mongoose.Document {}
