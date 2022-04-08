import { stripe } from "../../utils/stripe";
import { Router, Request, Response } from "express";
import { IS_DEV } from "../../../utils/constants";

const router = Router();

router.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1KlgpgF8LHuzqCF1FKSUE5aT",
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: IS_DEV
        ? `http://localhost:3005?success=true&t=${Date.now()}#form`
        : `https://gala-inscription.web.app?success=true&t=${Date.now()}#form`,
      cancel_url: IS_DEV ? "http://localhost:3005" : `https://gala-inscription.web.app`
    });

    res.status(200).send({ data: { url: session.url } });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

export const payment = router;
