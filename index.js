const users = [
  {
    name: "Kakashi Hatake",
    pic: "https://upload.wikimedia.org/wikipedia/en/6/65/Kakashi_Hatake.png",
    bio: "The Copy Ninja of the Hidden Leaf Village."
  },
  {
    name: "Naruto Uzumaki",
    pic: "https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_Uzumaki.png",
    bio: "The Seventh Hokage and hero of the Leaf."
  },
  {
    name: "Sakura Haruno",
    pic: "https://upload.wikimedia.org/wikipedia/en/7/74/Sakura_Haruno.png",
    bio: "A medical ninja with super strength."
  },
  {
    name: "Sasuke Uchiha",
    pic: "https://upload.wikimedia.org/wikipedia/en/6/60/Sasuke_Uchiha.png",
    bio: "The last surviving member of the Uchiha clan."
  },
  {
    name: "Minato Namikaze",
    pic: "https://upload.wikimedia.org/wikipedia/en/f/f3/Minato_Namikaze.png",
    bio: "The Fourth Hokage and Naruto’s father."
  },
  {
    name: "Itachi Uchiha",
    pic: "https://upload.wikimedia.org/wikipedia/en/3/3d/Itachi_Uchiha.png",
    bio: "A hero in the shadows of the Uchiha clan."
  }
];


// Selecting the container (use a dedicated container instead of document.body)
const container = document.querySelector(".box-container");

// Function to show users
function showUsers(arr) {
    container.innerHTML = ""; // Clear previous cards

    arr.forEach(function(user) {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;
        card.appendChild(img);

        const bar = document.createElement("div");
        bar.className = "bar";
        card.appendChild(bar);

        const centerBox = document.createElement("div");
        centerBox.className = "center-box";

        const title = document.createElement("h3");
        title.textContent = user.name; // Use actual user name
        centerBox.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = user.bio;
        centerBox.appendChild(desc);

        card.appendChild(centerBox);
        container.appendChild(card); // Append to box-container instead of body
    });
}

showUsers(users);

// Live filter logic
const input = document.querySelector("input");
input.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();

    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchText)
    );

    showUsers(filtered);
});
