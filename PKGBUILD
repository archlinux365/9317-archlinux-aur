# Maintainer: Bruno Pagani <archange@archlinux.org>

_pkgname=mpd
pkgname=${_pkgname}-minimal
pkgver=0.23.1
pkgrel=1
pkgdesc="Flexible, powerful, server-side application for playing music. Minimal version with only flac playback over pipewire through socket connection as user."
arch=(i686 x86_64 armv7h)
url="https://www.musicpd.org/"
license=(GPL)
depends=(flac fmt icu libmpdclient liburing pipewire systemd-libs zlib)
makedepends=(boost meson python-sphinx systemd)
provides=("${_pkgname}=${pkgver}")
conflicts=(${_pkgname})
source=("${url}/download/${_pkgname}/${pkgver:0:4}/${_pkgname}-${pkgver}.tar.xz"{,.sig})
sha512sums=(98af165881ee85c65ffd22bea77e0a62e13a8a5e8e30dc620761fe51422b605d886a957faf441bfe8f5e0728d651202c7f43e270335337a822258fcb5cd76e9e SKIP)
b2sums=(7b517d72c536496c4ceb579fcce3d4822a45a9975c7f1f53ab3c6e1eb1b133364eea9d62fa4ef53065961e3edf4474ba454aac846d50c5a96428cbacacdb0d9d SKIP)
validpgpkeys=(0392335A78083894A4301C43236E8A58C6DB4512) # Max Kellermann <max@musicpd.org>

build() {
    cd ${_pkgname}-${pkgver}
    _opts=('-Ddocumentation=enabled'
           '-Dhtml_manual=false'
           '-Dmanpages=true'
           '-Dtest=false'
           '-Dsyslog=disabled'
           '-Dinotify=false'
           '-Dio_uring=enabled'
           '-Ddaemon=true'
           '-Dsystemd=enabled'
           '-Dtcp=false'
           '-Dipv6=disabled'
           '-Dlocal_socket=true'
           '-Ddsd=false'
           '-Ddatabase=true'
           '-Dupnp=disabled'
           '-Dlibmpdclient=enabled'
           '-Dneighbor=false'
           '-Dudisks=disabled'
           '-Dwebdav=disabled'
           '-Dcue=false'
           '-Dcdio_paranoia=disabled'
           '-Dcurl=disabled'
           '-Dmms=disabled'
           '-Dnfs=disabled'
           '-Dsmbclient=disabled'
           '-Dqobuz=disabled'
           '-Dsoundcloud=disabled'
           '-Dbzip2=disabled'
           '-Diso9660=disabled'
           '-Dzzip=disabled'
           '-Did3tag=disabled'
           '-Dchromaprint=disabled'
           '-Dadplug=disabled'
           '-Daudiofile=disabled'
           '-Dfaad=disabled'
           '-Dffmpeg=disabled'
           '-Dflac=enabled'
           '-Dfluidsynth=disabled'
           '-Dgme=disabled'
           '-Dmad=disabled'
           '-Dmikmod=disabled'
           '-Dmodplug=disabled'
           '-Dopenmpt=disabled'
           '-Dmpcdec=disabled'
           '-Dmpg123=disabled'
           '-Dopus=disabled'
           '-Dsidplay=disabled'
           '-Dsndfile=disabled'
           '-Dtremor=disabled'
           '-Dvorbis=disabled'
           '-Dwavpack=disabled'
           '-Dwildmidi=disabled'
           '-Dvorbisenc=disabled'
           '-Dlame=disabled'
           '-Dtwolame=disabled'
           '-Dshine=disabled'
           '-Dwave_encoder=false'
           '-Dlibsamplerate=disabled'
           '-Dsoxr=disabled'
           '-Dalsa=disabled'
           '-Dao=disabled'
           '-Dfifo=true'
           '-Dhttpd=false'
           '-Djack=disabled'
           '-Dopenal=disabled'
           '-Doss=disabled'
           '-Dpipe=false'
           '-Dpipewire=enabled'
           '-Dpulse=disabled'
           '-Drecorder=false'
           '-Dshout=disabled'
           '-Dsnapcast=false'
           '-Dsndio=disabled'
           '-Dsolaris_output=disabled'
           '-Ddbus=disabled'
           '-Dexpat=disabled'
           '-Dicu=enabled'
           '-Diconv=disabled'
           '-Dpcre=disabled'
           '-Dsqlite=disabled'
           '-Dyajl=disabled'
           '-Dzlib=enabled'
           '-Dzeroconf=disabled'
    )

    arch-meson ${_opts[@]} -D b_ndebug=true build
    ninja -C build
}

package() {
    cd ${_pkgname}-${pkgver}
    DESTDIR="${pkgdir}" ninja -C build install
    install -Dm644 doc/mpdconf.example -t "${pkgdir}"/usr/share/doc/mpd/
    # Remove system services and clean user one
    rm -rf "${pkgdir}"/usr/lib/systemd/system/
    sed -e 's/After=network.target /After=/g' -e 's/AF_INET AF_INET6 AF_UNIX AF_NETLINK/AF_UNIX/g' -i "${pkgdir}"/usr/lib/systemd/user/mpd.service
}
