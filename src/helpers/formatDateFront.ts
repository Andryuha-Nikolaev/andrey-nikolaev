export function formatDate(inputDate: Date) {
  const myDate = new Date(inputDate)

  let day: string | number = myDate.getDate()
  let month: string | number = myDate.getMonth() + 1
  const year = myDate.getFullYear()

  if (day < 10) {
    day = "0" + day
  }

  if (month < 10) {
    month = "0" + month
  }

  const formattedDate = day + "." + month + "." + year
  return formattedDate
}

export function parseDateString(dateString: string): Date {
  const dateParts = dateString.split(".")

  const day = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10) - 1 // уменьшаем на 1, так как месяцы в JavaScript начинаются с 0
  const year = parseInt(dateParts[2], 10)

  return new Date(year, month, day)
}
