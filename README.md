# EZCards Automation Test – Final Submission

## 🛠️ Framework Used

- Cypress (JavaScript)
- Custom Cypress commands (separated by module: login, order)
- dotenv for environment-based config

---

## 📂 Project Structure Overview

```
project-root/
├── cypress/
│   ├── e2e/
│   │   └── orderTest.spec.js              # Main E2E test spec
│   ├── fixtures/
│   │   └── testData.json                  # Login credentials and otp
│   ├── locators/
│   │   └── loginLocators.js               # Selector mapping for login fields
│   ├── support/
│   │   ├── commands/
│   │   │   ├── loginCommands.js           # Cypress commands for login
│   │   │   └── orderCommands.js           # Cypress commands for order
│   │   ├── expected/
│   │   │   └── expectedOrderFields.js     # Expected values pulled from API
│   │   ├── functions/
│   │   │   ├── apiHelpers.js              # createOrder and pollOrder
│   │   ├── commands.js                    # Cypress command utilities
│   │   └── e2e.js                         # Loads all custom commands
├── .env                                   # Environment config (API key, base URL)
├── cypress.config.js                      # Cypress test configuration
├── package.json
├── package-lock.json
├── README.md
```

---

## ✅ How to Install & Run the Test

1. **Install dependencies**
```bash
npm install
```

2. **Add your `.env` file at the project root**:

```dotenv
BASE_URL=https://sandbox.ezcards.io
API_BASE_URL=https://sandboxapi.ezcards.io
ACCESS_TOKEN=your_access_token
API_KEY=your_api_key
```

3. **Run Cypress in interactive mode**
```bash
npx cypress open
```

Or headless:
```bash
npx cypress run
```

---

## 🧪 Test Flow Summary

1. **Create Order via API** using `createOrder()`
2. **Poll Order Status** via `cy.pollOrderStatus()` (custom command)
3. **Login via UI** using `loginToPortal()` (via testData.json)
4. **Navigate to `/order/{ezOrderNumber}`**
5. **Assert UI matches API result**:
   - Transaction ID
   - Quantity
   - Unit Price
   - Line Total

---

Created by: **Thiti Kitisin**