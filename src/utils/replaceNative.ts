const replaceNative = (
  str: string,
  subString: string,
  newString: string
): string => {
  console.log('replaceNative called')
  return str.replace(subString, newString)
}

export default replaceNative
