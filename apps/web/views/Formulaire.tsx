import { api_key_vision, firebaseConfig } from "components/utils/constants";
import { Box, Flex, Text } from "rebass";
import { Check } from "@mui/icons-material";
import { Input } from "components/ui/input";
import { storage } from "components/libraries/firebase";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dropzone from "react-dropzone";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ocrProcess } from "./constants";
// const json = require("./tmp.json");

export const Formulaire = () => {
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loadingFile, setLoadingFile] = useState<{ value: boolean; type?: "upload" | "check" | "success" }>({
    value: false
  });
  const ref = storage.refFromURL(`${firebaseConfig.storageBucket}/studentCards`);

  const handleChange = (event: SelectChangeEvent) => {
    setSchool(event.target.value as string);
  };

  const ocr = async (url) => {
    return await fetch(`https://content-vision.googleapis.com/v1/images:annotate?&key=${api_key_vision}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        requests: [
          {
            features: [
              {
                maxResults: 10,
                type: "TEXT_DETECTION"
              }
            ],
            image: {
              source: {
                imageUri: url
              }
            }
          }
        ]
      })
    });
  };

  return (
    <Box as="form" id="form" bg="white" px={[5, 6]} py={6}>
      <Text
        as="h4"
        fontSize={100}
        color="#c0a9a1"
        mb={5}
        textAlign="center"
        lineHeight={1.1}
        sx={{ font: "400 normal 130px/.8 Carta Marina,Georgia,Times New Roman,serif" }}
      >
        Rejoidre l&apos;evenements
      </Text>
      <Flex>
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
          error={error === "Vos prénoms ne correspondent pas."}
          required
        />
      </Flex>
      <Flex mt={4} sx={{ position: "relative" }}>
        <Input
          type="text"
          name="email"
          onChange={(v) => setEmail(v.target.value + school)}
          placeholder="elon.musk"
          label="Adresse email Ionis"
          sx={{ pr: "320px !important" }}
          required
        />
        <FormControl
          sx={{
            width: 300,
            position: "absolute",
            bottom: 0,
            right: 0,
            fieldset: { border: "none !important" },
            label: { color: "#c0a9a1 !important" },
            div: { color: "#c0a9a1" }
          }}
          required
        >
          <InputLabel id="email-select-label">École</InputLabel>
          <Select labelId="email-select-label" id="email-select" value={school} label="École" onChange={handleChange}>
            <MenuItem value={"@epitech.eu"}>@epitech.eu</MenuItem>
            <MenuItem value={"@iseg.eu"}>@iseg.eu</MenuItem>
            <MenuItem value={"@eartsup.eu"}>@eartsup.eu</MenuItem>
          </Select>
        </FormControl>
      </Flex>
      <Text as="p" color={error ? "#d9534f" : "#c0a9a1"} mt={4} mb={2} ml={2} fontWeight={900}>
        Carte étudiante
        {error && (
          <Text as="span" color="#d9534f">
            &nbsp;- {error}
          </Text>
        )}
      </Text>
      <Dropzone
        onDrop={async (acceptedFiles) => {
          setError("");
          setLoadingFile({ value: true, type: "upload" });
          try {
            await ref.child(email + school).put(acceptedFiles[0]);
            const url = await ref.child(email + school).getDownloadURL();
            setLoadingFile((f) => ({ ...f, type: "check" }));
            const res = await ocr(url);
            ocrProcess(res, setError, setLoadingFile, lastName, firstName);
          } catch (e) {
            console.error(e);
            const url = await ref.child(email + school).getDownloadURL();
            setLoadingFile((f) => ({ ...f, type: "check" }));
            const res = await ocr(url);
            ocrProcess(res, setError, setLoadingFile, lastName, firstName);
          }
        }}
        multiple={false}
        disabled={loadingFile.value || !email || !school || loadingFile.type === "success"}
      >
        {({ getRootProps, getInputProps }) => (
          <Box bg="#fcf5ef" p={4} sx={{ cursor: "pointer" }}>
            <Box {...getRootProps()}>
              <Input {...getInputProps()} />
              {loadingFile.value ? (
                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                  {loadingFile.type == "upload" ? (
                    <Text as="p" textAlign="center" color="#c0a9a1" fontWeight={900}>
                      Téléversement de votre carte étudiante...
                    </Text>
                  ) : (
                    <Text as="p" textAlign="center" color="#c0a9a1" fontWeight={900}>
                      Verification de votre carte étudiante...
                    </Text>
                  )}
                  <CircularProgress sx={{ color: "#c0a9a1", mt: 3 }} />
                </Flex>
              ) : loadingFile.type == "success" ? (
                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                  <Text as="p" textAlign="center" color="#c0a9a1" fontWeight={900}>
                    Votre carte étudiante à été validée!
                  </Text>
                  <Check sx={{ color: "#c0a9a1", mt: 3 }} />
                </Flex>
              ) : (
                <Text as="p" textAlign="center" color="#c0a9a1" fontWeight={900}>
                  Déposer votre carte étudiante
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Dropzone>
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "#c0a9a1",
          ":hover": { bgcolor: "#c0a9a1" },
          mt: 4,
          py: 2,
          font: "400 normal 16px/.8 Carta Marina,Georgia,Times New Roman,serif"
        }}
        fullWidth
      >
        Acheter mon ticket
      </Button>
    </Box>
  );
};
