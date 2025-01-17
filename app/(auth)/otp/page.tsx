import Otp from "@/app/containers/auth/Otp";
import AuthCustomized from "@/components/AuthCustomized";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <AuthCustomized>
      <Otp />
      <Footer />
    </AuthCustomized>
  );
}
