let menu_opened = false;
let container_product_opened = false;
let container_company_opened = false;
let container_connect_opened = false;


function collapsed_menu(){

}

function open_menu(){
    if (menu_opened){
        document.querySelector('#menu').style.display = 'none';
        document.getElementById('menu_icon').src = 'images/icon-hamburger.svg';
        
        menu_opened = false;
    } else {
        document.querySelector('#menu').style.display = 'block';
        document.getElementById('menu_icon').src = 'images/icon-close.svg';
        document.getElementById('menu_icon').height = '20';
        menu_opened = true;
        close_all();
    }
}

function drop_product(){
    if (container_product_opened){
        document.querySelector('#product_container').style.display = 'none';
        document.getElementById('product_arrow').style.rotate = '0deg';
        container_product_opened = false;
    } else {
        document.querySelector('#product_container').style.display = 'block';
        document.getElementById('product_arrow').style.rotate = '180deg';
        container_product_opened = true;
    }
}

function drop_company(){
    if (container_company_opened){
        document.querySelector('#company_container').style.display = 'none';
        document.getElementById('company_arrow').style.rotate = '0deg';
        container_company_opened = false;
    } else {
        document.querySelector('#company_container').style.display = 'block';
        document.getElementById('company_arrow').style.rotate = '180deg';
        container_company_opened = true;
    }
}

function drop_connect(){
    if (container_connect_opened){
        document.querySelector('#connect_container').style.display = 'none';
        document.getElementById('connect_arrow').style.rotate = '0deg';
        container_connect_opened = false;
    } else {
        document.querySelector('#connect_container').style.display = 'block';
        document.getElementById('connect_arrow').style.rotate = '180deg';
        container_connect_opened = true;
    }
}

function close_all(){
    document.querySelector('#product_container').style.display = 'none';
    document.getElementById('product_arrow').style.rotate = '0deg';
    container_product_opened = false;
    
    document.querySelector('#company_container').style.display = 'none';
    document.getElementById('company_arrow').style.rotate = '0deg';
    container_company_opened = false;
    
    document.querySelector('#connect_container').style.display = 'none';
    document.getElementById('connect_arrow').style.rotate = '0deg';
    container_connect_opened = false;
}