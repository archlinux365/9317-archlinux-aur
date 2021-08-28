# Maintainer: Francisco Demartino <demartino.francisco@gmail.com>
# Contributor: xantares <xantares09 at hotmail dot com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>
# Contributor: Dr-Shadow <kerdiles.robin@gmail.com>

pkgname=mingw-w64-python
pkgver=3.9.6
_pybasever=3.9
pkgrel=1
pkgdesc="Next generation of the python high-level scripting language (mingw-w64)"
arch=('any')
license=('PSF')
url="https://www.python.org/"
depends=('mingw-w64-crt'
         'mingw-w64-expat'
         'mingw-w64-bzip2'
         'mingw-w64-libffi'
         'mingw-w64-ncurses'
         'mingw-w64-openssl'
         'mingw-w64-readline'
         'mingw-w64-tcl'
         'mingw-w64-tk'
         'mingw-w64-zlib'
         'mingw-w64-xz'
         'mingw-w64-mpdecimal'
         'mingw-w64-sqlite')

makedepends=('mingw-w64-configure' 'mingw-w64-wine' 'python' 'autoconf-archive')
optdepends=('mingw-w64-wine: runtime support')
options=('staticlibs' '!buildflags' '!strip')
source=("https://www.python.org/ftp/python/${pkgver}/Python-${pkgver}.tar.xz"
		0001-make-_sysconfigdata.py-relocatable.patch
        0002-restore-setup-config.patch
        0003-MINGW-BASE-use-NT-thread-model.patch
        0004-MINGW-translate-gcc-internal-defines-to-python-platf.patch
        0005-MINGW-configure-MACHDEP-and-platform-for-build.patch
        0006-MINGW-preset-configure-defaults.patch
        0007-MINGW-configure-largefile-support-for-windows-builds.patch
        0008-MINGW-add-srcdir-PC-to-CPPFLAGS.patch
        0009-MINGW-init-system-calls.patch
        0010-MINGW-build-in-windows-modules-winreg.patch
        0011-MINGW-determine-if-pwdmodule-should-be-used.patch
        0012-MINGW-compiler-customize-mingw-cygwin-compilers.patch
        0013-MINGW-compiler-enable-new-dtags.patch
        0014-issue6672-v2-Add-Mingw-recognition-to-pyport.h-to-al.patch
        0015-MINGW-configure-for-shared-build.patch
        0016-MINGW-dynamic-loading-support.patch
        0017-MINGW-ignore-main-program-for-frozen-scripts.patch
        0018-MINGW-setup-_multiprocessing-module.patch
        0019-MINGW-setup-select-module.patch
        0020-MINGW-setup-_ctypes-module-with-system-libffi.patch
        0021-MINGW-defect-winsock2-and-setup-_socket-module.patch
        0022-MINGW-exclude-unix-only-modules.patch
        0023-MINGW-setup-msvcrt-and-_winapi-modules.patch
        0024-MINGW-build-extensions-with-GCC.patch
        0025-MINGW-use-Mingw32CCompiler-as-default-compiler-for-m.patch
        0026-MINGW-find-import-library.patch
        0027-MINGW-setup-_ssl-module.patch
        0028-MINGW-generalization-of-posix-build-in-sysconfig.py.patch
        0029-MINGW-support-stdcall-without-underscore.patch
        0030-use-replace-instead-rename-to-avoid-failure-on-windo.patch
        0031-MINGW-avoid-circular-dependency-from-time-module-dur.patch
        0032-MINGW-generalization-of-posix-build-in-distutils-sys.patch
        0033-MINGW-customize-site.patch
        0034-add-python-config-sh.patch
        0035-cross-darwin-feature.patch
        0036-py3k-mingw-ntthreads-vs-pthreads.patch
        0037-mingw-system-libffi.patch
        0038-msys-mingw-prefer-unix-sep-if-MSYSTEM.patch
        0039-mingw-use-posix-getpath.patch
        0040-mingw-add-ModuleFileName-dir-to-PATH.patch
        0041-mingw-add-BUILDIN_WIN32_MODULEs-time-msvcrt.patch
        0042-msys-cygwin-semi-native-build-sysconfig.patch
        0043-mingw-sysconfig-like-posix.patch
        0044-mingw-_winapi_as_builtin_for_Popen_in_cygwinccompile.patch
        0045-cross-dont-add-multiarch-paths-if-cross-compiling.patch
        0046-mingw-use-backslashes-in-compileall-py.patch
        0047-msys-convert_path-fix-and-root-hack.patch
        0048-allow-static-tcltk.patch
        0049-mingw-pdcurses_ISPAD.patch
        0050-grammar-fixes.patch
        0051-builddir-fixes.patch
        0052-msys-monkeypatch-os-system-via-sh-exe.patch
        0053-msys-replace-slashes-used-in-io-redirection.patch
        0054-mingw-install-layout-as-posix.patch
        0055-remove_path_max.default.patch
        0056-dont-link-with-gettext.patch
        0057-ctypes-python-dll.patch
        0058-gdbm-module-includes.patch
        0059-use-gnu_printf-in-format.patch
        0060-mingw-fix-ssl-dont-use-enum_certificates.patch
        0061-mingw-build-optimized-ext.patch
        0062-cygwinccompiler-dont-strip-modules-if-pydebug.patch
        0063-fix-using-dllhandle-and-winver-mingw.patch
        0064-mingw-add-LIBPL-to-library-dirs.patch
        0065-Add-AMD64-to-sys-config-so-msvccompiler-get_build_ve.patch
        0066-MINGW-link-with-additional-library.patch
        0067-install-msilib.patch
        0068-dont-include-system-ncurses-path.patch
        0069-fix-signal-module-build.patch
        0070-build-winconsoleio.patch
        0071-expose-sem_unlink.patch
        0072-cygpty-isatty.patch
        0073-disable-broken-gdbm-module.patch
        0074-link-win-resource-files-and-build-pythonw.patch
        0075-3.7-mpdec-mingw.patch
        0076-disable-readline.patch
        0077-fix-isselectable.patch
        0078-use-_wcsnicmp-instead-wcsncasecmp.patch
        0079-_xxsubinterpretersmodule.patch
        0080-sqlite3-module-defines.patch
        0081-configure-have-inet-pton.patch
        0082-fix-msvc9-import.patch
        0083-set-venv-activate-path-unix.patch
        0084-venv-creation-fixes.patch
        0085-pass-gen-profile-ldflags.patch
        0086-distutils-add-windmc-to-cygwinccompiler.patch
        0087-pkg-config-windows-must-link-ext-with-python-lib.patch
        0088-importlib-bootstrap-path-sep.patch
        0089-pathlib-path-sep.patch
        0090-warnings-fixes.patch
        0091-fix-build-testinternalcapi.patch
        0092-extend-MS_WINDOWS-flag.patch
        0093-clang-arm64.patch
        0094-MINGW-stack-reserve.patch
        0095-Add-support-for-Windows-7-Python-3.9.patch
        0096-Add-CI-to-Build-and-Test.patch
        0097-Don-t-use-os.pathsep-to-find-EOF.patch
        0098-Fix-extension-suffix-for-c-extensions-on-mingw.patch
        0099-Change-the-get_platform-method-in-sysconfig-and-dist.patch
        0100-Add-a-test-to-build-C-Ext.patch
        0101-Add-some-platform-related-tests.patch
        0102-squash-CI-use-O2.patch
        0103-squash-Fixup-.rc-handling.patch
        0104-squash-Set-MS_DLL_ID.patch
        0105-squash-CI-Clean-up.patch
        0106-squash-CI-use-srcdir-builddir.patch
        0107-squash-fix-srcdir-builddir.patch
        0108-build-Cleanup-ncursesw-include-lookup-code.patch
        0109-tests-fix-test_bytes.patch
        0110-time-fix-strftime-not-raising-for-invalid-year-value.patch
        0111-winconsoleio-build-_testconsole-which-is-required-fo.patch
        0112-Adjust-Py_WINVER-for-our-Win-7-target.patch
        0113-ctypes-find_library-c-should-return-None-with-ucrt.patch
        0114-build-Disable-checks-for-dlopen-dlfcn.patch
        0115-Fix-install-location-of-the-import-library.patch
        0116-Set-MSYS2_ARG_CONV_EXCL-for-the-shared-Python-module.patch
        0117-build-Integrate-venvlauncher-build-installation-into.patch
        0118-Update-smoketests.patch
        0119-CI-clean-up-the-build-enforce-some-tests.patch
        0120-1-2-AC_RUN_IFELSE-replace.patch
        0121-Add-return-0-to-the-test-code.patch
        0122-2-2-AC_RUN_IFELSE-replace.patch
        0123-Make-sure-MACHDEP-matches-sys.platform.patch
        0124-CI-add-a-cross-build-job.patch
        0125-Revert-Adjust-Py_WINVER-for-our-Win-7-target.patch
        0126-Set-_WIN32_WINNT-version-in-configure.ac.patch
        0127-CI-cleanup.patch
        0128-Commit-regenerated-importlib.patch
        0129-CI-clean-up.patch
        0130-configure.ac-default-to-with-nt-threads-with-mingw.patch
        0131-configure.ac-don-t-check-for-clock_-functions.patch
        0132-CI-clean-up.patch
        0133-smoketests-update.patch
        0134-expanduser-normpath-paths-coming-from-env-vars.patch
        0135-sysconfig-fix-platlib-purelib-paths.patch
        0136-smoketests-update.patch
        "wine-python.sh")
sha512sums=('01c529e3207738d8771caeb5ed6217e10745c21aa39832fe3185e1c87fdb6aedead97ce38dbb11e02d873654028bd8071c3f345c18452769520723284efe9dc1'
			'2f1e91391db0f50e7de5562b9166a83b326c9a6f875011d1c503080f43498a0368c50dab07a655fedcd452ba3f769ee695e3253d2fe541cb29884efdaa4993c2'
			'f459f75f47ca756cb8bbe411762c733c5d02382d74d68e57b3a54d8eddf405cfa1e55c2ec45773788aba829e9a9548567557c0d2d306b941f2a530964a07e5a5'
			'b06ede9530d27583a8d3538b042ed94fe6f29c16d2f1990d1b6763d7ba448ef721accce086529f84b6b5086ddc6aea1c7393b8e1aaa3a42942cd67619846739c'
			'1b2049a24a539ce4b7ae9d066c5624f42f05067b3a78753f583dd98f02e0455cc5f68d76e09ba3a9616719138533c08fbde598e7c83a93923d67dd018a45b763'
			'80bdd16b5142a244ab2ceaffb50ae3a1b7b93977def05b6dd244e101a1701f2cc01357e1e756c8c548192141247c20ef198789e6923ce5751062eda2ed44da62'
			'181ee229d2b64a6305ff00263b574f1331ba02613ab6a9ed502659a960c7beaee161cea003adef65dcacab4cbbb600668756ea1b87fff06401996f455f950573'
			'0b5e951bd433998a0ceac079aa40a67a0d0ba1679fae2663999eef1024fab5daad5ad67b8e091172aecf0761568b97ac804e51067d83db57b9ab6445562c0737'
			'bed18d78b11615ada2063b6246fa501e63dfec5009dd5ee316a39ca6a927fc095762399ecac5c7fb043af4c9a008b145b61ffd7f02b41dbd58a1a9342d1bb202'
			'2981458b0e6448305f3da4e2b328e666f93495216fe72fe21572af1fb945d2da68318789b7c0d5888e7f255c10c041e98758fe17db58a50b269b81fa00e7591e'
			'78f54dc07100bc0cd7ecebb7b7976f17dc959a8c894e32e48a04419eddc04b290e7fc25ec3db2c6da730046d5e571bdf2e64c63dbb8569a7a14d36543d13515e'
			'18244172a9adf349710b8851eae7667926defacb21534ec085b280648effb402e997ca496a52377f8bc10124aa2f8e611f23399cabb719d7493033547b6ad671'
			'0d7354a0846c2c5e3975f7c757b4c3d30392bef511036416c09c43290ca4f34c506d50bb9e59bdbe0ab29b1757b62767b3cf095c5e5d5cf2eae15583674dcc55'
			'444cc70ed2a0ac37f82763ecdcf2024d480e6631583b64fbb34976a5b9fff814b61816f681ed4baf24094ddeb81dbffdc68b0342978a5b5f4eb0d37bb3f0d7f4'
			'16a290ba51c53e902f71b85e8b4bb4f65129b0dc61a571e71c8cf9352307700ddbd6ca9d891c74224ff56eff795face7d228fdf60db3015f3ff61c2e6ce80673'
			'8b99b6332e12d2f84c3f21d90b7ab946a03fba80cf0cee068bc1958a03514db431971ec7db158f5db37f676e6159e50d60fad07f7d6b303c2852922d4241163b'
			'014c379e92eecfe2e22888f039bcb5f26d9c23e33ce29e3905e6d3cec2792de71919a1f6517d528820c7babac163b94bffd684a0404673943335e7f9e61132b2'
			'f4a97bd111607c7dda2b0b62dd93c137de89e49c1e2c782efca02a1c0536bdc20b9537c1f0464e383e0e1b29d76ad87470b8bb55ad93725d9075bee36dcadb1d'
			'78db3161f0810c823732302046338a341ee50601b3b6eb9a1eb72f13dc2789eb84c5d8e4c2d9812921b1b7c480c070e1dff5e1bb7236cd278689f200663a82c3'
			'f1c5021498addfc076837d94f5ae240cf62a17c9a04f7ec8c9929a25a02fedc0f975f56155be3aa79aa111fb6c01e96b9cfb2a75a81add576884d13fb2b220e6'
			'e90da0b8787fdeb9b0c9dc75134e18d23ddbcf0da667402ba80cd43956ee3dc5cc2ffb62a0ff980fe50bb8e7a617a018bc6ba93adffe8d70759a0020ff65749a'
			'32f8b63d344b9438df8794bd76a4d7e95ce25762c2eb1ca9e2b1eab084386936b09b6ad001d8affdac4d6600143ecb043870ec65c20251f05385e3ebcfd2fc67'
			'53ed9e2b211f025986e69da484c2583848822ada0dbfcde01f16202a15a5dde133a4df74d7f900642ad7893d79ece91ab75cb7ec921889dc0391fcbb336d6715'
			'8a7f0c3e7659210618d10d942ba5efab3aa403accc9d360458ad333d7f10656260145e9d0b2588f2cc26f1b2806960a688c565ecf4a9118fd4f071834fa33150'
			'ac82ec4597561650f711bef98c94146da8caec5c8c0794d82f7707f6ce89d82dff2b55a91db2c1b778cde11de5cd7350ea57ef4ede2836fad1212ed190affea9'
			'081b954260767bcb49bc3f8f1f35af15d5b261f69cca6697d95ab57bb191622990ba672de54e09fc692777beb31682d49446e387cdd80b4cd280a6869caa53f2'
			'9cd710d2b4a2a029bb89473bfe8212cbf16368c795e45be7acfbb4efbd8a45fc01c90387c6e97a8490d4f04a0cfd34ee16aad094463d159b3aee18bc4da1da6b'
			'7dfd4a36f0ab554edfa6d1be2b1c5892bee41c368cc5e21e0d6126bdca040918068b63fcde07cefcf361d3afee79708ff6631c3f886d85e3b5b60b508a0e67ba'
			'a8eede1f4a2844a98be1ff5c7e8eb74b36c8912af9c2381c80e8ec2c19136aed541f3dd4e22de7dd8270b1b11323d6b769b876aaf777f8095aaf431948fd3e73'
			'166ef0748798b284fbc1aee53fe31af8115ad5de47c47ba288deda43d8e578c3e72b14a4a80df17d13b8af8a59787e84e932910840977e60a80afee21fbddb67'
			'99f93ac8e1f1c36e09a4bf3aa556c9fa1dc6c4019ba255aded5552950ff769776c7218d1d65b58f09cee8ed56495f841f013f2c693edb079769a62336274605f'
			'c12a277de36c04f80f40c9dbecdb4bf1fa55dcbc393d073083039bd0994e53f57dc3fdb8ee52e80a234ed5b6be25e8a02c06675f0d56cedc201d6b6d02fe67b8'
			'3b5c73ef484f69ad4280078e6e017a5331b9a7f7eb76e52d0883809b5927d63b59fc70233df1bb1253c597693646959dda87112240927840015a91a3c0e53e15'
			'064e14df2333bce7994711ec9631c3a7a5c1dde8b6a188ac7dbe446cc17789433dafbdd7ae6a1ac9f8475bcc7ba643e76c34218c4c53508ea0b070c6abb5b3d7'
			'6f61ccbda6d277a7efa787a2271e98404dd1c0e70f5ba92ca36c3a5d85d1be7d278a24f5e7ec911950218d90e2e93337453f474431e76759a02dea0a95433948'
			'bcb1d53e89548b0d146f95fd9ec82680dd3ad0b8aba1db7f6c4b576de63c45a764e142370eaae45d798e198e459ef4fe771494701c944754c3729aca4b08a59b'
			'6eda961b04e1ea775cfeb9fd7451cb1e6521bade46b7671f7c035ac71b9aed6388db627a8b5a4d8945261a772fb0e4b852b5c9dee75f1508509cb1d71cb23145'
			'd16762af58a1582d66773e47426f953189415d801af8d47a6968a8e4a87a219bee763292f4ef9bf302186d149fc763841c8f6f17f462ddcde28547cb9a6150d3'
			'c2fbfb69a4344f764318ffcb096ad13efb6c00a5f75ee226e88cd2bb90fb0017d5bfdb3fa880f6db1fa522446f64c97c2157fd886f81886904eb233286fb5a71'
			'cf28075e8e10ecd9867b7997f6707997c3180151d228809875b6432b44e610784d8647ff3f403196261e993de9184b5f71621e9504d4f54a8c5d52bacce4ceda'
			'a8b43befb0ef4b700c1bb22808e4f7b142e2ad0c1ddb3786f7881395b3d34e38dd7d35136c22af5e2f4051fe0d79d97ec0418748ad61eabe97175047d742f39f'
			'f0d72cbfc2e6d1b0c93528389b7576221b8a33feeecddfc0653df21b6887ea7ba4dc549044353243e90d0628537e4af6ef890703684aed69d32075889ebd0044'
			'77e8a08cbc638aa6353f564be5e4fb78ee97a4c2d51c741bcb89bcd95b9d029d97a9bfa251a11b9c84f9f75c41c8327890b8c7a041dd12453094d9a41f0fd1d9'
			'b98f8dc0b71bd57be7dcd56b28c9534f4175f0407b0eab178e7642149422045a3242ea1257c4aa949e54dcee163529b50b997774507f09fe2ec17b5401d3f8ae'
			'ce40ba66738c5bd1494b06c6b09dd3209afed003c097c5ed3be86cd11e3325364a866fd136679ffa9c84ffc69536f3481b88d05774e06460d56543c116735c79'
			'578f1c76f928a1f7a1946830f04b9ebe725b8df3d47d542d48fa1c53fd6a3b862208d481215a750113ae11f0c6762b0bbe382820e620187620410d7e8624f9da'
			'746e8a58e2f6552713334ef4550cb023dab177f5b53bc24cb51255e9a3d655c7734b9441e7396ec004a55d1bc2ce55c352ac394c58213964980334f4d85ad81a'
			'a8c13e66d90fe8c75ce146890b38435de0e85984c64dce1e4f118c5fca63efaaafd23911dba1a3f0c8f5a826603573c29ad5ecdadfed2beb436afe67b5ad7272'
			'c9ecce52a554955bc62f6baa5d9f2317bf7ffd486182f287eaac401b7216ed6ba00e1a28f7d47991c77abeb43b5fca3f7d33b2b95c4a41b4218bb2d84be275ef'
			'd7c5cab9f259d68e75852b58a64c05249c152531a7f89170a22245d22e4b8aa10790f41dfb9aa3e3ca8e0d93bfb310c52d74eed33bc0e6abac6977d2b2565361'
			'43cd5f37bafa14a4b84d4941fced1d8b6ce93197b33bd674abd0a0ea846eb5c1bd0eda1807b1b4c5de392bfe592769eac7dbcd67fc1f453f72e6bbc2724c2ac0'
			'b04d2bc12d36dd0a6846f1394e0f2fe5c33cd4fe1edb0fc946ea3dc3ea2654678a7e01de7c10b28f0fb91350b5a9369caf9d86b2f3bea7d6ff26345374106249'
			'c421e9a8feba81910d99c8d9a65615d267ca7e4ba0e15a9c0fb8fbf989e923d56fddc2e2e81febf0f21eaa095d4d74ba7022bcfb8b7bba724b190ea4f14fd14c'
			'3b238801ee5c3262dc00dc78339ef3d1f8d0526265d2a1c772416cd0fdbbd75161996a7c8959c36a6711a5f88a4cdc215c374d2a5fa7380c0874e15acfb1d356'
			'eda88a2aad8f7cbb47d936ce305c03313355a7e4f17ee3d4f476825d96793f3b362a58b4ec3867e6196097dfea02b577e169e1acd2cbdba241642602ec96233e'
			'19ccbc8ee9e7cfea54df995327e76b4a5777e061f12ebc01b8ce6383b615fd8a656c524ddfbfc0ed03b3b6eefec2c2783a9cb319471f0f59fb17dcc4a6a7d457'
			'5b8ba80290c1f0abf5185be70887bc919f4fd4b304af88de22603a001986054aba91467310532e9997b20887698a16c4939c5af6237f93603999bc8f29d7ae21'
			'7170a09d2e4f5393750f0b3aad92816c2b28fb79036b7fb97b90cd907ba63373e5c745cd246ff357e55274de633f2382242ae285ea3a4d4c6cf589e7dda1d849'
			'72a6c7978044534cdafc8a2ab0000ebc740426943728911084f216255925fcb045c1596190c391b23be23385bc821590314d48db73eeff019219e5b48c66068b'
			'5166bcc2954aed6ff6097e087fcaf6704d4e24237e80c7ae78f6d3c19fe1a74c64d4282797dd93f2b9656a7e6f01b515fe5e50c7382a2ba70d1f2c0f25de60b1'
			'2e3d828e7aa06596a9248ea39e7f2dd75f0fe438474fbacbc6515bf529197e2bab55846cb0023a8184c01329c4fb22a0a3cc76c9618281699efc40e6d58c93de'
			'91ea233217eb507dac62f5a23a33b89b8e042116bb83c4a5b23bcb88a6a80d6390a1bd5e8cc9c3d6432bfc8d9f8f60bf8876863b6e4b0941ad7e42c279a8e7fa'
			'b4dd7bbff60416cf94b8d7341841ca9a5c330345c71202eedf2ea7a1d9500d232d678d334d00375d55041454de286c746b21a9181ad06c8991d4d59b503b437d'
			'eac1bbc8d254d9e25265601e3604d66800d18c73669f8f0babc8fde516a1268ebea9b57c6daffff54d51c5133c82158347798437e032bed6823f47a3b669fcc0'
			'61a615eefb2202d194fb2295193f8794f8c5087a6156f5dc0ba6b2dc8bbe9d1a330b9ea760eb5981daf20553a5976365fa598ed38b25e5bbce83dc0827e22611'
			'b87952f51881854f841191e58199813f93c5464239af42b284e28ad1701491f580720f70e82e4e6bd373446461850c36033c04466708244f34397c73924af929'
			'f7a60f1bdcac0dd6933cf6a08ef049c058d782043fde3d5ce0437955d73e3468ffb2b1a6b7a4da1e4f7fe5354a0c8d96e757848bde234e9b9decde53dba4cd33'
			'48facfcdbcd8ad369c709f72fd6b61120112ea5de400eefc4aa8a2bfbbca2181828a4ea54773758b82bea46a349edbba8085065590ea3661f3266e387996cb25'
			'ee04223922c59ceb235da46ab5b4b043d41df67f55151eafb177d412ed5b810366b76c755c1d1e9beb312e42e559e218af071f0b8f1d5fcdb8299047ee7ff9b0'
			'c121a0873f1adf03e5ba80c23400f82cf9d9ff88e5925e3eca6e9749b56dc3ade2c042db5fe9a91d31995fe7d1a1ba0b89c0a71e11eaf603d8a5fc1fea525a68'
			'de2020961d20072cfd05ff04ad05217002d65ff4e1a24e88379d1c9fdb73da968556b7d76920acb93ef752e9077b5798f90172ce7dfb56514b0f5aef09029d6e'
			'6d16c467992bbb320f1ba6c7866dfa6bc5030aece1c5e09e3c088636e0e9460da3b144017c09dc06d8aa82a37237e3cc5b918d861d267780a8e0e92a54c22b53'
			'63202ee776cade95088a53781022ee049e3ca983d1d2462ffc8170376b6170ad783f51de3936695b319ffb24d439085461f94b354b3616948b748e2f3c039c3e'
			'5c2990028fce9093b4c938606e765827b4b516bb585537043bafd5278a406e4bca2f94964fad0811137f8d63a853c5456ac69823cef49c2cee8062e82557c4d9'
			'75e4fbd7d35c7d4382c0f92ffcdc766d11821e429039cee3976a844ea4cb9b0dba7e18db987aa6c16cf12e2c4aec9752167b6d0ca29145f56fa685ecbae519d3'
			'2e8f8ad0c7abd63c1954d568e10816b47bb4c7a51c8238a247749f823e140447d859e2cc3c937cb1a5c29399a40a7a9f595e5a963c3b8b75e40ea905eb72ac9e'
			'a621483763be5cdcb7541b92028563f63ae1e0094a69e04b06723eefdd5758b2e3fc4641418b33944abfa4d194115e1302573b2f6fd54582d3a017fa05281c2b'
			'4f061b1efe7b6beafec882893bfb2d39b3d84cee8a9fce8d1c0d57e7d9792c6f8ae121ed2e05f6f8156a36b3c6f4b4bc44453476b510a5b6a14119f40e0a05ba'
			'7f0e20f2faeffb95f4b4d2c6e8863a210bc5daffed8cd78ba1622b4b4ba390d7532b89dec5ad42514072541374905891c7b6d16ace61f2576947c167c582deaa'
			'35e1a070c7361b99e08cc7440098d0cebac085a4542fa20ee811294cbdb8542269ef78841e86e44daeb6fe35580e637b8dc3caac7fb7c114e73727fb27e7d633'
			'e7f831c99ff8384bacd10a649e5fa6ee7926f06eeefb6fc6ee016187808cf246948dff17b005f52fd295035a79d0d50604b7c22992447917c39e724de5ed7208'
			'7af4894b4fe448c2ff58df17f6bebee3c058e99618bc678a9270d20e6b93b8b8d6f8e58c1478e52f77a0b6ebb5d4829e3cc1e9f6becf3cbcc48734cb53096329'
			'5ee924adca6ebc77562cf9353a7c810d4cb8f9c4e1a22eac7d4cf25975e9372d7e71b8a7bdba82692a66b7d17307ff5be7d10965310113737a5dde535446f667'
			'0676b2c4c8e5e076f44feb3cc62eee656376903cc18062dd8adaeaa33c5c5bbc678384796740286b3049aa1d2e543c445f1718fd30e9b7f49e6071d2532d9110'
			'3149f70d0a8b0d1992b057c6416e915fa387d9880ac7df46ee0613d9e02610ac07ab52d64a2548a259a2dcebd327b801e0362a5b27e3f7770a3ca6e508a8c106'
			'9d80879db19f8613d04e0ff15d2ea572c59eaf3c9a999350943b7db34afb985da2e7129468c56584f307ce291ebe7b86d2311bc0d786127f2e227f7c78287426'
			'25419951979253ab0d78711146285f7e5c85683d7bcafd474c752530fc3d380e920d22f2faf0571059388a011a890c2214d91fe0bcb31ae6f0ce131e1bcdab50'
			'f9109a1973a99082c19a55b061cf08a483890db92bb2232d90f9b08ef56c9dc5afa084088b31a04ca30e85c32c9793e21c9757106d822f81b62574c3c9f0a8d6'
			'b02d032b27d85b820bb2cb11f409f4e57d15e8f32603ed10f0691c6fe71d496b18cea96456e2595e0b0a41e45c798504b079842745082b392bc6e23313ac0738'
			'6f4f7aff59113cb17f07f4af062d9388af490f6bb1fb4ddbbfebc58ff390113b575b08ff6a7267092345bb5a335749fb2f763b0979d8cee5e3a0c905f06f433e'
			'f66dfe7cc661d46509003af8aadf0357272554cc5d0a6f102fd59cf1f3888ea38e5d37a40acb5345677120a6393ed054bdaa97fdc27fa6a5b3b683bf462d2791'
			'4dd44f7136f9b7dd4ff32853ab6780a0f7fc99731f8c67ba67bcefc01d17473d59f0f1760fe71832ffe0307b4b2eeb3493b4edb507fc1ed419c47dcd08f65b56'
			'a7a41122ea5af5148bba296b6fa20e59443ede8a18cf6218a31c1d3ebf09859d10172f3dd95b4080458d0de1dd3a1cd1b1564cb54527e388818a9c7d4c3f3b2a'
			'e8c9ad4bf41530f6015113e42f0fedb05b746f6920ffb73c26620b6db298fb4bb7bf64baff52e2d054b2ea4d1efb39a164c3973b0aaf82a7abb23a5df09a9a75'
			'55b695b99f837449338884cdd64185a68bc8e80c8315548c7aff35ee81dac858cece895cecc1a206edd9eb50b003052dcaf84b1e6b49b7f44669d09e365f58d8'
			'06bbce5be2330ef8e1a3723b227c84edceca7cb421e80484b66053022ac0ac2b7ef3be634bb037bca4f969866c0c910253bfa347b93bc652e3655df6a6b84945'
			'05e6eefb297cfdc8562388305a8bd8ac095a2566fe26bd47b92e43d2c65ceea48ce36cd5bc091a7a2748d3e8a71010bb7f8d9598fa76a15e3a940eca82f2bab2'
			'826b307d3f51b4c9fad52dc51475ec283523a58f5e4ed599d1ff2db7ad2fed6bd7601dfaee6a84939fc40bdea2918c7a0375d5557b4d31cd2af78c750df203e8'
			'ac201bfd778e8206446cd2084e9971bae3133b8a86fad8b1ec0391e4435f54d464300e8d693153ab3f490e053725d00edf8f24848ede0511f28a041a166f8694'
			'c8f086c3ddaa8761ff84b165bda8f72796580b79064e74c53c133273c5f8e4eb0ce426174a3395bf402e6a0bb4f481e3ced82ed07fd8de1c30f06890fad1b85b'
			'4e8bf98ec7ee79766aca2ddb65973fe48916a84943b6531683dc0e8964c7fe93afbe022b5188e11e22645482d91ce64250e183ba82ccf23f68e5776b5ace01ad'
			'6d174ea91cde2d45078a639e99921056e88f9bd5bc5ec0e037b62655cb4cc798fa55c392b789e6c8ef5ffe914eecdc0b3a1d2878d619ba430b5781a634b305fc'
			'fc6583dabdf7558879e5c9a2c2da86d91bcfa39583aeb9dc3de9fe70f69f2945ab9b149f13f024b2103bf9b3da7ac87e679167d3deabe87213da839760b73e31'
			'09413a07437cbe8e5929a23b0317f315e1807750abeba0c809e50ff14953db445d69a88b263efcde267a16db79add7870632e5f70411c98c22af97255678238f'
			'e8902aa546ead9a05cba7b5725351af6336f97588b8c73b00cc7bcbd79d5b0358e9d731a8e2b1164d289569cd093bd198f21fe923c51cdd66e15f7341d3e2c43'
			'bc3b8bcb596335205b925af5df58625095b896b74504c203c1efdc5fa7ce7e2b0f48241064758f10625a8d340328f34ac0aa6efd4f062afba76897e3449955d7'
			'd30dcaa9a11cdd0b3908d209432409e6d46ecd9f8c83d10ba2c016b5fbd8cc74b14d97b20e236149ef6cc8b7c449ff573f65f63e33a72f13c23593a2773d39d8'
			'953f26172c0e0b5dc63fe3e1f4938cdf1f753be8e0b907e3f8934e76ab09dd705c28297da7b049ab01b2b0a939ab522d465408f8fea6b0bfa997972259a2c113'
			'e14329c3f63edb2547a92063e4fcfe6622431ac1e0bbcdab68a4523f5faa30d817574e786085b08791f0d2ebcd5198f7d29f4f8c5748f0a87b8798e7dd5bb974'
			'f5a1f28ea40fcb422fdeed18d284ecaab69a45569eda1415d976433e6f50fc0f6e1dfb8b0ae4f074cdd6ccf53d6b0999798190e0a953a13d0d93a5c65a3ebfa8'
			'5246234f40c23cd3bf3d132692b6ebd25e5a2af1aafa59c34c99c8b93baa61c3dcfef3ab2dfc53c52c2d6962bb10616dea42514d88e341c5c48be0cd9b66aad4'
			'5020931d834735c3c998ff12f9b4fb876cf175b2405b6a8198ac237960fb68f81a7008bd1862721cffc72e06dd91f76636e68792946bc0a3e7f0cb7e4303a8c9'
			'd8bd4a4499805d967d334e80732c1c674f7b7d4420a821b5bdbbf096c9160c081d843e7c7349a64233d3da5bb27fdb3e2fdda11570f2c1c4e08e6e773325516d'
			'4fd4e90a56ea415f6dbd17b1833e2fc3bf4679d9e158109d9695382b0548fce8de37346c411de074c4075f49752ce36cbad9abf0f17c5a282f7ea1b07f2af6c5'
			'96c0b3e4ef20ef29dba1d099e7b5152c3593c746aa05d2bc11b2694f63627d810602fdb90d6e4f769dc847606d565cf9317f3cb36ff74ff1fd1de71316127c01'
			'02df218e0232fb31cbb41ad0da855e8b09b142bfeeb6a6fa73d36b14d4024483b173f39d027e84db8597ec1d647a348902c54e98a80873dd49b0c0319fd3b181'
			'c453f43af49a3ada8017ff9c295dbaa3c7360c508fa792d9f110f7913c5642cb0adb5b6d82c04ac4faa31dd93ff43e7d9ec5015adf4008a158626b07cb4e502b'
			'4f262b536d0751b643e879808121aaa95d1300ea47c6e7e6c0727d392902704eb943242307845030434fdde2b868c29f3728acb76222d3d98ccfdd0ad509766c'
			'e123b44352e247cd4c82a01c36c8a356fb2a395c98a853ac4d5451e2018468092cba969db76bb2f7832397365c75a6cdb6dbb4f0e2b39c273ffb3b39874a657f'
			'649b42db20470c194b15b03c56e73b6170b8d2d30624135e2949fc9c0fcb96dc8b55dc676559514ca9badd662e900558c274d1c8c6382833ec53ac1cb7a486df'
			'ccd84813417ef7d9230a794a4e0eb778a236f6d465a999143429d25b0ad65546faf983f2b52cc192204453c25bcfff7fe33816b1cca0e0b81f52892e6038aa5e'
			'8fe2a5536d144e70b3858561dc19407eb1672aa905eea724f0f8140097659e7c016928b500810c0e5f0eda2d7a1286bb5ffe4501eb9734e26438c6225655b5e7'
			'1ee6f2c2e3d17876fdd28d4a4e311eba9d45f145a1b36b0a84ebf1a1f1ce90807bb76b7449cbe8de21aa045b43c0b4e4f8968f160d74dd74963f7930b47f9c81'
			'e49bca267236c7b543c0839d9ac751c23e82947f9df6de9d758c1727d48e9ff8843c2a2f4f94101fb19e33acc6457f72fa9a59f3f4e39e5ec10feb6093732409'
			'6fbc925a94e7343688f38ed2d226e17cbfac82b9cd604d15272e51adc6f1133b9804b53f24921315696031fe9fcd34264242d7808955b714c0ae9025999dd338'
			'a9a9422062e42b4ae14d0f7edc641d6014e1c574e537c804f52a61efd7843ef1214a2a462ec1da14f9ed2c03c12607d416d62a4b4873310005f6589a48568527'
			'd5b5d32201bafdab4aa82ef5920c9e514b3e52f2d7d05385ebbb0101ebbce382ce8c55522a687d4c896cc4665437b4634da9ed0180661a797c644850d47b019c'
			'ec8bbff8278e0eff0f708dfaf6fcfc303dcd99dab7fd343312f593d2e8d8794901578e5a13150a21cef02841db76b486c48c01a126b8717e812d77b094e62d43'
			'6d0be15d5feea6a8e46e892b9b5db2af47d0970c829a6895486c49a0a1aee88adebad54c2ac84dbdb78a80ab05270b7f2744064260c3b96fcab8d7629f0c55f9'
			'f6cbed91352c29d618f529cb5ab79ff0acfd236e755641aaece309695e7dac05f4c6beb49b6e54921fc6eb21b22495459cd6e8a84e344e5a7ec1b6314bf1251a'
			'7cada3319b02a338c5f32eabe99be0f9ea35412759614f31ac77d310d6848a6b938143744d40d07721241d438d01781b456bda1781bfb37d4839a540b600458c'
			'64d9a43b1ff38813d567f1c2a5ac48ed72907e1438e76188bdfc22bc463eff887f34f5d1ad524aab77d61e358e5b87ed6f05bd9e9e46d66c03cb7e3c0c980ca4'
			'40852c5f7a2e0cff440ac61cc8d1dd53d3c4641abcf12ba8c87d5a804161c00c7820cdfdf4d3853a145915e0bd2a428a8c868d58bff2377f38c979bd8eb99a55'
			'79cd9bfb6984ae69560c71dc886adc272688871d95a9bb01da2b154671240b1fcd5e837396796d75a9487803d88cf7af484f932f3fb56402f5a2c7dc3d8e463e'
			'b4e6018ac6b546bfbc1b788e20192615eb2f184b209b85e2209cf5976f74cd15c9a63c727455d1ca0e6e1cadc36a908b3e4a1a7efb5b0e453e1f562b4bb9a5e4'
			'aecf9e0a168e58db338c0ca12830c42d279b77962735b69c1b2f7cd056e7d2cfafff565e3bd5fd3dca26fd30b3d4f83760a6f191155f7c2a8592934b882a6ec0'
			'a2d924fb4c87da54b79549a2d77116c2f29fde7b5ecab059dacc83e0deeaf2e78325cf7d7d97047c85bc66afc672c95da2b83504bc12b0aa1500678af460852b'
            'd0fb7f0e1a3d98a170ebea301226ad8caa7ffab9fc0bee224abc31c22875c892b43d3468dffbdd15eb71ca1b5260e039d0fceb21ecc92341b9bb6949d7e9be6a')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying ${_patch}"
    patch -Nbp1 -i "${srcdir}/${_patch}"
  done
}

del_file_exists() {
  for _fname in "$@"
  do
    if [ -f ${_fname} ]; then
      rm -rf ${_fname}
    fi
  done
}
# =========================================== #

prepare() {
  cd "${srcdir}/Python-${pkgver}"

  apply_patch_with_msg 0001-make-_sysconfigdata.py-relocatable.patch \
  0002-restore-setup-config.patch \
  0003-MINGW-BASE-use-NT-thread-model.patch \
  0004-MINGW-translate-gcc-internal-defines-to-python-platf.patch \
  0005-MINGW-configure-MACHDEP-and-platform-for-build.patch \
  0006-MINGW-preset-configure-defaults.patch \
  0007-MINGW-configure-largefile-support-for-windows-builds.patch \
  0008-MINGW-add-srcdir-PC-to-CPPFLAGS.patch \
  0009-MINGW-init-system-calls.patch \
  0010-MINGW-build-in-windows-modules-winreg.patch \
  0011-MINGW-determine-if-pwdmodule-should-be-used.patch \
  0012-MINGW-compiler-customize-mingw-cygwin-compilers.patch \
  0013-MINGW-compiler-enable-new-dtags.patch \
  0014-issue6672-v2-Add-Mingw-recognition-to-pyport.h-to-al.patch \
  0015-MINGW-configure-for-shared-build.patch \
  0016-MINGW-dynamic-loading-support.patch \
  0017-MINGW-ignore-main-program-for-frozen-scripts.patch \
  0018-MINGW-setup-_multiprocessing-module.patch \
  0019-MINGW-setup-select-module.patch \
  0020-MINGW-setup-_ctypes-module-with-system-libffi.patch \
  0021-MINGW-defect-winsock2-and-setup-_socket-module.patch \
  0022-MINGW-exclude-unix-only-modules.patch \
  0023-MINGW-setup-msvcrt-and-_winapi-modules.patch \
  0024-MINGW-build-extensions-with-GCC.patch \
  0025-MINGW-use-Mingw32CCompiler-as-default-compiler-for-m.patch \
  0026-MINGW-find-import-library.patch \
  0027-MINGW-setup-_ssl-module.patch \
  0028-MINGW-generalization-of-posix-build-in-sysconfig.py.patch \
  0029-MINGW-support-stdcall-without-underscore.patch \
  0030-use-replace-instead-rename-to-avoid-failure-on-windo.patch \
  0031-MINGW-avoid-circular-dependency-from-time-module-dur.patch \
  0032-MINGW-generalization-of-posix-build-in-distutils-sys.patch \
  0033-MINGW-customize-site.patch \
  0034-add-python-config-sh.patch \
  0035-cross-darwin-feature.patch \
  0036-py3k-mingw-ntthreads-vs-pthreads.patch \
  0037-mingw-system-libffi.patch \
  0038-msys-mingw-prefer-unix-sep-if-MSYSTEM.patch \
  0039-mingw-use-posix-getpath.patch \
  0040-mingw-add-ModuleFileName-dir-to-PATH.patch \
  0041-mingw-add-BUILDIN_WIN32_MODULEs-time-msvcrt.patch \
  0042-msys-cygwin-semi-native-build-sysconfig.patch \
  0043-mingw-sysconfig-like-posix.patch \
  0044-mingw-_winapi_as_builtin_for_Popen_in_cygwinccompile.patch \
  0045-cross-dont-add-multiarch-paths-if-cross-compiling.patch \
  0046-mingw-use-backslashes-in-compileall-py.patch \
  0047-msys-convert_path-fix-and-root-hack.patch \
  0048-allow-static-tcltk.patch \
  0049-mingw-pdcurses_ISPAD.patch \
  0050-grammar-fixes.patch \
  0051-builddir-fixes.patch \
  0052-msys-monkeypatch-os-system-via-sh-exe.patch \
  0053-msys-replace-slashes-used-in-io-redirection.patch \
  0054-mingw-install-layout-as-posix.patch \
  0055-remove_path_max.default.patch \
  0056-dont-link-with-gettext.patch \
  0057-ctypes-python-dll.patch \
  0058-gdbm-module-includes.patch \
  0059-use-gnu_printf-in-format.patch \
  0060-mingw-fix-ssl-dont-use-enum_certificates.patch \
  0061-mingw-build-optimized-ext.patch \
  0062-cygwinccompiler-dont-strip-modules-if-pydebug.patch \
  0063-fix-using-dllhandle-and-winver-mingw.patch \
  0064-mingw-add-LIBPL-to-library-dirs.patch \
  0065-Add-AMD64-to-sys-config-so-msvccompiler-get_build_ve.patch \
  0066-MINGW-link-with-additional-library.patch \
  0067-install-msilib.patch \
  0068-dont-include-system-ncurses-path.patch \
  0069-fix-signal-module-build.patch \
  0070-build-winconsoleio.patch \
  0071-expose-sem_unlink.patch \
  0072-cygpty-isatty.patch \
  0073-disable-broken-gdbm-module.patch \
  0074-link-win-resource-files-and-build-pythonw.patch \
  0075-3.7-mpdec-mingw.patch \
  0076-disable-readline.patch \
  0077-fix-isselectable.patch \
  0078-use-_wcsnicmp-instead-wcsncasecmp.patch \
  0079-_xxsubinterpretersmodule.patch \
  0080-sqlite3-module-defines.patch \
  0081-configure-have-inet-pton.patch \
  0082-fix-msvc9-import.patch \
  0083-set-venv-activate-path-unix.patch \
  0084-venv-creation-fixes.patch \
  0085-pass-gen-profile-ldflags.patch \
  0086-distutils-add-windmc-to-cygwinccompiler.patch \
  0087-pkg-config-windows-must-link-ext-with-python-lib.patch \
  0088-importlib-bootstrap-path-sep.patch \
  0089-pathlib-path-sep.patch \
  0090-warnings-fixes.patch \
  0091-fix-build-testinternalcapi.patch \
  0092-extend-MS_WINDOWS-flag.patch \
  0093-clang-arm64.patch \
  0094-MINGW-stack-reserve.patch \
  0095-Add-support-for-Windows-7-Python-3.9.patch \
  0096-Add-CI-to-Build-and-Test.patch \
  0097-Don-t-use-os.pathsep-to-find-EOF.patch \
  0098-Fix-extension-suffix-for-c-extensions-on-mingw.patch \
  0099-Change-the-get_platform-method-in-sysconfig-and-dist.patch \
  0100-Add-a-test-to-build-C-Ext.patch \
  0101-Add-some-platform-related-tests.patch \
  0102-squash-CI-use-O2.patch \
  0103-squash-Fixup-.rc-handling.patch \
  0104-squash-Set-MS_DLL_ID.patch \
  0105-squash-CI-Clean-up.patch \
  0106-squash-CI-use-srcdir-builddir.patch \
  0107-squash-fix-srcdir-builddir.patch \
  0108-build-Cleanup-ncursesw-include-lookup-code.patch \
  0109-tests-fix-test_bytes.patch \
  0110-time-fix-strftime-not-raising-for-invalid-year-value.patch \
  0111-winconsoleio-build-_testconsole-which-is-required-fo.patch \
  0112-Adjust-Py_WINVER-for-our-Win-7-target.patch \
  0113-ctypes-find_library-c-should-return-None-with-ucrt.patch \
  0114-build-Disable-checks-for-dlopen-dlfcn.patch \
  0115-Fix-install-location-of-the-import-library.patch \
  0116-Set-MSYS2_ARG_CONV_EXCL-for-the-shared-Python-module.patch \
  0117-build-Integrate-venvlauncher-build-installation-into.patch \
  0118-Update-smoketests.patch \
  0119-CI-clean-up-the-build-enforce-some-tests.patch \
  0120-1-2-AC_RUN_IFELSE-replace.patch \
  0121-Add-return-0-to-the-test-code.patch \
  0122-2-2-AC_RUN_IFELSE-replace.patch \
  0123-Make-sure-MACHDEP-matches-sys.platform.patch \
  0124-CI-add-a-cross-build-job.patch \
  0125-Revert-Adjust-Py_WINVER-for-our-Win-7-target.patch \
  0126-Set-_WIN32_WINNT-version-in-configure.ac.patch \
  0127-CI-cleanup.patch \
  0128-Commit-regenerated-importlib.patch \
  0129-CI-clean-up.patch \
  0130-configure.ac-default-to-with-nt-threads-with-mingw.patch \
  0131-configure.ac-don-t-check-for-clock_-functions.patch \
  0132-CI-clean-up.patch \
  0133-smoketests-update.patch \
  0134-expanduser-normpath-paths-coming-from-env-vars.patch \
  0135-sysconfig-fix-platlib-purelib-paths.patch \
  0136-smoketests-update.patch

  autoreconf -vfi
}

build() {
  cd "${srcdir}/Python-${pkgver}"
  unset LDFLAGS
  for _arch in ${_architectures}; do
    mkdir -p "build-${_arch}" && pushd "build-${_arch}"

    CFLAGS+=" -fwrapv -D__USE_MINGW_ANSI_STDIO=1 -D_WIN32_WINNT=0x0601"
    CXXFLAGS+=" -fwrapv -D__USE_MINGW_ANSI_STDIO=1 -D_WIN32_WINNT=0x0601"
    CPPFLAGS+=" -I/usr/${_arch}/include/ncursesw "

    declare -a _extra_config
    if check_option "strip" "y"; then
      LDFLAGS+=" -s "
    fi
    if check_option "debug" "n"; then
      CFLAGS+=" -DNDEBUG "
      CXXFLAGS+=" -DNDEBUG "
    else
      CFLAGS+=" -O0 -ggdb"
      CXXFLAGS+=" -O0 -ggdb"
      _extra_config+=("--with-pydebug")
    fi

    # Workaround for conftest error on 64-bit builds
    export ac_cv_working_tzset=no

    # export LIBFFI_INCLUDEDIR=`${_arch}-pkg-config libffi --cflags-only-I | sed "s|\-I||g"`
    CFLAGS+="-I/usr/${_arch}/include" \
    CXXFLAGS+="-I/usr/${_arch}/include" \
    CPPFLAGS+="-I/usr/${_arch}/include" \
    LDFLAGS+="-L/usr/${_arch}/lib" \
    ${_arch}-configure \
      --with-nt-threads \
      --with-computed-gotos \
      --with-system-expat \
      --with-system-ffi \
      --with-system-libmpdec \
      --without-ensurepip \
      --without-c-locale-coercion \
      --enable-loadable-sqlite-extensions \
      "${_extra_config[@]}" \
      OPT=""
    
    make

    # wrappers
    sed "s|@TRIPLE@|${_arch}|g;s|@PYVER@|${_pybasever}|g" "${srcdir}"/wine-python.sh > ${_arch}-python${_pybasever}
    sed "s|@TRIPLE@|${_arch}|g;s|@PYVER@|${_pybasever}|g" "${srcdir}"/wine-python.sh > ${_arch}-python3
    sed "s|@TRIPLE@|${_arch}|g;s|@PYVER@|${_pybasever}|g" "${srcdir}"/wine-python.sh > ${_arch}-python
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/Python-${pkgver}/build-${_arch}"
    make install DESTDIR="$pkgdir"
    if check_option "debug" "n"; then
      VERABI=${_pybasever}
    else
      VERABI=${_pybasever}d
    fi
    
    [[ -d "${pkgdir}/usr/${_arch}"/share/gdb/python3/ ]] || mkdir -p "${pkgdir}/usr/${_arch}"/share/gdb/python3/
    install -D -m644 python.exe-gdb.py "${pkgdir}/usr/${_arch}/share/gdb/python3/python_gdb.py"
    
    chmod 755 "$pkgdir"/usr/${_arch}/bin/*.dll
    install -m 644 libpython${_pybasever}.a "$pkgdir"/usr/${_arch}/lib
    install -m 644 libpython${_pybasever}.dll.a "$pkgdir"/usr/${_arch}/lib
    
    # some useful "stuff"
    install -dm755 "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/Tools/{i18n,scripts}
    install -m755 "${srcdir}/Python-${pkgver}"/Tools/i18n/{msgfmt,pygettext}.py "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/Tools/i18n/
    install -m755 "${srcdir}/Python-${pkgver}"/Tools/scripts/{README,*py} "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/Tools/scripts/
    
    # clean up #!s
    find "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/ -name '*.py' | \
    xargs sed -i "s|#[ ]*![ ]*/usr/bin/env python$|#!/usr/bin/env python3|"
    
    # clean-up reference to build directory
    sed -i "s#${srcdir}/Python-${pkgver}:##" "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/config-${VERABI}/Makefile

    for fscripts in 2to3-${_pybasever} idle3 idle${_pybasever} pydoc3 pydoc${_pybasever}; do
      sed -e "s|/usr/bin/python${_pybasever}.exe|/usr/bin/env python${_pybasever}.exe|g" -i "${pkgdir}/usr/${_arch}"/bin/$fscripts
    done

    sed -i "s|#!${pkgdir}/usr/${_arch}/bin/python${VERABI}.exe|#!/usr/bin/env python${_pybasever}.exe|" "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/config-${VERABI}/python-config.py

    # fix permissions
    find ${pkgdir}/usr/${_arch} -type f \( -name "*.dll" -o -name "*.exe" \) | xargs chmod 0755
    
    # replace paths in sysconfig
    sed -i "s|${pkgdir}/usr/${_arch}|/usr/${_arch}|g" \
    "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/_sysconfigdata*.py \
    "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/smtpd.py
    
    # Doing sysconfig relocatable as patch 0000 do it only partially
    sed -e "s/sys.prefix + //g" \
      -e "s/'\/bin'/sys.prefix + '\/bin'/g" \
      -e "s/'\/include\//sys.prefix + '\/include\//g" \
      -e "s/'\/include /sys.prefix + '\/include /g" \
      -e "s/'\/include'/sys.prefix + '\/include'/g" \
      -e "s/ \/include\// ' + sys.prefix + '\/include\//g" \
      -e "s/ \/include / ' + sys.prefix + '\/include /g" \
      -e "s/'\/lib\//sys.prefix + '\/lib\//g" \
      -e "s/'\/lib /sys.prefix + '\/lib /g" \
      -e "s/'\/lib'/sys.prefix + '\/lib'/g" \
      -e "s/ \/lib\// ' + sys.prefix + '\/lib\//g" \
      -e "s/ \/lib / ' + sys.prefix + '\/lib /g" \
      -e "s/'\/share\//sys.prefix + '\/share\//g" \
      -e "s/'\/share'/sys.prefix + '\/share'/g" \
      -i "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/_sysconfigdata*.py
    
    # strip executables and libraries
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.exe
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
    
    # install wrappers
    mkdir -p ${pkgdir}/usr/bin
    install -m755 ${_arch}-python${_pybasever} "${pkgdir}"/usr/bin/${_arch}-python${_pybasever}
    install -m755 ${_arch}-python3 "${pkgdir}"/usr/bin/${_arch}-python3
    install -m755 ${_arch}-python "${pkgdir}"/usr/bin/${_arch}-python
    
    # create relative symlinks
    ln -s "python3.exe" "${pkgdir}/usr/${_arch}/bin/python.exe"
    ln -s "python3w.exe" "${pkgdir}/usr/${_arch}/bin/pythonw.exe"
    ln -s "python3-config" "${pkgdir}/usr/${_arch}/bin/python-config"
    ln -s "idle3" "${pkgdir}/usr/${_arch}/bin/idle"
    ln -s "pydoc3" "${pkgdir}/usr/${_arch}/bin/pydoc"
  done
}
