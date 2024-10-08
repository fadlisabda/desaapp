$(document).ready(function () {
  $("#tablePeraturan").DataTable({
    dom: "Bfrtip",
    lengthMenu: [5, 10, 20, 50, 100, 200, 500],
    buttons: [
      "pageLength",
      {
        extend: "copyHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "csvHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "excelHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "pdfHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "print",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
    ],
    order: [],
    serverSide: true,
    ajax: {
      url: "peraturanDesaController/ambilData",
      type: "POST",
    },
  });
  $("#tableInventaris").DataTable({
    dom: "Bfrtip",
    lengthMenu: [5, 10, 20, 50, 100, 200, 500],
    buttons: [
      "pageLength",
      {
        extend: "copyHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "csvHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "excelHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "pdfHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "print",
        exportOptions: {
          columns: true,
        },
      },
    ],
    order: [],
    serverSide: true,
    ajax: {
      url: "ambilData",
      type: "POST",
    },
  });
  $("#tableLayananUmum").DataTable({
    dom: "Bfrtip",
    lengthMenu: [5, 10, 20, 50, 100, 200, 500],
    buttons: [
      "pageLength",
      {
        extend: "copyHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "csvHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "excelHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "pdfHtml5",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
      {
        extend: "print",
        exportOptions: {
          columns: [1, 2, 3],
        },
      },
    ],
    order: [],
    serverSide: true,
    columnDefs: [
      {
        targets: 4,
        render: function (data) {
          if (data == null) {
            return null;
          }
          let str = data.split("|");
          let hasil = "";
          for (let i = 0; i < str.length; i++) {
            hasil += "<a href=" + window.location.origin + "/file/fileSyaratSurat/" + str[i] + " target=_blank>" + str[i] + "</a><br>";
          }
          return hasil;
        },
      },
    ],
    ajax: {
      url: "ambilData",
      type: "POST",
    },
  });

  $("#tablePenerimaanPbb").DataTable({
    dom: "Bfrtip",
    lengthMenu: [5, 10, 20, 50, 100, 200, 500],
    buttons: [
      "pageLength",
      {
        extend: "copyHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "csvHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "excelHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "pdfHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
      {
        extend: "print",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6],
        },
      },
    ],
    order: [],
    serverSide: true,
    columnDefs: [
      {
        targets: 6,
        render: function (data) {
          if (data == null) {
            return null;
          }
          return "<a href=" + window.location.origin + "/gambar/buktipembayaran/" + data + " target=_blank>" + data + "</a><br>";
        },
      },
    ],
    ajax: {
      url: "ambilData",
      type: "POST",
    },
  });

  $("#tableBantuansosial").DataTable({
    dom: "Bfrtip",
    lengthMenu: [5, 10, 20, 50, 100, 200, 500],
    buttons: [
      "pageLength",
      {
        extend: "copyHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      {
        extend: "csvHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      {
        extend: "excelHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      {
        extend: "pdfHtml5",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      {
        extend: "print",
        exportOptions: {
          columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
    ],
    order: [],
    serverSide: true,
    columnDefs: [
      {
        targets: 12,
        render: function (data) {
          if (data == null) {
            return null;
          }
          let str = data.split("|");
          let hasil = "";
          for (let i = 0; i < str.length; i++) {
            hasil += "<a href=" + window.location.origin + "/file/bantuansosial/" + str[i] + " target=_blank>" + str[i] + "</a><br>";
          }
          return hasil;
        },
      },
    ],
    ajax: {
      url: "ambilData",
      type: "POST",
    },
  });
});

$(".import").click(function () {
  $(".modal-title").text("Add Data");
  $("#importModal").modal("show");
  $("#actionn").val("Add");
  $("#submit_buttonn").val("Add");
});

$("#formImportPeraturan").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "peraturanDesaController/import",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_buttonn").val("loading...");
      $("#submit_buttonn").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_buttonn").val("Add");
      $("#submit_buttonn").attr("disabled", false);
      $("#importModal").modal("hide");
      if (data.message == "") {
        Swal.fire({
          title: "File Data Peraturan ",
          text: "Tidak Sesuai!",
          icon: "error",
        });
      } else {
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Peraturan ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
      }
      $("#tablePeraturan").DataTable().ajax.reload();
    },
  });
});

$("#formImportInventaris").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "import",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      $("#importModal").modal("hide");
      if (data.message == "") {
        Swal.fire({
          title: "File Data Inventaris ",
          text: "Tidak Sesuai!",
          icon: "error",
        });
      } else {
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Inventaris ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
      }
      $("#tableInventarisKekayaanDesa").DataTable().ajax.reload();
    },
  });
});

$("#formImportLayananUmum").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "import",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      $("#importModal").modal("hide");
      if (data.message == "") {
        Swal.fire({
          title: "File Data Layanan ",
          text: "Tidak Sesuai!",
          icon: "error",
        });
      } else {
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Layanan ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
      }
      $("#tableLayananUmum").DataTable().ajax.reload();
    },
  });
});

$("#formImportPenerimaanPbb").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "import",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      $("#importModal").modal("hide");
      if (data.message == "") {
        Swal.fire({
          title: "File Data Perpajakan ",
          text: "Tidak Sesuai!",
          icon: "error",
        });
      } else {
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Perpajakan ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
      }
      $("#tablePenerimaanPbb").DataTable().ajax.reload();
    },
  });
});

$("#bantuanSosialImport_form").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "import",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      $("#importModal").modal("hide");
      if (data.message == "") {
        Swal.fire({
          title: "File Data Bantuan Sosial ",
          text: "Tidak Sesuai!",
          icon: "error",
        });
      } else {
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Bantuan Sosial ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
      }
      $("#tableBantuanSosial").DataTable().ajax.reload();
    },
  });
});

$(".tambahBantuanSosial").click(function () {
  $("#formBantuanSosial").val("");
  $("#nomorktp").val("");
  $("#namapenerima").val("");
  $("#nohp").val("");
  $("#jenisbantuan").prop("selectedIndex", 0);
  $("#statuspenerimaan").prop("selectedIndex", 0);
  $('input[id="pria"]').prop("checked", true);
  $("#alamat").val("");
  $("#pekerjaan").val("");
  $("#norekening").val("");
  $("#tgllahir").val("");
  $("#tglpenerimaan").val("");
  $("#fileBantuan").val("");
  $(".modal-title").text("Add Data");
  $("#nomorktp_error").text("");
  $("#namapenerima_error").text("");
  $("#nohp_error").text("");
  $("#jenisbantuan_error").text("");
  $("#statuspenerimaan_error").text("");
  $("#alamat_error").text("");
  $("#pekerjaan_error").text("");
  $("#norekening_error").text("");
  $("#tgllahir_error").text("");
  $("#tglpenerimaan_error").text("");
  $("#formModal").modal("show");
  $("#action").val("Add");
  $("#submit_button").val("Add");
});

$("#formBantuanSosial").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "action",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      if (data.error == "yes") {
        $("#nomorktp_error").text(data.nomorktp_error);
        $("#namapenerima_error").text(data.namapenerima_error);
        $("#nohp_error").text(data.nohp_error);
        $("#alamat_error").text(data.alamat_error);
        $("#pekerjaan_error").text(data.pekerjaan_error);
        $("#norekening_error").text(data.norekening_error);
        $("#tgllahir_error").text(data.tgllahir_error);
        $("#tglpenerimaan_error").text(data.tglpenerimaan_error);
      } else {
        $("#formModal").modal("hide");
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Bantuan Sosial ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
        $("#tableBantuanSosial").DataTable().ajax.reload();
      }
    },
  });
});

$(".tambahPenerimaanPbb").click(function () {
  $("#formPenerimaanPbb").val("");
  $("#nop").val("");
  $("#nohp").val("");
  $("#nama").val("");
  $("#totalyangdibayar").val("");
  $("#filePajak").val("");
  $(".modal-title").text("Add Data");
  $("#nop_error").text("");
  $("#nohp_error").text("");
  $("#nama_error").text("");
  $("#totalyangdibayar_error").text("");
  $("#file_error").text("");
  $("#formModal").modal("show");
  $("#action").val("Add");
  $("#submit_button").val("Add");
});
$("#formPenerimaanPbb").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "action",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      if (data.error == "yes") {
        $("#nop_error").text(data.nop_error);
        $("#nohp_error").text(data.nohp_error);
        $("#nama_error").text(data.nama_error);
        $("#totalyangdibayar_error").text(data.totalyangdibayar_error);
        $("#file_error").text(data.file_error);
      } else {
        $("#formModal").modal("hide");
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Perpajakan ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
        $("#tablePenerimaanPbb").DataTable().ajax.reload();
      }
    },
  });
});

$(".tambahLayananUmum").click(function () {
  $("#formLayananUmum").val("");
  $("#judul").val("");
  $("#nohp").val("");
  $("#usernameoremail").val("");
  $("#fileLayanan").val("");
  $(".modal-title").text("Add Data");
  $("#judul_error").text("");
  $("#nohp_error").text("");
  $("#usernameoremail_error").text("");
  $("#formModal").modal("show");
  $("#action").val("Add");
  $("#submit_button").val("Add");
});

$("#formLayananUmum").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "action",
    method: "POST",
    processData: false,
    contentType: false,
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      if (data.error == "yes") {
        $("#judul_error").text(data.judul_error);
        $("#nohp_error").text(data.nohp_error);
        $("#usernameoremail_error").text(data.usernameoremail_error);
      } else {
        $("#formModal").modal("hide");
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Layanan Umum ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
        $("#tableLayananUmum").DataTable().ajax.reload();
      }
    },
  });
});

$(".tambahPeraturan").click(function () {
  $("#formPeraturan").val("");
  $("#nomorTglPeraturanDesa").val("");
  $("#tentang").val("");
  $("#uraiansingkat").val("");
  $(".modal-title").text("Add Data");
  $("#nomorTglPeraturanDesa_error").text("");
  $("#tentang_error").text("");
  $("#uraiansingkat_error").text("");
  $("#formModal").modal("show");
  $("#action").val("Add");
  $("#submit_button").val("Add");
});
$("#formPeraturan").on("submit", function (event) {
  event.preventDefault();
  $.ajax({
    url: "peraturanDesaController/action",
    method: "POST",
    data: $(this).serialize(),
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      if (data.error == "yes") {
        $("#nomorTglPeraturanDesa_error").text(data.nomorTglPeraturanDesa_error);
        $("#tentang_error").text(data.tentang_error);
        $("#uraiansingkat_error").text(data.uraiansingkat_error);
      } else {
        $("#formModal").modal("hide");
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Peraturan ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
        $("#tablePeraturan").DataTable().ajax.reload();
      }
    },
  });
});

$(".tambahInventaris").click(function () {
  $("#formInventaris").val("");
  $("#jenisbarang").val("");
  $("#lokasi").val("");
  $("#jumlah").val("");
  $("#sumberpembiayaan").val("");
  $('input[id="baik"]').prop("checked", true);
  $("#akhir").prop("selectedIndex", 0);
  $("#perkiraanbiaya").val("");
  $("#ket").val("");
  $(".modal-title").text("Add Data");
  $("#jenisbarang_error").text("");
  $("#lokasi_error").text("");
  $("#jumlah_error").text("");
  $("#sumberpembiayaan_error").text("");
  $("#perkiraanbiaya_error").text("");
  $("#ket_error").text("");
  $("#formModal").modal("show");
  $("#action").val("Add");
  $("#submit_button").val("Add");
});
$("#formInventaris").on("submit", function (event) {
  event.preventDefault();
  $.ajax({
    url: "action",
    method: "POST",
    data: $(this).serialize(),
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Add");
      $("#submit_button").attr("disabled", false);
      if (data.error == "yes") {
        $("#jenisbarang_error").text(data.jenisbarang_error);
        $("#lokasi_error").text(data.lokasi_error);
        $("#jumlah_error").text(data.jumlah_error);
        $("#sumberpembiayaan_error").text(data.sumberpembiayaan_error);
        $("#perkiraanbiaya_error").text(data.perkiraanbiaya_error);
        $("#ket_error").text(data.ket_error);
      } else {
        $("#formModal").modal("hide");
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data Inventaris Kekayaan",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
        $("#tableInventaris").DataTable().ajax.reload();
      }
    },
  });
});

$(document).on("click", ".editPeraturan", function () {
  let id = $(this).data("id");
  $.ajax({
    url: "peraturanDesaController/edit",
    method: "POST",
    data: { id: id },
    dataType: "JSON",
    success: function (data) {
      $("#nomorTglPeraturanDesa").val(data.nomor_tgl_peraturan);
      $("#tentang").val(data.tentang);
      $("#uraiansingkat").val(data.uraiansingkat);
      $(".modal-title").text("Edit Data");
      $("#nomorTglPeraturanDesa_error").text("");
      $("#tentang_error").text("");
      $("#uraiansingkat_error").text("");
      $("#action").val("Edit");
      $("#submit_button").val("Edit");
      $("#formModal").modal("show");
      $("#hidden_id").val(id);
    },
  });
});

$(document).on("click", ".editInventaris", function () {
  let id = $(this).data("id");
  $.ajax({
    url: "edit",
    method: "POST",
    data: { id: id },
    dataType: "JSON",
    success: function (data) {
      $("#jenisbarang").val(data.jenis_barang);
      $("#lokasi").val(data.lokasi);
      $("#jumlah").val(data.jumlah);
      $("#sumberpembiayaan").val(data.sumber_pembiayaan);
      $("input[name=awal][value=" + data.keadaan_barang_bangunan_awal_tahun + "]").prop("checked", true);
      $("#akhir").val(data.keadaan_barang_bangunan_akhir_tahun);
      $("#perkiraanbiaya").val(data.perkiraan_biaya);
      $("#ket").val(data.ket);
      $(".modal-title").text("Edit Data");
      $("#jenisbarang_error").text("");
      $("#lokasi_error").text("");
      $("#jumlah_error").text("");
      $("#sumberpembiayaan_error").text("");
      $("#perkiraanbiaya_error").text("");
      $("#ket_error").text("");
      $("#action").val("Edit");
      $("#submit_button").val("Edit");
      $("#formModal").modal("show");
      $("#hidden_id").val(id);
    },
  });
});

$(document).on("click", ".editLayananUmum", function () {
  let id = $(this).data("id");
  $.ajax({
    url: "edit",
    method: "POST",
    data: { id: id },
    dataType: "JSON",
    success: function (data) {
      $("#file_lama").val(data.file);
      $("#judul").val(data.judul);
      $("#nohp").val(data.nohp);
      $("#usernameoremail").val(data.usernameoremail);
      $(".modal-title").text("Edit Data");
      $("#judul_error").text("");
      $("#nohp_error").text("");
      $("#usernameoremail_error").text("");
      $("#action").val("Edit");
      $("#submit_button").val("Edit");
      $("#formModal").modal("show");
      $("#hidden_id").val(id);
    },
  });
});

$(document).on("click", ".editPenerimaanPbb", function () {
  let id = $(this).data("id");
  $.ajax({
    url: "edit",
    method: "POST",
    data: { id: id },
    dataType: "JSON",
    success: function (data) {
      $("#gambar_lama").val(data.gambar);
      $("#nop").val(data.nomor_objek_pajak);
      $("#nohp").val(data.nohp);
      $("#nama").val(data.nama_wajib_pajak);
      $("#totalyangdibayar").val(data.total_pbb_dibayar);
      $(".modal-title").text("Edit Data");
      $("#nop_error").text("");
      $("#nohp_error").text("");
      $("#nama_error").text("");
      $("#totalyangdibayar_error").text("");
      $("#file_error").text("");
      $("#action").val("Edit");
      $("#submit_button").val("Edit");
      $("#formModal").modal("show");
      $("#hidden_id").val(id);
    },
  });
});

$(document).on("click", ".editBantuanSosial", function () {
  let id = $(this).data("id");
  $.ajax({
    url: "edit",
    method: "POST",
    data: { id: id },
    dataType: "JSON",
    success: function (data) {
      $("#file_lama").val(data.file);
      $("#nomorktp").val(data.nomorktp);
      $("#namapenerima").val(data.namapenerima);
      $("#nohp").val(data.nohp);
      $("#jenisbantuan").val(data.jenisbantuan);
      $("#statuspenerimaan").val(data.statuspenerimaan);
      $("input[name=jeniskelamin][value=" + data.jeniskelamin + "]").prop("checked", true);
      $("#alamat").val(data.alamat);
      $("#pekerjaan").val(data.pekerjaan);
      $("#norekening").val(data.norekening);
      $("#tgllahir").val(data.tanggallahir);
      $("#tglpenerimaan").val(data.tanggalpenerimaan);
      $(".modal-title").text("Edit Data");
      $("#nomorktp_error").text("");
      $("#namapenerima_error").text("");
      $("#nohp_error").text("");
      $("#jenisbantuan_error").text("");
      $("#statuspenerimaan_error").text("");
      $("#alamat_error").text("");
      $("#pekerjaan_error").text("");
      $("#norekening_error").text("");
      $("#action").val("Edit");
      $("#submit_button").val("Edit");
      $("#formModal").modal("show");
      $("#hidden_id").val(id);
    },
  });
});

$("#formMyProfile").on("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "myProfile/action",
    processData: false,
    contentType: false,
    method: "POST",
    data: formData,
    dataType: "JSON",
    beforeSend: function () {
      $("#submit_button").val("loading...");
      $("#submit_button").attr("disabled", "disabled");
    },
    success: function (data) {
      $("#submit_button").val("Edit");
      $("#submit_button").attr("disabled", false);
      if (data.error == "yes") {
        $("#email_error").text(data.email_error);
        $("#username_error").text(data.username_error);
        $("#user_image_error").text(data.user_image_error);
      } else {
        $("#formModal").modal("hide");
        const flashData = data.message;
        if (flashData) {
          Swal.fire({
            title: "Data User ",
            text: "Berhasil " + flashData,
            icon: "success",
          });
        }
        window.location.reload();
      }
    },
  });
});

$(document).on("click", ".editMyProfile", function () {
  let id = $(this).data("id").replace(/\D/g, "");
  $.ajax({
    url: "myProfile/edit",
    method: "POST",
    data: { id: id },
    dataType: "JSON",
    success: function (data) {
      $("#email").val(data.email);
      $("#username").val(data.username);
      $("#fullname").val(data.fullname);
      $(".modal-title").text("Edit Data");
      $("#email_error").text("");
      $("#username_error").text("");
      $("#user_image_error").text("");
      $("#formModal").modal("show");
      $("#hidden_id").val(id);
    },
  });
});

$(document).on("click", ".deleteUserList", function () {
  let id = $(this).data("id");
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data user akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        data: {
          id: id,
          _method: "DELETE",
        },
        url: "userListController/delete",
        success: function (data) {
          console.log(data);
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data User ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          window.location.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deletePeraturan", function () {
  let id = $(this).data("id");
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data peraturan akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        data: {
          id: id,
          _method: "DELETE",
        },
        url: "peraturanDesaController/delete",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Peraturan ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tablePeraturan").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteInventaris", function () {
  let penyebabdihapus = prompt("Kenapa Dihapus ?");
  if (penyebabdihapus != null) {
    let id = $(this).data("id");
    Swal.fire({
      title: "Apakah anda yakin",
      text: "data inventaris kekayaan akan dihapus",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus Data!",
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "POST",
          data: {
            id: id,
            penyebabdihapus: penyebabdihapus,
            _method: "DELETE",
          },
          url: "delete",
          success: function (data) {
            const flashData = data;
            if (flashData) {
              Swal.fire({
                title: "Data Inventaris Kekayaan ",
                text: "Berhasil " + flashData,
                icon: "success",
              });
            }
            $("#tableInventaris").DataTable().ajax.reload();
          },
        });
      }
    });
  }
});

$(document).on("click", ".deleteLayananUmum", function () {
  let id = $(this).data("id");
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data layanan umum akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        data: {
          id: id,
          _method: "DELETE",
        },
        url: "delete",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Layanan Umum ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tableLayananUmum").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deletePenerimaanPbb", function () {
  let id = $(this).data("id");
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data perpajakan akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        data: {
          id: id,
          _method: "DELETE",
        },
        url: "delete",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Perpajakan ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tablePenerimaanPbb").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteBantuanSosial", function () {
  let id = $(this).data("id");
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data bantuan sosial akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        data: {
          id: id,
          _method: "DELETE",
        },
        url: "delete",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Bantuan Sosial ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tableBantuanSosial").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deletePenerimaanPbbUser", function () {
  let id = $(this).data("id");
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data perpajakan akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        data: {
          id: id,
          _method: "DELETE",
        },
        url: "deleteUser",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Perpajakan ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          window.location.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteAllPeraturan", function () {
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data peraturan akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      let checkboxes = document.querySelectorAll('input[name="checkbox_value[]"]:checked');
      var vals = [];
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        vals.push(checkboxes[i].value);
      }
      $.ajax({
        type: "POST",
        data: {
          id: vals,
          _method: "DELETE",
        },
        url: "peraturanDesaController/ceklisDeleteButton",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Peraturan ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tablePeraturan").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteAllLayanan", function () {
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data layanan umum akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      let checkboxes = document.querySelectorAll('input[name="checkbox_value[]"]:checked');
      var vals = [];
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        vals.push(checkboxes[i].value);
      }
      $.ajax({
        type: "POST",
        data: {
          id: vals,
          _method: "DELETE",
        },
        url: "ceklisDeleteButton",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Layanan Umum ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tableLayananUmum").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteAllPenerimaan", function () {
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data perpajakan akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      let checkboxes = document.querySelectorAll('input[name="checkbox_value[]"]:checked');
      var vals = [];
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        vals.push(checkboxes[i].value);
      }
      $.ajax({
        type: "POST",
        data: {
          id: vals,
          _method: "DELETE",
        },
        url: "ceklisDeleteButton",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Perpajakan ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tablePenerimaan").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteAllBantuanSosial", function () {
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data bantuan sosial akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      let checkboxes = document.querySelectorAll('input[name="checkbox_value[]"]:checked');
      var vals = [];
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        vals.push(checkboxes[i].value);
      }
      $.ajax({
        type: "POST",
        data: {
          id: vals,
          _method: "DELETE",
        },
        url: "ceklisDeleteButton",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data Bantuan Sosial ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          $("#tableBantuanSosial").DataTable().ajax.reload();
        },
      });
    }
  });
});

$(document).on("click", ".deleteAllUserList", function () {
  Swal.fire({
    title: "Apakah anda yakin",
    text: "data user akan dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus Data!",
  }).then((result) => {
    if (result.isConfirmed) {
      let checkboxes = document.querySelectorAll('input[name="checkbox_value[]"]:checked');
      var vals = [];
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        vals.push(checkboxes[i].value);
      }
      $.ajax({
        type: "POST",
        data: {
          id: vals,
          _method: "DELETE",
        },
        url: "userListController/ceklisDeleteButton",
        success: function (data) {
          const flashData = data;
          if (flashData) {
            Swal.fire({
              title: "Data User ",
              text: "Berhasil " + flashData,
              icon: "success",
            });
          }
          window.location.reload();
        },
      });
    }
  });
});

function selects() {
  var ele = document.getElementsByName("checkbox_value[]");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i]) ele[i].checked = true;
  }
}
