import { format } from "date-fns";
import MovieComponent from "../../components/landing/movie";
import Layout from "../../components/shared/layout";
import MovieInformation from "../../components/wizard/movie-information";
import Progress from "../../components/wizard/progress";
import TicketSelection from "../../components/wizard/ticket/ticket-section";
import { movieByTime } from "../../lib/data";

export default function TicketPage() {
  const showingDate = new Date();
  const date = format(showingDate, "EEEE, MMMM do");

  return (
    <Layout>
      <div className="flex flex-col overflow-y-auto my-auto pb-20">
        <div className="flex flex-row justify-evenly grid-row-3 divide-x">
          <MovieInformation
            movie={movieByTime["6:00PM-6:59PM"][0]}
            date={date}
          />
          <div className="px-4 w-3/4">
            <Progress section="Tickets" />
            <TicketSelection />
          </div>
        </div>
      </div>
    </Layout>
  );
}
