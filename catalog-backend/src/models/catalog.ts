import mongoose, { Schema, Document } from 'mongoose';

export interface ICatalog extends Document {
  name: string;
  vertical: 'fashion' | 'home' | 'general';
  isPrimary: boolean;
  locales: string[];
  indexedAt: Date;
}

const catalogSchema = new Schema<ICatalog>({
  name: { type: String, required: true, unique: true },
  vertical: { type: String, enum: ['fashion', 'home', 'general'], required: true },
  isPrimary: { type: Boolean, default: false },
  locales: { type: [String], required: true },
  indexedAt: { type: Date, default: Date.now },
});

const Catalog = mongoose.model<ICatalog>('Catalog', catalogSchema);

export default Catalog;
