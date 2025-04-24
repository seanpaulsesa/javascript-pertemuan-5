let data = [
    { id: 1, nama_produk: "Roti Coklat", kategori: "Manis", jumlah: 20 },
    { id: 2, nama_produk: "Roti Keju", kategori: "Manis", jumlah: 15 },
    { id: 3, nama_produk: "Roti Sosis", kategori: "Gurih", jumlah: 10 },
    { id: 4, nama_produk: "Roti Pisang", kategori: "Manis", jumlah: 8 },
    { id: 5, nama_produk: "Roti Tawar", kategori: "Polos", jumlah: 25 },
    { id: 5, nama_produk: "Roti Tawar", kategori: "Polos", jumlah: 25 }
  ];

  const form = document.getElementById("produkForm");
  const tableBody = document.querySelector("#produkTable tbody");

  function renderTable() {
    tableBody.innerHTML = "";
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nama_produk}</td>
        <td>${item.kategori}</td>
        <td>${item.jumlah}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editProduk(${item.id})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduk(${item.id})">Hapus</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    const nama = document.getElementById("nama_produk").value;
    const kategori = document.getElementById("kategori").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);

    if (id) {
      const index = data.findIndex(item => item.id == id);
      data[index] = { id: parseInt(id), nama_produk: nama, kategori, jumlah };
    } else {
      const newId = data.length ? data[data.length - 1].id + 1 : 1;
      data.push({ id: newId, nama_produk: nama, kategori, jumlah });
    }

    form.reset();
    document.getElementById("id").value = "";
    renderTable();
  });

  function editProduk(id) {
    const produk = data.find(p => p.id === id);
    document.getElementById("id").value = produk.id;
    document.getElementById("nama_produk").value = produk.nama_produk;
    document.getElementById("kategori").value = produk.kategori;
    document.getElementById("jumlah").value = produk.jumlah;
  }

  function deleteProduk(id) {
    data = data.filter(p => p.id !== id);
    renderTable();
  }

  renderTable();