import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>

    {
      isLoading &&(<h2>Cargando...</h2>)
    }

      <div className="card-grid">
        {images.map((images) => (
          <GifItem
            key={images.id}
            {...images} // Tecnica para madar todos los props
          />
        ))}
      </div>
    </>
  );
};
