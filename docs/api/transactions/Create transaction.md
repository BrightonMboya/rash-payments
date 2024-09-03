---
sidebar_position: 3
---



**Endpoint:** `POST /transactions`

**Description:**  
Creates a new transaction in the system. This endpoint allows you to manually create transactions for billing purposes, which could include one-time charges, subscription renewals, or other types of payments. You can use this endpoint to generate invoices or handle custom billing scenarios.

**Request Body:**

```json
{
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
      "quantity": 1
    }
  ],
  "custom_data": {
    "order_reference": "ORDER-001",
    "notes": "First-time customer"
  },
  "enable_checkout": true,
  "purchase_order_number": "PO-123456",
  "additional_information": "This is a custom transaction for special billing needs."
}
```

**Request Parameters:**

- **customer_id** (string, required): The ID of the customer for whom the transaction is created. Prefixed with `ctm_`.
- **address_id** (string, optional): The ID of the address associated with this transaction. Prefixed with `add_`.
- **business_id** (string, optional): The ID of the business related to this transaction. Prefixed with `biz_`.
- **currency_code** (string, required): The ISO 4217 currency code for the transaction (e.g., `USD`).
- **collection_mode** (string, required): How payment is collected. Options include `automatic` for immediate payment and `manual` for invoice-based payment.
- **discount_id** (string, optional): The ID of any discount applied to the transaction. Prefixed with `dsc_`.
- **billing_details** (object, optional): Details required for invoicing, such as billing address, company name, and VAT number.
- **billing_period** (object, optional): The billing period for the transaction, including `start` and `end` dates in RFC 3339 format.
- **items** (array of objects, required): List of items for this transaction. Each item requires a `price_id` (the ID of the price entity) and `quantity`.
- **custom_data** (object, optional): Structured key-value data relevant to the transaction.
- **enable_checkout** (boolean, optional): Whether to enable Paddle Checkout for this transaction. Defaults to `false`.
- **purchase_order_number** (string, optional): A purchase order number associated with this transaction.
- **additional_information** (string, optional): Additional notes or information for the transaction.

**Response:**

```json
{
  "id": "txn_7890123456",
  "status": "draft",
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
  "updated_at": "2024-08-01T12:00:00Z"
}
```

**Response Fields:**

- **id** (string): The unique identifier for the newly created transaction, prefixed with `txn_`.
- **status** (string): The initial status of the transaction, typically `draft` upon creation.
- **customer_id** (string): The ID of the customer for whom the transaction was created.
- **address_id** (string): The ID of the address linked to the transaction.
- **business_id** (string): The ID of the business associated with the transaction.
- **currency_code** (string): The currency code for the transaction.
- **collection_mode** (string): Indicates how payment is collected (`automatic` or `manual`).
- **discount_id** (string): The ID of any applied discount.
- **billing_details** (object): Billing details for the invoice.
- **billing_period** (object): The billing period for the transaction.
- **items** (array): The list of items included in the transaction.
- **custom_data** (object): Custom data associated with the transaction.
- **enable_checkout** (boolean): Indicates whether Paddle Checkout is enabled for the transaction.
- **purchase_order_number** (string): The purchase order number for the transaction.
- **additional_information** (string): Additional notes about the transaction.
- **created_at** (string): The date and time the transaction was created.
- **updated_at** (string): The date and time the transaction was last updated.

**Notes:**
- The transaction is initially set to `draft` upon creation, and it can later be updated to `completed` or other statuses as needed.
- The `billing_details` and `billing_period` fields are only necessary if `collection_mode` is set to `manual`.
- The `enable_checkout` flag determines whether a checkout session should be created for the transaction, allowing the customer to complete the payment via Paddle's hosted checkout page.
- Ensure that all required fields are properly validated to prevent errors during transaction creation.