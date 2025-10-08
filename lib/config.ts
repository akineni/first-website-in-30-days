export const useGoogleForm: boolean =
  process.env.NEXT_PUBLIC_USE_GOOGLE_FORM === "true";

export const registerUrl: string = useGoogleForm
  ? (process.env.NEXT_PUBLIC_GOOGLE_FORM_URL as string)
  : (process.env.NEXT_PUBLIC_WHATSAPP_DM_URL as string);

export const whatsAppUrl: string = process.env.NEXT_PUBLIC_WHATSAPP_DM_URL as string;
