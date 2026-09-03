// ==========================================
// Day 5 — Contact Book
// ==========================================

let contacts = [];


// Generate a unique ID automatically.
const generateId = () =>
    contacts.length === 0
        ? 1
        : Math.max(...contacts.map((contact) => contact.id)) + 1;


// Add a contact after validation.
const addContact = (contact) => {
    if (!contact.name || contact.name.trim() === "") {
        return "Rejected: name is required.";
    }

    if (!contact.phone || contact.phone.length < 10) {
        return "Rejected: phone must be at least 10 characters.";
    }

    const newContact = {
        id: generateId(),
        name: contact.name,
        phone: contact.phone,
        email: contact.email || "",
        city: contact.city || "",
        tags: [...(contact.tags || [])]
    };

    contacts = [...contacts, newContact];

    return newContact;
};


// Delete a contact by ID.
const deleteContact = (id) => {
    const exists = contacts.some((contact) => contact.id === id);

    if (!exists) {
        return "Contact not found.";
    }

    contacts = contacts.filter((contact) => contact.id !== id);

    return "Contact deleted.";
};


// Update a contact without mutating the original object.
const updateContact = (id, changes) => {
    const exists = contacts.some((contact) => contact.id === id);

    if (!exists) {
        return "Contact not found.";
    }

    contacts = contacts.map((contact) =>
        contact.id === id
            ? {
                  ...contact,
                  ...changes,
                  tags: changes.tags
                      ? [...changes.tags]
                      : [...contact.tags]
              }
            : contact
    );

    return contacts.find((contact) => contact.id === id);
};


// Search names using partial, case-insensitive matching.
const searchByName = (query) => {
    const search = query.toLowerCase();

    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search)
    );
};


// Search contacts by city.
const searchByCity = (city) =>
    contacts.filter(
        (contact) =>
            contact.city.toLowerCase() === city.toLowerCase()
    );


// Return all contacts sorted alphabetically by name.
const listAll = () =>
    [...contacts].sort((a, b) =>
        a.name.localeCompare(b.name)
    );


// Group contacts by city using reduce.
const groupByCity = () =>
    contacts.reduce((groups, contact) => {
        const city = contact.city;

        if (!groups[city]) {
            groups[city] = [];
        }

        groups[city] = [...groups[city], contact];

        return groups;
    }, {});


// Convert contacts into JSON.
const exportToJSON = () =>
    JSON.stringify(contacts, null, 2);


// Replace contacts using imported JSON.
const importFromJSON = (str) => {
    try {
        const imported = JSON.parse(str);

        if (!Array.isArray(imported)) {
            return "Import rejected: expected an array.";
        }

        contacts = imported.map((contact) => ({
            ...contact,
            tags: [...(contact.tags || [])]
        }));

        return "Contacts imported successfully.";
    } catch {
        return "Import rejected: invalid JSON.";
    }
};


// ==========================================
// DEMO RUN
// ==========================================

const sampleContacts = [
    ["Ahad", "03001234567", "ahad@email.com", "Lahore", ["friend", "school"]],
    ["Ali", "03111234567", "ali@email.com", "Karachi", ["friend"]],
    ["Hamza", "03221234567", "hamza@email.com", "Lahore", ["football"]],
    ["Usman", "03331234567", "usman@email.com", "Islamabad", ["work"]],
    ["Bilal", "03441234567", "bilal@email.com", "Karachi", ["school"]],
    ["Saad", "03551234567", "saad@email.com", "Lahore", ["friend"]],
    ["Hassan", "03661234567", "hassan@email.com", "Rawalpindi", ["football"]],
    ["Zain", "03771234567", "zain@email.com", "Islamabad", ["work"]],
    ["Omar", "03881234567", "omar@email.com", "Karachi", ["friend"]],
    ["Danish", "03991234567", "danish@email.com", "Lahore", ["school"]]
];

sampleContacts.forEach(([name, phone, email, city, tags]) => {
    addContact({ name, phone, email, city, tags });
});

console.log("=== ALL CONTACTS ===");
console.table(listAll());


// Search by name
console.log("\n=== SEARCH NAME: 'ah' ===");
console.table(searchByName("ah"));


// Search by city
console.log("\n=== SEARCH CITY: LAHORE ===");
console.table(searchByCity("LAHORE"));


// Group by city
console.log("\n=== GROUP BY CITY ===");
console.log(groupByCity());


// Update a contact
console.log("\n=== UPDATE AHAD ===");
console.log(
    updateContact(1, {
        city: "Islamabad",
        tags: ["friend", "developer"]
    })
);


// Delete a contact
console.log("\n=== DELETE CONTACT 10 ===");
console.log(deleteContact(10));


// List after changes
console.log("\n=== CONTACTS AFTER CHANGES ===");
console.table(listAll());


// Export
console.log("\n=== EXPORT JSON ===");
const exported = exportToJSON();
console.log(exported);


// Import
console.log("\n=== IMPORT JSON ===");
console.log(importFromJSON(exported));


// Validation tests
console.log("\n=== VALIDATION ===");

console.log(
    addContact({
        phone: "0300123456",
        city: "Lahore"
    })
);

console.log(
    addContact({
        name: "Test",
        phone: "123"
    })
);