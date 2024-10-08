<?= $this->extend('layout/template'); ?>
<?= $this->section('content'); ?>
<div class="container">
    <h2 class="my-3 text-center">Form Tambah Data Berita</h2>
    <form action="/beritaController/save" method="post" enctype="multipart/form-data">
        <?= csrf_field(); ?>
        <div class="mb-3">
            <label for="judul" class="form-label">Judul</label>
            <input type="text" class="form-control <?= ($validation->hasError('judul')) ? 'is-invalid' : ''; ?>" id="judul" name="judul" autofocus value="<?= old('judul'); ?>">
            <div class="invalid-feedback">
                <?= $validation->getError('judul'); ?>
            </div>
        </div>
        <div class="mb-3">
            <label for="keterangan" class="form-label">Keterangan</label>
            <textarea type="text" class="form-control <?= ($validation->hasError('keterangan')) ? 'is-invalid' : ''; ?>" id="keterangan" name="keterangan" rows="3"><?= old('keterangan'); ?></textarea>
            <div class="invalid-feedback">
                <?= $validation->getError('keterangan'); ?>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label" for="file">Pilih File</label>
            <input type="file" class="form-control <?= ($validation->hasError('file')) ? 'is-invalid' : ''; ?>" id="file" name="file_upload[]" multiple="true">
        </div>
        <button type="submit" class="btn btn-primary">Tambah Data</button>
        <script>
            CKEDITOR.replace('keterangan');
        </script>
</div>
</form>
</div>
<?= $this->endSection(); ?>