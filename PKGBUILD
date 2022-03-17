# Maintainer: dreieck

_pkgname=perl-multidimensional
pkgname="${_pkgname}-git"
pkgver=0.014.2+r62.20200501.g41b2e74
pkgrel=2
pkgdesc='disables multidimensional array emulation.'
arch=(
  'arm'
  'i686'
  'x86_64'
)
url='https://metacpan.org/pod/multidimensional'
license=(
  'PerlArtistic'
)
depends=(
  'perl'
)
makedepends=(
  'git'
  'perl-b-hooks-op-check'
  'perl-extutils-depends'
  'perl-extutils-makemaker'
  'perl-extutils-makemaker-dist-zilla-develop' # for generating ppport.h
)
checkdepends=(
  'perl-test-pod-coverage'
)
provides=(
  "${_pkgname}=${pkgver}"
)
conflicts=(
  "${_pkgname}"
)
options=('!emptydirs')
source=(
  "${_pkgname}::git+https://github.com/ilmari/multidimensional.git"
  'Makefile.PL.MakeMaker'
  'Makefile.add-b-hooks-op-check-include.patch'
  'LICENSE.PerlArtistic.txt'
)
sha256sums=(
  'SKIP'
  'ff11afc581c683f2d904fa6fd3ab0ed4a22fed7653660b401b8ddf153fb0bd05'
  'fa351fddc0767e003b1b02f35f14dc65480bdf6c6fddd060278c3b68db8cd461'
  '916a330e64df209a924120bfddea0373db385eb3854e96d1a3dda6e0ea130c80'
)

prepare() {
  cd "${srcdir}/${_pkgname}"

  cp "${srcdir}/Makefile.PL.MakeMaker" .

  perl Makefile.PL # Use this to generate 'ppport.h'
  mv Makefile Makefile.dzil

  perl Makefile.PL.MakeMaker # Then use this to generate a makefile which does not need perl-dist-zilla.
  mv Makefile Makefile.MakeMaker
  patch -N -i "${srcdir}/Makefile.add-b-hooks-op-check-include.patch" Makefile.MakeMaker
  ln -s Makefile.MakeMaker Makefile # It is needed to keep a 'Makefile', otherwise it will be rebuild.
}

pkgver() {
  cd "${srcdir}/${_pkgname}"

  _descr="$(git describe --tags --long)"
  _ver="$(printf '%s' "${_descr}" | awk -F '-' '{print $1"."$2}' | sed 's|^v||')"
  _rev="r$(git rev-list --count HEAD)"
  _hash="$(printf '%s' "${_descr}" | awk -F '-' '{print $3}')"
  _date="$(git log -n 1 --format=tformat:%ci | awk '{print $1}' | tr -d '-')"
  printf '%s\n' "${_ver}+${_rev}.${_date}.${_hash}"
}

build() {
  cd "${srcdir}/${_pkgname}"

  make -f Makefile.MakeMaker
}

check() {
  cd "${srcdir}/${_pkgname}"

  make -f Makefile.dzil test # test succeeds only with the dist-zilla Makefile
}

package() {
  cd "${srcdir}/${_pkgname}"

  make -f Makefile.MakeMaker DESTDIR="${pkgdir}" install

  # remove perllocal.pod and .packlist
  find "${pkgdir}" -name perllocal.pod -delete
  find "${pkgdir}" -name .packlist -delete

  for _docfile in Changes; do
    install -D -v -m644 "${_docfile}" "${pkgdir}/usr/share/doc/${_pkgname}/${_docfile}"
  done

  install -D -v -m644 "${srcdir}/LICENSE.PerlArtistic.txt" "${pkgdir}/usr/share/licenses/${pkgname}/COPYING.PerlArtistic.txt"
}

