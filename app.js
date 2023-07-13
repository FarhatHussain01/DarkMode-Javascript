const section = document.getElementById("main-data");
const toggleBtn = document.getElementById("toggle-Btn");
const mainContainer = document.getElementById("container");
const headerTitle = document.getElementById("headerTitle");
const body = document.body;

console.log(toggleBtn);

const fetchingData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  createArticle(data);
};

fetchingData();

const createArticle = (data) => {
  data.forEach((item, index) => {
    const articleElement = document.createElement("article");
    articleElement.classList.add("mt-7", "mt-10", "flex", "flex-col", "gap-2"); // adding the tailwind css classes there
    articleElement.innerHTML = `
        <h1 id="article-title-${index}" class="text-pink-400 text-3xl font-bold">${item.title}</h1>
        <div id="date-duration" class="flex max-w-xs gap-3">
          <span class="text-gray-500 text-sm mr-3" id="date">${item.date}</span>
          <span class="text-gray-500 text-sm" id="duration-${index}">${item.duration}</span>
        </div>
        <p class="mt-3 text-gray-500 max-w-[600px] " id="para">${item.content}</p>
      `;
    section.appendChild(articleElement);
    console.log(section.appendChild(articleElement));
  });
};

const toggler = () => {
  body.classList.toggle("bg-[#282c35]");
  headerTitle.classList.toggle("text-white");
  const paragraph = document.querySelectorAll("#para");
  console.log(paragraph);
  // Get all dynamically created article elements
  paragraph.forEach((para) => {
    para.classList.toggle("text-[#ffffff]");
  });
};

toggleBtn.addEventListener("click", toggler);
