export default {
    "type": "object",
    "name": "section_grid",
    "title": "Grid Section",
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
            "name": "col_number",
            "title": "Columns",
            "description": "The number of grid items in a row.",
            "initialValue": "three",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "two",
                    "three"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "is_numbered",
            "title": "Number the grid items",
            "validation": null
        },
        {
            "type": "array",
            "name": "grid_items",
            "title": "Grid Items",
            "validation": null,
            "of": [
                {
                    "type": "grid_item"
                }
            ]
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
                    "section_grid"
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