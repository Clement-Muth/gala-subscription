import React, { useEffect, useState } from "react";
import { Box, Flex, Link, Text } from "rebass";
import { Countdown, countdown } from "components/utils/countdown";

export const Head = () => {
  const [countdownValue, setCountdownValue] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setInterval(() => setCountdownValue(countdown(new Date("2022/04/29/19:00"))), 1000);
  }, [0]);

  return (
    <Box width="100%" height="calc(100vh - 8px)" sx={{ position: "relative" }}>
      <Flex
        size="100%"
        sx={{
          backgroundImage: "url('/static/images/landing-illustration.jpg')",
          filter: "brightness(0.9)",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
      <Flex
        justifyContent="center"
        pt={5}
        width="100%"
        height="80vh"
        alignItems="center"
        sx={{ "@media screen and (max-height: 1025px)": { height: "45vh" } }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          sx={{ "@media screen and (max-height: 1025px)": { svg: { width: 30, height: 30 } } }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            fill="#e7e6d6"
            width="62.714px"
            height="62.714px"
            viewBox="0 0 62.714 62.714"
          >
            <g>
              <path d="M15.285,31.115L5.247,25.127c3.797,6.268,8.174,16.526,8.174,21.979c0,6.066,0,15.599,0,15.599h2.6    C15.127,44.503,15.149,35.368,15.285,31.115z" />
              <path d="M57.094,45.89c-1.055,0-2.078,0.188-2.078,0.188c0.081-2.031-0.65-5.606-0.65-5.606s-0.65-0.567-5.362-1.704    c-4.711-1.139-9.586-16.167-11.779-20.636c-2.194-4.468-3.737-11.374-3.737-11.374c-1.029-0.499-1.813-0.717-2.401-0.717    c-2.066,0-1.678,2.703-0.785,5.382c-0.188-0.041-0.383-0.08-0.584-0.117c-0.191-0.035-0.389-0.069-0.591-0.1    c-3.834-0.595-9.343-0.545-12.624-0.445c-0.186,0.006-0.364,0.012-0.535,0.018c-0.192,0.006-0.373,0.014-0.544,0.02    c0.544-2.395,1.086-4.042,1.086-4.042c1.116,0.894,2.63,1.229,4.272,1.229c4.923,0,11.002-3.016,11.002-3.016    C32.351,3.426,31.2,3.426,31.2,3.426c-1.243,0.174-2.255,0.249-3.175,0.249c-2.095,0-3.713-0.391-6.479-0.899    C18.568,2.229,14.863,0,13.117,0c-0.587,0-0.954,0.253-0.994,0.908c-0.164,2.602-5.2,11.295-7.557,15.925    c-2.356,4.63-0.568,6.336-0.568,6.336L15.33,29.93l2.396,1.428c16.166,13.471,8.286,29.182,16.084,30.97    c1.178,0.271,2.518,0.387,3.946,0.387c8.033,0,18.851-3.731,19.126-5.181c0.324-1.707,1.869-8.124,2.438-10.236    C59.629,46.153,58.34,45.89,57.094,45.89z M14.75,14.299c0.165-0.02,0.346-0.036,0.542-0.05c0.166-0.012,0.34-0.02,0.525-0.027    c3.688-0.134,11.072,0.574,14.844,0.972c0.217,0.023,0.422,0.045,0.612,0.066c0.221,0.024,0.429,0.046,0.611,0.066    c0.383,0.817,0.657,1.344,0.657,1.344c0.798,2.194,0.571,4.135-0.222,5.82c-0.145-0.082-0.297-0.167-0.454-0.254    c-0.147-0.083-0.3-0.167-0.457-0.253c-4.005-2.214-11.017-5.845-15.717-6.925c-0.171-0.04-0.342-0.078-0.506-0.11    c-0.178-0.035-0.349-0.063-0.519-0.089C14.694,14.669,14.721,14.484,14.75,14.299z M15.208,24.957    c-0.678-1.652-0.911-3.68-0.89-5.775l0.122,0.032c0,0,0.148,0.04,0.405,0.11c0.14,0.039,0.308,0.085,0.511,0.143    c2.622,0.738,10.227,2.98,14.117,5.215c0.157,0.09,0.308,0.18,0.452,0.27c0.157,0.098,0.306,0.196,0.447,0.294    c-3.305,3.445-8.502,5.234-8.502,5.234L15.208,24.957z M39.58,37.143c-0.649,0.976-7.744,6.499-8.222,6.281    c-0.477-0.216-2.338-3.304-2.338-3.304C37.739,35.41,40.229,36.167,39.58,37.143z" />
            </g>
          </svg>
          <Text
            as="h2"
            color="#e7e6d6"
            fontWeight={900}
            fontSize={6}
            mt={3}
            sx={{ "@media screen and (max-height: 1025px)": { fontSize: 4 } }}
          >
            Débute bientôt
          </Text>
          <Flex
            color="#e7e6d6"
            justifyContent="center"
            mt={5}
            px={4}
            py={3}
            width="80%"
            sx={{
              border: "solid 1px #e7e6d6",
              "@media screen and (max-width: 725px)": { width: "95%" },
              "@media screen and (max-width: 500px)": { px: 2 },
              "@media screen and (max-height: 1025px)": { mt: 3 }
            }}
          >
            <Box width="fit-content">
              <Text
                as="p"
                fontSize={7}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
                }}
              >
                {countdownValue.days < 10 && 0}
                {countdownValue.days}
              </Text>
              <Text
                as="p"
                fontSize={3}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "16px !important" }
                }}
              >
                Jours
              </Text>
            </Box>
            <Text
              as="p"
              fontSize={7}
              mx={3}
              sx={{
                "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
              }}
            >
              :
            </Text>
            <Box width="fit-content">
              <Text
                as="p"
                fontSize={7}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
                }}
              >
                {countdownValue.hours < 10 && 0}
                {countdownValue.hours}
              </Text>
              <Text
                as="p"
                fontSize={3}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "16px !important" }
                }}
              >
                Heures
              </Text>
            </Box>
            <Text
              as="p"
              fontSize={7}
              mx={3}
              sx={{
                "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
              }}
            >
              :
            </Text>
            <Box width="fit-content">
              <Text
                as="p"
                fontSize={7}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
                }}
              >
                {countdownValue.minutes < 10 && 0}
                {countdownValue.minutes}
              </Text>
              <Text
                as="p"
                fontSize={3}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "16px !important" }
                }}
              >
                Minutes
              </Text>
            </Box>
            <Text
              as="p"
              fontSize={7}
              mx={3}
              sx={{
                "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
              }}
            >
              :
            </Text>
            <Box width="fit-content">
              <Text
                as="p"
                fontSize={7}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "36px !important" }
                }}
              >
                {countdownValue.seconds < 10 && 0}
                {countdownValue.seconds}
              </Text>
              <Text
                as="p"
                fontSize={3}
                textAlign="center"
                sx={{
                  "@media screen and (max-width: 470px)": { fontSize: "16px !important" }
                }}
              >
                Secondes
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        px={6}
        sx={{
          position: "absolute",
          bottom: 120,
          left: 0,
          right: 0,
          "@media screen and (max-width: 900px)": { px: 3 },
          "@media screen and (max-width: 700px)": { display: "block" }
        }}
      >
        <Flex flex={1} justifyContent="center">
          <Text
            as="h1"
            display="flex"
            alignItems="center"
            fontSize="108px"
            color="#e7e6d6"
            textAlign="center"
            sx={{
              "@media screen and (max-width: 900px)": { fontSize: "64px" },
              "@media screen and (max-width: 700px)": { mb: 4 }
            }}
          >
            Gala
          </Text>
        </Flex>
        <Flex flex={1} textAlign="center">
          <Text
            as="p"
            display="flex"
            alignItems="center"
            fontSize="24px"
            color="#e7e6d6"
            fontWeight={700}
            mr="10%"
            sx={{ "@media screen and (max-width: 700px)": { mr: 0 } }}
          >
            Vous voulez participer à notre gala de fin d&apos;année ? Si vous êtes d&apos;Epitech, Iseg ou Eartsup ? Il
            vous suffit de remplir le formulaire
          </Text>
        </Flex>
      </Flex>
      <Box width="100%" sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 10, textAlign: "center" }}>
        <Link
          href="#form"
          display="inline-block"
          width={80}
          height={80}
          bg="#ff5f41"
          sx={{ transform: "rotate(45deg)", position: "relative", mb: -44, textDecoration: "none" }}
        >
          <Flex
            fontSize={7}
            color="white"
            sx={{ position: "absolute", left: 14, top: "-4px", transform: "rotate(-45deg)" }}
          >
            ꜜ
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};
