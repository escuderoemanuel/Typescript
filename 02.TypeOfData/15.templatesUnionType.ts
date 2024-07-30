// Template Union Types
type HexadecimalColor = `#${string}`
const color1: HexadecimalColor = 'FF0000' // -> Error porque no respeta el formato
const color2: HexadecimalColor = '#00FF00'

