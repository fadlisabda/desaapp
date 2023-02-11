<?= $this->extend('layout/template'); ?>

<?= $this->section('content'); ?>
<div class="container">
    <div class="row text-center mb-3">
        <div class="col">
            <h2 style="color: green;">Publikasi Umum Detail</h2>
        </div>
    </div>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <div id="carouselExampleControls" class="carousel carousel-dark slide m-auto" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <?php $str = explode('|', $data['gambar']); ?>
                        <?php for ($i = 0; $i < count($str); $i++) : ?>
                            <?php if (!empty($data['gambar'])) : ?>
                                <div class="carousel-item active">
                                    <img src="<?= base_url('gambar/' . $str[$i]); ?>" class="d-block w-100" alt="fotoberita">
                                </div>
                            <?php endif; ?>
                        <?php endfor; ?>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden dark">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"><?= $data['judul']; ?></h5>
                    <p class="card-text" style="text-align: justify;"><?= $data['keterangan']; ?></p>
                    <p class="card-text"><small class="text-muted"><?= $data['created_at']; ?></small></p>
                    <a href="/beritaController/edit/<?= $data['id_berita']; ?>" class="btn btn-warning mb-1">Edit</a>
                    <form action="/beritaController/delete/<?= $data['id_berita']; ?>" method="post" class="d-inline tombol-hapus" id="tombol-hapus">
                        <?= csrf_field(); ?>
                        <input type="hidden" name="_method" value="DELETE">
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                    <br>
                    <a href="/profil" class="btn btn-success">Kembali ke profil desa</a>
                </div>
            </div>
        </div>
    </div>
</div>
<?= $this->endSection(); ?>