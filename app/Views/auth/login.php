<?= $this->extend('auth/templates/index'); ?>
<?= $this->section('content'); ?>

<div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                            <div class="card-header">
                                <h3 class="text-center font-weight-light my-4"><?= lang('Auth.loginTitle') ?></h3>
                            </div>
                            <div class="card-body">
                                <?= view('Myth\Auth\Views\_message_block') ?>
                                <form action="<?= route_to('login') ?>" method="post">
                                    <?= csrf_field() ?>
                                    <?php if ($config->validFields === ['email']) : ?>
                                        <div class="form-floating mb-3">
                                            <input class="form-control <?php if (session('errors.login')) : ?>is-invalid<?php endif ?>" name="login" type="email" id="login" />
                                            <label for="login"><?= lang('Auth.email') ?></label>
                                            <div class="invalid-feedback">
                                                <?= session('errors.login') ?>
                                            </div>
                                        </div>
                                    <?php else : ?>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control <?php if (session('errors.login')) : ?>is-invalid<?php endif ?>" name="login" id="login">
                                            <label for="login"><?= lang('Auth.emailOrUsername') ?></label>
                                            <div class="invalid-feedback">
                                                <?= session('errors.login') ?>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                    <div class="form-floating mb-3">
                                        <input class="form-control <?php if (session('errors.password')) : ?>is-invalid<?php endif ?>" name="password" id="password" type="password" />
                                        <label for="password"><?= lang('Auth.password') ?></label>
                                        <div class="invalid-feedback">
                                            <?= session('errors.password') ?>
                                        </div>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" id="showPasswordd" type="checkbox" onclick="showPassword()" />
                                        <label class="form-check-label" for="showPasswordd">Show Password</label>
                                    </div>
                                    <?php if ($config->allowRemembering) : ?>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" id="inputRememberPassword" name="remember" type="checkbox" <?php if (old('remember')) : ?> checked <?php endif ?> />
                                            <label class="form-check-label" for="inputRememberPassword"><?= lang('Auth.rememberMe') ?></label>
                                        </div>
                                    <?php endif; ?>
                                    <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <?php if ($config->activeResetter) : ?>
                                            <a class="small text-success" href="<?= route_to('forgot') ?>"><?= lang('Auth.forgotYourPassword') ?></a>
                                        <?php endif; ?>
                                        <button class="btn btn-success" href="/"><?= lang('Auth.loginAction') ?></button>
                                    </div>
                                </form>
                            </div>
                            <?php if ($config->allowRegistration) : ?>
                                <div class="card-footer text-center py-3">
                                    <div class="small"><a class="text-success" href="<?= route_to('register') ?>"><?= lang('Auth.needAnAccount') ?></a></div>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
<?= $this->endSection(); ?>