export default function(uniqueNumber, description) {
  const shortKebabDescription = description
    .toLowerCase()
    .split(' ')
    .slice(0, 2)
    .join('-');
  return `${uniqueNumber}-${shortKebabDescription}`;
}