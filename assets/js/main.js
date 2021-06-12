// ---------------------onclick top menubar--------------------
function openNav() {
    document.querySelector('.nav .nav__link').style.right = '0';
}
function closeNav() {
    document.querySelector('.nav .nav__link').style.right = '-250px';
}


// -----------------------on click cho ngành liên quan-------------------
function resetNganh() {
    var list_layer = document.querySelectorAll(".nganh-lien-quan .product .layer-2");
    var list_link = document.querySelectorAll(".nganh-lien-quan .product .layer-2 a");
    for (let i = 0; i < list_link.length; i++) {
        list_layer[i].setAttribute("style", "background-color: none;");
        list_link[i].setAttribute("style", "opacity:0; bottom: 0");
    }
}
function showNganh(y) {
    var list_link = document.querySelectorAll(".nganh-lien-quan .product .layer-2 a");
    var list_layer = document.querySelectorAll(".nganh-lien-quan .product .layer-2");
    for (let i = 0; i < list_link.length; i++) {
        list_link[i].setAttribute("style", "opacity:0; bottom: 0");
        list_layer[i].setAttribute("style", "background-color: none;");
    }
    list_link[y - 1].setAttribute("style", "opacity:1; bottom: 33%")
    list_layer[y - 1].setAttribute("style", "background-color: rgba(2, 1, 1, 0.5);")
}
// ------------------Hàm show ngành học onclick---------------------
function resetCourse() {
    var list_h3 = document.querySelectorAll(".campus .product .layer h3");
    var list_link = document.querySelectorAll(".campus .product .layer p")
    for (let i = 0; i < list_link.length; i++) {
        list_link[i].setAttribute("style", "opacity:0; bottom: -40%");
        list_h3[i].setAttribute("style", " bottom: 20px");
    }
}
resetCourse();
function showCourse(y) {
    var list_h3 = document.querySelectorAll(".campus .product .layer h3");
    var list_link = document.querySelectorAll(".campus .product .layer p")
    for (let i = 0; i < list_link.length; i++) {
        list_link[i].setAttribute("style", "opacity:0; bottom: -40%");
        list_h3[i].setAttribute("style", " bottom: 20px");
    }
    list_link[y].setAttribute("style", "opacity:1; bottom: 5%");
    list_h3[y].setAttribute("style", "bottom: 50%;color: #f7941d");
}

// ----------------------CHọn cơ sở trang liên hệ-------------------------------

function chonCoSo() {
    var x = document.getElementById("contact-select");
    hcm = document.getElementById('fpoly-hcm');
    tn = document.getElementById('fpoly-tn');
    dn = document.getElementById('fpoly-dn');
    hn = document.getElementById('fpoly-hn');
    ct = document.getElementById('fpoly-ct');
    hcm.style.display = 'none'
    hn.style.display = 'none';
    ct.style.display = 'none';
    dn.style.display = 'none';
    tn.style.display = 'none';
    if (x.value == 1) {
        hcm.style.display = 'block';
    } else if (x.value == 2) {
        tn.style.display = 'block';
    } else if (x.value == 3) {
        dn.style.display = 'block';
    } else if (x.value == 4) {
        hn.style.display = 'block';
    } else if (x.value == 5) {
        ct.style.display = 'block';
    }
}
// --------------------Tạo tab------------------------------
function openTab(e, tabId) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    tabContent[tabId - 1].style.display = 'block';

    var tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(' active', '')
    }
    e.currentTarget.className += ' active';
}
