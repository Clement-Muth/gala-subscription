"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const stripe_1 = require("../../utils/stripe");
const express_1 = require("express");
const constants_1 = require("../../../utils/constants");
const firebase_1 = require("../../utils/firebase");
const router = (0, express_1.Router)();
router.post("/create-checkout-session", async (req, res) => {
    const { email, school, firstName, lastName } = req.body;
    try {
        await firebase_1.database.collection("users").add({
            email: email + school,
            firstName,
            lastName,
            school: school.substring(1, school.indexOf("."))
        });
        const session = await stripe_1.stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: "price_1KlgpgF8LHuzqCF1FKSUE5aT",
                    quantity: 1
                }
            ],
            mode: "payment",
            success_url: constants_1.IS_DEV
                ? `http://localhost:3005?success=true&t=${Date.now()}#form`
                : `https://gala-inscription.web.app?success=true&t=${Date.now()}#form`,
            cancel_url: constants_1.IS_DEV ? "http://localhost:3005" : `https://gala-inscription.web.app`
        });
        res.status(200).send({ data: { url: session.url } });
    }
    catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
});
exports.payment = router;
//# sourceMappingURL=payment.js.map