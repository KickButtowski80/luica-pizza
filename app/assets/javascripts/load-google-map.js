$(document).ready(function(){ 
        new Maplace({
        show_markers: true,
        locations: [{
            lat: 34.027048,
            lon: -118.391561,
            title:'Lucia Pizza',
            html: ['<h5>Lucia Pizza</h5>',
                   '<p>9030 Venice Blvd Los Angeles CA, 90232</p>',
                   '<p> tel: (310) 838-0331 </p>'].join(''),
            zoom: 19
        }]
    }).Load();
   
});