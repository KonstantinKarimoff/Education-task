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
    setToken() {
        this.token = newToken;
        console.log(newToken);
        this.subs.forEach((sub) => sub(this.token));
    }
    getToken() {
        console.log(this.token);
        return this.token();
    }
    removeToken() {
        this.token = null;
        this.subs.forEach((sub) => sub(this.token));
    }
}

window.TokenService = TokenService;

export default TokenService;
