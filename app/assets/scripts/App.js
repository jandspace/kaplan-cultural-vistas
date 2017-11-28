
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import SmoothScroll from './modules/SmoothScroll';
import FormThankyou from './modules/FormThankyou';


var mobileMenu = new MobileMenu();

new RevealOnScroll($('.meet-our-team__content'), '65%');
new RevealOnScroll($('.accommodation__content-inner'), '85%');
new RevealOnScroll($('.case-study__col'), '85%');
new SmoothScroll();

var formThankyou = new FormThankyou();
