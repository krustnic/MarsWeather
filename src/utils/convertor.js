export default {
  ru: function(degreeC) {
    return degreeC
  },
  en: function(degreeC) {
    return Math.round((degreeC * 9) / 5 + 32)
  },
}
