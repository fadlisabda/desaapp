<?= $this->extend('layout/template'); ?>
<?= $this->section('content'); ?>
<div class="container">
    <h2 class="my-3 text-center">Form Ubah Data Barang</h2>
    <form action="/epasarController/update/<?= $barang['id_barang']; ?>" method="post" enctype="multipart/form-data">
        <?= csrf_field(); ?>
        <input type="hidden" name="id_barang" value="<?= $barang['id_barang']; ?>">
        <input type="hidden" name="gambarLama" value="<?= $barang['gambar']; ?>">
        <div class="mb-3">
            <label for="nama" class="form-label">Nama Barang</label>
            <input type="text" class="form-control <?= ($validation->hasError('nama')) ? 'is-invalid' : ''; ?>" id="nama" name="nama" value="<?= (old('nama')) ? old('nama') : $barang['nama'] ?>">
            <div class="invalid-feedback">
                <?= $validation->getError('nama'); ?>
            </div>
        </div>
        <div class="mb-3">
            <label for="stok" class="form-label">Stok</label>
            <input type="number" class="form-control <?= ($validation->hasError('stok')) ? 'is-invalid' : ''; ?>" id="stok" name="stok" value="<?= (old('stok')) ? old('stok') : $barang['stok'] ?>"></input>
        </div>
        <div class="mb-3">
            <label class="form-label" for="gambar">Pilih Gambar</label>
            <input type="file" class="form-control <?= ($validation->hasError('gambar')) ? 'is-invalid' : ''; ?>" id="gambar" name="file_upload[]" multiple="true">
        </div>
        <div class="mb-3">
            <label for="harga" class="form-label">Harga</label>
            <input type="number" class="form-control <?= ($validation->hasError('harga')) ? 'is-invalid' : ''; ?>" id="harga" name="harga" value="<?= (old('harga')) ? old('harga') : $barang['harga'] ?>"></input>
            <div class="invalid-feedback">
                <?= $validation->getError('harga'); ?>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Ubah Data</button>
</div>
</form>
</div>
<?= $this->endSection(); ?>