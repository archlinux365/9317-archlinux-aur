# Maintainer: Eric Bélanger <eric@archlinux.org>

pkgbase=imagemagick-fftw
pkgname=(libmagick-fftw imagemagick-fftw)
pkgver=7.0.8.12
pkgrel=1
pkgdesc="An image viewing/manipulation program"
url="https://www.imagemagick.org/"
arch=(x86_64)
license=(custom)
depends=(libltdl lcms2 fontconfig libxext liblqr libraqm libpng libxml2)
makedepends=(ghostscript openexr libwmf librsvg libxml2 openjpeg2 libraw opencl-headers libwebp
             chrpath ocl-icd glu ghostpcl ghostxps libheif jbigkit 'fftw')
checkdepends=(gsfonts ttf-dejavu)
_relname=ImageMagick-${pkgver%%.*}
_tarname=ImageMagick-${pkgver%.*}-${pkgver##*.}
source=(https://www.imagemagick.org/download/releases/$_tarname.tar.xz{,.asc}
        arch-fonts.diff)
sha256sums=('48df5877fe85603940310fe5c811a89af416882b60379918a95dcd4de6582b55'
            'SKIP'
            'a85b744c61b1b563743ecb7c7adad999d7ed9a8af816650e3ab9321b2b102e73')
validpgpkeys=(D8272EF51DA223E4D05B466989AB63D48277377A)  # Lexie Parsimoniae

shopt -s extglob

prepare() {
  mkdir -p binpkg/usr/lib/pkgconfig {binpkg,docpkg}/usr/share

  cd $_tarname

  # Fix up typemaps to match our packages, where possible
  patch -Np1 -i ../arch-fonts.diff

  # Don't run auto(re)conf; assumes use of git
}

build() {
  cd $_tarname
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --with-dejavu-font-dir=/usr/share/fonts/TTF \
    --with-gs-font-dir=/usr/share/fonts/gsfonts \
    PSDelegate=/usr/bin/gs \
    XPSDelegate=/usr/bin/gxps \
    PCLDelegate=/usr/bin/gpcl6 \
    --enable-hdri \
    --enable-opencl \
    --with-gslib \
    --with-lqr \
    --with-modules \
    --with-openexr \
    --with-openjp2 \
    --with-perl \
    --with-perl-options=INSTALLDIRS=vendor \
    --with-rsvg \
    --with-webp \
    --with-wmf \
    --with-xml \
    --without-autotrace \
    --without-djvu \
    --without-dps \
    --with-fftw \
    --without-fpx \
    --without-gcc-arch \
    --without-gvc
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

check() (
  cd $_tarname
  ulimit -n 4096
  make check
)

package_libmagick-fftw() {
  provides=("libmagick=$pkgver")
  conflicts=("libmagick")
  pkgdesc+=" (library)"
  optdepends=('ghostscript: PS/PDF support'
              'libheif: HEIF support'
              'libraw: DNG support'
              'librsvg: SVG support'
              'libwebp: WEBP support'
              'libwmf: WMF support'
              'libxml2: Magick Scripting Language'
              'ocl-icd: OpenCL support'
              'openexr: OpenEXR support'
              'openjpeg2: JPEG2000 support'
              'pango: Text rendering')
  backup=(etc/$_relname/{coder,colors,delegates,log,magic,mime,policy,quantization-table,thresholds,type,type-{dejavu,ghostscript}}.xml)
  options=('!emptydirs' libtool)

  cd $_tarname
  make DESTDIR="$pkgdir" install

  rm "$pkgdir"/etc/$_relname/type-{apple,urw-base35,windows}.xml
  rm "$pkgdir"/usr/lib/*.la

  install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE NOTICE

# Split 'imagemagick'
  cd ../binpkg
  mv "$pkgdir/usr/bin" usr/
  mv "$pkgdir/usr/lib/perl5" usr/lib/
  mv "$pkgdir/usr/share/man" usr/share/

# Split docs
  mv "$pkgdir/usr/share/doc" "$srcdir/docpkg/usr/share/"
}

package_imagemagick-fftw() {
  provides=("imagemagick=$pkgver")
  conflicts=("imagemagick")
  depends=("libmagick-fftw=$pkgver-$pkgrel")
  optdepends=('imagemagick-doc: manual and API docs')
  options=('!emptydirs')

  mv binpkg/* "$pkgdir"

  find "$pkgdir/usr/lib/perl5" -name '*.so' -exec chrpath -d {} +

  cd $_tarname
  install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE NOTICE
}

