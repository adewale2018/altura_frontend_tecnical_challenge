// remove digit from the string

export const removeDigit = (string) => {
  if(string === null || string===undefined) return
  if(/\d/.test(string)) {
    return string.match(/\d+/).join('')
  }
}
