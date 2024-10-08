const image = document.querySelector('.img')
const button = document.querySelector('.btn')

//Its using first time but not now(its deprecated)
button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = xhr.response.message
    console.log(xhr);
  })

  // xhr.onload = () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})