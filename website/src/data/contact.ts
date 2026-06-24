// Site-wide contact settings
// Update these values to change the WhatsApp number and default message everywhere.

export const WHATSAPP_NUMBER = '51912345678';

export const WHATSAPP_MESSAGE = 'Hola, quiero consultar por los suplementos de Logical Nutrition.';

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
