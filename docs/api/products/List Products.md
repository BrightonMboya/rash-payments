---
sidebar_position: 2
---

The `List Products` endpoint allows you to retrieve a list of all available products that customers can purchase. Each product includes detailed information, such as its name, type, description, and other relevant attributes. This endpoint is essential for displaying products in your marketplace or catalog.

```js
// GET REQ
https://api.jani.com/products
```

### Query Parameters

- `status` (optional): \
  Filter products by their status. Possible values include active, inactive, or archived.

- `date_created` (optional): \
  Filter Products by their date of creation.


```js
//sample response
[
  {
    id: "pro_01h1vjes1y163xfj1rh1tkfb65",
    name: "Food traceability",
    description:
      "Give your customers an end to end food observability by tracing resources from Farm to Fork",
    image_url: "https://jani.s3.amazonaws.com/user/171921dbyi10823.png",
    custom_data: null,
    status: "active",
    created_at: "2023-06-01T13:30:50.302Z",
    updated_at: "2024-04-05T15:47:17.163Z",
  },
  {
    id: "pro_01h1vjes1y263xfj1rh1tkfb66",
    name: "Premium Support",
    description:
      "Get priority access to support and dedicated assistance from our team for any issues or questions.",
    image_url:
      "https://jani.s3.amazonaws.com/user/165798/97dRpA6SXzcE6ekK9CAr_support.png",
    custom_data: {
      priority_level: "high",
    },
    status: "active",
    created_at: "2023-07-15T10:20:30.302Z",
    updated_at: "2024-04-10T11:00:00.000Z",
  },
];
```
