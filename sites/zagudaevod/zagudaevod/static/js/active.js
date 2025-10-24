// $(document).ready(function () {
// //    $('.my-slider').unslider({
// //        animation: 'vertical',
// //        autoplay: true,
// //        infinite: true
// //    });
// //
// //
// //    $('.our-client-carousal').owlCarousel({
// //        items: 1,
// //        loop: true,
// //        autoplay: true,
// //        autoplayTimeout: 5000,
// //        margin: 10,
// //        nav: true,
// //        navText: [
// //        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
// //        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
// //    });
//      var $grid = $('.grid').isotope({
// //        itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//     });
//     var filterFns = {
//         numberGreaterThan50: function () {
//             var number = $(this).find('.number').text();
//             return parseInt(number, 10) > 50;
//         },
//         ium: function () {
//             var name = $(this).find('.name').text();
//             return name.match(/ium$/);
//         }
//     };
//     $('.filters-button-group').on('click', 'button', function () {
//         var filterValue = $(this).attr('data-filter');
//         filterValue = filterFns[filterValue] || filterValue;
//         $grid.isotope({
//             filter: filterValue
//         });
//     });
//     $('.button-group').each(function (i, buttonGroup) {
//         var $buttonGroup = $(buttonGroup);
//         $buttonGroup.on('click', 'button', function () {
//             $buttonGroup.find('.is-checked').removeClass('is-checked');
//             $(this).addClass('is-checked');
//         });
//     });
// });


// // Пишем скрипт для фиксации цвета на выделенной категории в меню сайта
// $(document).ready(function() {
//     // Установка активного пункта на основе текущей страницы
//     let location = window.location.pathname;
//     $('.menu a').each(function() {
//         let link = $(this).attr('href');
//         if (location === link) {
//             $(this).parent().addClass('active');
//         } else {
//             $(this).parent().removeClass('active');
//         }
//     });

//     // Обработка клика для активации пункта меню
//     $('.menu a').on('click', function(e) {
//         e.preventDefault(); // Предотвращаем стандартное поведение ссылки
//         let link = $(this).attr('href');
//         // Удаляем active класс со всех пунктов
//         $('.menu li').removeClass('active');
//         // Добавляем active класс только текущему пункту
//         $(this).parent().addClass('active');
//         // Переход по ссылке (опционально, если нужно)
//         window.location.href = link;
//     });
// });

$(document).ready(function() {
    console.log("Document ready - Menu script started");

    // Target only the header menu
    const $menuItems = $('.header .menu li');

    // Set initial active state based on click (no URL check for now)
    $menuItems.removeClass('active'); // Clear all active states initially
    $menuItems.first().addClass('active'); // Set first item as active by default

    // Click handler to toggle active state
    $menuItems.on('click', 'a', function(e) {
        e.preventDefault();
        console.log("Clicked:", $(this).text());
        // Remove active class from all items
        $menuItems.removeClass('active');
        // Add active class to the clicked item's parent <li>
        $(this).parent().addClass('active');
        // Navigate to the link (optional, adjust if needed)
        window.location.href = $(this).attr('href');
    });
});