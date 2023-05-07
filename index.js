import {Router} from './router.js';
import "./components/header/header.js";
import "./components/footer/footer.js";
import "./views/home/home.js";

const router = new Router();

router.route('/', function () {
    console.log($("app-container"));

    $('header-container').html('<header-component></header-component>');
    $('footer-container').html('<footer-component></footer-component>');
    $('app-container').html('<home-app></home-app>');
});

router.route('/store', function () {
    console.log($("app-container"));
    $('header-container').html('<header-component></header-component>');
    $('footer-container').html('<footer-component></footer-component>');
    $('app-container').html('<store-app></store-app>');
});

router.init();