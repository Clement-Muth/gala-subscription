import { Button, CircularProgress } from "@mui/material";
import { database, functions } from "components/libraries/firebase";
import React, { useState, useEffect } from "react";
import { Card, Flex, Image, Text } from "rebass";
import { LoadingFileT } from ".";

interface PaymentCard {
  disabled?: boolean;
  setDisabled: any;
  onSubmit: () => Promise<any>;
  setLoadingFile: React.Dispatch<React.SetStateAction<LoadingFileT>>;
  email: string;
  school: string;
  firstName: string;
  lastName: string;
}

const ProductDisplay: React.FC<PaymentCard> = ({ onSubmit, setDisabled, disabled, setLoadingFile, ...props }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Card bg="#fcf5ef" width="100%" height={112} mt={4} justifyContent="space-between" sx={{ borderRadius: 6 }}>
      <Flex className="product">
        <Image
          src="/static/images/gala-affiche.png"
          alt="Billet gala de fin d'année"
          m={10}
          size={56}
          sx={{ borderRadius: 4 }}
        />
        <Flex
          className="description"
          flexDirection="column"
          justifyContent="center"
          fontFamily="-apple-system , BlinkMacSystemFont , 'Segoe UI' , 'Roboto' , 'Helvetica Neue' , 'Ubuntu' , sans-serif"
        >
          <Text as="h3" fontSize={14} lineHeight="20px" letterSpacing="-0.154px" color="#c0a9a1" m={0}>
            Billet gala de fin d&apos;année
          </Text>
          <Text as="h5" opacity={0.5} mt={0} pt={0}>
            30.00€
          </Text>
        </Flex>
      </Flex>
      <Button
        disabled={disabled || loading}
        sx={{
          height: 45,
          bgcolor: "#c0a9a1",
          fontWeight: 900,
          width: "100%",
          color: "white",
          font: "900 normal 16px/.8 Carta Marina,Georgia,Times New Roman,serif",
          borderRadius: "0 0 4px 4px",
          boxShadow: "0px 4px 5.5px 0px rgb(0 0 0 / 7%)",
          ":hover": { bgcolor: "#c0a9a1" }
        }}
        onClick={async () => {
          setLoading(true);
          if (!(await onSubmit())) {
            setLoading(false);
            setLoadingFile({ value: false, type: undefined });
            return setDisabled(true);
          }
          const { url } = await (await functions.httpsCallable("stripe/create-checkout-session")({})).data;
          setDisabled(false);
          setLoading(false);
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: props.email,
              school: props.school,
              firstName: props.firstName,
              lastName: props.lastName
            })
          );
          window.location = url;
        }}
      >
        {loading ? (
          <CircularProgress sx={{ color: "#fcf5ef", width: "20px !important", height: "20px !important" }} />
        ) : (
          "Acheter mon billet"
        )}
      </Button>
    </Card>
  );
};

const Message = ({ timestamp }) => {
  useEffect(() => {
    if (Date.now() - timestamp > 60000) return;
    const { email, school, firstName, lastName } = JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("user");
    (async () => {
      await database.user.add({
        email: email + school,
        firstName,
        lastName,
        school: school.substring(1, school.indexOf("."))
      });
    })();
  }, [0]);

  return (
    <Flex as="section" flexDirection="column" alignItems="center">
      <Text as="p" textAlign="center" mt={4} color="#79c99e" fontWeight={900}>
        Votre achat a été validé! Vous allez recevoir une facture par email.
        <br /> Concervez-la pour prouver votre validité au gala.
      </Text>
      <Button
        onClick={() => window.open("https://mail.google.com/")}
        variant="contained"
        sx={{ mt: 3, bgcolor: "#c0a9a1", ":hover": { bgcolor: "#c0a9a1" } }}
      >
        Ouvrir gmail
      </Button>
    </Flex>
  );
};

export const PaymentCard: React.FC<PaymentCard> = ({ ...props }) => {
  const [success, setSuccess] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setTimestamp(query.get("t"));
      setSuccess(true);
    }
  }, []);

  return success ? <Message timestamp={timestamp} /> : <ProductDisplay {...props} />;
};
