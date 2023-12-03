import Layout from "../../components/shared/layout";
import { movieByTime } from "../../lib/data";
import { format } from "date-fns";
import SeatingChart from "../../components/wizard/seating/seating_chart";
import Progress from "../../components/wizard/progress";
import MovieInformation from "../../components/wizard/movie-information";

export default function Seating() {
  const showingDate = new Date();
  const date = format(showingDate, "EEEE, MMMM do");

  return (
    <>
      <Layout>
        <div className="flex flex-col overflow-y-auto my-auto pb-20">
          <div className="flex flex-row  divide-x">
            <MovieInformation
              movie={movieByTime["6:00PM-6:59PM"][0]}
              date={date}
            />
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
