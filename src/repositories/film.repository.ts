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
}
