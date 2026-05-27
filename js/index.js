// 트렌딩 목록 탭
function init(){
	for(let j = 0; j < list.length; j++){
		list[j].classList.remove('active');
		ul[j].classList.remove('active');
	}
}

let list = document.querySelectorAll('.keyword_buttons li');
let ul = document.querySelectorAll('.product_lists_container ul');


for(let i = 0; i < list.length; i++) {
	list[i].onclick = () => {
		init();
		// 현재 클릭된 i번째 요소들에 active 클래스 추가
		list[i].classList.add('active');
		ul[i].classList.add('active');
	}
}

// 팝업 레이어
let look = document.querySelectorAll('.slide_container li');
let popup = document.querySelector('#popup');
let close = document.querySelector('.btn-close');
let popbg = document.querySelector('#popup .bg');

for(let i = 0; i < look.length; i++) {
	look[i].onclick = () => {
		popup.style.display = 'block';
	}
}

close.onclick = () => {
	popup.style.display = 'none';
}

popbg.onclick = () => {
	popup.style.display = 'none';
}

// 인포 1 섹션 h2 애니메이션
window.addEventListener('scroll', function() {
	
	const h2Element = document.querySelector('.information1_section > h2');
	const elementPosition = h2Element.getBoundingClientRect().top;
	const screenPosition = window.innerHeight;
	
	if (elementPosition < screenPosition) {
		h2Element.classList.add('active');
	}
});


// 히어로 섹션 캐러셀

const carousel = document.querySelector('.carousel');
const totalSlides = carousel.children.length;

let move = 0;

// 1. 오른쪽 버튼을 눌렀을 때 (다음 이미기 보기)
document.querySelector('.right_btn').onclick = () => {

	if (move === -(totalSlides - 1) * 100) {
		move = 0;
	} else {
		move = move - 100;
	}
	carousel.style.transform = `translateX(${move}%)`;
};

// 2. 왼쪽 버튼을 눌렀을 때 (이전 이미지 보기)
document.querySelector('.left_btn').onclick = () => {

	if (move === 0) {
		move = -(totalSlides - 1) * 100;
	} else {
		move = move + 100;
	}
	carousel.style.transform = `translateX(${move}%)`;
};