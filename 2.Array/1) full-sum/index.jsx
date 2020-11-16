import React from 'react';
/**
 * @name Full-sum
 * @task
 * Написать функцию суммирования, которая будет суммировать все аргументы и возвращять результат
 * Если хотя бы один из арументов не является числом, сгенерировать ошибку c сообщением: "Wrong Argument Type"
 * Если аргументов не будет, пусть вернется 0
 * @param args
 */
function fullSum(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') throw new Error("Wrong Argument Type");
    };

    let ars = [];
    for (let i = 0; i < args.length; i++) {
        ars[i] = args[i];
    }

    let result = ars.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return result;
}

window.fullSum = fullSum;


class Component extends React.component {
  constructor() {
    super();

    this.state = {
      config: false,
    };
  }

  render() {
    return <div>ddd</div>
  }
}
export default Component;
