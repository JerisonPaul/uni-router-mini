/**
 * @description params string parameter, example：{a:1,b:2} => a=1&b=2
 * @param obj
 * @returns {string}
 */
export function objParseParam(obj) {
  let paramsStr = "";
  if (obj instanceof Array) return paramsStr;
  if (!(obj instanceof Object)) return paramsStr;
  for (let key in obj) {
    paramsStr += `${key}=${obj[key]}&`;
  }
  return paramsStr.substring(0, paramsStr.length - 1);
}

/**
 * @description Obj routing address with parameters, example: {a:1,b:2} => /pages/index/index?a=1&b=2
 * @param path
 * @param obj
 * @returns {*|string}
 */
export function objParseUrlAndParam(path, obj) {
  let url = path || "/";
  let paramsStr = "";
  if (obj instanceof Array) return url;
  if (!(obj instanceof Object)) return url;
  paramsStr = objParseParam(obj);
  paramsStr && (url += "?");
  url += paramsStr;
  return url;
}
