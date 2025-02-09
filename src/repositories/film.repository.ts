import { FilmModel, IFilmModel } from '../models/film.model';
import { BaseRepository } from './base.repository';

export class FilmRepository {
  private baseRepository: BaseRepository<IFilmModel>;

  constructor() {
    this.baseRepository = new BaseRepository(FilmModel);
  }

  getById = async (id: string) => {
    return await this.baseRepository.getById(id);
  };

  getList = async (start?: number, end?: number) => {
    let query = FilmModel.find().select('_id title releaseYear director');
    if (start !== undefined && end !== undefined) {
      const limit = end - start;
      query = query.skip(start).limit(limit);
    }
    return await query;
  };
}
