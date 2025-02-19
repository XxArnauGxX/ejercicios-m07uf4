import { BaseRepository } from './base.repository';
import { IViaje } from '../types/viaje.interface';
import { ViajeModel } from '../models/viaje.model';

class ViajeRepository extends BaseRepository<IViaje> {
  constructor() {
    super(ViajeModel);
  }

}

export const viajeRepository = new ViajeRepository();
