// Implements business logic for user operations.
// Processes requests from the controller and interacts with the repository as needed.

import { httpStatus } from '../config/httpStatusCodes';
import { UserRepository } from '../repositories/user.repository';
import { AppError } from '../utils/application.error';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  getById = async (id: string) => {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new AppError('User not found', httpStatus.notFound);
    }
    if (user.blocked) {
      throw new AppError('User is blocked', httpStatus.forbidden);
    }
    return user;
  };

  // getAll = () => {
  //   return this.userRepository.getAll();
  // };

  // create = (user: Omit<IUser, 'id'>) => {
  //   // business logic in the service and parameter validations in the controller
  //   const newUser: IUser = {
  //     id: (this.userRepository.getAll().length + 1).toString(),
  //     name: user.name.toLowerCase(),
  //     email: user.email.toLowerCase(),
  //   };
  //   if (this.userRepository.nameNotInUse(newUser.name)) {
  //     throw new AppError('User already exists', httpStatus.badRequest);
  //   }
  //   if (newUser.name === 'admin') {
  //     throw new AppError('User name cannot be admin', httpStatus.badRequest);
  //   }
  //   this.userRepository.create(newUser);
  // };

  // update = (user: IUser) => {
  //   this.getById(user.id);
  //   const updatedUser = this.userRepository.update(user);
  //   return updatedUser;
  // };

  // delete = (id: string) => {
  //   this.getById(id);
  //   const userDeleted = this.userRepository.delete(id);
  //   return userDeleted;
  // };
}
