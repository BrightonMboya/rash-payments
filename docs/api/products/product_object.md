---
sidebar_position: 1
---

The product entity defines what product your customers can buy from you. It contains all attributes related to your product.
An example of products names include

- "Headshot Pro Monthly Subscription"
- "Annual Tax as a service Plan"

Note that these are just product names and you can give them any names you want in accordance to your business needs.

The product entity includes the following:-
- `id string:` \
This is a unique identifier which is automatically assigned by Jani.

- `name string:`\
The name of the product

- `description string:` \
This is a short description of the product

- `status string:`\
This is an enum of either archived or active. We use this to determine which products are active on your catalog.
By default, this field is set to active.

-`custom_metadata: Object or nulll: `\
This field holds your own additional custom meta data in key value pair structured format.

- `created_at: string<datetime>` \
This is a date timestamp indicating when was the product created. This field is set automatically.

- `updated_at: string<datetime>`\
This is a date timestamp indicating when was the product last updated. This field is set automatically.