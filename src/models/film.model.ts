import mongoose from 'mongoose';
import { IFilm } from '../types/film.interface';

export interface IFilmModel extends IFilm, mongoose.Document {}

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sinopsis: { type: String, required: true },
  director: { type: String, required: true },
  releasedDate: { type: Date, required: true },
  actors: [
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export const FilmModel = mongoose.model<IFilmModel>('Film', filmSchema);
