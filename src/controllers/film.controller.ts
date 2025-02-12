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
      let startNum: number | undefined = start ? parseInt(start as string, 10) : undefined;
      let endNum: number | undefined = end ? parseInt(end as string, 10) : undefined;

      const films = await this.filmService.getList(startNum, endNum);

      const filmsMapped = films.map((film: any) => ({
        id: film._id,
        title: film.title,
        director: film.director,
        releasedDate: film.releasedDate,
      }));

      res.status(200).json({
        message: 'Films list fetched successfully',
        data: filmsMapped,
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newFilm = await this.filmService.create(req.body);
      res.status(201).json({
        message: 'Film created successfully',
        data: newFilm,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedFilm = await this.filmService.update(req.params.id, req.body);
      res.status(200).json({
        message: 'Film updated successfully',
        data: updatedFilm,
      });
    } catch(error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.filmService.delete(req.params.id);
      res.status(200).json({
        message: 'Film deleted successfully',
      });
    } catch(error) {
      next(error);
    }
  }
}
