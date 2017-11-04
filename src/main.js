import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './main.css';
import 'jquery-smooth-scroll';
import Chart from 'chart.js';

$(document).ready(() => {
    $('a').smoothScroll();
    $('.progress-bar').each((index, element) => {
        let value = $(element).attr('aria-valuenow');
        let remainingValue = $(element).attr('aria-valuemax') - value;
        let language = $(element).text();
        $(element).replaceWith('<canvas id="chart' + index + '"></canvas>');

        let ctx = $('#chart' + index);

            //eslint-disable-next-line
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [
                        {
                            backgroundColor: ['#3e95cd', '#FFFFFF'],
                            data: [value, remainingValue]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: [language],
                        fontSize: 18
                    }
                }
            });
    });
});
