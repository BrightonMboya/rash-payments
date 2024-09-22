---
sidebar_position: 7
---


**Endpoint:** `GET /transactions/{transaction_id}/invoice`

**Description:**  
Retrieves a PDF invoice for a specific transaction. This endpoint is useful when you need to provide a customer with an official invoice document for a completed transaction. The invoice includes details such as the transaction date, the purchased items, pricing, taxes, and other necessary billing information.

**Path Parameter:**

- **transaction_id** (string, required): The unique identifier of the transaction for which the PDF invoice is requested.

**Request Example:**

```bash
GET /transactions/trx_1234567890/invoice
```

**Response:**

If successful, the response will return the PDF content of the invoice as a binary file or a URL to download the invoice. This file can then be displayed or downloaded by the customer.

**Response Example (Binary PDF):**

The response body will contain the raw PDF content.

```pdf
%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
...
```

**Response Example (URL):**

Alternatively, you may receive a URL to download the PDF invoice.

```json
{
  "invoice_url": "https://cdn.jani-payments.com/invoices/trx_1234567890.pdf"
}
```

**Notes:**

- The request returns the invoice in PDF format, which can either be downloaded or displayed to the end-user.
- Make sure the `transaction_id` is valid, as only completed transactions will have associated invoices.
- This endpoint is often used in customer portals to allow customers to download their invoices for bookkeeping or tax purposes.