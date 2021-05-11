export default function truncateString(str, num) {
  if (str.length <= num) 
    return str;
  else
    return str.slice(0, num) + '...';
}
