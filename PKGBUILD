# Maintainer: Alec Mev <alec@mev.earth>

pkgname=asdf-vm
pkgver=0.10.2
pkgrel=1
pkgdesc='Extendable version manager with support for Ruby, Node.js, Elixir, Erlang & more'
arch=('any')
url='https://asdf-vm.com'
license=('MIT')
depends=(
  'curl'
  'git'
)
makedepends=('cpio')
optdepends=(
  'autoconf'
  'automake'
  'bash-completion: For completions to work in Bash'
  'libffi'
  'libtool'
  'libxslt'
  'libyaml'
  'ncurses'
  'openssl'
  'readline'
  'unixodbc'
  'unzip: Needed by some plugins, like Elixir'
)
install=asdf-vm.install
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/asdf-vm/asdf/archive/v${pkgver}.tar.gz")
sha256sums=('a097d40888c276cb20e1489a3da6573dd9d184d8e6518c5f8177d3c2c1066f57')

package() {
  cd "asdf-${pkgver}"

  local dst="${pkgdir}/opt/${pkgname}"
  mkdir -p "${dst}"

  cp -r bin         "${dst}"
  cp -r lib         "${dst}"
  cp    asdf.elv    "${dst}"
  cp    asdf.fish   "${dst}"
  cp    asdf.sh     "${dst}"
  cp    defaults    "${dst}"
  cp    help.txt    "${dst}"
  cp    version.txt "${dst}"

  local usrshare="${pkgdir}/usr/share"

  local docdir="${usrshare}/doc/${pkgname}"
  find . -path ./.github -prune -o -name '*.md' -print | cpio -pd "${docdir}"
  cp help.txt "${docdir}"

  install -Dm644 -t "${usrshare}/licenses/${pkgname}/" LICENSE

  cd completions

  install -Dm644 asdf.bash "${usrshare}/bash-completion/completions/asdf"
  install -Dm644 asdf.fish "${usrshare}/fish/vendor_completions.d/asdf.fish"
  install -Dm644 _asdf     "${usrshare}/zsh/site-functions/_asdf"
}
