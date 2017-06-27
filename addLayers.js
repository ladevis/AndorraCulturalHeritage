/*
 Project:       Andorra Cultural Heritage
 
 Authors:
                |MIT|Media Lab|Changing Places|
                Juanita Devis
                |Fundació ActuaTECH|
                Nuria Macia
                |Universitat d'Andorra|
                Cristina Yáñez
                Lara Martinez
                |Govern d'Andorra|Ministeri de Cultura, Joventut i Esports|Departament de Patrimoni Cultural Museos|
                Sara Ubach
                David Mas
                Abel Fortó
                
 Description:   It adds different layers for different types of Cultural Heritage in Andorra.
 Version:       2.0
 Date:          April 2017
 */

/*----------------------------------------------------------*/
/* TABLE OF CONTENTS:                                       */
/*----------------------------------------------------------*/
/* 		00 - Map   									  	    */
/*		01 - CityScope table								*/
/* 		02 - Data in the map and checkbox					*/

/*
==================================================
  00 - Map
==================================================
*/


google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(42.50661925, 1.52987775),
        zoom: 14,
        zoomControl: false,
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT},
        scaleControl: false,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        rotateControl: true,
        draggable : true,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
            "stylers": [
                    { "visibility": "on" },
                    { "saturation": -100 },
                    { "gamma": 0.54 }
                ]
            },
            {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                    { "visibility": "off" }
                ]
            },
            {
            "featureType": "water",
            "stylers": [
                    { "color": "#4d4946" }
                ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                    { "visibility": "off" }
                ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                    { "visibility": "simplified" }
                ]
            },
            {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                    { "color": "#ffffff" }
                ]
            },
            {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                    { "visibility": "simplified" }
                ]
            },
            {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                    { "color": "#ffffff" }
                ]
            },
            {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                    { "gamma": 0.48 }
                ]
            },
            {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [
                    { "visibility": "off" }
                ]
            },
            {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                    { "gamma": 7.18 }
                ]
            }
        ],
    }
    
    var mapElement = document.getElementById('bn');
    var map = new google.maps.Map(mapElement, mapOptions);
    
 /*
==================================================
  01 - CityScope table
==================================================
*/
    
    // Define the LatLng coordinates for the polygon's path.
    /* var outerCoords = [
        {lat: 42.505086, lng: 1.509961},
        {lat: 42.517066, lng: 1.544024},
        {lat: 42.508161, lng: 1.549798},
        {lat: 42.496164, lng: 1.515728}
    ];
    
    var innerCoords = [
        {lat: 42.505086, lng: 1.509961},
        {lat: 42.517066, lng: 1.544024},
        {lat: 42.508161, lng: 1.549798},
        {lat: 42.496164, lng: 1.515728}
    ];
    
    // Construct the polygon.
    var cityScopeTable = new google.maps.Polygon({
        paths: [outerCoords, innerCoords],
        strokeColor: '#d4b53a',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        geodesic: true,
        fillColor: 'none',
        fillOpacity: 0.00
    });
    
    cityScopeTable.setMap(map);
    */
    
    // Complete dynamic area
    // Complete Border
    var LayerCBorder = createCityScopeLayer( 'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/C_Border.kml', map);
    
    addClickEventToLayer('filtertoggleCBorder', map, LayerCBorder);
    
    // Complete Squares
    var LayerCSquare = createCityScopeLayer( 
    'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/C_Squares.kml', map);
    
    addClickEventToLayer('filtertoggleCBorder', map, LayerCSquare);
    
     // New dynamic area
    // New Border
    var LayerNBorder = createCityScopeLayer( 'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/N_Border.kml', map);
    
    addClickEventToLayer('filtertoggleNBorder', map, LayerNBorder);
    
    // New Squares
    var LayerNSquare = createCityScopeLayer( 
    'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/N_Squares.kml', map);
    
    addClickEventToLayer('filtertoggleNBorder', map, LayerNSquare);
    
     // Fill dynamic area
    // Fill Border
    var LayerFBorder = createCityScopeLayer( 'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/F_Border.kml', map);
    
    addClickEventToLayer('filtertoggleFBorder', map, LayerFBorder);
    
    // Fill Squares
    var LayerFSquare = createCityScopeLayer( 
    'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/F_Squares.kml', map);
    
    addClickEventToLayer('filtertoggleFBorder', map, LayerFSquare);
    
     // Table Area
    // Table Terrain
    var LayerCSTerrain = createCityScopeLayer( 'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/TerrainArea.kml', map);
    
    addClickEventToLayer('filtertoggleTable', map, LayerCSTerrain);
    
    // Table Acrylic
    var LayerCSAcrylic = createCityScopeLayer( 
    'http://juanitadevis.com/Andorra/klm_CityScope_Andorra/AcrylicBorder.kml', map);
    
    addClickEventToLayer('filtertoggleTable', map, LayerCSAcrylic);
  
    
   
    
    function createCityScopeLayer(url, map) {
        var date = new Date();
        var urlWithRandomParameterToAvoidCache = url + "?rev=" + date.getMilliseconds();
        
        console.log(urlWithRandomParameterToAvoidCache);
        var layerCS = new google.maps.KmlLayer({
          url: urlWithRandomParameterToAvoidCache ,                           
          map: map,
            suppressInfoWindows: true,
          preserveViewport: true
        });
        layerCS.setMap(null);
        return layerCS;
    }
    
    
    
    function addClickEventToLayer(layerId, map, layerCS) {
           /** Click event for LayerCBorder **/ 
        google.maps.event.addDomListener(document.getElementById(layerId),
                'click', function() {
                  filtertoggleLayer(event, map, layerCS);
        });
    }
    
/*
==================================================
  02 - Data in the map and checkbox
==================================================
*/
    
    /*
      02.1 - Data Monuments
    ==================================================
    */
    // Add monumnents on the map.
    
    // need to be connected with the table by type (BIC, BI, None) and classification (church, bridge...query to know the used elements?)
    
    
    // Add monumnents on the map. (AND'Visible online' = 'Visible')
    var layerBIC = new google.maps.FusionTablesLayer({
        query: {
            select: '\'Geocodable address\'',
            from: '1DxyMavkBGDmAuSK8oxjR5dYGV3LsxLlA2Fgn7-ux'
        },
        options: {
            styleId: 5,
            templateId: 7
        },
        styles: [
            {
                where: "'Tipus' MATCHES 'church'",
                markerOptions: { iconName: "church" }
            },
            {
                where: "'Tipus' NOT MATCHES 'church'",
                markerOptions: { iconName: "small_yellow" }
            }
        ]
        
    });
    layerBIC.setMap(map);
    
     /** Click event for layerBIC **/ 
    google.maps.event.addDomListener(document.getElementById('filtertogglemonuments'),
            'click', function() {
              filtertoggleLayer(event, map, layerBIC);
    });
    
    
    // Test boundaries on the map.
    // Needs styling.
    var layerBoundaries = new google.maps.FusionTablesLayer({
        query: {
            select: '\'Geocodable address\'',
            from: '1_Nd4RszE3MoHb1jQh6P7XRlmsjJQa97ZhhY2-XzB'
        },
         options: {
            styleId: 2,
            templateId: 2
        },
    });
    
    layerBoundaries.setMap(null);
    
    
   /** Click event for layerBoundaries **/
    google.maps.event.addDomListener(document.getElementById('filtertoggleboundaries'),
            'click', function() {
              filtertoggleLayer(event, map, layerBoundaries);
    });
    
    
    
    
    
    // Add museums on the map.
    var layerMuseums = new google.maps.FusionTablesLayer({
        query: {
            select: '\'Geocodable address\'',
            from: '13OhD6ruDMI1XvjpCmfwHZ2XZcJPgICmLys-55dLL'
        },
         options: {
            styleId: 5,
            templateId: 7
         }
    });
    
    layerMuseums.setMap(map);
    
     /** Click event for layerMuseums **/ google.maps.event.addDomListener(document.getElementById('filtertogglemuseum'),
            'click', function() {
              filtertoggleLayer(event, map, layerMuseums);
    });
    
    var layerFIC = new google.maps.FusionTablesLayer({
        query: {
        from: "1MHr1_Up3lHb0CAmHjGWsR6_CJNVGJ0prOWrw_iF-"
      },
      options: {
        styleId: 5,
        templateId: 7
      }
    });
    
    layerFIC.setMap(map);
    
     /** Click event for layerFIC **/ 
    google.maps.event.addDomListener(document.getElementById('filtertogglefic'),
            'click', function() {
              filtertoggleLayer(event, map, layerFIC);
    });
    
    
    
    var layerContHeritage = new google.maps.FusionTablesLayer({
        query: {
            select: '\'Geocodable address\'',
            from: '1vxGHR0GoCkVE8-uRgJRePPtVI_l9gx94H4pKdlAQ'
        },
         options: {
            styleId: 2,
            templateId: 3
        },
    });
    
    layerContHeritage.setMap(map);
    
     /** Click event for layerContHeritage **/ google.maps.event.addDomListener(document.getElementById('filtertogglecontheritage'),
            'click', function() {
              filtertoggleLayer(event, map, layerContHeritage);
    });
    
    function filtertoggleLayer(event, map, layer){
       
        checkbox = event.target;
        if (checkbox.checked){                               
            layer.setMap(map);
        } else {
            layer.setMap(null);
        } 
    };
}

 //var CountHeritage = document.getElementById ("cMonument");
 //    CountHeritage.innerHTML = ("130");



    
function toggleCSLegend(event) {
    var checked = event.target.checked;
    var legend = $('#cityscope-legend');
    if (checked) {
        legend.show();
    }
    else {
        legend.hide();
    }
    
}

function toggleMCard(event) {
    var checked = event.target.checked;
    var legend = $('#monument-card');
    if (checked) {
        legend.show();
    }
    else {
        legend.hide();
    }
    
}