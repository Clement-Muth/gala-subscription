import React, { useEffect, useState } from "react";
import { Box, Flex, Link, Text } from "rebass";
import EuroIcon from "@mui/icons-material/Euro";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { database } from "components/libraries/firebase";

export const Informations = () => {
  const [seePosterHover, setSeePosterHover] = useState(false);
  const [reserved, setReserved] = useState(0);

  useEffect(() => {
    database.user.onSnapshot((doc) => setReserved(doc.docs.length));
  }, [0]);

  return (
    <Box
      bg="#fcf5ef"
      px={6}
      py={6}
      sx={{
        position: "relative",
        zIndex: 30,
        "@media screen and (max-width: 1050px)": { px: 4 }
      }}
    >
      <Text as="h3" mb={2} color="#c0a9a1" fontSize={2} letterSpacing=".25em" sx={{ textTransform: "uppercase" }}>
        Informations sur <br />
        <Text
          as="span"
          fontSize={130}
          lineHeight={1.1}
          sx={{
            font: "400 normal 130px/.8 Carta Marina,Georgia,Times New Roman,serif",
            "@media screen and (max-width: 1333px)": { fontSize: "80px" },
            "@media screen and (max-width: 950px)": { fontSize: "64px" },
            "@media screen and (max-width: 500px)": { fontSize: "32px" }
          }}
        >
          L&apos;event
        </Text>
      </Text>
      <Flex sx={{ "@media screen and (max-width: 700px)": { display: "block" } }}>
        <Flex
          flex={1}
          bg="#fff"
          height={600}
          py={6}
          px={5}
          sx={{
            borderRadius: 4,
            borderTopRightRadius: 0,
            position: "relative",
            "@media screen and (max-width: 810px)": { py: 4 },
            "@media screen and (max-width: 400px)": { px: 3 }
          }}
        >
          <Box>
            <Text
              as="h4"
              fontFamily="Steelfish"
              fontSize={5}
              letterSpacing={3}
              color="#c0a9a1"
              sx={{ textTransform: "uppercase" }}
            >
              soirée gala de fin d&apos;année
            </Text>
            <Text as="p" color="#936546" fontSize={3} fontWeight={700} mt={2}>
              Vendredi, 29 Avril 2022
            </Text>
            <Text as="p" color="#7a6a45" letterSpacing={1.5} lineHeight={2} mt={4}>
              Votre BDE d&apos;Epitech, Iseg et Eartsup vous organise une soirée gala, ouvert à tous les étudiants du
              campus IONIS.
            </Text>
            <Box
              width="fit-content"
              onMouseEnter={() => setSeePosterHover(true)}
              onMouseLeave={() => setSeePosterHover(false)}
              sx={{
                position: "absolute",
                bottom: 128,
                cursor: "pointer",
                "@media screen and (max-width: 810px)": { bottom: 32 }
              }}
            >
              <Link target="_blank" href="/static/images/gala-affiche.png" sx={{ textDecoration: "none" }}>
                <Text as="p" color="#7a6a45" fontSize={4}>
                  Voir l&apos;affiche
                </Text>
                <Flex
                  width={seePosterHover ? "100%" : "50%"}
                  height="2px"
                  mt={2}
                  sx={{ background: "linear-gradient(90deg,#9b531a 0,#d37b18)", transition: "width .3s" }}
                />
              </Link>
            </Box>
          </Box>
        </Flex>
        <Flex
          flex={1}
          height={600}
          bg="#fff"
          mt={-80}
          py={6}
          px={5}
          sx={{
            borderRadius: 4,
            borderBottomLeftRadius: 0,
            position: "relative",
            "@media screen and (max-width: 700px)": { mt: 10 },
            "@media screen and (max-width: 400px)": { px: 3 }
          }}
        >
          <Box>
            <Text
              as="h4"
              fontFamily="Steelfish"
              fontSize={5}
              letterSpacing={3}
              color="#c0a9a1"
              sx={{ textTransform: "uppercase" }}
            >
              {100 - reserved} places restantes
            </Text>
            <Box as="ul" pl={0} mt={5} sx={{ li: { listStyle: "none" } }}>
              <Flex as="li" alignItems="center">
                <EuroIcon sx={{ fill: "#936546", mr: 3 }} />
                <Text as="span" color="#7a6a45" letterSpacing={1.5} lineHeight={2}>
                  1 place pour&nbsp;
                  <Text as="span" fontWeight={900}>
                    30€
                  </Text>
                </Text>
              </Flex>
              <Flex as="li" alignItems="center" mt={3}>
                <RestaurantIcon sx={{ fill: "#936546", mr: 3 }} />
                <Text as="span" color="#7a6a45" letterSpacing={1.5} lineHeight={2}>
                  Nourriture illimité
                </Text>
              </Flex>
              <Flex as="li" alignItems="center" mt={3}>
                <LocalBarIcon sx={{ fill: "#936546", mr: 3 }} />
                <Text as="span" color="#7a6a45" letterSpacing={1.5} lineHeight={2}>
                  2 Boissons
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
