export function CorrectedDate(dateString: string) {
  // Парсим строку в формате ГГГГ-ММ-ДД
  const match = dateString.match(/^(-?\d{1,4})-(\d{2})-(\d{2})$/);

  if (!match) {
    return "Некорректная дата";
  }

  const year = parseInt(match[1]);
  const month = parseInt(match[2]);
  const day = parseInt(match[3]);

  // Названия месяцев на русском
  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const monthName = monthNames[month - 1];

  // Форматируем в зависимости от года
  if (year < 0) {
    return `${day} ${monthName} ${Math.abs(year)} г. до н.э.`;
  } else {
    return `${day} ${monthName} ${year} г.`;
  }
}
