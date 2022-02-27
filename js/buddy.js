const loadBuddys = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then (response => response.json())
    .then (data => displayLoadBuddys(data))
}
loadBuddys()
const displayLoadBuddys = data => {
    // console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById("buddys");
    for(const buddy of buddies){
        // console.log(buddy);
        // console.log(buddy.email);
        const p = document.createElement("p");

        p.innerText =`Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Gender: ${buddy.gender}
        Email: ${buddy.email}`;

        buddiesDiv.appendChild(p);
        
    }
}