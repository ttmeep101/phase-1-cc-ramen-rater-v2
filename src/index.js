// index.js
const baseURL = 'http://localhost:3000/ramens'

// Callbacks
const handleClick = (ramens) => {
  // Add code
  const rating = document.getElementById('rating-display')
  const comment = document.getElementById('comment-display')
  const image = document.getElementsByClassName('detail-image')
  const restaurant = document.getElementsByClassName('restaurant')
  const name = document.getElementsByClassName('name')
  rating.textContent = ramens.rating
  comment.textContent = ramens.comment
  image[0].src = ramens.image
  restaurant[0].textContent = ramens.restaurant
  name[0].textContent = ramens.name
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: document.getElementById('new-comment').value
    }
    console.log(newRamen)
    const menu = document.getElementById('ramen-menu')
    const newRamenImg = document.createElement('img')
    newRamenImg.src = newRamen.image
    menu.append(newRamenImg)
    newRamenImg.addEventListener('click', () => handleClick(newRamen))
  })
}

const displayRamens = () => {
  // Add code
  fetch(baseURL).then(resp => resp.json()).then(ramen => {
    const menu = document.getElementById('ramen-menu')
    ramen.forEach((ramens) => {
      const ramenImg = document.createElement('img')
      ramenImg.src = ramens.image
      menu.append(ramenImg)
      ramenImg.addEventListener('click', () => handleClick(ramens))
  })
  })
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
  addSubmitListener()
}

document.addEventListener('DOMContentLoaded', () => {
  main()
})

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
