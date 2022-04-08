"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClient = void 0;
const stripe_1 = require("../../utils/stripe");
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * Create a new customer
 */
router.post("/addClient", async (req, res) => {
    const { email, name } = req.body.data;
    try {
        const newCustomer = await stripe_1.stripe.customers.create({
            email,
            name
        });
        res.send({ data: { clientId: newCustomer.id } });
    }
    catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
});
exports.addClient = router;
//# sourceMappingURL=addClient.js.map