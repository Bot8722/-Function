function censor() {
    const pairs = [];

    return function (str1, str2) {
        if (str2 !== undefined) {
            // Если переданы два параметра, сохраняем их как пару
            pairs.push([str1, str2]);
        } else {
            // Если передан один параметр, заменяем слова в строке
            let result = str1;

            pairs.forEach(pair => {
                const [wordToReplace, replacementWord] = pair;
                const regex = new RegExp(wordToReplace, 'g'); // Создаем регулярное выражение для замены
                result = result.replace(regex, replacementWord);
            });

            return result;
        }
    };
}

// Пример использования
const changeScene = censor();

changeScene('PHP', 'JS');
changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programming language for backend web-development'));