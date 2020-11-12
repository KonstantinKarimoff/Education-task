     function queryToObject(query) {
        let f = query.split('?').join('');
        return f.split('&').map((value) => value.split('=', 2))
      .reduce((obj, value) => {
        obj[value[0]] = value[1];
        return obj;
      }, {});
    }


window.queryToObject = queryToObject;

export default queryToObject;
