const title = 'This is a html text';
const list = [
  {
    id: '1',
    name: 'Mike',
    age: '5',
    score: '5',
  },
  {
    id: '2',
    name: 'Jack',
    age: '6',
    score: '6',
  },
  {
    id: '3',
    name: 'Jenny',
    age: '7',
    score: '7',
  }
]

;(
  () => {
    const oApp = document.querySelector('#app');

    const init = () => {
      const node = render();
      oApp.appendChild(node);
    }

    // oFrag -> oTitle + oList
    function render(){
      const oFrag = document.createDocumentFragment();
      const oTitle = createTitle(title);
      const oList = createList(list);

      oFrag.appendChild(oTitle);
      oFrag.appendChild(oList);

      return oFrag;
    }

    function createTitle(title) {
      const oTitle = document.createElement('h1');
      oTitle.textContent = title;
      return oTitle;
    }

    function createList(list) {
      const oList = document.createElement('ul');
      const oFrag = document.createDocumentFragment();

      list.forEach(item => {
        const oLi = document.createElement('li');

        oLi.innerHTML = `
          <p>ID: ${item.id}</p>
          <p>Name: ${item.name}</p>
          <p>Age: ${item.age}</p>
          <p>Score: ${item.score}</p>
        `
        oFrag.appendChild(oLi);
      })

      oList.appendChild(oFrag);
      return oList;
    }

    init();
  }
)()