# Maintainer: Jonas Frei <freijon@gmail.com>
# Contributor: Yegorius <yegorius@domic.us>

pkgname=pulseaudio-dlna-git
pkgver=0.5.2.r8a39674
pkgrel=2
pkgdesc="A small DLNA server which brings DLNA/UPnP support to PulseAudio (development version)"
arch=('i686' 'x86_64')
url="https://github.com/masmu/pulseaudio-dlna"
license=('GPL3')
conflicts=('pulseaudio-dlna')
provides=('pulseaudio-dlna')
depends=('dbus-glib' 'python2-pip' 'python2-dbus' 'python2-docopt'
		 'python2-requests' 'python2-setproctitle' 
		 'python2-protobuf' 'python2-notify2' 'python2-psutil'
		 'python2-futures' 'python2-chardet' 'python2-netifaces'
		 'python2-lxml' 'python2-zeroconf' 'python2-netaddr' 'python2-gobject')
makedepends=('python2-setuptools')
optdepends=('lame: MP3 transcoding support'
			'faac: AAC transcoding support'
			'flac: FLAC transcoding support'
			'sox: WAV transcoding support'
			'ffmpeg: multiple formats support'
			'opus-tools: OPUS transcoding support'
			'vorbis-tools: OGG transcoding support')
source=(
	"${pkgname}::git+https://github.com/masmu/pulseaudio-dlna.git"
	"pulseaudio-dlna.service"
	"arch_cover.patch"
	"distribution-arch.png"
)
sha256sums=(
	'SKIP'
	'8e05d76654424b51f47dee6962d618d1ad6514fa29affc17dfcf764cc955bd23'
	'ce8f1651d3da51a6d336190b0f64b3f0d931a3ee6a338ce07033d9d9ba66157b'
	'cd8a0dde2b1ac32fdcedb28c87cca3a4d956a4e4fee8ec41f8211c41d43e5e95'
)

pkgver() {
	cd "$pkgname"
	_ver=`git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'`
	_release=${_ver:0:`expr index ${_ver} 'r'`-2}
	printf "%s.r%s" "${_release}" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/$pkgname"
	patch -p0 -i $startdir/arch_cover.patch
	python2 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1

	install -Dpv --mode=-x $startdir/pulseaudio-dlna.service $pkgdir/usr/lib/systemd/user/pulseaudio-dlna.service
	install -Dpv --mode=-x $startdir/distribution-arch.png $pkgdir/usr/lib/python2.7/site-packages/pulseaudio_dlna/images
}

post_install() { systemctl --user daemon-reload; }
