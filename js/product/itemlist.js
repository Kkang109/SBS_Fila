// 페이지네이션 목록 활성화

let list = document.querySelectorAll('.page_list li');

function init(){
	for(let j = 0; j < list.length; j++){
		list[j].classList.remove('active');
	}
}

for(let i = 0; i < list.length; i++) {
	if (list[i].textContent.trim() !== '...') {
		list[i].onclick = (e) => {
			// ◀ 핵심! a 태그를 눌러도 새로고침(링크 이동)이 되지 않도록 막아줍니다.
			e.preventDefault();
			
			init();
			list[i].classList.add('active');
		}
	}
}

//