 // Blog data with real images
    const posts = [
    { 
      title: "Mastering React in 2025", 
      category: "Tech", 
      img: "images/image1.jpg", 
      desc: "Step-by-step journey into modern React development.", 
      date: "2025-09-10" 
    },
    { 
      title: "Exploring Swiss Alps", 
      category: "Travel", 
      img: "images/image2.jpg", 
      desc: "Snow, peaks, and adventure in Switzerland.", 
      date: "2025-09-08" 
    },
    { 
      title: "Top 10 Street Foods", 
      category: "Food", 
      img: "images/image3.jpg", 
      desc: "A foodie’s guide to the best quick bites.", 
      date: "2025-09-06" 
    },
    { 
      title: "Next.js vs React", 
      category: "Tech", 
      img: "images/image4.jpg", 
      desc: "Choosing the right framework for 2025 projects.", 
      date: "2025-09-04" 
    },
    { 
      title: "Paris Diaries", 
      category: "Travel", 
      img: "images/image5.jpg", 
      desc: "Experience the romance of the City of Lights.", 
      date: "2025-09-02" 
    },
    { 
      title: "Healthy Food Habits", 
      category: "Food", 
      img: "images/image6.jpg", 
      desc: "Simple tips for staying fit & eating right.", 
      date: "2025-08-28" 
    },
    { 
      title: "Meet Our Writers", 
      category: "Tech", 
      img: "images/image7.jpg", 
      desc: "Behind the scenes of Insight Journal writers.", 
      date: "2025-08-20" 
    }
  ];


    const postsContainer = document.getElementById("postsContainer");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const loadMoreBtn = document.getElementById("loadMore");

    let visibleCount = 3;
    let filteredPosts = posts;

    // Render posts
    function renderPosts() {
      postsContainer.innerHTML = "";
      filteredPosts.slice(0, visibleCount).forEach(post => {
        postsContainer.innerHTML += `
          <div class="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1">
            <img src="${post.img}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#640D5F] flex items-center gap-2">
                <i class="fas fa-bookmark text-[#640D5F]"></i> ${post.title}
              </h3>
              <p class="text-sm text-gray-500 mb-2"><i class="far fa-calendar-alt"></i> ${post.date} | <span class="text-[#640D5F] font-semibold">${post.category}</span></p>
              <p class="text-gray-600 mb-4">${post.desc}</p>
              <button class="text-[#640D5F] font-semibold hover:underline flex items-center gap-1">
                Read More <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        `;
      });

      loadMoreBtn.style.display = visibleCount >= filteredPosts.length ? "none" : "flex";
    }

    // Search & Filter logic
    function filterPosts() {
      const keyword = searchInput.value.toLowerCase();
      const category = categoryFilter.value;

      filteredPosts = posts.filter(post => {
        const matchesKeyword = post.title.toLowerCase().includes(keyword);
        const matchesCategory = category === "all" || post.category === category;
        return matchesKeyword && matchesCategory;
      });

      visibleCount = 3;
      renderPosts();
    }

    // Events
    searchInput.addEventListener("input", filterPosts);
    categoryFilter.addEventListener("change", filterPosts);
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 3;
      renderPosts();
    });

    renderPosts();

  //hamburger
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Open menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
  });