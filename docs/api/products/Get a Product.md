---
sidebar_position: 4
---

### Get a Single Product

This endpoint allows you to retrieve detailed information about a specific product by its unique identifier. This is useful when you need to display or interact with a particular product within your application.

#### Endpoint

```http
GET /api/v1/products/{product_id}
```

#### Path Parameters

- `product_id` (string, required): The unique identifier of the product you want to retrieve. This ID is generated when the product is created.

#### Response

The response is a JSON object containing the details of the requested product. The attributes included in the response are as follows:

- `id` (string): A unique identifier for the product.
- `name` (string): The name of the product.
- `description` (string): A detailed description of the product.
- `image_url` (string): A URL pointing to an image representing the product.
- `custom_data` (object or null): Any custom data associated with the product, or `null` if not applicable.
- `status` (string): The current status of the product, such as `active`, `inactive`, or `archived`.
- `created_at` (string): The date and time when the product was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the product was last updated, in ISO 8601 format.

#### Example Request

```http
GET /api/v1/products/pro_01h1vjes1y163xfj1rh1tkfb65
```

#### Example Response

```json
{
    "id": "pro_01h1vjes1y163xfj1rh1tkfb65",
    "name": "Analytics addon",
    "description": "Unlock advanced insights into your flight data with enhanced analytics and reporting features. Includes customizable reporting templates and trend analysis across flights.",
    "image_url": "https://jani.s3.amazonaws.com/user/165798/97dRpA6SXzcE6ekK9CAr_analytics.png",
    "custom_data": null,
    "status": "active",
    "created_at": "2023-06-01T13:30:50.302Z",
    "updated_at": "2024-04-05T15:47:17.163Z"
}
```

#### Error Responses

- `404 Not Found`: Returned if the product with the specified `product_id` does not exist.

#### Use Cases

- **Display Product Details:** Retrieve detailed information about a product to display on a product details page.
- **Data Validation:** Use this endpoint to verify the existence and status of a product before processing orders or payments.
- **Inventory Management:** Integrate this endpoint into inventory or product management systems to keep track of product details in real-time.

This endpoint is essential for accessing specific product information programmatically, ensuring that your application can interact with individual products as needed.