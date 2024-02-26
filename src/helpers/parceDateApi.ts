export function parseDateApi(dateString: string): Date | null {
  const dateParts = dateString.split(".")
  if (dateParts.length !== 3) {
    return null
  }

  const day = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10) - 1 // месяцы в JS начинаются с 0
  const year = parseInt(dateParts[2], 10)

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null
  }

  // Устанавливаем время на конец дня
  const parsedDate = new Date(year, month, day)
  parsedDate.setHours(23, 59, 59, 999)

  return parsedDate
}
