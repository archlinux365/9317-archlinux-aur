# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
_pkgname=pjproject
pkgname=${_pkgname}-savoirfairelinux
pkgver=2.6
pkgrel=2
pkgdesc="Open source SIP stack and media stack, built with patches from SavoirFaire Linux (mostly GnuTLS support)"
arch=('i686' 'x86_64')
url="http://www.pjsip.org/"
license=('GPL')
depends=('gnutls' 'portaudio' 'speex' 'alsa-lib' 'libsamplerate' 'util-linux-ng' 'ffmpeg' 'libsrtp' 'opus')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
source=("http://www.pjsip.org/release/${pkgver}/${_pkgname}-${pkgver}.tar.bz2"
        endianness.patch
        gnutls.patch
        notestsapps.patch
        fix_base64.patch
        ipv6.patch
        ice_config.patch
        multiple_listeners.patch
        pj_ice_sess.patch
        fix_turn_fallback.patch
        fix_ioqueue_ipv6_sendto.patch
        add_dtls_transport.patch)
sha256sums=('2f5a1da1c174d845871c758bd80fbb580fca7799d3cfaa0d3c4e082b5161c7b4'
            '294d9fba18a8c903979de2c9b531a3ca32a28f90658bf0613a32ebfa7d5e3a69'
            '8dedb243a390af62741d4e3c0ea6b7f970cd6d67934f03d7ef8b69c745a6523b'
            'f88f3e73d2f62ae60d93e84e08f98da7d5febe93f1f390286cafa106178c4f27'
            '25c808206aa5028f29f66ea5364b93be94d0d5feac7d97165cd4ba3493aae6ec'
            'fdf64f3260aecbbc5433ae784e12dde462f1a15361f14c5cd0f7be0a3d13f802'
            '787ddf4377cdc6cdc956f77428d1bda5520f1e6143c8510289bf9b572b08afb5'
            '7aabc43556456085ca1bb9e17ef11ae5f4701dd392028335a65c06fd2bc1f6f8'
            '6eb446817c9a1e1c1c2922da18a2fb98c4acecb85aa0e2f9981ded1a6bf32b1f'
            '5289671ee86618d665556e5591ef5409354611a6cc0512bfe4100bc6b94fea67'
            '15524714c2bb48612b6504864b279fc56af1d756a197a8afc8141556889cfb70'
            '5b901de12d49d79aba8777f3c7b59d703603be5ed2e1be6696f5d01be584e739')

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  for patch in endianness.patch gnutls.patch notestsapps.patch fix_base64.patch \
               ipv6.patch ice_config.patch multiple_listeners.patch \
               pj_ice_sess.patch fix_turn_fallback.patch \
               fix_ioqueue_ipv6_sendto.patch add_dtls_transport.patch
  do
    msg2 "Applying patch $patch"
    patch -p1 < ../"$patch"
  done
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  export CXXFLAGS="${CXXFLAGS} -DNDEBUG -fPIC -DPJSIP_MAX_PKT_LEN=8000"
  export CFLAGS="${CXXFLAGS}"
  ./configure \
      --prefix=/usr \
      --enable-shared \
      --enable-ssl=gnutls \
      --with-external-speex \
      --with-external-srtp \
      --with-external-pa \
      --with-external-gsm \
      --enable-ext-sound \
      --disable-oss \
      --disable-opencore-amr \
      --disable-v4l2 \
      --disable-video \
      --disable-sound
  make dep
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
