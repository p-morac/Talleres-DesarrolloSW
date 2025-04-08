import { dataAlbums } from './dataAlbums.js';

const albumsTbody = document.getElementById('albums');
const averageYearElm = document.getElementById('average-year');

renderAlbumsInTable(dataAlbums);
averageYearElm.innerHTML = "Promedio de año de lanzamiento: " + getAverageYear(dataAlbums).toFixed(0);

function renderAlbumsInTable(albumList) {
    console.log('Desplegando álbumes');
    albumList.forEach(function (album, index) {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${index + 1}</td>
                               <td>${album.nombre}</td>
                               <td>${album.año}</td>
                               <td>${album.discografica}</td>`;
        albumsTbody.appendChild(trElement);
    });
}

function getAverageYear(albums) {
    const totalYears = albums.reduce((total, album) => total + album.año, 0);
    return albums.length === 0 ? 0 : totalYears / albums.length;
}
