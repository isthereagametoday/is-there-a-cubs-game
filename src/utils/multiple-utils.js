export default function(times) {
  let result = '';
  times.forEach(t => {
    result = (result === '') ? t : `${result} and ${t}`;
  });
  return result;
};