### Update a Product

This endpoint allows you to modify the details of an existing product. This is useful when you need to make changes to a product's attributes, such as its name, description, status, or any other relevant information.

#### Endpoint

```http
PATCH /api/v1/products/{product_id}
```

#### Path Parameters

- `product_id` (string, required): The unique identifier of the product you want to update. This ID is generated when the product is created.

#### Request Body

The request body must be a JSON object containing the fields you want to update. All fields are optional, so you can include only the fields you want to change.

- `name` (string, optional): The updated name of the product.
- `description` (string, optional): The updated description of the product.
- `image_url` (string, optional): The updated URL pointing to an image representing the product.
- `custom_data` (object or null, optional): The updated custom data associated with the product.
- `status` (string, optional): The updated status of the product. Possible values include `active`, `inactive`, or `archived`.

#### Example Request

```json
{
    "name": "Advanced Analytics Addon",
    "description": "Unlock even more insights with our advanced analytics package, now with added features.",
    "status": "active"
}
```

#### Response

On successful update, the API will return the updated product as a JSON object, including the changes made.

- `id` (string): The unique identifier for the product.
- `name` (string): The updated name of the product.
- `description` (string): The updated description of the product.
- `image_url` (string): The updated URL pointing to an image representing the product.
- `custom_data` (object or null): The updated custom data associated with the product.
- `status` (string): The updated status of the product.
- `created_at` (string): The date and time when the product was originally created, in ISO 8601 format.
- `updated_at` (string): The date and time when the product was last updated, in ISO 8601 format.

#### Example Response

```json
{
    "id": "pro_01h1vjes1y163xfj1rh1tkfb65",
    "name": "Advanced Analytics Addon",
    "description": "Unlock even more insights with our advanced analytics package, now with added features.",
    "image_url": "https://jani.s3.amazonaws.com/user/165798/97dRpA6SXzcE6ekK9CAr_analytics.png",
    "custom_data": null,
    "status": "active",
    "created_at": "2023-06-01T13:30:50.302Z",
    "updated_at": "2024-04-05T15:47:17.163Z"
}
```

#### Error Responses

- `404 Not Found`: Returned if the product with the specified `product_id` does not exist.
- `400 Bad Request`: Returned if the request body contains invalid fields or data types.

#### Use Cases

- **Product Management:** Update product details to reflect changes in features, pricing, or availability.
- **Inventory Control:** Modify the status of a product (e.g., setting it to `inactive` or `archived`) as part of inventory management.
- **Marketing Updates:** Update the product description and images to reflect new marketing materials or promotions.

This endpoint allows you to keep your product catalog up-to-date and aligned with your business needs, ensuring that customers always see the most current information.