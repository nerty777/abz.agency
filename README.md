Использовал: <br>

1. React, Redux<br>
2. линтинг Airbnb;<br>
3. правила a11y;<br>
4. подход mobile-first;<br>
5. svg sprite;<br>
6. анимацию появление блоков на странице и hover анимацию svg файлов<br>
7. async await;<br>
8. синтаксис ES6-ES8<br>
9. препроцессор SCSS<br>
10. единицы измерения rem и breakpoints через mixin scss<br>
11. оптимизированы изображения, webp для растровых картинок фона<br>
12. прописаны основные meta теги в index.html<br>
13. дополнительные npm пакеты:<br>
    <a href="https://www.npmjs.com/package/aos">aos</a> small library to animate
    elements on your page as you scroll<br>
    <a href="https://www.npmjs.com/package/axios">axios</a> promise based HTTP
    client<br>
    <a href="https://www.npmjs.com/package/react-select">react-select</a> the
    Select control for React<br>
    <a href="https://www.npmjs.com/package/node-sass">node-sass</a> it allows
    you to natively compile .scss files to css at incredible speed and
    automatically via a connect middleware<br>
    <a href="https://www.npmjs.com/package/redux-thunk">redux-thunk</a> thunk
    middleware for Redux<br>
    <a href="https://www.npmjs.com/package/react-modal">react-modal</a>
    accessible modal dialog component for React.JS<br>
    <a href="https://www.npmjs.com/package/image-dimensions">image-dimensions</a>
    get the dimensions of an image blob.<br>
    <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> publish files
    to a gh-pages branch on GitHub<br>
    <br>
    <br>
    Технические требования
● Angular (v​ ersion ​6+) / React / Vue;
● HTML5 / CSS3;
● Разметка должна быть pixel-perfect (desktop: последняя версия Chrome / FF /
Safari / Edge, mobile/tablet: последняя версия Safari на iOS 11/12 и Chrome на
Android 6/7/8);
● Минимальная ширина экрана 320px;
● Максимальная ширина экрана 2560px;
● Максимальная ширина основного контейнера 1170px;
● Разметка должна быть готова к переполнению содержимого, включая длину
заголовка блока. Если текст длиннее чем может отображать блок - Вы должны его обрезать и показать знак «...» с помощью CSS или Javascript.
Важно! Мы будем обращать внимание, насколько чистый у Вас подход к написанию CSS и Javascript-кода. Вы можете использовать любые сторонние библиотеки CSS и Javascript без каких-либо ограничений. Если в проект добавляются сторонние библиотеки CSS / Javascript через менеджеры зависимостей npm / yarn (а не методом копи-паста), Вы получите бонусные баллы. Если Вы используете любой task runner (gulp / webpack), Вы также получите бонусные баллы.
Задание
1. Вам необходимо реализвать респонзив (responsive) верстку HTML5/CSS3 в соответствии с макетами (mockups) ​http://view.maquetter.com/ekwgbx/0201 - 0208 и стайл гайдом (style guide) ​http://view.maquetter.com/ekwgbx/0101​.
  Все CTA (call to action) ссылки/кнопки должны вести на регистрацию. Ссылки в хэдере должны вести на соответствующие блоки на странице. Все остальные ссылки на странице должны вести на “#”. Обращаю Ваше внимание на тот факт, что хэдер должен быть закреплен вверху страницы при скролле. Также обратите внимание что:
1.1. Все изображения на сайте должны поддерживать Retina экраны.
1.2. Используйте CSS препроцессор (Sass/Less) или PostCSS.
1.3. Организуйте Ваши CSS стили в читаемом виде (группируйте CSS по
функциональности, пишите разъясняющие комментарии, разделяйте стили на несколько файлов по функциональности и т.д.).
2. Работа с REST API (GET). Тут Вы найдете ​API документацию​. Для проверки что все методы работают на стороне сервера можете использовать эту ​ссылку.​
2.1. Используйте параметр user_id=1 чтобы вывести пользователя в хэдере.
Авторизации на сайте нет, Вам просто необходимо вывести
полученные данные.
2.2. Используя полученные данные юзеров реализуйте вывод блока “Our
cheerful users” в соответствии с макетом. Кнопка “Show more” должна подгружать ещё 6 пользователей из API. Кнопка “Show more” должна быть скрыта, когда больше нет пользователей в БД (достигнута последняя страница результатов в API). Пользователи отсортированы по дате регистрации (новые первые).
2.3. Для отображения выпадающего списка в форме регистрации используйте GET /positions метод из API документации.
3. Работа с REST API (POST) – форма регистрации
3.1. Реализовать валидацию на фронт-енд части в соответствии с макетами
и API документацией.
3.2. Реализовать бизнес логику формы регистрации в соответствии с
макетами и API документацией.
3.3. После успешной регистрации обновить список пользователей в блоке “Our cheerful users”. Если кнопка “Show more” была нажата (т.е. Больше чем одна страница пользователей была загружена из API), то свернуть все и отобразить только первых 6 пользователей. В результате новый пользователь будет выведен первым и Вы сможете проверить корректность работы пункта 3.2 не перезагружая страницу.
4. Самостоятельное тестирование в следующих браузерах (можно использовать BrowserStack):
4.1. Chrome, Firefox, Edge, Safari (Windows)
4.2. Chrome, Firefox, Safari (MacOS)
4.3. Chrome, Safari (iOS)
4.4. Chrome (Android)
5. Оптимизация вебсайта. Минимизируйте и оптимизируйте css, js, изображения, и т.д. Для этого Вам необходимо развернуть Вашу работу на любом доступном Вам хостинге и направить на него любой доступный Вам домен.
5.1. Проверьте Вашу работу используя Google Page Speed и убедитесь что Ваша работа в зеленой зоне.
5.2. Проверьте Вашу работу используя Google Chrome Audit и убедитесь что Ваша работа в зеленой зоне для Performance, Best practices, SEO (mobile and desktop для 3G).
5.3. Проверьте Вашу работу используя Webpagetest и убедитесь что показатели близки к AAAAAA.
