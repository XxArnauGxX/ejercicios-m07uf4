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
    let query = FilmModel.find().select('_id title releasedDate director');
    if (start !== undefined && end !== undefined) {
      const limit = end - start;
      query = query.skip(start).limit(limit);
    }
    return await query;
  };

  create = async (filmData: any) => {
    const film = new FilmModel(filmData);
    return await film.save();
  };

  update = async (id: string, filmData: any) => {
    return await FilmModel.findByIdAndUpdate(id, filmData, { new: true });
  };

  delete = async (id: string) => {
    return await FilmModel.findByIdAndDelete(id);
  }
}
