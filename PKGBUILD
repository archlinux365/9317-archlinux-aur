# Maintainer: Franck Lucien Duriez <franck.lucien.duriez@gmail.com>
# Maintainer: Det <nimetonmaili g-mail>

_pkgname=jdk
pkgname=jdk8-arm64
_major=8
_minor=191
_build=b12
_hash=2787e4a523244c269598db4e85c51e0c
pkgver=${_major}u${_minor}
pkgrel=1
pkgdesc="Oracle Java $_major Development Kit for Raspberry 3"
_arch=arm64-vfp-hflt
arch=('aarch64')
url="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
license=('custom:Oracle')
depends=('ca-certificates-java' 'hicolor-icon-theme' 'java-environment-common' 'java-runtime-common' 'nss' 'xdg-utils')
optdepends=('alsa-lib: for basic sound support')
provides=("java-runtime=$_major" "java-runtime-headless=$_major" "java-web-start=$_major" "java-environment=$_major"
          "java-runtime-jre=$_major" "java-runtime-headless-jre=$_major" "java-web-start-jre=$_major" "java-environment-jdk=$_major"
          "java-openjfx=$_major")

# Variables
DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')
_jname=${_pkgname}${_major}
_jvmdir=/usr/lib/jvm/java-$_major-$_pkgname

backup=("etc/java-$_jname/aarch64/jvm.cfg"
        "etc/java-$_jname/images/cursors/cursors.properties"
        "etc/java-$_jname/management/jmxremote.access"
        "etc/java-$_jname/management/management.properties"
        "etc/java-$_jname/security/java.policy"
        "etc/java-$_jname/security/java.security"
        "etc/java-$_jname/content-types.properties"
        "etc/java-$_jname/flavormap.properties"
        "etc/java-$_jname/fontconfig.properties.src"
        "etc/java-$_jname/logging.properties"
        "etc/java-$_jname/net.properties"
        "etc/java-$_jname/psfont.properties.ja"
        "etc/java-$_jname/psfontj2d.properties"
        "etc/java-$_jname/sound.properties")
options=('!strip') # JDK debug-symbols
install=$pkgname.install

source=("http://download.oracle.com/otn-pub/java/jdk/$pkgver-$_build/$_hash/$_pkgname-$pkgver-linux-$_arch.tar.gz"
        "http://download.oracle.com/otn-pub/java/jce/$_major/jce_policy-$_major.zip")
md5sums=('15b091a66de576b3fc3788423c7243ce'
         'b3c7031bc65c28c2340302065e7d00d3')

package() {
    cd "${_pkgname}1.${_major}.0_${_minor}"

    msg2 "Creating directory structure..."
    install -d "$pkgdir/etc/.java/.systemPrefs"
    install -d "$pkgdir/usr/lib/jvm/java-$_major-$_pkgname/bin"
    install -d "$pkgdir/usr/lib/mozilla/plugins"
    install -d "$pkgdir/usr/share/licenses/java$_major-$_pkgname"

    msg2 "Removing redundancies..."
    rm    jre/lib/fontconfig.*.bfc
    rm    jre/lib/fontconfig.*.properties.src
    rm    jre/*.txt

    msg2 "Moving contents..."
    mv * "$pkgdir/$_jvmdir"

    # Cd to the new playground
    cd "$pkgdir/$_jvmdir"

    msg2 "Fixing directory structure..."
    # Replace duplicate binaries in bin/ with links to jre/bin/
    for i in $(ls jre/bin/); do
        ln -sf "$_jvmdir/jre/bin/$i" "bin/$i"
    done

    # Move confs to /etc and link back to /usr: /usr/lib/jvm/java-$_jname/jre/lib -> /etc
    for new_etc_path in ${backup[@]}; do
        # Old location
        old_usr_path="jre/lib/${new_etc_path#*$_jname/}"

        # Move
        install -Dm644 "$old_usr_path" "$pkgdir/$new_etc_path"
        ln -sf "/$new_etc_path" "$old_usr_path"
    done

    # Replace JKS keystore with 'ca-certificates-java'
    ln -sf '/etc/ssl/certs/java/cacerts' 'jre/lib/security/cacerts'

    # Suffix man pages
    for i in $(find 'man' -type f); do
        mv "$i" "${i/.1}-$_jname.1"
    done

    # Move man pages
    mv 'man/' "$pkgdir/usr/share"

    # Move/link licenses
    mv 'COPYRIGHT' 'LICENSE' *.txt "$pkgdir/usr/share/licenses/java$_major-$_pkgname/"
    ln -sf "/usr/share/licenses/java$_major-$_pkgname/" "$pkgdir/usr/share/licenses/$pkgname"

    msg2 "Installing Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files..."
    # Replace default "strong", but limited, cryptography to get an "unlimited strength" one for
    # things like 256-bit AES. Enabled by default in OpenJDK:
    # - http://suhothayan.blogspot.com/2012/05/how-to-install-java-cryptography.html
    # - http://www.eyrie.org/~eagle/notes/debian/jce-policy.html
    install -m644 "$srcdir/UnlimitedJCEPolicyJDK$_major/"*.jar "jre/lib/security/"
    install -Dm644 "$srcdir/UnlimitedJCEPolicyJDK$_major/README.txt" \
                   "$pkgdir/usr/share/doc/$_pkgname/README_-_Java_JCE_Unlimited_Strength.txt"

    msg2 "Enabling copy+paste in unsigned applets..."
    # Copy/paste from system clipboard to unsigned Java applets has been disabled since 6u24:
    # - https://blogs.oracle.com/kyle/entry/copy_and_paste_in_java
    # - http://slightlyrandombrokenthoughts.blogspot.com/2011/03/oracle-java-applet-clipboard-injection.html
    _line=$(awk '/permission/{a=NR}; END{print a}' "$pkgdir/etc/java-$_jname/security/java.policy")
    sed "$_line a\\\\n \
        // (AUR) Allow unsigned applets to read system clipboard, see:\n \
        // - https://blogs.oracle.com/kyle/entry/copy_and_paste_in_java\n \
        // - http://slightlyrandombrokenthoughts.blogspot.com/2011/03/oracle-java-applet-clipboard-injection.html\n \
        permission java.awt.AWTPermission \"accessClipboard\";" \
    -i "$pkgdir/etc/java-$_jname/security/java.policy"
}
