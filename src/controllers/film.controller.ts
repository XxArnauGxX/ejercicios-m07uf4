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
}
