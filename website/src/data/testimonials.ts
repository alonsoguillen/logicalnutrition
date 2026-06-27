export interface ProductTestimonial {
  productId: string;
  quote: string;
  author: string;
  role?: string;
  verified: boolean;
  rating: number;
}

export const productTestimonials: ProductTestimonial[] = [
  // Creatina monohidratada
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
    productId: 'creatina-monohidratada',
    quote: 'Desde que la tomo mis repeticiones han subido. Llevo 6 semanas y la recuperación entre series es más rápida.',
    author: 'Mateo S.',
    role: 'Fisicoculturismo',
    verified: true,
    rating: 5,
  },
  {
    productId: 'creatina-monohidratada',
    quote: 'No tiene sabor, se mezcla perfecto con el jugo de naranja. Me da confianza saber que es puro.',
    author: 'Daniela P.',
    role: 'Atleta amateur',
    verified: true,
    rating: 5,
  },
  {
    productId: 'creatina-monohidratada',
    quote: 'He probado varias marcas y esta es la primera que no me deja sensación de arena.',
    author: 'Javier L.',
    role: 'Powerlifting',
    verified: true,
    rating: 5,
  },
  {
    productId: 'creatina-monohidratada',
    quote: 'Mi entrenador me la recomendó por la pureza. Buen precio para la calidad.',
    author: 'Sofía H.',
    role: 'Halterofilia',
    verified: true,
    rating: 5,
  },
  {
    productId: 'creatina-monohidratada',
    quote: 'Entrega rápida y el producto se nota premium. La dosis de 5g es justa.',
    author: 'Ricardo M.',
    role: 'Calistenia',
    verified: true,
    rating: 5,
  },

  // L-Citrulina
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
  {
    productId: 'l-citrulina',
    quote: 'La tomo antes de entrenar pierna y el bombeo es evidente. Sin dolor de cabeza ni taquicardia.',
    author: 'Camila R.',
    role: 'CrossFit',
    verified: true,
    rating: 5,
  },
  {
    productId: 'l-citrulina',
    quote: 'Me ayuda a terminar las últimas series sin sentir que me quemo.',
    author: 'Tomás V.',
    role: 'Culturismo',
    verified: true,
    rating: 5,
  },
  {
    productId: 'l-citrulina',
    quote: 'La prefiero sobre los pre-entrenos cargados de cafeína. Más limpia.',
    author: 'Fernanda O.',
    role: 'Running',
    verified: true,
    rating: 5,
  },
  {
    productId: 'l-citrulina',
    quote: 'Noto mejor circulación durante el ejercicio. Se siente más natural.',
    author: 'Diego N.',
    role: 'Triatlón',
    verified: true,
    rating: 5,
  },
  {
    productId: 'l-citrulina',
    quote: 'Buena disolución y sin sabor. Ideal para combinar con la creatina.',
    author: 'Paula C.',
    role: 'Entrenamiento funcional',
    verified: true,
    rating: 5,
  },
];

export const brandTestimonials = productTestimonials.map(({ productId, ...rest }) => rest);

export function getTestimonialsForProduct(productId: string) {
  return productTestimonials.filter((t) => t.productId === productId);
}
