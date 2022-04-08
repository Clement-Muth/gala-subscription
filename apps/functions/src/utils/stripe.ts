import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51KlfBwF8LHuzqCF1PqNnEASKERXYBV0sN43dfUCzNuj0RFsCvlm1c4yOnq1l0vE9Zm97RsLMG3wg5N6Q8njdiGKL00SAVvySeu" as string,
  {
    typescript: true,
    apiVersion: "2020-08-27"
  }
);
