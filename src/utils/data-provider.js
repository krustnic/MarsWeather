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

function process(weather) {
  const firstUTC = new Date(weather.First_UTC)
  const lastUTC = new Date(weather.Last_UTC)

  weather.AT = weather.AT || {
    av: "?",
    mn: "?",
    mx: "?",
  }

  weather.HWS = weather.HWS || {
    av: "?",
    mn: "?",
    mx: "?",
  }

  weather.PRE = weather.PRE || {
    av: "?",
    mn: "?",
    mx: "?",
  }

  weather.firstDate = {
    day: firstUTC.getDate(),
    month: MONTHES[firstUTC.getMonth()],
  }

  weather.lastDate = {
    day: lastUTC.getDate(),
    month: MONTHES[lastUTC.getMonth()],
  }

  const prevSol = parseInt(weather.sol) - 1

  if (data[prevSol + ""]) {
    weather.prev = Math.round(data[prevSol + ""].AT.av)
  } else {
    console.log(data.sol, data[data.sol])
    weather.prev = "?"
  }

  return weather
}

const solsArr = data["sol_keys"]

export const lastSolId = solsArr[solsArr.length - 1]
export const prevSolId = solsArr[solsArr.length - 2]

export function getLastSol() {
  return process(data[lastSolId])
}

export function getPrevSol() {
  return process(data[prevSolId])
}

export function getWeek() {
  const days = []
  for (const sol of solsArr) {
    data[sol].sol = sol
    days.push(process(data[sol]))
  }

  return days
}
