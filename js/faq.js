//used for changing faq display
var activeFaq = $('#hacker_faq');

$('#hacker_faq_link').click(function (e) {
    e.preventDefault();
    if (activeFaq.attr('id') === 'hacker_faq') {
        return;
    }

    activeFaq.css({
        display: 'none'
    });
    activeFaq = $('#hacker_faq');
    activeFaq.css({
        display: 'inherit'
    });
});

$('#sponsor_faq_link').click(function (e) {
    e.preventDefault();
    if (activeFaq.attr('id') === 'sponsor_faq') {
        return;
    }

    activeFaq.css({
        display: 'none'
    });
    activeFaq = $('#sponsor_faq');
    activeFaq.css({
        display: 'inherit'
    });

});

$('#other_faq_link').click(function (e) {
    e.preventDefault();
    if (activeFaq.attr('id') === 'other_faq') {
        return;
    }

    activeFaq.css({
        display: 'none'
    });
    activeFaq = $('#other_faq');
    activeFaq.css({
        display: 'inherit'
    });
});
