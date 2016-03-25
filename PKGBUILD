# Maintainer: Chipster Julien <julien dot chipster @ archlinux dot fr>

pkgname=wallxplanet
pkgver=0.0.1
pkgrel=1
pkgdesc="Generate earth wall with cloud"
arch=('any')
url="www.google.fr"
license=('WTFPL')
depends=('xplanet' 'wget')
backup=('etc/wallxplanet/xplanet.conf')
source=("$pkgname-$pkgver.tar.gz" "https://upload.wikimedia.org/wikipedia/commons/c/cd/Land_ocean_ice_2048.jpg" "http://eoimages.gsfc.nasa.gov/images/imagerecords/55000/55167/earth_lights_lrg.jpg" "https://upload.wikimedia.org/wikipedia/commons/a/ac/Earthmap1000x500.jpg")
install=wallxplanet.install

_builddir="$pkgname-$pkgver"

package() {
    cd "$_builddir"

    # wallxplanet.conf
    install -Dm644 cfg/"$pkgname"_sample.conf \
        "$pkgdir"/etc/$pkgname/"$pkgname"_sample.conf || return 1

    # wallxplanet.service
    install -Dm644 systemd/"$pkgname".service \
        "$pkgdir"/usr/lib/systemd/system/"$pkgname".service || return 1

    # downloadcloudsmap.service
    install -Dm644 systemd/downloadcloudsmap.service \
        "$pkgdir"/usr/lib/systemd/system/downloadcloudsmap.service || return 1

    # downloadcloudsmap.timer
    install -Dm644 systemd/downloadcloudsmap.timer \
        "$pkgdir"/usr/lib/systemd/system/downloadcloudsmap.timer || return 1

    # pictures
    mkdir "$pkgdir"/etc/$pkgname/img
    install -Dm644 "$srcdir"/*.jpg \
        "$pkgdir"/etc/$pkgname/img/ || return 1

    # downloadcloudsmap.sh
    install -m755 -o root -g root -D "$srcdir"/$pkgname-$pkgver/downloadcloudsmap.sh \
        "$pkgdir"/usr/bin/downloadcloudsmap.sh || return 1

    # wallxplanet.sh
    install -m755 -o root -g root -D "$srcdir"/$pkgname-$pkgver/wallxplanet.sh \
        "$pkgdir"/usr/bin/wallxplanet.sh || return 1
}

sha512sums=('d65b1d0f007fe42b4e8ae6a0bc88b406bbec6ac7c2ee47c9f6ba6a79f530db9b80eafdc7a29b37f76a145c449bf3137b251b57d19373bf09fb220cb246245257'
'f83c0157272ee41389d7af50f1988c3470977d5dc80c4bc8b982b8cafa273775996e9e06893da970c04e7ab87ba8463f35405319dbe4ae73b0e3d68a146472d3'
'4b3574dce95148a2f6bc9f627524ea7f9b6806552016dd696e9cbf3edf56b8d8fa99f48f95616e276d67801ade65e32fe971a7dbd1bb5afadf7b49540fbd340c'
'900a7c3c8822a2be6f46e672ad5b4bfde47863e4d9af401805df9011a7010b279e1ac3c8afe08d88f88cb7db0b662321f74a06219790868f85109c41c2ffc99e')
