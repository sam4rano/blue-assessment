import AuthCustomized from "@/components/AuthCustomized";
import Footer from "@/components/Footer";
import Login from "./containers/auth/Login";

export default function Home() {
  return (
    <AuthCustomized>
      <Login />
      <Footer />
    </AuthCustomized>
  );
}
