# Maintainer: Jonas Witschel <diabonas@archlinux.org>
pkgname=thedarkmod-bin
pkgver=2.07
pkgrel=1
pkgdesc='First person stealth game'
arch=('x86_64')
url='https://www.thedarkmod.com/main/'
license=('Boost' 'BSD' 'CCPL' 'GPL' 'GPL3' 'custom:curl')
depends=('gcc-libs' 'libxxf86vm' 'openal')
makedepends=('imagemagick')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
install="$pkgname.install"

# Choose one of the mirrors from http://mirrors.thedarkmod.com/tdm_mirrors.txt
_mirror='https://darkmod.taaaki.za.net/release'

# The list of game assets can be obtained by running the command
# curl -s "$_mirror/crc_info.txt" | awk -F ' |]' '/\[File .*pk4\]/ { print "         '\''" $2 "'\''" }'
_assets=('fms/newjob/newjob.pk4'
         'fms/stlucia/stlucia.pk4'
         'fms/training_mission/training_mission.pk4'
         'tdm_ai_animals01.pk4'
         'tdm_ai_base01.pk4'
         'tdm_ai_humanoid_builders01.pk4'
         'tdm_ai_humanoid_females01.pk4'
         'tdm_ai_humanoid_guards01.pk4'
         'tdm_ai_humanoid_heads01.pk4'
         'tdm_ai_humanoid_mages01.pk4'
         'tdm_ai_humanoid_nobles01.pk4'
         'tdm_ai_humanoid_pagans01.pk4'
         'tdm_ai_humanoid_townsfolk01.pk4'
         'tdm_ai_humanoid_undead01.pk4'
         'tdm_ai_monsters_spiders01.pk4'
         'tdm_ai_steambots01.pk4'
         'tdm_base01.pk4'
         'tdm_defs01.pk4'
         'tdm_env01.pk4'
         'tdm_fonts01.pk4'
         'tdm_gui01.pk4'
         'tdm_gui_credits01.pk4'
         'tdm_models01.pk4'
         'tdm_models02.pk4'
         'tdm_models_decls01.pk4'
         'tdm_player01.pk4'
         'tdm_prefabs01.pk4'
         'tdm_sound_ambient01.pk4'
         'tdm_sound_ambient02.pk4'
         'tdm_sound_ambient03.pk4'
         'tdm_sound_ambient_decls01.pk4'
         'tdm_sound_sfx01.pk4'
         'tdm_sound_sfx02.pk4'
         'tdm_sound_vocals01.pk4'
         'tdm_sound_vocals02.pk4'
         'tdm_sound_vocals03.pk4'
         'tdm_sound_vocals04.pk4'
         'tdm_sound_vocals05.pk4'
         'tdm_sound_vocals06.pk4'
         'tdm_sound_vocals07.pk4'
         'tdm_sound_vocals_decls01.pk4'
         'tdm_standalone.pk4'
         'tdm_textures_base01.pk4'
         'tdm_textures_carpet01.pk4'
         'tdm_textures_decals01.pk4'
         'tdm_textures_door01.pk4'
         'tdm_textures_fabric01.pk4'
         'tdm_textures_glass01.pk4'
         'tdm_textures_metal01.pk4'
         'tdm_textures_nature01.pk4'
         'tdm_textures_other01.pk4'
         'tdm_textures_paint_paper01.pk4'
         'tdm_textures_plaster01.pk4'
         'tdm_textures_roof01.pk4'
         'tdm_textures_sfx01.pk4'
         'tdm_textures_stone_brick01.pk4'
         'tdm_textures_stone_cobblestones01.pk4'
         'tdm_textures_stone_flat01.pk4'
         'tdm_textures_stone_natural01.pk4'
         'tdm_textures_stone_sculpted01.pk4'
         'tdm_textures_window01.pk4'
         'tdm_textures_wood01.pk4')

source=("$_mirror/tdm_shared_stuff.zip"
        "${_assets[@]/#/$_mirror/}"
        'thedarkmod.sh'
        'thedarkmod.desktop')
noextract=("${_assets[@]##*/}")
sha512sums=('e3afacae65a6452fb0cc0f4eff211f14e141534e595dc59ee0069395ab83df7a64330acecdad6d8cb9a81e7cd4416dd0d0c1532d8264e9e055e26b756c51a2d2'
            '15acf92756fe5b8acb6b260f4d1a8ee14ef7937e7364335f39a7a0a262c758bd57126a482ac4e6fc7b8e26e3aefbf31fdbbaa55f6561318dcb492adfbd7082cf'
            'bad1714575d422250fa8d138b636a9091670446f537539849765543b8f53f2bb9e1420a5c669ad2a82c8526744eb673d8a0887351a99e73dff495416554abf9b'
            '260226abe7ca642275dd22ed1179a9bc9967ec03d457b26e0bbfa092fe4161c03aab7d76b7beeb3add4aafa62b5f9f05c5be2d94c1922667e9123df5ef12ac5a'
            'fb089c3af2bd71fc4746eb9e7219dc85e7c864bc08de47ff419606633dd41fcd80b12eaaffee6df3930179264cbde0374c8b2cf1b98d3323ae544e8a73e2039f'
            '83197c2a76d0646883b2af0a5e5101b0985135725605bcb89a1355394b3dc83384c7add4709e5e37aa627a5f937df7dcb4e85d1360fce5fdb731989813909b63'
            '0563e006c75c4dee16b80ec6af72634f876345471d6fe91dfd67bdc3bd7448d9d5fc692011cdc0e85196a7ec419cba520f1198bdfce03161b128f8be52f47809'
            'b65f70caedccd069d30859ca1f25b0a4ea2239b29763ac6c4157b90751f2f8a8004ff06d5756f55f176a73fbdb390d7a64bafab0b012c6ecfeda32715a2c5b3f'
            '798390883fcd073e861ac78b3c13ed2940e50485567d72c10b2066ed8cd111c18f25e3a221de51fa11a4f36c004c4898d7dc81e1eab29b04d5e30724f27e297a'
            '3cf46ff205d1ba32894f213c704701c685949391cf5f396bde4d460fe41bae05bc80e2b1d0d730a3fef8677f2638b6b66ff968d515ce3e5945df57c5e69186aa'
            '321961c0a64ef44cc40b9688c38363218c2f97e85fe607487874f0301cf38763850c1b1cb696d488f71236aec64ba31c7850306b70efdb3e287d5f5e84eb29e2'
            '6167a269a0111b2e24e397f9fa8396a0f22e62a0e7b7bd7ae6f335ffbf5112391236d0adebb77318395f6c86e32d44fb9a31344844ea5d4fbb06e00ffef03573'
            'c7cf4b9f64194e5beeec0f5d4fc141c8c9d7e6d34c04ca439bf4345794cf2d1cdae160e097e81f2c6b36ff3800df1ed3c1307efa0ac835761baa362eabae06af'
            '2806f25699a06aa9095275cd8f1ea4be52ef80bcc35a3e1b9a0a2cf2e55e015c1e434de8058132d8281a3108d0e1eea2252b6c2341e5eeb1fdca672f9ce6cf7f'
            'c212787184d28384f5a9345c4f24fbe28164efcc7e875b93152a03d5bf4b9202fde81f4bd4bf36d46a1334944c140cfb058296041f6ebc9ef300c0df5671e9cb'
            '8a9f28e6d42eef270cbd9a05595330ba01c0e48d390efe05172f7e3c90d16efb37db03051d4fe990364d8dc40c8710afb7b7ffd20cbfd071daceeabe21a4d0e5'
            '03b15b5836ea48697bd5fcea2f15e412fb2ab21699f6a24db9853860499258ea577ca8c0fdb850338caaa121f8a2d6e76a1393b6480858517d6326c96d3519e0'
            'f8381790f1ee218fbd8db4634729143bc5c3f969a0b973b12e8b4a8334e544a4954bd4bbdd30e439e049653533a1d91053dc94430d062a98d438a6338c6515b5'
            'a50f259f83611d59dffb64c538d66ba536be1185e5deb73afc7b433db2ec75d407fce4be33e520fd618bf9e7c178dd3e214a785a457255ea983b400d74d54221'
            '0465f54e8fb4a373aac8aa4643da3473056171f0f441a88761e8c4cf4405babcbb5ac281d47a96af1bc8ad109507d6b110de84b3bdbc3b82c96b6842af6ef46a'
            'df7c9e3f7cce11231bb7182692ef5c6364bf0231ffd63da2e07c4874bb6fa34d2365a909e5dc9fb08d61acf64fa3b32788f0e0dae731542692d08106dbe74223'
            'fdda60e6e02bf21aeab800445d175133d87bb30a5cf5a07996377f4da83646644e9678613b61eb764c6e08a3c965c5510c8b3e4f2a544308f7a2eb4c6c2ecbbf'
            '7e2b226fb352dc6f08f6a473804bb13e8ce8ab8fc46c1368b74daf93642b6ab76e7aea308dd24714092948784d0800d2b3becf9223f48c797a14a3542028b01e'
            '30f97b1ec1180e360d1ac3ab2e326996d2c12d4561d0f9d495fb4729fcadda5629aaf5208407e83e9ff80561e581f9e86437c48155b41f41699c917781e17894'
            'e062f43f5461f09d31b7025c9f60e4454e17c9b135ba00fef2be96957bbe08afb36ba945380ad69157daa34a298168edc5130f4ca2be32cc50f00b844a210e6e'
            'e266e2ba291fa34b2bba4b1bcfaf251ca9daaa7665f7578d40462b5f0b24fae857f86a9c299c6b3968a6b65c84d77c9b9cc7f257d1901302bec5c5d530407464'
            '7ad08963c9fcf12ac3840b747ccdeb3be692b430d055f649827030c2cb2e5ca61a3f8695f8ff39ad6f08cfc5b24bef1223e8b9ecbc55b2b39c3d8244e5fceca2'
            'a4bee31aed54b1b8305ec4fe9c4069a52676ca25c2cbbf4c0d474780b89cc563d1fa578c274bf9fb68dc444acee7763f2bcad07ce5a5218e7b062da8d5b1f3f4'
            'df679d72ca6a80696e501d7e0a9c49f5d4e69e5a0739b353da662d702df10b9f540e1b3eeb6b6d506be425c48d7a39a3caf3fac2124c59ebca54b9add9f398dd'
            '239eedb88ba19f4fe2876919b9967d190191a0ba09d6e0c0b79d47fc3e3bbd4bf82e850776c008309cadca5275dc082977eb11846a8de33d571661c9686b9c0d'
            '75faf28b2cb7aabadf29929f0cb52e5fce6a9347276d625fed67cc952dd627557ffd5ac1c536223588599fd135cf823e1b3da08a3e45858cfb80122f4e0fc79c'
            'ad533d6a3bf009732e0ea373afaa1642910b1021abb5d5692649bf59d6be861649d09220743927938fc0e6bafe50fa125bd003a05051878d8a1a198a418aba46'
            '286a309e15c68a4b237cc4cd6e9409a5a30b8ca9eb9cc88f718854a5216eaff0470d29a2724a4eeab627af2a2fcc79d4e992fd42ccd89de5e8fbca74553ac84e'
            'bcdb46f26f36da527c70245362766d13cfba30d9e24e9e7205e21de35eff16c036d9fd10634b952a1a18518bbb26bcfd8bad077adc6fd65df7de7c1de0efe111'
            '497537380e5b4cb51bcfd06c6a56d7f9cab1a050e637b708515ca1020f168b8d173a602c419fd1198c45007b7fca47ce8e18effea6e8115bcb78817ee88a7122'
            '07de8ed2127d4f0c341698e557871c22194370cf35caa9f29ad537f4235d8947b754c97535a7cbca4fa48a0202cd0192c4479f69353272450d133cf717e712ea'
            '341a381e0acbea1e0a1a5ebce20c57bd27994a995eb8c1a8aec687eac94a1564f2a48566341bc796a22f44476b1153692c6e530bb753c64d6fc37043b0c62e74'
            '795a6e55b8337b68b1dc6dc5947974b0fc72d1948c83e117e069e8f1fb4759e49e96e7cabef93eac2b96d191cd56ad1beb50a9831f50f68967df9a0ba7849e19'
            '9063afb240e9421c1cea3f21b40bc07c3211fc7d6b8ca79857d78529b8f0af813e65418624da09f1c11baacb9842131bd710937b6dde18e6aeb3de36662a2016'
            'ffce4346c109529996b1a1da975157d8be8fbcb58a7d38df518241b2a202ded17344283aa987232dd38f4a3daf4b3a40f1eb65fd798d6f992ffa86fe95b7515a'
            '4ac6e740c9d4bedb206279fdd5888b8033e77e28ed4164b6be7864835d5d6a32fa684e97a7649ceb41f689654d90578fb008c613939f46639953521566dbe412'
            '51e24381359a16abd693ae67055ca56b849b858496f6beeeee168e4f89c8de4bf4d36de4735184ebf642ebdd1060342dce814f48b4d3e2c0d9b624960ed25369'
            'a5c679932e59f3bf413716d6d1e98d7e9ee6da6ba7aa0bac0bebc24e0348c2fb96046d26ad6ba4b88c8aa6874b5ef991e467d44776b8455b049de35d4f514803'
            '4ea07e0c9439b7f9db892f62c0f4df0d55f82b0756e9a79816e2040b14a25d8b5512030f3fa4e4f9ea3a8c4f5cb8a7d60b81b9860b4e607bee9484c84f31fd3f'
            'c31c1cb88839ecbfa599a6d7692fa0a12a4cf8a3c7daac39fc43f48084714d75d9f89fb42f8272500c661dc9c026817aadb1a75ff42fd24c3a618cd9beec1398'
            'b2be62232b6ce257bc8cbc9ff03edbdb32c7fa3dd69827be633f305447f76e3f5fd6a4a2887cea5c9c30eaa551b1554a0f7791ea2bf2843de77fd0a39b50f375'
            'ac485d99701d0ba640318ddccc9e3b8662fbae1a211792fff3e0f4cc09af5c78fdb966231e6b1f8bb99e1fa2e630c5b81855baeef2ab1a23d0393bf80b261e42'
            '10e7fea34f987c4b8c07211af4847cdebc413ac8a9768cd2cb54e2007656644476b3a360bc9d02ce46dc21d7b301bbe45272de1d88ee6a51e994a2eb062e0403'
            '110b2295314cf7abafc0432ba06f84e389db2841ec561ce54409c0fc2e72025b569e3032abe0aee9af49c3d4d2dfba8fdb536ddf426df1169ca5773cb687343f'
            '1aa60966ba375fa6ed98eff138c4af859f4e32a30abedcac742903f79baed0f46ee47c2861130ae2916f44b5a5654ce2cb80e3c29497dc4a4b50da6792aeea90'
            '829a16b8e9b7ce8aac2c1645fa751853cad5fe3f42c2b69b5ce6b32e13443e19c8bd5fc4e3f11530ea6faffcd564b5664d31e3b131b840be712a37d96a06454a'
            '5c9d7a7ed9673945f6786dfd9b154fa4c7b94a6521cb77868e98370d2f82f2f60316a97a08c5ecc3085a108895d9ff252d2b5bf5ff1beaa66f2717220d311353'
            'e69758b70827a44b9b67c5dd2724c0130ab941ed2638cd35cbed219f150b8dd08dffdc768c6fa42918b413958614285ee0aefaf5b5cf9d5a476a5a918e81e7cb'
            'b352083b75b9fc20fda2c8fb53b5ee285cc06034d02fb4234ee8669817734a5cb3f8dc4f15ed49bc41f2a6a50a3e32dc461e5ddb4135894e2606671a62fb5ce4'
            '6cf7361b99399929a52ac85fe0646845fcf90dada6e0ee0aef0ca653833af55bd2ee048d15f9489178abcda319bf407b1af795751b7e5de7e7d1caf83c07dec4'
            '4f4867cdad754abe5b8110630a8a5c4b5a1ff114e28a3522e2df20834070200a72872207fc2e8cc08a73dd6c3c455343ad5736c23c2e7c8b799593f55bafb2bb'
            'fbf7bc2dd8ae76c2dad99ad8b3897046d803f62ad6ccac956a31c152c5b4d36cc5c67e805c10835238e50f919eeb80dc8cb48f2ffa7c026e58876a0f4751ed69'
            '1a591debd1d2a2f7cdb6bdf0dc622d5339a744a48e1dcbc6553e0b1558bda6016156869850b085cf26c6f9c3fac5b838231e6597b4cc1bc4a202dc0f55feb412'
            'de309e377791668345e86e624c828db39f59e348b09b13094fe4d58a05e56d54a14eb6c245e6d6220741c0386e666e460b82cc31e46d51bea89dbe87411908d7'
            '377dfac252aba07eb18dd4258eee36a353608330de3fa0c52f1dc3e00da86322cfc7623ca6ebc5b91e68a5ef6a1b1dea0e9dac9ffce8a1cbed45215c87fbfcdd'
            '6bd8fcfb9e6d005b54efbc3e9ec2eeec90d53c3fdb47f785abfd2cc1aa32c505ebfc9d886a258999dc0c5d6220b6fa826c71906d4df790037a405aaf15d3eb14'
            '3e908f68f3e703ad54e0653ba1e75736da4d9c6e2eedcd62c72e432461ed2b3208324e9aee8c5bd2253e228bb75b3e6fff32030c4ee7401e518ebd3179108b61'
            '98baa189ece80011ae567d9151c01afa735692c1091f18bd7721baf77589afee8f912fb8e4a674fb036f46f326c064721c48c24086d44f680447d7bbef9ffccc'
            '6ae720990201a314f72b0ff5fb686a7088d456ada7e1090d770e23d709c314c275405b4c73256682ee11fd6c73283257e832febb6add3a50f1b50183df1df0e6'
            '48927cfb6bf83e427aec47f1cd549c6730d1cbeecec82b7555df51a2ba57599c7abe0120ab51bc9195146abad9450c5701b7047b32cc342f7545b4221d2f4f8e')

prepare() {
	convert TDM_icon.ico thedarkmod.png
}

package() {
	install -Dm755 thedarkmod.x64 -t "$pkgdir/opt/thedarkmod"
	for _asset in "${_assets[@]}"
	do
		install -Dm644 "${_asset##*/}" "$pkgdir/opt/thedarkmod/$_asset"
	done
	install -Dm644 LICENSE.txt -t "$pkgdir/usr/share/licenses/$pkgname"

	install -Dm755 thedarkmod.sh "$pkgdir/usr/bin/thedarkmod"
	install -Dm644 thedarkmod.png -t "$pkgdir/usr/share/pixmaps"
	install -Dm644 thedarkmod.desktop -t "$pkgdir/usr/share/applications"

	# Users must be able to create files in the game directory to save games,
	# install new missions etc, cf. https://bugs.thedarkmod.com/view.php?id=3567
	chown root:games "$pkgdir"/opt/thedarkmod/{,fms,fms/newjob,fms/stlucia,fms/training_mission}
	chmod g+w "$pkgdir"/opt/thedarkmod/{,fms,fms/newjob,fms/stlucia,fms/training_mission}
}
