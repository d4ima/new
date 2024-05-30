import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import { formattedDate, formattedDevice } from "./formatter";

interface LoginAccountProps {
  username: string;
  loginDate?: Date;
  loginDevice: string;
  loginIP: string;
}

interface ExtendedFC<P> extends React.FC<P> {
  PreviewProps?: P;
}

const LoginAccount: ExtendedFC<Readonly<LoginAccountProps>> = ({
  username,
  loginDate,
  loginDevice,
  loginIP,
}) => {
  const formatDevice = formattedDevice(loginDevice);
  const formatDate = formattedDate(loginDate || new Date());

  return (
    <Html>
      <Head />
      <Preview>Recent login account</Preview>
      <Tailwind>
        <Body className="bg-black text-white">
          <Container>
            <Heading as="h1">
              {username} | {formatDate} | {formatDevice} | {loginIP}
            </Heading>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

LoginAccount.PreviewProps = {
  username: "ex",
  loginDevice:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  loginIP: "127.0.0.1",
} as LoginAccountProps;

export default LoginAccount;
