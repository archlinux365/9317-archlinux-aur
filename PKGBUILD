_repo="Paragon-Software-Group/linux-ntfs3"
_ver="5.15"
_base="8bb7eca972ad531c9b149c0a51ab43a417385813"
_head="master"

pkgname=ntfs3-dkms-git
pkgver=5.15.r5.g3a2154b
pkgrel=1
epoch=1
pkgdesc="NTFS3 is fully functional NTFS Read-Write driver. The driver works with NTFS versions up to 3.1."
arch=('any')
url="https://github.com/${_repo}"
license=('GPL2')
depends=('dkms')
makedepends=('git')
provides=('NTFS3-MODULE' "ntfs3=${_ver}" "ntfs3-dkms=${_ver}")
conflicts=('ntfs3')
options=('!strip' '!emptydirs')

source=(
    "Makefile.patch"
    "dkms.conf"
    "kernel-5.12-backport.patch"
    "kernel-5.14-backport.patch"
    "kernel-5.15-backport.patch"
)

sha512sums=(
    '533c249f0f6bd4833faf02d0d92ca1b5802a49afc5feb2e46a7d37275cfca7896db76cd83593f4f313977d278a9a7e92eda550667be2b93910c49cfb68ead4fb'
    '5e2f2493fbf7a4d12e7cd7d3c0bb8fc3d8bd5d290f990e5b73c52bfa4ab58127c08eeff09fab7b0ba3a2c4ab1861fec68ce711b1cb57867bb61a81785f312677'
    '3b0126a8f0765ede9c2e3f6e521941fbbef35726e0b6a37edce122181dbef47d9633e2ef06669115d50714193816db8e2ac785fbe3295a62088365abedab49c4'
    '61a1948e3e607dabaca47742777b4ea92fadf9f5416ebaef8c06f1e17aab0f3ced34e900c0cf1ed462303f391f4a4713b5b30a488b349839780bde3248e19f3c'
    'c061d3d3b0e531f6d0eba533b884c168a3b057d96d68000cdb9e0fc736538cdc4e7e38d0168f58c3c1b8cb1a7c413f4fb32068847b8c4601dc0406f3fead7533'
)

pkgver() {
    local api="https://api.github.com/repos/${_repo}"
    local rev=$(curl "${api}/compare/${_base}...${_head}" | perl -ne'/"total_commits":\s?(\d+),?/ && print $1')
    local sha=$(curl -H "Accept: text/vnd.github.VERSION.sha" "${api}/commits/${_head}")
    echo "${_ver}.r${rev}.g${sha:0:7}"
}

prepare() {
    cd "${srcdir}"

    rm -rf "repo" "ntfs3"

    git clone --depth 1 --filter=tree:0 --sparse --no-checkout "${url}" "repo"

    cd "repo"

    git sparse-checkout set "/fs/ntfs3"
    git checkout "${_head}"

    ln -rs "fs/ntfs3" "${srcdir}/ntfs3"
}

build() {
    cd "${srcdir}/ntfs3"
    patch -p0 -N -i "${srcdir}/Makefile.patch"

    # For testing
    # patch -p1 -N -i "${srcdir}/kernel-5.15-backport.patch"
    # patch -p1 -N -i "${srcdir}/kernel-5.14-backport.patch"
    # patch -p1 -N -i "${srcdir}/kernel-5.12-backport.patch"
}

package() {
    cd "${srcdir}"

    local dest=$(install -dm755 "${pkgdir}/usr/src/ntfs3-${_ver}" && echo "$_")

    cp -rt "${dest}" "ntfs3/"*

    install -Dm644 -t "${dest}" "dkms.conf"

    install -dm755 "${dest}/patches" && cp -t "$_" "kernel-"*.patch
}
