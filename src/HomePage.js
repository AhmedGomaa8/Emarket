import Landing from "./Landing/Landing";
import Services from "./Services/Services";
import Trend from "./trend/Trend";
import Discount from "./discount/Discount";
import ShopNow from "./shopnow/ShopNow";
import Blog from "./blog/Blog";

function HomePage() {
  return (
    <>
      <Landing />
      <Services />
      <ShopNow />
      <Trend />
      <Blog />
      <Discount />
    </>
  );
}
export default HomePage;
