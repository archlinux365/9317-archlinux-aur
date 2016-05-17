# Maintainer: Anthony25 <anthony.ruhier @ gmail.com>
# Contributor: Bruno Pagani (a.k.a. ArchangeGabriel) <bruno.n.pagani @ gmail.com>
# Thanks to @xenom, contributor of firefox-nightly

_name=firefox
_channel=nightly
_lang=fr
_full_name=${_name}-${_channel}
pkgname=${_full_name}-${_lang}
pkgdesc="Standalone Web Browser from Mozilla — Nightly build (${_lang})"
url="https://nightly.mozilla.org/"
_version='49.0a1'
pkgver=49.0a1.20160517
pkgrel=1
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
depends=('alsa-lib' 'dbus-glib' 'gtk2' 'gtk3' 'libxt' 'nss' 'mime-types')
optdepends=('ffmpeg: h.264 video'
            'hunspell: spell checking'
            'hyphen: hyphenation')
_url="https://ftp.mozilla.org/pub/mozilla.org/${_name}/nightly/latest-mozilla-central"
_url_l10n="${_url}-l10n"
_src="${_name}-${_version}.${_lang}.linux"
_file_i686="${_src}-i686.tar.bz2"
_file_x86_64="${_src}-x86_64.tar.bz2"
_sums_i686="${_url_l10n}/${_src}-i686.checksums"
_sums_x86_64="${_url_l10n}/${_src}-x86_64.checksums"
source=(
    'firefox-nightly.desktop'
    'firefox-nightly-safe.desktop'
    'vendor.js'
)
source_i686=("${_url_l10n}/${_file_i686}" "${_sums_i686}"{,.asc})
source_x86_64=("${_url_l10n}/${_file_x86_64}" "${_sums_x86_64}"{,.asc})
sha512sums=(
    '725babc1365e02a30f50aafbc069b04a97cd247f76240b99b0a734dcce0e560f30cfd441efe9b0b9edcc48f327c8adad34e1ae45c2ba047205c84921d5e43e59'
    '2df6b84978ec459ffad3e0d285c816da07a890db30284d3b2bec250472c10e08003edf705278cb97e02a52fb5f1325d962c08d5fbcf98f484e982a97e381407b'
    'bae5a952d9b92e7a0ccc82f2caac3578e0368ea6676f0a4bc69d3ce276ef4f70802888f882dda53f9eb8e52911fb31e09ef497188bcd630762e1c0f5293cc010'
)
_srcsum_i686="$(curl -s "${_sums_i686}" | grep "${_file_i686}" | grep sha512 | cut -d " " -f1)"
_srcsum_x86_64="$(curl -s "${_sums_x86_64}" | grep "${_file_x86_64}" | grep sha512 | cut -d " " -f1)"
sha512sums_i686=("${_srcsum_i686}" 'SKIP' 'SKIP')
sha512sums_x86_64=("${_srcsum_x86_64}" 'SKIP' 'SKIP')
validpgpkeys=('14F26682D0916CDD81E37B6D61B7B526D98F0353') # Mozilla’s GnuPG release key

pkgver() {
  SRC_VER="${_name}-${_version}.en-US.linux-${CARCH}.txt"
  curl -OR "${_url}/${SRC_VER}"
  echo "${_version}.$(head -n1 ${SRC_VER} | cut -c -8)"
}

package() {
  OPT_PATH="/opt/${_name}-${_version}"

  # Remove Loop (Firefox Hello) and GetPocket (Pocket proprietary service).
  # Comment this line if you want to keep them.
  rm -rf ${_name}/browser/features/{loop@mozilla.org.xpi,firefox@getpocket.com.xpi}

  # Install the package files
  install -d "${pkgdir}"/{usr/{bin,share/applications},opt}
  cp -r ${_name} "${pkgdir}/${OPT_PATH}"
  ln -s "${OPT_PATH}/${_name}" "${pkgdir}/usr/bin/${_full_name}"

  # Install .desktop files
  install -m644 "${srcdir}"/{${_full_name}.desktop,${_full_name}-safe.desktop} "${pkgdir}/usr/share/applications/"

  # Install icons
  SRC_LOC="${srcdir}/${_name}/browser"
  DEST_LOC="${pkgdir}/usr/share/icons/hicolor"
  for i in 16 32 48
  do
      install -Dm644 "${SRC_LOC}/chrome/icons/default/default${i}.png" "${DEST_LOC}/${i}x${i}/apps/${_full_name}.png"
  done
  install -Dm644 "${SRC_LOC}/icons/mozicon128.png" "${DEST_LOC}/128x128/apps/${_full_name}.png"

  # Disable auto-updates
  install -Dm644 "${srcdir}/vendor.js" "${pkgdir}/${OPT_PATH}/browser/defaults/preferences/vendor.js"

  # Use system-provided dictionaries
  rm -rf "${pkgdir}/${OPT_PATH}"/{dictionaries,hyphenation}
  ln -sf /usr/share/hunspell "${pkgdir}/${OPT_PATH}/dictionaries"
  ln -sf /usr/share/hyphen "${pkgdir}/${OPT_PATH}/hyphenation"
}
