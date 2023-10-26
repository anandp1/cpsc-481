import MovieRow from "../components/landing/movie-row";
import Layout from "../components/shared/layout";
import { movieByTime } from "../lib/data";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col overflow-y-auto">
          {Object.keys(movieByTime).map((time, index) => {
            return (
              <MovieRow key={time} rowIndex={index} movieByTimeKey={time} />
            );
          })}
        </div>
      </Layout>
    </>
  );
}
