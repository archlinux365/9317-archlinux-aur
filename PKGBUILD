# Maintainer: Daniel Plank <tyrolyean@gmx.at>
pkgname=electric
pkgver=9.08a
pkgrel=1
pkgdesc="a sophisticated electrical CAD system for the design of \
        integrated circuits"
arch=(any)
url="https://www.gnu.org/software/electric/"
license=('GPL')
depends=('java-environment')
makedepends=('svn' 'java-environment-openjdk' 'apache-ant')
provides=(gnu-electric)
source=("svn://svn.savannah.gnu.org/electric"
        "https://www.gnu.org/software/$pkgname/$pkgname.jpg"
        "electric.desktop"
        "electric.sh")
sha512sums=('SKIP'
            '7c0d30876202dfad4f1297db49489e7e3b6bd49dfbbb2b6919cd2075a6285d71d6bde64834ced322af6bc14ee2b1503a65add7f3c48114edfc836202153bb9be'
            'e478213c464ea098ec3e90005292bd61fb8959feb75a58271416f766d9bc8319b010cf46136b07f30064ff34a8bcf31d99b074f8191c784f3edc28eb8a2320a2'
            '7e50b99c7e3a52d0ead1d6f529c3ff9f6c7f9cdd88f5cd1b0f6de4c3f8aa13b72c7ed415e52eb13c454933c40ffa56d3849bc400cdde6c37ea37fbd4dc60e11c')

build() {
        
        cd "$pkgname/trunk/$pkgname/packaging/"

        ant
}

package() {
        
        mkdir -p $pkgdir/usr/bin/ $pkgdir/usr/share/icons 

        mv "$pkgname/trunk/$pkgname/packaging/${pkgname}Public-$pkgver.jar" "$pkgdir/usr/bin/$pkgname.jar"
        chmod +x "$pkgdir/usr/bin/$pkgname.jar"

        cp "$pkgname.jpg" "$pkgdir/usr/share/icons/$pkgname.jpg"

        cp "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
}
