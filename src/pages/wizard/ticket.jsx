import Layout from "../../components/shared/layout";
import MovieInformation from "../../components/wizard/movie-information";
import Progress from "../../components/wizard/movie-progress";
import TicketSelection from "../../components/wizard/ticket/ticket-section";
import { useSessionContext } from "../../contexts/SessionContext";

export default function TicketPage() {
  const { state } = useSessionContext();
  const movie = state.selectedMovie;

  return (
    <Layout>
      <div className="flex flex-col overflow-y-auto my-auto pb-20">
        <div className="flex flex-row justify-evenly grid-row-3 divide-x">
          <MovieInformation movie={movie} />

          <div className="px-4 w-3/4">
            <Progress section="Tickets" />
            <TicketSelection />
          </div>
        </div>
      </div>
    </Layout>
  );
}
