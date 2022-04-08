import { Box, Flex, Text } from "rebass";
import { Input } from "components/ui/input";
import { onSubmit } from "./constants";
import { PaymentCard } from "./PayementCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StudentCard } from "./StudentCard";

export type LoadingFileT = {
  value: boolean;
  type?: "upload" | "check" | "waitCheck" | "success";
};

export const Formulaire = () => {
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loadingFile, setLoadingFile] = useState<LoadingFileT>({
    value: false
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSchool(event.target.value as string);
  };

  return (
    <Box as="form" id="form" bg="white" px={6} py={6} sx={{ "@media screen and (max-width: 1050px)": { px: 4 } }}>
      <Text
        as="h4"
        fontSize={100}
        color="#c0a9a1"
        mb={5}
        textAlign="center"
        lineHeight={1.1}
        sx={{
          font: "400 normal 130px/.8 Carta Marina,Georgia,Times New Roman,serif",
          "@media screen and (max-width: 1333px)": { fontSize: "80px" },
          "@media screen and (max-width: 950px)": { fontSize: "64px" },
          "@media screen and (max-width: 500px)": { fontSize: "32px" }
        }}
      >
        Rejoindre l&apos;événement
      </Text>
      <Flex
        sx={{
          "@media screen and (max-width: 700px)": {
            display: "block",
            "input:nth-of-type(1)": { ml: 0, mb: 4 }
          }
        }}
      >
        <Input
          type="text"
          name="firstName"
          label="Prénom"
          placeholder="Elon"
          onChange={(v) => setFirstName(v.target.value)}
          sx={{ mr: 2 }}
          error={error === "Vos prénoms ne correspondent pas."}
          required
        />
        <Input
          type="text"
          name="lastName"
          label="Nom de famille"
          placeholder="Musk"
          onChange={(v) => setLastName(v.target.value)}
          sx={{ ml: 2 }}
          error={error === "Vos noms de famille ne correspondent pas."}
          required
        />
      </Flex>
      <Flex mt={4} sx={{ position: "relative" }}>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={(v) => setEmail(v.target.value.replace("@", ""))}
          placeholder="elon.musk"
          label="Adresse email Ionis"
          sx={{
            position: "relative",
            pr: "320px !important",
            "@media screen and (max-width: 700px)": { pr: "150px !important" }
          }}
          required
        />
        <Text
          as="p"
          color="#c0a9a1"
          fontSize={4}
          sx={{ position: "absolute", top: 42, right: 300, "@media screen and (max-width: 700px)": { right: "150px" } }}
        >
          @
        </Text>
        <FormControl
          sx={{
            width: 300,
            position: "absolute",
            bottom: 0,
            right: 0,
            fieldset: { border: "none !important" },
            label: { color: "#c0a9a1 !important" },
            div: { color: "#c0a9a1" },
            "@media screen and (max-width: 700px)": { width: "150px" }
          }}
          required
        >
          <InputLabel id="email-select-label">École</InputLabel>
          <Select labelId="email-select-label" id="email-select" value={school} label="École" onChange={handleChange}>
            <MenuItem value={"@epitech.eu"}>epitech.eu</MenuItem>
            <MenuItem value={"@iseg.eu"}>iseg.eu</MenuItem>
            <MenuItem value={"@eartsup.eu"}>eartsup.eu</MenuItem>
          </Select>
        </FormControl>
      </Flex>
      <StudentCard
        loadingFile={loadingFile}
        setLoadingFile={setLoadingFile}
        email={email}
        firstName={firstName}
        lastName={lastName}
        school={school}
        setDisabled={setDisabled}
        setError={setError}
        error={error}
      />
      <PaymentCard
        disabled={disabled}
        setDisabled={setDisabled}
        setLoadingFile={setLoadingFile}
        email={email}
        firstName={firstName}
        lastName={lastName}
        school={school}
        onSubmit={async () => {
          return await onSubmit(email, school, setDisabled, setError);
        }}
      />
    </Box>
  );
};
