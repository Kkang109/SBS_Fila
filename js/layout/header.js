let header = document.querySelector('header');
let mainMenuLies = document.querySelectorAll('.main_menu > li');
let subMenuContainers = document.querySelectorAll('.submenu_bg');

subMenuContainers.forEach(container => container.style.display = 'none');


mainMenuLies.forEach(li => {
	li.onmouseenter = () => {
		
		subMenuContainers.forEach(container => container.style.display = 'none');
		
		let subMenuContainer = li.querySelector('.submenu_bg');
		
		if (subMenuContainer) {
			subMenuContainer.style.display = 'flex';
		}
	}
});

header.onmouseleave = () => {
	subMenuContainers.forEach(container => container.style.display = 'none');
}