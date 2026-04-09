/**
 * Sovereign Payment Configuration
 * Mode: 'initial' | 'live'
 */
export const paymentConfig = {
  STRIPE_CHECKOUT_URL: "https://buy.stripe.com/example_link", // Placeholder for actual Stripe Link
  PAYMENT_MODE: "initial" as "initial" | "live",
  CURRENCY: "USD",
  SUPPORT_EMAIL: "randolphpelican@proton.me",
};
