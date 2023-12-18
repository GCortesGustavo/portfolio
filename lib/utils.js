//Maneja la combinacion de clases de manera mas flexible. Son bibliotecas para realizar combinaciones.
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

//Combina las clases proporcionadas como argumentos.