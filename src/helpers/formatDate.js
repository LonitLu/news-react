// экспорт и создание функции
export const formatDate = (date) => {
  //создаем отдельный объект
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  //используем метод toLocaleDateString(передаем формат, options)
  return date.toLocaleDateString("ru-RU", options);
};
