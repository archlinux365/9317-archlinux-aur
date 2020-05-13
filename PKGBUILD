# Maintainer: Caleb Maclennan <caleb@alerque.com>

_rockname=cassowary
_project=cassowary.lua
pkgname=("lua-$_rockname-git" "lua52-$_rockname-git" "lua51-$_rockname-git")
pkgver=2.2
_branch='master'
_rockrel=0
pkgrel=6
pkgdesc='The cassowary constraint solver'
arch=('i686' 'x86_64')
url="https://github.com/sile-typesetter/$_project"
license=('MIT')
_lua_deps=('penlight')
makedepends=('git' 'lua' 'lua52' 'lua51' 'luarocks')
source=("git+$url.git#branch=$_branch")
sha256sums=('SKIP')

pkgver() {
  cd "$_project"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

_package_helper() {
  cd "$_project"
  luarocks --lua-version="$1" --tree="$pkgdir/usr/" make --deps-mode=none --no-manifest "$_rockname-scm-$_rockrel.rockspec"
}

package_lua-cassowary-git() {
  depends=('lua' "${_lua_deps[@]/#/lua-}")
  conflicts=("${pkgname/-git}")
  _package_helper 5.3
}

package_lua52-cassowary-git() {
  depends=('lua52' "${_lua_deps[@]/#/lua52-}")
  conflicts=("${pkgname/-git}")
  _package_helper 5.2
}

package_lua51-cassowary-git() {
  depends=('lua51' "${_lua_deps[@]/#/lua51-}")
  conflicts=("${pkgname/-git}")
  _package_helper 5.1
}
