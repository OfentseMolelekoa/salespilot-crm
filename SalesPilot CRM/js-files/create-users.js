// service worker functionality for Web Application Capabilities
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
            console.log("Service Worker registration failed:", error);
        }
    );
}

// selecting button element
const createUsersBtn = document.getElementById('create-user-btn');
const userCreationStatus = document.getElementById('user-creation-status');

// implementing button event listener function
createUsersBtn.addEventListener('click', () => {
    // Select the existing user list - to which items will be appended when created
    const userList = document.querySelector('.existing-user-list');

    // selecting field inputs to retrieve values from user-info form
    const fullNames = document.getElementById('full-names').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;

    // function to validate if Full Names and Position are filled
    // if Full Names and Position fields arent filled - throw error
    if (!fullNames || !position) {
        console.error('Full Names and Position are required to create a user!');
        alert('Full Names and Position are required to create a user!');
        userCreationStatus.style.color = 'red';
        userCreationStatus.innerText = 'Full Names and Position are required to create a user!';
        return; // Prevent user creation if fields are empty
    }

    // selecting field inputs to retrieve values from responsibility-group
    const closingDeals = document.getElementById('closing-deals-check').checked;
    const collectingLeads = document.getElementById('collecting-leads-check').checked;
    const managingAccounts = document.getElementById('managing-accounts-check').checked;

    // Create new elements
    const newUser_li_Element = document.createElement('li');
    const newUser_img_Element = document.createElement('img');
    const newUser_span1_Element = document.createElement('span');
    const newUser_span2_Element = document.createElement('span');
    const newUser_i_Element = document.createElement('i'); 

    // Set class attributes
    newUser_li_Element.classList.add('user-item');
    newUser_img_Element.classList.add('user-img');
    newUser_span1_Element.classList.add('user-name');
    newUser_span2_Element.classList.add('user-role');
    newUser_i_Element.classList.add('fa-solid', 'fa-trash', 'remove-user'); 

    // Set textContent as per form values
    newUser_span1_Element.textContent = `${fullNames}`;
    newUser_span2_Element.textContent = `${position}: ${department}`;
    newUser_img_Element.src = 'images/0484ed6beac8c1f9585ca4ee065b0ffc.png'; 
    newUser_img_Element.alt = 'User 1000';

    // Append elements in correct order
    newUser_li_Element.appendChild(newUser_img_Element); 
    newUser_li_Element.appendChild(newUser_span1_Element); 
    newUser_li_Element.appendChild(newUser_span2_Element); 
    newUser_li_Element.appendChild(newUser_i_Element); 

    userList.appendChild(newUser_li_Element);

    // event listener to remove user when trash bin is clicked
    newUser_i_Element.addEventListener('click', () => {
        userList.removeChild(newUser_li_Element);
    });

    userCreationStatus.style.color = 'green';
    userCreationStatus.innerText = 'New user created successfully';
});
