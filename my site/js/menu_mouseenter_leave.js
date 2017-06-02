//1. создать функцию-класс
// 2. подать на вход аргумент - как правило селектори!!!! 
// 3. в HTML см

function Menu (sSelector) { // sSelector - хранит селектор (id), s = string - обозначение типа даних
	//5. сохранить переменную - указатель на класс - this!!!! 

	var m = this;

	//6. Создать свойства:

	m.menu = $(sSelector);
	m.menuItem = m.menu.find('li');

// 7. Создать методі класса:
	m.showSubmenu = function () {
		//console.log('mouseover');
		$(this).children('ul')
			.stop()
			.css("display", "block")
			.animate({"opacity": 1}, 600);
		//.show();
	};

	m.hideSubmenu = function () {
		//console.log('mouseout');
		$(this).children('ul')
			.stop()
			.animate({"opacity": 0}
				, 600
				,function () {
					$(this).css("display", "none");
				}
			)

		//.hide();
	};

// 8.назначаем методі на собітия (секция представления):

	m.menuItem
		.mouseenter(m.showSubmenu) //mouseenter
		.mouseleave(m.hideSubmenu); //mouseleave

}
