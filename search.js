// Function to create company buttons
function createCompanyList(companies) {
    const companyListDiv = document.getElementById("companyList");
    companyListDiv.innerHTML = "";  // Clear current list

    companies.forEach(company => {
        const listItem = document.createElement("li");
        listItem.classList.add("company-item");

        const button = document.createElement("button");
        button.textContent = company.name;
        button.onclick = () => window.open(company.url, "_blank");

        listItem.appendChild(button);
        companyListDiv.appendChild(listItem);
    });
}

// Initial creation of company list
createCompanyList(data.selection1);

// Search function
function searchCompanies() {
    const searchTerm = document.getElementById("searchBox").value.toLowerCase();
    const filteredCompanies = data.selection1.filter(company => 
        company.name.toLowerCase().includes(searchTerm)
    );
    createCompanyList(filteredCompanies);
}
