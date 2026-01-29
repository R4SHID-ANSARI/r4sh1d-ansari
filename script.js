/***********************
 PHOTO UPLOAD PREVIEW
***********************/
const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");

if (photoInput) {
    photoInput.addEventListener("change", function () {
        const file = photoInput.files[0];

        if (file) {
            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";
        }
    });
}

/***********************
 VISITOR COUNTER
***********************/
let count = localStorage.getItem("visitCount");

if (count === null) {
    count = 0;
}

count++;
localStorage.setItem("visitCount", count);

const counterElement = document.getElementById(
