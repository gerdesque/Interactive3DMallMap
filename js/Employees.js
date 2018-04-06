export default class Employees {
  constructor() {
	  this.employees = [
	    { name: 'GM', level: 4, category: 1, space: 1, department: 'C06', details: 'GMGMGM' },
	    { name: 'NW', level: 4 , category: 1, space: 2, department: 'C06', details: 'NWNWNW' },
	    { name: 'AB', level: 2 , category: 2, space: 1, department: 'C01', details: 'ABABAB' },
      { name: 'AM', level: 3 , category: 1, space: 1, department: 'C01', details: 'AMAMAM' }
	  ];
    this.maxLevel = 4;
  }

  render() {

  for(let i = 1; i < this.maxLevel+1; i++) {
    let employeesByCategory = this.employees.filter(employee => employee.level === i);
    const employeeLevelMarkup = `
      ${employeesByCategory.map(employee => `<a class="pin pin--${employee.category}-${employee.space}" data-category="${employee.category}" data-space="${employee.level}.${employee.space}" href="#" aria-label="Pin for ${employee.name}">
        <span class="pin__icon">
          <svg class="icon icon--pin"><use xlink:href="#icon-pin"></use></svg>
          <svg class="icon icon--logo icon--${employee.department}"><use xlink:href="#icon-${employee.department}"></use></svg>
        </span>
      </a>`).join('')}
    `;
    let employeeLevel = document.createElement("div");
    employeeLevel.className = 'level__pins';
    employeeLevel.innerHTML = employeeLevelMarkup;

    const level = document.getElementById(`level--${i}`);
    level.insertBefore(employeeLevel, level.lastChild);
  }

  const employeeContentMarkup = `
	  ${this.employees.map(employee => `<div class="content__item" data-space="${employee.level}.${employee.space}" data-category="${employee.category}">
      <h3 class="content__item-title">${employee.name}</h3>
      <div class="content__item-details">
        <p class="content__meta">
          <span class="content__meta-item"><strong>Department: </strong>${employee.department}</span>
        </p>
        <p class="content__desc">${employee.details}</p>
      </div>
    </div>`).join('')}
	`;
	let employeeContent = document.createElement("div");
	employeeContent.className = 'content__markup';
  employeeContent.innerHTML = employeeContentMarkup;

  const content = document.getElementById("content");
  content.insertBefore(employeeContent, content.firstChild);


	const employeeListMarkup = `
	  ${this.employees.map(employee => `<li class="list__item" data-level="${employee.level}" data-category="${employee.category}" data-space="${employee.level}.${employee.space}">
		  <a href="#" class="list__link">${employee.name}</a>
		</li>`).join('')}
	`;
	let employeeList = document.createElement("ul");
	employeeList.className = 'list grouped-by-category';
  employeeList.innerHTML = employeeListMarkup;

  const aside = document.getElementById("spaces-list");
  aside.insertBefore(employeeList, aside.lastChild);
  }
}
