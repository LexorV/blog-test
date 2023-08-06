export function uniqid () {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}
export function generatorDate (date:string) {
  const getDate = new Date(date)
  return `${getDate.toLocaleDateString()} ${getDate.getHours()}:${String(getDate.getMinutes()).length>1?getDate.getMinutes(): "0" + getDate.getMinutes()}`
}
