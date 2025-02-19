import { Schema, model } from 'mongoose';
import { IViaje } from '../types/viaje.interface';

const ViajeSchema = new Schema<IViaje>(
  {
    aeropuertoOrigen: {
      type: String,
      required: true,
      maxlength: 10,
      match: [/^[a-zA-Z\s]+$/, 'Solo letras y espacios para aeropuertoOrigen'],
    },
    aeropuertoDestino: {
      type: String,
      required: true,
      maxlength: 10,
      match: [/^[a-zA-Z\s]+$/, 'Solo letras y espacios para aeropuertoDestino'],
    },
    fechaSalida: {
      type: Date,
      required: true,
    },
    fechaLlegada: {
      type: Date,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 0.0,
      max: 9999.99,
    },
    nombrePasajero: {
      type: String,
      required: true,
      maxlength: 300,
      match: [/^[a-zA-Z\s]+$/, 'Solo letras y espacios para nombrePasajero'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ViajeModel = model<IViaje>('Viaje', ViajeSchema);
