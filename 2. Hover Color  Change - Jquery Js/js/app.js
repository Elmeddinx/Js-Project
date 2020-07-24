$(function () {
    $('button').hover(a, d);
    i = 254;
    z = 5;
    function a() {

       i-=z;


        $(this).css({
            'background': `rgb(${i},${0},${0})`
        });
        console.log(i);

    };
    function d() {
        $(this).css({
            'background': 'rgb(255,0,0)'
        })
    }



    // Clock


    $(function C(){
        let clock = $('#clock');
        let currentDate = new Date();

        let h = currentDate.getHours();
        let m = currentDate.getMinutes();
        let s = currentDate.getSeconds();

        m = m < 10 ? `0${m}` : m;
        s = s < 10 ? `0${s}` : s;

        // clock.text(`${h} : ${m} : ${s}`);
        setTimeout(C, 1000);
    });

});


