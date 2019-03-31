import data from "../data/weather.json"

const MONTHES = {
  0: { full: "Январь", short: "ЯНВ" },
  1: { full: "Февраль", short: "ФЕВ" },
  2: { full: "Март", short: "МАР" },
  3: { full: "Апрель", short: "АПР" },
  4: { full: "Май", short: "МАЙ" },
  5: { full: "Июнь", short: "ИЮН" },
  6: { full: "Июль", short: "ИЮЛ" },
  7: { full: "Август", short: "АВГ" },
  8: { full: "Сентябрь", short: "СЕН" },
  9: { full: "Октябрь", short: "ОКТ" },
  10: { full: "Ноябрь", short: "НОЯ" },
  11: { full: "Декабрь", short: "ДЕК" },
}

const solsArr = data["sol_keys"]

export function getWeek() {
  const days = []
  for (const solId of solsArr) {
    days.push(processSol(data[solId], solId))
  }

  return days
}

function round(item, key) {
  if (item[key]) {
    for (const name of ["av", "mn", "mx"])
      if (item[key][name]) {
        item[key][name] = Math.round(item[key][name])
      } else {
        item[key][name] = null
      }

    return item
  }

  item[key] = {
    av: null,
    mx: null,
    mn: null,
  }

  return item
}

function processSol(sol, solId) {
  const day = Object.assign({ solId }, sol)

  // Round all values and fill default values
  round(day, "AT")
  round(day, "HWS")
  round(day, "PRE")

  // Format dates
  const firstUTC = new Date(day.First_UTC)
  const lastUTC = new Date(day.Last_UTC)

  day.firstDate = {
    day: firstUTC.getDate(),
    month: MONTHES[firstUTC.getMonth()],
  }

  day.lastDate = {
    day: lastUTC.getDate(),
    month: MONTHES[lastUTC.getMonth()],
  }

  // Add prev sol temperature
  const prevSolId = parseInt(day.solId) - 1

  if (data[prevSolId + ""]) {
    day.prevAT = Math.round(data[prevSolId + ""].AT.av)
  } else {
    day.prevAT = null
  }

  return day
}
