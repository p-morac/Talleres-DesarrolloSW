import { Album } from './album.js';
import { dataAlbums } from './dataAlbums.js';

let albumsTbody: HTMLElement = document.getElementById('albums')!;
let averageYearElm: HTMLElement = document.getElementById('average-year')!;

renderAlbumsInTable(dataAlbums);
averageYearElm.innerHTML = `Promedio de año de lanzamiento: ${getAverageYear(dataAlbums).toFixed(0)}`;

function renderAlbumsInTable(albumList: Album[]): void {
  console.log('Desplegando álbumes');
  albumList.forEach((album, index) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${index + 1}</td>
                           <td>${album.nombre}</td>
                           <td>${album.año}</td>
                           <td>${album.discografica}</td>`;
    albumsTbody.appendChild(trElement);
  });
}

function getAverageYear(albums: Album[]): number {
  let totalYears = albums.reduce((total, album) => total + album.año, 0);
  return albums.length === 0 ? 0 : totalYears / albums.length;
}
