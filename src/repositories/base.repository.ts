// A generic repository class providing common database operations.
// Can be extended by specific repositories like user.repository.ts.

import { Model, Document } from 'mongoose';

export class BaseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async getById(id: string) {
    return await this.model.findById(id);
  }
}
