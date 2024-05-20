
import { Hero } from "../../components/home/Hero";
import { Description } from "../../components/home/Description";

export default function HomeLayout({ children }) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}