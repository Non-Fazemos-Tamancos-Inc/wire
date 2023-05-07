import {Router} from './router.js';
import "./components/header/header.js";
import "./components/footer/footer.js";

const router = new Router();

router.route('/', function () {
    $('header-container').html('<header-component></header-component>');
    $('footer-container').html('<footer-component></footer-component>');
    $('main-container').html('<home-component></home-component>');
});

router.route('/about', function () {
    $('header-container').html('<header-component></header-component>');
    $('main-container').html('<about-component></about-component>');
});

router.init();