# Maintainer: Florian Jacob <projects+arch AT florianjacob )DOT( de>
# Contributor: mareex <marcus [dot] behrendt [dot] 86 [at] gmail [dot] com>

pkgname=('sumo' 'sumo-doc')
pkgbase=sumo
pkgver=0.28.0
pkgrel=1
pkgdesc="SUMO is an open source, highly portable, microscopic and continuous road traffic simulation package designed to handle large road networks"
arch=('i686' 'x86_64')
url="http://sumo.dlr.de"
license=('GPL')
depends=('gcc-libs' 'glibc' 'fox' 'xerces-c' 'glu' 'libgl' 'proj' 'gdal')
makedepends=('make' 'gcc' 'help2man')
source=("${pkgbase}-src-${pkgver}.tar.gz::http://prdownloads.sourceforge.net/${pkgbase}/${pkgbase}-src-${pkgver}.tar.gz?download"
        "${pkgbase}-doc-${pkgver}.tar.gz::http://prdownloads.sourceforge.net/${pkgbase}/${pkgbase}-doc-${pkgver}.tar.gz?download"
        "${pkgbase}.desktop"
        "${pkgbase}.sh"
        "${pkgbase}.install")

sha256sums=('4e3c31b5e052349c00a1f00f50fcba9c598a93a047a0d66f56f2260e9373f201'
            '03a6578286b55e564244255afe7723153c0cc891a1cc66a220110d176df43f66'
            '0500ba9cdf827cceae9a9bce66094bdb077300c94b0040bdd710afb92d0d4849'
            '16db32dbba617f8a38f5d103ce3af7cc70ab4cbf5b50e30be5d7f13ee6ea2f4f'
            'eeb0e9f85d72f06937462ceac90cc7f5bb55b56022472c476c137ee95b9fa56b')

prepare() {
    cd ${srcdir}/${pkgbase}-${pkgver}
    # replace python with python2 in shebangs
    find . -iname \*.py -exec sed -i 's/#!\/usr\/bin\/env python/#!\/usr\/bin\/env python2/' {} \;
    find . -iname \*.py -exec sed -i 's/#!\/usr\/bin\/python/#!\/usr\/bin\/python2/' {} \;

    # test if there are still py-files without shebangs
    for f in $(find . -iname \*.py)
    do
        if [ -z "$(grep -l '^#!/.*python' "$f")" ]; then
            sed -i "1i #!/bin/env python2" $f
        fi
    done

    # remove specific build flags so that the options from makepkg.conf are honored
    sed -i 's/-O2//g' configure
    sed -i 's/-D_FORTIFY_SOURCE=2//g' configure
    sed -i 's/-DNDEBUG//g' configure
    sed -i 's/-I\/usr\/local\/include//g' configure
}

build() {
    cd ${srcdir}/${pkgbase}-${pkgver}
    ./configure --prefix=/usr
    make
    make man
}

package_sumo() {
    backup=("etc/profile.d/sumo.sh")
    optdepends=('java-runtime-common: for executing Jar files like TraCI4J'
                'python2: for executing various python scripts in $SUMO_HOME/tools'
                'perl: for executing various perl scripts in $SUMO_HOME/tools')

    install=${pkgbase}.install

    mkdir -p ${pkgdir}/etc/profile.d/
    mkdir -p ${pkgdir}/usr/bin
    mkdir -p ${pkgdir}/usr/lib/${pkgbase}/data
    mkdir -p ${pkgdir}/usr/lib/${pkgbase}/tools
    mkdir -p ${pkgdir}/usr/share/applications
    mkdir -p ${pkgdir}/usr/share/doc/${pkgbase}
    mkdir -p ${pkgdir}/usr/share/man/man1
    mkdir -p ${pkgdir}/usr/share/pixmaps

    install -m0755 ${srcdir}/${pkgbase}.sh ${pkgdir}/etc/profile.d/

    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/activitygen ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/dfrouter ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/duarouter ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/emissionsDrivingCycle ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/emissionsMap ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/jtrrouter ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/marouter ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/netconvert ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/netgenerate ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/od2trips ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/polyconvert ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/${pkgbase} ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/${pkgbase}-gui ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/TraCITestClient ${pkgdir}/usr/bin/
    install -m0755 ${srcdir}/${pkgbase}-${pkgver}/bin/netedit ${pkgdir}/usr/bin/


    SAVEIFS=$IFS
    IFS=$(echo -en "\n\b")

    #ln -s /usr/bin ${pkgdir}/usr/lib/${pkgbase}/bin
    ln -s /usr/share/doc/${pkgbase}/doxygen ${pkgdir}/usr/lib/${pkgbase}/doxygen
    ln -s /usr/share/doc/${pkgbase}/examples ${pkgdir}/usr/lib/${pkgbase}/examples
    ln -s /usr/share/doc/${pkgbase}/pydoc ${pkgdir}/usr/lib/${pkgbase}/pydoc
    ln -s /usr/share/doc/${pkgbase}/tutorial ${pkgdir}/usr/lib/${pkgbase}/tutorial
    ln -s /usr/share/doc/${pkgbase}/userdoc ${pkgdir}/usr/lib/${pkgbase}/userdoc
########### DATA
    cd ${srcdir}/${pkgbase}-${pkgver}/data
    for d in $(find . -type d)
    do
        mkdir -p ${pkgdir}/usr/lib/${pkgbase}/data/$d
    done
    for f in $(find . -type f)
    do
        install -m0644 $f ${pkgdir}/usr/lib/${pkgbase}/data/$f
    done
    for l in $(find . -type l)
    do
        ln -s $(readlink $l) ${pkgdir}/usr/lib/${pkgbase}/data/$l
    done
########### TOOLS
    cd ${srcdir}/${pkgbase}-${pkgver}/tools
    for d in $(find . -type d)
    do
        mkdir -p ${pkgdir}/usr/lib/${pkgbase}/tools/$d
    done
    for f in $(find . -type f)
    do
        install -m0644 $f ${pkgdir}/usr/lib/${pkgbase}/tools/$f
    done
    for l in $(find . -type l)
    do
        ln -s $(readlink $l) ${pkgdir}/usr/lib/${pkgbase}/tools/$l
    done

    # make all scripts executable
    find ${pkgdir}/usr/lib/${pkgbase}/tools/ -iname \*.sh -exec chmod +x {} \;
    find ${pkgdir}/usr/lib/${pkgbase}/tools/ -iname \*.py -exec chmod +x {} \;
    find ${pkgdir}/usr/lib/${pkgbase}/tools/ -iname \*.pl -exec chmod +x {} \;
########### PIXMAP
    install -m0644 ${srcdir}/${pkgbase}-${pkgver}/docs/userdoc/logo.png ${pkgdir}/usr/share/pixmaps/${pkgbase}.png
########### .DESKTOP FILE
    install -m0644 ${srcdir}/${pkgbase}.desktop ${pkgdir}/usr/share/applications
########### MAN
    cd ${srcdir}/${pkgbase}-${pkgver}/docs/man
    for d in $(find . -type d)
    do
        mkdir -p ${pkgdir}/usr/share/man/man1/$d
    done
    for f in $(find . -type f)
    do
        install -m0644 $f ${pkgdir}/usr/share/man/man1/$f
    done
    for l in $(find . -type l)
    do
        ln -s $(readlink $l) ${pkgdir}/usr/share/man/man1/$l
    done
}

package_sumo-doc() {
########### DOCS
    cd ${srcdir}/${pkgbase}-${pkgver}/docs
    for d in $(find . -type d)
    do
        mkdir -p ${pkgdir}/usr/share/doc/${pkgbase}/$d
    done
    for f in $(find . -type f)
    do
        install -m0644 $f ${pkgdir}/usr/share/doc/${pkgbase}/$f
    done
    for l in $(find . -type l)
    do
        ln -s $(readlink $l) ${pkgdir}/usr/share/doc/${pkgbase}/$l
    done
    install -m0644 ${srcdir}/${pkgbase}-${pkgver}/AUTHORS ${pkgdir}/usr/share/doc/${pkgbase}
    install -m0644 ${srcdir}/${pkgbase}-${pkgver}/ChangeLog ${pkgdir}/usr/share/doc/${pkgbase}
    install -m0644 ${srcdir}/${pkgbase}-${pkgver}/COPYING ${pkgdir}/usr/share/doc/${pkgbase}
    install -m0644 ${srcdir}/${pkgbase}-${pkgver}/README ${pkgdir}/usr/share/doc/${pkgbase}

    rm -rf ${pkgdir}/usr/share/doc/${pkgbase}/man
}


