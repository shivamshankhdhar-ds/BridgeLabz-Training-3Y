
"use strict";

// Q4: Generate a form from field configuration.

class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    createForm() {
        const form = document.createElement("form");
        form.id = "dynamicForm";

        this.fields.forEach((field, index) => {
            const label = document.createElement("label");
            label.htmlFor = `field${index}`;
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;
            input.id = `field${index}`;
            input.name = field.name;
            input.required = true;

            form.append(label, input);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        form.appendChild(submitButton);

        this.container.replaceChildren(form);

        form.addEventListener("submit", event => {
            event.preventDefault();
            const formData = this.getFormData();

            document.getElementById("output").textContent =
                JSON.stringify(formData, null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("dynamicForm");
        const data = {};

        this.fields.forEach(field => {
            data[field.name] = form.elements[field.name].value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder(fields, "formContainer");
builder.createForm();
