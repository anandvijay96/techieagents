# Shopify Store Setup Guide

This guide walks you through setting up your Shopify store and obtaining the necessary API credentials for the TechieAgents Hydrogen app.

---

## Prerequisites

- A Shopify store (Partner development store or live store)
- Shopify Partner account (recommended for development)

---

## Step 1: Create a Shopify Development Store (if needed)

1. Go to [Shopify Partners](https://partners.shopify.com/)
2. Log in or create a partner account
3. Navigate to **Stores** → **Add store**
4. Select **Development store**
5. Choose **Create a store to test and build**
6. Fill in store details and click **Save**

---

## Step 2: Create a Custom App for API Access

### 2.1 Enable Custom App Development

1. Log into your Shopify Admin: `https://your-store.myshopify.com/admin`
2. Go to **Settings** (gear icon, bottom-left)
3. Click **Apps and sales channels**
4. Click **Develop apps** (top-right)
5. Click **Allow custom app development**
6. Confirm by clicking **Allow custom app development** again

### 2.2 Create the Custom App

1. Click **Create an app**
2. Name it: `TechieAgents Hydrogen`
3. Select the app developer (your email)
4. Click **Create app**

---

## Step 3: Configure API Scopes

### 3.1 Storefront API Access (for public-facing data)

1. In your app, click **Configure Storefront API scopes**
2. Enable the following scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_read_content`
   - `unauthenticated_read_metaobjects`
   - `unauthenticated_read_customers` (if needed for public profiles)
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
3. Click **Save**

### 3.2 Admin API Access (for dashboard/write operations)

1. Click **Configure Admin API scopes**
2. Enable the following scopes:
   - **Products**: `read_products`, `write_products`
   - **Customers**: `read_customers`, `write_customers`
   - **Metafields**: `read_metafields`, `write_metafields` (often bundled with products)
   - **Metaobjects**: `read_metaobjects`, `write_metaobjects`
   - **Content**: `read_content`, `write_content`
   - **Files**: `read_files`, `write_files` (for agent uploads)
   - **Orders**: `read_orders` (for sales tracking)
3. Click **Save**

---

## Step 4: Install the App and Get API Credentials

1. Click **Install app** (top-right)
2. Confirm by clicking **Install**
3. After installation, you'll see your credentials:

### Storefront API
- **Storefront API access token**: Copy this (starts with `shpat_` or similar)

### Admin API
- **Admin API access token**: Click **Reveal token once** and copy it
  - ⚠️ **IMPORTANT**: This token is shown only ONCE. Save it securely!
- **API key**: Visible in the app overview
- **API secret key**: Click to reveal and copy

---

## Step 5: Get Your Store Domain

Your store domain is typically:
- **Development store**: `your-store-name.myshopify.com`
- **Live store with custom domain**: Can still use `.myshopify.com` for API calls

---

## Step 6: Configure Environment Variables

Create a `.env` file in the project root (never commit this file!):

```env
# Shopify Store Configuration
SESSION_SECRET="your-random-session-secret-here"
PUBLIC_STOREFRONT_API_TOKEN="your-storefront-api-token"
PUBLIC_STORE_DOMAIN="your-store.myshopify.com"

# Admin API (for server-side operations only)
SHOPIFY_ADMIN_API_TOKEN="your-admin-api-token"
SHOPIFY_API_KEY="your-api-key"
SHOPIFY_API_SECRET="your-api-secret"

# Storefront API Version (use latest stable)
PUBLIC_STOREFRONT_API_VERSION="2024-01"
```

### Generate a Session Secret

Run this command to generate a secure session secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Step 7: Verify .gitignore

Ensure `.env` is in your `.gitignore` to prevent accidental commits:

```gitignore
.env
.env.local
.env.*.local
```

---

## Step 8: Test the Connection

After setting up your environment variables, run the development server:

```bash
pnpm install
pnpm dev
```

If configured correctly, you should see the Hydrogen storefront at `http://localhost:3000`.

---

## API Endpoints Reference

| API | Endpoint | Use Case |
|-----|----------|----------|
| Storefront API | `https://{store}.myshopify.com/api/{version}/graphql.json` | Public data (products, collections) |
| Admin API | `https://{store}.myshopify.com/admin/api/{version}/graphql.json` | Protected operations (create/edit) |

---

## Troubleshooting

### "Unauthorized" errors
- Verify your API tokens are correct
- Check that required scopes are enabled
- Ensure the app is installed

### "Access denied" for certain operations
- Review Admin API scopes
- Some operations require specific permissions

### CORS errors
- Storefront API is designed for client-side use
- Admin API should only be called server-side (in loaders/actions)

---

## Security Best Practices

1. **Never expose Admin API tokens** in client-side code
2. **Use environment variables** for all secrets
3. **Rotate tokens** if you suspect they've been compromised
4. **Use minimal scopes** - only enable what you need
5. **Audit access** regularly in Shopify Admin

---

## Next Steps

After setup, proceed with:
1. Creating the `AI Agent` product type in Shopify Admin
2. Defining metafields for agent metadata
3. Creating test products to verify the integration
