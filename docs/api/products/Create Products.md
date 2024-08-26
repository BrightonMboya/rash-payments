---
sidebar_position: 3
---

### Create Product

The `Create Product` endpoint allows you to create a new product that can be offered to customers. This endpoint is designed for scenarios where you need to programmatically add products to your catalog. You can also create products directly from the dashboard, which provides a user-friendly interface for managing your products.

#### Endpoint

```http
POST /api/v1/products
```

### Request Body

The request body must be a JSON object containing the following fields:

- `name` (string, required): The name of the product.
- `type` (string, required): The type of product, such as `standard`, `subscription`, or another custom type.
- `description` (string, optional): A detailed description of the product.
- `image_url` (string, optional): A URL pointing to an image representing the product.
- `custom_data` (object or null, optional): Any custom data you wish to associate with the product.
- `status` (string, optional): The current status of the product. Default is `active`.

#### Example Request

```json
{
  "name": "Food traceability",
  "description": "Give your customers an end to end food observability by tracing resources from Farm to Fork",
  "image_url": "https://jani.s3.amazonaws.com/user/165798/97dRpA6SXzcE6ekK9CAr_analytics.png",
  "custom_data": null,
  "status": "active"
}
```

#### Response

On successful creation, the API will return the newly created product as a JSON object, including its unique identifier and timestamps.

- `id` (string): A unique identifier for the product.
- `name` (string): The name of the product.
- `description` (string): A detailed description of the product.
- `image_url` (string): A URL pointing to an image representing the product.
- `custom_data` (object or null): Any custom data associated with the product.
- `status` (string): The current status of the product.
- `created_at` (string): The date and time when the product was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the product was last updated, in ISO 8601 format.

### Example Response

```json
{
  "id": "pro_01h1vjes1y163xfj1rh1tkfb65",
  "name": "Food traceability",
  "description": "Give your customers an end to end food observability by tracing resources from Farm to Fork",
  "image_url": "https://jani.s3.amazonaws.com/user/165798/97dRpA6SXzcE6ekK9CAr_analytics.png",
  "custom_data": null,
  "status": "active",
  "created_at": "2023-06-01T13:30:50.302Z",
  "updated_at": "2023-06-01T13:30:50.302Z"
}
```

### Creating Products via Dashboard

You can also create products directly from the dashboard, which is accessible via the platform’s web interface. The dashboard provides a graphical interface for managing products, making it easier to set up and configure products without the need for API calls. This option is recommended for users who prefer a more visual approach or who are managing products individually.

Whether you choose to use the API or the dashboard, both methods ensure that the products are fully integrated into your billing platform.
