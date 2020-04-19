# Maintainer: Sean Anderson <seanga2@gmail.com>
pkgname=('ocaml-atd' 'ocaml-atdgen' 'ocaml-atdgen-runtime' 'ocaml-atdgen-codec-runtime')
_oname=atd
pkgver=2.2.1
pkgrel=1
pkgdesc=""
arch=('i686' 'x86_64')
url="https://github.com/mjambon/atd"
license=('BSD')
depends=('ocaml>=3.11'
	 'ocaml-menhir'
	 'ocaml-easy-format'
	 'ocaml-biniou'
	 'ocaml-yojson'
	 'ocaml-re')
makedepends=('ocaml-findlib' 'dune>=2' 'opam' 'scala')
options=(!strip)
source=("https://github.com/mjambon/${_oname}/archive/${pkgver}.tar.gz")
md5sums=('c4120ec4dd6a54d5c04a6b9d6ec942b3')
_dune="dune $(getopt "j::" $MAKEOPTS 2>/dev/null | sed 's/--/\n/g' | head -n 1)"

prepare() {
	cd $srcdir/$_oname-$pkgver
	truncate -s 0 atds/test/run_test.sh
	echo "#!/bin/sh" >> atds/test/run_test.sh
}

build() {
	cd $srcdir/$_oname-$pkgver
	$_dune build --profile=release -p atd,atdgen,atdgen-runtime,atdgen-codec-runtime
}

check() {
	cd $srcdir/$_oname-$pkgver
	$_dune runtest -p atd,atdgen,atdgen-runtime,atdgen-codec-runtime
}

_do_package() {
	cd $srcdir/$_oname-$pkgver

	opam-installer --prefix=$pkgdir/usr \
		--libdir $pkgdir$(ocamlfind printconf destdir) \
		--docdir $pkgdir/usr/share/doc $1.install
	
	mv $pkgdir/usr/share/doc/$1 $pkgdir/usr/share/doc/$pkgname
	mkdir -p $pkgdir/usr/share/licenses/$pkgname/
	mv $pkgdir/usr/share/doc/$pkgname/LICENSE.md $pkgdir/usr/share/licenses/$pkgname/
}

package_ocaml-atd() {
	# options and directives that can be overridden
	pkgdesc="Adaptable type definitions for OCaml"

	_do_package atd
}

package_ocaml-atdgen() {
	# options and directives overrides
	pkgdesc="Efficient JSON serializer, deserializer and validator generator for OCaml"
	depends=('ocaml-atd' 'ocaml-atdgen-runtime' 'ocaml-atdgen-codec-runtime' 'bash')

	_do_package atdgen
}

package_ocaml-atdgen-runtime() {
	pkgdesc="Runtime for atdgen generated bucklescript converters"

	_do_package atdgen-runtime
}

package_ocaml-atdgen-codec-runtime() {
	pkgdesc="Runtime library for code generated by atdgen"
	
	_do_package atdgen-codec-runtime
}
