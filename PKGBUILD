# Maintainer:  Iliya Ivanov <aur@proforge.org>
# Maintainer:  Andrew Shelyakov <andrew.shelyakov@ya.ru>
# Contributor: Aleksey Vasilenko <aleksey.vasilenko@gmail.com>

_pkgbase='php'
pkgbase="${_pkgbase}-zts"
pkgname=("${pkgbase}"
         "${pkgbase}-cgi"
         "${pkgbase}-apache"
         "${pkgbase}-fpm"
         "${pkgbase}-embed"
         "${pkgbase}-phpdbg"
         "${pkgbase}-dblib"
         "${pkgbase}-enchant"
         "${pkgbase}-gd"
         "${pkgbase}-imap"
         "${pkgbase}-intl"
         "${pkgbase}-sodium"
         "${pkgbase}-odbc"
         "${pkgbase}-pgsql"
         "${pkgbase}-pspell"
         "${pkgbase}-snmp"
         "${pkgbase}-sqlite"
         "${pkgbase}-tidy"
         "${pkgbase}-xsl")

pkgver=7.4.6
pkgrel=1
arch=('x86_64')
license=('PHP')
url='https://www.php.net/'
makedepends=('apache' 'aspell' 'c-client' 'db' 'enchant' 'gd' 'gmp' 'icu' 'libsodium' 'libxslt' 'libzip' 'net-snmp'
             'postgresql-libs' 'sqlite' 'systemd' 'tidy' 'unixodbc' 'curl' 'libtool' 'postfix' 'freetds' 'pcre2' 'libnsl'
             'oniguruma')
checkdepends=('procps-ng')
source=("https://php.net/distributions/${_pkgbase}-${pkgver}.tar.xz"{,.asc}
        'apache.patch' 'apache.conf' 'php-fpm.patch' 'php-fpm.tmpfiles' 'php.ini.patch'
        'enchant-2.patch')
sha256sums=('d740322f84f63019622b9f369d64ea5ab676547d2bdcf12be77a5a4cffd06832'
            'SKIP'
            '537e6f9f8879de2ba021b5efcaf759fccebd0e7b506d03a7ce973a5f3a482219'
            '80c00b40b0de794d87fb0183cdce2f3c93869c849f7534e8ced42ca6c625f2f7'
            '565a743a0a9d4775f8e22b70a455729b023cc90db06c0251adef6ebbe604d53a'
            '640dba0d960bfeaae9ad38d2826d3f6b5d6c175a4d3e16664eefff29141faad5'
            'f2040cc0648a395d0a84984dd6bf7aadf9f569b58838c666d84898bc4578fe04'
            'd94d22ad8bcd13829addda84e9de6b73fa04be9bc6da8622086c7e19c97ab724')
validpgpkeys=('5A52880781F755608BF815FC910DEB46F53EA312'
              '42670A7FE4D0441C8E4632349E4FDC074A4EF02D')

prepare() {
	cd ${srcdir}/${_pkgbase}-${pkgver}

	patch -p0 -i ${srcdir}/apache.patch
	patch -p0 -i ${srcdir}/php-fpm.patch
	patch -p0 -i ${srcdir}/php.ini.patch
	patch -p0 -i ${srcdir}/enchant-2.patch
	autoconf

	rm tests/output/stream_isatty_*.phpt
}

build() {
	# http://site.icu-project.org/download/61#TOC-Migration-Issues
	CPPFLAGS+=' -DU_USING_ICU_NAMESPACE=1'

	local _phpconfig="--srcdir=../${_pkgbase}-${pkgver} \
		--config-cache \
		--prefix=/usr \
		--sbindir=/usr/bin \
		--sysconfdir=/etc/php \
		--localstatedir=/var \
		--with-layout=GNU \
		--with-config-file-path=/etc/php \
		--with-config-file-scan-dir=/etc/php/conf.d \
		--disable-rpath \
		--mandir=/usr/share/man \
		"

	local _phpextensions="\
		--enable-bcmath=shared \
		--enable-calendar=shared \
		--enable-dba=shared \
		--enable-exif=shared \
		--enable-ftp=shared \
		--enable-gd=shared \
		--enable-intl=shared \
		--enable-mbstring \
		--enable-pcntl \
		--enable-shmop=shared \
		--enable-soap=shared \
		--enable-sockets=shared \
		--enable-sysvmsg=shared \
		--enable-sysvsem=shared \
		--enable-sysvshm=shared \
		--with-bz2=shared \
		--with-curl=shared \
		--with-db4=/usr \
		--with-enchant=shared \
		--with-external-gd \
		--with-external-pcre \
		--with-ffi=shared \
		--with-gdbm \
		--with-gettext=shared \
		--with-gmp=shared \
		--with-iconv=shared \
		--with-imap-ssl \
		--with-imap=shared \
		--with-kerberos \
		--with-ldap=shared \
		--with-ldap-sasl \
		--with-mhash \
		--with-mysql-sock=/run/mysqld/mysqld.sock \
		--with-mysqli=shared,mysqlnd \
		--with-openssl \
		--with-password-argon2 \
		--with-pdo-dblib=shared,/usr \
		--with-pdo-mysql=shared,mysqlnd \
		--with-pdo-odbc=shared,unixODBC,/usr \
		--with-pdo-pgsql=shared \
		--with-pdo-sqlite=shared \
		--with-pgsql=shared \
		--with-pspell=shared \
		--with-readline \
		--with-snmp=shared \
		--with-sodium=shared \
		--with-sqlite3=shared \
		--with-tidy=shared \
		--with-unixODBC=shared \
		--with-xmlrpc=shared \
		--with-xsl=shared \
		--with-zip=shared \
		--with-zlib \
		--enable-maintainer-zts \
		"

	EXTENSION_DIR=/usr/lib/php/modules
	export EXTENSION_DIR

	mkdir ${srcdir}/build
	cd ${srcdir}/build
	ln -s ../${_pkgbase}-${pkgver}/configure
	./configure ${_phpconfig} \
		--enable-cgi \
		--enable-fpm \
		--with-fpm-systemd \
		--with-fpm-acl \
		--with-fpm-user=http \
		--with-fpm-group=http \
		--enable-embed=shared \
		${_phpextensions}
	make

	# apache
	# reuse the previous run; this will save us a lot of time
	cp -a ${srcdir}/build ${srcdir}/build-apache
	cd ${srcdir}/build-apache
	./configure ${_phpconfig} \
		--with-apxs2 \
		${_phpextensions}
	make

	# phpdbg
	cp -a ${srcdir}/build ${srcdir}/build-phpdbg
	cd ${srcdir}/build-phpdbg
	./configure ${_phpconfig} \
		--enable-phpdbg \
		${_phpextensions}
	make
}

check() {
	cd ${srcdir}/build

	# Check if sendmail was configured correctly (FS#47600)
	sapi/cli/php -n -r 'echo ini_get("sendmail_path");' | grep -q '/usr/bin/sendmail'

	export REPORT_EXIT_STATUS=1
	export NO_INTERACTION=1
	export SKIP_ONLINE_TESTS=1
	export SKIP_SLOW_TESTS=1
	export TEST_PHP_ARGS="-j$(nproc)"
	export TESTS='tests Zend'

	make test
}

package_php-zts() {
	pkgdesc='A general-purpose scripting language that is especially suited to web development(ZTS enabled)'
	depends=('libxml2' 'curl' 'libzip' 'pcre2' 'argon2' 'oniguruma')
	replaces=("${_pkgbase}" 'php-ldap')
	conflicts=("${_pkgbase}" 'php-ldap')
	provides=("${_pkgbase}=${pkgver}" "php-ldap=${pkgver}")
	backup=('etc/php/php.ini')

	cd ${srcdir}/build
	make INSTALL_ROOT=${pkgdir} install-{modules,cli,build,headers,programs,pharcmd}
	install -D -m644 ${srcdir}/${_pkgbase}-${pkgver}/php.ini-production ${pkgdir}/etc/php/php.ini
	install -d -m755 ${pkgdir}/etc/php/conf.d/

	# remove static modules
	rm -f ${pkgdir}/usr/lib/php/modules/*.a
	# remove modules provided by sub packages
	rm -f ${pkgdir}/usr/lib/php/modules/{enchant,gd,imap,intl,sodium,odbc,pdo_dblib,pdo_odbc,pgsql,pdo_pgsql,pspell,snmp,sqlite3,pdo_sqlite,tidy,xsl}.so
	# remove empty directory
	rmdir ${pkgdir}/usr/include/php/include
}

package_php-zts-cgi() {
	pkgdesc='CGI and FCGI SAPI for PHP'
	depends=("${pkgbase}")
	replaces=("${_pkgbase}-cgi")
	conflicts=("${_pkgbase}-cgi")
	provides=("${_pkgbase}-cgi=${pkgver}")

	cd ${srcdir}/build
	make INSTALL_ROOT=${pkgdir} install-cgi
}

package_php-zts-apache() {
	pkgdesc='Apache SAPI for PHP'
	depends=("${pkgbase}" 'apache' 'libnsl')
	replaces=("${_pkgbase}-apache")
	conflicts=("${_pkgbase}-apache")
	provides=("${_pkgbase}-apache=${pkgver}")
	backup=('etc/httpd/conf/extra/php7_module.conf')

	install -D -m755 ${srcdir}/build-apache/libs/libphp7.so ${pkgdir}/usr/lib/httpd/modules/libphp7.so
	install -D -m644 ${srcdir}/apache.conf ${pkgdir}/etc/httpd/conf/extra/php7_module.conf
}

package_php-zts-fpm() {
	pkgdesc='FastCGI Process Manager for PHP'
	depends=("${pkgbase}" 'systemd')
	replaces=("${_pkgbase}-fpm")
	conflicts=("${_pkgbase}-fpm")
	provides=("${_pkgbase}-fpm=${pkgver}")
	backup=('etc/php/php-fpm.conf' 'etc/php/php-fpm.d/www.conf')
	options=('!emptydirs')

	cd ${srcdir}/build
	make INSTALL_ROOT=${pkgdir} install-fpm
	install -D -m644 sapi/fpm/php-fpm.service ${pkgdir}/usr/lib/systemd/system/php-fpm.service
	install -D -m644 ${srcdir}/php-fpm.tmpfiles ${pkgdir}/usr/lib/tmpfiles.d/php-fpm.conf
}

package_php-zts-embed() {
	pkgdesc='Embedded PHP SAPI library'
	depends=("${pkgbase}" 'systemd-libs' 'libnsl')
	replaces=("${_pkgbase}-embed")
	conflicts=("${_pkgbase}-embed")
	provides=("${_pkgbase}-embed=${pkgver}")
	options=('!emptydirs')

	cd ${srcdir}/build
	make INSTALL_ROOT=${pkgdir} PHP_SAPI=embed install-sapi
}

package_php-zts-phpdbg() {
	pkgdesc='Interactive PHP debugger'
	depends=("${pkgbase}")
	replaces=("${_pkgbase}-phpdbg")
	conflicts=("${_pkgbase}-phpdbg")
	provides=("${_pkgbase}-phpdbg=${pkgver}")
	options=('!emptydirs')

	cd ${srcdir}/build-phpdbg
	make INSTALL_ROOT=${pkgdir} install-phpdbg
}

package_php-zts-dblib() {
	pkgdesc='dblib module for PHP'
	depends=("${pkgbase}" 'freetds')
	replaces=("${_pkgbase}-dblib")
	conflicts=("${_pkgbase}-dblib")
	provides=("${_pkgbase}-dblib=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/pdo_dblib.so ${pkgdir}/usr/lib/php/modules/pdo_dblib.so
}

package_php-zts-enchant() {
	pkgdesc='enchant module for PHP'
	depends=("${pkgbase}" 'enchant')
	replaces=("${_pkgbase}-enchant")
	conflicts=("${_pkgbase}-enchant")
	provides=("${_pkgbase}-enchant=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/enchant.so ${pkgdir}/usr/lib/php/modules/enchant.so
}

package_php-zts-gd() {
	pkgdesc='gd module for PHP'
	depends=("${pkgbase}" 'gd')
	replaces=("${_pkgbase}-gd")
	conflicts=("${_pkgbase}-gd")
	provides=("${_pkgbase}-gd=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/gd.so ${pkgdir}/usr/lib/php/modules/gd.so
}

package_php-zts-imap() {
	pkgdesc='imap module for PHP'
	depends=("${pkgbase}" 'c-client')
	replaces=("${_pkgbase}-imap")
	conflicts=("${_pkgbase}-imap")
	provides=("${_pkgbase}-imap=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/imap.so ${pkgdir}/usr/lib/php/modules/imap.so
}

package_php-zts-intl() {
	pkgdesc='intl module for PHP'
	depends=("${pkgbase}" 'icu')
	replaces=("${_pkgbase}-intl")
	conflicts=("${_pkgbase}-intl")
	provides=("${_pkgbase}-intl=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/intl.so ${pkgdir}/usr/lib/php/modules/intl.so
}

package_php-zts-sodium() {
	pkgdesc='sodium module for PHP'
	depends=("${pkgbase}" 'libsodium')
	replaces=("${_pkgbase}-sodium")
	conflicts=("${_pkgbase}-sodium")
	provides=("${_pkgbase}-sodium=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/sodium.so ${pkgdir}/usr/lib/php/modules/sodium.so
}

package_php-zts-odbc() {
	pkgdesc='ODBC modules for PHP'
	depends=("${pkgbase}" 'unixodbc')
	replaces=("${_pkgbase}-odbc")
	conflicts=("${_pkgbase}-odbc")
	provides=("${_pkgbase}-odbc=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/odbc.so ${pkgdir}/usr/lib/php/modules/odbc.so
	install -D -m755 ${srcdir}/build/modules/pdo_odbc.so ${pkgdir}/usr/lib/php/modules/pdo_odbc.so
}

package_php-zts-pgsql() {
	pkgdesc='PostgreSQL modules for PHP'
	depends=("${pkgbase}" 'postgresql-libs')
	replaces=("${_pkgbase}-pgsql")
	conflicts=("${_pkgbase}-pgsql")
	provides=("${_pkgbase}-pgsql=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/pgsql.so ${pkgdir}/usr/lib/php/modules/pgsql.so
	install -D -m755 ${srcdir}/build/modules/pdo_pgsql.so ${pkgdir}/usr/lib/php/modules/pdo_pgsql.so
}

package_php-zts-pspell() {
	pkgdesc='pspell module for PHP'
	depends=("${pkgbase}" 'aspell')
	replaces=("${_pkgbase}-pspell")
	conflicts=("${_pkgbase}-pspell")
	provides=("${_pkgbase}-pspell=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/pspell.so ${pkgdir}/usr/lib/php/modules/pspell.so
}

package_php-zts-snmp() {
	pkgdesc='snmp module for PHP'
	depends=("${pkgbase}" 'net-snmp')
	replaces=("${_pkgbase}-snmp")
	conflicts=("${_pkgbase}-snmp")
	provides=("${_pkgbase}-snmp=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/snmp.so ${pkgdir}/usr/lib/php/modules/snmp.so
}

package_php-zts-sqlite() {
	pkgdesc='sqlite module for PHP'
	depends=("${pkgbase}" 'sqlite')
	replaces=("${_pkgbase}-sqlite")
	conflicts=("${_pkgbase}-sqlite")
	provides=("${_pkgbase}-sqlite=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/sqlite3.so ${pkgdir}/usr/lib/php/modules/sqlite3.so
	install -D -m755 ${srcdir}/build/modules/pdo_sqlite.so ${pkgdir}/usr/lib/php/modules/pdo_sqlite.so
}

package_php-zts-tidy() {
	pkgdesc='tidy module for PHP'
	depends=("${pkgbase}" 'tidy')
	replaces=("${_pkgbase}-tidy")
	conflicts=("${_pkgbase}-tidy")
	provides=("${_pkgbase}-tidy=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/tidy.so ${pkgdir}/usr/lib/php/modules/tidy.so
}

package_php-zts-xsl() {
	pkgdesc='xsl module for PHP'
	depends=("${pkgbase}" 'libxslt')
	replaces=("${_pkgbase}-xsl")
	conflicts=("${_pkgbase}-xsl")
	provides=("${_pkgbase}-xsl=${pkgver}")

	install -D -m755 ${srcdir}/build/modules/xsl.so ${pkgdir}/usr/lib/php/modules/xsl.so
}
