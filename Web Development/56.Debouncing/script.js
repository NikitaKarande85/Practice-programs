
function debounce(func, delay) {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer); //imp
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  }

  
const searchInput = document.getElementById('search');

const handleSearch = debounce((event) => {
  console.log('Searching for:', event.target.value);
}, 500);
//(func, delay)

searchInput.addEventListener('input', handleSearch);

//search time every key event API calling issue resolved. added setTimeout