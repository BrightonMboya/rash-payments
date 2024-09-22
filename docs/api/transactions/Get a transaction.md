---
sidebar_position: 4
---

### Get a Transaction Endpoint

**Endpoint:** `GET /transactions/{id}`

**Description:**  
Retrieves detailed information about a specific transaction. This endpoint provides data on the transaction's status, associated customer and business details, billing information, and more.

**Path Parameters:**

- **id** (string, required): The unique identifier of the transaction you want to retrieve. This ID is prefixed with `txn_`.

**Query Parameters:**

- **include** (array of strings, optional): Specifies related entities to include in the response. You can request related data such as customer details, business information, or billing address.

**Response:**

```json
{
  "id": "txn_7890123456",
  "status": "completed",
  "customer_id": "ctm_0987654321",
  "address_id": "add_1122334455",
  "business_id": "biz_2233445566",
  "currency_code": "USD",
  "collection_mode": "manual",
  "discount_id": "dsc_5566778899",
  "billing_details": {
    "billing_address": "123 Main St, Springfield, IL, USA",
    "company_name": "ACME Corp",
    "vat_number": "US123456789"
  },
  "billing_period": {
    "start": "2024-08-01T00:00:00Z",
    "end": "2024-08-31T23:59:59Z"
  },
  "items": [
    {
      "price_id": "pri_001",
      "quantity": 1,
      "unit_price": {
        "amount": "50.00",
        "currency": "USD"
      }
    }
  ],
  "custom_data": {
    "order_reference": "ORDER-001",
    "notes": "First-time customer"
  },
  "enable_checkout": true,
  "purchase_order_number": "PO-123456",
  "additional_information": "This is a custom transaction for special billing needs.",
  "created_at": "2024-08-01T12:00:00Z",
  "updated_at": "2024-08-02T15:00:00Z",
  "billed_at": "2024-08-01T12:00:00Z",
  "address": {
    "id": "add_1122334455",
    "line1": "123 Main St",
    "line2": null,
    "city": "Springfield",
    "state": "IL",
    "postal_code": "62701",
    "country": "US"
  },
  "adjustments": [
    {
      "id": "adj_001",
      "amount": "5.00",
      "description": "Shipping fee"
    }
  ],
  "adjustments_totals": {
    "total": "5.00"
  },
  "business": {
    "id": "biz_2233445566",
    "name": "ACME Corp",
    "vat_number": "US123456789"
  },
  "customer": {
    "id": "ctm_0987654321",
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  "discount": {
    "id": "dsc_5566778899",
    "name": "Summer Sale",
    "amount": "10.00"
  },
  "available_payment_methods": ["credit_card", "paypal"]
}
```

**Response Fields:**

- **id** (string): The unique identifier for the transaction, prefixed with `txn_`.
- **status** (string): The status of the transaction (e.g., `completed`, `pending`, `canceled`).
- **customer_id** (string): The ID of the customer associated with the transaction, prefixed with `ctm_`.
- **address_id** (string): The ID of the address associated with the transaction, prefixed with `add_`.
- **business_id** (string): The ID of the business related to the transaction, prefixed with `biz_`.
- **currency_code** (string): The ISO 4217 currency code used for the transaction (e.g., `USD`).
- **collection_mode** (string): The payment collection mode (`automatic` or `manual`).
- **discount_id** (string): The ID of the discount applied to the transaction, prefixed with `dsc_`.
- **billing_details** (object): Detailed billing information, including address, company name, and VAT number.
- **billing_period** (object): The billing period covered by the transaction, including `start` and `end` dates.
- **items** (array): List of items in the transaction, including `price_id`, `quantity`, and `unit_price`.
- **custom_data** (object): Any custom data associated with the transaction.
- **enable_checkout** (boolean): Indicates whether Jani Checkout was enabled for this transaction.
- **purchase_order_number** (string): The purchase order number associated with the transaction.
- **additional_information** (string): Additional notes or details about the transaction.
- **created_at** (string): The timestamp of when the transaction was created.
- **updated_at** (string): The timestamp of the last update to the transaction.
- **billed_at** (string): The timestamp of when the transaction was marked as billed.
- **address** (object): Detailed address information associated with the transaction.
- **adjustments** (array): List of adjustments made to the transaction, including ID, amount, and description.
- **adjustments_totals** (object): Totals for all adjustments applied to the transaction.
- **business** (object): Details about the business associated with the transaction.
- **customer** (object): Details about the customer associated with the transaction.
- **discount** (object): Details about the discount applied to the transaction.
- **available_payment_methods** (array): List of payment methods available for this transaction.

**Notes:**

- Use the `include` query parameter to fetch related entities if needed, such as `customer`, `business`, `address`, `discount`, or `available_payment_methods`.
- The `address`, `adjustments`, `business`, `customer`, and `discount` fields are included only if specified in the `include` parameter and if they are relevant to the transaction.
- Ensure that the `id` parameter in the request path is a valid transaction ID and exists in the system.
