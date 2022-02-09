// info array for menu
const menu = [
  {
    id: 1,
    title: "automations for small non-profits",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 2,
    title: "layout for accessibility",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 3,
    title: "dynamic people-focused maps",
    img: "./images/image5.png",
    category: "projects",
  },
  {
    id: 4,
    title: "augmented reality approaches to urban design",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 5,
    title: "northcoders bug",
    img: "./images/image5.png",
    category: "projects",
  },
  {
    id: 6,
    title: "something else",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 7,
    title: "in addition",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 8,
    title: "another project",
    img: "./images/image5.png",
    category: "projects",
  },
  {
    id: 9,
    title: "a quick sketch",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 10,
    title: "another game",
    img: "./images/image5.png",
    category: "projects",
  },
  {
    id: 11,
    title: "My coding journey",
    img: "./images/image5.png",
    category: "blog",
  },
  {
    id: 12,
    title: "2D layout and interactive storytelling",
    img: "./images/image5.png",
    category: "sketches",
  },
  {
    id: 13,
    title: "New blog post",
    img: "./images/image5.png",
    category: "blog",
  },
];

// get parent element
const mainSection = document.querySelector(".mainSection");
const filterContainer = document.querySelector(".filterContainer");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);

    return `<article class="menuItem" id="${item.id}" onclick="expandMenuItem(this)">
              <div class="itemContainer">
                <a href="#content" title="Content Lightbox">
                  <img src="${item.img}" class="menuImage"></img>
                </a>
                <header>
                  <h2 class="menuItemTitle" id="menuTitle${item.id}">${item.title}</h2>
                </header>
              <section class="menuAddInfo" id="menuInfo${item.id}">
                <p>Here is a bit more info! Let's make it a bit longer to see the full effect of this on our text boxes. This text will go in the menu object eventually.</p>
                <br>
                <button type="button" class="moreInfoBtn">find out more</button>
              </section>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  //console.log(displayMenu);

  mainSection.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  filterContainer.innerHTML = categoryBtns;
  const filterBtns = filterContainer.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

// toggle nav cover
function toggleNav() {
  let myNav = document.getElementById("myNav");
  if (myNav.style.width === "100%") {
    document.getElementById("myNav").style.width = "0%"
  } else {
    document.getElementById("myNav").style.width = "100%"
  }
}


// navbar scrolling
let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("filterSection").style.top = "58px";
  } else {
    document.getElementById("filterSection").style.top = "-40px";
  }
  prevScrollpos = currentScrollPos;
}

// expand menu to offer more content and link to item page
function expandMenuItem(element) {
  const elementId = element.id;
  const targetSection = document.getElementById(`menuInfo${elementId}`)
  const targetTitle = document.getElementById(`menuTitle${elementId}`)
  if ( targetSection.style.display === 'none' || targetSection.style.display === '' ) {
    targetSection.style.display = 'block';
  } else {
    targetSection.style.display = 'none';
  };
}


//  code for image menu items

// `<article class="menuItem" id="${item.id}">
//               <div class="itemInfo">
//               <a href="#content" title="Content Lightbox">
//                 <img src="${item.img}" class="menuImage" onclick="expandMenuItem(this)"></img>
//               </a>
//               <header>
//                 <p class="menuItemTitle">${item.title}</p>
//               </header>
//               </div>
//             </article>`



// accordion

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}