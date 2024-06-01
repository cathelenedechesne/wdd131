document.addEventListener("DOMContentLoaded", function () {
    // Get current year and update elements
    const currentYear = new Date().getFullYear();
    document.getElementById("2024").textContent = currentYear;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

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

    // Function to handle opening a modal
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add("active");
        overlay.classList.add("active");
        // Store modal state in localStorage
        localStorage.setItem(modal.id, "open");
    }

    // Function to handle closing a modal
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove("active");
        overlay.classList.remove("active");
        // Update modal state in localStorage
        localStorage.setItem(modal.id, "closed");
    }

    // Restore modal state from localStorage and attach event listeners
    modals.forEach(modal => {
        const state = localStorage.getItem(modal.id);
        const modalElement = document.getElementById(modal.id);
        modal.triggerButton.forEach(buttonId => { // Loop through triggerButton IDs
            const triggerButton = document.getElementById(buttonId);
            if (triggerButton) {
                triggerButton.addEventListener("click", () => {
                    openModal(modalElement);
                });
            }
        });
        if (state === "open") {
            openModal(modalElement);
        } else {
            closeModal(modalElement);
        }
    });

    // Add event listeners for modal close buttons
    const modalCloseButtons = document.querySelectorAll(".modal-close");
    modalCloseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal-window");
            closeModal(modal);
        });
    });

    // Add event listener for overlay click to close modals
    overlay.addEventListener("click", () => {
        const modals = document.querySelectorAll(".modal-window.active");
        modals.forEach(modal => {
            closeModal(modal);
        });
    });
});