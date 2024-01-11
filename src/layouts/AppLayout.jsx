import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
