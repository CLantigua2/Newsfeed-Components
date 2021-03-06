class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.classList.add('fa-angle-down');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    //this.expandButton.innerText = 'Read More';

    this.deleteButton = this.domElement.querySelector('.deleteButton');
    // this.deleteButton.innerText = 'delete';

    this.clicked = false;
    this.deleteButton.addEventListener('click', () => {
      this.deleteArticle();
    })
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      if (this.clicked === false) {
        this.expandArticle();
      } else if (this.clicked === true) {
        this.closeArticle();
      }
    })
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle('article-open');
    TweenMax.to(this.domElement, 0.3, { height: "400px" });
    this.expandButton.classList.toggle('fa-angle-down');
    this.expandButton.classList.toggle('fa-angle-up');
    this.clicked = true;
  }
  closeArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle('article-open');
    TweenMax.to(this.domElement, 0.3, { height: "50px" });
    this.expandButton.classList.toggle('fa-angle-up');
    this.expandButton.classList.toggle('fa-angle-down');
    this.clicked = false;
  }
  deleteArticle() {
    TweenMax.to(this.domElement, 0.3, { height: 0, width: 0 });
    TweenMax.to(this.domElement, 0.3, { display: "none" });
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map((domElement) => new Article(domElement));
