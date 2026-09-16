const dateFormatters = {
  ko: new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  en: new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
} as const;

export const formatDate = (date: Date, lang: keyof typeof dateFormatters) =>
  dateFormatters[lang].format(date);
