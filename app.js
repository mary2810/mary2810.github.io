const projects = [
    {
      id: 1,
      img: "pictures/project-1.jpg.webp",
      type: "2D Vinyl Design",
      category: "vector",
    },
    {
      id: 2,
      img: "pictures/project-4.jpg.webp",
      type: "2D Vinyl Design",
      category: "vector",
    },
    {
      id: 3,
      img: "pictures/project-4.jpg.webp",
      type: "Creative Poster Design",
      category: "Agency",
    },
    {
      id: 4,
      img: "pictures/project-4.jpg.webp",
      type: "Embosed Logo Design",
      category: "Portal",
    },
    {
      id: 5,
      img: "pictures/project-1.jpg (1).webp",
      type: "3D Helmet Design",
      category: "PRINTING",
    },
    {
      id: 6,
      img: "pictures/project-1.jpg (1).webp",
      type: "2D Vinyl Design",
      category: "UI/UX",
    },
  ];
  const addProjectList = (itemList = []) => {
    document.getElementById("project-list").innerHTML = itemList
      .map(
        (project) => ` <div class="project-item">
    <img src="${project.img}" alt="${project.type}">
    <h3>${project.type}</h4>
    <h4>${project.category}</h4>
  
  </div>
  </div> `
      )
      .join(" ");
  };
  
  const addCategoryButtons = () => {
    // let buttons = ['all'];
  
    // projects.forEach((item) => {
    //   if (item && item.category && !buttons.includes(item.category)) {
    //     buttons.push(item.category);
    //   }
  
    // });
    const categoryList = projects.reduce(
      (categories, item) => {
        if (item && item.category && !categories.includes(item.category)) {
          categories.push(item.category);
        }
        return categories;
      },
      ["all"]
    );
  
    const buttons = categoryList.map(
      (cat) =>
        `<button class="btn btn-category" category-id="${cat}">${cat}</button>`
    );
    if (buttons.length > 0) {
      document.getElementById("project-categories").innerHTML = buttons.join(" ");
    }
  
    document.querySelectorAll(".btn-category").forEach((item) => {
      const categoryType = item.getAttribute("category-id");
  
      item.addEventListener("click", function () {
        item.classList.add("active-btn");
        if (categoryType === "all") {
          addProjectList(projects);
          return;
        }
        const filterList = projects.filter(
          (item) => item.category === categoryType
        );
        addProjectList(filterList);
      });
    });
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    addCategoryButtons();
    addProjectList(projects);
  });
  
  const users = [
    {
      id: 1,
      image: " pictures/user2.png.webp",
  
      review:
        "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, Do you sometimes have the feeling that Do you sometimes have the feeling that ",
      name: "Harriet Maxwell",
      job: "CEO at Google",
    },
    {
      id: 2,
      image: "pictures/user1.png.webp",
  
      review:
        "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, Do you sometimes have the feeling that  Do you sometimes have the feeling that",
      name: "Harriet Maxwell",
      job: "CEO at Google",
    },
    {
      id: 3,
      image: "pictures/user2.png.webp",
  
      review:
        "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, Do you sometimes have the feeling that ",
      name: "Harriet Maxwell",
      job: "CEO at Google",
    },
    {
      id: 4,
      image: "pictures/user1.png.webp",
  
      review:
        "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, Do you sometimes have the feeling that ",
      name: "Harriet Maxwell",
      job: "CEO at Google",
    },
    {
      id: 5,
      image: "pictures/user2.png.webp",
  
      review:
        "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, Do you sometimes have the feeling that ",
      name: "Harriet Maxwell",
      job: "CEO at Google",
    },
    {
      id: 6,
      image: "pictures/user1.png.webp",
  
      review:
        " Do you sometimes have the feeling that  Do you sometimes have the feeling that  Do you sometimes have the feeling that   Do you sometimes have the feeling that ",
      name: "Harriet Maxwell",
      job: "CEO at Google",
    },
  ];
  
  const userImg = document.getElementById("student-pic");
  const userName = document.getElementById("student-name");
  const userJob = document.getElementById("student-job");
  const userReview = document.getElementById("student-review");
  
  let currentUser = 0;
  
  const setSlideData = (user) => {
    userImg.src = user.image;
    userName.textContent = user.name;
    userJob.textContent = user.job;
    userReview.textContent = user.review;
  };
  document.addEventListener("DOMContentLoaded", function () {
    const userOne = users[0];
    setSlideData(userOne);
  });
  document.getElementById("next-btn").addEventListener("click", function () {
    if (currentUser >= 0 && currentUser < users.length - 1) {
      currentUser++;
      setSlideData(users[currentUser]);
    } else if (currentUser >= users.length - 1) {
      currentUser = 0;
      setSlideData(users[currentUser]);
    }
    console.log(" click");
  });
  document.getElementById("back-btn").addEventListener("click", function () {
    if (currentUser > 0) {
      currentUser--;
      setSlideData(users[currentUser]);
    } else {
      currentUser = users.length - 1;
      setSlideData(users[currentUser]);
    }
  });
  // part 3
  document.addEventListener('scroll', function () {
    document.getElementById('header').classList.add('scrolled-header')
     
  });
  // part 4
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }