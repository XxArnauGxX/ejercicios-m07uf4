import { IViaje } from '../types/viaje.interface';
import { viajeRepository } from '../repositories/viaje.repository';

class ViajeService {
  async createViaje(data: IViaje): Promise<IViaje> {
    return viajeRepository.create(data);
  }

  async getAllViajes(): Promise<IViaje[]> {
    return viajeRepository.findAll();
  }

  async getViajeById(id: string): Promise<IViaje | null> {
    return viajeRepository.findById(id);
  }

  async updateViaje(id: string, data: Partial<IViaje>): Promise<IViaje | null> {
    return viajeRepository.update(id, data);
  }

  async deleteViaje(id: string): Promise<IViaje | null> {
    return viajeRepository.delete(id);
  }
}

export const viajeService = new ViajeService();
