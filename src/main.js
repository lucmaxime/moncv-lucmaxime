import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './main.css';
import 'jquery-smooth-scroll';
import Chart from 'chart.js';

$(document).ready(() => {
    $('a').smoothScroll();
    $('.progress').each((index, element) => {
        let value = $(element).attr('aria-valuenow');
        let remainingValue = $(element).attr('aria-valuemax') - value;
        let language = $(element).text();
        $(element).replaceWith('<canvas id="chart' + index + '" width="100" height="100"></canvas>');
        let ctx = $('#chart' + index + '');

        //eslint-disable-next-line
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ['#2b3e50', '#FFFFFF'],
                        data: [value, remainingValue]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: [language],
                    fontSize: 18,
                    fontColor: 'white'
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    });
});
