# Maintainer: Christopher Reimer <mail+aur[at]c-reimer[dot]de>
# Contributor: Swift Geek <swifgeek ɐ google m č0m>
# Contributor: Nick Østergaard <oe.nick at gmail dot com>
# Contributor: olasd

_pkgname=slic3r
pkgname=${_pkgname}-prusa3d
pkgver=1.31.2
pkgrel=3
pkgdesc="Updated Slic3r by Prusa3D with many bugfixes and new features"
arch=('i686' 'x86_64' 'armv6' 'armv6h' 'armv7h')
url="http://www.prusa3d.com/"
license=('AGPL3')
depends=('boost-libs' 'perl' 'perl-class-accessor' 'perl-encode-locale'
         'perl-math-planepath' 'perl-moo' 'perl-opengl' 'perl-wx-glcanvas')
makedepends=('boost' 'git' 'perl-devel-checklib' 'perl-extutils-cppguess'
             'perl-extutils-typemaps-default' 'perl-module-build-withxspp')
checkdepends=('perl-io-stringy')
optdepends=('perl-net-dbus: notifications support via any dbus-based notifier'
            'perl-xml-sax-expatxs: make AMF parsing faster'
            'perl-xml-sax: Additive Manufacturing File Format (AMF) support'
            'perl-net-bonjour: support for autodiscovery of printers on network (octoprint)'
            'perl-class-xsaccessor: creating faster accessor methods')
provides=('slic3r')
conflicts=('slic3r' 'slic3r-git' 'slic3r-xs' 'slic3r-xs-git')
source=("git+https://github.com/prusa3d/Slic3r.git#tag=version_$pkgver"
        "Move-Slic3r-data-to-usr-share-slic3r.patch"
        'slic3r.desktop')
md5sums=('SKIP'
         '03863b8db5dff40e194290ae07d6366f'
         'f9fd39cf31b8f9693585c92293ccef5e')

prepare() {
  cd "${srcdir}/Slic3r"
  patch -p1 -i "$srcdir/Move-Slic3r-data-to-usr-share-slic3r.patch"
  sed -i 's/lglu/lGLU/g' xs/Build.PL
  sed -i 's/lgl/lGL/g' xs/Build.PL
}

build() {
  cd "${srcdir}/Slic3r/xs"
  export SLIC3R_GUI=1
  perl Build.PL --installdirs vendor


  CFLAGS+=' -std=c++11'
  perl Build
}

check () {
  cd "${srcdir}/Slic3r"
  prove -Ixs/blib/arch -Ixs/blib/lib/ xs/t/ || true
  prove -Ixs/blib/arch -Ixs/blib/lib/ t/ || true
}

package () {
  cd "${srcdir}/Slic3r"
  install -d "$pkgdir/usr/share/perl5/vendor_perl/"
  cp -R lib/* "$pkgdir/usr/share/perl5/vendor_perl/"

  install -Dm 755 slic3r.pl "$pkgdir/usr/bin/vendor_perl/slic3r"

  # ZSH autocompletion
  install -Dm 0644 "utils/zsh/functions/_slic3r" "$pkgdir/usr/share/zsh/site-functions/_slic3r"

  # Install data to /usr/share
  mkdir -p "$pkgdir/usr/share/slic3r"
  cp -r var/* "$pkgdir/usr/share/slic3r"

  # Desktop file
  install -d "$pkgdir/usr/share/applications"
  install -m 644 "$srcdir/slic3r.desktop" "$pkgdir/usr/share/applications/"

  # Desktop icon
  mkdir -p "$pkgdir/usr/share/icons/hicolor/"{128x128,192x192}/apps/
  ln -s /usr/share/slic3r/Slic3r_128px.png "$pkgdir/usr/share/icons/hicolor/128x128/apps/slic3r.png"
  ln -s /usr/share/slic3r/Slic3r_192px.png "$pkgdir/usr/share/icons/hicolor/192x192/apps/slic3r.png"

  ### SLIC3R-XS MERGE
  cd xs
  ./Build install --destdir="$pkgdir"
}

