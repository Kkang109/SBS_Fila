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

//