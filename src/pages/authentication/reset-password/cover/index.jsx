import { Card } from "@mui/material";
import bgImage from "../../../../assets/images/bg-reset-cover.jpeg";
import Boxes from "../../../../components/boxes";
import Buttons from "../../../../components/buttons";
import CoverLayout from "../../components/CoverLayout";
import Inputs from "../../../../components/inputs";
import Typography from "../../../../components/typography";

function Cover() {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <Boxes
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </Typography>
          <Typography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </Typography>
        </Boxes>
        <Boxes pt={4} pb={3} px={3}>
          <Boxes component="form" role="form">
            <Boxes mb={4}>
              <Inputs type="email" label="Email" variant="standard" fullWidth />
            </Boxes>
            <Boxes mt={6} mb={1}>
              <Buttons variant="gradient" color="info" fullWidth>
                reset
              </Buttons>
            </Boxes>
          </Boxes>
        </Boxes>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
