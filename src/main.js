import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './main.css';
import 'jquery-smooth-scroll';
import Chart from 'chart.js';

$(document).ready(() => {
    $('a').smoothScroll();
    var ctx = $('#my-chart');
    //eslint-disable-next-line
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ['#FFA500'],
                    data: [100]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Français'
            }
        }
    });
});
