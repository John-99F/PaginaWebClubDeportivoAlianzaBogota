import data from "./dataInfo";

/* Obtener contenido textual */
export const getContenido = async () => {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.contenido);
    }, 300); // pequeño delay para simular fetch
  });
};

/* Actualizar contenido textual */
export const updateContenido = async (contenidoActualizado) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Actualiza el JSON localmente (solo en memoria, no en disco)
      data.contenido = { ...contenidoActualizado };
      console.log("Contenido actualizado:", data.contenido);
      resolve();
    }, 300);
  });
};

/* Obtener imágenes */
export const getImagenes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.imagenes);
    }, 300);
  });
};

/* Subir imagen (simulado) */
export const uploadImagen = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const nuevaImagen = {
        id: data.imagenes.length + 1,
        imagen_url: URL.createObjectURL(file), // URL temporal
        titulo: file.name,
      };
      data.imagenes.push(nuevaImagen);
      resolve(nuevaImagen);
    }, 300);
  });
};