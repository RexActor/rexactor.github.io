const projects = [
    {
        title: "Web Application to connect to M3 database",
        description: "A web app that connects to an M3 database. The application enables users to perform various database queries which one helps to improve scheduler efficiency. Are able to calculate requirements, view planned jobs and their progress while using live M3 database data.",
        images: [
            "/images/IconexWebApplication/Iconex-landing-page.png",
            "/images/IconexWebApplication/bom-view.png",
            "/images/IconexWebApplication/scheduler-view.png"
        ],
        stack: ["C#", "ASP.NET", "SQL", "Web Development", "Entity Framework", "Chart.js"]
    },

    {
        title: "Inventory Management System",
        description: "Inventory management system was created to help to manage inventory through application rather than use excel files. Through this application you can add/remove/edit user roles, loads, suppliers, Inventory Items. Track any item movement. See user activity log, do adjustments on inventory with reason. Display item stockholding and its value. Demo - https://fustdemo.azurewebsites.net/ Username: Admin@mail.com Passowrd:Admin123*",
        images: [
            "/images/InventoryManagement/Front_page.png",
            "/images/InventoryManagement/Create_Supplier.png",
            "/images/InventoryManagement/create_Load.png",
            "/images/InventoryManagement/Create_load_2.PNG",
            "/images/InventoryManagement/adjustment_codes.PNG",
            "/images/InventoryManagement/Admin_page.PNG",
            "/images/InventoryManagement/Item_management.PNG",
            "/images/InventoryManagement/Manage_Users.PNG",
            "/images/InventoryManagement/View_Loads.PNG"
        ],
        stack: ["C#", "ASP.Net", "SQL", "Entity Framework", "Web Development","Chart.js"]
    },
    {
        title: "Engineering Database",
        description: 'Tool was created to support Facilities Engineering team with an automatic reporting system. Tool uses Outlook Extension to generate automatic emails and sends them out to a specific email group. Utilizes Windows Authentication system to gather information about the user - in this case Username. Engineering team is able to update and report back (to the user who reported) through the application if the task was completed and what actions were taken.',
        images: [
            "/images/EngineeringDatabase/Main_Window.png",
            "/images/EngineeringDatabase/Report_Issue.png",
            "/images/EngineeringDatabase/settings.png",
            "/images/EngineeringDatabase/Update_reported_item.PNG"
        ],
        stack: ["C#", "WPF", "SQL", "Entity Framework", "Outlook"]
    },



    {
        title: "Cost Calculator",
        description: "The calculator calculates output based on provided information, giving cost per unit. The calculation is based on physical distance between cups/spaces and the actual line speed.",
        images: [
            "/images/CostCalculator/MainImage.png",
            "/images/CostCalculator/Calculator.png"
        ],
        stack: ["C#", "WPF", "Cost Calculation"]
    },

    {
        title: "OBS Twitch Challenge Bot",
        description: "OBS Twitch Challenge Bot is a versatile tool designed to integrate Twitch functionalities with OBS (Open Broadcaster Software). This project aims to enhance the streaming experience by automating commands, managing interactions, and adding customization options. Randomly selects a challenge from the predefined list, updates the OBS text source with the challenge, and generates an overlay in the HTML file. And sends back to Twitch chat message about challenge details.",
        images: [
            "",
            "",
            ""
        ],
        stack: ["C#", "WPF", "SQL", "Web Development", "OBS Studio", "Twitch API"]
    },

    {
        title: "Inventory Management System",
        description: 'WPF-based inventory management system designed for tracking and managing decoration items. It is built using C# .NET (WPF) and provides an intuitive UI for handling inventory operations efficiently. Use the interface to add, edit, or delete inventory items. Search and filter inventory to quickly find items.',
        images: [
            "",
            "",
            "",
            ""
        ],
        stack: ["C#", "WPF", "SQL", "Entity Framework"]
    },
    {
        title: "Image Generator in Python",
        description: `Project idea was born when a friend was developing a trading discord bot for the game "Dark and Darker." The idea was that based on information passed into the function, it generates an image using the Pillow Library. Image height is dynamic based on how many "modifiers" are for the item. The text moves lower to insert extra text fields in the middle, and the top part of the image is updated with the corresponding color for item rarity.`,
        images: [
            "/images/PythonImageGenerator/ImageGenerator_Epic.png",
            "/images/PythonImageGenerator/ImageGenerator_Rare.png",
            "/images/PythonImageGenerator/ImageGenerator_Unique.png"
        ],
        stack: ["Python", "Pillow", "Image Processing"]
    },
    {
        title: "Lingo",
        description: "A simple Lingo game created in C#. The application chooses a random 5-letter word from a predefined list. Correct location letters are marked in green. Letters in the wrong location but still in the word are marked in light blue. Letters not in the word are left with a white background.",
        images: [
            "/images/Lingo/Start.png",
            "/images/Lingo/Start_ori.png",
            "/images/Lingo/Won.png",
            "/images/Lingo/LetterinWrong place.png",
            "/images/Lingo/FirstGuess.png"
        ],
        stack: ["C#", "WPF"]
    },

];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-images">
                    ${project.images.map(img => `<a href="#lightbox" onclick="showLightbox('${img}')"><img src="${img}" alt="Project image" /></a>`).join('')}
                </div>
                <div class="project-stack">
                    ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            `;
    projectList.appendChild(card);
});

// Show lightbox with the selected image
function showLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = imgSrc;
}

// Close lightbox on click outside image
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target !== document.getElementById('lightbox-img')) {
        this.style.display = 'none';
    }
});