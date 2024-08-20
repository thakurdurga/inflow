jQuery( document ).ready(function() {
    jQuery(".content-box .box-title").click(function() { 
        jQuery(this).closest('.content-box').toggleClass("opened");         
    });
    jQuery(".btn-add-card").click(function() { 
        jQuery('.add-card-popup').toggleClass("opened");         
    });
    jQuery(".add-card-popup .popup-overlay,.add-card-popup .close-popup,.add-card-popup .btn-cancel").click(function() { 
        jQuery('.add-card-popup').toggleClass("opened");         
    });
    jQuery(".authorization-popup-btn").click(function() { 
        jQuery('.popup-wrapper.authorization-popup').toggleClass("opened");         
    });
    jQuery(".authorization-popup .popup-overlay,.authorization-popup .close-popup,.authorization-popup .btn-cancel").click(function() { 
        jQuery('.popup-wrapper.authorization-popup').toggleClass("opened");       
    });
    jQuery(".btn-reject").click(function() { 
        jQuery('.popup-wrapper.reject-popup').toggleClass("opened");         
    });
    jQuery(".reject-popup .popup-overlay,.reject-popup .close-popup,.reject-popup .btn-cancel").click(function() { 
        jQuery('.popup-wrapper.reject-popup').toggleClass("opened");       
    });
    // smoothscroll
    jQuery("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        
    });
});