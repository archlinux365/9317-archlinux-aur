# Maintainer: XZS <d dot f dot fischer at web dot de>
# Contributor: FadeMind <fademind@gmail.com>

pkgname=aurora-themes
pkgver=3.20.20160705
pkgrel=1
pkgdesc='Easy On The Eyes GNOME Shell, GTK2, GTK3 and Cinnamon themes'
arch=('any')
url='https://www.opendesktop.org/p/1143475'
license=('GPL3')
makedepends=('jq')
optdepends=('gtk-engine-murrine: for GTK2 themes')
source=("version::version://dl.opendesktop.org/api/files/index?format=json&status=active&collection_content_id=${url##*/}"
        'https://dl.opendesktop.org/api/files/download/id/1468995652/Dark-Aurora.tar.gz')
sha256sums=('1677d88c4ec71ec160aeb98855becaaadd5e1386a5a7ee3d645e3158488b0a01'
            '6fbdaaae2e59b5f514ca003ba2552fcb7eb5724bd278e291ed5ae2036563d6ff')

# The following is a very convoluted script because of makepkg's DLAGENTS escaping logic.
# An agent is added for the protocol "version". It is treated like http, which is done by processing
# the input url %u with sed, replacing the protocol back to http. Everything downloaded is then not
# immediatley saved to the output file name %o, but first piped through jq, which simplifies the
# JSON metadata received from the Dark Aurora page on GNOME-Look.org. This makes it more accessible
# for the following functions which then do not need to repeat the prefix again and again.
DLAGENTS=("version::/usr/bin/bash -c $(
  printf '%s\n' "${DLAGENTS[@]}" | sed -n 's/http::\(.*\)/\1/p' \
    | sed 's/-[^ ] %o //' | sed 's/ /\\ /g' | sed 's/%u/$(echo\\ \"%u\"\\ |\\ sed\\ "s\/^version\/http\/")/'
)\ |\ jq\ -j\ '.files.\"0\"'\ >\ %o"
"${DLAGENTS[@]}")

pkgver() {
  js -j '.version' version
  while read -rd $'\0'
  do
    if [[ "$REPLY" -gt "$max" ]]
    then
      max="$REPLY"
    fi
  done < <(find */ -type f -exec stat --printf="%Y\0" '{}' +)
  date -d "@$max" +.%Y%m%d
}

package() {
  extend-optdepends
  install -d ${pkgdir}/usr/share/themes
  cp --no-preserve=mode -r ${srcdir}/*/ ${pkgdir}/usr/share/themes
} 

# Hidden in a subfunction not to show up in the .SRCINFO.
extend-optdepends() {
  optdepends+=("gnome-shell=$(jq -j .version version): for gnome-shell themes")
}
