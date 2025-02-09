import mongoose from 'mongoose';
import { IFilm } from '../types/film.interface';

export interface IFilmModel extends IFilm, mongoose.Document {}

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const FilmModel = mongoose.model<IFilmModel>('Film', filmSchema);
