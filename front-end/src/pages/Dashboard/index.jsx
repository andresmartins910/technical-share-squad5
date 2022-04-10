import { Header } from "../../components/Header";
import { SearchContainer } from "./SearchContainer";
import { Favorites } from "./Favorites";
import { MostAvailable } from "./MostAvailable";
import { FindMentors } from "./FindMentors";
import "./styles.css";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <SearchContainer />
      {/* <Favorites /> */}
      <MostAvailable />
      <FindMentors />
    </div>
  );
};
