# Maintainer: Anton Kudryavtsev <anton@anidetrix.ru>
# Contributor: Francois Menning <f.menning@protonmail.com>
# Contributor: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Thomas Fanninger <thomas@fanninger.at>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Thomas Laroche <tho.laroche@gmail.com>

_pkgname="gitea"
_gourl="code.gitea.io"

pkgname=$_pkgname-git
pkgver=r5656.a04718a2
pkgrel=1
pkgdesc="A painless self-hosted Git service."
url="https://gitea.io/"
license=("MIT")
arch=("i686" "x86_64" "armv6h" "armv7h")
depends=("git")
makedepends=("go")
optdepends=("sqlite: SQLite support"
            "mariadb: MariaDB support"
            "postgresql: PostgreSQL support"
            "mssql-server: MSSQL support"
            "redis: Redis support"
            "memcached: MemCached support"
            "openssh: GIT over SSH support"
            "pam: Authentication via PAM support")
conflicts=("gitea")
provides=("gitea")
options=("!strip" "emptydirs")
backup=("etc/gitea/app.ini")
install=${_pkgname}.install
source=("git://github.com/go-gitea/gitea.git"
        "0001-Adjust-config-for-Arch-Linux-package.patch"
        "0002-Adjust-service-file-for-Arch-Linux-package.patch")
sha256sums=("SKIP"
            "b50a9ef21216a1cd2183238f7baa2d37f9bca11706625a8ffb345ed8f838e540"
            "6cd1daa666659a68c98376f8bfae55402b5ffc39c1bf42b5ae0ee700249a3b73")

pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p "${srcdir}/src/${_gourl}/${_pkgname}"
  cp -r "${srcdir}/${_pkgname}" "${srcdir}/src/${_gourl}"

  msg2 "Patch config and service file"
  patch -Np1 -i "${srcdir}/0001-Adjust-config-for-Arch-Linux-package.patch" "${srcdir}/src/${_gourl}/${_pkgname}/conf/app.ini"
  patch -Np1 -i "${srcdir}/0002-Adjust-service-file-for-Arch-Linux-package.patch" "${srcdir}/src/${_gourl}/${_pkgname}/contrib/systemd/${_pkgname}.service"
}

build() {
  cd "${srcdir}/src/${_gourl}/${_pkgname}"
  GOPATH="${srcdir}" make DESTDIR="${pkgdir}/" TAGS="sqlite tidb pam" clean generate build
}

package() {
  install -Dm0755 "${srcdir}/src/${_gourl}/${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"

  install -dm0700 "${pkgdir}/var/log/${_pkgname}/"
  install -dm0755 "${pkgdir}/usr/share/${_pkgname}/"
  install -dm0755 "${pkgdir}/etc/${_pkgname}/"

  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/conf/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/custom/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/data/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/data/attachments/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/data/avatars/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/data/lfs/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/data/sessions/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/indexers/"
  install -dm0700 "${pkgdir}/var/lib/${_pkgname}/repos/"

  cp -r "${srcdir}/src/${_gourl}/${_pkgname}/options/locale" "${pkgdir}/var/lib/${_pkgname}/conf"
  cp -r "${srcdir}/src/${_gourl}/${_pkgname}/conf" "${pkgdir}/usr/share/${_pkgname}"
  cp -r "${srcdir}/src/${_gourl}/${_pkgname}/public" "${pkgdir}/usr/share/${_pkgname}"
  cp -r "${srcdir}/src/${_gourl}/${_pkgname}/templates" "${pkgdir}/usr/share/${_pkgname}"

  install -Dm0644 "${pkgdir}/usr/share/${_pkgname}/conf/app.ini" "${pkgdir}/etc/${_pkgname}/app.ini"
  install -Dm0644 "${srcdir}/src/${_gourl}/${_pkgname}/contrib/systemd/${_pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
  install -Dm0644 "${srcdir}/src/${_gourl}/${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}"
}
