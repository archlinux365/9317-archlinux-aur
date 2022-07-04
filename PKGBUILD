# Maintainer: taotieren <admin@taotieren.com>

pkgbase=stc-isp-wine
pkgname=(stc-isp{,-tiny}-wine)
pkgver=v6.89G
pkgrel=0
arch=('x86_64')
url="http://www.stcmcudata.com"
license=('unknow')
provides=('STC-ISP')
conflicts=('stc-isp' 'stc-isp-bin')
replaces=('stc-isp-bin')
depends=('wine' 'wqy-microhei' 'winetricks' 'wine-mono' 'wine-gecko')
optdepends=("wine-mono-gecko-version-fix: Fix the version numbers of wine-mono and wine-gecko files to solve the dialog box that pops up when starting wine.")
makedepends=('unarchiver')
backup=()
options=('!strip')
install=${pkgname}.install
source=("${pkgname%-wine}-${pkgver}.zip::${url}/STCISP/${pkgname%-wine}-15xx-${pkgver}.zip"
        "${pkgname%-wine}-tiny-${pkgver}.zip::${url}/STCISP/${pkgname%-wine}-15xx-${pkgver}-tiny.zip"
        "stc-isp-wine.install"
        "stc-isp-tiny-wine.install")
sha256sums=('bbc597e16005e02266353e4412a1dcff23ac18abee32c29381b48dfc356ee39d'
            'e07daf403988e66c26d1105b0583572fff65f23af5fa6cbd188fa2a7b7dfaed9'
            'b2a93211b74f6e23a9c4dd508c65bf374c0a03c11174092f6ccec3e9194e47a6'
            'b2a93211b74f6e23a9c4dd508c65bf374c0a03c11174092f6ccec3e9194e47a6')
noextract=("${pkgname%-wine}-${pkgver}.zip"
            "${pkgname%-wine}-tiny-${pkgver}.zip")

prepare() {
    unar -e GBK "${srcdir}/${pkgname%-wine}-${pkgver}.zip"
    unar -e GBK "${srcdir}/${pkgname%-wine}-tiny-${pkgver}.zip"
}

package_stc-isp-wine() {
    export LC_CTYPE="zh_CN.UTF-8"

    pkgdesc="Wine STC-ISP 下载编程烧录软件"

    _stc="opt/STCMCU"
    _ftname="wqy-microhei.ttc"

    install -dm0755 "${pkgdir}/${_stc}/${pkgname%-wine}"

    cp -ra "${srcdir}/${pkgname%-wine}-${pkgver}/${pkgname%-wine}-${pkgver}.exe" "${pkgdir}/${_stc}/${pkgname%-wine}"

    find "${pkgdir}/${_stc}" -type f -exec chmod 644 "{}" \;
    find "${pkgdir}/${_stc}" -type d -exec chmod 755 "{}" \;

    install -Dm0644 /dev/stdin "${pkgdir}/${_stc}/${pkgname%-wine}/regpatch.reg" << EOF
REGEDIT4

[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink]
"Lucida Sans Unicode"="${_ftname}"
"Microsoft Sans Serif"="${_ftname}"
"MS Sans Serif"="${_ftname}"
"Tahoma"="${_ftname}"
"Tahoma Bold"="${_ftname}"
"SimSun"="${_ftname}"
"Arial"="${_ftname}"
"Arial Black"="${_ftname}"
"Lucida Sans Unicode"=str(7):"${_ftname}"
"Microsoft Sans Serif"=str(7):"${_ftname}"
"Tahoma"=str(7):"${_ftname}"
"Lucida Sans Unicode"="${_ftname}"
"Microsoft Sans Serif"="${_ftname}"
"Microsoft YaHei"="${_ftname}"
"微软雅黑"="${_ftname}"
"宋体"="${_ftname}"
"新細明體"="${_ftname}"
"DFKai-SB"="${_ftname}"
"FangSong"="${_ftname}"
"KaiTi"="${_ftname}"
"Microsoft JhengHei"="${_ftname}"
"Microsoft YaHei"="${_ftname}"
"MingLiU"="${_ftname}"
"NSimSun"="${_ftname}"
"PMingLiU"="${_ftname}"
"SimHei"="${_ftname}"
"SimKai"="${_ftname}"
"SimSun"="${_ftname}"

[HKEY_CURRENT_USER\Software\Wine\X11 Driver]
"ClientSideAntiAliasWithCore"="N"
"ClientSideAntiAliasWithRender"="N"
"ClientSideWithRender"="N"

[HKEY_CURRENT_USER\Control Panel\Desktop]
"FontSmoothing"="2"
"FontSmoothingType"=dword:00000002
"FontSmoothingGamma"=dword:00000578
"FontSmoothingOrientation"=dword:00000001

[HKEY_LOCAL_MACHINE\Software\Wine\Ports]
"COM1"="/dev/ttyUSB0"
"COM2"="/dev/ttyUSB1"
"COM3"="/dev/ttyUSB2"
"COM4"="/dev/ttyUSB3"
"COM5"="/dev/ttyUSB4"
"COM6"="/dev/ttyUSB5"
"COM7"="/dev/ttyUSB6"
"COM8"="/dev/ttyUSB7"
"COM9"="/dev/ttyUSB8"
"COM10"="/dev/ttyACM0"
"COM11"="/dev/ttyACM1"
"COM12"="/dev/ttyACM2"
"COM13"="/dev/ttyACM3"
"COM14"="/dev/ttyACM4"
"COM15"="/dev/ttyACM5"
"COM16"="/dev/ttyACM6"
"COM17"="/dev/ttyACM7"
"COM18"="/dev/ttyACM8"
"COM19"="/dev/ttyACM9"
EOF

    install -Dm0755 /dev/stdin "${pkgdir}/usr/bin/${pkgname%-wine}" << EOF
#!/bin/bash
export LC_CTYPE="zh_CN.UTF-8"
export WINEARCH=win32 WINEPREFIX="$HOME/.${pkgname%-wine}/wine"

if [ ! -d "$HOME"/.${pkgname%-wine} ] ; then
    mkdir -p "$HOME"/.${pkgname%-wine}/wine || exit 1

    cp -r /${_stc}/${pkgname%-wine}/regpatch.reg "$HOME"/.${pkgname%-wine}/wine || exit 1

    ln -s /${_stc}/${pkgname%-wine}/${pkgname%-wine}-${pkgver}.exe "$HOME"/.${pkgname%-wine}/${pkgname%-wine} || exit 1
fi

if [ ! -f "$HOME"/.${pkgname%-wine}/regpatchok ] ; then
    touch "$HOME"/.${pkgname%-wine}/regpatchok || exit 1
    cd "$HOME"/.${pkgname%-wine}/wine && regedit regpatch.reg && wineserver -k
    winetricks -q mfc42
fi

wine "$HOME"/.${pkgname%-wine}/${pkgname%-wine} "\$@"
EOF

    install -Dm0644 /dev/stdin "${pkgdir}/usr/share/applications/${pkgname%-wine}.desktop" << EOF
[Desktop Entry]
Name=${pkgname%-wine}
Name[zh_CN]=${pkgname%-wine}
Comment=${pkgdesc}
#MimeType=application/x-${pkgname%-wine};
Exec=${pkgname%-wine} %f
Type=Application
Categories=Development;Tool;
Terminal=false
Icon=${pkgname%-wine}.png
Version=${pkgver}
EOF
}

package_stc-isp-tiny-wine() {
    export LC_CTYPE="zh_CN.UTF-8"

    pkgdesc="Wine STC-ISP 简化版下载编程烧录软件"

    _stc="opt/STCMCU"
    _ftname="wqy-microhei.ttc"

    install -dm0755 "${pkgdir}/${_stc}/${pkgname%-wine}"

    cp -ra "${srcdir}/${pkgname%-wine}-${pkgver}/${pkgname%-tiny-wine}-${pkgver}-tiny.exe" "${pkgdir}/${_stc}/${pkgname%-wine}/${pkgname%-wine}-${pkgver}.exe"

    find "${pkgdir}/${_stc}" -type f -exec chmod 644 "{}" \;
    find "${pkgdir}/${_stc}" -type d -exec chmod 755 "{}" \;

    install -Dm0644 /dev/stdin "${pkgdir}/${_stc}/${pkgname%-wine}/regpatch.reg" << EOF
REGEDIT4

[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink]
"Lucida Sans Unicode"="${_ftname}"
"Microsoft Sans Serif"="${_ftname}"
"MS Sans Serif"="${_ftname}"
"Tahoma"="${_ftname}"
"Tahoma Bold"="${_ftname}"
"SimSun"="${_ftname}"
"Arial"="${_ftname}"
"Arial Black"="${_ftname}"
"Lucida Sans Unicode"=str(7):"${_ftname}"
"Microsoft Sans Serif"=str(7):"${_ftname}"
"Tahoma"=str(7):"${_ftname}"
"Lucida Sans Unicode"="${_ftname}"
"Microsoft Sans Serif"="${_ftname}"
"Microsoft YaHei"="${_ftname}"
"微软雅黑"="${_ftname}"
"宋体"="${_ftname}"
"新細明體"="${_ftname}"
"DFKai-SB"="${_ftname}"
"FangSong"="${_ftname}"
"KaiTi"="${_ftname}"
"Microsoft JhengHei"="${_ftname}"
"Microsoft YaHei"="${_ftname}"
"MingLiU"="${_ftname}"
"NSimSun"="${_ftname}"
"PMingLiU"="${_ftname}"
"SimHei"="${_ftname}"
"SimKai"="${_ftname}"
"SimSun"="${_ftname}"

[HKEY_CURRENT_USER\Software\Wine\X11 Driver]
"ClientSideAntiAliasWithCore"="N"
"ClientSideAntiAliasWithRender"="N"
"ClientSideWithRender"="N"

[HKEY_CURRENT_USER\Control Panel\Desktop]
"FontSmoothing"="2"
"FontSmoothingType"=dword:00000002
"FontSmoothingGamma"=dword:00000578
"FontSmoothingOrientation"=dword:00000001

[HKEY_LOCAL_MACHINE\Software\Wine\Ports]
"COM1"="/dev/ttyUSB0"
"COM2"="/dev/ttyUSB1"
"COM3"="/dev/ttyUSB2"
"COM4"="/dev/ttyUSB3"
"COM5"="/dev/ttyUSB4"
"COM6"="/dev/ttyUSB5"
"COM7"="/dev/ttyUSB6"
"COM8"="/dev/ttyUSB7"
"COM9"="/dev/ttyUSB8"
"COM10"="/dev/ttyACM0"
"COM11"="/dev/ttyACM1"
"COM12"="/dev/ttyACM2"
"COM13"="/dev/ttyACM3"
"COM14"="/dev/ttyACM4"
"COM15"="/dev/ttyACM5"
"COM16"="/dev/ttyACM6"
"COM17"="/dev/ttyACM7"
"COM18"="/dev/ttyACM8"
"COM19"="/dev/ttyACM9"
EOF

    install -Dm0755 /dev/stdin "${pkgdir}/usr/bin/${pkgname%-wine}" << EOF
#!/bin/bash
export LC_CTYPE="zh_CN.UTF-8"
export WINEARCH=win32 WINEPREFIX="$HOME/.${pkgname%-wine}/wine"

if [ ! -d "$HOME"/.${pkgname%-wine} ] ; then
    mkdir -p "$HOME"/.${pkgname%-wine}/wine || exit 1

    cp -r /${_stc}/${pkgname%-wine}/regpatch.reg "$HOME"/.${pkgname%-wine}/wine || exit 1

    ln -s /${_stc}/${pkgname%-wine}/${pkgname%-wine}-${pkgver}.exe "$HOME"/.${pkgname%-wine}/${pkgname%-wine} || exit 1
fi

if [ ! -f "$HOME"/.${pkgname%-wine}/regpatchok ] ; then
    touch "$HOME"/.${pkgname%-wine}/regpatchok || exit 1
    cd "$HOME"/.${pkgname%-wine}/wine && regedit regpatch.reg && wineserver -k
    winetricks -q mfc42
fi

wine "$HOME"/.${pkgname%-wine}/${pkgname%-wine} "\$@"
EOF

    install -Dm0644 /dev/stdin "${pkgdir}/usr/share/applications/${pkgname%-wine}.desktop" << EOF
[Desktop Entry]
Name=${pkgname%-wine}
Name[zh_CN]=${pkgname%-wine}
Comment=${pkgdesc}
#MimeType=application/x-${pkgname%-wine};
Exec=${pkgname%-wine} %f
Type=Application
Categories=Development;Tool;
Terminal=false
Icon=${pkgname%-wine}.png
Version=${pkgver}
EOF
}
