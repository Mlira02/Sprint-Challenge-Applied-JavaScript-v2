// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const entry2 = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    console.log(res.data)
    const art1 = res.data.articles.bootstrap
    const art2 = res.data.articles.javascript
    const art3 = res.data.articles.technology
    const art4 = res.data.articles.jquery
    const art5 = res.data.articles.node
    console.log(art1)
    art1.forEach(element => {
        console.log(element)
        const e = createCards(element.headline, element.authorPhoto, element.authorName)
        entry2.appendChild(e)
    })
    art2.forEach(element => {
        console.log(element)
        const e = createCards(element.headline, element.authorPhoto, element.authorName)
        entry2.appendChild(e)
    });
    art3.forEach(element => {
        console.log(element)
        const e = createCards(element.headline, element.authorPhoto, element.authorName)
        entry2.appendChild(e)
    });
    art4.forEach(element => {
        console.log(element)
        const e = createCards(element.headline, element.authorPhoto, element.authorName)
        entry2.appendChild(e)
    });
    art5.forEach(element => {
        console.log(element)
        const e = createCards(element.headline, element.authorPhoto, element.authorName)
        entry2.appendChild(e)
    })
})
.catch(err => {
    console.log('There was an error', err)
})


function createCards(headline, photo, name) {
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardName = document.createElement('span')

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgContainer.classList.add('img-container')

    cardHeadline.textContent = headline
    cardImage.src = photo
    cardName.textContent =  name

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgContainer)
    cardImgContainer.appendChild(cardImage)
    card.appendChild(cardName)
return card
}

