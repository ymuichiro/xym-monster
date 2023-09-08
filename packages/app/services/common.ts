export function getEnumKeyByEnumValue(enumType: any, enumValue: any): string | undefined {
  const keys = Object.keys(enumType).filter((key) => enumType[key] === enumValue);
  return keys.length > 0 ? keys[0] : undefined;
}
