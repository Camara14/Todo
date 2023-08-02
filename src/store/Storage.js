export const todoStorage = {
	

	fetch: function () {
	  return JSON.parse(localStorage.getItem('todos-vuejs') || '[]');
	},
	save: function (todos) {
	  localStorage.setItem('todos-vuejs', JSON.stringify(todos));
	}
  };