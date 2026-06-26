// Site-wide contact settings
// Update these values to change the WhatsApp number and default message everywhere.

export const WHATSAPP_NUMBER = '51912345678';

export const WHATSAPP_MESSAGE = 'Hola, quiero consultar por los suplementos de Logical Nutrition.';

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppOrderUrl(productTitle: string, options?: { subscription?: boolean; discountPercent?: number }): string {
  const plan = options?.subscription ? 'suscripción mensual' : 'compra única';
  const discount = options?.subscription && options.discountPercent
    ? ` con el ${options.discountPercent}% de descuento de suscripción`
    : '';
  return getWhatsAppUrl(`Hola, quiero ordenar ${productTitle} (${plan}${discount}) de Logical Nutrition.`);
}

export function getWhatsAppBundleUrl(bundleTitle: string, items: string[], totalPrice: string): string {
  const list = items.join(' + ');
  return getWhatsAppUrl(`Hola, quiero ordenar el ${bundleTitle} (${list}) por ${totalPrice} de Logical Nutrition.`);
}
