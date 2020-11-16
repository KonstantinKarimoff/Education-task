  function queryToObject(query) {
  if (query === "" || query === "?" ){
      return {};
  }
  const str = "{ " + query.replace(/\?/i, " \"").replace(/\=/g, "\" \: \"").replace(/\&/g, "\", \"") + "\"  " + " }";
  console.log(str);
  const obj = JSON.parse(str);
  for (let key in obj) {
      let isNum = !(isNaN(obj[key]));
      if (isNum) {
          obj[key] = parseInt(obj[key]);
      } else {
          switch (obj[key]) {
              case "true":
                  obj[key] = true;
                  break;
              case "false":
                  obj[key] = false;
                  break;
              default:
                  break;
          }
      }
  }
  return obj;
};

window.queryToObject = queryToObject;

export default queryToObject;
