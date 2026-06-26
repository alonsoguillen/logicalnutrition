export interface ComparisonRow {
  label: string;
  logical: string;
  generic: string;
}

export interface ProductComparison {
  productId: string;
  rows: ComparisonRow[];
}

export const productComparisons: ProductComparison[] = [
  {
    productId: 'creatina-monohidratada',
    rows: [
      { label: 'Ingredientes', logical: '100% creatina monohidratada pura', generic: 'Mezclas propietarias o dosis ocultas' },
      { label: 'Aditivos', logical: 'Ninguno', generic: 'Saborizantes, colorantes y rellenos' },
      { label: 'Dosis por servicio', logical: '5g (dosis clínicamente estudiada)', generic: 'Dosis subeficaces o no especificadas' },
      { label: 'Testeo de calidad', logical: 'Análisis de terceros por lote', generic: 'Sin verificación independiente' },
      { label: 'Transparencia', logical: 'Etiqueta completa y estudios citados', generic: 'Blends propietarios sin evidencia' },
      { label: 'Micronización', logical: 'Micronizada para mejor solubilidad', generic: 'Textura grumosa, baja solubilidad' },
    ],
  },
  {
    productId: 'l-citrulina',
    rows: [
      { label: 'Ingredientes', logical: '100% L-Citrulina libre (forma base)', generic: 'Mezclas con arginina de baja biodisponibilidad' },
      { label: 'Aditivos', logical: 'Ninguno', generic: 'Edulcorantes, aromatizantes y antiaglomerantes' },
      { label: 'Dosis por servicio', logical: '6g (dosis clínicamente efectiva)', generic: 'Dosis de 1-3g, por debajo de lo efectivo' },
      { label: 'Testeo de calidad', logical: 'Análisis de terceros por lote', generic: 'Sin certificación de pureza' },
      { label: 'Transparencia', logical: 'Etiqueta completa y estudios citados', generic: 'Marketing vago sin evidencia' },
      { label: 'Estimulantes', logical: 'Sin estimulantes, usable a cualquier hora', generic: 'Pre-entrenos con cafeína y otros estimulantes' },
    ],
  },
];

export function getComparisonForProduct(productId: string) {
  return productComparisons.find((c) => c.productId === productId);
}
