# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>
pkgname=nanopb
pkgver=0.4.6
pkgrel=1
pkgdesc='Protocol Buffers with small code size'
arch=(any)
url='https://jpa.kapsi.fi/nanopb/'
license=(zlib)
depends=(python-protobuf)
makedepends=(pandoc)
checkdepends=(scons)
source=("https://jpa.kapsi.fi/$pkgname/download/$pkgname-$pkgver.tar.gz"
        'protoc-gen-nanopb'
        'scons-4.2.x.patch')
sha256sums=('e379d9babd86b9cfd8f8900fd0da8705cbd9bea4491178fb2b8be5e217bf02ab'
            'cd1ff902034d8deabf2d8ad3fadcdc4860d0b5d3be746e2b4b7427b9a7aca9c0'
            '18c02afa90b6ad077b4944e2a6006d24a909a8fab1a322acddd4a4ad61011ff5')

prepare() {
	cd "$pkgname"
	patch --forward --strip=1 --input="${srcdir}/scons-4.2.x.patch"
}

build() {
	cd $pkgname
	make -C docs
	make -C generator/proto
}

check() {
	cd $pkgname
	make -C tests
}

package() {
	install -Dm755 protoc-gen-nanopb                                        -t "$pkgdir/usr/bin"
	cd $pkgname
	install -Dm644 LICENSE.txt                                              -t "$pkgdir/usr/share/licenses/$pkgname"
	install -Dm644 README.md CHANGELOG.txt CONTRIBUTING.md                  -t "$pkgdir/usr/share/doc/$pkgname"
	install -Dm644 docs/{*.html,generator_flow.svg,lsr.css}                 -t "$pkgdir/usr/share/doc/$pkgname/html"
	cp -r examples                                                          -T "$pkgdir/usr/share/doc/$pkgname/examples"
	install -Dm644 pb.h pb_{common,decode,encode}.{c,h}                     -t "$pkgdir/usr/share/$pkgname"
	cp -r extra                                                             -T "$pkgdir/usr/share/$pkgname/extra"
	install -Dm755 generator/{nanopb_generator.py,protoc,protoc-gen-nanopb} -t "$pkgdir/usr/share/$pkgname/generator"
	install -Dm644 generator/proto/{__init__.py,nanopb_pb2.py,_utils.py}    -t "$pkgdir/usr/share/$pkgname/generator/proto"
	python -m compileall -d /usr/share/$pkgname/generator                      "$pkgdir/usr/share/$pkgname/generator"
	install                                                                 -d "$pkgdir/usr/share/arduino/hardware/archlinux-arduino/avr/libraries/nanopb"
	ln -s ../../../../../../nanopb                                             "$pkgdir/usr/share/arduino/hardware/archlinux-arduino/avr/libraries/nanopb/src"
	cat <<-EOF                                                                >"$pkgdir/usr/share/arduino/hardware/archlinux-arduino/avr/libraries/nanopb/library.properties"
		name=Nanopb
		version=$pkgver
		author=Petteri Aimonen <jpa@npb.mail.kapsi.fi>
		maintainer=Baltazár Radics <baltazar.radics@gmail.com>
		sentence=Protocol Buffers with small code size.
		paragraph=Nanopb is an ANSI-C library for encoding and decoding messages in Google's Protocol Buffers format with minimal requirements for RAM and code space. It is primarily suitable for 32-bit microcontrollers.
		category=Communication
		url=https://jpa.kapsi.fi/nanopb/
		architectures=*
	EOF
}
