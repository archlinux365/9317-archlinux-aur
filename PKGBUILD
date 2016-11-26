# Maintainer: Quentin Bourgeois <quentin@bourgeois.eu>
#
# TODO: * viivakoodi require (python) argparse if python interpreter is 2.6, 
#               3.0 or 3.1 => how to do that ?
_pylibname=viivakoodi
pkgname=("python2-$_pylibname" "python-$_pylibname")
pkgver=0.8.0
pkgrel=1
pkgdesc='Barcode generator for Python. Fork of pyBarcode project.'
arch=('x86_64')
url="https://github.com/kxepal/$_pylibname"
license=('MIT')
groups=()
depends=()
makedepends=()
optdepends=('inkscape: tools for manipulating vector objects (eg: SVG files)')
checkdepends=('python-tox' 'python-pylint' 'python2-tox' 'python2-pylint') 
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$_pylibname-$pkgver.tar.gz::https://github.com/kxepal/$_pylibname/archive/$pkgver.tar.gz" 
        "$_pylibname-$pkgver.tar.gz.sig::https://pki.bourgeois.eu/archlinux/aur/$_pylibname-$pkgver.tar.gz.sig")
noextract=()
md5sums=()
sha1sums=()
sha256sums=('e1a17dc24975d5242202cfbb7534d69dd14eeb26bdf8a10f056c7b04904fef1e' 
            'fdb179e3c7ac3433959194319161cce49c0738d95aacd3636f33684e9e82d8a3')
sha384sums=('e2da627423221298dfc55be93ab07e42d8801f0fa63bcfc5ad6bfa689181bcd0e7eb9525abdfd20aa3637ae56999956b' 
            'e700ff2499996eb73676c57175e9c36ad79be5245314d1b43939234d800d64aa844edf5b7b313bdd1415744994201d62')
sha512sums=('b9f5fc859b3ec33a1cf264d5ede597ff79cd447043668cf433096bf0bf89e24e1a8bf05f7914420934bc6c03a66ec0df99a203136c3f6506e0fda8e3c6f619fd' 
            'b7d04def3d2d441dc8287e69cf1eb7a7b6e91e5833fdab4cfa440741e2a79bc4624f887cafa052644fcb01ac24f5da98978e522304303f0c89145b9e8f2a3c43')
# quentin bourgeois GPG key no package dev but provide a signature of the archive used when creating PKGBUILD file
validpgpkeys=('3486CBAC7F116CA71351B0D7F7181B2010660E6F') 

check() {
    cd "$srcdir/$_pylibname-$pkgver"
    
    for py_int in python3 python2; do
        msg "Testing $_pylibname-$pkgver with $py_int"
        "$py_int" ./test.py
    done
}

package_python-viivakoodi() {
    # as python-3.0 and python-3.1 need argparse I force for every version
    depends+=('python' 'python-argparse')
    makedepends+=('python-setuptools')
    provides+=('python2-viivakoodi')
    optdepends+=('python-pillow')

    cd "$srcdir/$_pylibname-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
}

package_python2-viivakoodi() {
    # as python2.6 need argparse I force for every version
    depends+=('python2>=2.6' 'python2-argparse')          
    makedepends+=('python2-setuptools')
    provides+=('python2-viivakoodi')
    optdepends+=('python2-pillow')

    cd "$srcdir/$_pylibname-$pkgver"
    python2 setup.py install --root="$pkgdir/" --optimize=1
}
