# Maintainer: William Gathoye <william + aur at gathoye dot be>
# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Contributor: Massimiliano Torromeo <massimiliano dot torromeo at gmail dot com>

pkgname=mattermost
pkgver=4.7.2
pkgrel=1
pkgdesc='Open source Slack-alternative in Golang and React'
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url='https://mattermost.com'
license=('AGPL' 'Apache')

makedepends=('git' 'go' 'libpng12' 'npm' 'python2' 'yarn')
# python2 is required by the node module node-gyp.
# mozjpeg isn't needed on amd64, but the version brought with node_modules
# (mozjpeg implementation) does not run on an architecture other than amd64.
# The one provided with Arch Linux does.
if [ "$CARCH" != 'x86_64' ]; then
    makedepends+=('mozjpeg')
fi
optdepends=(
    'mariadb: SQL server storage'
    'percona-server: SQL server storage'
    'postgresql: SQL server storage'
)
backup=("etc/webapps/${pkgname}/config.json")
source=(
    ${pkgname}-server-${pkgver}.tar.gz::"https://github.com/${pkgname}/${pkgname}-server/archive/v${pkgver}.tar.gz"
    ${pkgname}-webapp-${pkgver}.tar.gz::"https://github.com/${pkgname}/${pkgname}-webapp/archive/v${pkgver}.tar.gz"
    "${pkgname}.service"
    "${pkgname}.sh"
    "${pkgname}.sysusers"
    "${pkgname}.tmpfiles"
    "${pkgname}-server-makefile.patch"
)
sha512sums=('b4a5ef67fa8cf7cea48e7003f216b1bcff0988d2b79b17d00f762f4c7b834c245875e5d3a59ab28fea92459e6aa4dfd477d6e3c0030ebd87b1b5d0cf12ac27be'
            'fedbbdfff0ec30e500dfc57c66f7f8f98c0aa266593577ea7dd7a9c6aa0eb45b05e17eb039f22a68350fe4bdf3ee44ec3b532ad01758bd1d63ba77443925c3bc'
            '3e3d46dc7778be256da9a366ec96cde684fcb07732d0adfd40ea00d6ec61a161a9d7e784f7773d34e4f058e6919b13053ac228255a05f175e7ce20538f07ec93'
            '5fe6c343e9739b12f8ea9390dafd729fa9f980978bbc0fa7eb6a2eb2d437929078d3efede23c28a6b399c407b8b5e92755169a468462088de0eb148b360acc4b'
            'f08d88fd91e91c8b9996cf33699f4a70d69c8c01783cf7add4781ee3c9c6596839e44c5c39f0ff39a836c6d87544eef179f51de0b037ec7f91f86bac8e24d7cc'
            'e3ffcf4b86e2ecc7166c1abf92cd4de23d81bad405db0121e513a8d81fea05eec9dd508141b14b208c4c13fbc347c56f01ed91326faa01e872ecdedcc18718f9'
            '230bd3eb4307bcbbec48f2e24e2d07bf490bea65c0e95b2453ad3cd42bd53bbce8e6651886946db4635122307a8b64664e01ad3dd3eb35ecd5a8a0823ad077b9')

prepare() {
    # cp cannot copy from a symbolic link to the destination link itself
    # a symbolic link located outside the first symbolic link folder location.
    # e.g.
    # mattermost-server is a symlink
    # mattermost-webapp is a symlink
    # we are in the folder mattermost-server and we want to execute
    # cp -RL ../mattermost-webapp/dist/* dist/mattermost/client/
    # this command will fail with
    # cp: cannot stat '../mattermost-webapp/dist/*': No such file or directory
    cd ${srcdir}
    rm -rf ${pkgname}-server ${pkgname}-webapp
    mv ${pkgname}-server-${pkgver} ${pkgname}-server
    mv ${pkgname}-webapp-${pkgver} ${pkgname}-webapp

    mkdir -p src/github.com/${pkgname}
    cd src/github.com/${pkgname}

    # Remove previous platform folders if any previous clone was effective
    rm -f ${pkgname}-server
    rm -f ${pkgname}-webapp

    # Create the directory structure to match Go namespaces
    ln -s "${srcdir}"/${pkgname}-server ${pkgname}-server
    ln -s "${srcdir}"/${pkgname}-webapp ${pkgname}-webapp
    cd ${pkgname}-server

    # Apply patch to fix upstream blunder
    patch -p0 -i ${srcdir}/${pkgname}-server-makefile.patch

    # We are not using docker, no need to stop it.
    sed -r -i Makefile \
        -e 's/^clean: stop-docker/clean:/'

    # Enforce build hash to Arch Linux (Enterprise hash is already set to
    # none), instead of the official git hash value.
    sed -r -i Makefile \
        -e "s/^(\s*)BUILD_HASH(_ENTERPRISE)? =.*/\1BUILD_HASH\2 = Arch Linux \(${CARCH}\)/" \
        -e 's/-X (.*)(\$\(BUILD_HASH(_ENTERPRISE)?\))(.*)/-X '\''\1\2'\''\4/'

    # The configuration isn't available at this time yet, modify the default.
    sed -r -i build/release.mk \
        -e 's/\$\(DIST_PATH\)\/config\/config.json/\$\(DIST_PATH\)\/config\/default.json/'

    # The Go programming language only supports 8 instruction sets, therefore
    # we cannot rely on ${CARCH} and need to cast manually.
    # src.: https://golang.org/doc/install/source#introduction
    case "${CARCH}" in
        i686)
            sed -r -i build/release.mk \
                -e "5,6s/amd64/386/"
            ;;
        arm*64*|*arch*64*)
            sed -r -i build/release.mk \
                -e "5,6s/amd64/arm64/"
            ;;
        arm*)
            sed -r -i build/release.mk \
                -e "5,6s/amd64/arm/"
            ;;
    esac

    # Remove platform specific lines from the Makefile from the line beginning
    # with that statement to the end of file (we do not care of the additional
    # file copy, nor the tar compression defined below the file).
    sed '/# ----- PLATFORM SPECIFIC -----/,//d' -i ./build/release.mk
}

build() {
    # No need to build mattermost-webapp as the server is taking care of this
    # step via its build-client make instruction.

    cd "${srcdir}"/src/github.com/${pkgname}/${pkgname}-server
    # Prevent the build to crash when some dependencies are not met or
    # outdated. This clean the webapp as well (cf. mattermost-server/Makefile,
    # clean target).
    make clean
    GOPATH="${srcdir}" BUILD_NUMBER=${pkgver}-${pkgrel} make build-linux
    GOPATH="${srcdir}" BUILD_NUMBER=${pkgver}-${pkgrel} make build-client
    GOPATH="${srcdir}" BUILD_NUMBER=${pkgver}-${pkgrel} make package
}

package() {
    cd "${srcdir}"/src/github.com/${pkgname}/${pkgname}-server

    install -dm755 \
        "${pkgdir}"/usr/share/webapps \
        "${pkgdir}"/var/log/${pkgname} \
        "${pkgdir}"/etc/webapps \
        "${pkgdir}"/usr/share/doc/${pkgname}

    cp -a dist/${pkgname} "${pkgdir}"/usr/share/webapps/

    cd "${pkgdir}"/usr/share/webapps/${pkgname}

    rm -rf logs
    ln -s /var/log/${pkgname} logs

    cp config/default.json config/config.json
    mv config "${pkgdir}"/etc/webapps/${pkgname}
    ln -s /etc/webapps/${pkgname} config

    sed -e 's@"Directory": ".*"@"Directory": "/var/lib/mattermost/"@g' \
        -e 's@tcp(dockerhost:3306)@unix(/run/mysqld/mysqld.sock)@g' \
        -i "${pkgdir}"/etc/webapps/${pkgname}/config.json

    mv NOTICE.txt README.md "${pkgdir}"/usr/share/doc/${pkgname}

    cd "${srcdir}"
    install -Dm755 bin/platform -t "${pkgdir}"/usr/share/webapps/${pkgname}/bin/
    install -Dm755 ${pkgname}.sh "${pkgdir}"/usr/bin/${pkgname}
    install -Dm644 ${pkgname}.service -t "${pkgdir}"/usr/lib/systemd/system/
    install -Dm644 ${pkgname}.sysusers "${pkgdir}"/usr/lib/sysusers.d/${pkgname}.conf
    install -Dm644 ${pkgname}.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/${pkgname}.conf
}
