# Maintainer: Adrián Pérez de Castro <aperez@igalia.com>
pkgdesc='Sans serif font with rounded tips by Vernon Adams.'
pkgname=ttf-nunito
pkgver=3.601
pkgrel=2
arch=(any)
license=(custom:OFL)
url=https://github.com/googlefonts/nunito
_commit=ed889dda6d742a0495c1963898e1b3567ab61a15
_dl_base_url="${url}/raw/${_commit}/fonts/TTF"
source=("${_dl_base_url}/Nunito-Black.ttf"
        "${_dl_base_url}/Nunito-BlackItalic.ttf"
        "${_dl_base_url}/Nunito-Bold.ttf"
        "${_dl_base_url}/Nunito-BoldItalic.ttf"
        "${_dl_base_url}/Nunito-ExtraBold.ttf"
        "${_dl_base_url}/Nunito-ExtraBoldItalic.ttf"
        "${_dl_base_url}/Nunito-ExtraLight.ttf"
        "${_dl_base_url}/Nunito-ExtraLightItalic.ttf"
        "${_dl_base_url}/Nunito-Italic.ttf"
        "${_dl_base_url}/Nunito-Light.ttf"
        "${_dl_base_url}/Nunito-LightItalic.ttf"
        "${_dl_base_url}/Nunito-Regular.ttf"
        "${_dl_base_url}/Nunito-SemiBold.ttf"
        "${_dl_base_url}/Nunito-SemiBoldItalic.ttf"
        "${_dl_base_url}/NunitoHeavy-Regular.ttf"
        "${_dl_base_url}/NunitoHeavy-Italic.ttf"
        "${url}/raw/main/OFL.txt")
sha512sums=('f75eb1901820fa0cb9cf54433e8a68b344616bd5ddb472392b7a7a6c1f8a8aebb2192df7d6abf9c2d7c38aae1144c14c5cc32f745c99414a4eed95d0da430c83'
            'a637633bc5876f845eccb54ac999ab791301bdb67c5c2eb0dc319ffb54e3a1370af309b09ce601cbfe8c4e295e4043f5b916cd99b6c3aa94cba891194fd9976f'
            'a82cfb7a89094f5564cebc5cc8f39b2c77274fd0c2a18b04165668a342cdad226ce7f43f936956a91b02d6238f15245fcdebda0eb62ba80a86602c1597f2620c'
            'de4b6a83b1412295f6e4bf2c05bcaa68e9f3451e5b9f83c8aee542583f788c17109070d226d342f109e3e7c7b344f87780cb8f7b45bfe5eba3af22fe531c986a'
            'c566509507f6bde7e8b76be862c679aa74ec7d9d39b1fb25d83d2a51f7941ea5f53051d219ff6b78c296719b50451662788707e1ce3ad4833e759568f44ec4ee'
            '16e1ea5669d4998ab2a5d619b080ccd35740c19a39f5c260a88aba93f3dcd7fcf3c1b6e6bf64c847f380a0b3ddfc3cfd994e8bdb08d29d2dabacc80c61884f57'
            '41a558a78a63d78b2231c76170a1e34b2eb4c13427908fa874c2c5dc2f6d46404385318b8ab3c68ed0865be40a1e175ef135834c9e37ffd280b33fef8491dbf7'
            '6481701ee4ef8abb3cd8f0a4c484660bb96a0dae2f411f4fef55d95380e3aa0f9e5e5fc71cf9554bbd1969ad4882a2b6d5285617ecee6fc28fef67df2e2c0a4a'
            '13431e1defa36f632bacbff70f42ef5a99c32e99c080fc52e20e81a4a887a62d3f0f51ec5e899185a9dd8ab9bdf2ee8b3ddb4bf9fd84c8502039f73a18725ff5'
            '468f7676d90c23e6daee4ea62bc2647e2e26d3cd3f76ce321645dd9d7410a51c74038e3c33f74ee1ba750f3a14fafdb7808ebab5879e4f25cd73000bada4e87d'
            '107afd72db4096a000b149abe670363f6ad883791d8bd02f37c37d56ef1eee054a77b4a4e0658a16891fc0b837574ebd5c58888602187403a82eaae82ddd9f5d'
            '8fbed7a356e2b50466c53c056188b86a9b278f19a7f3bb0e4b3703813143078787141d262105be911e040819ff6200fb2404631d4ffd0765b9837c9476e392df'
            '1f2916a28d62b8cdaaf15accf8ab0d3b0df6363c536ebdba3067d7da92b94d466cca79c1e5bda75dff17331f671fc0b7d1181e2b3d144bb1f6b7a2e4d75b0eac'
            '893ddd8a123d6abfdd236c8d3f20dead79d410876d90ea203e45c82d95f0bfff14581282873f6d00aa286fc1132a844e7ec6335324f741a490006ecae96d1871'
            '10f33b08432a78773633b80261d73c964c5ac3c57d48c6134c49b994a38f54a49cf8b0a67ab937fb309db5ae35f7296bf8a321e664542cb64100ccd2cce68750'
            'a622768851321158c87134a4c3118939066a5e6a705524dc8996559db1c66ffbd853efe2f7413206ff24a1c803772a0847dac11708b34eff5f7b4cdfcdd37d57'
            '068569d289978824bdcec69636978705f74c368fb91a816059bbacb58ad23cf31ce9d643cdd165d60c98b84412f411c92e29034dbfbba71c13eff9033d482ab6')

package () {
        install -Dm644 -t "${pkgdir}/usr/share/fonts/${pkgname}" "${srcdir}"/*.ttf
        install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}"/OFL.txt
}
