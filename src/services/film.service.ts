import { httpStatus } from '../config/httpStatusCodes';
import { FilmRepository } from '../repositories/film.repository';
import { AppError } from '../utils/application.error';

export class FilmService {
  private filmRepository: FilmRepository;

  constructor() {
    this.filmRepository = new FilmRepository();
  }

  getById = async (id: string) => {
    const film = await this.filmRepository.getById(id);
    if (!film) {
      throw new AppError('Film not found', httpStatus.notFound);
    }
    return film;
  };

  getList = async (start?: number, end?: number) => {
    const films = await this.filmRepository.getList(start, end);
    return films;
  };

  create = async (filmData: any) => {
    return await this.filmRepository.create(filmData);
  };
}
