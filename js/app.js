document.addEventListener('DOMContentLoaded', function() {
    // Muat data karya dari file JSON
    fetch('data/karya.json')
        .then(response => response.json())
        .then(data => {
            const karyaList = document.getElementById('karya-list');
            data.karya.forEach(karya => {
                const karyaItem = document.createElement('div');
                karyaItem.classList.add('karya-item');
                karyaItem.innerHTML = `
                    <h3>${karya.judul}</h3>
                    <p><strong>${karya.penulis}</strong></p>
                    <p>"${karya.kutipan}"</p>
                `;
                karyaList.appendChild(karyaItem);
            });
        });
});
