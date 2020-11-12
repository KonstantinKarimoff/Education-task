
function searchString(obj) {
  let result = '?';
  for (let key in obj) {
      const isEmpty = obj[key] !== null && obj[key] !== undefined && obj[key] !== '';
      if (isEmpty) result += key + '=' + obj[key] + "&";
  }
  return result === "?" ? "" : result.substr(0, result.length - 1);
}


window.searchString = searchString;

export default searchString;
