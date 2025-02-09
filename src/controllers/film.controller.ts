import { Request, Response, NextFunction } from 'express';
import { FilmService } from '../services/film.service';

export class FilmController {
  private filmService: FilmService;

  constructor() {
    this.filmService = new FilmService();
  }

  getDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const film = await this.filmService.getById(req.params.id);
      res.status(200).json({
        message: 'Film details fetched successfully',
        data: film,
      });
    } catch (error) {
      next(error);
    }
  };

  listFilms = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { start, end } = req.query;
      const startNum: number | undefined = start ? parseInt(start as string, 10) : undefined;
      const endNum: number | undefined = end ? parseInt(end as string, 10) : undefined;

      const films = await this.filmService.getList(startNum, endNum);

      const filmsMapped = films.map((film: any) => ({
        id: film._id,
        title: film.title,
        director: film.director,
        releasedDate: film.releaseYear,
      }));

      res.status(200).json({
        message: 'Films list fetched successfully',
        data: filmsMapped,
      });
    } catch (error) {
      next(error);
    }
  };
}
