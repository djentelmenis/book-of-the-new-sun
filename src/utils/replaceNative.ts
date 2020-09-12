const replaceNative = (
  str: string,
  subString: string,
  newString: string
): string => {
  return str.replace(subString, newString)
}

export default replaceNative
