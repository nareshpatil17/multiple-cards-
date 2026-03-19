const users = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    username: "Ananya Sharma",
    profession: "UI/UX Designer",
    description: "Passionate about creating intuitive and beautiful user experiences.",
    tags: ["design", "ux", "figma"]
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    username: "Rahul Verma",
    profession: "Full Stack Developer",
    description: "Building scalable web applications using MERN stack.",
    tags: ["javascript", "nodejs", "react"]
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    username: "Priya Mehta",
    profession: "Data Analyst",
    description: "Turning data into meaningful insights and visualizations.",
    tags: ["python", "data", "analytics"]
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    username: "Amit Patel",
    profession: "DevOps Engineer",
    description: "Automating deployments and managing cloud infrastructure.",
    tags: ["aws", "docker", "ci/cd"]
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    username: "Sneha Kapoor",
    profession: "Content Creator",
    description: "Creating engaging content for social media and blogs.",
    tags: ["content", "marketing", "writing"]
  }
];


var sum = ''

users.forEach(function(elem){
    sum = sum +  `<div id="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.username}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})


let main = document.querySelector("main");

main.innerHTML = sum

console.log(sum)