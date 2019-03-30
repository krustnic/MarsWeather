import data from "../data/weather.json"

const MONTHES = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
}

function process(weather) {
  const firstUTC = new Date(weather.First_UTC)
  const lastUTC = new Date(weather.Last_UTC)

  weather.firstDate = {
    day: firstUTC.getDate(),
    month: MONTHES[firstUTC.getMonth()],
  }

  weather.lastDate = {
    day: lastUTC.getDate(),
    month: MONTHES[lastUTC.getMonth()],
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
