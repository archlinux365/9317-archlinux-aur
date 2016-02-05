# Maintainer: Javier Torres <javitonino [at] gmail [dot] com>

pkgname=opendnssec
pkgver=1.4.9
pkgrel=1
pkgdesc="Turn-key solution for DNSSEC (sqlite3)"
arch=('i686' 'x86_64')
url="http://www.opendnssec.org/"
license=('BSD')
groups=()
depends=('libxml2>=2.6.16' 'ldns>=1.6.16' 'sqlite3>=3.3.9')
makedepends=()
optdepends=('softhsm: key storage')
provides=()
conflicts=()
replaces=()
backup=("etc/opendnssec/conf.xml"
        "etc/opendnssec/kasp.xml"
        "etc/opendnssec/zonelist.xml")
options=()
install="opendnssec.install"
changelog=
source=("http://www.opendnssec.org/files/source/${pkgname}-${pkgver}.tar.gz"
	"pid-path.patch"
        "ods-signer.service"
        "ods-enforcer.service"
        "opendnssec.tmpfiles")
noextract=()

md5sums=('7d0c9e54d7ed36c6f6be9636997bea90'
         '471ec859269bc2add2ad6f95539e8c04'
         'e762cdc2c3f8be40aeff379aa4bade76'
         'c5464f7be7984bb9a925da0b157eafdf'
         '69908ba1f46c25e4c34bc91f45bc9660')
sha1sums=('08736372058b5f1e5344261b21cf950243d74abb'
          'a8234e007fb56262c450016d4058693b4fb7c98c'
          '2a4fac3a16fea3f89b281f0933b6920524978d49'
          'fa28111fdce06c389813ff6ed2d4cae136252488'
          'f10d783b3e0232fd3beff645a07207c161371d0c')
sha256sums=('50a157d26d8b9ae370cd7fa52c7c6f43f4c77aeeb5d0fccd6a2e92c7dfc1d88e'
            'c16b206258bca7fd0fd4838c23d3a1bd80bc33aaf355f6ccdbfbfb3b4c3a7e8f'
            '596d238ad219de1c88f79fd26a8b829250bf0512a308b34c11fd231d0b4eb0f4'
            '75cecbfb0ece13957a68a5bc39c20a1d69b95373e7473545d70621e1732733d8'
            '28a43d8d5ee512db5425c86bdba9c5832753dce0260291958b1b73253e3ebf55')
sha384sums=('e9c9a6169bd533052f273bfcec0c9d3bd9b708052894127d7cfd7a0889bfde35ea2da4fbf23605eafa0f83c27dbb778a'
            '9fbdf5f5e50c1bddc9d7e0ea3126bb520b00cb3f764878629c86075303226b011e401158751a5d3086e22e8ac8f685e7'
            '29d68ccca64339ab190518f6c5bffedba71287548634e305a12c98b7744984cc37f6a1748394ca0d96e709dbd520fe19'
            '0869168e8c5a5064cbac0d2f0afe71539a68785d548752c609759381648b04015fc7c3ed9684aec944a914143c777a66'
            '5c42366ad7b99d496679b089c1605b3af9060ba737350915439d8ef7bbcfd0f7128c389d256a62754bb79e5ad3e215c2')
sha512sums=('5cf571750ff205667f5162f28c7575e28f15a7367afce5bb3cd3da080f429c3e0457f597abb76ba260f781a340a4ef78e991252404e694a10a051190d50b5c7f'
            'd927457d2d7a5343c4480ff34237f49e3829cef65eefd71fb58ce4fa15d8d969126e64c5a59dc02cc7792876f8a5a91cd4de3c5bfe3acc0396663c8c139d7cce'
            '39068133b3bfd075f3555491096be50ea0973a73ac716abb19faed0aa972ef043a6012491d4c6c208443352a2a508b8ebfbd7273fd84df43b3d6d478e72e7957'
            'a3700c82e6577bdacbce9cfd749e71e3c749814884ad4e9a1359e97105f9c045dc1472ba231ecb52c23855cacf67874623c8eef715955bfd41239b199d03a0db'
            'b221eec802ac471cd90908faa252d49ef2d217d6e48262a02490ae99fb64f3b82bc7f2dd2056d6e58b8bb1ca62072d52bffbc2bfd9f4eb794ec2d02275e88899')


build() 
{
  cd "${srcdir}/${pkgname}-${pkgver}"

  # /var/lib/run -> /var/run
  patch -p0 < "${srcdir}/pid-path.patch"

  aclocal
  autoconf
  automake --add-missing

  ./configure --prefix=/usr --datarootdir=/usr/share --localstatedir=/var/lib --sysconfdir=/etc --with-pkcs11-softhsm=/usr/lib/libsofthsm.so --sbindir=/usr/bin

  # Create the correct (/var/run/opendnssec) directory
  sed -i \
  -e "s/\$(INSTALL) -d \$(DESTDIR)\$(localstatedir)\/run\/opendnssec/#Removed/" \
  -e "s/\$(INSTALL) -d \$(DESTDIR)\$(localstatedir)\/run/\$(INSTALL) -d \$(DESTDIR)\$(OPENDNSSEC_PID_DIR)/" \
  Makefile

  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  install -Dm0644 "${srcdir}/ods-signer.service" \
        "${pkgdir}/usr/lib/systemd/system/ods-signer.service"
  install -Dm0644 "${srcdir}/ods-enforcer.service" \
        "${pkgdir}/usr/lib/systemd/system/ods-enforcer.service"
  install -Dm0644 "enforcer/utils/migrate_adapters_1.sqlite3" \
        "${pkgdir}/usr/share/opendnssec"
  install -Dm0644 "${srcdir}/opendnssec.tmpfiles" \
        "${pkgdir}/usr/lib/tmpfiles.d/opendnssec.conf"
  install -Dm0644 "LICENSE" \
        "${pkgdir}/usr/share/licenses/opendnssec/LICENSE"

  #Migration scripts for 1.4.8
  /usr/bin/install -c -m 644 "enforcer/utils/migrate_1_4_8.mysql" "${pkgdir}/usr/share/opendnssec"
  /usr/bin/install -c -m 644 "enforcer/utils/migrate_1_4_8.sqlite3" "${pkgdir}/usr/share/opendnssec"

  chown 227:227 "${pkgdir}/etc/opendnssec" -R
  chown 227:227 "${pkgdir}/var/lib/opendnssec" -R

  chmod 750 "${pkgdir}/etc/opendnssec" \
            "${pkgdir}/var/lib/opendnssec"
            
  rm "${pkgdir}/run" -R
}
