import { useState } from "react";
import MovieModal from "../components/modal/movie-modal";
import Layout from "../components/shared/layout";

export default function MovieList() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const handleClose = () => setIsMovieModalOpen(false);

  return (
    <>
      <Layout>
        {isMovieModalOpen && (
          <MovieModal
            isMovieModalOpen={isMovieModalOpen}
            handleClose={handleClose}
          />
        )}
        <div className="flex flex-col overflow-y-auto">
          <button onClick={() => setIsMovieModalOpen(true)}>clickme </button>
        </div>
      </Layout>
    </>
  );
}
