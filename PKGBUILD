# Maintainer: Jonathan Boyle <programmerfalcon@gmail.com>
pkgname=mulle-env
pkgver=3.3.2
pkgrel=2
epoch=1
pkgdesc="Virtual environment for Unix"
arch=('any')
url="https://github.com/mulle-sde/mulle-env"
license=('BSD3')
groups=('mulle-sde-all')
depends=('bash' 'mulle-bashfunctions>=3.3.0')
changelog="RELEASENOTES.md"
source=("https://github.com/mulle-sde/mulle-env/archive/3.3.2.tar.gz")
noextract=()
md5sums=('0a96c6ae72f35286ed177334001191da')
validpgpkeys=()

package() {
    # Install License
    cd "${pkgname}-${pkgver}"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # Run Install
    cd bin
    chmod +x installer
    ./installer "${pkgdir}/usr"

    # Move libexec to lib/$pkgname
    cd "${pkgdir}/usr"
    mkdir -p "lib/"
    mv libexec/* "lib/"
    rm -r libexec
}
