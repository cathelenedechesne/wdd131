document.addEventListener("DOMContentLoaded", function () {
    // Get current year and update elements
    const currentYear = new Date().getFullYear();
    document.getElementById("2024").textContent = currentYear;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

    /**** Modal Section for Big View ****/


    // Define modal data as an array of objects
    const modals = [
        {
            id: "modal-1",
            state: localStorage.getItem("modal-1") || "closed",
            triggerButton: ["fanart-index", "fanart-gallery"]
        },
        {
            id: "modal-2",
            state: localStorage.getItem("modal-2") || "closed",
            triggerButton: ["cherry-index", "cherry-gallery"]
        },
        {
            id: "modal-3",
            state: localStorage.getItem("modal-3") || "closed",
            triggerButton: ["face-index", "face-gallery"]
        },

        {
            id: "modal-4",
            state: localStorage.getItem("modal-4") || "closed",
            triggerButton: ["color-splash"]
        },
        {
            id: "modal-5",
            state: localStorage.getItem("modal-5") || "closed",
            triggerButton: ["eye"]
        },
        {
            id: "modal-6",
            state: localStorage.getItem("modal-6") || "closed",
            triggerButton: ["hands"]
        },
        {
            id: "modal-7",
            state: localStorage.getItem("modal-7") || "closed",
            triggerButton: ["kangaroo"]
        },
        {
            id: "modal-8",
            state: localStorage.getItem("modal-8") || "closed",
            triggerButton: ["bunny-cat"]
        },
        {
            id: "modal-9",
            state: localStorage.getItem("modal-9") || "closed",
            triggerButton: ["elf"]
        },
        {
            id: "modal-10",
            state: localStorage.getItem("modal-10") || "closed",
            triggerButton: ["koi-fish"]
        },
        {
            id: "modal-11",
            state: localStorage.getItem("modal-11") || "closed",
            triggerButton: ["fairy"]
        }
    ];

// Function to handle modal state
function toggleModal(modal, action) {
    if (modal == null) return;
    modal.classList[action]("active");
    // Store modal state in localStorage
    localStorage.setItem(modal.id, action === "add" ? "open" : "closed");
}

// Attach event listeners for modal trigger buttons
modals.forEach(modal => {
    const modalElement = document.getElementById(modal.id);
    modal.triggerButton.forEach(buttonId => {
        const triggerButton = document.getElementById(buttonId);
        if (triggerButton) {
            triggerButton.addEventListener("click", () => {
                toggleModal(modalElement, "add");
            });
        }
    });
    if (localStorage.getItem(modal.id) === "open") {
        toggleModal(modalElement, "add");
    } else {
        toggleModal(modalElement, "remove");
    }
});

// Attach event listener for modal close buttons
document.querySelectorAll(".modal-close").forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal-window");
        toggleModal(modal, "remove");
    });
});

// Attach event listener for accordion buttons
document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
});

