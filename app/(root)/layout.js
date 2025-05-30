import FooterComponent from "@/components/footer/FooterComponent";
import NavBarComponent from "@/components/header/NavBarComponent";
export default function RootLayout({ children }) {
  return (
    <div>
      <div className=" py-8 flex flex-col gap-8">
        <NavBarComponent />
        {children}
      </div>
      <FooterComponent />
    </div>
  );
}
