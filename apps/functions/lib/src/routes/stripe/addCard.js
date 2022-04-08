"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCard = void 0;
const stripe_1 = require("../../utils/stripe");
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * Add new client card
 */
router.post("/addCard", async (req, res) => {
    const { paymentMethodId, clientId } = req.body.data;
    try {
        await stripe_1.stripe.paymentMethods.attach(paymentMethodId, { customer: clientId });
        await stripe_1.stripe.customers.update(clientId, {
            invoice_settings: {
                default_payment_method: paymentMethodId
            }
        });
        res.status(200).send({ data: {} });
    }
    catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
});
exports.addCard = router;
//# sourceMappingURL=addCard.js.map