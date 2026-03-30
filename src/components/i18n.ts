export const getLangFromParams = (lang: string | undefined): 'es' | 'en' => {
  if (lang === 'en' || lang === 'es') return lang;
  return 'es';
};

export const useTranslations = (lang: 'es' | 'en') => {
  return (value: any) => {
    if (value && typeof value === 'object' && value[lang]) {
      return value[lang] as string;
    }
    return value;
  };
};