import Layout from "../../components/shared/layout";
import { movieByTime } from "../../lib/data";
import SeatingChart from "../../components/wizard/seating/seating_chart";
import Progress from "../../components/wizard/movie-progress";
import MovieInformation from "../../components/wizard/movie-information";
import { useSessionContext } from "../../contexts/SessionContext";

export default function Seating() {
  const { state } = useSessionContext();
  const movie = state.selectedMovie;

  return (
    <>
      <Layout>
        <div className="flex flex-col overflow-y-auto my-auto pb-20">
          <div className="flex flex-row  divide-x">
            <MovieInformation movie={movie} />
            <div className="px-4 w-3/4">
              <Progress section="Seat Selection" />
              <SeatingChart />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
