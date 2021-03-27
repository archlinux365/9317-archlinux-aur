# Maintainer: Sainnhe Park <sainnhe@gmail.com>
pkgname=neovim-coc-marketplace-git
_pkgname=neovim-coc-marketplace
_extname=coc-marketplace
pkgver=1.4.0.r109.ga1ec912
pkgrel=1
pkgdesc='coc.nvim extensions marketplace'
arch=('any')
url='https://github.com/fannheyward/coc-marketplace'
depends=('neovim-coc')
makedepends=('git' 'yarn')
_packdir="usr/share/nvim/runtime/pack/coc/start/${_extname}"
license=('MIT')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_extname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_extname}"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${_extname}"
    yarn install --frozen-lockfile --preferred-cache-folder "${srcdir}/.cache"
}

package() {
    cd "${srcdir}/${_extname}"
    yarn pack; tar xvf *.tgz; rm *.tgz
    cd package
    _dependencies=$(grep -Po '"dependencies":' package.json) || _dependencies=""
    if [ -n "${_dependencies}" ]; then
        yarn install --production --no-lockfile --ignore-scripts --prefer-offline --preferred-cache-folder "${srcdir}/.cache"
    fi
    find . -type f -exec \
        install -Dm 644 '{}' "${pkgdir}/${_packdir}/{}" \;
    rm -rf "${srcdir}/${_extname}/package"
    find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'
    chown -R root:root "${pkgdir}"
}
