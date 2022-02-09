# Maintainer: f4iey <f4iey@f6kgl.ampr.org>
pkgname=radiosonde_auto_rx
pkgver=1.5.9
pkgrel=1
pkgdesc="Automatically Track Radiosonde Launches using RTLSDR"
arch=('x86_64')
url="https://github.com/projecthorus/radiosonde_auto_rx"
license=('GPL-3')
makedepends=(cmake gcc)
depends=(python python-numpy python-setuptools python-crcmod python-requests python-dateutil python-pip python-flask python-flask-socketio python-semver python-simplekml sox git libtool usbutils libusb rng-tools libsamplerate lapack rtl-sdr)
source=(https://codeload.github.com/projecthorus/$pkgname/tar.gz/refs/tags/v$pkgver)
sha256sums=('SKIP')

prepare() {
    mkdir -p $srcdir/build
    tar -C $srcdir/build/ -xvf v$pkgver
}

build() {
    cd $srcdir/build/$pkgname-$pkgver/auto_rx
    ./build.sh || return 1
}

package() {
    cd "${srcdir}/build/$pkgname-$pkgver"
    install -Dm755 "auto_rx/station.cfg.example" "$pkgdir/opt/$pkgname/auto_rx/station.cfg"
    install -Dm755 "auto_rx/auto_rx.py" "$pkgdir/opt/$pkgname/auto_rx/auto_rx.py"
    # Setting defconfig for systemd
    sed -i "s/home\/pi/opt/g" "auto_rx/auto_rx.service"
    sed -i "s/User=pi//" "auto_rx/auto_rx.service"
    install -Dm644 "auto_rx/auto_rx.service" "$pkgdir/etc/systemd/system/auto_rx.service"
    # auto_rx folder
    install -dm755 "$pkgdir/opt/$pkgname/auto_rx/log"
    cp -r "auto_rx/test" "$pkgdir/opt/$pkgname/auto_rx/"
    cp -r "auto_rx/utils" "$pkgdir/opt/$pkgname/auto_rx/"
    cp -r "auto_rx/autorx" "$pkgdir/opt/$pkgname/auto_rx/"
    # Shared libraries
    install -Dm755 "scan/dft_detect" "$pkgdir/opt/$pkgname/auto_rx/dft_detect"
    install -Dm755 "utils/fsk_demod" "$pkgdir/opt/$pkgname/auto_rx/fsk_demod"
    install -Dm755 "imet/imet1rs_dft" "$pkgdir/opt/$pkgname/auto_rx/imet1rs_dft"
    install -Dm755 "mk2a/mk2mod" "$pkgdir/opt/$pkgname/auto_rx/mk2mod"
    install -Dm755 "demod/mod/rs41mod" "$pkgdir/opt/$pkgname/auto_rx/rs41mod"
    install -Dm755 "demod/mod/dfm09mod" "$pkgdir/opt/$pkgname/auto_rx/dfm09mod"
    install -Dm755 "demod/mod/m10mod" "$pkgdir/opt/$pkgname/auto_rx/m10mod"
    install -Dm755 "demod/mod/m20mod" "$pkgdir/opt/$pkgname/auto_rx/m20mod"
    install -Dm755 "demod/mod/rs92mod" "$pkgdir/opt/$pkgname/auto_rx/rs92mod"
    install -Dm755 "demod/mod/lms6Xmod" "$pkgdir/opt/$pkgname/auto_rx/lms6Xmod"
    install -Dm755 "demod/mod/meisei100mod" "$pkgdir/opt/$pkgname/auto_rx/meisei100mod"
    install -Dm755 "demod/mod/imet54mod" "$pkgdir/opt/$pkgname/auto_rx/imet54mod"
    install -Dm755 "demod/mod/mp3h1mod" "$pkgdir/opt/$pkgname/auto_rx/mp3h1mod"
} 
