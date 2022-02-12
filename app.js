// CONTENT - ARTICLES ARRAY POPULATES ARTICLES ON HOMEPAGE
const articles = [
  {
    id: 1,
    title: "Sketch of an interesting problem and potential solutions",
    img: "./images/image5.png",
    category: "sketches",
    content: `<p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 2,
    title: "Sketch of an interesting problem and potential solutions",
    img: "./images/image5.png",
    category: "sketches",
    content: `<p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 3,
    title: "A completed project",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis, nulla vitae congue facilisis, neque mauris blandit eros, id molestie elit augue sit amet nibh. Maecenas in eros commodo, accumsan nisl ac, convallis augue. Aliquam posuere mauris quam. Sed sit amet nisi erat. Praesent ultricies sollicitudin risus, molestie convallis ligula pharetra eu. Aliquam sed elit at libero vehicula porttitor. Nunc tempor varius bibendum. Morbi feugiat sem ac justo consequat auctor vitae sed ex. Aenean suscipit gravida elit et ornare. Ut luctus eget purus non scelerisque. Nulla volutpat diam sit amet accumsan laoreet. Nam nibh elit, efficitur eget magna et, vehicula dapibus libero. Pellentesque eget urna libero. In sed felis bibendum dui mattis commodo egestas ac neque. Donec dignissim ipsum in nibh hendrerit molestie.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 4,
    title: "A completed project",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis, nulla vitae congue facilisis, neque mauris blandit eros, id molestie elit augue sit amet nibh. Maecenas in eros commodo, accumsan nisl ac, convallis augue. Aliquam posuere mauris quam. Sed sit amet nisi erat. Praesent ultricies sollicitudin risus, molestie convallis ligula pharetra eu. Aliquam sed elit at libero vehicula porttitor. Nunc tempor varius bibendum. Morbi feugiat sem ac justo consequat auctor vitae sed ex. Aenean suscipit gravida elit et ornare. Ut luctus eget purus non scelerisque. Nulla volutpat diam sit amet accumsan laoreet. Nam nibh elit, efficitur eget magna et, vehicula dapibus libero. Pellentesque eget urna libero. In sed felis bibendum dui mattis commodo egestas ac neque. Donec dignissim ipsum in nibh hendrerit molestie.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 5,
    title: "Blog post about something I am learning",
    img: "./images/image5.png",
    category: "blog",
    content:
      "<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis, nulla vitae congue facilisis, neque mauris blandit eros, id molestie elit augue sit amet nibh. Maecenas in eros commodo, accumsan nisl ac, convallis augue. Aliquam posuere mauris quam. Sed sit amet nisi erat. Praesent ultricies sollicitudin risus, molestie convallis ligula pharetra eu. Aliquam sed elit at libero vehicula porttitor. Nunc tempor varius bibendum. Morbi feugiat sem ac justo consequat auctor vitae sed ex. Aenean suscipit gravida elit et ornare. Ut luctus eget purus non scelerisque. Nulla volutpat diam sit amet accumsan laoreet. Nam nibh elit, efficitur eget magna et, vehicula dapibus libero. Pellentesque eget urna libero. In sed felis bibendum dui mattis commodo egestas ac neque. Donec dignissim ipsum in nibh hendrerit molestie.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>",
  },
  {
    id: 6,
    title: "Blog post about an experience I have had",
    img: "./images/image5.png",
    category: "blog",
    content:
      "<p>Vestibulum vel ultricies tellus, id ullamcorper ante. Quisque ullamcorper magna magna, eu molestie justo dictum vel. Suspendisse tellus tortor, malesuada quis massa ullamcorper, commodo sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis rutrum metus felis, tempus convallis felis ultricies a. Donec volutpat maximus lacus sed hendrerit. Cras gravida magna non pellentesque blandit. Pellentesque mollis, lacus at ultricies auctor, risus purus feugiat ligula, nec dapibus quam ex vel ex. Proin sed ipsum congue, fringilla erat vel, luctus risus. Curabitur molestie auctor nisi vel ullamcorper. Nullam finibus eros id est varius faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum luctus purus nec ligula tempus, sed scelerisque ligula semper. Sed facilisis nunc vel urna sollicitudin placerat. Vivamus sed tincidunt metus, in cursus nunc.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>",
  },
  {
    id: 7,
    title: "Sketch of an interesting problem and potential solutions",
    img: "./images/image5.png",
    category: "sketches",
    content: `<p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 8,
    title: "Sketch of an interesting problem and potential solutions",
    img: "./images/image5.png",
    category: "sketches",
    content: `<p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 9,
    title: "A completed project",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis, nulla vitae congue facilisis, neque mauris blandit eros, id molestie elit augue sit amet nibh. Maecenas in eros commodo, accumsan nisl ac, convallis augue. Aliquam posuere mauris quam. Sed sit amet nisi erat. Praesent ultricies sollicitudin risus, molestie convallis ligula pharetra eu. Aliquam sed elit at libero vehicula porttitor. Nunc tempor varius bibendum. Morbi feugiat sem ac justo consequat auctor vitae sed ex. Aenean suscipit gravida elit et ornare. Ut luctus eget purus non scelerisque. Nulla volutpat diam sit amet accumsan laoreet. Nam nibh elit, efficitur eget magna et, vehicula dapibus libero. Pellentesque eget urna libero. In sed felis bibendum dui mattis commodo egestas ac neque. Donec dignissim ipsum in nibh hendrerit molestie.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 10,
    title: "A completed project",
    img: "./images/image5.png",
    category: "projects",
    content: `<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis, nulla vitae congue facilisis, neque mauris blandit eros, id molestie elit augue sit amet nibh. Maecenas in eros commodo, accumsan nisl ac, convallis augue. Aliquam posuere mauris quam. Sed sit amet nisi erat. Praesent ultricies sollicitudin risus, molestie convallis ligula pharetra eu. Aliquam sed elit at libero vehicula porttitor. Nunc tempor varius bibendum. Morbi feugiat sem ac justo consequat auctor vitae sed ex. Aenean suscipit gravida elit et ornare. Ut luctus eget purus non scelerisque. Nulla volutpat diam sit amet accumsan laoreet. Nam nibh elit, efficitur eget magna et, vehicula dapibus libero. Pellentesque eget urna libero. In sed felis bibendum dui mattis commodo egestas ac neque. Donec dignissim ipsum in nibh hendrerit molestie.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>`,
  },
  {
    id: 11,
    title: "Blog post about something I am learning",
    img: "./images/image5.png",
    category: "blog",
    content:
      "<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis, nulla vitae congue facilisis, neque mauris blandit eros, id molestie elit augue sit amet nibh. Maecenas in eros commodo, accumsan nisl ac, convallis augue. Aliquam posuere mauris quam. Sed sit amet nisi erat. Praesent ultricies sollicitudin risus, molestie convallis ligula pharetra eu. Aliquam sed elit at libero vehicula porttitor. Nunc tempor varius bibendum. Morbi feugiat sem ac justo consequat auctor vitae sed ex. Aenean suscipit gravida elit et ornare. Ut luctus eget purus non scelerisque. Nulla volutpat diam sit amet accumsan laoreet. Nam nibh elit, efficitur eget magna et, vehicula dapibus libero. Pellentesque eget urna libero. In sed felis bibendum dui mattis commodo egestas ac neque. Donec dignissim ipsum in nibh hendrerit molestie.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>",
  },
  {
    id: 12,
    title: "Blog post about an experience I have had",
    img: "./images/image5.png",
    category: "blog",
    content:
      "<p>Vestibulum vel ultricies tellus, id ullamcorper ante. Quisque ullamcorper magna magna, eu molestie justo dictum vel. Suspendisse tellus tortor, malesuada quis massa ullamcorper, commodo sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis rutrum metus felis, tempus convallis felis ultricies a. Donec volutpat maximus lacus sed hendrerit. Cras gravida magna non pellentesque blandit. Pellentesque mollis, lacus at ultricies auctor, risus purus feugiat ligula, nec dapibus quam ex vel ex. Proin sed ipsum congue, fringilla erat vel, luctus risus. Curabitur molestie auctor nisi vel ullamcorper. Nullam finibus eros id est varius faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum luctus purus nec ligula tempus, sed scelerisque ligula semper. Sed facilisis nunc vel urna sollicitudin placerat. Vivamus sed tincidunt metus, in cursus nunc.</p><br><p>Aenean iaculis elit sed nunc gravida, eget blandit quam consequat. Sed ligula turpis, interdum nec leo vitae, sollicitudin ultrices quam. Vivamus iaculis, eros placerat porta fringilla, sem sem scelerisque nunc, vel convallis neque velit ac eros. Donec laoreet lobortis neque at sodales. Fusce finibus diam urna, ut rutrum neque dictum vitae. Nunc quis dignissim metus, nec faucibus erat. Vivamus iaculis lacus sed justo consectetur ultricies. Cras ultrices massa id arcu malesuada, vitae ullamcorper tortor convallis. Sed orci nibh, tempor sit amet nulla sed, consectetur porttitor elit. Phasellus ac nisi quis massa pellentesque efficitur. Sed eu mattis urna, at sollicitudin lorem. Cras mattis metus nec nisl accumsan, quis porta erat placerat. Nam eu rutrum risus. Nunc sit amet augue nec augue tempor aliquet.</p><br>",
  },
];

// GET PARENT ELEMENTS FOR MAIN ARTICLE CONTAINER AND FILTER CONTAINER
const mainSection = document.querySelector(".mainSection");
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
                <h2>${article.title}</h2>
                <a class="close" href="#/">&times;</a>
                  <div class="content">
                    <section class="articleContent" id="">
                      ${article.content}
                      <button type="button" class="moreInfoBtn">find out more</button>
                    </section>
                  </div>
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
      };
    });
  });
}

// HIDE FILTER SECTION ON SCROLL UP
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("filterSection").style.top = "58px";
  } else {
    document.getElementById("filterSection").style.top = "-40px";
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
