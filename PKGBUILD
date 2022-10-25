# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>

java_=11
pkgname_=graalpy
pkgname__=graalpython
pkgname="${pkgname_}-jdk${java_}-bin"
pkgver=22.3.0
pkgrel=1
pkgdesc="GraalVM-based, high-performance implementation of the Python language (early development), Java ${java_} version"
arch=('x86_64'
      'aarch64')
url='https://github.com/graalvm/graalpython'
license=('custom')
depends=(
    "jdk${java_}-graalvm-bin"
    'gcc-libs'
    'libxcrypt-compat'
    'zlib'
)
replaces=("${pkgname__}-jdk${java_}-bin")
source_x86_64=("https://github.com/graalvm/$pkgname__/releases/download/vm-${pkgver}/python-installable-svm-java${java_}-linux-amd64-${pkgver}.jar")
source_aarch64=("https://github.com/graalvm/$pkgname__/releases/download/vm-${pkgver}/python-installable-svm-java${java_}-linux-aarch64-${pkgver}.jar")
sha256sums_x86_64=('6d03d12c1a974a7280fbc81e7655c8afd0b7d963d20ea09076a4172d1566a53a')
sha256sums_aarch64=('43727de236e48c85e1fc38ce35260becdb24ba5fc2fa4280066e890ec4c01edf')

package() {
    local file eq permissions mode name target

    mkdir -p "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/"
    cp -a -t "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/" languages/ lib/ LICENSE_GRAALPY.txt THIRD_PARTY_LICENSE_GRAALPY.txt

    printf '\n' >> META-INF/permissions
    while read -r file eq permissions; do
        if [[ $eq != '=' ]]; then
            printf >&2 'second word should be "=": %s %s %s\n' "$file" "$eq" "$permissions"
            return 1
        fi
        case $permissions in
            'rw-------') mode=600;;
            'rw-r--r--') mode=644;;
            'rw-rw-r--') mode=664;;
            'rwxr-xr-x') mode=755;;
            'rwxrwxr-x') mode=775;;
            'rwxrwxrwx') continue;; # symbolic link
            *)
                printf >&2 'unknown permissions: %s\n' "$permissions"
                return 1
                ;;
        esac
        chmod "$mode" -- "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/$file"
    done < META-INF/permissions

    printf '\n' >> META-INF/symlinks
    while read -r name eq target; do
        if [[ $eq != '=' ]]; then
            printf >&2 'second word should be "=": %s %s %s\n' "$name" "$eq" "$target"
            return 1
        fi
        mkdir -p -- "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/$(dirname -- "$name")"
        ln -s -- "$target" "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/$name"
    done < META-INF/symlinks

    # already in jdk${java_}-graalvm-bin package
    unlink "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/lib/installer/components/org.graalvm.component"

    install -DTm644 LICENSE_GRAALPY.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
