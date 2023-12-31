import MovieInformation from "../../components/wizard/movie-information";
import Layout from "../../components/shared/layout";
import ShowtimeCalendar from "../../components/showtime/showtime-calendar";
import { useSessionContext } from "../../contexts/SessionContext";
import Progress from "../../components/wizard/movie-progress";

export default function Showtime() {
  const { state } = useSessionContext();
  const movie = state.selectedMovie;

  return (
    <>
      <Layout>
        <div className="flex flex-col overflow-y-auto my-auto pb-20">
          <div className="flex flex-row divide-x">
            <MovieInformation movie={movie} />
            <div className="px-4 w-3/4">
              <Progress section="Movie Selection" />
              <ShowtimeCalendar />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
