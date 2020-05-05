/*---------------------------------------------
Theme Name: addapptation Tile Micro
Theme URI: https://github.com/TeamAddapptation/PlatformDev/blob/master/public/assets/js/tile/addappter-tile.js
Author: addapptation Dev Team
Author URI: https://addapptation.com/
Description: User has the ability and flexibly to add tiles of a various sizes that can link out and/or allow for hover effects.
Version: 1.0
Edited: April 8, 2020 - Bean
---------------------------------------------*/
// tiles(jsonTiles);
function tiles(jsonTiles) {
    console.log(jsonTiles);
    var css = `
.a__no-records{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #BFBFBF;
    height: 225px;
    margin-top: 50px;
    border: 2px dashed #707070; 
  }

  /* Main Structure */
  /* .a__tile_container{
    padding: 20px;
  } */
  .a__tile_wrapper .row {
    margin-right: 0;
    margin-left: 0; 
  }
  .a__tile_wrapper .a__tile_container .a__basic_tile {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    overflow: hidden;
    }
  /* Overlays */
  .a__basic_tile.a__filters:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .6;
  }
  .a__basic_tile.a__filters:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .6;
  }`;

    head = document.head || document.getElementsByTagName('head')[0];
    styleBlock = document.createElement('style');
    styleBlock.type = 'text/css';
    styleBlock.appendChild(document.createTextNode(css));
    document.head.appendChild(styleBlock);
    
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    var json = jsonTiles;
    console.log(json);
    var addappterID = json['id'];
    var cssID = ".a__" + addappterID;
    var options = json['options'];
    var records = json['records'];
    var style = options['style'];
    var objClasses = {
        "micro" : {
            "container" : ["container-fluid", "a__tile_wrapper"],
            "item" : ["row"]
        },
        "action" : {
            "container" : ["a__tile_action", "mt-4"]
        },
        "basic" : {
            "container" : ["col-12 col-md-4 col-lg-3", "a__tile_container"],
            "item" : ["a__basic_tile"]
        },
        "icon" : {
            "container" : ["col-12 col-md-6 col-lg-3", "a__tile_container"],
            "item" : ["a__icon_tile"],
            "icon" : ["a_tile_icon", "text-center"],
            "title" : ["a__tile_body", "text-center"]
        }
      };
      
    /*---------------------------------------------
    User Generated CSS
    ---------------------------------------------*/
    var height = options.height ? options.height : 300; 
    var border_radius = options.border_radius ? options.border_radius : "0";
    var border = options.border ? options.border : "0";
    var border_color = options.border_color ? border_color : "#fff";

    /*---------------------------------------------
    Header Font Size
    ---------------------------------------------*/
    switch (options.header_size){
        case "small":
            var header_size = "40px";
        break;
        case "medium":
            var header_size = "45px";
        break;
        case "large":
            var header_size = "50px";
        break;
        default:
            var header_size = style === "basic" ? "50px" : "40px";
        break;
    }
    /*---------------------------------------------
    Description Font Size
    ---------------------------------------------*/
    switch (options.description_size){

        case "small":
            var desc_size = "18px";
        break;
        case "medium":
            var desc_size = "22px";
        break;
        case "large":
            var desc_size = "22px";
        break;
        default:
            var desc_size = style === "basic" ? "22px" : "18px";
        break;
    }
    /*---------------------------------------------
    Icon Size
    ---------------------------------------------*/
    switch (options.icon_size){
        case "small":
            var icon_size = "100px";
        break;
        case "medium":
            var icon_size = "125px";
        break;
        case "large":
            var icon_size = "150px";
        break;
        default:
            var icon_size = "100px";
        break;
    }
    /*---------------------------------------------
    Padding Size
    ---------------------------------------------*/
    switch (options.padding){
        case "none":
            var padding = "0";
        break;
        case "small":
            var padding = "2px";
        break;
        case "large":
            var padding = "10px";
        break;
        default:
            var padding = "5px";
        break;
    }
    /*---------------------------------------------
    Theme Case Block
    ---------------------------------------------*/
    const blk = "#101010";
    const wht = "#fff";
    switch (options.theme){
        case "dark":
            var header_color =  wht;
            var desc_color = wht;
            var icon_color =  wht;
            var filter_one = blk;
            var filter_two = blk; 
            var hover_color = "#000000";
        break;
        case "custom":
            var header_color =  options.header_color ? options.header_color : wht;
            var desc_color = options.description_color ? options.description_color : wht;
            var icon_color = options.icon_color ? options.icon_color : wht;
            var filter_one = options.filter_one ? options.filter_one : "";
            var filter_two = options.filter_two ? options.filter_two : ""; 
            var hover_color = options.hover_color ? options.hover_color : "#000000"; 
        break;
        default:
            var header_color = blk;
            var desc_color = blk;
            var icon_color = blk;
            var filter_one = wht;
            var filter_two = wht; 
            var hover_color = "#FFFFFF"; 
        break;
    }
    /*---------------------------------------------
    Layout Case Block
    ---------------------------------------------*/
    switch (options.layout){
      case "left":
        var content_layout = "row";
        var content_align = "flex-start";
        var desc_align = "left";
      break;
      case "right":
        var content_layout = "row-reverse";
        var content_align = "flex-end";
        var desc_align = "left";
      break;
      case "center":
        var content_layout = "column";
        var content_align = "center";
        var desc_align = "center";
        
      break;
    }
    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var cssStyle = (style === "basic") ? "basic" : "icon";
    var css = document.createElement('style');
    css.innerHTML = `
    ${cssID} .a__tile_container {
        padding: ${padding};
    }
    ${cssID} .a__tile_container .a__${cssStyle}_tile {
        flex-direction: ${content_layout};
        justify-content: ${content_align};
        height: ${height};
        border-radius: ${border_radius};
        border:${border} solid ${border_color};
    }
    ${cssID} .a__tile_container .a__basic_tile .a__desc_container {
        text-align: ${desc_align};
    }
    ${cssID} .a__${cssStyle}_tile.a__filters:before {
        background: ${filter_one};
        border-radius: ${border_radius};
    }
    ${cssID} .a__${cssStyle}_tile.a__filters:after {
        background: ${filter_two};
        border-radius: ${border_radius};
    }
    ${cssID} .a__${cssStyle}_tile .a__tile_body .a__tile_header{
        color: ${header_color};
        font-size: ${header_size};
        text-align: ${desc_align};
    }
    ${cssID} .a__tile_container .a__basic_tile .a__desc_container {
        text-align: ${desc_align};
        border-radius: ${border_radius};
        justify-content: ${content_align};
    }
    ${cssID} .a__tile_container .a__${cssStyle}_tile .a__desc_container p{
        color: ${desc_color};
        font-size: ${desc_size};
    }
    ${cssID} .a__basic_tile:hover  .a__desc_container {
        background-color:${hover_color}66;
        justify-content:${content_align};
        text-align: ${desc_align};
      }
    ${cssID} .a__basic_tile .a__desc_container .a__desc {
        max-height: ${height};
    }
    ${cssID} .a__basic_tile:hover .a__desc_container .a__desc {
        max-height: ${descHeight(height)};
      }
    ${cssID} .a__tile_container .a__icon_tile:hover {
        box-shadow: inset 1000px 1000px 1000px 1000px ${hover_color}66;
      }
    ${cssID} .a__icon_tile .a__icon{
        color: ${icon_color};
      }
      ${cssID} .a__icon_tile .a__icon i{
        font-size: ${icon_size};
      }
    ${cssID} .a__tile_container .a__icon_tile .a__desc_container {
        text-align: ${desc_align};
        max-height: ${descHeight(height)};
      }
    ${cssID} .a__card_container{
        padding: ${padding};
      }
    `;
    document.head.appendChild(css);
    /*---------------------------------------------
    Helpers - Should be moved to there own file
    ---------------------------------------------*/
    var isObject = function (val) {
        return Object.prototype.toString.call(val) === "[object Object]";
    };

    var isArray = function (val) {
        return Array.isArray(val);
    };

    var createElement = function (a, b) {
        var d = document.createElement(a);
        if (b && "object" == typeof b) {
            var e;
            for (e in b) {
                if ("html" === e) {
                    d.innerHTML = b[e];
                } else {
                    d.setAttribute(e, b[e]);
                }
            }
        }
        return d;
    };
    var each = function (arr, fn, scope) {
        var n;
        if (isObject(arr)) {
            for (n in arr) {
                if (Object.prototype.hasOwnProperty.call(arr, n)) {
                    fn.call(scope, arr[n], n);
                }
            }
        } else {
            for (n = 0; n < arr.length; n++) {
                fn.call(scope, arr[n], n);
            }
        }
    };

    /*---------------------------------------------
    Element Functions
    ---------------------------------------------*/
    //Container build based on objClass
    function descHeight(val){
        return style === "basic" ? (val.slice(0, -2)) - 50 + "px" : (val.slice(0, -2)) / 2 + "px";
    }
    function strClass(style, level) {
        var arrClasses = objClasses[style][level] || "";
        var strClasses = arrClasses === "" ? "" : arrClasses.join(" ") + "";
        return strClasses;
    }
    function action(o){
       var title = o.title ? `<h2>${o.title}</h2>` : "";
       var desc = o.description ? `<p>${o.description}</p>` : "";
        return `<div class="a_action_content">${title} ${desc}</div>`;
    }
    function showIcon(o, r){
        if(o.style === "icon"){
            var icon = (r.icon && o.style === "icon") ? `<div class="a__tile_icon a__icon"><i class='${r.icon}'></i></div>` : "";
            return icon;
        } else {
            return "";
        }
    }
    function rClasses(r){
        return r.classes ? ` ${r.classes}` : "";
    }
    function tileBkg(o, r){
        if(r.background_image){
            return `background-image: url(${r.background_image});"`;
        } else if (r.background_color){
            return `background-color:${r.background_color};"`;
        } else if (!r.title && !r.description && !r.icon ) {
            return `background-color: #ffffff; box-shadow: 0px 3px 6px #00000029;"`;
        }
    }
    function title(o, r){
        if(r.title){
            return r.title;
        } else if (!r.title && !r.description && !r.icon) {
            return `<span style="color:#BFBFBF">Empty</span>`;
        }else{
            return "";
        }
    }
    function description(o, r){
        return r.description ? `<div class="a__desc_container"><div class="a__desc"><p>${r.description}</p></div></div>` : "";
    }
    function click(o, r){
        return r.href ? `window.open('${r.href}', '${r.target ? r.target : "_self"}')`: "";
    }
    function filters(r){
        return ((!r.title && !r.description) && !r.icon) ? "" : "a__filters";
    }
    
    /*---------------------------------------------
    Container Build
    ---------------------------------------------*/
    function tileMicro(o, r){
            var wrapper = createElement("div", {
                "class": `${strClass("micro", "container")} a__${addappterID}`
            });
            var row = createElement("div", {
                "class": strClass("micro", "item"),
                "id": "a__tile"
            });
            if(o.title || o.description){
                var action_row = createElement("div", {
                    html: `${action(o)}`,
                    "class": strClass("action", "container")
                });
                wrapper.appendChild(action_row);
            };
                if(o.search === "true"){
                    var search = createElement("div", {
                        html: `<span class="icon"><i class="fas fa-search"></i></span><input type="text" id="a__search_input" class="a__tile_search" onkeyup="tileSearch()">`,
                        "class": "search-container"
                    });
                    action_row.appendChild(search);
                };
            
        if (records && records.length) {
            each(r, function(r){
                if (!r.title && !r.description){
                    console.log("No Title or Description");
                }
                var tile_container = createElement("div", {
                    "class": strClass(o.style, "container") + " " +  rClasses(r)
                })
                tile_container.appendChild(createElement("div", {
                    html: `${tileBuild(o, r)}`,
                    "class": strClass(o.style, "item") + " " +  filters(r),
                    "style": tileBkg(o, r),
                    "onclick": click(o, r),
                    }))
                wrapper.appendChild(row);
                row.appendChild(tile_container);
            })   
        } else {
            var empty = createElement("div", {
                html: "<h2>Add Tile Element</h2>",
                "class": "a__no-records col-12 mt-3"
            })
            wrapper.appendChild(row).appendChild(empty);
        };
        var target = document.getElementById(addappterID);
        if (!target) {
            target = document.createElement('div');
            target.setAttribute("id", addappterID);
            document.body.appendChild(target);
        }
        document.getElementById(addappterID).appendChild(wrapper);
    }

    /*---------------------------------------------
    Record Build
    ---------------------------------------------*/
    function tileBuild(o, r){
        switch (o.style){
            case "basic":
            case "icon":
                return `${showIcon(o, r)}
                        <div class="a__tile_body">
                            <div class="a__tile_header">
                                ${title(o, r)}
                            </div>
                                ${description(o, r)}
                        </div>`
            break;
            default:
                console.log("Hello! Please select basic, icon or card as your style. -Team addapptation")
            break;
          }
    }
    tileMicro(options, records);
/*---------------------------------------------
Show More Button
---------------------------------------------*/
window.onload = showMoreBtn;
function showMoreBtn(){
    var showMoreBtn = document.getElementsByClassName('a__show_more');
    for (i = 0; i < showMoreBtn.length; i++) {
    var char = showMoreBtn[i].previousElementSibling.innerHTML.length;
    if (char > 45){
        showMoreBtn[i].classList.add('show');
    }
    }
}
// 'Show More' button on click
var showMore = document.getElementsByClassName('a__show_more');
for (i = 0; i < showMore.length; i++) {
    showMore[i].addEventListener("click", function(e) {
        console.log("click");
        var descCont = this.parentNode;
        var cardCont = descCont.parentNode;
        descCont.classList.toggle('active');
        cardCont.classList.toggle('active');
        if (this.innerHTML === "See More"){
        this.innerHTML = "<i class='fas fa-times'></i>";
        } else{
        this.innerHTML = 'See More';
        }
    })
}
/*---------------------------------------------
SEARCH BAR
---------------------------------------------*/
    //Event Listener
    var dt_search = document.querySelectorAll('.search-container .a__tile_search');
    // console.log(dt_search.length)
    for (i = 0; i < dt_search.length; i++){
    var search_input = dt_search[i];
    search_input.addEventListener('focus', function(){
        var search = this;
        search.parentNode.classList.add('active');
        setTimeout(function(){
        search.classList.add('active');
        }, 300);
    });
    search_input.addEventListener('focusout', function(){
        var search = this;
        var val = this.value;
        if(val.length == 0){
        search.parentNode.classList.remove('active');
        setTimeout(function(){
            search.classList.remove('active');
        }, 300);
        }
    });
}
};
function tileSearch() {
    var input, filter, tiles, t, a, i, txtValue;
    input = document.getElementById('a__search_input');
    filter = input.value.toUpperCase();
    tiles = document.getElementById("a__tile");
    t = tiles.getElementsByClassName('a__tile_container');
    for (i = 0; i < t.length; i++) {
        a = t[i].getElementsByClassName("a__tile_header")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            t[i].style.display = "";
            } else {
            t[i].style.display = "none";
        }
    }
    }
