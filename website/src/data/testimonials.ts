export interface ProductTestimonial {
  productId: string;
  quote: string;
  author: string;
  role?: string;
  verified: boolean;
  rating: number;
}

export const productTestimonials: ProductTestimonial[] = [
  {
    productId: 'creatina-monohidratada',
    quote: 'Llevo un mes usando la creatina de Logical Nutrition y noto una diferencia real en mis levantamientos. Se disuelve bien y no me causa molestias estomacales.',
    author: 'Carlos R.',
    role: 'CrossFit',
    verified: true,
    rating: 5,
  },
  {
    productId: 'creatina-monohidratada',
    quote: 'Finalmente una creatina pura sin saborizantes ni químicos raros. Me encanta que compartan los análisis de laboratorio.',
    author: 'Lucía M.',
    role: 'Levantamiento olímpico',
    verified: true,
    rating: 5,
  },
  {
    productId: 'l-citrulina',
    quote: 'El bombeo durante mis entrenamientos es mucho más sostenido. No tiene estimulantes, así que lo puedo tomar incluso en la noche.',
    author: 'Andrés G.',
    role: 'Corredor',
    verified: true,
    rating: 5,
  },
  {
    productId: 'l-citrulina',
    quote: 'Noto menos fatiga en series largas. Me gusta que sea un solo ingrediente y que la etiqueta sea transparente.',
    author: 'Valeria T.',
    role: 'Entrenamiento funcional',
    verified: true,
    rating: 5,
  },
];

export function getTestimonialsForProduct(productId: string) {
  return productTestimonials.filter((t) => t.productId === productId);
}
