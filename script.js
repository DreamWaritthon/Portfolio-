function handleTab(tabName, element) { // ฟังก์ชันสำหรับจัดการแท็บ
    // Get all elements
    const tablinks = document.getElementsByClassName("tab-links"); // Get all tab links
    const tabcontents = document.getElementsByClassName("tab-contents"); 
    
    // Remove active classes
    Array.from(tablinks).forEach(tab => { 
        tab.classList.remove("active-link");
    });
    
    Array.from(tabcontents).forEach(content => {
        content.classList.remove("active-tab");
    });
    
    // Add active classes to selected elements
    element.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show default tab
    const defaultTab = document.querySelector('.tab-links.active-link');
    if (defaultTab) {
        handleTab('skills', defaultTab);
    }
});
// ============================================================================
var sideMenu = document.getElementById("sideMenu"); // หรือ nav ul ของคุณ
var menuIconOpen = document.getElementById("menuIconOpen"); // ไอคอนเปิด
var menuIconClose = document.getElementById("menuIconClose"); // ไอคอนปิดที่อยู่ในเมนู

if (menuIconOpen) {
    menuIconOpen.onclick = function() {
        sideMenu.classList.add("show-menu");
    }
}
if (menuIconClose) {
    menuIconClose.onclick = function() {
        sideMenu.classList.remove("show-menu");
    }
}

// ============================================================================
const scriptURL = 'https://script.google.com/macros/s/AKfycbzVwJ_NnG6HRoKs2U2B5EVr3WlMWFFhE5jPRFpFiBeFZdzBUD9iBvL1tY15RVfnLuzV/exec'; // เปลี่ยนเป็นของคุณจริงๆ
const form = document.forms['submit-to-google-sheet'];

if (form) {
    form.addEventListener('submit', e => { // ฟังก์ชันสำหรับจัดการการส่งข้อมูล
        e.preventDefault(); // ป้องกันการส่งแบบปกติ
        fetch(scriptURL, { method: 'POST', body: new FormData(form) }) // ส่งข้อมูลไปยัง Google Apps Script
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'ส่งข้อมูลสำเร็จ!',
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาดในการส่งข้อมูล!',
                    text: error.message
                });
                console.error('Error!', error.message);
            });
    });
} else {
    console.error('Form not found!');
}

document.addEventListener('DOMContentLoaded', function() {
    // ส่วนของโค้ดสำหรับ Portfolio "See more"
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const hiddenPortfolioItems = document.querySelectorAll('.portfolio-item-hidden');

    if (seeMoreBtn) {
        if (hiddenPortfolioItems.length === 0) {
            // ถ้าไม่มี item ที่ซ่อนไว้ ให้ซ่อนปุ่ม "See more" เลย
            seeMoreBtn.style.display = 'none';
        } else {
            seeMoreBtn.addEventListener('click', function(event) {
                event.preventDefault(); // ป้องกันการทำงานปกติของลิงก์ (href="#")

                hiddenPortfolioItems.forEach(item => {
                    // item.style.display = 'block'; // หรือ 'grid' หรือค่า display เดิมที่เหมาะสม
                                                 // การลบ class ที่ซ่อนไว้เป็นวิธีที่ดีกว่า
                    item.classList.remove('portfolio-item-hidden');
                });

                // ซ่อนปุ่ม "See more" หลังจากแสดง item ทั้งหมดแล้ว
                seeMoreBtn.style.display = 'none';
            });
        }
    }

    // --- โค้ด JavaScript อื่นๆ ของคุณที่มีอยู่แล้วสามารถอยู่ตรงนี้ได้ ---
    // ตัวอย่างเช่น โค้ดสำหรับ mobile menu หรือ tab functionality
    // const menuIconOpen = document.getElementById('menuIconOpen');
    // const menuIconClose = document.getElementById('menuIconClose');
    // const sideMenu = document.getElementById('sideMenu');

    // if (menuIconOpen && sideMenu) {
    //     menuIconOpen.addEventListener('click', () => {
    //         sideMenu.classList.add('show-menu'); // หรือ sideMenu.style.right = "0";
    //     });
    // }

    // if (menuIconClose && sideMenu) {
    //     menuIconClose.addEventListener('click', () => {
    //         sideMenu.classList.remove('show-menu'); // หรือ sideMenu.style.right = "-200px";
    //     });
    // }
});

// ฟังก์ชัน handleTab ที่คุณมีอยู่แล้ว
// function handleTab(tabName, element) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tab-contents");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//         tabcontent[i].classList.remove("active-tab");
//     }
//     tablinks = document.getElementsByClassName("tab-links");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove("active-link");
//     }
//     document.getElementById(tabName).style.display = "block";
//     document.getElementById(tabName).classList.add("active-tab");
//     element.classList.add("active-link");
// }
 
document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closePopup');

    // ฟังก์ชันเปิด Popup
    function openPopup() {
      popup.style.display = 'block';
    }

    // ฟังก์ชันปิด Popup
    function closePopup() {
      popup.style.display = 'none';
    }

    // เหตุการณ์ onclick สำหรับปุ่มเปิด
    openButton.addEventListener('click', openPopup);

    // เหตุการณ์ onclick สำหรับปุ่มปิด
    closeButton.addEventListener('click', closePopup);

    // ปิด Popup เมื่อคลิกนอกเนื้อหา
    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        closePopup();
      }
    });

    // ฟังก์ชันสำหรับจัดการสไลด์ใน Popup
    const slides = document.querySelectorAll('.popup-slide');
    let currentSlide = 0;

    function showSlide(idx) {
        slides.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
        });
    }

    document.getElementById('popupPrev').onclick = function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };
    document.getElementById('popupNext').onclick = function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };
});


