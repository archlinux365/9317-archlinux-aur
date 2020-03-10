# Maintainer: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Aaron Griffin <aaron@archlinux.org>
# Contributor: judd <jvinet@zeroflux.org>
# Contributor: Christoph Gysin <christoph.gysin@gmail.com>

pkgname=openssh-gssapi
_pkgname=openssh
pkgver=8.2p1
pkgrel=1
pkgdesc='Premier connectivity tool for remote login with the SSH protocol'
url='https://www.openssh.com/portable.html'
license=('custom:BSD')
conflicts=(${_pkgname})
provides=(${_pkgname})
arch=('x86_64')
makedepends=('linux-headers' 'git' 'libfido2')
depends=('krb5' 'openssl' 'libedit' 'ldns')
optdepends=('xorg-xauth: X11 forwarding'
            'x11-ssh-askpass: input passphrase in X'
            'libfido2: FIDO/U2F support')
validpgpkeys=('59C2118ED206D927E667EBE3D3E5F56B6D920D30')
source=("https://ftp.openbsd.org/pub/OpenBSD/OpenSSH/portable/${_pkgname}-${pkgver}.tar.gz"{,.asc}
        'sshdgenkeys.service'
        'sshd.service'
        'sshd.conf'
        'sshd.pam'
        'glibc-2.31.patch'
        'openssh-gssapi-debian.patch')
sha256sums=('43925151e6cf6cee1450190c0e9af4dc36b41c12737619edff8bcebdff64e671'
            'SKIP'
            '4031577db6416fcbaacf8a26a024ecd3939e5c10fe6a86ee3f0eea5093d533b7'
            'e40f8b7c8e5e2ecf3084b3511a6c36d5b5c9f9e61f2bb13e3726c71dc7d4fbc7'
            '4effac1186cc62617f44385415103021f72f674f8b8e26447fc1139c670090f6'
            '64576021515c0a98b0aaf0a0ae02e0f5ebe8ee525b1e647ab68f369f81ecd846'
            '25b4a4d9e2d9d3289ef30636a30e85fa1c71dd930d5efd712cca1a01a5019f93'
            '10441cbd6116b45f409afd95aa0b682b1ed389c771996a8d9eb117633131f6fa')

backup=('etc/ssh/ssh_config' 'etc/ssh/sshd_config' 'etc/pam.d/sshd')

install=install

prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    patch -p1 -i ../glibc-2.31.patch
    patch -p1 -i ../openssh-gssapi-debian.patch
    autoreconf
}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"

    ./configure \
        --prefix=/usr \
        --sbindir=/usr/bin \
        --libexecdir=/usr/lib/ssh \
        --sysconfdir=/etc/ssh \
        --disable-strip \
        --with-ldns \
        --with-libedit \
        --with-security-key-builtin \
        --with-ssl-engine \
        --with-pam \
        --with-privsep-user=nobody \
        --with-kerberos5=/usr \
        --with-xauth=/usr/bin/xauth \
        --with-md5-passwords \
        --with-pid-dir=/run \
        --with-default-path='/usr/local/sbin:/usr/local/bin:/usr/bin' \
        --with-gssapi \

    make
}

check() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    # Tests require openssh to be already installed system-wide,
    # also connectivity tests will fail under makechrootpkg since
    # it runs as nobody which has /bin/false as login shell.

    if [[ -e /usr/bin/scp && ! -e /.arch-chroot ]]; then
        make tests
    fi
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"

    make DESTDIR="${pkgdir}" install

    ln -sf ssh.1.gz "${pkgdir}"/usr/share/man/man1/slogin.1.gz
    install -Dm644 LICENCE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENCE"

    install -Dm644 ../sshdgenkeys.service "${pkgdir}"/usr/lib/systemd/system/sshdgenkeys.service
    install -Dm644 ../sshd.service "${pkgdir}"/usr/lib/systemd/system/sshd.service
    install -Dm644 ../sshd.conf "${pkgdir}"/usr/lib/tmpfiles.d/sshd.conf
    install -Dm644 ../sshd.pam "${pkgdir}"/etc/pam.d/sshd

    install -Dm755 contrib/findssl.sh "${pkgdir}"/usr/bin/findssl.sh
    install -Dm755 contrib/ssh-copy-id "${pkgdir}"/usr/bin/ssh-copy-id
    install -Dm644 contrib/ssh-copy-id.1 "${pkgdir}"/usr/share/man/man1/ssh-copy-id.1

    sed \
        -e '/^#ChallengeResponseAuthentication yes$/c ChallengeResponseAuthentication no' \
        -e '/^#PrintMotd yes$/c PrintMotd no # pam does that' \
        -e '/^#UsePAM no$/c UsePAM yes' \
        -i "${pkgdir}"/etc/ssh/sshd_config
}
