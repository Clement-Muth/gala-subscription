import { api_key_vision, firebaseConfig } from "components/utils/constants";
import { Box, Flex, Text } from "rebass";
import { Check } from "@mui/icons-material";
import { Input } from "components/ui/input";
import { ocrProcess } from "../constants";
import { storage } from "components/libraries/firebase";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dropzone from "react-dropzone";
import React, { useState } from "react";

interface StudentCardProps {
  email: string;
  error?: string;
  firstName: string;
  lastName: string;
  school: string;
  loadingFile;
  setLoadingFile;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const StudentCard: React.FC<StudentCardProps> = ({ setLoadingFile, loadingFile, ...props }) => {
  const [retry, setRetry] = useState(false);

  const ref = storage.refFromURL(`${firebaseConfig.storageBucket}/studentCards`);

  const ocr = async (url: string) => {
    return await (
      await fetch(`https://content-vision.googleapis.com/v1/images:annotate?&key=${api_key_vision}`, {
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
                  maxResults: 0,
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
      })
    ).json();
  };

  return (
    <>
      <Text as="p" color={props.error ? "#d9534f" : "#c0a9a1"} mt={4} mb={2} ml={2} fontWeight={900}>
        Carte étudiante
        {props.error && (
          <Text as="span" color="#d9534f">
            &nbsp;- {props.error}
          </Text>
        )}
      </Text>
      <Dropzone
        onDrop={async (acceptedFiles) => {
          props.setError("");
          setLoadingFile({ value: true, type: "upload" });
          try {
            await ref.child(props.email + props.school).put(acceptedFiles[0]);
            setLoadingFile({ value: false, type: "waitCheck" });
          } catch (e) {
            console.error(e);
          }
        }}
        multiple={false}
        disabled={
          loadingFile.value ||
          !props.email ||
          !props.school ||
          loadingFile.type === "success" ||
          loadingFile.type === "waitCheck"
        }
      >
        {({ getRootProps, getInputProps }) => (
          <Box bg="#fcf5ef" sx={{ cursor: "pointer" }}>
            <Box {...getRootProps()} height="100%" p={4}>
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
              ) : loadingFile.type === "waitCheck" ? (
                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                  <Text as="p" textAlign="center" color="#c0a9a1" fontWeight={900}>
                    Verifier votre carte étudiante:
                  </Text>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#c0a9a1",
                      ":hover": { bgcolor: "#c0a9a1" },
                      mt: 2,
                      py: 1
                    }}
                    onClick={async () => {
                      setLoadingFile({ value: true, type: "check" });
                      const url = await storage
                        .refFromURL(`${firebaseConfig.storageBucket}/studentCards/${props.email + props.school}`)
                        .getDownloadURL();
                      const res = await ocr(url);
                      if (res.responses[0]?.error) {
                        if (!retry) {
                          const res = await ocr(url);
                          if (res.responses[0]?.error) {
                            setLoadingFile({ value: false, type: "waitCheck" });
                            return props.setError("Une erreur est survenue, veillez réessayer.");
                          }
                          if (!ocrProcess(res, props.setError, setLoadingFile, props.lastName, props.firstName)) return;
                          props.setDisabled(false);
                          setRetry(true);
                          return setLoadingFile({ value: false, type: "success" });
                        }
                      }
                      if (!ocrProcess(res, props.setError, setLoadingFile, props.lastName, props.firstName)) return;
                      props.setDisabled(false);
                      setLoadingFile({ value: false, type: "success" });
                    }}
                  >
                    Valider ma carte
                  </Button>
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
    </>
  );
};
