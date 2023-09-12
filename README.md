# Задание 1. Настроить тестовое окружение JEST
Можно склонировать репозиторий и вести разработку в нем, либо создать свой собственный.

_____

# Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции» 
добавить ее в репозиторий;
продумать тест-кейсы (успешное/неуспешное выполнение функции);
продумать корнер-кейсы; 
написать unit-тесты (минимум 3).

_____

# Тест-кейсы:
1.Проверка корректности работы функции createAdder()
Шаги:
 Вызвать функцию createAdder() с аргументом a = 5.
 Вызвать функцию adder() с аргументом b = 3.
 Сравнить результат с ожидаемым значением 8.
Ожидаемый результат: Результат вызова функции adder() должен быть равен 8.

2.Проверка корректности работы функции addA()
Шаги:
 Вызвать функцию createAdder() с аргументом a = 10.
 Вызвать функцию adder() с аргументом b = 'hi'.
 Сравнить результат с ожидаемым значением 15.
Ожидаемый результат: Результат вызова функции adder() должен быть 'a should be a number'.

_____

# Корнер-кейсы:
1.Проверка работы функции createAdder() без аргументов
Шаги:
 Вызвать функцию createAdder() без аргументов.
 Сохранить результат в переменную adder.
 Вызвать функцию adder() с аргументом b = 5.
 Проверить, что функция выдаст ошибку.
Ожидаемый результат: Функция должна выдать ошибку, так как не был передан аргумент a.

2.Корнер-кейс: Проверка работы функции createAdder() с отрицательным значением аргумента a
Шаги:
 Вызвать функцию createAdder() с аргументом a = -5.
 Сохранить результат в переменную adder.
 Вызвать функцию adder() с аргументом b = 10.
 Проверить, что функция вернет значение 5.
Ожидаемый результат: Функция должна вернуть значение 5.

_____