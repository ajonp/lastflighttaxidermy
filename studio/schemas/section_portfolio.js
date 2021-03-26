export default {
    "type": "object",
    "name": "section_portfolio",
    "title": "Portfolio Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID",
            "description": "A unique identifier that can be used when linking to this section. Must not contain whitespace.",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout_style",
            "title": "Layout Style",
            "description": "The layout style of the projects section.",
            "initialValue": "mosaic",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "mosaic",
                    "tiles"
                ]
            }
        },
        {
            "type": "number",
            "name": "projects_number",
            "title": "Number of projects to display",
            "validation": Rule => Rule.required().integer()
        },
        {
            "type": "string",
            "name": "view_all_label",
            "title": "All projects button label",
            "description": "The text displayed inside the button.",
            "validation": null
        },
        {
            "type": "string",
            "name": "view_all_url",
            "title": "All projects button URL",
            "initialValue": "#",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "section_portfolio"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}