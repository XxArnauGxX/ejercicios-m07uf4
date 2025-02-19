import { Request, Response } from 'express';
import { viajeService } from '../services/viaje.service';

export class ViajeController {
  public async create(req: Request, res: Response) {
    try {
      const newViaje = await viajeService.createViaje(req.body);
      return res.status(201).json(newViaje);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear el viaje' });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const viajes = await viajeService.getAllViajes();
      return res.status(200).json(viajes);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los viajes' });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const viaje = await viajeService.getViajeById(req.params.id);
      if (!viaje) {
        return res.status(404).json({ error: 'Viaje no encontrado' });
      }
      return res.status(200).json(viaje);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener el viaje' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const viajeActualizado = await viajeService.updateViaje(req.params.id, req.body);
      if (!viajeActualizado) {
        return res.status(404).json({ error: 'Viaje no encontrado para actualizar' });
      }
      return res.status(200).json(viajeActualizado);
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar el viaje' });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const viajeEliminado = await viajeService.deleteViaje(req.params.id);
      if (!viajeEliminado) {
        return res.status(404).json({ error: 'Viaje no encontrado para eliminar' });
      }
      return res.status(200).json(viajeEliminado);
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el viaje' });
    }
  }
}

export const viajeController = new ViajeController();
