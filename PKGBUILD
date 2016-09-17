#!/usr/bin/env bash
# -*- coding: utf-8 -*-
# region header
# Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

# License
# -------

# This library written by Torben Sickert stand under a creative commons naming
# 3.0 unported license. see http://creativecommons.org/licenses/by/3.0/deed.de
# endregion
pkgname=generic-service-handler
pkgver=VERSION
pkgrel=2
pkgdesc='easy service handling'
arch=('any')
url='http://torben.website/genericServiceHandler'
license=('CC-BY-3.0')
depends=()
provides=(generic-service-handler)
source=('https://raw.githubusercontent.com/thaibault/genericServiceHandler/master/genericServiceHandler.sh')
md5sums=('SKIP')

pkgver() {
    printf "1.0.$(git rev-list --count HEAD)"
}

package() {
    install -D --mode 755 "${srcdir}/genericServiceHandler.sh" \
        "${pkgdir}/usr/bin/generic-service-handler"
}
# region vim modline
# vim: set tabstop=4 shiftwidth=4 expandtab:
# vim: foldmethod=marker foldmarker=region,endregion:
# endregion
