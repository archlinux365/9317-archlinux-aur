# Maintainer: Det <nimetonmaili g-mail>

pkgname=lastpass
pkgver=4.1.44
_universal=$pkgver    # Version of the universal installer: https://lastpass.com/misc_download2.php
_chromver=4.1.45      # The actual extensions' versions
_chromver_lib=4.1.23
_ffver=4.1.47a
pkgrel=5
pkgdesc="The Universal LastPass installer for Firefox, Chrome, and Opera"
arch=('i686' 'x86_64')
url="https://lastpass.com"
license=('custom')
depends=('libx11' 'libxau' 'libxcb' 'libxdmcp')
optdepends=('chromium: for Chromium'
            'chromium-dev: for Chromium (Dev Channel) (AUR)'
            'firefox: for Mozilla Firefox'
            'firefox-beta-bin: for Mozilla Firefox (Beta) (AUR)'
            'firefox-nightly: for Mozilla Firefox (Nightly) (AUR)'
            'google-chrome: for Google Chrome (AUR)'
            'google-chrome-beta: for Google Chrome (Beta Channel) (AUR)'
            'google-chrome-dev: for Google Chrome (Dev Channel) (AUR)'
            'opera: for Opera'
            'opera-beta: for Opera Beta (AUR)'
            'opera-developer: for Opera Developer (AUR)')
install=$pkgname.install
source=(# Universal
        "lplinux_$_universal.tar.bz2::$url/lplinux.tar.bz2"
        # Chrome
        "lpchrome_$_chromver.crx::https://clients2.google.com/service/update2/crx?response=redirect&prodversion=56.0.2924.87&x=id%3Dhdokiejnpimakedhajhdlcegeplioahd%26uc"
        "lpchrome_lib_${_chromver_lib}.crx::$url/lpchrome_linux.crx"
        'com.lastpass.nplastpass.json'
        'lastpass_policy.json'
        # Firefox
        #"https://addons.cdn.mozilla.net/user-media/addons/8542/lastpass_password_manager-$_ffver-an+fx.xpi"
        #"$url/lp4.xpi"
        "lpfirefox_$_ffver.xpi::$url/lastpassffx/xpi.php"
        'profiles.ini')
noextract=("lpchrome_$_chromver.crx"
           "lpfirefox_$_ffver.xpi")
md5sums=('5a9bb6e274c8d5102400fa03a3cab776'  # Universal
         '0783421c93205618d9e55924907b92ec'  # Chrome
         'bd7678de722909acd89ba768edf0d5d5'  # Chrome with Lib
         '151251e415bccdffc1dc0df592d1d7e1'
         '9af777d2eea8e67ad332235718a7653d'
         'b23fd3803a2b31b7652301d6844c9db0'  # Firefox
         'd0f555a644484baccf649f7969794ece')

# 64-bit?
if [[ $CARCH = x86_64 ]]; then
    _64=64
fi

prepare() {
    # Write user var to .install
    sed -i "s/_user=[^ ]*/_user=$USER/" "$startdir"/$pkgname.install
}

_chrome_package() {
    # Install to single place for linking
    install -Dm644 lpchrome_$_chromver.crx "$pkgdir"/usr/share/lastpass/lpchrome_$_chromver.crx
    install -Dm755 lplinux/nplastpass$_64 "$pkgdir"/etc/opt/chrome/native-messaging-hosts/nplastpass$_64

    # 64-bit?
    sed -i "s|/nplastpass|/nplastpass$_64|" com.lastpass.nplastpass.json

    # JSONs
    for i in opt/chrome chromium chromium-dev; do
        # Messaging host
        install -Dm644 com.lastpass.nplastpass.json "$pkgdir"/etc/$i/native-messaging-hosts/com.lastpass.nplastpass.json

        # Allow silent installation since Chrome v21: http://www.chromium.org/administrators/policy-list-3#ExtensionInstallSources
        install -Dm644 lastpass_policy.json "$pkgdir"/etc/$i/policies/managed/lastpass_policy.json
    done
}

_firefox_package() {
    # Extension + profiles.ini go to $HOME, so do this in .install
    install -m644 lpfirefox_$_ffver.xpi "$pkgdir"/usr/share/lastpass/
    install -m644 profiles.ini "$pkgdir"/usr/share/lastpass/

    # Binary plugin
    #bsdtar -xf lpchrome_linux_${_chromver_lib}.crx libnplastpass$_64.so
    install -Dm755 libnplastpass$_64.so "$pkgdir"/usr/lib/mozilla/plugins/libnplastpass$_64.so
}

package() {
    msg2 "Installing for Google Chromes/Chromiums..."
    _chrome_package

    msg2 "Installing for Mozilla Firefoxes..."
    _firefox_package
}
