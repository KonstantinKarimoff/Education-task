/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

 class TokenService {
    constructor() {
        this.token = null;
        this.subs = [];
    }
    subscribe(callback) {
        this.subs.push(callback);
    }
    setToken(token) {
        this.token = token;
        this.subs.forEach(function (key) {key(token);});
        return this
    }
    getToken() {
        return this.token;
    }
    removeToken() {
        this.token = null;
        this.subs.forEach((sub) => sub(this.token));
    }
}
 window.TokenService = TokenService;

 export default TokenService;
