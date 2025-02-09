// Defines the structure of a User object using a TypeScript interface.
// Ensures type safety throughout the application when working with users.

export interface IUser {
  // id: string;
  name: string;
  email: string;
  blocked?: boolean;
  createdAt?: Date;
}
