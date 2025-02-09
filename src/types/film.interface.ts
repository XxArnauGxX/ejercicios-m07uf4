export interface IFilm {
  title: string;
  sinopsis: string;
  director: string;
  releasedDate: Date;
  actors: {
    firstName: string;
    lastName: string;
  }[];
  createdAt?: Date;
}
