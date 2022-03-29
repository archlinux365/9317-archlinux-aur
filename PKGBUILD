# $Id$
# Maintainer: Allen Zhong <moeallenz@gmail.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Sébastien Luttringer
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Miroslaw Szot <mss@czlug.icis.pcz.pl>

_tcp_module_gitname=nginx_tcp_proxy_module
pkgname=tengine-extra
pkgver=2.3.3
pkgrel=3
pkgdesc='A web server based on Nginx and has many advanced features, originated by Taobao. Some extra modules enabled.'
arch=('x86_64')
url='http://tengine.taobao.org'
license=('custom')
depends=('pcre' 'zlib' 'openssl' 'gperftools' 'geoip' 'mailcap' 'luajit' 'libmaxminddb')
backup=('etc/tengine/fastcgi.conf'
        'etc/tengine/fastcgi_params'
        'etc/tengine/koi-win'
        'etc/tengine/koi-utf'
        'etc/tengine/tengine.conf'
        'etc/tengine/scgi_params'
        'etc/tengine/uwsgi_params'
        'etc/tengine/win-utf'
        'etc/logrotate.d/tengine')
install=tengine.install
conflicts=('tengine')
provides=('nginx' 'tengine')
_psol_ver=1.14.36.1
_nps_ver=1.14.33.1-RC1
_brotli_ver=1.0.0rc
_geoip2_ver=3.3
source=(tengine-$pkgver.tar.gz::https://github.com/alibaba/tengine/archive/$pkgver.tar.gz
        service
        logrotate
        pagespeed-v${_nps_ver}.zip::https://github.com/apache/incubator-pagespeed-ngx/archive/v${_nps_ver}.zip
        psol-v${_psol_ver}.tar.gz::https://dist.apache.org/repos/dist/release/incubator/pagespeed/${_psol_ver}/x64/psol-${_psol_ver}-apache-incubating-x64.tar.gz
        brotli-v${_brotli_ver}.tar.gz::https://github.com/google/ngx_brotli/archive/refs/tags/v${_brotli_ver}.tar.gz
        geoip2-v${_geoip2_ver}.tar.gz::https://github.com/leev/ngx_http_geoip2_module/archive/refs/tags/${_geoip2_ver}.tar.gz
        )
sha256sums=('097684d83356fcdda8a6e949bca621126db751b37f6b23591cb3894a1f8a0108'
            'c066d39d2e945b74756a2422415b086eb26a9ce34788820c86c7e3dc7c6245eb'
            '7d4bd60b9210e1dfb46bc52c344b069d5639e1ba08cd9951c0563360af238f97'
            '43e6f0a14a2244ac4524e5ef6cf5c2db6145b785470575575f5bc7373179bebf'
            '01c1c0ce36adba494973efbd79437efcfa8a5b6029e487f604da60bddf18e77b'
            'c85cdcfd76703c95aa4204ee4c2e619aa5b075cac18f428202f65552104add3b'
            '41378438c833e313a18869d0c4a72704b4835c30acaf7fd68013ab6732ff78a7')

prepare() {
    mv psol incubator-pagespeed-ngx-${_nps_ver}/
    #cd tengine-$pkgver
}

build() {
    cd tengine-$pkgver

    export LUAJIT_LIB=/usr/lib
    export LUAJIT_INC=/usr/include/luajit-2.1
    ./configure \
        --prefix=/etc/tengine \
        --conf-path=/etc/tengine/tengine.conf \
        --sbin-path=/usr/bin/tengine \
        --pid-path=/run/tengine.pid \
        --lock-path=/run/lock/tengine.lock \
        --user=http \
        --group=http \
        --build="ArchLinux" \
        --http-log-path=/var/log/tengine/access.log \
        --error-log-path=stderr \
        --http-client-body-temp-path=/var/lib/tengine/client-body \
        --http-proxy-temp-path=/var/lib/tengine/proxy \
        --http-fastcgi-temp-path=/var/lib/tengine/fastcgi \
        --http-scgi-temp-path=/var/lib/tengine/scgi \
        --http-uwsgi-temp-path=/var/lib/tengine/uwsgi \
        --with-cc-opt="$CFLAGS $CPPFLAGS" \
        --with-ld-opt="$LDFLAGS" \
        --with-compat \
        --with-file-aio \
        --with-google_perftools_module \
        --with-http_addition_module \
        --with-http_auth_request_module \
        --with-http_dav_module \
        --with-http_degradation_module \
        --with-http_flv_module \
        --with-http_geoip_module \
        --with-http_gunzip_module \
        --with-http_gzip_static_module \
        --with-http_lua_module \
        --with-http_mp4_module \
        --with-http_realip_module \
        --with-http_secure_link_module \
        --with-http_slice_module \
        --with-http_ssl_module \
        --with-http_stub_status_module \
        --with-http_sub_module \
        --with-http_v2_module \
        --with-mail \
        --with-mail_ssl_module \
        --with-pcre-jit \
        --with-stream \
        --with-stream_geoip_module \
        --with-stream_realip_module \
        --with-stream_ssl_module \
        --with-stream_ssl_preread_module \
        --with-threads \
        --add-dynamic-module=$srcdir/incubator-pagespeed-ngx-${_nps_ver} \
        --add-dynamic-module=$srcdir/ngx_brotli-${_brotli_ver} \
        --add-dynamic-module=$srcdir/ngx_http_geoip2_module-${_geoip2_ver}

    make
}

package() {
    cd tengine-$pkgver
    make DESTDIR="$pkgdir" install

    sed -e 's|\<user\s\+\w\+;|user html;|g' \
        -e '44s|html|/usr/share/tengine/html|' \
        -e '54s|html|/usr/share/tengine/html|' \
        -i "$pkgdir"/etc/tengine/tengine.conf

    rm "$pkgdir"/etc/tengine/*.default
    rm "$pkgdir"/etc/tengine/mime.types # in mailcap
    ln -s /etc/nginx/mime.types "$pkgdir"/etc/tengine/mime.types # from mailcap

    install -d "$pkgdir"/var/lib/tengine
    install -dm700 "$pkgdir"/var/lib/tengine/proxy

    chmod 755 "$pkgdir"/var/log/tengine
    chown root:root "$pkgdir"/var/log/tengine

    install -d "$pkgdir"/usr/share/tengine
    mv "$pkgdir"/etc/tengine/html/ "$pkgdir"/usr/share/tengine

    install -Dm644 "$srcdir"/logrotate "$pkgdir"/etc/logrotate.d/tengine
    install -Dm644 "$srcdir"/service "$pkgdir"/usr/lib/systemd/system/tengine.service
    install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/tengine/LICENSE

    rmdir "$pkgdir"/run

    install -d "$pkgdir"/usr/share/man/man8/
    gzip -9c man/nginx.8 > "$pkgdir"/usr/share/man/man8/tengine.8.gz

    for i in ftdetect indent syntax; do
      install -Dm644 contrib/vim/$i/nginx.vim \
        "$pkgdir/usr/share/vim/vimfiles/$i/tengine.vim"
    done
}

