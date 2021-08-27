pkgname=ntfs3-dkms-git
_pkgver=27.0.0
pkgver=27.0.0
pkgrel=2
pkgdesc="NTFS read-write driver GPL implementation by Paragon Software. Current version works with NTFS (including v3.1), normal/compressed/sparse files and supports journal replaying."
arch=('any')
url='https://github.com/Paragon-Software-Group/linux-ntfs3'
license=('GPL2')
depends=('dkms')
provides=('NTFS3-MODULE' "ntfs3=${_pkgver}" "ntfs3-dkms=${_pkgver}")
conflicts=('ntfs3')
options=('!strip')

source=(
    Makefile.patch
    dkms.conf
    kernel-5.12-backport.patch
    kernel-5.14-backport.patch
    "ntfs3-v${_pkgver}.patch::https://github.com/torvalds/linux/compare/master...Paragon-Software-Group:master.diff"
)

sha512sums=(
    '533c249f0f6bd4833faf02d0d92ca1b5802a49afc5feb2e46a7d37275cfca7896db76cd83593f4f313977d278a9a7e92eda550667be2b93910c49cfb68ead4fb'
    'ac00adb4a6d7fc685c39af054474631c930455e9ad0838338e6b3622b72451e81397506866b83a4a51dd0e34ed7752963c0fed9e8b017da5122e0dca3d345fb6'
    '60da0421ca01517e5641a99c9aaf230b65483b67d963198677b9d69cac8ef5d4055583f121ffb5be5cc8e6f47fe2bba1a9ce30c0d2c01a66bc9bb2f728c3fa21'
    '5f04690f57fea1b4db18dd7723d9e21c23ed382935988fd9e192e07a80216efbcb06e1ff6a2ff3286bd824c19da5de1ccad68667dd06d7cc686611c0a93d6691'
    'SKIP'
)

pkgver() {
    local sha=$(curl -H "Accept: text/vnd.github.VERSION.sha" "https://api.github.com/repos/Paragon-Software-Group/linux-ntfs3/commits/master")
    echo "${_pkgver}.${sha:0:7}"
}

prepare() {
    mkdir -p "${_pkgver}"
    cd "${_pkgver}"

    patch -p3 -t -N -i "${srcdir}/ntfs3-v${_pkgver}.patch" || true

    patch -p0 -N -i "${srcdir}/Makefile.patch"

    # For testing
    # patch -p1 -N -i "${srcdir}/kernel-5.12-backport.patch"
    # patch -p1 -N -i "${srcdir}/kernel-5.14-backport.patch"
}

package() {
    local dest="${pkgdir}/usr/src/ntfs3-${_pkgver}"
    mkdir -p "${dest}"
    cd "${dest}"
    cp -r "${srcdir}/${_pkgver}/"* ./
    cp "${srcdir}/dkms.conf" ./
    mkdir -p "./patches"
    cp "${srcdir}/kernel-"*.patch "./patches/"
}
