const triangleButton = document.getElementById('triangleButton');

const img1= document.createElement('img');
img1.src='/images/triangle1.png';
const img2= document.createElement('img');
img2.src='/images/triangle2.png';
const img3= document.createElement('img');
img3.src='/images/triangle3.png';
const img4= document.createElement('img');
img4.src='/images/triangle4.png';
const img5= document.createElement('img');
img5.src='/images/triangle5.png';

triangleHere = document.getElementById('triangleHere');

imgList = [img1,img2,img3,img4,img5];
console.log(imgList);

triangleButton.addEventListener('click',imgSelector);

function imgSelector(){
    triangleHere.textContent = '';
    triangleHere.appendChild(imgList[Math.floor(Math.random() * imgList.length)]);

}