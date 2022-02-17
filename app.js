// CONTENT - ARTICLES ARRAY POPULATES ARTICLES ON HOMEPAGE
const articles = [
  {
    id: 1,
    title: "Dive into: Quantum Computing!",
    img: "./images/image5.png",
    category: "blog",
    content: `<p>Quantum Computing as a concept has been around for a while, but more recent technological and engineering developments are bringing the practical implications of quantum computing ever closer. I wanted to find out what all the fuss is about and found the following resources fantastic for dipping my toes in at a slightly more than superficial level. Enjoy!</p><br>`,
    technology_tags: ["Quantum Computing"],
    content_tags: ["dive into"],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 2,
    title: "Dive into: MongoDB!",
    img: "./images/image5.png",
    category: "blog",
    content: `<p>I had my first practical experience exploring MongoDB recently. Here are the online resources which helped me get up and running quickly!</p><br>`,
    technology_tags: ["MongoDB"],
    content_tags: ["dive into"],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 3,
    title: "Oxfordshire All In",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>Oxfordshire All In was an online hub where Oxfordshire residents, community organisations, the private sector, and public services came together to work with each other during the coronavirus response.</p><br><p>It utilised a host of different technologies to provide a leading service which was stood up rapidly with CD and CI playing a key role in delivery.</p><br<p>Find out more about my role founding and managing this project from initiation to completion</p><br`,
    technology_tags: [
      "Javascript",
      "Firestore",
      "Google APIs",
      "ESRI GIS mapping platform",
    ],
    content_tags: [],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 4,
    title: "A non-profit booking and attendance management system",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>Learn about a management system I built from the ground up to solve a particular problem</p><br>`,
    technology_tags: ["Postgres", "Node.js", "Javascript", "SQL"],
    content_tags: ["Back End"],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 5,
    title: "Exploring zero information proof",
    img: "./images/image5.png",
    category: "sketches",
    content: "<p>Sketch to go here....</p><br><p>... with diagrams!</p><br>",
    technology_tags: ["Cryptography"],
    content_tags: [],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 6,
    title: "Blog post about an experience I have had",
    img: "./images/image5.png",
    category: "blog",
    content:
      "<p>Vestibulum vel ultricies tellus, id ullamcorper ante. Quisque ullamcorper magna magna, eu molestie justo dictum vel. Suspendisse tellus tortor, malesuada quis massa ullamcorper, commodo sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis rutrum metus felis, tempus convallis felis ultricies a. Donec volutpat maximus lacus sed hendrerit. Cras gravida magna non pellentesque blandit. Pellentesque mollis, lacus at ultricies auctor, risus purus feugiat ligula, nec dapibus quam ex vel ex. Proin sed ipsum congue, fringilla erat vel, luctus risus. Curabitur molestie auctor nisi vel ullamcorper. Nullam finibus eros id est varius faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum luctus purus nec ligula tempus, sed scelerisque ligula semper. Sed facilisis nunc vel urna sollicitudin placerat. Vivamus sed tincidunt metus, in cursus nunc.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>",
    technology_tags: ["MongoDB"],
    content_tags: ["dive into"],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 7,
    title: "Sketch of an interesting problem and potential solutions",
    img: "./images/image5.png",
    category: "sketches",
    content: `<p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
    technology_tags: ["MongoDB"],
    content_tags: ["dive into"],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 8,
    title: "An npm package for working with complex database queries",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>I'll make this one day...!</p><br>`,
    technology_tags: ["Node.js", "Javascript", "SQL"],
    content_tags: ["dive into"],
    date_posted: "default",
    more_info_url: "default",
  },
  {
    id: 9,
    title: "A package of easy read UI components ",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>I'll make this one day too...!</p><br>`,
    technology_tags: ["Javascript", "CSS", "HTML", "React"],
    content_tags: ["dive into"],
    date_posted: "default",
    more_info_url: "default",
  },
];

// GET PARENT ELEMENTS FOR MAIN ARTICLE CONTAINER AND FILTER CONTAINER
const mainSection = document.querySelector(".portfolioContainer");
const filterContainer = document.querySelector(".filterContainer");

// ADD EVENT LISTENER TO DISPLAY ALL ARTICLES WHEN PAGE LOADS
window.addEventListener("DOMContentLoaded", function () {
  diplayArticleItems(articles);
  displayArticleFilters();
});

// POPULATES MAIN SECTION OF HOME PAGE WITH ARTICLES IN ARTICLES ARRAY
function diplayArticleItems(articles) {
  let displayArticle = articles.map(function (article) {
    return `<article class="article" id="${article.id}">
              <div class="articleContainer">
                <a href="#popup${article.id}" title="Content Lightbox">
                  <img src="${article.img}" class="articleImage"></img>
                  <header>
                    <h2 class="articleTitle" id="articleTitle${article.id}">${article.title}</h2>
                  </header>
                </a>
              </div>
              <div id="popup${article.id}" class="overlay">
                <div class="popup">
                <h2 class="popupTitle">${article.title}</h2>
                <a class="close" href="#/">&times;</a>
                  <section class="content">
                      ${article.content}
                      <button type="button" class="moreInfoBtn">find out more</button>
                  </section>
                </div>
              </div>
            </article>`;
  });
  displayArticle = displayArticle.join("");
  mainSection.innerHTML = displayArticle;
}

// CREATE FILTER BUTTONS - Works dynamically using article category info from the articles array
function displayArticleFilters() {
  // create categories array from category values in articles array elements.
  const categories = articles.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // make a filter for each category
  const categoryFilters = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  // add to the filter container
  filterContainer.innerHTML = categoryFilters;
  const filterBtns = filterContainer.querySelectorAll(".filter-btn");

  // add functionality on click to only show articles with filter category
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const articlesByCategory = articles.filter(function (article) {
        if (article.category === category) {
          return article;
        }
      });
      if (category === "all") {
        diplayArticleItems(articles);
      } else {
        diplayArticleItems(articlesByCategory);
      }
    });
  });
}

// HIDE FILTER SECTION ON SCROLL UP
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("portfolioFilterSection").style.display = "block";
  } else {
    document.getElementById("portfolioFilterSection").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};

// ACCORDION - Add accordion functionality with class="accordion" applied to button
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Toggle between adding and removing the "active" class,to highlight the button that controls the panel
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
