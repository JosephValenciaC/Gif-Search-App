export const GifItem = ({ title, url }) => {

  
  const handleDescargarImagen = () => {
    const link = document.createElement('a');
    link.href = url; // O utiliza la URL de la imagen directamente si la pasaste como prop
    link.download = title; // Nombre que tendrá el archivo descargado
    link.target = '_blank';
    link.click();
  }
  

  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
      <button onClick={handleDescargarImagen}>Ver en sitio original</button>
    </div>
  );
};
