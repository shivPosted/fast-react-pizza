const baseURL = import.meta.env.VITE_API_BASE_URL;

function currencyFormatter(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function minutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();

  return Math.trunc(d2 - d1 / 60000);
}

function dateFormatter(dateStr) {
  console.log(dateStr);
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
export { currencyFormatter, minutesLeft, dateFormatter, baseURL };
