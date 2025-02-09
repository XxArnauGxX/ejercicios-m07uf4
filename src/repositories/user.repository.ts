// Handles direct data operations related to users.
// This layer interacts with the database or a data source to perform CRUD operations.

import { IUserModel, UserModel } from '../models/user.model';
import { BaseRepository } from './base.repository';

export class UserRepository {
  private baseRepository: BaseRepository<IUserModel>;

  constructor() {
    this.baseRepository = new BaseRepository(UserModel);
  }

  getById = async (id: string) => {
    return await this.baseRepository.getById(id);
  };

  // getAll() {
  //   return users;
  // }

  // create(user: IUser) {
  //   users.push(user);
  // }

  // nameNotInUse(name: string) {
  //   return users.some((user) => user.name === name);
  // }

  // update(user: IUser) {
  //   const userToUpdate = users.find((u) => u.id === user.id);
  //   if (!userToUpdate) {
  //     return null;
  //   }
  //   userToUpdate.name = user.name;
  //   userToUpdate.email = user.email;
  //   return userToUpdate;
  // }

  // delete(id: string) {
  //   const index = users.findIndex((u) => u.id === id);
  //   if (index === -1) {
  //     return null;
  //   }
  //   const userToDelete = users[index];
  //   users.splice(index, 1);
  //   return userToDelete;
  // }
}
