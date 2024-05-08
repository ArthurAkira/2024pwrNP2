
let index = 1;
function addDiv (){
    document.getElementById('addForm').style.display = "";
    document.getElementById('removeForm').style.display = 'none';
}

function addItem(){
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const yearInput = document.getElementById('year');
      const genresInput = document.getElementById('genres');
      const linkInput = document.getElementById('link');
      const imgInput = document.getElementById('img');
      
      const listItem = document.createElement('li');;
      listItem.setAttribute("id" , nameInput.value)
      
      listItem.innerHTML = `
      <div class="index">
          <span>${index}</span>
        </div>
        <div class="release-year">
            <span>${yearInput.value}</span>
        </div>
        <div class="name">
            <h2 data-value="${nameInput.value}">${nameInput.value}</h2>
        </div>
        <div class="genere">
            <span>${genresInput.value}</span>
        </div>
        <div class="redirect-link">
            <a href="${linkInput.value}" target="_blank">
            <svg width="1.25rem" height="1.25rem" viewBox="0 0 16 16" fill="none" name="iconArrow" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                <path d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z" fill="currentColor"></path>
                <path d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z" fill="currentColor"></path>
              </svg
            </a>
        </div>
        <div class="hover-img">
            <img src="${imgInput.value}"></img>
        </div>
      `;
      const itemList = document.getElementById('itemList')
      itemList.appendChild(listItem);

      
      
      // Limpar os campos do formulário após adicionar o item
      nameInput.value = '';
      yearInput.value = '';
      genresInput.value = '';
      linkInput.value = '';
      imgInput.value = '';
      document.querySelector('.list ul').innerHTML = animeList.innerHTML;      
      
      index++;
};
